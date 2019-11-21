(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/input', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.input = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i4, i0, i1, i5, i6, i3, i2) { 'use strict';

    function InputClearableExample_button_2_Template(rf, ctx) { if (rf & 1) {
        var _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 3);
        i0.ɵɵlistener("click", function InputClearableExample_button_2_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r2); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.value = ""; });
        i0.ɵɵelementStart(1, "mat-icon");
        i0.ɵɵtext(2, "close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    /**
     * @title Input with a clear button
     */
    var InputClearableExample = /** @class */ (function () {
        function InputClearableExample() {
            this.value = 'Clear me';
        }
        InputClearableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'input-clearable-example',
                        templateUrl: './input-clearable-example.html',
                        styleUrls: ['./input-clearable-example.css'],
                    },] },
        ];
        InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
        InputClearableExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 3, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", "placeholder", "Clearable input", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "input", 1);
                i0.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(2, InputClearableExample_button_2_Template, 3, 0, "button", 2);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngModel", ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.value);
            } }, directives: [i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i4.NgIf, i5.MatButton, i2.MatSuffix, i6.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
        return InputClearableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputClearableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'input-clearable-example',
                    templateUrl: './input-clearable-example.html',
                    styleUrls: ['./input-clearable-example.css'],
                }]
        }], null, null); })();

    function InputErrorStateMatcherExample_mat_error_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, " Please enter a valid email address ");
        i0.ɵɵelementEnd();
    } }
    function InputErrorStateMatcherExample_mat_error_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, " Email is ");
        i0.ɵɵelementStart(2, "strong");
        i0.ɵɵtext(3, "required");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
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
            this.emailFormControl = new i1.FormControl('', [
                i1.Validators.required,
                i1.Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        InputErrorStateMatcherExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'input-error-state-matcher-example',
                        templateUrl: './input-error-state-matcher-example.html',
                        styleUrls: ['./input-error-state-matcher-example.css'],
                    },] },
        ];
        InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
        InputErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 7, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2);
                i0.ɵɵelementStart(3, "mat-hint");
                i0.ɵɵtext(4, "Errors appear instantly!");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(5, InputErrorStateMatcherExample_mat_error_5_Template, 2, 0, "mat-error", 3);
                i0.ɵɵtemplate(6, InputErrorStateMatcherExample_mat_error_6_Template, 4, 0, "mat-error", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i2.MatHint, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return InputErrorStateMatcherExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
            type: i0.Component,
            args: [{
                    selector: 'input-error-state-matcher-example',
                    templateUrl: './input-error-state-matcher-example.html',
                    styleUrls: ['./input-error-state-matcher-example.css'],
                }]
        }], null, null); })();

    function InputErrorsExample_mat_error_3_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, " Please enter a valid email address ");
        i0.ɵɵelementEnd();
    } }
    function InputErrorsExample_mat_error_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-error");
        i0.ɵɵtext(1, " Email is ");
        i0.ɵɵelementStart(2, "strong");
        i0.ɵɵtext(3, "required");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }
    /**
     * @title Input with error messages
     */
    var InputErrorsExample = /** @class */ (function () {
        function InputErrorsExample() {
            this.emailFormControl = new i1.FormControl('', [
                i1.Validators.required,
                i1.Validators.email,
            ]);
        }
        InputErrorsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'input-errors-example',
                        templateUrl: 'input-errors-example.html',
                        styleUrls: ['input-errors-example.css'],
                    },] },
        ];
        InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
        InputErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 5, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Email", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2);
                i0.ɵɵtemplate(3, InputErrorsExample_mat_error_3_Template, 2, 0, "mat-error", 3);
                i0.ɵɵtemplate(4, InputErrorsExample_mat_error_4_Template, 4, 0, "mat-error", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("formControl", ctx.emailFormControl);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlDirective, i4.NgIf, i2.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return InputErrorsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputErrorsExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'input-form-example',
                        templateUrl: 'input-form-example.html',
                        styleUrls: ['input-form-example.css'],
                    },] },
        ];
        InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
        InputFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 31, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Company (disabled)", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Long Last Name That Will Be Truncated"], ["matInput", "", "placeholder", "Address"], ["matInput", "", "placeholder", "Address 2"], ["matInput", "", "placeholder", "City"], ["matInput", "", "placeholder", "State"], ["matInput", "", "maxlength", "5", "placeholder", "Postal Code", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "table", 3);
                i0.ɵɵelementStart(4, "tr");
                i0.ɵɵelementStart(5, "td");
                i0.ɵɵelementStart(6, "mat-form-field", 1);
                i0.ɵɵelement(7, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "td");
                i0.ɵɵelementStart(9, "mat-form-field", 1);
                i0.ɵɵelement(10, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "p");
                i0.ɵɵelementStart(12, "mat-form-field", 1);
                i0.ɵɵelementStart(13, "textarea", 6);
                i0.ɵɵtext(14, "1600 Amphitheatre Pkwy");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "mat-form-field", 1);
                i0.ɵɵelement(16, "textarea", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "table", 3);
                i0.ɵɵelementStart(18, "tr");
                i0.ɵɵelementStart(19, "td");
                i0.ɵɵelementStart(20, "mat-form-field", 1);
                i0.ɵɵelement(21, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "td");
                i0.ɵɵelementStart(23, "mat-form-field", 1);
                i0.ɵɵelement(24, "input", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "td");
                i0.ɵɵelementStart(26, "mat-form-field", 1);
                i0.ɵɵelement(27, "input", 10, 11);
                i0.ɵɵelementStart(29, "mat-hint", 12);
                i0.ɵɵtext(30);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r7 = i0.ɵɵreference(28);
                i0.ɵɵadvance(30);
                i0.ɵɵtextInterpolate1("", _r7.value.length, " / 5");
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
        return InputFormExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFormExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'input-hint-example',
                        templateUrl: 'input-hint-example.html',
                        styleUrls: ['input-hint-example.css'],
                    },] },
        ];
        InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
        InputHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 9, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Message"], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2, 3);
                i0.ɵɵelementStart(4, "mat-hint", 4);
                i0.ɵɵelementStart(5, "strong");
                i0.ɵɵtext(6, "Don't disclose personal info");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-hint", 5);
                i0.ɵɵtext(8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r8 = i0.ɵɵreference(3);
                i0.ɵɵadvance(8);
                i0.ɵɵtextInterpolate1("", _r8.value.length, " / 256");
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return InputHintExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputHintExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'input-overview-example',
                        styleUrls: ['input-overview-example.css'],
                        templateUrl: 'input-overview-example.html',
                    },] },
        ];
        InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
        InputOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Favorite food", "value", "Sushi"], ["matInput", "", "placeholder", "Leave a comment"]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelement(2, "input", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field", 1);
                i0.ɵɵelement(4, "textarea", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return InputOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputOverviewExample, [{
            type: i0.Component,
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
            { type: i0.Component, args: [{
                        selector: 'input-prefix-suffix-example',
                        templateUrl: 'input-prefix-suffix-example.html',
                        styleUrls: ['input-prefix-suffix-example.css'],
                    },] },
        ];
        InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
        InputPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 7, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "Telephone"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "mat-form-field", 1);
                i0.ɵɵelementStart(2, "span", 2);
                i0.ɵɵtext(3, "+1 \u00A0");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 3);
                i0.ɵɵelementStart(5, "mat-icon", 4);
                i0.ɵɵtext(6, "mode_edit");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatPrefix, i3.MatInput, i6.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
        return InputPrefixSuffixExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
            type: i0.Component,
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
            { type: i0.NgModule, args: [{
                        imports: [
                            i4.CommonModule,
                            i5.MatButtonModule,
                            i6.MatIconModule,
                            i3.MatInputModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        InputExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: InputExamplesModule });
        InputExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); }, imports: [[
                    i4.CommonModule,
                    i5.MatButtonModule,
                    i6.MatIconModule,
                    i3.MatInputModule,
                    i1.FormsModule,
                    i1.ReactiveFormsModule,
                ]] });
        return InputExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
            InputErrorStateMatcherExample,
            InputErrorsExample,
            InputFormExample,
            InputHintExample,
            InputOverviewExample,
            InputPrefixSuffixExample], imports: [i4.CommonModule,
            i5.MatButtonModule,
            i6.MatIconModule,
            i3.MatInputModule,
            i1.FormsModule,
            i1.ReactiveFormsModule], exports: [InputClearableExample,
            InputErrorStateMatcherExample,
            InputErrorsExample,
            InputFormExample,
            InputHintExample,
            InputOverviewExample,
            InputPrefixSuffixExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i4.CommonModule,
                        i5.MatButtonModule,
                        i6.MatIconModule,
                        i3.MatInputModule,
                        i1.FormsModule,
                        i1.ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.InputClearableExample = InputClearableExample;
    exports.InputErrorStateMatcherExample = InputErrorStateMatcherExample;
    exports.InputErrorsExample = InputErrorsExample;
    exports.InputExamplesModule = InputExamplesModule;
    exports.InputFormExample = InputFormExample;
    exports.InputHintExample = InputHintExample;
    exports.InputOverviewExample = InputOverviewExample;
    exports.InputPrefixSuffixExample = InputPrefixSuffixExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-input.umd.js.map
