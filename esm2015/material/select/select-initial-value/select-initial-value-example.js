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
let SelectInitialValueExample = /** @class */ (() => {
    /**
     * \@title Basic select with initial value and no form
     */
    class SelectInitialValueExample {
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
    return SelectInitialValueExample;
})();
export { SelectInitialValueExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0twQyxxQ0FBZ0U7SUFBQSxZQUFzQjtJQUFBLGlCQUFhOzs7SUFBdkYsdUNBQXNCO0lBQThCLGVBQXNCO0lBQXRCLHlDQUFzQjs7O0lBVXRGLGlDQUNrRDtJQUFBLFlBQXNCO0lBQUEsaUJBQVM7Ozs7SUFEN0MsdUNBQXNCLG9EQUFBO0lBQ1IsZUFBc0I7SUFBdEIseUNBQXNCOzs7OztBRGQ1RSxtQkFHQzs7O0lBRkMscUJBQWM7O0lBQ2QseUJBQWtCOzs7OztBQUdwQixrQkFHQzs7O0lBRkMsb0JBQWM7O0lBQ2Qsd0JBQWtCOzs7OztBQU1wQjs7OztJQUFBLE1BS2EseUJBQXlCO1FBTHRDO1lBTUUsVUFBSyxHQUFXO2dCQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2dCQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztnQkFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7YUFDdkMsQ0FBQztZQUNGLFNBQUksR0FBVTtnQkFDWixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztnQkFDbEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7Z0JBQzVDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO2FBQ3JDLENBQUM7WUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25DLGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FLbEM7Ozs7O1FBSEMsU0FBUyxDQUFDLEtBQVk7WUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLG1CQUFBLEtBQUssQ0FBQyxNQUFNLEVBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDL0QsQ0FBQzs7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtvQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztvQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7aUJBQ2hEOzt5SEFDWSx5QkFBeUI7cUZBQXpCLHlCQUF5QjtZQ3BCdEMsMEJBQUk7WUFBQSxtREFBbUM7WUFBQSxpQkFBSztZQUM1QyxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsNkJBQWE7WUFBQSxpQkFBWTtZQUNwQyxxQ0FDRTtZQURVLHlKQUF3QjtZQUNsQyw2QkFBeUI7WUFDekIsd0ZBQWdFO1lBQ2xFLGlCQUFhO1lBQ2YsaUJBQWlCO1lBQ2pCLHlCQUFHO1lBQUEsWUFBOEI7WUFBQSxpQkFBSTtZQUVyQywyQkFBSTtZQUFBLHVEQUFzQztZQUFBLGlCQUFLO1lBQy9DLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSw2QkFBWTtZQUFBLGlCQUFZO1lBQ25DLGtDQUNFO1lBRHVCLCtHQUFVLHFCQUFpQixJQUFDO1lBQ25ELDZCQUEwQjtZQUMxQixrRkFDa0Q7WUFDcEQsaUJBQVM7WUFDWCxpQkFBaUI7WUFDakIsMEJBQUc7WUFBQSxhQUE2QjtZQUFBLGlCQUFJOztZQWhCdEIsZUFBd0I7WUFBeEIsd0NBQXdCO1lBRUMsZUFBNEI7WUFBNUIsbUNBQTRCO1lBR2hFLGVBQThCO1lBQTlCLDZEQUE4QjtZQU9yQixlQUEyQjtZQUEzQixrQ0FBMkI7WUFJcEMsZUFBNkI7WUFBN0IsNERBQTZCOztvQ0RuQmhDO0tBcUNDO1NBakJZLHlCQUF5QjtrREFBekIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7OztJQUVDLDBDQUlFOztJQUNGLHlDQUlFOztJQUNGLGlEQUFtQzs7SUFDbkMsZ0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbnRlcmZhY2UgRm9vZCB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWUgYW5kIG5vIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEluaXRpYWxWYWx1ZUV4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9XG4gIF07XG4gIGNhcnM6IENhcltdID0gW1xuICAgIHt2YWx1ZTogJ2ZvcmQnLCB2aWV3VmFsdWU6ICdGb3JkJ30sXG4gICAge3ZhbHVlOiAnY2hldnJvbGV0Jywgdmlld1ZhbHVlOiAnQ2hldnJvbGV0J30sXG4gICAge3ZhbHVlOiAnZG9kZ2UnLCB2aWV3VmFsdWU6ICdEb2RnZSd9XG4gIF07XG4gIHNlbGVjdGVkRm9vZCA9IHRoaXMuZm9vZHNbMl0udmFsdWU7XG4gIHNlbGVjdGVkQ2FyID0gdGhpcy5jYXJzWzBdLnZhbHVlO1xuXG4gIHNlbGVjdENhcihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ2FyID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MU2VsZWN0RWxlbWVudCkudmFsdWU7XG4gIH1cbn1cbiIsIjxoND5CYXNpYyBtYXQtc2VsZWN0IHdpdGggaW5pdGlhbCB2YWx1ZTwvaDQ+XG48bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgRm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZEZvb2RcIj5cbiAgICA8bWF0LW9wdGlvbj48L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZm9vZHNcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkRm9vZH19PC9wPlxuXG48aDQ+QmFzaWMgbmF0aXZlIHNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgKGNoYW5nZSk9XCJzZWxlY3RDYXIoJGV2ZW50KVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2Fyc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkQ2FyID09PSBvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZENhcn19PC9wPlxuIl19