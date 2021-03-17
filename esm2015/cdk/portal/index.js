import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample } from './cdk-portal-overview/cdk-portal-overview-example';
import * as i0 from "@angular/core";
export { CdkPortalOverviewExample, ComponentPortalExample };
const EXAMPLES = [
    CdkPortalOverviewExample,
    ComponentPortalExample,
];
export class CdkPortalExamplesModule {
}
CdkPortalExamplesModule.ɵfac = function CdkPortalExamplesModule_Factory(t) { return new (t || CdkPortalExamplesModule)(); };
CdkPortalExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkPortalExamplesModule });
CdkPortalExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[PortalModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkPortalExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [PortalModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkPortalExamplesModule, { declarations: [CdkPortalOverviewExample,
        ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample,
        ComponentPortalExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcG9ydGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEVBQ3ZCLE1BQU0sbURBQW1ELENBQUM7O0FBRTNELE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBRTFELE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN2QixDQUFDO0FBUUYsTUFBTSxPQUFPLHVCQUF1Qjs7OEZBQXZCLHVCQUF1Qjt5RUFBdkIsdUJBQXVCOzZFQUx6QixDQUFDLFlBQVksQ0FBQzt1RkFLWix1QkFBdUI7Y0FObkMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksdUJBQXVCLG1CQVZsQyx3QkFBd0I7UUFDeEIsc0JBQXNCLGFBSVosWUFBWSxhQUx0Qix3QkFBd0I7UUFDeEIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb3J0YWxNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUsXG4gIENvbXBvbmVudFBvcnRhbEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLCBDb21wb25lbnRQb3J0YWxFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtQb3J0YWxNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9ydGFsRXhhbXBsZXNNb2R1bGUge1xufVxuIl19