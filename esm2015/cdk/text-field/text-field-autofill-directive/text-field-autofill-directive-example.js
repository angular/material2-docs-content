import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/cdk/text-field";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
function TextFieldAutofillDirectiveExample_mat_hint_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
function TextFieldAutofillDirectiveExample_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
/** @title Monitoring autofill state with cdkAutofill */
export class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
TextFieldAutofillDirectiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["appearance", "fill"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("submit", function TextFieldAutofillDirectiveExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 2);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 1);
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 2);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 4);
        i0.ɵɵtext(12, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.CdkAutofill, i4.NgIf, i5.MatButton, i1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7SUNJcEMsZ0NBQXNDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7O0lBSzVELGdDQUFxQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7O0FEUC9ELHdEQUF3RDtBQU14RCxNQUFNLE9BQU8saUNBQWlDOztrSEFBakMsaUNBQWlDO29GQUFqQyxpQ0FBaUM7UUNSOUMsK0JBQXlDO1FBQW5DLG9IQUFVLHVCQUF1QixJQUFDO1FBQ3RDLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMsZ0NBQTBFO1FBQTFELGdMQUF5RDtRQUF6RSxpQkFBMEU7UUFDMUUsNEZBQTREO1FBQzlELGlCQUFpQjtRQUNqQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSx5QkFBUztRQUFBLGlCQUFZO1FBQ2hDLGdDQUF5RTtRQUF6RCwrS0FBd0Q7UUFBeEUsaUJBQXlFO1FBQ3pFLDhGQUEyRDtRQUM3RCxpQkFBaUI7UUFDakIsa0NBQTBCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUMzQyxpQkFBTzs7UUFSUSxlQUF5QjtRQUF6Qiw4Q0FBeUI7UUFLekIsZUFBd0I7UUFBeEIsNkNBQXdCOzt1RkREMUIsaUNBQWlDO2NBTDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsOENBQThDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQzthQUMzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggY2RrQXV0b2ZpbGwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlIHtcbiAgZmlyc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbiAgbGFzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xufVxuIiwiPGZvcm0gKHN1Ym1pdCk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImZpcnN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwiZmlyc3ROYW1lQXV0b2ZpbGxlZFwiPkF1dG9maWxsZWQhPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgPG1hdC1sYWJlbD5MYXN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImxhc3ROYW1lQXV0b2ZpbGxlZCA9ICRldmVudC5pc0F1dG9maWxsZWRcIj5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJsYXN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXX0=