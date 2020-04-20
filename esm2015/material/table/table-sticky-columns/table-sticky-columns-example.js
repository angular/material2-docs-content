/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-sticky-columns/table-sticky-columns-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/icon";
function TableStickyColumnsExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r228 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r228.name, " ");
} }
function TableStickyColumnsExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r229 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r229.position, " ");
} }
function TableStickyColumnsExample_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r230 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r230.weight, " ");
} }
function TableStickyColumnsExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r231 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r231.symbol, " ");
} }
function TableStickyColumnsExample_th_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 11);
} }
function TableStickyColumnsExample_td_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function TableStickyColumnsExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableStickyColumnsExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
/**
 * \@title Table with sticky columns
 */
export class TableStickyColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableStickyColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-columns-example',
                styleUrls: ['table-sticky-columns-example.css'],
                templateUrl: 'table-sticky-columns-example.html',
            },] },
];
/** @nocollapse */ TableStickyColumnsExample.ɵfac = function TableStickyColumnsExample_Factory(t) { return new (t || TableStickyColumnsExample)(); };
/** @nocollapse */ TableStickyColumnsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyColumnsExample, selectors: [["table-sticky-columns-example"]], decls: 19, vars: 3, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["matColumnDef", "star", "stickyEnd", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyColumnsExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyColumnsExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableStickyColumnsExample_th_6_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(7, TableStickyColumnsExample_td_7_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 6);
        i0.ɵɵtemplate(9, TableStickyColumnsExample_th_9_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(10, TableStickyColumnsExample_td_10_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableStickyColumnsExample_th_12_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(13, TableStickyColumnsExample_td_13_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(14, 8);
        i0.ɵɵtemplate(15, TableStickyColumnsExample_th_15_Template, 1, 0, "th", 3);
        i0.ɵɵtemplate(16, TableStickyColumnsExample_td_16_Template, 3, 0, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(17, TableStickyColumnsExample_tr_17_Template, 1, 0, "tr", 9);
        i0.ɵɵtemplate(18, TableStickyColumnsExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i2.MatIcon, i1.MatHeaderRow, i1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 550px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 800px;\n}\n\ntd.mat-column-star[_ngcontent-%COMP%] {\n  width: 20px;\n  padding-right: 8px;\n}\n\nth.mat-column-position[_ngcontent-%COMP%], td.mat-column-position[_ngcontent-%COMP%] {\n  padding-left: 8px;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:first-child {\n  border-right: 1px solid #e0e0e0;\n}\n\n.mat-table-sticky[_ngcontent-%COMP%]:last-child {\n  border-left: 1px solid #e0e0e0;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableStickyColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-columns-example',
                styleUrls: ['table-sticky-columns-example.css'],
                templateUrl: 'table-sticky-columns-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableStickyColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyColumnsExample.prototype.dataSource;
}
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWNvbHVtbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXN0aWNreS1jb2x1bW5zL3RhYmxlLXN0aWNreS1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktY29sdW1ucy90YWJsZS1zdGlja3ktY29sdW1ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0tsQyw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQXdDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGtEQUFpQjs7O0lBS3pELDhCQUF1QztJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRCw4QkFBd0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFLN0QsOEJBQXVDO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBQ25ELDhCQUF3QztJQUFBLFlBQW1CO0lBQUEsaUJBQUs7OztJQUF4QixlQUFtQjtJQUFuQixvREFBbUI7OztJQUszRCw4QkFBdUM7SUFBQSx3QkFBTztJQUFBLGlCQUFLOzs7SUFDbkQsOEJBQXdDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSzs7O0lBQXhCLGVBQW1CO0lBQW5CLG9EQUFtQjs7O0lBSzNELHlCQUEyQzs7O0lBQzNDLDhCQUNFO0lBQUEsZ0NBQVU7SUFBQSx5QkFBUztJQUFBLGlCQUFXO0lBQ2hDLGlCQUFLOzs7SUFHUCx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7Ozs7O0FEMUJ0RSxNQUFNLE9BQU8seUJBQXlCO0lBTHRDO1FBTUUscUJBQWdCLEdBQ1osQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDckYsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOztrR0FDWSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1Z0Qyw4QkFDRTtRQUFBLGdDQUVFO1FBQ0EsZ0NBQ0U7UUFBQSx3RUFBdUM7UUFDdkMsd0VBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSx3RUFBdUM7UUFDdkMsd0VBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSx3RUFBdUM7UUFDdkMsMEVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSwwRUFBdUM7UUFDdkMsMEVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSwwRUFBc0M7UUFDdEMsMEVBQ0U7UUFFSiwwQkFBZTtRQUVmLDBFQUF1RDtRQUN2RCwyRUFBNkQ7UUFDL0QsaUJBQVE7UUFDVixpQkFBTTs7UUFyQ2EsZUFBeUI7UUFBekIsMkNBQXlCO1FBa0NyQixnQkFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDs7a0REMUJuRCx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2dCQUMvQyxXQUFXLEVBQUUsbUNBQW1DO2FBQ2pEOzs7O0lBRUMscURBQ3FGOztJQUNyRiwrQ0FBMEI7Ozs7O0FBRzVCLHFDQUtDOzs7SUFKQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOzs7TUFHWCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBzdGlja3kgY29sdW1uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1zdGlja3ktY29sdW1ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXN0aWNreS1jb2x1bW5zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtc3RpY2t5LWNvbHVtbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTdGlja3lDb2x1bW5zRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnMgPVxuICAgICAgWyduYW1lJywgJ3Bvc2l0aW9uJywgJ3dlaWdodCcsICdzeW1ib2wnLCAncG9zaXRpb24nLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdzdGFyJ107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lciBtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuXG4gICAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIiBzdGlja3k+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFN0YXIgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3RhclwiIHN0aWNreUVuZD5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+PC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+XG4gICAgICAgIDxtYXQtaWNvbj5tb3JlX3ZlcnQ8L21hdC1pY29uPlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgPC90YWJsZT5cbjwvZGl2PlxuIl19