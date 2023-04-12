import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/datepicker";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatDatepickerInputHarness
 */
class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: DatepickerHarnessExample, selector: "datepicker-harness-example", ngImport: i0, template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n", dependencies: [{ kind: "component", type: i1.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i1.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
export { DatepickerHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLHdCQUF3QjtJQUpyQztRQUtFLFNBQUksR0FBZ0IsSUFBSSxDQUFDO1FBQ3pCLFlBQU8sR0FBZ0IsSUFBSSxDQUFDO0tBQzdCO3FIQUhZLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLGtFQ1RyQyxxSkFNQTs7U0RHYSx3QkFBd0I7a0dBQXhCLHdCQUF3QjtrQkFKcEMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXREYXRlcGlja2VySW5wdXRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckhhcm5lc3NFeGFtcGxlIHtcbiAgZGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBtaW5EYXRlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG59XG4iLCI8aW5wdXRcbiAgICBtYXRJbnB1dFxuICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcbiAgICBbbWluXT1cIm1pbkRhdGVcIj5cbjxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4iXX0=