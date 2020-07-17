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
SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.NgModel, i4.NgForOf, i5.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x, i6.MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectFormExample, [{
        type: Component,
        args: [{
                selector: 'select-form-example',
                templateUrl: 'select-form-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLbEMscUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQWE7OztJQUYwQixxQ0FBb0I7SUFDekQsZUFDRjtJQURFLGtEQUNGOzs7SUFTQSxpQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRndCLG9DQUFtQjtJQUNsRCxlQUNGO0lBREUsaURBQ0Y7O0FETk47O0dBRUc7QUFLSCxNQUFNLE9BQU8saUJBQWlCO0lBSjlCO1FBUUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUVGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7S0FDSDs7a0ZBZlksaUJBQWlCO3NEQUFqQixpQkFBaUI7UUNuQjlCLDRCQUNFO1FBQUEsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLHFDQUNFO1FBRFUsc0pBQTJCO1FBQ3JDLGdGQUNFO1FBRUosaUJBQWE7UUFDZixpQkFBaUI7UUFDakIseUJBQUk7UUFBQSxZQUFpQztRQUFBLGlCQUFJO1FBQ3pDLDJCQUFJO1FBQUEsbUNBQWtCO1FBQUEsaUJBQUs7UUFDM0IsMENBQ0U7UUFBQSxrQ0FBVztRQUFBLDZCQUFZO1FBQUEsaUJBQVk7UUFDbkMsa0NBQ0U7UUFEdUIsaUpBQXlCO1FBQ2hELDZCQUFtQztRQUNuQywwRUFDRTtRQUVKLGlCQUFTO1FBQ1gsaUJBQWlCO1FBQ2pCLDBCQUFJO1FBQUEsYUFBOEI7UUFBQSxpQkFBSTtRQUN4QyxpQkFBTzs7UUFsQlMsZUFBMkI7UUFBM0IsMkNBQTJCO1FBQ3pCLGVBQTBCO1FBQTFCLG1DQUEwQjtRQUt0QyxlQUFpQztRQUFqQyxpRUFBaUM7UUFJVixlQUF5QjtRQUF6Qix5Q0FBeUI7UUFFeEMsZUFBd0I7UUFBeEIsa0NBQXdCO1FBS2hDLGVBQThCO1FBQTlCLDhEQUE4Qjs7a0RERnZCLGlCQUFpQjtjQUo3QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsV0FBVyxFQUFFLDBCQUEwQjthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1mb3JtLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvcm1FeGFtcGxlIHtcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuICBzZWxlY3RlZENhcjogc3RyaW5nO1xuXG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcblxuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICd2b2x2bycsIHZpZXdWYWx1ZTogJ1ZvbHZvJ30sXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ31cbiAgXTtcbn1cbiIsIjxmb3JtPlxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgZm9vZDwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFsobmdNb2RlbCldPVwic2VsZWN0ZWRWYWx1ZVwiIG5hbWU9XCJmb29kXCI+XG4gICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZm9vZCBvZiBmb29kc1wiIFt2YWx1ZV09XCJmb29kLnZhbHVlXCI+XG4gICAgICAgIHt7Zm9vZC52aWV3VmFsdWV9fVxuICAgICAgPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+IFNlbGVjdGVkIGZvb2Q6IHt7c2VsZWN0ZWRWYWx1ZX19IDwvcD5cbiAgPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgY2FyPC9tYXQtbGFiZWw+XG4gICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFsobmdNb2RlbCldPVwic2VsZWN0ZWRDYXJcIiBuYW1lPVwiY2FyXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ+PC9vcHRpb24+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIudmFsdWVcIj5cbiAgICAgICAge3tjYXIudmlld1ZhbHVlfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD4gU2VsZWN0ZWQgY2FyOiB7e3NlbGVjdGVkQ2FyfX0gPC9wPlxuPC9mb3JtPlxuIl19