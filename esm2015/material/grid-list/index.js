import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import { GridListHarnessExample } from './grid-list-harness/grid-list-harness-example';
import * as i0 from "@angular/core";
export { GridListDynamicExample, GridListHarnessExample, GridListOverviewExample, };
const EXAMPLES = [
    GridListDynamicExample,
    GridListHarnessExample,
    GridListOverviewExample,
];
export class GridListExamplesModule {
}
GridListExamplesModule.ɵfac = function GridListExamplesModule_Factory(t) { return new (t || GridListExamplesModule)(); };
GridListExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: GridListExamplesModule });
GridListExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatGridListModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatGridListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(GridListExamplesModule, { declarations: [GridListDynamicExample,
        GridListHarnessExample,
        GridListOverviewExample], imports: [CommonModule,
        MatGridListModule], exports: [GridListDynamicExample,
        GridListHarnessExample,
        GridListOverviewExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXJGLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtDQUN4QixDQUFDO0FBV0YsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjt3RUFBdEIsc0JBQXNCOzRFQVJ4QjtZQUNQLFlBQVk7WUFDWixpQkFBaUI7U0FDbEI7dUZBS1Usc0JBQXNCO2NBVGxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3dGQUNZLHNCQUFzQixtQkFkakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix1QkFBdUIsYUFLckIsWUFBWTtRQUNaLGlCQUFpQixhQVJuQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3Qtb3ZlcnZpZXcvZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBHcmlkTGlzdER5bmFtaWNFeGFtcGxlLFxuICBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlLFxuICBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0R3JpZExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==