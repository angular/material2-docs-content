(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/stepper'), require('@angular/material/form-field'), require('@angular/cdk/stepper'), require('rxjs/operators'), require('@angular/cdk/layout')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/stepper', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/button', '@angular/material/icon', '@angular/material/input', '@angular/material/stepper', '@angular/material/form-field', '@angular/cdk/stepper', 'rxjs/operators', '@angular/cdk/layout'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.stepper = {}), global.ng.core, global.ng.forms, global.ng.common, global.ng.material.button, global.ng.material.icon, global.ng.material.input, global.ng.material.stepper, global.ng.material.formField, global.ng.cdk.stepper, global.rxjs.operators, global.ng.cdk.layout));
}(this, (function (exports, i0, i1, i3$1, i2, i6, i5, i3, i4, stepper, operators, i2$1) { 'use strict';

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

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);

    function StepperEditableExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperEditableExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperEditableExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperEditableExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 35, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "formControlName", "firstCtrl", "placeholder", "Last name, First name", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener() { return ctx.isEditable = !ctx.isEditable; });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0__namespace.ɵɵelementStart(4, "mat-step", 3);
                i0__namespace.ɵɵelementStart(5, "form", 4);
                i0__namespace.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(7, "mat-form-field");
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "div");
                i0__namespace.ɵɵelementStart(12, "button", 7);
                i0__namespace.ɵɵtext(13, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-step", 3);
                i0__namespace.ɵɵelementStart(15, "form", 4);
                i0__namespace.ɵɵtemplate(16, StepperEditableExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(17, "mat-form-field");
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div");
                i0__namespace.ɵɵelementStart(22, "button", 9);
                i0__namespace.ɵɵtext(23, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 7);
                i0__namespace.ɵɵtext(25, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-step");
                i0__namespace.ɵɵtemplate(27, StepperEditableExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(28, "p");
                i0__namespace.ɵɵtext(29, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "div");
                i0__namespace.ɵɵelementStart(31, "button", 9);
                i0__namespace.ɵɵtext(32, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "button", 10);
                i0__namespace.ɵɵlistener("click", function StepperEditableExample_Template_button_click_33_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r0 = i0__namespace.ɵɵreference(3); return _r0.reset(); });
                i0__namespace.ɵɵtext(34, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2__namespace.MatButton, i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperEditableExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-editable-example',
                        templateUrl: 'stepper-editable-example.html',
                        styleUrls: ['stepper-editable-example.css']
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperErrorsExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperErrorsExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperErrorsExample_ng_template_29_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperErrorsExample.ɵfac = function StepperErrorsExample_Factory(t) { return new (t || StepperErrorsExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperErrorsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperErrorsExample, selectors: [["stepper-errors-example"]], features: [i0__namespace.ɵɵProvidersFeature([{
                    provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                }])], decls: 37, vars: 4, consts: [["stepper", ""], ["errorMessage", "Name is required.", 3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["errorMessage", "Address is required.", 3, "stepControl"], ["matInput", "", "placeholder", "Ex. 1 Main St, New York, NY", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperErrorsExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
                i0__namespace.ɵɵelementStart(2, "mat-step", 1);
                i0__namespace.ɵɵelementStart(3, "form", 2);
                i0__namespace.ɵɵtemplate(4, StepperErrorsExample_ng_template_4_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(5, "mat-form-field");
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "div");
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11, "Go to a different step to see the error state");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "button", 5);
                i0__namespace.ɵɵtext(13, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-step", 6);
                i0__namespace.ɵɵelementStart(15, "form", 2);
                i0__namespace.ɵɵtemplate(16, StepperErrorsExample_ng_template_16_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(17, "mat-form-field");
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 7);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div");
                i0__namespace.ɵɵelementStart(22, "p");
                i0__namespace.ɵɵtext(23, "Go to a different step to see the error state");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 8);
                i0__namespace.ɵɵtext(25, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "button", 5);
                i0__namespace.ɵɵtext(27, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "mat-step");
                i0__namespace.ɵɵtemplate(29, StepperErrorsExample_ng_template_29_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(30, "p");
                i0__namespace.ɵɵtext(31, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "div");
                i0__namespace.ɵɵelementStart(33, "button", 8);
                i0__namespace.ɵɵtext(34, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "button", 9);
                i0__namespace.ɵɵlistener("click", function StepperErrorsExample_Template_button_click_35_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r0 = i0__namespace.ɵɵreference(1); return _r0.reset(); });
                i0__namespace.ɵɵtext(36, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(11);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i2__namespace.MatButton, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperErrorsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-errors-example',
                        templateUrl: 'stepper-errors-example.html',
                        styleUrls: ['stepper-errors-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
                            }]
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperLabelPositionBottomExample_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperLabelPositionBottomExample_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperLabelPositionBottomExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 33, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
                i0__namespace.ɵɵelementStart(2, "mat-step", 2);
                i0__namespace.ɵɵelementStart(3, "form", 3);
                i0__namespace.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
                i0__namespace.ɵɵelementStart(5, "mat-form-field");
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "input", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "div");
                i0__namespace.ɵɵelementStart(10, "button", 6);
                i0__namespace.ɵɵtext(11, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-step", 7);
                i0__namespace.ɵɵelementStart(13, "form", 3);
                i0__namespace.ɵɵtemplate(14, StepperLabelPositionBottomExample_ng_template_14_Template, 1, 0, "ng-template", 4);
                i0__namespace.ɵɵelementStart(15, "mat-form-field");
                i0__namespace.ɵɵelementStart(16, "mat-label");
                i0__namespace.ɵɵtext(17, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(18, "input", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "div");
                i0__namespace.ɵɵelementStart(20, "button", 9);
                i0__namespace.ɵɵtext(21, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "button", 6);
                i0__namespace.ɵɵtext(23, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "mat-step");
                i0__namespace.ɵɵtemplate(25, StepperLabelPositionBottomExample_ng_template_25_Template, 1, 0, "ng-template", 4);
                i0__namespace.ɵɵelementStart(26, "p");
                i0__namespace.ɵɵtext(27, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "div");
                i0__namespace.ɵɵelementStart(29, "button", 9);
                i0__namespace.ɵɵtext(30, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(31, "button", 10);
                i0__namespace.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_31_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r0 = i0__namespace.ɵɵreference(1); return _r0.reset(); });
                i0__namespace.ɵɵtext(32, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i2__namespace.MatButton, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-label-position-bottom-example',
                        templateUrl: 'stepper-label-position-bottom-example.html',
                        styleUrls: ['stepper-label-position-bottom-example.css'],
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperOptionalExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperOptionalExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperOptionalExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperOptionalExample.ɵfac = function StepperOptionalExample_Factory(t) { return new (t || StepperOptionalExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperOptionalExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperOptionalExample, selectors: [["stepper-optional-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], [3, "stepControl", "optional"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOptionalExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_0_listener() { return ctx.isOptional = !ctx.isOptional; });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0__namespace.ɵɵelementStart(4, "mat-step", 3);
                i0__namespace.ɵɵelementStart(5, "form", 4);
                i0__namespace.ɵɵtemplate(6, StepperOptionalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(7, "mat-form-field");
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "div");
                i0__namespace.ɵɵelementStart(12, "button", 7);
                i0__namespace.ɵɵtext(13, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-step", 8);
                i0__namespace.ɵɵelementStart(15, "form", 4);
                i0__namespace.ɵɵtemplate(16, StepperOptionalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(17, "mat-form-field");
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div");
                i0__namespace.ɵɵelementStart(22, "button", 10);
                i0__namespace.ɵɵtext(23, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 7);
                i0__namespace.ɵɵtext(25, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-step");
                i0__namespace.ɵɵtemplate(27, StepperOptionalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(28, "p");
                i0__namespace.ɵɵtext(29, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "div");
                i0__namespace.ɵɵelementStart(31, "button", 10);
                i0__namespace.ɵɵtext(32, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "button", 11);
                i0__namespace.ɵɵlistener("click", function StepperOptionalExample_Template_button_click_33_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r0 = i0__namespace.ɵɵreference(3); return _r0.reset(); });
                i0__namespace.ɵɵtext(34, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", !ctx.isOptional ? "Enable optional steps" : "Disable optional steps", "\n");
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup)("optional", ctx.isOptional);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2__namespace.MatButton, i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperOptionalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-optional-example',
                        templateUrl: 'stepper-optional-example.html',
                        styleUrls: ['stepper-optional-example.css']
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperOverviewExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperOverviewExample_ng_template_26_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperOverviewExample.ɵfac = function StepperOverviewExample_Factory(t) { return new (t || StepperOverviewExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperOverviewExample, selectors: [["stepper-overview-example"]], decls: 34, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r3_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-horizontal-stepper", 1, 2);
                i0__namespace.ɵɵelementStart(4, "mat-step", 3);
                i0__namespace.ɵɵelementStart(5, "form", 4);
                i0__namespace.ɵɵtemplate(6, StepperOverviewExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(7, "mat-form-field");
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "div");
                i0__namespace.ɵɵelementStart(12, "button", 7);
                i0__namespace.ɵɵtext(13, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-step", 8);
                i0__namespace.ɵɵelementStart(15, "form", 4);
                i0__namespace.ɵɵelementStart(16, "mat-form-field");
                i0__namespace.ɵɵelementStart(17, "mat-label");
                i0__namespace.ɵɵtext(18, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(19, "input", 9);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "div");
                i0__namespace.ɵɵelementStart(21, "button", 10);
                i0__namespace.ɵɵtext(22, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "button", 7);
                i0__namespace.ɵɵtext(24, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "mat-step");
                i0__namespace.ɵɵtemplate(26, StepperOverviewExample_ng_template_26_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(27, "p");
                i0__namespace.ɵɵtext(28, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(29, "div");
                i0__namespace.ɵɵelementStart(30, "button", 10);
                i0__namespace.ɵɵtext(31, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "button", 11);
                i0__namespace.ɵɵlistener("click", function StepperOverviewExample_Template_button_click_32_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var _r0 = i0__namespace.ɵɵreference(3); return _r0.reset(); });
                i0__namespace.ɵɵtext(33, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("linear", ctx.isLinear);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2__namespace.MatButton, i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-overview-example',
                        templateUrl: 'stepper-overview-example.html',
                        styleUrls: ['stepper-overview-example.css'],
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperStatesExample_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperStatesExample_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperStatesExample_ng_template_25_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
        }
    }
    function StepperStatesExample_ng_template_51_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon");
            i0__namespace.ɵɵtext(1, "call_end");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function StepperStatesExample_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-icon");
            i0__namespace.ɵɵtext(1, "forum");
            i0__namespace.ɵɵelementEnd();
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
    StepperStatesExample.ɵfac = function StepperStatesExample_Factory(t) { return new (t || StepperStatesExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperStatesExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperStatesExample, selectors: [["stepper-states-example"]], features: [i0__namespace.ɵɵProvidersFeature([{
                    provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                }])], decls: 53, vars: 4, consts: [["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"], ["label", "Step 1", "state", "phone"], ["label", "Step 2", "state", "chat"], ["label", "Step 3"], ["matStepperIcon", "phone"], ["matStepperIcon", "chat"]], template: function StepperStatesExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r6_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-horizontal-stepper", null, 0);
                i0__namespace.ɵɵelementStart(2, "mat-step", 1);
                i0__namespace.ɵɵelementStart(3, "form", 2);
                i0__namespace.ɵɵtemplate(4, StepperStatesExample_ng_template_4_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(5, "mat-form-field");
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(8, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "div");
                i0__namespace.ɵɵelementStart(10, "button", 5);
                i0__namespace.ɵɵtext(11, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-step", 1);
                i0__namespace.ɵɵelementStart(13, "form", 2);
                i0__namespace.ɵɵtemplate(14, StepperStatesExample_ng_template_14_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(15, "mat-form-field");
                i0__namespace.ɵɵelementStart(16, "mat-label");
                i0__namespace.ɵɵtext(17, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(18, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "div");
                i0__namespace.ɵɵelementStart(20, "button", 7);
                i0__namespace.ɵɵtext(21, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "button", 5);
                i0__namespace.ɵɵtext(23, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "mat-step");
                i0__namespace.ɵɵtemplate(25, StepperStatesExample_ng_template_25_Template, 1, 0, "ng-template", 3);
                i0__namespace.ɵɵelementStart(26, "p");
                i0__namespace.ɵɵtext(27, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "div");
                i0__namespace.ɵɵelementStart(29, "button", 7);
                i0__namespace.ɵɵtext(30, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(31, "button", 8);
                i0__namespace.ɵɵlistener("click", function StepperStatesExample_Template_button_click_31_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var _r0 = i0__namespace.ɵɵreference(1); return _r0.reset(); });
                i0__namespace.ɵɵtext(32, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "mat-horizontal-stepper");
                i0__namespace.ɵɵelementStart(34, "mat-step", 9);
                i0__namespace.ɵɵelementStart(35, "p");
                i0__namespace.ɵɵtext(36, "Put down your phones.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "div");
                i0__namespace.ɵɵelementStart(38, "button", 5);
                i0__namespace.ɵɵtext(39, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(40, "mat-step", 10);
                i0__namespace.ɵɵelementStart(41, "p");
                i0__namespace.ɵɵtext(42, "Socialize with each other.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(43, "div");
                i0__namespace.ɵɵelementStart(44, "button", 7);
                i0__namespace.ɵɵtext(45, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(46, "button", 5);
                i0__namespace.ɵɵtext(47, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "mat-step", 11);
                i0__namespace.ɵɵelementStart(49, "p");
                i0__namespace.ɵɵtext(50, "You're welcome.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(51, StepperStatesExample_ng_template_51_Template, 2, 0, "ng-template", 12);
                i0__namespace.ɵɵtemplate(52, StepperStatesExample_ng_template_52_Template, 2, 0, "ng-template", 13);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i2__namespace.MatButton, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious, i3__namespace.MatStepperIcon, i6__namespace.MatIcon], styles: [".mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperStatesExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-states-example',
                        templateUrl: 'stepper-states-example.html',
                        styleUrls: ['stepper-states-example.css'],
                        providers: [{
                                provide: stepper.STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
                            }]
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperVerticalExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your name");
        }
    }
    function StepperVerticalExample_ng_template_16_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Fill out your address");
        }
    }
    function StepperVerticalExample_ng_template_27_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
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
    StepperVerticalExample.ɵfac = function StepperVerticalExample_Factory(t) { return new (t || StepperVerticalExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder)); };
    StepperVerticalExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperVerticalExample, selectors: [["stepper-vertical-example"]], decls: 35, vars: 6, consts: [["mat-raised-button", "", "id", "toggle-linear", 3, "click"], [3, "linear"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperVerticalExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r4_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_0_listener() { return ctx.isLinear = !ctx.isLinear; });
                i0__namespace.ɵɵtext(1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(2, "mat-vertical-stepper", 1, 2);
                i0__namespace.ɵɵelementStart(4, "mat-step", 3);
                i0__namespace.ɵɵelementStart(5, "form", 4);
                i0__namespace.ɵɵtemplate(6, StepperVerticalExample_ng_template_6_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(7, "mat-form-field");
                i0__namespace.ɵɵelementStart(8, "mat-label");
                i0__namespace.ɵɵtext(9, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(10, "input", 6);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "div");
                i0__namespace.ɵɵelementStart(12, "button", 7);
                i0__namespace.ɵɵtext(13, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-step", 3);
                i0__namespace.ɵɵelementStart(15, "form", 4);
                i0__namespace.ɵɵtemplate(16, StepperVerticalExample_ng_template_16_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(17, "mat-form-field");
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div");
                i0__namespace.ɵɵelementStart(22, "button", 9);
                i0__namespace.ɵɵtext(23, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 7);
                i0__namespace.ɵɵtext(25, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-step");
                i0__namespace.ɵɵtemplate(27, StepperVerticalExample_ng_template_27_Template, 1, 0, "ng-template", 5);
                i0__namespace.ɵɵelementStart(28, "p");
                i0__namespace.ɵɵtext(29, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "div");
                i0__namespace.ɵɵelementStart(31, "button", 9);
                i0__namespace.ɵɵtext(32, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(33, "button", 10);
                i0__namespace.ɵɵlistener("click", function StepperVerticalExample_Template_button_click_33_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r0 = i0__namespace.ɵɵreference(3); return _r0.reset(); });
                i0__namespace.ɵɵtext(34, "Reset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵtextInterpolate1(" ", !ctx.isLinear ? "Enable linear mode" : "Disable linear mode", "\n");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("linear", ctx.isLinear);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(9);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
            }
        }, directives: [i2__namespace.MatButton, i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i3__namespace.MatStepLabel, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], styles: [".mat-stepper-vertical[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperVerticalExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-vertical-example',
                        templateUrl: 'stepper-vertical-example.html',
                        styleUrls: ['stepper-vertical-example.css']
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }]; }, null);
    })();

    function StepperHarnessExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "One");
        }
    }
    function StepperHarnessExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Two");
        }
    }
    function StepperHarnessExample_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Three");
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
    StepperHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-horizontal-stepper");
                i0__namespace.ɵɵelementStart(1, "mat-step");
                i0__namespace.ɵɵtemplate(2, StepperHarnessExample_ng_template_2_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵtext(4, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-step", 2);
                i0__namespace.ɵɵtemplate(6, StepperHarnessExample_ng_template_6_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵelementStart(7, "button", 3);
                i0__namespace.ɵɵtext(8, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 1);
                i0__namespace.ɵɵtext(10, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-step", 2);
                i0__namespace.ɵɵtemplate(12, StepperHarnessExample_ng_template_12_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵelementStart(13, "button", 3);
                i0__namespace.ɵɵtext(14, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i3__namespace.MatStepper, i3__namespace.MatStep, i3__namespace.MatStepLabel, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-harness-example',
                        templateUrl: 'stepper-harness-example.html',
                    }]
            }], null, null);
    })();

    function StepperLazyContentExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Step 1");
        }
    }
    function StepperLazyContentExample_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵtext(1, "This content was rendered lazily");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(2, "button", 3);
            i0__namespace.ɵɵtext(3, "Next");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function StepperLazyContentExample_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Step 2");
        }
    }
    function StepperLazyContentExample_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵtext(1, "This content was also rendered lazily");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(2, "button", 2);
            i0__namespace.ɵɵtext(3, "Back");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 3);
            i0__namespace.ɵɵtext(5, "Next");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function StepperLazyContentExample_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Step 3");
        }
    }
    /**
     * @title Stepper lazy content rendering
     */
    var StepperLazyContentExample = /** @class */ (function () {
        function StepperLazyContentExample() {
        }
        return StepperLazyContentExample;
    }());
    StepperLazyContentExample.ɵfac = function StepperLazyContentExample_Factory(t) { return new (t || StepperLazyContentExample)(); };
    StepperLazyContentExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperLazyContentExample, selectors: [["stepper-lazy-content-example"]], decls: 13, vars: 0, consts: [["matStepLabel", ""], ["matStepContent", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""]], template: function StepperLazyContentExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-vertical-stepper");
                i0__namespace.ɵɵelementStart(1, "mat-step");
                i0__namespace.ɵɵtemplate(2, StepperLazyContentExample_ng_template_2_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵtemplate(3, StepperLazyContentExample_ng_template_3_Template, 4, 0, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-step");
                i0__namespace.ɵɵtemplate(5, StepperLazyContentExample_ng_template_5_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵtemplate(6, StepperLazyContentExample_ng_template_6_Template, 6, 0, "ng-template", 1);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-step");
                i0__namespace.ɵɵtemplate(8, StepperLazyContentExample_ng_template_8_Template, 1, 0, "ng-template", 0);
                i0__namespace.ɵɵelementStart(9, "p");
                i0__namespace.ɵɵtext(10, "This content was rendered eagerly");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 2);
                i0__namespace.ɵɵtext(12, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i3__namespace.MatStepper, i3__namespace.MatStep, i3__namespace.MatStepLabel, i3__namespace.MatStepContent, i2__namespace.MatButton, i3__namespace.MatStepperPrevious, i3__namespace.MatStepperNext], styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperLazyContentExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-lazy-content-example',
                        templateUrl: 'stepper-lazy-content-example.html',
                        styleUrls: ['stepper-lazy-content-example.css'],
                    }]
            }], null, null);
    })();

    function StepperResponsiveExample_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Make your screen smaller to see a vertical stepper");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function StepperResponsiveExample_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Make your screen larger to see a horizontal stepper");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function StepperResponsiveExample_ng_template_38_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵtext(0, "Done");
        }
    }
    /**
     * @title Stepper responsive
     */
    var StepperResponsiveExample = /** @class */ (function () {
        function StepperResponsiveExample(_formBuilder, breakpointObserver) {
            this._formBuilder = _formBuilder;
            this.firstFormGroup = this._formBuilder.group({
                firstCtrl: ['', i1.Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
                secondCtrl: ['', i1.Validators.required]
            });
            this.thirdFormGroup = this._formBuilder.group({
                thirdCtrl: ['', i1.Validators.required]
            });
            this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
                .pipe(operators.map(function (_a) {
                var matches = _a.matches;
                return matches ? 'horizontal' : 'vertical';
            }));
        }
        return StepperResponsiveExample;
    }());
    StepperResponsiveExample.ɵfac = function StepperResponsiveExample_Factory(t) { return new (t || StepperResponsiveExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace.FormBuilder), i0__namespace.ɵɵdirectiveInject(i2__namespace$1.BreakpointObserver)); };
    StepperResponsiveExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: StepperResponsiveExample, selectors: [["stepper-responsive-example"]], decls: 44, vars: 14, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "example-stepper", 3, "orientation"], ["label", "Fill out your name", 3, "stepControl"], [3, "formGroup"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["label", "Fill out your phone number", 3, "stepControl"], ["matInput", "", "formControlName", "thirdCtrl", "placeholder", "Ex. 12345678", "required", ""], ["matStepLabel", ""]], template: function StepperResponsiveExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementContainerStart(0, 0);
                i0__namespace.ɵɵpipe(1, "async");
                i0__namespace.ɵɵtemplate(2, StepperResponsiveExample_div_2_Template, 2, 0, "div", 1);
                i0__namespace.ɵɵtemplate(3, StepperResponsiveExample_div_3_Template, 2, 0, "div", 1);
                i0__namespace.ɵɵelementContainerEnd();
                i0__namespace.ɵɵelementStart(4, "mat-stepper", 2);
                i0__namespace.ɵɵpipe(5, "async");
                i0__namespace.ɵɵelementStart(6, "mat-step", 3);
                i0__namespace.ɵɵelementStart(7, "form", 4);
                i0__namespace.ɵɵelementStart(8, "mat-form-field");
                i0__namespace.ɵɵelementStart(9, "mat-label");
                i0__namespace.ɵɵtext(10, "Name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(11, "input", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "div");
                i0__namespace.ɵɵelementStart(13, "button", 6);
                i0__namespace.ɵɵtext(14, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-step", 7);
                i0__namespace.ɵɵelementStart(16, "form", 4);
                i0__namespace.ɵɵelementStart(17, "mat-form-field");
                i0__namespace.ɵɵelementStart(18, "mat-label");
                i0__namespace.ɵɵtext(19, "Address");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(20, "input", 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(21, "div");
                i0__namespace.ɵɵelementStart(22, "button", 9);
                i0__namespace.ɵɵtext(23, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "button", 6);
                i0__namespace.ɵɵtext(25, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-step", 10);
                i0__namespace.ɵɵelementStart(27, "form", 4);
                i0__namespace.ɵɵelementStart(28, "mat-form-field");
                i0__namespace.ɵɵelementStart(29, "mat-label");
                i0__namespace.ɵɵtext(30, "Phone number");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(31, "input", 11);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "div");
                i0__namespace.ɵɵelementStart(33, "button", 9);
                i0__namespace.ɵɵtext(34, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "button", 6);
                i0__namespace.ɵɵtext(36, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "mat-step");
                i0__namespace.ɵɵtemplate(38, StepperResponsiveExample_ng_template_38_Template, 1, 0, "ng-template", 12);
                i0__namespace.ɵɵelementStart(39, "p");
                i0__namespace.ɵɵtext(40, "You are now done.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "div");
                i0__namespace.ɵɵelementStart(42, "button", 9);
                i0__namespace.ɵɵtext(43, "Back");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngSwitch", i0__namespace.ɵɵpipeBind1(1, 10, ctx.stepperOrientation));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("ngSwitchCase", "horizontal");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngSwitchCase", "vertical");
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("orientation", i0__namespace.ɵɵpipeBind1(5, 12, ctx.stepperOrientation));
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("stepControl", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.firstFormGroup);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵproperty("stepControl", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.secondFormGroup);
                i0__namespace.ɵɵadvance(10);
                i0__namespace.ɵɵproperty("stepControl", ctx.thirdFormGroup);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("formGroup", ctx.thirdFormGroup);
            }
        }, directives: [i3__namespace$1.NgSwitch, i3__namespace$1.NgSwitchCase, i3__namespace.MatStepper, i3__namespace.MatStep, i1__namespace.ɵNgNoValidate, i1__namespace.NgControlStatusGroup, i1__namespace.FormGroupDirective, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace.DefaultValueAccessor, i1__namespace.NgControlStatus, i1__namespace.FormControlName, i1__namespace.RequiredValidator, i2__namespace.MatButton, i3__namespace.MatStepperNext, i3__namespace.MatStepperPrevious, i3__namespace.MatStepLabel], pipes: [i3__namespace$1.AsyncPipe], styles: [".example-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperResponsiveExample, [{
                type: i0.Component,
                args: [{
                        selector: 'stepper-responsive-example',
                        templateUrl: 'stepper-responsive-example.html',
                        styleUrls: ['stepper-responsive-example.css'],
                    }]
            }], function () { return [{ type: i1__namespace.FormBuilder }, { type: i2__namespace$1.BreakpointObserver }]; }, null);
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
        StepperLazyContentExample,
        StepperResponsiveExample,
    ];
    var StepperExamplesModule = /** @class */ (function () {
        function StepperExamplesModule() {
        }
        return StepperExamplesModule;
    }());
    StepperExamplesModule.ɵfac = function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); };
    StepperExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: StepperExamplesModule });
    StepperExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2.MatButtonModule,
                i6.MatIconModule,
                i5.MatInputModule,
                i3.MatStepperModule,
                i1.ReactiveFormsModule,
                i3$1.CommonModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(StepperExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2.MatButtonModule,
                            i6.MatIconModule,
                            i5.MatInputModule,
                            i3.MatStepperModule,
                            i1.ReactiveFormsModule,
                            i3$1.CommonModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
                StepperErrorsExample,
                StepperHarnessExample,
                StepperLabelPositionBottomExample,
                StepperOptionalExample,
                StepperOverviewExample,
                StepperStatesExample,
                StepperVerticalExample,
                StepperLazyContentExample,
                StepperResponsiveExample], imports: [i2.MatButtonModule,
                i6.MatIconModule,
                i5.MatInputModule,
                i3.MatStepperModule,
                i1.ReactiveFormsModule,
                i3$1.CommonModule], exports: [StepperEditableExample,
                StepperErrorsExample,
                StepperHarnessExample,
                StepperLabelPositionBottomExample,
                StepperOptionalExample,
                StepperOverviewExample,
                StepperStatesExample,
                StepperVerticalExample,
                StepperLazyContentExample,
                StepperResponsiveExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.StepperEditableExample = StepperEditableExample;
    exports.StepperErrorsExample = StepperErrorsExample;
    exports.StepperExamplesModule = StepperExamplesModule;
    exports.StepperHarnessExample = StepperHarnessExample;
    exports.StepperLabelPositionBottomExample = StepperLabelPositionBottomExample;
    exports.StepperLazyContentExample = StepperLazyContentExample;
    exports.StepperOptionalExample = StepperOptionalExample;
    exports.StepperOverviewExample = StepperOverviewExample;
    exports.StepperResponsiveExample = StepperResponsiveExample;
    exports.StepperStatesExample = StepperStatesExample;
    exports.StepperVerticalExample = StepperVerticalExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-stepper.umd.js.map
