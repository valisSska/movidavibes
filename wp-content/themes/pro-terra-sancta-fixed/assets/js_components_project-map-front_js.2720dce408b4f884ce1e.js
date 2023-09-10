"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpro_terra_sancta_fixed"] = self["webpackChunkpro_terra_sancta_fixed"] || []).push([["js_components_project-map-front_js"],{

/***/ "./js/components/project-map-front.js":
/*!********************************************!*\
  !*** ./js/components/project-map-front.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locale.json */ \"./js/locale.json\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\nvar buildTitleText = function buildTitleText(text) {\n  if (text.length > 52) {\n    return \"\".concat(text.slice(0, 52), \" ...\");\n  }\n\n  return text;\n};\n\nvar buildCategoryText = function buildCategoryText(el) {\n  if (el.project && el.project[0] && el.project[0].name) {\n    return el.project[0].name;\n  }\n\n  return '-';\n};\n\nvar buildCategoryColor = function buildCategoryColor(el) {\n  var category = 0;\n\n  if (el.project && el.project[0] && el.project[0].term_id) {\n    category = el.project[0].term_id;\n  }\n\n  switch (category) {\n    case 9830:\n    case 9749:\n    case 9442:\n    case 9832:\n    case 9836:\n      return '#374856';\n\n    case 9750:\n    case 9443:\n    case 9829:\n    case 9835:\n    case 9833:\n      return '#E26E0E';\n\n    case 9741:\n    case 9441:\n    case 9831:\n    case 9837:\n    case 9834:\n      return '#D31418';\n\n    default:\n      return '#506679';\n  }\n};\n\nvar buildCategoryMarker = function buildCategoryMarker(el) {\n  var category = 0;\n\n  if (el.project && el.project[0] && el.project[0].term_id) {\n    category = el.project[0].term_id;\n  }\n\n  switch (category) {\n    case 9830:\n    case 9749:\n    case 9442:\n    case 9832:\n    case 9836:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';\n\n    case 9750:\n    case 9443:\n    case 9829:\n    case 9835:\n    case 9833:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-orange.png';\n\n    case 9741:\n    case 9441:\n    case 9831:\n    case 9837:\n    case 9834:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-red.png';\n\n    default:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';\n  }\n};\n\nvar fetchTaxonomy = function fetchTaxonomy() {\n  return fetch(\"/wp-json/proterrasancta-api/v1/categories?lang=\".concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (elements) {\n    return elements;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar fetchRegions = function fetchRegions() {\n  return fetch(\"/wp-json/proterrasancta-api/v1/regions?lang=\".concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (elements) {\n    return elements;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar fetchPosts = function fetchPosts(cat, region, postType) {\n  // eslint-disable-next-line eqeqeq\n  var category = cat && cat !== '-1' && cat != '1' ? \"&project_name=\".concat(cat) : ''; // eslint-disable-next-line eqeqeq\n\n  var regions = region && region !== '-1' && region != '1' ? \"&regione=\".concat(region) : '';\n  var type = postType && postType !== '-1' ? \"&post_type=\".concat(postType) : '';\n  return fetch(\"/wp-json/proterrasancta-api/v1/posts?per_page=100&offset=0\".concat(type).concat(category).concat(regions, \"&lang=\").concat(window.language)).then(function (response) {\n    return response.json();\n  }, function (error) {\n    throw new TypeError(error);\n  }).then(function (posts) {\n    return posts;\n  }).catch(function (error) {\n    // eslint-disable-next-line no-console\n    console.log(\"error: \".concat(error));\n    return [];\n  });\n};\n\nvar loadMore = function loadMore(cat, region, postType, posts, setPosts) {\n  fetchPosts(cat, region, postType).then(function (result) {\n    if (result.length > 0) {\n      var updatedPosts = _toConsumableArray(posts);\n\n      updatedPosts.push.apply(updatedPosts, _toConsumableArray(result));\n      setPosts(updatedPosts);\n    }\n  });\n};\n\nvar ProjectMarker = function ProjectMarker(_ref) {\n  var link = _ref.link,\n      text = _ref.text,\n      project = _ref.project,\n      $hover = _ref.$hover,\n      el = _ref.el;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"marker-container position-relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: link\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"project-marker\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"icon-marker\",\n    src: buildCategoryMarker(el),\n    alt: \"project-marker\"\n  }))), $hover && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"marker-box box arrow-bottom\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"title\",\n    dangerouslySetInnerHTML: {\n      __html: text\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"category\",\n    dangerouslySetInnerHTML: {\n      __html: project\n    }\n  })));\n};\n\nvar ProjectMap = function ProjectMap(_ref2) {\n  var postType = _ref2.postType;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      categories = _useState4[0],\n      setCategories = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      regions = _useState6[0],\n      setRegions = _useState6[1];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].all),\n      _useState8 = _slicedToArray(_useState7, 2),\n      label = _useState8[0],\n      setLabel = _useState8[1];\n\n  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].allRegion),\n      _useState10 = _slicedToArray(_useState9, 2),\n      labelRegion = _useState10[0],\n      setLabelRegion = _useState10[1];\n\n  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1'),\n      _useState12 = _slicedToArray(_useState11, 2),\n      selected = _useState12[0],\n      setSelected = _useState12[1];\n\n  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1'),\n      _useState14 = _slicedToArray(_useState13, 2),\n      selectedRegion = _useState14[0],\n      setSelectedRegion = _useState14[1];\n\n  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'),\n      _useState16 = _slicedToArray(_useState15, 2),\n      valore = _useState16[0],\n      setValore = _useState16[1];\n\n  var control = document.querySelector('#kt-layout-id_d00ef6-62');\n  var click1 = document.querySelector('#btn-1');\n  var click2 = document.querySelector('#btn-2');\n  var click3 = document.querySelector('#btn-3');\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    loadMore(selected, selectedRegion, postType, posts, setPosts);\n    fetchTaxonomy().then(function (result) {\n      result.unshift({\n        id: 1,\n        name: _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].all\n      });\n      setCategories(result);\n    });\n    fetchRegions().then(function (result) {\n      result.unshift({\n        id: 1,\n        name: _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].all\n      });\n      setRegions(result);\n    });\n\n    if (control) {\n      click1.addEventListener('click', function () {\n        setValore('1');\n        var idCat = 9443;\n        setPosts([]);\n        setLabel(_locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].name);\n        setSelected(9443);\n        loadMore(idCat, selectedRegion, postType, [], setPosts);\n      });\n      click2.addEventListener('click', function () {\n        setValore('2');\n      });\n      click3.addEventListener('click', function () {\n        setValore('3');\n      });\n    }\n  }, []);\n\n  var changeCategory = function changeCategory(el) {\n    var idCat = el.id === 1 ? '-1' : el.id;\n    setPosts([]);\n\n    if (el.id === 1) {\n      setValore(0);\n    } else if (el.id === 9443) {\n      setValore(1);\n    } else if (el.id === 9442) {\n      setValore(2);\n    } else if (el.id === 9441) {\n      setValore(3);\n    }\n\n    setLabel(el.id === 1 ? _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].all : el.name);\n    setSelected(el.id);\n    loadMore(idCat, selectedRegion, postType, [], setPosts);\n  };\n\n  var changeRegion = function changeRegion(el) {\n    var idRegion = el.id === 1 ? '-1' : el.id;\n    setPosts([]);\n    setLabelRegion(el.id === 1 ? _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].allRegion : el.name);\n    setSelectedRegion(el.id);\n    loadMore(selected, idRegion, postType, [], setPosts);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row justify-content-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col d-flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"dropdown mx-auto my-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"label-select mx-auto dropdown-toggle selezionato\",\n    id: \"dropdownMenuButton\",\n    \"data-mdb-toggle\": \"dropdown\",\n    \"aria-expanded\": \"false\",\n    value: valore\n  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"dropdownMenuButton\"\n  }, categories.map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"dropdown-item\".concat(el.id === selected ? ' selected' : ''),\n      onClick: function onClick() {\n        return changeCategory(el);\n      }\n    }, el.id === 1 ? _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].all : el.name));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"dropdown mx-auto my-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"label-select mx-auto dropdown-toggle\",\n    id: \"dropdownMenuButton\",\n    \"data-mdb-toggle\": \"dropdown\",\n    \"aria-expanded\": \"false\"\n  }, labelRegion), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"dropdown-menu\",\n    \"aria-labelledby\": \"dropdownMenuButton\"\n  }, regions.map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"dropdown-item\".concat(el.id === selected ? ' selected' : ''),\n      onClick: function onClick() {\n        return changeRegion(el);\n      },\n      dangerouslySetInnerHTML: {\n        __html: el.id === 1 ? _locale_json__WEBPACK_IMPORTED_MODULE_2__[window.language].allRegion : el.name\n      }\n    }));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"d-none d-md-block col-12 position-relative map-container mb-5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    apiKey: 'AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4',\n    center: [30.514845975220997, 34.90351614306644],\n    zoom: 6\n  }, posts.filter(function (el) {\n    return el.latitude && el.longitude;\n  }).map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectMarker, {\n      key: index,\n      lat: el.latitude,\n      lng: el.longitude,\n      text: el.title,\n      project: el.project[0].name,\n      link: el.link,\n      el: el\n    });\n  }))), posts.map(function (el, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: index,\n      className: \"col-12 col-sm-6 col-lg-4 news-column projects\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: el.link,\n      className: \"shadow-md news-card position-relative\",\n      style: {\n        backgroundColor: buildCategoryColor(el),\n        height: '100%',\n        width: '100%'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-title pt-2\",\n      dangerouslySetInnerHTML: {\n        __html: buildTitleText(el.title)\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-heading\"\n    }, buildCategoryText(el)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-excerpt\",\n      dangerouslySetInnerHTML: {\n        __html: \"\".concat(el.excerpt.slice(0, 100), \" (...)\")\n      }\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"shadow-md news-card-hover\",\n      style: {\n        backgroundColor: buildCategoryColor(el),\n        height: '100%',\n        width: '100%'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: el.link\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      height: \"231\",\n      width: \"360\",\n      src: el['image-thumb'],\n      alt: el['image-thumb'],\n      loading: \"lazy\",\n      style: {\n        height: '100%',\n        width: '100%',\n        objectFit: 'cover'\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"text-white position-absolute fixed-bottom\",\n      style: {\n        padding: '40px'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-title pt-2\",\n      dangerouslySetInnerHTML: {\n        __html: buildTitleText(el.title)\n      },\n      style: {\n        fontSize: '20px'\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"news-teaser-heading\",\n      style: {\n        fontSize: '16px'\n      }\n    }, buildCategoryText(el))))));\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectMap);\n\n//# sourceURL=webpack://pro-terra-sancta-fixed/./js/components/project-map-front.js?");

/***/ })

}]);