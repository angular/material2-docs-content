import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineComponent, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵelement, ɵɵreference, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormControl, Validators, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatSuffix, MatHint, MatError, MatPrefix } from '@angular/material/form-field';

function InputClearableExample_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function InputClearableExample_button_2_Template_button_click_0_listener($event) { ɵɵrestoreView(_r2); var ctx_r1 = ɵɵnextContext(); return ctx_r1.value = ""; });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "close");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/**
 * @title Input with a clear button
 */
var InputClearableExample = /** @class */ (function () {
    function InputClearableExample() {
        this.value = 'Clear me';
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    templateUrl: './input-clearable-example.html',
                    styleUrls: ['./input-clearable-example.css'],
                },] },
    ];
    InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
    InputClearableExample.ɵcmp = ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 3, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Clearable input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-form-field", 0);
            ɵɵelementStart(1, "input", 1);
            ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵtemplate(2, InputClearableExample_button_2_Template, 3, 0, "button", 2);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵproperty("ngModel", ctx.value);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.value);
        } }, directives: [MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, NgModel, NgIf, MatButton, MatSuffix, MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
    return InputClearableExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null); })();

function InputErrorStateMatcherExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Please enter a valid email address ");
    ɵɵelementEnd();
} }
function InputErrorStateMatcherExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Email is ");
    ɵɵelementStart(2, "strong");
    ɵɵtext(3, "required");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
/** @title Input with a custom ErrorStateMatcher */
var InputErrorStateMatcherExample = /** @class */ (function () {
    function InputErrorStateMatcherExample() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    InputErrorStateMatcherExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-error-state-matcher-example',
                    templateUrl: './input-error-state-matcher-example.html',
                    styleUrls: ['./input-error-state-matcher-example.css'],
                },] },
    ];
    InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
    InputErrorStateMatcherExample.ɵcmp = ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 7, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementStart(3, "mat-hint");
            ɵɵtext(4, "Errors appear instantly!");
            ɵɵelementEnd();
            ɵɵtemplate(5, InputErrorStateMatcherExample_mat_error_5_Template, 2, 0, "mat-error", 3);
            ɵɵtemplate(6, InputErrorStateMatcherExample_mat_error_6_Template, 4, 0, "mat-error", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
            ɵɵadvance(3);
            ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatHint, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputErrorStateMatcherExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();

function InputErrorsExample_mat_error_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Please enter a valid email address ");
    ɵɵelementEnd();
} }
function InputErrorsExample_mat_error_4_Template(rf, ctx) { if (rf & 1) {
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
var InputErrorsExample = /** @class */ (function () {
    function InputErrorsExample() {
        this.emailFormControl = new FormControl('', [
            Validators.required,
            Validators.email,
        ]);
    }
    InputErrorsExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-errors-example',
                    templateUrl: 'input-errors-example.html',
                    styleUrls: ['input-errors-example.css'],
                },] },
    ];
    InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
    InputErrorsExample.ɵcmp = ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 5, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵtemplate(3, InputErrorsExample_mat_error_3_Template, 2, 0, "mat-error", 3);
            ɵɵtemplate(4, InputErrorsExample_mat_error_4_Template, 4, 0, "mat-error", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("formControl", ctx.emailFormControl);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
            ɵɵadvance(1);
            ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputErrorsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputErrorsExample, [{
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
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-form-example',
                    templateUrl: 'input-form-example.html',
                    styleUrls: ['input-form-example.css'],
                },] },
    ];
    InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
    InputFormExample.ɵcmp = ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 31, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Company (disabled)", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Long Last Name That Will Be Truncated"], ["matInput", "", "placeholder", "Address"], ["matInput", "", "placeholder", "Address 2"], ["matInput", "", "placeholder", "City"], ["matInput", "", "placeholder", "State"], ["matInput", "", "maxlength", "5", "placeholder", "Postal Code", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "table", 3);
            ɵɵelementStart(4, "tr");
            ɵɵelementStart(5, "td");
            ɵɵelementStart(6, "mat-form-field", 1);
            ɵɵelement(7, "input", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "td");
            ɵɵelementStart(9, "mat-form-field", 1);
            ɵɵelement(10, "input", 5);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "p");
            ɵɵelementStart(12, "mat-form-field", 1);
            ɵɵelementStart(13, "textarea", 6);
            ɵɵtext(14, "1600 Amphitheatre Pkwy");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-form-field", 1);
            ɵɵelement(16, "textarea", 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "table", 3);
            ɵɵelementStart(18, "tr");
            ɵɵelementStart(19, "td");
            ɵɵelementStart(20, "mat-form-field", 1);
            ɵɵelement(21, "input", 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "td");
            ɵɵelementStart(23, "mat-form-field", 1);
            ɵɵelement(24, "input", 9);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(25, "td");
            ɵɵelementStart(26, "mat-form-field", 1);
            ɵɵelement(27, "input", 10, 11);
            ɵɵelementStart(29, "mat-hint", 12);
            ɵɵtext(30);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = ɵɵreference(28);
            ɵɵadvance(30);
            ɵɵtextInterpolate1("", _r7.value.length, " / 5");
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    return InputFormExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFormExample, [{
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
var InputHintExample = /** @class */ (function () {
    function InputHintExample() {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    templateUrl: 'input-hint-example.html',
                    styleUrls: ['input-hint-example.css'],
                },] },
    ];
    InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
    InputHintExample.ɵcmp = ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 9, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Message"], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2, 3);
            ɵɵelementStart(4, "mat-hint", 4);
            ɵɵelementStart(5, "strong");
            ɵɵtext(6, "Don't disclose personal info");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-hint", 5);
            ɵɵtext(8);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r8 = ɵɵreference(3);
            ɵɵadvance(8);
            ɵɵtextInterpolate1("", _r8.value.length, " / 256");
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputHintExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputHintExample, [{
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
var InputOverviewExample = /** @class */ (function () {
    function InputOverviewExample() {
    }
    InputOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-overview-example',
                    styleUrls: ['input-overview-example.css'],
                    templateUrl: 'input-overview-example.html',
                },] },
    ];
    InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
    InputOverviewExample.ɵcmp = ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Favorite food", "value", "Sushi"], ["matInput", "", "placeholder", "Leave a comment"]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelement(2, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-form-field", 1);
            ɵɵelement(4, "textarea", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputOverviewExample, [{
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
var InputPrefixSuffixExample = /** @class */ (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    templateUrl: 'input-prefix-suffix-example.html',
                    styleUrls: ['input-prefix-suffix-example.css'],
                },] },
    ];
    InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
    InputPrefixSuffixExample.ɵcmp = ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 7, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "Telephone"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "form", 0);
            ɵɵelementStart(1, "mat-form-field", 1);
            ɵɵelementStart(2, "span", 2);
            ɵɵtext(3, "+1 \u00A0");
            ɵɵelementEnd();
            ɵɵelement(4, "input", 3);
            ɵɵelementStart(5, "mat-icon", 4);
            ɵɵtext(6, "mode_edit");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatPrefix, MatInput, MatIcon, MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputPrefixSuffixExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
var InputExamplesModule = /** @class */ (function () {
    function InputExamplesModule() {
    }
    InputExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    InputExamplesModule.ɵmod = ɵɵdefineNgModule({ type: InputExamplesModule });
    InputExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return InputExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
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
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputExamplesModule, [{
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
            }]
    }], null, null); })();

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputExamplesModule, InputFormExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
//# sourceMappingURL=input.js.map
