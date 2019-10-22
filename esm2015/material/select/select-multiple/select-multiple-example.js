/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
function SelectMultipleExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r16);
} }
/**
 * \@title Select with multiple selection
 */
export class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.decorators = [
    { type: Component, args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
                styleUrls: ['select-multiple-example.css'],
            },] },
];
/** @nocollapse */ SelectMultipleExample.ngFactoryDef = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
/** @nocollapse */ SelectMultipleExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Toppings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵtemplate(4, SelectMultipleExample_mat_option_4_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.MatOption], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SelectMultipleExample, [{
        type: Component,
        args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
                styleUrls: ['select-multiple-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SelectMultipleExample.prototype.toppings;
    /** @type {?} */
    SelectMultipleExample.prototype.toppingList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1tdWx0aXBsZS9zZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0V2QyxxQ0FBa0U7SUFBQSxZQUFXO0lBQUEsaUJBQWE7OztJQUExQyxtQ0FBaUI7SUFBQyxlQUFXO0lBQVgsaUNBQVc7Ozs7O0FETWpGLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUFhLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNqRzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOztrR0FDWSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtRQ1RsQyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsd0JBQVE7UUFBQSxpQkFBWTtRQUMvQixxQ0FDRTtRQUFBLG9GQUFrRTtRQUNwRSxpQkFBYTtRQUNmLGlCQUFpQjs7UUFISCxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFDdEIsZUFBbUM7UUFBbkMseUNBQW1DOzttQ0RNdEMscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLHlDQUE2Qjs7SUFDN0IsNENBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG11bHRpcGxlIHNlbGVjdGlvbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LW11bHRpcGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdE11bHRpcGxlRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gbmV3IEZvcm1Db250cm9sKCk7XG4gIHRvcHBpbmdMaXN0OiBzdHJpbmdbXSA9IFsnRXh0cmEgY2hlZXNlJywgJ011c2hyb29tJywgJ09uaW9uJywgJ1BlcHBlcm9uaScsICdTYXVzYWdlJywgJ1RvbWF0byddO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlRvcHBpbmdzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJ0b3BwaW5nc1wiIG11bHRpcGxlPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0b3BwaW5nIG9mIHRvcHBpbmdMaXN0XCIgW3ZhbHVlXT1cInRvcHBpbmdcIj57e3RvcHBpbmd9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==