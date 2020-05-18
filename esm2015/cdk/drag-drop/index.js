/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const EXAMPLES = [
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
let CdkDragDropExamplesModule = /** @class */ (() => {
    class CdkDragDropExamplesModule {
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
    /** @nocollapse */ CdkDragDropExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkDragDropExamplesModule });
    /** @nocollapse */ CdkDragDropExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkDragDropExamplesModule_Factory(t) { return new (t || CdkDragDropExamplesModule)(); }, imports: [[
                DragDropModule,
                OverlayModule,
                CommonModule,
            ]] });
    return CdkDragDropExamplesModule;
})();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQ0wsMEJBQTBCLEVBQzNCLE1BQU0sMkRBQTJELENBQUM7QUFDbkUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUNMLHVDQUF1QyxFQUN4QyxNQUFNLHVGQUF1RixDQUFDO0FBQy9GLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsbUNBQW1DLEVBQ3BDLE1BQU0sNkVBQTZFLENBQUM7QUFDckYsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLHFFQUFxRSxDQUFDO0FBQzdFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx5RUFBeUUsQ0FBQztBQUNqRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2pDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLGtDQUFrQyxFQUNuQyxNQUFNLDZFQUE2RSxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFDTCxtQ0FBbUMsRUFDcEMsTUFBTSw2RUFBNkUsQ0FBQztBQUNyRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRWhHLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsMEJBQTBCLEVBQzFCLGtDQUFrQyxFQUNsQyx1Q0FBdUMsRUFDdkMsbUNBQW1DLEVBQ25DLCtCQUErQixFQUMvQix1QkFBdUIsRUFDdkIsMEJBQTBCLEVBQzFCLGlDQUFpQyxFQUNqQyxnQ0FBZ0MsRUFDaEMsa0NBQWtDLEVBQ2xDLHdCQUF3QixFQUN4QixtQ0FBbUMsRUFDbkMsMEJBQTBCLEVBQzFCLDZCQUE2QixFQUM3Qix5QkFBeUIsR0FDMUIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyx1Q0FBdUM7SUFDdkMsbUNBQW1DO0lBQ25DLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsa0NBQWtDO0lBQ2xDLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFFRDtJQUFBLE1BVWEseUJBQXlCOzs7Z0JBVnJDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7O29GQUNZLHlCQUF5Qjt3SkFBekIseUJBQXlCLGtCQVQzQjtnQkFDUCxjQUFjO2dCQUNkLGFBQWE7Z0JBQ2IsWUFBWTthQUNiO29DQXBGSDtLQTBGQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQTVCcEMsMEJBQTBCO1FBQzFCLDBCQUEwQjtRQUMxQixrQ0FBa0M7UUFDbEMsdUNBQXVDO1FBQ3ZDLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0IsdUJBQXVCO1FBQ3ZCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsZ0NBQWdDO1FBQ2hDLGtDQUFrQztRQUNsQyx3QkFBd0I7UUFDeEIsbUNBQW1DO1FBQ25DLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IseUJBQXlCLGFBS3ZCLGNBQWM7UUFDZCxhQUFhO1FBQ2IsWUFBWSxhQXRCZCwwQkFBMEI7UUFDMUIsMEJBQTBCO1FBQzFCLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsbUNBQW1DO1FBQ25DLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyxnQ0FBZ0M7UUFDaEMsa0NBQWtDO1FBQ2xDLHdCQUF3QjtRQUN4QixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qix5QkFBeUI7a0RBYWQseUJBQXlCO2NBVnJDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxhQUFhO29CQUNiLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtPdmVybGF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay9jZGstZHJhZy1kcm9wLWF4aXMtbG9jay1leGFtcGxlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1ib3VuZGFyeS9jZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlXG59IGZyb20gJy4vY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERlbGF5RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRlbGF5L2Nkay1kcmFnLWRyb3AtZGVsYXktZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGVcbn0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGV9IGZyb20gJy4vY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3L2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZVxufSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50L2Nkay1kcmFnLWRyb3Atcm9vdC1lbGVtZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlfSBmcm9tICcuL2Nkay1kcmFnLWRyb3Atc29ydGluZy9jZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka0RyYWdEcm9wQXhpc0xvY2tFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEJvdW5kYXJ5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDb25uZWN0ZWRTb3J0aW5nR3JvdXBFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEZWxheUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERpc2FibGVkU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlLFxuICBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wSG9yaXpvbnRhbFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BSb290RWxlbWVudEV4YW1wbGUsXG4gIENka0RyYWdEcm9wU29ydGluZ0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrRHJhZ0Ryb3BBeGlzTG9ja0V4YW1wbGUsXG4gIENka0RyYWdEcm9wQm91bmRhcnlFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdHcm91cEV4YW1wbGUsXG4gIENka0RyYWdEcm9wQ3VzdG9tUGxhY2Vob2xkZXJFeGFtcGxlLFxuICBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcERlbGF5RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGUsXG4gIENka0RyYWdEcm9wRGlzYWJsZWRTb3J0aW5nRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUsXG4gIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUsXG4gIENka0RyYWdEcm9wSGFuZGxlRXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUsXG4gIENka0RyYWdEcm9wT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtEcmFnRHJvcFJvb3RFbGVtZW50RXhhbXBsZSxcbiAgQ2RrRHJhZ0Ryb3BTb3J0aW5nRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBPdmVybGF5TW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRXhhbXBsZXNNb2R1bGUge1xufVxuIl19