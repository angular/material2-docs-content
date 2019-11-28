/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-selection/table-selection-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/checkbox";
function TableSelectionExample_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r185 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function TableSelectionExample_th_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r185); const ctx_r184 = i0.ɵɵnextContext(); return $event ? ctx_r184.masterToggle() : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r172 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r172.selection.hasValue() && ctx_r172.isAllSelected())("indeterminate", ctx_r172.selection.hasValue() && !ctx_r172.isAllSelected())("aria-label", ctx_r172.checkboxLabel());
} }
function TableSelectionExample_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r188 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-checkbox", 13);
    i0.ɵɵlistener("click", function TableSelectionExample_td_3_Template_mat_checkbox_click_1_listener($event) { i0.ɵɵrestoreView(_r188); return $event.stopPropagation(); });
    i0.ɵɵlistener("change", function TableSelectionExample_td_3_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r188); const row_r186 = ctx.$implicit; const ctx_r189 = i0.ɵɵnextContext(); return $event ? ctx_r189.selection.toggle(row_r186) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r186 = ctx.$implicit;
    const ctx_r173 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r173.selection.isSelected(row_r186))("aria-label", ctx_r173.checkboxLabel(row_r186));
} }
function TableSelectionExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r190 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r190.position, " ");
} }
function TableSelectionExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r191 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r191.name, " ");
} }
function TableSelectionExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r192 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r192.weight, " ");
} }
function TableSelectionExample_th_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function TableSelectionExample_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r193 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r193.symbol, " ");
} }
function TableSelectionExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableSelectionExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r196 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function TableSelectionExample_tr_17_Template_tr_click_0_listener($event) { i0.ɵɵrestoreView(_r196); const row_r194 = ctx.$implicit; const ctx_r195 = i0.ɵɵnextContext(); return ctx_r195.selection.toggle(row_r194); });
    i0.ɵɵelementEnd();
} }
/**
 * @record
 */
export function PeriodicElement() { }
if (false) {
    /** @type {?} */
    PeriodicElement.prototype.name;
    /** @type {?} */
    PeriodicElement.prototype.position;
    /** @type {?} */
    PeriodicElement.prototype.weight;
    /** @type {?} */
    PeriodicElement.prototype.symbol;
}
/** @type {?} */
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
 * \@title Table with selection
 */
export class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.selection = new SelectionModel(true, []);
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    isAllSelected() {
        /** @type {?} */
        const numSelected = this.selection.selected.length;
        /** @type {?} */
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
TableSelectionExample.decorators = [
    { type: Component, args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            },] },
];
/** @nocollapse */ TableSelectionExample.ɵfac = function TableSelectionExample_Factory(t) { return new (t || TableSelectionExample)(); };
/** @nocollapse */ TableSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableSelectionExample, selectors: [["table-selection-example"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableSelectionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableSelectionExample_th_2_Template, 2, 3, "th", 2);
        i0.ɵɵtemplate(3, TableSelectionExample_td_3_Template, 2, 2, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableSelectionExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableSelectionExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableSelectionExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableSelectionExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableSelectionExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableSelectionExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(13, 7);
        i0.ɵɵtemplate(14, TableSelectionExample_th_14_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(15, TableSelectionExample_td_15_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(16, TableSelectionExample_tr_16_Template, 1, 0, "tr", 8);
        i0.ɵɵtemplate(17, TableSelectionExample_tr_17_Template, 1, 0, "tr", 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(16);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderCell, i2.MatCheckbox, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableSelectionExample, [{
        type: Component,
        args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableSelectionExample.prototype.displayedColumns;
    /** @type {?} */
    TableSelectionExample.prototype.dataSource;
    /** @type {?} */
    TableSelectionExample.prototype.selection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7SUNFdkQsOEJBQ0U7SUFBQSx3Q0FJZTtJQUpELHNOQUFvQyxJQUFJLElBQUM7SUFJdkQsaUJBQWU7SUFDakIsaUJBQUs7OztJQUpXLGVBQW1EO0lBQW5ELG1GQUFtRCw2RUFBQSx3Q0FBQTs7OztJQUtuRSw4QkFDRTtJQUFBLHdDQUllO0lBSkQsNElBQVMsd0JBQXdCLElBQUM7SUFDbEMsNE5BQW1CLG1DQUFzQixHQUFFLElBQUksSUFBQztJQUc5RCxpQkFBZTtJQUNqQixpQkFBSzs7OztJQUhXLGVBQXFDO0lBQXJDLGlFQUFxQyxnREFBQTs7O0lBUXJELDhCQUF1QztJQUFBLHFCQUFJO0lBQUEsaUJBQUs7OztJQUNoRCw4QkFBd0M7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFLN0QsOEJBQXVDO0lBQUEsc0JBQUs7SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUF3QztJQUFBLFlBQWlCO0lBQUEsaUJBQUs7OztJQUF0QixlQUFpQjtJQUFqQixr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QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxXQUFXLEVBQUUsOEJBQThCO2FBQzVDOzs7O0lBRUMsaURBQWdGOztJQUNoRiwyQ0FBbUU7O0lBQ25FLDBDQUEwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uTW9kZWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXNlbGVjdGlvbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVNlbGVjdGlvbkV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnc2VsZWN0JywgJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+KEVMRU1FTlRfREFUQSk7XG4gIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbDxQZXJpb2RpY0VsZW1lbnQ+KHRydWUsIFtdKTtcblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjaGVja2JveCBvbiB0aGUgcGFzc2VkIHJvdyAqL1xuICBjaGVja2JveExhYmVsKHJvdz86IFBlcmlvZGljRWxlbWVudCk6IHN0cmluZyB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xuICB9XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cblxuICA8IS0tIENoZWNrYm94IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzZWxlY3RcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlxuICAgICAgPG1hdC1jaGVja2JveCAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiXG4gICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIlxuICAgICAgICAgICAgICAgICAgICBbYXJpYS1sYWJlbF09XCJjaGVja2JveExhYmVsKClcIj5cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgPG1hdC1jaGVja2JveCAoY2xpY2spPVwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXCJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCIkZXZlbnQgPyBzZWxlY3Rpb24udG9nZ2xlKHJvdykgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgIFthcmlhLWxhYmVsXT1cImNoZWNrYm94TGFiZWwocm93KVwiPlxuICAgICAgPC9tYXQtY2hlY2tib3g+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCJcbiAgICAgIChjbGljayk9XCJzZWxlY3Rpb24udG9nZ2xlKHJvdylcIj5cbiAgPC90cj5cbjwvdGFibGU+XG4iXX0=