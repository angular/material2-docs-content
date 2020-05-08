/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/list/list-single-selection/list-single-selection-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/common";
function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-list-option");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * \@title List with single selection
 */
export class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            },] },
];
/** @nocollapse */ ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
/** @nocollapse */ ListSingleSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-selection-list", 0, 1);
        i0.ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 2);
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
        i0.ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected, "\n");
    } }, directives: [i1.MatSelectionList, i2.NgForOf, i1.MatListOption], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ListSingleSelectionExample.prototype.typesOfShoes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0N0Qyx1Q0FDRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBa0I7OztJQURoQixlQUNGO0lBREUsd0NBQ0Y7Ozs7O0FET0YsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU1FLGlCQUFZLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7S0FDakY7OztZQVBBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFDaEQsV0FBVyxFQUFFLG9DQUFvQzthQUNsRDs7dUhBQ1ksMEJBQTBCO2tGQUExQiwwQkFBMEI7UUNWdkMsZ0RBQ0U7UUFBQSxtR0FDRTtRQUVKLGlCQUFxQjtRQUVyQix5QkFDRTtRQUFBLFlBQ0Y7UUFBQSxpQkFBSTs7O1FBUnVCLGdDQUFrQjtRQUMxQixlQUFpQztRQUFqQywwQ0FBaUM7UUFNbEQsZUFDRjtRQURFLCtFQUNGOztrRERFYSwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEOzs7O0lBRUMsa0RBQWdGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2luZ2xlIHNlbGVjdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIiwiPG1hdC1zZWxlY3Rpb24tbGlzdCAjc2hvZXMgW211bHRpcGxlXT1cImZhbHNlXCI+XG4gIDxtYXQtbGlzdC1vcHRpb24gKm5nRm9yPVwibGV0IHNob2Ugb2YgdHlwZXNPZlNob2VzXCI+XG4gICAge3tzaG9lfX1cbiAgPC9tYXQtbGlzdC1vcHRpb24+XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbiBzZWxlY3RlZDoge3tzaG9lcy5zZWxlY3RlZE9wdGlvbnMuc2VsZWN0ZWR9fVxuPC9wPlxuIl19