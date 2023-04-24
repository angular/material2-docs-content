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
class CdkA11yExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkA11yExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkA11yExamplesModule, declarations: [FocusMonitorDirectivesExample,
            FocusMonitorFocusViaExample,
            FocusMonitorOverviewExample], imports: [A11yModule, MatSelectModule], exports: [FocusMonitorDirectivesExample,
            FocusMonitorFocusViaExample,
            FocusMonitorOverviewExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkA11yExamplesModule, imports: [A11yModule, MatSelectModule] }); }
}
export { CdkA11yExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: CdkA11yExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, MatSelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDdEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBRXBHLE9BQU8sRUFBQyw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO0FBRWpHLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQUVGLE1BS2EscUJBQXFCO21IQUFyQixxQkFBcUI7b0hBQXJCLHFCQUFxQixpQkFWaEMsNkJBQTZCO1lBQzdCLDJCQUEyQjtZQUMzQiwyQkFBMkIsYUFJakIsVUFBVSxFQUFFLGVBQWUsYUFOckMsNkJBQTZCO1lBQzdCLDJCQUEyQjtZQUMzQiwyQkFBMkI7b0hBUWhCLHFCQUFxQixZQUp0QixVQUFVLEVBQUUsZUFBZTs7U0FJMUIscUJBQXFCO2dHQUFyQixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLGVBQWUsQ0FBQztvQkFDdEMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7Rm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGV9IGZyb20gJy4vZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy1leGFtcGxlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhL2ZvY3VzLW1vbml0b3ItZm9jdXMtdmlhLWV4YW1wbGUnO1xuaW1wb3J0IHtGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZm9jdXMtbW9uaXRvci1vdmVydmlldy9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0ZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlLCBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGUsIEZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLFxuICBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQTExeU1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka0ExMXlFeGFtcGxlc01vZHVsZSB7fVxuIl19