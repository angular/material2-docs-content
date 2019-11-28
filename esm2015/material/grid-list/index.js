/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/grid-list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import * as i0 from "@angular/core";
export { GridListDynamicExample, GridListOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    GridListDynamicExample,
    GridListOverviewExample,
];
export class GridListExamplesModule {
}
GridListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ GridListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
/** @nocollapse */ GridListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); }, imports: [[
            CommonModule,
            MatGridListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFeEYsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix1QkFBdUIsR0FDeEIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsdUJBQXVCO0NBQ3hCO0FBVUQsTUFBTSxPQUFPLHNCQUFzQjs7O1lBUmxDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQjs7MERBQ1ksc0JBQXNCOzJIQUF0QixzQkFBc0Isa0JBUHhCO1lBQ1AsWUFBWTtZQUNaLGlCQUFpQjtTQUNsQjt3RkFJVSxzQkFBc0IsbUJBWmpDLHNCQUFzQjtRQUN0Qix1QkFBdUIsYUFLckIsWUFBWTtRQUNaLGlCQUFpQixhQVBuQixzQkFBc0I7UUFDdEIsdUJBQXVCO2tEQVdaLHNCQUFzQjtjQVJsQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRHcmlkTGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7R3JpZExpc3REeW5hbWljRXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJztcbmltcG9ydCB7R3JpZExpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgR3JpZExpc3REeW5hbWljRXhhbXBsZSxcbiAgR3JpZExpc3RPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgR3JpZExpc3REeW5hbWljRXhhbXBsZSxcbiAgR3JpZExpc3RPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEdyaWRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=