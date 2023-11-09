/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components-movidavibes/heade-block.js":
/*!***************************************************!*\
  !*** ./src/components-movidavibes/heade-block.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editHeade": function() { return /* binding */ editHeade; },
/* harmony export */   "saveHeade": function() { return /* binding */ saveHeade; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _logo_movidavibes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logo-movidavibes */ "./src/components-movidavibes/logo-movidavibes.js");
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.css */ "./src/components-movidavibes/components.css");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







var editHeade = function editHeade(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  var onChangeFormType = function onChangeFormType(value) {
    setAttributes({
      formType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    onChange: onChangeFormType,
    value: attributes.formType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Seleziona il tipo form'),
    options: [{
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'search',
      label: 'Con il filtro'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "heade"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_logo_movidavibes__WEBPACK_IMPORTED_MODULE_3__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "search-input"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    className: "search-input-text"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "#959595",
    className: "bi bi-search",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "button-menu"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "button-menu-content"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    fill: "#959595",
    className: "bi bi-list",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    "fill-rule": "evenodd",
    d: "M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "30",
    height: "30",
    fill: "#959595",
    className: "bi bi-person-circle",
    viewBox: "0 0 16 16"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "icon-profile",
    d: "M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    className: "icon-profile2",
    "fill-rule": "evenodd",
    d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
  }))))));
};
var saveHeade = function saveHeade(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "movidavibes-header-block",
    "data-form-type": attributes.formType
  });
};

/***/ }),

/***/ "./src/components-movidavibes/logo-movidavibes.js":
/*!********************************************************!*\
  !*** ./src/components-movidavibes/logo-movidavibes.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.css */ "./src/components-movidavibes/components.css");


/* eslint-disable */



function LogoMovidavibes() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "logo-movidavibes"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "logo-movidavibes-text"
  }, "MovidaVibes"));
}

/* harmony default export */ __webpack_exports__["default"] = (LogoMovidavibes);

/***/ }),

/***/ "./src/components-movidavibes/movidavibes-login-form.js":
/*!**************************************************************!*\
  !*** ./src/components-movidavibes/movidavibes-login-form.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editMoviLogin": function() { return /* binding */ editMoviLogin; },
/* harmony export */   "saveMoviLogin": function() { return /* binding */ saveMoviLogin; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.css */ "./src/components-movidavibes/components.css");





var editMoviLogin = function editMoviLogin(_ref) {
  (0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "header-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-welcome-login-forms"
  }, "Accedi")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-welcome-login-forms"
  }, "Benvenuto su Movidavibes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-inputs-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: "input-user-login-forms",
    placeholder: "User",
    disabled: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: "input-password-login-forms",
    type: "password",
    placeholder: "Password",
    disabled: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-privacy-login-forms"
  }, "Informativa sulla Privacy"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-button-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "button-login-forms"
  }, "Accedi"))));
};
var saveMoviLogin = function saveMoviLogin() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "movidavibes-login-form"
  });
};

/***/ }),

/***/ "./src/components-movidavibes/movidavibes-signup-form.js":
/*!***************************************************************!*\
  !*** ./src/components-movidavibes/movidavibes-signup-form.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editMoviSignUp": function() { return /* binding */ editMoviSignUp; },
/* harmony export */   "saveMoviSignUp": function() { return /* binding */ saveMoviSignUp; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components.css */ "./src/components-movidavibes/components.css");





var editMoviSignUp = function editMoviSignUp(_ref) {
  (0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "header-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-welcome-login-forms"
  }, "Registrati")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-welcome-login-forms"
  }, "Benvenuto su Movidavibes"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-inputs-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: "input-user-login-forms",
    placeholder: "User",
    disabled: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    className: "input-password-login-forms",
    type: "password",
    placeholder: "Password",
    disabled: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "text-privacy-login-forms"
  }, "Informativa sulla Privacy"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-button-login-forms"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "button-login-forms"
  }, "Registrati"))));
};
var saveMoviSignUp = function saveMoviSignUp() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "movidavibes-signup-form"
  });
};

/***/ }),

/***/ "./src/components/campaigns-list.js":
/*!******************************************!*\
  !*** ./src/components/campaigns-list.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editCampaignsList": function() { return /* binding */ editCampaignsList; },
/* harmony export */   "saveCampaignsList": function() { return /* binding */ saveCampaignsList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var editCampaignsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    categories: select('core').getEntityRecords('taxonomy', 'category'),
    news: select('core').getEntityRecords('postType', 'post', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      categories = _ref.categories,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var categoryId = attributes.categoryId,
      postType = attributes.postType;

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  var listCategories = categories ? categories.map(function (category) {
    return {
      value: category.id,
      label: category.name
    };
  }) : [{
    value: 0,
    name: 'nessuna categoria'
  }];
  listCategories.unshift({
    value: -1,
    name: 'nessuna categoria'
  });
  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangeSelectCategory = function onChangeSelectCategory(value) {
    setAttributes({
      categoryId: Number.parseInt(value, 10)
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategory,
    value: categoryId,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Categoria'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : '',
    alt: firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : '',
    style: {
      height: '300px',
      width: '100%',
      objectFit: 'cover'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-date"
  }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.dateI18n)('d F Y', firstNews.date)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title"
  }, firstNews.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : '',
    alt: secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : '',
    style: {
      height: '300px',
      width: '100%',
      objectFit: 'cover'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-date"
  }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.dateI18n)('d F Y', secondNews.date)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title"
  }, secondNews.title.rendered))));
});
var saveCampaignsList = function saveCampaignsList(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "campaigns-list-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType
  }));
};

/***/ }),

/***/ "./src/components/cover-section.js":
/*!*****************************************!*\
  !*** ./src/components/cover-section.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editCoverSection": function() { return /* binding */ editCoverSection; },
/* harmony export */   "saveCoverSection": function() { return /* binding */ saveCoverSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");





var editCoverSection = function editCoverSection(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeTitle = function onChangeTitle(newContent) {
    setAttributes({
      title: newContent
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  var ButtonUploadImage = function ButtonUploadImage(_ref2) {
    var open = _ref2.open;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      className: "button button-large",
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'ce-lab'));
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters",
    style: {
      backgroundImage: "url(".concat(mediaURL, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: ButtonUploadImage
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "cover-section-title",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title …', 'ce-lab'),
    onChange: onChangeTitle,
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "cover-section-text",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text …', 'ce-lab'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  }))));
};
var saveCoverSection = function saveCoverSection(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundImage: "url(".concat(attributes.mediaURL, ")"),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 d-flex",
    style: {
      minHeight: '350px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cover-text-block m-auto text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    style: {
      color: attributes.textColor
    },
    className: "cover-section-title",
    tagName: "div",
    value: attributes.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cover-section-text",
    style: {
      color: attributes.textColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: attributes.textContent
  })))))));
};

/***/ }),

/***/ "./src/components/form-anagrafica.js":
/*!*******************************************!*\
  !*** ./src/components/form-anagrafica.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editFormAnagrafica": function() { return /* binding */ editFormAnagrafica; },
/* harmony export */   "saveFormAnagrafica": function() { return /* binding */ saveFormAnagrafica; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");



/* eslint-disable no-console */

/* eslint-disable no-unused-vars */

/* eslint-disable consistent-return */

/* eslint-disable no-undef */





var editFormAnagrafica = function editFormAnagrafica(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      singleDonation = _useState2[0],
      setSingleDonation = _useState2[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      selection = _useState4[0],
      setSelection = _useState4[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('4,80'),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      donation = _useState6[0],
      setDonation = _useState6[1];

  var changeButtonDonation = function changeButtonDonation(number, button) {
    setDonation(new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: 2
    }).format(Number.parseFloat(number)));
    setSelection(button);
  };

  var onChangeAsk1 = function onChangeAsk1(value) {
    setAttributes({
      ask1: value
    });
  };

  var onChangeAsk1Text = function onChangeAsk1Text(value) {
    setAttributes({
      ask1Text: value
    });
  };

  var onChangeAsk2 = function onChangeAsk2(value) {
    setAttributes({
      ask2: value
    });
  };

  var onChangeAsk2Text = function onChangeAsk2Text(value) {
    setAttributes({
      ask2Text: value
    });
  };

  var onChangeAsk3 = function onChangeAsk3(value) {
    setAttributes({
      ask3: value
    });
  };

  var onChangeAsk3Text = function onChangeAsk3Text(value) {
    setAttributes({
      ask3Text: value
    });
  };

  var onChangeThankYouUrl = function onChangeThankYouUrl(value) {
    setAttributes({
      thankYouUrl: value
    });
  };

  var onChangeCampaignTag = function onChangeCampaignTag(value) {
    setAttributes({
      campaignTag: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangeLang = function onChangeLang(value) {
    setAttributes({
      lang: value
    });
  };

  var onChangeFormType = function onChangeFormType(value) {
    setAttributes({
      formType: value
    });
  };

  var onChangeFormShape = function onChangeFormShape(value) {
    setAttributes({
      formShape: value
    });
  };

  var onChangePaypal = function onChangePaypal(value) {
    setAttributes({
      paypalKey: value
    });
  };

  var onChangeEnv = function onChangeEnv(value) {
    setAttributes({
      env: value
    });
  };

  var onChangeStripe = function onChangeStripe(value) {
    setAttributes({
      stripeKey: value
    });
  };

  var onChangeIcon1 = function onChangeIcon1(value) {
    setAttributes({
      icon1: value
    });
  };

  var onChangeIcon2 = function onChangeIcon2(value) {
    setAttributes({
      icon2: value
    });
  };

  var onChangeIcon3 = function onChangeIcon3(value) {
    setAttributes({
      icon3: value
    });
  };

  var icons = [{
    value: 'assistenza',
    label: 'assistenza'
  }, {
    value: 'attivita',
    label: 'attivita'
  }, {
    value: 'conservazione2',
    label: 'conservazione'
  }, {
    value: 'distribuzione',
    label: 'distribuzione'
  }, {
    value: 'educazione2',
    label: 'educazione'
  }, {
    value: 'formazione',
    label: 'formazione'
  }, {
    value: 'ricostruzione',
    label: 'ricostruzione'
  }, {
    value: 'supporto',
    label: 'supporto'
  }, {
    value: 'luce',
    label: 'luce'
  }, {
    value: 'acqua',
    label: 'acqua'
  }, {
    value: 'famiglia',
    label: 'famiglia'
  }, {
    value: 'conservazione-black',
    label: 'luoghi'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeLang,
    value: attributes.lang,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona una Lingua'),
    options: [{
      value: 'it',
      label: 'Italiano'
    }, {
      value: 'en',
      label: 'Inglese'
    }, {
      value: 'fr',
      label: 'Francese'
    }, {
      value: 'es',
      label: 'Spagnolo'
    }, {
      value: 'de',
      label: 'Tedesco'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeFormType,
    value: attributes.formType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona il tipo form'),
    options: [{
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'recurring',
      label: 'Solo Mensili'
    }, {
      value: 'newsletter',
      label: 'Solo Anagrafiche'
    }, {
      value: 'newsletter-residence',
      label: 'Anagrafica con preghiera'
    }, {
      value: 'newsletter-fiscale',
      label: 'Anagrafica con C.Fiscale'
    }, {
      value: 'newsletter-message',
      label: 'Anagrafiche con messaggio'
    }, {
      value: 'in-memory',
      label: 'In Memoria'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeFormShape,
    value: attributes.formShape,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona la forma'),
    options: [{
      value: 'form',
      label: 'Standard'
    }, {
      value: 'button',
      label: 'Pulsante'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeEnv,
    value: attributes.env,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ambiente Direct Channel'),
    options: [{
      value: 'test',
      label: 'Test'
    }, {
      value: 'prod',
      label: 'Produzione'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangePaypal,
    value: attributes.paypalKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Paypal'),
    options: [{
      value: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL',
      label: 'Paypal Live'
    }, {
      value: 'AXlo5BqnfFZyW1uZxx5gkgYegrUCI86f7Q65TIABhmOq4Kt5JEb1zM1NdRUKDtV0obCFXmhjIC1tXxQ8',
      label: 'Paypal Network'
    }, {
      value: 'AVdEgYKKXtkm_xhHmQJgVm2Hd-HPVvZUwHBEiTtXaxgJs-YZkK8WlW-loLeaaLBEMY-6GLyxsfS9DQa3',
      label: 'Paypal Test'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeStripe,
    value: attributes.stripeKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Stripe'),
    options: [{
      value: 'pk_live_qfQpAgn0ginBe73s04pdgodQ',
      label: 'Stripe Live'
    }, {
      value: 'pk_live_51HoUXjJhU1LmKSdSbkxGlrACRcf4LTv1RqqzDcqKytqJzbs1tzvrgsw5sRp5USAUGdCg8fHwNbTtvWCTlUno6gSB00fvqTKLzg',
      label: 'Stripe Network'
    }, {
      value: 'pk_test_j3XSbxlNWkY2F8qdAYOmUEB1',
      label: 'Stripe Test'
    }, {
      value: 'pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs',
      label: 'Stripe Test Default'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon1,
    value: attributes.icon1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 1'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon2,
    value: attributes.icon2,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 2'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon3,
    value: attributes.icon3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 3'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "tag campagna",
    value: attributes.campaignTag,
    onChange: onChangeCampaignTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask1",
    value: attributes.ask1,
    onChange: onChangeAsk1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask1 testo",
    value: attributes.ask1Text,
    onChange: onChangeAsk1Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask2",
    value: attributes.ask2,
    onChange: onChangeAsk2
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask2 testo",
    value: attributes.ask2Text,
    onChange: onChangeAsk2Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask3",
    value: attributes.ask3,
    onChange: onChangeAsk3
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask3 testo",
    value: attributes.ask3Text,
    onChange: onChangeAsk3Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "url thank you",
    value: attributes.thankYouUrl,
    onChange: onChangeThankYouUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-menu row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-6",
    onClick: function onClick() {
      return setSingleDonation(true);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "text-menu ".concat(singleDonation ? 'selected' : '')
  }, "Donazione singola")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-6 text-menu",
    onClick: function onClick() {
      return setSingleDonation(false);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "text-menu ".concat(!singleDonation ? 'selected' : '')
  }, "Donazione mensile"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-selected row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container m-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "donate-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon1, ".svg"),
    alt: "icon-campaign"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "divider"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-8 text-container row align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-title"
  }, "Donare"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-price"
  }, donation, "\u20AC"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-ask"
  }, " ", attributes.ask1Text)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-select row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 1 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask1, 1);
    }
  }, attributes.ask1, "\u20AC")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 2 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask2, 2);
    }
  }, attributes.ask2, "\u20AC")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 3 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask3, 3);
    }
  }, attributes.ask3, "\u20AC"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "notes-text"
  }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-cards row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "card-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png",
    alt: "icon"
  }))))));
};
var saveFormAnagrafica = function saveFormAnagrafica(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container px-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "form-anagrafica-root",
    className: "form-anagrafica-root",
    "data-card-color": attributes.cardColor,
    "data-lng": attributes.lang,
    "data-icon1": attributes.icon1,
    "data-icon2": attributes.icon2,
    "data-icon3": attributes.icon3,
    "data-ask1": attributes.ask1,
    "data-ask2": attributes.ask2,
    "data-ask3": attributes.ask3,
    "data-ask1-text": attributes.ask1Text,
    "data-ask2-text": attributes.ask2Text,
    "data-ask3-text": attributes.ask3Text,
    "data-campaign-tag": attributes.campaignTag,
    "data-paypal-key": attributes.paypalKey,
    "data-stripe-key": attributes.stripeKey,
    "data-env": attributes.env,
    "data-thank-you-url": attributes.thankYouUrl,
    "data-form-type": attributes.formType,
    "data-form-shape": attributes.formShape
  })));
};

