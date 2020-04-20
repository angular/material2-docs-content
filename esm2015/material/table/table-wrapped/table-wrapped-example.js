/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-wrapped/table-wrapped-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/collections';
import { Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/material/table";
const _c0 = ["sort"];
function TableWrappedExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableWrappedExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r334 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r334.name, " ");
} }
function TableWrappedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 9);
} }
function TableWrappedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
function WrapperTable_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r342 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r342.position, " ");
} }
function WrapperTable_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r343 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r343.weight, " ");
} }
function WrapperTable_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function WrapperTable_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r344 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r344.symbol, " ");
} }
const _c1 = ["*"];
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
/**
 * \@title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-wrapped-example',
                styleUrls: ['table-wrapped-example.css'],
                templateUrl: 'table-wrapped-example.html',
            },] },
];
TableWrappedExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort', { static: true },] }]
};
/** @nocollapse */ TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
/** @nocollapse */ TableWrappedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 7, vars: 4, consts: [["matSort", "", 3, "dataSource", "columns"], ["sort", "matSort"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableWrappedExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "wrapper-table", 0, 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableWrappedExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableWrappedExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(5, TableWrappedExample_tr_5_Template, 1, 0, "tr", 5);
        i0.ɵɵtemplate(6, TableWrappedExample_tr_6_Template, 1, 0, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("columns", ctx.displayedColumns);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: function () { return [WrapperTable, i1.MatSort, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow]; }, styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableWrappedExample, [{
        type: Component,
        args: [{
                selector: 'table-wrapped-example',
                styleUrls: ['table-wrapped-example.css'],
                templateUrl: 'table-wrapped-example.html',
            }]
    }], null, { sort: [{
            type: ViewChild,
            args: ['sort', { static: true }]
        }] }); })();
if (false) {
    /** @type {?} */
    TableWrappedExample.prototype.displayedColumns;
    /** @type {?} */
    TableWrappedExample.prototype.dataSource;
    /** @type {?} */
    TableWrappedExample.prototype.sort;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
export class WrapperTable {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnDefs.forEach((/**
         * @param {?} columnDef
         * @return {?}
         */
        columnDef => this.table.addColumnDef(columnDef)));
        this.rowDefs.forEach((/**
         * @param {?} rowDef
         * @return {?}
         */
        rowDef => this.table.addRowDef(rowDef)));
        this.headerRowDefs.forEach((/**
         * @param {?} headerRowDef
         * @return {?}
         */
        headerRowDef => this.table.addHeaderRowDef(headerRowDef)));
    }
}
WrapperTable.decorators = [
    { type: Component, args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: [`
    table {
      width: 100%;
    }
  `]
            },] },
];
WrapperTable.propDecorators = {
    headerRowDefs: [{ type: ContentChildren, args: [MatHeaderRowDef,] }],
    rowDefs: [{ type: ContentChildren, args: [MatRowDef,] }],
    columnDefs: [{ type: ContentChildren, args: [MatColumnDef,] }],
    table: [{ type: ViewChild, args: [MatTable, { static: true },] }],
    columns: [{ type: Input }],
    dataSource: [{ type: Input }]
};
/** @nocollapse */ WrapperTable.ɵfac = function WrapperTable_Factory(t) { return new (t || WrapperTable)(); };
/** @nocollapse */ WrapperTable.ɵcmp = i0.ɵɵdefineComponent({ type: WrapperTable, selectors: [["wrapper-table"]], contentQueries: function WrapperTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MatHeaderRowDef, false);
        i0.ɵɵcontentQuery(dirIndex, MatRowDef, false);
        i0.ɵɵcontentQuery(dirIndex, MatColumnDef, false);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headerRowDefs = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.rowDefs = _t);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.columnDefs = _t);
    } }, viewQuery: function WrapperTable_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(MatTable, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, inputs: { columns: "columns", dataSource: "dataSource" }, ngContentSelectors: _c1, decls: 11, vars: 1, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""]], template: function WrapperTable_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementContainerStart(2, 1);
        i0.ɵɵtemplate(3, WrapperTable_th_3_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(4, WrapperTable_td_4_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 4);
        i0.ɵɵtemplate(6, WrapperTable_th_6_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(7, WrapperTable_td_7_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 5);
        i0.ɵɵtemplate(9, WrapperTable_th_9_Template, 2, 0, "th", 6);
        i0.ɵɵtemplate(10, WrapperTable_td_10_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
    } }, directives: [i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderCell, i1.MatSortHeader, i2.MatCell], styles: ["table[_ngcontent-%COMP%] {\n      width: 100%;\n    }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WrapperTable, [{
        type: Component,
        args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: [`
    table {
      width: 100%;
    }
  `]
            }]
    }], null, { headerRowDefs: [{
            type: ContentChildren,
            args: [MatHeaderRowDef]
        }], rowDefs: [{
            type: ContentChildren,
            args: [MatRowDef]
        }], columnDefs: [{
            type: ContentChildren,
            args: [MatColumnDef]
        }], table: [{
            type: ViewChild,
            args: [MatTable, { static: true }]
        }], columns: [{
            type: Input
        }], dataSource: [{
            type: Input
        }] }); })();
