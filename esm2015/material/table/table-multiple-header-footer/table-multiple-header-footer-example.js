/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-multiple-header-footer/table-multiple-header-footer-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r115 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r115.item, " ");
} }
function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const transaction_r116 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r116.cost), " ");
} }
function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r106 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r106.getTotalCost()), " ");
} }
function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name of the item purchased ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost of the item in USD ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
const _c0 = function () { return ["item-description", "cost-description"]; };
const _c1 = function () { return ["disclaimer"]; };
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
 * \@title Table with multiple header and footer rows
 */
export class TableMultipleHeaderFooterExample {
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
TableMultipleHeaderFooterExample.decorators = [
    { type: Component, args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            },] },
];
/** @nocollapse */ TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
/** @nocollapse */ TableMultipleHeaderFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
        i0.ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 6);
        i0.ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 8);
        i0.ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
        i0.ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
        i0.ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.transactions);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpureFunction0(6, _c0));
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matFooterRowDef", i0.ɵɵpureFunction0(7, _c1));
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #900000;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.displayedColumns;
    /** @type {?} */
    TableMultipleHeaderFooterExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyL3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHcEMsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixzREFBcUI7OztJQUNqRSw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFLbEQsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQWdDOztJQUFBLGlCQUFLOzs7SUFBckMsZUFBZ0M7SUFBaEMsNEVBQWdDOzs7SUFDNUUsOEJBQXVDO0lBQUEsWUFBOEI7O0lBQUEsaUJBQUs7OztJQUFuQyxlQUE4QjtJQUE5Qiw4RUFBOEI7OztJQUtyRSw4QkFBdUM7SUFBQSw0Q0FBMkI7SUFBQSxpQkFBSzs7O0lBS3ZFLDhCQUF1QztJQUFBLHlDQUF3QjtJQUFBLGlCQUFLOzs7SUFLcEUsOEJBQ0U7SUFBQSxrR0FDRjtJQUFBLGlCQUFLOzs7SUFJUCx5QkFFSzs7O0lBQ0wseUJBRUs7OztJQUVMLHlCQUFrRTs7O0lBRWxFLHlCQUE2Rjs7O0lBQzdGLHlCQUE0Rjs7Ozs7OztBRHhDOUYsaUNBR0M7OztJQUZDLDJCQUFhOztJQUNiLDJCQUFhOzs7OztBQVdmLE1BQU0sT0FBTyxnQ0FBZ0M7SUFMN0M7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM5QyxpQkFBWSxHQUFrQjtZQUM1QixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM3QixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUN4QixFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUM1QixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztZQUMxQixFQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztTQUM5QixDQUFDO0tBTUg7Ozs7O0lBSEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztnQkFDdkQsV0FBVyxFQUFFLDJDQUEyQzthQUN6RDs7Z0hBQ1ksZ0NBQWdDO3FFQUFoQyxnQ0FBZ0M7UUNoQjdDLGdDQUNFO1FBQ0EsZ0NBQ0U7UUFBQSwrRUFBdUM7UUFDdkMsK0VBQTRDO1FBQzVDLCtFQUF1QztRQUN6QywwQkFBZTtRQUdmLGdDQUNFO1FBQUEsK0VBQXVDO1FBQ3ZDLCtFQUE0QztRQUM1QywrRUFBdUM7UUFDekMsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLGlGQUF1QztRQUN6QywwQkFBZTtRQUdmLGlDQUNFO1FBQUEsaUZBQXVDO1FBQ3pDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSxpRkFDRTtRQUVKLDBCQUFlO1FBR2Ysa0ZBRUE7UUFDQSxrRkFFQTtRQUVBLGtGQUE2RDtRQUU3RCxrRkFBd0Y7UUFDeEYsa0ZBQXVGO1FBQ3pGLGlCQUFROztRQTVDUyw2Q0FBMkI7UUFpQ3ZCLGdCQUFtQztRQUFuQyxzREFBbUM7UUFHbkMsZUFBMkQ7UUFBM0QsNERBQTJEO1FBSWxFLGVBQWdEO1FBQWhELHVEQUFnRDtRQUV6QyxlQUFtQztRQUFuQyxzREFBbUM7UUFDbkMsZUFBaUM7UUFBakMsNERBQWlDOztrREQzQnpDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7Z0JBQ3ZELFdBQVcsRUFBRSwyQ0FBMkM7YUFDekQ7Ozs7SUFFQyw0REFBOEM7O0lBQzlDLHdEQU9FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUcmFuc2FjdGlvbn0gZnJvbSAnLi4vdGFibGUtZm9vdGVyLXJvdy90YWJsZS1mb290ZXItcm93LWV4YW1wbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zYWN0aW9uIHtcbiAgaXRlbTogc3RyaW5nO1xuICBjb3N0OiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggbXVsdGlwbGUgaGVhZGVyIGFuZCBmb290ZXIgcm93c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNdWx0aXBsZUhlYWRlckZvb3RlckV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaXRlbScsICdjb3N0J107XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtcbiAgICB7aXRlbTogJ0JlYWNoIGJhbGwnLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ1Rvd2VsJywgY29zdDogNX0sXG4gICAge2l0ZW06ICdGcmlzYmVlJywgY29zdDogMn0sXG4gICAge2l0ZW06ICdTdW5zY3JlZW4nLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ0Nvb2xlcicsIGNvc3Q6IDI1fSxcbiAgICB7aXRlbTogJ1N3aW0gc3VpdCcsIGNvc3Q6IDE1fSxcbiAgXTtcblxuICAvKiogR2V0cyB0aGUgdG90YWwgY29zdCBvZiBhbGwgdHJhbnNhY3Rpb25zLiAqL1xuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25zLm1hcCh0ID0+IHQuY29zdCkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwidHJhbnNhY3Rpb25zXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDwhLS0gSXRlbSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaXRlbVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEl0ZW0gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5pdGVtfX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBUb3RhbCA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvc3QgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvc3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHRyYW5zYWN0aW9uXCI+IHt7dHJhbnNhY3Rpb24uY29zdCB8IGN1cnJlbmN5fX0gPC90ZD5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiB7e2dldFRvdGFsQ29zdCgpIHwgY3VycmVuY3l9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEl0ZW0gRGVzY3JpcHRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIml0ZW0tZGVzY3JpcHRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIG9mIHRoZSBpdGVtIHB1cmNoYXNlZCA8L3RoPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvc3QgRGVzY3JpcHRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvc3QtZGVzY3JpcHRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBDb3N0IG9mIHRoZSBpdGVtIGluIFVTRCA8L3RoPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIERpc2NsYWltZXIgY29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImRpc2NsYWltZXJcIj5cbiAgICA8dGQgbWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmIGNvbHNwYW49XCIyXCI+XG4gICAgICBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBjb3N0IG9mIGl0ZW1zIGRpc3BsYXllZCBhcmUgY29tcGxldGVseSBhbmQgdG90YWxseSBtYWRlIHVwLlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gVGhlIHRhYmxlIHdpbGwgcmVuZGVyIHR3byBoZWFkZXIgcm93cywgb25lIGRhdGEgcm93IHBlciBkYXRhIG9iamVjdCwgYW5kIHR3byBmb290ZXIgcm93cy4gLS0+XG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtZmlyc3QtaGVhZGVyLXJvd1wiPlxuICA8L3RyPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cIlsnaXRlbS1kZXNjcmlwdGlvbicsICdjb3N0LWRlc2NyaXB0aW9uJ11cIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLXNlY29uZC1oZWFkZXItcm93XCI+XG4gIDwvdHI+XG5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICA8dHIgbWF0LWZvb3Rlci1yb3cgKm1hdEZvb3RlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIiBjbGFzcz1cImV4YW1wbGUtZmlyc3QtZm9vdGVyLXJvd1wiPjwvdHI+XG4gIDx0ciBtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiWydkaXNjbGFpbWVyJ11cIiBjbGFzcz1cImV4YW1wbGUtc2Vjb25kLWZvb3Rlci1yb3dcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==