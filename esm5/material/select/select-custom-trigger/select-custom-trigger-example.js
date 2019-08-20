import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/** @title Select with custom trigger text */
var SelectCustomTriggerExample = /** @class */ (function () {
    function SelectCustomTriggerExample() {
        this.toppings = new FormControl();
        this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    }
    SelectCustomTriggerExample = tslib_1.__decorate([
        Component({
            selector: 'select-custom-trigger-example',
            template: "<mat-form-field>\n  <mat-select placeholder=\"Toppings\" [formControl]=\"toppings\" multiple>\n    <mat-select-trigger>\n      {{toppings.value ? toppings.value[0] : ''}}\n      <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' : 'others'}})\n      </span>\n    </mat-select-trigger>\n    <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n  </mat-select>\n</mat-form-field>\n",
            styles: [".example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n"]
        })
    ], SelectCustomTriggerExample);
    return SelectCustomTriggerExample;
}());
export { SelectCustomTriggerExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsNkNBQTZDO0FBTTdDO0lBTEE7UUFNRSxhQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUU3QixnQkFBVyxHQUFhLENBQUMsY0FBYyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBSlksMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwrQkFBK0I7WUFDekMsb2lCQUFpRDs7U0FFbEQsQ0FBQztPQUNXLDBCQUEwQixDQUl0QztJQUFELGlDQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGN1c3RvbSB0cmlnZ2VyIHRleHQgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1jdXN0b20tdHJpZ2dlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RDdXN0b21UcmlnZ2VyRXhhbXBsZSB7XG4gIHRvcHBpbmdzID0gbmV3IEZvcm1Db250cm9sKCk7XG5cbiAgdG9wcGluZ0xpc3Q6IHN0cmluZ1tdID0gWydFeHRyYSBjaGVlc2UnLCAnTXVzaHJvb20nLCAnT25pb24nLCAnUGVwcGVyb25pJywgJ1NhdXNhZ2UnLCAnVG9tYXRvJ107XG59XG4iXX0=