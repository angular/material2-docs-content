/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { Directionality } from '@angular/cdk/bidi';
/**
 * \@title A custom CDK stepper without a form
 */
export class CdkCustomStepperWithoutFormExample {
}
CdkCustomStepperWithoutFormExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-custom-stepper-without-form-example',
                template: "<example-custom-stepper>\n  <cdk-step>\n    <p>This is any content of \"Step 1\"</p>\n  </cdk-step>\n  <cdk-step>\n      <p>This is any content of \"Step 2\"</p>\n  </cdk-step>\n</example-custom-stepper>",
                styles: [""]
            }] }
];
/**
 * Custom CDK stepper component
 */
export class CustomStepper extends CdkStepper {
    /**
     * @param {?} dir
     * @param {?} changeDetectorRef
     */
    constructor(dir, changeDetectorRef) {
        super(dir, changeDetectorRef);
    }
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
                template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{selectedIndex + 1}}/{{steps.length}}</h2>\n  </header>\n  \n  <section *ngFor=\"let step of steps; let i = index; let isLast = last\">\n      <div [style.display]=\"selectedIndex === i ? 'block' : 'none'\">\n        <ng-container [ngTemplateOutlet]=\"step.content\"></ng-container>\n      </div>\n  </section>\n  \n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    <button class=\"example-step\" *ngFor=\"let step of steps; let i = index;\" [ngClass]=\"{'example-active': selectedIndex === i}\" (click)=\"onClick(i)\">Step {{i + 1}}</button>\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>",
                providers: [{ provide: CdkStepper, useExisting: CustomStepper }],
                styles: [".example-container {\n  border: 1px solid black;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-active {\n  color: blue;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: black;\n}\n\n.example-step.example-active {\n  color: blue;\n  border-bottom: 1px solid blue;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n}\n"]
            }] }
];
/** @nocollapse */
CustomStepper.ctorParameters = () => [
    { type: Directionality },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * Whether the validity of previous steps should be checked or not
     * @type {?}
     */
    CustomStepper.prototype.linear;
    /**
     * The index of the selected step.
     * @type {?}
     */
    CustomStepper.prototype.selectedIndex;
    /**
     * The list of step components that the stepper is holding.
     * @type {?}
     */
    CustomStepper.prototype.steps;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFhLGlCQUFpQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxVQUFVLEVBQVUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFRakQsTUFBTSxPQUFPLGtDQUFrQzs7O1lBTDlDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUNBQXlDO2dCQUNuRCx1TkFBNkQ7O2FBRTlEOzs7OztBQVVELE1BQU0sT0FBTyxhQUFjLFNBQVEsVUFBVTs7Ozs7SUFVM0MsWUFBWSxHQUFtQixFQUFFLGlCQUFvQztRQUNuRSxLQUFLLENBQUMsR0FBRyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLDh4QkFBNEM7Z0JBRTVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLENBQUM7O2FBQ2pFOzs7O1lBaEJPLGNBQWM7WUFGUSxpQkFBaUI7Ozs7Ozs7SUFxQjdDLCtCQUFnQjs7Ozs7SUFHaEIsc0NBQXNCOzs7OztJQUd0Qiw4QkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgUXVlcnlMaXN0LCBDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka1N0ZXBwZXIsIENka1N0ZXB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcblxuLyoqIEB0aXRsZSBBIGN1c3RvbSBDREsgc3RlcHBlciB3aXRob3V0IGEgZm9ybSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUge31cblxuLyoqIEN1c3RvbSBDREsgc3RlcHBlciBjb21wb25lbnQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtY3VzdG9tLXN0ZXBwZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDZGtTdGVwcGVyLCB1c2VFeGlzdGluZzogQ3VzdG9tU3RlcHBlciB9XSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3RlcHBlciBleHRlbmRzIENka1N0ZXBwZXIge1xuICAvKiogV2hldGhlciB0aGUgdmFsaWRpdHkgb2YgcHJldmlvdXMgc3RlcHMgc2hvdWxkIGJlIGNoZWNrZWQgb3Igbm90ICovXG4gIGxpbmVhcjogYm9vbGVhbjtcblxuICAvKiogVGhlIGluZGV4IG9mIHRoZSBzZWxlY3RlZCBzdGVwLiAqL1xuICBzZWxlY3RlZEluZGV4OiBudW1iZXI7XG5cbiAgLyoqIFRoZSBsaXN0IG9mIHN0ZXAgY29tcG9uZW50cyB0aGF0IHRoZSBzdGVwcGVyIGlzIGhvbGRpbmcuICovXG4gIHN0ZXBzOiBRdWVyeUxpc3Q8Q2RrU3RlcD47XG5cbiAgY29uc3RydWN0b3IoZGlyOiBEaXJlY3Rpb25hbGl0eSwgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZGlyLCBjaGFuZ2VEZXRlY3RvclJlZik7XG4gIH1cblxuICBvbkNsaWNrKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIl19