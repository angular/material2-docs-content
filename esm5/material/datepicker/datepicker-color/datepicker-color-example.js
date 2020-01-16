import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker palette colors */
var DatepickerColorExample = /** @class */ (function () {
    function DatepickerColorExample() {
    }
    DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
    DatepickerColorExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Inherited calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", null, 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field", 0);
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Custom calendar color");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 1);
            i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(12, "mat-datepicker", 4, 5);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = i0.ɵɵreference(6);
            var _r3 = i0.ɵɵreference(13);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r2);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("matDatepicker", _r3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r3);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return DatepickerColorExample;
}());
export { DatepickerColorExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerColorExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-color-example',
                templateUrl: 'datepicker-color-example.html',
                styleUrls: ['datepicker-color-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWNvbG9yL2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1jb2xvci9kYXRlcGlja2VyLWNvbG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qyx1Q0FBdUM7QUFDdkM7SUFBQTtLQUtzQztnR0FBekIsc0JBQXNCOytEQUF0QixzQkFBc0I7WUNSbkMseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLHdDQUF3QjtZQUFBLGlCQUFZO1lBQy9DLDJCQUNBO1lBQUEsMkNBQXlFO1lBQ3pFLDBDQUEwQztZQUM1QyxpQkFBaUI7WUFFakIseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLHFDQUFxQjtZQUFBLGlCQUFZO1lBQzVDLDRCQUNBO1lBQUEsNENBQXlFO1lBQ3pFLHdDQUEwRDtZQUM1RCxpQkFBaUI7Ozs7WUFWQyxlQUF5QjtZQUF6QixtQ0FBeUI7WUFDUixlQUFlO1lBQWYseUJBQWU7WUFNaEMsZUFBeUI7WUFBekIsbUNBQXlCO1lBQ1IsZUFBZTtZQUFmLHlCQUFlOztpQ0RWbEQ7Q0FRc0MsQUFMdEMsSUFLc0M7U0FBekIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgcGFsZXR0ZSBjb2xvcnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29sb3JFeGFtcGxlIHt9XG4iLCI8bWF0LWZvcm0tZmllbGQgY29sb3I9XCJhY2NlbnRcIj5cbiAgPG1hdC1sYWJlbD5Jbmhlcml0ZWQgY2FsZW5kYXIgY29sb3I8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlcjFcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXIxXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyMT48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGNvbG9yPVwiYWNjZW50XCI+XG4gIDxtYXQtbGFiZWw+Q3VzdG9tIGNhbGVuZGFyIGNvbG9yPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXIyXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyMlwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcjIgY29sb3I9XCJwcmltYXJ5XCI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=