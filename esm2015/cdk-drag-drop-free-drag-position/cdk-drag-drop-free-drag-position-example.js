/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Programmatically setting the free drag position
 */
export class CdkDragDropFreeDragPositionExample {
    constructor() {
        this.dragPosition = { x: 0, y: 0 };
    }
    /**
     * @return {?}
     */
    changePosition() {
        this.dragPosition = { x: this.dragPosition.x + 50, y: this.dragPosition.y + 50 };
    }
}
CdkDragDropFreeDragPositionExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                template: "<p>\n  <button (click)=\"changePosition()\">Change element position</button>\n</p>\n\n<div class=\"example-box\" cdkDrag [cdkDragFreeDragPosition]=\"dragPosition\">\n  Drag me around\n</div>\n",
                styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkDragDropFreeDragPositionExample.prototype.dragPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi9jZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxrQ0FBa0M7SUFML0M7UUFNRSxpQkFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFLOUIsQ0FBQzs7OztJQUhDLGNBQWM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUM7SUFDakYsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELDRNQUE0RDs7YUFFN0Q7Ozs7SUFFQywwREFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFByb2dyYW1tYXRpY2FsbHkgc2V0dGluZyB0aGUgZnJlZSBkcmFnIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEZyZWVEcmFnUG9zaXRpb25FeGFtcGxlIHtcbiAgZHJhZ1Bvc2l0aW9uID0ge3g6IDAsIHk6IDB9O1xuXG4gIGNoYW5nZVBvc2l0aW9uKCkge1xuICAgIHRoaXMuZHJhZ1Bvc2l0aW9uID0ge3g6IHRoaXMuZHJhZ1Bvc2l0aW9uLnggKyA1MCwgeTogdGhpcy5kcmFnUG9zaXRpb24ueSArIDUwfTtcbiAgfVxufVxuIl19