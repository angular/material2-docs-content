/**
 * @fileoverview added by tsickle
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
    const element_r330 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r330.name, " ");
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
    const element_r338 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r338.position, " ");
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
    const element_r339 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r339.weight, " ");
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
    const element_r340 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r340.symbol, " ");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0lDYjdCLDZCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw2QkFBd0M7SUFBQSxZQUFpQjtJQUFBLGlCQUFLOzs7SUFBdEIsZUFBaUI7SUFBakIsa0RBQWlCOzs7SUFJM0Qsd0JBQTREOzs7SUFDNUQseUJBQW1FOzs7SUNMakUsNkJBQXVEO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ2hFLDZCQUF3QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixzREFBcUI7OztJ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WTs7Ozs7Ozs2QkFFbEIsUUFBUTs7Ozs7O1FFNUVyQixnQ0FDRTtRQUFBLGtCQUFZO1FBR1osZ0NBQ0U7UUFBQSwyREFBdUQ7UUFDdkQsMkRBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSwyREFBdUQ7UUFDdkQsMkRBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSwyREFBdUM7UUFDdkMsNkRBQXdDO1FBQzFDLDBCQUFlO1FBQ2pCLGlCQUFROztRQXBCUywyQ0FBeUI7O2tERnVFN0IsWUFBWTtjQVR4QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLE1BQU0sRUFBRSxDQUFDOzs7O0dBSVIsQ0FBQzthQUNIOztrQkFFRSxlQUFlO21CQUFDLGVBQWU7O2tCQUMvQixlQUFlO21CQUFDLFNBQVM7O2tCQUN6QixlQUFlO21CQUFDLFlBQVk7O2tCQUU1QixTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUVsQyxLQUFLOztrQkFFTCxLQUFLOzs7O0lBUk4scUNBQTRFOztJQUM1RSwrQkFBNkQ7O0lBQzdELGtDQUFtRTs7SUFFbkUsNkJBQXdEOztJQUV4RCwrQkFBMkI7O0lBRTNCLGtDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge1xuICBNYXRDb2x1bW5EZWYsXG4gIE1hdEhlYWRlclJvd0RlZixcbiAgTWF0Um93RGVmLFxuICBNYXRUYWJsZSxcbiAgTWF0VGFibGVEYXRhU291cmNlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBleGFtcGxlIHRoYXQgc2hvd3MgaG93IHRvIHdyYXAgYSB0YWJsZSBjb21wb25lbnQgZm9yIGRlZmluaXRpb24gYW5kIGJlaGF2aW9yIHJldXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS13cmFwcGVkLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtd3JhcHBlZC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXcmFwcGVkRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PihFTEVNRU5UX0RBVEEpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NvcnQnLCB7c3RhdGljOiB0cnVlfSkgc29ydDogTWF0U29ydDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxufVxuXG4vKipcbiAqIFRhYmxlIGNvbXBvbmVudCB0aGF0IGFjY2VwdHMgY29sdW1uIGFuZCByb3cgZGVmaW5pdGlvbnMgaW4gaXRzIGNvbnRlbnQgdG8gYmUgcmVnaXN0ZXJlZCB0byB0aGVcbiAqIHRhYmxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cmFwcGVyLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICd3cmFwcGVyLXRhYmxlLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBXcmFwcGVyVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRIZWFkZXJSb3dEZWYpIGhlYWRlclJvd0RlZnM6IFF1ZXJ5TGlzdDxNYXRIZWFkZXJSb3dEZWY+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdFJvd0RlZikgcm93RGVmczogUXVlcnlMaXN0PE1hdFJvd0RlZjxUPj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q29sdW1uRGVmKSBjb2x1bW5EZWZzOiBRdWVyeUxpc3Q8TWF0Q29sdW1uRGVmPjtcblxuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7c3RhdGljOiB0cnVlfSkgdGFibGU6IE1hdFRhYmxlPFQ+O1xuXG4gIEBJbnB1dCgpIGNvbHVtbnM6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD47XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY29sdW1uRGVmcy5mb3JFYWNoKGNvbHVtbkRlZiA9PiB0aGlzLnRhYmxlLmFkZENvbHVtbkRlZihjb2x1bW5EZWYpKTtcbiAgICB0aGlzLnJvd0RlZnMuZm9yRWFjaChyb3dEZWYgPT4gdGhpcy50YWJsZS5hZGRSb3dEZWYocm93RGVmKSk7XG4gICAgdGhpcy5oZWFkZXJSb3dEZWZzLmZvckVhY2goaGVhZGVyUm93RGVmID0+IHRoaXMudGFibGUuYWRkSGVhZGVyUm93RGVmKGhlYWRlclJvd0RlZikpO1xuICB9XG59XG4iLCI8d3JhcHBlci10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2NvbHVtbnNdPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICAgICBtYXRTb3J0ICNzb3J0PVwibWF0U29ydFwiPlxuICA8IS0tIEN1c3RvbSBjb2x1bW4gZGVmaW5pdGlvbiB0byBiZSBwcm92aWRlZCB0byB0aGUgd3JhcHBlciB0YWJsZS4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ3VzdG9tIHJvdyBkZWZpbml0aW9ucyB0byBiZSBwcm92aWRlZCB0byB0aGUgd3JhcHBlciB0YWJsZS4gLS0+XG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zOyBcIj48L3RyPlxuPC93cmFwcGVyLXRhYmxlPlxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvbG9yIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19