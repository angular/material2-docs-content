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
function TableOverviewExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " ID ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r128 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r128.id, " ");
} }
function TableOverviewExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Progress ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r129 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r129.progress, "% ");
} }
function TableOverviewExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r130 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r130.name, " ");
} }
function TableOverviewExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 13);
    i0.ɵɵtext(1, " Color ");
    i0.ɵɵelementEnd();
} }
function TableOverviewExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var row_r131 = ctx.$implicit;
    i0.ɵɵstyleProp("color", row_r131.color);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r131.color, " ");
} }
function TableOverviewExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
} }
function TableOverviewExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 16);
} }
var _c0 = [5, 10, 25, 100];
/** Constants used to fill up our data base. */
var COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
var NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
var TableOverviewExample = /** @class */ (function () {
    function TableOverviewExample() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        var users = Array.from({ length: 100 }, function (_, k) { return createNewUser(k + 1); });
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    TableOverviewExample.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    TableOverviewExample.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    TableOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-overview-example',
                    styleUrls: ['table-overview-example.css'],
                    templateUrl: 'table-overview-example.html',
                },] },
    ];
    /** @nocollapse */
    TableOverviewExample.ctorParameters = function () { return []; };
    TableOverviewExample.propDecorators = {
        paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
        sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
    };
    TableOverviewExample.ngFactoryDef = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
    TableOverviewExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵstaticViewQuery(MatPaginator, true);
            i0.ɵɵstaticViewQuery(MatSort, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.sort = _t.first);
        } }, decls: 19, vars: 4, consts: [["matInput", "", "placeholder", "Filter", 3, "keyup"], [1, "mat-elevation-z8"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "progress"], ["matColumnDef", "name"], ["matColumnDef", "color"], ["mat-cell", "", 3, "color", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "input", 0);
            i0.ɵɵlistener("keyup", function TableOverviewExample_Template_input_keyup_1_listener($event) { return ctx.applyFilter($event.target.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "table", 2);
            i0.ɵɵelementContainerStart(4, 3);
            i0.ɵɵtemplate(5, TableOverviewExample_th_5_Template, 2, 0, "th", 4);
            i0.ɵɵtemplate(6, TableOverviewExample_td_6_Template, 2, 1, "td", 5);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(7, 6);
            i0.ɵɵtemplate(8, TableOverviewExample_th_8_Template, 2, 0, "th", 4);
            i0.ɵɵtemplate(9, TableOverviewExample_td_9_Template, 2, 1, "td", 5);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(10, 7);
            i0.ɵɵtemplate(11, TableOverviewExample_th_11_Template, 2, 0, "th", 4);
            i0.ɵɵtemplate(12, TableOverviewExample_td_12_Template, 2, 1, "td", 5);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(13, 8);
            i0.ɵɵtemplate(14, TableOverviewExample_th_14_Template, 2, 0, "th", 4);
            i0.ɵɵtemplate(15, TableOverviewExample_td_15_Template, 2, 2, "td", 9);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(16, TableOverviewExample_tr_16_Template, 1, 0, "tr", 10);
            i0.ɵɵtemplate(17, TableOverviewExample_tr_17_Template, 1, 0, "tr", 11);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(18, "mat-paginator", 12);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(13);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("pageSizeOptions", _c0);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatTable, i4.MatSort, i3.MatColumnDef, i3.MatHeaderCellDef, i3.MatCellDef, i3.MatHeaderRowDef, i3.MatRowDef, i5.MatPaginator, i3.MatHeaderCell, i4.MatSortHeader, i3.MatCell, i3.MatHeaderRow, i3.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
    return TableOverviewExample;
}());
export { TableOverviewExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TableOverviewExample, [{
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
        }] });
