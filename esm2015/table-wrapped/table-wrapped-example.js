/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, ViewChild } from '@angular/core';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
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
 * \@title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableWrappedExample.decorators = [
    { type: Component, args: [{
                selector: 'table-wrapped-example',
                template: "<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns; \"></tr>\n</wrapper-table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
TableWrappedExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort',] }]
};
if (false) {
    /** @type {?} */
    TableWrappedExample.prototype.displayedColumns;
    /** @type {?} */
    TableWrappedExample.prototype.dataSource;
    /** @type {?} */
    TableWrappedExample.prototype.sort;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 * @template T
 */
export class WrapperTable {
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
    }
}
WrapperTable.decorators = [
    { type: Component, args: [{
                selector: 'wrapper-table',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n",
                styles: [`
    table {
      width: 100%;
    }
  `]
            }] }
];
WrapperTable.propDecorators = {
    headerRowDefs: [{ type: ContentChildren, args: [MatHeaderRowDef,] }],
    rowDefs: [{ type: ContentChildren, args: [MatRowDef,] }],
    columnDefs: [{ type: ContentChildren, args: [MatColumnDef,] }],
    table: [{ type: ViewChild, args: [MatTable,] }],
    columns: [{ type: Input }],
    dataSource: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    WrapperTable.prototype.headerRowDefs;
    /** @type {?} */
    WrapperTable.prototype.rowDefs;
    /** @type {?} */
    WrapperTable.prototype.columnDefs;
    /** @type {?} */
    WrapperTable.prototype.table;
    /** @type {?} */
    WrapperTable.prototype.columns;
    /** @type {?} */
    WrapperTable.prototype.dataSource;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLXdyYXBwZWQvdGFibGUtd3JhcHBlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULGVBQWUsRUFDZixLQUFLLEVBRUwsU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDUixrQkFBa0IsRUFDbkIsTUFBTSxtQkFBbUIsQ0FBQztBQUMzQixPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFcEQscUNBS0M7OztJQUpDLCtCQUFhOztJQUNiLG1DQUFpQjs7SUFDakIsaUNBQWU7O0lBQ2YsaUNBQWU7OztNQUdYLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVEOzs7O0FBVUQsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQWtCLFlBQVksQ0FBQyxDQUFDO0lBT3JFLENBQUM7Ozs7SUFIQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDOzs7WUFiRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFFakMsMm1CQUF5Qzs7YUFDMUM7OzttQkFLRSxTQUFTLFNBQUMsTUFBTTs7OztJQUhqQiwrQ0FBc0U7O0lBQ3RFLHlDQUFtRTs7SUFFbkUsbUNBQWlDOzs7Ozs7O0FBb0JuQyxNQUFNLE9BQU8sWUFBWTs7OztJQVd2QixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDdkYsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsNnlCQUFpQzt5QkFDeEI7Ozs7R0FJUjthQUNGOzs7NEJBRUUsZUFBZSxTQUFDLGVBQWU7c0JBQy9CLGVBQWUsU0FBQyxTQUFTO3lCQUN6QixlQUFlLFNBQUMsWUFBWTtvQkFFNUIsU0FBUyxTQUFDLFFBQVE7c0JBRWxCLEtBQUs7eUJBRUwsS0FBSzs7OztJQVJOLHFDQUE2RTs7SUFDN0UsK0JBQTZEOztJQUM3RCxrQ0FBbUU7O0lBRW5FLDZCQUF3Qzs7SUFFeEMsK0JBQTJCOztJQUUzQixrQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRDb2x1bW5EZWYsXG4gIE1hdEhlYWRlclJvd0RlZixcbiAgTWF0Um93RGVmLFxuICBNYXRTb3J0LFxuICBNYXRUYWJsZSxcbiAgTWF0VGFibGVEYXRhU291cmNlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBUYWJsZSBleGFtcGxlIHRoYXQgc2hvd3MgaG93IHRvIHdyYXAgYSB0YWJsZSBjb21wb25lbnQgZm9yIGRlZmluaXRpb24gYW5kIGJlaGF2aW9yIHJldXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS13cmFwcGVkLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtd3JhcHBlZC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXcmFwcGVkRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PihFTEVNRU5UX0RBVEEpO1xuXG4gIEBWaWV3Q2hpbGQoJ3NvcnQnKSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG59XG5cbi8qKlxuICogVGFibGUgY29tcG9uZW50IHRoYXQgYWNjZXB0cyBjb2x1bW4gYW5kIHJvdyBkZWZpbml0aW9ucyBpbiBpdHMgY29udGVudCB0byBiZSByZWdpc3RlcmVkIHRvIHRoZVxuICogdGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyYXBwZXItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ3dyYXBwZXItdGFibGUuaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGBdXG59KVxuZXhwb3J0IGNsYXNzIFdyYXBwZXJUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1hdEhlYWRlclJvd0RlZikgaGVhZGVyUm93RGVmczogIFF1ZXJ5TGlzdDxNYXRIZWFkZXJSb3dEZWY+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdFJvd0RlZikgcm93RGVmczogUXVlcnlMaXN0PE1hdFJvd0RlZjxUPj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q29sdW1uRGVmKSBjb2x1bW5EZWZzOiBRdWVyeUxpc3Q8TWF0Q29sdW1uRGVmPjtcblxuICBAVmlld0NoaWxkKE1hdFRhYmxlKSB0YWJsZTogTWF0VGFibGU8VD47XG5cbiAgQElucHV0KCkgY29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5EZWZzLmZvckVhY2goY29sdW1uRGVmID0+IHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKGNvbHVtbkRlZikpO1xuICAgIHRoaXMucm93RGVmcy5mb3JFYWNoKHJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZFJvd0RlZihyb3dEZWYpKTtcbiAgICB0aGlzLmhlYWRlclJvd0RlZnMuZm9yRWFjaChoZWFkZXJSb3dEZWYgPT4gdGhpcy50YWJsZS5hZGRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmKSk7XG4gIH1cbn1cbiJdfQ==