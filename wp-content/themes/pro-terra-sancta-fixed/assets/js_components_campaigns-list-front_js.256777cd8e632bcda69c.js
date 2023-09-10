"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpro_terra_sancta_fixed"] = self["webpackChunkpro_terra_sancta_fixed"] || []).push([["js_components_campaigns-list-front_js"],{

/***/ "./js/components/campaigns-list-front.js":
/*!***********************************************!*\
  !*** ./js/components/campaigns-list-front.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mollycule_react_anime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mollycule/react-anime */ \"./node_modules/@mollycule/react-anime/dist/index.js\");\n/* harmony import */ var _mollycule_react_anime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mollycule_react_anime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale.json */ \"./js/locale.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-console */\n\n/* eslint-disable  no-unused-vars */\n\n/* eslint-disable   consistent-return */\n\n/* eslint-disable   no-undef */\n\n\n\n\nvar buildCategoryText = function buildCategoryText(el) {\n  if (el.project && el.project[0] && el.project[0].name) {\n    return el.project[0].name;\n  }\n\n  return '';\n};\n\nvar buildCategoryColor = function buildCategoryColor(el) {\n  var category = 0;\n\n  if (el.project && el.project[0] && el.project[0].term_id) {\n    category = el.project[0].term_id;\n  }\n\n  switch (category) {\n    case 9830:\n    case 9749:\n    case 9442:\n    case 9832:\n    case 9836:\n      return '#374856';\n\n    case 9750:\n    case 9443:\n    case 9829:\n    case 9835:\n    case 9833:\n      return '#E26E0E';\n\n    case 9741:\n    case 9441:\n    case 9831:\n    case 9837:\n    case 9834:\n      return '#D31418';\n\n    default:\n      return '#506679';\n  }\n};\n\nvar fetchPosts = function fetchPosts(page, count, cat, postType) {\n  var category = cat && cat !== '-1' ? \"&categories=\".concat(cat) : '';\n  var type = postType && postType !== '-1' ? \"&post_type=\".concat(postType) : '';\n  return fetch(\"/wp-json/proterrasancta-api/v1/posts?per_page=\".concat(count, \"&offset=\").concat(page).concat(type).concat(category, \"&lang=\").concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (posts) {\n    return posts;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar loadMore = function loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton) {\n  setLoading(true);\n  var articlesCount = 6;\n  var offset = page * 6;\n  fetchPosts(offset, articlesCount, cat, postType).then(function (result) {\n    if (result.length > 0) {\n      var updatedPosts = _toConsumableArray(posts);\n\n      updatedPosts.push.apply(updatedPosts, _toConsumableArray(result));\n      setPosts(updatedPosts);\n      setPage(page + 1);\n      setLoading(false);\n    }\n\n    if (result.length < articlesCount) {\n      setShowMoreButton(false);\n    }\n  });\n};\n\nvar CampaignsList = function CampaignsList(_ref) {\n  var cat = _ref.cat,\n      postType = _ref.postType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n      _useState4 = _slicedToArray(_useState3, 2),\n      page = _useState4[0],\n      setPage = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      _useState6 = _slicedToArray(_useState5, 2),\n      loading = _useState6[0],\n      setLoading = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      _useState8 = _slicedToArray(_useState7, 2),\n      showMoreButton = _useState8[0],\n      setShowMoreButton = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, posts && posts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\",\n    style: {\n      position: 'relative'\n    }\n  }, posts.map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mollycule_react_anime__WEBPACK_IMPORTED_MODULE_1___default()), {\n      key: el.id,\n      in: true,\n      duration: 1500,\n      appear: true,\n      onEntering: {\n        translateY: [100, 0],\n        opacity: [0, 1],\n        delay: index % 6 * 100,\n        easing: 'easeOutElastic(2, .5)'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: el.id,\n      className: \"col-12 col-sm-6 col-lg-4 news-column\",\n      style: {\n        opacity: 0\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      style: {\n        backgroundColor: buildCategoryColor(el),\n        height: '445px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      className: \"text-Category\"\n    }, buildCategoryText(el)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: el.link\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      height: \"225\",\n      width: \"410\",\n      src: el['image-thumb'],\n      alt: el['image-thumb'],\n      loading: \"lazy\",\n      style: {\n        height: '225px',\n        width: '100%',\n        objectFit: 'cover'\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-date pt-4 px-4\"\n    }, el.date, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"news-teaser-tag ps-1\"\n    }, buildCategoryText(el))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-title px-4 pb-4\",\n      dangerouslySetInnerHTML: {\n        __html: \"\".concat(el.title)\n      }\n    })))));\n  }), showMoreButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12 pt-4 pb-4 mb-2 d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary m-auto\",\n    style: {\n      display: loading ? 'none' : 'block'\n    },\n    onClick: function onClick() {\n      return loadMore(page, setPage, cat, posts, setPosts, setLoading, postType, setShowMoreButton);\n    }\n  }, \"Guarda altre campagne\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12 py-4\",\n    style: {\n      display: loading ? 'flex' : 'none'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"spinner-border text-primary m-auto\",\n    role: \"status\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"sr-only\"\n  }, \"Loading...\")))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"loading\"\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignsList);\n\n//# sourceURL=webpack://pro-terra-sancta-fixed/./js/components/campaigns-list-front.js?");

/***/ })

}]);