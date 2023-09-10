"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpro_terra_sancta_fixed"] = self["webpackChunkpro_terra_sancta_fixed"] || []).push([["js_components_highlights-slides-section-front_js"],{

/***/ "./js/components/highlights-slides-section-front.js":
/*!**********************************************************!*\
  !*** ./js/components/highlights-slides-section-front.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _splidejs_react_splide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @splidejs/react-splide */ \"./node_modules/@splidejs/react-splide/dist/js/react-splide.esm.js\");\n/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale.json */ \"./js/locale.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar buildCategoryText = function buildCategoryText(el) {\n  if (el.project && el.project[0] && el.project[0].name) {\n    return el.project[0].name;\n  }\n\n  return '';\n};\n\nvar fetchPosts = function fetchPosts(cat, postType) {\n  var category = cat && cat !== '-1' ? \"&categories=\".concat(cat) : '';\n  var type = postType && postType !== '-1' ? \"&post_type=\".concat(postType) : '';\n  return fetch(\"/wp-json/proterrasancta-api/v1/posts?per_page=3&offset=0\".concat(type).concat(category, \"&lang=\").concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (posts) {\n    return posts;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar loadMore = function loadMore(cat, postType, posts, setPosts) {\n  fetchPosts(cat, postType).then(function (result) {\n    if (result.length > 0) {\n      var updatedPosts = _toConsumableArray(posts);\n\n      updatedPosts.push.apply(updatedPosts, _toConsumableArray(result));\n      setPosts(updatedPosts);\n    }\n  });\n};\n\nvar HighlightsSlidesSection = function HighlightsSlidesSection(_ref) {\n  var cat = _ref.cat,\n      postType = _ref.postType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMore(cat, postType, posts, setPosts);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", null, \"ciao\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HighlightsSlidesSection);\n\n//# sourceURL=webpack://pro-terra-sancta-fixed/./js/components/highlights-slides-section-front.js?");

/***/ })

}]);