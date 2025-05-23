(() => {
  // src/rebrand/ca_sg_tabs/js/constants.es6
  var constants_default = {
    /**
     * @summary Event that triggers the initialization
     */
    INIT_EVENT_NAME: "com.consumeraffairs.ca_sg_tabs.init",
    SWITCH_EVENT_NAME: "com.consumeraffairs.ca_sg_tabs.switch",
    CONTAINER: ".js-tabs"
  };

  // src/rebrand/ca_sg_tabs/js/tabs.es6
  var Tabs = class _Tabs {
    /**
     * Selectors used on the component
     * @prop {String} container - Tab wrapped container
     * @prop {String} link - Tab link
     * @prop {String} tabs - Tab content
     * @prop {String} open - Tab menu open action
     * @prop {String} close - Tab menu close action
     * @returns {Object}
     * @constant
     */
    static get SELECTORS() {
      return {
        link: ".js-tabs-link",
        tabs: ".js-tabs-tab",
        open: ".js-tabs-open",
        close: ".js-tabs-close"
      };
    }
    /**
     * Classes used on the component
     * @prop {String} tabOpened - When such a tab is opened
     * @prop {String} linkActive - When such a link is activated
     * @prop {String} tabVisible - When such a tab is showed
     * @returns {Object}
     * @constant
     */
    static get CLASSES() {
      return {
        tabOpened: "tabs--opened",
        linkActive: "tabs-nav__lnk--active",
        tabVisible: "tabs-cnt__tab--visible"
      };
    }
    /**
     * Data attribute to set the active tab
     * @type {String}
     * @constant
     */
    static get ACTIVE_TAB_DATA_ATTRIBUTE() {
      return "data-tab-active";
    }
    /**
     * Data attribute to set the visible tab
     * @type {String}
     * @constant
     */
    static get VISIBLE_TAB_DATA_ATTRIBUTE() {
      return "data-tab-visible";
    }
    /**
     * Data attribute to set the opened tab
     * @type {String}
     * @constant
     */
    static get OPENED_TAB_DATA_ATTRIBUTE() {
      return "data-tab-opened";
    }
    /**
     * Data attribute to set target tab
     * @type {String}
     * @constant
     */
    static get TARGET_DATA_ATTRIBUTE() {
      return "data-tabs-target";
    }
    /**
     * Data attribute to set the target container element
     * @type {String}
     * @constant
     */
    static get CONTAINER_ELEMENT_DATA_ATTRIBUTE() {
      return "data-tabs-container-element";
    }
    /**
     * Data attribute to get the links from both elements
     * (data-tabs-container-element and the tabsContainer)
     * @type {String}
     * @constant
     */
    static get CONTAINER_LINKS_BOTH_ELEMENTS_DATA_ATTRIBUTE() {
      return "data-tabs-container-links-both-elements";
    }
    /**
     * Data attribute to set default active tab
     * @type {String}
     * @constant
     */
    static get ACTIVE_TAB_ATTRIBUTE() {
      return "data-tabs-active";
    }
    /**
     * Create a new component
     * - Define overal settings and prepare to execute _init()
     * @constructor
     * @param {Object} element target where TABS that will be created
     */
    constructor(element) {
      if (!element) {
        return;
      }
      this._tabContainer = element;
      this._init();
    }
    /**
     * @method _init
     * @summary Initializes the required procedures to work properly
     * @private
     */
    _init() {
      this._bindElements();
      this._bindEvents();
      this._resolveInitialState();
    }
    /**
     * @method _resolveInitialState
     * @summary Responsible to set up the initial state of component
     * @private
     */
    _resolveInitialState() {
      const tabActive = this._tabContainer.getAttribute(_Tabs.ACTIVE_TAB_ATTRIBUTE) || 0;
      this._currentTab = Number(tabActive);
      this.switchTo(this._currentTab);
    }
    /**
     * @method _bindElements
     * @summary Trigger all required DOM Elements
     * @private
     */
    _bindElements() {
      this._openBtn = this._tabContainer.querySelector(_Tabs.SELECTORS.open);
      this._closeBtn = this._tabContainer.querySelector(_Tabs.SELECTORS.close);
      const containerSelector = this._tabContainer.getAttribute(_Tabs.CONTAINER_ELEMENT_DATA_ATTRIBUTE);
      this._tabLinks = this._tabContainer.querySelectorAll(_Tabs.SELECTORS.link);
      if (containerSelector) {
        const containerElement = document.querySelector(containerSelector);
        this._tabTabs = containerElement.querySelectorAll(_Tabs.SELECTORS.tabs);
        const useLinksBothEls = this._tabContainer.hasAttribute(_Tabs.CONTAINER_LINKS_BOTH_ELEMENTS_DATA_ATTRIBUTE);
        if (useLinksBothEls) {
          const containerLinks = containerElement.querySelectorAll(_Tabs.SELECTORS.link);
          this._tabLinks = [...this._tabLinks, ...containerLinks];
        }
        return;
      }
      this._tabTabs = this._tabContainer.querySelectorAll(_Tabs.SELECTORS.tabs);
    }
    /**
     * @method _bindEvents
     * @summary Add all required events into the DOM
     * @private
     */
    _bindEvents() {
      this._tabLinks.forEach((linkElement) => linkElement.addEventListener("click", this._clickHandler.bind(this)));
      if (this._openBtn && this._closeBtn) {
        this._openBtn.addEventListener("click", this._toggleTab.bind(this));
        this._closeBtn.addEventListener("click", this._toggleTab.bind(this));
      }
    }
    /**
     * @method _clickHandler
     * @summary Handle the action when a tab has clicked
     * @param {Event} event - Instance of event generated due click action
     * @private
     */
    _clickHandler(event) {
      const linkClicked = event.currentTarget;
      const tabTarget = linkClicked.getAttribute(_Tabs.TARGET_DATA_ATTRIBUTE);
      if (!tabTarget) {
        return false;
      }
      event.preventDefault();
      const tabNumber = Number(tabTarget);
      this.switchTo(tabNumber);
      this._tabContainer.dispatchEvent(new CustomEvent(constants_default.SWITCH_EVENT_NAME, { detail: { tabNumber } }));
      return true;
    }
    /**
     * @method _toggleTab
     * @summary Responsible to handle the tab state (open/close)
     * @private
     */
    _toggleTab() {
      this._tabContainer.classList.toggle(_Tabs.CLASSES.tabOpened);
      this._tabContainer.toggleAttribute(_Tabs.OPENED_TAB_DATA_ATTRIBUTE);
    }
    /**
     * @method _displayTab
     * @summary Responsible to show the right content tab
     * @param {Number} tabTarget - Target number to handle the tab
     * @private
     */
    _displayTab(tabTarget) {
      this._tabTabs.forEach((tab, index) => {
        const tabsTargetAttr = tab.getAttribute(_Tabs.TARGET_DATA_ATTRIBUTE);
        if (tabsTargetAttr === String(tabTarget) || index === tabTarget) {
          tab.classList.add(_Tabs.CLASSES.tabVisible);
          tab.setAttribute(_Tabs.VISIBLE_TAB_DATA_ATTRIBUTE, "");
        } else {
          tab.classList.remove(_Tabs.CLASSES.tabVisible);
          tab.removeAttribute(_Tabs.VISIBLE_TAB_DATA_ATTRIBUTE);
        }
      });
    }
    /**
     * @method _displayLink
     * @summary Repsonsible to highlight the active link
     * @param {Number} tabTarget - Target number to handle the link
     * @private
     */
    _displayLink(tabTarget) {
      this._tabLinks.forEach((linkItem) => {
        const target = Number(linkItem.getAttribute(_Tabs.TARGET_DATA_ATTRIBUTE));
        const action = tabTarget === target ? "add" : "remove";
        const attributeAction = tabTarget === target ? "setAttribute" : "removeAttribute";
        linkItem.classList[action](_Tabs.CLASSES.linkActive);
        linkItem[attributeAction](_Tabs.ACTIVE_TAB_DATA_ATTRIBUTE, "");
      });
    }
    /**
     * @method _isValidTab
     * @summary Repsonsible to verify if such a number is in of tab range
     * @param {Number} tabTarget - Number to be analysed
     * @return {Boolean} Binary response
     * @private
     */
    _isValidTab(tabTarget) {
      const rangeVerification = tabTarget >= 0 === tabTarget < this._tabTabs.length;
      if (rangeVerification && Number.isInteger(tabTarget)) {
        return true;
      }
      console.warn(`tabTarget (${tabTarget}): Is out of tab range.`);
      return false;
    }
    /**
     * @method switchTo
     * @summary Shows link highlight properly
     * @param {Number} tabTarget - Target number to be handled whole Tab component
     * @public
     */
    switchTo(tabTarget) {
      if (this._isValidTab(tabTarget)) {
        this._displayTab(tabTarget);
        this._displayLink(tabTarget);
        this._currentTab = tabTarget;
      }
    }
  };

  // src/rebrand/ca_sg_tabs/js/main.es6
  var init = () => {
    const elements = document.querySelectorAll(constants_default.CONTAINER);
    elements.forEach((element) => {
      element.tabs = new Tabs(element);
    });
  };
  window.addEventListener(constants_default.INIT_EVENT_NAME, () => init());
  init();
})();
//# sourceMappingURL=/static/js/ca_sg_tabs.js.map
