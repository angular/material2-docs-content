import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyListModule } from '@angular/material/legacy-list';
import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import { DividerHarnessExample } from './divider-harness/divider-harness-example';
import * as i0 from "@angular/core";
export { DividerHarnessExample, DividerOverviewExample };
const EXAMPLES = [DividerHarnessExample, DividerOverviewExample];
export class DividerExamplesModule {
}
DividerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DividerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatLegacyListModule], exports: [DividerHarnessExample, DividerOverviewExample] });
DividerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DividerExamplesModule, imports: [MatDividerModule, MatLegacyListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: DividerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDividerModule, MatLegacyListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBQyxDQUFDO0FBRXZELE1BQU0sUUFBUSxHQUFHLENBQUMscUJBQXFCLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQU9qRSxNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBUGhCLHFCQUFxQixFQUFFLHNCQUFzQixhQUduRCxnQkFBZ0IsRUFBRSxtQkFBbUIsYUFIL0IscUJBQXFCLEVBQUUsc0JBQXNCO21IQU9sRCxxQkFBcUIsWUFKdEIsZ0JBQWdCLEVBQUUsbUJBQW1COzJGQUlwQyxxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ2hELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQge01hdExlZ2FjeUxpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1saXN0JztcbmltcG9ydCB7RGl2aWRlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLW92ZXJ2aWV3L2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLWhhcm5lc3MvZGl2aWRlci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZSwgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0RpdmlkZXJIYXJuZXNzRXhhbXBsZSwgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXREaXZpZGVyTW9kdWxlLCBNYXRMZWdhY3lMaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19