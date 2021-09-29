import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatDatepickerInputHarness
 */
export class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
}
DatepickerHarnessExample.ɵfac = function DatepickerHarnessExample_Factory(t) { return new (t || DatepickerHarnessExample)(); };
DatepickerHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DatepickerHarnessExample, selectors: [["datepicker-harness-example"]], decls: 3, vars: 3, consts: [["matInput", "", 3, "matDatepicker", "ngModel", "min", "ngModelChange"], ["picker", ""]], template: function DatepickerHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "input", 0);
        i0.ɵɵlistener("ngModelChange", function DatepickerHarnessExample_Template_input_ngModelChange_0_listener($event) { return ctx.date = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelement(1, "mat-datepicker", null, 1);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("matDatepicker", _r0)("ngModel", ctx.date)("min", ctx.minDate);
    } }, directives: [i1.MatInput, i2.MatDatepickerInput, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, i2.MatDatepicker], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DatepickerHarnessExample, [{
        type: Component,
        args: [{ selector: 'datepicker-harness-example', template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sd0JBQXdCO0lBSnJDO1FBS0UsU0FBSSxHQUFjLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQWMsSUFBSSxDQUFDO0tBQzNCOztnR0FIWSx3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1RyQyxnQ0FJb0I7UUFEaEIsK0lBQWtCO1FBSHRCLGlCQUlvQjtRQUNwQiwwQ0FBeUM7OztRQUhyQyxtQ0FBd0IscUJBQUEsb0JBQUE7O3VGRE9mLHdCQUF3QjtjQUpwQyxTQUFTOzJCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERhdGVwaWNrZXJJbnB1dEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VySGFybmVzc0V4YW1wbGUge1xuICBkYXRlOiBEYXRlfG51bGwgPSBudWxsO1xuICBtaW5EYXRlOiBEYXRlfG51bGwgPSBudWxsO1xufVxuIiwiPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXG4gICAgW21pbl09XCJtaW5EYXRlXCI+XG48bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuIl19