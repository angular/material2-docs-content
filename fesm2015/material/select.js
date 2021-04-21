import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, ViewEncapsulation, NgModule } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormControl, Validators, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i6 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4$1 from '@angular/material/core';

function SelectCustomTriggerExample_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
} }
function SelectCustomTriggerExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r2);
} }
/** @title Select with custom trigger text */
class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
SelectCustomTriggerExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 8, vars: 4, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Toppings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵelementStart(4, "mat-select-trigger");
        i0.ɵɵtext(5);
        i0.ɵɵtemplate(6, SelectCustomTriggerExample_span_6_Template, 2, 2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SelectCustomTriggerExample_mat_option_7_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i2.MatSelectTrigger, i4.NgIf, i4.NgForOf, i4$1.MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectCustomTriggerExample, [{
        type: Component,
        args: [{
                selector: 'select-custom-trigger-example',
                templateUrl: 'select-custom-trigger-example.html',
                styleUrls: ['select-custom-trigger-example.css'],
            }]
    }], null, null); })();

/** @title Disabled select */
class SelectDisabledExample {
    constructor() {
        this.disableSelect = new FormControl(false);
    }
}
SelectDisabledExample.ɵfac = function SelectDisabledExample_Factory(t) { return new (t || SelectDisabledExample)(); };
SelectDisabledExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], ["appearance", "fill"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "mat-checkbox", 0);
        i0.ɵɵtext(2, "Disable select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "h4");
        i0.ɵɵtext(4, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-form-field", 1);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Choose an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-select", 2);
        i0.ɵɵelementStart(9, "mat-option", 3);
        i0.ɵɵtext(10, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-option", 4);
        i0.ɵɵtext(12, "Option 2 (disabled)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-option", 5);
        i0.ɵɵtext(14, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "h4");
        i0.ɵɵtext(16, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field", 1);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Choose an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "select", 6);
        i0.ɵɵelement(21, "option", 7);
        i0.ɵɵelementStart(22, "option", 8);
        i0.ɵɵtext(23, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "option", 9);
        i0.ɵɵtext(25, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "option", 10);
        i0.ɵɵtext(27, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "option", 11);
        i0.ɵɵtext(29, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.disableSelect);
        i0.ɵɵadvance(7);
        i0.ɵɵproperty("disabled", ctx.disableSelect.value);
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("disabled", ctx.disableSelect.value);
    } }, directives: [i1$1.MatCheckbox, i3.NgControlStatus, i3.FormControlDirective, i1.MatFormField, i1.MatLabel, i2.MatSelect, i4$1.MatOption, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
            }]
    }], null, null); })();

function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Select with a custom ErrorStateMatcher */
class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.selectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
SelectErrorStateMatcherExample.ɵfac = function SelectErrorStateMatcherExample_Factory(t) { return new (t || SelectErrorStateMatcherExample)(); };
SelectErrorStateMatcherExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [["appearance", "fill"], [3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], ["appearance", "fill", 1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "Clear");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 2);
        i0.ɵɵtext(9, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-hint");
        i0.ɵɵtext(13, "Errors appear instantly!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(14, SelectErrorStateMatcherExample_mat_error_14_Template, 2, 0, "mat-error", 4);
        i0.ɵɵtemplate(15, SelectErrorStateMatcherExample_mat_error_15_Template, 2, 0, "mat-error", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "h4");
        i0.ɵɵtext(17, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field", 5);
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Choose one");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "select", 6);
        i0.ɵɵelement(22, "option", 7);
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Valid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "option", 3);
        i0.ɵɵtext(26, "Invalid option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, SelectErrorStateMatcherExample_mat_error_27_Template, 2, 0, "mat-error", 4);
        i0.ɵɵtemplate(28, SelectErrorStateMatcherExample_mat_error_28_Template, 2, 0, "mat-error", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.nativeSelectFormControl)("errorStateMatcher", ctx.matcher);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("required"));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("pattern") && !ctx.nativeSelectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i1.MatHint, i4.NgIf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba, i1.MatError], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
            }]
    }], null, null); })();

