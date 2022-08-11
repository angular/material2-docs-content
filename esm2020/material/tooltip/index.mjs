import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { MatLegacyTooltipModule } from '@angular/material/legacy-tooltip';
import { TooltipAutoHideExample } from './tooltip-auto-hide/tooltip-auto-hide-example';
import { TooltipCustomClassExample } from './tooltip-custom-class/tooltip-custom-class-example';
import { TooltipDelayExample } from './tooltip-delay/tooltip-delay-example';
import { TooltipDisabledExample } from './tooltip-disabled/tooltip-disabled-example';
import { TooltipManualExample } from './tooltip-manual/tooltip-manual-example';
import { TooltipMessageExample } from './tooltip-message/tooltip-message-example';
import { TooltipModifiedDefaultsExample } from './tooltip-modified-defaults/tooltip-modified-defaults-example';
import { TooltipOverviewExample } from './tooltip-overview/tooltip-overview-example';
import { TooltipPositionExample } from './tooltip-position/tooltip-position-example';
import { TooltipPositionAtOriginExample } from './tooltip-position-at-origin/tooltip-position-at-origin-example';
import { TooltipHarnessExample } from './tooltip-harness/tooltip-harness-example';
import * as i0 from "@angular/core";
export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipHarnessExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionExample, TooltipPositionAtOriginExample, };
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
    TooltipPositionAtOriginExample,
];
export class TooltipExamplesModule {
}
TooltipExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TooltipExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TooltipExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: TooltipExamplesModule, declarations: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
        TooltipHarnessExample,
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample,
        TooltipPositionAtOriginExample], imports: [CommonModule,
        MatButtonModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatLegacyTooltipModule,
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
        TooltipPositionExample,
        TooltipPositionAtOriginExample] });
TooltipExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TooltipExamplesModule, imports: [CommonModule,
        MatButtonModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatLegacyTooltipModule,
        ReactiveFormsModule,
        ScrollingModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: TooltipExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatLegacyCheckboxModule,
                        MatLegacyInputModule,
                        MatLegacySelectModule,
                        MatLegacyTooltipModule,
                        ReactiveFormsModule,
                        ScrollingModule, // Required for the auto-scrolling example
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDeEUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDOUYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDL0csT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsOEJBQThCLEVBQzlCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsOEJBQThCLEdBQy9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7Q0FDL0IsQ0FBQztBQWdCRixNQUFNLE9BQU8scUJBQXFCOztrSEFBckIscUJBQXFCO21IQUFyQixxQkFBcUIsaUJBM0JoQyxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsOEJBQThCLGFBSzVCLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlLGFBdEJqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsOEJBQThCO21IQWlCbkIscUJBQXFCLFlBWjlCLFlBQVk7UUFDWixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixlQUFlOzJGQUtOLHFCQUFxQjtrQkFkakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsbUJBQW1CO3dCQUNuQixlQUFlLEVBQUUsMENBQTBDO3FCQUM1RDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7TWF0TGVnYWN5VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXRvb2x0aXAnO1xuaW1wb3J0IHtUb29sdGlwQXV0b0hpZGVFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtYXV0by1oaWRlL3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwRGVsYXlFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtZGVsYXkvdG9vbHRpcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBNYW51YWxFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWFudWFsL3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWVzc2FnZUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW92ZXJ2aWV3L3Rvb2x0aXAtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb25BdE9yaWdpbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWhhcm5lc3MvdG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQXV0b0hpZGVFeGFtcGxlLFxuICBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlLFxuICBUb29sdGlwRGVsYXlFeGFtcGxlLFxuICBUb29sdGlwRGlzYWJsZWRFeGFtcGxlLFxuICBUb29sdGlwSGFybmVzc0V4YW1wbGUsXG4gIFRvb2x0aXBNYW51YWxFeGFtcGxlLFxuICBUb29sdGlwTWVzc2FnZUV4YW1wbGUsXG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSxcbiAgVG9vbHRpcE92ZXJ2aWV3RXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uQXRPcmlnaW5FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUsXG4gIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUsXG4gIFRvb2x0aXBEZWxheUV4YW1wbGUsXG4gIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUsXG4gIFRvb2x0aXBIYXJuZXNzRXhhbXBsZSxcbiAgVG9vbHRpcE1hbnVhbEV4YW1wbGUsXG4gIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSxcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlLFxuICBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25FeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25BdE9yaWdpbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRMZWdhY3lTZWxlY3RNb2R1bGUsXG4gICAgTWF0TGVnYWN5VG9vbHRpcE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSwgLy8gUmVxdWlyZWQgZm9yIHRoZSBhdXRvLXNjcm9sbGluZyBleGFtcGxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==