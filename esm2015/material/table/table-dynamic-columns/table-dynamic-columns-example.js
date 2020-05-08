/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-dynamic-columns/table-dynamic-columns-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", column_r3, " ");
} }
function TableDynamicColumnsExample_ng_container_7_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    const column_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r7[column_r3], " ");
} }
function TableDynamicColumnsExample_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 5);
    i0.ɵɵtemplate(1, TableDynamicColumnsExample_ng_container_7_th_1_Template, 2, 1, "th", 6);
    i0.ɵɵtemplate(2, TableDynamicColumnsExample_ng_container_7_td_2_Template, 2, 1, "td", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const column_r3 = ctx.$implicit;
    i0.ɵɵproperty("matColumnDef", column_r3);
} }
function TableDynamicColumnsExample_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 10);
} }
function TableDynamicColumnsExample_tr_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
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
 * \@title Table dynamically changing the columns displayed
 */
export class TableDynamicColumnsExample {
    constructor() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA;
    }
    /**
     * @return {?}
     */
    addColumn() {
        /** @type {?} */
        const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    }
    /**
     * @return {?}
     */
    removeColumn() {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    }
    /**
     * @return {?}
     */
    shuffle() {
        /** @type {?} */
        let currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            /** @type {?} */
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            /** @type {?} */
            let temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    }
}
TableDynamicColumnsExample.decorators = [
    { type: Component, args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            },] },
];
/** @nocollapse */ TableDynamicColumnsExample.ɵfac = function TableDynamicColumnsExample_Factory(t) { return new (t || TableDynamicColumnsExample)(); };
/** @nocollapse */ TableDynamicColumnsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableDynamicColumnsExample, selectors: [["table-dynamic-columns-example"]], decls: 10, vars: 4, consts: [["mat-raised-button", "", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function TableDynamicColumnsExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableDynamicColumnsExample, [{
        type: Component,
        args: [{
                selector: 'table-dynamic-columns-example',
                styleUrls: ['table-dynamic-columns-example.css'],
                templateUrl: 'table-dynamic-columns-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableDynamicColumnsExample.prototype.displayedColumns;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.columnsToDisplay;
    /** @type {?} */
    TableDynamicColumnsExample.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1keW5hbWljLWNvbHVtbnMvdGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztJQ01wQyw2QkFBdUM7SUFBQSxZQUFXO0lBQUEsaUJBQUs7OztJQUFoQixlQUFXO0lBQVgsMENBQVc7OztJQUNsRCw2QkFBd0M7SUFBQSxZQUFvQjtJQUFBLGlCQUFLOzs7O0lBQXpCLGVBQW9CO0lBQXBCLHNEQUFvQjs7O0lBRjlELGdDQUNFO0lBQUEsd0ZBQXVDO0lBQ3ZDLHdGQUF3QztJQUMxQywwQkFBZTs7O0lBSEQsd0NBQXVCOzs7SUFLckMseUJBQTREOzs7SUFDNUQseUJBQWtFOzs7OztBRFRwRSxxQ0FLQzs7O0lBSkMsK0JBQWE7O0lBQ2IsbUNBQWlCOztJQUNqQixpQ0FBZTs7SUFDZixpQ0FBZTs7O01BR1gsWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxF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QUFvRDtRQUExQix1R0FBUyxrQkFBYyxJQUFDO1FBQUUsK0JBQWM7UUFBQSxpQkFBUztRQUMzRSxpQ0FBK0M7UUFBckIsdUdBQVMsYUFBUyxJQUFDO1FBQUUseUJBQVE7UUFBQSxpQkFBUztRQUVoRSxnQ0FDRTtRQUFBLDZGQUNFO1FBSUYseUVBQXVEO1FBQ3ZELHlFQUE2RDtRQUMvRCxpQkFBUTs7UUFSUyxlQUFtQjtRQUFuQixxQ0FBbUI7UUFDSSxlQUF1QztRQUF2Qyw4Q0FBdUM7UUFLMUQsZUFBbUM7UUFBbkMsc0RBQW1DO1FBQzFDLGVBQWdEO1FBQWhELHVEQUFnRDs7a0REbUJqRCwwQkFBMEI7Y0FMdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRCxXQUFXLEVBQUUsb0NBQW9DO2FBQ2xEOzs7O0lBRUMsc0RBQXNFOztJQUN0RSxzREFBMkQ7O0lBQzNELDBDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBkeW5hbWljYWxseSBjaGFuZ2luZyB0aGUgY29sdW1ucyBkaXNwbGF5ZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRHluYW1pY0NvbHVtbnNFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdwb3NpdGlvbiddO1xuICBjb2x1bW5zVG9EaXNwbGF5OiBzdHJpbmdbXSA9IHRoaXMuZGlzcGxheWVkQ29sdW1ucy5zbGljZSgpO1xuICBkYXRhOiBQZXJpb2RpY0VsZW1lbnRbXSA9IEVMRU1FTlRfREFUQTtcblxuICBhZGRDb2x1bW4oKSB7XG4gICAgY29uc3QgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aCk7XG4gICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5LnB1c2godGhpcy5kaXNwbGF5ZWRDb2x1bW5zW3JhbmRvbUNvbHVtbl0pO1xuICB9XG5cbiAgcmVtb3ZlQ29sdW1uKCkge1xuICAgIGlmICh0aGlzLmNvbHVtbnNUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXkucG9wKCk7XG4gICAgfVxuICB9XG5cbiAgc2h1ZmZsZSgpIHtcbiAgICBsZXQgY3VycmVudEluZGV4ID0gdGhpcy5jb2x1bW5zVG9EaXNwbGF5Lmxlbmd0aDtcbiAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgICBsZXQgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgIC8vIFN3YXBcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5jb2x1bW5zVG9EaXNwbGF5W2N1cnJlbnRJbmRleF07XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbY3VycmVudEluZGV4XSA9IHRoaXMuY29sdW1uc1RvRGlzcGxheVtyYW5kb21JbmRleF07XG4gICAgICB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbcmFuZG9tSW5kZXhdID0gdGVtcDtcbiAgICB9XG4gIH1cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZENvbHVtbigpXCI+IEFkZCBjb2x1bW4gPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJyZW1vdmVDb2x1bW4oKVwiPiBSZW1vdmUgY29sdW1uIDwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwic2h1ZmZsZSgpXCI+IFNodWZmbGUgPC9idXR0b24+XG5cbjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiY29sdW1uXCIgKm5nRm9yPVwibGV0IGNvbHVtbiBvZiBkaXNwbGF5ZWRDb2x1bW5zXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4ge3tjb2x1bW59fSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudFtjb2x1bW5dfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJjb2x1bW5zVG9EaXNwbGF5XCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXk7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=