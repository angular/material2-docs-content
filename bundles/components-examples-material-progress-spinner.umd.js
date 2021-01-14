(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/progress-spinner', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/slider'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.progressSpinner = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.slider));
}(this, (function (exports, i4, i0, i3, i1, i1$1, i2, i6) { 'use strict';

    function ProgressSpinnerConfigurableExample_section_22_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵelementStart(1, "label", 2);
            i0.ɵɵtext(2, "Progress:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-slider", 11);
            i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_section_22_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r0.value);
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
    ProgressSpinnerConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressSpinnerConfigurableExample, selectors: [["progress-spinner-configurable-example"]], decls: 28, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressSpinnerConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-card-content");
                i0.ɵɵelementStart(2, "h2", 0);
                i0.ɵɵtext(3, "Progress spinner configuration");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "section", 1);
                i0.ɵɵelementStart(5, "label", 2);
                i0.ɵɵtext(6, "Color:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-radio-group", 3);
                i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
                i0.ɵɵelementStart(8, "mat-radio-button", 4);
                i0.ɵɵtext(9, " Primary ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-radio-button", 5);
                i0.ɵɵtext(11, " Accent ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-radio-button", 6);
                i0.ɵɵtext(13, " Warn ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "section", 1);
                i0.ɵɵelementStart(15, "label", 2);
                i0.ɵɵtext(16, "Mode:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-radio-group", 3);
                i0.ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
                i0.ɵɵelementStart(18, "mat-radio-button", 7);
                i0.ɵɵtext(19, " Determinate ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-radio-button", 8);
                i0.ɵɵtext(21, " Indeterminate ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(22, ProgressSpinnerConfigurableExample_section_22_Template, 4, 1, "section", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "mat-card");
                i0.ɵɵelementStart(24, "mat-card-content");
                i0.ɵɵelementStart(25, "h2", 0);
                i0.ɵɵtext(26, "Result");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(27, "mat-progress-spinner", 10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.color);
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("ngModel", ctx.mode);
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngIf", ctx.mode === "determinate");
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
            }
        }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i1$1.MatProgressSpinner, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
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
    ProgressSpinnerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressSpinnerOverviewExample, selectors: [["progress-spinner-overview-example"]], decls: 1, vars: 0, template: function ProgressSpinnerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-spinner");
            }
        }, directives: [i1$1.MatSpinner], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressSpinnerOverviewExample, [{
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
    ProgressSpinnerHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressSpinnerHarnessExample, selectors: [["progress-spinner-harness-example"]], decls: 2, vars: 1, consts: [["mode", "determinate", 3, "value"]], template: function ProgressSpinnerHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-spinner", 0);
                i0.ɵɵelement(1, "mat-spinner");
            }
            if (rf & 2) {
                i0.ɵɵproperty("value", ctx.value);
            }
        }, directives: [i1$1.MatProgressSpinner, i1$1.MatSpinner], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressSpinnerHarnessExample, [{
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
    ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressSpinnerExamplesModule });
    ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressSpinnerExamplesModule_Factory(t) { return new (t || ProgressSpinnerExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i1.MatCardModule,
                i1$1.MatProgressSpinnerModule,
                i2.MatRadioModule,
                i6.MatSliderModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressSpinnerExamplesModule, { declarations: [ProgressSpinnerConfigurableExample,
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
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressSpinnerExamplesModule, [{
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
