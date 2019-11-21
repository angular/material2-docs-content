/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/cdk/text-field";
import * as i4 from "@angular/common";
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
/** @nocollapse */ TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "input", 0);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_4_listener($event) { return ctx.firstNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, TextFieldAutofillDirectiveExample_mat_hint_5_Template, 2, 0, "mat-hint", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "input", 0);
        i0.ɵɵlistener("cdkAutofill", function TextFieldAutofillDirectiveExample_Template_input_cdkAutofill_9_listener($event) { return ctx.lastNameAutofilled = $event.isAutofilled; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, TextFieldAutofillDirectiveExample_mat_hint_10_Template, 2, 0, "mat-hint", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 2);
        i0.ɵɵtext(12, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.CdkAutofill, i4.NgIf, i1.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNJcEMsZ0NBQXNDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7O0lBSzVELGdDQUFxQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7Ozs7O0FERC9ELE1BQU0sT0FBTyxpQ0FBaUM7OztZQUw3QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7YUFDM0Q7O2tIQUNZLGlDQUFpQztzRUFBakMsaUNBQWlDO1FDUjlDLDRCQUNFO1FBQUEsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMsZ0NBQ0E7UUFEZ0IsZ0xBQXlEO1FBQXpFLGlCQUNBO1FBQUEsNEZBQXNDO1FBQ3hDLGlCQUFpQjtRQUNqQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyxnQ0FDQTtRQURnQiwrS0FBd0Q7UUFBeEUsaUJBQ0E7UUFBQSw4RkFBcUM7UUFDdkMsaUJBQWlCO1FBQ2pCLGtDQUEwQjtRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDM0MsaUJBQU87O1FBUk8sZUFBMkI7UUFBM0IsOENBQTJCO1FBSzNCLGVBQTBCO1FBQTFCLDZDQUEwQjs7a0RERDNCLGlDQUFpQztjQUw3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7YUFDM0Q7Ozs7SUFFQyxnRUFBNkI7O0lBQzdCLCtEQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggY2RrQXV0b2ZpbGwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlIHtcbiAgZmlyc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbiAgbGFzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xufVxuIiwiPGZvcm0+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgKGNka0F1dG9maWxsKT1cImZpcnN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwiZmlyc3ROYW1lQXV0b2ZpbGxlZFwiPkF1dG9maWxsZWQhPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+TGFzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IChjZGtBdXRvZmlsbCk9XCJsYXN0TmFtZUF1dG9maWxsZWQgPSAkZXZlbnQuaXNBdXRvZmlsbGVkXCI+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwibGFzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19