(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/progress-spinner', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/slider'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.progressSpinner = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.slider));
}(this, (function (exports, i4, i0, i3, i1, i1$1, i2, i6) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);

    function ProgressSpinnerConfigurableExample_section_22_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "section", 1);
            i0__namespace.ɵɵelementStart(1, "label", 2);
            i0__namespace.ɵɵtext(2, "Progress:");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-slider", 11);
            i0__namespace.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_section_22_Template_mat_slider_ngModelChange_3_listener($event) { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.value = $event; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.value);
        }
    }
    /**
     * @title Configurable progress spinner
     */
    var ProgressSpinnerConfigurableExample = /** @class */ (function () {
        function ProgressSpinnerConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
        }
        return ProgressSpinnerConfigurableExample;
    }());
    ProgressSpinnerConfigurableExample.ɵfac = function ProgressSpinnerConfigurableExample_Factory(t) { return new (t || ProgressSpinnerConfigurableExample)(); };
    ProgressSpinnerConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ProgressSpinnerConfigurableExample, selectors: [["progress-spinner-configurable-example"]], decls: 28, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressSpinnerConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card-content");
                i0__namespace.ɵɵelementStart(2, "h2", 0);
                i0__namespace.ɵɵtext(3, "Progress spinner configuration");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "section", 1);
                i0__namespace.ɵɵelementStart(5, "label", 2);
                i0__namespace.ɵɵtext(6, "Color:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-radio-group", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
                i0__namespace.ɵɵelementStart(8, "mat-radio-button", 4);
                i0__namespace.ɵɵtext(9, " Primary ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-radio-button", 5);
                i0__namespace.ɵɵtext(11, " Accent ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-radio-button", 6);
                i0__namespace.ɵɵtext(13, " Warn ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "section", 1);
                i0__namespace.ɵɵelementStart(15, "label", 2);
                i0__namespace.ɵɵtext(16, "Mode:");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-radio-group", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
                i0__namespace.ɵɵelementStart(18, "mat-radio-button", 7);
                i0__namespace.ɵɵtext(19, " Determinate ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-radio-button", 8);
                i0__namespace.ɵɵtext(21, " Indeterminate ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(22, ProgressSpinnerConfigurableExample_section_22_Template, 4, 1, "section", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "mat-card");
                i0__namespace.ɵɵelementStart(24, "mat-card-content");
                i0__namespace.ɵɵelementStart(25, "h2", 0);
                i0__namespace.ɵɵtext(26, "Result");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(27, "mat-progress-spinner", 10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(7);
                i0__namespace.ɵɵproperty("ngModel", ctx.color);
                i0__namespace.ɵɵadvance(10);
                i0__namespace.ɵɵproperty("ngModel", ctx.mode);
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", ctx.mode === "determinate");
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardContent, i2__namespace.MatRadioGroup, i3__namespace.NgControlStatus, i3__namespace.NgModel, i2__namespace.MatRadioButton, i4__namespace.NgIf, i1__namespace$1.MatProgressSpinner, i6__namespace.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-spinner-configurable-example',
                        templateUrl: 'progress-spinner-configurable-example.html',
                        styleUrls: ['progress-spinner-configurable-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic progress-spinner
     */
    var ProgressSpinnerOverviewExample = /** @class */ (function () {
        function ProgressSpinnerOverviewExample() {
        }
        return ProgressSpinnerOverviewExample;
    }());
    ProgressSpinnerOverviewExample.ɵfac = function ProgressSpinnerOverviewExample_Factory(t) { return new (t || ProgressSpinnerOverviewExample)(); };
    ProgressSpinnerOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ProgressSpinnerOverviewExample, selectors: [["progress-spinner-overview-example"]], decls: 1, vars: 0, template: function ProgressSpinnerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-spinner");
            }
        }, directives: [i1__namespace$1.MatSpinner], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProgressSpinnerOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-spinner-overview-example',
                        templateUrl: 'progress-spinner-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatProgressSpinnerHarness
     */
    var ProgressSpinnerHarnessExample = /** @class */ (function () {
        function ProgressSpinnerHarnessExample() {
        }
        return ProgressSpinnerHarnessExample;
    }());
    ProgressSpinnerHarnessExample.ɵfac = function ProgressSpinnerHarnessExample_Factory(t) { return new (t || ProgressSpinnerHarnessExample)(); };
    ProgressSpinnerHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ProgressSpinnerHarnessExample, selectors: [["progress-spinner-harness-example"]], decls: 2, vars: 1, consts: [["mode", "determinate", 3, "value"]], template: function ProgressSpinnerHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-progress-spinner", 0);
                i0__namespace.ɵɵelement(1, "mat-spinner");
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("value", ctx.value);
            }
        }, directives: [i1__namespace$1.MatProgressSpinner, i1__namespace$1.MatSpinner], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProgressSpinnerHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-spinner-harness-example',
                        templateUrl: 'progress-spinner-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample,
    ];
    var ProgressSpinnerExamplesModule = /** @class */ (function () {
        function ProgressSpinnerExamplesModule() {
        }
        return ProgressSpinnerExamplesModule;
    }());
    ProgressSpinnerExamplesModule.ɵfac = function ProgressSpinnerExamplesModule_Factory(t) { return new (t || ProgressSpinnerExamplesModule)(); };
    ProgressSpinnerExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ProgressSpinnerExamplesModule });
    ProgressSpinnerExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i1.MatCardModule,
                i1$1.MatProgressSpinnerModule,
                i2.MatRadioModule,
                i6.MatSliderModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ProgressSpinnerExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.MatCardModule,
                            i1$1.MatProgressSpinnerModule,
                            i2.MatRadioModule,
                            i6.MatSliderModule,
                            i3.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ProgressSpinnerExamplesModule, { declarations: [ProgressSpinnerConfigurableExample,
                ProgressSpinnerHarnessExample,
                ProgressSpinnerOverviewExample], imports: [i4.CommonModule,
                i1.MatCardModule,
                i1$1.MatProgressSpinnerModule,
                i2.MatRadioModule,
                i6.MatSliderModule,
                i3.FormsModule], exports: [ProgressSpinnerConfigurableExample,
                ProgressSpinnerHarnessExample,
                ProgressSpinnerOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProgressSpinnerConfigurableExample = ProgressSpinnerConfigurableExample;
    exports.ProgressSpinnerExamplesModule = ProgressSpinnerExamplesModule;
    exports.ProgressSpinnerHarnessExample = ProgressSpinnerHarnessExample;
    exports.ProgressSpinnerOverviewExample = ProgressSpinnerOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-progress-spinner.umd.js.map
