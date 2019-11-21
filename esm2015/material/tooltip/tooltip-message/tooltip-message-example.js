/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sdGlwL3Rvb2x0aXAtbWVzc2FnZS90b29sdGlwLW1lc3NhZ2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tZXNzYWdlL3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7O0FBVTNDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxZQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUNwRDs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzswRkFDWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1hsQyx5Q0FDRTtRQUFBLDJCQUNGO1FBQUEsaUJBQWlCO1FBRWpCLGlDQUdFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBUzs7UUFQdUMsZUFBdUI7UUFBdkIseUNBQXVCO1FBSS9ELGVBQTRCO1FBQTVCLDhDQUE0Qjs7a0RETXZCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7Ozs7SUFFQyx3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIGNoYW5naW5nIG1lc3NhZ2VcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWVzc2FnZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1tZXNzYWdlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNZXNzYWdlRXhhbXBsZSB7XG4gIG1lc3NhZ2UgPSBuZXcgRm9ybUNvbnRyb2woJ0luZm8gYWJvdXQgdGhlIGFjdGlvbicpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlRvb2x0aXAgbWVzc2FnZVwiIFtmb3JtQ29udHJvbF09XCJtZXNzYWdlXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICAgIFttYXRUb29sdGlwXT1cIm1lc3NhZ2UudmFsdWVcIlxuICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHdpdGggYSBjdXN0b20gbWVzc2FnZVwiPlxuICBBY3Rpb25cbjwvYnV0dG9uPlxuIl19