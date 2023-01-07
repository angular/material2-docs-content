import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import { DividerHarnessExample } from './divider-harness/divider-harness-example';
import * as i0 from "@angular/core";
export { DividerHarnessExample, DividerOverviewExample };
const EXAMPLES = [DividerHarnessExample, DividerOverviewExample];
export class DividerExamplesModule {
}
DividerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DividerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-rc.0", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatListModule], exports: [DividerHarnessExample, DividerOverviewExample] });
DividerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: DividerExamplesModule, imports: [MatDividerModule, MatListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-rc.0", ngImport: i0, type: DividerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDividerModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUV2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFPakUsTUFBTSxPQUFPLHFCQUFxQjs7dUhBQXJCLHFCQUFxQjt3SEFBckIscUJBQXFCLGlCQVBoQixxQkFBcUIsRUFBRSxzQkFBc0IsYUFHbkQsZ0JBQWdCLEVBQUUsYUFBYSxhQUh6QixxQkFBcUIsRUFBRSxzQkFBc0I7d0hBT2xELHFCQUFxQixZQUp0QixnQkFBZ0IsRUFBRSxhQUFhO2dHQUk5QixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO29CQUMxQyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7RGl2aWRlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLW92ZXJ2aWV3L2RpdmlkZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9kaXZpZGVyLWhhcm5lc3MvZGl2aWRlci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0RpdmlkZXJIYXJuZXNzRXhhbXBsZSwgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0RpdmlkZXJIYXJuZXNzRXhhbXBsZSwgRGl2aWRlck92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXREaXZpZGVyTW9kdWxlLCBNYXRMaXN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERpdmlkZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19