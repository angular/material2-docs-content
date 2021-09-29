import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
function SelectInitialValueExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r2.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r2.viewValue);
} }
function SelectInitialValueExample_option_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 7);
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
 * @title Basic select with initial value and no form
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
    selectCar(event) {
        this.selectedCar = event.target.value;
    }
}
SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
SelectInitialValueExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h4");
        i0.ɵɵtext(1, "Basic mat-select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelementStart(3, "mat-label");
        i0.ɵɵtext(4, "Favorite Food");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-select", 1);
        i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
        i0.ɵɵelement(6, "mat-option");
        i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "h4");
        i0.ɵɵtext(11, "Basic native select with initial value");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-form-field", 0);
        i0.ɵɵelementStart(13, "mat-label");
        i0.ɵɵtext(14, "Favorite Car");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "select", 3);
        i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
        i0.ɵɵelement(16, "option", 4);
        i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 5);
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
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.NgForOf, i5.MatInput, i6.NgSelectOption, i6.ɵNgSelectMultipleOption], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectInitialValueExample, [{
        type: Component,
        args: [{ selector: 'select-initial-value-example', template: "<h4>Basic mat-select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Food</mat-label>\n  <mat-select [(value)]=\"selectedFood\">\n    <mat-option></mat-option>\n    <mat-option [value]=\"option.value\" *ngFor=\"let option of foods\">{{ option.viewValue }}</mat-option>\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selectedFood}}</p>\n\n<h4>Basic native select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Car</mat-label>\n  <select matNativeControl (change)=\"selectCar($event)\">\n    <option value=\"\"></option>\n    <option *ngFor=\"let option of cars\" [value]=\"option.value\"\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\n  </select>\n</mat-form-field>\n<p>You selected: {{selectedCar}}</p>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNLcEMscUNBQWdFO0lBQUEsWUFBc0I7SUFBQSxpQkFBYTs7O0lBQXZGLHVDQUFzQjtJQUE4QixlQUFzQjtJQUF0Qix5Q0FBc0I7OztJQVV0RixpQ0FDa0Q7SUFBQSxZQUFzQjtJQUFBLGlCQUFTOzs7O0lBRDdDLHVDQUFzQixvREFBQTtJQUNSLGVBQXNCO0lBQXRCLHlDQUFzQjs7QURKNUU7O0dBRUc7QUFLSCxNQUFNLE9BQU8seUJBQXlCO0lBSnRDO1FBS0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7WUFDdEMsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDdkMsQ0FBQztRQUNGLFNBQUksR0FBVTtZQUNaLEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO1lBQ2xDLEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDO1lBQzVDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3JDLENBQUM7UUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25DLGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FLbEM7SUFIQyxTQUFTLENBQUMsS0FBWTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFJLEtBQUssQ0FBQyxNQUE0QixDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDOztrR0FoQlUseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUNuQnRDLDBCQUFJO1FBQUEsbURBQW1DO1FBQUEsaUJBQUs7UUFDNUMseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsNkJBQWE7UUFBQSxpQkFBWTtRQUNwQyxxQ0FBcUM7UUFBekIseUpBQXdCO1FBQ2xDLDZCQUF5QjtRQUN6Qix3RkFBbUc7UUFDckcsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIseUJBQUc7UUFBQSxZQUE4QjtRQUFBLGlCQUFJO1FBRXJDLDJCQUFJO1FBQUEsdURBQXNDO1FBQUEsaUJBQUs7UUFDL0MsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyxrQ0FBc0Q7UUFBN0IsK0dBQVUscUJBQWlCLElBQUM7UUFDbkQsNkJBQTBCO1FBQzFCLGtGQUNpRjtRQUNuRixpQkFBUztRQUNYLGlCQUFpQjtRQUNqQiwwQkFBRztRQUFBLGFBQTZCO1FBQUEsaUJBQUk7O1FBaEJ0QixlQUF3QjtRQUF4Qix3Q0FBd0I7UUFFb0IsZUFBUTtRQUFSLG1DQUFRO1FBRy9ELGVBQThCO1FBQTlCLDZEQUE4QjtRQU9GLGVBQU87UUFBUCxrQ0FBTztRQUluQyxlQUE2QjtRQUE3Qiw0REFBNkI7O3VGREFuQix5QkFBeUI7Y0FKckMsU0FBUzsyQkFDRSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0IHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgbm8gZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJbml0aWFsVmFsdWVFeGFtcGxlIHtcbiAgZm9vZHM6IEZvb2RbXSA9IFtcbiAgICB7dmFsdWU6ICdzdGVhay0wJywgdmlld1ZhbHVlOiAnU3RlYWsnfSxcbiAgICB7dmFsdWU6ICdwaXp6YS0xJywgdmlld1ZhbHVlOiAnUGl6emEnfSxcbiAgICB7dmFsdWU6ICd0YWNvcy0yJywgdmlld1ZhbHVlOiAnVGFjb3MnfVxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICdmb3JkJywgdmlld1ZhbHVlOiAnRm9yZCd9LFxuICAgIHt2YWx1ZTogJ2NoZXZyb2xldCcsIHZpZXdWYWx1ZTogJ0NoZXZyb2xldCd9LFxuICAgIHt2YWx1ZTogJ2RvZGdlJywgdmlld1ZhbHVlOiAnRG9kZ2UnfVxuICBdO1xuICBzZWxlY3RlZEZvb2QgPSB0aGlzLmZvb2RzWzJdLnZhbHVlO1xuICBzZWxlY3RlZENhciA9IHRoaXMuY2Fyc1swXS52YWx1ZTtcblxuICBzZWxlY3RDYXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5zZWxlY3RlZENhciA9IChldmVudC50YXJnZXQgYXMgSFRNTFNlbGVjdEVsZW1lbnQpLnZhbHVlO1xuICB9XG59XG4iLCI8aDQ+QmFzaWMgbWF0LXNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgRm9vZDwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbKHZhbHVlKV09XCJzZWxlY3RlZEZvb2RcIj5cbiAgICA8bWF0LW9wdGlvbj48L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZm9vZHNcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkRm9vZH19PC9wPlxuXG48aDQ+QmFzaWMgbmF0aXZlIHNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgQ2FyPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCAoY2hhbmdlKT1cInNlbGVjdENhcigkZXZlbnQpXCI+XG4gICAgPG9wdGlvbiB2YWx1ZT1cIlwiPjwvb3B0aW9uPlxuICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBjYXJzXCIgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICBbc2VsZWN0ZWRdPVwic2VsZWN0ZWRDYXIgPT09IG9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52aWV3VmFsdWUgfX08L29wdGlvbj5cbiAgPC9zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkQ2FyfX08L3A+XG4iXX0=