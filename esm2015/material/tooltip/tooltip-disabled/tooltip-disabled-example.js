/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-disabled/tooltip-disabled-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ TooltipDisabledExample.ɵfac = function TooltipDisabledExample_Factory(t) { return new (t || TooltipDisabledExample)(); };
/** @nocollapse */ TooltipDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDisabledExample, selectors: [["tooltip-disabled-example"]], decls: 4, vars: 2, consts: [["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip that can be programatically disabled", 3, "matTooltipDisabled"], [1, "example-disabled-checkbox", 3, "formControl"]], template: function TooltipDisabledExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipDisabledExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-disabled-example',
                templateUrl: 'tooltip-disabled-example.html',
                styleUrls: ['tooltip-disabled-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TooltipDisabledExample.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRpc2FibGVkL3Rvb2x0aXAtZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kaXNhYmxlZC90b29sdGlwLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFVM0MsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOzsrR0FDWSxzQkFBc0I7OEVBQXRCLHNCQUFzQjtRQ1huQyxpQ0FJRTtRQUFBLHlCQUNGO1FBQUEsaUJBQVM7UUFFVCx1Q0FDRTtRQUFBLG1DQUNGO1FBQUEsaUJBQWU7O1FBUFAsdURBQXFDO1FBSy9CLGVBQXdCO1FBQXhCLDBDQUF3Qjs7a0RESXpCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUM7Ozs7SUFFQywwQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgdGhhdCBjYW4gYmUgZGlzYWJsZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWRpc2FibGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEaXNhYmxlZEV4YW1wbGUge1xuICBkaXNhYmxlZCA9IG5ldyBGb3JtQ29udHJvbChmYWxzZSk7XG59XG4iLCI8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBbbWF0VG9vbHRpcERpc2FibGVkXT1cImRpc2FibGVkLnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB0aGF0IGNhbiBiZSBwcm9ncmFtYXRpY2FsbHkgZGlzYWJsZWRcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cblxuPG1hdC1jaGVja2JveCBbZm9ybUNvbnRyb2xdPVwiZGlzYWJsZWRcIiBjbGFzcz1cImV4YW1wbGUtZGlzYWJsZWQtY2hlY2tib3hcIj5cbiAgVG9vbHRpcCBkaXNhYmxlZFxuPC9tYXQtY2hlY2tib3g+XG4iXX0=