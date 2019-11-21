import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropDisabledExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r22 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragDisabled", item_r22.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r22.value);
} }
/**
 * @title Drag&Drop disabled
 */
var CdkDragDropDisabledExample = /** @class */ (function () {
    function CdkDragDropDisabledExample() {
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false }
        ];
    }
    CdkDragDropDisabledExample.prototype.drop = function (event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    };
    CdkDragDropDisabledExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-disabled-example',
                    templateUrl: 'cdk-drag-drop-disabled-example.html',
                    styleUrls: ['cdk-drag-drop-disabled-example.css'],
                },] },
    ];
    CdkDragDropDisabledExample.ɵfac = function CdkDragDropDisabledExample_Factory(t) { return new (t || CdkDragDropDisabledExample)(); };
    CdkDragDropDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropDisabledExample, selectors: [["cdk-drag-drop-disabled-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragDisabled"]], template: function CdkDragDropDisabledExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(1, CdkDragDropDisabledExample_div_1_Template, 2, 2, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.items);
        } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropDisabledExample;
}());
export { CdkDragDropDisabledExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropDisabledExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-example',
                templateUrl: 'cdk-drag-drop-disabled-example.html',
                styleUrls: ['cdk-drag-drop-disabled-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNBbEUsOEJBSW9DO0lBQUEsWUFBYztJQUFBLGlCQUFNOzs7SUFBdEQsbURBQWlDO0lBQUMsZUFBYztJQUFkLG9DQUFjOztBREZwRDs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQUc7WUFDTixFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVDLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFDOUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztTQUNsRCxDQUFDO0tBS0g7SUFIQyx5Q0FBSSxHQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2lCQUNsRDs7d0dBQ1ksMEJBQTBCO21FQUExQiwwQkFBMEI7WUNYdkMsOEJBQ0U7WUFEb0Msb0lBQXNCLGdCQUFZLElBQUM7WUFDdkUsMkVBSW9DO1lBQ3RDLGlCQUFNOztZQUhGLGVBQTBCO1lBQTFCLG1DQUEwQjs7cUNESDlCO0NBcUJDLEFBZkQsSUFlQztTQVZZLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBkaXNhYmxlZFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BEaXNhYmxlZEV4YW1wbGUge1xuICBpdGVtcyA9IFtcbiAgICB7dmFsdWU6ICdJIGNhbiBiZSBkcmFnZ2VkJywgZGlzYWJsZWQ6IGZhbHNlfSxcbiAgICB7dmFsdWU6ICdJIGNhbm5vdCBiZSBkcmFnZ2VkJywgZGlzYWJsZWQ6IHRydWV9LFxuICAgIHt2YWx1ZTogJ0kgY2FuIGFsc28gYmUgZHJhZ2dlZCcsIGRpc2FibGVkOiBmYWxzZX1cbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5pdGVtcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdCBjbGFzcz1cImV4YW1wbGUtbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtc1wiXG4gICAgY2RrRHJhZ1xuICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZFwiPnt7aXRlbS52YWx1ZX19PC9kaXY+XG48L2Rpdj5cbiJdfQ==