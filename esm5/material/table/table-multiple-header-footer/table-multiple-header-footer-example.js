import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/common";
function TableMultipleHeaderFooterExample_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Item ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var transaction_r115 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", transaction_r115.item, " ");
} }
function TableMultipleHeaderFooterExample_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1, " Total ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 16);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var transaction_r116 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, transaction_r116.cost), " ");
} }
function TableMultipleHeaderFooterExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 17);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "currency");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r106 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r106.getTotalCost()), " ");
} }
function TableMultipleHeaderFooterExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Name of the item purchased ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_th_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 15);
    i0.ɵɵtext(1, " Cost of the item in USD ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵtext(1, " Please note that the cost of items displayed are completely and totally made up. ");
    i0.ɵɵelementEnd();
} }
function TableMultipleHeaderFooterExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 19);
} }
function TableMultipleHeaderFooterExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function TableMultipleHeaderFooterExample_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function TableMultipleHeaderFooterExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function TableMultipleHeaderFooterExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 23);
} }
var _c0 = function () { return ["item-description", "cost-description"]; };
var _c1 = function () { return ["disclaimer"]; };
/**
 * @title Table with multiple header and footer rows
 */
var TableMultipleHeaderFooterExample = /** @class */ (function () {
    function TableMultipleHeaderFooterExample() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /** Gets the total cost of all transactions. */
    TableMultipleHeaderFooterExample.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableMultipleHeaderFooterExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-multiple-header-footer-example',
                    styleUrls: ['table-multiple-header-footer-example.css'],
                    templateUrl: 'table-multiple-header-footer-example.html',
                },] },
    ];
    TableMultipleHeaderFooterExample.ɵfac = function TableMultipleHeaderFooterExample_Factory(t) { return new (t || TableMultipleHeaderFooterExample)(); };
    TableMultipleHeaderFooterExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableMultipleHeaderFooterExample, selectors: [["table-multiple-header-footer-example"]], decls: 20, vars: 8, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "item"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-footer-cell", "", 4, "matFooterCellDef"], ["matColumnDef", "cost"], ["matColumnDef", "item-description"], ["matColumnDef", "cost-description"], ["matColumnDef", "disclaimer"], ["mat-footer-cell", "", "colspan", "2", 4, "matFooterCellDef"], ["mat-header-row", "", "class", "example-first-header-row", 4, "matHeaderRowDef"], ["mat-header-row", "", "class", "example-second-header-row", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-footer-row", "", "class", "example-first-footer-row", 4, "matFooterRowDef"], ["mat-footer-row", "", "class", "example-second-footer-row", 4, "matFooterRowDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-footer-cell", ""], ["mat-footer-cell", "", "colspan", "2"], ["mat-header-row", "", 1, "example-first-header-row"], ["mat-header-row", "", 1, "example-second-header-row"], ["mat-row", ""], ["mat-footer-row", "", 1, "example-first-footer-row"], ["mat-footer-row", "", 1, "example-second-footer-row"]], template: function TableMultipleHeaderFooterExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, TableMultipleHeaderFooterExample_th_2_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(3, TableMultipleHeaderFooterExample_td_3_Template, 2, 1, "td", 3);
            i0.ɵɵtemplate(4, TableMultipleHeaderFooterExample_td_4_Template, 2, 0, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(5, 5);
            i0.ɵɵtemplate(6, TableMultipleHeaderFooterExample_th_6_Template, 2, 0, "th", 2);
            i0.ɵɵtemplate(7, TableMultipleHeaderFooterExample_td_7_Template, 3, 3, "td", 3);
            i0.ɵɵtemplate(8, TableMultipleHeaderFooterExample_td_8_Template, 3, 3, "td", 4);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(9, 6);
            i0.ɵɵtemplate(10, TableMultipleHeaderFooterExample_th_10_Template, 2, 0, "th", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(11, 7);
            i0.ɵɵtemplate(12, TableMultipleHeaderFooterExample_th_12_Template, 2, 0, "th", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(13, 8);
            i0.ɵɵtemplate(14, TableMultipleHeaderFooterExample_td_14_Template, 2, 0, "td", 9);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(15, TableMultipleHeaderFooterExample_tr_15_Template, 1, 0, "tr", 10);
            i0.ɵɵtemplate(16, TableMultipleHeaderFooterExample_tr_16_Template, 1, 0, "tr", 11);
            i0.ɵɵtemplate(17, TableMultipleHeaderFooterExample_tr_17_Template, 1, 0, "tr", 12);
            i0.ɵɵtemplate(18, TableMultipleHeaderFooterExample_tr_18_Template, 1, 0, "tr", 13);
            i0.ɵɵtemplate(19, TableMultipleHeaderFooterExample_tr_19_Template, 1, 0, "tr", 14);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.transactions);
            i0.ɵɵadvance(15);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matHeaderRowDef", i0.ɵɵpureFunction0(6, _c0));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matFooterRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matFooterRowDef", i0.ɵɵpureFunction0(7, _c1));
        } }, directives: [i1.MatTable, i1.MatColumnDef, i1.MatHeaderCellDef, i1.MatCellDef, i1.MatFooterCellDef, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatFooterRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatFooterCell, i1.MatHeaderRow, i1.MatRow, i1.MatFooterRow], pipes: [i2.CurrencyPipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-first-header-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n\n.example-second-header-row[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n\n.example-first-footer-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.example-second-footer-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  color: #900000;\n}"] });
    return TableMultipleHeaderFooterExample;
}());
export { TableMultipleHeaderFooterExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableMultipleHeaderFooterExample, [{
        type: Component,
        args: [{
                selector: 'table-multiple-header-footer-example',
                styleUrls: ['table-multiple-header-footer-example.css'],
                templateUrl: 'table-multiple-header-footer-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyL3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDR3BDLDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFxQjtJQUFBLGlCQUFLOzs7SUFBMUIsZUFBcUI7SUFBckIsc0RBQXFCOzs7SUFDakUsOEJBQXVDO0lBQUEsdUJBQU07SUFBQSxpQkFBSzs7O0lBS2xELDhCQUF1QztJQUFBLHNCQUFLO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBNEM7SUFBQSxZQUFnQzs7SUFBQSxpQkFBSzs7O0lBQXJDLGVBQWdDO0lBQWhDLDRFQUFnQzs7O0lBQzVFLDhCQUF1QztJQUFBLFlBQThCOztJQUFBLGlCQUFLOzs7SUFBbkMsZUFBOEI7SUFBOUIsOEVBQThCOzs7SUFLckUsOEJBQXVDO0lBQUEsNENBQTJCO0lBQUEsaUJBQUs7OztJQUt2RSw4QkFBdUM7SUFBQSx5Q0FBd0I7SUFBQSxpQkFBSzs7O0lBS3BFLDhCQUNFO0lBQUEsa0dBQ0Y7SUFBQSxpQkFBSzs7O0lBSVAseUJBRUs7OztJQUNMLHlCQUVLOzs7SUFFTCx5QkFBa0U7OztJQUVsRSx5QkFBNkY7OztJQUM3Rix5QkFBNEY7Ozs7QURuQzlGOztHQUVHO0FBQ0g7SUFBQTtRQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlDLGlCQUFZLEdBQWtCO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQ3hCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1lBQzFCLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO1NBQzlCLENBQUM7S0FNSDtJQUpDLCtDQUErQztJQUMvQyx1REFBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUssSUFBSyxPQUFBLEdBQUcsR0FBRyxLQUFLLEVBQVgsQ0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7b0JBQ3ZELFdBQVcsRUFBRSwyQ0FBMkM7aUJBQ3pEOztvSEFDWSxnQ0FBZ0M7eUVBQWhDLGdDQUFnQztZQ2hCN0MsZ0NBQ0U7WUFDQSxnQ0FDRTtZQUFBLCtFQUF1QztZQUN2QywrRUFBNEM7WUFDNUMsK0VBQXVDO1lBQ3pDLDBCQUFlO1lBR2YsZ0NBQ0U7WUFBQSwrRUFBdUM7WUFDdkMsK0VBQTRDO1lBQzVDLCtFQUF1QztZQUN6QywwQkFBZTtZQUdmLGdDQUNFO1lBQUEsaUZBQXVDO1lBQ3pDLDBCQUFlO1lBR2YsaUNBQ0U7WUFBQSxpRkFBdUM7WUFDekMsMEJBQWU7WUFHZixpQ0FDRTtZQUFBLGlGQUNFO1lBRUosMEJBQWU7WUFHZixrRkFFQTtZQUNBLGtGQUVBO1lBRUEsa0ZBQTZEO1lBRTdELGtGQUF3RjtZQUN4RixrRkFBdUY7WUFDekYsaUJBQVE7O1lBNUNTLDZDQUEyQjtZQWlDdkIsZ0JBQW1DO1lBQW5DLHNEQUFtQztZQUduQyxlQUEyRDtZQUEzRCw0REFBMkQ7WUFJbEUsZUFBZ0Q7WUFBaEQsdURBQWdEO1lBRXpDLGVBQW1DO1lBQW5DLHNEQUFtQztZQUNuQyxlQUFpQztZQUFqQyw0REFBaUM7OzJDRDNDdEQ7Q0ErQkMsQUFwQkQsSUFvQkM7U0FmWSxnQ0FBZ0M7a0RBQWhDLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7Z0JBQ3ZELFdBQVcsRUFBRSwyQ0FBMkM7YUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RyYW5zYWN0aW9ufSBmcm9tICcuLi90YWJsZS1mb290ZXItcm93L3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBpdGVtOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBtdWx0aXBsZSBoZWFkZXIgYW5kIGZvb3RlciByb3dzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLW11bHRpcGxlLWhlYWRlci1mb290ZXItZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1tdWx0aXBsZS1oZWFkZXItZm9vdGVyLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtbXVsdGlwbGUtaGVhZGVyLWZvb3Rlci1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU11bHRpcGxlSGVhZGVyRm9vdGVyRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydpdGVtJywgJ2Nvc3QnXTtcbiAgdHJhbnNhY3Rpb25zOiBUcmFuc2FjdGlvbltdID0gW1xuICAgIHtpdGVtOiAnQmVhY2ggYmFsbCcsIGNvc3Q6IDR9LFxuICAgIHtpdGVtOiAnVG93ZWwnLCBjb3N0OiA1fSxcbiAgICB7aXRlbTogJ0ZyaXNiZWUnLCBjb3N0OiAyfSxcbiAgICB7aXRlbTogJ1N1bnNjcmVlbicsIGNvc3Q6IDR9LFxuICAgIHtpdGVtOiAnQ29vbGVyJywgY29zdDogMjV9LFxuICAgIHtpdGVtOiAnU3dpbSBzdWl0JywgY29zdDogMTV9LFxuICBdO1xuXG4gIC8qKiBHZXRzIHRoZSB0b3RhbCBjb3N0IG9mIGFsbCB0cmFuc2FjdGlvbnMuICovXG4gIGdldFRvdGFsQ29zdCgpIHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2FjdGlvbnMubWFwKHQgPT4gdC5jb3N0KS5yZWR1Y2UoKGFjYywgdmFsdWUpID0+IGFjYyArIHZhbHVlLCAwKTtcbiAgfVxufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJ0cmFuc2FjdGlvbnNcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPCEtLSBJdGVtIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJpdGVtXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gSXRlbSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCB0cmFuc2FjdGlvblwiPiB7e3RyYW5zYWN0aW9uLml0ZW19fSA8L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IFRvdGFsIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29zdCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiY29zdFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IENvc3QgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgdHJhbnNhY3Rpb25cIj4ge3t0cmFuc2FjdGlvbi5jb3N0IHwgY3VycmVuY3l9fSA8L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IHt7Z2V0VG90YWxDb3N0KCkgfCBjdXJyZW5jeX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSXRlbSBEZXNjcmlwdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiaXRlbS1kZXNjcmlwdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IE5hbWUgb2YgdGhlIGl0ZW0gcHVyY2hhc2VkIDwvdGg+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29zdCBEZXNjcmlwdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiY29zdC1kZXNjcmlwdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IENvc3Qgb2YgdGhlIGl0ZW0gaW4gVVNEIDwvdGg+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gRGlzY2xhaW1lciBjb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZGlzY2xhaW1lclwiPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWYgY29sc3Bhbj1cIjJcIj5cbiAgICAgIFBsZWFzZSBub3RlIHRoYXQgdGhlIGNvc3Qgb2YgaXRlbXMgZGlzcGxheWVkIGFyZSBjb21wbGV0ZWx5IGFuZCB0b3RhbGx5IG1hZGUgdXAuXG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBUaGUgdGFibGUgd2lsbCByZW5kZXIgdHdvIGhlYWRlciByb3dzLCBvbmUgZGF0YSByb3cgcGVyIGRhdGEgb2JqZWN0LCBhbmQgdHdvIGZvb3RlciByb3dzLiAtLT5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1maXJzdC1oZWFkZXItcm93XCI+XG4gIDwvdHI+XG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiWydpdGVtLWRlc2NyaXB0aW9uJywgJ2Nvc3QtZGVzY3JpcHRpb24nXVwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtc2Vjb25kLWhlYWRlci1yb3dcIj5cbiAgPC90cj5cblxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDx0ciBtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiIGNsYXNzPVwiZXhhbXBsZS1maXJzdC1mb290ZXItcm93XCI+PC90cj5cbiAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJbJ2Rpc2NsYWltZXInXVwiIGNsYXNzPVwiZXhhbXBsZS1zZWNvbmQtZm9vdGVyLXJvd1wiPjwvdHI+XG48L3RhYmxlPlxuIl19