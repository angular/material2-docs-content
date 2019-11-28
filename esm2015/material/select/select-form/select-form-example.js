/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-form/select-form-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/core";
function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r9.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r10.viewValue, " ");
} }
/**
 * @record
 */
export function Food() { }
if (false) {
    /** @type {?} */
    Food.prototype.value;
    /** @type {?} */
    Food.prototype.viewValue;
}
/**
 * @record
 */
export function Car() { }
if (false) {
    /** @type {?} */
    Car.prototype.value;
    /** @type {?} */
    Car.prototype.viewValue;
}
/**
 * \@title Select in a form
 */
export class SelectFormExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
}
SelectFormExample.decorators = [
    { type: Component, args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            },] },
];
/** @nocollapse */ SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
/** @nocollapse */ SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field");
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 0);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
        i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field");
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 2);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
        i0.ɵɵelement(16, "option", 3);
        i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngModel", ctx.selectedCar);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i5.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i6.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectFormExample.prototype.selectedValue;
    /** @type {?} */
    SelectFormExample.prototype.selectedCar;
    /** @type {?} */
    SelectFormExample.prototype.foods;
    /** @type {?} */
    SelectFormExample.prototype.cars;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0tsQyxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjBCLHFDQUFvQjtJQUN6RCxlQUNGO0lBREUsa0RBQ0Y7OztJQVNBLGlDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFTOzs7SUFGd0IscUNBQW1CO0lBQ2xELGVBQ0Y7SUFERSxrREFDRjs7Ozs7QURoQk4sMEJBR0M7OztJQUZDLHFCQUFjOztJQUNkLHlCQUFrQjs7Ozs7QUFHcEIseUJBR0M7OztJQUZDLG9CQUFjOztJQUNkLHdCQUFrQjs7Ozs7QUFXcEIsTUFBTSxPQUFPLGlCQUFpQjtJQUw5QjtRQVNFLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO0tBQ0g7OztZQXBCQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O2tGQUNZLGlCQUFpQjtzREFBakIsaUJBQWlCO1FDcEI5Qiw0QkFDRTtRQUFBLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQyxxQ0FDRTtRQURVLHNKQUEyQjtRQUNyQyxnRkFDRTtRQUVKLGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLHlCQUFJO1FBQUEsWUFBaUM7UUFBQSxpQkFBSTtRQUN6QywyQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLHVDQUNFO1FBQUEsa0NBQVc7UUFBQSw2QkFBWTtRQUFBLGlCQUFZO1FBQ25DLGtDQUNFO1FBRHVCLGlKQUF5QjtRQUNoRCw2QkFBbUM7UUFDbkMsMEVBQ0U7UUFFSixpQkFBUztRQUNYLGlCQUFpQjtRQUNqQiwwQkFBSTtRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDeEMsaUJBQU87O1FBbEJTLGVBQTJCO1FBQTNCLDJDQUEyQjtRQUN6QixlQUEwQjtRQUExQixtQ0FBMEI7UUFLdEMsZUFBaUM7UUFBakMsaUVBQWlDO1FBSVYsZUFBeUI7UUFBekIseUNBQXlCO1FBRXhDLGVBQXdCO1FBQXhCLGtDQUF3QjtRQUtoQyxlQUE4QjtRQUE5Qiw4REFBOEI7O2tERER2QixpQkFBaUI7Y0FMN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2FBQ3ZDOzs7O0lBRUMsMENBQXNCOztJQUN0Qix3Q0FBb0I7O0lBRXBCLGtDQUlFOztJQUVGLGlDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IGluIGEgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWZvcm0tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0Rm9ybUV4YW1wbGUge1xuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG4gIHNlbGVjdGVkQ2FyOiBzdHJpbmc7XG5cbiAgZm9vZHM6IEZvb2RbXSA9IFtcbiAgICB7dmFsdWU6ICdzdGVhay0wJywgdmlld1ZhbHVlOiAnU3RlYWsnfSxcbiAgICB7dmFsdWU6ICdwaXp6YS0xJywgdmlld1ZhbHVlOiAnUGl6emEnfSxcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxuICBdO1xuXG4gIGNhcnM6IENhcltdID0gW1xuICAgIHt2YWx1ZTogJ3ZvbHZvJywgdmlld1ZhbHVlOiAnVm9sdm8nfSxcbiAgICB7dmFsdWU6ICdzYWFiJywgdmlld1ZhbHVlOiAnU2FhYid9LFxuICAgIHt2YWx1ZTogJ21lcmNlZGVzJywgdmlld1ZhbHVlOiAnTWVyY2VkZXMnfVxuICBdO1xufVxuIiwiPGZvcm0+XG4gIDxoND5tYXQtc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiIG5hbWU9XCJmb29kXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICAgIHt7Zm9vZC52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+IFNlbGVjdGVkIGZvb2Q6IHt7c2VsZWN0ZWRWYWx1ZX19IDwvcD5cbiAgPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGNhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2FyXCIgbmFtZT1cImNhclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2FyIG9mIGNhcnNcIiBbdmFsdWVdPVwiY2FyLnZhbHVlXCI+XG4gICAgICAgIHt7Y2FyLnZpZXdWYWx1ZX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+IFNlbGVjdGVkIGNhcjoge3tzZWxlY3RlZENhcn19IDwvcD5cbjwvZm9ybT5cbiJdfQ==