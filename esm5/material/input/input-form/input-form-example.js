import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
var _c0 = ["postalCode", ""];
/**
 * @title Inputs in a form
 */
var InputFormExample = /** @class */ (function () {
    function InputFormExample() {
    }
    InputFormExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-form-example',
                    templateUrl: 'input-form-example.html',
                    styleUrls: ['input-form-example.css'],
                },] },
    ];
    InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
    InputFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 31, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Company (disabled)", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Long Last Name That Will Be Truncated"], ["matInput", "", "placeholder", "Address"], ["matInput", "", "placeholder", "Address 2"], ["matInput", "", "placeholder", "City"], ["matInput", "", "placeholder", "State"], ["matInput", "", "maxlength", "5", "placeholder", "Postal Code", "value", "94043"], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "table", 3);
            i0.ɵɵelementStart(4, "tr");
            i0.ɵɵelementStart(5, "td");
            i0.ɵɵelementStart(6, "mat-form-field", 1);
            i0.ɵɵelement(7, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "td");
            i0.ɵɵelementStart(9, "mat-form-field", 1);
            i0.ɵɵelement(10, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p");
            i0.ɵɵelementStart(12, "mat-form-field", 1);
            i0.ɵɵelementStart(13, "textarea", 6);
            i0.ɵɵtext(14, "1600 Amphitheatre Pkwy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "mat-form-field", 1);
            i0.ɵɵelement(16, "textarea", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "table", 3);
            i0.ɵɵelementStart(18, "tr");
            i0.ɵɵelementStart(19, "td");
            i0.ɵɵelementStart(20, "mat-form-field", 1);
            i0.ɵɵelement(21, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "td");
            i0.ɵɵelementStart(23, "mat-form-field", 1);
            i0.ɵɵelement(24, "input", 9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "td");
            i0.ɵɵelementStart(26, "mat-form-field", 1);
            i0.ɵɵelement(27, "input", 10, _c0);
            i0.ɵɵelementStart(29, "mat-hint", 11);
            i0.ɵɵtext(30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(28);
            i0.ɵɵadvance(30);
            i0.ɵɵtextInterpolate1("", _r7.value.length, " / 5");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    return InputFormExample;
}());
export { InputFormExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLZ0M7O2dCQUwvQixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7aUJBQ3RDOztvRkFDWSxnQkFBZ0I7eURBQWhCLGdCQUFnQjtZQ1Y3QiwrQkFDRTtZQUFBLHlDQUNFO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFFakIsZ0NBQWtEO1lBQUEsMEJBQ2hEO1lBQUEsMEJBQUk7WUFBQSx5Q0FDRjtZQUFBLDJCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDdEIsMEJBQUk7WUFBQSx5Q0FDRjtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDeEIsaUJBQUs7WUFBQSxpQkFBUTtZQUViLDBCQUNFO1lBQUEsMENBQ0U7WUFBQSxvQ0FBeUM7WUFBQSx1Q0FBc0I7WUFBQSxpQkFBVztZQUM1RSxpQkFBaUI7WUFDakIsMENBQ0U7WUFBQSwrQkFBc0Q7WUFDeEQsaUJBQWlCO1lBQ25CLGlCQUFJO1lBRUosaUNBQWtEO1lBQUEsMkJBQ2hEO1lBQUEsMkJBQUk7WUFBQSwwQ0FDRjtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDdEIsMkJBQUk7WUFBQSwwQ0FDRjtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQUEsaUJBQUs7WUFDdEIsMkJBQUk7WUFBQSwwQ0FDRjtZQUFBLGtDQUNBO1lBQUEscUNBQXNCO1lBQUEsYUFBK0I7WUFBQSxpQkFBVztZQUNsRSxpQkFBaUI7WUFBQSxpQkFBSztZQUN4QixpQkFBSztZQUFBLGlCQUFRO1lBQ2YsaUJBQU87OztZQUhxQixnQkFBK0I7WUFBL0IsbURBQStCOzsyQkRoQzNEO0NBVWdDLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQjttQ0FBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXRzIGluIGEgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LWZvcm0tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGb3JtRXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQ29tcGFueSAoZGlzYWJsZWQpXCIgZGlzYWJsZWQgdmFsdWU9XCJHb29nbGVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8dGFibGUgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMb25nIExhc3QgTmFtZSBUaGF0IFdpbGwgQmUgVHJ1bmNhdGVkXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG5cbiAgPHA+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCI+MTYwMCBBbXBoaXRoZWF0cmUgUGt3eTwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZHJlc3MgMlwiPjwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9wPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJDaXR5XCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlN0YXRlXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjcG9zdGFsQ29kZSBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJQb3N0YWwgQ29kZVwiIHZhbHVlPVwiOTQwNDNcIj5cbiAgICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7cG9zdGFsQ29kZS52YWx1ZS5sZW5ndGh9fSAvIDU8L21hdC1oaW50PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgPC90cj48L3RhYmxlPlxuPC9mb3JtPlxuIl19