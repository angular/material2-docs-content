/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-sticky-footer/table-sticky-footer-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableStickyFooterExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r9.item, " ");
} }
function TableStickyFooterExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableStickyFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r10.cost), " ");
} }
function TableStickyFooterExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r5.getTotalCost()), " ");
} }
function TableStickyFooterExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableStickyFooterExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableStickyFooterExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Table with a sticky footer
 */
export class TableStickyFooterExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableStickyFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            },] },
];
/** @nocollapse */ TableStickyFooterExample.ɵfac = function TableStickyFooterExample_Factory(t) { return new (t || TableStickyFooterExample)(); };
/** @nocollapse */ TableStickyFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyFooterExample, selectors: [["table-sticky-footer-example"]], decls: 13, vars: 5, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef", "matFooterRowDefSticky"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableStickyFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyFooterExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyFooterExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵtemplate(5, TableStickyFooterExample_td_5_Template, 2, 0, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 6);
        i0.ɵɵtemplate(7, TableStickyFooterExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, TableStickyFooterExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵtemplate(9, TableStickyFooterExample_td_9_Template, 3, 3, "td", 5);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(10, TableStickyFooterExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableStickyFooterExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(12, TableStickyFooterExample_tr_12_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns)("matFooterRowDefSticky", true);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 270px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%] {\n  border-top: 1px solid #e0e0e0;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-footer-example',
                styleUrls: ['table-sticky-footer-example.css'],
                templateUrl: 'table-sticky-footer-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableStickyFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyFooterExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc3RpY2t5LWZvb3Rlci90YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktZm9vdGVyL3RhYmxlLXN0aWNreS1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNJbEMsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixvREFBcUI7OztJQUNqRSw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFLbEQsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQWdDOztJQUFBLGlCQUFLOzs7SUFBckMsZUFBZ0M7SUFBaEMsMkVBQWdDOzs7SUFDNUUsOEJBQXVDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQUs7OztJQUFuQyxlQUE4QjtJQUE5Qiw0RUFBOEI7OztJQUd2RSx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7OztJQUNsRSx5QkFBMEU7Ozs7O0FEaEI5RSxpQ0FHQzs7O0lBRkMsMkJBQWE7O0lBQ2IsMkJBQWE7Ozs7O0FBV2YsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLHFCQUFnQixHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLGlCQUFZLEdBQWtCO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1NBQzlCLENBQUM7S0FNSDs7Ozs7SUFIQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOzttSEFDWSx3QkFBd0I7Z0ZBQXhCLHdCQUF3QjtRQ2ZyQyw4QkFDRTtRQUFBLGdDQUNFO1FBQ0EsZ0NBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQTRDO1FBQzVDLHVFQUF1QztRQUN6QywwQkFBZTtRQUdmLGdDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUE0QztRQUM1Qyx1RUFBdUM7UUFDekMsMEJBQWU7UUFFZix5RUFBdUQ7UUFDdkQseUVBQTZEO1FBQzdELHlFQUFxRTtRQUN2RSxpQkFBUTtRQUNWLGlCQUFNOztRQW5CYSxlQUEyQjtRQUEzQiw2Q0FBMkI7UUFldkIsZUFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDtRQUN6QyxlQUFpRDtRQUFqRCxzREFBaUQsK0JBQUE7O2tEREgzRCx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOzs7O0lBRUMsb0RBQW9DOztJQUNwQyxnREFPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGl0ZW06IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIGEgc3RpY2t5IGZvb3RlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1zdGlja3ktZm9vdGVyLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc3RpY2t5LWZvb3Rlci1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXN0aWNreS1mb290ZXItZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTdGlja3lGb290ZXJFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IFsnaXRlbScsICdjb3N0J107XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtcbiAgICB7aXRlbTogJ0JlYWNoIGJhbGwnLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ1Rvd2VsJywgY29zdDogNX0sXG4gICAge2l0ZW06ICdGcmlzYmVlJywgY29zdDogMn0sXG4gICAge2l0ZW06ICdTdW5zY3JlZW4nLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ0Nvb2xlcicsIGNvc3Q6IDI1fSxcbiAgICB7aXRlbTogJ1N3aW0gc3VpdCcsIGNvc3Q6IDE1fSxcbiAgXTtcblxuICAvKiogR2V0cyB0aGUgdG90YWwgY29zdCBvZiBhbGwgdHJhbnNhY3Rpb25zLiAqL1xuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25zLm1hcCh0ID0+IHQuY29zdCkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lciBtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwidHJhbnNhY3Rpb25zXCI+XG4gICAgPCEtLSBJdGVtIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIml0ZW1cIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEl0ZW0gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCB0cmFuc2FjdGlvblwiPiB7e3RyYW5zYWN0aW9uLml0ZW19fSA8L3RkPlxuICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gVG90YWwgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gQ29zdCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb3N0XCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5jb3N0IHwgY3VycmVuY3l9fSA8L3RkPlxuICAgICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4ge3tnZXRUb3RhbENvc3QoKSB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogdHJ1ZVwiPjwvdHI+XG4gIDwvdGFibGU+XG48L2Rpdj5cbiJdfQ==