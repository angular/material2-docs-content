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
let CdkPortalExamplesModule = /** @class */ (() => {
    class CdkPortalExamplesModule {
    }
    CdkPortalExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [PortalModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ CdkPortalExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
    /** @nocollapse */ CdkPortalExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); }, imports: [[PortalModule]] });
    return CdkPortalExamplesModule;
})();
export { CdkPortalExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [PortalModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcG9ydGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdkIsTUFBTSxtREFBbUQsQ0FBQzs7QUFFM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFFLHNCQUFzQixFQUFDLENBQUM7O01BRXBELFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBLE1BTWEsdUJBQXVCOzs7Z0JBTm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztrRkFDWSx1QkFBdUI7b0pBQXZCLHVCQUF1QixrQkFMekIsQ0FBQyxZQUFZLENBQUM7a0NBZnpCO0tBcUJDO1NBRFksdUJBQXVCO3dGQUF2Qix1QkFBdUIsbUJBVmxDLHdCQUF3QjtRQUN4QixzQkFBc0IsYUFJWixZQUFZLGFBTHRCLHdCQUF3QjtRQUN4QixzQkFBc0I7a0RBU1gsdUJBQXVCO2NBTm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ29tcG9uZW50UG9ydGFsRXhhbXBsZVxufSBmcm9tICcuL2Nkay1wb3J0YWwtb3ZlcnZpZXcvY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsIENvbXBvbmVudFBvcnRhbEV4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLFxuICBDb21wb25lbnRQb3J0YWxFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1BvcnRhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=