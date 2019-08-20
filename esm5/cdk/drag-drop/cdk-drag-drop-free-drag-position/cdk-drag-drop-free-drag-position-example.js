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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uL2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFNSDtJQUxBO1FBTUUsaUJBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDO0lBSzlCLENBQUM7SUFIQywyREFBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBQyxDQUFDO0lBQ2pGLENBQUM7SUFMVSxrQ0FBa0M7UUFMOUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBDQUEwQztZQUNwRCw0TUFBNEQ7O1NBRTdELENBQUM7T0FDVyxrQ0FBa0MsQ0FNOUM7SUFBRCx5Q0FBQztDQUFBLEFBTkQsSUFNQztTQU5ZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgUHJvZ3JhbW1hdGljYWxseSBzZXR0aW5nIHRoZSBmcmVlIGRyYWcgcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtZnJlZS1kcmFnLXBvc2l0aW9uLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRnJlZURyYWdQb3NpdGlvbkV4YW1wbGUge1xuICBkcmFnUG9zaXRpb24gPSB7eDogMCwgeTogMH07XG5cbiAgY2hhbmdlUG9zaXRpb24oKSB7XG4gICAgdGhpcy5kcmFnUG9zaXRpb24gPSB7eDogdGhpcy5kcmFnUG9zaXRpb24ueCArIDUwLCB5OiB0aGlzLmRyYWdQb3NpdGlvbi55ICsgNTB9O1xuICB9XG59XG4iXX0=