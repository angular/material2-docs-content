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
    const food_r27 = ctx.$implicit;
    i0.ɵɵproperty("value", food_r27.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", food_r27.viewValue, " ");
} }
function SelectReactiveFormExample_option_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const car_r28 = ctx.$implicit;
    i0.ɵɵproperty("value", car_r28.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", car_r28.viewValue, " ");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1yZWFjdGl2ZS1mb3JtL3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDS2hELHFDQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFhOzs7SUFGMEIsc0NBQW9CO0lBQ3pELGVBQ0Y7SUFERSxtREFDRjs7O0lBU0EsaUNBQ0U7SUFBQSxZQUNGO0lBQUEsaUJBQVM7OztJQUZ3QixxQ0FBbUI7SUFDbEQsZUFDRjtJQURFLGtEQUNGOzs7OztBRGhCTixtQkFHQzs7O0lBRkMscUJBQWM7O0lBQ2QseUJBQWtCOzs7OztBQUdwQixrQkFHQzs7O0lBRkMsb0JBQWM7O0lBQ2Qsd0JBQWtCOzs7OztBQVdwQixNQUFNLE9BQU8seUJBQXlCO0lBZXBDO1FBYkEsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFDO1NBQzNDLENBQUM7UUFDRixnQkFBVyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsZUFBVSxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHL0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQ3JCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQXpCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7Ozs7a0dBQ1kseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNyQnRDLCtCQUNFO1FBQUEsMEJBQUk7UUFBQSwwQkFBVTtRQUFBLGlCQUFLO1FBQ25CLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSw2QkFBYTtRQUFBLGlCQUFZO1FBQ3BDLHFDQUNFO1FBQUEsa0NBQVk7UUFBQSxvQkFBSTtRQUFBLGlCQUFhO1FBQzdCLHdGQUNFO1FBRUosaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsMEJBQUc7UUFBQSxhQUErQjtRQUFBLGlCQUFJO1FBQ3RDLDJCQUFJO1FBQUEsOEJBQWE7UUFBQSxpQkFBSztRQUN0Qix1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyxrQ0FDRTtRQUFBLGtDQUFpQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDOUIsa0ZBQ0U7UUFFSixpQkFBUztRQUNYLGlCQUFpQjtRQUNqQiwwQkFBRztRQUFBLGFBQThCO1FBQUEsaUJBQUk7UUFDdkMsaUJBQU87O1FBdkJELG9DQUFrQjtRQUlSLGVBQTJCO1FBQTNCLDZDQUEyQjtRQUV6QixlQUEwQjtRQUExQixtQ0FBMEI7UUFLdkMsZUFBK0I7UUFBL0IsOERBQStCO1FBSVAsZUFBMEI7UUFBMUIsNENBQTBCO1FBRXpDLGVBQXdCO1FBQXhCLGtDQUF3QjtRQUtqQyxlQUE4QjtRQUE5Qiw2REFBOEI7O2tERER0Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOzs7O0lBRUMseUNBQWdCOztJQUNoQiwwQ0FJRTs7SUFDRix5Q0FJRTs7SUFDRixnREFBbUQ7O0lBQ25ELCtDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFNlbGVjdCBpbiBhIHJlYWN0aXZlIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LXJlYWN0aXZlLWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1yZWFjdGl2ZS1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlYWN0aXZlRm9ybUV4YW1wbGUge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcbiAgY2FyczogQ2FyW10gPSBbXG4gICAge3ZhbHVlOiAndm9sdm8nLCB2aWV3VmFsdWU6ICdWb2x2byd9LFxuICAgIHt2YWx1ZTogJ3NhYWInLCB2aWV3VmFsdWU6ICdTYWFiJ30sXG4gICAge3ZhbHVlOiAnbWVyY2VkZXMnLCB2aWV3VmFsdWU6ICdNZXJjZWRlcyd9XG4gIF07XG4gIGZvb2RDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuZm9vZHNbMl0udmFsdWUpO1xuICBjYXJDb250cm9sID0gbmV3IEZvcm1Db250cm9sKHRoaXMuY2Fyc1sxXS52YWx1ZSk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5mb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICBmb29kOiB0aGlzLmZvb2RDb250cm9sLFxuICAgICAgY2FyOiB0aGlzLmNhckNvbnRyb2xcbiAgICB9KTtcbiAgfVxufVxuIiwiPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxoND5tYXQtc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgRm9vZDwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJmb29kQ29udHJvbFwiIG5hbWU9XCJmb29kXCI+XG4gICAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGZvb2Qgb2YgZm9vZHNcIiBbdmFsdWVdPVwiZm9vZC52YWx1ZVwiPlxuICAgICAgICB7e2Zvb2Qudmlld1ZhbHVlfX1cbiAgICAgIDwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPlNlbGVjdGVkOiB7e2Zvb2RDb250cm9sLnZhbHVlfX08L3A+XG4gIDxoND5OYXRpdmUgc2VsZWN0PC9oND5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgQ2FyPC9tYXQtbGFiZWw+XG4gICAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIFtmb3JtQ29udHJvbF09XCJjYXJDb250cm9sXCIgbmFtZT1cImNhclwiPlxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj5cbiAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNhciBvZiBjYXJzXCIgW3ZhbHVlXT1cImNhci52YWx1ZVwiPlxuICAgICAgICB7e2Nhci52aWV3VmFsdWV9fVxuICAgICAgPC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPlNlbGVjdGVkOiB7e2NhckNvbnRyb2wudmFsdWV9fTwvcD5cbjwvZm9ybT5cbiJdfQ==