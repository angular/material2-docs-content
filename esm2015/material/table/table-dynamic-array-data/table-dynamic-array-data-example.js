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
        args: [{
                selector: 'table-dynamic-array-data-example',
                styleUrls: ['table-dynamic-array-data-example.css'],
                templateUrl: 'table-dynamic-array-data-example.html',
            }]
    }], null, { table: [{
            type: ViewChild,
            args: [MatTable]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWFycmF5LWRhdGEvdGFibGUtZHluYW1pYy1hcnJheS1kYXRhLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7O0lDZTdDLDhCQUFzQztJQUFBLG1CQUFHO0lBQUEsaUJBQUs7OztJQUM5Qyw4QkFBdUM7SUFBQSxZQUFvQjtJQUFBLGlCQUFLOzs7SUFBekIsZUFBb0I7SUFBcEIsMENBQW9COzs7SUFLM0QsOEJBQXNDO0lBQUEsb0JBQUk7SUFBQSxpQkFBSzs7O0lBQy9DLDhCQUF1QztJQUFBLFlBQWdCO0lBQUEsaUJBQUs7OztJQUFyQixlQUFnQjtJQUFoQixzQ0FBZ0I7OztJQUt2RCw4QkFBc0M7SUFBQSxzQkFBTTtJQUFBLGlCQUFLOzs7SUFDakQsOEJBQXVDO0lBQUEsWUFBa0I7SUFBQSxpQkFBSzs7O0lBQXZCLGVBQWtCO0lBQWxCLHdDQUFrQjs7O0lBS3pELDhCQUFzQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsd0NBQWtCOzs7SUFHM0QseUJBQTREOzs7SUFDNUQseUJBQWtFOztBRDdCcEUsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RCxDQUFDO0FBRUY7O0dBRUc7QUFNSCxNQUFNLE9BQU8sNEJBQTRCO0lBTHpDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0tBY2hDO0lBVkMsT0FBTztRQUNMLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDOzt3R0FmVSw0QkFBNEI7K0VBQTVCLDRCQUE0Qjt1QkFJNUIsUUFBUTs7Ozs7UUNuQ3JCLDhCQUFtQztRQUNqQyxpQ0FBa0U7UUFBeEMseUdBQVMsYUFBUyxJQUFDO1FBQzNDLDBCQUNGO1FBQUEsaUJBQVM7UUFDVCxpQ0FJd0I7UUFEcEIseUdBQVMsZ0JBQVksSUFBQztRQUV4Qiw2QkFDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFTixnQ0FBK0U7UUFFN0UsZ0NBQXNDO1FBQ3BDLDJFQUE4QztRQUM5QywyRUFBZ0U7UUFDbEUsMEJBQWU7UUFHZixnQ0FBa0M7UUFDaEMsNkVBQStDO1FBQy9DLDZFQUE0RDtRQUM5RCwwQkFBZTtRQUdmLGlDQUFvQztRQUNsQyw2RUFBaUQ7UUFDakQsNkVBQThEO1FBQ2hFLDBCQUFlO1FBR2YsaUNBQW9DO1FBQ2xDLDZFQUFpRDtRQUNqRCw2RUFBOEQ7UUFDaEUsMEJBQWU7UUFFZiw4RUFBNEQ7UUFDNUQsOEVBQWtFO1FBQ3BFLGlCQUFROztRQWxDRixlQUErQjtRQUEvQixpREFBK0I7UUFPcEIsZUFBeUI7UUFBekIsMkNBQXlCO1FBeUJwQixnQkFBaUM7UUFBakMsc0RBQWlDO1FBQ3BCLGVBQTBCO1FBQTFCLHVEQUEwQjs7dUZEUmhELDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELFdBQVcsRUFBRSx1Q0FBdUM7YUFDckQ7Z0JBS3NCLEtBQUs7a0JBQXpCLFNBQVM7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIEFkZGluZyBhbmQgcmVtb3ZpbmcgZGF0YSB3aGVuIHVzaW5nIGFuIGFycmF5LWJhc2VkIGRhdGFzb3VyY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWR5bmFtaWMtYXJyYXktZGF0YS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWR5bmFtaWMtYXJyYXktZGF0YS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWR5bmFtaWMtYXJyYXktZGF0YS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUR5bmFtaWNBcnJheURhdGFFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gWy4uLkVMRU1FTlRfREFUQV07XG5cbiAgQFZpZXdDaGlsZChNYXRUYWJsZSkgdGFibGU6IE1hdFRhYmxlPFBlcmlvZGljRWxlbWVudD47XG5cbiAgYWRkRGF0YSgpIHtcbiAgICBjb25zdCByYW5kb21FbGVtZW50SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFTEVNRU5UX0RBVEEubGVuZ3RoKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UucHVzaChFTEVNRU5UX0RBVEFbcmFuZG9tRWxlbWVudEluZGV4XSk7XG4gICAgdGhpcy50YWJsZS5yZW5kZXJSb3dzKCk7XG4gIH1cblxuICByZW1vdmVEYXRhKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5wb3AoKTtcbiAgICB0aGlzLnRhYmxlLnJlbmRlclJvd3MoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRlbW8tYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGREYXRhKClcIiBjbGFzcz1cImRlbW8tYnV0dG9uXCI+XG4gICAgQWRkIGRhdGFcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICBbZGlzYWJsZWRdPVwiIWRhdGFTb3VyY2UubGVuZ3RoXCJcbiAgICAgIChjbGljayk9XCJyZW1vdmVEYXRhKClcIlxuICAgICAgY2xhc3M9XCJkZW1vLWJ1dHRvblwiPlxuICAgIFJlbW92ZSBkYXRhXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBkZW1vLXRhYmxlXCI+XG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5Oby48L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnBvc2l0aW9ufX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5hbWU8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50Lm5hbWV9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPldlaWdodDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQud2VpZ2h0fX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TeW1ib2w8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnN5bWJvbH19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=