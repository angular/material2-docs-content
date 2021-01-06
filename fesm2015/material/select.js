import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵadvance, ɵɵtextInterpolate2, ɵɵproperty, ɵɵtextInterpolate, ɵɵdefineComponent, ɵɵtemplate, ɵɵtextInterpolate1, ɵsetClassMetadata, Component, ɵɵelement, ɵɵlistener, ɵɵpropertyInterpolate1, ViewEncapsulation, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { FormControl, NgControlStatus, FormControlDirective, NgSelectOption, ɵangular_packages_forms_forms_x, Validators, SelectControlValueAccessor, ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, NgModel, RequiredValidator, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectTrigger, MatSelectModule } from '@angular/material/select';
import { MatFormField, MatLabel, MatHint, MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatOption, MatOptgroup } from '@angular/material/core';

function SelectCustomTriggerExample_span_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
} }
function SelectCustomTriggerExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const topping_r2 = ctx.$implicit;
    ɵɵproperty("value", topping_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate(topping_r2);
} }
/** @title Select with custom trigger text */
class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
SelectCustomTriggerExample.ɵcmp = ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 8, vars: 4, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Toppings");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 1);
        ɵɵelementStart(4, "mat-select-trigger");
        ɵɵtext(5);
        ɵɵtemplate(6, SelectCustomTriggerExample_span_6_Template, 2, 2, "span", 2);
        ɵɵelementEnd();
        ɵɵtemplate(7, SelectCustomTriggerExample_mat_option_7_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.toppings);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatSelectTrigger, NgIf, NgForOf, MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectCustomTriggerExample, [{
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
SelectDisabledExample.ɵcmp = ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], ["appearance", "fill"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵelementStart(1, "mat-checkbox", 0);
        ɵɵtext(2, "Disable select");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(3, "h4");
        ɵɵtext(4, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-form-field", 1);
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Choose an option");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-select", 2);
        ɵɵelementStart(9, "mat-option", 3);
        ɵɵtext(10, "Option 1");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-option", 4);
        ɵɵtext(12, "Option 2 (disabled)");
        ɵɵelementEnd();
        ɵɵelementStart(13, "mat-option", 5);
        ɵɵtext(14, "Option 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(15, "h4");
        ɵɵtext(16, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-form-field", 1);
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Choose an option");
        ɵɵelementEnd();
        ɵɵelementStart(20, "select", 6);
        ɵɵelement(21, "option", 7);
        ɵɵelementStart(22, "option", 8);
        ɵɵtext(23, "Volvo");
        ɵɵelementEnd();
        ɵɵelementStart(24, "option", 9);
        ɵɵtext(25, "Saab");
        ɵɵelementEnd();
        ɵɵelementStart(26, "option", 10);
        ɵɵtext(27, "Mercedes");
        ɵɵelementEnd();
        ɵɵelementStart(28, "option", 11);
        ɵɵtext(29, "Audi");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("formControl", ctx.disableSelect);
        ɵɵadvance(7);
        ɵɵproperty("disabled", ctx.disableSelect.value);
        ɵɵadvance(12);
        ɵɵproperty("disabled", ctx.disableSelect.value);
    } }, directives: [MatCheckbox, NgControlStatus, FormControlDirective, MatFormField, MatLabel, MatSelect, MatOption, MatInput, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
            }]
    }], null, null); })();

