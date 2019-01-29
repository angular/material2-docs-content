import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Dynamic grid-list
 */
var GridListDynamicExample = /** @class */ (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListDynamicExample = tslib_1.__decorate([
        Component({
            selector: 'grid-list-dynamic-example',
            template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], GridListDynamicExample);
    return GridListDynamicExample;
}());
export { GridListDynamicExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBU3hDOztHQUVHO0FBTUg7SUFMQTtRQU1FLFVBQUssR0FBVztZQUNkLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQztJQVBZLHNCQUFzQjtRQUxsQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLG1SQUE2Qzs7U0FFOUMsQ0FBQztPQUNXLHNCQUFzQixDQU9sQztJQUFELDZCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGUge1xuICBjb2xvcjogc3RyaW5nO1xuICBjb2xzOiBudW1iZXI7XG4gIHJvd3M6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEeW5hbWljIGdyaWQtbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3REeW5hbWljRXhhbXBsZSB7XG4gIHRpbGVzOiBUaWxlW10gPSBbXG4gICAge3RleHQ6ICdPbmUnLCBjb2xzOiAzLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0Ymx1ZSd9LFxuICAgIHt0ZXh0OiAnVHdvJywgY29sczogMSwgcm93czogMiwgY29sb3I6ICdsaWdodGdyZWVuJ30sXG4gICAge3RleHQ6ICdUaHJlZScsIGNvbHM6IDEsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRwaW5rJ30sXG4gICAge3RleHQ6ICdGb3VyJywgY29sczogMiwgcm93czogMSwgY29sb3I6ICcjRERCREYxJ30sXG4gIF07XG59XG4iXX0=