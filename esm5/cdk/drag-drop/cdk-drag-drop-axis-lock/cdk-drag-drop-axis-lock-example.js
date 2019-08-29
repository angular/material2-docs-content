import { Component } from '@angular/core';
/**
 * @title Drag&Drop position locking
 */
var CdkDragDropAxisLockExample = /** @class */ (function () {
    function CdkDragDropAxisLockExample() {
    }
    CdkDragDropAxisLockExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-axis-lock-example',
                    template: "<div class=\"example-box\" cdkDragLockAxis=\"y\" cdkDrag>\n  I can only be dragged up/down\n</div>\n\n<div class=\"example-box\" cdkDragLockAxis=\"x\" cdkDrag>\n  I can only be dragged left/right\n</div>\n",
                    styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n"]
                }] }
    ];
    return CdkDragDropAxisLockExample;
}());
export { CdkDragDropAxisLockExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1heGlzLWxvY2stZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrL2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLeUMsQ0FBQzs7Z0JBTHpDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyx5TkFBbUQ7O2lCQUVwRDs7SUFDd0MsaUNBQUM7Q0FBQSxBQUwxQyxJQUswQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBwb3NpdGlvbiBsb2NraW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWF4aXMtbG9jay1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSB7fVxuIl19