import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵdirectiveInject, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NgControlStatus, NgModel, Validators, FormBuilder, NgControlStatusGroup, NgForm, RequiredValidator, FormGroupDirective, FormControlName, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSlideToggle, MatSlideToggleRequiredValidator, MatSlideToggleModule } from '@angular/material/slide-toggle';

/**
 * @title Configurable slide-toggle
 */
var SlideToggleConfigurableExample = /** @class */ (function () {
    function SlideToggleConfigurableExample() {
        this.color = 'accent';
        this.checked = false;
        this.disabled = false;
    }
    SlideToggleConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'slide-toggle-configurable-example',
                    templateUrl: 'slide-toggle-configurable-example.html',
                    styleUrls: ['slide-toggle-configurable-example.css'],
                },] },
    ];
    SlideToggleConfigurableExample.ɵfac = function SlideToggleConfigurableExample_Factory(t) { return new (t || SlideToggleConfigurableExample)(); };
    SlideToggleConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: SlideToggleConfigurableExample, selectors: [["slide-toggle-configurable-example"]], decls: 27, vars: 6, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], [3, "ngModel", "ngModelChange"], ["value", "primary", 1, "example-margin"], ["value", "accent", 1, "example-margin"], ["value", "warn", 1, "example-margin"], [1, "example-margin", 3, "ngModel", "ngModelChange"], [1, "result"], [1, "example-margin", 3, "color", "checked", "disabled"]], template: function SlideToggleConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-card");
            ɵɵelementStart(1, "mat-card-content");
            ɵɵelementStart(2, "h2", 0);
            ɵɵtext(3, "Slider configuration");
            ɵɵelementEnd();
            ɵɵelementStart(4, "section", 1);
            ɵɵelementStart(5, "label", 2);
            ɵɵtext(6, "Color:");
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-radio-group", 3);
            ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_radio_group_ngModelChange_7_listener($event) { return ctx.color = $event; });
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
            ɵɵelementStart(15, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_15_listener($event) { return ctx.checked = $event; });
            ɵɵtext(16, "Checked");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "section", 1);
            ɵɵelementStart(18, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SlideToggleConfigurableExample_Template_mat_checkbox_ngModelChange_18_listener($event) { return ctx.disabled = $event; });
            ɵɵtext(19, "Disabled");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-card", 8);
            ɵɵelementStart(21, "mat-card-content");
            ɵɵelementStart(22, "h2", 0);
            ɵɵtext(23, "Result");
            ɵɵelementEnd();
            ɵɵelementStart(24, "section", 1);
            ɵɵelementStart(25, "mat-slide-toggle", 9);
            ɵɵtext(26, " Slide me! ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(7);
            ɵɵproperty("ngModel", ctx.color);
            ɵɵadvance(8);
            ɵɵproperty("ngModel", ctx.checked);
            ɵɵadvance(3);
            ɵɵproperty("ngModel", ctx.disabled);
            ɵɵadvance(7);
            ɵɵproperty("color", ctx.color)("checked", ctx.checked)("disabled", ctx.disabled);
        } }, directives: [MatCard, MatCardContent, MatRadioGroup, NgControlStatus, NgModel, MatRadioButton, MatCheckbox, MatSlideToggle], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}"] });
    return SlideToggleConfigurableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlideToggleConfigurableExample, [{
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
var SlideToggleFormsExample = /** @class */ (function () {
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    SlideToggleFormsExample.prototype.onFormSubmit = function () {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    };
    SlideToggleFormsExample.decorators = [
        { type: Component, args: [{
                    selector: 'slide-toggle-forms-example',
                    templateUrl: './slide-toggle-forms-example.html',
                    styleUrls: ['./slide-toggle-forms-example.css'],
                },] },
    ];
    /** @nocollapse */
    SlideToggleFormsExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(ɵɵdirectiveInject(FormBuilder)); };
    SlideToggleFormsExample.ɵcmp = ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"], ["mat-rasied-button", "", "type", "submit"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, "Slide Toggle using a simple NgModel.");
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-slide-toggle", 0);
            ɵɵlistener("ngModelChange", function SlideToggleFormsExample_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.isChecked = $event; });
            ɵɵtext(3);
            ɵɵelementEnd();
            ɵɵelementStart(4, "p");
            ɵɵtext(5, "Slide Toggle inside of a Template-driven form");
            ɵɵelementEnd();
            ɵɵelementStart(6, "form", 1, 2);
            ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener($event) { return ctx.onFormSubmit(); });
            ɵɵelementStart(8, "mat-slide-toggle", 3);
            ɵɵtext(9, "Enable Wifi");
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-slide-toggle", 4);
            ɵɵtext(11, "Accept Terms of Service");
            ɵɵelementEnd();
            ɵɵelementStart(12, "button", 5);
            ɵɵtext(13, "Save Settings");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "p");
            ɵɵtext(15, "Slide Toggle inside of a Reactive form");
            ɵɵelementEnd();
            ɵɵelementStart(16, "form", 6);
            ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener($event) { return ctx.onFormSubmit(); });
            ɵɵelementStart(17, "mat-slide-toggle", 7);
            ɵɵtext(18, "Enable Wifi");
            ɵɵelementEnd();
            ɵɵelementStart(19, "mat-slide-toggle", 8);
            ɵɵtext(20, "Accept Terms of Service");
            ɵɵelementEnd();
            ɵɵelementStart(21, "p");
            ɵɵtext(22);
            ɵɵelementEnd();
            ɵɵelementStart(23, "button", 9);
            ɵɵtext(24, "Save Settings");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.isChecked);
            ɵɵadvance(1);
            ɵɵtextInterpolate1("Slide Toggle Checked: ", ctx.isChecked, "");
            ɵɵadvance(13);
            ɵɵproperty("formGroup", ctx.formGroup);
            ɵɵadvance(6);
            ɵɵtextInterpolate1("Form Group Status: ", ctx.formGroup.status, "");
        } }, directives: [MatSlideToggle, NgControlStatus, NgModel, NgControlStatusGroup, NgForm, MatSlideToggleRequiredValidator, RequiredValidator, MatButton, FormGroupDirective, FormControlName], styles: [".example-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  display: block;\n}"] });
    return SlideToggleFormsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

