import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
 * @title Table dynamically changing the columns displayed
 */
var TableDynamicColumnsExample = /** @class */ (function () {
    function TableDynamicColumnsExample() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA;
    }
    TableDynamicColumnsExample.prototype.addColumn = function () {
        var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    };
    TableDynamicColumnsExample.prototype.removeColumn = function () {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    };
    TableDynamicColumnsExample.prototype.shuffle = function () {
        var currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            var temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    };
    TableDynamicColumnsExample = tslib_1.__decorate([
        Component({
            selector: 'table-dynamic-columns-example',
            template: "<button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n<button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n<button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n    <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n</table>\n",
            styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 16px 8px;\n}\n"]
        })
    ], TableDynamicColumnsExample);
    return TableDynamicColumnsExample;
}());
export { TableDynamicColumnsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZHluYW1pYy1jb2x1bW5zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGFibGUtZHluYW1pYy1jb2x1bW5zL3RhYmxlLWR5bmFtaWMtY29sdW1ucy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBTUg7SUFMQTtRQU1FLHFCQUFnQixHQUFhLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDdEUscUJBQWdCLEdBQWEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzNELFNBQUksR0FBc0IsWUFBWSxDQUFDO0lBeUJ6QyxDQUFDO0lBdkJDLDhDQUFTLEdBQVQ7UUFDRSxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQsaURBQVksR0FBWjtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtZQUNoQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDN0I7SUFDSCxDQUFDO0lBRUQsNENBQU8sR0FBUDtRQUNFLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7UUFDaEQsT0FBTyxDQUFDLEtBQUssWUFBWSxFQUFFO1lBQ3pCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO1lBQzNELFlBQVksSUFBSSxDQUFDLENBQUM7WUFFbEIsT0FBTztZQUNQLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBM0JVLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBRXpDLG1yQkFBaUQ7O1NBQ2xELENBQUM7T0FDVywwQkFBMEIsQ0E0QnRDO0lBQUQsaUNBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgZHluYW1pY2FsbHkgY2hhbmdpbmcgdGhlIGNvbHVtbnMgZGlzcGxheWVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWR5bmFtaWMtY29sdW1ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLWR5bmFtaWMtY29sdW1ucy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWR5bmFtaWMtY29sdW1ucy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUR5bmFtaWNDb2x1bW5zRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWyduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnLCAncG9zaXRpb24nXTtcbiAgY29sdW1uc1RvRGlzcGxheTogc3RyaW5nW10gPSB0aGlzLmRpc3BsYXllZENvbHVtbnMuc2xpY2UoKTtcbiAgZGF0YTogUGVyaW9kaWNFbGVtZW50W10gPSBFTEVNRU5UX0RBVEE7XG5cbiAgYWRkQ29sdW1uKCkge1xuICAgIGNvbnN0IHJhbmRvbUNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGgpO1xuICAgIHRoaXMuY29sdW1uc1RvRGlzcGxheS5wdXNoKHRoaXMuZGlzcGxheWVkQ29sdW1uc1tyYW5kb21Db2x1bW5dKTtcbiAgfVxuXG4gIHJlbW92ZUNvbHVtbigpIHtcbiAgICBpZiAodGhpcy5jb2x1bW5zVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5LnBvcCgpO1xuICAgIH1cbiAgfVxuXG4gIHNodWZmbGUoKSB7XG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHRoaXMuY29sdW1uc1RvRGlzcGxheS5sZW5ndGg7XG4gICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuICAgICAgbGV0IHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAvLyBTd2FwXG4gICAgICBsZXQgdGVtcCA9IHRoaXMuY29sdW1uc1RvRGlzcGxheVtjdXJyZW50SW5kZXhdO1xuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5W2N1cnJlbnRJbmRleF0gPSB0aGlzLmNvbHVtbnNUb0Rpc3BsYXlbcmFuZG9tSW5kZXhdO1xuICAgICAgdGhpcy5jb2x1bW5zVG9EaXNwbGF5W3JhbmRvbUluZGV4XSA9IHRlbXA7XG4gICAgfVxuICB9XG59XG4iXX0=