/***/ }),

/***/ "./src/components/form-checkout.js":
/*!*****************************************!*\
  !*** ./src/components/form-checkout.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editFormCheckout": function() { return /* binding */ editFormCheckout; },
/* harmony export */   "saveFormCheckout": function() { return /* binding */ saveFormCheckout; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");


/* eslint-disable no-console */

/* eslint-disable no-unused-vars */

/* eslint-disable consistent-return */

/* eslint-disable no-undef */
// import { useState } from 'react';




var editFormCheckout = function editFormCheckout(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var donation = '4,80';

  var onChangeThankYouUrl = function onChangeThankYouUrl(value) {
    setAttributes({
      thankYouUrl: value
    });
  };

  var onChangeCampaignTag = function onChangeCampaignTag(value) {
    setAttributes({
      campaignTag: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangeIcon1 = function onChangeIcon1(value) {
    setAttributes({
      icon1: value
    });
  };

  var onChangeLang = function onChangeLang(value) {
    setAttributes({
      lang: value
    });
  };

  var onChangeFormType = function onChangeFormType(value) {
    setAttributes({
      formType: value
    });
  };

  var onChangeFormShape = function onChangeFormShape(value) {
    setAttributes({
      formShape: value
    });
  };

  var onChangeAsk1Text = function onChangeAsk1Text(value) {
    setAttributes({
      ask1Text: value
    });
  };

  var onChangePaypal = function onChangePaypal(value) {
    setAttributes({
      paypalKey: value
    });
  };

  var onChangeEnv = function onChangeEnv(value) {
    setAttributes({
      env: value
    });
  };

  var onChangeStripe = function onChangeStripe(value) {
    setAttributes({
      stripeKey: value
    });
  };

  var icons = [{
    value: 'assistenza',
    label: 'assistenza'
  }, {
    value: 'attivita',
    label: 'attivita'
  }, {
    value: 'conservazione2',
    label: 'conservazione'
  }, {
    value: 'distribuzione',
    label: 'distribuzione'
  }, {
    value: 'educazione2',
    label: 'educazione'
  }, {
    value: 'formazione',
    label: 'formazione'
  }, {
    value: 'ricostruzione',
    label: 'ricostruzione'
  }, {
    value: 'supporto',
    label: 'supporto'
  }, {
    value: 'luce',
    label: 'luce'
  }, {
    value: 'acqua',
    label: 'acqua'
  }, {
    value: 'famiglia',
    label: 'famiglia'
  }, {
    value: 'conservazione-black',
    label: 'luoghi'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeLang,
    value: attributes.lang,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
    options: [{
      value: 'it',
      label: 'Italiano'
    }, {
      value: 'en',
      label: 'Inglese'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeFormType,
    value: attributes.formType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona il tipo form'),
    options: [{
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'recurring',
      label: 'Solo Mensili'
    }, {
      value: 'newsletter',
      label: 'Solo Anagrafiche'
    }, {
      value: 'newsletter-message',
      label: 'Anagrafiche con messaggio'
    }, {
      value: 'in-memory',
      label: 'In Memoria'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeFormShape,
    value: attributes.formShape,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona la forma'),
    options: [{
      value: 'form',
      label: 'Standard'
    }, {
      value: 'button',
      label: 'Pulsante'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeEnv,
    value: attributes.env,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Ambiente Direct Channel'),
    options: [{
      value: 'test',
      label: 'Test'
    }, {
      value: 'prod',
      label: 'Produzione'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePaypal,
    value: attributes.paypalKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Conto Paypal'),
    options: [{
      value: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL',
      label: 'Paypal Live'
    }, {
      value: 'AXlo5BqnfFZyW1uZxx5gkgYegrUCI86f7Q65TIABhmOq4Kt5JEb1zM1NdRUKDtV0obCFXmhjIC1tXxQ8',
      label: 'Paypal Network'
    }, {
      value: 'AVdEgYKKXtkm_xhHmQJgVm2Hd-HPVvZUwHBEiTtXaxgJs-YZkK8WlW-loLeaaLBEMY-6GLyxsfS9DQa3',
      label: 'Paypal Test'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeStripe,
    value: attributes.stripeKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Conto Stripe'),
    options: [{
      value: 'pk_live_qfQpAgn0ginBe73s04pdgodQ',
      label: 'Stripe Live'
    }, {
      value: 'pk_live_51HoUXjJhU1LmKSdSbkxGlrACRcf4LTv1RqqzDcqKytqJzbs1tzvrgsw5sRp5USAUGdCg8fHwNbTtvWCTlUno6gSB00fvqTKLzg',
      label: 'Stripe Network'
    }, {
      value: 'pk_test_j3XSbxlNWkY2F8qdAYOmUEB1',
      label: 'Stripe Test'
    }, {
      value: 'pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs',
      label: 'Stripe Test Default'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeIcon1,
    value: attributes.icon1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icona 1'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Tag Line testo",
    value: attributes.ask1Text,
    onChange: onChangeAsk1Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "tag campagna",
    value: attributes.campaignTag,
    onChange: onChangeCampaignTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "url thank you",
    value: attributes.thankYouUrl,
    onChange: onChangeThankYouUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donate-notmenu row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-menu"
  }, "Contributo"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donate-selected-checkout row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-8 text-container row align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-title"
  }, "Checkout"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-price"
  }, donation, "\u20AC")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "notes-text"
  }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "donate-cards row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png",
    alt: "icon"
  }))))));
};
var saveFormCheckout = function saveFormCheckout(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container px-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "form-checkout-root",
    className: "form-checkout-root",
    "data-card-color": attributes.cardColor,
    "data-lng": attributes.lang,
    "data-icon1": attributes.icon1,
    "data-ask1": attributes.ask1,
    "data-ask1-text": attributes.ask1Text,
    "data-campaign-tag": attributes.campaignTag,
    "data-paypal-key": attributes.paypalKey,
    "data-stripe-key": attributes.stripeKey,
    "data-env": attributes.env,
    "data-thank-you-url": attributes.thankYouUrl,
    "data-form-type": attributes.formType,
    "data-form-shape": attributes.formShape
  })));
};

/***/ }),

/***/ "./src/components/form-donate.js":
/*!***************************************!*\
  !*** ./src/components/form-donate.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editFormDonate": function() { return /* binding */ editFormDonate; },
/* harmony export */   "saveFormDonate": function() { return /* binding */ saveFormDonate; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var editFormDonate = function editFormDonate(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      singleDonation = _useState2[0],
      setSingleDonation = _useState2[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      selection = _useState4[0],
      setSelection = _useState4[1]; // eslint-disable-next-line react-hooks/rules-of-hooks


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('4,80'),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      donation = _useState6[0],
      setDonation = _useState6[1];

  var changeButtonDonation = function changeButtonDonation(number, button) {
    setDonation(new Intl.NumberFormat('it-IT', {
      minimumFractionDigits: 2
    }).format(Number.parseFloat(number)));
    setSelection(button);
  };

  var onChangeAsk1 = function onChangeAsk1(value) {
    setAttributes({
      ask1: value
    });
  };

  var onChangeAsk1Text = function onChangeAsk1Text(value) {
    setAttributes({
      ask1Text: value
    });
  };

  var onChangeAsk2 = function onChangeAsk2(value) {
    setAttributes({
      ask2: value
    });
  };

  var onChangeAsk2Text = function onChangeAsk2Text(value) {
    setAttributes({
      ask2Text: value
    });
  };

  var onChangeAsk3 = function onChangeAsk3(value) {
    setAttributes({
      ask3: value
    });
  };

  var onChangeAsk3Text = function onChangeAsk3Text(value) {
    setAttributes({
      ask3Text: value
    });
  };

  var onChangeThankYouUrl = function onChangeThankYouUrl(value) {
    setAttributes({
      thankYouUrl: value
    });
  };

  var onChangeCampaignTag = function onChangeCampaignTag(value) {
    setAttributes({
      campaignTag: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangeLang = function onChangeLang(value) {
    setAttributes({
      lang: value
    });
  };

  var onChangeFormType = function onChangeFormType(value) {
    setAttributes({
      formType: value
    });
  };

  var onChangeFormShape = function onChangeFormShape(value) {
    setAttributes({
      formShape: value
    });
  };

  var onChangePaypal = function onChangePaypal(value) {
    setAttributes({
      paypalKey: value
    });
  };

  var onChangeEnv = function onChangeEnv(value) {
    setAttributes({
      env: value
    });
  };

  var onChangeStripe = function onChangeStripe(value) {
    setAttributes({
      stripeKey: value
    });
  };

  var onChangeIcon1 = function onChangeIcon1(value) {
    setAttributes({
      icon1: value
    });
  };

  var onChangeIcon2 = function onChangeIcon2(value) {
    setAttributes({
      icon2: value
    });
  };

  var onChangeIcon3 = function onChangeIcon3(value) {
    setAttributes({
      icon3: value
    });
  };

  var icons = [{
    value: 'assistenza',
    label: 'assistenza'
  }, {
    value: 'attivita',
    label: 'attivita'
  }, {
    value: 'conservazione2',
    label: 'conservazione'
  }, {
    value: 'distribuzione',
    label: 'distribuzione'
  }, {
    value: 'educazione2',
    label: 'educazione'
  }, {
    value: 'formazione',
    label: 'formazione'
  }, {
    value: 'ricostruzione',
    label: 'ricostruzione'
  }, {
    value: 'supporto',
    label: 'supporto'
  }, {
    value: 'luce',
    label: 'luce'
  }, {
    value: 'acqua',
    label: 'acqua'
  }, {
    value: 'famiglia',
    label: 'famiglia'
  }, {
    value: 'conservazione-black',
    label: 'luoghi'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeLang,
    value: attributes.lang,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona una Lingua'),
    options: [{
      value: 'it',
      label: 'Italiano'
    }, {
      value: 'en',
      label: 'Inglese'
    }, {
      value: 'fr',
      label: 'Francese'
    }, {
      value: 'es',
      label: 'Spagnolo'
    }, {
      value: 'de',
      label: 'Tedesco'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeFormType,
    value: attributes.formType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona il tipo form'),
    options: [{
      value: 'standard',
      label: 'Standard'
    }, {
      value: 'recurring',
      label: 'Solo Mensili'
    }, {
      value: 'newsletter',
      label: 'Solo Anagrafiche'
    }, {
      value: 'newsletter-message',
      label: 'Anagrafiche con messaggio'
    }, {
      value: 'in-memory',
      label: 'In Memoria'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeFormShape,
    value: attributes.formShape,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona la forma'),
    options: [{
      value: 'form',
      label: 'Standard'
    }, {
      value: 'button',
      label: 'Pulsante'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeEnv,
    value: attributes.env,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ambiente Direct Channel'),
    options: [{
      value: 'test',
      label: 'Test'
    }, {
      value: 'prod',
      label: 'Produzione'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangePaypal,
    value: attributes.paypalKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Paypal'),
    options: [{
      value: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL',
      label: 'Paypal Live'
    }, {
      value: 'AXlo5BqnfFZyW1uZxx5gkgYegrUCI86f7Q65TIABhmOq4Kt5JEb1zM1NdRUKDtV0obCFXmhjIC1tXxQ8',
      label: 'Paypal Network'
    }, {
      value: 'AVdEgYKKXtkm_xhHmQJgVm2Hd-HPVvZUwHBEiTtXaxgJs-YZkK8WlW-loLeaaLBEMY-6GLyxsfS9DQa3',
      label: 'Paypal Test'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeStripe,
    value: attributes.stripeKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Stripe'),
    options: [{
      value: 'pk_live_qfQpAgn0ginBe73s04pdgodQ',
      label: 'Stripe Live'
    }, {
      value: 'pk_live_51HoUXjJhU1LmKSdSbkxGlrACRcf4LTv1RqqzDcqKytqJzbs1tzvrgsw5sRp5USAUGdCg8fHwNbTtvWCTlUno6gSB00fvqTKLzg',
      label: 'Stripe Network'
    }, {
      value: 'pk_test_j3XSbxlNWkY2F8qdAYOmUEB1',
      label: 'Stripe Test'
    }, {
      value: 'pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs',
      label: 'Stripe Test Default'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon1,
    value: attributes.icon1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 1'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon2,
    value: attributes.icon2,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 2'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon3,
    value: attributes.icon3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icona 3'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "tag campagna",
    value: attributes.campaignTag,
    onChange: onChangeCampaignTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask1",
    value: attributes.ask1,
    onChange: onChangeAsk1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask1 testo",
    value: attributes.ask1Text,
    onChange: onChangeAsk1Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask2",
    value: attributes.ask2,
    onChange: onChangeAsk2
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask2 testo",
    value: attributes.ask2Text,
    onChange: onChangeAsk2Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask3",
    value: attributes.ask3,
    onChange: onChangeAsk3
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "ask3 testo",
    value: attributes.ask3Text,
    onChange: onChangeAsk3Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "url thank you",
    value: attributes.thankYouUrl,
    onChange: onChangeThankYouUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-menu row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-6",
    onClick: function onClick() {
      return setSingleDonation(true);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "text-menu ".concat(singleDonation ? 'selected' : '')
  }, "Donazione singola")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-6 text-menu",
    onClick: function onClick() {
      return setSingleDonation(false);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "text-menu ".concat(!singleDonation ? 'selected' : '')
  }, "Donazione mensile"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-selected row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container m-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "donate-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon1, ".svg"),
    alt: "icon-campaign"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "divider"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-8 text-container row align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-title"
  }, "Donare"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-price"
  }, donation, "\u20AC"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-ask"
  }, " ", attributes.ask1Text)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-select row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 1 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask1, 1);
    }
  }, attributes.ask1, "\u20AC")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 2 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask2, 2);
    }
  }, attributes.ask2, "\u20AC")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    type: "button",
    className: "btn btn-options btn-rounded btn-block btn-primary ".concat(selection === 3 ? 'selected' : ''),
    onClick: function onClick() {
      return changeButtonDonation(attributes.ask3, 3);
    }
  }, attributes.ask3, "\u20AC"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "notes-text"
  }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-cards row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "card-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png",
    alt: "icon"
  }))))));
};
var saveFormDonate = function saveFormDonate(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container px-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    id: "form-donate-root",
    className: "form-donate-root",
    "data-card-color": attributes.cardColor,
    "data-lng": attributes.lang,
    "data-icon1": attributes.icon1,
    "data-icon2": attributes.icon2,
    "data-icon3": attributes.icon3,
    "data-ask1": attributes.ask1,
    "data-ask2": attributes.ask2,
    "data-ask3": attributes.ask3,
    "data-ask1-text": attributes.ask1Text,
    "data-ask2-text": attributes.ask2Text,
    "data-ask3-text": attributes.ask3Text,
    "data-campaign-tag": attributes.campaignTag,
    "data-paypal-key": attributes.paypalKey,
    "data-stripe-key": attributes.stripeKey,
    "data-env": attributes.env,
    "data-thank-you-url": attributes.thankYouUrl,
    "data-form-type": attributes.formType,
    "data-form-shape": attributes.formShape
  })));
};

