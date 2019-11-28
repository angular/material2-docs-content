/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tooltip/tooltip-message/tooltip-message-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * \@title Tooltip with a changing message
 */
export class TooltipMessageExample {
    constructor() {
        this.message = new FormControl('Info about the action');
    }
}
TooltipMessageExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-message-example',
                templateUrl: 'tooltip-message-example.html',
                styleUrls: ['tooltip-message-example.css'],
            },] },
];
/** @nocollapse */ TooltipMessageExample.ɵfac = function TooltipMessageExample_Factory(t) { return new (t || TooltipMessageExample)(); };
/** @nocollapse */ TooltipMessageExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipMessageExample, selectors: [["tooltip-message-example"]], decls: 4, vars: 2, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Tooltip message", 3, "formControl"], ["mat-raised-button", "", "aria-label", "Button that displays a tooltip with a custom message", 3, "matTooltip"]], template: function TooltipMessageExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵtext(3, " Action\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.message);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltip", ctx.message.value);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipMessageExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-message-example',
                templateUrl: 'tooltip-message-example.html',
                styleUrls: ['tooltip-message-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TooltipMessageExample.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtbWVzc2FnZS90b29sdGlwLW1lc3NhZ2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQVUzQyxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsWUFBTyxHQUFHLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7S0FDcEQ7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7MEZBQ1kscUJBQXFCOzBEQUFyQixxQkFBcUI7UUNYbEMseUNBQ0U7UUFBQSwyQkFDRjtRQUFBLGlCQUFpQjtRQUVqQixpQ0FHRTtRQUFBLHlCQUNGO1FBQUEsaUJBQVM7O1FBUHVDLGVBQXVCO1FBQXZCLHlDQUF1QjtRQUkvRCxlQUE0QjtRQUE1Qiw4Q0FBNEI7O2tERE12QixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRUMsd0NBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBjaGFuZ2luZyBtZXNzYWdlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLW1lc3NhZ2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTWVzc2FnZUV4YW1wbGUge1xuICBtZXNzYWdlID0gbmV3IEZvcm1Db250cm9sKCdJbmZvIGFib3V0IHRoZSBhY3Rpb24nKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJUb29sdGlwIG1lc3NhZ2VcIiBbZm9ybUNvbnRyb2xdPVwibWVzc2FnZVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBbbWF0VG9vbHRpcF09XCJtZXNzYWdlLnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aXRoIGEgY3VzdG9tIG1lc3NhZ2VcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==