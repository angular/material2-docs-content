import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Select in a form
 */
var SelectFormExample = /** @class */ (function () {
    function SelectFormExample() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.cars = [
            { value: 'volvo', viewValue: 'Volvo' },
            { value: 'saab', viewValue: 'Saab' },
            { value: 'mercedes', viewValue: 'Mercedes' }
        ];
    }
    SelectFormExample = tslib_1.__decorate([
        Component({
            selector: 'select-form-example',
            template: "<form>\n  <h4>mat-select</h4>\n  <mat-form-field>\n    <mat-label>Favorite food</mat-label>\n    <mat-select [(ngModel)]=\"selectedValue\" name=\"food\">\n      <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n        {{food.viewValue}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <p> Selected food: {{selectedValue}} </p>\n  <h4>native html select</h4>\n  <mat-form-field>\n    <mat-label>Favorite car</mat-label>\n    <select matNativeControl [(ngModel)]=\"selectedCar\" name=\"car\">\n      <option value=\"\" selected></option>\n      <option *ngFor=\"let car of cars\" [value]=\"car.value\">\n        {{car.viewValue}}\n      </option>\n    </select>\n  </mat-form-field>\n  <p> Selected car: {{selectedCar}} </p>\n</form>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], SelectFormExample);
    return SelectFormExample;
}());
export { SelectFormExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWZvcm0tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBWXhDOztHQUVHO0FBTUg7SUFMQTtRQVNFLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFFRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBQztTQUMzQyxDQUFDO0lBQ0osQ0FBQztJQWZZLGlCQUFpQjtRQUw3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLDB3QkFBdUM7O1NBRXhDLENBQUM7T0FDVyxpQkFBaUIsQ0FlN0I7SUFBRCx3QkFBQztDQUFBLEFBZkQsSUFlQztTQWZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIFNlbGVjdCBpbiBhIGZvcm1cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2VsZWN0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LWZvcm0tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NlbGVjdC1mb3JtLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEZvcm1FeGFtcGxlIHtcbiAgc2VsZWN0ZWRWYWx1ZTogc3RyaW5nO1xuICBzZWxlY3RlZENhcjogc3RyaW5nO1xuXG4gIGZvb2RzOiBGb29kW10gPSBbXG4gICAge3ZhbHVlOiAnc3RlYWstMCcsIHZpZXdWYWx1ZTogJ1N0ZWFrJ30sXG4gICAge3ZhbHVlOiAncGl6emEtMScsIHZpZXdWYWx1ZTogJ1BpenphJ30sXG4gICAge3ZhbHVlOiAndGFjb3MtMicsIHZpZXdWYWx1ZTogJ1RhY29zJ31cbiAgXTtcblxuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICd2b2x2bycsIHZpZXdWYWx1ZTogJ1ZvbHZvJ30sXG4gICAge3ZhbHVlOiAnc2FhYicsIHZpZXdWYWx1ZTogJ1NhYWInfSxcbiAgICB7dmFsdWU6ICdtZXJjZWRlcycsIHZpZXdWYWx1ZTogJ01lcmNlZGVzJ31cbiAgXTtcbn1cbiJdfQ==