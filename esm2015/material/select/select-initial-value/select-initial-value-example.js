/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-initial-value/select-initial-value-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", option_r3.value)("selected", ctx_r1.selectedCar === option_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r3.viewValue);
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
 * \@title Basic select with initial value and no form
 */
export class SelectInitialValueExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'ford', viewValue: 'Ford' },
            { value: 'chevrolet', viewValue: 'Chevrolet' },
            { value: 'dodge', viewValue: 'Dodge' }
        ];
        this.selectedFood = this.foods[2].value;
        this.selectedCar = this.cars[0].value;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectCar(event) {
        this.selectedCar = ((/** @type {?} */ (event.target))).value;
    }
}
SelectInitialValueExample.decorators = [
    { type: Component, args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
                styleUrls: ['select-initial-value-example.css'],
            },] },
];
/** @nocollapse */ SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
/** @nocollapse */ SelectInitialValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [[3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "Basic mat-select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field");
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite Food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
        i0.ɵɵelement(6, "mat-option");
        i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "Basic native select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field");
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite Car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 2);
        i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
        i0.ɵɵelement(16, "option", 3);
        i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵtext(19);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("value", ctx.selectedFood);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.foods);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedFood, "");
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("ngForOf", ctx.cars);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedCar, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵangular_packages_forms_forms_x], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{
                selector: 'select-initial-value-example',
                templateUrl: 'select-initial-value-example.html',
                styleUrls: ['select-initial-value-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectInitialValueExample.prototype.foods;
    /** @type {?} */
    SelectInitialValueExample.prototype.cars;
    /** @type {?} */
    SelectInitialValueExample.prototype.selectedFood;
    /** @type {?} */
    SelectInitialValueExample.prototype.selectedCar;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0twQyxxQ0FBZ0U7SUFBQSxZQUFzQjtJQUFBLGlCQUFhOzs7SUFBdkYsdUNBQXNCO0lBQThCLGVBQXNCO0lBQXRCLHlDQUFzQjs7O0lBVXRGLGlDQUNrRDtJQUFBLFlBQXNCO0lBQUEsaUJBQVM7Ozs7SUFEN0MsdUNBQXNCLG9EQUFBO0lBQ1IsZUFBc0I7SUFBdEIseUNBQXNCOzs7OztBRGQ1RSxtQkFHQzs7O0lBRkMscUJBQWM7O0lBQ2QseUJBQWtCOzs7OztBQUdwQixrQkFHQzs7O0lBRkMsb0JBQWM7O0lBQ2Qsd0JBQWtCOzs7OztBQVdwQixNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO1lBQzVDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3JDLENBQUM7UUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FLbEM7Ozs7O0lBSEMsU0FBUyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7cUhBQ1kseUJBQXlCO2lGQUF6Qix5QkFBeUI7UUNwQnRDLDBCQUFJO1FBQUEsbURBQW1DO1FBQUEsaUJBQUs7UUFDNUMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDZCQUFhO1FBQUEsaUJBQVk7UUFDcEMscUNBQ0U7UUFEVSx5SkFBd0I7UUFDbEMsNkJBQXlCO1FBQ3pCLHdGQUFnRTtRQUNsRSxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQix5QkFBRztRQUFBLFlBQThCO1FBQUEsaUJBQUk7UUFFckMsMkJBQUk7UUFBQSx1REFBc0M7UUFBQSxpQkFBSztRQUMvQyx1Q0FDRTtRQUFBLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyxrQ0FDRTtRQUR1QiwrR0FBVSxxQkFBaUIsSUFBQztRQUNuRCw2QkFBMEI7UUFDMUIsa0ZBQ2tEO1FBQ3BELGlCQUFTO1FBQ1gsaUJBQWlCO1FBQ2pCLDBCQUFHO1FBQUEsYUFBNkI7UUFBQSxpQkFBSTs7UUFoQnRCLGVBQXdCO1FBQXhCLHdDQUF3QjtRQUVDLGVBQTRCO1FBQTVCLG1DQUE0QjtRQUdoRSxlQUE4QjtRQUE5Qiw2REFBOEI7UUFPckIsZUFBMkI7UUFBM0Isa0NBQTJCO1FBSXBDLGVBQTZCO1FBQTdCLDREQUE2Qjs7a0REQ25CLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7Ozs7SUFFQywwQ0FJRTs7SUFDRix5Q0FJRTs7SUFDRixpREFBbUM7O0lBQ25DLGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlIGFuZCBubyBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbml0aWFsVmFsdWVFeGFtcGxlIHtcbiAgZm9vZHM6IEZvb2RbXSA9IFtcbiAgICB7dmFsdWU6ICdzdGVhay0wJywgdmlld1ZhbHVlOiAnU3RlYWsnfSxcbiAgICB7dmFsdWU6ICdwaXp6YS0xJywgdmlld1ZhbHVlOiAnUGl6emEnfSxcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICdmb3JkJywgdmlld1ZhbHVlOiAnRm9yZCd9LFxuICAgIHt2YWx1ZTogJ2NoZXZyb2xldCcsIHZpZXdWYWx1ZTogJ0NoZXZyb2xldCd9LFxuICAgIHt2YWx1ZTogJ2RvZGdlJywgdmlld1ZhbHVlOiAnRG9kZ2UnfVxuICBdO1xuICBzZWxlY3RlZEZvb2QgPSB0aGlzLmZvb2RzWzJdLnZhbHVlO1xuICBzZWxlY3RlZENhciA9IHRoaXMuY2Fyc1swXS52YWx1ZTtcblxuICBzZWxlY3RDYXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZENhciA9IChldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuICB9XG59XG4iLCI8aDQ+QmFzaWMgbWF0LXNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwic2VsZWN0ZWRGb29kXCI+XG4gICAgPG1hdC1vcHRpb24+PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZvb2RzXCI+e3sgb3B0aW9uLnZpZXdWYWx1ZSB9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZEZvb2R9fTwvcD5cblxuPGg0PkJhc2ljIG5hdGl2ZSBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBDYXI8L21hdC1sYWJlbD5cbiAgPHNlbGVjdCBtYXROYXRpdmVDb250cm9sIChjaGFuZ2UpPVwic2VsZWN0Q2FyKCRldmVudClcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGNhcnNcIiBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgIFtzZWxlY3RlZF09XCJzZWxlY3RlZENhciA9PT0gb3B0aW9uLnZhbHVlXCI+e3sgb3B0aW9uLnZpZXdWYWx1ZSB9fTwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48cD5Zb3Ugc2VsZWN0ZWQ6IHt7c2VsZWN0ZWRDYXJ9fTwvcD5cbiJdfQ==