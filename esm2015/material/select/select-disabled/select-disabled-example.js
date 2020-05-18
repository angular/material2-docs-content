/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-disabled/select-disabled-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
import * as i6 from "@angular/material/input";
/**
 * \@title Disabled select
 */
let SelectDisabledExample = /** @class */ (() => {
    /**
     * \@title Disabled select
     */
    class SelectDisabledExample {
        constructor() {
            this.disableSelect = new FormControl(false);
        }
    }
    SelectDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-disabled-example',
                    templateUrl: 'select-disabled-example.html',
                    styleUrls: ['select-disabled-example.css'],
                },] },
    ];
    /** @nocollapse */ SelectDisabledExample.ɵfac = function SelectDisabledExample_Factory(t) { return new (t || SelectDisabledExample)(); };
    /** @nocollapse */ SelectDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-checkbox", 0);
            i0.ɵɵtext(2, "Disable select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "h4");
            i0.ɵɵtext(4, "mat-select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Choose an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "mat-select", 1);
            i0.ɵɵelementStart(9, "mat-option", 2);
            i0.ɵɵtext(10, "Option 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-option", 3);
            i0.ɵɵtext(12, "Option 2 (disabled)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-option", 4);
            i0.ɵɵtext(14, "Option 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "h4");
            i0.ɵɵtext(16, "native html select");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-form-field");
            i0.ɵɵelementStart(18, "mat-label");
            i0.ɵɵtext(19, "Choose an option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "select", 5);
            i0.ɵɵelement(21, "option", 6);
            i0.ɵɵelementStart(22, "option", 7);
            i0.ɵɵtext(23, "Volvo");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "option", 8);
            i0.ɵɵtext(25, "Saab");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "option", 9);
            i0.ɵɵtext(27, "Mercedes");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "option", 10);
            i0.ɵɵtext(29, "Audi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx.disableSelect);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("disabled", ctx.disableSelect.value);
            i0.ɵɵadvance(12);
            i0.ɵɵproperty("disabled", ctx.disableSelect.value);
        } }, directives: [i1.MatCheckbox, i2.NgControlStatus, i2.FormControlDirective, i3.MatFormField, i3.MatLabel, i4.MatSelect, i5.MatOption, i6.MatInput, i2.NgSelectOption, i2.ɵangular_packages_forms_forms_x], styles: [""] });
    return SelectDisabledExample;
})();
export { SelectDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectDisabledExample, [{
        type: Component,
        args: [{
                selector: 'select-disabled-example',
                templateUrl: 'select-disabled-example.html',
                styleUrls: ['select-disabled-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectDisabledExample.prototype.disableSelect;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWRpc2FibGVkLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1kaXNhYmxlZC9zZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7O0FBRzNDOzs7O0lBQUEsTUFLYSxxQkFBcUI7UUFMbEM7WUFNRSxrQkFBYSxHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hDOzs7Z0JBUEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7aUhBQ1kscUJBQXFCO2lGQUFyQixxQkFBcUI7WUNUbEMseUJBQ0U7WUFBQSx1Q0FBNEM7WUFBQSw4QkFBYztZQUFBLGlCQUFlO1lBQzNFLGlCQUFJO1lBRUosMEJBQUk7WUFBQSwwQkFBVTtZQUFBLGlCQUFLO1lBQ25CLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSxnQ0FBZ0I7WUFBQSxpQkFBWTtZQUN2QyxxQ0FDRTtZQUFBLHFDQUE0QjtZQUFBLHlCQUFRO1lBQUEsaUJBQWE7WUFDakQsc0NBQXFDO1lBQUEsb0NBQW1CO1lBQUEsaUJBQWE7WUFDckUsc0NBQTRCO1lBQUEseUJBQVE7WUFBQSxpQkFBYTtZQUNuRCxpQkFBYTtZQUNmLGlCQUFpQjtZQUVqQiwyQkFBSTtZQUFBLG1DQUFrQjtZQUFBLGlCQUFLO1lBQzNCLHVDQUNFO1lBQUEsa0NBQVc7WUFBQSxpQ0FBZ0I7WUFBQSxpQkFBWTtZQUN2QyxrQ0FDRTtZQUFBLDZCQUFtQztZQUNuQyxrQ0FBc0I7WUFBQSxzQkFBSztZQUFBLGlCQUFTO1lBQ3BDLGtDQUE4QjtZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDM0Msa0NBQXlCO1lBQUEseUJBQVE7WUFBQSxpQkFBUztZQUMxQyxtQ0FBcUI7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ3BDLGlCQUFTO1lBQ1gsaUJBQWlCOztZQXZCRCxlQUE2QjtZQUE3QiwrQ0FBNkI7WUFNL0IsZUFBZ0M7WUFBaEMsa0RBQWdDO1lBVW5CLGdCQUFnQztZQUFoQyxrREFBZ0M7O2dDRGpCM0Q7S0FXQztTQUZZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7OztJQUVDLDhDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBEaXNhYmxlZCBzZWxlY3QgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3REaXNhYmxlZEV4YW1wbGUge1xuICBkaXNhYmxlU2VsZWN0ID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbn1cbiIsIjxwPlxuICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJkaXNhYmxlU2VsZWN0XCI+RGlzYWJsZSBzZWxlY3Q8L21hdC1jaGVja2JveD5cbjwvcD5cblxuPGg0Pm1hdC1zZWxlY3Q8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkNob29zZSBhbiBvcHRpb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Rpc2FibGVkXT1cImRpc2FibGVTZWxlY3QudmFsdWVcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjFcIj5PcHRpb24gMTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvbjJcIiBkaXNhYmxlZD5PcHRpb24gMiAoZGlzYWJsZWQpPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uM1wiPk9wdGlvbiAzPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZGlzYWJsZWRdPVwiZGlzYWJsZVNlbGVjdC52YWx1ZVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidm9sdm9cIj5Wb2x2bzwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJzYWFiXCIgZGlzYWJsZWQ+U2FhYjwvb3B0aW9uPlxuICAgIDxvcHRpb24gdmFsdWU9XCJtZXJjZWRlc1wiPk1lcmNlZGVzPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImF1ZGlcIj5BdWRpPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuIl19