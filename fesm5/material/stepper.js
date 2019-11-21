import { ɵɵtext, Component, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵelementEnd, ɵɵtemplate, ɵɵelement, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵproperty, ɵsetClassMetadata, ɵɵProvidersFeature, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatHorizontalStepper, MatStep, MatStepLabel, MatStepperNext, MatStepperPrevious, MatStepperIcon, MatVerticalStepper, MatStepperModule } from '@angular/material/stepper';
import { MatFormField } from '@angular/material/form-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with editable steps
 */
var StepperEditableExample = /** @class */ (function () {
    function StepperEditableExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    StepperEditableExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperEditableExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-editable-example',
                    templateUrl: 'stepper-editable-example.html',
                    styleUrls: ['stepper-editable-example.css']
                },] },
    ];
    /** @nocollapse */
    StepperEditableExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperEditableExample.ɵcmp = ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 30, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
            var _r4 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener($event) { return ctx.isEditable = !ctx.isEditable; });
            ɵɵtext(1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            ɵɵelementStart(4, "mat-step", 3);
            ɵɵelementStart(5, "form", 4);
            ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelement(8, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div");
            ɵɵelementStart(10, "button", 7);
            ɵɵtext(11, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-step", 3);
            ɵɵelementStart(13, "form", 4);
            ɵɵtemplate(14, StepperEditableExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(15, "mat-form-field");
            ɵɵelement(16, "input", 8);
            ɵɵelementEnd();
            ɵɵelementStart(17, "div");
            ɵɵelementStart(18, "button", 9);
            ɵɵtext(19, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(20, "button", 7);
            ɵɵtext(21, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-step");
            ɵɵtemplate(23, StepperEditableExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            ɵɵtext(24, " You are now done. ");
            ɵɵelementStart(25, "div");
            ɵɵelementStart(26, "button", 9);
            ɵɵtext(27, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(28, "button", 10);
            ɵɵlistener("click", function StepperEditableExample_Template_button_click_28_listener($event) { ɵɵrestoreView(_r4); var _r0 = ɵɵreference(3); return _r0.reset(); });
            ɵɵtext(29, "Reset");
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
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperEditableExample;
}());
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
function StepperErrorsExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperErrorsExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper that displays errors in the steps
 */
var StepperErrorsExample = /** @class */ (function () {
    function StepperErrorsExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    StepperErrorsExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperErrorsExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-errors-example',
                    templateUrl: 'stepper-errors-example.html',
                    styleUrls: ['stepper-errors-example.css'],
                    providers: [{
                            provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                        }]
                },] },
    ];
    /** @nocollapse */
    StepperErrorsExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperErrorsExample.ɵcmp = ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [ɵɵProvidersFeature([{
                    provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                }])], decls: 28, vars: 4, consts: [["linear", ""], ["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
            var _r9 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
            ɵɵelementStart(2, "mat-step", 2);
            ɵɵelementStart(3, "form", 3);
            ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 4);
            ɵɵelementStart(5, "mat-form-field");
            ɵɵelement(6, "input", 5);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div");
            ɵɵelementStart(8, "button", 6);
            ɵɵtext(9, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-step", 7);
            ɵɵelementStart(11, "form", 3);
            ɵɵtemplate(12, StepperErrorsExample_ng_template_12_Template, 1, 0, "ng-template", 4);
            ɵɵelementStart(13, "mat-form-field");
            ɵɵelement(14, "input", 8);
            ɵɵelementEnd();
            ɵɵelementStart(15, "div");
            ɵɵelementStart(16, "button", 9);
            ɵɵtext(17, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(18, "button", 6);
            ɵɵtext(19, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-step");
            ɵɵtemplate(21, StepperErrorsExample_ng_template_21_Template, 1, 0, "ng-template", 4);
            ɵɵtext(22, " You are now done. ");
            ɵɵelementStart(23, "div");
            ɵɵelementStart(24, "button", 9);
            ɵɵtext(25, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(26, "button", 10);
            ɵɵlistener("click", function StepperErrorsExample_Template_button_click_26_listener($event) { ɵɵrestoreView(_r9); var _r5 = ɵɵreference(1); return _r5.reset(); });
            ɵɵtext(27, "Reset");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("stepControl", ctx.firstFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.firstFormGroup);
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperErrorsExample;
}());
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
function StepperLabelPositionBottomExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperLabelPositionBottomExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper label bottom position
 */
var StepperLabelPositionBottomExample = /** @class */ (function () {
    function StepperLabelPositionBottomExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    StepperLabelPositionBottomExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperLabelPositionBottomExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-label-position-bottom-example',
                    templateUrl: 'stepper-label-position-bottom-example.html',
                    styleUrls: ['stepper-label-position-bottom-example.css'],
                },] },
    ];
    /** @nocollapse */
    StepperLabelPositionBottomExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperLabelPositionBottomExample.ɵcmp = ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 28, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
            var _r14 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
            ɵɵelementStart(2, "mat-step", 2);
            ɵɵelementStart(3, "form", 3);
            ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
            ɵɵelementStart(5, "mat-form-field");
            ɵɵelement(6, "input", 5);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div");
            ɵɵelementStart(8, "button", 6);
            ɵɵtext(9, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-step", 7);
            ɵɵelementStart(11, "form", 3);
            ɵɵtemplate(12, StepperLabelPositionBottomExample_ng_template_12_Template, 1, 0, "ng-template", 4);
            ɵɵelementStart(13, "mat-form-field");
            ɵɵelement(14, "input", 8);
            ɵɵelementEnd();
            ɵɵelementStart(15, "div");
            ɵɵelementStart(16, "button", 9);
            ɵɵtext(17, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(18, "button", 6);
            ɵɵtext(19, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-step");
            ɵɵtemplate(21, StepperLabelPositionBottomExample_ng_template_21_Template, 1, 0, "ng-template", 4);
            ɵɵtext(22, " You are now done. ");
            ɵɵelementStart(23, "div");
            ɵɵelementStart(24, "button", 9);
            ɵɵtext(25, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(26, "button", 10);
            ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_26_listener($event) { ɵɵrestoreView(_r14); var _r10 = ɵɵreference(1); return _r10.reset(); });
            ɵɵtext(27, "Reset");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("stepControl", ctx.firstFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.firstFormGroup);
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperLabelPositionBottomExample;
}());
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
function StepperOptionalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperOptionalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with optional steps
 */
var StepperOptionalExample = /** @class */ (function () {
    function StepperOptionalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isOptional = false;
    }
    StepperOptionalExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ''
        });
    };
    StepperOptionalExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-optional-example',
                    templateUrl: 'stepper-optional-example.html',
                    styleUrls: ['stepper-optional-example.css']
                },] },
    ];
    /** @nocollapse */
    StepperOptionalExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperOptionalExample.ɵcmp = ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) { if (rf & 1) {
            var _r19 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener($event) { return ctx.isOptional = !ctx.isOptional; });
            ɵɵtext(1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            ɵɵelementStart(4, "mat-step", 3);
            ɵɵelementStart(5, "form", 4);
            ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelement(8, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div");
            ɵɵelementStart(10, "button", 7);
            ɵɵtext(11, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-step", 8);
            ɵɵelementStart(13, "form", 4);
            ɵɵtemplate(14, StepperOptionalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(15, "mat-form-field");
            ɵɵelement(16, "input", 9);
            ɵɵelementEnd();
            ɵɵelementStart(17, "div");
            ɵɵelementStart(18, "button", 10);
            ɵɵtext(19, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(20, "button", 7);
            ɵɵtext(21, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-step");
            ɵɵtemplate(23, StepperOptionalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            ɵɵtext(24, " You are now done. ");
            ɵɵelementStart(25, "div");
            ɵɵelementStart(26, "button", 10);
            ɵɵtext(27, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(28, "button", 11);
            ɵɵlistener("click", function StepperOptionalExample_Template_button_click_28_listener($event) { ɵɵrestoreView(_r19); var _r15 = ɵɵreference(3); return _r15.reset(); });
            ɵɵtext(29, "Reset");
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
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperOptionalExample;
}());
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
function StepperOverviewExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperOverviewExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper overview
 */
var StepperOverviewExample = /** @class */ (function () {
    function StepperOverviewExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperOverviewExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-overview-example',
                    templateUrl: 'stepper-overview-example.html',
                    styleUrls: ['stepper-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    StepperOverviewExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperOverviewExample.ɵcmp = ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
            var _r24 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
            ɵɵtext(1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
            ɵɵelementStart(4, "mat-step", 3);
            ɵɵelementStart(5, "form", 4);
            ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelement(8, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div");
            ɵɵelementStart(10, "button", 7);
            ɵɵtext(11, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-step", 3);
            ɵɵelementStart(13, "form", 4);
            ɵɵtemplate(14, StepperOverviewExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(15, "mat-form-field");
            ɵɵelement(16, "input", 8);
            ɵɵelementEnd();
            ɵɵelementStart(17, "div");
            ɵɵelementStart(18, "button", 9);
            ɵɵtext(19, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(20, "button", 7);
            ɵɵtext(21, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-step");
            ɵɵtemplate(23, StepperOverviewExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            ɵɵtext(24, " You are now done. ");
            ɵɵelementStart(25, "div");
            ɵɵelementStart(26, "button", 9);
            ɵɵtext(27, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(28, "button", 10);
            ɵɵlistener("click", function StepperOverviewExample_Template_button_click_28_listener($event) { ɵɵrestoreView(_r24); var _r20 = ɵɵreference(3); return _r20.reset(); });
            ɵɵtext(29, "Reset");
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
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatButton, MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperOverviewExample;
}());
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
function StepperStatesExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperStatesExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
function StepperStatesExample_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "call_end");
    ɵɵelementEnd();
} }
function StepperStatesExample_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-icon");
    ɵɵtext(1, "forum");
    ɵɵelementEnd();
} }
/**
 * @title Stepper with customized states
 */
var StepperStatesExample = /** @class */ (function () {
    function StepperStatesExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    StepperStatesExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperStatesExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-states-example',
                    templateUrl: 'stepper-states-example.html',
                    styleUrls: ['stepper-states-example.css'],
                    providers: [{
                            provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                        }]
                },] },
    ];
    /** @nocollapse */
    StepperStatesExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperStatesExample.ɵcmp = ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [ɵɵProvidersFeature([{
                    provide: STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }])], decls: 48, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
            var _r31 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
            ɵɵelementStart(2, "mat-step", 1);
            ɵɵelementStart(3, "form", 2);
            ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
            ɵɵelementStart(5, "mat-form-field");
            ɵɵelement(6, "input", 4);
            ɵɵelementEnd();
            ɵɵelementStart(7, "div");
            ɵɵelementStart(8, "button", 5);
            ɵɵtext(9, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-step", 1);
            ɵɵelementStart(11, "form", 2);
            ɵɵtemplate(12, StepperStatesExample_ng_template_12_Template, 1, 0, "ng-template", 3);
            ɵɵelementStart(13, "mat-form-field");
            ɵɵelement(14, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(15, "div");
            ɵɵelementStart(16, "button", 7);
            ɵɵtext(17, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(18, "button", 5);
            ɵɵtext(19, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-step");
            ɵɵtemplate(21, StepperStatesExample_ng_template_21_Template, 1, 0, "ng-template", 3);
            ɵɵtext(22, " You are now done. ");
            ɵɵelementStart(23, "div");
            ɵɵelementStart(24, "button", 7);
            ɵɵtext(25, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(26, "button", 8);
            ɵɵlistener("click", function StepperStatesExample_Template_button_click_26_listener($event) { ɵɵrestoreView(_r31); var _r25 = ɵɵreference(1); return _r25.reset(); });
            ɵɵtext(27, "Reset");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(28, "mat-horizontal-stepper");
            ɵɵelementStart(29, "mat-step", 9);
            ɵɵelementStart(30, "p");
            ɵɵtext(31, "Put down your phones.");
            ɵɵelementEnd();
            ɵɵelementStart(32, "div");
            ɵɵelementStart(33, "button", 5);
            ɵɵtext(34, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(35, "mat-step", 10);
            ɵɵelementStart(36, "p");
            ɵɵtext(37, "Socialize with each other.");
            ɵɵelementEnd();
            ɵɵelementStart(38, "div");
            ɵɵelementStart(39, "button", 7);
            ɵɵtext(40, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(41, "button", 5);
            ɵɵtext(42, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(43, "mat-step", 11);
            ɵɵelementStart(44, "p");
            ɵɵtext(45, "You're welcome.");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵtemplate(46, StepperStatesExample_ng_template_46_Template, 2, 0, "ng-template", 12);
            ɵɵtemplate(47, StepperStatesExample_ng_template_47_Template, 2, 0, "ng-template", 13);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("stepControl", ctx.firstFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.firstFormGroup);
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatHorizontalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatButton, MatStepperNext, MatStepperPrevious, MatStepperIcon, MatIcon], styles: [""] });
    return StepperStatesExample;
}());
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
function StepperVerticalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Fill out your address");
} }
function StepperVerticalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0, "Done");
} }
/**
 * @title Stepper vertical
 */
var StepperVerticalExample = /** @class */ (function () {
    function StepperVerticalExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = false;
    }
    StepperVerticalExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperVerticalExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-vertical-example',
                    templateUrl: 'stepper-vertical-example.html',
                    styleUrls: ['stepper-vertical-example.css']
                },] },
    ];
    /** @nocollapse */
    StepperVerticalExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(ɵɵdirectiveInject(FormBuilder)); };
    StepperVerticalExample.ɵcmp = ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
            var _r36 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "button", 0);
            ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
            ɵɵtext(1);
            ɵɵelementEnd();
            ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
            ɵɵelementStart(4, "mat-step", 3);
            ɵɵelementStart(5, "form", 4);
            ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelement(8, "input", 6);
            ɵɵelementEnd();
            ɵɵelementStart(9, "div");
            ɵɵelementStart(10, "button", 7);
            ɵɵtext(11, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-step", 3);
            ɵɵelementStart(13, "form", 4);
            ɵɵtemplate(14, StepperVerticalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
            ɵɵelementStart(15, "mat-form-field");
            ɵɵelement(16, "input", 8);
            ɵɵelementEnd();
            ɵɵelementStart(17, "div");
            ɵɵelementStart(18, "button", 9);
            ɵɵtext(19, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(20, "button", 7);
            ɵɵtext(21, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-step");
            ɵɵtemplate(23, StepperVerticalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
            ɵɵtext(24, " You are now done. ");
            ɵɵelementStart(25, "div");
            ɵɵelementStart(26, "button", 9);
            ɵɵtext(27, "Back");
            ɵɵelementEnd();
            ɵɵelementStart(28, "button", 10);
            ɵɵlistener("click", function StepperVerticalExample_Template_button_click_28_listener($event) { ɵɵrestoreView(_r36); var _r32 = ɵɵreference(3); return _r32.reset(); });
            ɵɵtext(29, "Reset");
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
            ɵɵadvance(7);
            ɵɵproperty("stepControl", ctx.secondFormGroup);
            ɵɵadvance(1);
            ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [MatButton, MatVerticalStepper, MatStep, ɵangular_packages_forms_forms_y, NgControlStatusGroup, FormGroupDirective, MatStepLabel, MatFormField, MatInput, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, MatStepperNext, MatStepperPrevious], styles: [""] });
    return StepperVerticalExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(StepperVerticalExample, [{
        type: Component,
        args: [{
                selector: 'stepper-vertical-example',
                templateUrl: 'stepper-vertical-example.html',
                styleUrls: ['stepper-vertical-example.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

var EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
];
var StepperExamplesModule = /** @class */ (function () {
    function StepperExamplesModule() {
    }
    StepperExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatStepperModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    StepperExamplesModule.ɵmod = ɵɵdefineNgModule({ type: StepperExamplesModule });
    StepperExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                MatStepperModule,
                ReactiveFormsModule,
            ]] });
    return StepperExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
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
            }]
    }], null, null); })();

export { StepperEditableExample, StepperErrorsExample, StepperExamplesModule, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample };
//# sourceMappingURL=stepper.js.map
