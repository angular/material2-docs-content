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
GridListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: GridListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-rc.1", ngImport: i0, type: GridListExamplesModule, declarations: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample], imports: [CommonModule, MatGridListModule], exports: [GridListDynamicExample, GridListHarnessExample, GridListOverviewExample] });
GridListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: GridListExamplesModule, imports: [CommonModule, MatGridListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-rc.1", ngImport: i0, type: GridListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatGridListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXJGLE9BQU8sRUFBQyxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSx1QkFBdUIsRUFBQyxDQUFDO0FBRWpGLE1BQU0sUUFBUSxHQUFHLENBQUMsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztBQU8zRixNQUFNLE9BQU8sc0JBQXNCOzt3SEFBdEIsc0JBQXNCO3lIQUF0QixzQkFBc0IsaUJBUGpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1QixhQUc3RSxZQUFZLEVBQUUsaUJBQWlCLGFBSHpCLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLHVCQUF1Qjt5SEFPNUUsc0JBQXNCLFlBSnZCLFlBQVksRUFBRSxpQkFBaUI7Z0dBSTlCLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUM7b0JBQzFDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRHcmlkTGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZ3JpZC1saXN0JztcbmltcG9ydCB7R3JpZExpc3REeW5hbWljRXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJztcbmltcG9ydCB7R3JpZExpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7R3JpZExpc3RIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtHcmlkTGlzdER5bmFtaWNFeGFtcGxlLCBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlLCBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0dyaWRMaXN0RHluYW1pY0V4YW1wbGUsIEdyaWRMaXN0SGFybmVzc0V4YW1wbGUsIEdyaWRMaXN0T3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0R3JpZExpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RFeGFtcGxlc01vZHVsZSB7fVxuIl19