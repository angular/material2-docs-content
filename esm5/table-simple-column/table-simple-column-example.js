import * as tslib_1 from "tslib";
import { Component, Input, Optional, ViewChild } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { MatColumnDef, MatSort, MatSortHeader, MatTable, MatTableDataSource } from '@angular/material';
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
 * @title Table with a custom column component for easy column definition reuse.
 */
var TableSimpleColumnExample = /** @class */ (function () {
    function TableSimpleColumnExample() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.getWeight = function (data) { return '~' + data.weight; };
    }
    TableSimpleColumnExample.prototype.ngOnInit = function () {
        this.dataSource.sort = this.sort;
    };
    tslib_1.__decorate([
        ViewChild('sort'),
        tslib_1.__metadata("design:type", MatSort)
    ], TableSimpleColumnExample.prototype, "sort", void 0);
    TableSimpleColumnExample = tslib_1.__decorate([
        Component({
            selector: 'table-simple-column-example',
            template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"\n       matSort #sort=\"matSort\">\n  <!-- Basic column: name is used for header label AND data property -->\n  <simple-column name=\"name\" sortable></simple-column>\n  <simple-column name=\"position\"></simple-column>\n\n  <!-- Name doesn't match the data property (or transform needed); define a custom data accessor -->\n  <simple-column name=\"weight\" [dataAccessor]=\"getWeight\"></simple-column>\n\n  <!-- Name doesn't match desired header text; define a custom label -->\n  <simple-column name=\"symbol\" label=\"SYMBOL!\"></simple-column>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let data; columns: displayedColumns;\"></tr>\n</table>\n",
            styles: ["table {\n  width: 100%;\n}\n"]
        })
    ], TableSimpleColumnExample);
    return TableSimpleColumnExample;
}());
export { TableSimpleColumnExample };
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
 */
