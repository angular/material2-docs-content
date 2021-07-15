import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableGeneratedColumnsExample_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3.header, " ");
} }
function TableGeneratedColumnsExample_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3.cell(row_r7), " ");
} }
function TableGeneratedColumnsExample_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 4);
    i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_th_1_Template, 2, 1, "th", 5);
    i0.ɵɵtemplate(2, TableGeneratedColumnsExample_ng_container_1_td_2_Template, 2, 1, "td", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r3.columnDef);
} }
function TableGeneratedColumnsExample_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 9);
} }
function TableGeneratedColumnsExample_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
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
 * @title Table with columns defined using ngFor instead of statically written in the template.
 */
export class TableGeneratedColumnsExample {
    constructor() {
        this.columns = [
            {
                columnDef: 'position',
                header: 'No.',
                cell: (element) => `${element.position}`
            },
            {
                columnDef: 'name',
                header: 'Name',
                cell: (element) => `${element.name}`
            },
            {
                columnDef: 'weight',
                header: 'Weight',
                cell: (element) => `${element.weight}`
            },
            {
                columnDef: 'symbol',
                header: 'Symbol',
                cell: (element) => `${element.symbol}`
            }
        ];
        this.dataSource = ELEMENT_DATA;
        this.displayedColumns = this.columns.map(c => c.columnDef);
    }
}
TableGeneratedColumnsExample.ɵfac = function TableGeneratedColumnsExample_Factory(t) { return new (t || TableGeneratedColumnsExample)(); };
TableGeneratedColumnsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableGeneratedColumnsExample, selectors: [["table-generated-columns-example"]], decls: 4, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableGeneratedColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TableGeneratedColumnsExample_tr_2_Template, 1, 0, "tr", 2);
        i0.ɵɵtemplate(3, TableGeneratedColumnsExample_tr_3_Template, 1, 0, "tr", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableGeneratedColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-generated-columns-example',
                styleUrls: ['table-generated-columns-example.css'],
                templateUrl: 'table-generated-columns-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNFcEMsNkJBQXNDO0lBQ3BDLFlBQ0Y7SUFBQSxpQkFBSzs7O0lBREgsZUFDRjtJQURFLGlEQUNGOzs7SUFDQSw2QkFBbUM7SUFDakMsWUFDRjtJQUFBLGlCQUFLOzs7O0lBREgsZUFDRjtJQURFLHVEQUNGOzs7SUFORixnQ0FBK0U7SUFDN0UsMEZBRUs7SUFDTCwwRkFFSztJQUNQLDBCQUFlOzs7SUFQOEIsa0RBQWlDOzs7SUFTOUUsd0JBQTREOzs7SUFDNUQseUJBQWtFOztBREZwRSxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQU1ILE1BQU0sT0FBTyw0QkFBNEI7SUFMekM7UUFNRSxZQUFPLEdBQUc7WUFDUjtnQkFDRSxTQUFTLEVBQUUsVUFBVTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQzFEO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRTthQUN0RDtZQUNEO2dCQUNFLFNBQVMsRUFBRSxRQUFRO2dCQUNuQixNQUFNLEVBQUUsUUFBUTtnQkFDaEIsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ3hEO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsQ0FBQyxPQUF3QixFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDeEQ7U0FDRixDQUFDO1FBQ0YsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUMxQixxQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN2RDs7d0dBekJZLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FDOUJ6QyxnQ0FBK0U7UUFDN0UsK0ZBT2U7UUFFZiwyRUFBNEQ7UUFDNUQsMkVBQWtFO1FBQ3BFLGlCQUFROztRQVpTLDJDQUF5QjtRQUNQLGVBQVU7UUFBVixxQ0FBVTtRQVN2QixlQUFpQztRQUFqQyxzREFBaUM7UUFDcEIsZUFBMEI7UUFBMUIsdURBQTBCOzt1RkRtQmhELDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7Z0JBQ2xELFdBQVcsRUFBRSxzQ0FBc0M7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBjb2x1bW5zIGRlZmluZWQgdXNpbmcgbmdGb3IgaW5zdGVhZCBvZiBzdGF0aWNhbGx5IHdyaXR0ZW4gaW4gdGhlIHRlbXBsYXRlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVHZW5lcmF0ZWRDb2x1bW5zRXhhbXBsZSB7XG4gIGNvbHVtbnMgPSBbXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAncG9zaXRpb24nLFxuICAgICAgaGVhZGVyOiAnTm8uJyxcbiAgICAgIGNlbGw6IChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpID0+IGAke2VsZW1lbnQucG9zaXRpb259YFxuICAgIH0sXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAnbmFtZScsXG4gICAgICBoZWFkZXI6ICdOYW1lJyxcbiAgICAgIGNlbGw6IChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpID0+IGAke2VsZW1lbnQubmFtZX1gXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2x1bW5EZWY6ICd3ZWlnaHQnLFxuICAgICAgaGVhZGVyOiAnV2VpZ2h0JyxcbiAgICAgIGNlbGw6IChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQpID0+IGAke2VsZW1lbnQud2VpZ2h0fWBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbHVtbkRlZjogJ3N5bWJvbCcsXG4gICAgICBoZWFkZXI6ICdTeW1ib2wnLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC5zeW1ib2x9YFxuICAgIH1cbiAgXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuY29sdW1ucy5tYXAoYyA9PiBjLmNvbHVtbkRlZik7XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejggZGVtby10YWJsZVwiPlxuICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjb2x1bW4gb2YgY29sdW1uc1wiIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uLmNvbHVtbkRlZlwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+XG4gICAgICB7e2NvbHVtbi5oZWFkZXJ9fVxuICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAge3tjb2x1bW4uY2VsbChyb3cpfX1cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==