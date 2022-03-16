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
DividerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DividerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DividerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DividerExamplesModule, declarations: [DividerHarnessExample, DividerOverviewExample], imports: [MatDividerModule, MatListModule], exports: [DividerHarnessExample, DividerOverviewExample] });
DividerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DividerExamplesModule, imports: [[MatDividerModule, MatListModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.0", ngImport: i0, type: DividerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatDividerModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaXZpZGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUV2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLHNCQUFzQixDQUFDLENBQUM7QUFPakUsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVBoQixxQkFBcUIsRUFBRSxzQkFBc0IsYUFHbkQsZ0JBQWdCLEVBQUUsYUFBYSxhQUh6QixxQkFBcUIsRUFBRSxzQkFBc0I7bUhBT2xELHFCQUFxQixZQUp2QixDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQzsyRkFJL0IscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztvQkFDMUMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge0RpdmlkZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZGl2aWRlci1vdmVydmlldy9kaXZpZGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtEaXZpZGVySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vZGl2aWRlci1oYXJuZXNzL2RpdmlkZXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtEaXZpZGVySGFybmVzc0V4YW1wbGUsIERpdmlkZXJPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtEaXZpZGVySGFybmVzc0V4YW1wbGUsIERpdmlkZXJPdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0RGl2aWRlck1vZHVsZSwgTWF0TGlzdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBEaXZpZGVyRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==