function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "You must make a selection");
    ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Your selection is invalid ");
    ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "You must make a selection");
    ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " Your selection is invalid ");
    ɵɵelementEnd();
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
SelectErrorStateMatcherExample.ɵcmp = ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [["appearance", "fill"], [3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], ["appearance", "fill", 1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "Choose one");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select", 1);
        ɵɵelementStart(6, "mat-option");
        ɵɵtext(7, "Clear");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-option", 2);
        ɵɵtext(9, "Valid option");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-option", 3);
        ɵɵtext(11, "Invalid option");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-hint");
        ɵɵtext(13, "Errors appear instantly!");
        ɵɵelementEnd();
        ɵɵtemplate(14, SelectErrorStateMatcherExample_mat_error_14_Template, 2, 0, "mat-error", 4);
        ɵɵtemplate(15, SelectErrorStateMatcherExample_mat_error_15_Template, 2, 0, "mat-error", 4);
        ɵɵelementEnd();
        ɵɵelementStart(16, "h4");
        ɵɵtext(17, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(18, "mat-form-field", 5);
        ɵɵelementStart(19, "mat-label");
        ɵɵtext(20, "Choose one");
        ɵɵelementEnd();
        ɵɵelementStart(21, "select", 6);
        ɵɵelement(22, "option", 7);
        ɵɵelementStart(23, "option", 8);
        ɵɵtext(24, "Valid option");
        ɵɵelementEnd();
        ɵɵelementStart(25, "option", 3);
        ɵɵtext(26, "Invalid option");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(27, SelectErrorStateMatcherExample_mat_error_27_Template, 2, 0, "mat-error", 4);
        ɵɵtemplate(28, SelectErrorStateMatcherExample_mat_error_28_Template, 2, 0, "mat-error", 4);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);
        ɵɵadvance(9);
        ɵɵproperty("ngIf", ctx.selected.hasError("required"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));
        ɵɵadvance(6);
        ɵɵproperty("formControl", ctx.nativeSelectFormControl)("errorStateMatcher", ctx.matcher);
        ɵɵadvance(6);
        ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("required"));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("pattern") && !ctx.nativeSelectFormControl.hasError("required"));
    } }, directives: [MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatOption, MatHint, NgIf, MatInput, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, MatError], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
            }]
    }], null, null); })();

function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    ɵɵproperty("value", food_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 5);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    ɵɵproperty("value", car_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
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
SelectFormExample.ɵcmp = ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form");
        ɵɵelementStart(1, "h4");
        ɵɵtext(2, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field", 0);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Favorite food");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-select", 1);
        ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
        ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "p");
        ɵɵtext(9);
        ɵɵelementEnd();
        ɵɵelementStart(10, "h4");
        ɵɵtext(11, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field", 0);
        ɵɵelementStart(13, "mat-label");
        ɵɵtext(14, "Favorite car");
        ɵɵelementEnd();
        ɵɵelementStart(15, "select", 3);
        ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
        ɵɵelement(16, "option", 4);
        ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "p");
        ɵɵtext(19);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngModel", ctx.selectedValue);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.foods);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
        ɵɵadvance(6);
        ɵɵproperty("ngModel", ctx.selectedCar);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.cars);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, NgForm, MatFormField, MatLabel, MatSelect, NgControlStatus, NgModel, NgForOf, MatInput, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
            }]
    }], null, null); })();

function SelectHintErrorExample_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const animal_r3 = ctx.$implicit;
    ɵɵproperty("value", animal_r3);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", animal_r3.name, " ");
} }
function SelectHintErrorExample_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, "Please choose an animal");
    ɵɵelementEnd();
} }
function SelectHintErrorExample_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-error");
    ɵɵtext(1, " This field is required ");
    ɵɵelementEnd();
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
SelectHintErrorExample.ɵcmp = ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["appearance", "fill"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "mat select");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "Favorite animal");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select", 1);
        ɵɵelementStart(6, "mat-option");
        ɵɵtext(7, "--");
        ɵɵelementEnd();
        ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 2);
        ɵɵelementEnd();
        ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 3);
        ɵɵelementStart(10, "mat-hint");
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "h4");
        ɵɵtext(13, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-form-field", 0);
        ɵɵelementStart(15, "mat-label");
        ɵɵtext(16, "Select your car (required)");
        ɵɵelementEnd();
        ɵɵelementStart(17, "select", 4);
        ɵɵelement(18, "option", 5);
        ɵɵelementStart(19, "option", 6);
        ɵɵtext(20, "Saab");
        ɵɵelementEnd();
        ɵɵelementStart(21, "option", 7);
        ɵɵtext(22, "Mercedes");
        ɵɵelementEnd();
        ɵɵelementStart(23, "option", 8);
        ɵɵtext(24, "Audi");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 3);
        ɵɵelementStart(26, "mat-hint");
        ɵɵtext(27, "You can pick up your favorite car here");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("formControl", ctx.animalControl);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.animals);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
        ɵɵadvance(2);
        ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
        ɵɵadvance(6);
        ɵɵproperty("formControl", ctx.selectFormControl);
        ɵɵadvance(8);
        ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
    } }, directives: [MatFormField, MatLabel, MatSelect, RequiredValidator, NgControlStatus, FormControlDirective, MatOption, NgForOf, NgIf, MatHint, MatInput, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x, MatError], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectHintErrorExample, [{
        type: Component,
        args: [{
                selector: 'select-hint-error-example',
                templateUrl: 'select-hint-error-example.html',
            }]
    }], null, null); })();

function SelectMultipleExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const topping_r1 = ctx.$implicit;
    ɵɵproperty("value", topping_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(topping_r1);
} }
/** @title Select with multiple selection */
class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.ɵfac = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
SelectMultipleExample.ɵcmp = ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Toppings");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 1);
        ɵɵtemplate(4, SelectMultipleExample_mat_option_4_Template, 2, 2, "mat-option", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("formControl", ctx.toppings);
        ɵɵadvance(1);
        ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, NgForOf, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectMultipleExample, [{
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
SelectNoRippleExample.ɵcmp = ɵɵdefineComponent({ type: SelectNoRippleExample, selectors: [["select-no-ripple-example"]], decls: 10, vars: 0, consts: [["appearance", "fill"], ["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function SelectNoRippleExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Select an option");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 1);
        ɵɵelementStart(4, "mat-option", 2);
        ɵɵtext(5, "Option 1");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-option", 3);
        ɵɵtext(7, "Option 2");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-option", 4);
        ɵɵtext(9, "Option 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectNoRippleExample, [{
        type: Component,
        args: [{
                selector: 'select-no-ripple-example',
                templateUrl: 'select-no-ripple-example.html',
            }]
    }], null, null); })();

function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const pokemon_r3 = ctx.$implicit;
    ɵɵproperty("value", pokemon_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", pokemon_r3.viewValue, " ");
} }
function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-optgroup", 10);
    ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 11);
    ɵɵelementEnd();
} if (rf & 2) {
    const group_r1 = ctx.$implicit;
    ɵɵproperty("label", group_r1.name)("disabled", group_r1.disabled);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", group_r1.pokemon);
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
SelectOptgroupExample.ɵcmp = ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [["appearance", "fill"], [3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "Pokemon");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select", 1);
        ɵɵelementStart(6, "mat-option");
        ɵɵtext(7, "-- None --");
        ɵɵelementEnd();
        ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "h4");
        ɵɵtext(10, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-form-field", 0);
        ɵɵelementStart(12, "mat-label");
        ɵɵtext(13, "Cars");
        ɵɵelementEnd();
        ɵɵelementStart(14, "select", 3);
        ɵɵelementStart(15, "optgroup", 4);
        ɵɵelementStart(16, "option", 5);
        ɵɵtext(17, "volvo");
        ɵɵelementEnd();
        ɵɵelementStart(18, "option", 6);
        ɵɵtext(19, "Saab");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(20, "optgroup", 7);
        ɵɵelementStart(21, "option", 8);
        ɵɵtext(22, "Mercedes");
        ɵɵelementEnd();
        ɵɵelementStart(23, "option", 9);
        ɵɵtext(24, "Audi");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("formControl", ctx.pokemonControl);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.pokemonGroups);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatOption, NgForOf, MatInput, NgSelectOption, ɵangular_packages_forms_forms_x, MatOptgroup], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectOptgroupExample, [{
        type: Component,
        args: [{
                selector: 'select-optgroup-example',
                templateUrl: 'select-optgroup-example.html',
            }]
    }], null, null); })();

