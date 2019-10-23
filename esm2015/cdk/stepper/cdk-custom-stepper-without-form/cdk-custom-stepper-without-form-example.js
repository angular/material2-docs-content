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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zdGVwcGVyL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7O0lDVTVDLGlDQU1FO0lBRkEsbU5BQW9CO0lBRXBCLFlBQ0Y7SUFBQSxpQkFBUzs7OztJQUpQLG1GQUFxRDtJQUdyRCxlQUNGO0lBREUsOENBQ0Y7Ozs7O0FEVEosTUFBTSxPQUFPLGtDQUFrQzs7O1lBTDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCxXQUFXLEVBQUUsZ0RBQWdEO2dCQUM3RCxTQUFTLEVBQUUsQ0FBQywrQ0FBK0MsQ0FBQzthQUM3RDs7b0hBQ1ksa0NBQWtDO3VFQUFsQyxrQ0FBa0M7UUVUL0MsOENBQ0U7UUFBQSxnQ0FBVztRQUFBLHlCQUFHO1FBQUEsaURBQStCO1FBQUEsaUJBQUk7UUFBQyxpQkFBVztRQUM3RCxnQ0FBVztRQUFBLHlCQUFHO1FBQUEsaURBQStCO1FBQUEsaUJBQUk7UUFBQyxpQkFBVztRQUMvRCxpQkFBeUI7MkNGZVosYUFBYTttQ0FUYixrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5Q0FBeUM7Z0JBQ25ELFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELFNBQVMsRUFBRSxDQUFDLCtDQUErQyxDQUFDO2FBQzdEOzs7OztBQVVELE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7SUFDM0MsT0FBTyxDQUFDLEtBQWE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O1lBVEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO2FBQ2pFOztnR0FDWSxhQUFhO2tEQUFiLGFBQWEsNEVBRmIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO1FDaEJsRSxrQ0FDRTtRQUFBLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSxZQUErQztRQUFBLGlCQUFLO1FBQzFELGlCQUFTO1FBRVQsMkJBQ0U7UUFBQSwyQkFBbUU7UUFDckUsaUJBQU07UUFFTixpQ0FDRTtRQUFBLGlDQUFzRDtRQUFBLHNCQUFNO1FBQUEsaUJBQVM7UUFDckUsb0VBTUU7UUFFRixrQ0FBa0Q7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ25FLGlCQUFTO1FBQ1gsaUJBQVU7O1FBbkJGLGVBQStDO1FBQS9DLGdGQUErQztRQUdoRCxlQUE2QztRQUE3QywwREFBNkM7UUFDbEMsZUFBcUM7UUFBckMsdURBQXFDO1FBT2pELGVBQStDO1FBQS9DLHlDQUErQzs7NERES3hDLGFBQWE7bUNBQWIsYUFBYTtjQU56QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7YUFDakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgc3RlcHBlciB3aXRob3V0IGEgZm9ybSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUge31cblxuLyoqIEN1c3RvbSBDREsgc3RlcHBlciBjb21wb25lbnQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tU3RlcHBlciB9XVxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciB7XG4gIG9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoZWFkZXI+XG4gICAgPGgyPlN0ZXAge3sgc2VsZWN0ZWRJbmRleCArIDEgfX0ve3sgc3RlcHMubGVuZ3RoIH19PC9oMj5cbiAgPC9oZWFkZXI+XG5cbiAgPGRpdiBbc3R5bGUuZGlzcGxheV09XCJzZWxlY3RlZCA/ICdibG9jaycgOiAnbm9uZSdcIj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkLmNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGZvb3RlciBjbGFzcz1cImV4YW1wbGUtc3RlcC1uYXZpZ2F0aW9uLWJhclwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW5hdi1idXR0b25cIiBjZGtTdGVwcGVyUHJldmlvdXM+JmxhcnI7PC9idXR0b24+XG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3M9XCJleGFtcGxlLXN0ZXBcIlxuICAgICAgKm5nRm9yPVwibGV0IHN0ZXAgb2YgX3N0ZXBzQXJyYXk7IGxldCBpID0gaW5kZXhcIlxuICAgICAgW25nQ2xhc3NdPVwieyAnZXhhbXBsZS1hY3RpdmUnOiBzZWxlY3RlZEluZGV4ID09PSBpIH1cIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgID5cbiAgICAgIFN0ZXAge3sgaSArIDEgfX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIiwiPGV4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMVwiPC9wPiA8L2Nkay1zdGVwPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDJcIjwvcD4gPC9jZGstc3RlcD5cbjwvZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiJdfQ==