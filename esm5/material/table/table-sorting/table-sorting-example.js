import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/sort";
function TableSortingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r211 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r211.position, " ");
} }
function TableSortingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r212 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r212.name, " ");
} }
function TableSortingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r213 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r213.weight, " ");
} }
function TableSortingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableSortingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r214 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r214.symbol, " ");
} }
function TableSortingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function TableSortingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
var ELEMENT_DATA = [
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
 * @title Table with sorting
 */
var TableSortingExample = /** @class */ (function () {
    function TableSortingExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    TableSortingExample.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    TableSortingExample.ɵfac = function TableSortingExample_Factory(t) { return new (t || TableSortingExample)(); };
    TableSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableSortingExample, selectors: [["table-sorting-example"]], viewQuery: function TableSortingExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
        } }, decls: 15, vars: 3, consts: [["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableSortingExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, TableSortingExample_th_2_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(3, TableSortingExample_td_3_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(4, 4);
            i0.ɵɵtemplate(5, TableSortingExample_th_5_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(6, TableSortingExample_td_6_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(7, 5);
            i0.ɵɵtemplate(8, TableSortingExample_th_8_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(9, TableSortingExample_td_9_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(10, 6);
            i0.ɵɵtemplate(11, TableSortingExample_th_11_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(12, TableSortingExample_td_12_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(13, TableSortingExample_tr_13_Template, 1, 0, "tr", 7);
            i0.ɵɵtemplate(14, TableSortingExample_tr_14_Template, 1, 0, "tr", 8);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i1.MatTable, i2.MatSort, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i2.MatSortHeader, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\n  color: black;\n}"] });
    return TableSortingExample;
}());
export { TableSortingExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableSortingExample, [{
        type: Component,
        args: [{
                selector: 'table-sorting-example',
                styleUrls: ['table-sorting-example.css'],
                templateUrl: 'table-sorting-example.html',
            }]
    }], null, { sort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydGluZy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc29ydGluZy90YWJsZS1zb3J0aW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zb3J0aW5nL3RhYmxlLXNvcnRpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7SUNFdkQsNkJBQXVEO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ2hFLDhCQUF3QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixzREFBcUI7OztJQUs3RCw2QkFBdUQ7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakUsOEJBQXdDO0lBQUEsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGtEQUFpQjs7O0lBS3pELDZCQUF1RDtJQUFBLHdCQUFPO0lBQUEsaUJBQUs7OztJQUNuRSw4QkFBd0M7SUFBQSxZQUFtQjtJQUFBLGlCQUFLOzs7SUFBeEIsZUFBbUI7SUFBbkIsb0RBQW1COzs7SUFLM0QsNkJBQXVEO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBQ25FLDhCQUF3QztJQUFBLFlBQW1CO0lBQUEsaUJBQUs7OztJQUF4QixlQUFtQjtJQUFuQixvREFBbUI7OztJQUc3RCx5QkFBNEQ7OztJQUM1RCx5QkFBa0U7O0FEaEJwRSxJQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQUNIO0lBQUE7UUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0tBT25EO0lBSEMsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQzswRkFSVSxtQkFBbUI7NERBQW5CLG1CQUFtQjtpQ0FJbkIsT0FBTzs7Ozs7WUNwQ3BCLGdDQUVFO1lBQ0EsZ0NBQ0U7WUFBQSxrRUFBdUQ7WUFDdkQsa0VBQXdDO1lBQzFDLDBCQUFlO1lBR2YsZ0NBQ0U7WUFBQSxrRUFBdUQ7WUFDdkQsa0VBQXdDO1lBQzFDLDBCQUFlO1lBR2YsZ0NBQ0U7WUFBQSxrRUFBdUQ7WUFDdkQsa0VBQXdDO1lBQzFDLDBCQUFlO1lBR2YsaUNBQ0U7WUFBQSxvRUFBdUQ7WUFDdkQsb0VBQXdDO1lBQzFDLDBCQUFlO1lBRWYsb0VBQXVEO1lBQ3ZELG9FQUE2RDtZQUMvRCxpQkFBUTs7WUE1QlMsMkNBQXlCO1lBMEJyQixnQkFBbUM7WUFBbkMsc0RBQW1DO1lBQzFDLGVBQWdEO1lBQWhELHVEQUFnRDs7OEJEM0I5RDtDQXlDQyxBQWRELElBY0M7U0FUWSxtQkFBbUI7a0RBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7YUFDMUM7O2tCQUtFLFNBQVM7bUJBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSB3aXRoIHNvcnRpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc29ydGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU29ydGluZ0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKEVMRU1FTlRfREFUQSk7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7c3RhdGljOiB0cnVlfSkgc29ydDogTWF0U29ydDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBXZWlnaHQgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=