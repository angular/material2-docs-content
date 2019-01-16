/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Optional, ViewChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
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
    sort: [{ type: ViewChild, args: ['sort',] }]
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
    get name() { return this._name; }
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
    get sortable() { return this._sortable; }
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
    columnDef: [{ type: ViewChild, args: [MatColumnDef,] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLXNpbXBsZS1jb2x1bW4vdGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0gsWUFBWSxFQUNaLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLGtCQUFrQixFQUNyQixNQUFNLG1CQUFtQixDQUFDOzs7O0FBRTNCLHFDQUtDOzs7SUFKQywrQkFBYTs7SUFDYixtQ0FBaUI7O0lBQ2pCLGlDQUFlOztJQUNmLGlDQUFlOzs7TUFHWCxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFB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RUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNGLENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLG1DQUFtQztvQkFDNUMsbUJBQW1CLEVBQUUsTUFBTTtpQkFDNUI7YUFDRjs7OztZQW5FRyxRQUFRLHVCQTBHRyxRQUFROzs7bUJBcENwQixLQUFLO29CQVlMLEtBQUs7MkJBT0wsS0FBSztvQkFHTCxLQUFLO3VCQUdMLEtBQUs7d0JBT0wsU0FBUyxTQUFDLFlBQVk7eUJBRXRCLFNBQVMsU0FBQyxhQUFhOzs7O0lBNUJ4Qiw2QkFBYzs7Ozs7O0lBTWQsNkJBQXVCOzs7Ozs7O0lBT3ZCLG9DQUEyRDs7Ozs7SUFHM0QsNkJBQThDOztJQVE5QyxpQ0FBbUI7O0lBRW5CLGlDQUFpRDs7SUFFakQsa0NBQW9EOztJQUV4Qyw2QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgICBNYXRDb2x1bW5EZWYsXG4gICAgTWF0U29ydCxcbiAgICBNYXRTb3J0SGVhZGVyLFxuICAgIE1hdFRhYmxlLFxuICAgIE1hdFRhYmxlRGF0YVNvdXJjZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBhIGN1c3RvbSBjb2x1bW4gY29tcG9uZW50IGZvciBlYXN5IGNvbHVtbiBkZWZpbml0aW9uIHJldXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1zaW1wbGUtY29sdW1uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXNpbXBsZS1jb2x1bW4tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTaW1wbGVDb2x1bW5FeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+KEVMRU1FTlRfREFUQSk7XG4gIGdldFdlaWdodCA9IChkYXRhOiBQZXJpb2RpY0VsZW1lbnQpID0+ICd+JyArIGRhdGEud2VpZ2h0O1xuXG4gIEBWaWV3Q2hpbGQoJ3NvcnQnKSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG59XG5cbi8qKlxuICogQ29sdW1uIHRoYXQgc2hvd3Mgc2ltcGx5IHNob3dzIHRleHQgY29udGVudCBmb3IgdGhlIGhlYWRlciBhbmQgcm93XG4gKiBjZWxscy4gQnkgZGVmYXVsdCwgdGhlIG5hbWUgb2YgdGhpcyBjb2x1bW4gd2lsbCBiZSBhc3N1bWVkIHRvIGJlIGJvdGggdGhlIGhlYWRlclxuICogdGV4dCBhbmQgZGF0YSBwcm9wZXJ0eSB1c2VkIHRvIGFjY2VzcyB0aGUgZGF0YSB2YWx1ZSB0byBzaG93IGluIGNlbGxzLiBUbyBvdmVycmlkZVxuICogdGhlIGhlYWRlciB0ZXh0LCBwcm92aWRlIGEgbGFiZWwgdGV4dC4gVG8gb3ZlcnJpZGUgdGhlIGRhdGEgY2VsbCB2YWx1ZXMsXG4gKiBwcm92aWRlIGEgZGF0YUFjY2Vzc29yIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIHN0cmluZyB0byBkaXNwbGF5IGZvciBlYWNoIHJvdydzIGNlbGwuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgY29tcG9uZW50IHNldHMgaXRzZWxmIGFzIHZpc3VhbGx5IGhpZGRlbiBzaW5jZSBpdCB3aWxsIHNob3cgdXAgaW4gdGhlIGBtYXQtdGFibGVgXG4gKiBET00gYmVjYXVzZSBpdCBpcyBhbiBlbXB0eSBlbGVtZW50IHdpdGggYW4gbmctY29udGFpbmVyIChub3RoaW5nIHJlbmRlcmVkKS4gSXQgc2hvdWxkIG5vdFxuICogaW50ZXJmZXJlIHdpdGggc2NyZWVuIHJlYWRlcnMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpbXBsZS1jb2x1bW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IHt7bGFiZWwgfHwgbmFtZX19IDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YVwiPiB7e2dldERhdGEoZGF0YSl9fTwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnc2ltcGxlLWNvbHVtbiBjZGstdmlzdWFsbHktaGlkZGVuJyxcbiAgICAnW2F0dHIuYXJpYUhpZGRlbl0nOiAndHJ1ZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQ29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sdW1uIG5hbWUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sdW1uRGVmLm5hbWUgPSBuYW1lO1xuICB9XG4gIF9uYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgbGFiZWwgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGNvbHVtbiBoZWFkZXIuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90XG4gICAqIHNldCwgdGhlIGhlYWRlciB0ZXh0IHdpbGwgZGVmYXVsdCB0byB0aGUgY29sdW1uIG5hbWUuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBY2Nlc3NvciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgZGF0YSBzaG91bGQgYmUgcHJvdmlkZWQgdG8gdGhlIGNlbGwuIElmIHRoaXNcbiAgICogcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGRhdGEgY2VsbHMgd2lsbCBhc3N1bWUgdGhhdCB0aGUgY29sdW1uIG5hbWUgaXMgdGhlIHNhbWVcbiAgICogYXMgdGhlIGRhdGEgcHJvcGVydHkgdGhlIGNlbGxzIHNob3VsZCBkaXNwbGF5LlxuICAgKi9cbiAgQElucHV0KCkgZGF0YUFjY2Vzc29yOiAoKGRhdGE6IFQsIG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKTtcblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgQElucHV0KCkgYWxpZ246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdiZWZvcmUnO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb2x1bW4gaXMgc29ydGFibGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc29ydGFibGU7IH1cbiAgc2V0IHNvcnRhYmxlKHNvcnRhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc29ydGFibGUpO1xuICB9XG4gIF9zb3J0YWJsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKE1hdENvbHVtbkRlZikgY29sdW1uRGVmOiBNYXRDb2x1bW5EZWY7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0SGVhZGVyKSBzb3J0SGVhZGVyOiBNYXRTb3J0SGVhZGVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB0YWJsZTogTWF0VGFibGU8YW55PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZS5yZW1vdmVDb2x1bW5EZWYodGhpcy5jb2x1bW5EZWYpO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGEoZGF0YTogVCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUFjY2Vzc29yID8gdGhpcy5kYXRhQWNjZXNzb3IoZGF0YSwgdGhpcy5uYW1lKSA6IChkYXRhIGFzIGFueSlbdGhpcy5uYW1lXTtcbiAgfVxufVxuIl19