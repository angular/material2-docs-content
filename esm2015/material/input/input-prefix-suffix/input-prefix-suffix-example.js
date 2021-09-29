import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/icon";
/**
 * @title Inputs with prefixes and suffixes
 */
export class InputPrefixSuffixExample {
}
InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
InputPrefixSuffixExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], ["appearance", "fill", 1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form", 0);
        i0.ɵɵelementStart(1, "mat-form-field", 1);
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "Telephone");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 2);
        i0.ɵɵtext(5, "+1 \u00A0");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "input", 3);
        i0.ɵɵelementStart(7, "mat-icon", 4);
        i0.ɵɵtext(8, "mode_edit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i2.MatPrefix, i3.MatInput, i4.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{ selector: 'input-prefix-suffix-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\" appearance=\"fill\">\n    <mat-label>Telephone</mat-label>\n    <span matPrefix>+1 &nbsp;</span>\n    <input type=\"tel\" matInput placeholder=\"555-555-1234\">\n    <mat-icon matSuffix>mode_edit</mat-icon>\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7MkVBQXhCLHdCQUF3QjtRQ1ZyQywrQkFBMkI7UUFDekIseUNBQTZEO1FBQzNELGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQywrQkFBZ0I7UUFBQSx5QkFBUztRQUFBLGlCQUFPO1FBQ2hDLDJCQUFzRDtRQUN0RCxtQ0FBb0I7UUFBQSx5QkFBUztRQUFBLGlCQUFXO1FBQzFDLGlCQUFpQjtRQUNuQixpQkFBTzs7dUZER00sd0JBQXdCO2NBTHBDLFNBQVM7MkJBQ0UsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgd2l0aCBwcmVmaXhlcyBhbmQgc3VmZml4ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICA8bWF0LWxhYmVsPlRlbGVwaG9uZTwvbWF0LWxhYmVsPlxuICAgIDxzcGFuIG1hdFByZWZpeD4rMSAmbmJzcDs8L3NwYW4+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZWxcIiBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIjU1NS01NTUtMTIzNFwiPlxuICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+bW9kZV9lZGl0PC9tYXQtaWNvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==