/***/ }),

/***/ "./src/components/form-e-cards.js":
/*!****************************************!*\
  !*** ./src/components/form-e-cards.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editFormCards": function() { return /* binding */ editFormCards; },
/* harmony export */   "saveFormCards": function() { return /* binding */ saveFormCards; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var editFormCards = function editFormCards(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL,
      pdfID = attributes.pdfID,
      pdfURL = attributes.pdfURL; // eslint-disable-next-line react-hooks/rules-of-hooks

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('4,80'),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      donation = _useState2[0];

  var onChangeAsk1 = function onChangeAsk1(value) {
    setAttributes({
      ask1: value
    });
  };

  var onChangeAsk1Text = function onChangeAsk1Text(value) {
    setAttributes({
      ask1Text: value
    });
  };

  var onChangeIconText = function onChangeIconText(value) {
    setAttributes({
      iconText: value
    });
  };

  var onChangeThankYouUrl = function onChangeThankYouUrl(value) {
    setAttributes({
      thankYouUrl: value
    });
  };

  var onChangeCampaignTag = function onChangeCampaignTag(value) {
    setAttributes({
      campaignTag: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangeLang = function onChangeLang(value) {
    setAttributes({
      lang: value
    });
  };

  var onChangeFormShape = function onChangeFormShape(value) {
    setAttributes({
      formShape: value
    });
  };

  var onChangePaypal = function onChangePaypal(value) {
    setAttributes({
      paypalKey: value
    });
  };

  var onChangeEnv = function onChangeEnv(value) {
    setAttributes({
      env: value
    });
  };

  var onChangeStripe = function onChangeStripe(value) {
    setAttributes({
      stripeKey: value
    });
  };

  var onChangeIcon1 = function onChangeIcon1(value) {
    setAttributes({
      icon1: value
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  var onSelectPdf = function onSelectPdf(media) {
    setAttributes({
      pdfURL: media.url,
      pdfID: media.id
    });
  };

  var icons = [{
    value: 'natale',
    label: 'natale'
  }, {
    value: 'educazione',
    label: 'educazione'
  }, {
    value: 'compleanno',
    label: 'compleanno'
  }, {
    value: 'battesimo',
    label: 'battesimo'
  }, {
    value: 'comunione',
    label: 'comunione'
  }, {
    value: 'cresima',
    label: 'cresima'
  }, {
    value: 'matrimonio',
    label: 'matrimonio'
  }, {
    value: 'anniversario',
    label: 'anniversario'
  }, {
    value: 'mamma',
    label: 'festa della mamma'
  }, {
    value: 'papa',
    label: 'festa del papa'
  }];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeLang,
    value: attributes.lang,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona una Lingua'),
    options: [{
      value: 'it',
      label: 'Italiano'
    }, {
      value: 'en',
      label: 'Inglese'
    }, {
      value: 'fr',
      label: 'Francese'
    }, {
      value: 'es',
      label: 'Spagnolo'
    }, {
      value: 'de',
      label: 'Tedesco'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeFormShape,
    value: attributes.formShape,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona la forma'),
    options: [{
      value: 'form',
      label: 'Standard'
    }, {
      value: 'button',
      label: 'Pulsante'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeEnv,
    value: attributes.env,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Ambiente Direct Channel'),
    options: [{
      value: 'test',
      label: 'Test'
    }, {
      value: 'prod',
      label: 'Produzione'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangePaypal,
    value: attributes.paypalKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Paypal'),
    options: [{
      value: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL',
      label: 'Paypal Live'
    }, {
      value: 'AXlo5BqnfFZyW1uZxx5gkgYegrUCI86f7Q65TIABhmOq4Kt5JEb1zM1NdRUKDtV0obCFXmhjIC1tXxQ8',
      label: 'Paypal Network'
    }, {
      value: 'AVdEgYKKXtkm_xhHmQJgVm2Hd-HPVvZUwHBEiTtXaxgJs-YZkK8WlW-loLeaaLBEMY-6GLyxsfS9DQa3',
      label: 'Paypal Test'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeStripe,
    value: attributes.stripeKey,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Seleziona Conto Stripe'),
    options: [{
      value: 'pk_live_qfQpAgn0ginBe73s04pdgodQ',
      label: 'Stripe Live'
    }, {
      value: 'pk_live_51HoUXjJhU1LmKSdSbkxGlrACRcf4LTv1RqqzDcqKytqJzbs1tzvrgsw5sRp5USAUGdCg8fHwNbTtvWCTlUno6gSB00fvqTKLzg',
      label: 'Stripe Network'
    }, {
      value: 'pk_test_j3XSbxlNWkY2F8qdAYOmUEB1',
      label: 'Stripe Test'
    }, {
      value: 'pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs',
      label: 'Stripe Test Default'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    onChange: onChangeIcon1,
    value: attributes.icon1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Evenienza'),
    options: icons
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "tag campagna",
    value: attributes.campaignTag,
    onChange: onChangeCampaignTag
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "cifra",
    value: attributes.ask1,
    onChange: onChangeAsk1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "testo evenienza",
    value: attributes.ask1Text,
    onChange: onChangeAsk1Text
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "testo icona",
    value: attributes.iconText,
    onChange: onChangeIconText
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.TextControl, {
    label: "url thank you",
    value: attributes.thankYouUrl,
    onChange: onChangeThankYouUrl
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-menu row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "text-menu selected"
  }, "CARTOLINA"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-selected row gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-container m-auto"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "donate-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/e-cards/".concat(attributes.icon1, ".png"),
    alt: "icon-campaign"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "divider"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col-8 text-container row align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-title"
  }, "Donare"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-price"
  }, donation, "\u20AC"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "icon-ask"
  }, " ", attributes.ask1Text)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload Image', 'rovagnati-us') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: mediaURL,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Icon Image', 'rovagnati-us')
      }));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.MediaUpload, {
    onSelect: onSelectPdf,
    allowedTypes: "pdf",
    value: pdfID,
    render: function render(_ref3) {
      var open = _ref3.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: pdfID ? 'image-button' : 'button button-large',
        onClick: open
      }, !pdfID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Upload PDF', 'rovagnati-us') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", null, pdfURL));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-input row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "notes-text"
  }, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "donate-cards row gx-0 justify-content-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "col option-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "card-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/amex.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/maestro.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/mastercard.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/visa.svg",
    alt: "icon"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    className: "card-icon",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/cards/paypal.png",
    alt: "icon"
  }))))));
};
var saveFormCards = function saveFormCards(_ref4) {
  var attributes = _ref4.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    style: {
      backgroundColor: 'transparent'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container px-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "form-cards-root",
    "data-card-color": attributes.cardColor,
    "data-lng": attributes.lang,
    "data-icon1": attributes.icon1,
    "data-icon2": attributes.icon2,
    "data-icon3": attributes.icon3,
    "data-ask1": attributes.ask1,
    "data-ask2": attributes.ask2,
    "data-ask3": attributes.ask3,
    "data-ask1-text": attributes.ask1Text,
    "data-ask2-text": attributes.ask2Text,
    "data-ask3-text": attributes.ask3Text,
    "data-campaign-tag": attributes.campaignTag,
    "data-paypal-key": attributes.paypalKey,
    "data-stripe-key": attributes.stripeKey,
    "data-env": attributes.env,
    "data-thank-you-url": attributes.thankYouUrl,
    "data-form-type": attributes.formType,
    "data-form-shape": attributes.formShape,
    "data-image": attributes.mediaURL,
    "data-pdf": attributes.pdfURL,
    "data-icon-text": attributes.iconText
  })));
};

/***/ }),

/***/ "./src/components/highlights-slides-section.js":
/*!*****************************************************!*\
  !*** ./src/components/highlights-slides-section.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editHighlightsSlidesSection": function() { return /* binding */ editHighlightsSlidesSection; },
/* harmony export */   "saveHighlightsSlidesSection": function() { return /* binding */ saveHighlightsSlidesSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var buildCategoryText = function buildCategoryText(el) {
  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].label) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

var buildCategoryColor = function buildCategoryColor(el) {
  var category = 0;

  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].value) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';

    case 9443:
      return '#E26E0E';

    case 9441:
      return '#D31418';

    default:
      return '#506679';
  }
};

var editHighlightsSlidesSection = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    categories: select('core').getEntityRecords('taxonomy', 'category'),
    news: select('core').getEntityRecords('postType', 'project', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      categories = _ref.categories,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postType = attributes.postType,
      categoryId = attributes.categoryId;

  var onChangeLink = function onChangeLink(value) {
    setAttributes({
      link: value
    });
  };

  var onChangeButtonText = function onChangeButtonText(value) {
    setAttributes({
      btnText: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var listCategories = categories ? categories.map(function (category) {
    return {
      value: category.id,
      label: category.name
    };
  }) : [{
    value: 0,
    name: 'nessuna categoria'
  }];
  listCategories.unshift({
    value: -1,
    name: 'nessuna categoria'
  });
  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangeSelectCategory = function onChangeSelectCategory(value) {
    setAttributes({
      categoryId: Number.parseInt(value, 10)
    });
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategory,
    value: categoryId,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Categoria'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: onChangeLink
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text",
    value: attributes.btnText,
    onChange: onChangeButtonText
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(firstNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: firstNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(firstNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(firstNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(secondNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: secondNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(secondNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(secondNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  }))));
});
var saveHighlightsSlidesSection = function saveHighlightsSlidesSection(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "highlights-slides-section-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType,
    "data-link": attributes.link,
    "data-btn-text": attributes.btnText
  })));
};

/***/ }),

/***/ "./src/components/image-card.js":
/*!**************************************!*\
  !*** ./src/components/image-card.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editImageCard": function() { return /* binding */ editImageCard; },
/* harmony export */   "saveImageCard": function() { return /* binding */ saveImageCard; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");





var editImageCard = function editImageCard(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeTitle = function onChangeTitle(newContent) {
    setAttributes({
      title: newContent
    });
  };

  var onChangeSubTitle = function onChangeSubTitle(newContent) {
    setAttributes({
      subTitle: newContent
    });
  };

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor,
      color: attributes.textColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "history-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'rovagnati-us') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaURL,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icon Image', 'rovagnati-us')
      }));
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    className: "title text-uppercase",
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title …', 'rovagnati-us'),
    onChange: onChangeTitle,
    value: attributes.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    className: "sub-title text-uppercase",
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Summary …', 'rovagnati-us'),
    onChange: onChangeSubTitle,
    value: attributes.subTitle
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    className: "text-content",
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'rovagnati-us'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  }))));
};
var saveImageCard = function saveImageCard(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor,
      color: attributes.textColor,
      height: '100%',
      backgroundImage: "url(".concat(attributes.mediaURL, ")")
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "history-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row p-5 text-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "title font-weight-bold text-uppercase"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    value: attributes.title
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sub-title text-uppercase"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    value: attributes.subTitle
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-content font-weight-normal"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    value: attributes.textContent
  })))))));
};

/***/ }),

/***/ "./src/components/news-grid-section.js":
/*!*********************************************!*\
  !*** ./src/components/news-grid-section.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editNewsGridSection": function() { return /* binding */ editNewsGridSection; },
/* harmony export */   "saveNewsGridSection": function() { return /* binding */ saveNewsGridSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var buildCategoryText = function buildCategoryText(el) {
  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].label) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

var buildCategoryColor = function buildCategoryColor(el) {
  var category = 0;

  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].value) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';

    case 9443:
      return '#E26E0E';

    case 9441:
      return '#D31418';

    default:
      return '#506679';
  }
};

var editNewsGridSection = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    categories: select('core').getEntityRecords('taxonomy', 'category'),
    news: select('core').getEntityRecords('postType', 'project', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      categories = _ref.categories,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var listCategories = categories ? categories.map(function (category) {
    return {
      value: category.id,
      label: category.name
    };
  }) : [{
    value: 0,
    name: 'nessuna categoria'
  }];
  listCategories.unshift({
    value: -1,
    name: 'nessuna categoria'
  });

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangeMainTitle = function onChangeMainTitle(value) {
    setAttributes({
      mainTitle: value
    });
  };

  var onChangeBlock1Title = function onChangeBlock1Title(value) {
    setAttributes({
      block1Title: value
    });
  };

  var onChangeBlock2Title = function onChangeBlock2Title(value) {
    setAttributes({
      block2Title: value
    });
  };

  var onChangeBlock3Title = function onChangeBlock3Title(value) {
    setAttributes({
      block3Title: value
    });
  };

  var onChangeBlock4Title = function onChangeBlock4Title(value) {
    setAttributes({
      block4Title: value
    });
  };

  var onChangeButtonTextMain = function onChangeButtonTextMain(value) {
    setAttributes({
      btnTextMain: value
    });
  };

  var onChangeButtonTextBlock1 = function onChangeButtonTextBlock1(value) {
    setAttributes({
      btnTextBlock1: value
    });
  };

  var onChangeButtonTextBlock2 = function onChangeButtonTextBlock2(value) {
    setAttributes({
      btnTextBlock2: value
    });
  };

  var onChangeButtonTextBlock3 = function onChangeButtonTextBlock3(value) {
    setAttributes({
      btnTextBlock3: value
    });
  };

  var onChangeButtonTextBlock4 = function onChangeButtonTextBlock4(value) {
    setAttributes({
      btnTextBlock4: value
    });
  };

  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangePostTypeMain = function onChangePostTypeMain(value) {
    setAttributes({
      postTypeMain: value
    });
  };

  var onChangePostTypeBlock1 = function onChangePostTypeBlock1(value) {
    setAttributes({
      postTypeBlock1: value
    });
  };

  var onChangePostTypeBlock2 = function onChangePostTypeBlock2(value) {
    setAttributes({
      postTypeBlock2: value
    });
  };

  var onChangePostTypeBlock3 = function onChangePostTypeBlock3(value) {
    setAttributes({
      postTypeBlock3: value
    });
  };

  var onChangePostTypeBlock4 = function onChangePostTypeBlock4(value) {
    setAttributes({
      postTypeBlock4: value
    });
  };

  var onChangeSelectCategoryMain = function onChangeSelectCategoryMain(value) {
    setAttributes({
      categoryIdMain: Number.parseInt(value, 10)
    });
  };

  var onChangeSelectCategoryBlock1 = function onChangeSelectCategoryBlock1(value) {
    setAttributes({
      categoryIdBlock1: Number.parseInt(value, 10)
    });
  };

  var onChangeSelectCategoryBlock2 = function onChangeSelectCategoryBlock2(value) {
    setAttributes({
      categoryIdBlock2: Number.parseInt(value, 10)
    });
  };

  var onChangeSelectCategoryBlock3 = function onChangeSelectCategoryBlock3(value) {
    setAttributes({
      categoryIdBlock3: Number.parseInt(value, 10)
    });
  };

  var onChangeSelectCategoryBlock4 = function onChangeSelectCategoryBlock4(value) {
    setAttributes({
      categoryIdBlock4: Number.parseInt(value, 10)
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostTypeMain,
    value: attributes.postTypeMain,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Tipo Post Principale'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }, {
      value: 'page',
      label: 'Pagine'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategoryMain,
    value: attributes.categoryIdMain,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Categoria Principale'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostTypeBlock1,
    value: attributes.postTypeBlock1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Tipo Post Blocco 1'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }, {
      value: 'page',
      label: 'Pagine'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategoryBlock1,
    value: attributes.categoryIdBlock1,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Categoria Blocco 1'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostTypeBlock2,
    value: attributes.postTypeBlock2,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Tipo Post Blocco 2'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }, {
      value: 'page',
      label: 'Pagine'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategoryBlock2,
    value: attributes.categoryIdBlock2,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Categoria Blocco 2'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostTypeBlock3,
    value: attributes.postTypeBlock3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Tipo Post Blocco 3'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }, {
      value: 'page',
      label: 'Pagine'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategoryBlock3,
    value: attributes.categoryIdBlock3,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Categoria Blocco 3'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostTypeBlock4,
    value: attributes.postTypeBlock4,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Tipo Post Blocco 4'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }, {
      value: 'page',
      label: 'Pagine'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategoryBlock4,
    value: attributes.categoryIdBlock4,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona Categoria Blocco 4'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Titolo Principale",
    value: attributes.mainTitle,
    onChange: onChangeMainTitle
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Titolo Blocco 1",
    value: attributes.block1Title,
    onChange: onChangeBlock1Title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Titolo Blocco 2",
    value: attributes.block2Title,
    onChange: onChangeBlock2Title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Titolo Blocco 3",
    value: attributes.block3Title,
    onChange: onChangeBlock3Title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Titolo Blocco 4",
    value: attributes.block4Title,
    onChange: onChangeBlock4Title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text principale",
    value: attributes.btnTextMain,
    onChange: onChangeButtonTextMain
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text blocco 1",
    value: attributes.btnTextBlock1,
    onChange: onChangeButtonTextBlock1
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text blocco 2",
    value: attributes.btnTextBlock2,
    onChange: onChangeButtonTextBlock2
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text blocco 3",
    value: attributes.btnTextBlock3,
    onChange: onChangeButtonTextBlock3
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text blocco 4",
    value: attributes.btnTextBlock4,
    onChange: onChangeButtonTextBlock4
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(firstNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: firstNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(firstNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(firstNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(secondNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: secondNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(secondNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(secondNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  }))));
});
var saveNewsGridSection = function saveNewsGridSection(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-fluid gx-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "news-grid-section-root",
    "data-card-color": attributes.cardColor,
    "data-post-type-main": attributes.postTypeMain,
    "data-post-type-block1": attributes.postTypeBlock1,
    "data-post-type-block2": attributes.postTypeBlock2,
    "data-post-type-block3": attributes.postTypeBlock3,
    "data-post-type-block4": attributes.postTypeBlock4,
    "data-cat-main": attributes.categoryIdMain,
    "data-cat-block1": attributes.categoryIdBlock1,
    "data-cat-block2": attributes.categoryIdBlock2,
    "data-cat-block3": attributes.categoryIdBlock3,
    "data-cat-block4": attributes.categoryIdBlock4,
    "data-btn-text-main": attributes.btnTextMain,
    "data-btn-text-block1": attributes.btnTextBlock1,
    "data-btn-text-block2": attributes.btnTextBlock2,
    "data-btn-text-block3": attributes.btnTextBlock3,
    "data-btn-text-block4": attributes.btnTextBlock4,
    "data-main-title": attributes.mainTitle,
    "data-block1-title": attributes.block1Title,
    "data-block2-title": attributes.block2Title,
    "data-block3-title": attributes.block3Title,
    "data-block4-title": attributes.block4Title
  })));
};

/***/ }),

/***/ "./src/components/news-list.js":
/*!*************************************!*\
  !*** ./src/components/news-list.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editNewsList": function() { return /* binding */ editNewsList; },
/* harmony export */   "saveNewsList": function() { return /* binding */ saveNewsList; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var editNewsList = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    categories: select('core').getEntityRecords('taxonomy', 'category'),
    news: select('core').getEntityRecords('postType', 'post', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      categories = _ref.categories,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var categoryId = attributes.categoryId,
      postType = attributes.postType;

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  var listCategories = categories ? categories.map(function (category) {
    return {
      value: category.id,
      label: category.name
    };
  }) : [{
    value: 0,
    name: 'nessuna categoria'
  }];
  listCategories.unshift({
    value: -1,
    name: 'nessuna categoria'
  });
  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangeSelectCategory = function onChangeSelectCategory(value) {
    setAttributes({
      categoryId: Number.parseInt(value, 10)
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSelectCategory,
    value: categoryId,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Categoria'),
    options: listCategories
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_6__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : '',
    alt: firstNews.featured_image_src_large ? firstNews.featured_image_src_large[0] : '',
    style: {
      height: '300px',
      width: '100%',
      objectFit: 'cover'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-date"
  }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.dateI18n)('d F Y', firstNews.date)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title"
  }, firstNews.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : '',
    alt: secondNews.featured_image_src_large ? secondNews.featured_image_src_large[0] : '',
    style: {
      height: '300px',
      width: '100%',
      objectFit: 'cover'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-date"
  }, (0,_wordpress_date__WEBPACK_IMPORTED_MODULE_5__.dateI18n)('d F Y', secondNews.date)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title"
  }, secondNews.title.rendered))));
});
var saveNewsList = function saveNewsList(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "news-list-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType
  }));
};

/***/ }),

/***/ "./src/components/news-slides-section.js":
/*!***********************************************!*\
  !*** ./src/components/news-slides-section.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editNewsSlidesSection": function() { return /* binding */ editNewsSlidesSection; },
/* harmony export */   "saveNewsSlidesSection": function() { return /* binding */ saveNewsSlidesSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var buildCategoryText = function buildCategoryText(el) {
  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].label) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

var buildCategoryColor = function buildCategoryColor(el) {
  var category = 0;

  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].value) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';

    case 9443:
      return '#E26E0E';

    case 9441:
      return '#D31418';

    default:
      return '#506679';
  }
};

var editNewsSlidesSection = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    news: select('core').getEntityRecords('postType', 'project', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postType = attributes.postType;

  var onChangeLink = function onChangeLink(value) {
    setAttributes({
      link: value
    });
  };

  var onChangeButtonText = function onChangeButtonText(value) {
    setAttributes({
      btnText: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: onChangeLink
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text",
    value: attributes.btnText,
    onChange: onChangeButtonText
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(firstNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: firstNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(firstNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(firstNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(secondNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: secondNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(secondNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(secondNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  }))));
});
var saveNewsSlidesSection = function saveNewsSlidesSection(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "news-slides-section-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType,
    "data-link": attributes.link,
    "data-btn-text": attributes.btnText
  })));
};

/***/ }),

/***/ "./src/components/palette-proterrasancta.js":
/*!**************************************************!*\
  !*** ./src/components/palette-proterrasancta.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var paletteProterrasancta = [{
  name: 'Bianco',
  slug: 'bianco',
  color: 'white'
}, {
  name: 'Sfondo Proterrasancta',
  slug: 'grey-blu-proterrasancta',
  color: '#f2f2f2'
}, {
  name: 'Azzuro Proterrasancta',
  slug: 'sky-blu-proterrasancta',
  color: '#BBE5ED'
}, {
  name: 'Rosso Proterrasancta',
  slug: 'red-proterrasancta',
  color: '#b91521'
}, {
  name: 'Blu Proterrasancta',
  slug: 'blu-proterrasancta',
  color: '#007EA7'
}, {
  name: 'Black Proterrasancta',
  slug: 'black-proterrasancta',
  color: '#222222'
}];
/* harmony default export */ __webpack_exports__["default"] = (paletteProterrasancta);

/***/ }),

/***/ "./src/components/project-map.js":
/*!***************************************!*\
  !*** ./src/components/project-map.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editProjectMap": function() { return /* binding */ editProjectMap; },
/* harmony export */   "saveProjectMap": function() { return /* binding */ saveProjectMap; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var buildCategoryText = function buildCategoryText(el) {
  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].label) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

var buildCategoryColor = function buildCategoryColor(el) {
  var category = 0;

  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].value) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';

    case 9443:
      return '#E26E0E';

    case 9441:
      return '#D31418';

    default:
      return '#506679';
  }
};

var editProjectMap = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    news: select('core').getEntityRecords('postType', 'project', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postType = attributes.postType;

  var onChangeLink = function onChangeLink(value) {
    setAttributes({
      link: value
    });
  };

  var onChangeButtonText = function onChangeButtonText(value) {
    setAttributes({
      btnText: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: onChangeLink
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text",
    value: attributes.btnText,
    onChange: onChangeButtonText
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(firstNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: firstNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(firstNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(firstNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(secondNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: secondNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(secondNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(secondNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  }))));
});
var saveProjectMap = function saveProjectMap(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "project-map-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType,
    "data-link": attributes.link,
    "data-btn-text": attributes.btnText
  })));
};

/***/ }),

/***/ "./src/components/project-slides-section.js":
/*!**************************************************!*\
  !*** ./src/components/project-slides-section.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editProjectSlidesSection": function() { return /* binding */ editProjectSlidesSection; },
/* harmony export */   "saveProjectSlidesSection": function() { return /* binding */ saveProjectSlidesSection; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");







var buildCategoryText = function buildCategoryText(el) {
  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].label) {
    return el.taxonomy_info.project_name[0].label;
  }

  return 'Nessuna categoria';
};

var buildCategoryColor = function buildCategoryColor(el) {
  var category = 0;

  if (el.taxonomy_info && el.taxonomy_info.project_name && el.taxonomy_info.project_name[0] && el.taxonomy_info.project_name[0].value) {
    category = el.taxonomy_info.project_name[0].value;
  }

  switch (category) {
    case 9442:
      return '#374856';

    case 9443:
      return '#E26E0E';

    case 9441:
      return '#D31418';

    default:
      return '#506679';
  }
};

var editProjectSlidesSection = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(function (select) {
  return {
    news: select('core').getEntityRecords('postType', 'project', {
      per_page: 100,
      order: 'desc',
      orderby: 'date'
    })
  };
})(function (_ref) {
  var news = _ref.news,
      className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var postType = attributes.postType;

  var onChangeLink = function onChangeLink(value) {
    setAttributes({
      link: value
    });
  };

  var onChangeButtonText = function onChangeButtonText(value) {
    setAttributes({
      btnText: value
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeCardColor = function onChangeCardColor(color) {
    setAttributes({
      cardColor: color
    });
  };

  var firstNews = news ? news[0] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };
  var secondNews = news ? news[1] : {
    date: new Date(),
    excerpt: {
      rendered: ''
    },
    title: {
      rendered: ''
    },
    slug: '/'
  };

  var onChangePostType = function onChangePostType(value) {
    setAttributes({
      postType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    },
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangePostType,
    value: postType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Tipo Post'),
    options: [{
      value: 'project',
      label: 'Projects'
    }, {
      value: 'campaign',
      label: 'Campaigns'
    }, {
      value: 'post',
      label: 'News'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Title Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Card Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_5__["default"],
      value: attributes.cardColor,
      onChange: onChangeCardColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Card Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: onChangeLink
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "button text",
    value: attributes.btnText,
    onChange: onChangeButtonText
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(firstNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: firstNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(firstNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(firstNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 p-2 news-card",
    style: {
      backgroundColor: buildCategoryColor(secondNews)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-title pt-2",
    dangerouslySetInnerHTML: {
      __html: secondNews.title.rendered
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-heading"
  }, buildCategoryText(secondNews)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "news-teaser-excerpt",
    dangerouslySetInnerHTML: {
      __html: "".concat(secondNews.excerpt.rendered.slice(0, 100), " (...)")
    }
  }))));
});
var saveProjectSlidesSection = function saveProjectSlidesSection(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "project-slides-section-root",
    "data-card-color": attributes.cardColor,
    "data-cat": attributes.categoryId,
    "data-post-type": attributes.postType,
    "data-link": attributes.link,
    "data-btn-text": attributes.btnText
  })));
};

/***/ }),

/***/ "./src/components/section-hero-50.js":
/*!*******************************************!*\
  !*** ./src/components/section-hero-50.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editSectionHero50": function() { return /* binding */ editSectionHero50; },
/* harmony export */   "saveSectionHero50": function() { return /* binding */ saveSectionHero50; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");





var editSectionHero50 = function editSectionHero50(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeTitle = function onChangeTitle(newContent) {
    setAttributes({
      title: newContent
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeBoxColor = function onChangeBoxColor(color) {
    setAttributes({
      boxColor: color
    });
  };

  var onChangeMinHeight = function onChangeMinHeight(size) {
    setAttributes({
      minHeight: size
    });
  };

  var onChangeName = function onChangeName(value) {
    setAttributes({
      name: value
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Box Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.boxColor,
      onChange: onChangeBoxColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Anchor Name",
    value: attributes.name,
    onChange: onChangeName
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Min Height Px",
    value: attributes.minHeight,
    onChange: onChangeMinHeight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Font Size Px",
    value: attributes.fontSize,
    onChange: onChangeMinHeight
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters",
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-title",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title …', 'ce-lab'),
    onChange: onChangeTitle,
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 d-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'ce-lab') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaURL,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'ce-lab')
      }));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 summary"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-text",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'ce-lab'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  }))));
};
var saveSectionHero50 = function saveSectionHero50(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: attributes.name,
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container",
    style: {
      backgroundColor: attributes.boxColor,
      minHeight: "".concat(attributes.minHeight, "px")
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-title",
    style: {
      color: attributes.textColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: attributes.title
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 text-uppercase pb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.mediaURL,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'proterrasancta')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 section-left-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "section-text",
    tagName: "div",
    value: attributes.textContent,
    style: {
      color: attributes.textColor
    }
  }))))));
};

/***/ }),

/***/ "./src/components/section-hero-map.js":
/*!********************************************!*\
  !*** ./src/components/section-hero-map.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editSectionHeroMap": function() { return /* binding */ editSectionHeroMap; },
/* harmony export */   "saveSectionHeroMap": function() { return /* binding */ saveSectionHeroMap; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");





var editSectionHeroMap = function editSectionHeroMap(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeTitle = function onChangeTitle(newContent) {
    setAttributes({
      title: newContent
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeBoxColor = function onChangeBoxColor(color) {
    setAttributes({
      boxColor: color
    });
  };

  var onChangeMinHeight = function onChangeMinHeight(size) {
    setAttributes({
      minHeight: size
    });
  };

  var onChangeName = function onChangeName(value) {
    setAttributes({
      name: value
    });
  };

  var onChangeLat = function onChangeLat(value) {
    setAttributes({
      lat: value
    });
  };

  var onChangeLng = function onChangeLng(value) {
    setAttributes({
      lng: value
    });
  };

  var onChangeArea = function onChangeArea(value) {
    setAttributes({
      areaId: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Box Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.boxColor,
      onChange: onChangeBoxColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Latitude",
    value: attributes.lat,
    onChange: onChangeLat
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Longitude",
    value: attributes.lng,
    onChange: onChangeLng
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Area",
    value: attributes.areaId,
    onChange: onChangeArea
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Anchor Name",
    value: attributes.name,
    onChange: onChangeName
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Min Height Px",
    value: attributes.minHeight,
    onChange: onChangeMinHeight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Font Size Px",
    value: attributes.fontSize,
    onChange: onChangeMinHeight
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters",
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-title",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title …', 'ce-lab'),
    onChange: onChangeTitle,
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 summary"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-text",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'ce-lab'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  }))));
};
var saveSectionHeroMap = function saveSectionHeroMap(_ref2) {
  var attributes = _ref2.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: attributes.name,
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "d-none section-title",
    tagName: "div",
    value: attributes.title
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "d-none section-text",
    tagName: "div",
    value: attributes.textContent
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: "section-map-root",
    "data-area-id": attributes.areaId,
    "data-text-color": attributes.textColor,
    "data-text-title": attributes.title,
    "data-text-content": attributes.textContent,
    "data-lat": attributes.lat,
    "data-lng": attributes.lng
  })));
};

