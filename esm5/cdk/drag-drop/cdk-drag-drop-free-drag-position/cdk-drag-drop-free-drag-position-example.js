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
    CdkDragDropFreeDragPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-free-drag-position-example',
                    template: "<p>\n  <button (click)=\"changePosition()\">Change element position</button>\n</p>\n\n<div class=\"example-box\" cdkDrag [cdkDragFreeDragPosition]=\"dragPosition\">\n  Drag me around\n</div>\n",
                    styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                }] }
    ];
    return CdkDragDropFreeDragPositionExample;
}());
export { CdkDragDropFreeDragPositionExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxpQkFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUM7SUFLOUIsQ0FBQztJQUhDLDJEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUM7SUFDakYsQ0FBQzs7Z0JBVkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELDRNQUE0RDs7aUJBRTdEOztJQU9ELHlDQUFDO0NBQUEsQUFYRCxJQVdDO1NBTlksa0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBQcm9ncmFtbWF0aWNhbGx5IHNldHRpbmcgdGhlIGZyZWUgZHJhZyBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSB7XG4gIGRyYWdQb3NpdGlvbiA9IHt4OiAwLCB5OiAwfTtcblxuICBjaGFuZ2VQb3NpdGlvbigpIHtcbiAgICB0aGlzLmRyYWdQb3NpdGlvbiA9IHt4OiB0aGlzLmRyYWdQb3NpdGlvbi54ICsgNTAsIHk6IHRoaXMuZHJhZ1Bvc2l0aW9uLnkgKyA1MH07XG4gIH1cbn1cbiJdfQ==