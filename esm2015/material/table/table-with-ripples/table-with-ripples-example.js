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
        args: [{ selector: 'table-with-ripples-example', template: "<mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n    <mat-cell mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row matRipple *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n", styles: [""] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13aXRoLXJpcHBsZXMvdGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0VwQywwQ0FBbUQ7SUFBQyxzQkFBSztJQUFBLGlCQUFrQjs7O0lBQzNFLG1DQUE2QztJQUFDLFlBQWlCO0lBQUEsaUJBQVc7OztJQUE1QixlQUFpQjtJQUFqQixnREFBaUI7OztJQUdqRSxpQ0FBcUU7OztJQUNyRSw2QkFBOEU7O0FETGhGLE1BQU0sWUFBWSxHQUFHO0lBQ25CLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQztJQUNsQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFDO0lBQ2pCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQztJQUNuQixFQUFDLElBQUksRUFBRSxPQUFPLEVBQUM7SUFDZixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7SUFDaEIsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO0lBQ2xCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztJQUNoQixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7SUFDbEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO0NBQ2YsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjs7OEZBSFksdUJBQXVCOzBFQUF2Qix1QkFBdUI7UUN2QnBDLG9DQUE4RDtRQUM1RCxnQ0FBa0M7UUFDaEMsZ0dBQTJFO1FBQzNFLGtGQUEwRTtRQUM1RSwwQkFBZTtRQUVmLDhGQUFxRTtRQUNyRSxnRkFBOEU7UUFDaEYsaUJBQVk7O1FBUkQsMkNBQXlCO1FBTWpCLGVBQWlDO1FBQWpDLHNEQUFpQztRQUNWLGVBQTBCO1FBQTFCLHVEQUEwQjs7dUZEZ0J2RCx1QkFBdUI7Y0FMbkMsU0FBUzsyQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IEVMRU1FTlRfREFUQSA9IFtcbiAge25hbWU6ICdIeWRyb2dlbid9LFxuICB7bmFtZTogJ0hlbGl1bSd9LFxuICB7bmFtZTogJ0xpdGhpdW0nfSxcbiAge25hbWU6ICdCZXJ5bGxpdW0nfSxcbiAge25hbWU6ICdCb3Jvbid9LFxuICB7bmFtZTogJ0NhcmJvbid9LFxuICB7bmFtZTogJ05pdHJvZ2VuJ30sXG4gIHtuYW1lOiAnT3h5Z2VuJ30sXG4gIHtuYW1lOiAnRmx1b3JpbmUnfSxcbiAge25hbWU6ICdOZW9uJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZXMgd2l0aCBNYXRlcmlhbCBEZXNpZ24gcmlwcGxlcy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtd2l0aC1yaXBwbGVzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlV2l0aFJpcHBsZXNFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ25hbWUnXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbn1cbiIsIjxtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8bWF0LWhlYWRlci1jZWxsIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L21hdC1oZWFkZXItY2VsbD5cbiAgICA8bWF0LWNlbGwgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQubmFtZX19IDwvbWF0LWNlbGw+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbWF0LWhlYWRlci1yb3c+XG4gIDxtYXQtcm93IG1hdFJpcHBsZSAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L21hdC1yb3c+XG48L21hdC10YWJsZT5cbiJdfQ==