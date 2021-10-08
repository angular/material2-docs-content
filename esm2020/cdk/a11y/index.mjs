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
CdkA11yExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkA11yExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkA11yExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkA11yExamplesModule, declarations: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample], imports: [A11yModule,
        MatSelectModule], exports: [FocusMonitorDirectivesExample,
        FocusMonitorFocusViaExample,
        FocusMonitorOverviewExample] });
CdkA11yExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkA11yExamplesModule, imports: [[
            A11yModule,
            MatSelectModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkA11yExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        A11yModule,
                        MatSelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwyQkFBMkIsRUFDNUIsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQzs7QUFFcEcsT0FBTyxFQUFDLDZCQUE2QixFQUFFLDJCQUEyQixFQUFFLDJCQUEyQixFQUFDLENBQUM7QUFFakcsTUFBTSxRQUFRLEdBQUc7SUFDZiw2QkFBNkI7SUFDN0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtDQUM1QixDQUFDO0FBV0YsTUFBTSxPQUFPLHFCQUFxQjs7MEhBQXJCLHFCQUFxQjsySEFBckIscUJBQXFCLGlCQWRoQyw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQixhQUt6QixVQUFVO1FBQ1YsZUFBZSxhQVJqQiw2QkFBNkI7UUFDN0IsMkJBQTJCO1FBQzNCLDJCQUEyQjsySEFZaEIscUJBQXFCLFlBUnZCO1lBQ1AsVUFBVTtZQUNWLGVBQWU7U0FDaEI7bUdBS1UscUJBQXFCO2tCQVRqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxVQUFVO3dCQUNWLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBMTF5TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtcbiAgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGVcbn0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMvZm9jdXMtbW9uaXRvci1kaXJlY3RpdmVzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlXG59IGZyb20gJy4vZm9jdXMtbW9uaXRvci1mb2N1cy12aWEvZm9jdXMtbW9uaXRvci1mb2N1cy12aWEtZXhhbXBsZSc7XG5pbXBvcnQge0ZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7Rm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSwgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEZvY3VzTW9uaXRvckRpcmVjdGl2ZXNFeGFtcGxlLFxuICBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGUsXG4gIEZvY3VzTW9uaXRvck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBMTF5TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka0ExMXlFeGFtcGxlc01vZHVsZSB7XG59XG5cbiJdfQ==