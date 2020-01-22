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
            var _r1 = i0.ɵɵreference(5);
            i0.ɵɵadvance(7);
            i0.ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i1.MatHint, i3.MatSelect, i4.MatOption], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBRXhDLG1DQUFtQztBQUNuQztJQUFBO0tBS29DOzRGQUF2QixvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ1JqQyw4QkFDRTtZQUFBLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSxnQ0FBZ0I7WUFBQSxpQkFBWTtZQUN2Qyw4QkFDQTtZQUFBLG1DQUFzQjtZQUFBLFlBQStCO1lBQUEsaUJBQVc7WUFDbEUsaUJBQWlCO1lBRWpCLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSwwQkFBUztZQUFBLGlCQUFZO1lBQ2hDLG1DQUNFO1lBQUEsc0NBQTJCO1lBQUEsdUJBQU07WUFBQSxpQkFBYTtZQUNoRCxpQkFBYTtZQUNiLG9DQUFzQjtZQUFBLDRDQUEyQjtZQUFBLGlCQUFXO1lBQzlELGlCQUFpQjtZQUNuQixpQkFBTTs7O1lBVm9CLGVBQStCO1lBQS9CLG9GQUErQjs7K0JESnpEO0NBUW9DLEFBTHBDLElBS29DO1NBQXZCLG9CQUFvQjtrREFBcEIsb0JBQW9CO2NBTGhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggaGludHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRIaW50RXhhbXBsZSB7fVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBoaW50TGFiZWw9XCJNYXggMTAgY2hhcmFjdGVyc1wiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5FbnRlciBzb21lIGlucHV0PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNpbnB1dCBtYXhsZW5ndGg9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRXguIE5vdWdhdFwiPlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7aW5wdXQudmFsdWU/Lmxlbmd0aCB8fCAwfX0vMTA8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+U2VsZWN0IG1lPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3Q+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+SGVyZSdzIHRoZSBkcm9wZG93biBhcnJvdyBePC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19