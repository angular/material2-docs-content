import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Form field with hints */
export class FormFieldHintExample {
}
FormFieldHintExample.ɵfac = function FormFieldHintExample_Factory(t) { return new (t || FormFieldHintExample)(); };
FormFieldHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 16, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters", "appearance", "fill"], ["matInput", "", "maxlength", "10", "placeholder", "Ex. Nougat"], ["input", ""], ["align", "end"], ["appearance", "fill"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Enter some input");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 2, 3);
        i0.ɵɵelementStart(6, "mat-hint", 4);
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-form-field", 5);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Select me");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-select");
        i0.ɵɵelementStart(12, "mat-option", 6);
        i0.ɵɵtext(13, "Option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-hint", 4);
        i0.ɵɵtext(15, "Here's the dropdown arrow ^");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(5);
        i0.ɵɵadvance(7);
        i0.ɵɵtextInterpolate1("", (_r0.value == null ? null : _r0.value.length) || 0, "/10");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i1.MatHint, i3.MatSelect, i4.MatOption], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FormFieldHintExample, [{
        type: Component,
        args: [{
                selector: 'form-field-hint-example',
                templateUrl: 'form-field-hint-example.html',
                styleUrls: ['form-field-hint-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLG1DQUFtQztBQU1uQyxNQUFNLE9BQU8sb0JBQW9COzt3RkFBcEIsb0JBQW9CO3lEQUFwQixvQkFBb0I7UUNSakMsOEJBQStCO1FBQzdCLHlDQUFnRTtRQUM5RCxpQ0FBVztRQUFBLGdDQUFnQjtRQUFBLGlCQUFZO1FBQ3ZDLDhCQUErRDtRQUMvRCxtQ0FBc0I7UUFBQSxZQUErQjtRQUFBLGlCQUFXO1FBQ2xFLGlCQUFpQjtRQUVqQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSwwQkFBUztRQUFBLGlCQUFZO1FBQ2hDLG1DQUFZO1FBQ1Ysc0NBQTJCO1FBQUEsdUJBQU07UUFBQSxpQkFBYTtRQUNoRCxpQkFBYTtRQUNiLG9DQUFzQjtRQUFBLDRDQUEyQjtRQUFBLGlCQUFXO1FBQzlELGlCQUFpQjtRQUNuQixpQkFBTTs7O1FBVm9CLGVBQStCO1FBQS9CLG9GQUErQjs7dUZESTVDLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGhpbnRzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkSGludEV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8bWF0LWZvcm0tZmllbGQgaGludExhYmVsPVwiTWF4IDEwIGNoYXJhY3RlcnNcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RW50ZXIgc29tZSBpbnB1dDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjaW5wdXQgbWF4bGVuZ3RoPVwiMTBcIiBwbGFjZWhvbGRlcj1cIkV4LiBOb3VnYXRcIj5cbiAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e2lucHV0LnZhbHVlPy5sZW5ndGggfHwgMH19LzEwPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlNlbGVjdCBtZTwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0PlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPkhlcmUncyB0aGUgZHJvcGRvd24gYXJyb3cgXjwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==