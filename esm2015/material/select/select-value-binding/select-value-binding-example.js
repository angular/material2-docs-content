/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/**
 * \@title Select with 2-way value binding
 */
export class SelectValueBindingExample {
    constructor() {
        this.selected = 'option2';
    }
}
SelectValueBindingExample.decorators = [
    { type: Component, args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            },] },
];
/** @nocollapse */ SelectValueBindingExample.ɵfac = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
/** @nocollapse */ SelectValueBindingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [[3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Select an option");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
        i0.ɵɵelementStart(4, "mat-option");
        i0.ɵɵtext(5, "None");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-option", 1);
        i0.ɵɵtext(7, "Option 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-option", 2);
        i0.ɵɵtext(9, "Option 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Option 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "p");
        i0.ɵɵtext(13);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("value", ctx.selected);
        i0.ɵɵadvance(10);
        i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectValueBindingExample, [{
        type: Component,
        args: [{
                selector: 'select-value-binding-example',
                templateUrl: 'select-value-binding-example.html',
                styleUrls: ['select-value-binding-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectValueBindingExample.prototype.selected;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC12YWx1ZS1iaW5kaW5nL3NlbGVjdC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFReEMsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1FLGFBQVEsR0FBRyxTQUFTLENBQUM7S0FDdEI7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7a0dBQ1kseUJBQXlCOzhEQUF6Qix5QkFBeUI7UUNSdEMsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLGdDQUFnQjtRQUFBLGlCQUFZO1FBQ3ZDLHFDQUNFO1FBRFUscUpBQW9CO1FBQzlCLGtDQUFZO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUM3QixxQ0FBNEI7UUFBQSx3QkFBUTtRQUFBLGlCQUFhO1FBQ2pELHFDQUE0QjtRQUFBLHdCQUFRO1FBQUEsaUJBQWE7UUFDakQsc0NBQTRCO1FBQUEseUJBQVE7UUFBQSxpQkFBYTtRQUNuRCxpQkFBYTtRQUNmLGlCQUFpQjtRQUVqQiwwQkFBRztRQUFBLGFBQTBCO1FBQUEsaUJBQUk7O1FBUm5CLGVBQW9CO1FBQXBCLG9DQUFvQjtRQVEvQixnQkFBMEI7UUFBMUIseURBQTBCOztrRERGaEIseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7OztJQUVDLDZDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCAyLXdheSB2YWx1ZSBiaW5kaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0VmFsdWVCaW5kaW5nRXhhbXBsZSB7XG4gIHNlbGVjdGVkID0gJ29wdGlvbjInO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNlbGVjdCBhbiBvcHRpb248L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwic2VsZWN0ZWRcIj5cbiAgICA8bWF0LW9wdGlvbj5Ob25lPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMVwiPk9wdGlvbiAxPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uMlwiPk9wdGlvbiAyPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uM1wiPk9wdGlvbiAzPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD5Zb3Ugc2VsZWN0ZWQ6IHt7c2VsZWN0ZWR9fTwvcD5cbiJdfQ==