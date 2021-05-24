import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/checkbox";
function TableSelectionExample_th_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 10);
    i0.ɵɵelementStart(1, "mat-checkbox", 11);
    i0.ɵɵlistener("change", function TableSelectionExample_th_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return $event ? ctx_r12.masterToggle() : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected())("aria-label", ctx_r0.checkboxLabel());
} }
function TableSelectionExample_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵelementStart(1, "mat-checkbox", 13);
    i0.ɵɵlistener("click", function TableSelectionExample_td_3_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); })("change", function TableSelectionExample_td_3_Template_mat_checkbox_change_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r17); const row_r14 = restoredCtx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return $event ? ctx_r16.selection.toggle(row_r14) : null; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r14 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r1.selection.isSelected(row_r14))("aria-label", ctx_r1.checkboxLabel(row_r14));
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
    const element_r18 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r18.position, " ");
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
    const element_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r19.name, " ");
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
    const element_r20 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r20.weight, " ");
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
    const element_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r21.symbol, " ");
} }
function TableSelectionExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableSelectionExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 15);
    i0.ɵɵlistener("click", function TableSelectionExample_tr_17_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r24); const row_r22 = restoredCtx.$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.selection.toggle(row_r22); });
    i0.ɵɵelementEnd();
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
 * @title Table with selection
 */
export class TableSelectionExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.selection = new SelectionModel(true, []);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.selection.clear();
            return;
        }
        this.selection.select(...this.dataSource.data);
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
}
TableSelectionExample.ɵfac = function TableSelectionExample_Factory(t) { return new (t || TableSelectionExample)(); };
TableSelectionExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableSelectionExample, selectors: [["table-selection-example"]], decls: 18, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "position"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], [3, "checked", "indeterminate", "aria-label", "change"], ["mat-cell", ""], [3, "checked", "aria-label", "click", "change"], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableSelectionExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableSelectionExample, [{
        type: Component,
        args: [{
                selector: 'table-selection-example',
                styleUrls: ['table-selection-example.css'],
                templateUrl: 'table-selection-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zZWxlY3Rpb24vdGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7O0lDRXZELDhCQUFzQztJQUNwQyx3Q0FHNkM7SUFIL0IsbU5BQW9DLElBQUksSUFBQztJQUl2RCxpQkFBZTtJQUNqQixpQkFBSzs7O0lBSlcsZUFBbUQ7SUFBbkQsK0VBQW1ELHlFQUFBLHNDQUFBOzs7O0lBS25FLDhCQUFtQztJQUNqQyx3Q0FHZ0Q7SUFIbEMsbUhBQVMsd0JBQXdCLElBQUMsd09BQ2YsaUNBQXFCLEdBQUcsSUFBSSxJQURiO0lBSWhELGlCQUFlO0lBQ2pCLGlCQUFLOzs7O0lBSFcsZUFBcUM7SUFBckMsOERBQXFDLDZDQUFBOzs7SUFRckQsOEJBQXNDO0lBQUMscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ2hELDhCQUF1QztJQUFDLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixxREFBcUI7OztJQUs3RCw4QkFBc0M7SUFBQyxzQkFBSztJQUFBLGlCQUFLOzs7SUFDakQsOEJBQXVDO0lBQUMsWUFBaUI7SUFBQSxpQkFBSzs7O0lBQXRCLGVBQWlCO0lBQWpCLGlEQUFp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L2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBzZWxlY3Rpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU2VsZWN0aW9uRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydzZWxlY3QnLCAncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4oRUxFTUVOVF9EQVRBKTtcbiAgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsPFBlcmlvZGljRWxlbWVudD4odHJ1ZSwgW10pO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuaXNBbGxTZWxlY3RlZCgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCguLi50aGlzLmRhdGFTb3VyY2UuZGF0YSk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBQZXJpb2RpY0VsZW1lbnQpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG5cbiAgPCEtLSBDaGVja2JveCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic2VsZWN0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKGNoYW5nZSk9XCIkZXZlbnQgPyBtYXN0ZXJUb2dnbGUoKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIlxuICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiAhaXNBbGxTZWxlY3RlZCgpXCJcbiAgICAgICAgICAgICAgICAgICAgW2FyaWEtbGFiZWxdPVwiY2hlY2tib3hMYWJlbCgpXCI+XG4gICAgICA8L21hdC1jaGVja2JveD5cbiAgICA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgIDxtYXQtY2hlY2tib3ggKGNsaWNrKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiJGV2ZW50ID8gc2VsZWN0aW9uLnRvZ2dsZShyb3cpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdylcIlxuICAgICAgICAgICAgICAgICAgICBbYXJpYS1sYWJlbF09XCJjaGVja2JveExhYmVsKHJvdylcIj5cbiAgICAgIDwvbWF0LWNoZWNrYm94PlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiXG4gICAgICAoY2xpY2spPVwic2VsZWN0aW9uLnRvZ2dsZShyb3cpXCI+XG4gIDwvdHI+XG48L3RhYmxlPlxuIl19