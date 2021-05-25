import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableRowBindingExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.position);
} }
function TableRowBindingExample_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.name);
} }
function TableRowBindingExample_th_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r14.weight);
} }
function TableRowBindingExample_th_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 11);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r15 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r15.symbol);
} }
function TableRowBindingExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 13);
} }
function TableRowBindingExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 14);
    i0.ɵɵlistener("click", function TableRowBindingExample_tr_14_Template_tr_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r18); const row_r16 = restoredCtx.$implicit; const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.clickedRows.add(row_r16); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("demo-row-is-clicked", ctx_r9.clickedRows.has(row_r16));
} }
function TableRowBindingExample_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Clicked rows will be logged here\n");
    i0.ɵɵelementEnd();
} }
function TableRowBindingExample_li_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const clickedRow_r19 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" Clicked on ", clickedRow_r19.name, " ");
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
 * @title Binding event handlers and properties to the table rows.
 */
export class TableRowBindingExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.clickedRows = new Set();
    }
}
TableRowBindingExample.ɵfac = function TableRowBindingExample_Factory(t) { return new (t || TableRowBindingExample)(); };
TableRowBindingExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableRowBindingExample, selectors: [["table-row-binding-example"]], decls: 21, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "demo-row-is-clicked", "click", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "click"]], template: function TableRowBindingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, TableRowBindingExample_th_2_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(3, TableRowBindingExample_td_3_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(4, 4);
        i0.ɵɵtemplate(5, TableRowBindingExample_th_5_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(6, TableRowBindingExample_td_6_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(7, 5);
        i0.ɵɵtemplate(8, TableRowBindingExample_th_8_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(9, TableRowBindingExample_td_9_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(10, 6);
        i0.ɵɵtemplate(11, TableRowBindingExample_th_11_Template, 2, 0, "th", 2);
        i0.ɵɵtemplate(12, TableRowBindingExample_td_12_Template, 2, 1, "td", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(13, TableRowBindingExample_tr_13_Template, 1, 0, "tr", 7);
        i0.ɵɵtemplate(14, TableRowBindingExample_tr_14_Template, 1, 2, "tr", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "div");
        i0.ɵɵelementStart(16, "h3");
        i0.ɵɵtext(17, " Click Log ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(18, TableRowBindingExample_div_18_Template, 2, 0, "div", 9);
        i0.ɵɵelementStart(19, "ul");
        i0.ɵɵtemplate(20, TableRowBindingExample_li_20_Template, 2, 1, "li", 10);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", !ctx.clickedRows.size);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.clickedRows);
    } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i2.NgIf, i2.NgForOf, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-row[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  border-top: 1px solid transparent;\n  cursor: pointer;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover   .mat-cell[_ngcontent-%COMP%] {\n  border-color: currentColor;\n}\n\n.demo-row-is-clicked[_ngcontent-%COMP%] {\n  font-weight: bold;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableRowBindingExample, [{
        type: Component,
        args: [{
                selector: 'table-row-binding-example',
                styleUrls: ['table-row-binding-example.css'],
                templateUrl: 'table-row-binding-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWJpbmRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXJvdy1iaW5kaW5nL3RhYmxlLXJvdy1iaW5kaW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctYmluZGluZy90YWJsZS1yb3ctYmluZGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7SUNHcEMsOEJBQXNDO0lBQUEsbUJBQUc7SUFBQSxpQkFBSzs7O0lBQzlDLDhCQUF1QztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7OztJQUF6QixlQUFvQjtJQUFwQiwwQ0FBb0I7OztJQUszRCw4QkFBc0M7SUFBQSxvQkFBSTtJQUFBLGlCQUFLOzs7SUFDL0MsOEJBQXVDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSzs7O0lBQXJCLGVBQWdCO0lBQWhCLHNDQUFnQjs7O0lBS3ZELDhCQUFzQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsd0NBQWtCOzs7SUFLekQsOEJBQXNDO0lBQUEsc0JBQU07SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUF1QztJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixlQUFrQjtJQUFsQix3Q0FBa0I7OztJQUczRCx5QkFBNEQ7Ozs7SUFDNUQsOEJBS0M7SUFIRyw0TkFBUyxnQ0FBb0IsSUFBQztJQUdqQyxpQkFBSzs7OztJQUZGLHNFQUFrRDs7O0lBV3hELDJCQUErQjtJQUM3QixtREFDRjtJQUFBLGlCQUFNOzs7SUFHSiww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cG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBCaW5kaW5nIGV2ZW50IGhhbmRsZXJzIGFuZCBwcm9wZXJ0aWVzIHRvIHRoZSB0YWJsZSByb3dzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1yb3ctYmluZGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXJvdy1iaW5kaW5nLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtcm93LWJpbmRpbmctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVSb3dCaW5kaW5nRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgY2xpY2tlZFJvd3MgPSBuZXcgU2V0PFBlcmlvZGljRWxlbWVudD4oKTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBkZW1vLXRhYmxlXCI+XG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5Oby48L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnBvc2l0aW9ufX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5hbWU8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50Lm5hbWV9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPldlaWdodDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQud2VpZ2h0fX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TeW1ib2w8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnN5bWJvbH19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyXG4gICAgICBtYXQtcm93XG4gICAgICAoY2xpY2spPVwiY2xpY2tlZFJvd3MuYWRkKHJvdylcIlxuICAgICAgW2NsYXNzLmRlbW8tcm93LWlzLWNsaWNrZWRdPVwiY2xpY2tlZFJvd3MuaGFzKHJvdylcIlxuICAgICAgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCJcbiAgPjwvdHI+XG48L3RhYmxlPlxuXG48ZGl2PlxuICA8aDM+XG4gICAgQ2xpY2sgTG9nXG4gIDwvaDM+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cIiFjbGlja2VkUm93cy5zaXplXCI+XG4gIENsaWNrZWQgcm93cyB3aWxsIGJlIGxvZ2dlZCBoZXJlXG48L2Rpdj5cblxuPHVsPlxuICA8bGkgKm5nRm9yPVwibGV0IGNsaWNrZWRSb3cgb2YgY2xpY2tlZFJvd3NcIj5cbiAgICBDbGlja2VkIG9uIHt7Y2xpY2tlZFJvdy5uYW1lfX1cbiAgPC9saT5cbjwvdWw+XG4iXX0=