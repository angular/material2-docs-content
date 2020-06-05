/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/stepper/cdk-linear-stepper-with-form/cdk-linear-stepper-with-form-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/stepper";
import * as i3 from "@angular/common";
function CustomLinearStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r9); const i_r7 = ctx.index; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectStepByIndex(i_r7); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-active", ctx_r5.selectedIndex === i_r7);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r7 + 1, " ");
} }
/**
 * \@title A custom CDK linear stepper with forms
 */
export class CdkLinearStepperWithFormExample {
    /**
     * @param {?} _formBuilder
     */
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
    /**
     * @return {?}
     */
    toggleLinearity() {
        this.isLinear = !this.isLinear;
    }
}
CdkLinearStepperWithFormExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-linear-stepper-with-form',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            },] },
];
/** @nocollapse */
CdkLinearStepperWithFormExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ CdkLinearStepperWithFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: function () { return [CustomLinearStepper, i2.CdkStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator]; }, styles: [".example-toggle-linear-button[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    CdkLinearStepperWithFormExample.prototype.isLinear;
    /** @type {?} */
    CdkLinearStepperWithFormExample.prototype.firstFormGroup;
    /** @type {?} */
    CdkLinearStepperWithFormExample.prototype.secondFormGroup;
    /**
     * @type {?}
     * @private
     */
    CdkLinearStepperWithFormExample.prototype._formBuilder;
}
/**
 * Custom CDK linear stepper component
 */
export class CustomLinearStepper extends CdkStepper {
    /**
     * @param {?} index
     * @return {?}
     */
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
}
CustomLinearStepper.decorators = [
    { type: Component, args: [{
                selector: 'example-custom-linear-stepper',
                templateUrl: './example-custom-linear-stepper.html',
                styleUrls: ['./example-custom-linear-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }]
            },] },
];
/** @nocollapse */ CustomLinearStepper.ɵfac = function CustomLinearStepper_Factory(t) { return ɵCustomLinearStepper_BaseFactory(t || CustomLinearStepper); };
/** @nocollapse */ CustomLinearStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomLinearStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i3.NgTemplateOutlet, i2.CdkStepperPrevious, i3.NgForOf, i2.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid blue;\n  color: blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
const ɵCustomLinearStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomLinearStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomLinearStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-linear-stepper',
                templateUrl: './example-custom-linear-stepper.html',
                styleUrls: ['./example-custom-linear-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztJQ085RCxpQ0FNRTtJQUZBLDZOQUE4QjtJQUU5QixZQUNGO0lBQUEsaUJBQVM7Ozs7SUFMUCwrREFBNEM7SUFJNUMsZUFDRjtJQURFLDhDQUNGOzs7OztBRE5KLE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFLMUMsWUFBNkIsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFKdEQsYUFBUSxHQUFHLElBQUksQ0FBQztRQUtaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDMUMsWUFBWSxF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RUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxDQUFDO2FBQ3JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTdGVwcGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgbGluZWFyIHN0ZXBwZXIgd2l0aCBmb3JtcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlIHtcbiAgaXNMaW5lYXIgPSB0cnVlO1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgZmlyc3RDb250cm9sOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgICAgIHNlY29uZENvbnRyb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlTGluZWFyaXR5KCkge1xuICAgICAgdGhpcy5pc0xpbmVhciA9ICF0aGlzLmlzTGluZWFyO1xuICB9XG59XG5cbi8qKiBDdXN0b20gQ0RLIGxpbmVhciBzdGVwcGVyIGNvbXBvbmVudCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrU3RlcHBlciwgdXNlRXhpc3Rpbmc6IEN1c3RvbUxpbmVhclN0ZXBwZXJ9XVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21MaW5lYXJTdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciB7XG4gIHNlbGVjdFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aGVhZGVyPlxuICAgIDxoMj5TdGVwIHt7c2VsZWN0ZWRJbmRleCArIDF9fS97e3N0ZXBzLmxlbmd0aH19PC9oMj5cbiAgPC9oZWFkZXI+XG5cbiAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJzZWxlY3RlZCA/IHNlbGVjdGVkLmNvbnRlbnQgOiBudWxsXCI+PC9kaXY+XG5cbiAgPGZvb3RlciBjbGFzcz1cImV4YW1wbGUtc3RlcC1uYXZpZ2F0aW9uLWJhclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyUHJldmlvdXM+JmxhcnI7PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJleGFtcGxlLXN0ZXBcIlxuICAgICAgW2NsYXNzLmV4YW1wbGUtYWN0aXZlXT1cInNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdFN0ZXBCeUluZGV4KGkpXCJcbiAgICA+XG4gICAgICBTdGVwIHt7IGkgKyAxIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJOZXh0PiZyYXJyOzwvYnV0dG9uPlxuICA8L2Zvb3Rlcj5cbjwvc2VjdGlvbj5cbiIsIjxleGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlciBbbGluZWFyXT1cImlzTGluZWFyXCI+XG4gIDxjZGstc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICA8bGFiZWwgZm9yPVwic3RlcE9uZUlucHV0XCI+U3RlcCAxIGlucHV0PC9sYWJlbD5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q29udHJvbFwiIGlkPVwic3RlcE9uZUlucHV0XCIgcmVxdWlyZWQ+XG4gICAgPC9mb3JtPlxuICA8L2Nkay1zdGVwPlxuICA8Y2RrLXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBmb3I9XCJzdGVwVHdvSW5wdXRcIj5TdGVwIDIgaW5wdXQ8L2xhYmVsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJJbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cInNlY29uZENvbnRyb2xcIiBpZD1cInN0ZXBUd29JbnB1dFwiIHJlcXVpcmVkPlxuICAgIDwvZm9ybT5cbiAgPC9jZGstc3RlcD5cbjwvZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXI+XG48YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS10b2dnbGUtbGluZWFyLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVMaW5lYXJpdHkoKVwiPlxuICB7e2lzTGluZWFyID8gJ0Rpc2FibGUgbGluZWFyIG1vZGUnIDogJ0VuYWJsZSBsaW5lYXIgbW9kZSd9fVxuPC9idXR0b24+XG4iXX0=