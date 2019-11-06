/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
import * as i2 from "@angular/common";
const _c0 = function (a0) { return { "example-active": a0 }; };
function CustomStepper_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 6);
    i0.ɵɵlistener("click", function CustomStepper_button_9_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r4); const i_r2 = ctx.index; const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onClick(i_r2); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.selectedIndex === i_r2));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Step ", i_r2 + 1, " ");
} }
/**
 * \@title A custom CDK stepper without a form
 */
export class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                templateUrl: './cdk-custom-stepper-without-form-example.html',
                styleUrls: ['./cdk-custom-stepper-without-form-example.css']
            },] },
];
/** @nocollapse */ CdkCustomStepperWithoutFormExample.ɵfac = function CdkCustomStepperWithoutFormExample_Factory(t) { return new (t || CdkCustomStepperWithoutFormExample)(); };
/** @nocollapse */ CdkCustomStepperWithoutFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkCustomStepperWithoutFormExample, selectors: [["cdk-custom-stepper-without-form-example"]], decls: 7, vars: 0, template: function CdkCustomStepperWithoutFormExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkCustomStepperWithoutFormExample, [{
        type: Component,
        args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                templateUrl: './cdk-custom-stepper-without-form-example.html',
                styleUrls: ['./cdk-custom-stepper-without-form-example.css']
            }]
    }], null, null);
/**
 * Custom CDK stepper component
 */
export class CustomStepper extends CdkStepper {
    /**
     * @param {?} index
     * @return {?}
     */
    onClick(index) {
        this.selectedIndex = index;
    }
}
CustomStepper.decorators = [
    { type: Component, args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            },] },
];
/** @nocollapse */ CustomStepper.ɵfac = function CustomStepper_Factory(t) { return ɵCustomStepper_BaseFactory(t || CustomStepper); };
/** @nocollapse */ CustomStepper.ɵcmp = i0.ɵɵdefineComponent({ type: CustomStepper, selectors: [["example-custom-stepper"]], features: [i0.ɵɵProvidersFeature([{ provide: CdkStepper, useExisting: CustomStepper }]), i0.ɵɵInheritDefinitionFeature], decls: 12, vars: 5, consts: [[1, "example-container"], [3, "ngTemplateOutlet"], [1, "example-step-navigation-bar"], ["cdkStepperPrevious", "", 1, "example-nav-button"], ["class", "example-step", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["cdkStepperNext", "", 1, "example-nav-button"], [1, "example-step", 3, "ngClass", "click"]], template: function CustomStepper_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵproperty("ngForOf", ctx._stepsArray);
    } }, directives: [i2.NgTemplateOutlet, i1.CdkStepperPrevious, i2.NgForOf, i1.CdkStepperNext, i2.NgClass], styles: [".example-container[_ngcontent-%COMP%] {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active[_ngcontent-%COMP%] {\n  color: blue;\n}\n\n.example-step[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active[_ngcontent-%COMP%] {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n}"] });
