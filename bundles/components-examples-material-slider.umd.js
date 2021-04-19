(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/slider'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/slider', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/input', '@angular/material/slider', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.slider = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.input, global.ng.material.slider, global.ng.material.formField));
}(this, (function (exports, i6, i0, i4, i1, i5, i3, i1$1, i2) { 'use strict';

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

    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    function SliderConfigurableExample_mat_checkbox_24_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-checkbox", 4);
            i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
            i0__namespace.ɵɵtext(1, " Auto ticks ");
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.autoTicks);
        }
    }
    function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-form-field", 2);
            i0__namespace.ɵɵelementStart(1, "mat-label");
            i0__namespace.ɵɵtext(2, "Tick interval");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "input", 3);
            i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { i0__namespace.ɵɵrestoreView(_r5_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngModel", ctx_r1.tickInterval);
        }
    }
    /**
     * @title Configurable slider
     */
    var SliderConfigurableExample = /** @class */ (function () {
        function SliderConfigurableExample() {
            this.autoTicks = false;
            this.disabled = false;
            this.invert = false;
            this.max = 100;
            this.min = 0;
            this.showTicks = false;
            this.step = 1;
            this.thumbLabel = false;
            this.value = 0;
            this.vertical = false;
            this.tickInterval = 1;
        }
        SliderConfigurableExample.prototype.getSliderTickInterval = function () {
            if (this.showTicks) {
                return this.autoTicks ? 'auto' : this.tickInterval;
            }
            return 0;
        };
        return SliderConfigurableExample;
    }());
    SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
    SliderConfigurableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 49, vars: 23, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "example-result-card"], [1, "example-label-container"], ["id", "example-name-label", 1, "example-name-label"], [1, "example-value-label"], ["aria-labelledby", "example-name-label", 1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-card");
                i0__namespace.ɵɵelementStart(1, "mat-card-content");
                i0__namespace.ɵɵelementStart(2, "h2", 0);
                i0__namespace.ɵɵtext(3, "Slider configuration");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "section", 1);
                i0__namespace.ɵɵelementStart(5, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Value");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "input", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(10, "mat-label");
                i0__namespace.ɵɵtext(11, "Min value");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "input", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.min = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(14, "mat-label");
                i0__namespace.ɵɵtext(15, "Max value");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "input", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_16_listener($event) { return ctx.max = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Step size");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "input", 3);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_20_listener($event) { return ctx.step = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "section", 1);
                i0__namespace.ɵɵelementStart(22, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.showTicks = $event; });
                i0__namespace.ɵɵtext(23, "Show ticks");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(24, SliderConfigurableExample_mat_checkbox_24_Template, 2, 1, "mat-checkbox", 5);
                i0__namespace.ɵɵtemplate(25, SliderConfigurableExample_mat_form_field_25_Template, 4, 1, "mat-form-field", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "section", 1);
                i0__namespace.ɵɵelementStart(27, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.thumbLabel = $event; });
                i0__namespace.ɵɵtext(28, "Show thumb label");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "section", 1);
                i0__namespace.ɵɵelementStart(30, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_30_listener($event) { return ctx.vertical = $event; });
                i0__namespace.ɵɵtext(31, "Vertical");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.invert = $event; });
                i0__namespace.ɵɵtext(33, "Inverted");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "section", 1);
                i0__namespace.ɵɵelementStart(35, "mat-checkbox", 4);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.disabled = $event; });
                i0__namespace.ɵɵtext(36, "Disabled");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "mat-card", 7);
                i0__namespace.ɵɵelementStart(38, "mat-card-content");
                i0__namespace.ɵɵelementStart(39, "h2");
                i0__namespace.ɵɵtext(40, "Result");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(41, "br");
                i0__namespace.ɵɵelement(42, "br");
                i0__namespace.ɵɵelementStart(43, "div", 8);
                i0__namespace.ɵɵelementStart(44, "label", 9);
                i0__namespace.ɵɵtext(45, "Max Value");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(46, "label", 10);
                i0__namespace.ɵɵtext(47);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "mat-slider", 11);
                i0__namespace.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_48_listener($event) { return ctx.value = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("ngModel", ctx.value);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.min);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.max);
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("ngModel", ctx.step);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngModel", ctx.showTicks);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngIf", ctx.showTicks);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.showTicks && !ctx.autoTicks);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngModel", ctx.thumbLabel);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.vertical);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngModel", ctx.invert);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.disabled);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵclassMap(ctx.vertical ? "example-label-vertical" : "example-label-horizontal");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵtextInterpolate(ctx.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
            }
        }, directives: [i1__namespace.MatCard, i1__namespace.MatCardContent, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i4__namespace.NumberValueAccessor, i4__namespace.DefaultValueAccessor, i4__namespace.NgControlStatus, i4__namespace.NgModel, i5__namespace.MatCheckbox, i6__namespace.NgIf, i1__namespace$1.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-value-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SliderConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'slider-configurable-example',
                        templateUrl: 'slider-configurable-example.html',
                        styleUrls: ['slider-configurable-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Slider with custom thumb label formatting.
     */
    var SliderFormattingExample = /** @class */ (function () {
        function SliderFormattingExample() {
        }
        SliderFormattingExample.prototype.formatLabel = function (value) {
            if (value >= 1000) {
                return Math.round(value / 1000) + 'k';
            }
            return value;
        };
        return SliderFormattingExample;
    }());
    SliderFormattingExample.ɵfac = function SliderFormattingExample_Factory(t) { return new (t || SliderFormattingExample)(); };
    SliderFormattingExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "step", "1000", "min", "0", "max", "100000", "aria-label", "units", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-slider", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("displayWith", ctx.formatLabel);
            }
        }, directives: [i1__namespace$1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SliderFormattingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'slider-formatting-example',
                        templateUrl: 'slider-formatting-example.html',
                        styleUrls: ['slider-formatting-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic slider
     */
    var SliderOverviewExample = /** @class */ (function () {
        function SliderOverviewExample() {
        }
        return SliderOverviewExample;
    }());
    SliderOverviewExample.ɵfac = function SliderOverviewExample_Factory(t) { return new (t || SliderOverviewExample)(); };
    SliderOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SliderOverviewExample, selectors: [["slider-overview-example"]], decls: 1, vars: 0, consts: [["aria-label", "unit(s)"]], template: function SliderOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-slider", 0);
            }
        }, directives: [i1__namespace$1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SliderOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'slider-overview-example',
                        templateUrl: 'slider-overview-example.html',
                        styleUrls: ['slider-overview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatSliderHarness
     */
    var SliderHarnessExample = /** @class */ (function () {
        function SliderHarnessExample() {
        }
        return SliderHarnessExample;
    }());
    SliderHarnessExample.ɵfac = function SliderHarnessExample_Factory(t) { return new (t || SliderHarnessExample)(); };
    SliderHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SliderHarnessExample, selectors: [["slider-harness-example"]], decls: 1, vars: 0, consts: [["value", "50", "aria-label", "unit(s)"]], template: function SliderHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelement(0, "mat-slider", 0);
            }
        }, directives: [i1__namespace$1.MatSlider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SliderHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'slider-harness-example',
                        templateUrl: 'slider-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample,
    ];
    var SliderExamplesModule = /** @class */ (function () {
        function SliderExamplesModule() {
        }
        return SliderExamplesModule;
    }());
    SliderExamplesModule.ɵfac = function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); };
    SliderExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: SliderExamplesModule });
    SliderExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i6.CommonModule,
                i4.FormsModule,
                i1.MatCardModule,
                i5.MatCheckboxModule,
                i3.MatInputModule,
                i1$1.MatSliderModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SliderExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i6.CommonModule,
                            i4.FormsModule,
                            i1.MatCardModule,
                            i5.MatCheckboxModule,
                            i3.MatInputModule,
                            i1$1.MatSliderModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
                SliderFormattingExample,
                SliderHarnessExample,
                SliderOverviewExample], imports: [i6.CommonModule,
                i4.FormsModule,
                i1.MatCardModule,
                i5.MatCheckboxModule,
                i3.MatInputModule,
                i1$1.MatSliderModule], exports: [SliderConfigurableExample,
                SliderFormattingExample,
                SliderHarnessExample,
                SliderOverviewExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SliderConfigurableExample = SliderConfigurableExample;
    exports.SliderExamplesModule = SliderExamplesModule;
    exports.SliderFormattingExample = SliderFormattingExample;
    exports.SliderHarnessExample = SliderHarnessExample;
    exports.SliderOverviewExample = SliderOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-slider.umd.js.map
