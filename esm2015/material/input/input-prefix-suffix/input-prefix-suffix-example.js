/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/input-prefix-suffix/input-prefix-suffix-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/icon";
/**
 * \@title Inputs with prefixes and suffixes
 */
export class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.decorators = [
    { type: Component, args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            },] },
];
/** @nocollapse */ InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
/** @nocollapse */ InputPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 7, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "Telephone"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtext(3, "+1 \u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵelementStart(5, "mat-icon", 4);
        i0.ɵɵtext(6, "mode_edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatPrefix, i3.MatInput, i4.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O0FBVXhDLE1BQU0sT0FBTyx3QkFBd0I7OztZQUxwQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0M7O2dHQUNZLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDVnJDLCtCQUVFO1FBQUEseUNBQ0U7UUFBQSwrQkFBZ0I7UUFBQSx5QkFBUztRQUFBLGlCQUFPO1FBQ2hDLDJCQUNBO1FBQUEsbUNBQW9CO1FBQUEseUJBQVM7UUFBQSxpQkFBVztRQUMxQyxpQkFBaUI7UUFFbkIsaUJBQU87O2tEREVNLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIElucHV0cyB3aXRoIHByZWZpeGVzIGFuZCBzdWZmaXhlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxzcGFuIG1hdFByZWZpeD4rMSAmbmJzcDs8L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlRlbGVwaG9uZVwiPlxuICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+bW9kZV9lZGl0PC9tYXQtaWNvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgXG48L2Zvcm0+XG4iXX0=