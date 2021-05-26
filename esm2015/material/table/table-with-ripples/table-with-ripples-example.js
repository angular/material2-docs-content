import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/core";
function TableWithRipplesExample_mat_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell", 6);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableWithRipplesExample_mat_cell_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r4 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r4.name, " ");
} }
function TableWithRipplesExample_mat_header_row_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableWithRipplesExample_mat_row_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row", 8);
} }
const ELEMENT_DATA = [
    { name: 'Hydrogen' },
    { name: 'Helium' },
    { name: 'Lithium' },
    { name: 'Beryllium' },
    { name: 'Boron' },
    { name: 'Carbon' },
    { name: 'Nitrogen' },
    { name: 'Oxygen' },
    { name: 'Fluorine' },
    { name: 'Neon' },
];
/**
 * @title Tables with Material Design ripples.
 */
export class TableWithRipplesExample {
    constructor() {
        this.displayedColumns = ['name'];
        this.dataSource = ELEMENT_DATA;
    }
}
TableWithRipplesExample.ɵfac = function TableWithRipplesExample_Factory(t) { return new (t || TableWithRipplesExample)(); };
TableWithRipplesExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableWithRipplesExample, selectors: [["table-with-ripples-example"]], decls: 6, vars: 3, consts: [[1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "matHeaderRowDef"], ["matRipple", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["matRipple", ""]], template: function TableWithRipplesExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableWithRipplesExample_mat_header_cell_2_Template, 2, 0, "mat-header-cell", 2);
        i0.ɵɵtemplate(3, TableWithRipplesExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(4, TableWithRipplesExample_mat_header_row_4_Template, 1, 0, "mat-header-row", 4);
        i0.ɵɵtemplate(5, TableWithRipplesExample_mat_row_5_Template, 1, 0, "mat-row", 5);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow, i2.MatRipple], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableWithRipplesExample, [{
        type: Component,
        args: [{
                selector: 'table-with-ripples-example',
                styleUrls: ['table-with-ripples-example.css'],
                templateUrl: 'table-with-ripples-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0VwQywwQ0FBbUQ7SUFBQyxzQkFBSztJQUFBLGlCQUFrQjs7O0lBQzNFLG1DQUE2QztJQUFDLFlBQWlCO0lBQUEsaUJBQVc7OztJQUE1QixlQUFpQjtJQUFqQixnREFBaUI7OztJQUdqRSxpQ0FBcUU7OztJQUNyRSw2QkFBOEU7O0FETGhGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ2pCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztJQUNuQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7SUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQ2YsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7OEZBSFksdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUN2QnBDLG9DQUE4RDtRQUM1RCxnQ0FBa0M7UUFDaEMsZ0dBQTJFO1FBQzNFLGtGQUEwRTtRQUM1RSwwQkFBZTtRQUVmLDhGQUFxRTtRQUNyRSxnRkFBOEU7UUFDaEYsaUJBQVk7O1FBUkQsMkNBQXlCO1FBTWpCLGVBQWlDO1FBQWpDLHNEQUFpQztRQUNWLGVBQTBCO1FBQTFCLHVEQUEwQjs7dUZEZ0J2RCx1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCBFTEVNRU5UX0RBVEEgPSBbXG4gIHtuYW1lOiAnSHlkcm9nZW4nfSxcbiAge25hbWU6ICdIZWxpdW0nfSxcbiAge25hbWU6ICdMaXRoaXVtJ30sXG4gIHtuYW1lOiAnQmVyeWxsaXVtJ30sXG4gIHtuYW1lOiAnQm9yb24nfSxcbiAge25hbWU6ICdDYXJib24nfSxcbiAge25hbWU6ICdOaXRyb2dlbid9LFxuICB7bmFtZTogJ094eWdlbid9LFxuICB7bmFtZTogJ0ZsdW9yaW5lJ30sXG4gIHtuYW1lOiAnTmVvbid9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGVzIHdpdGggTWF0ZXJpYWwgRGVzaWduIHJpcHBsZXMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdpdGgtcmlwcGxlcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVdpdGhSaXBwbGVzRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyduYW1lJ107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG59XG4iLCI8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPG1hdC1oZWFkZXItY2VsbCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxuICA8bWF0LXJvdyBtYXRSaXBwbGUgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC9tYXQtcm93PlxuPC9tYXQtdGFibGU+XG4iXX0=