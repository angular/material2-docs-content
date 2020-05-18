/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-reactive-form/select-reactive-form-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const food_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
} }
function SelectReactiveFormExample_option_20_Template(rf, ctx) { if (rf & 1) {
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
 * @record
 */
function Food() { }
if (false) {
    /** @type {?} */
    Food.prototype.value;
    /** @type {?} */
    Food.prototype.viewValue;
}
/**
 * @record
 */
function Car() { }
if (false) {
    /** @type {?} */
    Car.prototype.value;
    /** @type {?} */
    Car.prototype.viewValue;
}
/**
 * \@title Select in a reactive form
 */
let SelectReactiveFormExample = /** @class */ (() => {
    /**
     * \@title Select in a reactive form
     */
    class SelectReactiveFormExample {
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
    SelectReactiveFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-reactive-form-example',
                    templateUrl: 'select-reactive-form-example.html',
                    styleUrls: ['select-reactive-form-example.css'],
                },] },
    ];
    /** @nocollapse */
    SelectReactiveFormExample.ctorParameters = () => [];
    /** @nocollapse */ SelectReactiveFormExample.ɵfac = function SelectReactiveFormExample_Factory(t) { return new (t || SelectReactiveFormExample)(); };
    /** @nocollapse */ SelectReactiveFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "h4");
            i0.ɵɵtext(2, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field");
            i0.ɵɵelementStart(4, "mat-label");
            i0.ɵɵtext(5, "Favorite Food");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-select", 1);
            i0.ɵɵelementStart(7, "mat-option");
            i0.ɵɵtext(8, "None");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, SelectReactiveFormExample_mat_option_9_Template, 2, 2, "mat-option", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "p");
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "h4");
            i0.ɵɵtext(13, "Native select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field");
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Favorite Car");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "select", 3);
            i0.ɵɵelementStart(18, "option", 4);
            i0.ɵɵtext(19, "None");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(20, SelectReactiveFormExample_option_20_Template, 2, 2, "option", 2);
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
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatFormField, i2.MatLabel, i3.MatSelect, i1.NgControlStatus, i1.FormControlDirective, i4.MatOption, i5.NgForOf, i6.MatInput, i1.SelectControlValueAccessor, i1.NgSelectOption, i1.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectReactiveFormExample;
})();
export { SelectReactiveFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectReactiveFormExample, [{
        type: Component,
        args: [{
                selector: 'select-reactive-form-example',
                templateUrl: 'select-reactive-form-example.html',
                styleUrls: ['select-reactive-form-example.css'],
            }]
    }], function () { return []; }, null); })();
