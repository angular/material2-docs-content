import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip that can be disabled
 */
var TooltipDisabledExample = /** @class */ (function () {
    function TooltipDisabledExample() {
        this.disabled = new FormControl(false);
    }
    TooltipDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-disabled-example',
                    template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
                    styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"]
                }] }
    ];
    return TooltipDisabledExample;
}());
export { TooltipDisabledExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7O0dBRUc7QUFDSDtJQUFBO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyw4V0FBNEM7O2lCQUU3Qzs7SUFHRCw2QkFBQztDQUFBLEFBUEQsSUFPQztTQUZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBiZSBkaXNhYmxlZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpc2FibGVkRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbn1cbiJdfQ==