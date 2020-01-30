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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUNMLDBCQUEwQixFQUMzQixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFDTCx1Q0FBdUMsRUFDeEMsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQ0wsa0NBQWtDLEVBQ25DLE1BQU0sMkVBQTJFLENBQUM7QUFDbkYsT0FBTyxFQUNMLG1DQUFtQyxFQUNwQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxxRUFBcUUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMxRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0seUVBQXlFLENBQUM7QUFDakYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLGdDQUFnQyxFQUNqQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM3RixPQUFPLEVBQ0wsbUNBQW1DLEVBQ3BDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVoRyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLDBCQUEwQixFQUMxQixrQ0FBa0MsRUFDbEMsdUNBQXVDLEVBQ3ZDLG1DQUFtQyxFQUNuQywrQkFBK0IsRUFDL0IsdUJBQXVCLEVBQ3ZCLDBCQUEwQixFQUMxQixpQ0FBaUMsRUFDakMsZ0NBQWdDLEVBQ2hDLGtDQUFrQyxFQUNsQyx3QkFBd0IsRUFDeEIsbUNBQW1DLEVBQ25DLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IseUJBQXlCLEdBQzFCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsa0NBQWtDO0lBQ2xDLHVDQUF1QztJQUN2QyxtQ0FBbUM7SUFDbkMsK0JBQStCO0lBQy9CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQyxrQ0FBa0M7SUFDbEMsd0JBQXdCO0lBQ3hCLG1DQUFtQztJQUNuQywwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQVVDOztnQkFWQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O2lFQUNZLHlCQUF5QjtxSUFBekIseUJBQXlCLGtCQVIzQjtnQkFDUCxjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsWUFBWTthQUNiO29DQXBGSDtDQXlGQyxBQVZELElBVUM7U0FEWSx5QkFBeUI7d0ZBQXpCLHlCQUF5QixtQkEzQnBDLDBCQUEwQjtRQUMxQiwwQkFBMEI7UUFDMUIsa0NBQWtDO1FBQ2xDLHVDQUF1QztRQUN2QyxtQ0FBbUM7UUFDbkMsK0JBQStCO1FBQy9CLHVCQUF1QjtRQUN2QiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLGdDQUFnQztRQUNoQyxrQ0FBa0M7UUFDbEMsd0JBQXdCO1FBQ3hCLG1DQUFtQztRQUNuQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHlCQUF5QixhQUt2QixjQUFjO1FBQ2QsYUFBYTtRQUNiLFlBQVksYUF0QmQsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGtDQUFrQztRQUNsQyx3QkFBd0I7UUFDeEIsbUNBQW1DO1FBQ25DLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IseUJBQXlCO2tEQVlkLHlCQUF5QjtjQVRyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsYUFBYTtvQkFDYixZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1ib3VuZGFyeS9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERlbGF5RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRlbGF5L2Nkay1kcmFnLWRyb3AtZGVsYXktZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3L2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50L2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atc29ydGluZy9jZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka0RyYWdEcm9wQXhpc0xvY2tFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEZWxheUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGUsXG4gIENka0RyYWdEcm9wU29ydGluZ0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQm91bmRhcnlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERlbGF5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUsXG4gIENka0RyYWdEcm9wSGFuZGxlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BTb3J0aW5nRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRXhhbXBsZXNNb2R1bGUge1xufVxuIl19