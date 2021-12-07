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
SortExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SortExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SortExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SortExamplesModule, declarations: [SortHarnessExample, SortOverviewExample], imports: [CommonModule, MatSortModule], exports: [SortHarnessExample, SortOverviewExample] });
SortExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SortExamplesModule, imports: [[CommonModule, MatSortModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SortExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatSortModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQzs7QUFFdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFFLG1CQUFtQixFQUFDLENBQUM7QUFFakQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0FBTzNELE1BQU0sT0FBTyxrQkFBa0I7O3NIQUFsQixrQkFBa0I7dUhBQWxCLGtCQUFrQixpQkFQYixrQkFBa0IsRUFBRSxtQkFBbUIsYUFHN0MsWUFBWSxFQUFFLGFBQWEsYUFIckIsa0JBQWtCLEVBQUUsbUJBQW1CO3VIQU81QyxrQkFBa0IsWUFKcEIsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDO2tHQUkzQixrQkFBa0I7a0JBTDlCLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQztvQkFDdEMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtTb3J0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NvcnQtb3ZlcnZpZXcvc29ydC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U29ydEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7U29ydEhhcm5lc3NFeGFtcGxlLCBTb3J0T3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbU29ydEhhcm5lc3NFeGFtcGxlLCBTb3J0T3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0U29ydE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTb3J0RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==