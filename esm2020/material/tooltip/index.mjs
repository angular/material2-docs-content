import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
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
        MatLegacyButtonModule,
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
        MatLegacyButtonModule,
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
                        MatLegacyButtonModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUMvRyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFaEYsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qiw4QkFBOEIsR0FDL0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtDQUMvQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkEzQmhDLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qiw4QkFBOEIsYUFLNUIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGVBQWUsYUF0QmpCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qiw4QkFBOEI7bUhBaUJuQixxQkFBcUIsWUFaOUIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLGVBQWU7MkZBS04scUJBQXFCO2tCQWRqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0QixtQkFBbUI7d0JBQ25CLGVBQWUsRUFBRSwwQ0FBMEM7cUJBQzVEO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge01hdExlZ2FjeUJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7TWF0TGVnYWN5VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXRvb2x0aXAnO1xuaW1wb3J0IHtUb29sdGlwQXV0b0hpZGVFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtYXV0by1oaWRlL3Rvb2x0aXAtYXV0by1oaWRlLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtY3VzdG9tLWNsYXNzL3Rvb2x0aXAtY3VzdG9tLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwRGVsYXlFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtZGVsYXkvdG9vbHRpcC1kZWxheS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBNYW51YWxFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbWFudWFsL3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwTWVzc2FnZUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtbW9kaWZpZWQtZGVmYXVsdHMvdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW92ZXJ2aWV3L3Rvb2x0aXAtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi90b29sdGlwLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb25BdE9yaWdpbkV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4vdG9vbHRpcC1wb3NpdGlvbi1hdC1vcmlnaW4tZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLWhhcm5lc3MvdG9vbHRpcC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQXV0b0hpZGVFeGFtcGxlLFxuICBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlLFxuICBUb29sdGlwRGVsYXlFeGFtcGxlLFxuICBUb29sdGlwRGlzYWJsZWRFeGFtcGxlLFxuICBUb29sdGlwSGFybmVzc0V4YW1wbGUsXG4gIFRvb2x0aXBNYW51YWxFeGFtcGxlLFxuICBUb29sdGlwTWVzc2FnZUV4YW1wbGUsXG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSxcbiAgVG9vbHRpcE92ZXJ2aWV3RXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uQXRPcmlnaW5FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUsXG4gIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUsXG4gIFRvb2x0aXBEZWxheUV4YW1wbGUsXG4gIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUsXG4gIFRvb2x0aXBIYXJuZXNzRXhhbXBsZSxcbiAgVG9vbHRpcE1hbnVhbEV4YW1wbGUsXG4gIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSxcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlLFxuICBUb29sdGlwT3ZlcnZpZXdFeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25FeGFtcGxlLFxuICBUb29sdGlwUG9zaXRpb25BdE9yaWdpbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRMZWdhY3lTZWxlY3RNb2R1bGUsXG4gICAgTWF0TGVnYWN5VG9vbHRpcE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSwgLy8gUmVxdWlyZWQgZm9yIHRoZSBhdXRvLXNjcm9sbGluZyBleGFtcGxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==