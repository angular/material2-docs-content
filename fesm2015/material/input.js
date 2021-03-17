import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵdefineComponent, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵelement, ɵɵreference, ɵɵtextInterpolate1, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormControl, Validators, ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix, MatHint, MatError, MatPrefix } from '@angular/material/form-field';

function InputClearableExample_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function InputClearableExample_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.value = ""; });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/**
 * @title Input with a clear button
 */
class InputClearableExample {
    constructor() {
        this.value = 'Clear me';
    }
}
InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
InputClearableExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 5, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Clearable input");
        ɵɵelementEnd();
        ɵɵelementStart(3, "input", 1);
        ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
        ɵɵelementEnd();
        ɵɵtemplate(4, InputClearableExample_button_4_Template, 3, 0, "button", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.value);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.value);
    } }, directives: [MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, MatButton, MatSuffix, MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null); })();

function InputErrorStateMatcherExample_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Please enter a valid email address ");
    ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Email is ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "required");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Input with a custom ErrorStateMatcher */
class InputErrorStateMatcherExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
InputErrorStateMatcherExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Email");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵelementStart(5, "mat-hint");
        ɵɵtext(6, "Errors appear instantly!");
        ɵɵelementEnd();
        ɵɵtemplate(7, InputErrorStateMatcherExample_mat_error_7_Template, 2, 0, "mat-error", 3);
        ɵɵtemplate(8, InputErrorStateMatcherExample_mat_error_8_Template, 4, 0, "mat-error", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatHint, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();

function InputErrorsExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Please enter a valid email address ");
    ɵɵelementEnd();
} }
function InputErrorsExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Email is ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "required");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/**
 * @title Input with error messages
 */
class InputErrorsExample {
    constructor() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
}
InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
InputErrorsExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 7, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Email");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵtemplate(5, InputErrorsExample_mat_error_5_Template, 2, 0, "mat-error", 3);
        ɵɵtemplate(6, InputErrorsExample_mat_error_6_Template, 4, 0, "mat-error", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("formControl", ctx.emailFormControl);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputErrorsExample, [{
        type: Component,
        args: [{
                selector: 'input-errors-example',
                templateUrl: 'input-errors-example.html',
                styleUrls: ['input-errors-example.css'],
            }]
    }], null, null); })();

/**
 * @title Inputs in a form
 */
class InputFormExample {
}
InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
InputFormExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Company (disabled)");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "table", 3);
        ɵɵelementStart(6, "tr");
        ɵɵelementStart(7, "td");
        ɵɵelementStart(8, "mat-form-field", 1);
        ɵɵelementStart(9, "mat-label");
        ɵɵtext(10, "First name");
        ɵɵelementEnd();
        ɵɵelement(11, "input", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "td");
        ɵɵelementStart(13, "mat-form-field", 1);
        ɵɵelementStart(14, "mat-label");
        ɵɵtext(15, "Long Last Name That Will Be Truncated");
        ɵɵelementEnd();
        ɵɵelement(16, "input", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "p");
        ɵɵelementStart(18, "mat-form-field", 1);
        ɵɵelementStart(19, "mat-label");
        ɵɵtext(20, "Address");
        ɵɵelementEnd();
        ɵɵelementStart(21, "textarea", 5);
        ɵɵtext(22, "1600 Amphitheatre Pkwy");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(23, "mat-form-field", 1);
        ɵɵelementStart(24, "mat-label");
        ɵɵtext(25, "Address 2");
        ɵɵelementEnd();
        ɵɵelement(26, "textarea", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(27, "table", 3);
        ɵɵelementStart(28, "tr");
        ɵɵelementStart(29, "td");
        ɵɵelementStart(30, "mat-form-field", 1);
        ɵɵelementStart(31, "mat-label");
        ɵɵtext(32, "City");
        ɵɵelementEnd();
        ɵɵelement(33, "input", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "td");
        ɵɵelementStart(35, "mat-form-field", 1);
        ɵɵelementStart(36, "mat-label");
        ɵɵtext(37, "State");
        ɵɵelementEnd();
        ɵɵelement(38, "input", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(39, "td");
        ɵɵelementStart(40, "mat-form-field", 1);
        ɵɵelementStart(41, "mat-label");
        ɵɵtext(42, "Postal Code");
        ɵɵelementEnd();
        ɵɵelement(43, "input", 8, 9);
        ɵɵelementStart(45, "mat-hint", 10);
        ɵɵtext(46);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(44);
        ɵɵadvance(46);
        ɵɵtextInterpolate1("", _r0.value.length, " / 5");
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();

/**
 * @title Input with hints
 */
class InputHintExample {
}
InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
InputHintExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Message");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2, 3);
        ɵɵelementStart(6, "mat-hint", 4);
        ɵɵelementStart(7, "strong");
        ɵɵtext(8, "Don't disclose personal info");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-hint", 5);
        ɵɵtext(10);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(5);
        ɵɵadvance(10);
        ɵɵtextInterpolate1("", _r0.value.length, " / 256");
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic Inputs
 */
class InputOverviewExample {
}
InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
InputOverviewExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Favorite food");
        ɵɵelementEnd();
        ɵɵelement(4, "input", 2);
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field", 1);
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Leave a comment");
        ɵɵelementEnd();
        ɵɵelement(8, "textarea", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputOverviewExample, [{
        type: Component,
        args: [{
                selector: 'input-overview-example',
                styleUrls: ['input-overview-example.css'],
                templateUrl: 'input-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Inputs with prefixes and suffixes
 */
class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
InputPrefixSuffixExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "mat-form-field", 1);
        ɵɵelementStart(2, "mat-label");
        ɵɵtext(3, "Telephone");
        ɵɵelementEnd();
        ɵɵelementStart(4, "span", 2);
        ɵɵtext(5, "+1 \u00A0");
        ɵɵelementEnd();
        ɵɵelement(6, "input", 3);
        ɵɵelementStart(7, "mat-icon", 4);
        ɵɵtext(8, "mode_edit");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [ɵangular_packages_forms_forms_ba, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatInputHarness
 */
class InputHarnessExample {
    constructor() {
        this.inputType = 'number';
        this.disabled = false;
    }
}
InputHarnessExample.ɵfac = function InputHarnessExample_Factory(t) { return new (t || InputHarnessExample)(); };
InputHarnessExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: InputHarnessExample, selectors: [["input-harness-example"]], decls: 10, vars: 2, consts: [["matInput", "", "value", "Sushi", "name", "favorite-food"], ["matInput", "", 3, "type", "disabled"], ["matInput", ""]], template: function InputHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field");
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Favorite food");
        ɵɵelementEnd();
        ɵɵelement(3, "input", 0);
        ɵɵelementEnd();
        ɵɵelementStart(4, "mat-form-field");
        ɵɵelement(5, "input", 1);
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-form-field");
        ɵɵelementStart(7, "mat-label");
        ɵɵtext(8, "Leave a comment");
        ɵɵelementEnd();
        ɵɵelement(9, "textarea", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("type", ctx.inputType)("disabled", ctx.disabled);
    } }, directives: [MatFormField, MatLabel, MatInput], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputHarnessExample, [{
        type: Component,
        args: [{
                selector: 'input-harness-example',
                templateUrl: 'input-harness-example.html'
            }]
    }], null, null); })();

const EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHarnessExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
class InputExamplesModule {
}
InputExamplesModule.ɵfac = function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); };
InputExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: InputExamplesModule });
InputExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(InputExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample], imports: [CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule], exports: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputExamplesModule, InputFormExample, InputHarnessExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
//# sourceMappingURL=input.js.map
