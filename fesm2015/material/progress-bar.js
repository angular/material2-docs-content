import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i6 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Buffer progress-bar
 */
class ProgressBarBufferExample {
}
ProgressBarBufferExample.ɵfac = function ProgressBarBufferExample_Factory(t) { return new (t || ProgressBarBufferExample)(); };
ProgressBarBufferExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarBufferExample, selectors: [["progress-bar-buffer-example"]], decls: 1, vars: 0, consts: [["mode", "buffer"]], template: function ProgressBarBufferExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [i1.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarBufferExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-buffer-example', template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n" }]
    }], null, null); })();

function ProgressBarConfigurableExample_section_26_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Progress:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_26_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.value);
} }
function ProgressBarConfigurableExample_section_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "section", 1);
    i0.ɵɵelementStart(1, "label", 2);
    i0.ɵɵtext(2, "Buffer:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-slider", 13);
    i0.ɵɵlistener("ngModelChange", function ProgressBarConfigurableExample_section_27_Template_mat_slider_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.bufferValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r1.bufferValue);
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
ProgressBarConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarConfigurableExample, selectors: [["progress-bar-configurable-example"]], decls: 34, vars: 8, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["value", "buffer", 1, "example-margin"], ["value", "query", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value", "bufferValue"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressBarConfigurableExample_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i1$1.MatCard, i1$1.MatCardContent, i2.MatRadioGroup, i3.NgControlStatus, i3.NgModel, i2.MatRadioButton, i4.NgIf, i1.MatProgressBar, i6.MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarConfigurableExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"] }]
    }], null, null); })();

/**
 * @title Determinate progress-bar
 */
class ProgressBarDeterminateExample {
}
ProgressBarDeterminateExample.ɵfac = function ProgressBarDeterminateExample_Factory(t) { return new (t || ProgressBarDeterminateExample)(); };
ProgressBarDeterminateExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarDeterminateExample, selectors: [["progress-bar-determinate-example"]], decls: 1, vars: 0, consts: [["mode", "determinate", "value", "40"]], template: function ProgressBarDeterminateExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [i1.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarDeterminateExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-determinate-example', template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n" }]
    }], null, null); })();

/**
 * @title Indeterminate progress-bar
 */
class ProgressBarIndeterminateExample {
}
ProgressBarIndeterminateExample.ɵfac = function ProgressBarIndeterminateExample_Factory(t) { return new (t || ProgressBarIndeterminateExample)(); };
ProgressBarIndeterminateExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarIndeterminateExample, selectors: [["progress-bar-indeterminate-example"]], decls: 1, vars: 0, consts: [["mode", "indeterminate"]], template: function ProgressBarIndeterminateExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [i1.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarIndeterminateExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-indeterminate-example', template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
    }], null, null); })();

/**
 * @title Query progress-bar
 */
class ProgressBarQueryExample {
}
ProgressBarQueryExample.ɵfac = function ProgressBarQueryExample_Factory(t) { return new (t || ProgressBarQueryExample)(); };
ProgressBarQueryExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarQueryExample, selectors: [["progress-bar-query-example"]], decls: 1, vars: 0, consts: [["mode", "query"]], template: function ProgressBarQueryExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
    } }, directives: [i1.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarQueryExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-query-example', template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n" }]
    }], null, null); })();

/**
 * @title Testing with MatProgressBarHarness
 */
class ProgressBarHarnessExample {
}
ProgressBarHarnessExample.ɵfac = function ProgressBarHarnessExample_Factory(t) { return new (t || ProgressBarHarnessExample)(); };
ProgressBarHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressBarHarnessExample, selectors: [["progress-bar-harness-example"]], decls: 2, vars: 1, consts: [["mode", "determinate", 3, "value"], ["mode", "indeterminate"]], template: function ProgressBarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-progress-bar", 0);
        i0.ɵɵelement(1, "mat-progress-bar", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("value", ctx.value);
    } }, directives: [i1.MatProgressBar], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarHarnessExample, [{
        type: Component,
        args: [{ selector: 'progress-bar-harness-example', template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
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
ProgressBarExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
ProgressBarExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatCardModule,
            MatProgressBarModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressBarExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
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
