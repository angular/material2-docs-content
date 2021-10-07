import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
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
import { TooltipHarnessExample } from './tooltip-harness/tooltip-harness-example';
import * as i0 from "@angular/core";
export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipHarnessExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample, };
const EXAMPLES = [
    TooltipAutoHideExample,
    TooltipCustomClassExample,
    TooltipDelayExample,
    TooltipDisabledExample,
    TooltipHarnessExample,
    TooltipManualExample,
    TooltipMessageExample,
    TooltipModifiedDefaultsExample,
    TooltipOverviewExample,
    TooltipPositionExample,
];
export class TooltipExamplesModule {
}
TooltipExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TooltipExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TooltipExamplesModule, declarations: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        ReactiveFormsModule,
        ScrollingModule], exports: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample] });
TooltipExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TooltipExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            MatTooltipModule,
            ReactiveFormsModule,
            ScrollingModule, // Required for the auto-scrolling example
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TooltipExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSelectModule,
                        MatTooltipModule,
                        ReactiveFormsModule,
                        ScrollingModule, // Required for the auto-scrolling example
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsOEJBQThCLEVBQzlCLHNCQUFzQixFQUN0QixzQkFBc0IsR0FDdkIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFpQkYsTUFBTSxPQUFPLHFCQUFxQjs7MEhBQXJCLHFCQUFxQjsySEFBckIscUJBQXFCLGlCQTNCaEMsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsc0JBQXNCLGFBS3BCLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlLGFBckJqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixzQkFBc0I7MkhBa0JYLHFCQUFxQixZQWR2QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtZQUNuQixlQUFlLEVBQUUsMENBQTBDO1NBQzVEO21HQUtVLHFCQUFxQjtrQkFmakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixlQUFlLEVBQUUsMENBQTBDO3FCQUM1RDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7U2Nyb2xsaW5nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvc2Nyb2xsaW5nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtUb29sdGlwQXV0b0hpZGVFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtYXV0by1oaWRlL3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwRGVsYXlFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtZGVsYXkvdG9vbHRpcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBNYW51YWxFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWFudWFsL3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWVzc2FnZUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZVxufSBmcm9tICcuL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW92ZXJ2aWV3L3Rvb2x0aXAtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1oYXJuZXNzL3Rvb2x0aXAtaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSxcbiAgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSxcbiAgVG9vbHRpcERlbGF5RXhhbXBsZSxcbiAgVG9vbHRpcERpc2FibGVkRXhhbXBsZSxcbiAgVG9vbHRpcEhhcm5lc3NFeGFtcGxlLFxuICBUb29sdGlwTWFudWFsRXhhbXBsZSxcbiAgVG9vbHRpcE1lc3NhZ2VFeGFtcGxlLFxuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUsXG4gIFRvb2x0aXBPdmVydmlld0V4YW1wbGUsXG4gIFRvb2x0aXBQb3NpdGlvbkV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSxcbiAgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSxcbiAgVG9vbHRpcERlbGF5RXhhbXBsZSxcbiAgVG9vbHRpcERpc2FibGVkRXhhbXBsZSxcbiAgVG9vbHRpcEhhcm5lc3NFeGFtcGxlLFxuICBUb29sdGlwTWFudWFsRXhhbXBsZSxcbiAgVG9vbHRpcE1lc3NhZ2VFeGFtcGxlLFxuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUsXG4gIFRvb2x0aXBPdmVydmlld0V4YW1wbGUsXG4gIFRvb2x0aXBQb3NpdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSwgLy8gUmVxdWlyZWQgZm9yIHRoZSBhdXRvLXNjcm9sbGluZyBleGFtcGxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRXhhbXBsZXNNb2R1bGUge1xufVxuIl19