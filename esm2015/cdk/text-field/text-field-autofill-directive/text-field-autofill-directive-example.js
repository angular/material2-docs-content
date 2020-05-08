/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/text-field/text-field-autofill-directive/text-field-autofill-directive-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * \@title Monitoring autofill state with cdkAutofill
 */
export class TextFieldAutofillDirectiveExample {
}
TextFieldAutofillDirectiveExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            },] },
];
/** @nocollapse */ TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
/** @nocollapse */ TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [[3, "submit"], ["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵlistener("submit", function TextFieldAutofillDirectiveExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 1);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 1);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 3);
        i0.ɵɵtext(12, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.CdkAutofill, i4.NgIf, i5.MatButton, i1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TextFieldAutofillDirectiveExample.prototype.firstNameAutofilled;
    /** @type {?} */
    TextFieldAutofillDirectiveExample.prototype.lastNameAutofilled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztJQ0lwQyxnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7SUFLNUQsZ0NBQXFDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7Ozs7QUREL0QsTUFBTSxPQUFPLGlDQUFpQzs7O1lBTDdDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsOENBQThDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQzthQUMzRDs7cUlBQ1ksaUNBQWlDO3lGQUFqQyxpQ0FBaUM7UUNSOUMsK0JBQ0U7UUFESSxvSEFBVSx1QkFBdUIsSUFBQztRQUN0QyxzQ0FDRTtRQUFBLGlDQUFXO1FBQUEsMEJBQVU7UUFBQSxpQkFBWTtRQUNqQyxnQ0FDQTtRQURnQixnTEFBeUQ7UUFBekUsaUJBQ0E7UUFBQSw0RkFBc0M7UUFDeEMsaUJBQWlCO1FBQ2pCLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSx5QkFBUztRQUFBLGlCQUFZO1FBQ2hDLGdDQUNBO1FBRGdCLCtLQUF3RDtRQUF4RSxpQkFDQTtRQUFBLDhGQUFxQztRQUN2QyxpQkFBaUI7UUFDakIsa0NBQTBCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUMzQyxpQkFBTzs7UUFSTyxlQUEyQjtRQUEzQiw4Q0FBMkI7UUFLM0IsZUFBMEI7UUFBMUIsNkNBQTBCOztrREREM0IsaUNBQWlDO2NBTDdDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsOENBQThDO2dCQUMzRCxTQUFTLEVBQUUsQ0FBQyw2Q0FBNkMsQ0FBQzthQUMzRDs7OztJQUVDLGdFQUE2Qjs7SUFDN0IsK0RBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgd2l0aCBjZGtBdXRvZmlsbCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvZmlsbERpcmVjdGl2ZUV4YW1wbGUge1xuICBmaXJzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuICBsYXN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG59XG4iLCI8Zm9ybSAoc3VibWl0KT1cIiRldmVudC5wcmV2ZW50RGVmYXVsdCgpXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImZpcnN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwiZmlyc3ROYW1lQXV0b2ZpbGxlZFwiPkF1dG9maWxsZWQhPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+TGFzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IChjZGtBdXRvZmlsbCk9XCJsYXN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwibGFzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19