import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/table";
function TableDynamicArrayDataExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r10.position);
} }
function TableDynamicArrayDataExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r11.name);
} }
function TableDynamicArrayDataExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.weight);
} }
function TableDynamicArrayDataExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableDynamicArrayDataExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.symbol);
} }
function TableDynamicArrayDataExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableDynamicArrayDataExample_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 15);
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
 * @title Adding and removing data when using an array-based datasource.
 */
export class TableDynamicArrayDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [...ELEMENT_DATA];
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
        this.table.renderRows();
    }
    removeData() {
        this.dataSource.pop();
        this.table.renderRows();
    }
}
TableDynamicArrayDataExample.ɵfac = function TableDynamicArrayDataExample_Factory(t) { return new (t || TableDynamicArrayDataExample)(); };
TableDynamicArrayDataExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableDynamicArrayDataExample, selectors: [["table-dynamic-array-data-example"]], viewQuery: function TableDynamicArrayDataExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatTable, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.table = _t.first);
    } }, decls: 20, vars: 4, consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["mat-raised-button", "", 1, "demo-button", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicArrayDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function TableDynamicArrayDataExample_Template_button_click_1_listener() { return ctx.addData(); });
        i0.ɵɵtext(2, " Add data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function TableDynamicArrayDataExample_Template_button_click_3_listener() { return ctx.removeData(); });
        i0.ɵɵtext(4, " Remove data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, TableDynamicArrayDataExample_th_7_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(8, TableDynamicArrayDataExample_td_8_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, TableDynamicArrayDataExample_th_10_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(11, TableDynamicArrayDataExample_td_11_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, TableDynamicArrayDataExample_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TableDynamicArrayDataExample_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 9);
        i0.ɵɵtemplate(16, TableDynamicArrayDataExample_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TableDynamicArrayDataExample_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(18, TableDynamicArrayDataExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(19, TableDynamicArrayDataExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.dataSource.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatButton, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableDynamicArrayDataExample, [{
        type: Component,
        args: [{ selector: 'table-dynamic-array-data-example', template: "<div class=\"demo-button-container\">\n  <button mat-raised-button (click)=\"addData()\" class=\"demo-button\">\n    Add data\n  </button>\n  <button\n      mat-raised-button\n      [disabled]=\"!dataSource.length\"\n      (click)=\"removeData()\"\n      class=\"demo-button\">\n    Remove data\n  </button>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8 demo-table\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef>No.</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".demo-table {\n  width: 100%;\n}\n\n.demo-button-container {\n  padding-bottom: 16px;\n}\n\n.demo-button + .demo-button {\n  margin-left: 8px;\n}\n"] }]
    }], null, { table: [{
            type: ViewChild,
            args: [MatTable]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lDZTdDLDhCQUFzQztJQUFBLG1CQUFHO0lBQUEsaUJBQUs7OztJQUM5Qyw4QkFBdUM7SUFBQSxZQUFvQjtJQUFBLGlCQUFLOzs7SUFBekIsZUFBb0I7SUFBcEIsMENBQW9COzs7SUFLM0QsOEJBQXNDO0lBQUEsb0JBQUk7SUFBQSxpQkFBSzs7O0lBQy9DLDhCQUF1QztJQUFBLFlBQWdCO0lBQUEsaUJBQUs7OztJQUFyQixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUt2RCw4QkFBc0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFLOzs7SUFDakQsOEJBQXVDO0lBQUEsWUFBa0I7SUFBQSxpQkFBSzs7O0lBQXZCLGVBQWtCO0lBQWxCLHdDQUFrQjs7O0lBS3pELDhCQUFzQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsd0NBQWtCOzs7SUFHM0QseUJBQTREOzs7SUFDNUQseUJBQWtFOztBRDdCcEUsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCxDQUFDO0FBRUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0tBY2hDO0lBVkMsT0FBTztRQUNMLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDOzt3R0FmVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjt1QkFJNUIsUUFBUTs7Ozs7UUNuQ3JCLDhCQUFtQztRQUNqQyxpQ0FBa0U7UUFBeEMseUdBQVMsYUFBUyxJQUFDO1FBQzNDLDBCQUNGO1FBQUEsaUJBQVM7UUFDVCxpQ0FJd0I7UUFEcEIseUdBQVMsZ0JBQVksSUFBQztRQUV4Qiw2QkFDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFTixnQ0FBK0U7UUFFN0UsZ0NBQXNDO1FBQ3BDLDJFQUE4QztRQUM5QywyRUFBZ0U7UUFDbEUsMEJBQWU7UUFHZixnQ0FBa0M7UUFDaEMsNkVBQStDO1FBQy9DLDZFQUE0RDtRQUM5RCwwQkFBZTtRQUdmLGlDQUFvQztRQUNsQyw2RUFBaUQ7UUFDakQsNkVBQThEO1FBQ2hFLDBCQUFlO1FBR2YsaUNBQW9DO1FBQ2xDLDZFQUFpRDtRQUNqRCw2RUFBOEQ7UUFDaEUsMEJBQWU7UUFFZiw4RUFBNEQ7UUFDNUQsOEVBQWtFO1FBQ3BFLGlCQUFROztRQWxDRixlQUErQjtRQUEvQixpREFBK0I7UUFPcEIsZUFBeUI7UUFBekIsMkNBQXlCO1FBeUJwQixnQkFBaUM7UUFBakMsc0RBQWlDO1FBQ3BCLGVBQTBCO1FBQTFCLHVEQUEwQjs7dUZEUmhELDRCQUE0QjtjQUx4QyxTQUFTOzJCQUNFLGtDQUFrQztnQkFRdkIsS0FBSztrQkFBekIsU0FBUzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgQWRkaW5nIGFuZCByZW1vdmluZyBkYXRhIHdoZW4gdXNpbmcgYW4gYXJyYXktYmFzZWQgZGF0YXNvdXJjZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRHluYW1pY0FycmF5RGF0YUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBbLi4uRUxFTUVOVF9EQVRBXTtcblxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSB0YWJsZTogTWF0VGFibGU8UGVyaW9kaWNFbGVtZW50PjtcblxuICBhZGREYXRhKCkge1xuICAgIGNvbnN0IHJhbmRvbUVsZW1lbnRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEVMRU1FTlRfREFUQS5sZW5ndGgpO1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wdXNoKEVMRU1FTlRfREFUQVtyYW5kb21FbGVtZW50SW5kZXhdKTtcbiAgICB0aGlzLnRhYmxlLnJlbmRlclJvd3MoKTtcbiAgfVxuXG4gIHJlbW92ZURhdGEoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnBvcCgpO1xuICAgIHRoaXMudGFibGUucmVuZGVyUm93cygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGVtby1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZERhdGEoKVwiIGNsYXNzPVwiZGVtby1idXR0b25cIj5cbiAgICBBZGQgZGF0YVxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgICAgbWF0LXJhaXNlZC1idXR0b25cbiAgICAgIFtkaXNhYmxlZF09XCIhZGF0YVNvdXJjZS5sZW5ndGhcIlxuICAgICAgKGNsaWNrKT1cInJlbW92ZURhdGEoKVwiXG4gICAgICBjbGFzcz1cImRlbW8tYnV0dG9uXCI+XG4gICAgUmVtb3ZlIGRhdGFcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4IGRlbW8tdGFibGVcIj5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5vLjwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQucG9zaXRpb259fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+TmFtZTwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQubmFtZX19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+V2VpZ2h0PC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPnt7ZWxlbWVudC53ZWlnaHR9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlN5bWJvbDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQuc3ltYm9sfX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==