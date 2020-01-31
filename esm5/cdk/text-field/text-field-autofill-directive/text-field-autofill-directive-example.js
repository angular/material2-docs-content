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
/** @title Monitoring autofill state with cdkAutofill */
var TextFieldAutofillDirectiveExample = /** @class */ (function () {
    function TextFieldAutofillDirectiveExample() {
    }
    TextFieldAutofillDirectiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-directive-example',
                    templateUrl: './text-field-autofill-directive-example.html',
                    styleUrls: ['./text-field-autofill-directive-example.css'],
                },] },
    ];
    TextFieldAutofillDirectiveExample.ɵfac = function TextFieldAutofillDirectiveExample_Factory(t) { return new (t || TextFieldAutofillDirectiveExample)(); };
    TextFieldAutofillDirectiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillDirectiveExample, selectors: [["text-field-autofill-directive-example"]], decls: 13, vars: 2, consts: [["matInput", "", 3, "cdkAutofill"], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillDirectiveExample_Template(rf, ctx) { if (rf & 1) {
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
    return TextFieldAutofillDirectiveExample;
}());
export { TextFieldAutofillDirectiveExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldAutofillDirectiveExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-directive-example',
                templateUrl: './text-field-autofill-directive-example.html',
                styleUrls: ['./text-field-autofill-directive-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS90ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0lwQyxnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7SUFLNUQsZ0NBQXFDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7QURQL0Qsd0RBQXdEO0FBQ3hEO0lBQUE7S0FRQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELFdBQVcsRUFBRSw4Q0FBOEM7b0JBQzNELFNBQVMsRUFBRSxDQUFDLDZDQUE2QyxDQUFDO2lCQUMzRDs7c0hBQ1ksaUNBQWlDOzBFQUFqQyxpQ0FBaUM7WUNSOUMsNEJBQ0U7WUFBQSxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsMEJBQVU7WUFBQSxpQkFBWTtZQUNqQyxnQ0FDQTtZQURnQixnTEFBeUQ7WUFBekUsaUJBQ0E7WUFBQSw0RkFBc0M7WUFDeEMsaUJBQWlCO1lBQ2pCLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSx5QkFBUztZQUFBLGlCQUFZO1lBQ2hDLGdDQUNBO1lBRGdCLCtLQUF3RDtZQUF4RSxpQkFDQTtZQUFBLDhGQUFxQztZQUN2QyxpQkFBaUI7WUFDakIsa0NBQTBCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUMzQyxpQkFBTzs7WUFSTyxlQUEyQjtZQUEzQiw4Q0FBMkI7WUFLM0IsZUFBMEI7WUFBMUIsNkNBQTBCOzs0Q0RUeEM7Q0FXQyxBQVJELElBUUM7U0FIWSxpQ0FBaUM7a0RBQWpDLGlDQUFpQztjQUw3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDhDQUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsNkNBQTZDLENBQUM7YUFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSB3aXRoIGNka0F1dG9maWxsICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9maWxsLWRpcmVjdGl2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9maWxsRGlyZWN0aXZlRXhhbXBsZSB7XG4gIGZpcnN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG4gIGxhc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbn1cbiIsIjxmb3JtPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IChjZGtBdXRvZmlsbCk9XCJmaXJzdE5hbWVBdXRvZmlsbGVkID0gJGV2ZW50LmlzQXV0b2ZpbGxlZFwiPlxuICAgIDxtYXQtaGludCAqbmdJZj1cImZpcnN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkxhc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAoY2RrQXV0b2ZpbGwpPVwibGFzdE5hbWVBdXRvZmlsbGVkID0gJGV2ZW50LmlzQXV0b2ZpbGxlZFwiPlxuICAgIDxtYXQtaGludCAqbmdJZj1cImxhc3ROYW1lQXV0b2ZpbGxlZFwiPkF1dG9maWxsZWQhPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==