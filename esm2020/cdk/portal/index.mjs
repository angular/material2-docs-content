import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { CdkPortalOverviewExample, ComponentPortalExample, } from './cdk-portal-overview/cdk-portal-overview-example';
import * as i0 from "@angular/core";
export { CdkPortalOverviewExample, ComponentPortalExample };
const EXAMPLES = [CdkPortalOverviewExample, ComponentPortalExample];
class CdkPortalExamplesModule {
}
CdkPortalExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkPortalExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkPortalExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkPortalExamplesModule, declarations: [CdkPortalOverviewExample, ComponentPortalExample], imports: [PortalModule], exports: [CdkPortalOverviewExample, ComponentPortalExample] });
CdkPortalExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkPortalExamplesModule, imports: [PortalModule] });
export { CdkPortalExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.2", ngImport: i0, type: CdkPortalExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [PortalModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcG9ydGFsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEdBQ3ZCLE1BQU0sbURBQW1ELENBQUM7O0FBRTNELE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBRTFELE1BQU0sUUFBUSxHQUFHLENBQUMsd0JBQXdCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUVwRSxNQUthLHVCQUF1Qjs7MkhBQXZCLHVCQUF1Qjs0SEFBdkIsdUJBQXVCLGlCQVBsQix3QkFBd0IsRUFBRSxzQkFBc0IsYUFHdEQsWUFBWSxhQUhOLHdCQUF3QixFQUFFLHNCQUFzQjs0SEFPckQsdUJBQXVCLFlBSnhCLFlBQVk7U0FJWCx1QkFBdUI7a0dBQXZCLHVCQUF1QjtrQkFMbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvcnRhbE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka1BvcnRhbE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ29tcG9uZW50UG9ydGFsRXhhbXBsZSxcbn0gZnJvbSAnLi9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Q2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLCBDb21wb25lbnRQb3J0YWxFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQ2RrUG9ydGFsT3ZlcnZpZXdFeGFtcGxlLCBDb21wb25lbnRQb3J0YWxFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1BvcnRhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxFeGFtcGxlc01vZHVsZSB7fVxuIl19