/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    const item_r22 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragDisabled", item_r22.disabled);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r22.value);
} }
/**
 * \@title Drag&Drop disabled
 */
export class CdkDragDropDisabledExample {
    constructor() {
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false }
        ];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropDisabledExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-disabled-example',
                templateUrl: 'cdk-drag-drop-disabled-example.html',
                styleUrls: ['cdk-drag-drop-disabled-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropDisabledExample.ɵfac = function CdkDragDropDisabledExample_Factory(t) { return new (t || CdkDragDropDisabledExample)(); };
/** @nocollapse */ CdkDragDropDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropDisabledExample, selectors: [["cdk-drag-drop-disabled-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragDisabled", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragDisabled"]], template: function CdkDragDropDisabledExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropDisabledExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropDisabledExample_div_1_Template, 2, 2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled[_ngcontent-%COMP%] {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropDisabledExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-disabled-example',
                templateUrl: 'cdk-drag-drop-disabled-example.html',
                styleUrls: ['cdk-drag-drop-disabled-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkDragDropDisabledExample.prototype.items;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDQWxFLDhCQUlvQztJQUFBLFlBQWM7SUFBQSxpQkFBTTs7O0lBQXRELG1EQUFpQztJQUFDLGVBQWM7SUFBZCxvQ0FBYzs7Ozs7QURNcEQsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU1FLFVBQUssR0FBRztZQUNOLEVBQUMsS0FBSyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7WUFDNUMsRUFBQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQztZQUM5QyxFQUFDLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1NBQ2xELENBQUM7S0FLSDs7Ozs7SUFIQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOztvR0FDWSwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1h2Qyw4QkFDRTtRQURvQyxvSUFBc0IsZ0JBQVksSUFBQztRQUN2RSwyRUFJb0M7UUFDdEMsaUJBQU07O1FBSEYsZUFBMEI7UUFBMUIsbUNBQTBCOzttQ0RRakIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7OztJQUVDLDJDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGRpc2FibGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSB7XG4gIGl0ZW1zID0gW1xuICAgIHt2YWx1ZTogJ0kgY2FuIGJlIGRyYWdnZWQnLCBkaXNhYmxlZDogZmFsc2V9LFxuICAgIHt2YWx1ZTogJ0kgY2Fubm90IGJlIGRyYWdnZWQnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAge3ZhbHVlOiAnSSBjYW4gYWxzbyBiZSBkcmFnZ2VkJywgZGlzYWJsZWQ6IGZhbHNlfVxuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLml0ZW1zLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0IGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCJcbiAgICBjZGtEcmFnXG4gICAgW2Nka0RyYWdEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCI+e3tpdGVtLnZhbHVlfX08L2Rpdj5cbjwvZGl2PlxuIl19