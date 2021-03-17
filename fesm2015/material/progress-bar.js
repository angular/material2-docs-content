import { NgIf, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵelement, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵadvance, ɵɵproperty, ɵɵtemplate, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

/**
 * @title Buffer progress-bar
 */
class ProgressBarBufferExample {
}
ProgressBarBufferExample.ɵfac = function ProgressBarBufferExample_Factory(t) { return new (t || ProgressBarBufferExample)(); };
ProgressBarBufferExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarBufferExample, selectors: [["progress-bar-buffer-example"]], decls: 1, vars: 0, consts: [["mode", "buffer"]], template: function ProgressBarBufferExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarBufferExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-buffer-example',
                templateUrl: 'progress-bar-buffer-example.html',
            }]
    }], null, null); })();

function ProgressBarConfigurableExample_section_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 1);
    ɵɵelementStart(1, "label", 2);
    ɵɵtext(2, "Progress:");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-slider", 13);
    ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r0.value);
} }
function ProgressBarConfigurableExample_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 1);
    ɵɵelementStart(1, "label", 2);
    ɵɵtext(2, "Buffer:");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-slider", 13);
    ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.bufferValue = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r1.bufferValue);
} }
/**
 * @title Configurable progress-bar
 */
class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.ɵfac = function ProgressBarConfigurableExample_Factory(t) { return new (t || ProgressBarConfigurableExample)(); };
ProgressBarConfigurableExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card");
        ɵɵelementStart(1, "mat-card-content");
        ɵɵelementStart(2, "h2", 0);
        ɵɵtext(3, "Progress bar configuration");
        ɵɵelementEnd();
        ɵɵelementStart(4, "section", 1);
        ɵɵelementStart(5, "label", 2);
        ɵɵtext(6, "Color:");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-radio-group", 3);
        ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
        ɵɵelementStart(8, "mat-radio-button", 4);
        ɵɵtext(9, " Primary ");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-radio-button", 5);
        ɵɵtext(11, " Accent ");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-radio-button", 6);
        ɵɵtext(13, " Warn ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "section", 1);
        ɵɵelementStart(15, "label", 2);
        ɵɵtext(16, "Mode:");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-radio-group", 3);
        ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
        ɵɵelementStart(18, "mat-radio-button", 7);
        ɵɵtext(19, " Determinate ");
        ɵɵelementEnd();
        ɵɵelementStart(20, "mat-radio-button", 8);
        ɵɵtext(21, " Indeterminate ");
        ɵɵelementEnd();
        ɵɵelementStart(22, "mat-radio-button", 9);
        ɵɵtext(23, " Buffer ");
        ɵɵelementEnd();
        ɵɵelementStart(24, "mat-radio-button", 10);
        ɵɵtext(25, " Query ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(26, ProgressBarConfigurableExample_section_26_Template, 4, 1, "section", 11);
        ɵɵtemplate(27, ProgressBarConfigurableExample_section_27_Template, 4, 1, "section", 11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "mat-card");
        ɵɵelementStart(29, "mat-card-content");
        ɵɵelementStart(30, "h2", 0);
        ɵɵtext(31, "Result");
        ɵɵelementEnd();
        ɵɵelementStart(32, "section", 1);
        ɵɵelement(33, "mat-progress-bar", 12);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("ngModel", ctx.color);
        ɵɵadvance(10);
        ɵɵproperty("ngModel", ctx.mode);
        ɵɵadvance(9);
        ɵɵproperty("ngIf", ctx.mode === "determinate" || ctx.mode === "buffer");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.mode === "buffer");
        ɵɵadvance(6);
        ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value)("bufferValue", ctx.bufferValue);
    } }, directives: [MatCard, MatCardContent, MatRadioGroup, NgControlStatus, NgModel, MatRadioButton, NgIf, MatProgressBar, MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-configurable-example',
                templateUrl: 'progress-bar-configurable-example.html',
                styleUrls: ['progress-bar-configurable-example.css'],
            }]
    }], null, null); })();

/**
 * @title Determinate progress-bar
 */
class ProgressBarDeterminateExample {
}
ProgressBarDeterminateExample.ɵfac = function ProgressBarDeterminateExample_Factory(t) { return new (t || ProgressBarDeterminateExample)(); };
ProgressBarDeterminateExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarDeterminateExample, selectors: [["progress-bar-determinate-example"]], decls: 1, vars: 0, consts: [["mode", "determinate", "value", "40"]], template: function ProgressBarDeterminateExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarDeterminateExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-determinate-example',
                templateUrl: 'progress-bar-determinate-example.html',
            }]
    }], null, null); })();

/**
 * @title Indeterminate progress-bar
 */
class ProgressBarIndeterminateExample {
}
ProgressBarIndeterminateExample.ɵfac = function ProgressBarIndeterminateExample_Factory(t) { return new (t || ProgressBarIndeterminateExample)(); };
ProgressBarIndeterminateExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarIndeterminateExample, selectors: [["progress-bar-indeterminate-example"]], decls: 1, vars: 0, consts: [["mode", "indeterminate"]], template: function ProgressBarIndeterminateExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarIndeterminateExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-indeterminate-example',
                templateUrl: 'progress-bar-indeterminate-example.html',
            }]
    }], null, null); })();

/**
 * @title Query progress-bar
 */
class ProgressBarQueryExample {
}
ProgressBarQueryExample.ɵfac = function ProgressBarQueryExample_Factory(t) { return new (t || ProgressBarQueryExample)(); };
ProgressBarQueryExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarQueryExample, selectors: [["progress-bar-query-example"]], decls: 1, vars: 0, consts: [["mode", "query"]], template: function ProgressBarQueryExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarQueryExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-query-example',
                templateUrl: 'progress-bar-query-example.html',
            }]
    }], null, null); })();

/**
 * @title Testing with MatProgressBarHarness
 */
class ProgressBarHarnessExample {
}
ProgressBarHarnessExample.ɵfac = function ProgressBarHarnessExample_Factory(t) { return new (t || ProgressBarHarnessExample)(); };
ProgressBarHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: ProgressBarHarnessExample, selectors: [["progress-bar-harness-example"]], decls: 2, vars: 1, consts: [["mode", "determinate", 3, "value"], ["mode", "indeterminate"]], template: function ProgressBarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-progress-bar", 0);
        ɵɵelement(1, "mat-progress-bar", 1);
    } if (rf & 2) {
        ɵɵproperty("value", ctx.value);
    } }, directives: [MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'progress-bar-harness-example',
                templateUrl: 'progress-bar-harness-example.html'
            }]
    }], null, null); })();

const EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarHarnessExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
class ProgressBarExamplesModule {
}
ProgressBarExamplesModule.ɵfac = function ProgressBarExamplesModule_Factory(t) { return new (t || ProgressBarExamplesModule)(); };
ProgressBarExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
ProgressBarExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatCardModule,
            MatProgressBarModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressBarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarExamplesModule, ProgressBarHarnessExample, ProgressBarIndeterminateExample, ProgressBarQueryExample };
//# sourceMappingURL=progress-bar.js.map
