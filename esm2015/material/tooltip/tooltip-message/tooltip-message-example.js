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
let TooltipMessageExample = /** @class */ (() => {
    /**
     * \@title Tooltip with a changing message
     */
    class TooltipMessageExample {
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
    /** @nocollapse */ TooltipMessageExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipMessageExample, selectors: [["tooltip-message-example"]], decls: 6, vars: 2, consts: [[1, "example-user-input"], ["matInput", "", 3, "formControl"], ["mat-raised-button", "", "aria-label", "Button that displays a tooltip with a custom message", 3, "matTooltip"]], template: function TooltipMessageExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Tooltip message");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, " Action\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("formControl", ctx.message);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTooltip", ctx.message.value);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
    return TooltipMessageExample;
})();
export { TooltipMessageExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtbWVzc2FnZS90b29sdGlwLW1lc3NhZ2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztBQUszQzs7OztJQUFBLE1BS2EscUJBQXFCO1FBTGxDO1lBTUUsWUFBTyxHQUFHLElBQUksV0FBVyxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDcEQ7OztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7aUJBQzNDOztpSEFDWSxxQkFBcUI7aUZBQXJCLHFCQUFxQjtZQ1hsQyx5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsK0JBQWU7WUFBQSxpQkFBWTtZQUN0QywyQkFDRjtZQUFBLGlCQUFpQjtZQUVqQixpQ0FHRTtZQUFBLHlCQUNGO1lBQUEsaUJBQVM7O1lBUFMsZUFBdUI7WUFBdkIseUNBQXVCO1lBSWpDLGVBQTRCO1lBQTVCLDhDQUE0Qjs7Z0NETnBDO0tBYUM7U0FGWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQyx3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIGNoYW5naW5nIG1lc3NhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSB7XG4gIG1lc3NhZ2UgPSBuZXcgRm9ybUNvbnRyb2woJ0luZm8gYWJvdXQgdGhlIGFjdGlvbicpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxtYXQtbGFiZWw+VG9vbHRpcCBtZXNzYWdlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbZm9ybUNvbnRyb2xdPVwibWVzc2FnZVwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvblxuICAgICAgICBbbWF0VG9vbHRpcF09XCJtZXNzYWdlLnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aXRoIGEgY3VzdG9tIG1lc3NhZ2VcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==