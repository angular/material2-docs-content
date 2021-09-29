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
SelectReactiveFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["appearance", "fill"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵNgSelectMultipleOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectReactiveFormExample, [{
        type: Component,
        args: [{ selector: 'select-reactive-form-example', template: "<form [formGroup]=\"form\">\n  <h4>mat-select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Food</mat-label>\n    <mat-select [formControl]=\"foodControl\" name=\"food\">\n      <mat-option>None</mat-option>\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p>Selected: {{foodControl.value}}</p>\n  <h4>Native select</h4>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Favorite Car</mat-label>\n    <select matNativeControl [formControl]=\"carControl\" name=\"car\">\n      <option value=\"\">None</option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p>Selected: {{carControl.value}}</p>\n</form>\n" }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0toRCxxQ0FBNEQ7SUFDMUQsWUFDRjtJQUFBLGlCQUFhOzs7SUFGMEIscUNBQW9CO0lBQ3pELGVBQ0Y7SUFERSxrREFDRjs7O0lBU0EsaUNBQXFEO0lBQ25ELFlBQ0Y7SUFBQSxpQkFBUzs7O0lBRndCLG9DQUFtQjtJQUNsRCxlQUNGO0lBREUsaURBQ0Y7O0FETk47O0dBRUc7QUFLSCxNQUFNLE9BQU8seUJBQXlCO0lBZXBDO1FBYkEsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7UUFDRixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7O2tHQXBCVSx5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ3BCdEMsK0JBQXlCO1FBQ3ZCLDBCQUFJO1FBQUEsMEJBQVU7UUFBQSxpQkFBSztRQUNuQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLHFDQUFvRDtRQUNsRCxrQ0FBWTtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDN0Isd0ZBRWE7UUFDZixpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQiwwQkFBRztRQUFBLGFBQStCO1FBQUEsaUJBQUk7UUFDdEMsMkJBQUk7UUFBQSw4QkFBYTtRQUFBLGlCQUFLO1FBQ3RCLDBDQUFrQztRQUNoQyxrQ0FBVztRQUFBLDZCQUFZO1FBQUEsaUJBQVk7UUFDbkMsa0NBQStEO1FBQzdELGtDQUFpQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDOUIsa0ZBRVM7UUFDWCxpQkFBUztRQUNYLGlCQUFpQjtRQUNqQiwwQkFBRztRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDdkMsaUJBQU87O1FBdkJELG9DQUFrQjtRQUlSLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUVSLGVBQVE7UUFBUixtQ0FBUTtRQUt0QyxlQUErQjtRQUEvQiw4REFBK0I7UUFJUCxlQUEwQjtRQUExQiw0Q0FBMEI7UUFFekIsZUFBTztRQUFQLGtDQUFPO1FBS2hDLGVBQThCO1FBQTlCLDZEQUE4Qjs7dUZERnRCLHlCQUF5QjtjQUpyQyxTQUFTOzJCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFNlbGVjdCBpbiBhIHJlYWN0aXZlIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0UmVhY3RpdmVGb3JtRXhhbXBsZSB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZm9vZHM6IEZvb2RbXSA9IFtcbiAgICB7dmFsdWU6ICdzdGVhay0wJywgdmlld1ZhbHVlOiAnU3RlYWsnfSxcbiAgICB7dmFsdWU6ICdwaXp6YS0xJywgdmlld1ZhbHVlOiAnUGl6emEnfSxcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICd2b2x2bycsIHZpZXdWYWx1ZTogJ1ZvbHZvJ30sXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ31cbiAgXTtcbiAgZm9vZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5mb29kc1syXS52YWx1ZSk7XG4gIGNhckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5jYXJzWzFdLnZhbHVlKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgIGZvb2Q6IHRoaXMuZm9vZENvbnRyb2wsXG4gICAgICBjYXI6IHRoaXMuY2FyQ29udHJvbFxuICAgIH0pO1xuICB9XG59XG4iLCI8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiZm9vZENvbnRyb2xcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmb29kIG9mIGZvb2RzXCIgW3ZhbHVlXT1cImZvb2QudmFsdWVcIj5cbiAgICAgICAge3tmb29kLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5TZWxlY3RlZDoge3tmb29kQ29udHJvbC52YWx1ZX19PC9wPlxuICA8aDQ+TmF0aXZlIHNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgQ2FyPC9tYXQtbGFiZWw+XG4gICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtmb3JtQ29udHJvbF09XCJjYXJDb250cm9sXCIgbmFtZT1cImNhclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNhciBvZiBjYXJzXCIgW3ZhbHVlXT1cImNhci52YWx1ZVwiPlxuICAgICAgICB7e2Nhci52aWV3VmFsdWV9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPlNlbGVjdGVkOiB7e2NhckNvbnRyb2wudmFsdWV9fTwvcD5cbjwvZm9ybT5cbiJdfQ==