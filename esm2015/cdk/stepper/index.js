import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import { CdkLinearStepperWithFormExample, CustomLinearStepper } from './cdk-linear-stepper-with-form/cdk-linear-stepper-with-form-example';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, CdkLinearStepperWithFormExample, CustomLinearStepper };
const EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkLinearStepperWithFormExample,
    CustomLinearStepper
];
let CdkStepperExamplesModule = /** @class */ (() => {
    class CdkStepperExamplesModule {
    }
    CdkStepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
    CdkStepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                CdkStepperModule,
                CommonModule,
                ReactiveFormsModule,
            ]] });
    return CdkStepperExamplesModule;
})();
export { CdkStepperExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper], imports: [CdkStepperModule,
        CommonModule,
        ReactiveFormsModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper,
        CdkLinearStepperWithFormExample,
        CustomLinearStepper] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsRUFDZCxNQUFNLDJFQUEyRSxDQUFDO0FBQ25GLE9BQU8sRUFDSCwrQkFBK0IsRUFDL0IsbUJBQW1CLEVBQ3RCLE1BQU0scUVBQXFFLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7O0FBRW5ELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsYUFBYSxFQUNiLCtCQUErQixFQUMvQixtQkFBbUIsRUFDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsbUJBQW1CO0NBQ3BCLENBQUM7QUFFRjtJQUFBLE1BVWEsd0JBQXdCOztnRUFBeEIsd0JBQXdCO21JQUF4Qix3QkFBd0Isa0JBVHhCO2dCQUNMLGdCQUFnQjtnQkFDaEIsWUFBWTtnQkFDWixtQkFBbUI7YUFDdEI7bUNBaENMO0tBc0NDO1NBRFksd0JBQXdCO3dGQUF4Qix3QkFBd0IsbUJBaEJuQyxrQ0FBa0M7UUFDbEMsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixtQkFBbUIsYUFLYixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLG1CQUFtQixhQVZ6QixrQ0FBa0M7UUFDbEMsYUFBYTtRQUNiLCtCQUErQjtRQUMvQixtQkFBbUI7a0RBYVIsd0JBQXdCO2NBVnBDLFFBQVE7ZUFBQztnQkFDTixPQUFPLEVBQUU7b0JBQ0wsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLG1CQUFtQjtpQkFDdEI7Z0JBQ0gsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrU3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXJcbn0gZnJvbSAnLi9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge1xuICAgIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUsXG4gICAgQ3VzdG9tTGluZWFyU3RlcHBlclxufSBmcm9tICcuL2Nkay1saW5lYXItc3RlcHBlci13aXRoLWZvcm0vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQge1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuICBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlLFxuICBDdXN0b21MaW5lYXJTdGVwcGVyXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbiAgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tTGluZWFyU3RlcHBlclxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENka1N0ZXBwZXJNb2R1bGUsXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==