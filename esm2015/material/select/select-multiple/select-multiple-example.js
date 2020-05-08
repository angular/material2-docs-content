/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/select/select-multiple/select-multiple-example.ts
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
function SelectMultipleExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topping_r1 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r1);
} }
/**
 * \@title Select with multiple selection
 */
export class SelectMultipleExample {
    constructor() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
}
SelectMultipleExample.decorators = [
    { type: Component, args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
                styleUrls: ['select-multiple-example.css'],
            },] },
];
/** @nocollapse */ SelectMultipleExample.ɵfac = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
/** @nocollapse */ SelectMultipleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Toppings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0);
        i0.ɵɵtemplate(4, SelectMultipleExample_mat_option_4_Template, 2, 2, "mat-option", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.toppings);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.toppingList);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.MatOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectMultipleExample, [{
        type: Component,
        args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
                styleUrls: ['select-multiple-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    SelectMultipleExample.prototype.toppings;
    /** @type {?} */
    SelectMultipleExample.prototype.toppingList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1tdWx0aXBsZS9zZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0lDRXZDLHFDQUFrRTtJQUFBLFlBQVc7SUFBQSxpQkFBYTs7O0lBQTFDLGtDQUFpQjtJQUFDLGVBQVc7SUFBWCxnQ0FBVzs7Ozs7QURNakYsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLGFBQVEsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO1FBQzdCLGdCQUFXLEdBQWEsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBQ2pHOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0M7OzZHQUNZLHFCQUFxQjs2RUFBckIscUJBQXFCO1FDVGxDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSx3QkFBUTtRQUFBLGlCQUFZO1FBQy9CLHFDQUNFO1FBQUEsb0ZBQWtFO1FBQ3BFLGlCQUFhO1FBQ2YsaUJBQWlCOztRQUhILGVBQXdCO1FBQXhCLDBDQUF3QjtRQUN0QixlQUFtQztRQUFuQyx5Q0FBbUM7O2tERE10QyxxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBRUMseUNBQTZCOztJQUM3Qiw0Q0FBZ0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgU2VsZWN0IHdpdGggbXVsdGlwbGUgc2VsZWN0aW9uICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtbXVsdGlwbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0TXVsdGlwbGVFeGFtcGxlIHtcbiAgdG9wcGluZ3MgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgdG9wcGluZ0xpc3Q6IHN0cmluZ1tdID0gWydFeHRyYSBjaGVlc2UnLCAnTXVzaHJvb20nLCAnT25pb24nLCAnUGVwcGVyb25pJywgJ1NhdXNhZ2UnLCAnVG9tYXRvJ107XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+VG9wcGluZ3M8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInRvcHBpbmdzXCIgbXVsdGlwbGU+XG4gICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHRvcHBpbmcgb2YgdG9wcGluZ0xpc3RcIiBbdmFsdWVdPVwidG9wcGluZ1wiPnt7dG9wcGluZ319PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19