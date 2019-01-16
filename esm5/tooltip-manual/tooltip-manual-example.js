import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Tooltip that can be manually shown/hidden.
 */
var TooltipManualExample = /** @class */ (function () {
    function TooltipManualExample() {
    }
    TooltipManualExample = tslib_1.__decorate([
        Component({
            selector: 'tooltip-manual-example',
            template: "<div>\n  <span> Mouse over to </span>\n  <button mat-button\n          (mouseenter)=\"tooltip.show()\"\n          aria-label=\"Button that progamatically shows a tooltip on another button\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (mouseenter)=\"tooltip.hide()\"\n          aria-label=\"Button that progamatically hides a tooltip on another button\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (mouseenter)=\"tooltip.toggle()\"\n          aria-label=\"Button that progamatically toggles a tooltip on another button to show/hide\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>\n",
            styles: [".example-action-button {\n  margin-top: 16px;\n}\n"]
        })
    ], TooltipManualExample);
    return TooltipManualExample;
}());
export { TooltipManualExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90b29sdGlwLW1hbnVhbC90b29sdGlwLW1hbnVhbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLHMrQkFBMEM7O1NBRTNDLENBQUM7T0FDVyxvQkFBb0IsQ0FBRztJQUFELDJCQUFDO0NBQUEsQUFBcEMsSUFBb0M7U0FBdkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGJlIG1hbnVhbGx5IHNob3duL2hpZGRlbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tYW51YWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNYW51YWxFeGFtcGxlIHt9XG4iXX0=