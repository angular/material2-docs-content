/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/table/cdk-table-basic-flex/cdk-table-basic-flex-example.ts
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
let CdkTableBasicFlexExample = /** @class */ (() => {
    /**
     * \@title Basic use of `<cdk-table>` (uses display flex)
     */
    class CdkTableBasicFlexExample {
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
    return CdkTableBasicFlexExample;
})();
export { CdkTableBasicFlexExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay90YWJsZS9jZGstdGFibGUtYmFzaWMtZmxleC9jZGstdGFibGUtYmFzaWMtZmxleC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RhYmxlL2Nkay10YWJsZS1iYXNpYy1mbGV4L2Nkay10YWJsZS1iYXNpYy1mbGV4LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7Ozs7SUNDN0MsdUNBQW9DO0lBQUEscUJBQUk7SUFBQSxpQkFBa0I7OztJQUMxRCxnQ0FBcUM7SUFBQSxZQUFxQjtJQUFBLGlCQUFXOzs7SUFBaEMsZUFBcUI7SUFBckIscURBQXFCOzs7SUFLMUQsdUNBQW9DO0lBQUEsc0JBQUs7SUFBQSxpQkFBa0I7OztJQUMzRCxnQ0FBcUM7SUFBQSxZQUFpQjtJQUFBLGlCQUFXOzs7SUFBNUIsZUFBaUI7SUFBakIsaURBQWlCOzs7SUFLdEQsdUNBQW9DO0lBQUEsd0JBQU87SUFBQSxpQkFBa0I7OztJQUM3RCxnQ0FBcUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFXOzs7SUFBOUIsZUFBbUI7SUFBbkIsbURBQW1COzs7SUFLeEQsdUNBQW9DO0lBQUEsd0JBQU87SUFBQSxpQkFBa0I7OztJQUM3RCxnQ0FBcUM7SUFBQSxZQUFtQjtJQUFBLGlCQUFXOzs7SUFBOUIsZUFBbUI7SUFBbkIsbURBQW1COzs7SUFHMUQsaUNBQXFFOzs7SUFDckUsMEJBQW9F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QUEyQjtJQUFsRTs7Ozs7UUFFRSxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7Ozs7O0lBTEMsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEI7Ozs7OztJQVJDLGlDQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xuICB3ZWlnaHQ6IG51bWJlcjtcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgYDxjZGstdGFibGU+YCAodXNlcyBkaXNwbGF5IGZsZXgpXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay10YWJsZS1iYXNpYy1mbGV4LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRhYmxlLWJhc2ljLWZsZXgtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdGFibGUtYmFzaWMtZmxleC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUYWJsZUJhc2ljRmxleEV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPGNkay10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTm8uIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvY2RrLWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDxjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC9jZGstaGVhZGVyLWNlbGw+XG4gICAgPGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvY2RrLWhlYWRlci1jZWxsPlxuICAgIDxjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L2Nkay1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8Y2RrLWhlYWRlci1yb3cgKmNka0hlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L2Nkay1oZWFkZXItcm93PlxuICA8Y2RrLXJvdyAqY2RrUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L2Nkay1yb3c+XG48L2Nkay10YWJsZT5cbiJdfQ==