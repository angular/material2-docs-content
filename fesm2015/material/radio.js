import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/forms';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as i1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

function RadioNgModelExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-radio-button", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const season_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", season_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", season_r1, " ");
} }
/**
 * @title Radios with ngModel
 */
class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
}
RadioNgModelExample.ɵfac = function RadioNgModelExample_Factory(t) { return new (t || RadioNgModelExample)(); };
RadioNgModelExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioNgModelExample, selectors: [["radio-ng-model-example"]], decls: 6, vars: 3, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]], template: function RadioNgModelExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵtext(1, "Pick your favorite season");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-radio-group", 1);
        i0.ɵɵlistener("ngModelChange", function RadioNgModelExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteSeason = $event; });
        i0.ɵɵtemplate(3, RadioNgModelExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.favoriteSeason);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.seasons);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Your favorite season is: ", ctx.favoriteSeason, "");
    } }, directives: [i1.MatRadioGroup, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i1.MatRadioButton], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioNgModelExample, [{
        type: Component,
        args: [{
                selector: 'radio-ng-model-example',
                templateUrl: 'radio-ng-model-example.html',
                styleUrls: ['radio-ng-model-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic radios
 */
class RadioOverviewExample {
}
RadioOverviewExample.ɵfac = function RadioOverviewExample_Factory(t) { return new (t || RadioOverviewExample)(); };
RadioOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioOverviewExample, selectors: [["radio-overview-example"]], decls: 5, vars: 0, consts: [["aria-label", "Select an option"], ["value", "1"], ["value", "2"]], template: function RadioOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-group", 0);
        i0.ɵɵelementStart(1, "mat-radio-button", 1);
        i0.ɵɵtext(2, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-button", 2);
        i0.ɵɵtext(4, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatRadioGroup, i1.MatRadioButton], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioOverviewExample, [{
        type: Component,
        args: [{
                selector: 'radio-overview-example',
                templateUrl: 'radio-overview-example.html',
                styleUrls: ['radio-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatRadioHarness
 */
class RadioHarnessExample {
}
RadioHarnessExample.ɵfac = function RadioHarnessExample_Factory(t) { return new (t || RadioHarnessExample)(); };
RadioHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RadioHarnessExample, selectors: [["radio-harness-example"]], decls: 7, vars: 0, consts: [["name", "flavors"], ["value", "chocolate", "checked", "true"], ["value", "vanilla"], ["value", "strawberry"]], template: function RadioHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-radio-group", 0);
        i0.ɵɵelementStart(1, "mat-radio-button", 1);
        i0.ɵɵtext(2, "Chocolate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-radio-button", 2);
        i0.ɵɵtext(4, "Vanilla");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-radio-button", 3);
        i0.ɵɵtext(6, "Strawberry");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatRadioGroup, i1.MatRadioButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioHarnessExample, [{
        type: Component,
        args: [{
                selector: 'radio-harness-example',
                templateUrl: 'radio-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    RadioHarnessExample,
    RadioNgModelExample,
    RadioOverviewExample,
];
class RadioExamplesModule {
}
RadioExamplesModule.ɵfac = function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); };
RadioExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
RadioExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            ReactiveFormsModule,
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RadioExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    ReactiveFormsModule,
                    CommonModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample], imports: [ReactiveFormsModule,
        CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { RadioExamplesModule, RadioHarnessExample, RadioNgModelExample, RadioOverviewExample };
//# sourceMappingURL=radio.js.map
