(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/stepper'), require('@angular/material/form-field'), require('@angular/cdk/stepper')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/stepper', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/stepper', '@angular/material/form-field', '@angular/cdk/stepper'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.stepper = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.stepper, global.ng.material.formField, global.ng.cdk.stepper));
}(this, (function (exports, i0, i1, i2, i6, i5, i3, i4, stepper) { 'use strict';

    function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperEditableExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperEditableExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperEditableExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-editable-example',
                        templateUrl: 'stepper-editable-example.html',
                        styleUrls: ['stepper-editable-example.css']
                    },] },
        ];
        /** @nocollapse */
        StepperEditableExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperEditableExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 30, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
                var _r4 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener($event) { return ctx.isEditable = !ctx.isEditable; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 7);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 3);
                i0.ɵɵelementStart(13, "form", 4);
                i0.ɵɵtemplate(14, StepperEditableExample_ng_template_14_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelement(16, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div");
                i0.ɵɵelementStart(18, "button", 9);
                i0.ɵɵtext(19, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "button", 7);
                i0.ɵɵtext(21, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-step");
                i0.ɵɵtemplate(23, StepperEditableExample_ng_template_23_Template, 1, 0, "ng-template", 5);
                i0.ɵɵtext(24, " You are now done. ");
                i0.ɵɵelementStart(25, "div");
                i0.ɵɵelementStart(26, "button", 9);
                i0.ɵɵtext(27, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "button", 10);
                i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
                i0.ɵɵtext(29, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperEditableExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperEditableExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-editable-example',
                    templateUrl: 'stepper-editable-example.html',
                    styleUrls: ['stepper-editable-example.css']
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperErrorsExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperErrorsExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperErrorsExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperErrorsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-errors-example',
                        templateUrl: 'stepper-errors-example.html',
                        styleUrls: ['stepper-errors-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                            }]
                    },] },
        ];
        /** @nocollapse */
        StepperErrorsExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0.ɵɵProvidersFeature([{
                        provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                    }])], decls: 28, vars: 4, consts: [["linear", ""], ["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) { if (rf & 1) {
                var _r9 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
                i0.ɵɵelementStart(2, "mat-step", 2);
                i0.ɵɵelementStart(3, "form", 3);
                i0.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelement(6, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵelementStart(8, "button", 6);
                i0.ɵɵtext(9, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-step", 7);
                i0.ɵɵelementStart(11, "form", 3);
                i0.ɵɵtemplate(12, StepperErrorsExample_ng_template_12_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(13, "mat-form-field");
                i0.ɵɵelement(14, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div");
                i0.ɵɵelementStart(16, "button", 9);
                i0.ɵɵtext(17, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "button", 6);
                i0.ɵɵtext(19, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-step");
                i0.ɵɵtemplate(21, StepperErrorsExample_ng_template_21_Template, 1, 0, "ng-template", 4);
                i0.ɵɵtext(22, " You are now done. ");
                i0.ɵɵelementStart(23, "div");
                i0.ɵɵelementStart(24, "button", 9);
                i0.ɵɵtext(25, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 10);
                i0.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r9); var _r5 = i0.ɵɵreference(1); return _r5.reset(); });
                i0.ɵɵtext(27, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperErrorsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperErrorsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-errors-example',
                    templateUrl: 'stepper-errors-example.html',
                    styleUrls: ['stepper-errors-example.css'],
                    providers: [{
                            provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                        }]
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperLabelPositionBottomExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperLabelPositionBottomExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperLabelPositionBottomExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-label-position-bottom-example',
                        templateUrl: 'stepper-label-position-bottom-example.html',
                        styleUrls: ['stepper-label-position-bottom-example.css'],
                    },] },
        ];
        /** @nocollapse */
        StepperLabelPositionBottomExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperLabelPositionBottomExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 28, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
                var _r14 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
                i0.ɵɵelementStart(2, "mat-step", 2);
                i0.ɵɵelementStart(3, "form", 3);
                i0.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelement(6, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵelementStart(8, "button", 6);
                i0.ɵɵtext(9, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-step", 7);
                i0.ɵɵelementStart(11, "form", 3);
                i0.ɵɵtemplate(12, StepperLabelPositionBottomExample_ng_template_12_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(13, "mat-form-field");
                i0.ɵɵelement(14, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div");
                i0.ɵɵelementStart(16, "button", 9);
                i0.ɵɵtext(17, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "button", 6);
                i0.ɵɵtext(19, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-step");
                i0.ɵɵtemplate(21, StepperLabelPositionBottomExample_ng_template_21_Template, 1, 0, "ng-template", 4);
                i0.ɵɵtext(22, " You are now done. ");
                i0.ɵɵelementStart(23, "div");
                i0.ɵɵelementStart(24, "button", 9);
                i0.ɵɵtext(25, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 10);
                i0.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r14); var _r10 = i0.ɵɵreference(1); return _r10.reset(); });
                i0.ɵɵtext(27, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperLabelPositionBottomExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-label-position-bottom-example',
                    templateUrl: 'stepper-label-position-bottom-example.html',
                    styleUrls: ['stepper-label-position-bottom-example.css'],
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperOptionalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperOptionalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperOptionalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ''
            });
        };
        StepperOptionalExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-optional-example',
                        templateUrl: 'stepper-optional-example.html',
                        styleUrls: ['stepper-optional-example.css']
                    },] },
        ];
        /** @nocollapse */
        StepperOptionalExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperOptionalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) { if (rf & 1) {
                var _r19 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener($event) { return ctx.isOptional = !ctx.isOptional; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 7);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 8);
                i0.ɵɵelementStart(13, "form", 4);
                i0.ɵɵtemplate(14, StepperOptionalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelement(16, "input", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div");
                i0.ɵɵelementStart(18, "button", 10);
                i0.ɵɵtext(19, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "button", 7);
                i0.ɵɵtext(21, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-step");
                i0.ɵɵtemplate(23, StepperOptionalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
                i0.ɵɵtext(24, " You are now done. ");
                i0.ɵɵelementStart(25, "div");
                i0.ɵɵelementStart(26, "button", 10);
                i0.ɵɵtext(27, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "button", 11);
                i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r19); var _r15 = i0.ɵɵreference(3); return _r15.reset(); });
                i0.ɵɵtext(29, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperOptionalExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperOptionalExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-optional-example',
                    templateUrl: 'stepper-optional-example.html',
                    styleUrls: ['stepper-optional-example.css']
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperOverviewExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperOverviewExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperOverviewExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-overview-example',
                        templateUrl: 'stepper-overview-example.html',
                        styleUrls: ['stepper-overview-example.css'],
                    },] },
        ];
        /** @nocollapse */
        StepperOverviewExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) { if (rf & 1) {
                var _r24 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 7);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 3);
                i0.ɵɵelementStart(13, "form", 4);
                i0.ɵɵtemplate(14, StepperOverviewExample_ng_template_14_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelement(16, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div");
                i0.ɵɵelementStart(18, "button", 9);
                i0.ɵɵtext(19, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "button", 7);
                i0.ɵɵtext(21, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-step");
                i0.ɵɵtemplate(23, StepperOverviewExample_ng_template_23_Template, 1, 0, "ng-template", 5);
                i0.ɵɵtext(24, " You are now done. ");
                i0.ɵɵelementStart(25, "div");
                i0.ɵɵelementStart(26, "button", 9);
                i0.ɵɵtext(27, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "button", 10);
                i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r24); var _r20 = i0.ɵɵreference(3); return _r20.reset(); });
                i0.ɵɵtext(29, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("linear", ctx.isLinear);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-overview-example',
                    templateUrl: 'stepper-overview-example.html',
                    styleUrls: ['stepper-overview-example.css'],
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperStatesExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperStatesExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperStatesExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
    } }
    function StepperStatesExample_ng_template_46_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "call_end");
        i0.ɵɵelementEnd();
    } }
    function StepperStatesExample_ng_template_47_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-icon");
        i0.ɵɵtext(1, "forum");
        i0.ɵɵelementEnd();
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperStatesExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-states-example',
                        templateUrl: 'stepper-states-example.html',
                        styleUrls: ['stepper-states-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                            }]
                    },] },
        ];
        /** @nocollapse */
        StepperStatesExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperStatesExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [i0.ɵɵProvidersFeature([{
                        provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                    }])], decls: 48, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) { if (rf & 1) {
                var _r31 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
                i0.ɵɵelementStart(2, "mat-step", 1);
                i0.ɵɵelementStart(3, "form", 2);
                i0.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelement(6, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div");
                i0.ɵɵelementStart(8, "button", 5);
                i0.ɵɵtext(9, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-step", 1);
                i0.ɵɵelementStart(11, "form", 2);
                i0.ɵɵtemplate(12, StepperStatesExample_ng_template_12_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(13, "mat-form-field");
                i0.ɵɵelement(14, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "div");
                i0.ɵɵelementStart(16, "button", 7);
                i0.ɵɵtext(17, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "button", 5);
                i0.ɵɵtext(19, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-step");
                i0.ɵɵtemplate(21, StepperStatesExample_ng_template_21_Template, 1, 0, "ng-template", 3);
                i0.ɵɵtext(22, " You are now done. ");
                i0.ɵɵelementStart(23, "div");
                i0.ɵɵelementStart(24, "button", 7);
                i0.ɵɵtext(25, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 8);
                i0.ɵɵlistener("click", function StepperStatesExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r31); var _r25 = i0.ɵɵreference(1); return _r25.reset(); });
                i0.ɵɵtext(27, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "mat-horizontal-stepper");
                i0.ɵɵelementStart(29, "mat-step", 9);
                i0.ɵɵelementStart(30, "p");
                i0.ɵɵtext(31, "Put down your phones.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "div");
                i0.ɵɵelementStart(33, "button", 5);
                i0.ɵɵtext(34, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "mat-step", 10);
                i0.ɵɵelementStart(36, "p");
                i0.ɵɵtext(37, "Socialize with each other.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(38, "div");
                i0.ɵɵelementStart(39, "button", 7);
                i0.ɵɵtext(40, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "button", 5);
                i0.ɵɵtext(42, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(43, "mat-step", 11);
                i0.ɵɵelementStart(44, "p");
                i0.ɵɵtext(45, "You're welcome.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(46, StepperStatesExample_ng_template_46_Template, 2, 0, "ng-template", 12);
                i0.ɵɵtemplate(47, StepperStatesExample_ng_template_47_Template, 2, 0, "ng-template", 13);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious, i3.MatStepperIcon, i6.MatIcon], styles: [""] });
        return StepperStatesExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperStatesExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-states-example',
                    templateUrl: 'stepper-states-example.html',
                    styleUrls: ['stepper-states-example.css'],
                    providers: [{
                            provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                        }]
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

    function StepperVerticalExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your name");
    } }
    function StepperVerticalExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Fill out your address");
    } }
    function StepperVerticalExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0, "Done");
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
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
        };
        StepperVerticalExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'stepper-vertical-example',
                        templateUrl: 'stepper-vertical-example.html',
                        styleUrls: ['stepper-vertical-example.css']
                    },] },
        ];
        /** @nocollapse */
        StepperVerticalExample.ctorParameters = function () { return [
            { type: i1.FormBuilder }
        ]; };
        StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
        StepperVerticalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 30, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) { if (rf & 1) {
                var _r36 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener($event) { return ctx.isLinear = !ctx.isLinear; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 7);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 3);
                i0.ɵɵelementStart(13, "form", 4);
                i0.ɵɵtemplate(14, StepperVerticalExample_ng_template_14_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelement(16, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "div");
                i0.ɵɵelementStart(18, "button", 9);
                i0.ɵɵtext(19, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "button", 7);
                i0.ɵɵtext(21, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-step");
                i0.ɵɵtemplate(23, StepperVerticalExample_ng_template_23_Template, 1, 0, "ng-template", 5);
                i0.ɵɵtext(24, " You are now done. ");
                i0.ɵɵelementStart(25, "div");
                i0.ɵɵelementStart(26, "button", 9);
                i0.ɵɵtext(27, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "button", 10);
                i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r36); var _r32 = i0.ɵɵreference(3); return _r32.reset(); });
                i0.ɵɵtext(29, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("linear", ctx.isLinear);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            } }, directives: [i2.MatButton, i3.MatVerticalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
        return StepperVerticalExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperVerticalExample, [{
            type: i0.Component,
            args: [{
                    selector: 'stepper-vertical-example',
                    templateUrl: 'stepper-vertical-example.html',
                    styleUrls: ['stepper-vertical-example.css']
                }]
        }], function () { return [{ type: i1.FormBuilder }]; }, null); })();

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
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.MatButtonModule,
                            i6.MatIconModule,
                            i5.MatInputModule,
                            i3.MatStepperModule,
                            i1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        StepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
        StepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
                    i2.MatButtonModule,
                    i6.MatIconModule,
                    i5.MatInputModule,
                    i3.MatStepperModule,
                    i1.ReactiveFormsModule,
                ]] });
        return StepperExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
            StepperErrorsExample,
            StepperLabelPositionBottomExample,
            StepperOptionalExample,
            StepperOverviewExample,
            StepperStatesExample,
            StepperVerticalExample], imports: [i2.MatButtonModule,
            i6.MatIconModule,
            i5.MatInputModule,
            i3.MatStepperModule,
            i1.ReactiveFormsModule], exports: [StepperEditableExample,
            StepperErrorsExample,
            StepperLabelPositionBottomExample,
            StepperOptionalExample,
            StepperOverviewExample,
            StepperStatesExample,
            StepperVerticalExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i2.MatButtonModule,
                        i6.MatIconModule,
                        i5.MatInputModule,
                        i3.MatStepperModule,
                        i1.ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.StepperEditableExample = StepperEditableExample;
    exports.StepperErrorsExample = StepperErrorsExample;
    exports.StepperExamplesModule = StepperExamplesModule;
    exports.StepperLabelPositionBottomExample = StepperLabelPositionBottomExample;
    exports.StepperOptionalExample = StepperOptionalExample;
    exports.StepperOverviewExample = StepperOverviewExample;
    exports.StepperStatesExample = StepperStatesExample;
    exports.StepperVerticalExample = StepperVerticalExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-stepper.umd.js.map
