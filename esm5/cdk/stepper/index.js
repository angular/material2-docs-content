import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, };
var EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
];
var CdkStepperExamplesModule = /** @class */ (function () {
    function CdkStepperExamplesModule() {
    }
    CdkStepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
    CdkStepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
                CdkStepperModule,
                CommonModule,
            ]] });
    return CdkStepperExamplesModule;
}());
export { CdkStepperExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkStepperExamplesModule, { declarations: [CdkCustomStepperWithoutFormExample,
        CustomStepper], imports: [CdkStepperModule,
        CommonModule], exports: [CdkCustomStepperWithoutFormExample,
        CustomStepper] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkStepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsRUFDZCxNQUFNLDJFQUEyRSxDQUFDOztBQUVuRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLGFBQWEsR0FDZCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixrQ0FBa0M7SUFDbEMsYUFBYTtDQUNkLENBQUM7QUFFRjtJQUFBO0tBVUM7Z0VBRFksd0JBQXdCO21JQUF4Qix3QkFBd0Isa0JBUjFCO2dCQUNQLGdCQUFnQjtnQkFDaEIsWUFBWTthQUNiO21DQXRCSDtDQTRCQyxBQVZELElBVUM7U0FEWSx3QkFBd0I7d0ZBQXhCLHdCQUF3QixtQkFibkMsa0NBQWtDO1FBQ2xDLGFBQWEsYUFLWCxnQkFBZ0I7UUFDaEIsWUFBWSxhQVBkLGtDQUFrQztRQUNsQyxhQUFhO2tEQVlGLHdCQUF3QjtjQVRwQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlclxufSBmcm9tICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlcixcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENka1N0ZXBwZXJNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==