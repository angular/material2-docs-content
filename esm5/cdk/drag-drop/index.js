import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CdkDragDropAxisLockExample } from './cdk-drag-drop-axis-lock/cdk-drag-drop-axis-lock-example';
import { CdkDragDropBoundaryExample } from './cdk-drag-drop-boundary/cdk-drag-drop-boundary-example';
import { CdkDragDropConnectedSortingGroupExample } from './cdk-drag-drop-connected-sorting-group/cdk-drag-drop-connected-sorting-group-example';
import { CdkDragDropConnectedSortingExample } from './cdk-drag-drop-connected-sorting/cdk-drag-drop-connected-sorting-example';
import { CdkDragDropCustomPlaceholderExample } from './cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example';
import { CdkDragDropCustomPreviewExample } from './cdk-drag-drop-custom-preview/cdk-drag-drop-custom-preview-example';
import { CdkDragDropDelayExample } from './cdk-drag-drop-delay/cdk-drag-drop-delay-example';
import { CdkDragDropDisabledSortingExample } from './cdk-drag-drop-disabled-sorting/cdk-drag-drop-disabled-sorting-example';
import { CdkDragDropDisabledExample } from './cdk-drag-drop-disabled/cdk-drag-drop-disabled-example';
import { CdkDragDropEnterPredicateExample } from './cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example';
import { CdkDragDropFreeDragPositionExample } from './cdk-drag-drop-free-drag-position/cdk-drag-drop-free-drag-position-example';
import { CdkDragDropHandleExample } from './cdk-drag-drop-handle/cdk-drag-drop-handle-example';
import { CdkDragDropHorizontalSortingExample } from './cdk-drag-drop-horizontal-sorting/cdk-drag-drop-horizontal-sorting-example';
import { CdkDragDropOverviewExample } from './cdk-drag-drop-overview/cdk-drag-drop-overview-example';
import { CdkDragDropRootElementExample } from './cdk-drag-drop-root-element/cdk-drag-drop-root-element-example';
import { CdkDragDropSortingExample } from './cdk-drag-drop-sorting/cdk-drag-drop-sorting-example';
import * as i0 from "@angular/core";
export { CdkDragDropAxisLockExample, CdkDragDropBoundaryExample, CdkDragDropConnectedSortingExample, CdkDragDropConnectedSortingGroupExample, CdkDragDropCustomPlaceholderExample, CdkDragDropCustomPreviewExample, CdkDragDropDelayExample, CdkDragDropDisabledExample, CdkDragDropDisabledSortingExample, CdkDragDropEnterPredicateExample, CdkDragDropFreeDragPositionExample, CdkDragDropHandleExample, CdkDragDropHorizontalSortingExample, CdkDragDropOverviewExample, CdkDragDropRootElementExample, CdkDragDropSortingExample, };
var EXAMPLES = [
    CdkDragDropAxisLockExample,
    CdkDragDropBoundaryExample,
    CdkDragDropConnectedSortingExample,
    CdkDragDropConnectedSortingGroupExample,
    CdkDragDropCustomPlaceholderExample,
    CdkDragDropCustomPreviewExample,
    CdkDragDropDelayExample,
    CdkDragDropDisabledExample,
    CdkDragDropDisabledSortingExample,
    CdkDragDropEnterPredicateExample,
    CdkDragDropFreeDragPositionExample,
    CdkDragDropHandleExample,
    CdkDragDropHorizontalSortingExample,
    CdkDragDropOverviewExample,
    CdkDragDropRootElementExample,
    CdkDragDropSortingExample,
];
var CdkDragDropExamplesModule = /** @class */ (function () {
    function CdkDragDropExamplesModule() {
    }
    CdkDragDropExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        DragDropModule,
                        OverlayModule,
                        CommonModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    CdkDragDropExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
    CdkDragDropExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); }, imports: [[
                DragDropModule,
                OverlayModule,
                CommonModule,
            ]] });
    return CdkDragDropExamplesModule;
}());
export { CdkDragDropExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkDragDropExamplesModule, { declarations: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample], imports: [DragDropModule,
        OverlayModule,
        CommonModule], exports: [CdkDragDropAxisLockExample,
        CdkDragDropBoundaryExample,
        CdkDragDropConnectedSortingExample,
        CdkDragDropConnectedSortingGroupExample,
        CdkDragDropCustomPlaceholderExample,
        CdkDragDropCustomPreviewExample,
        CdkDragDropDelayExample,
        CdkDragDropDisabledExample,
        CdkDragDropDisabledSortingExample,
        CdkDragDropEnterPredicateExample,
        CdkDragDropFreeDragPositionExample,
        CdkDragDropHandleExample,
        CdkDragDropHorizontalSortingExample,
        CdkDragDropOverviewExample,
        CdkDragDropRootElementExample,
        CdkDragDropSortingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    DragDropModule,
                    OverlayModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLDBCQUEwQixFQUMzQixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFDTCx1Q0FBdUMsRUFDeEMsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxFQUNMLG1DQUFtQyxFQUNwQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0seUVBQXlFLENBQUM7QUFDakYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQ0wsbUNBQW1DLEVBQ3BDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVoRyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUMxQixrQ0FBa0MsRUFDbEMsdUNBQXVDLEVBQ3ZDLG1DQUFtQyxFQUNuQywrQkFBK0IsRUFDL0IsdUJBQXVCLEVBQ3ZCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsZ0NBQWdDLEVBQ2hDLGtDQUFrQyxFQUNsQyx3QkFBd0IsRUFDeEIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IseUJBQXlCLEdBQzFCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQVdDOztnQkFYQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztpRUFDWSx5QkFBeUI7cUlBQXpCLHlCQUF5QixrQkFUM0I7Z0JBQ1AsY0FBYztnQkFDZCxhQUFhO2dCQUNiLFlBQVk7YUFDYjtvQ0FwRkg7Q0EwRkMsQUFYRCxJQVdDO1NBRFkseUJBQXlCO3dGQUF6Qix5QkFBeUIsbUJBNUJwQywwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFLdkIsY0FBYztRQUNkLGFBQWE7UUFDYixZQUFZLGFBdEJkLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtrREFhZCx5QkFBeUI7Y0FWckMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLGFBQWE7b0JBQ2IsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5L2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRGVsYXlFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGVsYXkvY2RrLWRyYWctZHJvcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtc29ydGluZy9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wSGFuZGxlRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWhhbmRsZS9jZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXcvY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQvY2RrLWRyYWctZHJvcC1yb290LWVsZW1lbnQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wU29ydGluZ0V4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1zb3J0aW5nL2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQm91bmRhcnlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERlbGF5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUsXG4gIENka0RyYWdEcm9wSGFuZGxlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BTb3J0aW5nRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRGVsYXlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIYW5kbGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUsXG4gIENka0RyYWdEcm9wUm9vdEVsZW1lbnRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=