/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/form-field-prefix-suffix/form-field-prefix-suffix-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
/**
 * \@title Form field with prefix & suffix
 */
let FormFieldPrefixSuffixExample = /** @class */ (() => {
    /**
     * \@title Form field with prefix & suffix
     */
    class FormFieldPrefixSuffixExample {
        constructor() {
            this.hide = true;
        }
    }
    FormFieldPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-prefix-suffix-example',
                    templateUrl: 'form-field-prefix-suffix-example.html',
                    styleUrls: ['form-field-prefix-suffix-example.css'],
                },] },
    ];
    /** @nocollapse */ FormFieldPrefixSuffixExample.ɵfac = function FormFieldPrefixSuffixExample_Factory(t) { return new (t || FormFieldPrefixSuffixExample)(); };
    /** @nocollapse */ FormFieldPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 16, vars: 4, consts: [[1, "example-container"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Enter your password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 2);
            i0.ɵɵelementStart(5, "button", 3);
            i0.ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_5_listener() { return ctx.hide = !ctx.hide; });
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-form-field", 1);
            i0.ɵɵelementStart(9, "mat-label");
            i0.ɵɵtext(10, "Amount");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(11, "input", 4);
            i0.ɵɵelementStart(12, "span", 5);
            i0.ɵɵtext(13, "$\u00A0");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "span", 6);
            i0.ɵɵtext(15, ".00");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("type", ctx.hide ? "password" : "text");
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatButton, i1.MatSuffix, i4.MatIcon, i1.MatPrefix], styles: [".example-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
    return FormFieldPrefixSuffixExample;
})();
export { FormFieldPrefixSuffixExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'form-field-prefix-suffix-example',
                templateUrl: 'form-field-prefix-suffix-example.html',
                styleUrls: ['form-field-prefix-suffix-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    FormFieldPrefixSuffixExample.prototype.hide;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFHeEM7Ozs7SUFBQSxNQUthLDRCQUE0QjtRQUx6QztZQU1FLFNBQUksR0FBRyxJQUFJLENBQUM7U0FDYjs7O2dCQVBBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO29CQUM1QyxXQUFXLEVBQUUsdUNBQXVDO29CQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztpQkFDcEQ7OytIQUNZLDRCQUE0Qjt3RkFBNUIsNEJBQTRCO1lDUnpDLDhCQUNFO1lBQUEseUNBQ0U7WUFBQSxpQ0FBVztZQUFBLG1DQUFtQjtZQUFBLGlCQUFZO1lBQzFDLDJCQUNBO1lBQUEsaUNBQ0E7WUFEa0MsaUlBQXNCO1lBQ3hELGdDQUFVO1lBQUEsWUFBMEM7WUFBQSxpQkFBVztZQUMvRCxpQkFBUztZQUNYLGlCQUFpQjtZQUVqQix5Q0FDRTtZQUFBLGlDQUFXO1lBQUEsdUJBQU07WUFBQSxpQkFBWTtZQUM3Qiw0QkFDQTtZQUFBLGdDQUFnQjtZQUFBLHdCQUFPO1lBQUEsaUJBQU87WUFDOUIsZ0NBQWdCO1lBQUEsb0JBQUc7WUFBQSxpQkFBTztZQUM1QixpQkFBaUI7WUFDbkIsaUJBQU07O1lBWmMsZUFBbUM7WUFBbkMscURBQW1DO1lBQ00sZUFBbUM7WUFBbkMsNkNBQW1DLDBCQUFBO1lBQ2xGLGVBQTBDO1lBQTFDLGdFQUEwQzs7dUNETHhEO0tBVUM7U0FGWSw0QkFBNEI7a0RBQTVCLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7Ozs7SUFFQyw0Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggcHJlZml4ICYgc3VmZml4ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSB7XG4gIGhpZGUgPSB0cnVlO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RW50ZXIgeW91ciBwYXNzd29yZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFN1ZmZpeCAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInSGlkZSBwYXNzd29yZCdcIiBbYXR0ci5hcmlhLXByZXNzZWRdPVwiaGlkZVwiPlxuICAgIDxtYXQtaWNvbj57e2hpZGUgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+QW1vdW50PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImV4YW1wbGUtcmlnaHQtYWxpZ25cIj5cbiAgICA8c3BhbiBtYXRQcmVmaXg+JCZuYnNwOzwvc3Bhbj5cbiAgICA8c3BhbiBtYXRTdWZmaXg+LjAwPC9zcGFuPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG4iXX0=