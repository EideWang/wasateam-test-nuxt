exports.ids = [1];
exports.modules = {

/***/ 18:
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FetchFakeData_vue_vue_type_style_index_0_id_6319d7cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FetchFakeData_vue_vue_type_style_index_0_id_6319d7cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FetchFakeData_vue_vue_type_style_index_0_id_6319d7cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FetchFakeData_vue_vue_type_style_index_0_id_6319d7cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_1_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FetchFakeData_vue_vue_type_style_index_0_id_6319d7cc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FetchFakeData.vue?vue&type=template&id=6319d7cc&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<input type=\"text\" placeholder=\"Type 'Eide' to get data\""+(_vm._ssrAttr("value",(_vm.interviewee)))+" data-v-6319d7cc> <button data-v-6319d7cc>Click to fetch fake API data</button> <div class=\"card\" data-v-6319d7cc><p data-v-6319d7cc>"+_vm._ssrEscape("Interviewee："+_vm._s(_vm.name))+"</p> <p data-v-6319d7cc>"+_vm._ssrEscape("Age："+_vm._s(_vm.age))+"</p> <p data-v-6319d7cc>"+_vm._ssrEscape("Job Title："+_vm._s(_vm.jobTitle))+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FetchFakeData.vue?vue&type=template&id=6319d7cc&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FetchFakeData.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var FetchFakeDatavue_type_script_lang_js_ = ({
  data() {
    return {
      name: '',
      age: null,
      jobTitle: '',
      interviewee: ''
    };
  },

  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://mocki.io/v1/48221e00-2e99-40cd-bb36-8f3b3b8b3cc3');

        if (!response.ok) {
          throw new Error('Fetch Fake API Error!');
        }

        const data = await response.json();
        const interviewees = data.interviewees;
        this.name = 'Not Found';
        this.age = 'Not Found';
        this.jobTitle = 'Not Found';

        for (const person of interviewees) {
          if (person.name === this.interviewee) {
            this.name = person.name;
            this.age = person.age;
            this.jobTitle = person.jobTitle;
          }
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    }

  }
});
// CONCATENATED MODULE: ./src/components/FetchFakeData.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FetchFakeDatavue_type_script_lang_js_ = (FetchFakeDatavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/FetchFakeData.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(19)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_FetchFakeDatavue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "6319d7cc",
  "7ab461e4"
  
)

/* harmony default export */ var FetchFakeData = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=fetch-fake-data.js.map