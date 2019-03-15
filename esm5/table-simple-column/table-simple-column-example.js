import * as tslib_1 from "tslib";
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, Optional, ViewChild } from '@angular/core';
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
        ViewChild('sort', { static: true }),
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
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            this.columnDef.name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SimpleColumn.prototype, "sortable", {
        /** Whether the column is sortable */
        get: function () {
            return this._sortable;
        },
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
        ViewChild(MatColumnDef, { static: true }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL3RhYmxlLXNpbXBsZS1jb2x1bW4vdGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBcUIsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQ0wsWUFBWSxFQUNaLE9BQU8sRUFDUCxhQUFhLEVBQ2IsUUFBUSxFQUNSLGtCQUFrQixFQUNuQixNQUFNLG1CQUFtQixDQUFDO0FBUzNCLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBTUg7SUFMQTtRQU1FLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQWtCLFlBQVksQ0FBQyxDQUFDO1FBQ25FLGNBQVMsR0FBRyxVQUFDLElBQXFCLElBQUssT0FBQSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBakIsQ0FBaUIsQ0FBQztJQU8zRCxDQUFDO0lBSEMsMkNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkMsQ0FBQztJQUprQztRQUFsQyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzBDQUFPLE9BQU87MERBQUM7SUFMdEMsd0JBQXdCO1FBTHBDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw2QkFBNkI7WUFFdkMsaXhCQUErQzs7U0FDaEQsQ0FBQztPQUNXLHdCQUF3QixDQVVwQztJQUFELCtCQUFDO0NBQUEsQUFWRCxJQVVDO1NBVlksd0JBQXdCO0FBWXJDOzs7Ozs7Ozs7O0dBVUc7QUFjSDtJQTBDRSxzQkFBK0IsS0FBb0I7UUFBcEIsVUFBSyxHQUFMLEtBQUssQ0FBZTtRQWpCbkQsb0NBQW9DO1FBQzNCLFVBQUssR0FBcUIsUUFBUSxDQUFDO0lBZ0JVLENBQUM7SUF2Q3ZELHNCQUFJLDhCQUFJO1FBRlIsZ0VBQWdFO2FBRWhFO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7YUFDRCxVQUFTLElBQVk7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLENBQUM7OztPQUpBO0lBeUJELHNCQUFJLGtDQUFRO1FBRloscUNBQXFDO2FBRXJDO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFDRCxVQUFhLFFBQWlCO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQzs7O09BSEE7SUFZRCwrQkFBUSxHQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDNUM7SUFDSCxDQUFDO0lBRUQsOEJBQU8sR0FBUCxVQUFRLElBQU87UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBdkREO1FBREMsS0FBSyxFQUFFOzs7NENBR1A7SUFXUTtRQUFSLEtBQUssRUFBRTs7K0NBQWU7SUFPZDtRQUFSLEtBQUssRUFBRTs7c0RBQW1EO0lBR2xEO1FBQVIsS0FBSyxFQUFFOzsrQ0FBb0M7SUFJNUM7UUFEQyxLQUFLLEVBQUU7OztnREFHUDtJQU13QztRQUF4QyxTQUFTLENBQUMsWUFBWSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzBDQUFZLFlBQVk7bURBQUM7SUFFdkM7UUFBekIsU0FBUyxDQUFDLGFBQWEsQ0FBQzswQ0FBYSxhQUFhO29EQUFDO0lBeEN6QyxZQUFZO1FBYnhCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSx1TkFLVDtZQUNELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsbUNBQW1DO2dCQUM1QyxtQkFBbUIsRUFBRSxNQUFNO2FBQzVCO1NBQ0YsQ0FBQztRQTJDYSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFBZSxRQUFRO09BMUNuQyxZQUFZLENBMkR4QjtJQUFELG1CQUFDO0NBQUEsQUEzREQsSUEyREM7U0EzRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29lcmNlQm9vbGVhblByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3B0aW9uYWwsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBNYXRDb2x1bW5EZWYsXG4gIE1hdFNvcnQsXG4gIE1hdFNvcnRIZWFkZXIsXG4gIE1hdFRhYmxlLFxuICBNYXRUYWJsZURhdGFTb3VyY2Vcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIHdpdGggYSBjdXN0b20gY29sdW1uIGNvbXBvbmVudCBmb3IgZWFzeSBjb2x1bW4gZGVmaW5pdGlvbiByZXVzZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtc2ltcGxlLWNvbHVtbi1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXNpbXBsZS1jb2x1bW4tZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1zaW1wbGUtY29sdW1uLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlU2ltcGxlQ29sdW1uRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U8UGVyaW9kaWNFbGVtZW50PihFTEVNRU5UX0RBVEEpO1xuICBnZXRXZWlnaHQgPSAoZGF0YTogUGVyaW9kaWNFbGVtZW50KSA9PiAnficgKyBkYXRhLndlaWdodDtcblxuICBAVmlld0NoaWxkKCdzb3J0Jywge3N0YXRpYzogdHJ1ZX0pIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cbn1cblxuLyoqXG4gKiBDb2x1bW4gdGhhdCBzaG93cyBzaW1wbHkgc2hvd3MgdGV4dCBjb250ZW50IGZvciB0aGUgaGVhZGVyIGFuZCByb3dcbiAqIGNlbGxzLiBCeSBkZWZhdWx0LCB0aGUgbmFtZSBvZiB0aGlzIGNvbHVtbiB3aWxsIGJlIGFzc3VtZWQgdG8gYmUgYm90aCB0aGUgaGVhZGVyXG4gKiB0ZXh0IGFuZCBkYXRhIHByb3BlcnR5IHVzZWQgdG8gYWNjZXNzIHRoZSBkYXRhIHZhbHVlIHRvIHNob3cgaW4gY2VsbHMuIFRvIG92ZXJyaWRlXG4gKiB0aGUgaGVhZGVyIHRleHQsIHByb3ZpZGUgYSBsYWJlbCB0ZXh0LiBUbyBvdmVycmlkZSB0aGUgZGF0YSBjZWxsIHZhbHVlcyxcbiAqIHByb3ZpZGUgYSBkYXRhQWNjZXNzb3IgZnVuY3Rpb24gdGhhdCBwcm92aWRlcyB0aGUgc3RyaW5nIHRvIGRpc3BsYXkgZm9yIGVhY2ggcm93J3MgY2VsbC5cbiAqXG4gKiBOb3RlIHRoYXQgdGhpcyBjb21wb25lbnQgc2V0cyBpdHNlbGYgYXMgdmlzdWFsbHkgaGlkZGVuIHNpbmNlIGl0IHdpbGwgc2hvdyB1cCBpbiB0aGUgYG1hdC10YWJsZWBcbiAqIERPTSBiZWNhdXNlIGl0IGlzIGFuIGVtcHR5IGVsZW1lbnQgd2l0aCBhbiBuZy1jb250YWluZXIgKG5vdGhpbmcgcmVuZGVyZWQpLiBJdCBzaG91bGQgbm90XG4gKiBpbnRlcmZlcmUgd2l0aCBzY3JlZW4gcmVhZGVycy5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2ltcGxlLWNvbHVtbicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4ge3tsYWJlbCB8fCBuYW1lfX0gPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhXCI+IHt7Z2V0RGF0YShkYXRhKX19PC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICdjbGFzcyc6ICdzaW1wbGUtY29sdW1uIGNkay12aXN1YWxseS1oaWRkZW4nLFxuICAgICdbYXR0ci5hcmlhSGlkZGVuXSc6ICd0cnVlJyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBTaW1wbGVDb2x1bW48VD4gaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XG4gIC8qKiBDb2x1bW4gbmFtZSB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHJlZmVyZW5jZSB0aGlzIGNvbHVtbi4gKi9cbiAgQElucHV0KClcbiAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgfVxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICB0aGlzLmNvbHVtbkRlZi5uYW1lID0gbmFtZTtcbiAgfVxuICBfbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUZXh0IGxhYmVsIHRoYXQgc2hvdWxkIGJlIHVzZWQgZm9yIHRoZSBjb2x1bW4gaGVhZGVyLiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdFxuICAgKiBzZXQsIHRoZSBoZWFkZXIgdGV4dCB3aWxsIGRlZmF1bHQgdG8gdGhlIGNvbHVtbiBuYW1lLlxuICAgKi9cbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXNzb3IgZnVuY3Rpb24gdG8gcmV0cmlldmUgdGhlIGRhdGEgc2hvdWxkIGJlIHByb3ZpZGVkIHRvIHRoZSBjZWxsLiBJZiB0aGlzXG4gICAqIHByb3BlcnR5IGlzIG5vdCBzZXQsIHRoZSBkYXRhIGNlbGxzIHdpbGwgYXNzdW1lIHRoYXQgdGhlIGNvbHVtbiBuYW1lIGlzIHRoZSBzYW1lXG4gICAqIGFzIHRoZSBkYXRhIHByb3BlcnR5IHRoZSBjZWxscyBzaG91bGQgZGlzcGxheS5cbiAgICovXG4gIEBJbnB1dCgpIGRhdGFBY2Nlc3NvcjogKChkYXRhOiBULCBuYW1lOiBzdHJpbmcpID0+IHN0cmluZyk7XG5cbiAgLyoqIEFsaWdubWVudCBvZiB0aGUgY2VsbCB2YWx1ZXMuICovXG4gIEBJbnB1dCgpIGFsaWduOiAnYmVmb3JlJ3wnYWZ0ZXInID0gJ2JlZm9yZSc7XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGNvbHVtbiBpcyBzb3J0YWJsZSAqL1xuICBASW5wdXQoKVxuICBnZXQgc29ydGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnRhYmxlO1xuICB9XG4gIHNldCBzb3J0YWJsZShzb3J0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NvcnRhYmxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHNvcnRhYmxlKTtcbiAgfVxuICBfc29ydGFibGU6IGJvb2xlYW47XG5cbiAgQFZpZXdDaGlsZChNYXRDb2x1bW5EZWYsIHtzdGF0aWM6IHRydWV9KSBjb2x1bW5EZWY6IE1hdENvbHVtbkRlZjtcblxuICBAVmlld0NoaWxkKE1hdFNvcnRIZWFkZXIpIHNvcnRIZWFkZXI6IE1hdFNvcnRIZWFkZXI7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgcHVibGljIHRhYmxlOiBNYXRUYWJsZTxhbnk+KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnRhYmxlKSB7XG4gICAgICB0aGlzLnRhYmxlLmFkZENvbHVtbkRlZih0aGlzLmNvbHVtbkRlZik7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMudGFibGUpIHtcbiAgICAgIHRoaXMudGFibGUucmVtb3ZlQ29sdW1uRGVmKHRoaXMuY29sdW1uRGVmKTtcbiAgICB9XG4gIH1cblxuICBnZXREYXRhKGRhdGE6IFQpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmRhdGFBY2Nlc3NvciA/IHRoaXMuZGF0YUFjY2Vzc29yKGRhdGEsIHRoaXMubmFtZSkgOiAoZGF0YSBhcyBhbnkpW3RoaXMubmFtZV07XG4gIH1cbn1cbiJdfQ==