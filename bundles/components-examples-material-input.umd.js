(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/input', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.input = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i4, i0, i1, i5, i6, i3, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    function InputClearableExample_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "button", 3);
            i0__namespace.ɵɵlistener("click", function InputClearableExample_button_4_Template_button_click_0_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var ctx_r1 = i0__namespace.ɵɵnextContext(); return ctx_r1.value = ""; });
            i0__namespace.ɵɵelementStart(1, "mat-icon");
            i0__namespace.ɵɵtext(2, "close");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    /**
     * @title Input with a clear button
     */
    var InputClearableExample = /** @class */ (function () {
        function InputClearableExample() {
            this.value = 'Clear me';
        }
        return InputClearableExample;
    }());
    InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
    InputClearableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 5, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field", 0);
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Clearable input");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "input", 1);
                i0__namespace.ɵɵlistener("ngModelChange", function InputClearableExample_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(4, InputClearableExample_button_4_Template, 3, 0, "button", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.value);
            }
        }, directives: [i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.NgModel, i4__namespace.NgIf, i5__namespace.MatButton, i2__namespace.MatSuffix, i6__namespace.MatIcon], styles: [".example-form-field[_ngcontent-%COMP%] {\n  width: 200px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputClearableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-clearable-example',
                        templateUrl: './input-clearable-example.html',
                        styleUrls: ['./input-clearable-example.css'],
                    }]
            }], null, null);
    })();

    function InputErrorStateMatcherExample_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, " Please enter a valid email address ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function InputErrorStateMatcherExample_mat_error_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, " Email is ");
            i0__namespace.ɵɵelementStart(2, "strong");
            i0__namespace.ɵɵtext(3, "required");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
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
        return InputErrorStateMatcherExample;
    }());
    InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
    InputErrorStateMatcherExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Email");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementStart(5, "mat-hint");
                i0__namespace.ɵɵtext(6, "Errors appear instantly!");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, InputErrorStateMatcherExample_mat_error_7_Template, 2, 0, "mat-error", 3);
                i0__namespace.ɵɵtemplate(8, InputErrorStateMatcherExample_mat_error_8_Template, 4, 0, "mat-error", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.emailFormControl)("errorStateMatcher", ctx.matcher);
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i2__namespace.MatHint, i4__namespace.NgIf, i2__namespace.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputErrorStateMatcherExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-error-state-matcher-example',
                        templateUrl: './input-error-state-matcher-example.html',
                        styleUrls: ['./input-error-state-matcher-example.css'],
                    }]
            }], null, null);
    })();

    function InputErrorsExample_mat_error_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, " Please enter a valid email address ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function InputErrorsExample_mat_error_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-error");
            i0__namespace.ɵɵtext(1, " Email is ");
            i0__namespace.ɵɵelementStart(2, "strong");
            i0__namespace.ɵɵtext(3, "required");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
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
        return InputErrorsExample;
    }());
    InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
    InputErrorsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 7, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["type", "email", "matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Email");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵtemplate(5, InputErrorsExample_mat_error_5_Template, 2, 0, "mat-error", 3);
                i0__namespace.ɵɵtemplate(6, InputErrorsExample_mat_error_6_Template, 4, 0, "mat-error", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.emailFormControl);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("email") && !ctx.emailFormControl.hasError("required"));
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", ctx.emailFormControl.hasError("required"));
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlDirective, i4__namespace.NgIf, i2__namespace.MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputErrorsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-errors-example',
                        templateUrl: 'input-errors-example.html',
                        styleUrls: ['input-errors-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Inputs in a form
     */
    var InputFormExample = /** @class */ (function () {
        function InputFormExample() {
        }
        return InputFormExample;
    }());
    InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
    InputFormExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Company (disabled)");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "table", 3);
                i0__namespace.ɵɵelementStart(6, "tr");
                i0__namespace.ɵɵelementStart(7, "td");
                i0__namespace.ɵɵelementStart(8, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(9, "mat-label");
                i0__namespace.ɵɵtext(10, "First name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(11, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "td");
                i0__namespace.ɵɵelementStart(13, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(14, "mat-label");
                i0__namespace.ɵɵtext(15, "Long Last Name That Will Be Truncated");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(16, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "p");
                i0__namespace.ɵɵelementStart(18, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(19, "mat-label");
                i0__namespace.ɵɵtext(20, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "textarea", 5);
                i0__namespace.ɵɵtext(22, "1600 Amphitheatre Pkwy");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(24, "mat-label");
                i0__namespace.ɵɵtext(25, "Address 2");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(26, "textarea", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "table", 3);
                i0__namespace.ɵɵelementStart(28, "tr");
                i0__namespace.ɵɵelementStart(29, "td");
                i0__namespace.ɵɵelementStart(30, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(31, "mat-label");
                i0__namespace.ɵɵtext(32, "City");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(33, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "td");
                i0__namespace.ɵɵelementStart(35, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(36, "mat-label");
                i0__namespace.ɵɵtext(37, "State");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(38, "input", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(39, "td");
                i0__namespace.ɵɵelementStart(40, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(41, "mat-label");
                i0__namespace.ɵɵtext(42, "Postal Code");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(43, "input", 8, 9);
                i0__namespace.ɵɵelementStart(45, "mat-hint", 10);
                i0__namespace.ɵɵtext(46);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(44);
                i0__namespace.ɵɵadvance(46);
                i0__namespace.ɵɵtextInterpolate1("", _r0.value.length, " / 5");
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i2__namespace.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputFormExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-form-example',
                        templateUrl: 'input-form-example.html',
                        styleUrls: ['input-form-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Input with hints
     */
    var InputHintExample = /** @class */ (function () {
        function InputHintExample() {
        }
        return InputHintExample;
    }());
    InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
    InputHintExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Message");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2, 3);
                i0__namespace.ɵɵelementStart(6, "mat-hint", 4);
                i0__namespace.ɵɵelementStart(7, "strong");
                i0__namespace.ɵɵtext(8, "Don't disclose personal info");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-hint", 5);
                i0__namespace.ɵɵtext(10);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(5);
                i0__namespace.ɵɵadvance(10);
                i0__namespace.ɵɵtextInterpolate1("", _r0.value.length, " / 256");
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput, i2__namespace.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputHintExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-hint-example',
                        templateUrl: 'input-hint-example.html',
                        styleUrls: ['input-hint-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic Inputs
     */
    var InputOverviewExample = /** @class */ (function () {
        function InputOverviewExample() {
        }
        return InputOverviewExample;
    }());
    InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
    InputOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."]], template: function InputOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Favorite food");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(4, "input", 2);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Leave a comment");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "textarea", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-overview-example',
                        styleUrls: ['input-overview-example.css'],
                        templateUrl: 'input-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Inputs with prefixes and suffixes
     */
    var InputPrefixSuffixExample = /** @class */ (function () {
        function InputPrefixSuffixExample() {
        }
        return InputPrefixSuffixExample;
    }());
    InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
    InputPrefixSuffixExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "form", 0);
                i0__namespace.ɵɵelementStart(1, "mat-form-field", 1);
                i0__namespace.ɵɵelementStart(2, "mat-label");
                i0__namespace.ɵɵtext(3, "Telephone");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "span", 2);
                i0__namespace.ɵɵtext(5, "+1 \u00A0");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(6, "input", 3);
                i0__namespace.ɵɵelementStart(7, "mat-icon", 4);
                i0__namespace.ɵɵtext(8, "mode_edit");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.NgForm, i2__namespace.MatFormField, i2__namespace.MatLabel, i2__namespace.MatPrefix, i3__namespace.MatInput, i6__namespace.MatIcon, i2__namespace.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputPrefixSuffixExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-prefix-suffix-example',
                        templateUrl: 'input-prefix-suffix-example.html',
                        styleUrls: ['input-prefix-suffix-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatInputHarness
     */
    var InputHarnessExample = /** @class */ (function () {
        function InputHarnessExample() {
            this.inputType = 'number';
            this.disabled = false;
        }
        return InputHarnessExample;
    }());
    InputHarnessExample.ɵfac = function InputHarnessExample_Factory(t) { return new (t || InputHarnessExample)(); };
    InputHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: InputHarnessExample, selectors: [["input-harness-example"]], decls: 10, vars: 2, consts: [["matInput", "", "value", "Sushi", "name", "favorite-food"], ["matInput", "", 3, "type", "disabled"], ["matInput", ""]], template: function InputHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-form-field");
                i0__namespace.ɵɵelementStart(1, "mat-label");
                i0__namespace.ɵɵtext(2, "Favorite food");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(3, "input", 0);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-form-field");
                i0__namespace.ɵɵelement(5, "input", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-form-field");
                i0__namespace.ɵɵelementStart(7, "mat-label");
                i0__namespace.ɵɵtext(8, "Leave a comment");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(9, "textarea", 2);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("type", ctx.inputType)("disabled", ctx.disabled);
            }
        }, directives: [i2__namespace.MatFormField, i2__namespace.MatLabel, i3__namespace.MatInput], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'input-harness-example',
                        templateUrl: 'input-harness-example.html'
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample,
    ];
    var InputExamplesModule = /** @class */ (function () {
        function InputExamplesModule() {
        }
        return InputExamplesModule;
    }());
    InputExamplesModule.ɵfac = function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); };
    InputExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: InputExamplesModule });
    InputExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i4.CommonModule,
                i5.MatButtonModule,
                i6.MatIconModule,
                i3.MatInputModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(InputExamplesModule, [{
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
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
                InputErrorStateMatcherExample,
                InputErrorsExample,
                InputFormExample,
                InputHarnessExample,
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
                InputHarnessExample,
                InputHintExample,
                InputOverviewExample,
                InputPrefixSuffixExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.InputClearableExample = InputClearableExample;
    exports.InputErrorStateMatcherExample = InputErrorStateMatcherExample;
    exports.InputErrorsExample = InputErrorsExample;
    exports.InputExamplesModule = InputExamplesModule;
    exports.InputFormExample = InputFormExample;
    exports.InputHarnessExample = InputHarnessExample;
    exports.InputHintExample = InputHintExample;
    exports.InputOverviewExample = InputOverviewExample;
    exports.InputPrefixSuffixExample = InputPrefixSuffixExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-input.umd.js.map
