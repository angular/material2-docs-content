import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { ReplaySubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/table";
function TableDynamicObservableDataExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "No.");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r10.position);
} }
function TableDynamicObservableDataExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Name");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r11.name);
} }
function TableDynamicObservableDataExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Weight");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r12.weight);
} }
function TableDynamicObservableDataExample_th_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 12);
    i0.ɵɵtext(1, "Symbol");
    i0.ɵɵelementEnd();
} }
function TableDynamicObservableDataExample_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(element_r13.symbol);
} }
function TableDynamicObservableDataExample_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function TableDynamicObservableDataExample_tr_19_Template(rf, ctx) { if (rf & 1) {
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
 * @title Adding and removing data when using an observable-based datasource.
 */
export class TableDynamicObservableDataExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataToDisplay = [...ELEMENT_DATA];
        this.dataSource = new ExampleDataSource(this.dataToDisplay);
    }
    addData() {
        const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
        this.dataToDisplay = [
            ...this.dataToDisplay,
            ELEMENT_DATA[randomElementIndex]
        ];
        this.dataSource.setData(this.dataToDisplay);
    }
    removeData() {
        this.dataToDisplay = this.dataToDisplay.slice(0, -1);
        this.dataSource.setData(this.dataToDisplay);
    }
}
TableDynamicObservableDataExample.ɵfac = function TableDynamicObservableDataExample_Factory(t) { return new (t || TableDynamicObservableDataExample)(); };
TableDynamicObservableDataExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TableDynamicObservableDataExample, selectors: [["table-dynamic-observable-data-example"]], decls: 20, vars: 4, consts: [[1, "demo-button-container"], ["mat-raised-button", "", 1, "demo-button", 3, "click"], ["mat-raised-button", "", 1, "demo-button", 3, "disabled", "click"], ["mat-table", "", 1, "mat-elevation-z8", "demo-table", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "weight"], ["matColumnDef", "symbol"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicObservableDataExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function TableDynamicObservableDataExample_Template_button_click_1_listener() { return ctx.addData(); });
        i0.ɵɵtext(2, " Add data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function TableDynamicObservableDataExample_Template_button_click_3_listener() { return ctx.removeData(); });
        i0.ɵɵtext(4, " Remove data ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "table", 3);
        i0.ɵɵelementContainerStart(6, 4);
        i0.ɵɵtemplate(7, TableDynamicObservableDataExample_th_7_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(8, TableDynamicObservableDataExample_td_8_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, TableDynamicObservableDataExample_th_10_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(11, TableDynamicObservableDataExample_td_11_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 8);
        i0.ɵɵtemplate(13, TableDynamicObservableDataExample_th_13_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(14, TableDynamicObservableDataExample_td_14_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(15, 9);
        i0.ɵɵtemplate(16, TableDynamicObservableDataExample_th_16_Template, 2, 0, "th", 5);
        i0.ɵɵtemplate(17, TableDynamicObservableDataExample_td_17_Template, 2, 1, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(18, TableDynamicObservableDataExample_tr_18_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(19, TableDynamicObservableDataExample_tr_19_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", !ctx.dataToDisplay.length);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.MatButton, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: [".demo-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.demo-button-container[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n\n.demo-button[_ngcontent-%COMP%]    + .demo-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TableDynamicObservableDataExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-observable-data-example',
                styleUrls: ['table-dynamic-observable-data-example.css'],
                templateUrl: 'table-dynamic-observable-data-example.html',
            }]
    }], null, null); })();
class ExampleDataSource extends DataSource {
    constructor(initialData) {
        super();
        this._dataStream = new ReplaySubject();
        this.setData(initialData);
    }
    connect() {
        return this._dataStream;
    }
    disconnect() { }
    setData(data) {
        this._dataStream.next(data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWR5bmFtaWMtb2JzZXJ2YWJsZS1kYXRhL3RhYmxlLWR5bmFtaWMtb2JzZXJ2YWJsZS1kYXRhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLW9ic2VydmFibGUtZGF0YS90YWJsZS1keW5hbWljLW9ic2VydmFibGUtZGF0YS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFhLGFBQWEsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7SUNjM0MsOEJBQXNDO0lBQUEsbUJBQUc7SUFBQSxpQkFBSzs7O0lBQzlDLDhCQUF1QztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7OztJQUF6QixlQUFvQjtJQUFwQiwwQ0FBb0I7OztJQUszRCw4QkFBc0M7SUFBQSxvQkFBSTtJQUFBLGlCQUFLOzs7SUFDL0MsOEJBQXVDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSzs7O0lBQXJCLGVBQWdCO0lBQWhCLHNDQUFnQjs7O0lBS3ZELDhCQUFzQztJQUFBLHNCQUFNO0lBQUEsaUJBQUs7OztJQUNqRCw4QkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFLOzs7SUFBdkIsZUFBa0I7SUFBbEIsd0NBQWtCOzs7SUFLekQsOEJBQXNDO0lBQUEsc0JBQU07SUFBQSxpQkFBSzs7O0lBQ2pELDhCQUF1QztJQUFBLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2Qixl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aUJBQU07UUFFTixnQ0FBK0U7UUFFN0UsZ0NBQXNDO1FBQ3BDLGdGQUE4QztRQUM5QyxnRkFBZ0U7UUFDbEUsMEJBQWU7UUFHZixnQ0FBa0M7UUFDaEMsa0ZBQStDO1FBQy9DLGtGQUE0RDtRQUM5RCwwQkFBZTtRQUdmLGlDQUFvQztRQUNsQyxrRkFBaUQ7UUFDakQsa0ZBQThEO1FBQ2hFLDBCQUFlO1FBR2YsaUNBQW9DO1FBQ2xDLGtGQUFpRDtRQUNqRCxrRkFBOEQ7UUFDaEUsMEJBQWU7UUFFZixtRkFBNEQ7UUFDNUQsbUZBQWtFO1FBQ3BFLGlCQUFROztRQWxDRixlQUFrQztRQUFsQyxvREFBa0M7UUFPdkIsZUFBeUI7UUFBekIsMkNBQXlCO1FBeUJwQixnQkFBaUM7UUFBakMsc0RBQWlDO1FBQ3BCLGVBQTBCO1FBQTFCLHVEQUEwQjs7dUZEUGhELGlDQUFpQztjQUw3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3hELFdBQVcsRUFBRSw0Q0FBNEM7YUFDMUQ7O0FBc0JELE1BQU0saUJBQWtCLFNBQVEsVUFBMkI7SUFHekQsWUFBWSxXQUE4QjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQUhGLGdCQUFXLEdBQUcsSUFBSSxhQUFhLEVBQXFCLENBQUM7UUFJM0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsVUFBVSxLQUFJLENBQUM7SUFFZixPQUFPLENBQUMsSUFBdUI7UUFDN0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEYXRhU291cmNlfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBBZGRpbmcgYW5kIHJlbW92aW5nIGRhdGEgd2hlbiB1c2luZyBhbiBvYnNlcnZhYmxlLWJhc2VkIGRhdGFzb3VyY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWR5bmFtaWMtb2JzZXJ2YWJsZS1kYXRhLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZHluYW1pYy1vYnNlcnZhYmxlLWRhdGEtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1keW5hbWljLW9ic2VydmFibGUtZGF0YS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUR5bmFtaWNPYnNlcnZhYmxlRGF0YUV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFUb0Rpc3BsYXkgPSBbLi4uRUxFTUVOVF9EQVRBXTtcblxuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKHRoaXMuZGF0YVRvRGlzcGxheSk7XG5cbiAgYWRkRGF0YSgpIHtcbiAgICBjb25zdCByYW5kb21FbGVtZW50SW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBFTEVNRU5UX0RBVEEubGVuZ3RoKTtcbiAgICB0aGlzLmRhdGFUb0Rpc3BsYXkgPSBbXG4gICAgICAuLi50aGlzLmRhdGFUb0Rpc3BsYXksXG4gICAgICBFTEVNRU5UX0RBVEFbcmFuZG9tRWxlbWVudEluZGV4XVxuICAgIF07XG4gICAgdGhpcy5kYXRhU291cmNlLnNldERhdGEodGhpcy5kYXRhVG9EaXNwbGF5KTtcbiAgfVxuXG4gIHJlbW92ZURhdGEoKSB7XG4gICAgdGhpcy5kYXRhVG9EaXNwbGF5ID0gdGhpcy5kYXRhVG9EaXNwbGF5LnNsaWNlKDAsIC0xKTtcbiAgICB0aGlzLmRhdGFTb3VyY2Uuc2V0RGF0YSh0aGlzLmRhdGFUb0Rpc3BsYXkpO1xuICB9XG59XG5cbmNsYXNzIEV4YW1wbGVEYXRhU291cmNlIGV4dGVuZHMgRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+IHtcbiAgcHJpdmF0ZSBfZGF0YVN0cmVhbSA9IG5ldyBSZXBsYXlTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPigpO1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhOiBQZXJpb2RpY0VsZW1lbnRbXSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zZXREYXRhKGluaXRpYWxEYXRhKTtcbiAgfVxuXG4gIGNvbm5lY3QoKTogT2JzZXJ2YWJsZTxQZXJpb2RpY0VsZW1lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLl9kYXRhU3RyZWFtO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG5cbiAgc2V0RGF0YShkYXRhOiBQZXJpb2RpY0VsZW1lbnRbXSkge1xuICAgIHRoaXMuX2RhdGFTdHJlYW0ubmV4dChkYXRhKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRlbW8tYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGREYXRhKClcIiBjbGFzcz1cImRlbW8tYnV0dG9uXCI+XG4gICAgQWRkIGRhdGFcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICAgIG1hdC1yYWlzZWQtYnV0dG9uXG4gICAgICBbZGlzYWJsZWRdPVwiIWRhdGFUb0Rpc3BsYXkubGVuZ3RoXCJcbiAgICAgIChjbGljayk9XCJyZW1vdmVEYXRhKClcIlxuICAgICAgY2xhc3M9XCJkZW1vLWJ1dHRvblwiPlxuICAgIFJlbW92ZSBkYXRhXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OCBkZW1vLXRhYmxlXCI+XG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5Oby48L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnBvc2l0aW9ufX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5hbWU8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50Lm5hbWV9fTwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPldlaWdodDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQud2VpZ2h0fX08L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj5TeW1ib2w8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50LnN5bWJvbH19PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=