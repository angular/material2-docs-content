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
export class FormFieldPrefixSuffixExample {
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
/** @nocollapse */ FormFieldPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldPrefixSuffixExample, selectors: [["form-field-prefix-suffix-example"]], decls: 12, vars: 4, consts: [[1, "example-container"], ["matInput", "", "placeholder", "Enter your password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Amount", "type", "number", 1, "example-right-align"], ["matPrefix", ""], ["matSuffix", ""]], template: function FormFieldPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelement(2, "input", 1);
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function FormFieldPrefixSuffixExample_Template_button_click_3_listener($event) { return ctx.hide = !ctx.hide; });
        i0.ɵɵelementStart(4, "mat-icon");
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field");
        i0.ɵɵelement(7, "input", 3);
        i0.ɵɵelementStart(8, "span", 4);
        i0.ɵɵtext(9, "$\u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "span", 5);
        i0.ɵɵtext(11, ".00");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("type", ctx.hide ? "password" : "text");
        i0.ɵɵadvance(1);
        i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx.hide);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [i1.MatFormField, i2.MatInput, i3.MatButton, i1.MatSuffix, i4.MatIcon, i1.MatPrefix], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLDRCQUE0QjtJQUx6QztRQU1FLFNBQUksR0FBRyxJQUFJLENBQUM7S0FDYjs7O1lBUEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQ0FBa0M7Z0JBQzVDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2FBQ3BEOzt3R0FDWSw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ1J6Qyw4QkFDRTtRQUFBLHNDQUNFO1FBQUEsMkJBQ0E7UUFBQSxpQ0FDQTtRQURrQyx1SUFBc0I7UUFDeEQsZ0NBQVU7UUFBQSxZQUEwQztRQUFBLGlCQUFXO1FBQy9ELGlCQUFTO1FBQ1gsaUJBQWlCO1FBRWpCLHNDQUNFO1FBQUEsMkJBQ0E7UUFBQSwrQkFBZ0I7UUFBQSx1QkFBTztRQUFBLGlCQUFPO1FBQzlCLGdDQUFnQjtRQUFBLG9CQUFHO1FBQUEsaUJBQU87UUFDNUIsaUJBQWlCO1FBQ25CLGlCQUFNOztRQVhnRCxlQUFtQztRQUFuQyxxREFBbUM7UUFDNUIsZUFBbUM7UUFBbkMsNkNBQW1DLDBCQUFBO1FBQ2xGLGVBQTBDO1FBQTFDLGdFQUEwQzs7a0RESTNDLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7Ozs7SUFFQyw0Q0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggcHJlZml4ICYgc3VmZml4ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSB7XG4gIGhpZGUgPSB0cnVlO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRTdWZmaXggKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ0hpZGUgcGFzc3dvcmQnXCIgW2F0dHIuYXJpYS1wcmVzc2VkXT1cImhpZGVcIj5cbiAgICA8bWF0LWljb24+e3toaWRlID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiQW1vdW50XCIgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZXhhbXBsZS1yaWdodC1hbGlnblwiPlxuICAgIDxzcGFuIG1hdFByZWZpeD4kJm5ic3A7PC9zcGFuPlxuICAgIDxzcGFuIG1hdFN1ZmZpeD4uMDA8L3NwYW4+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==