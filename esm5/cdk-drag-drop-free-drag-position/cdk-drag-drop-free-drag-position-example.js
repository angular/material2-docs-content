import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Programmatically setting the free drag position
 */
var CdkDragDropFreeDragPositionExample = /** @class */ (function () {
    function CdkDragDropFreeDragPositionExample() {
        this.dragPosition = { x: 0, y: 0 };
    }
    CdkDragDropFreeDragPositionExample.prototype.changePosition = function () {
        this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
    };
    CdkDragDropFreeDragPositionExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-free-drag-position-example',
            template: "<p>\n  <button (click)=\"changePosition()\">Change element position</button>\n</p>\n\n<div class=\"example-box\" cdkDrag [cdkDragFreeDragPosition]=\"dragPosition\">\n  Drag me around\n</div>\n",
            styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
        })
    ], CdkDragDropFreeDragPositionExample);
    return CdkDragDropFreeDragPositionExample;
}());
export { CdkDragDropFreeDragPositionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFMQTtRQU1FLGlCQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztJQUs5QixDQUFDO0lBSEMsMkRBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUMsQ0FBQztJQUNqRixDQUFDO0lBTFUsa0NBQWtDO1FBTDlDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwwQ0FBMEM7WUFDcEQsNE1BQTREOztTQUU3RCxDQUFDO09BQ1csa0NBQWtDLENBTTlDO0lBQUQseUNBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFByb2dyYW1tYXRpY2FsbHkgc2V0dGluZyB0aGUgZnJlZSBkcmFnIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlIHtcbiAgZHJhZ1Bvc2l0aW9uID0ge3g6IDAsIHk6IDB9O1xuXG4gIGNoYW5nZVBvc2l0aW9uKCkge1xuICAgIHRoaXMuZHJhZ1Bvc2l0aW9uID0ge3g6IHRoaXMuZHJhZ1Bvc2l0aW9uLnggKyA1MCwgeTogdGhpcy5kcmFnUG9zaXRpb24ueSArIDUwfTtcbiAgfVxufVxuIl19