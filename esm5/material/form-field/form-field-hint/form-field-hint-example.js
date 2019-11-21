import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Form field with hints */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-hint-example',
                    templateUrl: 'form-field-hint-example.html',
                    styleUrls: ['form-field-hint-example.css'],
                },] },
    ];
    FormFieldHintExample.ɵfac = function FormFieldHintExample_Factory(t) { return new (t || FormFieldHintExample)(); };
    FormFieldHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 12, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters"], ["matInput", "", "maxlength", "10", "placeholder", "Enter some input"], ["input", ""], ["align", "end"], ["placeholder", "Select me"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2, 3);
            i0.ɵɵelementStart(4, "mat-hint", 4);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field");
            i0.ɵɵelementStart(7, "mat-select", 5);
            i0.ɵɵelementStart(8, "mat-option", 6);
            i0.ɵɵtext(9, "Option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-hint", 4);
            i0.ɵɵtext(11, "Here's the dropdown arrow ^");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(3);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
        } }, directives: [i1.MatFormField, i2.MatInput, i1.MatHint, i3.MatSelect, i4.MatOption], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return FormFieldHintExample;
}());
export { FormFieldHintExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldHintExample, [{
        type: Component,
        args: [{
                selector: 'form-field-hint-example',
                templateUrl: 'form-field-hint-example.html',
                styleUrls: ['form-field-hint-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLG1DQUFtQztBQUNuQztJQUFBO0tBS29DOztnQkFMbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7NEZBQ1ksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNSakMsOEJBQ0U7WUFBQSx5Q0FDRTtZQUFBLDhCQUNBO1lBQUEsbUNBQXNCO1lBQUEsWUFBK0I7WUFBQSxpQkFBVztZQUNsRSxpQkFBaUI7WUFFakIsc0NBQ0U7WUFBQSxxQ0FDRTtZQUFBLHFDQUEyQjtZQUFBLHNCQUFNO1lBQUEsaUJBQWE7WUFDaEQsaUJBQWE7WUFDYixvQ0FBc0I7WUFBQSw0Q0FBMkI7WUFBQSxpQkFBVztZQUM5RCxpQkFBaUI7WUFDbkIsaUJBQU07OztZQVRvQixlQUErQjtZQUEvQixvRkFBK0I7OytCREh6RDtDQVFvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGhpbnRzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkSGludEV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWZvcm0tZmllbGQgaGludExhYmVsPVwiTWF4IDEwIGNoYXJhY3RlcnNcIj5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI2lucHV0IG1heGxlbmd0aD1cIjEwXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBzb21lIGlucHV0XCI+XG4gICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+e3tpbnB1dC52YWx1ZT8ubGVuZ3RoIHx8IDB9fS8xMDwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiU2VsZWN0IG1lXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+SGVyZSdzIHRoZSBkcm9wZG93biBhcnJvdyBePC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19