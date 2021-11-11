import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridListDynamicExample } from './grid-list-dynamic/grid-list-dynamic-example';
import { GridListOverviewExample } from './grid-list-overview/grid-list-overview-example';
import { GridListHarnessExample } from './grid-list-harness/grid-list-harness-example';
import * as i0 from "@angular/core";
export { GridListDynamicExample, GridListHarnessExample, GridListOverviewExample };
const EXAMPLES = [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample];
export class GridListExamplesModule {
}
GridListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: GridListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: GridListExamplesModule, declarations: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample], imports: [CommonModule, MatGridListModule], exports: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample] });
GridListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: GridListExamplesModule, imports: [[CommonModule, MatGridListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: GridListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatGridListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXJGLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0FBRWpGLE1BQU0sUUFBUSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQVEzRixNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBUmpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixhQUc3RSxZQUFZLEVBQUUsaUJBQWlCLGFBSHpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QjtvSEFRNUUsc0JBQXNCLFlBTHhCLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDOzJGQUsvQixzQkFBc0I7a0JBTmxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuaW1wb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3Qtb3ZlcnZpZXcvZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtHcmlkTGlzdEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0dyaWRMaXN0RHluYW1pY0V4YW1wbGUsIEdyaWRMaXN0SGFybmVzc0V4YW1wbGUsIEdyaWRMaXN0T3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbR3JpZExpc3REeW5hbWljRXhhbXBsZSwgR3JpZExpc3RIYXJuZXNzRXhhbXBsZSwgR3JpZExpc3RPdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRHcmlkTGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=