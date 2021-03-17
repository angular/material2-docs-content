import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/core";
function SelectCustomTriggerExample_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
} }
function SelectCustomTriggerExample_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r2);
} }
/** @title Select with custom trigger text */
export class SelectCustomTriggerExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
SelectCustomTriggerExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 8, vars: 4, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Toppings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵelementStart(4, "mat-select-trigger");
        i0.ɵɵtext(5);
        i0.ɵɵtemplate(6, SelectCustomTriggerExample_span_6_Template, 2, 2, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, SelectCustomTriggerExample_mat_option_7_Template, 2, 2, "mat-option", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i2.MatSelectTrigger, i4.NgIf, i4.NgForOf, i5.MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectCustomTriggerExample, [{
        type: Component,
        args: [{
                selector: 'select-custom-trigger-example',
                templateUrl: 'select-custom-trigger-example.html',
                styleUrls: ['select-custom-trigger-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LWN1c3RvbS10cmlnZ2VyL3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0lyQywrQkFBOEU7SUFDNUUsWUFDRjtJQUFBLGlCQUFPOzs7SUFETCxlQUNGO0lBREUsMktBQ0Y7OztJQUVGLHFDQUFrRTtJQUFBLFlBQVc7SUFBQSxpQkFBYTs7O0lBQTFDLGtDQUFpQjtJQUFDLGVBQVc7SUFBWCxnQ0FBVzs7QUROakYsNkNBQTZDO0FBTTdDLE1BQU0sT0FBTywwQkFBMEI7SUFMdkM7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUU3QixnQkFBVyxHQUFhLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNqRzs7b0dBSlksMEJBQTBCOzZFQUExQiwwQkFBMEI7UUNUdkMseUNBQWtDO1FBQ2hDLGlDQUFXO1FBQUEsd0JBQVE7UUFBQSxpQkFBWTtRQUMvQixxQ0FBOEM7UUFDNUMsMENBQW9CO1FBQ2xCLFlBQ0E7UUFBQSw2RUFFTztRQUNULGlCQUFxQjtRQUNyQix5RkFBMEY7UUFDNUYsaUJBQWE7UUFDZixpQkFBaUI7O1FBVEgsZUFBd0I7UUFBeEIsMENBQXdCO1FBRWhDLGVBQ0E7UUFEQSxnRkFDQTtRQUFPLGVBQWdDO1FBQWhDLDBGQUFnQztRQUlULGVBQWM7UUFBZCx5Q0FBYzs7dUZEQXJDLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggY3VzdG9tIHRyaWdnZXIgdGV4dCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEN1c3RvbVRyaWdnZXJFeGFtcGxlIHtcbiAgdG9wcGluZ3MgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuICB0b3BwaW5nTGlzdDogc3RyaW5nW10gPSBbJ0V4dHJhIGNoZWVzZScsICdNdXNocm9vbScsICdPbmlvbicsICdQZXBwZXJvbmknLCAnU2F1c2FnZScsICdUb21hdG8nXTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPlRvcHBpbmdzPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJ0b3BwaW5nc1wiIG11bHRpcGxlPlxuICAgIDxtYXQtc2VsZWN0LXRyaWdnZXI+XG4gICAgICB7e3RvcHBpbmdzLnZhbHVlID8gdG9wcGluZ3MudmFsdWVbMF0gOiAnJ319XG4gICAgICA8c3BhbiAqbmdJZj1cInRvcHBpbmdzLnZhbHVlPy5sZW5ndGggPiAxXCIgY2xhc3M9XCJleGFtcGxlLWFkZGl0aW9uYWwtc2VsZWN0aW9uXCI+XG4gICAgICAgICgre3t0b3BwaW5ncy52YWx1ZS5sZW5ndGggLSAxfX0ge3t0b3BwaW5ncy52YWx1ZT8ubGVuZ3RoID09PSAyID8gJ290aGVyJyA6ICdvdGhlcnMnfX0pXG4gICAgICA8L3NwYW4+XG4gICAgPC9tYXQtc2VsZWN0LXRyaWdnZXI+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRvcHBpbmcgb2YgdG9wcGluZ0xpc3RcIiBbdmFsdWVdPVwidG9wcGluZ1wiPnt7dG9wcGluZ319PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19