function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
} }
/**
 * @title Select in a form
 */
class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
}
SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
SelectFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 0);
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 1);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
        i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 3);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
        i0.ɵɵelement(16, "option", 4);
        i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedCar);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
    } }, directives: [i3.ɵangular_packages_forms_forms_bb, i3.NgControlStatusGroup, i3.NgForm, i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
            }]
    }], null, null); })();

function SelectHintErrorExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const animal_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", animal_r3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", animal_r3.name, " ");
} }
function SelectHintErrorExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "Please choose an animal");
    i0.ɵɵelementEnd();
} }
function SelectHintErrorExample_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " This field is required ");
    i0.ɵɵelementEnd();
} }
/** @title Select with form field features */
class SelectHintErrorExample {
    constructor() {
        this.animalControl = new FormControl('', Validators.required);
        this.selectFormControl = new FormControl('', Validators.required);
        this.animals = [
            { name: 'Dog', sound: 'Woof!' },
            { name: 'Cat', sound: 'Meow!' },
            { name: 'Cow', sound: 'Moo!' },
            { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
        ];
    }
}
SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
SelectHintErrorExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["appearance", "fill"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite animal");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "--");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(10, "mat-hint");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "h4");
        i0.ɵɵtext(13, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 0);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Select your car (required)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 4);
        i0.ɵɵelement(18, "option", 5);
        i0.ɵɵelementStart(19, "option", 6);
        i0.ɵɵtext(20, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "option", 7);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 8);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 3);
        i0.ɵɵelementStart(26, "mat-hint");
        i0.ɵɵtext(27, "You can pick up your favorite car here");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.animalControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.animals);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.selectFormControl);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i4.NgIf, i1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba, i1.MatError], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
            }]
    }], null, null); })();

function SelectMultipleExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r1);
} }
/** @title Select with multiple selection */
class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.ɵfac = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
SelectMultipleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Toppings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵtemplate(4, SelectMultipleExample_mat_option_4_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectMultipleExample, [{
        type: Component,
        args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
            }]
    }], null, null); })();

/** @title Select with no option ripple */
class SelectNoRippleExample {
}
SelectNoRippleExample.ɵfac = function SelectNoRippleExample_Factory(t) { return new (t || SelectNoRippleExample)(); };
SelectNoRippleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectNoRippleExample, selectors: [["select-no-ripple-example"]], decls: 10, vars: 0, consts: [["appearance", "fill"], ["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function SelectNoRippleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Select an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵelementStart(4, "mat-option", 2);
        i0.ɵɵtext(5, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 3);
        i0.ɵɵtext(7, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 4);
        i0.ɵɵtext(9, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectNoRippleExample, [{
        type: Component,
        args: [{
                selector: 'select-no-ripple-example',
                templateUrl: 'select-no-ripple-example.html',
            }]
    }], null, null); })();

function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pokemon_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", pokemon_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", pokemon_r3.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-optgroup", 10);
    i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    i0.ɵɵproperty("label", group_r1.name)("disabled", group_r1.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", group_r1.pokemon);
} }
/** @title Select with option groups */
class SelectOptgroupExample {
    constructor() {
        this.pokemonControl = new FormControl();
        this.pokemonGroups = [
            {
                name: 'Grass',
                pokemon: [
                    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                    { value: 'oddish-1', viewValue: 'Oddish' },
                    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                ]
            },
            {
                name: 'Water',
                pokemon: [
                    { value: 'squirtle-3', viewValue: 'Squirtle' },
                    { value: 'psyduck-4', viewValue: 'Psyduck' },
                    { value: 'horsea-5', viewValue: 'Horsea' }
                ]
            },
            {
                name: 'Fire',
                disabled: true,
                pokemon: [
                    { value: 'charmander-6', viewValue: 'Charmander' },
                    { value: 'vulpix-7', viewValue: 'Vulpix' },
                    { value: 'flareon-8', viewValue: 'Flareon' }
                ]
            },
            {
                name: 'Psychic',
                pokemon: [
                    { value: 'mew-9', viewValue: 'Mew' },
                    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                ]
            }
        ];
    }
}
SelectOptgroupExample.ɵfac = function SelectOptgroupExample_Factory(t) { return new (t || SelectOptgroupExample)(); };
SelectOptgroupExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [["appearance", "fill"], [3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Pokemon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "-- None --");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 0);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 3);
        i0.ɵɵelementStart(15, "optgroup", 4);
        i0.ɵɵelementStart(16, "option", 5);
        i0.ɵɵtext(17, "volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 6);
        i0.ɵɵtext(19, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "optgroup", 7);
        i0.ɵɵelementStart(21, "option", 8);
        i0.ɵɵtext(22, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "option", 9);
        i0.ɵɵtext(24, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("formControl", ctx.pokemonControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.pokemonGroups);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba, i4$1.MatOptgroup], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
            }]
    }], null, null); })();

