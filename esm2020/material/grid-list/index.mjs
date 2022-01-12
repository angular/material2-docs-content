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
GridListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: GridListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: GridListExamplesModule, declarations: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample], imports: [CommonModule, MatGridListModule], exports: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample] });
GridListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: GridListExamplesModule, imports: [[CommonModule, MatGridListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: GridListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatGridListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXJGLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0FBRWpGLE1BQU0sUUFBUSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQU8zRixNQUFNLE9BQU8sc0JBQXNCOzswSEFBdEIsc0JBQXNCOzJIQUF0QixzQkFBc0IsaUJBUGpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixhQUc3RSxZQUFZLEVBQUUsaUJBQWlCLGFBSHpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QjsySEFPNUUsc0JBQXNCLFlBSnhCLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2tHQUkvQixzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0R3JpZExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5pbXBvcnQge0dyaWRMaXN0RHluYW1pY0V4YW1wbGV9IGZyb20gJy4vZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZSc7XG5pbXBvcnQge0dyaWRMaXN0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2dyaWQtbGlzdC1vdmVydmlldy9ncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0dyaWRMaXN0SGFybmVzc0V4YW1wbGV9IGZyb20gJy4vZ3JpZC1saXN0LWhhcm5lc3MvZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7R3JpZExpc3REeW5hbWljRXhhbXBsZSwgR3JpZExpc3RIYXJuZXNzRXhhbXBsZSwgR3JpZExpc3RPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtHcmlkTGlzdER5bmFtaWNFeGFtcGxlLCBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlLCBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEdyaWRMaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==