(() => {
  // src/rebrand/ca_sg_carousel/js/constants.es6
  var constants_default = {
    /**
     * @summary Event that triggers the initialization
     */
    INIT_EVENT_NAME: "com.consumeraffairs.styleguide.carousel.init",
    /**
     * @summary Event fired on a step has been changed
     */
    STEP_EVENT: "com.consumeraffairs.styleguide.carousel.step",
    /**
     * @summary Event fired when the step is changing
     */
    STEP_CHANGE_EVENT: "com.consumeraffairs.styleguide.carousel.stepChange",
    /**
     * @summary Data attribute to be used by the IntersectionObserver to determine
     * when a step is visible
     */
    DATA_OBSERVER_THRESHOLD: "data-carousel-observer-threshold",
    /**
     * @summary Carousel dragging class
     */
    CAROUSEL_DRAGGING_CLASS: "ca-carousel__wrapper--dragging",
    /**
     * @summary Steps of container step selector
     */
    STEP: ".js-step",
    /**
     * @summary Step activated class
     */
    STEP_ACTIVATED: "ca-carousel__step--active",
    /**
     * @summary Current step class to be apllied in steps of PROGRESS_BAR
     */
    PROGRESS_BAR_CURRENT_STEP: "progress-bar--current",
    /**
     * @summary Wrapper/Group of steps selector
     */
    STEP_CONTAINER: ".js-step-container",
    /**
     * @summary No transition class
     */
    NO_TRANSITION_CLASS: "js-no-transition",
    /**
     * @summary No transition class
     */
    NO_SCROLL_CLASS: "js-no-scroll",
    /**
     * @summary Previous button selector
     */
    PREV: ".js-prev-step",
    /**
     * @summary Next button selector
     */
    NEXT: ".js-next-step",
    /**
     * @summary Last button selector
     */
    LAST: ".js-last-step",
    /**
     * @summary Last button selector
     */
    FIRST: ".js-first-step",
    /**
     * @summary Data attribute which enables the auto-scroll to the carousel on every step jump.
     * The attribute should contain the smooth scroller configuration object.
     */
    DATA_SMOOTHSCROLLER_OPTIONS: "data-scroll-options",
    /**
     * @summary Data attribute which enables the auto-resize of the caruousel to the current step height
     */
    AUTO_RESIZE_ATTRIBUTE: "data-carousel-resize",
    /**
    * @summary Attribute used to receive the data of the tracked action
    */
    EVENT_DATA_ATTR: "data-uapi-carousel",
    /**
    * @summary Attribute used to set the name of the tracked action
    */
    EVENT_NAME_ATTR: "data-uapi-carousel-name",
    /**
     * @summary Data attribute which ties Carousel and Progress Bar
     */
    DATA_PROGRESS_BAR: "data-carousel-progress",
    /**
     * @summary Data attribute to set automatically the width of wrapper carousel
     */
    DATA_WIDTH: "data-carousel-width",
    /**
     * @summary Data attribute to set carousel loop
     */
    DATA_LOOP: "data-carousel-loop",
    /**
     * @summary Data attribute to set carousel autoplay
     */
    DATA_AUTOPLAY: "data-carousel-autoplay",
    /**
     * @summary Data attribute to set carousel draggable
     */
    DATA_DRAGGABLE: "data-carousel-draggable",
    /**
     * @summary Data attribute to set carousel per page functionality
     */
    DATA_PER_PAGE: "data-carousel-per-page",
    /**
     * @summary Data attribute that you use to show how many pixels of the previous step
     */
    DATA_PREVIOUS_STEP_PX: "data-carousel-previous-step-px",
    /**
     * @summary Data attribute that shows the calculated total pages
     */
    DATA_TOTAL_PAGES: "data-carousel-total-pages",
    /**
     * @summary Data attribute that shows the current page number
     */
    DATA_CURRENT_PAGE: "data-carousel-current-page",
    /**
     * @summary Data attribute to set title of the step
     */
    DATA_STEP_TITLE: "data-carousel-title",
    /**
     * @summary Carousel container selector
     */
    CAROUSEL_CONTAINER: ".js-carousel",
    /**
     * @summary Step visible class
     */
    STEP_VISIBLE: "ca-carousel__step--visible",
    /**
     * @summary Step swiping percentage
     */
    STEP_DRAGGING_BREAKPOINT_PERCENTAGE: 10
  };

  // src/rebrand/ca_sg_scrollable_carousel/js/constants.es6
  var constants_default2 = {
    /**
     * @summary Event that triggers the initialization
     */
    INIT_EVENT_NAME: "com.consumeraffairs.styleguide.carouselScroll.init",
    /**
     * @summary Event fired on a step has been changed
     */
    STEP_EVENT: "com.consumeraffairs.styleguide.carouselScroll.step",
    /**
     * @summary Event fired when the step is changing
     */
    STEP_CHANGE_EVENT: "com.consumeraffairs.styleguide.carouselScroll.stepChange",
    /**
     * @summary Wrapper/Group of steps selector
     */
    STEP_CONTAINER: ".js-scroll-step-container",
    /**
     * @summary Steps of container step selector
     */
    STEP: ".js-scroll-step",
    /**
     * @summary Step activated class
     */
    STEP_ACTIVATED: "ca-carousel__step--active",
    /**
     * @summary Step visible class
     */
    STEP_VISIBLE: "ca-carousel__step--visible",
    /**
     * @summary Previous button selector
     */
    PREV: ".js-scroll-prev-step",
    /**
     * @summary Next button selector
     */
    NEXT: ".js-scroll-next-step",
    /**
     * @summary Last button selector
     */
    LAST: ".js-scroll-last-step",
    /**
     * @summary Last button selector
     */
    FIRST: ".js-scroll-first-step",
    /**
    * @summary Attribute used to receive the data of the tracked action
    */
    EVENT_DATA_ATTR: "data-uapi-carousel",
    /**
    * @summary Attribute used to set the name of the tracked action
    */
    EVENT_NAME_ATTR: "data-uapi-carousel-name",
    /**
     * @summary Data attribute to be used by the IntersectionObserver to determine
     * when a step is visible
     */
    DATA_OBSERVER_THRESHOLD: "data-carousel-observer-threshold",
    /**
     * @summary Data attribute to set carousel autoplay
     */
    DATA_AUTOPLAY: "data-carousel-autoplay",
    /**
     * @summary Data attribute to set carousel per page functionality
     */
    DATA_PER_PAGE: "data-carousel-per-page",
    /**
     * @summary Data attribute that shows the calculated total pages
     */
    DATA_TOTAL_PAGES: "data-carousel-total-pages",
    /**
     * @summary Data attribute that shows the current page number
     */
    DATA_CURRENT_PAGE: "data-carousel-current-page",
    /**
     * @summary Carousel container selector
     */
    CAROUSEL_CONTAINER: ".js-scroll-carousel"
  };

  // src/rebrand/ca_sg_swipeable_cards/js/constants.es6
  var constants_default3 = {
    /**
     * @summary Event that triggers the initialization
     */
    INIT_EVENT_NAME: "com.consumeraffairs.styleguide.swipeable.cards.init",
    /**
     * @summary Event that sends the userDB data
     */
    UAPI_CUSTOM_EVENT: "com.consumeraffairs.uapi",
    /**
     * @summary Steps inside container step selector
     */
    STEP: ".js-step",
    /**
     * @summary Wrapper/Group of steps selector
     */
    STEP_CONTAINER: ".js-swipeable-cards-container",
    /**
     * @summary Step activated class
     */
    STEP_ACTIVE: "js-active-card",
    /**
     * @summary Step dragging class
     */
    STEP_DRAGGING: "js-dragging-card",
    /**
     * @summary Next step class
     */
    STEP_NEXT: "js-next-card",
    /**
     * @summary Previous step class
     */
    STEP_PREV: "js-prev-card",
    /**
     * @summary No transition class
     */
    NO_SCROLL_CLASS: "js-no-scroll",
    /**
     * @summary Data attribute for the userBD element name
     */
    DATA_USERDB_ELEMENT_NAME: "data-uapi-swipeable-name"
  };

  // src/rebrand/ca_sg_carousel_paginator/js/constants.es6
  var constants_default4 = {
    /**
     * @summary Data attribute that is going to bind the paginator with the carousel
     * @type {String}
     * @constant
     */
    DATA_CAROUSEL_PAGINATOR_ID: "data-carousel-paginator-id",
    /**
     * @summary Data attribute that will hold the page for that specific element
     * @type {String}
     * @constant
     */
    DATA_CAROUSEL_PAGE: "data-carousel-page",
    /**
     * @summary Data attribute that will make the script not add click event listeners to the page elements
     * @type {String}
     * @constant
     */
    DATA_CAROUSEL_PAGINATOR_INDICATOR_ONLY: "data-carousel-paginator-indicator-only",
    /**
     * @summary Data attribute that indicated the number of carousel pages
     * @type {String}
     * @constant
     */
    DATA_CAROUSEL_PAGINATOR_TOTAL_PAGES: "data-carousel-paginator-total-pages",
    /**
     * @summary Carousel paginator wrapper selector to add attributes
     * @type {String}
     * @constant
     */
    PAGINATOR_WRAPPER_SELECTOR: ".js-carousel-paginator-wrapper",
    /**
     * @summary Carousel paginator container selector
     * @type {String}
     * @constant
     */
    PAGINATOR_CONTAINER_SELECTOR: ".js-carousel-paginator",
    /**
     * @summary Data attribute to set the active page
     * @type {String}
     * @constant
     */
    DATA_CAROUSEL_ACTIVE_PAGE: "data-carousel-active-page",
    /**
     * @summary Event fired for the carousel paginator
     * @type {String}
     * @constant
     */
    PAGINATOR_EVENT: "com.consumeraffairs.styleguide.carousel.paginator",
    /**
     * @summary Event listened that could be called after each page change
     * @type {String}
     * @constant
     */
    PAGINATOR_CHANGE_EVENT: "com.consumeraffairs.styleguide.carousel.paginatorChange",
    /**
     * @summary Initializes the carousel paginator script on demand
     * @type {String}
     * @constant
     */
    INIT_EVENT_NAME: "com.consumeraffairs.styleguide.carouselPaginator.init"
  };

  // src/rebrand/ca_sg_carousel_paginator/js/carousel-paginator.es6
  var CarouselPaginator = class {
    /**
     * @constructs
     * @param {HTMLElement} element - Element that has the
     * DATA_CAROUSEL_PAGINATOR_ID attribute, should be the container
     */
    constructor(element) {
      this._paginatorContainerElement = element;
      if (this._paginatorContainerElement) {
        this._carouselId = this._paginatorContainerElement.getAttribute(constants_default4.DATA_CAROUSEL_PAGINATOR_ID);
        this._isIndicatorOnly = this._paginatorContainerElement.hasAttribute(
          constants_default4.DATA_CAROUSEL_PAGINATOR_INDICATOR_ONLY
        );
        this._carouselElement = document.querySelector(`#${this._carouselId}`);
        this._mainPageElement = this._paginatorContainerElement.querySelector(
          constants_default4.PAGINATOR_CONTAINER_SELECTOR
        );
        if (this._carouselElement && this._mainPageElement) {
          this._stepContainerElement = this._carouselElement.querySelector(
            `${constants_default.STEP_CONTAINER},
                    ${constants_default2.STEP_CONTAINER},
                    ${constants_default3.STEP_CONTAINER}`
          );
          if (this._stepContainerElement) {
            this._init();
          }
        }
      }
    }
    /**
     * @method _init
     * @summary Initializes the CarouselPaginator logic
     * @private
     */
    _init() {
      this._bindMethods();
      this._bindEvents();
      this._initMainElement();
    }
    /**
     * @method _bindMethods
     * @summary Binds the methods that will be used for event listeners to the "this" scope
     * @private
     */
    _bindMethods() {
      this._handlePaginatorEvent = this._handlePaginatorEvent.bind(this);
    }
    /**
     * @method _bindEvents
     * @summary Bind events to elements
     * @private
     */
    _bindEvents() {
      this._stepContainerElement.addEventListener(constants_default4.PAGINATOR_EVENT, this._handlePaginatorEvent);
    }
    /**
     * @method _initMainElement
     * @summary Initializes the main element click event and attribute
     * @description Main element will always be the first page,
     * and the pagination will always have at least one page showing
     * @private
     */
    _initMainElement() {
      this._mainPageElement.setAttribute(constants_default4.DATA_CAROUSEL_PAGE, "0");
      this._addClickToElement(this._mainPageElement, 0);
    }
    /**
     * @method _handlePaginatorEvent
     * @summary Handles the paginator event that will come from the Carousel
     * @description Inside the detail it needs to have the pages attribute
     * which is the total number of pages the Carousel has
     * @param {Event} event - Event from the callback event handler
     * @private
     */
    _handlePaginatorEvent(event) {
      const { pages, activePage } = event.detail || {};
      const paginatorWrapper = this._paginatorContainerElement.closest(constants_default4.PAGINATOR_WRAPPER_SELECTOR);
      if (pages >= 0) {
        this._removeCurrentActivePage();
      }
      if (pages < this._pages) {
        this._removeExtraPages(pages);
      }
      this._pages = pages;
      if (paginatorWrapper) {
        paginatorWrapper.setAttribute(constants_default4.DATA_CAROUSEL_PAGINATOR_TOTAL_PAGES, this._pages);
      }
      this._createPagination();
      this._setActivePage(null, activePage);
    }
    /**
     * @method _removeExtraPages
     * @summary Removes all the extra page elements
     * based on the previous page it was before
     * @description When it's not indicator only, removes the
     * event listener as well before removing the element
     * @param {Number} newPages - New page quantity
     * @private
     */
    _removeExtraPages(newPages) {
      for (let page = this._pages; page >= newPages; page -= 1) {
        const currentElement = this._getPageElement(page);
        if (currentElement) {
          if (!this._isIndicatorOnly) {
            currentElement.removeEventListener("click", (event) => this._handlePageClick(event.target, page));
          }
          currentElement.remove();
        }
      }
    }
    /**
     * @method _addClickToElement
     * @summary Add click to element that you pass in
     * @description The element will handle the page click and aria attributes
     * (when it's not indicator only)
     * @private
     */
    _addClickToElement(element, page) {
      if (!this._isIndicatorOnly) {
        element.addEventListener("click", (event) => this._handlePageClick(event.target, page));
        element.setAttribute("aria-label", `Page ${page + 1}`);
      }
    }
    /**
     * @method _createPagination
     * @summary Creates the pagination elements based on the main element
     * @description Clones the main element and add a listener to each of them
     * which will dispatch a page change event to the Carousel (when it's not indicator only)
     * Does not create new elements if they were already there
     * @private
     */
    _createPagination() {
      if (this._pages) {
        for (let page = 1; page < this._pages; page += 1) {
          if (!this._getPageElement(page)) {
            const clonedElement = this._mainPageElement.cloneNode(true);
            this._addClickToElement(clonedElement, page);
            clonedElement.setAttribute(constants_default4.DATA_CAROUSEL_PAGE, page);
            this._paginatorContainerElement.appendChild(clonedElement);
          }
        }
      }
    }
    /**
     * @method _handlePageClick
     * @summary Handles each page click by setting the active page
     * and dispatching an event for the Carousel to change the page
     * @param {HTMLElement} target - Event target
     * @param {Number} page - Page number (starts at 0)
     * @private
     */
    _handlePageClick(target, page) {
      this._dispatchPageChange(page);
    }
    /**
     * @method _dispatchPageChange
     * @summary Dispatches a paginator change event to the Carousel's step container
     * @description It'll move to the page passed by parameter
     * @param {Number} page - Page number (starts at 0)
     * @private
     */
    _dispatchPageChange(page) {
      const payload = {
        detail: { page }
      };
      this._stepContainerElement.dispatchEvent(new CustomEvent(constants_default4.PAGINATOR_CHANGE_EVENT, payload));
    }
    /**
     * @method _removeCurrentActivePage
     * @summary Removes the current active page class from one element
     * @private
     */
    _removeCurrentActivePage() {
      const activeElement = this._paginatorContainerElement.querySelector(`[${constants_default4.DATA_CAROUSEL_ACTIVE_PAGE}]`);
      if (activeElement) {
        activeElement.removeAttribute(constants_default4.DATA_CAROUSEL_ACTIVE_PAGE);
      }
    }
    /**
     * @method _setActivePage
     * @summary Sets the active page class to the target element
     * based on the page passed by parameter
     * @param {HTMLElement|null} target - Event target
     * @param {Number|null} page - Page number (starts at 0)
     * @private
     */
    _setActivePage(target, page) {
      if (target || page >= 0) {
        const element = target || this._getPageElement(page);
        if (element) {
          element.setAttribute(constants_default4.DATA_CAROUSEL_ACTIVE_PAGE, "true");
        }
      }
    }
    /**
     * @method _getPageElement
     * @summary Retrieve each page element inside the paginator
     * based on the page passed by parameter
     * @param {Number} page - Page number (starts at 0)
     * @return {HTMLElement|null} - Returns the HTML which matches the current page or null
     * @private
     */
    _getPageElement(page) {
      return this._paginatorContainerElement.querySelector(`[${constants_default4.DATA_CAROUSEL_PAGE}="${page}"]`);
    }
  };

  // src/rebrand/ca_sg_carousel_paginator/js/main.es6
  var init = (target = document) => {
    const elements = target.querySelectorAll(`[${constants_default4.DATA_CAROUSEL_PAGINATOR_ID}]`);
    elements.forEach((element) => {
      if (!element.carousel_paginator && !!element.getAttribute(constants_default4.DATA_CAROUSEL_PAGINATOR_ID)) {
        element.carousel_paginator = new CarouselPaginator(element);
      }
    });
  };
  var initEventHandler = ({ detail = {} } = {}) => {
    init(detail.target);
  };
  init();
  window.addEventListener(constants_default4.INIT_EVENT_NAME, initEventHandler);
})();
//# sourceMappingURL=/static/js/ca_sg_carousel_paginator.js.map
