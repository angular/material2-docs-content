import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵadvance, ɵɵproperty, Component, ɵɵdefineComponent, ɵɵtemplate, ɵɵelement, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatProgressSpinner, MatSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSlider, MatSliderModule } from '@angular/material/slider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
function ProgressSpinnerConfigurableExample_section_22_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "section", 1);
    ɵɵelementStart(1, "label", 2);
    ɵɵtext(2, "Progress:");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-slider", 11);
    ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_section_22_Template_mat_slider_ngModelChange_3_listener($event) { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.value = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r0.value);
} }
/**
 * \@title Configurable progress spinner
 */
class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
}
ProgressSpinnerConfigurableExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            },] },
];
/** @nocollapse */ ProgressSpinnerConfigurableExample.ɵfac = function ProgressSpinnerConfigurableExample_Factory(t) { return new (t || ProgressSpinnerConfigurableExample)(); };
/** @nocollapse */ ProgressSpinnerConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: ProgressSpinnerConfigurableExample, selectors: [["progress-spinner-configurable-example"]], decls: 28, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], ["value", "determinate", 1, "example-margin"], ["value", "indeterminate", 1, "example-margin"], ["class", "example-section", 4, "ngIf"], [1, "example-margin", 3, "color", "mode", "value"], [1, "example-margin", 3, "ngModel", "ngModelChange"]], template: function ProgressSpinnerConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card");
        ɵɵelementStart(1, "mat-card-content");
        ɵɵelementStart(2, "h2", 0);
        ɵɵtext(3, "Progress spinner configuration");
        ɵɵelementEnd();
        ɵɵelementStart(4, "section", 1);
        ɵɵelementStart(5, "label", 2);
        ɵɵtext(6, "Color:");
        ɵɵelementEnd();
        ɵɵelementStart(7, "mat-radio-group", 3);
        ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
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
        ɵɵlistener("ngModelChange", function ProgressSpinnerConfigurableExample_Template_mat_radio_group_ngModelChange_17_listener($event) { return ctx.mode = $event; });
        ɵɵelementStart(18, "mat-radio-button", 7);
        ɵɵtext(19, " Determinate ");
        ɵɵelementEnd();
        ɵɵelementStart(20, "mat-radio-button", 8);
        ɵɵtext(21, " Indeterminate ");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(22, ProgressSpinnerConfigurableExample_section_22_Template, 4, 1, "section", 9);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-card");
        ɵɵelementStart(24, "mat-card-content");
        ɵɵelementStart(25, "h2", 0);
        ɵɵtext(26, "Result");
        ɵɵelementEnd();
        ɵɵelement(27, "mat-progress-spinner", 10);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(7);
        ɵɵproperty("ngModel", ctx.color);
        ɵɵadvance(10);
        ɵɵproperty("ngModel", ctx.mode);
        ɵɵadvance(5);
        ɵɵproperty("ngIf", ctx.mode === "determinate");
        ɵɵadvance(5);
        ɵɵproperty("color", ctx.color)("mode", ctx.mode)("value", ctx.value);
    } }, directives: [MatCard, MatCardContent, MatRadioGroup, NgControlStatus, NgModel, MatRadioButton, NgIf, MatProgressSpinner, MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}"] });
/*@__PURE__*/ ɵsetClassMetadata(ProgressSpinnerConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'progress-spinner-configurable-example',
                templateUrl: 'progress-spinner-configurable-example.html',
                styleUrls: ['progress-spinner-configurable-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.color;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.mode;
    /** @type {?} */
    ProgressSpinnerConfigurableExample.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic progress-spinner
 */
class ProgressSpinnerOverviewExample {
}
ProgressSpinnerOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'progress-spinner-overview-example',
                templateUrl: 'progress-spinner-overview-example.html',
                styleUrls: ['progress-spinner-overview-example.css'],
            },] },
];
/** @nocollapse */ ProgressSpinnerOverviewExample.ɵfac = function ProgressSpinnerOverviewExample_Factory(t) { return new (t || ProgressSpinnerOverviewExample)(); };
/** @nocollapse */ ProgressSpinnerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ProgressSpinnerOverviewExample, selectors: [["progress-spinner-overview-example"]], decls: 1, vars: 0, template: function ProgressSpinnerOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-spinner");
    } }, directives: [MatSpinner], styles: [""] });
/*@__PURE__*/ ɵsetClassMetadata(ProgressSpinnerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'progress-spinner-overview-example',
                templateUrl: 'progress-spinner-overview-example.html',
                styleUrls: ['progress-spinner-overview-example.css'],
            }]
    }], null, null);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerOverviewExample,
];
class ProgressSpinnerExamplesModule {
}
ProgressSpinnerExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ ProgressSpinnerExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ProgressSpinnerExamplesModule });
/** @nocollapse */ ProgressSpinnerExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ProgressSpinnerExamplesModule_Factory(t) { return new (t || ProgressSpinnerExamplesModule)(); }, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
/*@__PURE__*/ ɵɵsetNgModuleScope(ProgressSpinnerExamplesModule, { declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerOverviewExample] });
/*@__PURE__*/ ɵsetClassMetadata(ProgressSpinnerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressSpinnerModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null);

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample, ProgressSpinnerExamplesModule };
//# sourceMappingURL=progress-spinner.js.map
