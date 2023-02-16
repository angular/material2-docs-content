import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
import { SortHarnessExample } from './sort-harness/sort-harness-example';
import * as i0 from "@angular/core";
export { SortHarnessExample, SortOverviewExample };
const EXAMPLES = [SortHarnessExample, SortOverviewExample];
export class SortExamplesModule {
}
SortExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: SortExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SortExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0-rc.0", ngImport: i0, type: SortExamplesModule, declarations: [SortHarnessExample, SortOverviewExample], imports: [CommonModule, MatSortModule], exports: [SortHarnessExample, SortOverviewExample] });
SortExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: SortExamplesModule, imports: [CommonModule, MatSortModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: SortExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatSortModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLENBQUM7QUFFakQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBTzNELE1BQU0sT0FBTyxrQkFBa0I7O29IQUFsQixrQkFBa0I7cUhBQWxCLGtCQUFrQixpQkFQYixrQkFBa0IsRUFBRSxtQkFBbUIsYUFHN0MsWUFBWSxFQUFFLGFBQWEsYUFIckIsa0JBQWtCLEVBQUUsbUJBQW1CO3FIQU81QyxrQkFBa0IsWUFKbkIsWUFBWSxFQUFFLGFBQWE7Z0dBSTFCLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge1NvcnRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTb3J0SGFybmVzc0V4YW1wbGV9IGZyb20gJy4vc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtTb3J0SGFybmVzc0V4YW1wbGUsIFNvcnRPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtTb3J0SGFybmVzc0V4YW1wbGUsIFNvcnRPdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRTb3J0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRFeGFtcGxlc01vZHVsZSB7fVxuIl19