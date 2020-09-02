import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/sort";
import * as i5 from "@angular/material/paginator";
function TableOverviewExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r12.id, " ");
} }
function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Progress ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r13.progress, "% ");
} }
function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r14.name, " ");
} }
function TableOverviewExample_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Color ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    i0.ɵɵstyleProp("color", row_r15.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r15.color, " ");
} }
function TableOverviewExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function TableOverviewExample_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 18);
} }
function TableOverviewExample_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 19);
    i0.ɵɵelementStart(1, "td", 20);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
/** Constants used to fill up our data base. */
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.ɵfac = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
TableOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(MatPaginator, true);
        i0.ɵɵstaticViewQuery(MatSort, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 5, consts: [["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Filter");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "input", 0, 1);
        i0.ɵɵlistener("keyup", function TableOverviewExample_Template_input_keyup_3_listener($event) { return ctx.applyFilter($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 2);
        i0.ɵɵelementStart(6, "table", 3);
        i0.ɵɵelementContainerStart(7, 4);
        i0.ɵɵtemplate(8, TableOverviewExample_th_8_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(9, TableOverviewExample_td_9_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 7);
        i0.ɵɵtemplate(11, TableOverviewExample_th_11_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(12, TableOverviewExample_td_12_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 8);
        i0.ɵɵtemplate(14, TableOverviewExample_th_14_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(15, TableOverviewExample_td_15_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(16, 9);
        i0.ɵɵtemplate(17, TableOverviewExample_th_17_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(18, TableOverviewExample_td_18_Template, 2, 3, "td", 10);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(19, TableOverviewExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(20, TableOverviewExample_tr_20_Template, 1, 0, "tr", 12);
        i0.ɵɵtemplate(21, TableOverviewExample_tr_21_Template, 3, 1, "tr", 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "mat-paginator", 14);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("pageSizeOptions", i0.ɵɵpureFunction0(4, _c0));
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatTable, i4.MatSort, i3.MatColumnDef, i3.MatHeaderCellDef, i3.MatCellDef, i3.MatHeaderRowDef, i3.MatRowDef, i3.MatNoDataRow, i5.MatPaginator, i3.MatHeaderCell, i4.MatSortHeader, i3.MatCell, i3.MatHeaderRow, i3.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableOverviewExample, [{
        type: Component,
        args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            }]
    }], function () { return []; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator, { static: true }]
        }], sort: [{
            type: ViewChild,
            args: [MatSort, { static: true }]
        }] }); })();
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ3pELE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMvQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7SUNPckQsOEJBQXVEO0lBQUEsb0JBQUc7SUFBQSxpQkFBSzs7O0lBQy9ELDhCQUFvQztJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCwyQ0FBVzs7O0lBSy9DLDhCQUF1RDtJQUFBLDBCQUFTO0lBQUEsaUJBQUs7OztJQUNyRSw4QkFBb0M7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsa0RBQWtCOzs7SUFLdEQsOEJBQXVEO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pFLDhCQUFvQztJQUFBLFlBQWE7SUFBQSxpQkFBSzs7O0lBQWxCLGVBQWE7SUFBYiw2Q0FBYTs7O0lBS2pELDhCQUF1RDtJQUFBLHVCQUFNO0lBQUEsaUJBQUs7OztJQUNsRSw4QkFBOEQ7SUFBQSxZQUFjO0lBQUEsaUJBQUs7OztJQUE5QyxzQ0FBeUI7SUFBRSxlQUFjO0lBQWQsOENB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dCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IHN0cmluZztcbiAgY29sb3I6IHN0cmluZztcbn1cblxuLyoqIENvbnN0YW50cyB1c2VkIHRvIGZpbGwgdXAgb3VyIGRhdGEgYmFzZS4gKi9cbmNvbnN0IENPTE9SUzogc3RyaW5nW10gPSBbXG4gICdtYXJvb24nLCAncmVkJywgJ29yYW5nZScsICd5ZWxsb3cnLCAnb2xpdmUnLCAnZ3JlZW4nLCAncHVycGxlJywgJ2Z1Y2hzaWEnLCAnbGltZScsICd0ZWFsJyxcbiAgJ2FxdWEnLCAnYmx1ZScsICduYXZ5JywgJ2JsYWNrJywgJ2dyYXknXG5dO1xuY29uc3QgTkFNRVM6IHN0cmluZ1tdID0gW1xuICAnTWFpYScsICdBc2hlcicsICdPbGl2aWEnLCAnQXR0aWN1cycsICdBbWVsaWEnLCAnSmFjaycsICdDaGFybG90dGUnLCAnVGhlb2RvcmUnLCAnSXNsYScsICdPbGl2ZXInLFxuICAnSXNhYmVsbGEnLCAnSmFzcGVyJywgJ0NvcmEnLCAnTGV2aScsICdWaW9sZXQnLCAnQXJ0aHVyJywgJ01pYScsICdUaG9tYXMnLCAnRWxpemFiZXRoJ1xuXTtcblxuLyoqXG4gKiBAdGl0bGUgRGF0YSB0YWJsZSB3aXRoIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpZCcsICduYW1lJywgJ3Byb2dyZXNzJywgJ2NvbG9yJ107XG4gIGRhdGFTb3VyY2U6IE1hdFRhYmxlRGF0YVNvdXJjZTxVc2VyRGF0YT47XG5cbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IsIHtzdGF0aWM6IHRydWV9KSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0LCB7c3RhdGljOiB0cnVlfSkgc29ydDogTWF0U29ydDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBDcmVhdGUgMTAwIHVzZXJzXG4gICAgY29uc3QgdXNlcnMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMH0sIChfLCBrKSA9PiBjcmVhdGVOZXdVc2VyKGsgKyAxKSk7XG5cbiAgICAvLyBBc3NpZ24gdGhlIGRhdGEgdG8gdGhlIGRhdGEgc291cmNlIGZvciB0aGUgdGFibGUgdG8gcmVuZGVyXG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh1c2Vycyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBCdWlsZHMgYW5kIHJldHVybnMgYSBuZXcgVXNlci4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld1VzZXIoaWQ6IG51bWJlcik6IFVzZXJEYXRhIHtcbiAgY29uc3QgbmFtZSA9IE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldICsgJyAnICtcbiAgICAgIE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldLmNoYXJBdCgwKSArICcuJztcblxuICByZXR1cm4ge1xuICAgIGlkOiBpZC50b1N0cmluZygpLFxuICAgIG5hbWU6IG5hbWUsXG4gICAgcHJvZ3Jlc3M6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMCkudG9TdHJpbmcoKSxcbiAgICBjb2xvcjogQ09MT1JTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChDT0xPUlMubGVuZ3RoIC0gMSkpXVxuICB9O1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZpbHRlcjwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgKGtleXVwKT1cImFwcGx5RmlsdGVyKCRldmVudClcIiBwbGFjZWhvbGRlcj1cIkV4LiBNaWFcIiAjaW5wdXQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48ZGl2IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0PlxuXG4gICAgPCEtLSBJRCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpZFwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IElEIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93LmlkfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gUHJvZ3Jlc3MgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicHJvZ3Jlc3NcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBQcm9ncmVzcyA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5wcm9ncmVzc319JSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOYW1lIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93Lm5hbWV9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBDb2xvciBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb2xvclwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IENvbG9yIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCIgW3N0eWxlLmNvbG9yXT1cInJvdy5jb2xvclwiPiB7e3Jvdy5jb2xvcn19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgICA8IS0tIFJvdyBzaG93biB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGRhdGEuIC0tPlxuICAgIDx0ciBjbGFzcz1cIm1hdC1yb3dcIiAqbWF0Tm9EYXRhUm93PlxuICAgICAgPHRkIGNsYXNzPVwibWF0LWNlbGxcIiBjb2xzcGFuPVwiNFwiPk5vIGRhdGEgbWF0Y2hpbmcgdGhlIGZpbHRlciBcInt7aW5wdXQudmFsdWV9fVwiPC90ZD5cbiAgICA8L3RyPlxuICA8L3RhYmxlPlxuXG4gIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuIl19