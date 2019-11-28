/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-custom-trigger/select-custom-trigger-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
function SelectCustomTriggerExample_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
} }
function SelectCustomTriggerExample_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r2);
} }
/**
 * \@title Select with custom trigger text
 */
export class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.decorators = [
    { type: Component, args: [{
                selector: 'select-custom-trigger-example',
                templateUrl: 'select-custom-trigger-example.html',
                styleUrls: ['select-custom-trigger-example.css'],
            },] },
];
/** @nocollapse */ SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
/** @nocollapse */ SelectCustomTriggerExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 6, vars: 4, consts: [["placeholder", "Toppings", "multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-select", 0);
        i0.ɵɵelementStart(2, "mat-select-trigger");
        i0.ɵɵtext(3);
        i0.ɵɵtemplate(4, SelectCustomTriggerExample_span_4_Template, 2, 2, "span", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SelectCustomTriggerExample_mat_option_5_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i2.MatSelectTrigger, i4.NgIf, i4.NgForOf, i5.MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectCustomTriggerExample, [{
        type: Component,
        args: [{
                selector: 'select-custom-trigger-example',
                templateUrl: 'select-custom-trigger-example.html',
                styleUrls: ['select-custom-trigger-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectCustomTriggerExample.prototype.toppings;
    /** @type {?} */
    SelectCustomTriggerExample.prototype.toppingList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWN1c3RvbS10cmlnZ2VyL3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDR3JDLCtCQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsMktBQ0Y7OztJQUVGLHFDQUFrRTtJQUFBLFlBQVc7SUFBQSxpQkFBYTs7O0lBQTFDLGtDQUFpQjtJQUFDLGVBQVc7SUFBWCxnQ0FBVzs7Ozs7QURDakYsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU1FLGFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBRTdCLGdCQUFXLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pHOzs7WUFUQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7O29HQUNZLDBCQUEwQjsrREFBMUIsMEJBQTBCO1FDVHZDLHNDQUNFO1FBQUEscUNBQ0U7UUFBQSwwQ0FDRTtRQUFBLFlBQ0E7UUFBQSw2RUFDRTtRQUVKLGlCQUFxQjtRQUNyQix5RkFBa0U7UUFDcEUsaUJBQWE7UUFDZixpQkFBaUI7O1FBVG9CLGVBQXdCO1FBQXhCLDBDQUF3QjtRQUV2RCxlQUNBO1FBREEsZ0ZBQ0E7UUFBTSxlQUFrQztRQUFsQywwRkFBa0M7UUFJOUIsZUFBbUM7UUFBbkMseUNBQW1DOztrRERDdEMsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7OztJQUVDLDhDQUE2Qjs7SUFFN0IsaURBQWdHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGN1c3RvbSB0cmlnZ2VyIHRleHQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21UcmlnZ2VyRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgdG9wcGluZ0xpc3Q6IHN0cmluZ1tdID0gWydFeHRyYSBjaGVlc2UnLCAnTXVzaHJvb20nLCAnT25pb24nLCAnUGVwcGVyb25pJywgJ1NhdXNhZ2UnLCAnVG9tYXRvJ107XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtc2VsZWN0IHBsYWNlaG9sZGVyPVwiVG9wcGluZ3NcIiBbZm9ybUNvbnRyb2xdPVwidG9wcGluZ3NcIiBtdWx0aXBsZT5cbiAgICA8bWF0LXNlbGVjdC10cmlnZ2VyPlxuICAgICAge3t0b3BwaW5ncy52YWx1ZSA/IHRvcHBpbmdzLnZhbHVlWzBdIDogJyd9fVxuICAgICAgPHNwYW4gKm5nSWY9XCJ0b3BwaW5ncy52YWx1ZT8ubGVuZ3RoID4gMVwiIGNsYXNzPVwiZXhhbXBsZS1hZGRpdGlvbmFsLXNlbGVjdGlvblwiPlxuICAgICAgICAoK3t7dG9wcGluZ3MudmFsdWUubGVuZ3RoIC0gMX19IHt7dG9wcGluZ3MudmFsdWU/Lmxlbmd0aCA9PT0gMiA/ICdvdGhlcicgOiAnb3RoZXJzJ319KVxuICAgICAgPC9zcGFuPlxuICAgIDwvbWF0LXNlbGVjdC10cmlnZ2VyPlxuICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB0b3BwaW5nIG9mIHRvcHBpbmdMaXN0XCIgW3ZhbHVlXT1cInRvcHBpbmdcIj57e3RvcHBpbmd9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==