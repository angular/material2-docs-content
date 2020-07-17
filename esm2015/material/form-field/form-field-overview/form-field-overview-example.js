import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Simple form field */
export class FormFieldOverviewExample {
}
FormFieldOverviewExample.ɵfac = function FormFieldOverviewExample_Factory(t) { return new (t || FormFieldOverviewExample)(); };
FormFieldOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldOverviewExample, selectors: [["form-field-overview-example"]], decls: 17, vars: 0, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", ""], ["value", "option"]], template: function FormFieldOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Input");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "br");
        i0.ɵɵelementStart(6, "mat-form-field", 1);
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Select");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-select");
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "br");
        i0.ɵɵelementStart(13, "mat-form-field", 1);
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Textarea");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "textarea", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatSelect, i4.MatOption], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldOverviewExample, [{
        type: Component,
        args: [{
                selector: 'form-field-overview-example',
                templateUrl: 'form-field-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFFeEMsK0JBQStCO0FBSy9CLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1ByQyw4QkFDRTtRQUFBLHlDQUNFO1FBQUEsaUNBQVc7UUFBQSxxQkFBSztRQUFBLGlCQUFZO1FBQzVCLDJCQUNGO1FBQUEsaUJBQWlCO1FBQ2pCLHFCQUNBO1FBQUEseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLHNCQUFNO1FBQUEsaUJBQVk7UUFDN0Isa0NBQ0U7UUFBQSxzQ0FBMkI7UUFBQSx1QkFBTTtRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLHNCQUNBO1FBQUEsMENBQ0U7UUFBQSxrQ0FBVztRQUFBLHlCQUFRO1FBQUEsaUJBQVk7UUFDL0IsK0JBQThCO1FBQ2hDLGlCQUFpQjtRQUNuQixpQkFBTTs7a0REVk8sd0JBQXdCO2NBSnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFNpbXBsZSBmb3JtIGZpZWxkICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5JbnB1dDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPGJyPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlNlbGVjdDwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0PlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8YnI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+VGV4dGFyZWE8L21hdC1sYWJlbD5cbiAgICA8dGV4dGFyZWEgbWF0SW5wdXQ+PC90ZXh0YXJlYT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19