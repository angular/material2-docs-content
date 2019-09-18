import { A11yModule } from '@angular/cdk/a11y';
import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FocusMonitorDirectivesExample } from './focus-monitor-directives/focus-monitor-directives-example';
import { FocusMonitorFocusViaExample } from './focus-monitor-focus-via/focus-monitor-focus-via-example';
import { FocusMonitorOverviewExample } from './focus-monitor-overview/focus-monitor-overview-example';
export { FocusMonitorDirectivesExample, FocusMonitorFocusViaExample, FocusMonitorOverviewExample };
var EXAMPLES = [
    FocusMonitorDirectivesExample,
    FocusMonitorFocusViaExample,
    FocusMonitorOverviewExample,
];
var CdkA11yExamplesModule = /** @class */ (function () {
    function CdkA11yExamplesModule() {
    }
    CdkA11yExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        A11yModule,
                        MatSelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkA11yExamplesModule;
}());
export { CdkA11yExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9hMTF5L21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwyQkFBMkIsRUFDNUIsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUVwRyxPQUFPLEVBQUMsNkJBQTZCLEVBQUUsMkJBQTJCLEVBQUUsMkJBQTJCLEVBQUMsQ0FBQztBQUVqRyxJQUFNLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0NBQzVCLENBQUM7QUFFRjtJQUFBO0lBU0EsQ0FBQzs7Z0JBVEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxVQUFVO3dCQUNWLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsNEJBQUM7Q0FBQSxBQVRELElBU0M7U0FEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ExMXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge1xuICBGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZVxufSBmcm9tICcuL2ZvY3VzLW1vbml0b3ItZGlyZWN0aXZlcy9mb2N1cy1tb25pdG9yLWRpcmVjdGl2ZXMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBGb2N1c01vbml0b3JGb2N1c1ZpYUV4YW1wbGVcbn0gZnJvbSAnLi9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS9mb2N1cy1tb25pdG9yLWZvY3VzLXZpYS1leGFtcGxlJztcbmltcG9ydCB7Rm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXcvZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtGb2N1c01vbml0b3JEaXJlY3RpdmVzRXhhbXBsZSwgRm9jdXNNb25pdG9yRm9jdXNWaWFFeGFtcGxlLCBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9jdXNNb25pdG9yRGlyZWN0aXZlc0V4YW1wbGUsXG4gIEZvY3VzTW9uaXRvckZvY3VzVmlhRXhhbXBsZSxcbiAgRm9jdXNNb25pdG9yT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEExMXlNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQTExeUV4YW1wbGVzTW9kdWxlIHtcbn1cblxuIl19