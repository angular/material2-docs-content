/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
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
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵfac = function CdkDragDropFreeDragPositionExample_Factory(t) { return new (t || CdkDragDropFreeDragPositionExample)(); };
/** @nocollapse */ CdkDragDropFreeDragPositionExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropFreeDragPositionExample, selectors: [["cdk-drag-drop-free-drag-position-example"]], decls: 5, vars: 1, consts: [[3, "click"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragFreeDragPosition"]], template: function CdkDragDropFreeDragPositionExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵlistener("click", function CdkDragDropFreeDragPositionExample_Template_button_click_1_listener($event) { return ctx.changePosition(); });
        i0.ɵɵtext(2, "Change element position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵtext(4, " Drag me around\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDragFreeDragPosition", ctx.dragPosition);
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropFreeDragPositionExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-free-drag-position-example',
                templateUrl: 'cdk-drag-drop-free-drag-position-example.html',
                styleUrls: ['cdk-drag-drop-free-drag-position-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropFreeDragPositionExample.prototype.dragPosition;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24vY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFVeEMsTUFBTSxPQUFPLGtDQUFrQztJQUwvQztRQU1FLGlCQUFZLEdBQUcsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQztLQUs3Qjs7OztJQUhDLGNBQWM7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFDLENBQUM7SUFDakYsQ0FBQzs7O1lBVkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO2FBQzVEOztvSEFDWSxrQ0FBa0M7dUVBQWxDLGtDQUFrQztRQ1YvQyx5QkFDRTtRQUFBLGlDQUFtQztRQUEzQixxSEFBUyxvQkFBZ0IsSUFBQztRQUFDLHVDQUF1QjtRQUFBLGlCQUFTO1FBQ3JFLGlCQUFJO1FBRUosOEJBQ0U7UUFBQSxpQ0FDRjtRQUFBLGlCQUFNOztRQUYyQixlQUF3QztRQUF4QywwREFBd0M7O2tERE01RCxrQ0FBa0M7Y0FMOUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO2FBQzVEOzs7O0lBRUMsMERBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBQcm9ncmFtbWF0aWNhbGx5IHNldHRpbmcgdGhlIGZyZWUgZHJhZyBwb3NpdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWZyZWUtZHJhZy1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1mcmVlLWRyYWctcG9zaXRpb24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BGcmVlRHJhZ1Bvc2l0aW9uRXhhbXBsZSB7XG4gIGRyYWdQb3NpdGlvbiA9IHt4OiAwLCB5OiAwfTtcblxuICBjaGFuZ2VQb3NpdGlvbigpIHtcbiAgICB0aGlzLmRyYWdQb3NpdGlvbiA9IHt4OiB0aGlzLmRyYWdQb3NpdGlvbi54ICsgNTAsIHk6IHRoaXMuZHJhZ1Bvc2l0aW9uLnkgKyA1MH07XG4gIH1cbn1cbiIsIjxwPlxuICA8YnV0dG9uIChjbGljayk9XCJjaGFuZ2VQb3NpdGlvbigpXCI+Q2hhbmdlIGVsZW1lbnQgcG9zaXRpb248L2J1dHRvbj5cbjwvcD5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZyBbY2RrRHJhZ0ZyZWVEcmFnUG9zaXRpb25dPVwiZHJhZ1Bvc2l0aW9uXCI+XG4gIERyYWcgbWUgYXJvdW5kXG48L2Rpdj5cbiJdfQ==