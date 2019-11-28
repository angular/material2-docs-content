/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/portal/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
import * as i0 from "@angular/core";
export { CdkPortalOverviewExample, ComponentPortalExample };
/** @type {?} */
const EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
export class CdkPortalExamplesModule {
}
CdkPortalExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PortalModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [ComponentPortalExample]
            },] },
];
/** @nocollapse */ CdkPortalExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
/** @nocollapse */ CdkPortalExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[
            PortalModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    PortalModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: [ComponentPortalExample]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcG9ydGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdkIsTUFBTSxtREFBbUQsQ0FBQzs7QUFFM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFFLHNCQUFzQixFQUFDLENBQUM7O01BRXBELFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDdkI7QUFVRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFSbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDMUM7OzJEQUNZLHVCQUF1Qjs2SEFBdkIsdUJBQXVCLGtCQVB6QjtZQUNQLFlBQVk7U0FDYjt3RkFLVSx1QkFBdUIsbUJBWmxDLHdCQUF3QjtRQUN4QixzQkFBc0IsYUFLcEIsWUFBWSxhQU5kLHdCQUF3QjtRQUN4QixzQkFBc0I7a0RBV1gsdUJBQXVCO2NBUm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLCBDb21wb25lbnRQb3J0YWxFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBQb3J0YWxNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IFtDb21wb25lbnRQb3J0YWxFeGFtcGxlXVxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=