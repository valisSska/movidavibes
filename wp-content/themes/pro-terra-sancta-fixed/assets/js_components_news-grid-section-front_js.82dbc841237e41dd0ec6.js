"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpro_terra_sancta_fixed"] = self["webpackChunkpro_terra_sancta_fixed"] || []).push([["js_components_news-grid-section-front_js"],{

/***/ "./js/components/news-grid-section-front.js":
/*!**************************************************!*\
  !*** ./js/components/news-grid-section-front.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar buildTitleText = function buildTitleText(text) {\n  return text;\n};\n\nvar fetchPosts = function fetchPosts(postTypeMain, postTypeBlock1, postTypeBlock2, postTypeBlock3, postTypeBlock4, catMain, catBlock1, catBlock2, catBlock3, catBlock4) {\n  var catMainQ = catMain && catMain !== '-1' ? \"&catMain=\".concat(catMain) : '';\n  var catBlock1Q = catBlock1 && catBlock1 !== '-1' ? \"&catBlock1=\".concat(catBlock1) : '';\n  var catBlock2Q = catBlock2 && catBlock2 !== '-1' ? \"&catBlock2=\".concat(catBlock2) : '';\n  var catBlock3Q = catBlock3 && catBlock3 !== '-1' ? \"&catBlock3=\".concat(catBlock3) : '';\n  var catBlock4Q = catBlock4 && catBlock4 !== '-1' ? \"&catBlock4=\".concat(catBlock4) : '';\n  return fetch(\"/wp-json/proterrasancta-api/v1/news-grid-posts?postTypeMain=\".concat(postTypeMain, \"&postTypeBlock1=\").concat(postTypeBlock1, \"&postTypeBlock2=\").concat(postTypeBlock2, \"&postTypeBlock3=\").concat(postTypeBlock3, \"&postTypeBlock4=\").concat(postTypeBlock4).concat(catMainQ).concat(catBlock1Q).concat(catBlock2Q).concat(catBlock3Q).concat(catBlock4Q, \"&lang=\").concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (posts) {\n    return posts;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar loadMore = function loadMore(postTypeMain, postTypeBlock1, postTypeBlock2, postTypeBlock3, postTypeBlock4, catMain, catBlock1, catBlock2, catBlock3, catBlock4, posts, setPosts) {\n  fetchPosts(postTypeMain, postTypeBlock1, postTypeBlock2, postTypeBlock3, postTypeBlock4, catMain, catBlock1, catBlock2, catBlock3, catBlock4).then(function (result) {\n    if (result.length > 0) {\n      var updatedPosts = _toConsumableArray(posts);\n\n      updatedPosts.push.apply(updatedPosts, _toConsumableArray(result));\n      setPosts(updatedPosts);\n    }\n  });\n};\n\nvar NewsSlidesSection = function NewsSlidesSection(_ref) {\n  var mainTitle = _ref.mainTitle,\n      block1Title = _ref.block1Title,\n      block2Title = _ref.block2Title,\n      block3Title = _ref.block3Title,\n      block4Title = _ref.block4Title,\n      btnTextMain = _ref.btnTextMain,\n      btnTextBlock1 = _ref.btnTextBlock1,\n      btnTextBlock2 = _ref.btnTextBlock2,\n      btnTextBlock3 = _ref.btnTextBlock3,\n      btnTextBlock4 = _ref.btnTextBlock4,\n      postTypeMain = _ref.postTypeMain,\n      postTypeBlock1 = _ref.postTypeBlock1,\n      postTypeBlock2 = _ref.postTypeBlock2,\n      postTypeBlock3 = _ref.postTypeBlock3,\n      postTypeBlock4 = _ref.postTypeBlock4,\n      catMain = _ref.catMain,\n      catBlock1 = _ref.catBlock1,\n      catBlock2 = _ref.catBlock2,\n      catBlock3 = _ref.catBlock3,\n      catBlock4 = _ref.catBlock4;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMore(postTypeMain, postTypeBlock1, postTypeBlock2, postTypeBlock3, postTypeBlock4, catMain, catBlock1, catBlock2, catBlock3, catBlock4, posts, setPosts);\n  }, []);\n\n  if (posts.length < 5) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"d-flex\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mx-auto\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"spinner-border m-3\",\n      role: \"status\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Caricamento ...\"))));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row gx-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12 col-md-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"news-grid-card news-grid-card-main\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: posts[0].link,\n    className: \"d-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading d-none d-md-block\"\n  }, mainTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    height: \"480\",\n    width: \"330\",\n    src: posts[0]['image-full'],\n    alt: posts[0]['image-full']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"img-cover-gradient\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"position-absolute block-middle-main\",\n    style: {\n      padding: '40px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading-text d-block d-md-none\"\n  }, mainTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"pt-2 pb-4 py-md-4 text-white text-title\",\n    dangerouslySetInnerHTML: {\n      __html: buildTitleText(posts[0].title)\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, btnTextMain)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \" col-12 col-md-6 container-right-cards row gx-2 mx-0 gy-2 pe-md-0\",\n    style: {\n      marginTop: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-6 news-grid-card news-grid-card-right mt-0\",\n    style: {\n      backgroundColor: 'white'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: posts[1].link,\n    className: \"d-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading d-none d-md-block\",\n    style: {\n      backgroundColor: '#374856'\n    }\n  }, block1Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    height: \"240\",\n    width: \"330\",\n    src: posts[1]['image-thumb'],\n    alt: posts[1]['image-thumb']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"img-cover-gradient grad1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"position-absolute block-middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading-text d-block d-md-none\"\n  }, block1Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-white text-title\",\n    dangerouslySetInnerHTML: {\n      __html: buildTitleText(posts[1].title)\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, btnTextBlock1))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-6 news-grid-card news-grid-card-right mt-0 pe-md-0\",\n    style: {\n      backgroundColor: 'white'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: posts[2].link,\n    className: \"d-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading d-none d-md-block\",\n    style: {\n      backgroundColor: '#E26E0E'\n    }\n  }, block2Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    height: \"240\",\n    width: \"330\",\n    src: posts[2]['image-thumb'],\n    alt: posts[2]['image-thumb']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"img-cover-gradient grad2\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"position-absolute block-middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading-text d-block d-md-none\"\n  }, block2Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-white text-title\",\n    dangerouslySetInnerHTML: {\n      __html: buildTitleText(posts[2].title)\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, btnTextBlock2))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-6 news-grid-card news-grid-card-right\",\n    style: {\n      backgroundColor: 'white'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: posts[3].link,\n    className: \"d-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading d-none d-md-block\",\n    style: {\n      backgroundColor: '#F9BA55'\n    }\n  }, block3Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    height: \"240\",\n    width: \"330\",\n    src: posts[3]['image-thumb'],\n    alt: posts[3]['image-thumb']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"img-cover-gradient grad3\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"position-absolute block-middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading-text d-block d-md-none\"\n  }, block3Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-white text-title\",\n    dangerouslySetInnerHTML: {\n      __html: buildTitleText(posts[3].title)\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, btnTextBlock3))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-6 news-grid-card news-grid-card-right pe-md-0\",\n    style: {\n      backgroundColor: 'white'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: posts[4].link,\n    className: \"d-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading d-none d-md-block\",\n    style: {\n      backgroundColor: '#D31418'\n    }\n  }, block4Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    height: \"240\",\n    width: \"330\",\n    src: posts[4]['image-thumb'],\n    alt: posts[4]['image-thumb']\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"img-cover-gradient grad4\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"position-absolute block-middle\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"heading-text d-block d-md-none\"\n  }, block4Title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"text-white text-title\",\n    dangerouslySetInnerHTML: {\n      __html: buildTitleText(posts[4].title)\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", {\n    className: \"btn btn-primary\"\n  }, btnTextBlock4)))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsSlidesSection);\n\n//# sourceURL=webpack://pro-terra-sancta-fixed/./js/components/news-grid-section-front.js?");

/***/ })

}]);