(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/choices.js/public/assets/scripts/choices.js
  var require_choices = __commonJS({
    "node_modules/choices.js/public/assets/scripts/choices.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["Choices"] = factory();
        else
          root["Choices"] = factory();
      })(window, function() {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1)
                value = __webpack_require__(value);
              if (mode & 8)
                return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string")
                for (var key in value)
                  __webpack_require__.d(ns, key, function(key2) {
                    return value[key2];
                  }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "/public/assets/scripts/";
            return __webpack_require__(__webpack_require__.s = 4);
          }([
            /* 0 */
            /***/
            function(module2, exports2, __webpack_require__) {
              "use strict";
              var isMergeableObject = function isMergeableObject2(value) {
                return isNonNullObject(value) && !isSpecial(value);
              };
              function isNonNullObject(value) {
                return !!value && typeof value === "object";
              }
              function isSpecial(value) {
                var stringValue = Object.prototype.toString.call(value);
                return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
              }
              var canUseSymbol = typeof Symbol === "function" && Symbol.for;
              var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
              function isReactElement(value) {
                return value.$$typeof === REACT_ELEMENT_TYPE;
              }
              function emptyTarget(val) {
                return Array.isArray(val) ? [] : {};
              }
              function cloneUnlessOtherwiseSpecified(value, options) {
                return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
              }
              function defaultArrayMerge(target, source, options) {
                return target.concat(source).map(function(element) {
                  return cloneUnlessOtherwiseSpecified(element, options);
                });
              }
              function getMergeFunction(key, options) {
                if (!options.customMerge) {
                  return deepmerge;
                }
                var customMerge = options.customMerge(key);
                return typeof customMerge === "function" ? customMerge : deepmerge;
              }
              function getEnumerableOwnPropertySymbols(target) {
                return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                  return target.propertyIsEnumerable(symbol);
                }) : [];
              }
              function getKeys(target) {
                return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
              }
              function propertyIsUnsafe(target, key) {
                try {
                  return key in target && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
                } catch (unused) {
                  return false;
                }
              }
              function mergeObject(target, source, options) {
                var destination = {};
                if (options.isMergeableObject(target)) {
                  getKeys(target).forEach(function(key) {
                    destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                  });
                }
                getKeys(source).forEach(function(key) {
                  if (propertyIsUnsafe(target, key)) {
                    return;
                  }
                  if (!options.isMergeableObject(source[key]) || !target[key]) {
                    destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                  } else {
                    destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                  }
                });
                return destination;
              }
              function deepmerge(target, source, options) {
                options = options || {};
                options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                var sourceIsArray = Array.isArray(source);
                var targetIsArray = Array.isArray(target);
                var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                if (!sourceAndTargetTypesMatch) {
                  return cloneUnlessOtherwiseSpecified(source, options);
                } else if (sourceIsArray) {
                  return options.arrayMerge(target, source, options);
                } else {
                  return mergeObject(target, source, options);
                }
              }
              deepmerge.all = function deepmergeAll(array, options) {
                if (!Array.isArray(array)) {
                  throw new Error("first argument should be an array");
                }
                return array.reduce(function(prev, next) {
                  return deepmerge(prev, next, options);
                }, {});
              };
              var deepmerge_1 = deepmerge;
              module2.exports = deepmerge_1;
            },
            /* 1 */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              "use strict";
              (function(global, module3) {
                var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
                var root;
                if (typeof self !== "undefined") {
                  root = self;
                } else if (typeof window !== "undefined") {
                  root = window;
                } else if (typeof global !== "undefined") {
                  root = global;
                } else if (true) {
                  root = module3;
                } else {
                }
                var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[
                  /* default */
                  "a"
                ])(root);
                __webpack_exports__["a"] = result;
              }).call(this, __webpack_require__(5), __webpack_require__(6)(module2));
            },
            /* 2 */
            /***/
            function(module2, exports2, __webpack_require__) {
              !function(e, t) {
                true ? module2.exports = t() : void 0;
              }(this, function() {
                return function(e) {
                  var t = {};
                  function n(r) {
                    if (t[r])
                      return t[r].exports;
                    var o = t[r] = { i: r, l: false, exports: {} };
                    return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
                  }
                  return n.m = e, n.c = t, n.d = function(e2, t2, r) {
                    n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
                  }, n.r = function(e2) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
                  }, n.t = function(e2, t2) {
                    if (1 & t2 && (e2 = n(e2)), 8 & t2)
                      return e2;
                    if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
                      return e2;
                    var r = /* @__PURE__ */ Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
                      for (var o in e2)
                        n.d(r, o, function(t3) {
                          return e2[t3];
                        }.bind(null, o));
                    return r;
                  }, n.n = function(e2) {
                    var t2 = e2 && e2.__esModule ? function() {
                      return e2.default;
                    } : function() {
                      return e2;
                    };
                    return n.d(t2, "a", t2), t2;
                  }, n.o = function(e2, t2) {
                    return Object.prototype.hasOwnProperty.call(e2, t2);
                  }, n.p = "", n(n.s = 1);
                }([function(e, t) {
                  e.exports = function(e2) {
                    return Array.isArray ? Array.isArray(e2) : "[object Array]" === Object.prototype.toString.call(e2);
                  };
                }, function(e, t, n) {
                  function r(e2) {
                    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
                      return typeof e3;
                    } : function(e3) {
                      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
                    })(e2);
                  }
                  function o(e2, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var r2 = t2[n2];
                      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
                    }
                  }
                  var i = n(2), a = n(8), s = n(0), c = function() {
                    function e2(t3, n3) {
                      var r2 = n3.location, o2 = void 0 === r2 ? 0 : r2, i2 = n3.distance, s2 = void 0 === i2 ? 100 : i2, c3 = n3.threshold, h = void 0 === c3 ? 0.6 : c3, l = n3.maxPatternLength, u = void 0 === l ? 32 : l, f = n3.caseSensitive, d = void 0 !== f && f, v = n3.tokenSeparator, p = void 0 === v ? / +/g : v, g = n3.findAllMatches, y = void 0 !== g && g, m = n3.minMatchCharLength, k = void 0 === m ? 1 : m, S = n3.id, x = void 0 === S ? null : S, b = n3.keys, M = void 0 === b ? [] : b, _ = n3.shouldSort, L = void 0 === _ || _, w = n3.getFn, A = void 0 === w ? a : w, C = n3.sortFn, I = void 0 === C ? function(e3, t4) {
                        return e3.score - t4.score;
                      } : C, O = n3.tokenize, j = void 0 !== O && O, P = n3.matchAllTokens, F = void 0 !== P && P, T = n3.includeMatches, z = void 0 !== T && T, E = n3.includeScore, K = void 0 !== E && E, $ = n3.verbose, J = void 0 !== $ && $;
                      !function(e3, t4) {
                        if (!(e3 instanceof t4))
                          throw new TypeError("Cannot call a class as a function");
                      }(this, e2), this.options = { location: o2, distance: s2, threshold: h, maxPatternLength: u, isCaseSensitive: d, tokenSeparator: p, findAllMatches: y, minMatchCharLength: k, id: x, keys: M, includeMatches: z, includeScore: K, shouldSort: L, getFn: A, sortFn: I, verbose: J, tokenize: j, matchAllTokens: F }, this.setCollection(t3);
                    }
                    var t2, n2, c2;
                    return t2 = e2, (n2 = [{ key: "setCollection", value: function(e3) {
                      return this.list = e3, e3;
                    } }, { key: "search", value: function(e3) {
                      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { limit: false };
                      this._log('---------\nSearch pattern: "'.concat(e3, '"'));
                      var n3 = this._prepareSearchers(e3), r2 = n3.tokenSearchers, o2 = n3.fullSearcher, i2 = this._search(r2, o2), a2 = i2.weights, s2 = i2.results;
                      return this._computeScore(a2, s2), this.options.shouldSort && this._sort(s2), t3.limit && "number" == typeof t3.limit && (s2 = s2.slice(0, t3.limit)), this._format(s2);
                    } }, { key: "_prepareSearchers", value: function() {
                      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t3 = [];
                      if (this.options.tokenize)
                        for (var n3 = e3.split(this.options.tokenSeparator), r2 = 0, o2 = n3.length; r2 < o2; r2 += 1)
                          t3.push(new i(n3[r2], this.options));
                      return { tokenSearchers: t3, fullSearcher: new i(e3, this.options) };
                    } }, { key: "_search", value: function() {
                      var e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t3 = arguments.length > 1 ? arguments[1] : void 0, n3 = this.list, r2 = {}, o2 = [];
                      if ("string" == typeof n3[0]) {
                        for (var i2 = 0, a2 = n3.length; i2 < a2; i2 += 1)
                          this._analyze({ key: "", value: n3[i2], record: i2, index: i2 }, { resultMap: r2, results: o2, tokenSearchers: e3, fullSearcher: t3 });
                        return { weights: null, results: o2 };
                      }
                      for (var s2 = {}, c3 = 0, h = n3.length; c3 < h; c3 += 1)
                        for (var l = n3[c3], u = 0, f = this.options.keys.length; u < f; u += 1) {
                          var d = this.options.keys[u];
                          if ("string" != typeof d) {
                            if (s2[d.name] = { weight: 1 - d.weight || 1 }, d.weight <= 0 || d.weight > 1)
                              throw new Error("Key weight has to be > 0 and <= 1");
                            d = d.name;
                          } else
                            s2[d] = { weight: 1 };
                          this._analyze({ key: d, value: this.options.getFn(l, d), record: l, index: c3 }, { resultMap: r2, results: o2, tokenSearchers: e3, fullSearcher: t3 });
                        }
                      return { weights: s2, results: o2 };
                    } }, { key: "_analyze", value: function(e3, t3) {
                      var n3 = e3.key, r2 = e3.arrayIndex, o2 = void 0 === r2 ? -1 : r2, i2 = e3.value, a2 = e3.record, c3 = e3.index, h = t3.tokenSearchers, l = void 0 === h ? [] : h, u = t3.fullSearcher, f = void 0 === u ? [] : u, d = t3.resultMap, v = void 0 === d ? {} : d, p = t3.results, g = void 0 === p ? [] : p;
                      if (null != i2) {
                        var y = false, m = -1, k = 0;
                        if ("string" == typeof i2) {
                          this._log("\nKey: ".concat("" === n3 ? "-" : n3));
                          var S = f.search(i2);
                          if (this._log('Full text: "'.concat(i2, '", score: ').concat(S.score)), this.options.tokenize) {
                            for (var x = i2.split(this.options.tokenSeparator), b = [], M = 0; M < l.length; M += 1) {
                              var _ = l[M];
                              this._log('\nPattern: "'.concat(_.pattern, '"'));
                              for (var L = false, w = 0; w < x.length; w += 1) {
                                var A = x[w], C = _.search(A), I = {};
                                C.isMatch ? (I[A] = C.score, y = true, L = true, b.push(C.score)) : (I[A] = 1, this.options.matchAllTokens || b.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(I[A]));
                              }
                              L && (k += 1);
                            }
                            m = b[0];
                            for (var O = b.length, j = 1; j < O; j += 1)
                              m += b[j];
                            m /= O, this._log("Token score average:", m);
                          }
                          var P = S.score;
                          m > -1 && (P = (P + m) / 2), this._log("Score average:", P);
                          var F = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;
                          if (this._log("\nCheck Matches: ".concat(F)), (y || S.isMatch) && F) {
                            var T = v[c3];
                            T ? T.output.push({ key: n3, arrayIndex: o2, value: i2, score: P, matchedIndices: S.matchedIndices }) : (v[c3] = { item: a2, output: [{ key: n3, arrayIndex: o2, value: i2, score: P, matchedIndices: S.matchedIndices }] }, g.push(v[c3]));
                          }
                        } else if (s(i2))
                          for (var z = 0, E = i2.length; z < E; z += 1)
                            this._analyze({ key: n3, arrayIndex: z, value: i2[z], record: a2, index: c3 }, { resultMap: v, results: g, tokenSearchers: l, fullSearcher: f });
                      }
                    } }, { key: "_computeScore", value: function(e3, t3) {
                      this._log("\n\nComputing score:\n");
                      for (var n3 = 0, r2 = t3.length; n3 < r2; n3 += 1) {
                        for (var o2 = t3[n3].output, i2 = o2.length, a2 = 1, s2 = 1, c3 = 0; c3 < i2; c3 += 1) {
                          var h = e3 ? e3[o2[c3].key].weight : 1, l = (1 === h ? o2[c3].score : o2[c3].score || 1e-3) * h;
                          1 !== h ? s2 = Math.min(s2, l) : (o2[c3].nScore = l, a2 *= l);
                        }
                        t3[n3].score = 1 === s2 ? a2 : s2, this._log(t3[n3]);
                      }
                    } }, { key: "_sort", value: function(e3) {
                      this._log("\n\nSorting...."), e3.sort(this.options.sortFn);
                    } }, { key: "_format", value: function(e3) {
                      var t3 = [];
                      if (this.options.verbose) {
                        var n3 = [];
                        this._log("\n\nOutput:\n\n", JSON.stringify(e3, function(e4, t4) {
                          if ("object" === r(t4) && null !== t4) {
                            if (-1 !== n3.indexOf(t4))
                              return;
                            n3.push(t4);
                          }
                          return t4;
                        })), n3 = null;
                      }
                      var o2 = [];
                      this.options.includeMatches && o2.push(function(e4, t4) {
                        var n4 = e4.output;
                        t4.matches = [];
                        for (var r2 = 0, o3 = n4.length; r2 < o3; r2 += 1) {
                          var i3 = n4[r2];
                          if (0 !== i3.matchedIndices.length) {
                            var a3 = { indices: i3.matchedIndices, value: i3.value };
                            i3.key && (a3.key = i3.key), i3.hasOwnProperty("arrayIndex") && i3.arrayIndex > -1 && (a3.arrayIndex = i3.arrayIndex), t4.matches.push(a3);
                          }
                        }
                      }), this.options.includeScore && o2.push(function(e4, t4) {
                        t4.score = e4.score;
                      });
                      for (var i2 = 0, a2 = e3.length; i2 < a2; i2 += 1) {
                        var s2 = e3[i2];
                        if (this.options.id && (s2.item = this.options.getFn(s2.item, this.options.id)[0]), o2.length) {
                          for (var c3 = { item: s2.item }, h = 0, l = o2.length; h < l; h += 1)
                            o2[h](s2, c3);
                          t3.push(c3);
                        } else
                          t3.push(s2.item);
                      }
                      return t3;
                    } }, { key: "_log", value: function() {
                      var e3;
                      this.options.verbose && (e3 = console).log.apply(e3, arguments);
                    } }]) && o(t2.prototype, n2), c2 && o(t2, c2), e2;
                  }();
                  e.exports = c;
                }, function(e, t, n) {
                  function r(e2, t2) {
                    for (var n2 = 0; n2 < t2.length; n2++) {
                      var r2 = t2[n2];
                      r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
                    }
                  }
                  var o = n(3), i = n(4), a = n(7), s = function() {
                    function e2(t3, n3) {
                      var r2 = n3.location, o2 = void 0 === r2 ? 0 : r2, i2 = n3.distance, s3 = void 0 === i2 ? 100 : i2, c = n3.threshold, h = void 0 === c ? 0.6 : c, l = n3.maxPatternLength, u = void 0 === l ? 32 : l, f = n3.isCaseSensitive, d = void 0 !== f && f, v = n3.tokenSeparator, p = void 0 === v ? / +/g : v, g = n3.findAllMatches, y = void 0 !== g && g, m = n3.minMatchCharLength, k = void 0 === m ? 1 : m;
                      !function(e3, t4) {
                        if (!(e3 instanceof t4))
                          throw new TypeError("Cannot call a class as a function");
                      }(this, e2), this.options = { location: o2, distance: s3, threshold: h, maxPatternLength: u, isCaseSensitive: d, tokenSeparator: p, findAllMatches: y, minMatchCharLength: k }, this.pattern = this.options.isCaseSensitive ? t3 : t3.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern));
                    }
                    var t2, n2, s2;
                    return t2 = e2, (n2 = [{ key: "search", value: function(e3) {
                      if (this.options.isCaseSensitive || (e3 = e3.toLowerCase()), this.pattern === e3)
                        return { isMatch: true, score: 0, matchedIndices: [[0, e3.length - 1]] };
                      var t3 = this.options, n3 = t3.maxPatternLength, r2 = t3.tokenSeparator;
                      if (this.pattern.length > n3)
                        return o(e3, this.pattern, r2);
                      var a2 = this.options, s3 = a2.location, c = a2.distance, h = a2.threshold, l = a2.findAllMatches, u = a2.minMatchCharLength;
                      return i(e3, this.pattern, this.patternAlphabet, { location: s3, distance: c, threshold: h, findAllMatches: l, minMatchCharLength: u });
                    } }]) && r(t2.prototype, n2), s2 && r(t2, s2), e2;
                  }();
                  e.exports = s;
                }, function(e, t) {
                  var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                  e.exports = function(e2, t2) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, o = new RegExp(t2.replace(n, "\\$&").replace(r, "|")), i = e2.match(o), a = !!i, s = [];
                    if (a)
                      for (var c = 0, h = i.length; c < h; c += 1) {
                        var l = i[c];
                        s.push([e2.indexOf(l), l.length - 1]);
                      }
                    return { score: a ? 0.5 : 1, isMatch: a, matchedIndices: s };
                  };
                }, function(e, t, n) {
                  var r = n(5), o = n(6);
                  e.exports = function(e2, t2, n2, i) {
                    for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? 0.6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e2.length, m = u, k = e2.indexOf(t2, g), S = t2.length, x = [], b = 0; b < y; b += 1)
                      x[b] = 0;
                    if (-1 !== k) {
                      var M = r(t2, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });
                      if (m = Math.min(M, m), -1 !== (k = e2.lastIndexOf(t2, g + S))) {
                        var _ = r(t2, { errors: 0, currentLocation: k, expectedLocation: g, distance: h });
                        m = Math.min(_, m);
                      }
                    }
                    k = -1;
                    for (var L = [], w = 1, A = S + y, C = 1 << S - 1, I = 0; I < S; I += 1) {
                      for (var O = 0, j = A; O < j; ) {
                        r(t2, { errors: I, currentLocation: g + j, expectedLocation: g, distance: h }) <= m ? O = j : A = j, j = Math.floor((A - O) / 2 + O);
                      }
                      A = j;
                      var P = Math.max(1, g - j + 1), F = d ? y : Math.min(g + j, y) + S, T = Array(F + 2);
                      T[F + 1] = (1 << I) - 1;
                      for (var z = F; z >= P; z -= 1) {
                        var E = z - 1, K = n2[e2.charAt(E)];
                        if (K && (x[E] = 1), T[z] = (T[z + 1] << 1 | 1) & K, 0 !== I && (T[z] |= (L[z + 1] | L[z]) << 1 | 1 | L[z + 1]), T[z] & C && (w = r(t2, { errors: I, currentLocation: E, expectedLocation: g, distance: h })) <= m) {
                          if (m = w, (k = E) <= g)
                            break;
                          P = Math.max(1, 2 * g - k);
                        }
                      }
                      if (r(t2, { errors: I + 1, currentLocation: g, expectedLocation: g, distance: h }) > m)
                        break;
                      L = T;
                    }
                    return { isMatch: k >= 0, score: 0 === w ? 1e-3 : w, matchedIndices: o(x, p) };
                  };
                }, function(e, t) {
                  e.exports = function(e2, t2) {
                    var n = t2.errors, r = void 0 === n ? 0 : n, o = t2.currentLocation, i = void 0 === o ? 0 : o, a = t2.expectedLocation, s = void 0 === a ? 0 : a, c = t2.distance, h = void 0 === c ? 100 : c, l = r / e2.length, u = Math.abs(s - i);
                    return h ? l + u / h : u ? 1 : l;
                  };
                }, function(e, t) {
                  e.exports = function() {
                    for (var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, i = 0, a = e2.length; i < a; i += 1) {
                      var s = e2[i];
                      s && -1 === r ? r = i : s || -1 === r || ((o = i - 1) - r + 1 >= t2 && n.push([r, o]), r = -1);
                    }
                    return e2[i - 1] && i - r >= t2 && n.push([r, i - 1]), n;
                  };
                }, function(e, t) {
                  e.exports = function(e2) {
                    for (var t2 = {}, n = e2.length, r = 0; r < n; r += 1)
                      t2[e2.charAt(r)] = 0;
                    for (var o = 0; o < n; o += 1)
                      t2[e2.charAt(o)] |= 1 << n - o - 1;
                    return t2;
                  };
                }, function(e, t, n) {
                  var r = n(0);
                  e.exports = function(e2, t2) {
                    return function e3(t3, n2, o) {
                      if (n2) {
                        var i = n2.indexOf("."), a = n2, s = null;
                        -1 !== i && (a = n2.slice(0, i), s = n2.slice(i + 1));
                        var c = t3[a];
                        if (null != c)
                          if (s || "string" != typeof c && "number" != typeof c)
                            if (r(c))
                              for (var h = 0, l = c.length; h < l; h += 1)
                                e3(c[h], s, o);
                            else
                              s && e3(c, s, o);
                          else
                            o.push(c.toString());
                      } else
                        o.push(t3);
                      return o;
                    }(e2, t2, []);
                  };
                }]);
              });
            },
            /* 3 */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              "use strict";
              __webpack_require__.d(__webpack_exports__, "a", function() {
                return symbolObservablePonyfill;
              });
              function symbolObservablePonyfill(root) {
                var result;
                var Symbol2 = root.Symbol;
                if (typeof Symbol2 === "function") {
                  if (Symbol2.observable) {
                    result = Symbol2.observable;
                  } else {
                    result = Symbol2("observable");
                    Symbol2.observable = result;
                  }
                } else {
                  result = "@@observable";
                }
                return result;
              }
              ;
            },
            /* 4 */
            /***/
            function(module2, exports2, __webpack_require__) {
              module2.exports = __webpack_require__(7);
            },
            /* 5 */
            /***/
            function(module2, exports2) {
              var g;
              g = /* @__PURE__ */ function() {
                return this;
              }();
              try {
                g = g || new Function("return this")();
              } catch (e) {
                if (typeof window === "object")
                  g = window;
              }
              module2.exports = g;
            },
            /* 6 */
            /***/
            function(module2, exports2) {
              module2.exports = function(originalModule) {
                if (!originalModule.webpackPolyfill) {
                  var module3 = Object.create(originalModule);
                  if (!module3.children)
                    module3.children = [];
                  Object.defineProperty(module3, "loaded", {
                    enumerable: true,
                    get: function() {
                      return module3.l;
                    }
                  });
                  Object.defineProperty(module3, "id", {
                    enumerable: true,
                    get: function() {
                      return module3.i;
                    }
                  });
                  Object.defineProperty(module3, "exports", {
                    enumerable: true
                  });
                  module3.webpackPolyfill = 1;
                }
                return module3;
              };
            },
            /* 7 */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              "use strict";
              __webpack_require__.r(__webpack_exports__);
              var dist_fuse = __webpack_require__(2);
              var fuse_default = /* @__PURE__ */ __webpack_require__.n(dist_fuse);
              var cjs = __webpack_require__(0);
              var cjs_default = /* @__PURE__ */ __webpack_require__.n(cjs);
              var es = __webpack_require__(1);
              var randomString = function randomString2() {
                return Math.random().toString(36).substring(7).split("").join(".");
              };
              var ActionTypes = {
                INIT: "@@redux/INIT" + randomString(),
                REPLACE: "@@redux/REPLACE" + randomString(),
                PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                  return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                }
              };
              function isPlainObject(obj) {
                if (typeof obj !== "object" || obj === null)
                  return false;
                var proto = obj;
                while (Object.getPrototypeOf(proto) !== null) {
                  proto = Object.getPrototypeOf(proto);
                }
                return Object.getPrototypeOf(obj) === proto;
              }
              function createStore(reducer, preloadedState, enhancer) {
                var _ref2;
                if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
                  throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");
                }
                if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                  enhancer = preloadedState;
                  preloadedState = void 0;
                }
                if (typeof enhancer !== "undefined") {
                  if (typeof enhancer !== "function") {
                    throw new Error("Expected the enhancer to be a function.");
                  }
                  return enhancer(createStore)(reducer, preloadedState);
                }
                if (typeof reducer !== "function") {
                  throw new Error("Expected the reducer to be a function.");
                }
                var currentReducer = reducer;
                var currentState = preloadedState;
                var currentListeners = [];
                var nextListeners = currentListeners;
                var isDispatching = false;
                function ensureCanMutateNextListeners() {
                  if (nextListeners === currentListeners) {
                    nextListeners = currentListeners.slice();
                  }
                }
                function getState() {
                  if (isDispatching) {
                    throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
                  }
                  return currentState;
                }
                function subscribe(listener) {
                  if (typeof listener !== "function") {
                    throw new Error("Expected the listener to be a function.");
                  }
                  if (isDispatching) {
                    throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                  }
                  var isSubscribed = true;
                  ensureCanMutateNextListeners();
                  nextListeners.push(listener);
                  return function unsubscribe() {
                    if (!isSubscribed) {
                      return;
                    }
                    if (isDispatching) {
                      throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");
                    }
                    isSubscribed = false;
                    ensureCanMutateNextListeners();
                    var index = nextListeners.indexOf(listener);
                    nextListeners.splice(index, 1);
                  };
                }
                function dispatch(action) {
                  if (!isPlainObject(action)) {
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                  }
                  if (typeof action.type === "undefined") {
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                  }
                  if (isDispatching) {
                    throw new Error("Reducers may not dispatch actions.");
                  }
                  try {
                    isDispatching = true;
                    currentState = currentReducer(currentState, action);
                  } finally {
                    isDispatching = false;
                  }
                  var listeners = currentListeners = nextListeners;
                  for (var i = 0; i < listeners.length; i++) {
                    var listener = listeners[i];
                    listener();
                  }
                  return action;
                }
                function replaceReducer(nextReducer) {
                  if (typeof nextReducer !== "function") {
                    throw new Error("Expected the nextReducer to be a function.");
                  }
                  currentReducer = nextReducer;
                  dispatch({
                    type: ActionTypes.REPLACE
                  });
                }
                function observable() {
                  var _ref;
                  var outerSubscribe = subscribe;
                  return _ref = {
                    /**
                     * The minimal observable subscription method.
                     * @param {Object} observer Any object that can be used as an observer.
                     * The observer object should have a `next` method.
                     * @returns {subscription} An object with an `unsubscribe` method that can
                     * be used to unsubscribe the observable from the store, and prevent further
                     * emission of values from the observable.
                     */
                    subscribe: function subscribe2(observer) {
                      if (typeof observer !== "object" || observer === null) {
                        throw new TypeError("Expected the observer to be an object.");
                      }
                      function observeState() {
                        if (observer.next) {
                          observer.next(getState());
                        }
                      }
                      observeState();
                      var unsubscribe = outerSubscribe(observeState);
                      return {
                        unsubscribe
                      };
                    }
                  }, _ref[es[
                    "a"
                    /* default */
                  ]] = function() {
                    return this;
                  }, _ref;
                }
                dispatch({
                  type: ActionTypes.INIT
                });
                return _ref2 = {
                  dispatch,
                  subscribe,
                  getState,
                  replaceReducer
                }, _ref2[es[
                  "a"
                  /* default */
                ]] = observable, _ref2;
              }
              function warning(message) {
                if (typeof console !== "undefined" && typeof console.error === "function") {
                  console.error(message);
                }
                try {
                  throw new Error(message);
                } catch (e) {
                }
              }
              function getUndefinedStateErrorMessage(key, action) {
                var actionType = action && action.type;
                var actionDescription = actionType && 'action "' + String(actionType) + '"' || "an action";
                return "Given " + actionDescription + ', reducer "' + key + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
              }
              function getUnexpectedStateShapeWarningMessage(inputState, reducers2, action, unexpectedKeyCache) {
                var reducerKeys = Object.keys(reducers2);
                var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                if (reducerKeys.length === 0) {
                  return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                }
                if (!isPlainObject(inputState)) {
                  return "The " + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
                }
                var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                  return !reducers2.hasOwnProperty(key) && !unexpectedKeyCache[key];
                });
                unexpectedKeys.forEach(function(key) {
                  unexpectedKeyCache[key] = true;
                });
                if (action && action.type === ActionTypes.REPLACE)
                  return;
                if (unexpectedKeys.length > 0) {
                  return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
                }
              }
              function assertReducerShape(reducers2) {
                Object.keys(reducers2).forEach(function(key) {
                  var reducer = reducers2[key];
                  var initialState = reducer(void 0, {
                    type: ActionTypes.INIT
                  });
                  if (typeof initialState === "undefined") {
                    throw new Error('Reducer "' + key + `" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
                  }
                  if (typeof reducer(void 0, {
                    type: ActionTypes.PROBE_UNKNOWN_ACTION()
                  }) === "undefined") {
                    throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.");
                  }
                });
              }
              function combineReducers(reducers2) {
                var reducerKeys = Object.keys(reducers2);
                var finalReducers = {};
                for (var i = 0; i < reducerKeys.length; i++) {
                  var key = reducerKeys[i];
                  if (false) {
                  }
                  if (typeof reducers2[key] === "function") {
                    finalReducers[key] = reducers2[key];
                  }
                }
                var finalReducerKeys = Object.keys(finalReducers);
                var unexpectedKeyCache;
                if (false) {
                }
                var shapeAssertionError;
                try {
                  assertReducerShape(finalReducers);
                } catch (e) {
                  shapeAssertionError = e;
                }
                return function combination(state, action) {
                  if (state === void 0) {
                    state = {};
                  }
                  if (shapeAssertionError) {
                    throw shapeAssertionError;
                  }
                  if (false) {
                    var warningMessage;
                  }
                  var hasChanged = false;
                  var nextState = {};
                  for (var _i = 0; _i < finalReducerKeys.length; _i++) {
                    var _key = finalReducerKeys[_i];
                    var reducer = finalReducers[_key];
                    var previousStateForKey = state[_key];
                    var nextStateForKey = reducer(previousStateForKey, action);
                    if (typeof nextStateForKey === "undefined") {
                      var errorMessage = getUndefinedStateErrorMessage(_key, action);
                      throw new Error(errorMessage);
                    }
                    nextState[_key] = nextStateForKey;
                    hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                  }
                  return hasChanged ? nextState : state;
                };
              }
              function bindActionCreator(actionCreator, dispatch) {
                return function() {
                  return dispatch(actionCreator.apply(this, arguments));
                };
              }
              function bindActionCreators(actionCreators, dispatch) {
                if (typeof actionCreators === "function") {
                  return bindActionCreator(actionCreators, dispatch);
                }
                if (typeof actionCreators !== "object" || actionCreators === null) {
                  throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? "null" : typeof actionCreators) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
                }
                var boundActionCreators = {};
                for (var key in actionCreators) {
                  var actionCreator = actionCreators[key];
                  if (typeof actionCreator === "function") {
                    boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                  }
                }
                return boundActionCreators;
              }
              function _defineProperty(obj, key, value) {
                if (key in obj) {
                  Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                  keys.push.apply(keys, Object.getOwnPropertySymbols(object));
                }
                if (enumerableOnly)
                  keys = keys.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                  });
                return keys;
              }
              function _objectSpread2(target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i] != null ? arguments[i] : {};
                  if (i % 2) {
                    ownKeys(source, true).forEach(function(key) {
                      _defineProperty(target, key, source[key]);
                    });
                  } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                  } else {
                    ownKeys(source).forEach(function(key) {
                      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                  }
                }
                return target;
              }
              function compose() {
                for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
                  funcs[_key] = arguments[_key];
                }
                if (funcs.length === 0) {
                  return function(arg) {
                    return arg;
                  };
                }
                if (funcs.length === 1) {
                  return funcs[0];
                }
                return funcs.reduce(function(a, b) {
                  return function() {
                    return a(b.apply(void 0, arguments));
                  };
                });
              }
              function applyMiddleware() {
                for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
                  middlewares[_key] = arguments[_key];
                }
                return function(createStore2) {
                  return function() {
                    var store = createStore2.apply(void 0, arguments);
                    var _dispatch = function dispatch() {
                      throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
                    };
                    var middlewareAPI = {
                      getState: store.getState,
                      dispatch: function dispatch() {
                        return _dispatch.apply(void 0, arguments);
                      }
                    };
                    var chain = middlewares.map(function(middleware) {
                      return middleware(middlewareAPI);
                    });
                    _dispatch = compose.apply(void 0, chain)(store.dispatch);
                    return _objectSpread2({}, store, {
                      dispatch: _dispatch
                    });
                  };
                };
              }
              function isCrushed() {
              }
              if (false) {
              }
              var defaultState = [];
              function items_items(state, action) {
                if (state === void 0) {
                  state = defaultState;
                }
                switch (action.type) {
                  case "ADD_ITEM": {
                    var newState = [].concat(state, [{
                      id: action.id,
                      choiceId: action.choiceId,
                      groupId: action.groupId,
                      value: action.value,
                      label: action.label,
                      active: true,
                      highlighted: false,
                      customProperties: action.customProperties,
                      placeholder: action.placeholder || false,
                      keyCode: null
                    }]);
                    return newState.map(function(obj) {
                      var item = obj;
                      item.highlighted = false;
                      return item;
                    });
                  }
                  case "REMOVE_ITEM": {
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === action.id) {
                        item.active = false;
                      }
                      return item;
                    });
                  }
                  case "HIGHLIGHT_ITEM": {
                    return state.map(function(obj) {
                      var item = obj;
                      if (item.id === action.id) {
                        item.highlighted = action.highlighted;
                      }
                      return item;
                    });
                  }
                  default: {
                    return state;
                  }
                }
              }
              var groups_defaultState = [];
              function groups(state, action) {
                if (state === void 0) {
                  state = groups_defaultState;
                }
                switch (action.type) {
                  case "ADD_GROUP": {
                    return [].concat(state, [{
                      id: action.id,
                      value: action.value,
                      active: action.active,
                      disabled: action.disabled
                    }]);
                  }
                  case "CLEAR_CHOICES": {
                    return [];
                  }
                  default: {
                    return state;
                  }
                }
              }
              var choices_defaultState = [];
              function choices_choices(state, action) {
                if (state === void 0) {
                  state = choices_defaultState;
                }
                switch (action.type) {
                  case "ADD_CHOICE": {
                    return [].concat(state, [{
                      id: action.id,
                      elementId: action.elementId,
                      groupId: action.groupId,
                      value: action.value,
                      label: action.label || action.value,
                      disabled: action.disabled || false,
                      selected: false,
                      active: true,
                      score: 9999,
                      customProperties: action.customProperties,
                      placeholder: action.placeholder || false,
                      keyCode: null
                    }]);
                  }
                  case "ADD_ITEM": {
                    if (action.activateOptions) {
                      return state.map(function(obj) {
                        var choice = obj;
                        choice.active = action.active;
                        return choice;
                      });
                    }
                    if (action.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice = obj;
                        if (choice.id === parseInt(action.choiceId, 10)) {
                          choice.selected = true;
                        }
                        return choice;
                      });
                    }
                    return state;
                  }
                  case "REMOVE_ITEM": {
                    if (action.choiceId > -1) {
                      return state.map(function(obj) {
                        var choice = obj;
                        if (choice.id === parseInt(action.choiceId, 10)) {
                          choice.selected = false;
                        }
                        return choice;
                      });
                    }
                    return state;
                  }
                  case "FILTER_CHOICES": {
                    return state.map(function(obj) {
                      var choice = obj;
                      choice.active = action.results.some(function(_ref) {
                        var item = _ref.item, score = _ref.score;
                        if (item.id === choice.id) {
                          choice.score = score;
                          return true;
                        }
                        return false;
                      });
                      return choice;
                    });
                  }
                  case "ACTIVATE_CHOICES": {
                    return state.map(function(obj) {
                      var choice = obj;
                      choice.active = action.active;
                      return choice;
                    });
                  }
                  case "CLEAR_CHOICES": {
                    return choices_defaultState;
                  }
                  default: {
                    return state;
                  }
                }
              }
              var general_defaultState = {
                loading: false
              };
              var general = function general2(state, action) {
                if (state === void 0) {
                  state = general_defaultState;
                }
                switch (action.type) {
                  case "SET_IS_LOADING": {
                    return {
                      loading: action.isLoading
                    };
                  }
                  default: {
                    return state;
                  }
                }
              };
              var reducers_general = general;
              var getRandomNumber = function getRandomNumber2(min, max) {
                return Math.floor(Math.random() * (max - min) + min);
              };
              var generateChars = function generateChars2(length) {
                var chars = "";
                for (var i = 0; i < length; i++) {
                  var randomChar = getRandomNumber(0, 36);
                  chars += randomChar.toString(36);
                }
                return chars;
              };
              var generateId = function generateId2(element, prefix) {
                var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
                id = id.replace(/(:|\.|\[|\]|,)/g, "");
                id = prefix + "-" + id;
                return id;
              };
              var getType = function getType2(obj) {
                return Object.prototype.toString.call(obj).slice(8, -1);
              };
              var isType = function isType2(type, obj) {
                return obj !== void 0 && obj !== null && getType(obj) === type;
              };
              var utils_wrap = function wrap(element, wrapper) {
                if (wrapper === void 0) {
                  wrapper = document.createElement("div");
                }
                if (element.nextSibling) {
                  element.parentNode.insertBefore(wrapper, element.nextSibling);
                } else {
                  element.parentNode.appendChild(wrapper);
                }
                return wrapper.appendChild(element);
              };
              var findAncestorByAttrName = function findAncestorByAttrName2(el, attr) {
                return el.closest("[" + attr + "]");
              };
              var getAdjacentEl = function getAdjacentEl2(startEl, className, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                if (!startEl || !className) {
                  return;
                }
                var parent = startEl.parentNode.parentNode;
                var children = Array.from(parent.querySelectorAll(className));
                var startPos = children.indexOf(startEl);
                var operatorDirection = direction > 0 ? 1 : -1;
                return children[startPos + operatorDirection];
              };
              var isScrolledIntoView = function isScrolledIntoView2(el, parent, direction) {
                if (direction === void 0) {
                  direction = 1;
                }
                if (!el) {
                  return;
                }
                var isVisible;
                if (direction > 0) {
                  isVisible = parent.scrollTop + parent.offsetHeight >= el.offsetTop + el.offsetHeight;
                } else {
                  isVisible = el.offsetTop >= parent.scrollTop;
                }
                return isVisible;
              };
              var sanitise = function sanitise2(value) {
                if (typeof value !== "string") {
                  return value;
                }
                return value.replace(/&/g, "&amp;").replace(/>/g, "&rt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
              };
              var strToEl = function() {
                var tmpEl = document.createElement("div");
                return function(str) {
                  var cleanedInput = str.trim();
                  tmpEl.innerHTML = cleanedInput;
                  var firldChild = tmpEl.children[0];
                  while (tmpEl.firstChild) {
                    tmpEl.removeChild(tmpEl.firstChild);
                  }
                  return firldChild;
                };
              }();
              var sortByAlpha = (
                /**
                 * @param {{ label?: string, value: string }} a
                 * @param {{ label?: string, value: string }} b
                 * @returns {number}
                 */
                function sortByAlpha2(_ref, _ref2) {
                  var value = _ref.value, _ref$label = _ref.label, label = _ref$label === void 0 ? value : _ref$label;
                  var value2 = _ref2.value, _ref2$label = _ref2.label, label2 = _ref2$label === void 0 ? value2 : _ref2$label;
                  return label.localeCompare(label2, [], {
                    sensitivity: "base",
                    ignorePunctuation: true,
                    numeric: true
                  });
                }
              );
              var sortByScore = function sortByScore2(a, b) {
                return a.score - b.score;
              };
              var dispatchEvent = function dispatchEvent2(element, type, customArgs) {
                if (customArgs === void 0) {
                  customArgs = null;
                }
                var event = new CustomEvent(type, {
                  detail: customArgs,
                  bubbles: true,
                  cancelable: true
                });
                return element.dispatchEvent(event);
              };
              var getWindowHeight = function getWindowHeight2() {
                var _document = document, body = _document.body;
                var html = document.documentElement;
                return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
              };
              var isIE11 = function isIE112(userAgent) {
                return !!(userAgent.match(/Trident/) && userAgent.match(/rv[ :]11/));
              };
              var existsInArray = function existsInArray2(array, value, key) {
                if (key === void 0) {
                  key = "value";
                }
                return array.some(function(item) {
                  if (typeof value === "string") {
                    return item[key] === value.trim();
                  }
                  return item[key] === value;
                });
              };
              var cloneObject = function cloneObject2(obj) {
                return JSON.parse(JSON.stringify(obj));
              };
              var diff = function diff2(a, b) {
                var aKeys = Object.keys(a).sort();
                var bKeys = Object.keys(b).sort();
                return aKeys.filter(function(i) {
                  return bKeys.indexOf(i) < 0;
                });
              };
              var appReducer = combineReducers({
                items: items_items,
                groups,
                choices: choices_choices,
                general: reducers_general
              });
              var reducers_rootReducer = function rootReducer(passedState, action) {
                var state = passedState;
                if (action.type === "CLEAR_ALL") {
                  state = void 0;
                } else if (action.type === "RESET_TO") {
                  return cloneObject(action.state);
                }
                return appReducer(state, action);
              };
              var reducers = reducers_rootReducer;
              function _defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function _createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  _defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  _defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var store_Store = /* @__PURE__ */ function() {
                function Store() {
                  this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                }
                var _proto = Store.prototype;
                _proto.subscribe = function subscribe(onChange) {
                  this._store.subscribe(onChange);
                };
                _proto.dispatch = function dispatch(action) {
                  this._store.dispatch(action);
                };
                _proto.isLoading = function isLoading() {
                  return this.state.general.loading;
                };
                _proto.getChoiceById = function getChoiceById(id) {
                  if (id) {
                    var n = parseInt(id, 10);
                    return this.activeChoices.find(function(choice) {
                      return choice.id === n;
                    });
                  }
                  return false;
                };
                _proto.getGroupById = function getGroupById(id) {
                  return this.groups.find(function(group) {
                    return group.id === parseInt(id, 10);
                  });
                };
                _createClass(Store, [{
                  key: "state",
                  get: function get() {
                    return this._store.getState();
                  }
                  /**
                   * Get items from store
                   * @return {Array} Item objects
                   */
                }, {
                  key: "items",
                  get: function get() {
                    return this.state.items;
                  }
                  /**
                   * Get active items from store
                   * @return {Array} Item objects
                   */
                }, {
                  key: "activeItems",
                  get: function get() {
                    return this.items.filter(function(item) {
                      return item.active === true;
                    });
                  }
                  /**
                   * Get highlighted items from store
                   * @return {Array} Item objects
                   */
                }, {
                  key: "highlightedActiveItems",
                  get: function get() {
                    return this.items.filter(function(item) {
                      return item.active && item.highlighted;
                    });
                  }
                  /**
                   * Get choices from store
                   * @return {Array} Option objects
                   */
                }, {
                  key: "choices",
                  get: function get() {
                    return this.state.choices;
                  }
                  /**
                   * Get active choices from store
                   * @return {Array} Option objects
                   */
                }, {
                  key: "activeChoices",
                  get: function get() {
                    var choices = this.choices;
                    var values = choices.filter(function(choice) {
                      return choice.active === true;
                    });
                    return values;
                  }
                  /**
                   * Get selectable choices from store
                   * @return {Array} Option objects
                   */
                }, {
                  key: "selectableChoices",
                  get: function get() {
                    return this.choices.filter(function(choice) {
                      return choice.disabled !== true;
                    });
                  }
                  /**
                   * Get choices that can be searched (excluding placeholders)
                   * @return {Array} Option objects
                   */
                }, {
                  key: "searchableChoices",
                  get: function get() {
                    return this.selectableChoices.filter(function(choice) {
                      return choice.placeholder !== true;
                    });
                  }
                  /**
                   * Get placeholder choice from store
                   * @return {Object} Found placeholder
                   */
                }, {
                  key: "placeholderChoice",
                  get: function get() {
                    return [].concat(this.choices).reverse().find(function(choice) {
                      return choice.placeholder === true;
                    });
                  }
                  /**
                   * Get groups from store
                   * @return {Array} Group objects
                   */
                }, {
                  key: "groups",
                  get: function get() {
                    return this.state.groups;
                  }
                  /**
                   * Get active groups from store
                   * @return {Array} Group objects
                   */
                }, {
                  key: "activeGroups",
                  get: function get() {
                    var groups2 = this.groups, choices = this.choices;
                    return groups2.filter(function(group) {
                      var isActive = group.active === true && group.disabled === false;
                      var hasActiveOptions = choices.some(function(choice) {
                        return choice.active === true && choice.disabled === false;
                      });
                      return isActive && hasActiveOptions;
                    }, []);
                  }
                }]);
                return Store;
              }();
              var Dropdown = /* @__PURE__ */ function() {
                function Dropdown2(_ref) {
                  var element = _ref.element, type = _ref.type, classNames = _ref.classNames;
                  Object.assign(this, {
                    element,
                    type,
                    classNames
                  });
                  this.isActive = false;
                }
                var _proto = Dropdown2.prototype;
                _proto.distanceFromTopWindow = function distanceFromTopWindow() {
                  this.dimensions = this.element.getBoundingClientRect();
                  this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight);
                  return this.position;
                };
                _proto.getChild = function getChild(selector) {
                  return this.element.querySelector(selector);
                };
                _proto.show = function show() {
                  this.element.classList.add(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isActive = true;
                  return this;
                };
                _proto.hide = function hide() {
                  this.element.classList.remove(this.classNames.activeState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.isActive = false;
                  return this;
                };
                return Dropdown2;
              }();
              var container_Container = /* @__PURE__ */ function() {
                function Container(_ref) {
                  var element = _ref.element, type = _ref.type, classNames = _ref.classNames, position = _ref.position;
                  Object.assign(this, {
                    element,
                    classNames,
                    type,
                    position
                  });
                  this.isOpen = false;
                  this.isFlipped = false;
                  this.isFocussed = false;
                  this.isDisabled = false;
                  this.isLoading = false;
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                var _proto = Container.prototype;
                _proto.addEventListeners = function addEventListeners() {
                  this.element.addEventListener("focus", this._onFocus);
                  this.element.addEventListener("blur", this._onBlur);
                };
                _proto.removeEventListeners = function removeEventListeners() {
                  this.element.removeEventListener("focus", this._onFocus);
                  this.element.removeEventListener("blur", this._onBlur);
                };
                _proto.shouldFlip = function shouldFlip(dropdownPos, windowHeight) {
                  if (windowHeight === void 0) {
                    windowHeight = getWindowHeight();
                  }
                  if (dropdownPos === void 0) {
                    return false;
                  }
                  var shouldFlip2 = false;
                  if (this.position === "auto") {
                    shouldFlip2 = dropdownPos >= windowHeight;
                  } else if (this.position === "top") {
                    shouldFlip2 = true;
                  }
                  return shouldFlip2;
                };
                _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                _proto.removeActiveDescendant = function removeActiveDescendant() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                _proto.open = function open(dropdownPos) {
                  this.element.classList.add(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "true");
                  this.isOpen = true;
                  if (this.shouldFlip(dropdownPos)) {
                    this.element.classList.add(this.classNames.flippedState);
                    this.isFlipped = true;
                  }
                };
                _proto.close = function close() {
                  this.element.classList.remove(this.classNames.openState);
                  this.element.setAttribute("aria-expanded", "false");
                  this.removeActiveDescendant();
                  this.isOpen = false;
                  if (this.isFlipped) {
                    this.element.classList.remove(this.classNames.flippedState);
                    this.isFlipped = false;
                  }
                };
                _proto.focus = function focus() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                _proto.addFocusState = function addFocusState() {
                  this.element.classList.add(this.classNames.focusState);
                };
                _proto.removeFocusState = function removeFocusState() {
                  this.element.classList.remove(this.classNames.focusState);
                };
                _proto.enable = function enable() {
                  this.element.classList.remove(this.classNames.disabledState);
                  this.element.removeAttribute("aria-disabled");
                  if (this.type === "select-one") {
                    this.element.setAttribute("tabindex", "0");
                  }
                  this.isDisabled = false;
                };
                _proto.disable = function disable() {
                  this.element.classList.add(this.classNames.disabledState);
                  this.element.setAttribute("aria-disabled", "true");
                  if (this.type === "select-one") {
                    this.element.setAttribute("tabindex", "-1");
                  }
                  this.isDisabled = true;
                };
                _proto.wrap = function wrap(element) {
                  utils_wrap(element, this.element);
                };
                _proto.unwrap = function unwrap(element) {
                  this.element.parentNode.insertBefore(element, this.element);
                  this.element.parentNode.removeChild(this.element);
                };
                _proto.addLoadingState = function addLoadingState() {
                  this.element.classList.add(this.classNames.loadingState);
                  this.element.setAttribute("aria-busy", "true");
                  this.isLoading = true;
                };
                _proto.removeLoadingState = function removeLoadingState() {
                  this.element.classList.remove(this.classNames.loadingState);
                  this.element.removeAttribute("aria-busy");
                  this.isLoading = false;
                };
                _proto._onFocus = function _onFocus() {
                  this.isFocussed = true;
                };
                _proto._onBlur = function _onBlur() {
                  this.isFocussed = false;
                };
                return Container;
              }();
              function input_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function input_createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  input_defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  input_defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var input_Input = /* @__PURE__ */ function() {
                function Input(_ref) {
                  var element = _ref.element, type = _ref.type, classNames = _ref.classNames, preventPaste = _ref.preventPaste;
                  this.element = element;
                  this.type = type;
                  this.classNames = classNames;
                  this.preventPaste = preventPaste;
                  this.isFocussed = this.element === document.activeElement;
                  this.isDisabled = element.disabled;
                  this._onPaste = this._onPaste.bind(this);
                  this._onInput = this._onInput.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                }
                var _proto = Input.prototype;
                _proto.addEventListeners = function addEventListeners() {
                  this.element.addEventListener("paste", this._onPaste);
                  this.element.addEventListener("input", this._onInput, {
                    passive: true
                  });
                  this.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                };
                _proto.removeEventListeners = function removeEventListeners() {
                  this.element.removeEventListener("input", this._onInput, {
                    passive: true
                  });
                  this.element.removeEventListener("paste", this._onPaste);
                  this.element.removeEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.element.removeEventListener("blur", this._onBlur, {
                    passive: true
                  });
                };
                _proto.enable = function enable() {
                  this.element.removeAttribute("disabled");
                  this.isDisabled = false;
                };
                _proto.disable = function disable() {
                  this.element.setAttribute("disabled", "");
                  this.isDisabled = true;
                };
                _proto.focus = function focus() {
                  if (!this.isFocussed) {
                    this.element.focus();
                  }
                };
                _proto.blur = function blur() {
                  if (this.isFocussed) {
                    this.element.blur();
                  }
                };
                _proto.clear = function clear(setWidth) {
                  if (setWidth === void 0) {
                    setWidth = true;
                  }
                  if (this.element.value) {
                    this.element.value = "";
                  }
                  if (setWidth) {
                    this.setWidth();
                  }
                  return this;
                };
                _proto.setWidth = function setWidth() {
                  var _this$element = this.element, style = _this$element.style, value = _this$element.value, placeholder = _this$element.placeholder;
                  style.minWidth = placeholder.length + 1 + "ch";
                  style.width = value.length + 1 + "ch";
                };
                _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
                  this.element.setAttribute("aria-activedescendant", activeDescendantID);
                };
                _proto.removeActiveDescendant = function removeActiveDescendant() {
                  this.element.removeAttribute("aria-activedescendant");
                };
                _proto._onInput = function _onInput() {
                  if (this.type !== "select-one") {
                    this.setWidth();
                  }
                };
                _proto._onPaste = function _onPaste(event) {
                  if (this.preventPaste) {
                    event.preventDefault();
                  }
                };
                _proto._onFocus = function _onFocus() {
                  this.isFocussed = true;
                };
                _proto._onBlur = function _onBlur() {
                  this.isFocussed = false;
                };
                input_createClass(Input, [{
                  key: "placeholder",
                  set: function set(placeholder) {
                    this.element.placeholder = placeholder;
                  }
                }, {
                  key: "value",
                  get: function get() {
                    return sanitise(this.element.value);
                  },
                  set: function set(value) {
                    this.element.value = value;
                  }
                }]);
                return Input;
              }();
              var DEFAULT_CLASSNAMES = {
                containerOuter: "choices",
                containerInner: "choices__inner",
                input: "choices__input",
                inputCloned: "choices__input--cloned",
                list: "choices__list",
                listItems: "choices__list--multiple",
                listSingle: "choices__list--single",
                listDropdown: "choices__list--dropdown",
                item: "choices__item",
                itemSelectable: "choices__item--selectable",
                itemDisabled: "choices__item--disabled",
                itemChoice: "choices__item--choice",
                placeholder: "choices__placeholder",
                group: "choices__group",
                groupHeading: "choices__heading",
                button: "choices__button",
                activeState: "is-active",
                focusState: "is-focused",
                openState: "is-open",
                disabledState: "is-disabled",
                highlightedState: "is-highlighted",
                flippedState: "is-flipped",
                loadingState: "is-loading",
                noResults: "has-no-results",
                noChoices: "has-no-choices"
              };
              var DEFAULT_CONFIG = {
                items: [],
                choices: [],
                silent: false,
                renderChoiceLimit: -1,
                maxItemCount: -1,
                addItems: true,
                addItemFilter: null,
                removeItems: true,
                removeItemButton: false,
                editItems: false,
                duplicateItemsAllowed: true,
                delimiter: ",",
                paste: true,
                searchEnabled: true,
                searchChoices: true,
                searchFloor: 1,
                searchResultLimit: 4,
                searchFields: ["label", "value"],
                position: "auto",
                resetScrollPosition: true,
                shouldSort: true,
                shouldSortItems: false,
                sortFn: sortByAlpha,
                placeholder: true,
                placeholderValue: null,
                searchPlaceholderValue: null,
                prependValue: null,
                appendValue: null,
                renderSelectedChoices: "auto",
                loadingText: "Loading...",
                noResultsText: "No results found",
                noChoicesText: "No choices to choose from",
                itemSelectText: "Press to select",
                uniqueItemText: "Only unique values can be added",
                customAddItemText: "Only values matching specific conditions can be added",
                addItemText: function addItemText(value) {
                  return 'Press Enter to add <b>"' + sanitise(value) + '"</b>';
                },
                maxItemText: function maxItemText(maxItemCount) {
                  return "Only " + maxItemCount + " values can be added";
                },
                itemComparer: function itemComparer(choice, item) {
                  return choice === item;
                },
                fuseOptions: {
                  includeScore: true
                },
                callbackOnInit: null,
                callbackOnCreateTemplates: null,
                classNames: DEFAULT_CLASSNAMES
              };
              var EVENTS = {
                showDropdown: "showDropdown",
                hideDropdown: "hideDropdown",
                change: "change",
                choice: "choice",
                search: "search",
                addItem: "addItem",
                removeItem: "removeItem",
                highlightItem: "highlightItem",
                highlightChoice: "highlightChoice"
              };
              var ACTION_TYPES = {
                ADD_CHOICE: "ADD_CHOICE",
                FILTER_CHOICES: "FILTER_CHOICES",
                ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                CLEAR_CHOICES: "CLEAR_CHOICES",
                ADD_GROUP: "ADD_GROUP",
                ADD_ITEM: "ADD_ITEM",
                REMOVE_ITEM: "REMOVE_ITEM",
                HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                CLEAR_ALL: "CLEAR_ALL"
              };
              var KEY_CODES = {
                BACK_KEY: 46,
                DELETE_KEY: 8,
                ENTER_KEY: 13,
                A_KEY: 65,
                ESC_KEY: 27,
                UP_KEY: 38,
                DOWN_KEY: 40,
                PAGE_UP_KEY: 33,
                PAGE_DOWN_KEY: 34
              };
              var SCROLLING_SPEED = 4;
              var list_List = /* @__PURE__ */ function() {
                function List(_ref) {
                  var element = _ref.element;
                  Object.assign(this, {
                    element
                  });
                  this.scrollPos = this.element.scrollTop;
                  this.height = this.element.offsetHeight;
                }
                var _proto = List.prototype;
                _proto.clear = function clear() {
                  this.element.innerHTML = "";
                };
                _proto.append = function append(node) {
                  this.element.appendChild(node);
                };
                _proto.getChild = function getChild(selector) {
                  return this.element.querySelector(selector);
                };
                _proto.hasChildren = function hasChildren() {
                  return this.element.hasChildNodes();
                };
                _proto.scrollToTop = function scrollToTop() {
                  this.element.scrollTop = 0;
                };
                _proto.scrollToChoice = function scrollToChoice(choice, direction) {
                  var _this = this;
                  if (!choice) {
                    return;
                  }
                  var dropdownHeight = this.element.offsetHeight;
                  var choiceHeight = choice.offsetHeight;
                  var choicePos = choice.offsetTop + choiceHeight;
                  var containerScrollPos = this.element.scrollTop + dropdownHeight;
                  var destination = direction > 0 ? this.element.scrollTop + choicePos - containerScrollPos : choice.offsetTop;
                  requestAnimationFrame(function(time) {
                    _this._animateScroll(time, destination, direction);
                  });
                };
                _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
                  var easing = (destination - scrollPos) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos + distance;
                };
                _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
                  var easing = (scrollPos - destination) / strength;
                  var distance = easing > 1 ? easing : 1;
                  this.element.scrollTop = scrollPos - distance;
                };
                _proto._animateScroll = function _animateScroll(time, destination, direction) {
                  var _this2 = this;
                  var strength = SCROLLING_SPEED;
                  var choiceListScrollTop = this.element.scrollTop;
                  var continueAnimation = false;
                  if (direction > 0) {
                    this._scrollDown(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop < destination) {
                      continueAnimation = true;
                    }
                  } else {
                    this._scrollUp(choiceListScrollTop, strength, destination);
                    if (choiceListScrollTop > destination) {
                      continueAnimation = true;
                    }
                  }
                  if (continueAnimation) {
                    requestAnimationFrame(function() {
                      _this2._animateScroll(time, destination, direction);
                    });
                  }
                };
                return List;
              }();
              function wrapped_element_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function wrapped_element_createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  wrapped_element_defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  wrapped_element_defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var wrapped_element_WrappedElement = /* @__PURE__ */ function() {
                function WrappedElement(_ref) {
                  var element = _ref.element, classNames = _ref.classNames;
                  Object.assign(this, {
                    element,
                    classNames
                  });
                  if (!(element instanceof Element)) {
                    throw new TypeError("Invalid element passed");
                  }
                  this.isDisabled = false;
                }
                var _proto = WrappedElement.prototype;
                _proto.conceal = function conceal() {
                  this.element.classList.add(this.classNames.input);
                  this.element.hidden = true;
                  this.element.tabIndex = "-1";
                  var origStyle = this.element.getAttribute("style");
                  if (origStyle) {
                    this.element.setAttribute("data-choice-orig-style", origStyle);
                  }
                  this.element.setAttribute("data-choice", "active");
                };
                _proto.reveal = function reveal() {
                  this.element.classList.remove(this.classNames.input);
                  this.element.hidden = false;
                  this.element.removeAttribute("tabindex");
                  var origStyle = this.element.getAttribute("data-choice-orig-style");
                  if (origStyle) {
                    this.element.removeAttribute("data-choice-orig-style");
                    this.element.setAttribute("style", origStyle);
                  } else {
                    this.element.removeAttribute("style");
                  }
                  this.element.removeAttribute("data-choice");
                  this.element.value = this.element.value;
                };
                _proto.enable = function enable() {
                  this.element.removeAttribute("disabled");
                  this.element.disabled = false;
                  this.isDisabled = false;
                };
                _proto.disable = function disable() {
                  this.element.setAttribute("disabled", "");
                  this.element.disabled = true;
                  this.isDisabled = true;
                };
                _proto.triggerEvent = function triggerEvent(eventType, data) {
                  dispatchEvent(this.element, eventType, data);
                };
                wrapped_element_createClass(WrappedElement, [{
                  key: "value",
                  get: function get() {
                    return this.element.value;
                  },
                  set: function set(value) {
                    this.element.value = value;
                  }
                }]);
                return WrappedElement;
              }();
              function wrapped_input_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function wrapped_input_createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  wrapped_input_defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  wrapped_input_defineProperties(Constructor, staticProps);
                return Constructor;
              }
              function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
              }
              var WrappedInput = /* @__PURE__ */ function(_WrappedElement) {
                _inheritsLoose(WrappedInput2, _WrappedElement);
                function WrappedInput2(_ref) {
                  var _this;
                  var element = _ref.element, classNames = _ref.classNames, delimiter = _ref.delimiter;
                  _this = _WrappedElement.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.delimiter = delimiter;
                  return _this;
                }
                wrapped_input_createClass(WrappedInput2, [{
                  key: "value",
                  get: function get() {
                    return this.element.value;
                  },
                  set: function set(items) {
                    var itemValues = items.map(function(_ref2) {
                      var value = _ref2.value;
                      return value;
                    });
                    var joinedValues = itemValues.join(this.delimiter);
                    this.element.setAttribute("value", joinedValues);
                    this.element.value = joinedValues;
                  }
                }]);
                return WrappedInput2;
              }(wrapped_element_WrappedElement);
              function wrapped_select_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function wrapped_select_createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  wrapped_select_defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  wrapped_select_defineProperties(Constructor, staticProps);
                return Constructor;
              }
              function wrapped_select_inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
              }
              var WrappedSelect = /* @__PURE__ */ function(_WrappedElement) {
                wrapped_select_inheritsLoose(WrappedSelect2, _WrappedElement);
                function WrappedSelect2(_ref) {
                  var _this;
                  var element = _ref.element, classNames = _ref.classNames, template = _ref.template;
                  _this = _WrappedElement.call(this, {
                    element,
                    classNames
                  }) || this;
                  _this.template = template;
                  return _this;
                }
                var _proto = WrappedSelect2.prototype;
                _proto.appendDocFragment = function appendDocFragment(fragment) {
                  this.element.innerHTML = "";
                  this.element.appendChild(fragment);
                };
                wrapped_select_createClass(WrappedSelect2, [{
                  key: "placeholderOption",
                  get: function get() {
                    return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                    this.element.querySelector("option[placeholder]");
                  }
                }, {
                  key: "optionGroups",
                  get: function get() {
                    return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                  }
                }, {
                  key: "options",
                  get: function get() {
                    return Array.from(this.element.options);
                  },
                  set: function set(options) {
                    var _this2 = this;
                    var fragment = document.createDocumentFragment();
                    var addOptionToFragment = function addOptionToFragment2(data) {
                      var option = _this2.template(data);
                      fragment.appendChild(option);
                    };
                    options.forEach(function(optionData) {
                      return addOptionToFragment(optionData);
                    });
                    this.appendDocFragment(fragment);
                  }
                }]);
                return WrappedSelect2;
              }(wrapped_element_WrappedElement);
              var TEMPLATES = (
                /** @type {Templates} */
                {
                  containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
                    var _containerOuter = _ref.containerOuter;
                    var div = Object.assign(document.createElement("div"), {
                      className: _containerOuter
                    });
                    div.dataset.type = passedElementType;
                    if (dir) {
                      div.dir = dir;
                    }
                    if (isSelectOneElement) {
                      div.tabIndex = 0;
                    }
                    if (isSelectElement) {
                      div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                      if (searchEnabled) {
                        div.setAttribute("aria-autocomplete", "list");
                      }
                    }
                    div.setAttribute("aria-haspopup", "true");
                    div.setAttribute("aria-expanded", "false");
                    return div;
                  },
                  containerInner: function containerInner(_ref2) {
                    var _containerInner = _ref2.containerInner;
                    return Object.assign(document.createElement("div"), {
                      className: _containerInner
                    });
                  },
                  itemList: function itemList(_ref3, isSelectOneElement) {
                    var list = _ref3.list, listSingle = _ref3.listSingle, listItems = _ref3.listItems;
                    return Object.assign(document.createElement("div"), {
                      className: list + " " + (isSelectOneElement ? listSingle : listItems)
                    });
                  },
                  placeholder: function placeholder(_ref4, value) {
                    var _placeholder = _ref4.placeholder;
                    return Object.assign(document.createElement("div"), {
                      className: _placeholder,
                      innerHTML: value
                    });
                  },
                  item: function item(_ref5, _ref6, removeItemButton) {
                    var _item = _ref5.item, button = _ref5.button, highlightedState = _ref5.highlightedState, itemSelectable = _ref5.itemSelectable, placeholder = _ref5.placeholder;
                    var id = _ref6.id, value = _ref6.value, label = _ref6.label, customProperties = _ref6.customProperties, active = _ref6.active, disabled = _ref6.disabled, highlighted = _ref6.highlighted, isPlaceholder = _ref6.placeholder;
                    var div = Object.assign(document.createElement("div"), {
                      className: _item,
                      innerHTML: label
                    });
                    Object.assign(div.dataset, {
                      item: "",
                      id,
                      value,
                      customProperties
                    });
                    if (active) {
                      div.setAttribute("aria-selected", "true");
                    }
                    if (disabled) {
                      div.setAttribute("aria-disabled", "true");
                    }
                    if (isPlaceholder) {
                      div.classList.add(placeholder);
                    }
                    div.classList.add(highlighted ? highlightedState : itemSelectable);
                    if (removeItemButton) {
                      if (disabled) {
                        div.classList.remove(itemSelectable);
                      }
                      div.dataset.deletable = "";
                      var REMOVE_ITEM_TEXT = "Remove item";
                      var removeButton = Object.assign(document.createElement("button"), {
                        type: "button",
                        className: button,
                        innerHTML: REMOVE_ITEM_TEXT
                      });
                      removeButton.setAttribute("aria-label", REMOVE_ITEM_TEXT + ": '" + value + "'");
                      removeButton.dataset.button = "";
                      div.appendChild(removeButton);
                    }
                    return div;
                  },
                  choiceList: function choiceList(_ref7, isSelectOneElement) {
                    var list = _ref7.list;
                    var div = Object.assign(document.createElement("div"), {
                      className: list
                    });
                    if (!isSelectOneElement) {
                      div.setAttribute("aria-multiselectable", "true");
                    }
                    div.setAttribute("role", "listbox");
                    return div;
                  },
                  choiceGroup: function choiceGroup(_ref8, _ref9) {
                    var group = _ref8.group, groupHeading = _ref8.groupHeading, itemDisabled = _ref8.itemDisabled;
                    var id = _ref9.id, value = _ref9.value, disabled = _ref9.disabled;
                    var div = Object.assign(document.createElement("div"), {
                      className: group + " " + (disabled ? itemDisabled : "")
                    });
                    div.setAttribute("role", "group");
                    Object.assign(div.dataset, {
                      group: "",
                      id,
                      value
                    });
                    if (disabled) {
                      div.setAttribute("aria-disabled", "true");
                    }
                    div.appendChild(Object.assign(document.createElement("div"), {
                      className: groupHeading,
                      innerHTML: value
                    }));
                    return div;
                  },
                  choice: function choice(_ref10, _ref11, selectText) {
                    var item = _ref10.item, itemChoice = _ref10.itemChoice, itemSelectable = _ref10.itemSelectable, itemDisabled = _ref10.itemDisabled, placeholder = _ref10.placeholder;
                    var id = _ref11.id, value = _ref11.value, label = _ref11.label, groupId = _ref11.groupId, elementId = _ref11.elementId, disabled = _ref11.disabled, isPlaceholder = _ref11.placeholder;
                    var div = Object.assign(document.createElement("div"), {
                      id: elementId,
                      innerHTML: label,
                      className: item + " " + itemChoice + " " + (disabled ? itemDisabled : itemSelectable) + " " + (isPlaceholder ? placeholder : "")
                    });
                    div.setAttribute("role", groupId > 0 ? "treeitem" : "option");
                    Object.assign(div.dataset, {
                      choice: "",
                      id,
                      value,
                      selectText
                    });
                    if (disabled) {
                      div.dataset.choiceDisabled = "";
                      div.setAttribute("aria-disabled", "true");
                    } else {
                      div.dataset.choiceSelectable = "";
                    }
                    return div;
                  },
                  input: function input(_ref12, placeholderValue) {
                    var _input = _ref12.input, inputCloned = _ref12.inputCloned;
                    var inp = Object.assign(document.createElement("input"), {
                      type: "text",
                      className: _input + " " + inputCloned,
                      autocomplete: "off",
                      autocapitalize: "off",
                      spellcheck: false
                    });
                    inp.setAttribute("role", "textbox");
                    inp.setAttribute("aria-autocomplete", "list");
                    inp.setAttribute("aria-label", placeholderValue);
                    return inp;
                  },
                  dropdown: function dropdown(_ref13) {
                    var list = _ref13.list, listDropdown = _ref13.listDropdown;
                    var div = document.createElement("div");
                    div.classList.add(list, listDropdown);
                    div.setAttribute("aria-expanded", "false");
                    return div;
                  },
                  notice: function notice(_ref14, innerHTML, type) {
                    var item = _ref14.item, itemChoice = _ref14.itemChoice, noResults = _ref14.noResults, noChoices = _ref14.noChoices;
                    if (type === void 0) {
                      type = "";
                    }
                    var classes = [item, itemChoice];
                    if (type === "no-choices") {
                      classes.push(noChoices);
                    } else if (type === "no-results") {
                      classes.push(noResults);
                    }
                    return Object.assign(document.createElement("div"), {
                      innerHTML,
                      className: classes.join(" ")
                    });
                  },
                  option: function option(_ref15) {
                    var label = _ref15.label, value = _ref15.value, customProperties = _ref15.customProperties, active = _ref15.active, disabled = _ref15.disabled;
                    var opt = new Option(label, value, false, active);
                    if (customProperties) {
                      opt.dataset.customProperties = customProperties;
                    }
                    opt.disabled = disabled;
                    return opt;
                  }
                }
              );
              var templates = TEMPLATES;
              var choices_addChoice = function addChoice(_ref) {
                var value = _ref.value, label = _ref.label, id = _ref.id, groupId = _ref.groupId, disabled = _ref.disabled, elementId = _ref.elementId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                return {
                  type: ACTION_TYPES.ADD_CHOICE,
                  value,
                  label,
                  id,
                  groupId,
                  disabled,
                  elementId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              var choices_filterChoices = function filterChoices(results) {
                return {
                  type: ACTION_TYPES.FILTER_CHOICES,
                  results
                };
              };
              var choices_activateChoices = function activateChoices(active) {
                if (active === void 0) {
                  active = true;
                }
                return {
                  type: ACTION_TYPES.ACTIVATE_CHOICES,
                  active
                };
              };
              var choices_clearChoices = function clearChoices() {
                return {
                  type: ACTION_TYPES.CLEAR_CHOICES
                };
              };
              var items_addItem = function addItem(_ref) {
                var value = _ref.value, label = _ref.label, id = _ref.id, choiceId = _ref.choiceId, groupId = _ref.groupId, customProperties = _ref.customProperties, placeholder = _ref.placeholder, keyCode = _ref.keyCode;
                return {
                  type: ACTION_TYPES.ADD_ITEM,
                  value,
                  label,
                  id,
                  choiceId,
                  groupId,
                  customProperties,
                  placeholder,
                  keyCode
                };
              };
              var items_removeItem = function removeItem(id, choiceId) {
                return {
                  type: ACTION_TYPES.REMOVE_ITEM,
                  id,
                  choiceId
                };
              };
              var items_highlightItem = function highlightItem(id, highlighted) {
                return {
                  type: ACTION_TYPES.HIGHLIGHT_ITEM,
                  id,
                  highlighted
                };
              };
              var groups_addGroup = function addGroup(value, id, active, disabled) {
                return {
                  type: ACTION_TYPES.ADD_GROUP,
                  value,
                  id,
                  active,
                  disabled
                };
              };
              var clearAll = function clearAll2() {
                return {
                  type: "CLEAR_ALL"
                };
              };
              var resetTo = function resetTo2(state) {
                return {
                  type: "RESET_TO",
                  state
                };
              };
              var setIsLoading = function setIsLoading2(isLoading) {
                return {
                  type: "SET_IS_LOADING",
                  isLoading
                };
              };
              function choices_defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                  var descriptor = props[i];
                  descriptor.enumerable = descriptor.enumerable || false;
                  descriptor.configurable = true;
                  if ("value" in descriptor)
                    descriptor.writable = true;
                  Object.defineProperty(target, descriptor.key, descriptor);
                }
              }
              function choices_createClass(Constructor, protoProps, staticProps) {
                if (protoProps)
                  choices_defineProperties(Constructor.prototype, protoProps);
                if (staticProps)
                  choices_defineProperties(Constructor, staticProps);
                return Constructor;
              }
              var USER_DEFAULTS = (
                /** @type {Partial<import('../../types/index').Choices.Options>} */
                {}
              );
              var choices_Choices = /* @__PURE__ */ function() {
                choices_createClass(Choices2, null, [{
                  key: "defaults",
                  get: function get() {
                    return Object.preventExtensions({
                      get options() {
                        return USER_DEFAULTS;
                      },
                      get templates() {
                        return TEMPLATES;
                      }
                    });
                  }
                  /**
                   * @param {string | HTMLInputElement | HTMLSelectElement} element
                   * @param {Partial<import('../../types/index').Choices.Options>} userConfig
                   */
                }]);
                function Choices2(element, userConfig) {
                  var _this = this;
                  if (element === void 0) {
                    element = "[data-choice]";
                  }
                  if (userConfig === void 0) {
                    userConfig = {};
                  }
                  this.config = cjs_default.a.all(
                    [DEFAULT_CONFIG, Choices2.defaults.options, userConfig],
                    // When merging array configs, replace with a copy of the userConfig array,
                    // instead of concatenating with the default array
                    {
                      arrayMerge: function arrayMerge(destinationArray, sourceArray) {
                        return [].concat(sourceArray);
                      }
                    }
                  );
                  if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                    var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                    this.config.addItemFilter = re.test.bind(re);
                  }
                  var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);
                  if (invalidConfigOptions.length) {
                    console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                  }
                  if (!["auto", "always"].includes(this.config.renderSelectedChoices)) {
                    this.config.renderSelectedChoices = "auto";
                  }
                  var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                  if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
                    throw TypeError("Expected one of the following types text|select-one|select-multiple");
                  }
                  this._isTextElement = passedElement.type === "text";
                  this._isSelectOneElement = passedElement.type === "select-one";
                  this._isSelectMultipleElement = passedElement.type === "select-multiple";
                  this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                  if (this._isTextElement) {
                    this.passedElement = new WrappedInput({
                      element: passedElement,
                      classNames: this.config.classNames,
                      delimiter: this.config.delimiter
                    });
                  } else {
                    this.passedElement = new WrappedSelect({
                      element: passedElement,
                      classNames: this.config.classNames,
                      template: function template(data) {
                        return _this._templates.option(data);
                      }
                    });
                  }
                  this.initialised = false;
                  this._store = new store_Store();
                  this._initialState = {};
                  this._currentState = {};
                  this._prevState = {};
                  this._currentValue = "";
                  this._canSearch = this.config.searchEnabled;
                  this._isScrollingOnIe = false;
                  this._highlightPosition = 0;
                  this._wasTap = true;
                  this._placeholderValue = this._generatePlaceholderValue();
                  this._baseId = generateId(this.passedElement.element, "choices-");
                  this._direction = this.passedElement.element.dir;
                  if (!this._direction) {
                    var _window$getComputedSt = window.getComputedStyle(this.passedElement.element), elementDirection = _window$getComputedSt.direction;
                    var _window$getComputedSt2 = window.getComputedStyle(document.documentElement), documentDirection = _window$getComputedSt2.direction;
                    if (elementDirection !== documentDirection) {
                      this._direction = elementDirection;
                    }
                  }
                  this._idNames = {
                    itemChoice: "item-choice"
                  };
                  this._presetChoices = this.config.choices;
                  this._presetItems = this.config.items;
                  if (this.passedElement.value) {
                    this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
                  }
                  this._render = this._render.bind(this);
                  this._onFocus = this._onFocus.bind(this);
                  this._onBlur = this._onBlur.bind(this);
                  this._onKeyUp = this._onKeyUp.bind(this);
                  this._onKeyDown = this._onKeyDown.bind(this);
                  this._onClick = this._onClick.bind(this);
                  this._onTouchMove = this._onTouchMove.bind(this);
                  this._onTouchEnd = this._onTouchEnd.bind(this);
                  this._onMouseDown = this._onMouseDown.bind(this);
                  this._onMouseOver = this._onMouseOver.bind(this);
                  this._onFormReset = this._onFormReset.bind(this);
                  this._onAKey = this._onAKey.bind(this);
                  this._onEnterKey = this._onEnterKey.bind(this);
                  this._onEscapeKey = this._onEscapeKey.bind(this);
                  this._onDirectionKey = this._onDirectionKey.bind(this);
                  this._onDeleteKey = this._onDeleteKey.bind(this);
                  if (this.config.shouldSortItems === true && this._isSelectOneElement) {
                    if (!this.config.silent) {
                      console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.");
                    }
                  }
                  if (this.passedElement.element.getAttribute("data-choice") === "active") {
                    if (!this.config.silent) {
                      console.warn("Trying to initialise Choices on element already initialised");
                    }
                    this.initialised = true;
                    return;
                  }
                  this.init();
                }
                var _proto = Choices2.prototype;
                _proto.init = function init2() {
                  if (this.initialised) {
                    return;
                  }
                  this._createTemplates();
                  this._createElements();
                  this._createStructure();
                  this._initialState = cloneObject(this._store.state);
                  this._store.subscribe(this._render);
                  this._render();
                  this._addEventListeners();
                  var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                  if (shouldDisable) {
                    this.disable();
                  }
                  this.initialised = true;
                  var callbackOnInit = this.config.callbackOnInit;
                  if (callbackOnInit && typeof callbackOnInit === "function") {
                    callbackOnInit.call(this);
                  }
                };
                _proto.destroy = function destroy() {
                  if (!this.initialised) {
                    return;
                  }
                  this._removeEventListeners();
                  this.passedElement.reveal();
                  this.containerOuter.unwrap(this.passedElement.element);
                  if (this._isSelectElement) {
                    this.passedElement.options = this._presetChoices;
                  }
                  this.clearStore();
                  this._templates = null;
                  this.initialised = false;
                };
                _proto.enable = function enable() {
                  if (this.passedElement.isDisabled) {
                    this.passedElement.enable();
                  }
                  if (this.containerOuter.isDisabled) {
                    this._addEventListeners();
                    this.input.enable();
                    this.containerOuter.enable();
                  }
                  return this;
                };
                _proto.disable = function disable() {
                  if (!this.passedElement.isDisabled) {
                    this.passedElement.disable();
                  }
                  if (!this.containerOuter.isDisabled) {
                    this._removeEventListeners();
                    this.input.disable();
                    this.containerOuter.disable();
                  }
                  return this;
                };
                _proto.highlightItem = function highlightItem(item, runEvent) {
                  if (runEvent === void 0) {
                    runEvent = true;
                  }
                  if (!item) {
                    return this;
                  }
                  var id = item.id, _item$groupId = item.groupId, groupId = _item$groupId === void 0 ? -1 : _item$groupId, _item$value = item.value, value = _item$value === void 0 ? "" : _item$value, _item$label = item.label, label = _item$label === void 0 ? "" : _item$label;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch(items_highlightItem(id, true));
                  if (runEvent) {
                    this.passedElement.triggerEvent(EVENTS.highlightItem, {
                      id,
                      value,
                      label,
                      groupValue: group && group.value ? group.value : null
                    });
                  }
                  return this;
                };
                _proto.unhighlightItem = function unhighlightItem(item) {
                  if (!item) {
                    return this;
                  }
                  var id = item.id, _item$groupId2 = item.groupId, groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2, _item$value2 = item.value, value = _item$value2 === void 0 ? "" : _item$value2, _item$label2 = item.label, label = _item$label2 === void 0 ? "" : _item$label2;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch(items_highlightItem(id, false));
                  this.passedElement.triggerEvent(EVENTS.highlightItem, {
                    id,
                    value,
                    label,
                    groupValue: group && group.value ? group.value : null
                  });
                  return this;
                };
                _proto.highlightAll = function highlightAll() {
                  var _this2 = this;
                  this._store.items.forEach(function(item) {
                    return _this2.highlightItem(item);
                  });
                  return this;
                };
                _proto.unhighlightAll = function unhighlightAll() {
                  var _this3 = this;
                  this._store.items.forEach(function(item) {
                    return _this3.unhighlightItem(item);
                  });
                  return this;
                };
                _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
                  var _this4 = this;
                  this._store.activeItems.filter(function(item) {
                    return item.value === value;
                  }).forEach(function(item) {
                    return _this4._removeItem(item);
                  });
                  return this;
                };
                _proto.removeActiveItems = function removeActiveItems(excludedId) {
                  var _this5 = this;
                  this._store.activeItems.filter(function(_ref) {
                    var id = _ref.id;
                    return id !== excludedId;
                  }).forEach(function(item) {
                    return _this5._removeItem(item);
                  });
                  return this;
                };
                _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
                  var _this6 = this;
                  if (runEvent === void 0) {
                    runEvent = false;
                  }
                  this._store.highlightedActiveItems.forEach(function(item) {
                    _this6._removeItem(item);
                    if (runEvent) {
                      _this6._triggerChange(item.value);
                    }
                  });
                  return this;
                };
                _proto.showDropdown = function showDropdown(preventInputFocus) {
                  var _this7 = this;
                  if (this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this7.dropdown.show();
                    _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow());
                    if (!preventInputFocus && _this7._canSearch) {
                      _this7.input.focus();
                    }
                    _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
                  });
                  return this;
                };
                _proto.hideDropdown = function hideDropdown(preventInputBlur) {
                  var _this8 = this;
                  if (!this.dropdown.isActive) {
                    return this;
                  }
                  requestAnimationFrame(function() {
                    _this8.dropdown.hide();
                    _this8.containerOuter.close();
                    if (!preventInputBlur && _this8._canSearch) {
                      _this8.input.removeActiveDescendant();
                      _this8.input.blur();
                    }
                    _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
                  });
                  return this;
                };
                _proto.getValue = function getValue(valueOnly) {
                  if (valueOnly === void 0) {
                    valueOnly = false;
                  }
                  var values = this._store.activeItems.reduce(function(selectedItems, item) {
                    var itemValue = valueOnly ? item.value : item;
                    selectedItems.push(itemValue);
                    return selectedItems;
                  }, []);
                  return this._isSelectOneElement ? values[0] : values;
                };
                _proto.setValue = function setValue(items) {
                  var _this9 = this;
                  if (!this.initialised) {
                    return this;
                  }
                  items.forEach(function(value) {
                    return _this9._setChoiceOrItem(value);
                  });
                  return this;
                };
                _proto.setChoiceByValue = function setChoiceByValue(value) {
                  var _this10 = this;
                  if (!this.initialised || this._isTextElement) {
                    return this;
                  }
                  var choiceValue = Array.isArray(value) ? value : [value];
                  choiceValue.forEach(function(val) {
                    return _this10._findAndSelectChoiceByValue(val);
                  });
                  return this;
                };
                _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
                  var _this11 = this;
                  if (choicesArrayOrFetcher === void 0) {
                    choicesArrayOrFetcher = [];
                  }
                  if (value === void 0) {
                    value = "value";
                  }
                  if (label === void 0) {
                    label = "label";
                  }
                  if (replaceChoices === void 0) {
                    replaceChoices = false;
                  }
                  if (!this.initialised) {
                    throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                  }
                  if (!this._isSelectElement) {
                    throw new TypeError("setChoices can't be used with INPUT based Choices");
                  }
                  if (typeof value !== "string" || !value) {
                    throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                  }
                  if (replaceChoices) {
                    this.clearChoices();
                  }
                  if (!Array.isArray(choicesArrayOrFetcher)) {
                    if (typeof choicesArrayOrFetcher !== "function") {
                      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                    }
                    requestAnimationFrame(function() {
                      return _this11._handleLoadingState(true);
                    });
                    var fetcher = choicesArrayOrFetcher(this);
                    if (typeof fetcher === "object" && typeof fetcher.then === "function") {
                      return fetcher.then(function(data) {
                        return _this11.setChoices(data, value, label, replaceChoices);
                      }).catch(function(err) {
                        if (!_this11.config.silent) {
                          console.error(err);
                        }
                      }).then(function() {
                        return _this11._handleLoadingState(false);
                      }).then(function() {
                        return _this11;
                      });
                    }
                    if (!Array.isArray(fetcher)) {
                      throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
                    }
                    return this.setChoices(fetcher, value, label, false);
                  }
                  this.containerOuter.removeLoadingState();
                  var addGroupsAndChoices = function addGroupsAndChoices2(groupOrChoice) {
                    if (groupOrChoice.choices) {
                      _this11._addGroup({
                        group: groupOrChoice,
                        id: groupOrChoice.id || null,
                        valueKey: value,
                        labelKey: label
                      });
                    } else {
                      _this11._addChoice({
                        value: groupOrChoice[value],
                        label: groupOrChoice[label],
                        isSelected: groupOrChoice.selected,
                        isDisabled: groupOrChoice.disabled,
                        customProperties: groupOrChoice.customProperties,
                        placeholder: groupOrChoice.placeholder
                      });
                    }
                  };
                  this._setLoading(true);
                  choicesArrayOrFetcher.forEach(addGroupsAndChoices);
                  this._setLoading(false);
                  return this;
                };
                _proto.clearChoices = function clearChoices() {
                  this._store.dispatch(choices_clearChoices());
                  return this;
                };
                _proto.clearStore = function clearStore() {
                  this._store.dispatch(clearAll());
                  return this;
                };
                _proto.clearInput = function clearInput() {
                  var shouldSetInputWidth = !this._isSelectOneElement;
                  this.input.clear(shouldSetInputWidth);
                  if (!this._isTextElement && this._canSearch) {
                    this._isSearching = false;
                    this._store.dispatch(choices_activateChoices(true));
                  }
                  return this;
                };
                _proto._render = function _render() {
                  if (this._store.isLoading()) {
                    return;
                  }
                  this._currentState = this._store.state;
                  var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                  var shouldRenderChoices = this._isSelectElement;
                  var shouldRenderItems = this._currentState.items !== this._prevState.items;
                  if (!stateChanged) {
                    return;
                  }
                  if (shouldRenderChoices) {
                    this._renderChoices();
                  }
                  if (shouldRenderItems) {
                    this._renderItems();
                  }
                  this._prevState = this._currentState;
                };
                _proto._renderChoices = function _renderChoices() {
                  var _this12 = this;
                  var _this$_store = this._store, activeGroups = _this$_store.activeGroups, activeChoices = _this$_store.activeChoices;
                  var choiceListFragment = document.createDocumentFragment();
                  this.choiceList.clear();
                  if (this.config.resetScrollPosition) {
                    requestAnimationFrame(function() {
                      return _this12.choiceList.scrollToTop();
                    });
                  }
                  if (activeGroups.length >= 1 && !this._isSearching) {
                    var activePlaceholders = activeChoices.filter(function(activeChoice) {
                      return activeChoice.placeholder === true && activeChoice.groupId === -1;
                    });
                    if (activePlaceholders.length >= 1) {
                      choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                    }
                    choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                  } else if (activeChoices.length >= 1) {
                    choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                  }
                  if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                    var activeItems = this._store.activeItems;
                    var canAddItem = this._canAddItem(activeItems, this.input.value);
                    if (canAddItem.response) {
                      this.choiceList.append(choiceListFragment);
                      this._highlightChoice();
                    } else {
                      this.choiceList.append(this._getTemplate("notice", canAddItem.notice));
                    }
                  } else {
                    var dropdownItem;
                    var notice;
                    if (this._isSearching) {
                      notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                      dropdownItem = this._getTemplate("notice", notice, "no-results");
                    } else {
                      notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                      dropdownItem = this._getTemplate("notice", notice, "no-choices");
                    }
                    this.choiceList.append(dropdownItem);
                  }
                };
                _proto._renderItems = function _renderItems() {
                  var activeItems = this._store.activeItems || [];
                  this.itemList.clear();
                  var itemListFragment = this._createItemsFragment(activeItems);
                  if (itemListFragment.childNodes) {
                    this.itemList.append(itemListFragment);
                  }
                };
                _proto._createGroupsFragment = function _createGroupsFragment(groups2, choices, fragment) {
                  var _this13 = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var getGroupChoices = function getGroupChoices2(group) {
                    return choices.filter(function(choice) {
                      if (_this13._isSelectOneElement) {
                        return choice.groupId === group.id;
                      }
                      return choice.groupId === group.id && (_this13.config.renderSelectedChoices === "always" || !choice.selected);
                    });
                  };
                  if (this.config.shouldSort) {
                    groups2.sort(this.config.sortFn);
                  }
                  groups2.forEach(function(group) {
                    var groupChoices = getGroupChoices(group);
                    if (groupChoices.length >= 1) {
                      var dropdownGroup = _this13._getTemplate("choiceGroup", group);
                      fragment.appendChild(dropdownGroup);
                      _this13._createChoicesFragment(groupChoices, fragment, true);
                    }
                  });
                  return fragment;
                };
                _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
                  var _this14 = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  if (withinGroup === void 0) {
                    withinGroup = false;
                  }
                  var _this$config = this.config, renderSelectedChoices = _this$config.renderSelectedChoices, searchResultLimit = _this$config.searchResultLimit, renderChoiceLimit = _this$config.renderChoiceLimit;
                  var filter = this._isSearching ? sortByScore : this.config.sortFn;
                  var appendChoice = function appendChoice2(choice) {
                    var shouldRender = renderSelectedChoices === "auto" ? _this14._isSelectOneElement || !choice.selected : true;
                    if (shouldRender) {
                      var dropdownItem = _this14._getTemplate("choice", choice, _this14.config.itemSelectText);
                      fragment.appendChild(dropdownItem);
                    }
                  };
                  var rendererableChoices = choices;
                  if (renderSelectedChoices === "auto" && !this._isSelectOneElement) {
                    rendererableChoices = choices.filter(function(choice) {
                      return !choice.selected;
                    });
                  }
                  var _rendererableChoices$ = rendererableChoices.reduce(function(acc, choice) {
                    if (choice.placeholder) {
                      acc.placeholderChoices.push(choice);
                    } else {
                      acc.normalChoices.push(choice);
                    }
                    return acc;
                  }, {
                    placeholderChoices: [],
                    normalChoices: []
                  }), placeholderChoices = _rendererableChoices$.placeholderChoices, normalChoices = _rendererableChoices$.normalChoices;
                  if (this.config.shouldSort || this._isSearching) {
                    normalChoices.sort(filter);
                  }
                  var choiceLimit = rendererableChoices.length;
                  var sortedChoices = [].concat(placeholderChoices, normalChoices);
                  if (this._isSearching) {
                    choiceLimit = searchResultLimit;
                  } else if (renderChoiceLimit > 0 && !withinGroup) {
                    choiceLimit = renderChoiceLimit;
                  }
                  for (var i = 0; i < choiceLimit; i += 1) {
                    if (sortedChoices[i]) {
                      appendChoice(sortedChoices[i]);
                    }
                  }
                  return fragment;
                };
                _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
                  var _this15 = this;
                  if (fragment === void 0) {
                    fragment = document.createDocumentFragment();
                  }
                  var _this$config2 = this.config, shouldSortItems = _this$config2.shouldSortItems, sortFn = _this$config2.sortFn, removeItemButton = _this$config2.removeItemButton;
                  if (shouldSortItems && !this._isSelectOneElement) {
                    items.sort(sortFn);
                  }
                  if (this._isTextElement) {
                    this.passedElement.value = items;
                  } else {
                    this.passedElement.options = items;
                  }
                  var addItemToFragment = function addItemToFragment2(item) {
                    var listItem = _this15._getTemplate("item", item, removeItemButton);
                    fragment.appendChild(listItem);
                  };
                  items.forEach(function(item) {
                    return addItemToFragment(item);
                  });
                  return fragment;
                };
                _proto._triggerChange = function _triggerChange(value) {
                  if (value === void 0 || value === null) {
                    return;
                  }
                  this.passedElement.triggerEvent(EVENTS.change, {
                    value
                  });
                };
                _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
                  var placeholderChoice = this._store.placeholderChoice;
                  if (placeholderChoice) {
                    this._addItem({
                      value: placeholderChoice.value,
                      label: placeholderChoice.label,
                      choiceId: placeholderChoice.id,
                      groupId: placeholderChoice.groupId,
                      placeholder: placeholderChoice.placeholder
                    });
                    this._triggerChange(placeholderChoice.value);
                  }
                };
                _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
                  if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
                    return;
                  }
                  var itemId = element.parentNode.getAttribute("data-id");
                  var itemToRemove = activeItems.find(function(item) {
                    return item.id === parseInt(itemId, 10);
                  });
                  this._removeItem(itemToRemove);
                  this._triggerChange(itemToRemove.value);
                  if (this._isSelectOneElement) {
                    this._selectPlaceholderChoice();
                  }
                };
                _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
                  var _this16 = this;
                  if (hasShiftKey === void 0) {
                    hasShiftKey = false;
                  }
                  if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
                    return;
                  }
                  var passedId = element.getAttribute("data-id");
                  activeItems.forEach(function(item) {
                    if (item.id === parseInt(passedId, 10) && !item.highlighted) {
                      _this16.highlightItem(item);
                    } else if (!hasShiftKey && item.highlighted) {
                      _this16.unhighlightItem(item);
                    }
                  });
                  this.input.focus();
                };
                _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
                  if (!activeItems || !element) {
                    return;
                  }
                  var id = element.dataset.id;
                  var choice = this._store.getChoiceById(id);
                  if (!choice) {
                    return;
                  }
                  var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
                  var hasActiveDropdown = this.dropdown.isActive;
                  choice.keyCode = passedKeyCode;
                  this.passedElement.triggerEvent(EVENTS.choice, {
                    choice
                  });
                  if (!choice.selected && !choice.disabled) {
                    var canAddItem = this._canAddItem(activeItems, choice.value);
                    if (canAddItem.response) {
                      this._addItem({
                        value: choice.value,
                        label: choice.label,
                        choiceId: choice.id,
                        groupId: choice.groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder,
                        keyCode: choice.keyCode
                      });
                      this._triggerChange(choice.value);
                    }
                  }
                  this.clearInput();
                  if (hasActiveDropdown && this._isSelectOneElement) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                _proto._handleBackspace = function _handleBackspace(activeItems) {
                  if (!this.config.removeItems || !activeItems) {
                    return;
                  }
                  var lastItem = activeItems[activeItems.length - 1];
                  var hasHighlightedItems = activeItems.some(function(item) {
                    return item.highlighted;
                  });
                  if (this.config.editItems && !hasHighlightedItems && lastItem) {
                    this.input.value = lastItem.value;
                    this.input.setWidth();
                    this._removeItem(lastItem);
                    this._triggerChange(lastItem.value);
                  } else {
                    if (!hasHighlightedItems) {
                      this.highlightItem(lastItem, false);
                    }
                    this.removeHighlightedItems(true);
                  }
                };
                _proto._setLoading = function _setLoading(isLoading) {
                  this._store.dispatch(setIsLoading(isLoading));
                };
                _proto._handleLoadingState = function _handleLoadingState(setLoading) {
                  if (setLoading === void 0) {
                    setLoading = true;
                  }
                  var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);
                  if (setLoading) {
                    this.disable();
                    this.containerOuter.addLoadingState();
                    if (this._isSelectOneElement) {
                      if (!placeholderItem) {
                        placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                        this.itemList.append(placeholderItem);
                      } else {
                        placeholderItem.innerHTML = this.config.loadingText;
                      }
                    } else {
                      this.input.placeholder = this.config.loadingText;
                    }
                  } else {
                    this.enable();
                    this.containerOuter.removeLoadingState();
                    if (this._isSelectOneElement) {
                      placeholderItem.innerHTML = this._placeholderValue || "";
                    } else {
                      this.input.placeholder = this._placeholderValue || "";
                    }
                  }
                };
                _proto._handleSearch = function _handleSearch(value) {
                  if (!value || !this.input.isFocussed) {
                    return;
                  }
                  var choices = this._store.choices;
                  var _this$config3 = this.config, searchFloor = _this$config3.searchFloor, searchChoices = _this$config3.searchChoices;
                  var hasUnactiveChoices = choices.some(function(option) {
                    return !option.active;
                  });
                  if (value && value.length >= searchFloor) {
                    var resultCount = searchChoices ? this._searchChoices(value) : 0;
                    this.passedElement.triggerEvent(EVENTS.search, {
                      value,
                      resultCount
                    });
                  } else if (hasUnactiveChoices) {
                    this._isSearching = false;
                    this._store.dispatch(choices_activateChoices(true));
                  }
                };
                _proto._canAddItem = function _canAddItem(activeItems, value) {
                  var canAddItem = true;
                  var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                  if (!this._isSelectOneElement) {
                    var isDuplicateValue = existsInArray(activeItems, value);
                    if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                      canAddItem = false;
                      notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                    }
                    if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                      canAddItem = false;
                      notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                    }
                    if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                      canAddItem = false;
                      notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                    }
                  }
                  return {
                    response: canAddItem,
                    notice
                  };
                };
                _proto._searchChoices = function _searchChoices(value) {
                  var newValue = typeof value === "string" ? value.trim() : value;
                  var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                  if (newValue.length < 1 && newValue === currentValue + " ") {
                    return 0;
                  }
                  var haystack = this._store.searchableChoices;
                  var needle = newValue;
                  var keys = [].concat(this.config.searchFields);
                  var options = Object.assign(this.config.fuseOptions, {
                    keys
                  });
                  var fuse = new fuse_default.a(haystack, options);
                  var results = fuse.search(needle);
                  this._currentValue = newValue;
                  this._highlightPosition = 0;
                  this._isSearching = true;
                  this._store.dispatch(choices_filterChoices(results));
                  return results.length;
                };
                _proto._addEventListeners = function _addEventListeners() {
                  var _document = document, documentElement = _document.documentElement;
                  documentElement.addEventListener("keydown", this._onKeyDown, true);
                  documentElement.addEventListener("touchend", this._onTouchEnd, true);
                  documentElement.addEventListener("mousedown", this._onMouseDown, true);
                  documentElement.addEventListener("click", this._onClick, {
                    passive: true
                  });
                  documentElement.addEventListener("touchmove", this._onTouchMove, {
                    passive: true
                  });
                  documentElement.addEventListener("mouseover", this._onMouseOver, {
                    passive: true
                  });
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.addEventListener("focus", this._onFocus, {
                      passive: true
                    });
                    this.containerOuter.element.addEventListener("blur", this._onBlur, {
                      passive: true
                    });
                  }
                  this.input.element.addEventListener("keyup", this._onKeyUp, {
                    passive: true
                  });
                  this.input.element.addEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.input.element.addEventListener("blur", this._onBlur, {
                    passive: true
                  });
                  if (this.input.element.form) {
                    this.input.element.form.addEventListener("reset", this._onFormReset, {
                      passive: true
                    });
                  }
                  this.input.addEventListeners();
                };
                _proto._removeEventListeners = function _removeEventListeners() {
                  var _document2 = document, documentElement = _document2.documentElement;
                  documentElement.removeEventListener("keydown", this._onKeyDown, true);
                  documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                  documentElement.removeEventListener("mousedown", this._onMouseDown, true);
                  documentElement.removeEventListener("keyup", this._onKeyUp, {
                    passive: true
                  });
                  documentElement.removeEventListener("click", this._onClick, {
                    passive: true
                  });
                  documentElement.removeEventListener("touchmove", this._onTouchMove, {
                    passive: true
                  });
                  documentElement.removeEventListener("mouseover", this._onMouseOver, {
                    passive: true
                  });
                  if (this._isSelectOneElement) {
                    this.containerOuter.element.removeEventListener("focus", this._onFocus, {
                      passive: true
                    });
                    this.containerOuter.element.removeEventListener("blur", this._onBlur, {
                      passive: true
                    });
                  }
                  this.input.element.removeEventListener("focus", this._onFocus, {
                    passive: true
                  });
                  this.input.element.removeEventListener("blur", this._onBlur, {
                    passive: true
                  });
                  if (this.input.element.form) {
                    this.input.element.form.removeEventListener("reset", this._onFormReset, {
                      passive: true
                    });
                  }
                  this.input.removeEventListeners();
                };
                _proto._onKeyDown = function _onKeyDown(event) {
                  var _keyDownActions;
                  var target = event.target, keyCode = event.keyCode, ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                  if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
                    return;
                  }
                  var activeItems = this._store.activeItems;
                  var hasFocusedInput = this.input.isFocussed;
                  var hasActiveDropdown = this.dropdown.isActive;
                  var hasItems = this.itemList.hasChildren();
                  var keyString = String.fromCharCode(keyCode);
                  var BACK_KEY = KEY_CODES.BACK_KEY, DELETE_KEY = KEY_CODES.DELETE_KEY, ENTER_KEY = KEY_CODES.ENTER_KEY, A_KEY = KEY_CODES.A_KEY, ESC_KEY = KEY_CODES.ESC_KEY, UP_KEY = KEY_CODES.UP_KEY, DOWN_KEY = KEY_CODES.DOWN_KEY, PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
                  var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                  if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
                    this.showDropdown();
                  }
                  var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions);
                  if (keyDownActions[keyCode]) {
                    keyDownActions[keyCode]({
                      event,
                      target,
                      keyCode,
                      metaKey,
                      activeItems,
                      hasFocusedInput,
                      hasActiveDropdown,
                      hasItems,
                      hasCtrlDownKeyPressed
                    });
                  }
                };
                _proto._onKeyUp = function _onKeyUp(_ref2) {
                  var target = _ref2.target, keyCode = _ref2.keyCode;
                  var value = this.input.value;
                  var activeItems = this._store.activeItems;
                  var canAddItem = this._canAddItem(activeItems, value);
                  var backKey = KEY_CODES.BACK_KEY, deleteKey = KEY_CODES.DELETE_KEY;
                  if (this._isTextElement) {
                    var canShowDropdownNotice = canAddItem.notice && value;
                    if (canShowDropdownNotice) {
                      var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                      this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                      this.showDropdown(true);
                    } else {
                      this.hideDropdown(true);
                    }
                  } else {
                    var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
                    var canReactivateChoices = !this._isTextElement && this._isSearching;
                    var canSearch = this._canSearch && canAddItem.response;
                    if (userHasRemovedValue && canReactivateChoices) {
                      this._isSearching = false;
                      this._store.dispatch(choices_activateChoices(true));
                    } else if (canSearch) {
                      this._handleSearch(this.input.value);
                    }
                  }
                  this._canSearch = this.config.searchEnabled;
                };
                _proto._onAKey = function _onAKey(_ref3) {
                  var hasItems = _ref3.hasItems, hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;
                  if (hasCtrlDownKeyPressed && hasItems) {
                    this._canSearch = false;
                    var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                    if (shouldHightlightAll) {
                      this.highlightAll();
                    }
                  }
                };
                _proto._onEnterKey = function _onEnterKey(_ref4) {
                  var event = _ref4.event, target = _ref4.target, activeItems = _ref4.activeItems, hasActiveDropdown = _ref4.hasActiveDropdown;
                  var enterKey = KEY_CODES.ENTER_KEY;
                  var targetWasButton = target.hasAttribute("data-button");
                  if (this._isTextElement && target.value) {
                    var value = this.input.value;
                    var canAddItem = this._canAddItem(activeItems, value);
                    if (canAddItem.response) {
                      this.hideDropdown(true);
                      this._addItem({
                        value
                      });
                      this._triggerChange(value);
                      this.clearInput();
                    }
                  }
                  if (targetWasButton) {
                    this._handleButtonAction(activeItems, target);
                    event.preventDefault();
                  }
                  if (hasActiveDropdown) {
                    var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);
                    if (highlightedChoice) {
                      if (activeItems[0]) {
                        activeItems[0].keyCode = enterKey;
                      }
                      this._handleChoiceAction(activeItems, highlightedChoice);
                    }
                    event.preventDefault();
                  } else if (this._isSelectOneElement) {
                    this.showDropdown();
                    event.preventDefault();
                  }
                };
                _proto._onEscapeKey = function _onEscapeKey(_ref5) {
                  var hasActiveDropdown = _ref5.hasActiveDropdown;
                  if (hasActiveDropdown) {
                    this.hideDropdown(true);
                    this.containerOuter.focus();
                  }
                };
                _proto._onDirectionKey = function _onDirectionKey(_ref6) {
                  var event = _ref6.event, hasActiveDropdown = _ref6.hasActiveDropdown, keyCode = _ref6.keyCode, metaKey = _ref6.metaKey;
                  var downKey = KEY_CODES.DOWN_KEY, pageUpKey = KEY_CODES.PAGE_UP_KEY, pageDownKey = KEY_CODES.PAGE_DOWN_KEY;
                  if (hasActiveDropdown || this._isSelectOneElement) {
                    this.showDropdown();
                    this._canSearch = false;
                    var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                    var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                    var selectableChoiceIdentifier = "[data-choice-selectable]";
                    var nextEl;
                    if (skipKey) {
                      if (directionInt > 0) {
                        nextEl = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    } else {
                      var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);
                      if (currentEl) {
                        nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
                      } else {
                        nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                      }
                    }
                    if (nextEl) {
                      if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
                        this.choiceList.scrollToChoice(nextEl, directionInt);
                      }
                      this._highlightChoice(nextEl);
                    }
                    event.preventDefault();
                  }
                };
                _proto._onDeleteKey = function _onDeleteKey(_ref7) {
                  var event = _ref7.event, target = _ref7.target, hasFocusedInput = _ref7.hasFocusedInput, activeItems = _ref7.activeItems;
                  if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
                    this._handleBackspace(activeItems);
                    event.preventDefault();
                  }
                };
                _proto._onTouchMove = function _onTouchMove() {
                  if (this._wasTap) {
                    this._wasTap = false;
                  }
                };
                _proto._onTouchEnd = function _onTouchEnd(event) {
                  var _ref8 = event || event.touches[0], target = _ref8.target;
                  var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                  if (touchWasWithinContainer) {
                    var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                    if (containerWasExactTarget) {
                      if (this._isTextElement) {
                        this.input.focus();
                      } else if (this._isSelectMultipleElement) {
                        this.showDropdown();
                      }
                    }
                    event.stopPropagation();
                  }
                  this._wasTap = true;
                };
                _proto._onMouseDown = function _onMouseDown(event) {
                  var target = event.target, shiftKey = event.shiftKey;
                  if (this.choiceList.element.contains(target) && isIE11(navigator.userAgent)) {
                    this._isScrollingOnIe = true;
                  }
                  if (!this.containerOuter.element.contains(target) || target === this.input.element) {
                    return;
                  }
                  var activeItems = this._store.activeItems;
                  var hasShiftKey = shiftKey;
                  var buttonTarget = findAncestorByAttrName(target, "data-button");
                  var itemTarget = findAncestorByAttrName(target, "data-item");
                  var choiceTarget = findAncestorByAttrName(target, "data-choice");
                  if (buttonTarget) {
                    this._handleButtonAction(activeItems, buttonTarget);
                  } else if (itemTarget) {
                    this._handleItemAction(activeItems, itemTarget, hasShiftKey);
                  } else if (choiceTarget) {
                    this._handleChoiceAction(activeItems, choiceTarget);
                  }
                  event.preventDefault();
                };
                _proto._onMouseOver = function _onMouseOver(_ref9) {
                  var target = _ref9.target;
                  var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
                  var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute("data-choice");
                  if (shouldHighlightChoice) {
                    this._highlightChoice(target);
                  }
                };
                _proto._onClick = function _onClick(_ref10) {
                  var target = _ref10.target;
                  var clickWasWithinContainer = this.containerOuter.element.contains(target);
                  if (clickWasWithinContainer) {
                    if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                      if (this._isTextElement) {
                        if (document.activeElement !== this.input.element) {
                          this.input.focus();
                        }
                      } else {
                        this.showDropdown();
                        this.containerOuter.focus();
                      }
                    } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
                      this.hideDropdown();
                    }
                  } else {
                    var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                    if (hasHighlightedItems) {
                      this.unhighlightAll();
                    }
                    this.containerOuter.removeFocusState();
                    this.hideDropdown(true);
                  }
                };
                _proto._onFocus = function _onFocus(_ref11) {
                  var _this17 = this;
                  var target = _ref11.target;
                  var focusWasWithinContainer = this.containerOuter.element.contains(target);
                  if (!focusWasWithinContainer) {
                    return;
                  }
                  var focusActions = {
                    text: function text() {
                      if (target === _this17.input.element) {
                        _this17.containerOuter.addFocusState();
                      }
                    },
                    "select-one": function selectOne() {
                      _this17.containerOuter.addFocusState();
                      if (target === _this17.input.element) {
                        _this17.showDropdown(true);
                      }
                    },
                    "select-multiple": function selectMultiple() {
                      if (target === _this17.input.element) {
                        _this17.showDropdown(true);
                        _this17.containerOuter.addFocusState();
                      }
                    }
                  };
                  focusActions[this.passedElement.element.type]();
                };
                _proto._onBlur = function _onBlur(_ref12) {
                  var _this18 = this;
                  var target = _ref12.target;
                  var blurWasWithinContainer = this.containerOuter.element.contains(target);
                  if (blurWasWithinContainer && !this._isScrollingOnIe) {
                    var activeItems = this._store.activeItems;
                    var hasHighlightedItems = activeItems.some(function(item) {
                      return item.highlighted;
                    });
                    var blurActions = {
                      text: function text() {
                        if (target === _this18.input.element) {
                          _this18.containerOuter.removeFocusState();
                          if (hasHighlightedItems) {
                            _this18.unhighlightAll();
                          }
                          _this18.hideDropdown(true);
                        }
                      },
                      "select-one": function selectOne() {
                        _this18.containerOuter.removeFocusState();
                        if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
                          _this18.hideDropdown(true);
                        }
                      },
                      "select-multiple": function selectMultiple() {
                        if (target === _this18.input.element) {
                          _this18.containerOuter.removeFocusState();
                          _this18.hideDropdown(true);
                          if (hasHighlightedItems) {
                            _this18.unhighlightAll();
                          }
                        }
                      }
                    };
                    blurActions[this.passedElement.element.type]();
                  } else {
                    this._isScrollingOnIe = false;
                    this.input.element.focus();
                  }
                };
                _proto._onFormReset = function _onFormReset() {
                  this._store.dispatch(resetTo(this._initialState));
                };
                _proto._highlightChoice = function _highlightChoice(el) {
                  var _this19 = this;
                  if (el === void 0) {
                    el = null;
                  }
                  var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                  if (!choices.length) {
                    return;
                  }
                  var passedEl = el;
                  var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState));
                  highlightedChoices.forEach(function(choice) {
                    choice.classList.remove(_this19.config.classNames.highlightedState);
                    choice.setAttribute("aria-selected", "false");
                  });
                  if (passedEl) {
                    this._highlightPosition = choices.indexOf(passedEl);
                  } else {
                    if (choices.length > this._highlightPosition) {
                      passedEl = choices[this._highlightPosition];
                    } else {
                      passedEl = choices[choices.length - 1];
                    }
                    if (!passedEl) {
                      passedEl = choices[0];
                    }
                  }
                  passedEl.classList.add(this.config.classNames.highlightedState);
                  passedEl.setAttribute("aria-selected", "true");
                  this.passedElement.triggerEvent(EVENTS.highlightChoice, {
                    el: passedEl
                  });
                  if (this.dropdown.isActive) {
                    this.input.setActiveDescendant(passedEl.id);
                    this.containerOuter.setActiveDescendant(passedEl.id);
                  }
                };
                _proto._addItem = function _addItem(_ref13) {
                  var value = _ref13.value, _ref13$label = _ref13.label, label = _ref13$label === void 0 ? null : _ref13$label, _ref13$choiceId = _ref13.choiceId, choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId, _ref13$groupId = _ref13.groupId, groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId, _ref13$customProperti = _ref13.customProperties, customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti, _ref13$placeholder = _ref13.placeholder, placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder, _ref13$keyCode = _ref13.keyCode, keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
                  var passedValue = typeof value === "string" ? value.trim() : value;
                  var passedKeyCode = keyCode;
                  var passedCustomProperties = customProperties;
                  var items = this._store.items;
                  var passedLabel = label || passedValue;
                  var passedOptionId = parseInt(choiceId, 10) || -1;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  var id = items ? items.length + 1 : 1;
                  if (this.config.prependValue) {
                    passedValue = this.config.prependValue + passedValue.toString();
                  }
                  if (this.config.appendValue) {
                    passedValue += this.config.appendValue.toString();
                  }
                  this._store.dispatch(items_addItem({
                    value: passedValue,
                    label: passedLabel,
                    id,
                    choiceId: passedOptionId,
                    groupId,
                    customProperties,
                    placeholder,
                    keyCode: passedKeyCode
                  }));
                  if (this._isSelectOneElement) {
                    this.removeActiveItems(id);
                  }
                  this.passedElement.triggerEvent(EVENTS.addItem, {
                    id,
                    value: passedValue,
                    label: passedLabel,
                    customProperties: passedCustomProperties,
                    groupValue: group && group.value ? group.value : void 0,
                    keyCode: passedKeyCode
                  });
                  return this;
                };
                _proto._removeItem = function _removeItem(item) {
                  if (!item || !isType("Object", item)) {
                    return this;
                  }
                  var id = item.id, value = item.value, label = item.label, choiceId = item.choiceId, groupId = item.groupId;
                  var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                  this._store.dispatch(items_removeItem(id, choiceId));
                  if (group && group.value) {
                    this.passedElement.triggerEvent(EVENTS.removeItem, {
                      id,
                      value,
                      label,
                      groupValue: group.value
                    });
                  } else {
                    this.passedElement.triggerEvent(EVENTS.removeItem, {
                      id,
                      value,
                      label
                    });
                  }
                  return this;
                };
                _proto._addChoice = function _addChoice(_ref14) {
                  var value = _ref14.value, _ref14$label = _ref14.label, label = _ref14$label === void 0 ? null : _ref14$label, _ref14$isSelected = _ref14.isSelected, isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected, _ref14$isDisabled = _ref14.isDisabled, isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled, _ref14$groupId = _ref14.groupId, groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId, _ref14$customProperti = _ref14.customProperties, customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti, _ref14$placeholder = _ref14.placeholder, placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder, _ref14$keyCode = _ref14.keyCode, keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;
                  if (typeof value === "undefined" || value === null) {
                    return;
                  }
                  var choices = this._store.choices;
                  var choiceLabel = label || value;
                  var choiceId = choices ? choices.length + 1 : 1;
                  var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;
                  this._store.dispatch(choices_addChoice({
                    value,
                    label: choiceLabel,
                    id: choiceId,
                    groupId,
                    disabled: isDisabled,
                    elementId: choiceElementId,
                    customProperties,
                    placeholder,
                    keyCode
                  }));
                  if (isSelected) {
                    this._addItem({
                      value,
                      label: choiceLabel,
                      choiceId,
                      customProperties,
                      placeholder,
                      keyCode
                    });
                  }
                };
                _proto._addGroup = function _addGroup(_ref15) {
                  var _this20 = this;
                  var group = _ref15.group, id = _ref15.id, _ref15$valueKey = _ref15.valueKey, valueKey = _ref15$valueKey === void 0 ? "value" : _ref15$valueKey, _ref15$labelKey = _ref15.labelKey, labelKey = _ref15$labelKey === void 0 ? "label" : _ref15$labelKey;
                  var groupChoices = isType("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                  var groupId = id || Math.floor((/* @__PURE__ */ new Date()).valueOf() * Math.random());
                  var isDisabled = group.disabled ? group.disabled : false;
                  if (groupChoices) {
                    this._store.dispatch(groups_addGroup(group.label, groupId, true, isDisabled));
                    var addGroupChoices = function addGroupChoices2(choice) {
                      var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                      _this20._addChoice({
                        value: choice[valueKey],
                        label: isType("Object", choice) ? choice[labelKey] : choice.innerHTML,
                        isSelected: choice.selected,
                        isDisabled: isOptDisabled,
                        groupId,
                        customProperties: choice.customProperties,
                        placeholder: choice.placeholder
                      });
                    };
                    groupChoices.forEach(addGroupChoices);
                  } else {
                    this._store.dispatch(groups_addGroup(group.label, group.id, false, group.disabled));
                  }
                };
                _proto._getTemplate = function _getTemplate(template) {
                  var _this$_templates$temp;
                  if (!template) {
                    return null;
                  }
                  var classNames = this.config.classNames;
                  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                  }
                  return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
                };
                _proto._createTemplates = function _createTemplates() {
                  var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                  var userTemplates = {};
                  if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") {
                    userTemplates = callbackOnCreateTemplates.call(this, strToEl);
                  }
                  this._templates = cjs_default()(TEMPLATES, userTemplates);
                };
                _proto._createElements = function _createElements() {
                  this.containerOuter = new container_Container({
                    element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.containerInner = new container_Container({
                    element: this._getTemplate("containerInner"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    position: this.config.position
                  });
                  this.input = new input_Input({
                    element: this._getTemplate("input", this._placeholderValue),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type,
                    preventPaste: !this.config.paste
                  });
                  this.choiceList = new list_List({
                    element: this._getTemplate("choiceList", this._isSelectOneElement)
                  });
                  this.itemList = new list_List({
                    element: this._getTemplate("itemList", this._isSelectOneElement)
                  });
                  this.dropdown = new Dropdown({
                    element: this._getTemplate("dropdown"),
                    classNames: this.config.classNames,
                    type: this.passedElement.element.type
                  });
                };
                _proto._createStructure = function _createStructure() {
                  this.passedElement.conceal();
                  this.containerInner.wrap(this.passedElement.element);
                  this.containerOuter.wrap(this.containerInner.element);
                  if (this._isSelectOneElement) {
                    this.input.placeholder = this.config.searchPlaceholderValue || "";
                  } else if (this._placeholderValue) {
                    this.input.placeholder = this._placeholderValue;
                    this.input.setWidth(true);
                  }
                  this.containerOuter.element.appendChild(this.containerInner.element);
                  this.containerOuter.element.appendChild(this.dropdown.element);
                  this.containerInner.element.appendChild(this.itemList.element);
                  if (!this._isTextElement) {
                    this.dropdown.element.appendChild(this.choiceList.element);
                  }
                  if (!this._isSelectOneElement) {
                    this.containerInner.element.appendChild(this.input.element);
                  } else if (this.config.searchEnabled) {
                    this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                  }
                  if (this._isSelectElement) {
                    this._addPredefinedChoices();
                  } else if (this._isTextElement) {
                    this._addPredefinedItems();
                  }
                };
                _proto._addPredefinedChoices = function _addPredefinedChoices() {
                  var _this21 = this;
                  var passedGroups = this.passedElement.optionGroups;
                  this._highlightPosition = 0;
                  this._isSearching = false;
                  this._setLoading(true);
                  if (passedGroups && passedGroups.length) {
                    var placeholderChoice = this.passedElement.placeholderOption;
                    if (placeholderChoice && placeholderChoice.parentNode.tagName === "SELECT") {
                      this._addChoice({
                        value: placeholderChoice.value,
                        label: placeholderChoice.innerHTML,
                        isSelected: placeholderChoice.selected,
                        isDisabled: placeholderChoice.disabled,
                        placeholder: true
                      });
                    }
                    passedGroups.forEach(function(group) {
                      return _this21._addGroup({
                        group,
                        id: group.id || null
                      });
                    });
                  } else {
                    var passedOptions = this.passedElement.options;
                    var filter = this.config.sortFn;
                    var allChoices = this._presetChoices;
                    passedOptions.forEach(function(o) {
                      allChoices.push({
                        value: o.value,
                        label: o.innerHTML,
                        selected: o.selected,
                        disabled: o.disabled || o.parentNode.disabled,
                        placeholder: o.hasAttribute("placeholder"),
                        customProperties: o.getAttribute("data-custom-properties")
                      });
                    });
                    if (this.config.shouldSort) {
                      allChoices.sort(filter);
                    }
                    var hasSelectedChoice = allChoices.some(function(choice) {
                      return choice.selected;
                    });
                    var handleChoice = function handleChoice2(choice, index) {
                      var value = choice.value, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                      if (_this21._isSelectElement) {
                        if (choice.choices) {
                          _this21._addGroup({
                            group: choice,
                            id: choice.id || null
                          });
                        } else {
                          var shouldPreselect = _this21._isSelectOneElement && !hasSelectedChoice && index === 0;
                          var isSelected = shouldPreselect ? true : choice.selected;
                          var isDisabled = shouldPreselect ? false : choice.disabled;
                          _this21._addChoice({
                            value,
                            label,
                            isSelected,
                            isDisabled,
                            customProperties,
                            placeholder
                          });
                        }
                      } else {
                        _this21._addChoice({
                          value,
                          label,
                          isSelected: choice.selected,
                          isDisabled: choice.disabled,
                          customProperties,
                          placeholder
                        });
                      }
                    };
                    allChoices.forEach(function(choice, index) {
                      return handleChoice(choice, index);
                    });
                  }
                  this._setLoading(false);
                };
                _proto._addPredefinedItems = function _addPredefinedItems() {
                  var _this22 = this;
                  var handlePresetItem = function handlePresetItem2(item) {
                    var itemType = getType(item);
                    if (itemType === "Object" && item.value) {
                      _this22._addItem({
                        value: item.value,
                        label: item.label,
                        choiceId: item.id,
                        customProperties: item.customProperties,
                        placeholder: item.placeholder
                      });
                    } else if (itemType === "String") {
                      _this22._addItem({
                        value: item
                      });
                    }
                  };
                  this._presetItems.forEach(function(item) {
                    return handlePresetItem(item);
                  });
                };
                _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
                  var _this23 = this;
                  var itemType = getType(item).toLowerCase();
                  var handleType = {
                    object: function object() {
                      if (!item.value) {
                        return;
                      }
                      if (!_this23._isTextElement) {
                        _this23._addChoice({
                          value: item.value,
                          label: item.label,
                          isSelected: true,
                          isDisabled: false,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      } else {
                        _this23._addItem({
                          value: item.value,
                          label: item.label,
                          choiceId: item.id,
                          customProperties: item.customProperties,
                          placeholder: item.placeholder
                        });
                      }
                    },
                    string: function string() {
                      if (!_this23._isTextElement) {
                        _this23._addChoice({
                          value: item,
                          label: item,
                          isSelected: true,
                          isDisabled: false
                        });
                      } else {
                        _this23._addItem({
                          value: item
                        });
                      }
                    }
                  };
                  handleType[itemType]();
                };
                _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
                  var _this24 = this;
                  var choices = this._store.choices;
                  var foundChoice = choices.find(function(choice) {
                    return _this24.config.itemComparer(choice.value, val);
                  });
                  if (foundChoice && !foundChoice.selected) {
                    this._addItem({
                      value: foundChoice.value,
                      label: foundChoice.label,
                      choiceId: foundChoice.id,
                      groupId: foundChoice.groupId,
                      customProperties: foundChoice.customProperties,
                      placeholder: foundChoice.placeholder,
                      keyCode: foundChoice.keyCode
                    });
                  }
                };
                _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
                  if (this._isSelectOneElement) {
                    return false;
                  }
                  return this.config.placeholder ? this.config.placeholderValue || this.passedElement.element.getAttribute("placeholder") : false;
                };
                return Choices2;
              }();
              var scripts_choices = __webpack_exports__["default"] = choices_Choices;
            }
            /******/
          ])["default"]
        );
      });
    }
  });

  // src/rebrand/ca_sg_dropdown/js/baseselect.es6
  var import_choices = __toESM(require_choices());

  // src/rebrand/uapi_common/js/userdb-custom-events-constants.es6
  var CUSTOM_EVENTS_EVENT = "com.consumeraffairs.uapi";
  var INPUT_DATA_ATTR = "data-uapi-blur-focus";

  // src/rebrand/ca_sg_forms/js/eventWrapper.es6
  var EventWrapper = class {
    /**
     * @constant
     * @type {String}
     */
    static get VALIDATE_EVENT() {
      return "com.consumeraffairs.styleguide.input.validate";
    }
    /**
     * @constant
     * Used to trigger "input" events when the input value was changed dynamically by code instead of user action
     * @type {String}
     */
    static get INPUT_VALUE_CHANGED_EVENT() {
      return "com.consumeraffairs.styleguide.input.valueChanged";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_ALL_EVENT() {
      return "com.consumeraffairs.styleguide.initForm";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_DATEPICKER_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.datePicker";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_ZIPCOUNTRY_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.zipCountry";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_STRONG_PASSWORD_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.strongPassword";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_PASSWORD_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.password";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_SELECTS_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.selects";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_INPUTS_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.inputs";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_BASICS_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.basics";
    }
    /**
     * @constant
     * @type {String}
     */
    static get FORM_INIT_AUTOCOMPLETE_EVENT() {
      return "com.consumeraffairs.styleguide.initForm.autocomplete";
    }
  };

  // src/rebrand/ca_sg_forms/js/baseinput-constants.es6
  var ERROR_ITEM_STYLE = "ca-form__error-item";
  var FORM_GROUP_ERROR_STYLE = "ca-form__group--error";
  var ERROR_LIST_SELECTOR = ".js-errorlist";

  // src/rebrand/ca_sg_forms/js/baseinput-error-handler.es6
  var BaseInputErrorHandler = class {
    /**
     * @constructor
     */
    constructor(containerElement, errorSelector = ERROR_LIST_SELECTOR) {
      this._containerElement = containerElement;
      if (this._containerElement) {
        this._msgContainer = this._containerElement.querySelector(errorSelector);
      }
    }
    /**
     * @summary Error method to add error styles in the input field and container
     * @param {array|string} messages - error messages
     * @returns {boolean}
     */
    error(messages) {
      if (this._msgContainer) {
        while (this._msgContainer.firstChild) {
          this._msgContainer.removeChild(this._msgContainer.firstChild);
        }
        if (messages && messages !== " ") {
          this._containerElement.classList.add(FORM_GROUP_ERROR_STYLE);
          messages = messages instanceof Array ? messages : [messages];
          messages.forEach((error) => {
            const errorElement = document.createElement("li");
            errorElement.classList.add(ERROR_ITEM_STYLE);
            this._msgContainer.appendChild(errorElement);
            errorElement.textContent = error;
          });
        }
        return true;
      }
      return false;
    }
  };

  // src/rebrand/ca_sg_forms/js/input-tracker.es6
  var input_tracker_default = (name, element) => {
    if (element.name) {
      let data = {
        name: element.name
      };
      if (element.hasAttribute(INPUT_DATA_ATTR)) {
        try {
          data = { ...data, ...JSON.parse(element.getAttribute(INPUT_DATA_ATTR)) };
        } catch (error) {
          throw new Error("[UserDBInputSelect] Not valid JSON", error);
        }
      }
      const detail = {
        category: "form interaction",
        name,
        data
      };
      const event = new CustomEvent(CUSTOM_EVENTS_EVENT, { detail });
      window.dispatchEvent(event);
    }
  };

  // src/rebrand/ca_sg_forms/js/baseinput.es6
  var BaseInput = class {
    /**
     * Create a new component
     * @constructor
     */
    constructor(containerElement, inputSelector = "input, textarea, select", errorSelector = ERROR_LIST_SELECTOR) {
      this._containerElement = containerElement;
      if (this._containerElement) {
        this._inputElement = this._containerElement.querySelector(inputSelector);
        this._errorHandler = new BaseInputErrorHandler(this._containerElement, errorSelector);
        this.blurEventHandler = this.blurEventHandler.bind(this);
        this.focusEventHandler = this.focusEventHandler.bind(this);
        this.validateEventHandler = this.validateEventHandler.bind(this);
        this.keyUpEventHandler = this.keyUpEventHandler.bind(this);
        this.bindEvents();
      }
    }
    /**
     * Binds the events - specific to elements in the template
     */
    bindEvents() {
      if (this._inputElement) {
        this._inputElement.addEventListener("blur", this.blurEventHandler);
        this._inputElement.addEventListener("focus", this.focusEventHandler);
        this._inputElement.addEventListener("validate", this.validateEventHandler);
        this._inputElement.addEventListener(EventWrapper.VALIDATE_EVENT, this.validateEventHandler);
        this._inputElement.addEventListener("keyup", this.keyUpEventHandler);
        return true;
      }
      return false;
    }
    /**
     * Unbind the events - specific to elements in the template
     */
    unbindEvents() {
    }
    /**
     * Handle onBlur Event for input field
     * @param {Event} event - event handler
     */
    blurEventHandler(event) {
      if (this._inputElement.tagName === "INPUT") {
        input_tracker_default("input blur", this._inputElement);
      }
      this.validateEventHandler(event);
    }
    /**
     * Handle validateEvent Event for input field
     * @param {Event} event - event handler
     */
    validateEventHandler(event) {
      const input = event && event.target || this._inputElement;
      if (!this.validate(input)) {
        const msg = input.dataset.errorMsg || input.validationMessage;
        this.error(msg);
        return;
      }
      this.error();
      this._containerElement.classList.remove(FORM_GROUP_ERROR_STYLE);
    }
    /**
     * @summary Handles the BaseInput errors
     * @param {array|string} messages - error messages
     * @returns {boolean}
     */
    error(messages) {
      return this._errorHandler.error(messages);
    }
    /**
     * Handle keyup Event for input field
     * @param {Event} event - event handler
     */
    keyUpEventHandler(event) {
      if (this._containerElement.classList.contains(FORM_GROUP_ERROR_STYLE)) {
        this.validateEventHandler(event);
        return true;
      }
      return false;
    }
    /**
     * Check for input validation
     * @param {HTMLInputElement} input - input element
     */
    validate(input = this._inputElement) {
      if ((input.required || input.getAttribute("pattern")) && !input.checkValidity()) {
        this._containerElement.classList.add(FORM_GROUP_ERROR_STYLE);
        return false;
      }
      return true;
    }
    /**
     * Handle onFocus Event for input field
     */
    focusEventHandler() {
      input_tracker_default("input focus", this._inputElement);
    }
    /**
     * Disable input
     */
    disable() {
      this._inputElement.disabled = true;
      this.unbindEvents();
    }
    /**
     * Enable input
     */
    enable() {
      this._inputElement.disabled = false;
      this.bindEvents();
    }
    /**
     * Get/set data
     */
    set data(data) {
      this._inputElement.value = data;
    }
    get data() {
      return this._inputElement.value;
    }
    /**
     * Get/set required
     */
    set required(value) {
      this._inputElement.required = value;
    }
    get required() {
      return this._inputElement.required;
    }
    /**
     * Get element
     */
    get element() {
      return this._containerElement;
    }
    /**
     * Get dataName
     */
    get dataName() {
      return this._containerElement.dataset.value;
    }
  };

  // src/rebrand/ca_sg_input/js/floatinglabelinput.es6
  var FloatingLabelInput = class extends BaseInput {
    /**
     * @constant
     * @type {string}
     */
    static get LABEL_VISIBLE_MODIFIER() {
      return "ca-form__label--visible";
    }
    /**
     * Create a new component
     * @constructor
     */
    constructor(containerElement, inputSelector = "input, textarea, select") {
      super(containerElement, inputSelector);
      this._labelElement = this._containerElement.querySelector("label");
    }
    /**
     * binds the events - specific to elements in the template
     */
    bindEvents() {
      super.bindEvents();
      this.focusEventHandler = this.focusEventHandler.bind(this);
      window.addEventListener("load", this.loadEventHandler.bind(this));
    }
    /**
     * Handle load Event for window
     */
    loadEventHandler() {
      const bgColor = getComputedStyle(this._inputElement)["background-color"];
      if (this._inputElement.value.length !== 0 || bgColor === "rgb(250, 255, 189)") {
        this.activateFloatingLabel();
      }
    }
    /**
     * unbind the events - specific to elements in the template
     */
    unbindEvents() {
      this._inputElement.removeEventListener("focus", this.focusEventHandler);
      this._inputElement.removeEventListener("blur", this.blurEventHandler);
    }
    /**
     * Handle onBlur Event for input field
     * @param {Event} event - event handler
     */
    blurEventHandler(event) {
      super.blurEventHandler(event);
      if (this._inputElement.value.length === 0 && this._labelElement) {
        this._labelElement.classList.remove(this.constructor.LABEL_VISIBLE_MODIFIER);
      }
    }
    /**
     * Activate the floating label
     */
    activateFloatingLabel() {
      if (this._labelElement) {
        this._labelElement.classList.add(this.constructor.LABEL_VISIBLE_MODIFIER);
      }
    }
    /**
     * Handle onFocus Event for input field
     */
    focusEventHandler() {
      super.focusEventHandler();
      this.activateFloatingLabel();
    }
    /**
     * Overriding the getter/setter so we can show the label
     */
    set data(data) {
      this._inputElement.value = data;
      if (data && data.length > 0) {
        this._labelElement.classList.add(this.constructor.LABEL_VISIBLE_MODIFIER);
      }
    }
    get data() {
      return this._inputElement.value;
    }
  };

  // src/rebrand/ca_sg_dropdown/js/baseselect.es6
  var BaseSelect = class _BaseSelect extends FloatingLabelInput {
    /**
     * UserDB Event Name
     * @constant
     * @type {object}
    */
    static get USERDB_EVT_NAME() {
      return "dropdown";
    }
    /**
     * @constant
     * @returns {String}
     */
    static get VALIDATE_EVENT() {
      return "com.consumeraffairs.styleguide.input.validate";
    }
    /**
     * Show Dropdown Event Name
     * @constant
     */
    static get SHOW_DROPDOWN_EVT_NAME() {
      return "showDropdown";
    }
    /**
     * Hide Dropdown Event Name
     * @constant
     */
    static get HIDE_DROPDOWN_EVT_NAME() {
      return "hideDropdown";
    }
    /**
     * Open dropdown classname
     * @constant
     */
    static get OPEN_DROPDOWN_CLASS() {
      return "js-dropdown-is-open";
    }
    /**
     * Select wrapper classname
     * @constant
     */
    static get SELECT_WRAPPER_CLASS() {
      return ".ca-form__select-wrapper";
    }
    static get DATA_USE_CHOICES_ON_MOBILE() {
      return "data-use-choices-on-mobile";
    }
    /**
     * Create a new component
     * @constructor
     */
    constructor(containerElement, inputSelector = "select", _window = window) {
      super(containerElement, inputSelector);
      this._containerElement = containerElement;
      this._inputElement = this._containerElement.querySelector(inputSelector);
      this._window = _window;
      this._choicesConfig = {
        searchEnabled: this._containerElement.classList.contains("js-choices-search-enabled"),
        itemSelectText: "",
        shouldSort: false
      };
      const useChoicesOnMobile = this._containerElement.hasAttribute(_BaseSelect.DATA_USE_CHOICES_ON_MOBILE);
      if (!this.isMobile() || useChoicesOnMobile) {
        this._choices = new import_choices.default(this._inputElement, this._choicesConfig);
        this._inputElement.choicesjs = this._choices;
      }
    }
    /**
     * @method bindEvents
     * @summary Overwrites the parent method binding also event listeners for the select field
     * @return {void}
     * @private
     */
    bindEvents() {
      super.bindEvents();
      this._inputElementChangeHandler = this._inputElementChangeHandler.bind(this);
      this._dispatchUserDbEvent = this._dispatchUserDbEvent.bind(this);
      this._inputElement.addEventListener("change", this._inputElementChangeHandler);
      this._inputElement.addEventListener("change", this._dispatchUserDbEvent);
      this._inputElement.addEventListener(_BaseSelect.SHOW_DROPDOWN_EVT_NAME, this._handleShowDropdown.bind(this));
      this._inputElement.addEventListener(_BaseSelect.HIDE_DROPDOWN_EVT_NAME, this._handleHideDropdown.bind(this));
    }
    /**
     * @method _inputElementChangeHandler
     * @summary Shows the label when the user changes the select value
     * @return {void}
     * @private
     */
    _inputElementChangeHandler() {
      this.activateFloatingLabel();
      this._dispatchValidateEvent();
      this._inputElement.removeEventListener("change", this._inputElementChangeHandler);
    }
    /**
     * Dispatch UserDB event for the option selected
     * @private
     */
    _dispatchUserDbEvent() {
      if (this._inputElement.name) {
        const detail = {
          name: _BaseSelect.USERDB_EVT_NAME,
          data: {
            element: this._inputElement.name,
            selection: this._inputElement.value
          }
        };
        const event = new CustomEvent(CUSTOM_EVENTS_EVENT, { detail });
        this._window.dispatchEvent(event);
      }
    }
    /**
     * @summary Dispatches the event to trigger the select validation
     * @method _dispatchValidateEvent
     */
    _dispatchValidateEvent() {
      const event = new CustomEvent(_BaseSelect.VALIDATE_EVENT);
      this._inputElement.dispatchEvent(event);
    }
    /**
     * @summary Adds a custom class when the dropdown is open
     * @method _handleShowDropdown
     */
    _handleShowDropdown() {
      const selectWrapper = this._containerElement.querySelector(_BaseSelect.SELECT_WRAPPER_CLASS);
      selectWrapper.classList.add(_BaseSelect.OPEN_DROPDOWN_CLASS);
    }
    /**
     * @summary Removes custom class when the dropdown is open
     * @method _handleHideDropdown
     */
    _handleHideDropdown() {
      const selectWrapper = this._containerElement.querySelector(_BaseSelect.SELECT_WRAPPER_CLASS);
      selectWrapper.classList.remove(_BaseSelect.OPEN_DROPDOWN_CLASS);
    }
    /**
     * Mobile detection
     *
     * @see https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent
     * @see https://stackoverflow.com/a/24600597
     * @return {Boolean}
     */
    isMobile() {
      return /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent);
    }
    /**
     * Getters/setters
     */
    get container() {
      return this._containerElement;
    }
    get element() {
      return this._inputElement;
    }
    get config() {
      return this._choicesConfig;
    }
    set config(config) {
      if (config instanceof Object) {
        this._choicesConfig = Object.assign(this._choicesConfig, config);
      }
    }
  };

  // src/rebrand/ca_sg_forms/js/initialization-manager.es6
  var InitializationManager = class _InitializationManager {
    /**
     * @type {String}
     * @summary Attribute added to initialized elements
     */
    static get FORM_ELEMENT_INIT_ATTRIBUTE() {
      return "data-sg-init";
    }
    /**
     * @type {String}
     * @summary Selector used for non-initialized elements
     */
    static get FORM_ELEMENT_NOT_INIT_SELECTOR() {
      return `:not([${_InitializationManager.FORM_ELEMENT_INIT_ATTRIBUTE}])`;
    }
    /**
     * @summary Parses all initialized chunks to an array
     * @method _parseInitializedChunks
     * @param {Object} element - HTML element
     */
    static parseInitializedChunks(element) {
      let initializedChunks;
      try {
        const data = JSON.parse(element.getAttribute(_InitializationManager.FORM_ELEMENT_INIT_ATTRIBUTE));
        initializedChunks = Array.isArray(data) ? data : [];
      } catch (ignore) {
        initializedChunks = [];
      }
      return initializedChunks;
    }
    /**
     * @summary Adds the initialized attribute to the element
     * @method _setInitialized
     * @param {Object} element - HTML element
     * @param {String} chunkName - The name of the chunk
     */
    static setInitialized(element, chunkName = true) {
      const initializedChunks = _InitializationManager.parseInitializedChunks(element);
      if (initializedChunks.includes(chunkName))
        return;
      initializedChunks.push(chunkName);
      element.setAttribute(_InitializationManager.FORM_ELEMENT_INIT_ATTRIBUTE, JSON.stringify(initializedChunks));
    }
    /**
     * @summary Returns true/false wether the chunk has already been initialized or not
     * @method _isInitialized
     * @param {Object} element - HTML element
     * @param {String} chunkName - The name of the chunk
     */
    static isInitialized(element, chunkName) {
      return _InitializationManager.parseInitializedChunks(element).includes(chunkName);
    }
  };
  var initialization_manager_default = InitializationManager;

  // src/rebrand/ca_sg_dropdown/js/main.es6
  var init = () => {
    const dropdowns = document.querySelectorAll(`.js-choices${initialization_manager_default.FORM_ELEMENT_NOT_INIT_SELECTOR}`);
    dropdowns.forEach((dropdown) => {
      new BaseSelect(dropdown);
      initialization_manager_default.setInitialized(dropdown);
    });
  };
  init();
  window.addEventListener(EventWrapper.FORM_INIT_ALL_EVENT, init);
})();
/*! Bundled license information:

choices.js/public/assets/scripts/choices.js:
  (*! choices.js v8.0.0 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme *)
  (*!
   * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
   * 
   * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
   * All Rights Reserved. Apache Software License 2.0
   * 
   * http://www.apache.org/licenses/LICENSE-2.0
   *)
*/
//# sourceMappingURL=/static/js/ca_sg_dropdown.js.map
