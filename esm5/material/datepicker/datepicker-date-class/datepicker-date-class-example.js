import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker with custom date classes */
var DatepickerDateClassExample = /** @class */ (function () {
    function DatepickerDateClassExample() {
        this.dateClass = function (d) {
            var date = d.getDate();
            // Highlight the 1st and 20th day of each month.
            return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
        };
    }
    DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
    DatepickerDateClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [[1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 0);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Choose a date");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(3, "input", 1);
            i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
            i0.ɵɵelement(5, "mat-datepicker", 3, 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r13 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r13);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r13);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("dateClass", ctx.dateClass);
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
    return DatepickerDateClassExample;
}());
export { DatepickerDateClassExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerDateClassExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-date-class-example',
                templateUrl: 'datepicker-date-class-example.html',
                styleUrls: ['datepicker-date-class-example.css'],
                encapsulation: ViewEncapsulation.None,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHM0QsaURBQWlEO0FBQ2pEO0lBQUE7UUFPRSxjQUFTLEdBQUcsVUFBQyxDQUFPO1lBQ2xCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QixnREFBZ0Q7WUFDaEQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hFLENBQUMsQ0FBQTtLQUNGO3dHQVBZLDBCQUEwQjttRUFBMUIsMEJBQTBCO1lDVnZDLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSw2QkFBYTtZQUFBLGlCQUFZO1lBQ3BDLDJCQUNBO1lBQUEsMkNBQXdFO1lBQ3hFLHVDQUFpRTtZQUNuRSxpQkFBaUI7OztZQUhDLGVBQXdCO1lBQXhCLG9DQUF3QjtZQUNQLGVBQWM7WUFBZCwwQkFBYztZQUMvQixlQUF1QjtZQUF2Qix5Q0FBdUI7O3FDREp6QztDQWlCQyxBQWJELElBYUM7U0FQWSwwQkFBMEI7a0RBQTFCLDBCQUEwQjtjQU50QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7Z0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3Nlc30gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGN1c3RvbSBkYXRlIGNsYXNzZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGF0ZUNsYXNzRXhhbXBsZSB7XG4gIGRhdGVDbGFzcyA9IChkOiBEYXRlKTogTWF0Q2FsZW5kYXJDZWxsQ3NzQ2xhc3NlcyA9PiB7XG4gICAgY29uc3QgZGF0ZSA9IGQuZ2V0RGF0ZSgpO1xuXG4gICAgLy8gSGlnaGxpZ2h0IHRoZSAxc3QgYW5kIDIwdGggZGF5IG9mIGVhY2ggbW9udGguXG4gICAgcmV0dXJuIChkYXRlID09PSAxIHx8IGRhdGUgPT09IDIwKSA/ICdleGFtcGxlLWN1c3RvbS1kYXRlLWNsYXNzJyA6ICcnO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyIFtkYXRlQ2xhc3NdPVwiZGF0ZUNsYXNzXCIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==