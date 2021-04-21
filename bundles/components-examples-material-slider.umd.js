(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/slider'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/slider', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/input', '@angular/material/slider', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.slider = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.input, global.ng.material.slider, global.ng.material.formField));
}(this, (function (exports, i6, i0, i4, i1, i5, i3, i1$1, i2) { 'use strict';

    function SliderConfigurableExample_mat_checkbox_24_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-checkbox", 4);
            i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
            i0.ɵɵtext(1, " Auto ticks ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngModel", ctx_r0.autoTicks);
        }
    }
    function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 2);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Tick interval");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 3);
            i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r1.tickInterval);
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
    SliderConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 49, vars: 23, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "example-result-card"], [1, "example-label-container"], ["id", "example-name-label", 1, "example-name-label"], [1, "example-value-label"], ["aria-labelledby", "example-name-label", 1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-card-content");
                i0.ɵɵelementStart(2, "h2", 0);
                i0.ɵɵtext(3, "Slider configuration");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "section", 1);
                i0.ɵɵelementStart(5, "mat-form-field", 2);
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "input", 3);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field", 2);
                i0.ɵɵelementStart(10, "mat-label");
                i0.ɵɵtext(11, "Min value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "input", 3);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.min = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "mat-form-field", 2);
                i0.ɵɵelementStart(14, "mat-label");
                i0.ɵɵtext(15, "Max value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "input", 3);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_16_listener($event) { return ctx.max = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-form-field", 2);
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Step size");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "input", 3);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_20_listener($event) { return ctx.step = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "section", 1);
                i0.ɵɵelementStart(22, "mat-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.showTicks = $event; });
                i0.ɵɵtext(23, "Show ticks");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(24, SliderConfigurableExample_mat_checkbox_24_Template, 2, 1, "mat-checkbox", 5);
                i0.ɵɵtemplate(25, SliderConfigurableExample_mat_form_field_25_Template, 4, 1, "mat-form-field", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "section", 1);
                i0.ɵɵelementStart(27, "mat-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.thumbLabel = $event; });
                i0.ɵɵtext(28, "Show thumb label");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "section", 1);
                i0.ɵɵelementStart(30, "mat-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_30_listener($event) { return ctx.vertical = $event; });
                i0.ɵɵtext(31, "Vertical");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "mat-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.invert = $event; });
                i0.ɵɵtext(33, "Inverted");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(34, "section", 1);
                i0.ɵɵelementStart(35, "mat-checkbox", 4);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.disabled = $event; });
                i0.ɵɵtext(36, "Disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "mat-card", 7);
                i0.ɵɵelementStart(38, "mat-card-content");
                i0.ɵɵelementStart(39, "h2");
                i0.ɵɵtext(40, "Result");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(41, "br");
                i0.ɵɵelement(42, "br");
                i0.ɵɵelementStart(43, "div", 8);
                i0.ɵɵelementStart(44, "label", 9);
                i0.ɵɵtext(45, "Max Value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(46, "label", 10);
                i0.ɵɵtext(47);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(48, "mat-slider", 11);
                i0.ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_48_listener($event) { return ctx.value = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngModel", ctx.value);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.min);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.max);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngModel", ctx.step);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.showTicks);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.showTicks);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showTicks && !ctx.autoTicks);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.thumbLabel);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.vertical);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.invert);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngModel", ctx.disabled);
                i0.ɵɵadvance(8);
                i0.ɵɵclassMap(ctx.vertical ? "example-label-vertical" : "example-label-horizontal");
                i0.ɵɵadvance(4);
                i0.ɵɵtextInterpolate(ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
            }
        }, directives: [i1.MatCard, i1.MatCardContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NumberValueAccessor, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatCheckbox, i6.NgIf, i1$1.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-horizontal[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-label-container.example-label-vertical[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   .example-value-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderConfigurableExample, [{
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
    SliderFormattingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "step", "1000", "min", "0", "max", "100000", "aria-label", "units", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-slider", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("displayWith", ctx.formatLabel);
            }
        }, directives: [i1$1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderFormattingExample, [{
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
    SliderOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderOverviewExample, selectors: [["slider-overview-example"]], decls: 1, vars: 0, consts: [["aria-label", "unit(s)"]], template: function SliderOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-slider", 0);
            }
        }, directives: [i1$1.MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderOverviewExample, [{
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
    SliderHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: SliderHarnessExample, selectors: [["slider-harness-example"]], decls: 1, vars: 0, consts: [["value", "50", "aria-label", "unit(s)"]], template: function SliderHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-slider", 0);
            }
        }, directives: [i1$1.MatSlider], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderHarnessExample, [{
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
    SliderExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SliderExamplesModule });
    SliderExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); }, imports: [[
                i6.CommonModule,
                i4.FormsModule,
                i1.MatCardModule,
                i5.MatCheckboxModule,
                i3.MatInputModule,
                i1$1.MatSliderModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
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
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SliderExamplesModule, [{
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
