import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
import * as i0 from "@angular/core";
export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
const EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
export class CdkA11yExamplesModule {
}
CdkA11yExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkA11yExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkA11yExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkA11yExamplesModule, declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule, MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] });
CdkA11yExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkA11yExamplesModule, imports: [A11yModule, MatSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: CdkA11yExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, MatSelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDdEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBRXBHLE9BQU8sRUFBQyw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO0FBRWpHLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7O3lIQUFyQixxQkFBcUI7MEhBQXJCLHFCQUFxQixpQkFWaEMsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkIsYUFJakIsVUFBVSxFQUFFLGVBQWUsYUFOckMsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkI7MEhBUWhCLHFCQUFxQixZQUp0QixVQUFVLEVBQUUsZUFBZTtrR0FJMUIscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZSc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZX0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSwgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLCBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsXG4gIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0ExMXlNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBMTF5RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==