const ɵCustomStepper_BaseFactory = i0.ɵɵgetInheritedFactory(CustomStepper);
/*@__PURE__*/ i0.ɵsetClassMetadata(CustomStepper, [{
        type: Component,
        args: [{
                selector: 'example-custom-stepper',
                templateUrl: './example-custom-stepper.html',
                styleUrls: ['./example-custom-stepper.css'],
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }]
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CustomStepper.ngAcceptInputType_linear;
    /** @type {?} */
    CustomStepper.ngAcceptInputType_selectedIndex;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXIuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDVTVDLGlDQU1FO0lBRkEsbU5BQW9CO0lBRXBCLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUpQLG1GQUFxRDtJQUdyRCxlQUNGO0lBREUsOENBQ0Y7Ozs7O0FEVEosTUFBTSxPQUFPLGtDQUFrQzs7O1lBTDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxXQUFXLEVBQUUsZ0RBQWdEO2dCQUM3RCxTQUFTLEVBQUUsQ0FBQywrQ0FBK0MsQ0FBQzthQUM3RDs7b0hBQ1ksa0NBQWtDO3VFQUFsQyxrQ0FBa0M7UUVUL0MsOENBQ0U7UUFBQSxnQ0FBVztRQUFBLHlCQUFHO1FBQUEsaURBQStCO1FBQUEsaUJBQUk7UUFBQyxpQkFBVztRQUM3RCxnQ0FBVztRQUFBLHlCQUFHO1FBQUEsaURBQStCO1FBQUEsaUJBQUk7UUFBQyxpQkFBVztRQUMvRCxpQkFBeUI7MkNGZVosYUFBYTttQ0FUYixrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzdEOzs7OztBQVVELE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7SUFDM0MsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO2FBQ2pFOztnR0FDWSxhQUFhO2tEQUFiLGFBQWEsNEVBRmIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1FDaEJsRSxrQ0FDRTtRQUFBLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSxZQUErQztRQUFBLGlCQUFLO1FBQzFELGlCQUFTO1FBRVQsMkJBQ0U7UUFBQSwyQkFBbUU7UUFDckUsaUJBQU07UUFFTixpQ0FDRTtRQUFBLGlDQUFzRDtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDckUsb0VBTUU7UUFFRixrQ0FBa0Q7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ25FLGlCQUFTO1FBQ1gsaUJBQVU7O1FBbkJGLGVBQStDO1FBQS9DLGdGQUErQztRQUdoRCxlQUE2QztRQUE3QywwREFBNkM7UUFDbEMsZUFBcUM7UUFBckMsdURBQXFDO1FBT2pELGVBQStDO1FBQS9DLHlDQUErQzs7NERES3hDLGFBQWE7bUNBQWIsYUFBYTtjQU56QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7YUFDakU7Ozs7SUFTQyx1Q0FBa0Q7O0lBQ2xELDhDQUF3RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuXG4vKiogQHRpdGxlIEEgY3VzdG9tIENESyBzdGVwcGVyIHdpdGhvdXQgYSBmb3JtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSB7fVxuXG4vKiogQ3VzdG9tIENESyBzdGVwcGVyIGNvbXBvbmVudCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1jdXN0b20tc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmNzcyddLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1N0ZXBwZXIsIHVzZUV4aXN0aW5nOiBDdXN0b21TdGVwcGVyIH1dXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbVN0ZXBwZXIgZXh0ZW5kcyBDZGtTdGVwcGVyIHtcbiAgb25DbGljayhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gIH1cblxuICAvLyBUaGVzZSBwcm9wZXJ0aWVzIGFyZSByZXF1aXJlZCBzbyB0aGF0IHRoZSBJdnkgdGVtcGxhdGUgdHlwZSBjaGVja2VyIGluIHN0cmljdCBtb2RlIGtub3dzXG4gIC8vIHdoYXQga2luZCBvZiB2YWx1ZXMgYXJlIGFjY2VwdGVkIGJ5IHRoZSBgbGluZWFyYCBhbmQgYHNlbGVjdGVkSW5kZXhgIGlucHV0cyB3aGljaFxuICAvLyBhcmUgaW5oZXJpdGVkIGZyb20gYENka1N0ZXBwZXJgLlxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZWFyOiBib29sZWFuIHwgc3RyaW5nO1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgc3RyaW5nO1xufVxuIiwiPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aGVhZGVyPlxuICAgIDxoMj5TdGVwIHt7IHNlbGVjdGVkSW5kZXggKyAxIH19L3t7IHN0ZXBzLmxlbmd0aCB9fTwvaDI+XG4gIDwvaGVhZGVyPlxuXG4gIDxkaXYgW3N0eWxlLmRpc3BsYXldPVwic2VsZWN0ZWQgPyAnYmxvY2snIDogJ25vbmUnXCI+XG4gICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJzZWxlY3RlZC5jb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxmb290ZXIgY2xhc3M9XCJleGFtcGxlLXN0ZXAtbmF2aWdhdGlvbi1iYXJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlclByZXZpb3VzPiZsYXJyOzwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGVwXCJcbiAgICAgICpuZ0Zvcj1cImxldCBzdGVwIG9mIF9zdGVwc0FycmF5OyBsZXQgaSA9IGluZGV4XCJcbiAgICAgIFtuZ0NsYXNzXT1cInsgJ2V4YW1wbGUtYWN0aXZlJzogc2VsZWN0ZWRJbmRleCA9PT0gaSB9XCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrKGkpXCJcbiAgICA+XG4gICAgICBTdGVwIHt7IGkgKyAxIH19XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJOZXh0PiZyYXJyOzwvYnV0dG9uPlxuICA8L2Zvb3Rlcj5cbjwvc2VjdGlvbj5cbiIsIjxleGFtcGxlLWN1c3RvbS1zdGVwcGVyPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDFcIjwvcD4gPC9jZGstc3RlcD5cbiAgPGNkay1zdGVwPiA8cD5UaGlzIGlzIGFueSBjb250ZW50IG9mIFwiU3RlcCAyXCI8L3A+IDwvY2RrLXN0ZXA+XG48L2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4iXX0=