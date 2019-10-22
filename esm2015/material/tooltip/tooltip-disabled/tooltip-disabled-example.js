/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
import * as i3 from "@angular/material/checkbox";
import * as i4 from "@angular/forms";
/**
 * \@title Tooltip that can be disabled
 */
export class TooltipDisabledExample {
    constructor() {
        this.disabled = new FormControl(false);
    }
}
TooltipDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-disabled-example',
                templateUrl: 'tooltip-disabled-example.html',
                styleUrls: ['tooltip-disabled-example.css'],
            },] },
];
/** @nocollapse */ TooltipDisabledExample.ngFactoryDef = function TooltipDisabledExample_Factory(t) { return new (t || TooltipDisabledExample)(); };
/** @nocollapse */ TooltipDisabledExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, " Action\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-checkbox", 1);
        i0.ɵɵtext(3, " Tooltip disabled\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("matTooltipDisabled", ctx.disabled.value);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.disabled);
    } }, directives: [i1.MatButton, i2.MatTooltip, i3.MatCheckbox, i4.NgControlStatus, i4.FormControlDirective], styles: [".example-disabled-checkbox[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TooltipDisabledExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-disabled-example',
                templateUrl: 'tooltip-disabled-example.html',
                styleUrls: ['tooltip-disabled-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TooltipDisabledExample.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0FBVTNDLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7b0dBQ1ksc0JBQXNCO3FFQUF0QixzQkFBc0I7UUNYbkMsaUNBSUU7UUFBQSx5QkFDRjtRQUFBLGlCQUFTO1FBRVQsdUNBQ0U7UUFBQSxtQ0FDRjtRQUFBLGlCQUFlOztRQVBQLHVEQUFxQztRQUsvQixlQUF3QjtRQUF4QiwwQ0FBd0I7O21DREl6QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzs7O0lBRUMsMENBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGJlIGRpc2FibGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlzYWJsZWRFeGFtcGxlIHtcbiAgZGlzYWJsZWQgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBEaXNhYmxlZF09XCJkaXNhYmxlZC52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgdGhhdCBjYW4gYmUgcHJvZ3JhbWF0aWNhbGx5IGRpc2FibGVkXCI+XG4gIEFjdGlvblxuPC9idXR0b24+XG5cbjxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImRpc2FibGVkXCIgY2xhc3M9XCJleGFtcGxlLWRpc2FibGVkLWNoZWNrYm94XCI+XG4gIFRvb2x0aXAgZGlzYWJsZWRcbjwvbWF0LWNoZWNrYm94PlxuIl19