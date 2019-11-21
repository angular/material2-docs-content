/**
 * @fileoverview added by tsickle
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztBQVF4QyxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBTUUsU0FBSSxHQUFHLElBQUksQ0FBQztLQUNiOzs7WUFQQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7YUFDcEQ7O3dHQUNZLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDUnpDLDhCQUNFO1FBQUEsc0NBQ0U7UUFBQSwyQkFDQTtRQUFBLGlDQUNBO1FBRGtDLHVJQUFzQjtRQUN4RCxnQ0FBVTtRQUFBLFlBQTBDO1FBQUEsaUJBQVc7UUFDL0QsaUJBQVM7UUFDWCxpQkFBaUI7UUFFakIsc0NBQ0U7UUFBQSwyQkFDQTtRQUFBLCtCQUFnQjtRQUFBLHVCQUFPO1FBQUEsaUJBQU87UUFDOUIsZ0NBQWdCO1FBQUEsb0JBQUc7UUFBQSxpQkFBTztRQUM1QixpQkFBaUI7UUFDbkIsaUJBQU07O1FBWGdELGVBQW1DO1FBQW5DLHFEQUFtQztRQUM1QixlQUFtQztRQUFuQyw2Q0FBbUMsMEJBQUE7UUFDbEYsZUFBMEM7UUFBMUMsZ0VBQTBDOztrRERJM0MsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQzthQUNwRDs7OztJQUVDLDRDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBwcmVmaXggJiBzdWZmaXggKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlIHtcbiAgaGlkZSA9IHRydWU7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiBbdHlwZV09XCJoaWRlID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFN1ZmZpeCAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInSGlkZSBwYXNzd29yZCdcIiBbYXR0ci5hcmlhLXByZXNzZWRdPVwiaGlkZVwiPlxuICAgIDxtYXQtaWNvbj57e2hpZGUgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBbW91bnRcIiB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJleGFtcGxlLXJpZ2h0LWFsaWduXCI+XG4gICAgPHNwYW4gbWF0UHJlZml4PiQmbmJzcDs8L3NwYW4+XG4gICAgPHNwYW4gbWF0U3VmZml4Pi4wMDwvc3Bhbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19