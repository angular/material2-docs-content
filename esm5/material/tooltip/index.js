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
                    entryComponents: EXAMPLES,
                },] },
    ];
    TooltipExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipExamplesModule });
    TooltipExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatCheckboxModule,
                MatInputModule,
                MatSelectModule,
                MatTooltipModule,
                ReactiveFormsModule,
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
        ReactiveFormsModule], exports: [TooltipAutoHideExample,
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
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFbkYsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLDhCQUE4QixFQUM5QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0tBZUM7O2dCQWZBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7NkRBQ1kscUJBQXFCOzZIQUFyQixxQkFBcUIsa0JBYnZCO2dCQUNQLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjthQUNwQjtnQ0FyREg7Q0EyREMsQUFmRCxJQWVDO1NBRFkscUJBQXFCO3dGQUFyQixxQkFBcUIsbUJBekJoQyxzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQixhQUtwQixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUIsYUFuQnJCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsc0JBQXNCO2tEQWlCWCxxQkFBcUI7Y0FkakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsZ0JBQWdCO29CQUNoQixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRUb29sdGlwTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcbmltcG9ydCB7VG9vbHRpcEF1dG9IaWRlRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWF1dG8taGlkZS90b29sdGlwLWF1dG8taGlkZS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWN1c3RvbS1jbGFzcy90b29sdGlwLWN1c3RvbS1jbGFzcy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERlbGF5RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBEaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWFudWFsRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW1hbnVhbC90b29sdGlwLW1hbnVhbC1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE1lc3NhZ2VFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWVzc2FnZS90b29sdGlwLW1lc3NhZ2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGVcbn0gZnJvbSAnLi90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1vdmVydmlldy90b29sdGlwLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtcG9zaXRpb24vdG9vbHRpcC1wb3NpdGlvbi1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSxcbiAgVG9vbHRpcEN1c3RvbUNsYXNzRXhhbXBsZSxcbiAgVG9vbHRpcERlbGF5RXhhbXBsZSxcbiAgVG9vbHRpcERpc2FibGVkRXhhbXBsZSxcbiAgVG9vbHRpcE1hbnVhbEV4YW1wbGUsXG4gIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSxcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlLFxuICBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUsXG4gIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUsXG4gIFRvb2x0aXBEZWxheUV4YW1wbGUsXG4gIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUsXG4gIFRvb2x0aXBNYW51YWxFeGFtcGxlLFxuICBUb29sdGlwTWVzc2FnZUV4YW1wbGUsXG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSxcbiAgVG9vbHRpcE92ZXJ2aWV3RXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRXhhbXBsZXNNb2R1bGUge1xufVxuIl19