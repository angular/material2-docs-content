import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineComponent, ɵɵtemplate, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵelement, ɵɵreference, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormControl, Validators, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, FormControlDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel, MatSuffix, MatHint, MatError, MatPrefix } from '@angular/material/form-field';

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-clearable/input-clearable-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@title Input with a clear button
 */
let InputClearableExample = /** @class */ (() => {
    /**
     * \@title Input with a clear button
     */
    class InputClearableExample {
        constructor() {
            this.value = 'Clear me';
        }
    }
    InputClearableExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-clearable-example',
                    templateUrl: './input-clearable-example.html',
                    styleUrls: ['./input-clearable-example.css'],
                },] },
    ];
    /** @nocollapse */ InputClearableExample.ɵfac = function InputClearableExample_Factory(t) { return new (t || InputClearableExample)(); };
    /** @nocollapse */ InputClearableExample.ɵcmp = ɵɵdefineComponent({ type: InputClearableExample, selectors: [["input-clearable-example"]], decls: 5, vars: 2, consts: [[1, "example-form-field"], ["matInput", "", "type", "text", 3, "ngModel", "ngModelChange"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"]], template: function InputClearableExample_Template(rf, ctx) { if (rf & 1) {
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
    return InputClearableExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputClearableExample, [{
        type: Component,
        args: [{
                selector: 'input-clearable-example',
                templateUrl: './input-clearable-example.html',
                styleUrls: ['./input-clearable-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputClearableExample.prototype.value;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-error-state-matcher/input-error-state-matcher-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * Error when invalid control is dirty, touched, or submitted.
 */
class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/**
 * \@title Input with a custom ErrorStateMatcher
 */
let InputErrorStateMatcherExample = /** @class */ (() => {
    /**
     * \@title Input with a custom ErrorStateMatcher
     */
    class InputErrorStateMatcherExample {
        constructor() {
            this.emailFormControl = new FormControl('', [
                Validators.required,
                Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
    }
    InputErrorStateMatcherExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-error-state-matcher-example',
                    templateUrl: './input-error-state-matcher-example.html',
                    styleUrls: ['./input-error-state-matcher-example.css'],
                },] },
    ];
    /** @nocollapse */ InputErrorStateMatcherExample.ɵfac = function InputErrorStateMatcherExample_Factory(t) { return new (t || InputErrorStateMatcherExample)(); };
    /** @nocollapse */ InputErrorStateMatcherExample.ɵcmp = ɵɵdefineComponent({ type: InputErrorStateMatcherExample, selectors: [["input-error-state-matcher-example"]], decls: 9, vars: 4, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl", "errorStateMatcher"], [4, "ngIf"]], template: function InputErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, MatHint, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputErrorStateMatcherExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'input-error-state-matcher-example',
                templateUrl: './input-error-state-matcher-example.html',
                styleUrls: ['./input-error-state-matcher-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.emailFormControl;
    /** @type {?} */
    InputErrorStateMatcherExample.prototype.matcher;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-errors/input-errors-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
 * \@title Input with error messages
 */
let InputErrorsExample = /** @class */ (() => {
    /**
     * \@title Input with error messages
     */
    class InputErrorsExample {
        constructor() {
            this.emailFormControl = new FormControl('', [
                Validators.required,
                Validators.email,
            ]);
        }
    }
    InputErrorsExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-errors-example',
                    templateUrl: 'input-errors-example.html',
                    styleUrls: ['input-errors-example.css'],
                },] },
    ];
    /** @nocollapse */ InputErrorsExample.ɵfac = function InputErrorsExample_Factory(t) { return new (t || InputErrorsExample)(); };
    /** @nocollapse */ InputErrorsExample.ɵcmp = ɵɵdefineComponent({ type: InputErrorsExample, selectors: [["input-errors-example"]], decls: 7, vars: 3, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. pat@example.com", 3, "formControl"], [4, "ngIf"]], template: function InputErrorsExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlDirective, NgIf, MatError], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputErrorsExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputErrorsExample, [{
        type: Component,
        args: [{
                selector: 'input-errors-example',
                templateUrl: 'input-errors-example.html',
                styleUrls: ['input-errors-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    InputErrorsExample.prototype.emailFormControl;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-form/input-form-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs in a form
 */
let InputFormExample = /** @class */ (() => {
    /**
     * \@title Inputs in a form
     */
    class InputFormExample {
    }
    InputFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-form-example',
                    templateUrl: 'input-form-example.html',
                    styleUrls: ['input-form-example.css'],
                },] },
    ];
    /** @nocollapse */ InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
    /** @nocollapse */ InputFormExample.ɵcmp = ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    return InputFormExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-hint/input-hint-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Input with hints
 */
let InputHintExample = /** @class */ (() => {
    /**
     * \@title Input with hints
     */
    class InputHintExample {
    }
    InputHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-hint-example',
                    templateUrl: 'input-hint-example.html',
                    styleUrls: ['input-hint-example.css'],
                },] },
    ];
    /** @nocollapse */ InputHintExample.ɵfac = function InputHintExample_Factory(t) { return new (t || InputHintExample)(); };
    /** @nocollapse */ InputHintExample.ɵcmp = ɵɵdefineComponent({ type: InputHintExample, selectors: [["input-hint-example"]], decls: 11, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "maxlength", "256", "placeholder", "Ex. I need help with..."], ["message", ""], ["align", "start"], ["align", "end"]], template: function InputHintExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput, MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputHintExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputHintExample, [{
        type: Component,
        args: [{
                selector: 'input-hint-example',
                templateUrl: 'input-hint-example.html',
                styleUrls: ['input-hint-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-overview/input-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Basic Inputs
 */
let InputOverviewExample = /** @class */ (() => {
    /**
     * \@title Basic Inputs
     */
    class InputOverviewExample {
    }
    InputOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-overview-example',
                    styleUrls: ['input-overview-example.css'],
                    templateUrl: 'input-overview-example.html',
                },] },
    ];
    /** @nocollapse */ InputOverviewExample.ɵfac = function InputOverviewExample_Factory(t) { return new (t || InputOverviewExample)(); };
    /** @nocollapse */ InputOverviewExample.ɵcmp = ɵɵdefineComponent({ type: InputOverviewExample, selectors: [["input-overview-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Ex. Pizza", "value", "Sushi"], ["matInput", "", "placeholder", "Ex. It makes me feel..."]], template: function InputOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatInput], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputOverviewExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputOverviewExample, [{
        type: Component,
        args: [{
                selector: 'input-overview-example',
                styleUrls: ['input-overview-example.css'],
                templateUrl: 'input-overview-example.html',
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-prefix-suffix/input-prefix-suffix-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * \@title Inputs with prefixes and suffixes
 */
let InputPrefixSuffixExample = /** @class */ (() => {
    /**
     * \@title Inputs with prefixes and suffixes
     */
    class InputPrefixSuffixExample {
    }
    InputPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    templateUrl: 'input-prefix-suffix-example.html',
                    styleUrls: ['input-prefix-suffix-example.css'],
                },] },
    ];
    /** @nocollapse */ InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
    /** @nocollapse */ InputPrefixSuffixExample.ɵcmp = ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatPrefix, MatInput, MatIcon, MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputPrefixSuffixExample;
})();
/*@__PURE__*/ (function () { ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
let InputExamplesModule = /** @class */ (() => {
    class InputExamplesModule {
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
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ InputExamplesModule.ɵmod = ɵɵdefineNgModule({ type: InputExamplesModule });
    /** @nocollapse */ InputExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return InputExamplesModule;
})();
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputExamplesModule, InputFormExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample };
//# sourceMappingURL=input.js.map
