/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-footer-row/table-footer-row-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableFooterRowExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r80 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r80.item, " ");
} }
function TableFooterRowExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableFooterRowExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r81 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r81.cost), " ");
} }
function TableFooterRowExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r76 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r76.getTotalCost()), " ");
} }
function TableFooterRowExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableFooterRowExample_tr_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableFooterRowExample_tr_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
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
 * \@title Footer row table
 */
export class TableFooterRowExample {
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
TableFooterRowExample.decorators = [
    { type: Component, args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            },] },
];
/** @nocollapse */ TableFooterRowExample.ɵfac = function TableFooterRowExample_Factory(t) { return new (t || TableFooterRowExample)(); };
/** @nocollapse */ TableFooterRowExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableFooterRowExample, selectors: [["table-footer-row-example"]], decls: 12, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["mat-footer-row", ""]], template: function TableFooterRowExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableFooterRowExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableFooterRowExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableFooterRowExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableFooterRowExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableFooterRowExample_td_7_Template, 3, 3, "td", 3);
        i0.ɵɵtemplate(8, TableFooterRowExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(9, TableFooterRowExample_tr_9_Template, 1, 0, "tr", 6);
        i0.ɵɵtemplate(10, TableFooterRowExample_tr_10_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(11, TableFooterRowExample_tr_11_Template, 1, 0, "tr", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(9);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntr.mat-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableFooterRowExample, [{
        type: Component,
        args: [{
                selector: 'table-footer-row-example',
                styleUrls: ['table-footer-row-example.css'],
                templateUrl: 'table-footer-row-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableFooterRowExample.prototype.displayedColumns;
    /** @type {?} */
    TableFooterRowExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1mb290ZXItcm93L3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHcEMsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixxREFBcUI7OztJQUNqRSw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFLbEQsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQWdDOztJQUFBLGlCQUFLOzs7SUFBckMsZUFBZ0M7SUFBaEMsMkVBQWdDOzs7SUFDNUUsOEJBQXVDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQUs7OztJQUFuQyxlQUE4QjtJQUE5Qiw2RUFBOEI7OztJQUd2RSx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7OztJQUNsRSx5QkFBNEQ7Ozs7O0FEZjlELGlDQUdDOzs7SUFGQywyQkFBYTs7SUFDYiwyQkFBYTs7Ozs7QUFXZixNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsaUJBQVksR0FBa0I7WUFDNUIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7U0FDOUIsQ0FBQztLQU1IOzs7OztJQUhDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLE1BQU07Ozs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFdBQVcsRUFBRSwrQkFBK0I7YUFDN0M7OzBGQUNZLHFCQUFxQjswREFBckIscUJBQXFCO1FDZmxDLGdDQUNFO1FBQ0EsZ0NBQ0U7UUFBQSxvRUFBdUM7UUFDdkMsb0VBQTRDO1FBQzVDLG9FQUF1QztRQUN6QywwQkFBZTtRQUdmLGdDQUNFO1FBQUEsb0VBQXVDO1FBQ3ZDLG9FQUE0QztRQUM1QyxvRUFBdUM7UUFDekMsMEJBQWU7UUFFZixvRUFBdUQ7UUFDdkQsc0VBQTZEO1FBQzdELHNFQUF1RDtRQUN6RCxpQkFBUTs7UUFsQlMsNkNBQTJCO1FBZXZCLGVBQW1DO1FBQW5DLHNEQUFtQztRQUMxQyxlQUFnRDtRQUFoRCx1REFBZ0Q7UUFDekMsZUFBbUM7UUFBbkMsc0RBQW1DOztrRERGM0MscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsV0FBVyxFQUFFLCtCQUErQjthQUM3Qzs7OztJQUVDLGlEQUE4Qzs7SUFDOUMsNkNBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBpdGVtOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgRm9vdGVyIHJvdyB0YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1mb290ZXItcm93LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGb290ZXJSb3dFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2l0ZW0nLCAnY29zdCddO1xuICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXG4gICAge2l0ZW06ICdCZWFjaCBiYWxsJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdUb3dlbCcsIGNvc3Q6IDV9LFxuICAgIHtpdGVtOiAnRnJpc2JlZScsIGNvc3Q6IDJ9LFxuICAgIHtpdGVtOiAnU3Vuc2NyZWVuJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdDb29sZXInLCBjb3N0OiAyNX0sXG4gICAge2l0ZW06ICdTd2ltIHN1aXQnLCBjb3N0OiAxNX0sXG4gIF07XG5cbiAgLyoqIEdldHMgdGhlIHRvdGFsIGNvc3Qgb2YgYWxsIHRyYW5zYWN0aW9ucy4gKi9cbiAgZ2V0VG90YWxDb3N0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zYWN0aW9ucy5tYXAodCA9PiB0LmNvc3QpLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApO1xuICB9XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cInRyYW5zYWN0aW9uc1wiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8IS0tIEl0ZW0gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIml0ZW1cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBJdGVtIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uaXRlbX19IDwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4gVG90YWwgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDb3N0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb3N0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gQ29zdCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCB0cmFuc2FjdGlvblwiPiB7e3RyYW5zYWN0aW9uLmNvc3QgfCBjdXJyZW5jeX19IDwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj4ge3tnZXRUb3RhbENvc3QoKSB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbjwvdGFibGU+XG4iXX0=