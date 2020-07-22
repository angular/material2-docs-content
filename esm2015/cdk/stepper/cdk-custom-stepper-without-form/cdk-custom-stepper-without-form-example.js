import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
const _c0 = function (a0) { return { "example-active": a0 }; };
function CustomStepper_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomStepper_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onClick(i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.selectedIndex === i_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/** @title A custom CDK stepper without a form */
export class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                templateUrl: './cdk-custom-stepper-without-form-example.html',
                styleUrls: ['./cdk-custom-stepper-without-form-example.css']
            }]
    }], null, null); })();
/** Custom CDK stepper component */
export class CustomStepper extends CdkStepper {
    onClick(index) {
        this.selectedIndex = index;
    }
}
CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
CustomStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "section", 0);
        i0.ɵɵelementStart(1, "header");
        i0.ɵɵelementStart(2, "h2");
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div");
        i0.ɵɵelementContainer(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "footer", 2);
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵtext(8, "\u2190");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, CustomStepper_button_9_Template, 2, 4, "button", 4);
        i0.ɵɵelementStart(10, "button", 5);
        i0.ɵɵtext(11, "\u2192");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate2("Step ", ctx.selectedIndex + 1, "/", ctx.steps.length, "");
        i0.ɵɵadvance(1);
        i0.ɵɵstyleProp("display", ctx.selected ? "block" : "none");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx.selected.content);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.steps);
    } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext, i2.NgClass], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}"] });
const ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper);
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7SUNVNUMsaUNBTUU7SUFGQSw2TUFBb0I7SUFFcEIsWUFDRjtJQUFBLGlCQUFTOzs7O0lBSlAsbUZBQXFEO0lBR3JELGVBQ0Y7SUFERSw4Q0FDRjs7QURmSixpREFBaUQ7QUFNakQsTUFBTSxPQUFPLGtDQUFrQzs7b0hBQWxDLGtDQUFrQzt1RUFBbEMsa0NBQWtDO1FFVC9DLDhDQUNFO1FBQUEsZ0NBQVc7UUFBQSx5QkFBRztRQUFBLGlEQUErQjtRQUFBLGlCQUFJO1FBQUMsaUJBQVc7UUFDN0QsZ0NBQVc7UUFBQSx5QkFBRztRQUFBLGlEQUErQjtRQUFBLGlCQUFJO1FBQUMsaUJBQVc7UUFDL0QsaUJBQXlCOzJDRmVaLGFBQWE7a0RBVGIsa0NBQWtDO2NBTDlDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxXQUFXLEVBQUUsZ0RBQWdEO2dCQUM3RCxTQUFTLEVBQUUsQ0FBQywrQ0FBK0MsQ0FBQzthQUM3RDs7QUFHRCxtQ0FBbUM7QUFPbkMsTUFBTSxPQUFPLGFBQWMsU0FBUSxVQUFVO0lBQzNDLE9BQU8sQ0FBQyxLQUFhO1FBQ25CLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7O2dHQUhVLGFBQWE7a0RBQWIsYUFBYSw0RUFGYixDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7UUNoQmxFLGtDQUNFO1FBQUEsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLFlBQStDO1FBQUEsaUJBQUs7UUFDMUQsaUJBQVM7UUFFVCwyQkFDRTtRQUFBLDJCQUFtRTtRQUNyRSxpQkFBTTtRQUVOLGlDQUNFO1FBQUEsaUNBQXNEO1FBQUEsc0JBQU07UUFBQSxpQkFBUztRQUNyRSxvRUFNRTtRQUVGLGtDQUFrRDtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDbkUsaUJBQVM7UUFDWCxpQkFBVTs7UUFuQkYsZUFBK0M7UUFBL0MsZ0ZBQStDO1FBR2hELGVBQTZDO1FBQTdDLDBEQUE2QztRQUNsQyxlQUFxQztRQUFyQyx1REFBcUM7UUFPakQsZUFBeUM7UUFBekMsbUNBQXlDOzs0RERLbEMsYUFBYTtrREFBYixhQUFhO2NBTnpCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG4vKiogQHRpdGxlIEEgY3VzdG9tIENESyBzdGVwcGVyIHdpdGhvdXQgYSBmb3JtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSB7fVxuXG4vKiogQ3VzdG9tIENESyBzdGVwcGVyIGNvbXBvbmVudCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1jdXN0b20tc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmNzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBDdXN0b21TdGVwcGVyIH1dXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgb25DbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGhlYWRlcj5cbiAgICA8aDI+U3RlcCB7eyBzZWxlY3RlZEluZGV4ICsgMSB9fS97eyBzdGVwcy5sZW5ndGggfX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtzdHlsZS5kaXNwbGF5XT1cInNlbGVjdGVkID8gJ2Jsb2NrJyA6ICdub25lJ1wiPlxuICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwic2VsZWN0ZWQuY29udGVudFwiPjwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICA8YnV0dG9uXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdleGFtcGxlLWFjdGl2ZSc6IHNlbGVjdGVkSW5kZXggPT09IGkgfVwiXG4gICAgICAoY2xpY2spPVwib25DbGljayhpKVwiXG4gICAgPlxuICAgICAgU3RlcCB7eyBpICsgMSB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyTmV4dD4mcmFycjs8L2J1dHRvbj5cbiAgPC9mb290ZXI+XG48L3NlY3Rpb24+XG4iLCI8ZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAxXCI8L3A+IDwvY2RrLXN0ZXA+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMlwiPC9wPiA8L2Nkay1zdGVwPlxuPC9leGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuIl19