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
export class CdkLinearStepperWithFormExample {
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
CdkLinearStepperWithFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkLinearStepperWithFormExample, selectors: [["cdk-linear-stepper-with-form-example"]], decls: 13, vars: 6, consts: [[3, "linear"], [3, "stepControl"], ["for", "stepOneInput"], [3, "formGroup"], ["placeholder", "Input", "formControlName", "firstControl", "id", "stepOneInput", "required", ""], ["for", "stepTwoInput"], ["placeholder", "Input", "formControlName", "secondControl", "id", "stepTwoInput", "required", ""], [1, "example-toggle-linear-button", 3, "click"]], template: function CdkLinearStepperWithFormExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkLinearStepperWithFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-linear-stepper-with-form-example',
                templateUrl: './cdk-linear-stepper-with-form-example.html',
                styleUrls: ['./cdk-linear-stepper-with-form-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
/** Custom CDK linear stepper component */
export class CustomLinearStepper extends CdkStepper {
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
    } }, directives: [i3.NgTemplateOutlet, i2.CdkStepperPrevious, i3.NgForOf, i2.CdkStepperNext], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
const ɵCustomLinearStepper_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(CustomLinearStepper);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CustomLinearStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-linear-stepper',
                templateUrl: './example-custom-linear-stepper.html',
                styleUrls: ['./example-custom-linear-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomLinearStepper }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2V4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyLmh0bWwiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7SUNPOUQsaUNBS0M7SUFEQyw2TkFBOEI7SUFFOUIsWUFDRjtJQUFBLGlCQUFTOzs7O0lBTFAsK0RBQTRDO0lBSTVDLGVBQ0Y7SUFERSw4Q0FDRjs7QURaSixvREFBb0Q7QUFNcEQsTUFBTSxPQUFPLCtCQUErQjtJQUsxQyxZQUE2QixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUp0RCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBS1osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUMxQyxZQUFZLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzNDLGFBQWEsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQzs7OEdBaEJVLCtCQUErQjtvRUFBL0IsK0JBQStCO1FFVjVDLHdEQUFtRDtRQUNqRCxtQ0FBeUM7UUFDdkMsZ0NBQTBCO1FBQUEsNEJBQVk7UUFBQSxpQkFBUTtRQUM5QywrQkFBbUM7UUFDakMsMkJBQXFGO1FBQ3ZGLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxtQ0FBMEM7UUFDeEMsZ0NBQTBCO1FBQUEsNEJBQVk7UUFBQSxpQkFBUTtRQUM5QywrQkFBb0M7UUFDbEMsNEJBQXNGO1FBQ3hGLGlCQUFPO1FBQ1QsaUJBQVc7UUFDYixpQkFBZ0M7UUFDaEMsa0NBQXlFO1FBQTVCLDZHQUFTLHFCQUFpQixJQUFDO1FBQ3RFLGFBQ0Y7UUFBQSxpQkFBUzs7UUFoQnNCLHFDQUFtQjtRQUN0QyxlQUE4QjtRQUE5QixnREFBOEI7UUFFaEMsZUFBNEI7UUFBNUIsOENBQTRCO1FBSTFCLGVBQStCO1FBQS9CLGlEQUErQjtRQUVqQyxlQUE2QjtRQUE3QiwrQ0FBNkI7UUFNckMsZUFDRjtRQURFLDZGQUNGOzJDRm9CYSxtQkFBbUI7dUZBMUJuQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSw2Q0FBNkM7Z0JBQzFELFNBQVMsRUFBRSxDQUFDLDRDQUE0QyxDQUFDO2FBQzFEOztBQW9CRCwwQ0FBMEM7QUFPMUMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFDakQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOztrSEFIVSxtQkFBbUI7d0RBQW5CLG1CQUFtQixtRkFGbkIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLENBQUM7UUNsQ3RFLGtDQUFtQztRQUNqQyw4QkFBUTtRQUNOLDBCQUFJO1FBQUEsWUFBMkM7UUFBQSxpQkFBSztRQUN0RCxpQkFBUztRQUVULHlCQUFtRTtRQUVuRSxpQ0FBNEM7UUFDMUMsaUNBQXNEO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUNyRSwwRUFPUztRQUNULGlDQUFrRDtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDbkUsaUJBQVM7UUFDWCxpQkFBVTs7UUFqQkYsZUFBMkM7UUFBM0MsZ0ZBQTJDO1FBRzVDLGVBQXVEO1FBQXZELDZFQUF1RDtRQU92QyxlQUFVO1FBQVYsbUNBQVU7O2dGRHdCcEIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FOL0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxzQ0FBc0M7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxxQkFBcUIsRUFBQyxDQUFDO2FBQ3JFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTdGVwcGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgbGluZWFyIHN0ZXBwZXIgd2l0aCBmb3JtcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUge1xuICBpc0xpbmVhciA9IHRydWU7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICBmaXJzdENvbnRyb2w6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAgICAgc2Vjb25kQ29udHJvbDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgICAgfSk7XG4gIH1cblxuICB0b2dnbGVMaW5lYXJpdHkoKSB7XG4gICAgICB0aGlzLmlzTGluZWFyID0gIXRoaXMuaXNMaW5lYXI7XG4gIH1cbn1cblxuLyoqIEN1c3RvbSBDREsgbGluZWFyIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tbGluZWFyLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tTGluZWFyU3RlcHBlcn1dXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbUxpbmVhclN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgc2VsZWN0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoZWFkZXI+XG4gICAgPGgyPlN0ZXAge3tzZWxlY3RlZEluZGV4ICsgMX19L3t7c3RlcHMubGVuZ3RofX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkID8gc2VsZWN0ZWQuY29udGVudCA6IG51bGxcIj48L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICBbY2xhc3MuZXhhbXBsZS1hY3RpdmVdPVwic2VsZWN0ZWRJbmRleCA9PT0gaVwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICAoY2xpY2spPVwic2VsZWN0U3RlcEJ5SW5kZXgoaSlcIlxuICAgID5cbiAgICAgIFN0ZXAge3sgaSArIDEgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIiwiPGV4YW1wbGUtY3VzdG9tLWxpbmVhci1zdGVwcGVyIFtsaW5lYXJdPVwiaXNMaW5lYXJcIj5cbiAgPGNkay1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgIDxsYWJlbCBmb3I9XCJzdGVwT25lSW5wdXRcIj5TdGVwIDEgaW5wdXQ8L2xhYmVsPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDb250cm9sXCIgaWQ9XCJzdGVwT25lSW5wdXRcIiByZXF1aXJlZD5cbiAgICA8L2Zvcm0+XG4gIDwvY2RrLXN0ZXA+XG4gIDxjZGstc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgPGxhYmVsIGZvcj1cInN0ZXBUd29JbnB1dFwiPlN0ZXAgMiBpbnB1dDwvbGFiZWw+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cIklucHV0XCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ29udHJvbFwiIGlkPVwic3RlcFR3b0lucHV0XCIgcmVxdWlyZWQ+XG4gICAgPC9mb3JtPlxuICA8L2Nkay1zdGVwPlxuPC9leGFtcGxlLWN1c3RvbS1saW5lYXItc3RlcHBlcj5cbjxidXR0b24gY2xhc3M9XCJleGFtcGxlLXRvZ2dsZS1saW5lYXItYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUxpbmVhcml0eSgpXCI+XG4gIHt7aXNMaW5lYXIgPyAnRGlzYWJsZSBsaW5lYXIgbW9kZScgOiAnRW5hYmxlIGxpbmVhciBtb2RlJ319XG48L2J1dHRvbj5cbiJdfQ==