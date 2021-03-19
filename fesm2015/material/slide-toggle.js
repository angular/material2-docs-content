import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i3 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i4 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i2$1 from '@angular/material/slide-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 * @title Configurable slide-toggle
 */
class SlideToggleConfigurableExample {
    constructor() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
}
SlideToggleConfigurableExample.ɵfac = function SlideToggleConfigurableExample_Factory(t) { return new (t || SlideToggleConfigurableExample)(); };
SlideToggleConfigurableExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideToggleConfigurableExample, selectors: [["slide-toggle-configurable-example"]], decls: 27, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]], template: function SlideToggleConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-content");
        i0.ɵɵelementStart(2, "h2", 0);
        i0.ɵɵtext(3, "Slider configuration");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "section", 1);
        i0.ɵɵelementStart(5, "label", 2);
        i0.ɵɵtext(6, "Color:");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-radio-group", 3);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
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
        i0.ɵɵelementStart(15, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.checked = $event; });
        i0.ɵɵtext(16, "Checked");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "section", 1);
        i0.ɵɵelementStart(18, "mat-checkbox", 7);
        i0.ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
        i0.ɵɵtext(19, "Disabled");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-card", 8);
        i0.ɵɵelementStart(21, "mat-card-content");
        i0.ɵɵelementStart(22, "h2", 0);
        i0.ɵɵtext(23, "Result");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "section", 1);
        i0.ɵɵelementStart(25, "mat-slide-toggle", 9);
        i0.ɵɵtext(26, " Slide me! ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("ngModel", ctx.color);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngModel", ctx.checked);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.disabled);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
    } }, directives: [i1.MatCard, i1.MatCardContent, i2.MatRadioGroup, i1$1.NgControlStatus, i1$1.NgModel, i2.MatRadioButton, i4.MatCheckbox, i2$1.MatSlideToggle], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-configurable-example',
                templateUrl: 'slide-toggle-configurable-example.html',
                styleUrls: ['slide-toggle-configurable-example.css'],
            }]
    }], null, null); })();

/**
 * @title Slide-toggle with forms
 */
class SlideToggleFormsExample {
    constructor(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    onFormSubmit() {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    }
}
SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(i0.ɵɵdirectiveInject(i1$1.FormBuilder)); };
SlideToggleFormsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "Slide Toggle using a simple NgModel.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-slide-toggle", 0);
        i0.ɵɵlistener("ngModelChange", function SlideToggleFormsExample_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.isChecked = $event; });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5, "Slide Toggle inside of a Template-driven form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 1, 2);
        i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener() { return ctx.onFormSubmit(); });
        i0.ɵɵelementStart(8, "mat-slide-toggle", 3);
        i0.ɵɵtext(9, "Enable Wifi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-slide-toggle", 4);
        i0.ɵɵtext(11, "Accept Terms of Service");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 5);
        i0.ɵɵtext(13, "Save Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, "Slide Toggle inside of a Reactive form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "form", 6);
        i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener() { return ctx.onFormSubmit(); });
        i0.ɵɵelementStart(17, "mat-slide-toggle", 7);
        i0.ɵɵtext(18, "Enable Wifi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-slide-toggle", 8);
        i0.ɵɵtext(20, "Accept Terms of Service");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 5);
        i0.ɵɵtext(24, "Save Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.isChecked);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Slide Toggle Checked: ", ctx.isChecked, "");
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("formGroup", ctx.formGroup);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("Form Group Status: ", ctx.formGroup.status, "");
    } }, directives: [i2$1.MatSlideToggle, i1$1.NgControlStatus, i1$1.NgModel, i1$1.NgControlStatusGroup, i1$1.NgForm, i2$1.MatSlideToggleRequiredValidator, i1$1.RequiredValidator, i3.MatButton, i1$1.FormGroupDirective, i1$1.FormControlName], styles: [".example-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  display: block;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: i1$1.FormBuilder }]; }, null); })();

/**
 * @title Basic slide-toggles
 */
class SlideToggleOverviewExample {
}
SlideToggleOverviewExample.ɵfac = function SlideToggleOverviewExample_Factory(t) { return new (t || SlideToggleOverviewExample)(); };
SlideToggleOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideToggleOverviewExample, selectors: [["slide-toggle-overview-example"]], decls: 2, vars: 0, template: function SlideToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-slide-toggle");
        i0.ɵɵtext(1, "Slide me!");
        i0.ɵɵelementEnd();
    } }, directives: [i2$1.MatSlideToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-overview-example',
                templateUrl: 'slide-toggle-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Testing with MatSlideToggleHarness
 */
class SlideToggleHarnessExample {
    constructor() {
        this.disabled = true;
        this.ctrl = new FormControl(true);
    }
}
SlideToggleHarnessExample.ɵfac = function SlideToggleHarnessExample_Factory(t) { return new (t || SlideToggleHarnessExample)(); };
SlideToggleHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideToggleHarnessExample, selectors: [["slide-toggle-harness-example"]], decls: 4, vars: 2, consts: [["name", "first-name", 3, "formControl"], [3, "disabled"]], template: function SlideToggleHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-slide-toggle", 0);
        i0.ɵɵtext(1, " First\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-slide-toggle", 1);
        i0.ɵɵtext(3, " Second\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formControl", ctx.ctrl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
    } }, directives: [i2$1.MatSlideToggle, i1$1.NgControlStatus, i1$1.FormControlDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleHarnessExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-harness-example',
                templateUrl: 'slide-toggle-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleHarnessExample,
    SlideToggleOverviewExample,
];
class SlideToggleExamplesModule {
}
SlideToggleExamplesModule.ɵfac = function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); };
SlideToggleExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
SlideToggleExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            FormsModule,
            MatButtonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatRadioModule,
                    MatSlideToggleModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SlideToggleConfigurableExample, SlideToggleExamplesModule, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample };
//# sourceMappingURL=slide-toggle.js.map
