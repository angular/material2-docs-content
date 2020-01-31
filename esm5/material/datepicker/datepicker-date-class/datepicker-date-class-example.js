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
    DatepickerDateClassExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-date-class-example',
                    templateUrl: 'datepicker-date-class-example.html',
                    styleUrls: ['datepicker-date-class-example.css'],
                    encapsulation: ViewEncapsulation.None,
                },] },
    ];
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
            var _r6 = i0.ɵɵreference(6);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("matDatepicker", _r6);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r6);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHM0QsaURBQWlEO0FBQ2pEO0lBQUE7UUFPRSxjQUFTLEdBQUcsVUFBQyxDQUFPO1lBQ2xCLElBQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUV6QixnREFBZ0Q7WUFDaEQsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hFLENBQUMsQ0FBQTtLQUNGOztnQkFiQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7b0JBQ2hELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2lCQUN0Qzs7d0dBQ1ksMEJBQTBCO21FQUExQiwwQkFBMEI7WUNWdkMseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLDZCQUFhO1lBQUEsaUJBQVk7WUFDcEMsMkJBQ0E7WUFBQSwyQ0FBd0U7WUFDeEUsdUNBQWlFO1lBQ25FLGlCQUFpQjs7O1lBSEMsZUFBd0I7WUFBeEIsbUNBQXdCO1lBQ1AsZUFBYztZQUFkLHlCQUFjO1lBQy9CLGVBQXVCO1lBQXZCLHlDQUF1Qjs7cUNESnpDO0NBaUJDLEFBYkQsSUFhQztTQVBZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGRhdGUgY2xhc3NlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJEYXRlQ2xhc3NFeGFtcGxlIHtcbiAgZGF0ZUNsYXNzID0gKGQ6IERhdGUpOiBNYXRDYWxlbmRhckNlbGxDc3NDbGFzc2VzID0+IHtcbiAgICBjb25zdCBkYXRlID0gZC5nZXREYXRlKCk7XG5cbiAgICAvLyBIaWdobGlnaHQgdGhlIDFzdCBhbmQgMjB0aCBkYXkgb2YgZWFjaCBtb250aC5cbiAgICByZXR1cm4gKGRhdGUgPT09IDEgfHwgZGF0ZSA9PT0gMjApID8gJ2V4YW1wbGUtY3VzdG9tLWRhdGUtY2xhc3MnIDogJyc7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgW2RhdGVDbGFzc109XCJkYXRlQ2xhc3NcIiAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19