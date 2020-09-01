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
    const element_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r5.name, " ");
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
    const element_r6 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r6.position, " ");
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
    const element_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r7.weight, " ");
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
    const element_r8 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r8.symbol, " ");
} }
const _c1 = ["*"];
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
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.ɵfac = function TableWrappedExample_Factory(t) { return new (t || TableWrappedExample)(); };
TableWrappedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableWrappedExample, selectors: [["table-wrapped-example"]], viewQuery: function TableWrappedExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
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
            args: ['sort']
        }] }); })();
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsUUFBUSxFQUNSLGtCQUFrQixFQUNuQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNiN0IsNkJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDZCQUF3QztJQUFBLFlBQWlCO0lBQUEsaUJBQUs7OztJQUF0QixlQUFpQjtJQUFqQixnREFBaUI7OztJQUkzRCx3QkFBNEQ7OztJQUM1RCx5QkFBbUU7OztJQ0xqRSw2QkFBdUQ7SUFBQSxxQkFBSTtJQUFBLGlCQUFLOzs7SUFDaEUsNkJBQXdDO0lBQUEsWUFBcUI7SUFBQSxpQkFBSzs7O0lBQTFCLGVBQXFCO0lBQXJCLG9EQUFxQjs7O0lBSzdE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QVU7a0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7XG4gIE1hdENvbHVtbkRlZixcbiAgTWF0SGVhZGVyUm93RGVmLFxuICBNYXRSb3dEZWYsXG4gIE1hdFRhYmxlLFxuICBNYXRUYWJsZURhdGFTb3VyY2Vcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIGV4YW1wbGUgdGhhdCBzaG93cyBob3cgdG8gd3JhcCBhIHRhYmxlIGNvbXBvbmVudCBmb3IgZGVmaW5pdGlvbiBhbmQgYmVoYXZpb3IgcmV1c2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS13cmFwcGVkLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtd3JhcHBlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVdyYXBwZWRFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PihFTEVNRU5UX0RBVEEpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NvcnQnKSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxufVxuXG4vKipcbiAqIFRhYmxlIGNvbXBvbmVudCB0aGF0IGFjY2VwdHMgY29sdW1uIGFuZCByb3cgZGVmaW5pdGlvbnMgaW4gaXRzIGNvbnRlbnQgdG8gYmUgcmVnaXN0ZXJlZCB0byB0aGVcbiAqIHRhYmxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cmFwcGVyLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICd3cmFwcGVyLXRhYmxlLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBXcmFwcGVyVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRIZWFkZXJSb3dEZWYpIGhlYWRlclJvd0RlZnM6IFF1ZXJ5TGlzdDxNYXRIZWFkZXJSb3dEZWY+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdFJvd0RlZikgcm93RGVmczogUXVlcnlMaXN0PE1hdFJvd0RlZjxUPj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q29sdW1uRGVmKSBjb2x1bW5EZWZzOiBRdWVyeUxpc3Q8TWF0Q29sdW1uRGVmPjtcblxuICBAVmlld0NoaWxkKE1hdFRhYmxlLCB7c3RhdGljOiB0cnVlfSkgdGFibGU6IE1hdFRhYmxlPFQ+O1xuXG4gIEBJbnB1dCgpIGNvbHVtbnM6IHN0cmluZ1tdO1xuXG4gIEBJbnB1dCgpIGRhdGFTb3VyY2U6IERhdGFTb3VyY2U8VD47XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuY29sdW1uRGVmcy5mb3JFYWNoKGNvbHVtbkRlZiA9PiB0aGlzLnRhYmxlLmFkZENvbHVtbkRlZihjb2x1bW5EZWYpKTtcbiAgICB0aGlzLnJvd0RlZnMuZm9yRWFjaChyb3dEZWYgPT4gdGhpcy50YWJsZS5hZGRSb3dEZWYocm93RGVmKSk7XG4gICAgdGhpcy5oZWFkZXJSb3dEZWZzLmZvckVhY2goaGVhZGVyUm93RGVmID0+IHRoaXMudGFibGUuYWRkSGVhZGVyUm93RGVmKGhlYWRlclJvd0RlZikpO1xuICB9XG59XG4iLCI8d3JhcHBlci10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2NvbHVtbnNdPVwiZGlzcGxheWVkQ29sdW1uc1wiXG4gICAgICAgICAgICAgICBtYXRTb3J0ICNzb3J0PVwibWF0U29ydFwiPlxuICA8IS0tIEN1c3RvbSBjb2x1bW4gZGVmaW5pdGlvbiB0byBiZSBwcm92aWRlZCB0byB0aGUgd3JhcHBlciB0YWJsZS4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ3VzdG9tIHJvdyBkZWZpbml0aW9ucyB0byBiZSBwcm92aWRlZCB0byB0aGUgd3JhcHBlciB0YWJsZS4gLS0+XG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zOyBcIj48L3RyPlxuPC93cmFwcGVyLXRhYmxlPlxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvbG9yIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19