if (false) {
    /** @type {?} */
    SelectReactiveFormExample.prototype.form;
    /** @type {?} */
    SelectReactiveFormExample.prototype.foods;
    /** @type {?} */
    SelectReactiveFormExample.prototype.cars;
    /** @type {?} */
    SelectReactiveFormExample.prototype.foodControl;
    /** @type {?} */
    SelectReactiveFormExample.prototype.carControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDS2hELHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGMEIscUNBQW9CO0lBQ3pELGVBQ0Y7SUFERSxrREFDRjs7O0lBU0EsaUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVM7OztJQUZ3QixvQ0FBbUI7SUFDbEQsZUFDRjtJQURFLGlEQUNGOzs7OztBRGhCTixtQkFHQzs7O0lBRkMscUJBQWM7O0lBQ2QseUJBQWtCOzs7OztBQUdwQixrQkFHQzs7O0lBRkMsb0JBQWM7O0lBQ2Qsd0JBQWtCOzs7OztBQU1wQjs7OztJQUFBLE1BS2EseUJBQXlCO1FBZXBDO1lBYkEsVUFBSyxHQUFXO2dCQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2dCQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7YUFDdkMsQ0FBQztZQUNGLFNBQUksR0FBVTtnQkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDcEMsRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7Z0JBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO2FBQzNDLENBQUM7WUFDRixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFHL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztnQkFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUN0QixHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVU7YUFDckIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7O2dCQXpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztvQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7aUJBQ2hEOzs7O3lIQUNZLHlCQUF5QjtxRkFBekIseUJBQXlCO1lDckJ0QywrQkFDRTtZQUFBLDBCQUFJO1lBQUEsMEJBQVU7WUFBQSxpQkFBSztZQUNuQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsNkJBQWE7WUFBQSxpQkFBWTtZQUNwQyxxQ0FDRTtZQUFBLGtDQUFZO1lBQUEsb0JBQUk7WUFBQSxpQkFBYTtZQUM3Qix3RkFDRTtZQUVKLGlCQUFhO1lBQ2YsaUJBQWlCO1lBQ2pCLDBCQUFHO1lBQUEsYUFBK0I7WUFBQSxpQkFBSTtZQUN0QywyQkFBSTtZQUFBLDhCQUFhO1lBQUEsaUJBQUs7WUFDdEIsdUNBQ0U7WUFBQSxrQ0FBVztZQUFBLDZCQUFZO1lBQUEsaUJBQVk7WUFDbkMsa0NBQ0U7WUFBQSxrQ0FBaUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQzlCLGtGQUNFO1lBRUosaUJBQVM7WUFDWCxpQkFBaUI7WUFDakIsMEJBQUc7WUFBQSxhQUE4QjtZQUFBLGlCQUFJO1lBQ3ZDLGlCQUFPOztZQXZCRCxvQ0FBa0I7WUFJUixlQUEyQjtZQUEzQiw2Q0FBMkI7WUFFekIsZUFBMEI7WUFBMUIsbUNBQTBCO1lBS3ZDLGVBQStCO1lBQS9CLDhEQUErQjtZQUlQLGVBQTBCO1lBQTFCLDRDQUEwQjtZQUV6QyxlQUF3QjtZQUF4QixrQ0FBd0I7WUFLakMsZUFBOEI7WUFBOUIsNkRBQThCOztvQ0R0Qm5DO0tBMENDO1NBckJZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7OztJQUVDLHlDQUFnQjs7SUFDaEIsMENBSUU7O0lBQ0YseUNBSUU7O0lBQ0YsZ0RBQW1EOztJQUNuRCwrQ0FBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTZWxlY3QgaW4gYSByZWFjdGl2ZSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZWFjdGl2ZUZvcm1FeGFtcGxlIHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG4gIGNhcnM6IENhcltdID0gW1xuICAgIHt2YWx1ZTogJ3ZvbHZvJywgdmlld1ZhbHVlOiAnVm9sdm8nfSxcbiAgICB7dmFsdWU6ICdzYWFiJywgdmlld1ZhbHVlOiAnU2FhYid9LFxuICAgIHt2YWx1ZTogJ21lcmNlZGVzJywgdmlld1ZhbHVlOiAnTWVyY2VkZXMnfVxuICBdO1xuICBmb29kQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmZvb2RzWzJdLnZhbHVlKTtcbiAgY2FyQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLmNhcnNbMV0udmFsdWUpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgZm9vZDogdGhpcy5mb29kQ29udHJvbCxcbiAgICAgIGNhcjogdGhpcy5jYXJDb250cm9sXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICA8aDQ+bWF0LXNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiZm9vZENvbnRyb2xcIiBuYW1lPVwiZm9vZFwiPlxuICAgICAgPG1hdC1vcHRpb24+Tm9uZTwvbWF0LW9wdGlvbj5cbiAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBmb29kIG9mIGZvb2RzXCIgW3ZhbHVlXT1cImZvb2QudmFsdWVcIj5cbiAgICAgICAge3tmb29kLnZpZXdWYWx1ZX19XG4gICAgICA8L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5TZWxlY3RlZDoge3tmb29kQ29udHJvbC52YWx1ZX19PC9wPlxuICA8aDQ+TmF0aXZlIHNlbGVjdDwvaDQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICAgIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZm9ybUNvbnRyb2xdPVwiY2FyQ29udHJvbFwiIG5hbWU9XCJjYXJcIj5cbiAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Ob25lPC9vcHRpb24+XG4gICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBjYXIgb2YgY2Fyc1wiIFt2YWx1ZV09XCJjYXIudmFsdWVcIj5cbiAgICAgICAge3tjYXIudmlld1ZhbHVlfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5TZWxlY3RlZDoge3tjYXJDb250cm9sLnZhbHVlfX08L3A+XG48L2Zvcm0+XG4iXX0=