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
import * as i0 from "@angular/core";
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
    TooltipExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipExamplesModule });
    TooltipExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatInputModule,
                MatSelectModule,
                MatTooltipModule,
                ReactiveFormsModule,
                ScrollingModule,
            ]] });
    return TooltipExamplesModule;
}());
export { TooltipExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TooltipExamplesModule, { declarations: [TooltipAutoHideExample,
        TooltipCustomClassExample,
        TooltipDelayExample,
        TooltipDisabledExample,
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
        TooltipManualExample,
        TooltipMessageExample,
        TooltipModifiedDefaultsExample,
        TooltipOverviewExample,
        TooltipPositionExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipExamplesModule, [{
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
                    ScrollingModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBRW5GLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLG1CQUFtQixFQUNuQixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsc0JBQXNCLEVBQ3RCLHNCQUFzQixHQUN2QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtLQWdCQzs2REFEWSxxQkFBcUI7NkhBQXJCLHFCQUFxQixrQkFkdkI7Z0JBQ1AsWUFBWTtnQkFDWixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2dCQUNuQixlQUFlO2FBQ2hCO2dDQXZESDtDQTZEQyxBQWhCRCxJQWdCQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQTFCaEMsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLHNCQUFzQjtRQUN0QixzQkFBc0IsYUFLcEIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGVBQWUsYUFwQmpCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsc0JBQXNCO2tEQWtCWCxxQkFBcUI7Y0FmakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLGVBQWU7aUJBQ2hCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7VG9vbHRpcEF1dG9IaWRlRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWF1dG8taGlkZS90b29sdGlwLWF1dG8taGlkZS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWN1c3RvbS1jbGFzcy90b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERlbGF5RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBEaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWFudWFsRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW1hbnVhbC90b29sdGlwLW1hbnVhbC1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE1lc3NhZ2VFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWVzc2FnZS90b29sdGlwLW1lc3NhZ2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGVcbn0gZnJvbSAnLi90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1vdmVydmlldy90b29sdGlwLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtcG9zaXRpb24vdG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSxcbiAgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSxcbiAgVG9vbHRpcERlbGF5RXhhbXBsZSxcbiAgVG9vbHRpcERpc2FibGVkRXhhbXBsZSxcbiAgVG9vbHRpcE1hbnVhbEV4YW1wbGUsXG4gIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSxcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlLFxuICBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUsXG4gIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUsXG4gIFRvb2x0aXBEZWxheUV4YW1wbGUsXG4gIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUsXG4gIFRvb2x0aXBNYW51YWxFeGFtcGxlLFxuICBUb29sdGlwTWVzc2FnZUV4YW1wbGUsXG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSxcbiAgVG9vbHRpcE92ZXJ2aWV3RXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgU2Nyb2xsaW5nTW9kdWxlLCAvLyBSZXF1aXJlZCBmb3IgdGhlIGF1dG8tc2Nyb2xsaW5nIGV4YW1wbGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=