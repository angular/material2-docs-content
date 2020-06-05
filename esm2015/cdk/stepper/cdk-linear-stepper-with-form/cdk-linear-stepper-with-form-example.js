import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/stepper";
import * as i3 from "@angular/common";
function CustomLinearStepper_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomLinearStepper_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.selectStepByIndex(i_r2); });
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
let CdkLinearStepperWithFormExample = /** @class */ (() => {
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
    CdkLinearStepperWithFormExample.ɵfac = function CdkLinearStepperWithFormExample_Factory(t) { return new (t || CdkLinearStepperWithFormExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    CdkLinearStepperWithFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
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
    return CdkLinearStepperWithFormExample;
})();
export { CdkLinearStepperWithFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
/** Custom CDK linear stepper component */
let CustomLinearStepper = /** @class */ (() => {
    class CustomLinearStepper extends CdkStepper {
        selectStepByIndex(index) {
            this.selectedIndex = index;
        }
    }
    CustomLinearStepper.ɵfac = function CustomLinearStepper_Factory(t) { return ɵCustomLinearStepper_BaseFactory(t || CustomLinearStepper); };
    CustomLinearStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomLinearStepper, selectors: [["example-custom-linear-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomLinearStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 11, vars: 4, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "example-active", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "click"]], template: function CustomLinearStepper_Template(rf, ctx) { if (rf & 1) {
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
    return CustomLinearStepper;
})();
export { CustomLinearStepper };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNPOUQsaUNBTUU7SUFGQSw2TkFBOEI7SUFFOUIsWUFDRjtJQUFBLGlCQUFTOzs7O0lBTFAsK0RBQTRDO0lBSTVDLGVBQ0Y7SUFERSw4Q0FDRjs7QURaSixvREFBb0Q7QUFDcEQ7SUFBQSxNQUthLCtCQUErQjtRQUsxQyxZQUE2QixZQUF5QjtZQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtZQUp0RCxhQUFRLEdBQUcsSUFBSSxDQUFDO1lBS1osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDMUMsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDMUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztnQkFDM0MsYUFBYSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7YUFDM0MsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVELGVBQWU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxDQUFDOztrSEFoQlUsK0JBQStCO3dFQUEvQiwrQkFBK0I7WUVWNUMsd0RBQ0U7WUFBQSxtQ0FDRTtZQUFBLGdDQUEwQjtZQUFBLDRCQUFZO1lBQUEsaUJBQVE7WUFDOUMsK0JBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFPO1lBQ1QsaUJBQVc7WUFDWCxtQ0FDRTtZQUFBLGdDQUEwQjtZQUFBLDRCQUFZO1lBQUEsaUJBQVE7WUFDOUMsK0JBQ0U7WUFBQSw0QkFDRjtZQUFBLGlCQUFPO1lBQ1QsaUJBQVc7WUFDYixpQkFBZ0M7WUFDaEMsa0NBQ0U7WUFEMkMsNkdBQVMscUJBQWlCLElBQUM7WUFDdEUsYUFDRjtZQUFBLGlCQUFTOztZQWhCc0IscUNBQW1CO1lBQ3RDLGVBQThCO1lBQTlCLGdEQUE4QjtZQUVoQyxlQUE0QjtZQUE1Qiw4Q0FBNEI7WUFJMUIsZUFBK0I7WUFBL0IsaURBQStCO1lBRWpDLGVBQTZCO1lBQTdCLCtDQUE2QjtZQU1yQyxlQUNGO1lBREUsNkZBQ0Y7K0NGb0JhLG1CQUFtQjswQ0FwQ2hDO0tBMkJDO1NBakJZLCtCQUErQjtrREFBL0IsK0JBQStCO2NBTDNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsNkNBQTZDO2dCQUMxRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzthQUMxRDs7QUFvQkQsMENBQTBDO0FBQzFDO0lBQUEsTUFNYSxtQkFBb0IsU0FBUSxVQUFVO1FBQ2pELGlCQUFpQixDQUFDLEtBQWE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7c0hBSFUsbUJBQW1COzREQUFuQixtQkFBbUIsbUZBRm5CLENBQUMsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxDQUFDO1lDbEN0RSxrQ0FDRTtZQUFBLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSxZQUEyQztZQUFBLGlCQUFLO1lBQ3RELGlCQUFTO1lBRVQseUJBQW1FO1lBRW5FLGlDQUNFO1lBQUEsaUNBQXNEO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUNyRSwwRUFNRTtZQUVGLGlDQUFrRDtZQUFBLHVCQUFNO1lBQUEsaUJBQVM7WUFDbkUsaUJBQVM7WUFDWCxpQkFBVTs7WUFqQkYsZUFBMkM7WUFBM0MsZ0ZBQTJDO1lBRzVDLGVBQXVEO1lBQXZELDZFQUF1RDtZQU94RCxlQUF5QztZQUF6QyxtQ0FBeUM7OzhCRFovQztLQXdDQztTQUpZLG1CQUFtQjtrRUFBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLENBQUM7YUFDckUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIEEgY3VzdG9tIENESyBsaW5lYXIgc3RlcHBlciB3aXRoIGZvcm1zICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUge1xuICBpc0xpbmVhciA9IHRydWU7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICBmaXJzdENvbnRyb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgc2Vjb25kQ29udHJvbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGVMaW5lYXJpdHkoKSB7XG4gICAgICB0aGlzLmlzTGluZWFyID0gIXRoaXMuaXNMaW5lYXI7XG4gIH1cbn1cblxuLyoqIEN1c3RvbSBDREsgbGluZWFyIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tTGluZWFyU3RlcHBlcn1dXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUxpbmVhclN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgc2VsZWN0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoZWFkZXI+XG4gICAgPGgyPlN0ZXAge3tzZWxlY3RlZEluZGV4ICsgMX19L3t7c3RlcHMubGVuZ3RofX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkID8gc2VsZWN0ZWQuY29udGVudCA6IG51bGxcIj48L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0U3RlcEJ5SW5kZXgoaSlcIlxuICAgID5cbiAgICAgIFN0ZXAge3sgaSArIDEgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIiwiPGV4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyIFtsaW5lYXJdPVwiaXNMaW5lYXJcIj5cbiAgPGNkay1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBmb3I9XCJzdGVwT25lSW5wdXRcIj5TdGVwIDEgaW5wdXQ8L2xhYmVsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDb250cm9sXCIgaWQ9XCJzdGVwT25lSW5wdXRcIiByZXF1aXJlZD5cbiAgICA8L2Zvcm0+XG4gIDwvY2RrLXN0ZXA+XG4gIDxjZGstc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGxhYmVsIGZvcj1cInN0ZXBUd29JbnB1dFwiPlN0ZXAgMiBpbnB1dDwvbGFiZWw+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ29udHJvbFwiIGlkPVwic3RlcFR3b0lucHV0XCIgcmVxdWlyZWQ+XG4gICAgPC9mb3JtPlxuICA8L2Nkay1zdGVwPlxuPC9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlcj5cbjxidXR0b24gY2xhc3M9XCJleGFtcGxlLXRvZ2dsZS1saW5lYXItYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUxpbmVhcml0eSgpXCI+XG4gIHt7aXNMaW5lYXIgPyAnRGlzYWJsZSBsaW5lYXIgbW9kZScgOiAnRW5hYmxlIGxpbmVhciBtb2RlJ319XG48L2J1dHRvbj5cbiJdfQ==