/**
 * @title Basic slide-toggles
 */
var SlideToggleOverviewExample = /** @class */ (function () {
    function SlideToggleOverviewExample() {
    }
    SlideToggleOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'slide-toggle-overview-example',
                    templateUrl: 'slide-toggle-overview-example.html',
                    styleUrls: ['slide-toggle-overview-example.css'],
                },] },
    ];
    SlideToggleOverviewExample.ɵfac = function SlideToggleOverviewExample_Factory(t) { return new (t || SlideToggleOverviewExample)(); };
    SlideToggleOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SlideToggleOverviewExample, selectors: [["slide-toggle-overview-example"]], decls: 2, vars: 0, template: function SlideToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-slide-toggle");
            ɵɵtext(1, "Slide me!");
            ɵɵelementEnd();
        } }, directives: [MatSlideToggle], styles: [""] });
    return SlideToggleOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlideToggleOverviewExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-overview-example',
                templateUrl: 'slide-toggle-overview-example.html',
                styleUrls: ['slide-toggle-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
];
var SlideToggleExamplesModule = /** @class */ (function () {
    function SlideToggleExamplesModule() {
    }
    SlideToggleExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    SlideToggleExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
    SlideToggleExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatSlideToggleModule,
                ReactiveFormsModule,
            ]] });
    return SlideToggleExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SlideToggleExamplesModule, [{
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
            }]
    }], null, null); })();

export { SlideToggleConfigurableExample, SlideToggleExamplesModule, SlideToggleFormsExample, SlideToggleOverviewExample };
//# sourceMappingURL=slide-toggle.js.map
