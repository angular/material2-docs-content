/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
function CdkTableBasicFlexExample_cdk_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-header-cell");
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function CdkTableBasicFlexExample_cdk_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function CdkTableBasicFlexExample_cdk_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-header-cell");
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function CdkTableBasicFlexExample_cdk_cell_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function CdkTableBasicFlexExample_cdk_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-header-cell");
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function CdkTableBasicFlexExample_cdk_cell_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function CdkTableBasicFlexExample_cdk_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-header-cell");
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function CdkTableBasicFlexExample_cdk_cell_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function CdkTableBasicFlexExample_cdk_header_row_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cdk-header-row");
} }
function CdkTableBasicFlexExample_cdk_row_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cdk-row");
} }
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
    PeriodicElement.prototype.symbol;
    /** @type {?} */
    PeriodicElement.prototype.weight;
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
 * \@title Basic use of `<cdk-table>` (uses display flex)
 */
export class CdkTableBasicFlexExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
}
CdkTableBasicFlexExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-table-basic-flex-example',
                styleUrls: ['cdk-table-basic-flex-example.css'],
                templateUrl: 'cdk-table-basic-flex-example.html',
            },] },
];
/** @nocollapse */ CdkTableBasicFlexExample.ɵfac = function CdkTableBasicFlexExample_Factory(t) { return new (t || CdkTableBasicFlexExample)(); };
/** @nocollapse */ CdkTableBasicFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTableBasicFlexExample, selectors: [["cdk-table-basic-flex-example"]], decls: 15, vars: 3, consts: [[3, "dataSource"], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"]], template: function CdkTableBasicFlexExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, CdkTableBasicFlexExample_cdk_header_cell_2_Template, 2, 0, "cdk-header-cell", 2);
        i0.ɵɵtemplate(3, CdkTableBasicFlexExample_cdk_cell_3_Template, 2, 1, "cdk-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, CdkTableBasicFlexExample_cdk_header_cell_5_Template, 2, 0, "cdk-header-cell", 2);
        i0.ɵɵtemplate(6, CdkTableBasicFlexExample_cdk_cell_6_Template, 2, 1, "cdk-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, CdkTableBasicFlexExample_cdk_header_cell_8_Template, 2, 0, "cdk-header-cell", 2);
        i0.ɵɵtemplate(9, CdkTableBasicFlexExample_cdk_cell_9_Template, 2, 1, "cdk-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, CdkTableBasicFlexExample_cdk_header_cell_11_Template, 2, 0, "cdk-header-cell", 2);
        i0.ɵɵtemplate(12, CdkTableBasicFlexExample_cdk_cell_12_Template, 2, 1, "cdk-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, CdkTableBasicFlexExample_cdk_header_row_13_Template, 1, 0, "cdk-header-row", 7);
        i0.ɵɵtemplate(14, CdkTableBasicFlexExample_cdk_row_14_Template, 1, 0, "cdk-row", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.CdkTable, i1.CdkColumnDef, i1.CdkHeaderCellDef, i1.CdkCellDef, i1.CdkHeaderRowDef, i1.CdkRowDef, i1.CdkHeaderCell, i1.CdkCell, i1.CdkHeaderRow, i1.CdkRow], styles: ["cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ncdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTableBasicFlexExample, [{
        type: Component,
        args: [{
                selector: 'cdk-table-basic-flex-example',
                styleUrls: ['cdk-table-basic-flex-example.css'],
                templateUrl: 'cdk-table-basic-flex-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkTableBasicFlexExample.prototype.displayedColumns;
    /** @type {?} */
    CdkTableBasicFlexExample.prototype.dataSource;
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /**
         * Stream of data that is provided to the table.
         */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     * @return {?}
     */
    connect() {
        return this.data;
    }
    /**
     * @return {?}
     */
    disconnect() { }
}
if (false) {
    /**
     * Stream of data that is provided to the table.
     * @type {?}
     */
    ExampleDataSource.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90YWJsZS9jZGstdGFibGUtYmFzaWMtZmxleC9jZGstdGFibGUtYmFzaWMtZmxleC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RhYmxlL2Nkay10YWJsZS1iYXNpYy1mbGV4L2Nkay10YWJsZS1iYXNpYy1mbGV4LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7OztJQ0M3Qyx1Q0FBb0M7SUFBQSxxQkFBSTtJQUFBLGlCQUFrQjs7O0lBQzFELGdDQUFxQztJQUFBLFlBQXFCO0lBQUEsaUJBQVc7OztJQUFoQyxlQUFxQjtJQUFyQixxREFBcUI7OztJQUsxRCx1Q0FBb0M7SUFBQSxzQkFBSztJQUFBLGlCQUFrQjs7O0lBQzNELGdDQUFxQztJQUFBLFlBQWlCO0lBQUEsaUJBQVc7OztJQUE1QixlQUFpQjtJQUFqQixpREFBaUI7OztJQUt0RCx1Q0FBb0M7SUFBQSx3QkFBTztJQUFBLGlCQUFrQjs7O0lBQzdELGdDQUFxQztJQUFBLFlBQW1CO0lBQUEsaUJBQVc7OztJQUE5QixlQUFtQjtJQUFuQixtREFBbUI7OztJQUt4RCx1Q0FBb0M7SUFBQSx3QkFBTztJQUFBLGlCQUFrQjs7O0lBQzdELGdDQUFxQztJQUFBLFlBQW1CO0lBQUEsaUJBQVc7OztJQUE5QixlQUFtQjtJQUFuQixtREFBbUI7OztJQUcxRCxpQ0FBcUU7OztJQUNyRSwwQkFBb0U7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QUksZUFBZSxDQUFvQixZQUFZLENBQUMsQ0FBQztJQVE5RCxDQUFDOzs7OztJQUxDLE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFVBQVUsS0FBSSxDQUFDO0NBQ2hCOzs7Ozs7SUFSQyxpQ0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbiAgd2VpZ2h0OiBudW1iZXI7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIGA8Y2RrLXRhYmxlPmAgKHVzZXMgZGlzcGxheSBmbGV4KVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdGFibGUtYmFzaWMtZmxleC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10YWJsZS1iYXNpYy1mbGV4LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGFibGVCYXNpY0ZsZXhFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG59XG5cbi8qKlxuICogRGF0YSBzb3VyY2UgdG8gcHJvdmlkZSB3aGF0IGRhdGEgc2hvdWxkIGJlIHJlbmRlcmVkIGluIHRoZSB0YWJsZS4gTm90ZSB0aGF0IHRoZSBkYXRhIHNvdXJjZVxuICogY2FuIHJldHJpZXZlIGl0cyBkYXRhIGluIGFueSB3YXkuIEluIHRoaXMgY2FzZSwgdGhlIGRhdGEgc291cmNlIGlzIHByb3ZpZGVkIGEgcmVmZXJlbmNlXG4gKiB0byBhIGNvbW1vbiBkYXRhIGJhc2UsIEV4YW1wbGVEYXRhYmFzZS4gSXQgaXMgbm90IHRoZSBkYXRhIHNvdXJjZSdzIHJlc3BvbnNpYmlsaXR5IHRvIG1hbmFnZVxuICogdGhlIHVuZGVybHlpbmcgZGF0YS4gSW5zdGVhZCwgaXQgb25seSBuZWVkcyB0byB0YWtlIHRoZSBkYXRhIGFuZCBzZW5kIHRoZSB0YWJsZSBleGFjdGx5IHdoYXRcbiAqIHNob3VsZCBiZSByZW5kZXJlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcbiAgLyoqIFN0cmVhbSBvZiBkYXRhIHRoYXQgaXMgcHJvdmlkZWQgdG8gdGhlIHRhYmxlLiAqL1xuICBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxQZXJpb2RpY0VsZW1lbnRbXT4oRUxFTUVOVF9EQVRBKTtcblxuICAvKiogQ29ubmVjdCBmdW5jdGlvbiBjYWxsZWQgYnkgdGhlIHRhYmxlIHRvIHJldHJpZXZlIG9uZSBzdHJlYW0gY29udGFpbmluZyB0aGUgZGF0YSB0byByZW5kZXIuICovXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBkaXNjb25uZWN0KCkge31cbn1cbiIsIjxjZGstdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiPlxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5vLiA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8Y2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBOYW1lIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFdlaWdodCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFN5bWJvbCA8L2Nkay1oZWFkZXItY2VsbD5cbiAgICA8Y2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC9jZGstY2VsbD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPGNkay1oZWFkZXItcm93ICpjZGtIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC9jZGstaGVhZGVyLXJvdz5cbiAgPGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9jZGstcm93PlxuPC9jZGstdGFibGU+XG4iXX0=