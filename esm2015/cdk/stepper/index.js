/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/stepper/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkCustomStepperWithoutFormExample, CustomStepper } from './cdk-custom-stepper-without-form/cdk-custom-stepper-without-form-example';
import { CdkLinearStepperWithFormExample, CustomLinearStepper } from './cdk-linear-stepper-with-form/cdk-linear-stepper-with-form-example';
import { ReactiveFormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
export { CdkCustomStepperWithoutFormExample, CustomStepper, CdkLinearStepperWithFormExample, CustomLinearStepper };
/** @type {?} */
const EXAMPLES = [
    CdkCustomStepperWithoutFormExample,
    CustomStepper,
    CdkLinearStepperWithFormExample,
    CustomLinearStepper
];
export class CdkStepperExamplesModule {
}
CdkStepperExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CdkStepperModule,
                    CommonModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ CdkStepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkStepperExamplesModule });
/** @nocollapse */ CdkStepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkStepperExamplesModule_Factory(t) { return new (t || CdkStepperExamplesModule)(); }, imports: [[
            CdkStepperModule,
            CommonModule,
            ReactiveFormsModule,
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsYUFBYSxFQUNkLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxFQUNILCtCQUErQixFQUMvQixtQkFBbUIsRUFDdEIsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFFbkQsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyxhQUFhLEVBQ2IsK0JBQStCLEVBQy9CLG1CQUFtQixFQUNwQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLG1CQUFtQjtDQUNwQjtBQVlELE1BQU0sT0FBTyx3QkFBd0I7OztZQVZwQyxRQUFRLFNBQUM7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixtQkFBbUI7aUJBQ3RCO2dCQUNILFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7OzREQUNZLHdCQUF3QjsrSEFBeEIsd0JBQXdCLGtCQVR4QjtZQUNMLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osbUJBQW1CO1NBQ3RCO3dGQUtRLHdCQUF3QixtQkFoQm5DLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLG1CQUFtQixhQUtiLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osbUJBQW1CLGFBVnpCLGtDQUFrQztRQUNsQyxhQUFhO1FBQ2IsK0JBQStCO1FBQy9CLG1CQUFtQjtrREFhUix3QkFBd0I7Y0FWcEMsUUFBUTtlQUFDO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxnQkFBZ0I7b0JBQ2hCLFlBQVk7b0JBQ1osbUJBQW1CO2lCQUN0QjtnQkFDSCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc3RlcHBlcic7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSxcbiAgQ3VzdG9tU3RlcHBlclxufSBmcm9tICcuL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7XG4gICAgQ2RrTGluZWFyU3RlcHBlcldpdGhGb3JtRXhhbXBsZSxcbiAgICBDdXN0b21MaW5lYXJTdGVwcGVyXG59IGZyb20gJy4vY2RrLWxpbmVhci1zdGVwcGVyLXdpdGgtZm9ybS9jZGstbGluZWFyLXN0ZXBwZXItd2l0aC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCB7XG4gIENka0N1c3RvbVN0ZXBwZXJXaXRob3V0Rm9ybUV4YW1wbGUsXG4gIEN1c3RvbVN0ZXBwZXIsXG4gIENka0xpbmVhclN0ZXBwZXJXaXRoRm9ybUV4YW1wbGUsXG4gIEN1c3RvbUxpbmVhclN0ZXBwZXJcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtDdXN0b21TdGVwcGVyV2l0aG91dEZvcm1FeGFtcGxlLFxuICBDdXN0b21TdGVwcGVyLFxuICBDZGtMaW5lYXJTdGVwcGVyV2l0aEZvcm1FeGFtcGxlLFxuICBDdXN0b21MaW5lYXJTdGVwcGVyXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ2RrU3RlcHBlck1vZHVsZSxcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTdGVwcGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19