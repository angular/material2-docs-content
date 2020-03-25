import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/table";
import * as i3 from "@angular/common";
function TableDynamicColumnsExample_ng_container_7_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var column_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r33, " ");
} }
function TableDynamicColumnsExample_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var element_r37 = ctx.$implicit;
    var column_r33 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r37[column_r33], " ");
} }
function TableDynamicColumnsExample_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 5);
    i0.ɵɵtemplate(1, TableDynamicColumnsExample_ng_container_7_th_1_Template, 2, 1, "th", 6);
    i0.ɵɵtemplate(2, TableDynamicColumnsExample_ng_container_7_td_2_Template, 2, 1, "td", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    var column_r33 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r33);
} }
function TableDynamicColumnsExample_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
function TableDynamicColumnsExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
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
 * @title Table dynamically changing the columns displayed
 */
var TableDynamicColumnsExample = /** @class */ (function () {
    function TableDynamicColumnsExample() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA;
    }
    TableDynamicColumnsExample.prototype.addColumn = function () {
        var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    };
    TableDynamicColumnsExample.prototype.removeColumn = function () {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    };
    TableDynamicColumnsExample.prototype.shuffle = function () {
        var currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            var temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    };
    TableDynamicColumnsExample.ɵfac = function TableDynamicColumnsExample_Factory(t) { return new (t || TableDynamicColumnsExample)(); };
    TableDynamicColumnsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableDynamicColumnsExample, selectors: [["table-dynamic-columns-example"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicColumnsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_0_listener() { return ctx.addColumn(); });
            i0.ɵɵtext(1, " Add column ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_2_listener() { return ctx.removeColumn(); });
            i0.ɵɵtext(3, " Remove column ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 0);
            i0.ɵɵlistener("click", function TableDynamicColumnsExample_Template_button_click_4_listener() { return ctx.shuffle(); });
            i0.ɵɵtext(5, " Shuffle ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "table", 1);
            i0.ɵɵtemplate(7, TableDynamicColumnsExample_ng_container_7_Template, 3, 1, "ng-container", 2);
            i0.ɵɵtemplate(8, TableDynamicColumnsExample_tr_8_Template, 1, 0, "tr", 3);
            i0.ɵɵtemplate(9, TableDynamicColumnsExample_tr_9_Template, 1, 0, "tr", 4);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("dataSource", ctx.data);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matHeaderRowDef", ctx.columnsToDisplay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.columnsToDisplay);
        } }, directives: [i1.MatButton, i2.MatTable, i3.NgForOf, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 16px 8px;\n}"] });
    return TableDynamicColumnsExample;
}());
export { TableDynamicColumnsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableDynamicColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNNcEMsNkJBQXVDO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLDJDQUFXOzs7SUFDbEQsNkJBQXdDO0lBQUEsWUFBb0I7SUFBQSxpQkFBSzs7OztJQUF6QixlQUFvQjtJQUFwQix3REFBb0I7OztJQUY5RCxnQ0FDRTtJQUFBLHdGQUF1QztJQUN2Qyx3RkFBd0M7SUFDMUMsMEJBQWU7OztJQUhELHlDQUF1Qjs7O0lBS3JDLHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7QURGcEUsSUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFB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UTtZQUFBLGlCQUFTO1lBRWhFLGdDQUNFO1lBQUEsNkZBQ0U7WUFJRix5RUFBdUQ7WUFDdkQseUVBQTZEO1lBQy9ELGlCQUFROztZQVJTLGVBQW1CO1lBQW5CLHFDQUFtQjtZQUNJLGVBQXVDO1lBQXZDLDhDQUF1QztZQUsxRCxlQUFtQztZQUFuQyxzREFBbUM7WUFDMUMsZUFBZ0Q7WUFBaEQsdURBQWdEOztxQ0RYOUQ7Q0EwREMsQUFqQ0QsSUFpQ0M7U0E1QlksMEJBQTBCO2tEQUExQiwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIGR5bmFtaWNhbGx5IGNoYW5naW5nIHRoZSBjb2x1bW5zIGRpc3BsYXllZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1keW5hbWljLWNvbHVtbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVEeW5hbWljQ29sdW1uc0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJywgJ3Bvc2l0aW9uJ107XG4gIGNvbHVtbnNUb0Rpc3BsYXk6IHN0cmluZ1tdID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnNsaWNlKCk7XG4gIGRhdGE6IFBlcmlvZGljRWxlbWVudFtdID0gRUxFTUVOVF9EQVRBO1xuXG4gIGFkZENvbHVtbigpIHtcbiAgICBjb25zdCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpc3BsYXllZENvbHVtbnMubGVuZ3RoKTtcbiAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkucHVzaCh0aGlzLmRpc3BsYXllZENvbHVtbnNbcmFuZG9tQ29sdW1uXSk7XG4gIH1cblxuICByZW1vdmVDb2x1bW4oKSB7XG4gICAgaWYgKHRoaXMuY29sdW1uc1RvRGlzcGxheS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheS5wb3AoKTtcbiAgICB9XG4gIH1cblxuICBzaHVmZmxlKCkge1xuICAgIGxldCBjdXJyZW50SW5kZXggPSB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkubGVuZ3RoO1xuICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgLy8gU3dhcFxuICAgICAgbGV0IHRlbXAgPSB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbY3VycmVudEluZGV4XTtcbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheVtjdXJyZW50SW5kZXhdID0gdGhpcy5jb2x1bW5zVG9EaXNwbGF5W3JhbmRvbUluZGV4XTtcbiAgICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheVtyYW5kb21JbmRleF0gPSB0ZW1wO1xuICAgIH1cbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiYWRkQ29sdW1uKClcIj4gQWRkIGNvbHVtbiA8L2J1dHRvbj5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInJlbW92ZUNvbHVtbigpXCI+IFJlbW92ZSBjb2x1bW4gPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJzaHVmZmxlKClcIj4gU2h1ZmZsZSA8L2J1dHRvbj5cblxuPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250YWluZXIgW21hdENvbHVtbkRlZl09XCJjb2x1bW5cIiAqbmdGb3I9XCJsZXQgY29sdW1uIG9mIGRpc3BsYXllZENvbHVtbnNcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbn19IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50W2NvbHVtbl19fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImNvbHVtbnNUb0Rpc3BsYXlcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogY29sdW1uc1RvRGlzcGxheTtcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==