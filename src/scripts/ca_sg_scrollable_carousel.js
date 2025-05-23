(() => {
  // src/rebrand/helpers/js/cookie_v2.es6
  function getCookie(name, _window = window) {
    const v = _window.document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  }
  var cookie_v2_default = getCookie;

  // src/rebrand/ca_sg_api_client/js/api-client.es6
  var APIClient = class _APIClient {
    /**
     * @summary Get CSRF_COOKIE_NAME of application
     * @type {(string|boolean)}
     * @constant
     */
    static get CSRF_COOKIE_NAME() {
      return window.CSRF_COOKIE_NAME || "csrftoken";
    }
    /**
     * @summary Content-Type value to be used when sending urlencoded form data.
     * @type String
     * @constant
     */
    static get FORM_CONTENT_TYPE() {
      return "application/x-www-form-urlencoded";
    }
    /**
     * Set the model
     * @constructor
     * @param {Object} model
     */
    constructor(model) {
      if (!model) {
        throw new Error("APIClient called without a model!");
      }
      this.model = model;
    }
    /**
     * @method fetch
     * @summary Fetches the requested URL with the specified parameters through the Fetch API
     * @returns {Promise}
     * @public
     */
    fetch() {
      const {
        contentType,
        data,
        method,
        url
      } = this.model;
      const parameters = {
        method,
        headers: this._getHeaders(),
        credentials: "include"
      };
      const hasData = Object.keys(data).length > 0;
      let formattedUrl = url;
      if (hasData) {
        if (method === "GET") {
          formattedUrl += `?${new URLSearchParams(data).toString()}`;
        } else {
          parameters.body = JSON.stringify(data);
        }
      }
      return window.fetch(formattedUrl, parameters).then((response) => {
        if (response.ok) {
          const hasNoContent = response.status === 204;
          return hasNoContent ? {} : response.json();
        }
        const error = new Error("Request error");
        error.response = response.json();
        throw error;
      }).then((responseData) => {
        const formattedData = contentType === _APIClient.FORM_CONTENT_TYPE ? responseData : JSON.stringify(responseData);
        return formattedData;
      });
    }
    /**
     * @method sendBeacon
     * @summary Sends the requested URL with the specified parameters through the Beacon API
     * @returns {Boolean}
     * @public
     */
    sendBeacon(errorCallback = () => {
    }) {
      const {
        data,
        url
      } = this.model;
      if (navigator.sendBeacon) {
        const dataWithContentType = this._setBeaconDataContentType(data);
        return navigator.sendBeacon(url, dataWithContentType);
      }
      this.fetch().catch(errorCallback);
      return true;
    }
    /**
     * @method _getHeaders
     * @summary Sets the request headers
     * @returns {Object}
     * @private
     */
    _getHeaders() {
      const { contentType } = this.model;
      const csrftoken = cookie_v2_default(_APIClient.CSRF_COOKIE_NAME);
      return {
        "Content-Type": contentType,
        "X-CSRFToken": csrftoken || "",
        ...this._getCustomHeaders()
      };
    }
    /**
     * @method _getCustomHeaders
     * @summary Sets the custom request headers
     * @returns {Object}
     * @private
    */
    _getCustomHeaders() {
      const { headers } = this.model;
      return headers.reduce((acc, curr) => ({
        ...acc,
        [curr.key]: curr.value
      }), {});
    }
    /**
     * @method _setBeaconDataContentType
     * @summary Sets the content-type to the beacon data, it's needed to do with a Blob because Beacon API can't identify objects as 'application/json' my itself.
     * @param {object} data - Data to be sent through the Beacon API
     * @returns {Blob}
     * @public
    */
    _setBeaconDataContentType(data) {
      return new Blob([JSON.stringify(data)], {
        type: "application/json"
      });
    }
  };

  // src/rebrand/ca_sg_api_client/js/api-client-model.es6
  var APIClientModel = class {
    /**
     * Set default data for AjaxModel attributes
     * @constructor
     */
    constructor() {
      this._headers = [];
      this._url = "";
      this._method = "GET";
      this._data = {};
      this._contentType = "application/json";
      this._csrfToken = false;
    }
    /**
     * @summary Returns headers array
     * @return {Array}
     * @public
     */
    get headers() {
      const headers = window.APIClient && window.APIClient.headers ? window.APIClient.headers : [];
      return [...headers, ...this._headers];
    }
    /**
     * @method setHeaders
     * @summary Adds the request headers to an array
     * @param {Array} - Array of objects with the additional headers.
     *      @prop key {String} - Header name
     *      @prop value {String} - Header value
     * @public
     */
    set headers(headersArray) {
      if (Array.isArray(headersArray) && headersArray.every((el) => el.key && el.value)) {
        this._headers = headersArray;
      }
    }
    /**
     * @summary Returns the url attribute
     * @return {String}
     * @public
     */
    get url() {
      return this._url;
    }
    /**
     * @summary Sets the url used to make the request
     * @param {String} url
     * @public
     */
    set url(url) {
      this._url = url;
    }
    /**
     * @summary Returns the HTTP method url used to make the request
     * @return {String}
     * @public
     */
    get method() {
      return this._method;
    }
    /**
     * @summary Sets the HTTP method url used to make the request
     * @param {String} method
     * @public
     */
    set method(method) {
      this._method = method;
    }
    /**
     * @summary Returns the data object that will be send in the request
     * @return {Object}
     * @public
     */
    get data() {
      return this._data;
    }
    /**
     * @summary Sets the data object that will be send in the request
     * @param {Object} data
     * @public
     */
    set data(data) {
      this._data = data;
    }
    /**
     * @summary Returns the content type that will be set on the request header
     * @return {String}
     * @public
     */
    get contentType() {
      return this._contentType;
    }
    /**
     * @summary Sets the content type that will be set on the request header
     * @param {String} contentType
     * @public
     */
    set contentType(contentType) {
      this._contentType = contentType;
    }
    /**
     * @summary Define if csrfToken needs to be set
     * @return {Boolean}
     * @public
     */
    get csrfToken() {
      return this._csrfToken;
    }
    /**
     * @summary Define if csrfToken needs to be set
     * @param {Boolean} csrfToken
     * @public
     */
    set csrfToken(csrfToken) {
      this._csrfToken = csrfToken;
    }
  };

  // src/rebrand/helpers/js/endpoint-helper.es6
  var EndpointHelper = class _EndpointHelper {
    /**
     * @constructor
     */
    constructor(_window = window) {
      this._window = _window;
      this._prefix = "-styleguide";
    }
    set prefix(prefix) {
      this._prefix = prefix;
    }
    get prefix() {
      return this._prefix;
    }
    get environmentPrefixesMap() {
      return {
        qa: "my-01.qa",
        staging: "staging-my",
        www: "my",
        partner: "my",
        hub: "my"
      };
    }
    static get DEFAULT_SILVERBACK_LOCAL_PORT() {
      return 48e3;
    }
    /**
     * @summary Returns the proper prefix based on current environment
     * @method _getEnvironmentPrefix
     * @returns {string}
     */
    _getEnvironmentPrefix() {
      const ALLOWED_PREFIXES = Object.keys(this.environmentPrefixesMap);
      return ALLOWED_PREFIXES.find((prefix) => this._window.location.origin.includes(`${prefix}.`)) || "";
    }
    /**
     * @summary Handle the URL replacement if the request is proxied from main site
     * @param {string} url - the URL string to be replaced
     * @returns {string}
     * @method _replaceURLToSilverback
     */
    _replaceURLToSilverback(url) {
      const prefix = this._getEnvironmentPrefix();
      if (this.environmentPrefixesMap[prefix]) {
        url = url.replace(prefix, this.environmentPrefixesMap[prefix]);
      }
      if (!prefix) {
        const localURL = new URL(url);
        localURL.port = _EndpointHelper.DEFAULT_SILVERBACK_LOCAL_PORT;
        url = localURL.toString().slice(0, -1);
      }
      return url;
    }
    /**
     * @method getEndpoint
     * @summary receive an endpoint and returns the complete url relative to the current env
     * @returns {String}
     * @public
     */
    getEndpoint(endpoint) {
      let url = this._window.location.origin.replace(this.prefix, "");
      if (this._window.CAUApi?.isProxy) {
        url = this._replaceURLToSilverback(url);
      }
      return `${url}${endpoint}`;
    }
  };

  // src/rebrand/uapi_common/js/userdb-tracker-model.es6
  var UserDBTrackerModel = class {
    /**
     * Set default payload
     * @constructor
     */
    constructor() {
      this.reset();
    }
    /**
     * @summary Returns the category attribute
     * @return {String} category
     * @public
     */
    get category() {
      return this._category;
    }
    /**
     * @summary Sets the category attribute
     * @param {String} category
     * @public
     */
    set category(category) {
      this._category = category;
    }
    /**
     * @summary Returns the interaction name attribute
     * @return {String} name
     * @public
     */
    get name() {
      return this._name;
    }
    /**
     * @summary Sets the interaction name attribute
     * @param {String} name
     * @public
     */
    set name(name) {
      this._name = name;
    }
    /**
     * @summary Returns the data attribute
     * @return {Object} data
     * @public
     */
    get data() {
      return this._data;
    }
    /**
     * @summary Sets the data attribute
     * @param {object} data
     * @public
     */
    set data(data) {
      this._data = data;
    }
    /**
     * @summary Returns the timestamp
     * @return {String} ts
     * @public
     */
    get ts() {
      return this._ts;
    }
    /**
     * @summary Sets the timestamp attribute
     * @param {String} ts
     * @public
     */
    set ts(ts) {
      this._ts = ts;
    }
    /**
     * @summary Returns the sd attribute
     * @return {Object} sd
     * @public
     */
    get sd() {
      return this._sd;
    }
    /**
     * @summary Sets the sd attribute
     * @param {Object} sd
     * @public
     */
    set sd(sd) {
      this._sd = sd;
    }
    /**
     * @summary Returns if GA is enabled or not
     * @return {Boolean}
     * @private
     */
    _isGAEnabled() {
      return !!(window.ga && typeof window.ga === "function" && window.ga.loaded && Object.keys(window.ga).length > 5 && window.ga.q);
    }
    /**
     * @summary Returns the experiment data
     * @returns {Object} the third party experiment data for enrollment events
     * @private
     */
    _experimentData() {
      if (this._category !== "experiment" || this._name !== "enrollment" || !this._data.third_party_source) {
        return {};
      }
      return {
        third_party_experiments: {
          [this._data.third_party_source]: {
            [this._data.id]: {
              campaign_id: this._data.third_party_campaign_id,
              variation_id: this._data.third_party_variant,
              experiment_id: this._data.third_party_id
            }
          }
        }
      };
    }
    /**
     * @summary Sets the initial values for all properties
     * @returns {void}
     * @public
     */
    reset() {
      this._data = {};
      this._category = "page interaction";
      this._name = "";
      this._ts = "";
      this._sd = {};
    }
    /**
     * @summary Returns the payload
     * @return {String} payload
     * @public
     */
    get payload() {
      const payloadObj = {
        category: this._category,
        name: this._name,
        data: this._data,
        ...this._ts ? { ts: this._ts } : {},
        sd: {
          ga_enabled: this._isGAEnabled(),
          ...this._experimentData(),
          ...this._sd
        }
      };
      return payloadObj;
    }
  };

  // src/rebrand/ca_sg_logger_v2/js/constants.es6
  var loggerEvents = {
    CAPTURE_EXCEPTION_EVENT: "com.consumeraffairs.styleguide.logger.captureException",
    CAPTURE_MESSAGE_EVENT: "com.consumeraffairs.styleguide.logger.captureMessage"
  };
  var constants_default = loggerEvents;

  // src/rebrand/uapi_common/js/userdb-tracker.es6
  var UserDBTracker = class {
    /**
    * @constructs UserDBTracker
    * @param {Object} _window Browser's window object
    */
    constructor(_window = window) {
      this._window = _window;
      this._endpointHelper = new EndpointHelper(this._window);
      this._apiClientModel = new APIClientModel();
      this._apiClientModel.csrfToken = true;
      this._apiClientModel.url = this._endpointHelper.getEndpoint("/api/uapi/e/");
      this._apiClientModel.method = "POST";
      this._apiClient = new APIClient(this._apiClientModel);
      this._model = new UserDBTrackerModel();
      this._handleError = this._handleError.bind(this);
    }
    /**
     * @method _handleError
     * @summary Method called when a request to userdb/events is failed
     * @returns {void}
     * @private
    */
    _handleError(error) {
      const errorMsg = `[CAUserDB Tracker]: Error on network request. ${error}`;
      const errorEvent = new CustomEvent(constants_default.CAPTURE_EXCEPTION_EVENT, {
        detail: {
          errorMsg
        }
      });
      window.dispatchEvent(errorEvent);
    }
    /**
     * @method sendEvent
     * @summary Sends the event to userdb API
     * @param {object} eventParams - Object containing the event parameters
     * @returns {void}
     * @public
    */
    sendEvent(eventParams = {}) {
      this._model.reset();
      const allowedKeys = ["name", "data", "category", "sd", "ts"];
      allowedKeys.forEach((key) => {
        const hasKey = key in eventParams;
        if (!hasKey)
          return;
        this._model[key] = eventParams[key];
      });
      this._apiClientModel.data = this._model.payload;
      this._apiClient.sendBeacon(this._handleError);
    }
    /**
     * @method sendEvent
     * @summary Sends an array of events to Userdb API
     * @param {Array} eventsCollection - Array containing the events to be sent
     * @returns {void}
     * @public
    */
    sendEventsCollection(eventsCollection) {
      if (!eventsCollection || !Array.isArray(eventsCollection))
        return;
      this._model.reset();
      this._apiClientModel.data = eventsCollection;
      this._apiClient.sendBeacon(this._handleError);
    }
  };

  // src/rebrand/uapi_common/js/userdb-carousel-tracker.es6
  var UserDBCarouselTracker = class _UserDBCarouselTracker extends UserDBTracker {
    /**
     * Form interaction category attribute
     * @constant
     * @type {Object}
     */
    static get EVENT_CATEGORIES() {
      return {
        multi_step: "form interaction",
        carousel: "page interaction"
      };
    }
    /**
     * Event fired on a step has been changed
     * @type {String}
     * @constant
     */
    static get CAROUSEL_TRACKING_EVENT() {
      return "com.consumeraffairs.styleguide.uapi.carousel";
    }
    /**
    * @constructs UserDBCustomEventTracker
    * @param {Object} _window Browser's window object
    */
    constructor(_window = window) {
      super(_window);
      this._bindMethods();
      this._bindEvents();
    }
    /**
    * @method _bindMethods
    * @summary Sets class context as this
    * @returns {void}
    * @private
    */
    _bindMethods() {
      this._carouselEventHandler = this._carouselEventHandler.bind(this);
    }
    /**
     * @method _bindEvents
     * @summary Add event listerners
     * @returns {void}
     * @private
    */
    _bindEvents() {
      this._window.addEventListener(_UserDBCarouselTracker.CAROUSEL_TRACKING_EVENT, this._carouselEventHandler);
    }
    /**
     * @method _carouselEventHandler
     * @summary Get event details and makes an API call to BE
     * @returns {void}
     * @private
    */
    _carouselEventHandler({ detail: { name, data } }) {
      const category = _UserDBCarouselTracker.EVENT_CATEGORIES[data.type];
      this.sendEvent({ name, data, category });
    }
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

  // src/blue/helpers/js/helpers.es6
  function debounce(debounceFn, delayTime) {
    let timer;
    return (...args) => {
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        debounceFn(...args);
      }, delayTime);
    };
  }

  // src/rebrand/ca_sg_carousel_paginator/js/constants.es6
  var constants_default3 = {
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

  // src/rebrand/ca_sg_scrollable_carousel/js/carousel-scroll.es6
  var CarouselScroll = class {
    /**
     * Create a new component
     * - Define overall settings and prepare to execute init()
     * @constructor
     * @param {Object} _window browser's window object
     * @param {Object} element target of carousel that will be created
     */
    constructor(element, _window = window) {
      if (!element) {
        return;
      }
      this.stepContainer = element;
      this._window = _window;
      this._lastDispatchedPage = 0;
      this._init();
    }
    /**
     * @method _init
     * @summary Initializes the required procedures to execute the public methods
     * @return {Boolean} Just return false when something got wrong inside the
     * starter procedure
     * @private
     */
    _init() {
      this._populateProps();
      if (!this.stepCount) {
        return false;
      }
      this._addStepsObserver();
      this._bindEvents();
      this._startAutoplay();
      this._dispatchTrackingEvent();
      this._calculateStepsWidth();
      this._createStepsMap();
      this._updateCarouselDataset();
      this._dispatchPaginatorEvent();
      return true;
    }
    /**
     * @method _populateProps
     * @summary Define all starter props needed to execute the public methods
     * especially DOM queries and default values
     * @private
     */
    _populateProps() {
      this.steps = Array.from(
        this.stepContainer.querySelectorAll(`${constants_default2.STEP}`)
      );
      this.nextBtns = this.stepContainer.querySelectorAll(`${constants_default2.NEXT}`);
      this.prevBtns = this.stepContainer.querySelectorAll(`${constants_default2.PREV}`);
      this.firstBtns = this.stepContainer.querySelectorAll(`${constants_default2.FIRST}`);
      this.lastBtns = this.stepContainer.querySelectorAll(`${constants_default2.LAST}`);
      this.carouselContainer = this.stepContainer.closest(constants_default2.CAROUSEL_CONTAINER);
      this.autoplaySpeed = Number(this.stepContainer.getAttribute(constants_default2.DATA_AUTOPLAY));
      this.isPerPage = this.stepContainer.hasAttribute(constants_default2.DATA_PER_PAGE);
      this.currentStep = 0;
      this.pastStep = 0;
      this.stepCount = this.steps.length;
      this.stepsMap = [];
      this.visibleStepsCount = 1;
      this.visibleSteps = /* @__PURE__ */ new Set();
      this.visibleStepsIndexes = /* @__PURE__ */ new Set();
    }
    /**
     * @method _bindEvents
     * @summary Responsible of handling all events passing 'this' context
     * @private
     */
    _bindEvents() {
      for (let i = 0; i < this.nextBtns.length; i += 1) {
        this.nextBtns[i].addEventListener("click", this.next.bind(this));
      }
      for (let i = 0; i < this.prevBtns.length; i += 1) {
        this.prevBtns[i].addEventListener("click", this.prev.bind(this));
      }
      for (let i = 0; i < this.firstBtns.length; i += 1) {
        this.firstBtns[i].addEventListener("click", this.moveToFirst.bind(this));
      }
      for (let i = 0; i < this.lastBtns.length; i += 1) {
        this.lastBtns[i].addEventListener("click", this.moveToLast.bind(this));
      }
      this._window.addEventListener("resize", debounce(this._onResizeEvent.bind(this), 100));
      if (this.isPerPage) {
        this.stepContainer.addEventListener(
          constants_default3.PAGINATOR_CHANGE_EVENT,
          this._handlePaginatorChange.bind(this)
        );
      }
    }
    /**
     * @method _updateCarouselDataset
     * @summary Sets the data atributes current page and total pages on the carousel container
     * @private
     */
    _updateCarouselDataset() {
      if (this.carouselContainer) {
        this.carouselContainer.setAttribute(constants_default2.DATA_CURRENT_PAGE, this.currentStep);
        this.carouselContainer.setAttribute(constants_default2.DATA_TOTAL_PAGES, this.stepsMap.length);
      }
    }
    /**
     * @method _onCarouselStepChange
     * @summary Responsible to create STEP_CHANGE_EVENT fired when the step has moved
     * @private
     */
    _onCarouselStepChange() {
      const detail = this._createPayload();
      this.stepContainer.dispatchEvent(new CustomEvent(constants_default2.STEP_CHANGE_EVENT, detail));
    }
    /**
     * @method _startAutoplay
     * @summary Starts the timer of when next step will appear
     * @private
     */
    _startAutoplay() {
      if (this.autoplaySpeed) {
        this._stopAutoplay();
        this.carouselTimeout = this._window.setTimeout(this.next.bind(this), this.autoplaySpeed);
      }
    }
    /**
     * @method _stopAutoplay
     * @summary Stops the timer of the next steps
     * @private
     */
    _stopAutoplay() {
      if (this.carouselTimeout) {
        this._window.clearTimeout(this.carouselTimeout);
      }
    }
    /**
     * @method _createPayload
     * @summary Creates the payload for the carousel CustomEvent
     * @return {Object} Payload to be sent
     * @private
     */
    _createPayload() {
      const payload = {
        detail: {
          currentStep: this.currentStep,
          totalSteps: this.stepCount,
          pastStep: this.pastStep,
          visibleSteps: [...this.visibleSteps],
          visibleStepsIndexes: [...this.visibleStepsIndexes]
        }
      };
      return payload;
    }
    /**
     * @method _dispatchPaginatorEvent
     * @summary Dispatch a custom event for the Carousel Paginator script
     * @private
     */
    _dispatchPaginatorEvent() {
      if (this.isPerPage) {
        const payload = {
          detail: {
            pages: this.stepsMap.length,
            activePage: this.currentStep
          }
        };
        this.stepContainer.dispatchEvent(new CustomEvent(constants_default3.PAGINATOR_EVENT, payload));
      }
    }
    /**
     * @method _dispatchStepEvent
     * @summary Dispatch a custom event with step information
     * @private
     */
    _dispatchStepEvent() {
      const detail = this._createPayload();
      this.stepContainer.dispatchEvent(new CustomEvent(constants_default2.STEP_EVENT, detail));
    }
    /**
     * @method _dispatchTrackingEvent
     * @summary Parse data-uapi-event attribute and dispatch a custom event to Userdb
     * @private
     */
    _dispatchTrackingEvent() {
      const carouselData = this.stepContainer.getAttribute(constants_default2.EVENT_DATA_ATTR);
      const carouselName = this.stepContainer.getAttribute(constants_default2.EVENT_NAME_ATTR);
      if (carouselData && carouselName) {
        try {
          const eventInfo = JSON.parse(carouselData);
          const attribute = this.isPerPage ? "page" : "step";
          eventInfo.context[attribute] = this.currentStep;
          const payload = {
            name: carouselName,
            data: eventInfo
          };
          this._window.dispatchEvent(
            new CustomEvent(UserDBCarouselTracker.CAROUSEL_TRACKING_EVENT, { detail: payload })
          );
        } catch (error) {
          const errorEvent = new CustomEvent(constants_default.CAPTURE_EXCEPTION_EVENT, {
            detail: {
              message: "[CACarousel Tracking]: Not valid JSON",
              context: error
            }
          });
          this._window.dispatchEvent(errorEvent);
        }
      }
    }
    /**
     * @method getCurrentStep
     * @summary Provide a current step of carousel
     * @return {Number}
     * @public
     */
    getCurrentStep() {
      return this.currentStep;
    }
    /**
     * @method getTotalSteps
     * @summary Provide a number total of steps
     * @return {Number}
     * @public
     */
    getTotalSteps() {
      return this.stepCount;
    }
    /**
     * @method next
     * @summary Go to the next step
     * @public
     */
    next() {
      if (this.getCurrentStep() === this.stepsMap.length - 1 && this.autoplaySpeed) {
        this.moveToFirst();
      } else {
        this.moveTo(this.currentStep + 1);
      }
    }
    /**
     * @method prev
     * @summary Go to the previous step
     * @public
     */
    prev() {
      if (this.getCurrentStep() === 0 && this.autoplaySpeed) {
        this.moveToLast();
      } else {
        this.moveTo(this.currentStep - 1);
      }
    }
    /**
     * @method moveToFirst
     * @summary Go to the first step
     * @public
     */
    moveToFirst() {
      this.moveTo(0);
    }
    /**
     * @method moveToLast
     * @summary Go to the last step
     * @public
     */
    moveToLast() {
      this.moveTo(this.stepsMap.length - 1);
    }
    /**
     * @method _clearAllActiveSteps
     * @summary Clears all active steps
     * @description Need to clear all because the active item needs to be the first one
     * But on resize the first item of each page can change
     * @private
     */
    _clearAllActiveSteps() {
      const activeElements = this.stepContainer.querySelectorAll(`.${constants_default2.STEP_ACTIVATED}`);
      activeElements.forEach((element) => {
        element.classList.remove(constants_default2.STEP_ACTIVATED);
      });
    }
    /**
     * @method _onResizeEvent
     * @summary On window resize event. Re-calculates visible steps, steps map and
     * updates the carousel position
     * @private
     */
    _onResizeEvent() {
      this._setVisibleSteps();
      this._createStepsMap();
      const hasRecalculatedCurrentStep = this._hasRecalculatedCurrentStep();
      if (!hasRecalculatedCurrentStep) {
        this._updatePosition();
      }
      this._dispatchPaginatorEvent();
      this._updateCarouselDataset();
    }
    /**
     * @method moveTo
     * @summary Move the stepContainer to the step given in the parameter
     * @param {Number} position - Index to go to
     * @return {Boolean} Flag to indicate the move executed
     * @public
     */
    moveTo(position) {
      if (!this._validStep(position))
        return false;
      if (this.currentStep !== position) {
        this.pastStep = this.currentStep;
        this.currentStep = position;
      }
      this._updatePosition();
      return true;
    }
    /**
     * @method _updateActiveStep
     * @summary Move the stepContainer to the step given in the parameter
     * @private
     */
    _updateActiveStep() {
      this._clearAllActiveSteps();
      this.stepsMap[this.currentStep].items[0].element.classList.add(constants_default2.STEP_ACTIVATED);
      this._dispatchPaginatorEvent();
      this._onCarouselStepChange();
      this._startAutoplay();
      this._updateCarouselDataset();
      this._dispatchStepEvent();
    }
    /**
     * @method _updatePosition
     * @summary Responsible to resolve the position based on desired step
     * @param {Number} pos - Position in px to move the StepContainer element
     * @private
     */
    _updatePosition(pos) {
      if (!pos) {
        pos = this.stepsMap[this.currentStep].offsetLeft;
      }
      this._currentPosition = pos;
      this.stepContainer.scrollTo({ left: pos, behavior: "smooth" });
    }
    /**
     * @method _validStep
     * @summary Checks if the given parameter is between the range of the steps
     * @description Can't be negative and can't have more than the total number of steps
     * @param {Number} stepNumber - Step to move to
     * @return {Boolean} Returns true if it's a valid step
     * @private
     */
    _validStep(stepNumber) {
      return stepNumber >= 0 && stepNumber < this.stepsMap.length;
    }
    /**
     * @method _createStepsMap
     * @summary Creates an array of pages called stepsMap
     * @description Each position inside the array it'll give you an object containing the whole width
     * of that page, the offsetLeft and an array of each steps (HTML elements), which will be used for everything
     * If the "per page" is turned off, each page will have only one step
     * @private
     */
    _createStepsMap() {
      let firstStepOffset = 0;
      const calculatedVisibleElements = this.calculatedVisibleElements || 1;
      const totalSteps = this.getTotalSteps();
      this.previousStepsMap = this.stepsMap;
      this.steps = Array.from(
        this.stepContainer.querySelectorAll(`${constants_default2.STEP}`)
      );
      this.stepsMap = this.steps.reduce((pages, step, index) => {
        if (index === 0) {
          firstStepOffset = step.offsetLeft;
        }
        const pageIndex = this.isPerPage ? Math.floor(index / calculatedVisibleElements) : index;
        const { width } = step.getBoundingClientRect();
        if (!pages[pageIndex]) {
          pages[pageIndex] = {
            items: [],
            offsetLeft: step.offsetLeft - firstStepOffset,
            width: 0
          };
        }
        const page = pages[pageIndex];
        page.items.push({ element: step, index, width });
        page.width += width;
        if (this.isPerPage && index + 1 === totalSteps && pages[pageIndex - 1]) {
          const missingStepsLength = calculatedVisibleElements - page.items.length;
          const startIndex = calculatedVisibleElements - missingStepsLength;
          const endIndex = startIndex + missingStepsLength;
          const missingSteps = pages[pageIndex - 1].items.slice(startIndex, endIndex);
          if (missingSteps) {
            page.items.unshift(...missingSteps);
            page.offsetLeft = page.items[0].element.offsetLeft - firstStepOffset;
            page.width += missingSteps.reduce((stepWidth, missingStep) => stepWidth + missingStep.width, 0);
          }
        }
        return pages;
      }, []);
    }
    /**
     * @method _handlePaginatorChange
     * @summary Handles the paginator change event, which is called after each page change
     * @description The Carousel Paginator (if available) will fire this event to change
     * to the respective page. Since stepsMap is an array, the page inside the detail
     * here will start at 0
     * @param {Event} event - Event from the callback event handler
     * @private
     */
    _handlePaginatorChange(event) {
      const { page } = event.detail || {};
      this.moveTo(page);
    }
    /**
     * @method _hasRecalculatedCurrentStep
     * @summary Recalculates the current step and move the carousel to it
     * @description Only recalculates after resizing and if "per page" is turned on
     * @return {Boolean} Returns true if it has recalculated the current step
     * @private
     */
    _hasRecalculatedCurrentStep() {
      if (this.isPerPage) {
        const currentStepElement = this.previousStepsMap[this.currentStep].items[0].element;
        this.currentStep = this.stepsMap.findIndex((step) => step.items.find((stepItem) => stepItem.element === currentStepElement));
        this.moveTo(this.currentStep);
        return true;
      }
      return false;
    }
    /**
     * @method _addStepsObserver
     * @summary Adds an intersection observe in each step to know when it's visible
     * @description Only works when you have a carousel container (js-carousel)
     * @private
     */
    _addStepsObserver() {
      const threshold = parseFloat(this.stepContainer.getAttribute(constants_default2.DATA_OBSERVER_THRESHOLD)) || 0.7;
      const rootMargin = this.steps[0].offsetLeft ? `0px 0px 0px -${this.steps[0].offsetLeft}px` : "0px";
      const options = {
        root: this.carouselContainer,
        rootMargin,
        threshold
      };
      const observer = new IntersectionObserver(this._handleIntersectionObserver.bind(this), options);
      this.visibleStepsCount = 0;
      this.steps.forEach((step) => {
        observer.observe(step);
      });
    }
    /**
     * @method _handleIntersectionObserver
     * @summary Adds the visible classes to the steps and updates the visible items counter
     * @description Only works when you have a carousel container (js-carousel)
     * @param entries - The entries with the steps
     */
    _handleIntersectionObserver(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.visibleStepsCount += 1;
          entry.target.classList.add(constants_default2.STEP_VISIBLE);
          this.visibleSteps.add(entry.target);
          this.visibleStepsIndexes.add(this.steps.indexOf(entry.target));
        } else {
          if (this._stepsCounted)
            this.visibleStepsCount -= 1;
          entry.target.classList.remove(constants_default2.STEP_VISIBLE);
          this.visibleSteps.delete(entry.target);
          this.visibleStepsIndexes.delete(this.steps.indexOf(entry.target));
        }
      });
      this.visibleStepsIndexes = new Set([...this.visibleStepsIndexes].sort());
      if (!this._stepsCounted) {
        this._setVisibleSteps();
        this._createStepsMap();
      }
      const firstVisibleStep = [...this.visibleStepsIndexes][0];
      if (firstVisibleStep >= 0) {
        const activeStep = this.stepsMap.findLastIndex((step) => step.items.findIndex((item) => item.index === firstVisibleStep) > -1);
        if (activeStep !== this.currentStep) {
          this.pastStep = this.currentStep;
          this.currentStep = activeStep;
        }
        this._updateActiveStep();
        if (!this.isPerPage || this.isPerPage && this.pastStep !== activeStep && this._lastDispatchedPage !== this.currentStep) {
          this._lastDispatchedPage = this.currentStep;
          this._dispatchTrackingEvent();
        }
      }
      this._stepsCounted = true;
    }
    /**
     * @method _setVisibleSteps
     * @summary Sets the visible steps count
     * @private
     */
    _setVisibleSteps() {
      this.calculatedVisibleElementsPrevious = this.calculatedVisibleElements;
      this.calculatedVisibleElements = this.visibleStepsCount;
    }
    /**
     * @method _calculateStepsWidth
     * @summary Calculates the amount of possible steps inside the container
     * based on the width of each element
     * @private
     */
    _calculateStepsWidth() {
      if (this.carouselContainer) {
        const [step] = this.steps;
        const stepWidth = step.getBoundingClientRect().width;
        if (stepWidth === 0)
          return;
        const containerWidth = this.carouselContainer.getBoundingClientRect().width;
        this.calculatedVisibleElementsPrevious = this.calculatedVisibleElements;
        this.calculatedVisibleElements = Math.floor(containerWidth / stepWidth);
      }
    }
  };

  // src/blue/ca_styleguide_carousel_binder/js/constants.es6
  var constants_default4 = {
    /**
     * @summary Event that triggers the initialization
     */
    INIT_EVENT_NAME: "com.consumeraffairs.styleguide.carouselBinder.init",
    /**
     * @function DATA_CAROUSEL_ID
     * @return {String} Target to be binded the action
     */
    DATA_CAROUSEL_ID: "data-carousel-id",
    /**
     * @function DATA_CAROUSEL_ACTION
     * @return {String} Data attr of action to be called
     */
    DATA_CAROUSEL_ACTION: "data-carousel-action",
    /**
     * @summary Data attribute to be used to identify elements that have
     * been binded to the carousel
     */
    DATA_CAROUSEL_BINDED: "data-carousel-binded"
  };

  // src/rebrand/ca_sg_scrollable_carousel/js/carousel-initialization.es6
  var CarouselInitialization = class {
    /**
     * @constructor
     */
    constructor() {
      this._bindMethods();
      this._bindEvents();
      this._init();
    }
    /**
     * @summary Bind context to methods
     * @method _bindMethods
     */
    _bindMethods() {
      this._initEventHandler = this._initEventHandler.bind(this);
    }
    /**
     * @summary Adds a listener for the initialization event
     * @method _bindEvents
     */
    _bindEvents() {
      window.addEventListener(constants_default2.INIT_EVENT_NAME, this._initEventHandler);
    }
    /**
     * @summary Triggers the carousel initialization on the provided target
     * @param {Object} - event
     * @method _initEventHandler
     */
    _initEventHandler({ detail = {} } = {}) {
      this._init(detail.target);
    }
    /**
     * @summary Initializes all carousel elements present on the provided target
     * @param {DOMElement} - target
     * @method _init
     */
    _init(target = document) {
      const elements = target.querySelectorAll(constants_default2.STEP_CONTAINER);
      let mustInitCarouselBinder = false;
      elements.forEach((element) => {
        if (!element.carousel) {
          mustInitCarouselBinder = true;
          element.carousel = new CarouselScroll(element);
        }
      });
      if (mustInitCarouselBinder) {
        const hasBindableElements = document.querySelectorAll(
          `[${constants_default4.DATA_CAROUSEL_ID}][${constants_default4.DATA_CAROUSEL_ACTION}]:not([${constants_default4.DATA_CAROUSEL_BINDED}])`
        );
        if (hasBindableElements.length) {
          const carouselBinderInitEvent = new CustomEvent(constants_default4.INIT_EVENT_NAME, {
            detail: { target }
          });
          window.dispatchEvent(carouselBinderInitEvent);
        }
      }
    }
  };

  // src/rebrand/ca_sg_scrollable_carousel/js/main.es6
  new UserDBCarouselTracker(window);
  new CarouselInitialization();
})();
//# sourceMappingURL=/static/js/ca_sg_scrollable_carousel.js.map
