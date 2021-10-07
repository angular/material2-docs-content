import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/input";
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
DatepickerHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: DatepickerHarnessExample, selector: "datepicker-harness-example", ngImport: i0, template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n", components: [{ type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }], directives: [{ type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sd0JBQXdCO0lBSnJDO1FBS0UsU0FBSSxHQUFjLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQWMsSUFBSSxDQUFDO0tBQzNCOzs2SEFIWSx3QkFBd0I7aUhBQXhCLHdCQUF3QixrRUNUckMscUpBTUE7bUdER2Esd0JBQXdCO2tCQUpwQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERhdGVwaWNrZXJJbnB1dEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VySGFybmVzc0V4YW1wbGUge1xuICBkYXRlOiBEYXRlfG51bGwgPSBudWxsO1xuICBtaW5EYXRlOiBEYXRlfG51bGwgPSBudWxsO1xufVxuIiwiPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXG4gICAgW21pbl09XCJtaW5EYXRlXCI+XG48bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuIl19