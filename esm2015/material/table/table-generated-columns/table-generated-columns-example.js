import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/table";
function TableGeneratedColumnsExample_ng_container_1_mat_header_cell_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-header-cell");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3.header, " ");
} }
function TableGeneratedColumnsExample_ng_container_1_mat_cell_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-cell");
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
    i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_mat_header_cell_1_Template, 2, 1, "mat-header-cell", 5);
    i0.ɵɵtemplate(2, TableGeneratedColumnsExample_ng_container_1_mat_cell_2_Template, 2, 1, "mat-cell", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    i0.ɵɵproperty("cdkColumnDef", column_r3.columnDef);
} }
function TableGeneratedColumnsExample_mat_header_row_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-header-row");
} }
function TableGeneratedColumnsExample_mat_row_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-row");
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
TableGeneratedColumnsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableGeneratedColumnsExample, selectors: [["table-generated-columns-example"]], decls: 4, vars: 4, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "cdkColumnDef"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"]], template: function TableGeneratedColumnsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, TableGeneratedColumnsExample_ng_container_1_Template, 3, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TableGeneratedColumnsExample_mat_header_row_2_Template, 1, 0, "mat-header-row", 2);
        i0.ɵɵtemplate(3, TableGeneratedColumnsExample_mat_row_3_Template, 1, 0, "mat-row", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.columns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i2.NgForOf, i1.MatHeaderRowDef, i1.MatRowDef, i3.CdkColumnDef, i3.CdkHeaderCellDef, i3.CdkCellDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableGeneratedColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-generated-columns-example',
                styleUrls: ['table-generated-columns-example.css'],
                templateUrl: 'table-generated-columns-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zL3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy90YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDRXBDLHVDQUFtQztJQUNqQyxZQUNGO0lBQUEsaUJBQWtCOzs7SUFEaEIsZUFDRjtJQURFLGlEQUNGOzs7SUFDQSxnQ0FBZ0M7SUFDOUIsWUFDRjtJQUFBLGlCQUFXOzs7O0lBRFQsZUFDRjtJQURFLHVEQUNGOzs7SUFORixnQ0FBK0U7SUFDN0Usb0hBRWtCO0lBQ2xCLHNHQUVXO0lBQ2IsMEJBQWU7OztJQVA4QixrREFBaUM7OztJQVM5RSxpQ0FBcUU7OztJQUNyRSwwQkFBb0U7O0FERnRFLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBTUgsTUFBTSxPQUFPLDRCQUE0QjtJQUx6QztRQU1FLFlBQU8sR0FBRztZQUNSO2dCQUNFLFNBQVMsRUFBRSxVQUFVO2dCQUNyQixNQUFNLEVBQUUsS0FBSztnQkFDYixJQUFJLEVBQUUsQ0FBQyxPQUF3QixFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDMUQ7WUFDRDtnQkFDRSxTQUFTLEVBQUUsTUFBTTtnQkFDakIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLENBQUMsT0FBd0IsRUFBRSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFO2FBQ3REO1lBQ0Q7Z0JBQ0UsU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixJQUFJLEVBQUUsQ0FBQyxPQUF3QixFQUFFLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDeEQ7WUFDRDtnQkFDRSxTQUFTLEVBQUUsUUFBUTtnQkFDbkIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLElBQUksRUFBRSxDQUFDLE9BQXdCLEVBQUUsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRTthQUN4RDtTQUNGLENBQUM7UUFDRixlQUFVLEdBQUcsWUFBWSxDQUFDO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3ZEOzt3R0F6QlksNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUM5QnpDLGdDQUErRTtRQUM3RSwrRkFPZTtRQUVmLG1HQUFxRTtRQUNyRSxxRkFBb0U7UUFDdEUsaUJBQVE7O1FBWlMsMkNBQXlCO1FBQ1AsZUFBVTtRQUFWLHFDQUFVO1FBUzFCLGVBQWlDO1FBQWpDLHNEQUFpQztRQUNwQixlQUEwQjtRQUExQix1REFBMEI7O3VGRG1CN0MsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQztnQkFDbEQsV0FBVyxFQUFFLHNDQUFzQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIGNvbHVtbnMgZGVmaW5lZCB1c2luZyBuZ0ZvciBpbnN0ZWFkIG9mIHN0YXRpY2FsbHkgd3JpdHRlbiBpbiB0aGUgdGVtcGxhdGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWdlbmVyYXRlZC1jb2x1bW5zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZ2VuZXJhdGVkLWNvbHVtbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1nZW5lcmF0ZWQtY29sdW1ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUdlbmVyYXRlZENvbHVtbnNFeGFtcGxlIHtcbiAgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBjb2x1bW5EZWY6ICdwb3NpdGlvbicsXG4gICAgICBoZWFkZXI6ICdOby4nLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC5wb3NpdGlvbn1gXG4gICAgfSxcbiAgICB7XG4gICAgICBjb2x1bW5EZWY6ICduYW1lJyxcbiAgICAgIGhlYWRlcjogJ05hbWUnLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC5uYW1lfWBcbiAgICB9LFxuICAgIHtcbiAgICAgIGNvbHVtbkRlZjogJ3dlaWdodCcsXG4gICAgICBoZWFkZXI6ICdXZWlnaHQnLFxuICAgICAgY2VsbDogKGVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCkgPT4gYCR7ZWxlbWVudC53ZWlnaHR9YFxuICAgIH0sXG4gICAge1xuICAgICAgY29sdW1uRGVmOiAnc3ltYm9sJyxcbiAgICAgIGhlYWRlcjogJ1N5bWJvbCcsXG4gICAgICBjZWxsOiAoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50KSA9PiBgJHtlbGVtZW50LnN5bWJvbH1gXG4gICAgfVxuICBdO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuICBkaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjID0+IGMuY29sdW1uRGVmKTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBkZW1vLXRhYmxlXCI+XG4gIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBjb2x1bW5zXCIgW2Nka0NvbHVtbkRlZl09XCJjb2x1bW4uY29sdW1uRGVmXCI+XG4gICAgPG1hdC1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj5cbiAgICAgIHt7Y29sdW1uLmhlYWRlcn19XG4gICAgPC9tYXQtaGVhZGVyLWNlbGw+XG4gICAgPG1hdC1jZWxsICpjZGtDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAge3tjb2x1bW4uY2VsbChyb3cpfX1cbiAgICA8L21hdC1jZWxsPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L21hdC1oZWFkZXItcm93PlxuICA8bWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L21hdC1yb3c+XG48L3RhYmxlPlxuIl19