import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
/**
 * @title Drag&Drop boundary
 */
var CdkDragDropBoundaryExample = /** @class */ (function () {
    function CdkDragDropBoundaryExample() {
    }
    CdkDragDropBoundaryExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-boundary-example',
            template: "<div class=\"example-boundary\">\n  <div class=\"example-box\" cdkDragBoundary=\".example-boundary\" cdkDrag>\n    I can only be dragged within the dotted container\n  </div>\n</div>\n\n",
            styles: [".example-box {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n"]
        })
    ], CdkDragDropBoundaryExample);
    return CdkDragDropBoundaryExample;
}());
export { CdkDragDropBoundaryExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ib3VuZGFyeS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1kcmFnLWRyb3AtYm91bmRhcnkvY2RrLWRyYWctZHJvcC1ib3VuZGFyeS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXhDOztHQUVHO0FBTUg7SUFBQTtJQUF5QyxDQUFDO0lBQTdCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLHNNQUFrRDs7U0FFbkQsQ0FBQztPQUNXLDBCQUEwQixDQUFHO0lBQUQsaUNBQUM7Q0FBQSxBQUExQyxJQUEwQztTQUE3QiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBib3VuZGFyeVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWJvdW5kYXJ5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtYm91bmRhcnktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BCb3VuZGFyeUV4YW1wbGUge31cbiJdfQ==