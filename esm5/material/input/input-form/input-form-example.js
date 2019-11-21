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
    InputFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputFormExample, selectors: [["input-form-example"]], decls: 31, vars: 1, consts: [[1, "example-form"], [1, "example-full-width"], ["matInput", "", "placeholder", "Company (disabled)", "disabled", "", "value", "Google"], ["cellspacing", "0", 1, "example-full-width"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Long Last Name That Will Be Truncated"], ["matInput", "", "placeholder", "Address"], ["matInput", "", "placeholder", "Address 2"], ["matInput", "", "placeholder", "City"], ["matInput", "", "placeholder", "State"], ["matInput", "", "maxlength", "5", "placeholder", "Postal Code", "value", "94043"], ["postalCode", ""], ["align", "end"]], template: function InputFormExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelement(27, "input", 10, 11);
            i0.ɵɵelementStart(29, "mat-hint", 12);
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputFormExample, [{
        type: Component,
        args: [{
                selector: 'input-form-example',
                templateUrl: 'input-form-example.html',
                styleUrls: ['input-form-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtnQzs7Z0JBTC9CLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDdEM7O29GQUNZLGdCQUFnQjt5REFBaEIsZ0JBQWdCO1lDVjdCLCtCQUNFO1lBQUEseUNBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFpQjtZQUVqQixnQ0FBa0Q7WUFBQSwwQkFDaEQ7WUFBQSwwQkFBSTtZQUFBLHlDQUNGO1lBQUEsMkJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN0QiwwQkFBSTtZQUFBLHlDQUNGO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN4QixpQkFBSztZQUFBLGlCQUFRO1lBRWIsMEJBQ0U7WUFBQSwwQ0FDRTtZQUFBLG9DQUF5QztZQUFBLHVDQUFzQjtZQUFBLGlCQUFXO1lBQzVFLGlCQUFpQjtZQUNqQiwwQ0FDRTtZQUFBLCtCQUFzRDtZQUN4RCxpQkFBaUI7WUFDbkIsaUJBQUk7WUFFSixpQ0FBa0Q7WUFBQSwyQkFDaEQ7WUFBQSwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN0QiwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsNEJBQ0Y7WUFBQSxpQkFBaUI7WUFBQSxpQkFBSztZQUN0QiwyQkFBSTtZQUFBLDBDQUNGO1lBQUEsaUNBQ0E7WUFBQSxxQ0FBc0I7WUFBQSxhQUErQjtZQUFBLGlCQUFXO1lBQ2xFLGlCQUFpQjtZQUFBLGlCQUFLO1lBQ3hCLGlCQUFLO1lBQUEsaUJBQVE7WUFDZixpQkFBTzs7O1lBSHFCLGdCQUErQjtZQUEvQixtREFBK0I7OzJCRGhDM0Q7Q0FVZ0MsQUFMaEMsSUFLZ0M7U0FBbkIsZ0JBQWdCO2tEQUFoQixnQkFBZ0I7Y0FMNUIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFdBQVcsRUFBRSx5QkFBeUI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1FeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJDb21wYW55IChkaXNhYmxlZClcIiBkaXNhYmxlZCB2YWx1ZT1cIkdvb2dsZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxvbmcgTGFzdCBOYW1lIFRoYXQgV2lsbCBCZSBUcnVuY2F0ZWRcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cblxuICA8cD5cbiAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIj4xNjAwIEFtcGhpdGhlYXRyZSBQa3d5PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAyXCI+PC90ZXh0YXJlYT5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L3A+XG5cbiAgPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgY2VsbHNwYWNpbmc9XCIwXCI+PHRyPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkNpdHlcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU3RhdGVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPGlucHV0IG1hdElucHV0ICNwb3N0YWxDb2RlIG1heGxlbmd0aD1cIjVcIiBwbGFjZWhvbGRlcj1cIlBvc3RhbCBDb2RlXCIgdmFsdWU9XCI5NDA0M1wiPlxuICAgICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+e3twb3N0YWxDb2RlLnZhbHVlLmxlbmd0aH19IC8gNTwvbWF0LWhpbnQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG48L2Zvcm0+XG4iXX0=