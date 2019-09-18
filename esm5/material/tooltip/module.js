import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipAutoHideExample } from './tooltip-auto-hide/tooltip-auto-hide-example';
import { TooltipCustomClassExample } from './tooltip-custom-class/tooltip-custom-class-example';
import { TooltipDelayExample } from './tooltip-delay/tooltip-delay-example';
import { TooltipDisabledExample } from './tooltip-disabled/tooltip-disabled-example';
import { TooltipManualExample } from './tooltip-manual/tooltip-manual-example';
import { TooltipMessageExample } from './tooltip-message/tooltip-message-example';
import { TooltipModifiedDefaultsExample } from './tooltip-modified-defaults/tooltip-modified-defaults-example';
import { TooltipOverviewExample } from './tooltip-overview/tooltip-overview-example';
import { TooltipPositionExample } from './tooltip-position/tooltip-position-example';
export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample, };
var EXAMPLES = [
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
var TooltipExamplesModule = /** @class */ (function () {
    function TooltipExamplesModule() {
    }
    TooltipExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return TooltipExamplesModule;
}());
export { TooltipExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHlCQUF5QixFQUN6QixtQkFBbUIsRUFDbkIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsOEJBQThCLEVBQzlCLHNCQUFzQixFQUN0QixzQkFBc0IsR0FDdkIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkIsQ0FBQztBQUVGO0lBQUE7SUFjQSxDQUFDOztnQkFkQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw0QkFBQztDQUFBLEFBZEQsSUFjQztTQURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtUb29sdGlwQXV0b0hpZGVFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtYXV0by1oaWRlL3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwRGVsYXlFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtZGVsYXkvdG9vbHRpcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBNYW51YWxFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWFudWFsL3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWVzc2FnZUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZVxufSBmcm9tICcuL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW92ZXJ2aWV3L3Rvb2x0aXAtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQXV0b0hpZGVFeGFtcGxlLFxuICBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlLFxuICBUb29sdGlwRGVsYXlFeGFtcGxlLFxuICBUb29sdGlwRGlzYWJsZWRFeGFtcGxlLFxuICBUb29sdGlwTWFudWFsRXhhbXBsZSxcbiAgVG9vbHRpcE1lc3NhZ2VFeGFtcGxlLFxuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUsXG4gIFRvb2x0aXBPdmVydmlld0V4YW1wbGUsXG4gIFRvb2x0aXBQb3NpdGlvbkV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSxcbiAgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSxcbiAgVG9vbHRpcERlbGF5RXhhbXBsZSxcbiAgVG9vbHRpcERpc2FibGVkRXhhbXBsZSxcbiAgVG9vbHRpcE1hbnVhbEV4YW1wbGUsXG4gIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSxcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlLFxuICBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25FeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=