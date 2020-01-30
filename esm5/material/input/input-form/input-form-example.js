import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
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
    InputFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Company (disabled)");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "table", 3);
            i0.ɵɵelementStart(6, "tr");
            i0.ɵɵelementStart(7, "td");
            i0.ɵɵelementStart(8, "mat-form-field", 1);
            i0.ɵɵelementStart(9, "mat-label");
            i0.ɵɵtext(10, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "td");
            i0.ɵɵelementStart(13, "mat-form-field", 1);
            i0.ɵɵelementStart(14, "mat-label");
            i0.ɵɵtext(15, "Long Last Name That Will Be Truncated");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(16, "input", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "p");
            i0.ɵɵelementStart(18, "mat-form-field", 1);
            i0.ɵɵelementStart(19, "mat-label");
            i0.ɵɵtext(20, "Address");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "textarea", 5);
            i0.ɵɵtext(22, "1600 Amphitheatre Pkwy");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 1);
            i0.ɵɵelementStart(24, "mat-label");
            i0.ɵɵtext(25, "Address 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(26, "textarea", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "table", 3);
            i0.ɵɵelementStart(28, "tr");
            i0.ɵɵelementStart(29, "td");
            i0.ɵɵelementStart(30, "mat-form-field", 1);
            i0.ɵɵelementStart(31, "mat-label");
            i0.ɵɵtext(32, "City");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "input", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "td");
            i0.ɵɵelementStart(35, "mat-form-field", 1);
            i0.ɵɵelementStart(36, "mat-label");
            i0.ɵɵtext(37, "State");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(38, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "td");
            i0.ɵɵelementStart(40, "mat-form-field", 1);
            i0.ɵɵelementStart(41, "mat-label");
            i0.ɵɵtext(42, "Postal Code");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(43, "input", 8, 9);
            i0.ɵɵelementStart(45, "mat-hint", 10);
            i0.ɵɵtext(46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r7 = i0.ɵɵreference(44);
            i0.ɵɵadvance(46);
            i0.ɵɵtextInterpolate1("", _r7.value.length, " / 5");
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
    return InputFormExample;
}());
export { InputFormExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtnQzs7Z0JBTC9CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7O29GQUNZLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lDVjdCLCtCQUNFO1lBQUEseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLGtDQUFrQjtZQUFBLGlCQUFZO1lBQ3pDLDJCQUNGO1lBQUEsaUJBQWlCO1lBRWpCLGdDQUFrRDtZQUFBLDBCQUNoRDtZQUFBLDBCQUFJO1lBQUEseUNBQ0Y7WUFBQSxpQ0FBVztZQUFBLDJCQUFVO1lBQUEsaUJBQVk7WUFDakMsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN0QiwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsa0NBQVc7WUFBQSxzREFBcUM7WUFBQSxpQkFBWTtZQUM1RCw0QkFDRjtZQUFBLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3hCLGlCQUFLO1lBQUEsaUJBQVE7WUFFYiwwQkFDRTtZQUFBLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSx3QkFBTztZQUFBLGlCQUFZO1lBQzlCLG9DQUFpRDtZQUFBLHVDQUFzQjtZQUFBLGlCQUFXO1lBQ3BGLGlCQUFpQjtZQUNqQiwwQ0FDRTtZQUFBLGtDQUFXO1lBQUEsMEJBQVM7WUFBQSxpQkFBWTtZQUNoQywrQkFBOEI7WUFDaEMsaUJBQWlCO1lBQ25CLGlCQUFJO1lBRUosaUNBQWtEO1lBQUEsMkJBQ2hEO1lBQUEsMkJBQUk7WUFBQSwwQ0FDRjtZQUFBLGtDQUFXO1lBQUEscUJBQUk7WUFBQSxpQkFBWTtZQUMzQiw0QkFDRjtZQUFBLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3RCLDJCQUFJO1lBQUEsMENBQ0Y7WUFBQSxrQ0FBVztZQUFBLHNCQUFLO1lBQUEsaUJBQVk7WUFDNUIsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN0QiwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsa0NBQVc7WUFBQSw0QkFBVztZQUFBLGlCQUFZO1lBQ2xDLCtCQUNBO1lBQUEscUNBQXNCO1lBQUEsYUFBK0I7WUFBQSxpQkFBVztZQUNsRSxpQkFBaUI7WUFBQSxpQkFBSztZQUN4QixpQkFBSztZQUFBLGlCQUFRO1lBQ2YsaUJBQU87OztZQUhxQixnQkFBK0I7WUFBL0IsbURBQStCOzsyQkR4QzNEO0NBVWdDLEFBTGhDLElBS2dDO1NBQW5CLGdCQUFnQjtrREFBaEIsZ0JBQWdCO2NBTDVCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixXQUFXLEVBQUUseUJBQXlCO2dCQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgSW5wdXRzIGluIGEgZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LWZvcm0tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRGb3JtRXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5Db21wYW55IChkaXNhYmxlZCk8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgZGlzYWJsZWQgdmFsdWU9XCJHb29nbGVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8dGFibGUgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+TG9uZyBMYXN0IE5hbWUgVGhhdCBXaWxsIEJlIFRydW5jYXRlZDwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgPC90cj48L3RhYmxlPlxuXG4gIDxwPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gMTAwIE1haW4gU3RcIj4xNjAwIEFtcGhpdGhlYXRyZSBQa3d5PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzIDI8L21hdC1sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dD48L3RleHRhcmVhPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvcD5cblxuICA8dGFibGUgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5DaXR5PC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gU2FuIEZyYW5jaXNjb1wiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gQ2FsaWZvcm5pYVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPlBvc3RhbCBDb2RlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgI3Bvc3RhbENvZGUgbWF4bGVuZ3RoPVwiNVwiIHBsYWNlaG9sZGVyPVwiRXguIDk0MTA1XCIgdmFsdWU9XCI5NDA0M1wiPlxuICAgICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+e3twb3N0YWxDb2RlLnZhbHVlLmxlbmd0aH19IC8gNTwvbWF0LWhpbnQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG48L2Zvcm0+XG4iXX0=