import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DividerOverviewExample } from './divider-overview/divider-overview-example';
import { DividerHarnessExample } from './divider-harness/divider-harness-example';
import * as i0 from "@angular/core";
export { DividerHarnessExample, DividerOverviewExample };
const EXAMPLES = [DividerHarnessExample, DividerOverviewExample];
class DividerExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatListModule], exports: [DividerHarnessExample, DividerOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DividerExamplesModule, imports: [MatDividerModule, MatListModule] }); }
}
export { DividerExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: DividerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDividerModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUV2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFFakUsTUFLYSxxQkFBcUI7bUhBQXJCLHFCQUFxQjtvSEFBckIscUJBQXFCLGlCQVBoQixxQkFBcUIsRUFBRSxzQkFBc0IsYUFHbkQsZ0JBQWdCLEVBQUUsYUFBYSxhQUh6QixxQkFBcUIsRUFBRSxzQkFBc0I7b0hBT2xELHFCQUFxQixZQUp0QixnQkFBZ0IsRUFBRSxhQUFhOztTQUk5QixxQkFBcUI7Z0dBQXJCLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7b0JBQzFDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtEaXZpZGVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2RpdmlkZXItb3ZlcnZpZXcvZGl2aWRlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7RGl2aWRlckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2RpdmlkZXItaGFybmVzcy9kaXZpZGVyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7RGl2aWRlckhhcm5lc3NFeGFtcGxlLCBEaXZpZGVyT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbRGl2aWRlckhhcm5lc3NFeGFtcGxlLCBEaXZpZGVyT3ZlcnZpZXdFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdERpdmlkZXJNb2R1bGUsIE1hdExpc3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRGl2aWRlckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=