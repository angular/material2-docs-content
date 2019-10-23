/**
 * @fileoverview added by tsickle
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
/*@__PURE__*/ i0.ɵsetClassMetadata(TableRowContextExample, [{
        type: Component,
        args: [{
                selector: 'table-row-context-example',
                styleUrls: ['table-row-context-example.css'],
                templateUrl: 'table-row-context-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TableRowContextExample.prototype.displayedColumns;
    /** @type {?} */
    TableRowContextExample.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctY29udGV4dC90YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJvdy1jb250ZXh0L3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0dwQyw4QkFBdUM7SUFBQSwyQkFBVTtJQUFBLGlCQUFLOzs7SUFDdEQsOEJBQXFDO0lBQUEsWUFBUztJQUFBLGlCQUFLOzs7SUFBZCxlQUFTO0lBQVQsMENBQVM7OztJQUs5Qyw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFDbEQsOEJBQThDO0lBQUEsWUFBVTtJQUFBLGlCQUFLOzs7SUFBZixlQUFVO0lBQVYsMkNBQVU7OztJQUt4RCw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFDbEQsOEJBQThDO0lBQUEsWUFBVTtJQUFBLGlCQUFLOzs7SUFBZixlQUFVO0lBQVYsMkNBQVU7OztJQUt4RCw4QkFBdUM7SUFBQSx1QkFBTTtJQUFBLGlCQUFLOzs7SUFDbEQsOEJBQThDO0lBQUEsWUFBVTtJQUFBLGlCQUFLOzs7SUFBZixlQUFVO0lBQVYsMkNBQVU7OztJQUt4RCw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQTRDO0lBQUEsWUFBUztJQUFBLGlCQUFLOzs7SUFBZCxlQUFTO0lBQVQsMENBQVM7OztJQUtyRCw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQTRDO0lBQUEsWUFBUztJQUFBLGlCQUFLOzs7SUFBZCxlQUFTO0lBQVQsMENBQVM7OztJQUtyRCw4QkFBdUM7SUFBQSxxQkFBSTtJQUFBLGlCQUFLOzs7SUFDaEQsOEJBQTBDO0lBQUEsWUFBUTtJQUFBLGlCQUFLOzs7SUFBYixlQUFRO0lBQVIseUNBQVE7OztJQUdwRCx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7Ozs7O0FEbENwRSxNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RixTQUFJLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDMUQ7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsV0FBVyxFQUFFLGdDQUFnQzthQUM5Qzs7NEZBQ1ksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNWbkMsZ0NBQ0U7UUFDQSxnQ0FDRTtRQUFBLHFFQUF1QztRQUN2QyxxRUFBcUM7UUFDdkMsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLHFFQUF1QztRQUN2QyxxRUFBOEM7UUFDaEQsMEJBQWU7UUFHZixnQ0FDRTtRQUFBLHFFQUF1QztRQUN2QyxxRUFBOEM7UUFDaEQsMEJBQWU7UUFHZixpQ0FDRTtRQUFBLHVFQUF1QztRQUN2Qyx1RUFBOEM7UUFDaEQsMEJBQWU7UUFHZixpQ0FDRTtRQUFBLHVFQUF1QztRQUN2Qyx1RUFBNEM7UUFDOUMsMEJBQWU7UUFHZixpQ0FDRTtRQUFBLHVFQUF1QztRQUN2Qyx1RUFBNEM7UUFDOUMsMEJBQWU7UUFHZixpQ0FDRTtRQUFBLHVFQUF1QztRQUN2Qyx1RUFBMEM7UUFDNUMsMEJBQWU7UUFFZix3RUFBdUQ7UUFDdkQsd0VBQTZEO1FBQy9ELGlCQUFROztRQTdDUyxxQ0FBbUI7UUEyQ2YsZ0JBQW1DO1FBQW5DLHNEQUFtQztRQUMxQyxlQUFnRDtRQUFoRCx1REFBZ0Q7O21DRGxDakQsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztnQkFDNUMsV0FBVyxFQUFFLGdDQUFnQzthQUM5Qzs7OztJQUVDLGtEQUE2Rjs7SUFDN0Ysc0NBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBzaG93aW5nIGVhY2ggcm93IGNvbnRleHQgcHJvcGVydGllcy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtcm93LWNvbnRleHQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlUm93Q29udGV4dEV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnJGltcGxpY2l0JywgJ2luZGV4JywgJ2NvdW50JywgJ2ZpcnN0JywgJ2xhc3QnLCAnZXZlbicsICdvZGQnXTtcbiAgZGF0YTogc3RyaW5nW10gPSBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJ107XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiJGltcGxpY2l0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gJGltcGxpY2l0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGRhdGFcIj4ge3tkYXRhfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaW5kZXhcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBpbmRleCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBpbmRleCA9IGluZGV4XCI+IHt7aW5kZXh9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb3VudFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IGNvdW50IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGNvdW50ID0gY291bnRcIj4ge3tjb3VudH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZpcnN0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gZmlyc3QgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZmlyc3QgPSBmaXJzdFwiPiB7e2ZpcnN0fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibGFzdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IGxhc3QgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgbGFzdCA9IGxhc3RcIj4ge3tsYXN0fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXZlblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IGV2ZW4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZXZlbiA9IGV2ZW5cIj4ge3tldmVufX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwib2RkXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gb2RkIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IG9kZCA9IG9kZFwiPiB7e29kZH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19