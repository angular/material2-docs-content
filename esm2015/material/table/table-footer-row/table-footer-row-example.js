/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * @record
 */
export function Transaction() { }
if (false) {
    /** @type {?} */
    Transaction.prototype.item;
    /** @type {?} */
    Transaction.prototype.cost;
}
/**
 * \@title Footer row table
 */
export class TableFooterRowExample {
    constructor() {
        this.displayedColumns = ['item', 'cost'];
        this.transactions = [
            { item: 'Beach ball', cost: 4 },
            { item: 'Towel', cost: 5 },
            { item: 'Frisbee', cost: 2 },
            { item: 'Sunscreen', cost: 4 },
            { item: 'Cooler', cost: 25 },
            { item: 'Swim suit', cost: 15 },
        ];
    }
    /**
     * Gets the total cost of all transactions.
     * @return {?}
     */
    getTotalCost() {
        return this.transactions.map((/**
         * @param {?} t
         * @return {?}
         */
        t => t.cost)).reduce((/**
         * @param {?} acc
         * @param {?} value
         * @return {?}
         */
        (acc, value) => acc + value), 0);
    }
}
TableFooterRowExample.decorators = [
    { type: Component, args: [{
                selector: 'table-footer-row-example',
                template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n",
                styles: ["table {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    TableFooterRowExample.prototype.displayedColumns;
    /** @type {?} */
    TableFooterRowExample.prototype.transactions;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWZvb3Rlci1yb3cvdGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLGlDQUdDOzs7SUFGQywyQkFBYTs7SUFDYiwyQkFBYTs7Ozs7QUFXZixNQUFNLE9BQU8scUJBQXFCO0lBTGxDO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsaUJBQVksR0FBa0I7WUFDNUIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7U0FDOUIsQ0FBQztJQU1KLENBQUM7Ozs7O0lBSEMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsTUFBTTs7Ozs7UUFBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLEdBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUVwQyxxM0JBQTRDOzthQUM3Qzs7OztJQUVDLGlEQUE4Qzs7SUFDOUMsNkNBT0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNhY3Rpb24ge1xuICBpdGVtOiBzdHJpbmc7XG4gIGNvc3Q6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgRm9vdGVyIHJvdyB0YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1mb290ZXItcm93LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVGb290ZXJSb3dFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2l0ZW0nLCAnY29zdCddO1xuICB0cmFuc2FjdGlvbnM6IFRyYW5zYWN0aW9uW10gPSBbXG4gICAge2l0ZW06ICdCZWFjaCBiYWxsJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdUb3dlbCcsIGNvc3Q6IDV9LFxuICAgIHtpdGVtOiAnRnJpc2JlZScsIGNvc3Q6IDJ9LFxuICAgIHtpdGVtOiAnU3Vuc2NyZWVuJywgY29zdDogNH0sXG4gICAge2l0ZW06ICdDb29sZXInLCBjb3N0OiAyNX0sXG4gICAge2l0ZW06ICdTd2ltIHN1aXQnLCBjb3N0OiAxNX0sXG4gIF07XG5cbiAgLyoqIEdldHMgdGhlIHRvdGFsIGNvc3Qgb2YgYWxsIHRyYW5zYWN0aW9ucy4gKi9cbiAgZ2V0VG90YWxDb3N0KCkge1xuICAgIHJldHVybiB0aGlzLnRyYW5zYWN0aW9ucy5tYXAodCA9PiB0LmNvc3QpLnJlZHVjZSgoYWNjLCB2YWx1ZSkgPT4gYWNjICsgdmFsdWUsIDApO1xuICB9XG59XG4iXX0=