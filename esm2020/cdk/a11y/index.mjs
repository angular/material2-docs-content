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
CdkA11yExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkA11yExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkA11yExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkA11yExamplesModule, declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule, MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] });
CdkA11yExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkA11yExamplesModule, imports: [[A11yModule, MatSelectModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: CdkA11yExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, MatSelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sMkRBQTJELENBQUM7QUFDdEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7O0FBRXBHLE9BQU8sRUFBQyw2QkFBNkIsRUFBRSwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBQyxDQUFDO0FBRWpHLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQiwyQkFBMkI7Q0FDNUIsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7OzBIQUFyQixxQkFBcUI7MkhBQXJCLHFCQUFxQixpQkFWaEMsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkIsYUFJakIsVUFBVSxFQUFFLGVBQWUsYUFOckMsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkI7MkhBUWhCLHFCQUFxQixZQUp2QixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUM7bUdBSTNCLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBMTF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZX0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnO1xuaW1wb3J0IHtGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGV9IGZyb20gJy4vZm9jdXMtbW9uaXRvci1mb2N1cy12aWEvZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZSc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Rm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSwgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlLFxuICBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGUsXG4gIEZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBMTF5TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQTExeUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=