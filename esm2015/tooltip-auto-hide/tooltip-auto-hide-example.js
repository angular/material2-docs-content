/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * \@title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipAutoHideExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-auto-hide-example',
                template: "<mat-form-field>\n  <mat-select placeholder=\"Tooltip position\" [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdk-scrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
                styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TooltipAutoHideExample.prototype.positionOptions;
    /** @type {?} */
    TooltipAutoHideExample.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy90b29sdGlwLWF1dG8taGlkZS90b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVczQyxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsb0JBQWUsR0FBc0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN6RSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyw0ckJBQTZDOzthQUU5Qzs7OztJQUVDLGlEQUF5RTs7SUFDekUsMENBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgZGVtb25zdHJhdGVzIGF1dG8taGlkaW5nIHdoZW4gaXQgY2xpcHMgb3V0IG9mIGl0cyBzY3JvbGxpbmcgY29udGFpbmVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSB7XG4gIHBvc2l0aW9uT3B0aW9uczogVG9vbHRpcFBvc2l0aW9uW10gPSBbJ2JlbG93JywgJ2Fib3ZlJywgJ2xlZnQnLCAncmlnaHQnXTtcbiAgcG9zaXRpb24gPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5wb3NpdGlvbk9wdGlvbnNbMF0pO1xufVxuIl19