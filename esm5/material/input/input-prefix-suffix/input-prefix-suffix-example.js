import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/icon";
/**
 * @title Inputs with prefixes and suffixes
 */
var InputPrefixSuffixExample = /** @class */ (function () {
    function InputPrefixSuffixExample() {
    }
    InputPrefixSuffixExample.decorators = [
        { type: Component, args: [{
                    selector: 'input-prefix-suffix-example',
                    templateUrl: 'input-prefix-suffix-example.html',
                    styleUrls: ['input-prefix-suffix-example.css'],
                },] },
    ];
    InputPrefixSuffixExample.ɵfac = function InputPrefixSuffixExample_Factory(t) { return new (t || InputPrefixSuffixExample)(); };
    InputPrefixSuffixExample.ɵcmp = i0.ɵɵdefineComponent({ type: InputPrefixSuffixExample, selectors: [["input-prefix-suffix-example"]], decls: 9, vars: 0, consts: [[1, "example-form"], [1, "example-full-width"], ["matPrefix", ""], ["type", "tel", "matInput", "", "placeholder", "555-555-1234"], ["matSuffix", ""]], template: function InputPrefixSuffixExample_Template(rf, ctx) { if (rf & 1) {
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
        } }, directives: [i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.NgForm, i2.MatFormField, i2.MatLabel, i2.MatPrefix, i3.MatInput, i4.MatIcon, i2.MatSuffix], styles: [".example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return InputPrefixSuffixExample;
}());
export { InputPrefixSuffixExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputPrefixSuffixExample, [{
        type: Component,
        args: [{
                selector: 'input-prefix-suffix-example',
                templateUrl: 'input-prefix-suffix-example.html',
                styleUrls: ['input-prefix-suffix-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLd0M7O2dCQUx2QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztvQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7aUJBQy9DOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QjtZQ1ZyQywrQkFDRTtZQUFBLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSx5QkFBUztZQUFBLGlCQUFZO1lBQ2hDLCtCQUFnQjtZQUFBLHlCQUFTO1lBQUEsaUJBQU87WUFDaEMsMkJBQ0E7WUFBQSxtQ0FBb0I7WUFBQSx5QkFBUztZQUFBLGlCQUFXO1lBQzFDLGlCQUFpQjtZQUNuQixpQkFBTzs7bUNEUFA7Q0FVd0MsQUFMeEMsSUFLd0M7U0FBM0Isd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgd2l0aCBwcmVmaXhlcyBhbmQgc3VmZml4ZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydpbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSB7fVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgPG1hdC1sYWJlbD5UZWxlcGhvbmU8L21hdC1sYWJlbD5cbiAgICA8c3BhbiBtYXRQcmVmaXg+KzEgJm5ic3A7PC9zcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCI1NTUtNTU1LTEyMzRcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4Pm1vZGVfZWRpdDwvbWF0LWljb24+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=