function SelectOverviewExample_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    ɵɵproperty("value", food_r1.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
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
SelectOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 21, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "Basic mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "Favorite food");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select");
        ɵɵtemplate(6, SelectOverviewExample_mat_option_6_Template, 2, 2, "mat-option", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(7, "h4");
        ɵɵtext(8, "Basic native select");
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-form-field", 0);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Cars");
        ɵɵelementEnd();
        ɵɵelementStart(12, "select", 2);
        ɵɵelementStart(13, "option", 3);
        ɵɵtext(14, "Volvo");
        ɵɵelementEnd();
        ɵɵelementStart(15, "option", 4);
        ɵɵtext(16, "Saab");
        ɵɵelementEnd();
        ɵɵelementStart(17, "option", 5);
        ɵɵtext(18, "Mercedes");
        ɵɵelementEnd();
        ɵɵelementStart(19, "option", 6);
        ɵɵtext(20, "Audi");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(6);
        ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgForOf, MatInput, NgSelectOption, ɵangular_packages_forms_forms_x, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectOverviewExample, [{
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
SelectPanelClassExample.ɵcmp = ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [["appearance", "fill"], [3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Panel color");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 1);
        ɵɵelementStart(4, "mat-option", 2);
        ɵɵtext(5, "Red");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-option", 3);
        ɵɵtext(7, "Green");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-option", 4);
        ɵɵtext(9, "Blue");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
        ɵɵproperty("formControl", ctx.panelColor);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectPanelClassExample, [{
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
    ɵɵelementStart(0, "mat-option", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const state_r1 = ctx.$implicit;
    ɵɵproperty("value", state_r1);
    ɵɵadvance(1);
    ɵɵtextInterpolate(state_r1);
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
SelectResetExample.ɵcmp = ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "State");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select");
        ɵɵelementStart(6, "mat-option");
        ɵɵtext(7, "None");
        ɵɵelementEnd();
        ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "h4");
        ɵɵtext(10, "native html select");
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-form-field", 0);
        ɵɵelementStart(12, "mat-label");
        ɵɵtext(13, "Select your car");
        ɵɵelementEnd();
        ɵɵelementStart(14, "select", 2);
        ɵɵelement(15, "option", 3);
        ɵɵelementStart(16, "option", 4);
        ɵɵtext(17, "Volvo");
        ɵɵelementEnd();
        ɵɵelementStart(18, "option", 5);
        ɵɵtext(19, "Saab");
        ɵɵelementEnd();
        ɵɵelementStart(20, "option", 6);
        ɵɵtext(21, "Mercedes");
        ɵɵelementEnd();
        ɵɵelementStart(22, "option", 7);
        ɵɵtext(23, "Audi");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(8);
        ɵɵproperty("ngForOf", ctx.states);
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, NgForOf, MatInput, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectResetExample, [{
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
SelectValueBindingExample.ɵcmp = ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [["appearance", "fill"], [3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Select an option");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select", 1);
        ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
        ɵɵelementStart(4, "mat-option");
        ɵɵtext(5, "None");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-option", 2);
        ɵɵtext(7, "Option 1");
        ɵɵelementEnd();
        ɵɵelementStart(8, "mat-option", 3);
        ɵɵtext(9, "Option 2");
        ɵɵelementEnd();
        ɵɵelementStart(10, "mat-option", 4);
        ɵɵtext(11, "Option 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "p");
        ɵɵtext(13);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("value", ctx.selected);
        ɵɵadvance(10);
        ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
            }]
    }], null, null); })();

function SelectReactiveFormExample_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    ɵɵproperty("value", food_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectReactiveFormExample_option_20_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    ɵɵproperty("value", car_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
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
SelectReactiveFormExample.ɵcmp = ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["appearance", "fill"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "form", 0);
        ɵɵelementStart(1, "h4");
        ɵɵtext(2, "mat-select");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-form-field", 1);
        ɵɵelementStart(4, "mat-label");
        ɵɵtext(5, "Favorite Food");
        ɵɵelementEnd();
        ɵɵelementStart(6, "mat-select", 2);
        ɵɵelementStart(7, "mat-option");
        ɵɵtext(8, "None");
        ɵɵelementEnd();
        ɵɵtemplate(9, SelectReactiveFormExample_mat_option_9_Template, 2, 2, "mat-option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(10, "p");
        ɵɵtext(11);
        ɵɵelementEnd();
        ɵɵelementStart(12, "h4");
        ɵɵtext(13, "Native select");
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-form-field", 1);
        ɵɵelementStart(15, "mat-label");
        ɵɵtext(16, "Favorite Car");
        ɵɵelementEnd();
        ɵɵelementStart(17, "select", 4);
        ɵɵelementStart(18, "option", 5);
        ɵɵtext(19, "None");
        ɵɵelementEnd();
        ɵɵtemplate(20, SelectReactiveFormExample_option_20_Template, 2, 2, "option", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "p");
        ɵɵtext(22);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.form);
        ɵɵadvance(6);
        ɵɵproperty("formControl", ctx.foodControl);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.foods);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Selected: ", ctx.foodControl.value, "");
        ɵɵadvance(6);
        ɵɵproperty("formControl", ctx.carControl);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.cars);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("Selected: ", ctx.carControl.value, "");
    } }, directives: [ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlDirective, MatOption, NgForOf, MatInput, SelectControlValueAccessor, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectReactiveFormExample, [{
        type: Component,
        args: [{
                selector: 'select-reactive-form-example',
                templateUrl: 'select-reactive-form-example.html',
            }]
    }], function () { return []; }, null); })();

