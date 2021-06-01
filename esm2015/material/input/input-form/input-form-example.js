import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
/**
 * @title Inputs in a form
 */
export class InputFormExample {
}
InputFormExample.ɵfac = function InputFormExample_Factory(t) { return new (t || InputFormExample)(); };
InputFormExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 47, vars: 1, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", ""], ["matInput", "", "placeholder", "Ex. 100 Main St"], ["matInput", "", "placeholder", "Ex. San Francisco"], ["matInput", "", "placeholder", "Ex. California"], ["matInput", "", "maxlength", "5", "placeholder", "Ex. 94105", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
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
        const _r0 = i0.ɵɵreference(44);
        i0.ɵɵadvance(46);
        i0.ɵɵtextInterpolate1("", _r0.value.length, " / 5");
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i3.MatInput, i2.MatHint], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7Z0ZBQWhCLGdCQUFnQjttRUFBaEIsZ0JBQWdCO1FDVjdCLCtCQUEyQjtRQUN6Qix5Q0FBNkQ7UUFDM0QsaUNBQVc7UUFBQSxrQ0FBa0I7UUFBQSxpQkFBWTtRQUN6QywyQkFBd0M7UUFDMUMsaUJBQWlCO1FBRWpCLGdDQUFrRDtRQUFBLDBCQUFJO1FBQ3BELDBCQUFJO1FBQUEseUNBQTZEO1FBQy9ELGlDQUFXO1FBQUEsMkJBQVU7UUFBQSxpQkFBWTtRQUNqQyw0QkFBZ0I7UUFDbEIsaUJBQWlCO1FBQUEsaUJBQUs7UUFDdEIsMkJBQUk7UUFBQSwwQ0FBNkQ7UUFDL0Qsa0NBQVc7UUFBQSxzREFBcUM7UUFBQSxpQkFBWTtRQUM1RCw0QkFBZ0I7UUFDbEIsaUJBQWlCO1FBQUEsaUJBQUs7UUFDeEIsaUJBQUs7UUFBQSxpQkFBUTtRQUViLDBCQUFHO1FBQ0QsMENBQTZEO1FBQzNELGtDQUFXO1FBQUEsd0JBQU87UUFBQSxpQkFBWTtRQUM5QixvQ0FBaUQ7UUFBQSx1Q0FBc0I7UUFBQSxpQkFBVztRQUNwRixpQkFBaUI7UUFDakIsMENBQTZEO1FBQzNELGtDQUFXO1FBQUEsMEJBQVM7UUFBQSxpQkFBWTtRQUNoQywrQkFBOEI7UUFDaEMsaUJBQWlCO1FBQ25CLGlCQUFJO1FBRUosaUNBQWtEO1FBQUEsMkJBQUk7UUFDcEQsMkJBQUk7UUFBQSwwQ0FBNkQ7UUFDL0Qsa0NBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLDRCQUFnRDtRQUNsRCxpQkFBaUI7UUFBQSxpQkFBSztRQUN0QiwyQkFBSTtRQUFBLDBDQUE2RDtRQUMvRCxrQ0FBVztRQUFBLHNCQUFLO1FBQUEsaUJBQVk7UUFDNUIsNEJBQTZDO1FBQy9DLGlCQUFpQjtRQUFBLGlCQUFLO1FBQ3RCLDJCQUFJO1FBQUEsMENBQTZEO1FBQy9ELGtDQUFXO1FBQUEsNEJBQVc7UUFBQSxpQkFBWTtRQUNsQywrQkFBZ0Y7UUFDaEYscUNBQXNCO1FBQUEsYUFBK0I7UUFBQSxpQkFBVztRQUNsRSxpQkFBaUI7UUFBQSxpQkFBSztRQUN4QixpQkFBSztRQUFBLGlCQUFRO1FBQ2YsaUJBQU87OztRQUhxQixnQkFBK0I7UUFBL0IsbURBQStCOzt1RkQ5QjlDLGdCQUFnQjtjQUw1QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0cyBpbiBhIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtZm9ybS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1mb3JtLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Rm9ybUV4YW1wbGUge31cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5Db21wYW55IChkaXNhYmxlZCk8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgZGlzYWJsZWQgdmFsdWU9XCJHb29nbGVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8dGFibGUgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBjZWxsc3BhY2luZz1cIjBcIj48dHI+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkxvbmcgTGFzdCBOYW1lIFRoYXQgV2lsbCBCZSBUcnVuY2F0ZWQ8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cblxuICA8cD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5BZGRyZXNzPC9tYXQtbGFiZWw+XG4gICAgICA8dGV4dGFyZWEgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gMTAwIE1haW4gU3RcIj4xNjAwIEFtcGhpdGhlYXRyZSBQa3d5PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkFkZHJlc3MgMjwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9wPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+Q2l0eTwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiRXguIFNhbiBGcmFuY2lzY29cIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPlN0YXRlPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFeC4gQ2FsaWZvcm5pYVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+PC90ZD5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgIDxtYXQtbGFiZWw+UG9zdGFsIENvZGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjcG9zdGFsQ29kZSBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJFeC4gOTQxMDVcIiB2YWx1ZT1cIjk0MDQzXCI+XG4gICAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e3Bvc3RhbENvZGUudmFsdWUubGVuZ3RofX0gLyA1PC9tYXQtaGludD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cbjwvZm9ybT5cbiJdfQ==