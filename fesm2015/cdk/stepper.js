import * as i1 from '@angular/cdk/stepper';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { Validators, ReactiveFormsModule } from '@angular/forms';

function CustomStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomStepper_button_8_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/** @title A custom CDK stepper without a form */
class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
CdkCustomStepperWithoutFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "example-custom-stepper");
        i0.ɵɵelementStart(1, "cdk-step");
        i0.ɵɵelementStart(2, "p");
        i0.ɵɵtext(3, "This is any content of \"Step 1\"");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "cdk-step");
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "This is any content of \"Step 2\"");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: function () { return [CustomStepper, i1.CdkStep]; }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                templateUrl: './cdk-custom-stepper-without-form-example.html',
                styleUrls: ['./cdk-custom-stepper-without-form-example.css']
            }]
    }], null, null); })();
/** Custom CDK stepper component */
class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomStepper.ɵfac = /*@__PURE__*/ function () { let ɵCustomStepper_BaseFactory; return function CustomStepper_Factory(t) { return (ɵCustomStepper_BaseFactory || (ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper)))(t || CustomStepper); }; }();
CustomStepper.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "header");
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 1);
        i0.ɵɵelementStart(5, "footer", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵtext(7, "\u2190");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CustomStepper_button_8_Template, 2, 3, "button", 4);
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵtext(10, "\u2192");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null); })();

function CustomLinearStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/** @title A custom CDK linear stepper with forms */
class CdkLinearStepperWithFormExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            firstControl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondControl: ['', Validators.required]
        });
    }
    toggleLinearity() {
        this.isLinear = !this.isLinear;
    }
}
CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(i0.ɵɵdirectiveInject(i1$1.FormBuilder)); };
CdkLinearStepperWithFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form-example"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "example-custom-linear-stepper", 0);
        i0.ɵɵelementStart(1, "cdk-step", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵtext(3, "Step 1 input");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "form", 3);
        i0.ɵɵelement(5, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "cdk-step", 1);
        i0.ɵɵelementStart(7, "label", 5);
        i0.ɵɵtext(8, "Step 2 input");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "form", 3);
        i0.ɵɵelement(10, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 7);
        i0.ɵɵlistener("click", function CdkLinearStepperWithFormExample_Template_button_click_11_listener() { return ctx.toggleLinearity(); });
        i0.ɵɵtext(12);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("linear", ctx.isLinear);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1(" ", ctx.isLinear ? "Disable linear mode" : "Enable linear mode", "\n");
    } }, directives: function () { return [CustomLinearStepper, i1.CdkStep, i1$1.ɵangular_packages_forms_forms_bb, i1$1.NgControlStatusGroup, i1$1.FormGroupDirective, i1$1.DefaultValueAccessor, i1$1.NgControlStatus, i1$1.FormControlName, i1$1.RequiredValidator]; }, styles: [".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form-example',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: i1$1.FormBuilder }]; }, null); })();
/** Custom CDK linear stepper component */
class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomLinearStepper.ɵfac = /*@__PURE__*/ function () { let ɵCustomLinearStepper_BaseFactory; return function CustomLinearStepper_Factory(t) { return (ɵCustomLinearStepper_BaseFactory || (ɵCustomLinearStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomLinearStepper)))(t || CustomLinearStepper); }; }();
CustomLinearStepper.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomLinearStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "header");
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "div", 1);
        i0.ɵɵelementStart(5, "footer", 2);
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵtext(7, "\u2190");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(8, CustomLinearStepper_button_8_Template, 2, 3, "button", 4);
        i0.ɵɵelementStart(9, "button", 5);
        i0.ɵɵtext(10, "\u2192");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomLinearStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-linear-stepper',
                templateUrl: './example-custom-linear-stepper.html',
                styleUrls: ['./example-custom-linear-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }]
            }]
    }], null, null); })();

const EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkLinearStepperWithFormExample,
    CustomLinearStepper
];
class CdkStepperExamplesModule {
}
CdkStepperExamplesModule.ɵfac = function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); };
CdkStepperExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
CdkStepperExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CdkStepperModule,
            CommonModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper], imports: [CdkStepperModule,
        CommonModule,
        ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkCustomStepperWithoutFormExample, CdkLinearStepperWithFormExample, CdkStepperExamplesModule, CustomLinearStepper, CustomStepper };
//# sourceMappingURL=stepper.js.map