/***/ }),

/***/ "./src/components/section-hero.js":
/*!****************************************!*\
  !*** ./src/components/section-hero.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editSectionHero": function() { return /* binding */ editSectionHero; },
/* harmony export */   "saveSectionHero": function() { return /* binding */ saveSectionHero; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");






var getBackgroundColor = function getBackgroundColor(sectionType) {
  switch (sectionType) {
    case 'emergencies':
      return '#D31418';

    case 'projects':
      return '#D31418';

    case 'itinerary':
      return '#D31418';

    case 'education':
      return '#374856';

    case 'conservazione':
      return '#E26E0E';

    case 'campaigns':
      return '#E26E0E';

    default:
      return '#D31418';
  }
};

var getSectionIcon = function getSectionIcon(sectionType) {
  switch (sectionType) {
    case 'emergencies':
      return 'icona-emergenze';

    case 'projects':
      return 'icona-progetti';

    case 'itinerary':
      return 'icona-itinerari';

    case 'education':
      return 'icona-istruzione';

    case 'conservazione':
      return 'icona-conservazione';

    case 'campaigns':
      return 'icona-campagne';

    default:
      return 'icona-emergenze';
  }
};

var editSectionHero = function editSectionHero(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var sectionType = attributes.sectionType,
      mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeTitle = function onChangeTitle(newContent) {
    setAttributes({
      title: newContent
    });
  };

  var onChangeLinkText = function onChangeLinkText(newContent) {
    setAttributes({
      linkText: newContent
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeBoxColor = function onChangeBoxColor(color) {
    setAttributes({
      boxColor: color
    });
  };

  var onChangeName = function onChangeName(value) {
    setAttributes({
      name: value
    });
  };

  var onChangeLink = function onChangeLink(value) {
    setAttributes({
      link: value
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  var onChangeSectionType = function onChangeSectionType(value) {
    setAttributes({
      sectionType: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeSectionType,
    value: sectionType,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona tipo sezione'),
    options: [{
      value: 'emergencies',
      label: 'Emergenze'
    }, {
      value: 'conservazione',
      label: 'Conservazione'
    }, {
      value: 'education',
      label: 'Educazione'
    }, {
      value: 'campaigns',
      label: 'Campagne'
    }, {
      value: 'itinerary',
      label: 'Itinerari'
    }, {
      value: 'projects',
      label: 'Progetti'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Box Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.boxColor,
      onChange: onChangeBoxColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Anchor Name",
    value: attributes.name,
    onChange: onChangeName
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Link",
    value: attributes.link,
    onChange: onChangeLink
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "top-hero-box",
    style: {
      backgroundColor: getBackgroundColor(sectionType)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container pt-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 row no-gutters align-items-center justify-content-center justify-content-md-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "icon-hero-box",
    src: "/wp-content/themes/pro-terra-sancta/images/".concat(getSectionIcon(sectionType), ".png"),
    alt: "icon-campaign"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-title"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-title",
    style: {
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title …', 'ce-lab'),
    onChange: onChangeTitle,
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-text",
    style: {
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'ce-lab'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 align-items-center row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "help-text m-auto ml-md-auto mr-md-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "link-text",
    style: {
      flexGrow: 1
    },
    tagName: "span",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'ce-lab'),
    onChange: onChangeLinkText,
    value: attributes.linkText
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "ml-2 fas fa-caret-down"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-box-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'ce-lab') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaURL,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'ce-lab')
      }));
    }
  })));
};
var saveSectionHero = function saveSectionHero(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: attributes.name,
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "top-hero-box",
    style: {
      backgroundColor: getBackgroundColor(attributes.sectionType)
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container pt-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 row no-gutters align-items-center justify-content-center justify-content-md-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "icon-hero-box",
    src: "/wp-content/themes/pro-terra-sancta/images/".concat(getSectionIcon(attributes.sectionType), ".png"),
    alt: "icon-campaign"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-title animate-up"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "div",
    value: attributes.title
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "section-text animate-up-delay-100",
    tagName: "div",
    value: attributes.textContent
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: attributes.link,
    className: "col-12 col-md-6 align-items-center row no-gutters"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "help-text m-auto ml-md-auto mr-md-0 animate-up-delay-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "link-text",
    tagName: "span",
    value: attributes.linkText
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "ml-2 fas fa-caret-down"
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero-box-image"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.mediaURL,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hero Image', 'proterrasancta')
  })));
};

/***/ }),

/***/ "./src/components/section-testimonianza.js":
/*!*************************************************!*\
  !*** ./src/components/section-testimonianza.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editSectionTestimonianza": function() { return /* binding */ editSectionTestimonianza; },
/* harmony export */   "saveSectionTestimonianza": function() { return /* binding */ saveSectionTestimonianza; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../locale.json */ "./src/locale.json");






var editSectionTestimonianza = function editSectionTestimonianza(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeTextContent = function onChangeTextContent(newContent) {
    setAttributes({
      textContent: newContent
    });
  };

  var onChangeTextColor = function onChangeTextColor(color) {
    setAttributes({
      textColor: color
    });
  };

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeBoxColor = function onChangeBoxColor(color) {
    setAttributes({
      boxColor: color
    });
  };

  var onChangeMinHeight = function onChangeMinHeight(size) {
    setAttributes({
      minHeight: size
    });
  };

  var onChangeName = function onChangeName(value) {
    setAttributes({
      name: value
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  var onChangeLang = function onChangeLang(value) {
    setAttributes({
      lang: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    onChange: onChangeLang,
    value: attributes.lang,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
    options: [{
      value: 'it',
      label: 'Italiano'
    }, {
      value: 'en',
      label: 'Inglese'
    }, {
      value: 'fr',
      label: 'Francese'
    }, {
      value: 'es',
      label: 'Spagnolo'
    }, {
      value: 'de',
      label: 'Tedesco'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Text Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.textColor,
      onChange: onChangeTextColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Box Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.boxColor,
      onChange: onChangeBoxColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Anchor Name",
    value: attributes.name,
    onChange: onChangeName
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Min Height Px",
    value: attributes.minHeight,
    onChange: onChangeMinHeight
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Font Size Px",
    value: attributes.fontSize,
    onChange: onChangeMinHeight
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters",
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "icon-icon-list",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/testimonianza.svg",
    alt: "icon-campaign"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonianza-text"
  }, _locale_json__WEBPACK_IMPORTED_MODULE_5__[attributes.lang].testimonianza)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 d-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "image",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Image', 'ce-lab') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: mediaURL,
        alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'ce-lab')
      }));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 summary"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    className: "section-text",
    style: {
      color: attributes.textColor,
      flexGrow: 1
    },
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Content …', 'ce-lab'),
    onChange: onChangeTextContent,
    value: attributes.textContent
  }))));
};
var saveSectionTestimonianza = function saveSectionTestimonianza(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: attributes.name,
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container",
    style: {
      backgroundColor: attributes.boxColor,
      minHeight: "".concat(attributes.minHeight, "px")
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-divider my-5"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "divider"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "icon-icon-list",
    src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/testimonianza.svg",
    alt: "icon-campaign"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "testimonianza-text"
  }, _locale_json__WEBPACK_IMPORTED_MODULE_5__[attributes.lang].testimonianza))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 text-uppercase pb-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: attributes.mediaURL,
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Image', 'proterrasancta')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-12 col-md-6 section-left-block"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "section-text",
    tagName: "div",
    value: attributes.textContent,
    style: {
      color: attributes.textColor
    }
  }))))));
};

/***/ }),

/***/ "./src/components/video-cover.js":
/*!***************************************!*\
  !*** ./src/components/video-cover.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editVideoCover": function() { return /* binding */ editVideoCover; },
/* harmony export */   "saveVideoCover": function() { return /* binding */ saveVideoCover; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palette-proterrasancta */ "./src/components/palette-proterrasancta.js");





var editVideoCover = function editVideoCover(_ref) {
  var className = _ref.className,
      attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var mediaID = attributes.mediaID,
      mediaURL = attributes.mediaURL;

  var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
    setAttributes({
      backgroundColor: color
    });
  };

  var onChangeBoxColor = function onChangeBoxColor(color) {
    setAttributes({
      boxColor: color
    });
  };

  var onChangeMinHeight = function onChangeMinHeight(size) {
    setAttributes({
      minHeight: size
    });
  };

  var onSelectImage = function onSelectImage(media) {
    setAttributes({
      mediaURL: media.url,
      mediaID: media.id
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Background Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.backgroundColor,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: 'Box Color',
    colorSettings: [{
      colors: _palette_proterrasancta__WEBPACK_IMPORTED_MODULE_4__["default"],
      value: attributes.boxColor,
      onChange: onChangeBoxColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Box Color')
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: 'Special Settings',
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Min Height Px",
    value: attributes.minHeight,
    onChange: onChangeMinHeight
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Font Size Px",
    value: attributes.fontSize,
    onChange: onChangeMinHeight
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "row no-gutters",
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 d-flex"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: "video",
    value: mediaID,
    render: function render(_ref2) {
      var open = _ref2.open;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: mediaID ? 'image-button' : 'button button-large',
        onClick: open
      }, !mediaID ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Video', 'ce-lab') : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
        playsinline: "playsinline",
        autoPlay: "autoplay",
        muted: "muted",
        loop: "loop"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
        src: mediaURL,
        type: "video/mp4"
      })));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "col-6 summary"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks, null))));
};
var saveVideoCover = function saveVideoCover(_ref3) {
  var attributes = _ref3.attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      backgroundColor: attributes.backgroundColor
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overlay"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    playsinline: "playsinline",
    autoPlay: "autoplay",
    muted: "muted",
    loop: "loop"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: attributes.mediaURL,
    type: "video/mp4"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container h-100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "d-flex h-100 text-center align-items-center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "w-100 text-white"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "display-3"
  }, attributes.title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "lead mb-0"
  }, ' ', (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null), ' '), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    className: "btn btn-danger"
  }, "Discover"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "lead mb-0"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
    className: "fa fa-angle-double-down",
    "aria-hidden": "true"
  }))))));
};

/***/ }),

/***/ "./src/components-movidavibes/components.css":
/*!***************************************************!*\
  !*** ./src/components-movidavibes/components.css ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/rich-text":
/*!**********************************!*\
  !*** external ["wp","richText"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["richText"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectDestructuringEmpty; }
/* harmony export */ });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./src/locale.json":
/*!*************************!*\
  !*** ./src/locale.json ***!
  \*************************/
