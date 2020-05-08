/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-overview/table-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * @record
 */
export function UserData() { }
if (false) {
    /** @type {?} */
    UserData.prototype.id;
    /** @type {?} */
    UserData.prototype.name;
    /** @type {?} */
    UserData.prototype.progress;
    /** @type {?} */
    UserData.prototype.color;
}
/**
 * Constants used to fill up our data base.
 * @type {?}
 */
const COLORS = [
    'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
    'aqua', 'blue', 'navy', 'black', 'gray'
];
/** @type {?} */
const NAMES = [
    'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
    'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
/**
 * \@title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'color'];
        // Create 100 users
        /** @type {?} */
        const users = Array.from({ length: 100 }, (/**
         * @param {?} _
         * @param {?} k
         * @return {?}
         */
        (_, k) => createNewUser(k + 1)));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    applyFilter(event) {
        /** @type {?} */
        const filterValue = ((/** @type {?} */ (event.target))).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
}
TableOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'table-overview-example',
                styleUrls: ['table-overview-example.css'],
                templateUrl: 'table-overview-example.html',
            },] },
];
/** @nocollapse */
TableOverviewExample.ctorParameters = () => [];
TableOverviewExample.propDecorators = {
    paginator: [{ type: ViewChild, args: [MatPaginator, { static: true },] }],
    sort: [{ type: ViewChild, args: [MatSort, { static: true },] }]
};
/** @nocollapse */ TableOverviewExample.ɵfac = function TableOverviewExample_Factory(t) { return new (t || TableOverviewExample)(); };
/** @nocollapse */ TableOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableOverviewExample, selectors: [["table-overview-example"]], viewQuery: function TableOverviewExample_Query(rf, ctx) { if (rf & 1) {
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
if (false) {
    /** @type {?} */
    TableOverviewExample.prototype.displayedColumns;
    /** @type {?} */
    TableOverviewExample.prototype.dataSource;
    /** @type {?} */
    TableOverviewExample.prototype.paginator;
    /** @type {?} */
    TableOverviewExample.prototype.sort;
}
/**
 * Builds and returns a new User.
 * @param {?} id
 * @return {?}
 */
function createNewUser(id) {
    /** @type {?} */
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQy9DLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7OztJQ09yRCw4QkFBdUQ7SUFBQSxvQkFBRztJQUFBLGlCQUFLOzs7SUFDL0QsOEJBQW9DO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLDJDQUFXOzs7SUFLL0MsOEJBQXVEO0lBQUEsMEJBQVM7SUFBQSxpQkFBSzs7O0lBQ3JFLDhCQUFvQztJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixlQUFrQjtJQUFsQixrREFBa0I7OztJQUt0RCw4QkFBdUQ7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakUsOEJBQW9DO0lBQUEsWUFBYTtJQUFBLGlCQUFLOzs7SUFBbEIsZUFBYTtJQUFiLDZDQUFhOzs7SUFLakQsOEJBQXVEO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xFLDhCQUE4RDtJQUFBLFlBQWM7SUFBQSxpQkFBSzs7O0lBQTlDLHNDQUF5QjtJQUFFLGVBQWM7SUFB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LFFBQVEsRUFBRTtRQUNqQixJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFDcEQsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBjb2xvcjogc3RyaW5nO1xufVxuXG4vKiogQ29uc3RhbnRzIHVzZWQgdG8gZmlsbCB1cCBvdXIgZGF0YSBiYXNlLiAqL1xuY29uc3QgQ09MT1JTOiBzdHJpbmdbXSA9IFtcbiAgJ21hcm9vbicsICdyZWQnLCAnb3JhbmdlJywgJ3llbGxvdycsICdvbGl2ZScsICdncmVlbicsICdwdXJwbGUnLCAnZnVjaHNpYScsICdsaW1lJywgJ3RlYWwnLFxuICAnYXF1YScsICdibHVlJywgJ25hdnknLCAnYmxhY2snLCAnZ3JheSdcbl07XG5jb25zdCBOQU1FUzogc3RyaW5nW10gPSBbXG4gICdNYWlhJywgJ0FzaGVyJywgJ09saXZpYScsICdBdHRpY3VzJywgJ0FtZWxpYScsICdKYWNrJywgJ0NoYXJsb3R0ZScsICdUaGVvZG9yZScsICdJc2xhJywgJ09saXZlcicsXG4gICdJc2FiZWxsYScsICdKYXNwZXInLCAnQ29yYScsICdMZXZpJywgJ1Zpb2xldCcsICdBcnRodXInLCAnTWlhJywgJ1Rob21hcycsICdFbGl6YWJldGgnXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBEYXRhIHRhYmxlIHdpdGggc29ydGluZywgcGFnaW5hdGlvbiwgYW5kIGZpbHRlcmluZy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlT3ZlcnZpZXdFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2lkJywgJ25hbWUnLCAncHJvZ3Jlc3MnLCAnY29sb3InXTtcbiAgZGF0YVNvdXJjZTogTWF0VGFibGVEYXRhU291cmNlPFVzZXJEYXRhPjtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvciwge3N0YXRpYzogdHJ1ZX0pIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICBAVmlld0NoaWxkKE1hdFNvcnQsIHtzdGF0aWM6IHRydWV9KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSAxMDAgdXNlcnNcbiAgICBjb25zdCB1c2VycyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwfSwgKF8sIGspID0+IGNyZWF0ZU5ld1VzZXIoayArIDEpKTtcblxuICAgIC8vIEFzc2lnbiB0aGUgZGF0YSB0byB0aGUgZGF0YSBzb3VyY2UgZm9yIHRoZSB0YWJsZSB0byByZW5kZXJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHVzZXJzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZTtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqIEJ1aWxkcyBhbmQgcmV0dXJucyBhIG5ldyBVc2VyLiAqL1xuZnVuY3Rpb24gY3JlYXRlTmV3VXNlcihpZDogbnVtYmVyKTogVXNlckRhdGEge1xuICBjb25zdCBuYW1lID0gTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0gKyAnICcgK1xuICAgICAgTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0uY2hhckF0KDApICsgJy4nO1xuXG4gIHJldHVybiB7XG4gICAgaWQ6IGlkLnRvU3RyaW5nKCksXG4gICAgbmFtZTogbmFtZSxcbiAgICBwcm9ncmVzczogTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwKS50b1N0cmluZygpLFxuICAgIGNvbG9yOiBDT0xPUlNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKENPTE9SUy5sZW5ndGggLSAxKSldXG4gIH07XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmlsdGVyPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiRXguIE1pYVwiICNpbnB1dD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQ+XG5cbiAgICA8IS0tIElEIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImlkXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gSUQgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cuaWR9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBQcm9ncmVzcyBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwcm9ncmVzc1wiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFByb2dyZXNzIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93LnByb2dyZXNzfX0lIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IE5hbWUgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cubmFtZX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIENvbG9yIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNvbG9yXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gQ29sb3IgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIiBbc3R5bGUuY29sb3JdPVwicm93LmNvbG9yXCI+IHt7cm93LmNvbG9yfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICAgIDwhLS0gUm93IHNob3duIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgZGF0YS4gLS0+XG4gICAgPHRyIGNsYXNzPVwibWF0LXJvd1wiICptYXROb0RhdGFSb3c+XG4gICAgICA8dGQgY2xhc3M9XCJtYXQtY2VsbFwiIGNvbHNwYW49XCI0XCI+Tm8gZGF0YSBtYXRjaGluZyB0aGUgZmlsdGVyIFwie3tpbnB1dC52YWx1ZX19XCI8L3RkPlxuICAgIDwvdHI+XG4gIDwvdGFibGU+XG5cbiAgPG1hdC1wYWdpbmF0b3IgW3BhZ2VTaXplT3B0aW9uc109XCJbNSwgMTAsIDI1LCAxMDBdXCI+PC9tYXQtcGFnaW5hdG9yPlxuPC9kaXY+XG4iXX0=