if (false) {
    /** @type {?} */
    WrapperTable.prototype.headerRowDefs;
    /** @type {?} */
    WrapperTable.prototype.rowDefs;
    /** @type {?} */
    WrapperTable.prototype.columnDefs;
    /** @type {?} */
    WrapperTable.prototype.table;
    /** @type {?} */
    WrapperTable.prototype.columns;
    /** @type {?} */
    WrapperTable.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFDTCxZQUFZLEVBQ1osZUFBZSxFQUNmLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ25CLE1BQU0seUJBQXlCLENBQUM7Ozs7OztJQ2I3Qiw2QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsNkJBQXdDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGtEQUFpQjs7O0lBSTNELHdCQUE0RDs7O0lBQzVELHlCQUFtRTs7O0lDTGpFLDZCQUF1RDtJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRSw2QkFBd0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7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QVk7Ozs7Ozs7NkJBRWxCLFFBQVE7Ozs7OztRRTVFckIsZ0NBQ0U7UUFBQSxrQkFBWTtRQUdaLGdDQUNFO1FBQUEsMkRBQXVEO1FBQ3ZELDJEQUF3QztRQUMxQywwQkFBZTtRQUdmLGdDQUNFO1FBQUEsMkRBQXVEO1FBQ3ZELDJEQUF3QztRQUMxQywwQkFBZTtRQUdmLGdDQUNFO1FBQUEsMkRBQXVDO1FBQ3ZDLDZEQUF3QztRQUMxQywwQkFBZTtRQUNqQixpQkFBUTs7UUFwQlMsMkNBQXlCOztrREZ1RTdCLFlBQVk7Y0FUeEIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixXQUFXLEVBQUUsb0JBQW9CO2dCQUNqQyxNQUFNLEVBQUUsQ0FBQzs7OztHQUlSLENBQUM7YUFDSDs7a0JBRUUsZUFBZTttQkFBQyxlQUFlOztrQkFDL0IsZUFBZTttQkFBQyxTQUFTOztrQkFDekIsZUFBZTttQkFBQyxZQUFZOztrQkFFNUIsU0FBUzttQkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztrQkFFbEMsS0FBSzs7a0JBRUwsS0FBSzs7OztJQVJOLHFDQUE0RTs7SUFDNUUsK0JBQTZEOztJQUM3RCxrQ0FBbUU7O0lBRW5FLDZCQUF3RDs7SUFFeEQsK0JBQTJCOztJQUUzQixrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtcbiAgTWF0Q29sdW1uRGVmLFxuICBNYXRIZWFkZXJSb3dEZWYsXG4gIE1hdFJvd0RlZixcbiAgTWF0VGFibGUsXG4gIE1hdFRhYmxlRGF0YVNvdXJjZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgZXhhbXBsZSB0aGF0IHNob3dzIGhvdyB0byB3cmFwIGEgdGFibGUgY29tcG9uZW50IGZvciBkZWZpbml0aW9uIGFuZCBiZWhhdmlvciByZXVzZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtd3JhcHBlZC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS13cmFwcGVkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlV3JhcHBlZEV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4oRUxFTUVOVF9EQVRBKTtcblxuICBAVmlld0NoaWxkKCdzb3J0Jywge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBUYWJsZSBjb21wb25lbnQgdGhhdCBhY2NlcHRzIGNvbHVtbiBhbmQgcm93IGRlZmluaXRpb25zIGluIGl0cyBjb250ZW50IHRvIGJlIHJlZ2lzdGVyZWQgdG8gdGhlXG4gKiB0YWJsZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd3JhcHBlci10YWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnd3JhcHBlci10YWJsZS5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIHRhYmxlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgV3JhcHBlclRhYmxlPFQ+IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0SGVhZGVyUm93RGVmKSBoZWFkZXJSb3dEZWZzOiBRdWVyeUxpc3Q8TWF0SGVhZGVyUm93RGVmPjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRSb3dEZWYpIHJvd0RlZnM6IFF1ZXJ5TGlzdDxNYXRSb3dEZWY8VD4+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdENvbHVtbkRlZikgY29sdW1uRGVmczogUXVlcnlMaXN0PE1hdENvbHVtbkRlZj47XG5cbiAgQFZpZXdDaGlsZChNYXRUYWJsZSwge3N0YXRpYzogdHJ1ZX0pIHRhYmxlOiBNYXRUYWJsZTxUPjtcblxuICBASW5wdXQoKSBjb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtbkRlZnMuZm9yRWFjaChjb2x1bW5EZWYgPT4gdGhpcy50YWJsZS5hZGRDb2x1bW5EZWYoY29sdW1uRGVmKSk7XG4gICAgdGhpcy5yb3dEZWZzLmZvckVhY2gocm93RGVmID0+IHRoaXMudGFibGUuYWRkUm93RGVmKHJvd0RlZikpO1xuICAgIHRoaXMuaGVhZGVyUm93RGVmcy5mb3JFYWNoKGhlYWRlclJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZEhlYWRlclJvd0RlZihoZWFkZXJSb3dEZWYpKTtcbiAgfVxufVxuIiwiPHdyYXBwZXItdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtjb2x1bW5zXT1cImRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgICAgICAgICAgbWF0U29ydCAjc29ydD1cIm1hdFNvcnRcIj5cbiAgPCEtLSBDdXN0b20gY29sdW1uIGRlZmluaXRpb24gdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEN1c3RvbSByb3cgZGVmaW5pdGlvbnMgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1uczsgXCI+PC90cj5cbjwvd3JhcHBlci10YWJsZT5cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBXZWlnaHQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDb2xvciBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuPC90YWJsZT5cbiJdfQ==