import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
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
export class CdkCustomStepperWithoutFormExample {
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
export class CustomStepper extends CdkStepper {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztJQ1E1QyxpQ0FLQztJQURDLG1QQUE4QjtJQUU5QixZQUNGO0lBQUEsaUJBQVM7Ozs7SUFMUCwrREFBNEM7SUFJNUMsZUFDRjtJQURFLDhDQUNGOztBRGJKLGlEQUFpRDtBQU1qRCxNQUFNLE9BQU8sa0NBQWtDOztvSEFBbEMsa0NBQWtDO3FGQUFsQyxrQ0FBa0M7UUVUL0MsOENBQXdCO1FBQ3RCLGdDQUFVO1FBQUMseUJBQUc7UUFBQSxpREFBK0I7UUFBQSxpQkFBSTtRQUFDLGlCQUFXO1FBQzdELGdDQUFVO1FBQUMseUJBQUc7UUFBQSxpREFBK0I7UUFBQSxpQkFBSTtRQUFDLGlCQUFXO1FBQy9ELGlCQUF5QjsyQ0ZlWixhQUFhO3VGQVRiLGtDQUFrQztjQUw5QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsV0FBVyxFQUFFLGdEQUFnRDtnQkFDN0QsU0FBUyxFQUFFLENBQUMsK0NBQStDLENBQUM7YUFDN0Q7O0FBR0QsbUNBQW1DO0FBT25DLE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTtJQUMzQyxpQkFBaUIsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O3lOQUhVLGFBQWEsU0FBYixhQUFhO2dFQUFiLGFBQWEsNEVBRmIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBQyxDQUFDO1FDaEJoRSxrQ0FBbUM7UUFDakMsOEJBQVE7UUFDTiwwQkFBSTtRQUFBLFlBQStDO1FBQUEsaUJBQUs7UUFDMUQsaUJBQVM7UUFFVCx5QkFBbUU7UUFFbkUsaUNBQTRDO1FBQzFDLGlDQUFzRDtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDckUsb0VBT1M7UUFDVCxpQ0FBa0Q7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ25FLGlCQUFTO1FBQ1gsaUJBQVU7O1FBakJGLGVBQStDO1FBQS9DLGdGQUErQztRQUdoRCxlQUF1RDtRQUF2RCw2RUFBdUQ7UUFPdkMsZUFBVTtRQUFWLG1DQUFVOzt1RkRNcEIsYUFBYTtjQU56QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLGVBQWUsRUFBQyxDQUFDO2FBQy9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtTdGVwcGVyfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5cbi8qKiBAdGl0bGUgQSBjdXN0b20gQ0RLIHN0ZXBwZXIgd2l0aG91dCBhIGZvcm0gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlIHt9XG5cbi8qKiBDdXN0b20gQ0RLIHN0ZXBwZXIgY29tcG9uZW50ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLWN1c3RvbS1zdGVwcGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tU3RlcHBlcn1dXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgc2VsZWN0U3RlcEJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoZWFkZXI+XG4gICAgPGgyPlN0ZXAge3sgc2VsZWN0ZWRJbmRleCArIDEgfX0ve3sgc3RlcHMubGVuZ3RoIH19PC9oMj5cbiAgPC9oZWFkZXI+XG5cbiAgPGRpdiBbbmdUZW1wbGF0ZU91dGxldF09XCJzZWxlY3RlZCA/IHNlbGVjdGVkLmNvbnRlbnQgOiBudWxsXCI+PC9kaXY+XG5cbiAgPGZvb3RlciBjbGFzcz1cImV4YW1wbGUtc3RlcC1uYXZpZ2F0aW9uLWJhclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyUHJldmlvdXM+JmxhcnI7PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJleGFtcGxlLXN0ZXBcIlxuICAgICAgW2NsYXNzLmV4YW1wbGUtYWN0aXZlXT1cInNlbGVjdGVkSW5kZXggPT09IGlcIlxuICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2Ygc3RlcHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgKGNsaWNrKT1cInNlbGVjdFN0ZXBCeUluZGV4KGkpXCJcbiAgICA+XG4gICAgICBTdGVwIHt7IGkgKyAxIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJOZXh0PiZyYXJyOzwvYnV0dG9uPlxuICA8L2Zvb3Rlcj5cbjwvc2VjdGlvbj5cbiIsIjxleGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDFcIjwvcD4gPC9jZGstc3RlcD5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAyXCI8L3A+IDwvY2RrLXN0ZXA+XG48L2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4iXX0=