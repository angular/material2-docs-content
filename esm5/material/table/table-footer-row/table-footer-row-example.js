import { Component } from '@angular/core';
/**
 * @title Footer row table
 */
var TableFooterRowExample = /** @class */ (function () {
    function TableFooterRowExample() {
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
    /** Gets the total cost of all transactions. */
    TableFooterRowExample.prototype.getTotalCost = function () {
        return this.transactions.map(function (t) { return t.cost; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    TableFooterRowExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-footer-row-example',
                    template: "<table mat-table [dataSource]=\"transactions\" class=\"mat-elevation-z8\">\n  <!-- Item Column -->\n  <ng-container matColumnDef=\"item\">\n    <th mat-header-cell *matHeaderCellDef> Item </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.item}} </td>\n    <td mat-footer-cell *matFooterCellDef> Total </td>\n  </ng-container>\n\n  <!-- Cost Column -->\n  <ng-container matColumnDef=\"cost\">\n    <th mat-header-cell *matHeaderCellDef> Cost </th>\n    <td mat-cell *matCellDef=\"let transaction\"> {{transaction.cost | currency}} </td>\n    <td mat-footer-cell *matFooterCellDef> {{getTotalCost() | currency}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n</table>\n",
                    styles: ["table {\n  width: 100%;\n}\n\ntr.mat-footer-row {\n  font-weight: bold;\n}\n"]
                }] }
    ];
    return TableFooterRowExample;
}());
export { TableFooterRowExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLWZvb3Rlci1yb3cvdGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPeEM7O0dBRUc7QUFDSDtJQUFBO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDOUMsaUJBQVksR0FBa0I7WUFDNUIsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDN0IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDeEIsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUM7WUFDNUIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7WUFDMUIsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7U0FDOUIsQ0FBQztJQU1KLENBQUM7SUFKQywrQ0FBK0M7SUFDL0MsNENBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLElBQUssT0FBQSxHQUFHLEdBQUcsS0FBSyxFQUFYLENBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBRXBDLHEzQkFBNEM7O2lCQUM3Qzs7SUFnQkQsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGl0ZW06IHN0cmluZztcbiAgY29zdDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEB0aXRsZSBGb290ZXIgcm93IHRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWZvb3Rlci1yb3ctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1mb290ZXItcm93LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZm9vdGVyLXJvdy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUZvb3RlclJvd0V4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaXRlbScsICdjb3N0J107XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXSA9IFtcbiAgICB7aXRlbTogJ0JlYWNoIGJhbGwnLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ1Rvd2VsJywgY29zdDogNX0sXG4gICAge2l0ZW06ICdGcmlzYmVlJywgY29zdDogMn0sXG4gICAge2l0ZW06ICdTdW5zY3JlZW4nLCBjb3N0OiA0fSxcbiAgICB7aXRlbTogJ0Nvb2xlcicsIGNvc3Q6IDI1fSxcbiAgICB7aXRlbTogJ1N3aW0gc3VpdCcsIGNvc3Q6IDE1fSxcbiAgXTtcblxuICAvKiogR2V0cyB0aGUgdG90YWwgY29zdCBvZiBhbGwgdHJhbnNhY3Rpb25zLiAqL1xuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNhY3Rpb25zLm1hcCh0ID0+IHQuY29zdCkucmVkdWNlKChhY2MsIHZhbHVlKSA9PiBhY2MgKyB2YWx1ZSwgMCk7XG4gIH1cbn1cbiJdfQ==