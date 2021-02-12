import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", shoe_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * @title List with single selection
 */
export class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
        i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 2, "mat-list-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵproperty("multiple", false);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.typesOfShoes);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value, "\n");
    } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNDdEMsMENBQWtFO0lBQ2hFLFlBQ0Y7SUFBQSxpQkFBa0I7OztJQUZpQywrQkFBYztJQUMvRCxlQUNGO0lBREUsd0NBQ0Y7O0FEREY7O0dBRUc7QUFNSCxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTUUsaUJBQVksR0FBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRjs7b0dBRlksMEJBQTBCOytEQUExQiwwQkFBMEI7UUNWdkMsZ0RBQThDO1FBQzVDLG1HQUVrQjtRQUNwQixpQkFBcUI7UUFFckIseUJBQUc7UUFDRCxZQUNGO1FBQUEsaUJBQUk7OztRQVJ1QixnQ0FBa0I7UUFDVCxlQUFlO1FBQWYsMENBQWU7UUFNakQsZUFDRjtRQURFLHlJQUNGOzt1RkRFYSwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2luZ2xlIHNlbGVjdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIiwiPG1hdC1zZWxlY3Rpb24tbGlzdCAjc2hvZXMgW211bHRpcGxlXT1cImZhbHNlXCI+XG4gIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHNob2Ugb2YgdHlwZXNPZlNob2VzXCIgW3ZhbHVlXT1cInNob2VcIj5cbiAgICB7e3Nob2V9fVxuICA8L21hdC1saXN0LW9wdGlvbj5cbjwvbWF0LXNlbGVjdGlvbi1saXN0PlxuXG48cD5cbiAgT3B0aW9uIHNlbGVjdGVkOiB7e3Nob2VzLnNlbGVjdGVkT3B0aW9ucy5zZWxlY3RlZFswXT8udmFsdWV9fVxuPC9wPlxuIl19