/** Builds and returns a new User. */
function createNewUser(id) {
    var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ01yRCw4QkFBdUQ7SUFBQSxvQkFBRztJQUFBLGlCQUFLOzs7SUFDL0QsOEJBQW9DO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLDRDQUFXOzs7SUFLL0MsOEJBQXVEO0lBQUEsMEJBQVM7SUFBQSxpQkFBSzs7O0lBQ3JFLDhCQUFvQztJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixlQUFrQjtJQUFsQixtREFBa0I7OztJQUt0RCw4QkFBdUQ7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakUsOEJBQW9DO0lBQUEsWUFBYTtJQUFBLGlCQUFLOzs7SUFBbEIsZUFBYTtJQUFiLDhDQUFhOzs7SUFLakQsOEJBQXVEO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xFLDhCQUE4RDtJQUFBLFlBQWM7SUFBQSxpQkFBSzs7O0lBQTlD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QUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9ELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRTb3J0fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGEge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb2dyZXNzOiBzdHJpbmc7XG4gIGNvbG9yOiBzdHJpbmc7XG59XG5cbi8qKiBDb25zdGFudHMgdXNlZCB0byBmaWxsIHVwIG91ciBkYXRhIGJhc2UuICovXG5jb25zdCBDT0xPUlM6IHN0cmluZ1tdID0gW1xuICAnbWFyb29uJywgJ3JlZCcsICdvcmFuZ2UnLCAneWVsbG93JywgJ29saXZlJywgJ2dyZWVuJywgJ3B1cnBsZScsICdmdWNoc2lhJywgJ2xpbWUnLCAndGVhbCcsXG4gICdhcXVhJywgJ2JsdWUnLCAnbmF2eScsICdibGFjaycsICdncmF5J1xuXTtcbmNvbnN0IE5BTUVTOiBzdHJpbmdbXSA9IFtcbiAgJ01haWEnLCAnQXNoZXInLCAnT2xpdmlhJywgJ0F0dGljdXMnLCAnQW1lbGlhJywgJ0phY2snLCAnQ2hhcmxvdHRlJywgJ1RoZW9kb3JlJywgJ0lzbGEnLCAnT2xpdmVyJyxcbiAgJ0lzYWJlbGxhJywgJ0phc3BlcicsICdDb3JhJywgJ0xldmknLCAnVmlvbGV0JywgJ0FydGh1cicsICdNaWEnLCAnVGhvbWFzJywgJ0VsaXphYmV0aCdcbl07XG5cbi8qKlxuICogQHRpdGxlIERhdGEgdGFibGUgd2l0aCBzb3J0aW5nLCBwYWdpbmF0aW9uLCBhbmQgZmlsdGVyaW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaWQnLCAnbmFtZScsICdwcm9ncmVzcycsICdjb2xvciddO1xuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8VXNlckRhdGE+O1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yLCB7c3RhdGljOiB0cnVlfSkgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCwge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQ3JlYXRlIDEwMCB1c2Vyc1xuICAgIGNvbnN0IHVzZXJzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiAxMDB9LCAoXywgaykgPT4gY3JlYXRlTmV3VXNlcihrICsgMSkpO1xuXG4gICAgLy8gQXNzaWduIHRoZSBkYXRhIHRvIHRoZSBkYXRhIHNvdXJjZSBmb3IgdGhlIHRhYmxlIHRvIHJlbmRlclxuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodXNlcnMpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxufVxuXG4vKiogQnVpbGRzIGFuZCByZXR1cm5zIGEgbmV3IFVzZXIuICovXG5mdW5jdGlvbiBjcmVhdGVOZXdVc2VyKGlkOiBudW1iZXIpOiBVc2VyRGF0YSB7XG4gIGNvbnN0IG5hbWUgPSBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXSArICcgJyArXG4gICAgICBOQU1FU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoTkFNRVMubGVuZ3RoIC0gMSkpXS5jaGFyQXQoMCkgKyAnLic7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHByb2dyZXNzOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCksXG4gICAgY29sb3I6IENPTE9SU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoQ09MT1JTLmxlbmd0aCAtIDEpKV1cbiAgfTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigkZXZlbnQudGFyZ2V0LnZhbHVlKVwiIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48ZGl2IGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0PlxuXG4gICAgPCEtLSBJRCBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpZFwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IElEIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93LmlkfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gUHJvZ3Jlc3MgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicHJvZ3Jlc3NcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBQcm9ncmVzcyA8L3RoPlxuICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPiB7e3Jvdy5wcm9ncmVzc319JSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOYW1lIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93Lm5hbWV9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBDb2xvciBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJjb2xvclwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IENvbG9yIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCIgW3N0eWxlLmNvbG9yXT1cInJvdy5jb2xvclwiPiB7e3Jvdy5jb2xvcn19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPlxuICAgIDwvdHI+XG4gIDwvdGFibGU+XG5cbiAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDI1LCAxMDBdXCI+PC9tYXQtcGFnaW5hdG9yPlxuPC9kaXY+XG4iXX0=