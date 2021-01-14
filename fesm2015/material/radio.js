import { NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵɵlistener, ɵɵtemplate, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NgControlStatus, NgModel, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';

function RadioNgModelExample_mat_radio_button_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-radio-button", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const season_r1 = ctx.$implicit;
    ɵɵproperty("value", season_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", season_r1, " ");
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
RadioNgModelExample.ɵcmp = ɵɵdefineComponent({ type: RadioNgModelExample, selectors: [["radio-ng-model-example"]], decls: 6, vars: 3, consts: [["id", "example-radio-group-label"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModel", "ngModelChange"], ["class", "example-radio-button", 3, "value", 4, "ngFor", "ngForOf"], [1, "example-radio-button", 3, "value"]], template: function RadioNgModelExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "label", 0);
        ɵɵtext(1, "Pick your favorite season");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-radio-group", 1);
        ɵɵlistener("ngModelChange", function RadioNgModelExample_Template_mat_radio_group_ngModelChange_2_listener($event) { return ctx.favoriteSeason = $event; });
        ɵɵtemplate(3, RadioNgModelExample_mat_radio_button_3_Template, 2, 2, "mat-radio-button", 2);
        ɵɵelementEnd();
        ɵɵelementStart(4, "div");
        ɵɵtext(5);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.favoriteSeason);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.seasons);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Your favorite season is: ", ctx.favoriteSeason, "");
    } }, directives: [MatRadioGroup, NgControlStatus, NgModel, NgForOf, MatRadioButton], styles: [".example-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n.example-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadioNgModelExample, [{
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
RadioOverviewExample.ɵcmp = ɵɵdefineComponent({ type: RadioOverviewExample, selectors: [["radio-overview-example"]], decls: 5, vars: 0, consts: [["aria-label", "Select an option"], ["value", "1"], ["value", "2"]], template: function RadioOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-radio-group", 0);
        ɵɵelementStart(1, "mat-radio-button", 1);
        ɵɵtext(2, "Option 1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-radio-button", 2);
        ɵɵtext(4, "Option 2");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatRadioGroup, MatRadioButton], styles: [".mat-radio-button[_ngcontent-%COMP%]    ~ .mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadioOverviewExample, [{
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
RadioHarnessExample.ɵcmp = ɵɵdefineComponent({ type: RadioHarnessExample, selectors: [["radio-harness-example"]], decls: 7, vars: 0, consts: [["name", "flavors"], ["value", "chocolate", "checked", "true"], ["value", "vanilla"], ["value", "strawberry"]], template: function RadioHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-radio-group", 0);
        ɵɵelementStart(1, "mat-radio-button", 1);
        ɵɵtext(2, "Chocolate");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-radio-button", 2);
        ɵɵtext(4, "Vanilla");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-radio-button", 3);
        ɵɵtext(6, "Strawberry");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatRadioGroup, MatRadioButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadioHarnessExample, [{
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
RadioExamplesModule.ɵmod = ɵɵdefineNgModule({ type: RadioExamplesModule });
RadioExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); }, imports: [[
            ReactiveFormsModule,
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample], imports: [ReactiveFormsModule,
        CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RadioExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { RadioExamplesModule, RadioHarnessExample, RadioNgModelExample, RadioOverviewExample };
//# sourceMappingURL=radio.js.map
