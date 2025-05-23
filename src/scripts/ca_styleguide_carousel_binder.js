(() => {
  // src/rebrand/ca_sg_logger_v2/js/constants.es6
  var loggerEvents = {
    CAPTURE_EXCEPTION_EVENT: "com.consumeraffairs.styleguide.logger.captureException",
    CAPTURE_MESSAGE_EVENT: "com.consumeraffairs.styleguide.logger.captureMessage"
  };
  var constants_default = loggerEvents;

  // src/blue/ca_styleguide_carousel_binder/js/constants.es6
  var constants_default2 = {
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

  // src/blue/ca_styleguide_carousel_binder/js/carousel-binder.es6
  var CarouselBinder = class _CarouselBinder {
    /**
     * @function DATA_CAROUSEL_PARAM
     * @return {String} Data attr to be sent as param on the action
     */
    static get DATA_CAROUSEL_PARAM() {
      return "data-carousel-param";
    }
    /**
     * @function STEP_CONTAINER
     * @return {String} Class used to trigger the Carousel instance
     */
    static get STEP_CONTAINER() {
      return ".js-step-container";
    }
    /**
     * @function DISPATCHERS_SELECTOR
     * @return {String} Selects only valid dispatchers (containing ID and Action)
     */
    static get DISPATCHERS_SELECTOR() {
      return `[${constants_default2.DATA_CAROUSEL_ID}][${constants_default2.DATA_CAROUSEL_ACTION}]`;
    }
    /**
     * @constructs CarouselBinder
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
     * @summary Triggers the carousel binder initialization on the provided target
     * @param {Object} - event
     * @method _initEventHandler
     */
    _initEventHandler({ detail = {} } = {}) {
      this._init(detail.target);
    }
    /**
     * @summary Initializes carousel binder on the provided target
     * @param {DOMElement} - target
     * @method _init
     */
    _init(target = document) {
      this._bindElements(target);
      this._bindActions();
    }
    /**
     * @summary Responsible to bind all DOM elements needed to execute properly
     * @param {DOMElement} - target
     * @method _bindElements
     */
    _bindElements(target = document) {
      this._dispatchersList = target.querySelectorAll(_CarouselBinder.DISPATCHERS_SELECTOR);
    }
    /**
     * @summary Responsible to bind set up only valid actions
     * @method _bindActions
     * @returns {void}
     */
    _bindActions() {
      this._dispatchersList.forEach((dispatcher) => this._resolveDispatcher(dispatcher));
    }
    /**
     * @summary Responsible to handle the dispatcher listener
     * @method _resolveDispatcher
     * @param {DOMElement} dispatcher - Instance of element to be binded
     * @returns {void}
     */
    _resolveDispatcher(dispatcher) {
      const props = this._resolveProps(dispatcher);
      if (props && !dispatcher.hasAttribute(constants_default2.DATA_CAROUSEL_BINDED)) {
        dispatcher.setAttribute(constants_default2.DATA_CAROUSEL_BINDED, true);
        dispatcher.addEventListener("click", this._caller.bind(this, props));
      }
    }
    /**
     * @summary Responsible to execute the call to tied Carousel
     * @method _caller
     * @param {Object} props - All props validated to build the call
     * @returns {void}
     */
    _caller(props) {
      const { carouselInstance, action, param } = props;
      return carouselInstance[action](param);
    }
    /**
     * @summary Responsible to verify if ID and Action is valid
     * @method _resolveDispatcher
     * @param {DOMElement} dispatcher - Instance of element to be bound
     * @returns {Object|Boolean} - Filled props payload or False
     */
    _resolveProps(dispatcher) {
      const idCarousel = dispatcher.getAttribute(constants_default2.DATA_CAROUSEL_ID);
      const carouselInstance = this._resolveTarget(idCarousel);
      if (carouselInstance) {
        const action = this._resolveAction(dispatcher, carouselInstance, idCarousel);
        const param = dispatcher.getAttribute(_CarouselBinder.DATA_CAROUSEL_PARAM);
        if (action) {
          return {
            idCarousel,
            carouselInstance,
            action,
            param
          };
        }
      }
      const errorEvent = new CustomEvent(constants_default.CAPTURE_MESSAGE_EVENT, {
        detail: {
          message: `[CACarouselBinder]: "${idCarousel}" is an invalid instance of Carousel`,
          level: "error"
        }
      });
      window.dispatchEvent(errorEvent);
      return false;
    }
    /**
     * @summary Responsible to connect dispatcher to Carousel
     * @method _resolveTarget
     * @param {String} idCarousel - Ref to connect dispatcher to Carousel
     * @returns {Carousel|Boolean} - Carousel Instance or false
     */
    _resolveTarget(idCarousel) {
      try {
        let targetCarousel = document.getElementById(idCarousel);
        if (!targetCarousel.carousel) {
          targetCarousel = targetCarousel.querySelector(_CarouselBinder.STEP_CONTAINER);
        }
        return targetCarousel.carousel;
      } catch (error) {
        const errorEvent = new CustomEvent(constants_default.CAPTURE_MESSAGE_EVENT, {
          detail: {
            message: `[CACarouselBinder]: Carousel "${idCarousel}" not found`,
            level: "error",
            context: error
          }
        });
        window.dispatchEvent(errorEvent);
      }
      return false;
    }
    /**
     * @summary Responsible to validate the Action requested to be called
     * @method _resolveAction
     * @param {DOMElement} dispatcher - Instance of element to be binded
     * @param {Carousel} carouselInstance - Carousel of .js-step-container according to ID
     * @param {String} idCarousel - Ref to connect dispatcher to Carousel
     * @returns {String|Boolean} - Carousel Instance or false
     */
    _resolveAction(dispatcher, carouselInstance, idCarousel) {
      const action = dispatcher.getAttribute(constants_default2.DATA_CAROUSEL_ACTION);
      if (typeof carouselInstance[action] === "function") {
        return action;
      }
      const errorEvent = new CustomEvent(constants_default.CAPTURE_MESSAGE_EVENT, {
        detail: {
          message: `[${idCarousel}] Carousel Binder: Invalid carousel action (${action})`,
          level: "warning",
          context: dispatcher
        }
      });
      window.dispatchEvent(errorEvent);
      return false;
    }
  };

  // src/blue/ca_styleguide_carousel_binder/js/main.es6
  new CarouselBinder();
})();
//# sourceMappingURL=/static/js/ca_styleguide_carousel_binder.js.map
