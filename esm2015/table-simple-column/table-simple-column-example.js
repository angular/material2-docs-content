/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, Optional, ViewChild } from '@angular/core';
import { MatColumnDef, MatSort, MatSortHeader, MatTable, MatTableDataSource } from '@angular/material';
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
 * \@title Table with a custom column component for easy column definition reuse.
 */
export class TableSimpleColumnExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.getWeight = (data) => '~' + data.weight;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dataSource.sort = this.sort;
    }
}
TableSimpleColumnExample.decorators = [
    { type: Component, args: [{
                selector: 'table-simple-column-example',
                template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"\n       matSort #sort=\"matSort\">\n  <!-- Basic column: name is used for header label AND data property -->\n  <simple-column name=\"name\" sortable></simple-column>\n  <simple-column name=\"position\"></simple-column>\n\n  <!-- Name doesn't match the data property (or transform needed); define a custom data accessor -->\n  <simple-column name=\"weight\" [dataAccessor]=\"getWeight\"></simple-column>\n\n  <!-- Name doesn't match desired header text; define a custom label -->\n  <simple-column name=\"symbol\" label=\"SYMBOL!\"></simple-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let data; columns: displayedColumns;\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n"]
            }] }
];
TableSimpleColumnExample.propDecorators = {
    sort: [{ type: ViewChild, args: ['sort', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TableSimpleColumnExample.prototype.displayedColumns;
    /** @type {?} */
    TableSimpleColumnExample.prototype.dataSource;
    /** @type {?} */
    TableSimpleColumnExample.prototype.getWeight;
    /** @type {?} */
    TableSimpleColumnExample.prototype.sort;
}
/**
 * Column that shows simply shows text content for the header and row
 * cells. By default, the name of this column will be assumed to be both the header
 * text and data property used to access the data value to show in cells. To override
 * the header text, provide a label text. To override the data cell values,
 * provide a dataAccessor function that provides the string to display for each row's cell.
 *
 * Note that this component sets itself as visually hidden since it will show up in the `mat-table`
 * DOM because it is an empty element with an ng-container (nothing rendered). It should not
 * interfere with screen readers.
 * @template T
 */
export class SimpleColumn {
    /**
     * @param {?} table
     */
    constructor(table) {
        this.table = table;
        /**
         * Alignment of the cell values.
         */
        this.align = 'before';
    }
    /**
     * Column name that should be used to reference this column.
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = name;
        this.columnDef.name = name;
    }
    /**
     * Whether the column is sortable
     * @return {?}
     */
    get sortable() {
        return this._sortable;
    }
    /**
     * @param {?} sortable
     * @return {?}
     */
    set sortable(sortable) {
        this._sortable = coerceBooleanProperty(sortable);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.table) {
            this.table.addColumnDef(this.columnDef);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.table) {
            this.table.removeColumnDef(this.columnDef);
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getData(data) {
        return this.dataAccessor ? this.dataAccessor(data, this.name) : ((/** @type {?} */ (data)))[this.name];
    }
}
SimpleColumn.decorators = [
    { type: Component, args: [{
                selector: 'simple-column',
                template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{label || name}} </th>
      <td mat-cell *matCellDef="let data"> {{getData(data)}}</td>
    </ng-container>
  `,
                host: {
                    'class': 'simple-column cdk-visually-hidden',
                    '[attr.ariaHidden]': 'true',
                }
            }] }
];
/** @nocollapse */
SimpleColumn.ctorParameters = () => [
    { type: MatTable, decorators: [{ type: Optional }] }
];
SimpleColumn.propDecorators = {
    name: [{ type: Input }],
    label: [{ type: Input }],
    dataAccessor: [{ type: Input }],
    align: [{ type: Input }],
    sortable: [{ type: Input }],
    columnDef: [{ type: ViewChild, args: [MatColumnDef, { static: true },] }],
    sortHeader: [{ type: ViewChild, args: [MatSortHeader,] }]
};
if (false) {
    /** @type {?} */
    SimpleColumn.prototype._name;
    /**
     * Text label that should be used for the column header. If this property is not
     * set, the header text will default to the column name.
     * @type {?}
     */
    SimpleColumn.prototype.label;
    /**
     * Accessor function to retrieve the data should be provided to the cell. If this
     * property is not set, the data cells will assume that the column name is the same
     * as the data property the cells should display.
     * @type {?}
     */
    SimpleColumn.prototype.dataAccessor;
    /**
     * Alignment of the cell values.
     * @type {?}
     */
    SimpleColumn.prototype.align;
    /** @type {?} */
    SimpleColumn.prototype._sortable;
    /** @type {?} */
    SimpleColumn.prototype.columnDef;
    /** @type {?} */
    SimpleColumn.prototype.sortHeader;
    /** @type {?} */
    SimpleColumn.prototype.table;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLXNpbXBsZS1jb2x1bW4vdGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLGtCQUFrQixFQUNuQixNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTNCLHFDQUtDOzs7SUFKQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOzs7TUFHWCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFB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LENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsSUFBSSxFQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7OztHQUtUO2dCQUNELElBQUksRUFBRTtvQkFDSixPQUFPLEVBQUUsbUNBQW1DO29CQUM1QyxtQkFBbUIsRUFBRSxNQUFNO2lCQUM1QjthQUNGOzs7O1lBbkVDLFFBQVEsdUJBOEdLLFFBQVE7OzttQkF4Q3BCLEtBQUs7b0JBY0wsS0FBSzsyQkFPTCxLQUFLO29CQUdMLEtBQUs7dUJBR0wsS0FBSzt3QkFTTCxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzt5QkFFdEMsU0FBUyxTQUFDLGFBQWE7Ozs7SUE5QnhCLDZCQUFjOzs7Ozs7SUFNZCw2QkFBdUI7Ozs7Ozs7SUFPdkIsb0NBQTJEOzs7OztJQUczRCw2QkFBNEM7O0lBVTVDLGlDQUFtQjs7SUFFbkIsaUNBQWlFOztJQUVqRSxrQ0FBb0Q7O0lBRXhDLDZCQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRDb2x1bW5EZWYsXG4gIE1hdFNvcnQsXG4gIE1hdFNvcnRIZWFkZXIsXG4gIE1hdFRhYmxlLFxuICBNYXRUYWJsZURhdGFTb3VyY2Vcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggYSBjdXN0b20gY29sdW1uIGNvbXBvbmVudCBmb3IgZWFzeSBjb2x1bW4gZGVmaW5pdGlvbiByZXVzZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXNpbXBsZS1jb2x1bW4tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zaW1wbGUtY29sdW1uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU2ltcGxlQ29sdW1uRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PihFTEVNRU5UX0RBVEEpO1xuICBnZXRXZWlnaHQgPSAoZGF0YTogUGVyaW9kaWNFbGVtZW50KSA9PiAnficgKyBkYXRhLndlaWdodDtcblxuICBAVmlld0NoaWxkKCdzb3J0Jywge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb2x1bW4gdGhhdCBzaG93cyBzaW1wbHkgc2hvd3MgdGV4dCBjb250ZW50IGZvciB0aGUgaGVhZGVyIGFuZCByb3dcbiAqIGNlbGxzLiBCeSBkZWZhdWx0LCB0aGUgbmFtZSBvZiB0aGlzIGNvbHVtbiB3aWxsIGJlIGFzc3VtZWQgdG8gYmUgYm90aCB0aGUgaGVhZGVyXG4gKiB0ZXh0IGFuZCBkYXRhIHByb3BlcnR5IHVzZWQgdG8gYWNjZXNzIHRoZSBkYXRhIHZhbHVlIHRvIHNob3cgaW4gY2VsbHMuIFRvIG92ZXJyaWRlXG4gKiB0aGUgaGVhZGVyIHRleHQsIHByb3ZpZGUgYSBsYWJlbCB0ZXh0LiBUbyBvdmVycmlkZSB0aGUgZGF0YSBjZWxsIHZhbHVlcyxcbiAqIHByb3ZpZGUgYSBkYXRhQWNjZXNzb3IgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyB0aGUgc3RyaW5nIHRvIGRpc3BsYXkgZm9yIGVhY2ggcm93J3MgY2VsbC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBjb21wb25lbnQgc2V0cyBpdHNlbGYgYXMgdmlzdWFsbHkgaGlkZGVuIHNpbmNlIGl0IHdpbGwgc2hvdyB1cCBpbiB0aGUgYG1hdC10YWJsZWBcbiAqIERPTSBiZWNhdXNlIGl0IGlzIGFuIGVtcHR5IGVsZW1lbnQgd2l0aCBhbiBuZy1jb250YWluZXIgKG5vdGhpbmcgcmVuZGVyZWQpLiBJdCBzaG91bGQgbm90XG4gKiBpbnRlcmZlcmUgd2l0aCBzY3JlZW4gcmVhZGVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLWNvbHVtbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tsYWJlbCB8fCBuYW1lfX0gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhXCI+IHt7Z2V0RGF0YShkYXRhKX19PC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdzaW1wbGUtY29sdW1uIGNkay12aXN1YWxseS1oaWRkZW4nLFxuICAgICdbYXR0ci5hcmlhSGlkZGVuXSc6ICd0cnVlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVDb2x1bW48VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBDb2x1bW4gbmFtZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlZmVyZW5jZSB0aGlzIGNvbHVtbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbHVtbkRlZi5uYW1lID0gbmFtZTtcbiAgfVxuICBfbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IGxhYmVsIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBjb2x1bW4gaGVhZGVyLiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdFxuICAgKiBzZXQsIHRoZSBoZWFkZXIgdGV4dCB3aWxsIGRlZmF1bHQgdG8gdGhlIGNvbHVtbiBuYW1lLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXNzb3IgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGRhdGEgc2hvdWxkIGJlIHByb3ZpZGVkIHRvIHRoZSBjZWxsLiBJZiB0aGlzXG4gICAqIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSBkYXRhIGNlbGxzIHdpbGwgYXNzdW1lIHRoYXQgdGhlIGNvbHVtbiBuYW1lIGlzIHRoZSBzYW1lXG4gICAqIGFzIHRoZSBkYXRhIHByb3BlcnR5IHRoZSBjZWxscyBzaG91bGQgZGlzcGxheS5cbiAgICovXG4gIEBJbnB1dCgpIGRhdGFBY2Nlc3NvcjogKChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZyk7XG5cbiAgLyoqIEFsaWdubWVudCBvZiB0aGUgY2VsbCB2YWx1ZXMuICovXG4gIEBJbnB1dCgpIGFsaWduOiAnYmVmb3JlJ3wnYWZ0ZXInID0gJ2JlZm9yZSc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbHVtbiBpcyBzb3J0YWJsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBfc29ydGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZChNYXRDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBjb2x1bW5EZWY6IE1hdENvbHVtbkRlZjtcblxuICBAVmlld0NoaWxkKE1hdFNvcnRIZWFkZXIpIHNvcnRIZWFkZXI6IE1hdFNvcnRIZWFkZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIHRhYmxlOiBNYXRUYWJsZTxhbnk+KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmFkZENvbHVtbkRlZih0aGlzLmNvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUucmVtb3ZlQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9XG4gIH1cblxuICBnZXREYXRhKGRhdGE6IFQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmRhdGFBY2Nlc3NvciA/IHRoaXMuZGF0YUFjY2Vzc29yKGRhdGEsIHRoaXMubmFtZSkgOiAoZGF0YSBhcyBhbnkpW3RoaXMubmFtZV07XG4gIH1cbn1cbiJdfQ==