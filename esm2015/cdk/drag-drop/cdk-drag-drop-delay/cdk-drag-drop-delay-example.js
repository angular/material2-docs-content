/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-delay/cdk-drag-drop-delay-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * \@title Delayed dragging
 */
export class CdkDragDropDelayExample {
}
CdkDragDropDelayExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-delay-example',
                templateUrl: 'cdk-drag-drop-delay-example.html',
                styleUrls: ['cdk-drag-drop-delay-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDelayExample.ɵfac = function CdkDragDropDelayExample_Factory(t) { return new (t || CdkDragDropDelayExample)(); };
/** @nocollapse */ CdkDragDropDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropDelayExample, selectors: [["cdk-drag-drop-delay-example"]], decls: 2, vars: 1, consts: [["cdkDrag", "", 1, "example-box", 3, "cdkDragStartDelay"]], template: function CdkDragDropDelayExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Dragging starts after one second\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cdkDragStartDelay", 1000);
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropDelayExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-delay-example',
                templateUrl: 'cdk-drag-drop-delay-example.html',
                styleUrls: ['cdk-drag-drop-delay-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRlbGF5L2Nkay1kcmFnLWRyb3AtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kZWxheS9jZGstZHJhZy1kcm9wLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQVV4QyxNQUFNLE9BQU8sdUJBQXVCOzs7WUFMbkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2FBQy9DOzs4RkFDWSx1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1ZwQyw4QkFDRTtRQUFBLG1EQUNGO1FBQUEsaUJBQU07O1FBRjJCLHdDQUEwQjs7a0REVTlDLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERlbGF5ZWQgZHJhZ2dpbmdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1kZWxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWRlbGF5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWRlbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRGVsYXlFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBjZGtEcmFnIFtjZGtEcmFnU3RhcnREZWxheV09XCIxMDAwXCI+XG4gIERyYWdnaW5nIHN0YXJ0cyBhZnRlciBvbmUgc2Vjb25kXG48L2Rpdj5cbiJdfQ==