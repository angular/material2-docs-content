import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { SortOverviewExample } from './sort-overview/sort-overview-example';
import { SortHarnessExample } from './sort-harness/sort-harness-example';
import * as i0 from "@angular/core";
export { SortHarnessExample, SortOverviewExample };
const EXAMPLES = [SortHarnessExample, SortOverviewExample];
class SortExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortExamplesModule, declarations: [SortHarnessExample, SortOverviewExample], imports: [CommonModule, MatSortModule], exports: [SortHarnessExample, SortOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortExamplesModule, imports: [CommonModule, MatSortModule] }); }
}
export { SortExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: SortExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatSortModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLENBQUM7QUFFakQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBRTNELE1BS2Esa0JBQWtCO21IQUFsQixrQkFBa0I7b0hBQWxCLGtCQUFrQixpQkFQYixrQkFBa0IsRUFBRSxtQkFBbUIsYUFHN0MsWUFBWSxFQUFFLGFBQWEsYUFIckIsa0JBQWtCLEVBQUUsbUJBQW1CO29IQU81QyxrQkFBa0IsWUFKbkIsWUFBWSxFQUFFLGFBQWE7O1NBSTFCLGtCQUFrQjtnR0FBbEIsa0JBQWtCO2tCQUw5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7U29ydE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zb3J0LW92ZXJ2aWV3L3NvcnQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NvcnRIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zb3J0LWhhcm5lc3Mvc29ydC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1NvcnRIYXJuZXNzRXhhbXBsZSwgU29ydE92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1NvcnRIYXJuZXNzRXhhbXBsZSwgU29ydE92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdFNvcnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU29ydEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=