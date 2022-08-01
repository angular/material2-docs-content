import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
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
CdkA11yExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkA11yExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkA11yExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: CdkA11yExamplesModule, declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule, MatLegacySelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] });
CdkA11yExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkA11yExamplesModule, imports: [A11yModule, MatLegacySelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkA11yExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [A11yModule, MatLegacySelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN0RyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUFFcEcsT0FBTyxFQUFDLDZCQUE2QixFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFDLENBQUM7QUFFakcsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtDQUM1QixDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLGlCQVZoQyw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQixhQUlqQixVQUFVLEVBQUUscUJBQXFCLGFBTjNDLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsMkJBQTJCO21IQVFoQixxQkFBcUIsWUFKdEIsVUFBVSxFQUFFLHFCQUFxQjsyRkFJaEMscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxxQkFBcUIsQ0FBQztvQkFDNUMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExlZ2FjeVNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXNlbGVjdCc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZSc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZX0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSwgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLCBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsXG4gIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0ExMXlNb2R1bGUsIE1hdExlZ2FjeVNlbGVjdE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtBMTF5RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==