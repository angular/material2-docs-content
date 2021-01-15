(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/stepper'), require('@angular/material/form-field'), require('@angular/cdk/stepper')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/stepper', ['exports', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/stepper', '@angular/material/form-field', '@angular/cdk/stepper'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.stepper = {}), global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.stepper, global.ng.material.formField, global.ng.cdk.stepper));
}(this, (function (exports, i0, i1, i2, i6, i5, i3, i4, stepper) { 'use strict';

    function StepperEditableExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperEditableExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperEditableExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperEditableExample;
    }());
    StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperEditableExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener() { return ctx.isEditable = !ctx.isEditable; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div");
                i0.ɵɵelementStart(12, "button", 7);
                i0.ɵɵtext(13, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-step", 3);
                i0.ɵɵelementStart(15, "form", 4);
                i0.ɵɵtemplate(16, StepperEditableExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(17, "mat-form-field");
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵelementStart(22, "button", 9);
                i0.ɵɵtext(23, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 7);
                i0.ɵɵtext(25, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-step");
                i0.ɵɵtemplate(27, StepperEditableExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(28, "p");
                i0.ɵɵtext(29, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "div");
                i0.ɵɵelementStart(31, "button", 9);
                i0.ɵɵtext(32, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "button", 10);
                i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4_1); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
                i0.ɵɵtext(34, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperEditableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-editable-example',
                        templateUrl: 'stepper-editable-example.html',
                        styleUrls: ['stepper-editable-example.css']
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperErrorsExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperErrorsExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperErrorsExample_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperErrorsExample;
    }());
    StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperErrorsExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0.ɵɵProvidersFeature([{
                    provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                }])], decls: 37, vars: 4, consts: [["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Ex. 1 Main St, New York, NY", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
                i0.ɵɵelementStart(2, "mat-step", 1);
                i0.ɵɵelementStart(3, "form", 2);
                i0.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "p");
                i0.ɵɵtext(11, "Go to a different step to see the error state");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "button", 5);
                i0.ɵɵtext(13, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-step", 6);
                i0.ɵɵelementStart(15, "form", 2);
                i0.ɵɵtemplate(16, StepperErrorsExample_ng_template_16_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(17, "mat-form-field");
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "input", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵelementStart(22, "p");
                i0.ɵɵtext(23, "Go to a different step to see the error state");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 8);
                i0.ɵɵtext(25, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "button", 5);
                i0.ɵɵtext(27, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "mat-step");
                i0.ɵɵtemplate(29, StepperErrorsExample_ng_template_29_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(30, "p");
                i0.ɵɵtext(31, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "div");
                i0.ɵɵelementStart(33, "button", 8);
                i0.ɵɵtext(34, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "button", 9);
                i0.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_35_listener() { i0.ɵɵrestoreView(_r4_1); var _r0 = i0.ɵɵreference(1); return _r0.reset(); });
                i0.ɵɵtext(36, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(11);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperErrorsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-errors-example',
                        templateUrl: 'stepper-errors-example.html',
                        styleUrls: ['stepper-errors-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                            }]
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperLabelPositionBottomExample_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperLabelPositionBottomExample_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperLabelPositionBottomExample;
    }());
    StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperLabelPositionBottomExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 33, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
                i0.ɵɵelementStart(2, "mat-step", 2);
                i0.ɵɵelementStart(3, "form", 3);
                i0.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 6);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 7);
                i0.ɵɵelementStart(13, "form", 3);
                i0.ɵɵtemplate(14, StepperLabelPositionBottomExample_ng_template_14_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelementStart(16, "mat-label");
                i0.ɵɵtext(17, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div");
                i0.ɵɵelementStart(20, "button", 9);
                i0.ɵɵtext(21, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "button", 6);
                i0.ɵɵtext(23, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-step");
                i0.ɵɵtemplate(25, StepperLabelPositionBottomExample_ng_template_25_Template, 1, 0, "ng-template", 4);
                i0.ɵɵelementStart(26, "p");
                i0.ɵɵtext(27, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "div");
                i0.ɵɵelementStart(29, "button", 9);
                i0.ɵɵtext(30, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "button", 10);
                i0.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r4_1); var _r0 = i0.ɵɵreference(1); return _r0.reset(); });
                i0.ɵɵtext(32, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-label-position-bottom-example',
                        templateUrl: 'stepper-label-position-bottom-example.html',
                        styleUrls: ['stepper-label-position-bottom-example.css'],
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperOptionalExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperOptionalExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperOptionalExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperOptionalExample;
    }());
    StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperOptionalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener() { return ctx.isOptional = !ctx.isOptional; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div");
                i0.ɵɵelementStart(12, "button", 7);
                i0.ɵɵtext(13, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-step", 8);
                i0.ɵɵelementStart(15, "form", 4);
                i0.ɵɵtemplate(16, StepperOptionalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(17, "mat-form-field");
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "input", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵelementStart(22, "button", 10);
                i0.ɵɵtext(23, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 7);
                i0.ɵɵtext(25, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-step");
                i0.ɵɵtemplate(27, StepperOptionalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(28, "p");
                i0.ɵɵtext(29, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "div");
                i0.ɵɵelementStart(31, "button", 10);
                i0.ɵɵtext(32, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "button", 11);
                i0.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4_1); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
                i0.ɵɵtext(34, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperOptionalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-optional-example',
                        templateUrl: 'stepper-optional-example.html',
                        styleUrls: ['stepper-optional-example.css']
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperOverviewExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperOverviewExample_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperOverviewExample;
    }());
    StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 34, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r3_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div");
                i0.ɵɵelementStart(12, "button", 7);
                i0.ɵɵtext(13, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-step", 8);
                i0.ɵɵelementStart(15, "form", 4);
                i0.ɵɵelementStart(16, "mat-form-field");
                i0.ɵɵelementStart(17, "mat-label");
                i0.ɵɵtext(18, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(19, "input", 9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "div");
                i0.ɵɵelementStart(21, "button", 10);
                i0.ɵɵtext(22, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "button", 7);
                i0.ɵɵtext(24, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "mat-step");
                i0.ɵɵtemplate(26, StepperOverviewExample_ng_template_26_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(27, "p");
                i0.ɵɵtext(28, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "div");
                i0.ɵɵelementStart(30, "button", 10);
                i0.ɵɵtext(31, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "button", 11);
                i0.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_32_listener() { i0.ɵɵrestoreView(_r3_1); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
                i0.ɵɵtext(33, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("linear", ctx.isLinear);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-overview-example',
                        templateUrl: 'stepper-overview-example.html',
                        styleUrls: ['stepper-overview-example.css'],
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperStatesExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperStatesExample_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperStatesExample_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
    function StepperStatesExample_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon");
            i0.ɵɵtext(1, "call_end");
            i0.ɵɵelementEnd();
        }
    }
    function StepperStatesExample_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-icon");
            i0.ɵɵtext(1, "forum");
            i0.ɵɵelementEnd();
        }
    }
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
        return StepperStatesExample;
    }());
    StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperStatesExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [i0.ɵɵProvidersFeature([{
                    provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }])], decls: 53, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r6_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
                i0.ɵɵelementStart(2, "mat-step", 1);
                i0.ɵɵelementStart(3, "form", 2);
                i0.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(8, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div");
                i0.ɵɵelementStart(10, "button", 5);
                i0.ɵɵtext(11, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-step", 1);
                i0.ɵɵelementStart(13, "form", 2);
                i0.ɵɵtemplate(14, StepperStatesExample_ng_template_14_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(15, "mat-form-field");
                i0.ɵɵelementStart(16, "mat-label");
                i0.ɵɵtext(17, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(18, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "div");
                i0.ɵɵelementStart(20, "button", 7);
                i0.ɵɵtext(21, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "button", 5);
                i0.ɵɵtext(23, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-step");
                i0.ɵɵtemplate(25, StepperStatesExample_ng_template_25_Template, 1, 0, "ng-template", 3);
                i0.ɵɵelementStart(26, "p");
                i0.ɵɵtext(27, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "div");
                i0.ɵɵelementStart(29, "button", 7);
                i0.ɵɵtext(30, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "button", 8);
                i0.ɵɵlistener("click", function StepperStatesExample_Template_button_click_31_listener() { i0.ɵɵrestoreView(_r6_1); var _r0 = i0.ɵɵreference(1); return _r0.reset(); });
                i0.ɵɵtext(32, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "mat-horizontal-stepper");
                i0.ɵɵelementStart(34, "mat-step", 9);
                i0.ɵɵelementStart(35, "p");
                i0.ɵɵtext(36, "Put down your phones.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "div");
                i0.ɵɵelementStart(38, "button", 5);
                i0.ɵɵtext(39, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(40, "mat-step", 10);
                i0.ɵɵelementStart(41, "p");
                i0.ɵɵtext(42, "Socialize with each other.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(43, "div");
                i0.ɵɵelementStart(44, "button", 7);
                i0.ɵɵtext(45, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(46, "button", 5);
                i0.ɵɵtext(47, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(48, "mat-step", 11);
                i0.ɵɵelementStart(49, "p");
                i0.ɵɵtext(50, "You're welcome.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(51, StepperStatesExample_ng_template_51_Template, 2, 0, "ng-template", 12);
                i0.ɵɵtemplate(52, StepperStatesExample_ng_template_52_Template, 2, 0, "ng-template", 13);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i2.MatButton, i3.MatStepperNext, i3.MatStepperPrevious, i3.MatStepperIcon, i6.MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperStatesExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-states-example',
                        templateUrl: 'stepper-states-example.html',
                        styleUrls: ['stepper-states-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                            }]
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperVerticalExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperVerticalExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperVerticalExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Done");
        }
    }
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
        return StepperVerticalExample;
    }());
    StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperVerticalExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
                i0.ɵɵelementStart(4, "mat-step", 3);
                i0.ɵɵelementStart(5, "form", 4);
                i0.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Name");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "div");
                i0.ɵɵelementStart(12, "button", 7);
                i0.ɵɵtext(13, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-step", 3);
                i0.ɵɵelementStart(15, "form", 4);
                i0.ɵɵtemplate(16, StepperVerticalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(17, "mat-form-field");
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Address");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "input", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "div");
                i0.ɵɵelementStart(22, "button", 9);
                i0.ɵɵtext(23, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "button", 7);
                i0.ɵɵtext(25, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-step");
                i0.ɵɵtemplate(27, StepperVerticalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0.ɵɵelementStart(28, "p");
                i0.ɵɵtext(29, "You are now done.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(30, "div");
                i0.ɵɵelementStart(31, "button", 9);
                i0.ɵɵtext(32, "Back");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "button", 10);
                i0.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_33_listener() { i0.ɵɵrestoreView(_r4_1); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
                i0.ɵɵtext(34, "Reset");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("linear", ctx.isLinear);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2.MatButton, i3.MatVerticalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i4.MatLabel, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperVerticalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-vertical-example',
                        templateUrl: 'stepper-vertical-example.html',
                        styleUrls: ['stepper-vertical-example.css']
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, null);
    })();

    function StepperHarnessExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "One");
        }
    }
    function StepperHarnessExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Two");
        }
    }
    function StepperHarnessExample_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtext(0, "Three");
        }
    }
    /**
     * @title Testing with MatStepperHarness
     */
    var StepperHarnessExample = /** @class */ (function () {
        function StepperHarnessExample() {
        }
        return StepperHarnessExample;
    }());
    StepperHarnessExample.ɵfac = function StepperHarnessExample_Factory(t) { return new (t || StepperHarnessExample)(); };
    StepperHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-horizontal-stepper");
                i0.ɵɵelementStart(1, "mat-step");
                i0.ɵɵtemplate(2, StepperHarnessExample_ng_template_2_Template, 1, 0, "ng-template", 0);
                i0.ɵɵelementStart(3, "button", 1);
                i0.ɵɵtext(4, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-step", 2);
                i0.ɵɵtemplate(6, StepperHarnessExample_ng_template_6_Template, 1, 0, "ng-template", 0);
                i0.ɵɵelementStart(7, "button", 3);
                i0.ɵɵtext(8, "Previous");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "button", 1);
                i0.ɵɵtext(10, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-step", 2);
                i0.ɵɵtemplate(12, StepperHarnessExample_ng_template_12_Template, 1, 0, "ng-template", 0);
                i0.ɵɵelementStart(13, "button", 3);
                i0.ɵɵtext(14, "Previous");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i3.MatHorizontalStepper, i3.MatStep, i3.MatStepLabel, i3.MatStepperNext, i3.MatStepperPrevious], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-harness-example',
                        templateUrl: 'stepper-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
    ];
    var StepperExamplesModule = /** @class */ (function () {
        function StepperExamplesModule() {
        }
        return StepperExamplesModule;
    }());
    StepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
    StepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
                i2.MatButtonModule,
                i6.MatIconModule,
                i5.MatInputModule,
                i3.MatStepperModule,
                i1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
                StepperErrorsExample,
                StepperHarnessExample,
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
                StepperHarnessExample,
                StepperLabelPositionBottomExample,
                StepperOptionalExample,
                StepperOverviewExample,
                StepperStatesExample,
                StepperVerticalExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(StepperExamplesModule, [{
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
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.StepperEditableExample = StepperEditableExample;
    exports.StepperErrorsExample = StepperErrorsExample;
    exports.StepperExamplesModule = StepperExamplesModule;
    exports.StepperHarnessExample = StepperHarnessExample;
    exports.StepperLabelPositionBottomExample = StepperLabelPositionBottomExample;
    exports.StepperOptionalExample = StepperOptionalExample;
    exports.StepperOverviewExample = StepperOverviewExample;
    exports.StepperStatesExample = StepperStatesExample;
    exports.StepperVerticalExample = StepperVerticalExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-stepper.umd.js.map
