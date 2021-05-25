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
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r12.id, " ");
} }
function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " Progress ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r13.progress, "% ");
} }
function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r14.name, " ");
} }
function TableOverviewExample_th_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 14);
    i0.ɵɵtext(1, " Fruit ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r15.fruit, " ");
} }
function TableOverviewExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
function TableOverviewExample_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function TableOverviewExample_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr", 18);
    i0.ɵɵelementStart(1, "td", 19);
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
const FRUITS = [
    'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
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
        this.displayedColumns = ['id', 'name', 'progress', 'fruit'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngAfterViewInit() {
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
TableOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatPaginator, 5);
        i0.ɵɵviewQuery(MatSort, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
    } }, decls: 23, vars: 5, consts: [["matInput", "", "placeholder", "Ex. Mia", 3, "keyup"], ["input", ""], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "fruit"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵtemplate(18, TableOverviewExample_td_18_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(19, TableOverviewExample_tr_19_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(20, TableOverviewExample_tr_20_Template, 1, 0, "tr", 11);
        i0.ɵɵtemplate(21, TableOverviewExample_tr_21_Template, 3, 1, "tr", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(22, "mat-paginator", 13);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableOverviewExample, [{
        type: Component,
        args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            }]
    }], function () { return []; }, { paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }] }); })();
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7O0lDT3JELDhCQUFzRDtJQUFDLG9CQUFHO0lBQUEsaUJBQUs7OztJQUMvRCw4QkFBbUM7SUFBQyxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsMkNBQVc7OztJQUsvQyw4QkFBc0Q7SUFBQywwQkFBUztJQUFBLGlCQUFLOzs7SUFDckUsOEJBQW1DO0lBQUMsWUFBa0I7SUFBQSxpQkFBSzs7O0lBQXZCLGVBQWtCO0lBQWxCLGtEQUFrQjs7O0lBS3RELDhCQUFzRDtJQUFDLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRSw4QkFBbUM7SUFBQyxZQUFhO0lBQUEsaUJBQUs7OztJQUFsQixlQUFhO0lBQWIsNkNBQWE7OztJQUtqRCw4QkFBc0Q7SUFBQyx1QkFBTTtJQUFBLGlCQUFLOzs7SUFDbEUsOEJBQW1DO0lBQUMsWUFBYztJQUFBLGlCQUFLOzs7SUFBbkIsZUFBYztJQUFkLDhDQUFjOzs7SUFHcEQs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QkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztnQkFDekMsV0FBVyxFQUFFLDZCQUE2QjthQUMzQztzQ0FLMEIsU0FBUztrQkFBakMsU0FBUzttQkFBQyxZQUFZO1lBQ0gsSUFBSTtrQkFBdkIsU0FBUzttQkFBQyxPQUFPOztBQXlCcEIscUNBQXFDO0FBQ3JDLFNBQVMsYUFBYSxDQUFDLEVBQVU7SUFDL0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztRQUN0RSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRXhFLE9BQU87UUFDTCxFQUFFLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFDcEQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRQYWdpbmF0b3J9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBVc2VyRGF0YSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IHN0cmluZztcbiAgZnJ1aXQ6IHN0cmluZztcbn1cblxuLyoqIENvbnN0YW50cyB1c2VkIHRvIGZpbGwgdXAgb3VyIGRhdGEgYmFzZS4gKi9cbmNvbnN0IEZSVUlUUzogc3RyaW5nW10gPSBbXG4gICdibHVlYmVycnknLCAnbHljaGVlJywgJ2tpd2knLCAnbWFuZ28nLCAncGVhY2gnLCAnbGltZScsICdwb21lZ3JhbmF0ZScsICdwaW5lYXBwbGUnXG5dO1xuY29uc3QgTkFNRVM6IHN0cmluZ1tdID0gW1xuICAnTWFpYScsICdBc2hlcicsICdPbGl2aWEnLCAnQXR0aWN1cycsICdBbWVsaWEnLCAnSmFjaycsICdDaGFybG90dGUnLCAnVGhlb2RvcmUnLCAnSXNsYScsICdPbGl2ZXInLFxuICAnSXNhYmVsbGEnLCAnSmFzcGVyJywgJ0NvcmEnLCAnTGV2aScsICdWaW9sZXQnLCAnQXJ0aHVyJywgJ01pYScsICdUaG9tYXMnLCAnRWxpemFiZXRoJ1xuXTtcblxuLyoqXG4gKiBAdGl0bGUgRGF0YSB0YWJsZSB3aXRoIHNvcnRpbmcsIHBhZ2luYXRpb24sIGFuZCBmaWx0ZXJpbmcuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaWQnLCAnbmFtZScsICdwcm9ncmVzcycsICdmcnVpdCddO1xuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8VXNlckRhdGE+O1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSAxMDAgdXNlcnNcbiAgICBjb25zdCB1c2VycyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwfSwgKF8sIGspID0+IGNyZWF0ZU5ld1VzZXIoayArIDEpKTtcblxuICAgIC8vIEFzc2lnbiB0aGUgZGF0YSB0byB0aGUgZGF0YSBzb3VyY2UgZm9yIHRoZSB0YWJsZSB0byByZW5kZXJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHVzZXJzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBCdWlsZHMgYW5kIHJldHVybnMgYSBuZXcgVXNlci4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld1VzZXIoaWQ6IG51bWJlcik6IFVzZXJEYXRhIHtcbiAgY29uc3QgbmFtZSA9IE5BTUVTW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChOQU1FUy5sZW5ndGggLSAxKSldICsgJyAnICtcbiAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXS5jaGFyQXQoMCkgKyAnLic7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHByb2dyZXNzOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCksXG4gICAgZnJ1aXQ6IEZSVUlUU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRlJVSVRTLmxlbmd0aCAtIDEpKV1cbiAgfTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GaWx0ZXI8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigkZXZlbnQpXCIgcGxhY2Vob2xkZXI9XCJFeC4gTWlhXCIgI2lucHV0PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGRpdiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydD5cblxuICAgIDwhLS0gSUQgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaWRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBJRCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5pZH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIFByb2dyZXNzIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInByb2dyZXNzXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gUHJvZ3Jlc3MgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cucHJvZ3Jlc3N9fSUgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gTmFtZSA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5uYW1lfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gRnJ1aXQgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZnJ1aXRcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBGcnVpdCA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5mcnVpdH19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG5cbiAgICA8IS0tIFJvdyBzaG93biB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGRhdGEuIC0tPlxuICAgIDx0ciBjbGFzcz1cIm1hdC1yb3dcIiAqbWF0Tm9EYXRhUm93PlxuICAgICAgPHRkIGNsYXNzPVwibWF0LWNlbGxcIiBjb2xzcGFuPVwiNFwiPk5vIGRhdGEgbWF0Y2hpbmcgdGhlIGZpbHRlciBcInt7aW5wdXQudmFsdWV9fVwiPC90ZD5cbiAgICA8L3RyPlxuICA8L3RhYmxlPlxuXG4gIDxtYXQtcGFnaW5hdG9yIFtwYWdlU2l6ZU9wdGlvbnNdPVwiWzUsIDEwLCAyNSwgMTAwXVwiPjwvbWF0LXBhZ2luYXRvcj5cbjwvZGl2PlxuXG4iXX0=