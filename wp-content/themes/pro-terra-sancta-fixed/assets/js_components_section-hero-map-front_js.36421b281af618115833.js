"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpro_terra_sancta_fixed"] = self["webpackChunkpro_terra_sancta_fixed"] || []).push([["js_components_section-hero-map-front_js"],{

/***/ "./js/components/section-hero-map-front.js":
/*!*************************************************!*\
  !*** ./js/components/section-hero-map-front.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ \"./node_modules/google-map-react/dist/index.modern.js\");\n\n\n\nvar buildCategoryMarker = function buildCategoryMarker(category) {\n  switch (Number.parseInt(category, 10)) {\n    case 9830:\n    case 9749:\n    case 9442:\n    case 9832:\n    case 9836:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';\n\n    case 9750:\n    case 9443:\n    case 9829:\n    case 9835:\n    case 9833:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-orange.png';\n\n    case 9741:\n    case 9441:\n    case 9831:\n    case 9837:\n    case 9834:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-red.png';\n\n    default:\n      return '/wp-content/themes/pro-terra-sancta-fixed/assets/images/project-marker-blu.png';\n  }\n};\n\nvar ProjectMarker = function ProjectMarker(_ref) {\n  var areaId = _ref.areaId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"marker-container position-relative\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"project-marker\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"icon-marker\",\n    src: buildCategoryMarker(areaId),\n    alt: \"project-marker\"\n  }))));\n};\n\nvar SectionMap = function SectionMap(_ref2) {\n  var title = _ref2.title,\n      textContent = _ref2.textContent,\n      textColor = _ref2.textColor,\n      lat = _ref2.lat,\n      lng = _ref2.lng,\n      areaId = _ref2.areaId;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"section-title\",\n    style: {\n      color: textColor\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: title\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12 col-md-6 text-uppercase pb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    apiKey: 'AIzaSyAzShHNzNBSmSFnek_bSrHQTczX9xmzjv4',\n    center: [Number.parseFloat(lat), Number.parseFloat(lng)],\n    zoom: 9\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ProjectMarker, {\n    lat: Number.parseFloat(lat),\n    lng: Number.parseFloat(lng),\n    areaId: areaId\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"col-12 col-md-6 section-left-block\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"section-text\",\n    style: {\n      color: textColor\n    },\n    dangerouslySetInnerHTML: {\n      __html: textContent\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SectionMap);\n\n//# sourceURL=webpack://pro-terra-sancta-fixed/./js/components/section-hero-map-front.js?");

/***/ })

}]);