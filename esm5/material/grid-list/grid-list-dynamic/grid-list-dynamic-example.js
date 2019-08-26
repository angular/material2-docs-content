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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQVN4Qzs7R0FFRztBQU1IO0lBTEE7UUFNRSxVQUFLLEdBQVc7WUFDZCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDbkQsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFDO1lBQ3BELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNyRCxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7U0FDbkQsQ0FBQztJQUNKLENBQUM7SUFQWSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxtUkFBNkM7O1NBRTlDLENBQUM7T0FDVyxzQkFBc0IsQ0FPbEM7SUFBRCw2QkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sczogbnVtYmVyO1xuICByb3dzOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRHluYW1pYyBncmlkLWxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0RHluYW1pY0V4YW1wbGUge1xuICB0aWxlczogVGlsZVtdID0gW1xuICAgIHt0ZXh0OiAnT25lJywgY29sczogMywgcm93czogMSwgY29sb3I6ICdsaWdodGJsdWUnfSxcbiAgICB7dGV4dDogJ1R3bycsIGNvbHM6IDEsIHJvd3M6IDIsIGNvbG9yOiAnbGlnaHRncmVlbid9LFxuICAgIHt0ZXh0OiAnVGhyZWUnLCBjb2xzOiAxLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0cGluayd9LFxuICAgIHt0ZXh0OiAnRm91cicsIGNvbHM6IDIsIHJvd3M6IDEsIGNvbG9yOiAnI0REQkRGMSd9LFxuICBdO1xufVxuIl19