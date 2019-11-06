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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJvdy1jb250ZXh0L3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctY29udGV4dC90YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNHcEMsOEJBQXVDO0lBQUEsMkJBQVU7SUFBQSxpQkFBSzs7O0lBQ3RELDhCQUFxQztJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULDBDQUFTOzs7SUFLOUMsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xELDhCQUE4QztJQUFBLFlBQVU7SUFBQSxpQkFBSzs7O0lBQWYsZUFBVTtJQUFWLDJDQUFVOzs7SUFLeEQsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xELDhCQUE4QztJQUFBLFlBQVU7SUFBQSxpQkFBSzs7O0lBQWYsZUFBVTtJQUFWLDJDQUFVOzs7SUFLeEQsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xELDhCQUE4QztJQUFBLFlBQVU7SUFBQSxpQkFBSzs7O0lBQWYsZUFBVTtJQUFWLDJDQUFVOzs7SUFLeEQsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULDBDQUFTOzs7SUFLckQsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUE0QztJQUFBLFlBQVM7SUFBQSxpQkFBSzs7O0lBQWQsZUFBUztJQUFULDBDQUFTOzs7SUFLckQsOEJBQXVDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ2hELDhCQUEwQztJQUFBLFlBQVE7SUFBQSxpQkFBSzs7O0lBQWIsZUFBUTtJQUFSLHlDQUFROzs7SUFHcEQseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7OztBRGxDcEUsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLHFCQUFnQixHQUFhLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0YsU0FBSSxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzFEOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUM7OzRGQUNZLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDVm5DLGdDQUNFO1FBQ0EsZ0NBQ0U7UUFBQSxxRUFBdUM7UUFDdkMscUVBQXFDO1FBQ3ZDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSxxRUFBdUM7UUFDdkMscUVBQThDO1FBQ2hELDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSxxRUFBdUM7UUFDdkMscUVBQThDO1FBQ2hELDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQThDO1FBQ2hELDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQTRDO1FBQzlDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQTRDO1FBQzlDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQTBDO1FBQzVDLDBCQUFlO1FBRWYsd0VBQXVEO1FBQ3ZELHdFQUE2RDtRQUMvRCxpQkFBUTs7UUE3Q1MscUNBQW1CO1FBMkNmLGdCQUFtQztRQUFuQyxzREFBbUM7UUFDMUMsZUFBZ0Q7UUFBaEQsdURBQWdEOzttQ0RsQ2pELHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7Z0JBQzVDLFdBQVcsRUFBRSxnQ0FBZ0M7YUFDOUM7Ozs7SUFFQyxrREFBNkY7O0lBQzdGLHNDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgc2hvd2luZyBlYWNoIHJvdyBjb250ZXh0IHByb3BlcnRpZXMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0NvbnRleHRFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJyRpbXBsaWNpdCcsICdpbmRleCcsICdjb3VudCcsICdmaXJzdCcsICdsYXN0JywgJ2V2ZW4nLCAnb2RkJ107XG4gIGRhdGE6IHN0cmluZ1tdID0gWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZSddO1xufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIiRpbXBsaWNpdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+ICRpbXBsaWNpdCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhXCI+IHt7ZGF0YX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImluZGV4XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gaW5kZXggPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgaW5kZXggPSBpbmRleFwiPiB7e2luZGV4fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbmRleCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiY291bnRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBjb3VudCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBjb3VudCA9IGNvdW50XCI+IHt7Y291bnR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEluZGV4IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmaXJzdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IGZpcnN0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGZpcnN0ID0gZmlyc3RcIj4ge3tmaXJzdH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImxhc3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBsYXN0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGxhc3QgPSBsYXN0XCI+IHt7bGFzdH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV2ZW5cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBldmVuIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGV2ZW4gPSBldmVuXCI+IHt7ZXZlbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5kZXggQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm9kZFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IG9kZCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBvZGQgPSBvZGRcIj4ge3tvZGR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==