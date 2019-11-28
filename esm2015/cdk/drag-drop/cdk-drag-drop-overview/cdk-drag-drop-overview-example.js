/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-overview/cdk-drag-drop-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * \@title Basic Drag&Drop
 */
export class CdkDragDropOverviewExample {
}
CdkDragDropOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-overview-example',
                templateUrl: 'cdk-drag-drop-overview-example.html',
                styleUrls: ['cdk-drag-drop-overview-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropOverviewExample.ɵfac = function CdkDragDropOverviewExample_Factory(t) { return new (t || CdkDragDropOverviewExample)(); };
/** @nocollapse */ CdkDragDropOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropOverviewExample, selectors: [["cdk-drag-drop-overview-example"]], decls: 2, vars: 0, consts: [["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Drag me around\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-overview-example',
                templateUrl: 'cdk-drag-drop-overview-example.html',
                styleUrls: ['cdk-drag-drop-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3L2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1vdmVydmlldy9jZGstZHJhZy1kcm9wLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVV4QyxNQUFNLE9BQU8sMEJBQTBCOzs7WUFMdEMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOztvR0FDWSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1Z2Qyw4QkFDRTtRQUFBLGlDQUNGO1FBQUEsaUJBQU07O2tERFFPLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIERyYWcmRHJvcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BPdmVydmlld0V4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+XG4gIERyYWcgbWUgYXJvdW5kXG48L2Rpdj5cbiJdfQ==