function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 6);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    ɵɵproperty("value", option_r2.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r2.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", option_r3.value)("selected", ctx_r1.selectedCar === option_r3.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate(option_r3.viewValue);
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
SelectInitialValueExample.ɵcmp = ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "h4");
        ɵɵtext(1, "Basic mat-select with initial value");
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-form-field", 0);
        ɵɵelementStart(3, "mat-label");
        ɵɵtext(4, "Favorite Food");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-select", 1);
        ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
        ɵɵelement(6, "mat-option");
        ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(8, "p");
        ɵɵtext(9);
        ɵɵelementEnd();
        ɵɵelementStart(10, "h4");
        ɵɵtext(11, "Basic native select with initial value");
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-form-field", 0);
        ɵɵelementStart(13, "mat-label");
        ɵɵtext(14, "Favorite Car");
        ɵɵelementEnd();
        ɵɵelementStart(15, "select", 3);
        ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
        ɵɵelement(16, "option", 4);
        ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(18, "p");
        ɵɵtext(19);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(5);
        ɵɵproperty("value", ctx.selectedFood);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.foods);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("You selected: ", ctx.selectedFood, "");
        ɵɵadvance(8);
        ɵɵproperty("ngForOf", ctx.cars);
        ɵɵadvance(2);
        ɵɵtextInterpolate1("You selected: ", ctx.selectedCar, "");
    } }, directives: [MatFormField, MatLabel, MatSelect, MatOption, NgForOf, MatInput, NgSelectOption, ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
            }]
    }], null, null); })();

function SelectHarnessExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const food_r1 = ctx.$implicit;
    ɵɵproperty("value", food_r1.value);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
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
SelectHarnessExample.ɵcmp = ɵɵdefineComponent({ type: SelectHarnessExample, selectors: [["select-harness-example"]], decls: 5, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-form-field", 0);
        ɵɵelementStart(1, "mat-label");
        ɵɵtext(2, "Favorite food");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-select");
        ɵɵtemplate(4, SelectHarnessExample_mat_option_4_Template, 2, 2, "mat-option", 1);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.foods);
    } }, directives: [MatFormField, MatLabel, MatSelect, NgForOf, MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectHarnessExample, [{
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
SelectExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SelectExamplesModule });
SelectExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            ReactiveFormsModule,
            MatFormFieldModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SelectExamplesModule, { declarations: [SelectCustomTriggerExample,
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
/*@__PURE__*/ (function () { ɵsetClassMetadata(SelectExamplesModule, [{
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

/**
 * Generated bundle index. Do not edit.
 */

export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectExamplesModule, SelectFormExample, SelectHarnessExample, SelectHintErrorExample, SelectInitialValueExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectReactiveFormExample, SelectResetExample, SelectValueBindingExample };
//# sourceMappingURL=select.js.map
