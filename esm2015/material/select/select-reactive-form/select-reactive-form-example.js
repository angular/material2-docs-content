import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectReactiveFormExample_mat_option_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectReactiveFormExample_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
} }
/**
 * @title Select in a reactive form
 */
export class SelectReactiveFormExample {
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
        this.foodControl = new FormControl(this.foods[2].value);
        this.carControl = new FormControl(this.cars[1].value);
        this.form = new FormGroup({
            food: this.foodControl,
            car: this.carControl
        });
    }
}
SelectReactiveFormExample.ɵfac = function SelectReactiveFormExample_Factory(t) { return new (t || SelectReactiveFormExample)(); };
SelectReactiveFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["appearance", "fill"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "h4");
        i0.ɵɵtext(2, "mat-select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-form-field", 1);
        i0.ɵɵelementStart(4, "mat-label");
        i0.ɵɵtext(5, "Favorite Food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-select", 2);
        i0.ɵɵelementStart(7, "mat-option");
        i0.ɵɵtext(8, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(9, SelectReactiveFormExample_mat_option_9_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "h4");
        i0.ɵɵtext(13, "Native select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-form-field", 1);
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "Favorite Car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "select", 4);
        i0.ɵɵelementStart(18, "option", 5);
        i0.ɵɵtext(19, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(20, SelectReactiveFormExample_option_20_Template, 2, 2, "option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.form);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.foodControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Selected: ", ctx.foodControl.value, "");
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.carControl);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("Selected: ", ctx.carControl.value, "");
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectReactiveFormExample, [{
        type: Component,
        args: [{
                selector: 'select-reactive-form-example',
                templateUrl: 'select-reactive-form-example.html',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0toRCxxQ0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBYTs7O0lBRjBCLHFDQUFvQjtJQUN6RCxlQUNGO0lBREUsa0RBQ0Y7OztJQVNBLGlDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFTOzs7SUFGd0Isb0NBQW1CO0lBQ2xELGVBQ0Y7SUFERSxpREFDRjs7QUROTjs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFlcEM7UUFiQSxVQUFLLEdBQVc7WUFDZCxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztTQUN2QyxDQUFDO1FBQ0YsU0FBSSxHQUFVO1lBQ1osRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDcEMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDbEMsRUFBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUM7U0FDM0MsQ0FBQztRQUNGLGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUcvQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksU0FBUyxDQUFDO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FDckIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7a0dBcEJVLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDcEJ0QywrQkFDRTtRQUFBLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQix5Q0FDRTtRQUFBLGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQyxxQ0FDRTtRQUFBLGtDQUFZO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUM3Qix3RkFDRTtRQUVKLGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLDBCQUFHO1FBQUEsYUFBK0I7UUFBQSxpQkFBSTtRQUN0QywyQkFBSTtRQUFBLDhCQUFhO1FBQUEsaUJBQUs7UUFDdEIsMENBQ0U7UUFBQSxrQ0FBVztRQUFBLDZCQUFZO1FBQUEsaUJBQVk7UUFDbkMsa0NBQ0U7UUFBQSxrQ0FBaUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQzlCLGtGQUNFO1FBRUosaUJBQVM7UUFDWCxpQkFBaUI7UUFDakIsMEJBQUc7UUFBQSxhQUE4QjtRQUFBLGlCQUFJO1FBQ3ZDLGlCQUFPOztRQXZCRCxvQ0FBa0I7UUFJUixlQUEyQjtRQUEzQiw2Q0FBMkI7UUFFekIsZUFBMEI7UUFBMUIsbUNBQTBCO1FBS3ZDLGVBQStCO1FBQS9CLDhEQUErQjtRQUlQLGVBQTBCO1FBQTFCLDRDQUEwQjtRQUV6QyxlQUF3QjtRQUF4QixrQ0FBd0I7UUFLakMsZUFBOEI7UUFBOUIsNkRBQThCOztrRERGdEIseUJBQXlCO2NBSnJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgU2VsZWN0IGluIGEgcmVhY3RpdmUgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZWFjdGl2ZUZvcm1FeGFtcGxlIHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG4gIGNhcnM6IENhcltdID0gW1xuICAgIHt2YWx1ZTogJ3ZvbHZvJywgdmlld1ZhbHVlOiAnVm9sdm8nfSxcbiAgICB7dmFsdWU6ICdzYWFiJywgdmlld1ZhbHVlOiAnU2FhYid9LFxuICAgIHt2YWx1ZTogJ21lcmNlZGVzJywgdmlld1ZhbHVlOiAnTWVyY2VkZXMnfVxuICBdO1xuICBmb29kQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvb2RzWzJdLnZhbHVlKTtcbiAgY2FyQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmNhcnNbMV0udmFsdWUpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZm9vZDogdGhpcy5mb29kQ29udHJvbCxcbiAgICAgIGNhcjogdGhpcy5jYXJDb250cm9sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgRm9vZDwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJmb29kQ29udHJvbFwiIG5hbWU9XCJmb29kXCI+XG4gICAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiBbdmFsdWVdPVwiZm9vZC52YWx1ZVwiPlxuICAgICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPlNlbGVjdGVkOiB7e2Zvb2RDb250cm9sLnZhbHVlfX08L3A+XG4gIDxoND5OYXRpdmUgc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBDYXI8L21hdC1sYWJlbD5cbiAgICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgW2Zvcm1Db250cm9sXT1cImNhckNvbnRyb2xcIiBuYW1lPVwiY2FyXCI+XG4gICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9uZTwvb3B0aW9uPlxuICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY2FyIG9mIGNhcnNcIiBbdmFsdWVdPVwiY2FyLnZhbHVlXCI+XG4gICAgICAgIHt7Y2FyLnZpZXdWYWx1ZX19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+U2VsZWN0ZWQ6IHt7Y2FyQ29udHJvbC52YWx1ZX19PC9wPlxuPC9mb3JtPlxuIl19