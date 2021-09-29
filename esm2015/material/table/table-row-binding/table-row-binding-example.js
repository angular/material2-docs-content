import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableRowBindingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.position);
} }
function TableRowBindingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.name);
} }
function TableRowBindingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r14.weight);
} }
function TableRowBindingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r15.symbol);
} }
function TableRowBindingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableRowBindingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 14);
    i0.ɵɵlistener("click", function TableRowBindingExample_tr_14_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.clickedRows.add(row_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("demo-row-is-clicked", ctx_r9.clickedRows.has(row_r16));
} }
function TableRowBindingExample_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Clicked rows will be logged here\n");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const clickedRow_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Clicked on ", clickedRow_r19.name, " ");
} }
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
 * @title Binding event handlers and properties to the table rows.
 */
export class TableRowBindingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.clickedRows = new Set();
    }
}
TableRowBindingExample.ɵfac = function TableRowBindingExample_Factory(t) { return new (t || TableRowBindingExample)(); };
TableRowBindingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableRowBindingExample, selectors: [["table-row-binding-example"]], decls: 21, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "demo-row-is-clicked", "click", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableRowBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRowBindingExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRowBindingExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRowBindingExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRowBindingExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRowBindingExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRowBindingExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRowBindingExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRowBindingExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableRowBindingExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableRowBindingExample_tr_14_Template, 1, 2, "tr", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div");
        i0.ɵɵelementStart(16, "h3");
        i0.ɵɵtext(17, " Click Log ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, TableRowBindingExample_div_18_Template, 2, 0, "div", 9);
        i0.ɵɵelementStart(19, "ul");
        i0.ɵɵtemplate(20, TableRowBindingExample_li_20_Template, 2, 1, "li", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.clickedRows.size);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.clickedRows);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i2.NgIf, i2.NgForOf, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  cursor: pointer;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\n  border-color: currentColor;\n}\n\n.demo-row-is-clicked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableRowBindingExample, [{
        type: Component,
        args: [{ selector: 'table-row-binding-example', template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef>No.</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr\n      mat-row\n      (click)=\"clickedRows.add(row)\"\n      [class.demo-row-is-clicked]=\"clickedRows.has(row)\"\n      *matRowDef=\"let row; columns: displayedColumns;\"\n  ></tr>\n</table>\n\n<div>\n  <h3>\n    Click Log\n  </h3>\n</div>\n\n<div *ngIf=\"!clickedRows.size\">\n  Clicked rows will be logged here\n</div>\n\n<ul>\n  <li *ngFor=\"let clickedRow of clickedRows\">\n    Clicked on {{clickedRow.name}}\n  </li>\n</ul>\n", styles: [".demo-table {\n  width: 100%;\n}\n\n.mat-row .mat-cell {\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  cursor: pointer;\n}\n\n.mat-row:hover .mat-cell {\n  border-color: currentColor;\n}\n\n.demo-row-is-clicked {\n  font-weight: bold;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJvdy1iaW5kaW5nL3RhYmxlLXJvdy1iaW5kaW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctYmluZGluZy90YWJsZS1yb3ctYmluZGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHcEMsOEJBQXNDO0lBQUEsbUJBQUc7SUFBQSxpQkFBSzs7O0lBQzlDLDhCQUF1QztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7OztJQUF6QixlQUFvQjtJQUFwQiwwQ0FBb0I7OztJQUszRCw4QkFBc0M7SUFBQSxvQkFBSTtJQUFBLGlCQUFLOzs7SUFDL0MsOEJBQXVDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSzs7O0lBQXJCLGVBQWdCO0lBQWhCLHNDQUFnQjs7O0lBS3ZELDhCQUFzQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsd0NBQWtCOzs7SUFLekQsOEJBQXNDO0lBQUEsc0JBQU07SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUF1QztJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixlQUFrQjtJQUFsQix3Q0FBa0I7OztJQUczRCx5QkFBNEQ7Ozs7SUFDNUQsOEJBS0M7SUFIRyw0TkFBUyxnQ0FBb0IsSUFBQztJQUdqQyxpQkFBSzs7OztJQUZGLHNFQUFrRDs7O0lBV3hELDJCQUErQjtJQUM3QixtREFDRjtJQUFBLGlCQUFNOzs7SUFHSiwwQkFBMkM7SUFDekMsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUsK0RBQ0Y7O0FEdENGLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixnQkFBVyxHQUFHLElBQUksR0FBRyxFQUFtQixDQUFDO0tBQzFDOzs0RkFKWSxzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQzlCbkMsZ0NBQStFO1FBRTdFLGdDQUFzQztRQUNwQyxxRUFBOEM7UUFDOUMscUVBQWdFO1FBQ2xFLDBCQUFlO1FBR2YsZ0NBQWtDO1FBQ2hDLHFFQUErQztRQUMvQyxxRUFBNEQ7UUFDOUQsMEJBQWU7UUFHZixnQ0FBb0M7UUFDbEMscUVBQWlEO1FBQ2pELHFFQUE4RDtRQUNoRSwwQkFBZTtRQUdmLGlDQUFvQztRQUNsQyx1RUFBaUQ7UUFDakQsdUVBQThEO1FBQ2hFLDBCQUFlO1FBRWYsdUVBQTREO1FBQzVELHVFQUtNO1FBQ1IsaUJBQVE7UUFFUiw0QkFBSztRQUNILDJCQUFJO1FBQ0YsNEJBQ0Y7UUFBQSxpQkFBSztRQUNQLGlCQUFNO1FBRU4seUVBRU07UUFFTiwyQkFBSTtRQUNGLHdFQUVLO1FBQ1AsaUJBQUs7O1FBaERZLDJDQUF5QjtRQXlCcEIsZ0JBQWlDO1FBQWpDLHNEQUFpQztRQUs1QixlQUEwQjtRQUExQix1REFBMEI7UUFVL0MsZUFBdUI7UUFBdkIsNENBQXVCO1FBS0EsZUFBYztRQUFkLHlDQUFjOzt1RkRmOUIsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIEJpbmRpbmcgZXZlbnQgaGFuZGxlcnMgYW5kIHByb3BlcnRpZXMgdG8gdGhlIHRhYmxlIHJvd3MuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXJvdy1iaW5kaW5nLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtcm93LWJpbmRpbmctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1yb3ctYmluZGluZy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0JpbmRpbmdFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBjbGlja2VkUm93cyA9IG5ldyBTZXQ8UGVyaW9kaWNFbGVtZW50PigpO1xufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGRlbW8tdGFibGVcIj5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5vLjwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQucG9zaXRpb259fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+TmFtZTwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQubmFtZX19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+V2VpZ2h0PC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPnt7ZWxlbWVudC53ZWlnaHR9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlN5bWJvbDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQuc3ltYm9sfX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHJcbiAgICAgIG1hdC1yb3dcbiAgICAgIChjbGljayk9XCJjbGlja2VkUm93cy5hZGQocm93KVwiXG4gICAgICBbY2xhc3MuZGVtby1yb3ctaXMtY2xpY2tlZF09XCJjbGlja2VkUm93cy5oYXMocm93KVwiXG4gICAgICAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIlxuICA+PC90cj5cbjwvdGFibGU+XG5cbjxkaXY+XG4gIDxoMz5cbiAgICBDbGljayBMb2dcbiAgPC9oMz5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiIWNsaWNrZWRSb3dzLnNpemVcIj5cbiAgQ2xpY2tlZCByb3dzIHdpbGwgYmUgbG9nZ2VkIGhlcmVcbjwvZGl2PlxuXG48dWw+XG4gIDxsaSAqbmdGb3I9XCJsZXQgY2xpY2tlZFJvdyBvZiBjbGlja2VkUm93c1wiPlxuICAgIENsaWNrZWQgb24ge3tjbGlja2VkUm93Lm5hbWV9fVxuICA8L2xpPlxuPC91bD5cbiJdfQ==