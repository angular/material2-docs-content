import * as i0 from '@angular/core';
import { Component, forwardRef } from '@angular/core';
import * as i1 from '@angular/cdk/stepper';
import { CdkStepperModule, CdkStepper } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import * as i1$1 from '@angular/forms';
import { Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

/** @title A custom CDK stepper without a form */
class CdkCustomStepperWithoutFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkCustomStepperWithoutFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: CdkCustomStepperWithoutFormExample, isStandalone: true, selector: "cdk-custom-stepper-without-form-example", ngImport: i0, template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""], dependencies: [{ kind: "component", type: i0.forwardRef(() => CustomStepper), selector: "example-custom-stepper" }, { kind: "ngmodule", type: i0.forwardRef(() => CdkStepperModule) }, { kind: "component", type: i0.forwardRef(() => i1.CdkStep), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkCustomStepperWithoutFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-stepper-without-form-example', standalone: true, imports: [forwardRef(() => CustomStepper), CdkStepperModule], template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n" }]
        }] });
/** Custom CDK stepper component */
class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CustomStepper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: CustomStepper, isStandalone: true, selector: "example-custom-stepper", providers: [{ provide: CdkStepper, useExisting: CustomStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CdkStepperModule }, { kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CustomStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-stepper', providers: [{ provide: CdkStepper, useExisting: CustomStepper }], standalone: true, imports: [NgTemplateOutlet, CdkStepperModule], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });

/** @title A custom CDK linear stepper with forms */
class CdkLinearStepperWithFormExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.firstFormGroup = this._formBuilder.group({
            firstControl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondControl: ['', Validators.required],
        });
    }
    toggleLinearity() {
        this.isLinear = !this.isLinear;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkLinearStepperWithFormExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: CdkLinearStepperWithFormExample, isStandalone: true, selector: "cdk-linear-stepper-with-form-example", ngImport: i0, template: "<example-custom-linear-stepper [linear]=\"isLinear\">\n  <cdk-step [stepControl]=\"firstFormGroup\">\n    <label for=\"stepOneInput\">Step 1 input</label>\n    <form [formGroup]=\"firstFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\n    </form>\n  </cdk-step>\n  <cdk-step [stepControl]=\"secondFormGroup\">\n    <label for=\"stepTwoInput\">Step 2 input</label>\n    <form [formGroup]=\"secondFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\n    </form>\n  </cdk-step>\n</example-custom-linear-stepper>\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\n</button>\n", styles: [".example-toggle-linear-button {\n  margin-left: 10px;\n}\n"], dependencies: [{ kind: "component", type: i0.forwardRef(() => CustomLinearStepper), selector: "example-custom-linear-stepper" }, { kind: "ngmodule", type: i0.forwardRef(() => CdkStepperModule) }, { kind: "component", type: i0.forwardRef(() => i1.CdkStep), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }, { kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.ɵNgNoValidate), selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i0.forwardRef(() => i1$1.DefaultValueAccessor), selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1$1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1$1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkLinearStepperWithFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-linear-stepper-with-form-example', standalone: true, imports: [
                        forwardRef(() => CustomLinearStepper),
                        CdkStepperModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<example-custom-linear-stepper [linear]=\"isLinear\">\n  <cdk-step [stepControl]=\"firstFormGroup\">\n    <label for=\"stepOneInput\">Step 1 input</label>\n    <form [formGroup]=\"firstFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"firstControl\" id=\"stepOneInput\" required>\n    </form>\n  </cdk-step>\n  <cdk-step [stepControl]=\"secondFormGroup\">\n    <label for=\"stepTwoInput\">Step 2 input</label>\n    <form [formGroup]=\"secondFormGroup\">\n      <input placeholder=\"Input\" formControlName=\"secondControl\" id=\"stepTwoInput\" required>\n    </form>\n  </cdk-step>\n</example-custom-linear-stepper>\n<button class=\"example-toggle-linear-button\" (click)=\"toggleLinearity()\">\n  {{isLinear ? 'Disable linear mode' : 'Enable linear mode'}}\n</button>\n", styles: [".example-toggle-linear-button {\n  margin-left: 10px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1$1.FormBuilder }] });
/** Custom CDK linear stepper component */
class CustomLinearStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CustomLinearStepper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: CustomLinearStepper, isStandalone: true, selector: "example-custom-linear-stepper", providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CdkStepperModule }, { kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CustomLinearStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-linear-stepper', providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }], standalone: true, imports: [NgTemplateOutlet, CdkStepperModule], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CdkCustomStepperWithoutFormExample, CdkLinearStepperWithFormExample, CustomLinearStepper, CustomStepper };
//# sourceMappingURL=stepper.mjs.map
