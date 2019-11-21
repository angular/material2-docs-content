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
    var topping_r16 = ctx.$implicit;
    i0.ɵɵproperty("value", topping_r16);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(topping_r16);
} }
/** @title Select with multiple selection */
var SelectMultipleExample = /** @class */ (function () {
    function SelectMultipleExample() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectMultipleExample.decorators = [
        { type: Component, args: [{
                    selector: 'select-multiple-example',
                    templateUrl: 'select-multiple-example.html',
                    styleUrls: ['select-multiple-example.css'],
                },] },
    ];
    SelectMultipleExample.ɵfac = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
    SelectMultipleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) { if (rf & 1) {
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
    return SelectMultipleExample;
}());
export { SelectMultipleExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectMultipleExample, [{
        type: Component,
        args: [{
                selector: 'select-multiple-example',
                templateUrl: 'select-multiple-example.html',
                styleUrls: ['select-multiple-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3Qvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1tdWx0aXBsZS9zZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0V2QyxxQ0FBa0U7SUFBQSxZQUFXO0lBQUEsaUJBQWE7OztJQUExQyxtQ0FBaUI7SUFBQyxlQUFXO0lBQVgsaUNBQVc7O0FEQWpGLDRDQUE0QztBQUM1QztJQUFBO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBYSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDakc7O2dCQVJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OzhGQUNZLHFCQUFxQjs4REFBckIscUJBQXFCO1lDVGxDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSx3QkFBUTtZQUFBLGlCQUFZO1lBQy9CLHFDQUNFO1lBQUEsb0ZBQWtFO1lBQ3BFLGlCQUFhO1lBQ2YsaUJBQWlCOztZQUhILGVBQXdCO1lBQXhCLDBDQUF3QjtZQUN0QixlQUFtQztZQUFuQyx5Q0FBbUM7O2dDREhuRDtDQVlDLEFBUkQsSUFRQztTQUhZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBtdWx0aXBsZSBzZWxlY3Rpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RNdWx0aXBsZUV4YW1wbGUge1xuICB0b3BwaW5ncyA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICB0b3BwaW5nTGlzdDogc3RyaW5nW10gPSBbJ0V4dHJhIGNoZWVzZScsICdNdXNocm9vbScsICdPbmlvbicsICdQZXBwZXJvbmknLCAnU2F1c2FnZScsICdUb21hdG8nXTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Ub3BwaW5nczwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwidG9wcGluZ3NcIiBtdWx0aXBsZT5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgdG9wcGluZyBvZiB0b3BwaW5nTGlzdFwiIFt2YWx1ZV09XCJ0b3BwaW5nXCI+e3t0b3BwaW5nfX08L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=