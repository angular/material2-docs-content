/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const EXAMPLES = [
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
let TooltipExamplesModule = /** @class */ (() => {
    class TooltipExamplesModule {
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
                        ScrollingModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ TooltipExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipExamplesModule });
    /** @nocollapse */ TooltipExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipExamplesModule_Factory(t) { return new (t || TooltipExamplesModule)(); }, imports: [[
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
})();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFbkYsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIsbUJBQW1CLEVBQ25CLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLDhCQUE4QixFQUM5QixzQkFBc0IsRUFDdEIsc0JBQXNCLEdBQ3ZCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBLE1BZWEscUJBQXFCOzs7Z0JBZmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3dCQUNuQixlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7Z0ZBQ1kscUJBQXFCO2dKQUFyQixxQkFBcUIsa0JBZHZCO2dCQUNQLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjtnQkFDbkIsZUFBZTthQUNoQjtnQ0F2REg7S0E2REM7U0FEWSxxQkFBcUI7d0ZBQXJCLHFCQUFxQixtQkExQmhDLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsc0JBQXNCLGFBS3BCLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixlQUFlLGFBcEJqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtrREFrQlgscUJBQXFCO2NBZmpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsbUJBQW1CO29CQUNuQixlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge1Rvb2x0aXBBdXRvSGlkZUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1jdXN0b20tY2xhc3MvdG9vbHRpcC1jdXN0b20tY2xhc3MtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBEZWxheUV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwRGlzYWJsZWRFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtZGlzYWJsZWQvdG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcE1hbnVhbEV4YW1wbGV9IGZyb20gJy4vdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2x0aXBNZXNzYWdlRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLW1lc3NhZ2UvdG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgVG9vbHRpcE1vZGlmaWVkRGVmYXVsdHNFeGFtcGxlXG59IGZyb20gJy4vdG9vbHRpcC1tb2RpZmllZC1kZWZhdWx0cy90b29sdGlwLW1vZGlmaWVkLWRlZmF1bHRzLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sdGlwT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Rvb2x0aXAtb3ZlcnZpZXcvdG9vbHRpcC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7VG9vbHRpcFBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi90b29sdGlwLXBvc2l0aW9uL3Rvb2x0aXAtcG9zaXRpb24tZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFRvb2x0aXBBdXRvSGlkZUV4YW1wbGUsXG4gIFRvb2x0aXBDdXN0b21DbGFzc0V4YW1wbGUsXG4gIFRvb2x0aXBEZWxheUV4YW1wbGUsXG4gIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUsXG4gIFRvb2x0aXBNYW51YWxFeGFtcGxlLFxuICBUb29sdGlwTWVzc2FnZUV4YW1wbGUsXG4gIFRvb2x0aXBNb2RpZmllZERlZmF1bHRzRXhhbXBsZSxcbiAgVG9vbHRpcE92ZXJ2aWV3RXhhbXBsZSxcbiAgVG9vbHRpcFBvc2l0aW9uRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sdGlwQXV0b0hpZGVFeGFtcGxlLFxuICBUb29sdGlwQ3VzdG9tQ2xhc3NFeGFtcGxlLFxuICBUb29sdGlwRGVsYXlFeGFtcGxlLFxuICBUb29sdGlwRGlzYWJsZWRFeGFtcGxlLFxuICBUb29sdGlwTWFudWFsRXhhbXBsZSxcbiAgVG9vbHRpcE1lc3NhZ2VFeGFtcGxlLFxuICBUb29sdGlwTW9kaWZpZWREZWZhdWx0c0V4YW1wbGUsXG4gIFRvb2x0aXBPdmVydmlld0V4YW1wbGUsXG4gIFRvb2x0aXBQb3NpdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFNjcm9sbGluZ01vZHVsZSwgLy8gUmVxdWlyZWQgZm9yIHRoZSBhdXRvLXNjcm9sbGluZyBleGFtcGxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRXhhbXBsZXNNb2R1bGUge1xufVxuIl19