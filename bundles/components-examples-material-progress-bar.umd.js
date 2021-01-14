(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/progress-bar', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/slider'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.progressBar = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.progressBar, global.ng.material.radio, global.ng.material.slider));
}(this, (function (exports, i4, i0, i3, i1, i1$1, i2, i6) { 'use strict';

    /**
     * @title Buffer progress-bar
     */
    var ProgressBarBufferExample = /** @class */ (function () {
        function ProgressBarBufferExample() {
        }
        return ProgressBarBufferExample;
    }());
    ProgressBarBufferExample.ɵfac = function ProgressBarBufferExample_Factory(t) { return new (t || ProgressBarBufferExample)(); };
    ProgressBarBufferExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarBufferExample, selectors: [["progress-bar-buffer-example"]], decls: 1, vars: 0, consts: [["mode", "buffer"]], template: function ProgressBarBufferExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-bar", 0);
            }
        }, directives: [i1$1.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarBufferExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-buffer-example',
                        templateUrl: 'progress-bar-buffer-example.html',
                    }]
            }], null, null);
    })();

    function ProgressBarConfigurableExample_section_26_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵelementStart(1, "label", 2);
            i0.ɵɵtext(2, "Progress:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-slider", 13);
            i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3_1); var ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.value = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r0.value);
        }
    }
    function ProgressBarConfigurableExample_section_27_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "section", 1);
            i0.ɵɵelementStart(1, "label", 2);
            i0.ɵɵtext(2, "Buffer:");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-slider", 13);
            i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.bufferValue = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx_r1.bufferValue);
        }
    }
    /**
     * @title Configurable progress-bar
     */
    var ProgressBarConfigurableExample = /** @class */ (function () {
        function ProgressBarConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
            this.bufferValue = 75;
        }
        return ProgressBarConfigurableExample;
    }());
    ProgressBarConfigurableExample.ɵfac = function ProgressBarConfigurableExample_Factory(t) { return new (t || ProgressBarConfigurableExample)(); };
    ProgressBarConfigurableExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-card");
                i0.ɵɵelementStart(1, "mat-card-content");
                i0.ɵɵelementStart(2, "h2", 0);
                i0.ɵɵtext(3, "Progress bar configuration");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "section", 1);
                i0.ɵɵelementStart(5, "label", 2);
                i0.ɵɵtext(6, "Color:");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-radio-group", 3);
                i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
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
                i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
                i0.ɵɵelementStart(18, "mat-radio-button", 7);
                i0.ɵɵtext(19, " Determinate ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-radio-button", 8);
                i0.ɵɵtext(21, " Indeterminate ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-radio-button", 9);
                i0.ɵɵtext(23, " Buffer ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-radio-button", 10);
                i0.ɵɵtext(25, " Query ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(26, ProgressBarConfigurableExample_section_26_Template, 4, 1, "section", 11);
                i0.ɵɵtemplate(27, ProgressBarConfigurableExample_section_27_Template, 4, 1, "section", 11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "mat-card");
                i0.ɵɵelementStart(29, "mat-card-content");
                i0.ɵɵelementStart(30, "h2", 0);
                i0.ɵɵtext(31, "Result");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "section", 1);
                i0.ɵɵelement(33, "mat-progress-bar", 12);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.color);
                i0.ɵɵadvance(10);
                i0.ɵɵproperty("ngModel", ctx.mode);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("ngIf", ctx.mode === "determinate" || ctx.mode === "buffer");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.mode === "buffer");
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
            }
        }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i1$1.MatProgressBar, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarConfigurableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-configurable-example',
                        templateUrl: 'progress-bar-configurable-example.html',
                        styleUrls: ['progress-bar-configurable-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Determinate progress-bar
     */
    var ProgressBarDeterminateExample = /** @class */ (function () {
        function ProgressBarDeterminateExample() {
        }
        return ProgressBarDeterminateExample;
    }());
    ProgressBarDeterminateExample.ɵfac = function ProgressBarDeterminateExample_Factory(t) { return new (t || ProgressBarDeterminateExample)(); };
    ProgressBarDeterminateExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarDeterminateExample, selectors: [["progress-bar-determinate-example"]], decls: 1, vars: 0, consts: [["mode", "determinate", "value", "40"]], template: function ProgressBarDeterminateExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-bar", 0);
            }
        }, directives: [i1$1.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarDeterminateExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-determinate-example',
                        templateUrl: 'progress-bar-determinate-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Indeterminate progress-bar
     */
    var ProgressBarIndeterminateExample = /** @class */ (function () {
        function ProgressBarIndeterminateExample() {
        }
        return ProgressBarIndeterminateExample;
    }());
    ProgressBarIndeterminateExample.ɵfac = function ProgressBarIndeterminateExample_Factory(t) { return new (t || ProgressBarIndeterminateExample)(); };
    ProgressBarIndeterminateExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarIndeterminateExample, selectors: [["progress-bar-indeterminate-example"]], decls: 1, vars: 0, consts: [["mode", "indeterminate"]], template: function ProgressBarIndeterminateExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-bar", 0);
            }
        }, directives: [i1$1.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarIndeterminateExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-indeterminate-example',
                        templateUrl: 'progress-bar-indeterminate-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Query progress-bar
     */
    var ProgressBarQueryExample = /** @class */ (function () {
        function ProgressBarQueryExample() {
        }
        return ProgressBarQueryExample;
    }());
    ProgressBarQueryExample.ɵfac = function ProgressBarQueryExample_Factory(t) { return new (t || ProgressBarQueryExample)(); };
    ProgressBarQueryExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarQueryExample, selectors: [["progress-bar-query-example"]], decls: 1, vars: 0, consts: [["mode", "query"]], template: function ProgressBarQueryExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-bar", 0);
            }
        }, directives: [i1$1.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarQueryExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-query-example',
                        templateUrl: 'progress-bar-query-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatProgressBarHarness
     */
    var ProgressBarHarnessExample = /** @class */ (function () {
        function ProgressBarHarnessExample() {
        }
        return ProgressBarHarnessExample;
    }());
    ProgressBarHarnessExample.ɵfac = function ProgressBarHarnessExample_Factory(t) { return new (t || ProgressBarHarnessExample)(); };
    ProgressBarHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressBarHarnessExample, selectors: [["progress-bar-harness-example"]], decls: 2, vars: 1, consts: [["mode", "determinate", 3, "value"], ["mode", "indeterminate"]], template: function ProgressBarHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelement(0, "mat-progress-bar", 0);
                i0.ɵɵelement(1, "mat-progress-bar", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("value", ctx.value);
            }
        }, directives: [i1$1.MatProgressBar], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'progress-bar-harness-example',
                        templateUrl: 'progress-bar-harness-example.html'
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample,
    ];
    var ProgressBarExamplesModule = /** @class */ (function () {
        function ProgressBarExamplesModule() {
        }
        return ProgressBarExamplesModule;
    }());
    ProgressBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
    ProgressBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressBarExamplesModule_Factory(t) { return new (t || ProgressBarExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i1.MatCardModule,
                i1$1.MatProgressBarModule,
                i2.MatRadioModule,
                i6.MatSliderModule,
                i3.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
                ProgressBarConfigurableExample,
                ProgressBarDeterminateExample,
                ProgressBarHarnessExample,
                ProgressBarIndeterminateExample,
                ProgressBarQueryExample], imports: [i4.CommonModule,
                i1.MatCardModule,
                i1$1.MatProgressBarModule,
                i2.MatRadioModule,
                i6.MatSliderModule,
                i3.FormsModule], exports: [ProgressBarBufferExample,
                ProgressBarConfigurableExample,
                ProgressBarDeterminateExample,
                ProgressBarHarnessExample,
                ProgressBarIndeterminateExample,
                ProgressBarQueryExample] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i1.MatCardModule,
                            i1$1.MatProgressBarModule,
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

    exports.ProgressBarBufferExample = ProgressBarBufferExample;
    exports.ProgressBarConfigurableExample = ProgressBarConfigurableExample;
    exports.ProgressBarDeterminateExample = ProgressBarDeterminateExample;
    exports.ProgressBarExamplesModule = ProgressBarExamplesModule;
    exports.ProgressBarHarnessExample = ProgressBarHarnessExample;
    exports.ProgressBarIndeterminateExample = ProgressBarIndeterminateExample;
    exports.ProgressBarQueryExample = ProgressBarQueryExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-progress-bar.umd.js.map
