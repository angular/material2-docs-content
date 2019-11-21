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
    var food_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r9.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r9.viewValue, " ");
} }
function SelectFormExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var car_r10 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r10.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r10.viewValue, " ");
} }
/**
 * @title Select in a form
 */
var SelectFormExample = /** @class */ (function () {
    function SelectFormExample() {
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
    SelectFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-form-example',
                    templateUrl: 'select-form-example.html',
                    styleUrls: ['select-form-example.css'],
                },] },
    ];
    SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
    SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
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
    return SelectFormExample;
}());
export { SelectFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
                styleUrls: ['select-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLbEMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUYwQixxQ0FBb0I7SUFDekQsZUFDRjtJQURFLGtEQUNGOzs7SUFTQSxpQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRndCLHFDQUFtQjtJQUNsRCxlQUNGO0lBREUsa0RBQ0Y7O0FETk47O0dBRUc7QUFDSDtJQUFBO1FBU0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUVGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7S0FDSDs7Z0JBcEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDdkM7O3NGQUNZLGlCQUFpQjswREFBakIsaUJBQWlCO1lDcEI5Qiw0QkFDRTtZQUFBLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsNkJBQWE7WUFBQSxpQkFBWTtZQUNwQyxxQ0FDRTtZQURVLHNKQUEyQjtZQUNyQyxnRkFDRTtZQUVKLGlCQUFhO1lBQ2YsaUJBQWlCO1lBQ2pCLHlCQUFJO1lBQUEsWUFBaUM7WUFBQSxpQkFBSTtZQUN6QywyQkFBSTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFLO1lBQzNCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSw2QkFBWTtZQUFBLGlCQUFZO1lBQ25DLGtDQUNFO1lBRHVCLGlKQUF5QjtZQUNoRCw2QkFBbUM7WUFDbkMsMEVBQ0U7WUFFSixpQkFBUztZQUNYLGlCQUFpQjtZQUNqQiwwQkFBSTtZQUFBLGFBQThCO1lBQUEsaUJBQUk7WUFDeEMsaUJBQU87O1lBbEJTLGVBQTJCO1lBQTNCLDJDQUEyQjtZQUN6QixlQUEwQjtZQUExQixtQ0FBMEI7WUFLdEMsZUFBaUM7WUFBakMsaUVBQWlDO1lBSVYsZUFBeUI7WUFBekIseUNBQXlCO1lBRXhDLGVBQXdCO1lBQXhCLGtDQUF3QjtZQUtoQyxlQUE4QjtZQUE5Qiw4REFBOEI7OzRCRHJCcEM7Q0FtQ0MsQUFwQkQsSUFvQkM7U0FmWSxpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjtnQkFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RGb3JtRXhhbXBsZSB7XG4gIHNlbGVjdGVkVmFsdWU6IHN0cmluZztcbiAgc2VsZWN0ZWRDYXI6IHN0cmluZztcblxuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG5cbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAndm9sdm8nLCB2aWV3VmFsdWU6ICdWb2x2byd9LFxuICAgIHt2YWx1ZTogJ3NhYWInLCB2aWV3VmFsdWU6ICdTYWFiJ30sXG4gICAge3ZhbHVlOiAnbWVyY2VkZXMnLCB2aWV3VmFsdWU6ICdNZXJjZWRlcyd9XG4gIF07XG59XG4iLCI8Zm9ybT5cbiAgPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBmb29kPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3QgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFZhbHVlXCIgbmFtZT1cImZvb2RcIj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmb29kIG9mIGZvb2RzXCIgW3ZhbHVlXT1cImZvb2QudmFsdWVcIj5cbiAgICAgICAge3tmb29kLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD4gU2VsZWN0ZWQgZm9vZDoge3tzZWxlY3RlZFZhbHVlfX0gPC9wPlxuICA8aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgY2FyPC9tYXQtbGFiZWw+XG4gICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwic2VsZWN0ZWRDYXJcIiBuYW1lPVwiY2FyXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIudmFsdWVcIj5cbiAgICAgICAge3tjYXIudmlld1ZhbHVlfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD4gU2VsZWN0ZWQgY2FyOiB7e3NlbGVjdGVkQ2FyfX0gPC9wPlxuPC9mb3JtPlxuIl19