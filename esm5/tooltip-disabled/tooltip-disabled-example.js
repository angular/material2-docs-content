import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip that can be disabled
 */
var TooltipDisabledExample = /** @class */ (function () {
    function TooltipDisabledExample() {
        this.disabled = new FormControl(false);
    }
    TooltipDisabledExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-disabled-example',
            template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
            styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"]
        })
    ], TooltipDisabledExample);
    return TooltipDisabledExample;
}());
export { TooltipDisabledExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3Rvb2x0aXAtZGlzYWJsZWQvdG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQzs7R0FFRztBQU1IO0lBTEE7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUZZLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMEJBQTBCO1lBQ3BDLDhXQUE0Qzs7U0FFN0MsQ0FBQztPQUNXLHNCQUFzQixDQUVsQztJQUFELDZCQUFDO0NBQUEsQUFGRCxJQUVDO1NBRlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGJlIGRpc2FibGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlzYWJsZWRFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIl19