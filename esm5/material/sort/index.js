import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
import * as i0 from "@angular/core";
export { SortOverviewExample };
var EXAMPLES = [
    SortOverviewExample,
];
var SortExamplesModule = /** @class */ (function () {
    function SortExamplesModule() {
    }
    SortExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatSortModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    SortExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SortExamplesModule });
    SortExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SortExamplesModule_Factory(t) { return new (t || SortExamplesModule)(); }, imports: [[
                CommonModule,
                MatSortModule,
            ]] });
    return SortExamplesModule;
}());
export { SortExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortExamplesModule, { declarations: [SortOverviewExample], imports: [CommonModule,
        MatSortModule], exports: [SortOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatSortModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLENBQUM7QUFFN0IsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7Q0FDcEIsQ0FBQztBQUVGO0lBQUE7S0FTQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7cUJBQ2Q7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7MERBQ1ksa0JBQWtCO3VIQUFsQixrQkFBa0Isa0JBUHBCO2dCQUNQLFlBQVk7Z0JBQ1osYUFBYTthQUNkOzZCQWZIO0NBb0JDLEFBVEQsSUFTQztTQURZLGtCQUFrQjt3RkFBbEIsa0JBQWtCLG1CQVg3QixtQkFBbUIsYUFLakIsWUFBWTtRQUNaLGFBQWEsYUFOZixtQkFBbUI7a0RBV1Isa0JBQWtCO2NBUjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtTb3J0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NvcnQtb3ZlcnZpZXcvc29ydC1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtTb3J0T3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNvcnRPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19