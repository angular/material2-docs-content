/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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
                template: "<mat-form-field>\n  <mat-label>Toppings</mat-label>\n  <mat-select [formControl]=\"toppings\" multiple>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
if (false) {
    /** @type {?} */
    SelectMultipleExample.prototype.toppings;
    /** @type {?} */
    SelectMultipleExample.prototype.toppingList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW11bHRpcGxlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQVEzQyxNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUsYUFBUSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBYSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDZQQUEyQzs7YUFFNUM7Ozs7SUFFQyx5Q0FBNkI7O0lBQzdCLDRDQUFnRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBTZWxlY3Qgd2l0aCBtdWx0aXBsZSBzZWxlY3Rpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtbXVsdGlwbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RNdWx0aXBsZUV4YW1wbGUge1xuICB0b3BwaW5ncyA9IG5ldyBGb3JtQ29udHJvbCgpO1xuICB0b3BwaW5nTGlzdDogc3RyaW5nW10gPSBbJ0V4dHJhIGNoZWVzZScsICdNdXNocm9vbScsICdPbmlvbicsICdQZXBwZXJvbmknLCAnU2F1c2FnZScsICdUb21hdG8nXTtcbn1cbiJdfQ==