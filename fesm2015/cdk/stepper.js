import { CdkStep, CdkStepper, CdkStepperPrevious, CdkStepperNext, CdkStepperModule } from '@angular/cdk/stepper';
import { NgTemplateOutlet, NgForOf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵclassProp, ɵɵadvance, ɵɵtextInterpolate1, ɵɵdefineComponent, ɵsetClassMetadata, Component, ɵɵProvidersFeature, ɵɵInheritDefinitionFeature, ɵɵelement, ɵɵtemplate, ɵɵtextInterpolate2, ɵɵproperty, ɵɵgetInheritedFactory, ɵɵdirectiveInject, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { Validators, FormBuilder, ɵangular_packages_forms_forms_ba, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator, ReactiveFormsModule } from '@angular/forms';

function CustomStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function CustomStepper_button_8_Template_button_click_0_listener() { const restoredCtx = ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/** @title A custom CDK stepper without a form */
class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
CdkCustomStepperWithoutFormExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "example-custom-stepper");
        ɵɵelementStart(1, "cdk-step");
        ɵɵelementStart(2, "p");
        ɵɵtext(3, "This is any content of \"Step 1\"");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(4, "cdk-step");
        ɵɵelementStart(5, "p");
        ɵɵtext(6, "This is any content of \"Step 2\"");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: function () { return [CustomStepper, CdkStep]; }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
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
CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
CustomStepper.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelementStart(1, "header");
        ɵɵelementStart(2, "h2");
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(4, "div", 1);
        ɵɵelementStart(5, "footer", 2);
        ɵɵelementStart(6, "button", 3);
        ɵɵtext(7, "\u2190");
        ɵɵelementEnd();
        ɵɵtemplate(8, CustomStepper_button_8_Template, 2, 3, "button", 4);
        ɵɵelementStart(9, "button", 5);
        ɵɵtext(10, "\u2192");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [NgTemplateOutlet, CdkStepperPrevious, NgForOf, CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
const ɵCustomStepper_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(CustomStepper);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null); })();

function CustomLinearStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { const restoredCtx = ɵɵrestoreView(_r4); const i_r2 = restoredCtx.index; const ctx_r3 = ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassProp("example-active", ctx_r0.selectedIndex === i_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
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
CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(ɵɵdirectiveInject(FormBuilder)); };
CdkLinearStepperWithFormExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form-example"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "example-custom-linear-stepper", 0);
        ɵɵelementStart(1, "cdk-step", 1);
        ɵɵelementStart(2, "label", 2);
        ɵɵtext(3, "Step 1 input");
        ɵɵelementEnd();
        ɵɵelementStart(4, "form", 3);
        ɵɵelement(5, "input", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(6, "cdk-step", 1);
        ɵɵelementStart(7, "label", 5);
        ɵɵtext(8, "Step 2 input");
        ɵɵelementEnd();
        ɵɵelementStart(9, "form", 3);
        ɵɵelement(10, "input", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 7);
        ɵɵlistener("click", function CdkLinearStepperWithFormExample_Template_button_click_11_listener() { return ctx.toggleLinearity(); });
        ɵɵtext(12);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("linear", ctx.isLinear);
        ɵɵadvance(1);
        ɵɵproperty("stepControl", ctx.firstFormGroup);
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.firstFormGroup);
        ɵɵadvance(2);
        ɵɵproperty("stepControl", ctx.secondFormGroup);
        ɵɵadvance(3);
        ɵɵproperty("formGroup", ctx.secondFormGroup);
        ɵɵadvance(3);
        ɵɵtextInterpolate1(" ", ctx.isLinear ? "Disable linear mode" : "Enable linear mode", "\n");
    } }, directives: function () { return [CustomLinearStepper, CdkStep, ɵangular_packages_forms_forms_ba, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, NgControlStatus, FormControlName, RequiredValidator]; }, styles: [".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form-example',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();
/** Custom CDK linear stepper component */
class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomLinearStepper.ɵfac = function CustomLinearStepper_Factory(t) { return ɵCustomLinearStepper_BaseFactory(t || CustomLinearStepper); };
CustomLinearStepper.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomLinearStepper }]), ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelementStart(1, "header");
        ɵɵelementStart(2, "h2");
        ɵɵtext(3);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(4, "div", 1);
        ɵɵelementStart(5, "footer", 2);
        ɵɵelementStart(6, "button", 3);
        ɵɵtext(7, "\u2190");
        ɵɵelementEnd();
        ɵɵtemplate(8, CustomLinearStepper_button_8_Template, 2, 3, "button", 4);
        ɵɵelementStart(9, "button", 5);
        ɵɵtext(10, "\u2192");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
        ɵɵadvance(1);
        ɵɵproperty("ngTemplateOutlet", ctx.selected ? ctx.selected.content : null);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [NgTemplateOutlet, CdkStepperPrevious, NgForOf, CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
const ɵCustomLinearStepper_BaseFactory = /*@__PURE__*/ ɵɵgetInheritedFactory(CustomLinearStepper);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CustomLinearStepper, [{
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
CdkStepperExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
CdkStepperExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[
            CdkStepperModule,
            CommonModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkStepperExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
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
