/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-row-context/table-row-context-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
function TableRowContextExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " $implicit ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r164 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", data_r164, " ");
} }
function TableRowContextExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " index ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const index_r165 = ctx.index;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", index_r165, " ");
} }
function TableRowContextExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " count ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const count_r166 = ctx.count;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", count_r166, " ");
} }
function TableRowContextExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " first ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const first_r167 = ctx.first;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", first_r167, " ");
} }
function TableRowContextExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " last ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const last_r168 = ctx.last;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", last_r168, " ");
} }
function TableRowContextExample_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " even ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const even_r169 = ctx.even;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", even_r169, " ");
} }
function TableRowContextExample_th_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, " odd ");
    i0.ɵɵelementEnd();
} }
function TableRowContextExample_td_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const odd_r170 = ctx.odd;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", odd_r170, " ");
} }
function TableRowContextExample_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableRowContextExample_tr_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
/**
 * \@title Table showing each row context properties.
 */
export class TableRowContextExample {
    constructor() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
}
TableRowContextExample.decorators = [
    { type: Component, args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            },] },
];
/** @nocollapse */ TableRowContextExample.ɵfac = function TableRowContextExample_Factory(t) { return new (t || TableRowContextExample)(); };
/** @nocollapse */ TableRowContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableRowContextExample, selectors: [["table-row-context-example"]], decls: 24, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "$implicit"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "index"], ["matColumnDef", "count"], ["matColumnDef", "first"], ["matColumnDef", "last"], ["matColumnDef", "even"], ["matColumnDef", "odd"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableRowContextExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRowContextExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRowContextExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRowContextExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRowContextExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRowContextExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRowContextExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRowContextExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRowContextExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 7);
        i0.ɵɵtemplate(14, TableRowContextExample_th_14_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(15, TableRowContextExample_td_15_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(16, 8);
        i0.ɵɵtemplate(17, TableRowContextExample_th_17_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(18, TableRowContextExample_td_18_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(19, 9);
        i0.ɵɵtemplate(20, TableRowContextExample_th_20_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(21, TableRowContextExample_td_21_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(22, TableRowContextExample_tr_22_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(23, TableRowContextExample_tr_23_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.data);
        i0.ɵɵadvance(22);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableRowContextExample, [{
        type: Component,
        args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableRowContextExample.prototype.displayedColumns;
    /** @type {?} */
    TableRowContextExample.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJvdy1jb250ZXh0L3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctY29udGV4dC90YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDR3BDLDhCQUF1QztJQUFBLDJCQUFVO0lBQUEsaUJBQUs7OztJQUN0RCw4QkFBcUM7SUFBQSxZQUFTO0lBQUEsaUJBQUs7OztJQUFkLGVBQVM7SUFBVCwwQ0FBUzs7O0lBSzlDLDhCQUF1QztJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUNsRCw4QkFBOEM7SUFBQSxZQUFVO0lBQUEsaUJBQUs7OztJQUFmLGVBQVU7SUFBViwyQ0FBVTs7O0lBS3hELDhCQUF1QztJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUNsRCw4QkFBOEM7SUFBQSxZQUFVO0lBQUEsaUJBQUs7OztJQUFmLGVBQVU7SUFBViwyQ0FBVTs7O0lBS3hELDhCQUF1QztJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUNsRCw4QkFBOEM7SUFBQSxZQUFVO0lBQUEsaUJBQUs7OztJQUFmLGVBQVU7SUFBViwyQ0FBVTs7O0lBS3hELDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFTO0lBQUEsaUJBQUs7OztJQUFkLGVBQVM7SUFBVCwwQ0FBUzs7O0lBS3JELDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFTO0lBQUEsaUJBQUs7OztJQUFkLGVBQVM7SUFBVCwwQ0FBUzs7O0lBS3JELDhCQUF1QztJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRCw4QkFBMEM7SUFBQSxZQUFRO0lBQUEsaUJBQUs7OztJQUFiLGVBQVE7SUFBUix5Q0FBUTs7O0lBR3BELHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7Ozs7QURsQ3BFLE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzdGLFNBQUksR0FBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMxRDs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDOzs0RkFDWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1ZuQyxnQ0FDRTtRQUNBLGdDQUNFO1FBQUEscUVBQXVDO1FBQ3ZDLHFFQUFxQztRQUN2QywwQkFBZTtRQUdmLGdDQUNFO1FBQUEscUVBQXVDO1FBQ3ZDLHFFQUE4QztRQUNoRCwwQkFBZTtRQUdmLGdDQUNFO1FBQUEscUVBQXVDO1FBQ3ZDLHFFQUE4QztRQUNoRCwwQkFBZTtRQUdmLGlDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUE4QztRQUNoRCwwQkFBZTtRQUdmLGlDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUE0QztRQUM5QywwQkFBZTtRQUdmLGlDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUE0QztRQUM5QywwQkFBZTtRQUdmLGlDQUNFO1FBQUEsdUVBQXVDO1FBQ3ZDLHVFQUEwQztRQUM1QywwQkFBZTtRQUVmLHdFQUF1RDtRQUN2RCx3RUFBNkQ7UUFDL0QsaUJBQVE7O1FBN0NTLHFDQUFtQjtRQTJDZixnQkFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDs7a0REbENqRCxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2dCQUM1QyxXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDOzs7O0lBRUMsa0RBQTZGOztJQUM3RixzQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHNob3dpbmcgZWFjaCByb3cgY29udGV4dCBwcm9wZXJ0aWVzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1yb3ctY29udGV4dC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSb3dDb250ZXh0RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyckaW1wbGljaXQnLCAnaW5kZXgnLCAnY291bnQnLCAnZmlyc3QnLCAnbGFzdCcsICdldmVuJywgJ29kZCddO1xuICBkYXRhOiBzdHJpbmdbXSA9IFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnXTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCIkaW1wbGljaXRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiAkaW1wbGljaXQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YVwiPiB7e2RhdGF9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpbmRleFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IGluZGV4IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGluZGV4ID0gaW5kZXhcIj4ge3tpbmRleH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvdW50XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gY291bnQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgY291bnQgPSBjb3VudFwiPiB7e2NvdW50fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZmlyc3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBmaXJzdCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBmaXJzdCA9IGZpcnN0XCI+IHt7Zmlyc3R9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJsYXN0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gbGFzdCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBsYXN0ID0gbGFzdFwiPiB7e2xhc3R9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJldmVuXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gZXZlbiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBldmVuID0gZXZlblwiPiB7e2V2ZW59fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJvZGRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBvZGQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgb2RkID0gb2RkXCI+IHt7b2RkfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=