function SelectOverviewExample_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
} }
/**
 * @title Basic select
 */
class SelectOverviewExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectOverviewExample.ɵfac = function SelectOverviewExample_Factory(t) { return new (t || SelectOverviewExample)(); };
SelectOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 21, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "Basic mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select");
        i0.ɵɵtemplate(6, SelectOverviewExample_mat_option_6_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "h4");
        i0.ɵɵtext(8, "Basic native select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-form-field", 0);
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "Cars");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "select", 2);
        i0.ɵɵelementStart(13, "option", 3);
        i0.ɵɵtext(14, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "option", 4);
        i0.ɵɵtext(16, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "option", 5);
        i0.ɵɵtext(18, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "option", 6);
        i0.ɵɵtext(20, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectOverviewExample, [{
        type: Component,
        args: [{
                selector: 'select-overview-example',
                templateUrl: 'select-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title Select with custom panel styling
 */
class SelectPanelClassExample {
    constructor() {
        this.panelColor = new FormControl('red');
    }
}
SelectPanelClassExample.ɵfac = function SelectPanelClassExample_Factory(t) { return new (t || SelectPanelClassExample)(); };
SelectPanelClassExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [["appearance", "fill"], [3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Panel color");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵelementStart(4, "mat-option", 2);
        i0.ɵɵtext(5, "Red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 3);
        i0.ɵɵtext(7, "Green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 4);
        i0.ɵɵtext(9, "Blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
        i0.ɵɵproperty("formControl", ctx.panelColor);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectPanelClassExample, [{
        type: Component,
        args: [{
                selector: 'select-panel-class-example',
                templateUrl: 'select-panel-class-example.html',
                styleUrls: ['select-panel-class-example.css'],
                // Encapsulation has to be disabled in order for the
                // component style to apply to the select panel.
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();

function SelectResetExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", state_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(state_r1);
} }
/** @title Select with reset option */
class SelectResetExample {
    constructor() {
        this.states = [
            'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
            'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
            'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
            'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
            'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
            'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
            'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ];
    }
}
SelectResetExample.ɵfac = function SelectResetExample_Factory(t) { return new (t || SelectResetExample)(); };
SelectResetExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "State");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select");
        i0.ɵɵelementStart(6, "mat-option");
        i0.ɵɵtext(7, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h4");
        i0.ɵɵtext(10, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-form-field", 0);
        i0.ɵɵelementStart(12, "mat-label");
        i0.ɵɵtext(13, "Select your car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "select", 2);
        i0.ɵɵelement(15, "option", 3);
        i0.ɵɵelementStart(16, "option", 4);
        i0.ɵɵtext(17, "Volvo");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "Saab");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "option", 6);
        i0.ɵɵtext(21, "Mercedes");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "option", 7);
        i0.ɵɵtext(23, "Audi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.states);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectResetExample, [{
        type: Component,
        args: [{
                selector: 'select-reset-example',
                templateUrl: 'select-reset-example.html',
            }]
    }], null, null); })();

/** @title Select with 2-way value binding */
class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.ɵfac = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
SelectValueBindingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [["appearance", "fill"], [3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Select an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementStart(4, "mat-option");
        i0.ɵɵtext(5, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 2);
        i0.ɵɵtext(7, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 3);
        i0.ɵɵtext(9, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 4);
        i0.ɵɵtext(11, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.selected);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
            }]
    }], null, null); })();

function SelectReactiveFormExample_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectReactiveFormExample_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
} }
/**
 * @title Select in a reactive form
 */
class SelectReactiveFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl
        });
    }
}
SelectReactiveFormExample.ɵfac = function SelectReactiveFormExample_Factory(t) { return new (t || SelectReactiveFormExample)(); };
SelectReactiveFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["appearance", "fill"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 1);
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite Food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 2);
        i0.ɵɵelementStart(7, "mat-option");
        i0.ɵɵtext(8, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, SelectReactiveFormExample_mat_option_9_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "h4");
        i0.ɵɵtext(13, "Native select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 1);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Favorite Car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 4);
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, SelectReactiveFormExample_option_20_Template, 2, 2, "option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.foodControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Selected: ", ctx.foodControl.value, "");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.carControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Selected: ", ctx.carControl.value, "");
    } }, directives: [i3.ɵangular_packages_forms_forms_bb, i3.NgControlStatusGroup, i3.FormGroupDirective, i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectReactiveFormExample, [{
        type: Component,
        args: [{
                selector: 'select-reactive-form-example',
                templateUrl: 'select-reactive-form-example.html',
            }]
    }], function () { return []; }, null); })();

