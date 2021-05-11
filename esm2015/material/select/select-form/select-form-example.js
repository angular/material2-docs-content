import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/core";
function SelectFormExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
} }
/**
 * @title Select in a form
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
SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
SelectFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 0);
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 1);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
        i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "native html select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 3);
        i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
        i0.ɵɵelement(16, "option", 4);
        i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 2);
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
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i5.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵNgSelectMultipleOption, i6.MatOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLbEMscUNBQTREO0lBQzFELFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjBCLHFDQUFvQjtJQUN6RCxlQUNGO0lBREUsa0RBQ0Y7OztJQVNBLGlDQUFxRDtJQUNuRCxZQUNGO0lBQUEsaUJBQVM7OztJQUZ3QixvQ0FBbUI7SUFDbEQsZUFDRjtJQURFLGlEQUNGOztBRE5OOztHQUVHO0FBS0gsTUFBTSxPQUFPLGlCQUFpQjtJQUo5QjtRQVFFLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO0tBQ0g7O2tGQWZZLGlCQUFpQjtvRUFBakIsaUJBQWlCO1FDbkI5Qiw0QkFBTTtRQUNKLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLHFDQUFvRDtRQUF4QyxzSkFBMkI7UUFDckMsZ0ZBRWE7UUFDZixpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQix5QkFBRztRQUFDLFlBQWlDO1FBQUEsaUJBQUk7UUFDekMsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSw2QkFBWTtRQUFBLGlCQUFZO1FBQ25DLGtDQUE4RDtRQUFyQyxpSkFBeUI7UUFDaEQsNkJBQW1DO1FBQ25DLDBFQUVTO1FBQ1gsaUJBQVM7UUFDWCxpQkFBaUI7UUFDakIsMEJBQUc7UUFBQyxhQUE4QjtRQUFBLGlCQUFJO1FBQ3hDLGlCQUFPOztRQWxCUyxlQUEyQjtRQUEzQiwyQ0FBMkI7UUFDUixlQUFRO1FBQVIsbUNBQVE7UUFLckMsZUFBaUM7UUFBakMsaUVBQWlDO1FBSVYsZUFBeUI7UUFBekIseUNBQXlCO1FBRXhCLGVBQU87UUFBUCxrQ0FBTztRQUsvQixlQUE4QjtRQUE5Qiw4REFBOEI7O3VGREZ2QixpQkFBaUI7Y0FKN0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFdBQVcsRUFBRSwwQkFBMEI7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IGluIGEgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZm9ybS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb3JtRXhhbXBsZSB7XG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWRDYXI6IHN0cmluZztcblxuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG5cbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAndm9sdm8nLCB2aWV3VmFsdWU6ICdWb2x2byd9LFxuICAgIHt2YWx1ZTogJ3NhYWInLCB2aWV3VmFsdWU6ICdTYWFiJ30sXG4gICAge3ZhbHVlOiAnbWVyY2VkZXMnLCB2aWV3VmFsdWU6ICdNZXJjZWRlcyd9XG4gIF07XG59XG4iLCI8Zm9ybT5cbiAgPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiBbdmFsdWVdPVwiZm9vZC52YWx1ZVwiPlxuICAgICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPiBTZWxlY3RlZCBmb29kOiB7e3NlbGVjdGVkVmFsdWV9fSA8L3A+XG4gIDxoND5uYXRpdmUgaHRtbCBzZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIGNhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbKG5nTW9kZWwpXT1cInNlbGVjdGVkQ2FyXCIgbmFtZT1cImNhclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPjwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2FyIG9mIGNhcnNcIiBbdmFsdWVdPVwiY2FyLnZhbHVlXCI+XG4gICAgICAgIHt7Y2FyLnZpZXdWYWx1ZX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+IFNlbGVjdGVkIGNhcjoge3tzZWxlY3RlZENhcn19IDwvcD5cbjwvZm9ybT5cbiJdfQ==