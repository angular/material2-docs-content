import { Component } from '@angular/core';
/**
 * @title Drag&Drop with a handle
 */
var CdkDragDropHandleExample = /** @class */ (function () {
    function CdkDragDropHandleExample() {
    }
    CdkDragDropHandleExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-handle-example',
                    template: "<div class=\"example-box\" cdkDrag>\n  I can only be dragged using the handle\n\n  <div class=\"example-handle\" cdkDragHandle>\n    <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n      <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\n      <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n    </svg>\n  </div>\n</div>\n",
                    styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}\n"]
                }] }
    ];
    return CdkDragDropHandleExample;
}());
export { CdkDragDropHandleExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtaGFuZGxlL2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7SUFLdUMsQ0FBQzs7Z0JBTHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4Qyw2YUFBZ0Q7O2lCQUVqRDs7SUFDc0MsK0JBQUM7Q0FBQSxBQUx4QyxJQUt3QztTQUEzQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCB3aXRoIGEgaGFuZGxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUge31cbiJdfQ==