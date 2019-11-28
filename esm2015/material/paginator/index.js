/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/paginator/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PaginatorConfigurableExample } from './paginator-configurable/paginator-configurable-example';
import { PaginatorOverviewExample } from './paginator-overview/paginator-overview-example';
import * as i0 from "@angular/core";
export { PaginatorConfigurableExample, PaginatorOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    PaginatorConfigurableExample,
    PaginatorOverviewExample,
];
export class PaginatorExamplesModule {
}
PaginatorExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ PaginatorExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: PaginatorExamplesModule });
/** @nocollapse */ PaginatorExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PaginatorExamplesModule_Factory(t) { return new (t || PaginatorExamplesModule)(); }, imports: [[
            CommonModule,
            MatInputModule,
            MatPaginatorModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginatorExamplesModule, { declarations: [PaginatorConfigurableExample,
        PaginatorOverviewExample], imports: [CommonModule,
        MatInputModule,
        MatPaginatorModule,
        FormsModule], exports: [PaginatorConfigurableExample,
        PaginatorOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PaginatorExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatInputModule,
                    MatPaginatorModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wYWdpbmF0b3IvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSx5REFBeUQsQ0FBQztBQUNqRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFekYsT0FBTyxFQUNMLDRCQUE0QixFQUM1Qix3QkFBd0IsR0FDekIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIsd0JBQXdCO0NBQ3pCO0FBWUQsTUFBTSxPQUFPLHVCQUF1Qjs7O1lBVm5DLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEI7OzJEQUNZLHVCQUF1Qjs2SEFBdkIsdUJBQXVCLGtCQVR6QjtZQUNQLFlBQVk7WUFDWixjQUFjO1lBQ2Qsa0JBQWtCO1lBQ2xCLFdBQVc7U0FDWjt3RkFJVSx1QkFBdUIsbUJBZGxDLDRCQUE0QjtRQUM1Qix3QkFBd0IsYUFLdEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsV0FBVyxhQVRiLDRCQUE0QjtRQUM1Qix3QkFBd0I7a0RBYWIsdUJBQXVCO2NBVm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge1xuICBQYWdpbmF0b3JDb25maWd1cmFibGVFeGFtcGxlXG59IGZyb20gJy4vcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS9wYWdpbmF0b3ItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQYWdpbmF0b3JPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcGFnaW5hdG9yLW92ZXJ2aWV3L3BhZ2luYXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUGFnaW5hdG9yT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFBhZ2luYXRvckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFBhZ2luYXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yRXhhbXBsZXNNb2R1bGUge1xufVxuIl19