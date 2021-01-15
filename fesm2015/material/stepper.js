import { ɵɵtext, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵelementEnd, ɵɵtemplate, ɵɵelement, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵProvidersFeature, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatHorizontalStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious, MatStepperIcon, MatVerticalStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with editable steps
 */
class StepperEditableExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperEditableExample.ɵcmp = ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener() { return ctx.isEditable = !ctx.isEditable; });
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
        ɵɵelementStart(4, "mat-step", 3);
        ɵɵelementStart(5, "form", 4);
        ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Name");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div");
        ɵɵelementStart(12, "button", 7);
        ɵɵtext(13, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-step", 3);
        ɵɵelementStart(15, "form", 4);
        ɵɵtemplate(16, StepperEditableExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(17, "mat-form-field");
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Address");
        ɵɵelementEnd();
        ɵɵelement(20, "input", 8);
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵelementStart(22, "button", 9);
        ɵɵtext(23, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 7);
        ɵɵtext(25, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(26, "mat-step");
        ɵɵtemplate(27, StepperEditableExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(28, "p");
        ɵɵtext(29, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(30, "div");
        ɵɵelementStart(31, "button", 9);
        ɵɵtext(32, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(33, "button", 10);
        ɵɵlistener("click", function StepperEditableExample_Template_button_click_33_listener() { ɵɵrestoreView(_r4); const _r0 = ɵɵreference(3); return _r0.reset(); });
        ɵɵtext(34, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
        ɵɵadvance(3);
        ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperEditableExample, [{
        type: Component,
        args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperErrorsExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperErrorsExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperErrorsExample_ng_template_29_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper that displays errors in the steps
 */
class StepperErrorsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperErrorsExample.ɵcmp = ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [ɵɵProvidersFeature([{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
            }])], decls: 37, vars: 4, consts: [["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Ex. 1 Main St, New York, NY", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
        ɵɵelementStart(2, "mat-step", 1);
        ɵɵelementStart(3, "form", 2);
        ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Name");
        ɵɵelementEnd();
        ɵɵelement(8, "input", 4);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "p");
        ɵɵtext(11, "Go to a different step to see the error state");
        ɵɵelementEnd();
        ɵɵelementStart(12, "button", 5);
        ɵɵtext(13, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-step", 6);
        ɵɵelementStart(15, "form", 2);
        ɵɵtemplate(16, StepperErrorsExample_ng_template_16_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(17, "mat-form-field");
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Address");
        ɵɵelementEnd();
        ɵɵelement(20, "input", 7);
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵelementStart(22, "p");
        ɵɵtext(23, "Go to a different step to see the error state");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 8);
        ɵɵtext(25, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(26, "button", 5);
        ɵɵtext(27, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(28, "mat-step");
        ɵɵtemplate(29, StepperErrorsExample_ng_template_29_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(30, "p");
        ɵɵtext(31, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(32, "div");
        ɵɵelementStart(33, "button", 8);
        ɵɵtext(34, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(35, "button", 9);
        ɵɵlistener("click", function StepperErrorsExample_Template_button_click_35_listener() { ɵɵrestoreView(_r4); const _r0 = ɵɵreference(1); return _r0.reset(); });
        ɵɵtext(36, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(11);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperErrorsExample, [{
        type: Component,
        args: [{
                selector: 'stepper-errors-example',
                templateUrl: 'stepper-errors-example.html',
                styleUrls: ['stepper-errors-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }]
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperLabelPositionBottomExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperLabelPositionBottomExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper label bottom position
 */
class StepperLabelPositionBottomExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperLabelPositionBottomExample.ɵcmp = ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 33, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
        ɵɵelementStart(2, "mat-step", 2);
        ɵɵelementStart(3, "form", 3);
        ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Name");
        ɵɵelementEnd();
        ɵɵelement(8, "input", 5);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "button", 6);
        ɵɵtext(11, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-step", 7);
        ɵɵelementStart(13, "form", 3);
        ɵɵtemplate(14, StepperLabelPositionBottomExample_ng_template_14_Template, 1, 0, "ng-template", 4);
        ɵɵelementStart(15, "mat-form-field");
        ɵɵelementStart(16, "mat-label");
        ɵɵtext(17, "Address");
        ɵɵelementEnd();
        ɵɵelement(18, "input", 8);
        ɵɵelementEnd();
        ɵɵelementStart(19, "div");
        ɵɵelementStart(20, "button", 9);
        ɵɵtext(21, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 6);
        ɵɵtext(23, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "mat-step");
        ɵɵtemplate(25, StepperLabelPositionBottomExample_ng_template_25_Template, 1, 0, "ng-template", 4);
        ɵɵelementStart(26, "p");
        ɵɵtext(27, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(28, "div");
        ɵɵelementStart(29, "button", 9);
        ɵɵtext(30, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(31, "button", 10);
        ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_31_listener() { ɵɵrestoreView(_r4); const _r0 = ɵɵreference(1); return _r0.reset(); });
        ɵɵtext(32, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
        type: Component,
        args: [{
                selector: 'stepper-label-position-bottom-example',
                templateUrl: 'stepper-label-position-bottom-example.html',
                styleUrls: ['stepper-label-position-bottom-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperOptionalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperOptionalExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperOptionalExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with optional steps
 */
class StepperOptionalExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    }
}
StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperOptionalExample.ɵcmp = ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener() { return ctx.isOptional = !ctx.isOptional; });
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
        ɵɵelementStart(4, "mat-step", 3);
        ɵɵelementStart(5, "form", 4);
        ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Name");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div");
        ɵɵelementStart(12, "button", 7);
        ɵɵtext(13, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-step", 8);
        ɵɵelementStart(15, "form", 4);
        ɵɵtemplate(16, StepperOptionalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(17, "mat-form-field");
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Address");
        ɵɵelementEnd();
        ɵɵelement(20, "input", 9);
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵelementStart(22, "button", 10);
        ɵɵtext(23, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 7);
        ɵɵtext(25, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(26, "mat-step");
        ɵɵtemplate(27, StepperOptionalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(28, "p");
        ɵɵtext(29, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(30, "div");
        ɵɵelementStart(31, "button", 10);
        ɵɵtext(32, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(33, "button", 11);
        ɵɵlistener("click", function StepperOptionalExample_Template_button_click_33_listener() { ɵɵrestoreView(_r4); const _r0 = ɵɵreference(3); return _r0.reset(); });
        ɵɵtext(34, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
        ɵɵadvance(3);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperOptionalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-optional-example',
                templateUrl: 'stepper-optional-example.html',
                styleUrls: ['stepper-optional-example.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperOverviewExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperOverviewExample_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper overview
 */
class StepperOverviewExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperOverviewExample.ɵcmp = ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 34, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
        ɵɵelementStart(4, "mat-step", 3);
        ɵɵelementStart(5, "form", 4);
        ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Name");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div");
        ɵɵelementStart(12, "button", 7);
        ɵɵtext(13, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-step", 8);
        ɵɵelementStart(15, "form", 4);
        ɵɵelementStart(16, "mat-form-field");
        ɵɵelementStart(17, "mat-label");
        ɵɵtext(18, "Address");
        ɵɵelementEnd();
        ɵɵelement(19, "input", 9);
        ɵɵelementEnd();
        ɵɵelementStart(20, "div");
        ɵɵelementStart(21, "button", 10);
        ɵɵtext(22, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(23, "button", 7);
        ɵɵtext(24, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(25, "mat-step");
        ɵɵtemplate(26, StepperOverviewExample_ng_template_26_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(27, "p");
        ɵɵtext(28, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(29, "div");
        ɵɵelementStart(30, "button", 10);
        ɵɵtext(31, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(32, "button", 11);
        ɵɵlistener("click", function StepperOverviewExample_Template_button_click_32_listener() { ɵɵrestoreView(_r3); const _r0 = ɵɵreference(3); return _r0.reset(); });
        ɵɵtext(33, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
        ɵɵadvance(1);
        ɵɵproperty("linear", ctx.isLinear);
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperOverviewExample, [{
        type: Component,
        args: [{
                selector: 'stepper-overview-example',
                templateUrl: 'stepper-overview-example.html',
                styleUrls: ['stepper-overview-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperStatesExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperStatesExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperStatesExample_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
function StepperStatesExample_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "call_end");
    ɵɵelementEnd();
} }
function StepperStatesExample_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "forum");
    ɵɵelementEnd();
} }
/**
 * @title Stepper with customized states
 */
class StepperStatesExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperStatesExample.ɵcmp = ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [ɵɵProvidersFeature([{
                provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
            }])], decls: 53, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
        const _r6 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
        ɵɵelementStart(2, "mat-step", 1);
        ɵɵelementStart(3, "form", 2);
        ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(5, "mat-form-field");
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Name");
        ɵɵelementEnd();
        ɵɵelement(8, "input", 4);
        ɵɵelementEnd();
        ɵɵelementStart(9, "div");
        ɵɵelementStart(10, "button", 5);
        ɵɵtext(11, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(12, "mat-step", 1);
        ɵɵelementStart(13, "form", 2);
        ɵɵtemplate(14, StepperStatesExample_ng_template_14_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(15, "mat-form-field");
        ɵɵelementStart(16, "mat-label");
        ɵɵtext(17, "Address");
        ɵɵelementEnd();
        ɵɵelement(18, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(19, "div");
        ɵɵelementStart(20, "button", 7);
        ɵɵtext(21, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(22, "button", 5);
        ɵɵtext(23, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(24, "mat-step");
        ɵɵtemplate(25, StepperStatesExample_ng_template_25_Template, 1, 0, "ng-template", 3);
        ɵɵelementStart(26, "p");
        ɵɵtext(27, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(28, "div");
        ɵɵelementStart(29, "button", 7);
        ɵɵtext(30, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(31, "button", 8);
        ɵɵlistener("click", function StepperStatesExample_Template_button_click_31_listener() { ɵɵrestoreView(_r6); const _r0 = ɵɵreference(1); return _r0.reset(); });
        ɵɵtext(32, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(33, "mat-horizontal-stepper");
        ɵɵelementStart(34, "mat-step", 9);
        ɵɵelementStart(35, "p");
        ɵɵtext(36, "Put down your phones.");
        ɵɵelementEnd();
        ɵɵelementStart(37, "div");
        ɵɵelementStart(38, "button", 5);
        ɵɵtext(39, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(40, "mat-step", 10);
        ɵɵelementStart(41, "p");
        ɵɵtext(42, "Socialize with each other.");
        ɵɵelementEnd();
        ɵɵelementStart(43, "div");
        ɵɵelementStart(44, "button", 7);
        ɵɵtext(45, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(46, "button", 5);
        ɵɵtext(47, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(48, "mat-step", 11);
        ɵɵelementStart(49, "p");
        ɵɵtext(50, "You're welcome.");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(51, StepperStatesExample_ng_template_51_Template, 2, 0, "ng-template", 12);
        ɵɵtemplate(52, StepperStatesExample_ng_template_52_Template, 2, 0, "ng-template", 13);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious, MatStepperIcon, MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperStatesExample, [{
        type: Component,
        args: [{
                selector: 'stepper-states-example',
                templateUrl: 'stepper-states-example.html',
                styleUrls: ['stepper-states-example.css'],
                providers: [{
                        provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                    }]
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperVerticalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperVerticalExample_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperVerticalExample_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper vertical
 */
class StepperVerticalExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    }
}
StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(ɵɵdirectiveInject(FormBuilder)); };
StepperVerticalExample.ɵcmp = ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
        const _r4 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 0);
        ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
        ɵɵtext(1);
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
        ɵɵelementStart(4, "mat-step", 3);
        ɵɵelementStart(5, "form", 4);
        ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(7, "mat-form-field");
        ɵɵelementStart(8, "mat-label");
        ɵɵtext(9, "Name");
        ɵɵelementEnd();
        ɵɵelement(10, "input", 6);
        ɵɵelementEnd();
        ɵɵelementStart(11, "div");
        ɵɵelementStart(12, "button", 7);
        ɵɵtext(13, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(14, "mat-step", 3);
        ɵɵelementStart(15, "form", 4);
        ɵɵtemplate(16, StepperVerticalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(17, "mat-form-field");
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Address");
        ɵɵelementEnd();
        ɵɵelement(20, "input", 8);
        ɵɵelementEnd();
        ɵɵelementStart(21, "div");
        ɵɵelementStart(22, "button", 9);
        ɵɵtext(23, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(24, "button", 7);
        ɵɵtext(25, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(26, "mat-step");
        ɵɵtemplate(27, StepperVerticalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
        ɵɵelementStart(28, "p");
        ɵɵtext(29, "You are now done.");
        ɵɵelementEnd();
        ɵɵelementStart(30, "div");
        ɵɵelementStart(31, "button", 9);
        ɵɵtext(32, "Back");
        ɵɵelementEnd();
        ɵɵelementStart(33, "button", 10);
        ɵɵlistener("click", function StepperVerticalExample_Template_button_click_33_listener() { ɵɵrestoreView(_r4); const _r0 = ɵɵreference(3); return _r0.reset(); });
        ɵɵtext(34, "Reset");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
        ɵɵadvance(1);
        ɵɵproperty("linear", ctx.isLinear);
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(9);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(1);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
    } }, directives: [MatButton, MatVerticalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatLabel, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperVerticalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-vertical-example',
                templateUrl: 'stepper-vertical-example.html',
                styleUrls: ['stepper-vertical-example.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function StepperHarnessExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "One");
} }
function StepperHarnessExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Two");
} }
function StepperHarnessExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Three");
} }
/**
 * @title Testing with MatStepperHarness
 */
class StepperHarnessExample {
}
StepperHarnessExample.ɵfac = function StepperHarnessExample_Factory(t) { return new (t || StepperHarnessExample)(); };
StepperHarnessExample.ɵcmp = ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-horizontal-stepper");
        ɵɵelementStart(1, "mat-step");
        ɵɵtemplate(2, StepperHarnessExample_ng_template_2_Template, 1, 0, "ng-template", 0);
        ɵɵelementStart(3, "button", 1);
        ɵɵtext(4, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-step", 2);
        ɵɵtemplate(6, StepperHarnessExample_ng_template_6_Template, 1, 0, "ng-template", 0);
        ɵɵelementStart(7, "button", 3);
        ɵɵtext(8, "Previous");
        ɵɵelementEnd();
        ɵɵelementStart(9, "button", 1);
        ɵɵtext(10, "Next");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "mat-step", 2);
        ɵɵtemplate(12, StepperHarnessExample_ng_template_12_Template, 1, 0, "ng-template", 0);
        ɵɵelementStart(13, "button", 3);
        ɵɵtext(14, "Previous");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatHorizontalStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperHarnessExample, [{
        type: Component,
        args: [{
                selector: 'stepper-harness-example',
                templateUrl: 'stepper-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperHarnessExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
];
class StepperExamplesModule {
}
StepperExamplesModule.ɵmod = ɵɵdefineNgModule({ type: StepperExamplesModule });
StepperExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatStepperModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule], exports: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatStepperModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { StepperEditableExample, StepperErrorsExample, StepperExamplesModule, StepperHarnessExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample };
//# sourceMappingURL=stepper.js.map