var SimpleColumn = /** @class */ (function () {
    function SimpleColumn(table) {
        this.table = table;
        /** Alignment of the cell values. */
        this.align = 'before';
    }
    Object.defineProperty(SimpleColumn.prototype, "name", {
        /** Column name that should be used to reference this column. */
        get: function () { return this._name; },
        set: function (name) {
            this._name = name;
            this.columnDef.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleColumn.prototype, "sortable", {
        /** Whether the column is sortable */
        get: function () { return this._sortable; },
        set: function (sortable) {
            this._sortable = coerceBooleanProperty(sortable);
        },
        enumerable: true,
        configurable: true
    });
    SimpleColumn.prototype.ngOnInit = function () {
        if (this.table) {
            this.table.addColumnDef(this.columnDef);
        }
    };
    SimpleColumn.prototype.ngOnDestroy = function () {
        if (this.table) {
            this.table.removeColumnDef(this.columnDef);
        }
    };
    SimpleColumn.prototype.getData = function (data) {
        return this.dataAccessor ? this.dataAccessor(data, this.name) : data[this.name];
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], SimpleColumn.prototype, "name", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SimpleColumn.prototype, "label", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], SimpleColumn.prototype, "dataAccessor", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SimpleColumn.prototype, "align", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], SimpleColumn.prototype, "sortable", null);
    tslib_1.__decorate([
        ViewChild(MatColumnDef),
        tslib_1.__metadata("design:type", MatColumnDef)
    ], SimpleColumn.prototype, "columnDef", void 0);
    tslib_1.__decorate([
        ViewChild(MatSortHeader),
        tslib_1.__metadata("design:type", MatSortHeader)
    ], SimpleColumn.prototype, "sortHeader", void 0);
    SimpleColumn = tslib_1.__decorate([
        Component({
            selector: 'simple-column',
            template: "\n    <ng-container matColumnDef>\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> {{label || name}} </th>\n      <td mat-cell *matCellDef=\"let data\"> {{getData(data)}}</td>\n    </ng-container>\n  ",
            host: {
                'class': 'simple-column cdk-visually-hidden',
                '[attr.ariaHidden]': 'true',
            }
        }),
        tslib_1.__param(0, Optional()),
        tslib_1.__metadata("design:paramtypes", [MatTable])
    ], SimpleColumn);
    return SimpleColumn;
}());
export { SimpleColumn };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLXNpbXBsZS1jb2x1bW4vdGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQ0gsWUFBWSxFQUNaLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLGtCQUFrQixFQUNyQixNQUFNLG1CQUFtQixDQUFDO0FBUzNCLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFB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LElBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQW5ERDtRQURDLEtBQUssRUFBRTs7OzRDQUNpQztJQVdoQztRQUFSLEtBQUssRUFBRTs7K0NBQWU7SUFPZDtRQUFSLEtBQUssRUFBRTs7c0RBQW1EO0lBR2xEO1FBQVIsS0FBSyxFQUFFOzsrQ0FBc0M7SUFJOUM7UUFEQyxLQUFLLEVBQUU7OztnREFDMEM7SUFNekI7UUFBeEIsU0FBUyxDQUFDLFlBQVksQ0FBQzswQ0FBWSxZQUFZO21EQUFDO0lBRXZCO1FBQXpCLFNBQVMsQ0FBQyxhQUFhLENBQUM7MENBQWEsYUFBYTtvREFBQztJQXBDekMsWUFBWTtRQWJ4QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixRQUFRLEVBQUUsdU5BS1Q7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLG1DQUFtQztnQkFDNUMsbUJBQW1CLEVBQUUsTUFBTTthQUM1QjtTQUNGLENBQUM7UUF1Q2EsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQWUsUUFBUTtPQXRDbkMsWUFBWSxDQXVEeEI7SUFBRCxtQkFBQztDQUFBLEFBdkRELElBdURDO1NBdkRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPcHRpb25hbCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtcbiAgICBNYXRDb2x1bW5EZWYsXG4gICAgTWF0U29ydCxcbiAgICBNYXRTb3J0SGVhZGVyLFxuICAgIE1hdFRhYmxlLFxuICAgIE1hdFRhYmxlRGF0YVNvdXJjZVxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBhIGN1c3RvbSBjb2x1bW4gY29tcG9uZW50IGZvciBlYXN5IGNvbHVtbiBkZWZpbml0aW9uIHJldXNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1zaW1wbGUtY29sdW1uLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLXNpbXBsZS1jb2x1bW4tZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVTaW1wbGVDb2x1bW5FeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+KEVMRU1FTlRfREFUQSk7XG4gIGdldFdlaWdodCA9IChkYXRhOiBQZXJpb2RpY0VsZW1lbnQpID0+ICd+JyArIGRhdGEud2VpZ2h0O1xuXG4gIEBWaWV3Q2hpbGQoJ3NvcnQnKSBzb3J0OiBNYXRTb3J0O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG59XG5cbi8qKlxuICogQ29sdW1uIHRoYXQgc2hvd3Mgc2ltcGx5IHNob3dzIHRleHQgY29udGVudCBmb3IgdGhlIGhlYWRlciBhbmQgcm93XG4gKiBjZWxscy4gQnkgZGVmYXVsdCwgdGhlIG5hbWUgb2YgdGhpcyBjb2x1bW4gd2lsbCBiZSBhc3N1bWVkIHRvIGJlIGJvdGggdGhlIGhlYWRlclxuICogdGV4dCBhbmQgZGF0YSBwcm9wZXJ0eSB1c2VkIHRvIGFjY2VzcyB0aGUgZGF0YSB2YWx1ZSB0byBzaG93IGluIGNlbGxzLiBUbyBvdmVycmlkZVxuICogdGhlIGhlYWRlciB0ZXh0LCBwcm92aWRlIGEgbGFiZWwgdGV4dC4gVG8gb3ZlcnJpZGUgdGhlIGRhdGEgY2VsbCB2YWx1ZXMsXG4gKiBwcm92aWRlIGEgZGF0YUFjY2Vzc29yIGZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgdGhlIHN0cmluZyB0byBkaXNwbGF5IGZvciBlYWNoIHJvdydzIGNlbGwuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgY29tcG9uZW50IHNldHMgaXRzZWxmIGFzIHZpc3VhbGx5IGhpZGRlbiBzaW5jZSBpdCB3aWxsIHNob3cgdXAgaW4gdGhlIGBtYXQtdGFibGVgXG4gKiBET00gYmVjYXVzZSBpdCBpcyBhbiBlbXB0eSBlbGVtZW50IHdpdGggYW4gbmctY29udGFpbmVyIChub3RoaW5nIHJlbmRlcmVkKS4gSXQgc2hvdWxkIG5vdFxuICogaW50ZXJmZXJlIHdpdGggc2NyZWVuIHJlYWRlcnMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpbXBsZS1jb2x1bW4nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IHt7bGFiZWwgfHwgbmFtZX19IDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YVwiPiB7e2dldERhdGEoZGF0YSl9fTwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnc2ltcGxlLWNvbHVtbiBjZGstdmlzdWFsbHktaGlkZGVuJyxcbiAgICAnW2F0dHIuYXJpYUhpZGRlbl0nOiAndHJ1ZScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgU2ltcGxlQ29sdW1uPFQ+IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICAvKiogQ29sdW1uIG5hbWUgdGhhdCBzaG91bGQgYmUgdXNlZCB0byByZWZlcmVuY2UgdGhpcyBjb2x1bW4uICovXG4gIEBJbnB1dCgpXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XG4gIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29sdW1uRGVmLm5hbWUgPSBuYW1lO1xuICB9XG4gIF9uYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRleHQgbGFiZWwgdGhhdCBzaG91bGQgYmUgdXNlZCBmb3IgdGhlIGNvbHVtbiBoZWFkZXIuIElmIHRoaXMgcHJvcGVydHkgaXMgbm90XG4gICAqIHNldCwgdGhlIGhlYWRlciB0ZXh0IHdpbGwgZGVmYXVsdCB0byB0aGUgY29sdW1uIG5hbWUuXG4gICAqL1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBY2Nlc3NvciBmdW5jdGlvbiB0byByZXRyaWV2ZSB0aGUgZGF0YSBzaG91bGQgYmUgcHJvdmlkZWQgdG8gdGhlIGNlbGwuIElmIHRoaXNcbiAgICogcHJvcGVydHkgaXMgbm90IHNldCwgdGhlIGRhdGEgY2VsbHMgd2lsbCBhc3N1bWUgdGhhdCB0aGUgY29sdW1uIG5hbWUgaXMgdGhlIHNhbWVcbiAgICogYXMgdGhlIGRhdGEgcHJvcGVydHkgdGhlIGNlbGxzIHNob3VsZCBkaXNwbGF5LlxuICAgKi9cbiAgQElucHV0KCkgZGF0YUFjY2Vzc29yOiAoKGRhdGE6IFQsIG5hbWU6IHN0cmluZykgPT4gc3RyaW5nKTtcblxuICAvKiogQWxpZ25tZW50IG9mIHRoZSBjZWxsIHZhbHVlcy4gKi9cbiAgQElucHV0KCkgYWxpZ246ICdiZWZvcmUnIHwgJ2FmdGVyJyA9ICdiZWZvcmUnO1xuXG4gIC8qKiBXaGV0aGVyIHRoZSBjb2x1bW4gaXMgc29ydGFibGUgKi9cbiAgQElucHV0KClcbiAgZ2V0IHNvcnRhYmxlKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fc29ydGFibGU7IH1cbiAgc2V0IHNvcnRhYmxlKHNvcnRhYmxlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc29ydGFibGUgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkoc29ydGFibGUpO1xuICB9XG4gIF9zb3J0YWJsZTogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKE1hdENvbHVtbkRlZikgY29sdW1uRGVmOiBNYXRDb2x1bW5EZWY7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0SGVhZGVyKSBzb3J0SGVhZGVyOiBNYXRTb3J0SGVhZGVyO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHB1YmxpYyB0YWJsZTogTWF0VGFibGU8YW55PikgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgdGhpcy50YWJsZS5yZW1vdmVDb2x1bW5EZWYodGhpcy5jb2x1bW5EZWYpO1xuICAgIH1cbiAgfVxuXG4gIGdldERhdGEoZGF0YTogVCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YUFjY2Vzc29yID8gdGhpcy5kYXRhQWNjZXNzb3IoZGF0YSwgdGhpcy5uYW1lKSA6IChkYXRhIGFzIGFueSlbdGhpcy5uYW1lXTtcbiAgfVxufVxuIl19