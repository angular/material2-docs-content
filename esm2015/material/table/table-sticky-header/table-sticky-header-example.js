/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
function TableStickyHeaderExample_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r314 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r314.position, " ");
} }
function TableStickyHeaderExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r315 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r315.name, " ");
} }
function TableStickyHeaderExample_th_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r316 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r316.weight, " ");
} }
function TableStickyHeaderExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableStickyHeaderExample_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r317 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r317.symbol, " ");
} }
function TableStickyHeaderExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
function TableStickyHeaderExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
/**
 * \@title Table with sticky header
 */
export class TableStickyHeaderExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableStickyHeaderExample.decorators = [
    { type: Component, args: [{
                selector: 'table-sticky-header-example',
                styleUrls: ['table-sticky-header-example.css'],
                templateUrl: 'table-sticky-header-example.html',
            },] },
];
/** @nocollapse */ TableStickyHeaderExample.ɵfac = function TableStickyHeaderExample_Factory(t) { return new (t || TableStickyHeaderExample)(); };
/** @nocollapse */ TableStickyHeaderExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableStickyHeaderExample, selectors: [["table-sticky-header-example"]], decls: 16, vars: 4, consts: [[1, "example-container", "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableStickyHeaderExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "table", 1);
        i0.ɵɵelementContainerStart(2, 2);
        i0.ɵɵtemplate(3, TableStickyHeaderExample_th_3_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(4, TableStickyHeaderExample_td_4_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(5, 5);
        i0.ɵɵtemplate(6, TableStickyHeaderExample_th_6_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(7, TableStickyHeaderExample_td_7_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(8, 6);
        i0.ɵɵtemplate(9, TableStickyHeaderExample_th_9_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(10, TableStickyHeaderExample_td_10_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(11, 7);
        i0.ɵɵtemplate(12, TableStickyHeaderExample_th_12_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(13, TableStickyHeaderExample_td_13_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(14, TableStickyHeaderExample_tr_14_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(15, TableStickyHeaderExample_tr_15_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".example-container[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TableStickyHeaderExample, [{
        type: Component,
        args: [{
                selector: 'table-sticky-header-example',
                styleUrls: ['table-sticky-header-example.css'],
                templateUrl: 'table-sticky-header-example.html',
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TableStickyHeaderExample.prototype.displayedColumns;
    /** @type {?} */
    TableStickyHeaderExample.prototype.dataSource;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWhlYWRlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc3RpY2t5LWhlYWRlci90YWJsZS1zdGlja3ktaGVhZGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktaGVhZGVyL3RhYmxlLXN0aWNreS1oZWFkZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0lDS2xDLDhCQUF1QztJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRCw4QkFBd0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFLN0QsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUF3QztJQUFBLFlBQWlCO0lBQUEsaUJBQUs7OztJQUF0QixlQUFpQjtJQUFqQixrREFBaUI7OztJQUt6RCw4QkFBdUM7SUFBQSx3QkFBTztJQUFBLGlCQUFLOzs7SUFDbkQsOEJBQXdDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSzs7O0lBQXhCLGVBQW1CO0lBQW5CLG9EQUFtQjs7O0lBSzNELDhCQUF1QztJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUNuRCw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsb0RBQW1COzs7SUFHN0QseUJBQTBFOzs7SUFDMUUseUJBQWtFOzs7OztBRGxCdEUsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLHFCQUFnQixHQUFHLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDNUQsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2dCQUM5QyxXQUFXLEVBQUUsa0NBQWtDO2FBQ2hEOztnR0FDWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1ZyQyw4QkFDRTtRQUFBLGdDQUVFO1FBQ0EsZ0NBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSx1RUFBdUM7UUFDdkMsdUVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsZ0NBQ0U7UUFBQSx1RUFBdUM7UUFDdkMseUVBQXdDO1FBQzFDLDBCQUFlO1FBR2YsaUNBQ0U7UUFBQSx5RUFBdUM7UUFDdkMseUVBQXdDO1FBQzFDLDBCQUFlO1FBRWYseUVBQXFFO1FBQ3JFLHlFQUE2RDtRQUMvRCxpQkFBUTtRQUNWLGlCQUFNOztRQTdCYSxlQUF5QjtRQUF6QiwyQ0FBeUI7UUEwQnJCLGdCQUFpRDtRQUFqRCxzREFBaUQsK0JBQUE7UUFDeEQsZUFBZ0Q7UUFBaEQsdURBQWdEOzttQ0RsQm5ELHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7Z0JBQzlDLFdBQVcsRUFBRSxrQ0FBa0M7YUFDaEQ7Ozs7SUFFQyxvREFBNEQ7O0lBQzVELDhDQUEwQjs7Ozs7QUFHNUIscUNBS0M7OztJQUpDLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsaUNBQWU7O0lBQ2YsaUNBQWU7OztNQUdYLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIHN0aWNreSBoZWFkZXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc3RpY2t5LWhlYWRlci1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXN0aWNreS1oZWFkZXItZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zdGlja3ktaGVhZGVyLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU3RpY2t5SGVhZGVyRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnMgPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cblxuICAgIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5vLiA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnM7IHN0aWNreTogdHJ1ZVwiPjwvdHI+XG4gICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbiAgPC90YWJsZT5cbjwvZGl2PiJdfQ==