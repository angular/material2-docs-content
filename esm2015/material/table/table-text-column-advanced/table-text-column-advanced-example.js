/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/table/table-text-column-advanced/table-text-column-advanced-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
function TableTextColumnAdvancedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 7);
} }
function TableTextColumnAdvancedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 8);
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
 * \@title Use of 'mat-text-column' with various configurations of the interface.
 */
let TableTextColumnAdvancedExample = /** @class */ (() => {
    /**
     * \@title Use of 'mat-text-column' with various configurations of the interface.
     */
    class TableTextColumnAdvancedExample {
        constructor() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = new MatTableDataSource(ELEMENT_DATA);
            this.decimalPipe = new DecimalPipe('en-US');
            /**
             * Data accessor function that transforms the weight value to have at most 2 decimal digits.
             */
            this.getWeight = (/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                /** @type {?} */
                const result = this.decimalPipe.transform(data.weight, '1.0-2');
                return result === null ? '' : result;
            });
        }
    }
    TableTextColumnAdvancedExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-text-column-advanced-example',
                    styleUrls: ['table-text-column-advanced-example.css'],
                    templateUrl: 'table-text-column-advanced-example.html',
                },] },
    ];
    /** @nocollapse */ TableTextColumnAdvancedExample.ɵfac = function TableTextColumnAdvancedExample_Factory(t) { return new (t || TableTextColumnAdvancedExample)(); };
    /** @nocollapse */ TableTextColumnAdvancedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableTextColumnAdvancedExample, selectors: [["table-text-column-advanced-example"]], decls: 7, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position", 3, "headerText"], ["name", "name", "headerText", "Element"], ["name", "weight", 3, "dataAccessor"], ["name", "symbol", "justify", "end"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnAdvancedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelement(1, "mat-text-column", 1);
            i0.ɵɵelement(2, "mat-text-column", 2);
            i0.ɵɵelement(3, "mat-text-column", 3);
            i0.ɵɵelement(4, "mat-text-column", 4);
            i0.ɵɵtemplate(5, TableTextColumnAdvancedExample_tr_5_Template, 1, 0, "tr", 5);
            i0.ɵɵtemplate(6, TableTextColumnAdvancedExample_tr_6_Template, 1, 0, "tr", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("headerText", ctx.headerText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("dataAccessor", ctx.getWeight);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i1.MatTable, i1.MatTextColumn, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return TableTextColumnAdvancedExample;
})();
export { TableTextColumnAdvancedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TableTextColumnAdvancedExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-advanced-example',
                styleUrls: ['table-text-column-advanced-example.css'],
                templateUrl: 'table-text-column-advanced-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.displayedColumns;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.dataSource;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.headerText;
    /** @type {?} */
    TableTextColumnAdvancedExample.prototype.decimalPipe;
    /**
     * Data accessor function that transforms the weight value to have at most 2 decimal digits.
     * @type {?}
     */
    TableTextColumnAdvancedExample.prototype.getWeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ1V6RCx3QkFBNEQ7OztJQUM1RCx3QkFBa0U7Ozs7O0FEVHBFLHFDQUtDOzs7SUFKQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOzs7TUFHWCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztDQUM1RDs7OztBQUtEOzs7O0lBQUEsTUFLYSw4QkFBOEI7UUFMM0M7WUFNRSxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3RFLGVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBSWxELGdCQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7WUFHdkMsY0FBUzs7OztZQUFHLENBQUMsSUFBcUIsRUFBVSxFQUFFOztzQkFDdEMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO2dCQUMvRCxPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3ZDLENBQUMsRUFBQTtTQUNGOzs7Z0JBbEJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0NBQW9DO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyx3Q0FBd0MsQ0FBQztvQkFDckQsV0FBVyxFQUFFLHlDQUF5QztpQkFDdkQ7O21JQUNZLDhCQUE4QjswRkFBOUIsOEJBQThCO1lDaEMzQyxnQ0FDRTtZQUFBLHFDQUE2RTtZQUc3RSxxQ0FBb0U7WUFHcEUscUNBQTRFO1lBRzVFLHFDQUErRDtZQUUvRCw2RUFBdUQ7WUFDdkQsNkVBQTZEO1lBQy9ELGlCQUFROztZQWRTLDJDQUF5QjtZQUNQLGVBQXlCO1lBQXpCLDJDQUF5QjtZQU0zQixlQUEwQjtZQUExQiw0Q0FBMEI7WUFLdEMsZUFBbUM7WUFBbkMsc0RBQW1DO1lBQzFDLGVBQWdEO1lBQWhELHVEQUFnRDs7eUNEYjlEO0tBNkNDO1NBYlksOEJBQThCO2tEQUE5Qiw4QkFBOEI7Y0FMMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2dCQUNyRCxXQUFXLEVBQUUseUNBQXlDO2FBQ3ZEOzs7O0lBRUMsMERBQXNFOztJQUN0RSxvREFBa0Q7O0lBRWxELG9EQUFtQjs7SUFFbkIscURBQXVDOzs7OztJQUd2QyxtREFHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGVjaW1hbFBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFRhYmxlRGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFVzZSBvZiAnbWF0LXRleHQtY29sdW1uJyB3aXRoIHZhcmlvdXMgY29uZmlndXJhdGlvbnMgb2YgdGhlIGludGVyZmFjZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlVGV4dENvbHVtbkFkdmFuY2VkRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoRUxFTUVOVF9EQVRBKTtcblxuICBoZWFkZXJUZXh0OiBzdHJpbmc7XG5cbiAgZGVjaW1hbFBpcGUgPSBuZXcgRGVjaW1hbFBpcGUoJ2VuLVVTJyk7XG5cbiAgLyoqIERhdGEgYWNjZXNzb3IgZnVuY3Rpb24gdGhhdCB0cmFuc2Zvcm1zIHRoZSB3ZWlnaHQgdmFsdWUgdG8gaGF2ZSBhdCBtb3N0IDIgZGVjaW1hbCBkaWdpdHMuICovXG4gIGdldFdlaWdodCA9IChkYXRhOiBQZXJpb2RpY0VsZW1lbnQpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGVjaW1hbFBpcGUudHJhbnNmb3JtKGRhdGEud2VpZ2h0LCAnMS4wLTInKTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gJycgOiByZXN1bHQ7XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bWF0LXRleHQtY29sdW1uIG5hbWU9XCJwb3NpdGlvblwiIFtoZWFkZXJUZXh0XT1cImhlYWRlclRleHRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIENoYW5nZSB0aGUgaGVhZGVyIHRleHQuIC0tPlxuICA8bWF0LXRleHQtY29sdW1uIG5hbWU9XCJuYW1lXCIgaGVhZGVyVGV4dD1cIkVsZW1lbnRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIFByb3ZpZGUgYSBkYXRhIGFjY2Vzc29yIGZvciBnZXR0aW5nIHRoZSBjZWxsIHRleHQgdmFsdWVzLiAtLT5cbiAgPG1hdC10ZXh0LWNvbHVtbiBuYW1lPVwid2VpZ2h0XCIgW2RhdGFBY2Nlc3Nvcl09XCJnZXRXZWlnaHRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8IS0tIEp1c3RpZnkgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGxzIHRvIHRoZSBjZWxsIGVuZC4gLS0+XG4gIDxtYXQtdGV4dC1jb2x1bW4gbmFtZT1cInN5bWJvbFwiIGp1c3RpZnk9XCJlbmRcIj48L21hdC10ZXh0LWNvbHVtbj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==