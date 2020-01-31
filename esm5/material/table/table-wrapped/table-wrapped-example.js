import { DataSource } from '@angular/cdk/collections';
import { Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/material/table";
var _c0 = ["sort"];
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
    var element_r330 = ctx.$implicit;
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
    var element_r338 = ctx.$implicit;
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
    var element_r339 = ctx.$implicit;
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
    var element_r340 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r340.symbol, " ");
} }
var _c1 = ["*"];
var ELEMENT_DATA = [
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
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
var TableWrappedExample = /** @class */ (function () {
    function TableWrappedExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    TableWrappedExample.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
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
    TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
    TableWrappedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
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
    return TableWrappedExample;
}());
export { TableWrappedExample };
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
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
var WrapperTable = /** @class */ (function () {
    function WrapperTable() {
    }
    WrapperTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.columnDefs.forEach(function (columnDef) { return _this.table.addColumnDef(columnDef); });
        this.rowDefs.forEach(function (rowDef) { return _this.table.addRowDef(rowDef); });
        this.headerRowDefs.forEach(function (headerRowDef) { return _this.table.addHeaderRowDef(headerRowDef); });
    };
    WrapperTable.decorators = [
        { type: Component, args: [{
                    selector: 'wrapper-table',
                    templateUrl: 'wrapper-table.html',
                    styles: ["\n    table {\n      width: 100%;\n    }\n  "]
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
    WrapperTable.ɵfac = function WrapperTable_Factory(t) { return new (t || WrapperTable)(); };
    WrapperTable.ɵcmp = i0.ɵɵdefineComponent({ type: WrapperTable, selectors: [["wrapper-table"]], contentQueries: function WrapperTable_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
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
    return WrapperTable;
}());
export { WrapperTable };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WrapperTable, [{
        type: Component,
        args: [{
                selector: 'wrapper-table',
                templateUrl: 'wrapper-table.html',
                styles: ["\n    table {\n      width: 100%;\n    }\n  "]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLGtCQUFrQixFQUNuQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNiN0IsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDZCQUF3QztJQUFBLFlBQWlCO0lBQUEsaUJBQUs7OztJQUF0QixlQUFpQjtJQUFqQixrREFBaUI7OztJQUkzRCx3QkFBNEQ7OztJQUM1RCx5QkFBbUU7OztJQ0xqRSw2QkFBdUQ7SUFBQSxxQkFBSTtJQUFBLGlCQUFLOzs7SUFDaEUsNkJBQXdDO0lBQUEsWUFBcUI7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O3dDQUNULFlBQVk7Ozs7Ozs7aUNBRWxCLFFBQVE7Ozs7OztZRTVFckIsZ0NBQ0U7WUFBQSxrQkFBWTtZQUdaLGdDQUNFO1lBQUEsMkRBQXVEO1lBQ3ZELDJEQUF3QztZQUMxQywwQkFBZTtZQUdmLGdDQUNFO1lBQUEsMkRBQXVEO1lBQ3ZELDJEQUF3QztZQUMxQywwQkFBZTtZQUdmLGdDQUNFO1lBQUEsMkRBQXVDO1lBQ3ZDLDZEQUF3QztZQUMxQywwQkFBZTtZQUNqQixpQkFBUTs7WUFwQlMsMkNBQXlCOzt1QkZBMUM7Q0F1RkMsQUF6QkQsSUF5QkM7U0FoQlksWUFBWTtrREFBWixZQUFZO2NBVHhCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsV0FBVyxFQUFFLG9CQUFvQjtnQkFDakMsTUFBTSxFQUFFLENBQUMsOENBSVIsQ0FBQzthQUNIOztrQkFFRSxlQUFlO21CQUFDLGVBQWU7O2tCQUMvQixlQUFlO21CQUFDLFNBQVM7O2tCQUN6QixlQUFlO21CQUFDLFlBQVk7O2tCQUU1QixTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O2tCQUVsQyxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7XG4gIE1hdENvbHVtbkRlZixcbiAgTWF0SGVhZGVyUm93RGVmLFxuICBNYXRSb3dEZWYsXG4gIE1hdFRhYmxlLFxuICBNYXRUYWJsZURhdGFTb3VyY2Vcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIGV4YW1wbGUgdGhhdCBzaG93cyBob3cgdG8gd3JhcCBhIHRhYmxlIGNvbXBvbmVudCBmb3IgZGVmaW5pdGlvbiBhbmQgYmVoYXZpb3IgcmV1c2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS13cmFwcGVkLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtd3JhcHBlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVdyYXBwZWRFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+KEVMRU1FTlRfREFUQSk7XG5cbiAgQFZpZXdDaGlsZCgnc29ydCcsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG59XG5cbi8qKlxuICogVGFibGUgY29tcG9uZW50IHRoYXQgYWNjZXB0cyBjb2x1bW4gYW5kIHJvdyBkZWZpbml0aW9ucyBpbiBpdHMgY29udGVudCB0byBiZSByZWdpc3RlcmVkIHRvIHRoZVxuICogdGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyYXBwZXItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ3dyYXBwZXItdGFibGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFdyYXBwZXJUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1hdEhlYWRlclJvd0RlZikgaGVhZGVyUm93RGVmczogUXVlcnlMaXN0PE1hdEhlYWRlclJvd0RlZj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Um93RGVmKSByb3dEZWZzOiBRdWVyeUxpc3Q8TWF0Um93RGVmPFQ+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRDb2x1bW5EZWYpIGNvbHVtbkRlZnM6IFF1ZXJ5TGlzdDxNYXRDb2x1bW5EZWY+O1xuXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHtzdGF0aWM6IHRydWV9KSB0YWJsZTogTWF0VGFibGU8VD47XG5cbiAgQElucHV0KCkgY29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5EZWZzLmZvckVhY2goY29sdW1uRGVmID0+IHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKGNvbHVtbkRlZikpO1xuICAgIHRoaXMucm93RGVmcy5mb3JFYWNoKHJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZFJvd0RlZihyb3dEZWYpKTtcbiAgICB0aGlzLmhlYWRlclJvd0RlZnMuZm9yRWFjaChoZWFkZXJSb3dEZWYgPT4gdGhpcy50YWJsZS5hZGRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmKSk7XG4gIH1cbn1cbiIsIjx3cmFwcGVyLXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbY29sdW1uc109XCJkaXNwbGF5ZWRDb2x1bW5zXCJcbiAgICAgICAgICAgICAgIG1hdFNvcnQgI3NvcnQ9XCJtYXRTb3J0XCI+XG4gIDwhLS0gQ3VzdG9tIGNvbHVtbiBkZWZpbml0aW9uIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB3cmFwcGVyIHRhYmxlLiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDdXN0b20gcm93IGRlZmluaXRpb25zIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB3cmFwcGVyIHRhYmxlLiAtLT5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7IFwiPjwvdHI+XG48L3dyYXBwZXItdGFibGU+XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29sb3IgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdGFibGU+XG4iXX0=