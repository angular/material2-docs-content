import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop horizontal sorting
 */
var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
    function CdkDragDropHorizontalSortingExample() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    CdkDragDropHorizontalSortingExample.prototype.drop = function (event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    };
    CdkDragDropHorizontalSortingExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-horizontal-sorting-example',
            template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>\n",
            styles: [".example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropHorizontalSortingExample);
    return CdkDragDropHorizontalSortingExample;
}());
export { CdkDragDropHorizontalSortingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy9jZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTs7R0FFRztBQU1IO0lBTEE7UUFNRSxnQkFBVyxHQUFHO1lBQ1osWUFBWTtZQUNaLFVBQVU7WUFDVixhQUFhO1lBQ2IscUJBQXFCO1lBQ3JCLHlCQUF5QjtTQUMxQixDQUFDO0lBS0osQ0FBQztJQUhDLGtEQUFJLEdBQUosVUFBSyxLQUE0QjtRQUMvQixlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBWFUsbUNBQW1DO1FBTC9DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsOE9BQTREOztTQUU3RCxDQUFDO09BQ1csbUNBQW1DLENBWS9DO0lBQUQsMENBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgaG9yaXpvbnRhbCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEhvcml6b250YWxTb3J0aW5nRXhhbXBsZSB7XG4gIHRpbWVQZXJpb2RzID0gW1xuICAgICdCcm9uemUgYWdlJyxcbiAgICAnSXJvbiBhZ2UnLFxuICAgICdNaWRkbGUgYWdlcycsXG4gICAgJ0Vhcmx5IG1vZGVybiBwZXJpb2QnLFxuICAgICdMb25nIG5pbmV0ZWVudGggY2VudHVyeSdcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy50aW1lUGVyaW9kcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIl19