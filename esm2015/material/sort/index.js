import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
import { SortHarnessExample } from './sort-harness/sort-harness-example';
import * as i0 from "@angular/core";
export { SortHarnessExample, SortOverviewExample };
const EXAMPLES = [
    SortHarnessExample,
    SortOverviewExample,
];
export class SortExamplesModule {
}
SortExamplesModule.ɵfac = function SortExamplesModule_Factory(t) { return new (t || SortExamplesModule)(); };
SortExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortExamplesModule });
SortExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatSortModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatSortModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortExamplesModule, { declarations: [SortHarnessExample,
        SortOverviewExample], imports: [CommonModule,
        MatSortModule], exports: [SortHarnessExample,
        SortOverviewExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLENBQUM7QUFFakQsTUFBTSxRQUFRLEdBQUc7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0NBQ3BCLENBQUM7QUFXRixNQUFNLE9BQU8sa0JBQWtCOztvRkFBbEIsa0JBQWtCO29FQUFsQixrQkFBa0I7d0VBUnBCO1lBQ1AsWUFBWTtZQUNaLGFBQWE7U0FDZDt1RkFLVSxrQkFBa0I7Y0FUOUIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQjs7d0ZBQ1ksa0JBQWtCLG1CQWI3QixrQkFBa0I7UUFDbEIsbUJBQW1CLGFBS2pCLFlBQVk7UUFDWixhQUFhLGFBUGYsa0JBQWtCO1FBQ2xCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtTb3J0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NvcnQtb3ZlcnZpZXcvc29ydC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U29ydEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7U29ydEhhcm5lc3NFeGFtcGxlLCBTb3J0T3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNvcnRIYXJuZXNzRXhhbXBsZSxcbiAgU29ydE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0U29ydE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=