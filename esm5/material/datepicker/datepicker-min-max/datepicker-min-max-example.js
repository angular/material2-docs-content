import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker with min & max validation */
var DatepickerMinMaxExample = /** @class */ (function () {
    function DatepickerMinMaxExample() {
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
    }
    DatepickerMinMaxExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-min-max-example',
                    templateUrl: 'datepicker-min-max-example.html',
                    styleUrls: ['datepicker-min-max-example.css'],
                },] },
    ];
    DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
    DatepickerMinMaxExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 5, vars: 4, consts: [[1, "example-full-width"], ["matInput", "", "placeholder", "Choose a date", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelement(1, "input", 1);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(3, "mat-datepicker", null, 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r16 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r16);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r16);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerMinMaxExample;
}());
export { DatepickerMinMaxExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerMinMaxExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-min-max-example',
                templateUrl: 'datepicker-min-max-example.html',
                styleUrls: ['datepicker-min-max-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1taW4tbWF4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbWluLW1heC9kYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1taW4tbWF4L2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsa0RBQWtEO0FBQ2xEO0lBQUE7UUFNRSxZQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixZQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7a0dBQ1ksdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNScEMseUNBQ0U7WUFBQSwyQkFDQTtZQUFBLDJDQUF3RTtZQUN4RSwwQ0FBeUM7WUFDM0MsaUJBQWlCOzs7WUFIQyxlQUFlO1lBQWYsaUNBQWUsb0JBQUEsdUJBQUE7WUFDRSxlQUFjO1lBQWQsMEJBQWM7O2tDREZqRDtDQVdDLEFBUkQsSUFRQztTQUhZLHVCQUF1QjttQ0FBdkIsdUJBQXVCO2NBTG5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggbWluICYgbWF4IHZhbGlkYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyTWluTWF4RXhhbXBsZSB7XG4gIG1pbkRhdGUgPSBuZXcgRGF0ZSgyMDAwLCAwLCAxKTtcbiAgbWF4RGF0ZSA9IG5ldyBEYXRlKDIwMjAsIDAsIDEpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWluXT1cIm1pbkRhdGVcIiBbbWF4XT1cIm1heERhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBwbGFjZWhvbGRlcj1cIkNob29zZSBhIGRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=