/***/ (function(module) {

module.exports = JSON.parse('{"it":{"testimonianza":"Testimonianza","assistenza":"Assistenza Sanitaria","attivita":"Attività Culturali","conservazione2":"Conservazione e Restauro Antichità","distribuzione":"Distribuzione Beni di Prima Necessità","educazione2":"Educazione e scuole","formazione":"Formazione Professionale","ricostruzione":"Ricostruzione Edifici","supporto":"Supporto Psicologico","beneficiari":"Beneficiari","donazioni":"donazioni","progetti":"progetti","conservazione":"conservazione e sviluppo","educazione":"educazione e assistenza","emergenze":"emergenze","campagne":"campagne","itinerari":"itinerari","Educazione e Accoglienza":"Educazione e Accoglienza","Educazione e Assistenza":"Educazione e Assistenza","Conservazione e Sviluppo":"Conservazione e Sviluppo","Emergenza":"Emergenze","BATTESIMO":"BATTESIMO","COMUNIONE":"COMUNIONE","CRESIMA":"CRESIMA","MATRIMONIO":"MATRIMONIO","idee":"Idee per sostenerci","ideeSummmary":"Attiva su FACEBOOK una campagna di donazione a nome Pro Terra Sancta\\n                  per festeggiare un evento importante. Includi il pulsante nel tuo post e invita\\n                  alla raccolta i tuoi amici, parenti, colleghi, contatti.  Ogni euro raccolto potrà\\n                  essere utile per sostenere un progetto di aiuto.","ibreviary-title":"iBreviary é il tuo Breviario sul telefonino","ibreviary-summary":"Puoi usarlo per pregare con i testi completi della Liturgia delle Ore, in ben 5 lingue. ","newsletter-title":"RESTA AGGIORNATO CON LA NOSTRA NEWSLETTER","newsletter-summary":"CON LA NOSTRA NEWSLETTER","newsletter-privacy":"Accetto l’informativa sulla Privacy","reddito":"Inserisci il tuo reddito","your-5":"Il tuo 5x1000 è di €","minDonation":"La donazione minima è di 5€","newsletter":"Iscriviti alla newsletter","saveData":"Ok"},"en":{"testimonianza":"Testimony","assistenza":"Healthcare","attivita":"Cultural Activities","conservazione2":"Conservation and Restoration of Antiquities","distribuzione":"Distribution of basic necessities","educazione2":"Education and schools","formazione":"Professional Training","ricostruzione":"Building Reconstruction","supporto":"Psychological Support","beneficiari":"Beneficiaries","donazioni":"donations","progetti":"projects","conservazione":"conservation and development","educazione":"education and assistance","emergenze":"emergencies","campagne":"campaigns","itinerari":"itineraries","Educazione e Accoglienza":"Education and Assistance","Educazione e Assistenza":"Education and Assistance","Conservazione e Sviluppo":"Conservation and Development","Emergenza":"Emergencies","BATTESIMO":"BAPTISM","COMUNIONE":"COMMUNION","CRESIMA":"CONFIRMATION","MATRIMONIO":"MARRIAGE","idee":"Ideas to support us","ideeSummmary":"Activate a donation campaign in the name of Pro Terra Sancta on FACEBOOK\\n                   to celebrate an important event. Include the button in your post and invite\\n                   to collect your friends, relatives, colleagues, contacts. Each euro raised will be able to\\n                   be useful for supporting an aid project.","ibreviary-title":"iBreviary is your Breviary on your mobile","ibreviary-summary":"You can use it to pray with the complete texts of the Liturgy of the Hours, in 5 languages. ","reddito":"Enter your income","your-5":"Your 5x1000 is €","minDonation":"The minimum donation is € 5","newsletter":"Subscribe to the newsletter","saveData":"Ok"},"es":{"testimonianza":"Testimonio","assistenza":"Asistencia sanitaria","attivita":"Actividades culturales","conservazione2":"Conservación y restauración de antigüedades","distribuzione":"Distribución de necesidades básicas","educazione2":"Educación y escuelas","formazione":"Formación profesional","ricostruzione":"Reconstrucción de edificios","supporto":"Apoyo psicológico","beneficiari":"Beneficiarios","donazioni":"donaciones","progetti":"proyectos","conservazione":"conservación y desarrollo","educazione":"educación y asistencia","emergenze":"emergencias","campagne":"campañas","itinerari":"itinerarios","Educazione e Accoglienza":"Educación y Asistencia","Educazione e Assistenza":"Educación y Asistencia","Conservazione e Sviluppo":"Eonservación y Desarrollo","Emergenza":"Emergencias","BATTESIMO":"BAUTISMO","COMUNIONE":"COMUNIÓN","CRESIMA":"CONFIRMACIÓN","MATRIMONIO":"MATRIMONIO","idee":"Ideas para apoyarnos","ideeSummmary":"Activar una campaña de donación a nombre de Pro Terra Sancta en FACEBOOK\\n                   para celebrar un evento importante. Incluye el botón en tu publicación e invita\\n                   para recoger a sus amigos, familiares, colegas, contactos. Cada euro recaudado podrá\\n                   ser útil para apoyar un proyecto de ayuda.","ibreviary-title":"iBreviary es tu Breviario en tu móvil","ibreviary-summary":"Puedes utilizarlo para rezar con los textos completos de la Liturgia de las Horas, en 5 idiomas. ","reddito":"Ingrese sus ingresos","your-5":"Tu 5x1000 es €","minDonation":"La donación mínima es de 5€","newsletter":"Suscríbete al boletín","saveData":"Ok"},"fr":{"testimonianza":"Témoignage","assistenza":"Soins de santé","attivita":"Activités culturelles","conservazione2":"Conservation et restauration des antiquités","distribuzione":"Distribution des produits de première nécessité","educazione2":"Éducation et écoles","formazione":"Formation Professionnelle","ricostruzione":"Reconstruction du bâtiment","supporto":"Soutien psychologique","beneficiari":"Bénéficiaires","donazioni":"des dons","progetti":"projets","conservazione":"conservation et développement","educazione":"éducation et assistance","emergenze":"urgences","campagne":"campagnes","itinerari":"itinéraires","Educazione e Accoglienza":"Education et Assistance","Educazione e Assistenza":"Éducation et Assistance","Conservazione e Sviluppo":"Conservation et Développement","Emergenza":"Urgences","BATTESIMO":"BAPTÊME","COMUNIONE":"COMMUNION","CRESIMA":"CONFIRMATION","MATRIMONIO":"MARIAGE","idee":"Des idées pour nous soutenir","ideeSummmary":"Activez une campagne de dons au nom de Pro Terra Sancta sur FACEBOOK\\n                   pour célébrer un événement important. Incluez le bouton dans votre message et invitez\\n                   pour rassembler vos amis, parents, collègues, contacts. Chaque euro levé pourra\\n                   être utile pour soutenir un projet d’aide.","ibreviary-title":"iBreviary est votre bréviaire sur votre mobile","ibreviary-summary":"Vous pouvez l\'utiliser pour prier avec les textes complets de la Liturgie des Heures, en 5 langues. ","reddito":"Entrez votre revenu","your-5":"Votre 5x1000 est €","minDonation":"Le don minimum est de 5 €","newsletter":"Abonnez-vous à la newsletter","saveData":"Ok"},"de":{"testimonianza":"zeugnis","assistenza":"Gesundheitswesen","attivita":"Kulturelle Aktivitäten","conservazione2":"Konservierung und Restaurierung von Altertümern","distribuzione":"Verteilung von Grundbedürfnissen","educazione2":"Bildung und Schulen","formazione":"Berufsausbildung","ricostruzione":"Gebäude-Rekonstruktion","supporto":"Psychologische Unterstützung","beneficiari":"Begünstigte","donazioni":"spenden","progetti":"Projekte","conservazione":"Erhaltung und Entwicklung","educazione":"Bildung und Unterstützung","emergenze":"Notfälle","campagne":"Kampagnen","itinerari":"Reiserouten","Educazione e Accoglienza":"Bildung und Unterstützung","Educazione e Assistenza":"Bildung und Unterstützung","Conservazione e Sviluppo":"Erhaltung und Entwicklung","Emergenza":"Notfälle","BATTESIMO":"TAUFE","COMUNIONE":"GEMEINSCHAFT","CRESIMA":"BESTÄTIGUNG","MATRIMONIO":"EHE","idee":"Ideen um uns zu unterstützen","ideeSummmary":"Aktivieren Sie eine Spendenkampagne im Namen von Pro Terra Sancta auf FACEBOOK\\n                   ein wichtiges Ereignis zu feiern. Fügen Sie die Schaltfläche in Ihren Beitrag ein und laden Sie ein\\n                   um deine Freunde, Verwandten, Kollegen, Kontakte zu sammeln. Jeder eingenommene Euro kann\\n                   nützlich sein, um ein Hilfsprojekt zu unterstützen.","ibreviary-title":"iBreviary ist Ihr Brevier auf Ihrem Handy","ibreviary-summary":"Sie können es verwenden, um mit den vollständigen Texten der Stundenliturgie in 5 Sprachen zu beten. ","reddito":"Geben Sie Ihr Einkommen ein","your-5":"Ihr 5x1000 ist €","minDonation":"Die Mindestspende beträgt 5 €","newsletter":"Abonnieren Sie den Newsletter","saveData":"Ok"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/rich-text */ "@wordpress/rich-text");
/* harmony import */ var _wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_project_slides_section__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/project-slides-section */ "./src/components/project-slides-section.js");
/* harmony import */ var _components_project_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project-map */ "./src/components/project-map.js");
/* harmony import */ var _components_form_donate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form-donate */ "./src/components/form-donate.js");
/* harmony import */ var _components_movidavibes_movidavibes_login_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components-movidavibes/movidavibes-login-form */ "./src/components-movidavibes/movidavibes-login-form.js");
/* harmony import */ var _components_form_anagrafica__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-anagrafica */ "./src/components/form-anagrafica.js");
/* harmony import */ var _components_form_checkout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-checkout */ "./src/components/form-checkout.js");
/* harmony import */ var _components_form_e_cards__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/form-e-cards */ "./src/components/form-e-cards.js");
/* harmony import */ var _components_news_slides_section__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/news-slides-section */ "./src/components/news-slides-section.js");
/* harmony import */ var _components_news_grid_section__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/news-grid-section */ "./src/components/news-grid-section.js");
/* harmony import */ var _components_highlights_slides_section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/highlights-slides-section */ "./src/components/highlights-slides-section.js");
/* harmony import */ var _components_video_cover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/video-cover */ "./src/components/video-cover.js");
/* harmony import */ var _components_section_hero__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/section-hero */ "./src/components/section-hero.js");
/* harmony import */ var _components_news_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/news-list */ "./src/components/news-list.js");
/* harmony import */ var _components_campaigns_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/campaigns-list */ "./src/components/campaigns-list.js");
/* harmony import */ var _components_cover_section__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/cover-section */ "./src/components/cover-section.js");
/* harmony import */ var _components_section_hero_50__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/section-hero-50 */ "./src/components/section-hero-50.js");
/* harmony import */ var _components_section_hero_map__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/section-hero-map */ "./src/components/section-hero-map.js");
/* harmony import */ var _components_section_testimonianza__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/section-testimonianza */ "./src/components/section-testimonianza.js");
/* harmony import */ var _components_image_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/image-card */ "./src/components/image-card.js");
/* harmony import */ var _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/palette-proterrasancta */ "./src/components/palette-proterrasancta.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _locale_json__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./locale.json */ "./src/locale.json");
/* harmony import */ var _components_movidavibes_movidavibes_signup_form__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components-movidavibes/movidavibes-signup-form */ "./src/components-movidavibes/movidavibes-signup-form.js");
/* harmony import */ var _components_movidavibes_heade_block__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components-movidavibes/heade-block */ "./src/components-movidavibes/heade-block.js");


/* eslint-disable no-console */

/* eslint-disable no-unused-vars */

/* eslint-disable consistent-return */

/* eslint-disable no-undef */






























var HrButton = function HrButton(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
    icon: "editor-code",
    title: "HR",
    onClick: function onClick() {
      props.onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.toggleFormat)(props.value, {
        type: 'hr-format/hr-output'
      }));
    },
    isActive: props.isActive
  });
};

(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.registerFormatType)('hr-format/hr-output', {
  title: 'HR output',
  tagName: 'div',
  className: 'div-hr',
  edit: HrButton
});

var UnderlineButton = function UnderlineButton(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichTextToolbarButton, {
    icon: "editor-code",
    title: "Underline",
    onClick: function onClick() {
      props.onChange((0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.toggleFormat)(props.value, {
        type: 'underline-format/underline-output'
      }));
    },
    isActive: props.isActive
  });
};

(0,_wordpress_rich_text__WEBPACK_IMPORTED_MODULE_5__.registerFormatType)('underline-format/underline-output', {
  title: 'UN output',
  tagName: 'span',
  className: 'text-underline',
  edit: UnderlineButton
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/container', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Container', 'proterrasancta'),
  icon: 'schedule',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#0B506B'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('All page length'),
    isDefault: true
  }, {
    name: 'container',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container margins')
  }],
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null)));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/container-row', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Container Row', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.title-row'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    }
  },
  edit: function edit(_ref3) {
    var className = _ref3.className,
        attributes = _ref3.attributes,
        setAttributes = _ref3.setAttributes;

    var onChangeTitle = function onChangeTitle(newContent) {
      setAttributes({
        title: newContent
      });
    };

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: "title-row",
      style: {
        color: attributes.textColor,
        flexGrow: 1
      },
      tagName: "div",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scrivi il titolo …', 'proterrasancta'),
      onChange: onChangeTitle,
      value: attributes.title
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null)))));
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, attributes.title ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-proterrasancta-row row justify-content-center p-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-lg-6 title-row",
      style: {
        color: attributes.textColor
      }
    }, attributes.title)) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/standard-icon-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Standard Icon List', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    }
  },
  edit: function edit(_ref5) {
    var className = _ref5.className,
        attributes = _ref5.attributes,
        setAttributes = _ref5.setAttributes;

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/donazioni.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/progetti.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/conservazione.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/educazione.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/emergenze.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/campagne.png",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta/images/itinerari.png",
      alt: "icon-campaign"
    }))))));
  },
  save: function save(_ref6) {
    var attributes = _ref6.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "icon-list-section-root"
    })));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/project-icon-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Project Icon List', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    icon1: {
      type: 'string',
      default: 'assistenza'
    },
    icon2: {
      type: 'string',
      default: 'attivita'
    },
    icon3: {
      type: 'string',
      default: 'conservazione2'
    },
    icon4: {
      type: 'string',
      default: 'distribuzione'
    },
    number: {
      type: 'string',
      default: "3'100"
    },
    lang: {
      type: 'string',
      default: 'it'
    }
  },
  edit: function edit(_ref7) {
    var className = _ref7.className,
        attributes = _ref7.attributes,
        setAttributes = _ref7.setAttributes;

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    var onChangeLang = function onChangeLang(value) {
      setAttributes({
        lang: value
      });
    };

    var onChangeIcon1 = function onChangeIcon1(value) {
      setAttributes({
        icon1: value
      });
    };

    var onChangeIcon2 = function onChangeIcon2(value) {
      setAttributes({
        icon2: value
      });
    };

    var onChangeIcon3 = function onChangeIcon3(value) {
      setAttributes({
        icon3: value
      });
    };

    var onChangeIcon4 = function onChangeIcon4(value) {
      setAttributes({
        icon4: value
      });
    };

    var onChangeNumber = function onChangeNumber(value) {
      setAttributes({
        number: value
      });
    };

    var icons = [{
      value: 'assistenza',
      label: 'assistenza'
    }, {
      value: 'attivita',
      label: 'attivita'
    }, {
      value: 'conservazione2',
      label: 'conservazione'
    }, {
      value: 'distribuzione',
      label: 'distribuzione'
    }, {
      value: 'educazione2',
      label: 'educazione'
    }, {
      value: 'formazione',
      label: 'formazione'
    }, {
      value: 'ricostruzione',
      label: 'ricostruzione'
    }, {
      value: 'supporto',
      label: 'supporto'
    }];
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeLang,
      value: attributes.lang,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
      options: [{
        value: 'it',
        label: 'Italiano'
      }, {
        value: 'en',
        label: 'Inglese'
      }, {
        value: 'fr',
        label: 'Francese'
      }, {
        value: 'es',
        label: 'Spagnolo'
      }, {
        value: 'de',
        label: 'Tedesco'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeIcon1,
      value: attributes.icon1,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icona 1'),
      options: icons
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeIcon2,
      value: attributes.icon2,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icona 2'),
      options: icons
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeIcon3,
      value: attributes.icon3,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icona 3'),
      options: icons
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeIcon4,
      value: attributes.icon4,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Icona 4'),
      options: icons
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Text Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: 'Special Settings',
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Beneficiari",
      value: attributes.number,
      onChange: onChangeNumber
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row gx-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon1, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon2, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon2]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon3, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon3]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon4, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon4]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container",
      style: {
        marginLeft: 'auto'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/heart.svg",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-beneficiaries"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].beneficiari), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-number"
    }, attributes.number))))));
  },
  save: function save(_ref8) {
    var attributes = _ref8.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container my-5"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row gx-0 justify-content-center justify-content-md-start"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon1, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon2, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon2]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon3, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon3]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/".concat(attributes.icon4, ".svg"),
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang][attributes.icon4]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "divider"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col icon-container beneficiari"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      className: "icon-icon-list",
      src: "/wp-content/themes/pro-terra-sancta-fixed/assets/images/heart.svg",
      alt: "icon-campaign"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-beneficiaries"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].beneficiari), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "icon-icon-number"
    }, attributes.number)))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/fivex1000', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta fivex1000', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    }
  },
  edit: function edit(_ref9) {
    var className = _ref9.className,
        attributes = _ref9.attributes,
        setAttributes = _ref9.setAttributes;

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-10 col-md-5 col-lg-4 my-5",
      style: {
        color: 'white',
        fontStyle: 'bold'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: '#D31418',
        height: '150px',
        padding: '20px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center py-2 font-weight-bold",
      style: {
        fontSize: '26px'
      }
    }, "Inserisci il tuo reddito"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "md-form"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: "fas fa-euro-sign input-prefix font-weight-bold",
      style: {
        fontSize: '26px',
        color: 'white'
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      id: "reddito",
      className: "form-control font-weight-bold",
      style: {
        fontSize: '26px',
        color: 'white',
        paddingLeft: '35px',
        backgroundColor: '#D31418'
      }
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center font-weight-bold",
      style: {
        backgroundColor: 'whitesmoke',
        padding: '20px',
        color: '#1d1d1b',
        fontSize: '26px',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
      }
    }, "Il tuo 5x1000 \xE8 di \u20AC 50"))))));
  },
  save: function save(_ref10) {
    var attributes = _ref10.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "fivex1000-section-root"
    })));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/standard-logo-list', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Standard Logo List', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    }
  },
  edit: function edit(_ref11) {
    var className = _ref11.className,
        attributes = _ref11.attributes,
        setAttributes = _ref11.setAttributes;

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "-2",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "terrasanta.net",
      target: "_blank",
      href: "http://www.terrasanta.net/",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png",
      alt: "terrasanta.net"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "-1",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Mosaic Centre Jericho",
      target: "_blank",
      href: "https://mosaiccentrejericho.com/",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png",
      alt: "Mosaic Centre Jericho"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "0",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Custodia di Terra Santa",
      target: "_blank",
      href: "https://www.custodia.org",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png",
      alt: "Custodia di Terra Santa"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "1",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Terra Sancta Museum",
      target: "_blank",
      href: "https://www.terrasanctamuseum.org/",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png",
      alt: "Terra Sancta Museum"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "2",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Frati minori di Assisi",
      target: "_blank",
      href: "https://www.assisiofm.it/",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png",
      alt: "Frati minori di Assisi"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ats-affiliati_item slick-slide",
      "data-slick-index": "3",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Christian Media Center",
      target: "_blank",
      href: "https://www.cmc-terrasanta.com/",
      on: "",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png",
      alt: "Christian Media Center"
    })))))));
  },
  save: function save(_ref12) {
    var attributes = _ref12.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "ats-affiliati"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "splideblock",
      className: "splide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "splide__track",
      style: {
        padding: '0px 50px',
        height: '120px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "splide__list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "-2",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "terrasanta.net",
      target: "_blank",
      href: "http://www.terrasanta.net/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png",
      alt: "terrasanta.net"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "-1",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Mosaic Centre Jericho",
      target: "_blank",
      href: "https://mosaiccentrejericho.com/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png",
      alt: "Mosaic Centre Jericho"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "0",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Custodia di Terra Santa",
      target: "_blank",
      href: "https://www.custodia.org",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png",
      alt: "Custodia di Terra Santa"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "1",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Terra Sancta Museum",
      target: "_blank",
      href: "https://www.terrasanctamuseum.org/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png",
      alt: "Terra Sancta Museum"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "2",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Frati minori di Assisi",
      target: "_blank",
      href: "https://www.assisiofm.it/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png",
      alt: "Frati minori di Assisi"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "3",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Christian Media Center",
      target: "_blank",
      href: "https://www.cmc-terrasanta.com/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png",
      alt: "Christian Media Center"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "4",
      "aria-hidden": "false",
      tabIndex: "0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "terrasanta.net",
      target: "_blank",
      href: "http://www.terrasanta.net/",
      on: "",
      tabIndex: "0",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png",
      alt: "terrasanta.net"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "5",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Mosaic Centre Jericho",
      target: "_blank",
      href: "https://mosaiccentrejericho.com/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png",
      alt: "Mosaic Centre Jericho"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "6",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Custodia di Terra Santa",
      target: "_blank",
      href: "https://www.custodia.org",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/LOGO-CUSTODIA2014-240x97.png",
      alt: "Custodia di Terra Santa"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "7",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Terra Sancta Museum",
      target: "_blank",
      href: "https://www.terrasanctamuseum.org/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsm-1-240x76.png",
      alt: "Terra Sancta Museum"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "8",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Frati minori di Assisi",
      target: "_blank",
      href: "https://www.assisiofm.it/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/frati_assisi-240x65.png",
      alt: "Frati minori di Assisi"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "9",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Christian Media Center",
      target: "_blank",
      href: "https://www.cmc-terrasanta.com/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-CMC_color-240x120.png",
      alt: "Christian Media Center"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "10",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "terrasanta.net",
      target: "_blank",
      href: "http://www.terrasanta.net/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/tsn-240x40.png",
      alt: "terrasanta.net"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "ats-affiliati_item splide__slide",
      "data-slick-index": "11",
      "aria-hidden": "true",
      tabIndex: "-1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      title: "Mosaic Centre Jericho",
      target: "_blank",
      href: "https://mosaiccentrejericho.com/",
      on: "",
      tabIndex: "-1",
      rel: "noopener noreferrer"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "https://www.proterrasancta.org/wp-content/uploads/Logo-Mosaic-Centre-Jericho_new-240x228.png",
      alt: "Mosaic Centre Jericho"
    }))))))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/facebook-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Facebook Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418'
    },
    link: {
      type: 'string',
      default: '/campaigns'
    },
    lang: {
      type: 'string',
      default: 'it'
    }
  },
  edit: function edit(_ref13) {
    var className = _ref13.className,
        attributes = _ref13.attributes,
        setAttributes = _ref13.setAttributes;

    var onChangeLink = function onChangeLink(value) {
      setAttributes({
        link: value
      });
    };

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    }; // eslint-disable-next-line sonarjs/no-identical-functions


    var onChangeLang = function onChangeLang(value) {
      setAttributes({
        lang: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeLang,
      value: attributes.lang,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
      options: [{
        value: 'it',
        label: 'Italiano'
      }, {
        value: 'en',
        label: 'Inglese'
      }, {
        value: 'fr',
        label: 'Francese'
      }, {
        value: 'es',
        label: 'Spagnolo'
      }, {
        value: 'de',
        label: 'Tedesco'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: 'Special Settings',
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Link",
      value: attributes.link,
      onChange: onChangeLink
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "facebook-block",
      style: {
        backgroundImage: 'url(wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-facebook-background.png)',
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-5 row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ml-auto row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, "BATTESIMO"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, "COMUNIONE"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, "CRESIMA"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, "MATRIMONIO"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/donazione-fb.png",
      alt: "icon-facebook-donation"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, "Idee per sostenerci"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, "Attiva su FACEBOOK una campagna di donazione a nome Pro Terra Sancta per festeggiare un evento importante. Includi il pulsante nel tuo post e invita alla raccolta i tuoi amici, parenti, colleghi, contatti. Ogni euro raccolto potr\xE0 essere utile per sostenere un progetto di aiuto.")))))));
  },
  save: function save(_ref14) {
    var attributes = _ref14.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "facebook-block",
      style: {
        backgroundImage: 'url(wp-content/themes/pro-terra-sancta-fixed/assets/images/logo-facebook-background.png)',
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "m-auto ml-md-auto mr-md-0 row align-items-center ideas-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].BATTESIMO), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].COMUNIONE), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].CRESIMA), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ideas"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].MATRIMONIO))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/donazione-fb.png",
      alt: "icon-facebook-donation"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "left-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].idee), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang].ideeSummmary)))))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/ibreviary-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta iBreviary Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418'
    },
    link: {
      type: 'string',
      default: '/campaigns'
    },
    lang: {
      type: 'string',
      default: 'it'
    }
  },
  edit: function edit(_ref15) {
    var className = _ref15.className,
        attributes = _ref15.attributes,
        setAttributes = _ref15.setAttributes;

    var onChangeLink = function onChangeLink(value) {
      setAttributes({
        link: value
      });
    };

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    }; // eslint-disable-next-line sonarjs/no-identical-functions


    var onChangeLang = function onChangeLang(value) {
      setAttributes({
        lang: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeLang,
      value: attributes.lang,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
      options: [{
        value: 'it',
        label: 'Italiano'
      }, {
        value: 'en',
        label: 'Inglese'
      }, {
        value: 'fr',
        label: 'Francese'
      }, {
        value: 'es',
        label: 'Spagnolo'
      }, {
        value: 'de',
        label: 'Tedesco'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: 'Special Settings',
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Link",
      value: attributes.link,
      onChange: onChangeLink
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ibreviary-block",
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-2 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-container m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/ibreviary-logo.png",
      alt: "icon-facebook-donation"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-8"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "left-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['ibreviary-title']), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['ibreviary-summary']))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-2 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/ATS10/resources/img/badge_store/asb_".concat([attributes.lang], ".svg"),
      alt: "icon-facebook-donation"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/ATS10/resources/img/badge_store/psb_".concat([attributes.lang], ".svg"),
      alt: "icon-facebook-donation"
    })))))));
  },
  save: function save(_ref16) {
    var attributes = _ref16.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: attributes.link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ibreviary-block",
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-2 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-container m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/ibreviary-logo.png",
      alt: "icon-facebook-donation"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-8"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "left-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['ibreviary-title']), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['ibreviary-summary']))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-2 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/ATS10/resources/img/badge_store/asb_".concat([attributes.lang], ".svg"),
      alt: "icon-facebook-donation"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/ATS10/resources/img/badge_store/psb_".concat([attributes.lang], ".svg"),
      alt: "icon-facebook-donation"
    })))))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/newsletter-block', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Newsletter Block', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: '#007EA7'
    },
    backgroundColor: {
      type: 'string',
      default: '#d31418'
    },
    link: {
      type: 'string',
      default: '/campaigns'
    },
    lang: {
      type: 'string',
      default: 'it'
    }
  },
  edit: function edit(_ref17) {
    var className = _ref17.className,
        attributes = _ref17.attributes,
        setAttributes = _ref17.setAttributes;

    var onChangeLink = function onChangeLink(value) {
      setAttributes({
        link: value
      });
    };

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    }; // eslint-disable-next-line sonarjs/no-identical-functions


    var onChangeLang = function onChangeLang(value) {
      setAttributes({
        lang: value
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      onChange: onChangeLang,
      value: attributes.lang,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Seleziona una Lingua'),
      options: [{
        value: 'it',
        label: 'Italiano'
      }, {
        value: 'en',
        label: 'Inglese'
      }, {
        value: 'fr',
        label: 'Francese'
      }, {
        value: 'es',
        label: 'Spagnolo'
      }, {
        value: 'de',
        label: 'Tedesco'
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Title Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: 'Special Settings',
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Link",
      value: attributes.link,
      onChange: onChangeLink
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "newsletter-block",
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-2 d-flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-container m-auto"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/newsletter-envelope.png",
      alt: "icon-newsletter"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "left-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['newsletter-title']), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['newsletter-summary']))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-md-6 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0"
    }, "[contact-form-7 id=\"119534\" title=\"Newsletter\"]"))))));
  },
  save: function save(_ref18) {
    var attributes = _ref18.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "newsletter-block",
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container pt-0"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row align-items-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-lg-2 d-flex"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-container m-auto"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: "/wp-content/themes/pro-terra-sancta/images/newsletter-envelope.png",
      alt: "icon-newsletter"
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-lg-4"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "left-text"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "title"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['newsletter-title']), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "summary"
    }, _locale_json__WEBPACK_IMPORTED_MODULE_27__[attributes.lang]['newsletter-summary']))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12 col-lg-6 row no-gutters"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "img-app m-auto m-md-0 w-100"
    }, "[contact-form-7 id=\"119582\" title=\"Newsletter\"]"))))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/row', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Row', 'proterrasancta'),
  icon: 'editor-insertmore',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.title-row'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    backgroundColor: {
      type: 'string',
      default: '#0B506B'
    }
  },
  edit: function edit() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "py-2",
      style: {
        borderColor: 'black',
        borderWidth: '2px',
        borderStyle: 'solid'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null));
  },
  save: function save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/divider', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Divider', 'proterrasancta'),
  icon: 'minus',
  category: 'proterrasancta',
  attributes: {
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    },
    backgroundColor: {
      type: 'string',
      default: '#0B506B'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    alignment: {
      type: 'string',
      default: 'none'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default'),
    isDefault: true
  }, {
    name: 'shadow',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('shadow')
  }],
  example: {
    attributes: {
      content: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Buongiorno Proterrasancta', 'proterrasancta'),
      alignment: 'right'
    }
  },
  edit: function edit(_ref19) {
    var attributes = _ref19.attributes,
        setAttributes = _ref19.setAttributes,
        className = _ref19.className;

    var onChangeContent = function onChangeContent(newContent) {
      setAttributes({
        content: newContent
      });
    };

    var onChangeAlignment = function onChangeAlignment(newAlignment) {
      setAttributes({
        alignment: newAlignment === undefined ? 'none' : newAlignment
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.AlignmentToolbar, {
      value: attributes.alignment,
      onChange: onChangeAlignment
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Text Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color')
      }]
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
      className: className,
      style: {
        textAlign: attributes.alignment,
        backgroundColor: attributes.backgroundColor,
        color: attributes.textColor
      },
      tagName: "p",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scrivi il testo …', 'proterrasancta'),
      onChange: onChangeContent,
      value: attributes.content
    }));
  },
  save: function save(_ref20) {
    var attributes = _ref20.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      style: {
        textAlign: attributes.alignment,
        backgroundColor: attributes.backgroundColor,
        color: attributes.textColor
      },
      tagName: "p",
      value: attributes.content
    });
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/video-cover', {
  title: 'Proterrasancta Video Cover',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#f2f2f2'
    },
    boxColor: {
      type: 'string',
      default: 'white'
    },
    minHeight: {
      type: 'string',
      default: '380'
    },
    padding: {
      type: 'string',
      default: ''
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Padding'),
    isDefault: true
  }, {
    name: 'small-padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small Padding')
  }],
  edit: _components_video_cover__WEBPACK_IMPORTED_MODULE_16__.editVideoCover,
  save: _components_video_cover__WEBPACK_IMPORTED_MODULE_16__.saveVideoCover
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/project-slides-section', {
  title: 'Proterrasancta Project Slides Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_project_slides_section__WEBPACK_IMPORTED_MODULE_6__.editProjectSlidesSection,
  save: _components_project_slides_section__WEBPACK_IMPORTED_MODULE_6__.saveProjectSlidesSection
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/project-map', {
  title: 'Proterrasancta Project Map',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_project_map__WEBPACK_IMPORTED_MODULE_7__.editProjectMap,
  save: _components_project_map__WEBPACK_IMPORTED_MODULE_7__.saveProjectMap
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('movidavibes/movidavibes-login-form', {
  title: 'Movidavibes Login Form',
  icon: '',
  category: 'movidavibes',
  edit: _components_movidavibes_movidavibes_login_form__WEBPACK_IMPORTED_MODULE_9__.editMoviLogin,
  save: _components_movidavibes_movidavibes_login_form__WEBPACK_IMPORTED_MODULE_9__.saveMoviLogin
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('movidavibes/movidavibes-signup-form', {
  title: 'Movidavibes SignUp Form',
  icon: '',
  category: 'movidavibes',
  edit: _components_movidavibes_movidavibes_signup_form__WEBPACK_IMPORTED_MODULE_28__.editMoviSignUp,
  save: _components_movidavibes_movidavibes_signup_form__WEBPACK_IMPORTED_MODULE_28__.saveMoviSignUp
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('movidavibes/movidavibes-header-block', {
  title: 'Movidavibes Header',
  icon: '',
  category: 'movidavibes',
  attributes: {
    formType: {
      type: 'string',
      default: 'standard'
    }
  },
  edit: _components_movidavibes_heade_block__WEBPACK_IMPORTED_MODULE_29__.editHeade,
  save: _components_movidavibes_heade_block__WEBPACK_IMPORTED_MODULE_29__.saveHeade
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/form-donate', {
  title: 'Proterrasancta Form Donazione',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: 'white'
    },
    lang: {
      type: 'string',
      default: 'it'
    },
    icon1: {
      type: 'string',
      default: 'assistenza'
    },
    icon2: {
      type: 'string',
      default: 'assistenza'
    },
    icon3: {
      type: 'string',
      default: 'assistenza'
    },
    ask1: {
      type: 'string',
      default: '5.40'
    },
    ask1Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 1'
    },
    ask2: {
      type: 'string',
      default: '22.40'
    },
    ask2Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 2'
    },
    ask3: {
      type: 'string',
      default: '150.00'
    },
    ask3Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 3'
    },
    campaignTag: {
      type: 'string',
      default: 'campaign-01'
    },
    paypalKey: {
      type: 'string',
      default: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL'
    },
    stripeKey: {
      type: 'string',
      default: 'pk_live_qfQpAgn0ginBe73s04pdgodQ'
    },
    env: {
      type: 'string',
      default: 'prod'
    },
    thankYouUrl: {
      type: 'string',
      default: ''
    },
    formType: {
      type: 'string',
      default: 'standard'
    },
    formShape: {
      type: 'string',
      default: 'form'
    }
  },
  supports: {
    multiple: true
  },
  edit: _components_form_donate__WEBPACK_IMPORTED_MODULE_8__.editFormDonate,
  save: _components_form_donate__WEBPACK_IMPORTED_MODULE_8__.saveFormDonate
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/form-anagrafica', {
  title: 'Proterrasancta Form Anagrafica',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: 'white'
    },
    lang: {
      type: 'string',
      default: 'it'
    },
    icon1: {
      type: 'string',
      default: 'assistenza'
    },
    icon2: {
      type: 'string',
      default: 'assistenza'
    },
    icon3: {
      type: 'string',
      default: 'assistenza'
    },
    ask1: {
      type: 'string',
      default: '5.40'
    },
    ask1Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 1'
    },
    ask2: {
      type: 'string',
      default: '22.40'
    },
    ask2Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 2'
    },
    ask3: {
      type: 'string',
      default: '150.00'
    },
    ask3Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 3'
    },
    campaignTag: {
      type: 'string',
      default: ''
    },
    paypalKey: {
      type: 'string',
      default: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL'
    },
    stripeKey: {
      type: 'string',
      default: 'pk_live_qfQpAgn0ginBe73s04pdgodQ'
    },
    env: {
      type: 'string',
      default: 'test'
    },
    thankYouUrl: {
      type: 'string',
      default: ''
    },
    formType: {
      type: 'string',
      default: 'standard'
    },
    formShape: {
      type: 'string',
      default: 'form'
    }
  },
  supports: {
    multiple: true
  },
  edit: _components_form_anagrafica__WEBPACK_IMPORTED_MODULE_10__.editFormAnagrafica,
  save: _components_form_anagrafica__WEBPACK_IMPORTED_MODULE_10__.saveFormAnagrafica
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/form-checkout', {
  title: 'Proterrasancta Form Checkout',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: 'white'
    },
    lang: {
      type: 'string',
      default: 'it'
    },
    icon1: {
      type: 'string',
      default: 'assistenza'
    },
    icon2: {
      type: 'string',
      default: 'assistenza'
    },
    icon3: {
      type: 'string',
      default: 'assistenza'
    },
    ask1: {
      type: 'string',
      default: '0.00'
    },
    ask1Text: {
      type: 'string',
      default: ''
    },
    ask2: {
      type: 'string',
      default: '22.40'
    },
    ask2Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 2'
    },
    ask3: {
      type: 'string',
      default: '150.00'
    },
    ask3Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 3'
    },
    campaignTag: {
      type: 'string',
      default: 'campaign-01'
    },
    paypalKey: {
      type: 'string',
      default: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL'
    },
    stripeKey: {
      type: 'string',
      default: 'pk_live_qfQpAgn0ginBe73s04pdgodQ'
    },
    env: {
      type: 'string',
      default: 'prod'
    },
    thankYouUrl: {
      type: 'string',
      default: ''
    },
    formType: {
      type: 'string',
      default: 'standard'
    },
    formShape: {
      type: 'string',
      default: 'form'
    }
  },
  supports: {
    multiple: true
  },
  edit: _components_form_checkout__WEBPACK_IMPORTED_MODULE_11__.editFormCheckout,
  save: _components_form_checkout__WEBPACK_IMPORTED_MODULE_11__.saveFormCheckout
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/form-e-cards', {
  title: 'Proterrasancta Form eCards',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: 'white'
    },
    lang: {
      type: 'string',
      default: 'it'
    },
    icon1: {
      type: 'string',
      default: 'compleanno'
    },
    icon2: {
      type: 'string',
      default: 'compleanno'
    },
    icon3: {
      type: 'string',
      default: 'compleanno'
    },
    ask1: {
      type: 'string',
      default: '5.40'
    },
    ask1Text: {
      type: 'string',
      default: 'compleanno'
    },
    ask2: {
      type: 'string',
      default: '22.40'
    },
    iconText: {
      type: 'string',
      default: 'sfama i bambini nel mondo 1'
    },
    ask2Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 2'
    },
    ask3: {
      type: 'string',
      default: '150.00'
    },
    ask3Text: {
      type: 'string',
      default: 'sfama i bambini nel mondo 3'
    },
    campaignTag: {
      type: 'string',
      default: 'campaign-01'
    },
    paypalKey: {
      type: 'string',
      default: 'AetQODDcT4J3KWSrs5UesIO77egiLPy17QwCFPA2puH3CR84nhY7z0gLburpvlryJKsjH_btvINZA9JL'
    },
    stripeKey: {
      type: 'string',
      default: 'pk_live_qfQpAgn0ginBe73s04pdgodQ'
    },
    env: {
      type: 'string',
      default: 'prod'
    },
    thankYouUrl: {
      type: 'string',
      default: ''
    },
    formType: {
      type: 'string',
      default: 'standard'
    },
    formShape: {
      type: 'string',
      default: 'form'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    },
    pdfID: {
      type: 'number'
    },
    pdfURL: {
      type: 'string'
    }
  },
  supports: {
    multiple: true
  },
  edit: _components_form_e_cards__WEBPACK_IMPORTED_MODULE_12__.editFormCards,
  save: _components_form_e_cards__WEBPACK_IMPORTED_MODULE_12__.saveFormCards
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/news-slides-section', {
  title: 'Proterrasancta News Slides Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_news_slides_section__WEBPACK_IMPORTED_MODULE_13__.editNewsSlidesSection,
  save: _components_news_slides_section__WEBPACK_IMPORTED_MODULE_13__.saveNewsSlidesSection
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/news-grid-section', {
  title: 'Proterrasancta News Grid Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: 'white'
    },
    postTypeMain: {
      type: 'string',
      default: 'post'
    },
    postTypeBlock1: {
      type: 'string',
      default: 'post'
    },
    postTypeBlock2: {
      type: 'string',
      default: 'post'
    },
    postTypeBlock3: {
      type: 'string',
      default: 'post'
    },
    postTypeBlock4: {
      type: 'string',
      default: 'post'
    },
    categoryIdMain: {
      type: 'number',
      default: '-1'
    },
    categoryIdBlock1: {
      type: 'number',
      default: '-1'
    },
    categoryIdBlock2: {
      type: 'number',
      default: '-1'
    },
    categoryIdBlock3: {
      type: 'number',
      default: '-1'
    },
    categoryIdBlock4: {
      type: 'number',
      default: '-1'
    },
    mainTitle: {
      type: 'string',
      default: 'IN PRIMO PIANO'
    },
    block1Title: {
      type: 'string',
      default: 'NEWS'
    },
    block2Title: {
      type: 'string',
      default: 'CAMPAGNE'
    },
    block3Title: {
      type: 'string',
      default: 'PROGETTI'
    },
    block4Title: {
      type: 'string',
      default: 'EVENTI'
    },
    btnTextMain: {
      type: 'string',
      default: 'SOSTIENI'
    },
    btnTextBlock1: {
      type: 'string',
      default: 'LEGGI'
    },
    btnTextBlock2: {
      type: 'string',
      default: 'INTERVIENI'
    },
    btnTextBlock3: {
      type: 'string',
      default: 'SCOPRI'
    },
    btnTextBlock4: {
      type: 'string',
      default: 'PARTECIPA'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_news_grid_section__WEBPACK_IMPORTED_MODULE_14__.editNewsGridSection,
  save: _components_news_grid_section__WEBPACK_IMPORTED_MODULE_14__.saveNewsGridSection
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/highlights-slides-section', {
  title: 'Proterrasancta Highlights Slides Section',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    categoryId: {
      type: 'number',
      default: '-1'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_highlights_slides_section__WEBPACK_IMPORTED_MODULE_15__.editHighlightsSlidesSection,
  save: _components_highlights_slides_section__WEBPACK_IMPORTED_MODULE_15__.saveHighlightsSlidesSection
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/section-hero', {
  title: 'Proterrasancta Section Hero',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title'
    },
    textContent: {
      type: 'string',
      source: 'html',
      selector: '.section-text'
    },
    linkText: {
      type: 'string',
      source: 'html',
      selector: '.link-text'
    },
    textColor: {
      type: 'string',
      default: '#B91521'
    },
    backgroundColor: {
      type: 'string',
      default: '#BFD7BA'
    },
    boxColor: {
      type: 'string',
      default: 'white'
    },
    padding: {
      type: 'string',
      default: ''
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    },
    name: {
      type: 'string',
      default: 'emergency'
    },
    link: {
      type: 'string',
      default: '/progetti'
    },
    sectionType: {
      type: 'string',
      default: 'emergencies'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Padding'),
    isDefault: true
  }, {
    name: 'small-padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small Padding')
  }],
  edit: _components_section_hero__WEBPACK_IMPORTED_MODULE_17__.editSectionHero,
  save: _components_section_hero__WEBPACK_IMPORTED_MODULE_17__.saveSectionHero
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/news-list', {
  title: 'Proterrasancta News List',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    categoryId: {
      type: 'number',
      default: '-1'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_news_list__WEBPACK_IMPORTED_MODULE_18__.editNewsList,
  save: _components_news_list__WEBPACK_IMPORTED_MODULE_18__.saveNewsList
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/campaigns-list', {
  title: 'Proterrasancta Campaigns List',
  icon: 'list-view',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: '#BBE5ED'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    cardColor: {
      type: 'string',
      default: '#009846'
    },
    categoryId: {
      type: 'number',
      default: '-1'
    },
    postType: {
      type: 'string',
      default: 'post'
    }
  },
  supports: {
    multiple: false
  },
  edit: _components_campaigns_list__WEBPACK_IMPORTED_MODULE_19__.editCampaignsList,
  save: _components_campaigns_list__WEBPACK_IMPORTED_MODULE_19__.saveCampaignsList
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/cover-section', {
  title: 'Proterrasancta Cover Section',
  icon: 'admin-home',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.cover-section-title'
    },
    textContent: {
      type: 'string',
      source: 'text',
      selector: '.cover-section-text'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'white'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    }
  },
  edit: _components_cover_section__WEBPACK_IMPORTED_MODULE_20__.editCoverSection,
  save: _components_cover_section__WEBPACK_IMPORTED_MODULE_20__.saveCoverSection
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/section-hero-50', {
  title: 'Proterrasancta Section Hero 50',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'text',
      selector: '.section-title'
    },
    textContent: {
      type: 'string',
      source: 'html',
      selector: '.section-text'
    },
    textColor: {
      type: 'string',
      default: 'black'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    boxColor: {
      type: 'string',
      default: 'white'
    },
    minHeight: {
      type: 'string',
      default: '380'
    },
    padding: {
      type: 'string',
      default: ''
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    },
    name: {
      type: 'string',
      default: 'plant'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Padding'),
    isDefault: true
  }, {
    name: 'small-padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small Padding')
  }],
  edit: _components_section_hero_50__WEBPACK_IMPORTED_MODULE_21__.editSectionHero50,
  save: _components_section_hero_50__WEBPACK_IMPORTED_MODULE_21__.saveSectionHero50
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/section-hero-map', {
  title: 'Proterrasancta Section Hero Map',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    title: {
      type: 'string',
      source: 'html',
      selector: '.section-title'
    },
    textContent: {
      type: 'string',
      source: 'html',
      selector: '.section-text'
    },
    textColor: {
      type: 'string',
      default: 'black'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    boxColor: {
      type: 'string',
      default: 'white'
    },
    minHeight: {
      type: 'string',
      default: '380'
    },
    padding: {
      type: 'string',
      default: ''
    },
    lat: {
      type: 'string',
      default: '30.514845975220997'
    },
    lng: {
      type: 'string',
      default: '34.90351614306644'
    },
    areaId: {
      type: 'string',
      default: '9741'
    },
    name: {
      type: 'string',
      default: 'plant'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Padding'),
    isDefault: true
  }, {
    name: 'small-padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small Padding')
  }],
  edit: _components_section_hero_map__WEBPACK_IMPORTED_MODULE_22__.editSectionHeroMap,
  save: _components_section_hero_map__WEBPACK_IMPORTED_MODULE_22__.saveSectionHeroMap
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/section-testimonianza', {
  title: 'Proterrasancta Section Testimonianza',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    textContent: {
      type: 'string',
      source: 'html',
      selector: '.section-text'
    },
    textColor: {
      type: 'string',
      default: 'black'
    },
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    boxColor: {
      type: 'string',
      default: 'white'
    },
    minHeight: {
      type: 'string',
      default: '380'
    },
    padding: {
      type: 'string',
      default: ''
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    },
    name: {
      type: 'string',
      default: 'testimony'
    },
    lang: {
      type: 'string',
      default: 'it'
    }
  },
  styles: [{
    name: 'default',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Full Padding'),
    isDefault: true
  }, {
    name: 'small-padding',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Small Padding')
  }],
  edit: _components_section_testimonianza__WEBPACK_IMPORTED_MODULE_23__.editSectionTestimonianza,
  save: _components_section_testimonianza__WEBPACK_IMPORTED_MODULE_23__.saveSectionTestimonianza
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/carousel', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Carousel', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  attributes: {
    textColor: {
      type: 'string',
      default: 'white'
    },
    backgroundColor: {
      type: 'string',
      default: '#FFFFFF'
    },
    slides: {
      type: 'string',
      default: '2'
    },
    name: {
      type: 'string',
      default: 'image-carousel'
    }
  },
  edit: function edit(_ref21) {
    var className = _ref21.className,
        attributes = _ref21.attributes,
        setAttributes = _ref21.setAttributes;

    var onChangeTextColor = function onChangeTextColor(color) {
      setAttributes({
        textColor: color
      });
    };

    var onChangeBackgroundColor = function onChangeBackgroundColor(color) {
      setAttributes({
        backgroundColor: color
      });
    };

    var onChangeSlides = function onChangeSlides(slidesN) {
      setAttributes({
        slides: slidesN
      });
    };

    var onChangeName = function onChangeName(name) {
      setAttributes({
        name: name
      });
    };

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Background Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.backgroundColor,
        onChange: onChangeBackgroundColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.PanelColorSettings, {
      title: 'Text Color',
      colorSettings: [{
        colors: _components_palette_proterrasancta__WEBPACK_IMPORTED_MODULE_25__["default"],
        value: attributes.textColor,
        onChange: onChangeTextColor,
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Color')
      }]
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: 'Special Settings',
      initialOpen: false
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "name",
      value: attributes.name,
      onChange: onChangeName
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "slides",
      value: attributes.slides,
      onChange: onChangeSlides
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, {
      allowedBlocks: ['proterrasancta/carousel-slide']
    }))))));
  },
  save: function save(_ref22) {
    var attributes = _ref22.attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        backgroundColor: attributes.backgroundColor
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: "splide",
      className: "col-12 splide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "splide__track"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "splide__list"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)))));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/carousel-slide', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Proterrasancta Carousel Slide', 'proterrasancta'),
  icon: 'feedback',
  category: 'proterrasancta',
  edit: function edit(_ref23) {
    var className = _ref23.className;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: className
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "row justify-content-center"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "col-12"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks, null)))));
  },
  save: function save() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: "splide__slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null));
  }
});
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)('proterrasancta/image-card', {
  title: 'Proterrasancta History Card',
  icon: 'admin-site',
  category: 'proterrasancta',
  attributes: {
    backgroundColor: {
      type: 'string',
      default: 'white'
    },
    textColor: {
      type: 'string',
      default: 'black'
    },
    title: {
      type: 'string',
      source: 'text',
      selector: '.title'
    },
    subTitle: {
      type: 'string',
      source: 'text',
      selector: '.sub-title'
    },
    textContent: {
      type: 'string',
      source: 'text',
      selector: '.text-content'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    }
  },
  edit: _components_image_card__WEBPACK_IMPORTED_MODULE_24__.editImageCard,
  save: _components_image_card__WEBPACK_IMPORTED_MODULE_24__.saveImageCard
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map