import * as tslib_1 from "tslib";
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
var EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
];
var CdkStepperExamplesModule = /** @class */ (function () {
    function CdkStepperExamplesModule() {
    }
    CdkStepperExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CdkStepperModule,
                CommonModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], CdkStepperExamplesModule);
    return CdkStepperExamplesModule;
}());
export { CdkStepperExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9zdGVwcGVyL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyxhQUFhLEVBQ2QsTUFBTSwyRUFBMkUsQ0FBQztBQUVuRixJQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQyxhQUFhO0NBQ2QsQ0FBQztBQVVGO0lBQUE7SUFDQSxDQUFDO0lBRFksd0JBQXdCO1FBUnBDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLFlBQVk7YUFDYjtZQUNELFlBQVksRUFBRSxRQUFRO1lBQ3RCLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUM7T0FDVyx3QkFBd0IsQ0FDcEM7SUFBRCwrQkFBQztDQUFBLEFBREQsSUFDQztTQURZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrU3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXJcbn0gZnJvbSAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1N0ZXBwZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==