function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r3.value)("selected", ctx_r1.selectedCar === option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.viewValue);
} }
/**
 * @title Basic select with initial value and no form
 */
class SelectInitialValueExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'ford', viewValue: 'Ford' },
            { value: 'chevrolet', viewValue: 'Chevrolet' },
            { value: 'dodge', viewValue: 'Dodge' }
        ];
        this.selectedFood = this.foods[2].value;
        this.selectedCar = this.cars[0].value;
    }
    selectCar(event) {
        this.selectedCar = event.target.value;
    }
}
SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
SelectInitialValueExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "Basic mat-select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite Food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
        i0.ɵɵelement(6, "mat-option");
        i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "Basic native select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite Car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 3);
        i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
        i0.ɵɵelement(16, "option", 4);
        i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("value", ctx.selectedFood);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedFood, "");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedCar, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_ba], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
            }]
    }], null, null); })();

function SelectHarnessExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r1.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
} }
/**
 * @title Testing with MatSelectHarness
 */
class SelectHarnessExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
}
SelectHarnessExample.ɵfac = function SelectHarnessExample_Factory(t) { return new (t || SelectHarnessExample)(); };
SelectHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectHarnessExample, selectors: [["select-harness-example"]], decls: 5, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select");
        i0.ɵɵtemplate(4, SelectHarnessExample_mat_option_4_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i4.NgForOf, i4$1.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectHarnessExample, [{
        type: Component,
        args: [{
                selector: 'select-harness-example',
                templateUrl: 'select-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHarnessExample,
    SelectHintErrorExample,
    SelectInitialValueExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectReactiveFormExample,
    SelectResetExample,
    SelectValueBindingExample,
];
class SelectExamplesModule {
}
SelectExamplesModule.ɵfac = function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); };
SelectExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SelectExamplesModule });
SelectExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            FormsModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule,
            MatFormFieldModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSelectModule,
                    ReactiveFormsModule,
                    MatFormFieldModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectExamplesModule, { declarations: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHarnessExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample], imports: [CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatFormFieldModule], exports: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHarnessExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectExamplesModule, SelectFormExample, SelectHarnessExample, SelectHintErrorExample, SelectInitialValueExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectReactiveFormExample, SelectResetExample, SelectValueBindingExample };
//# sourceMappingURL=select.js.map
