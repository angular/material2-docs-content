/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-enter-predicate/cdk-drag-drop-enter-predicate-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropEnterPredicateExample_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const number_r25 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragData", number_r25);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(number_r25);
} }
function CdkDragDropEnterPredicateExample_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const number_r26 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragData", number_r26);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(number_r26);
} }
/**
 * \@title Drag&Drop enter predicate
 */
export class CdkDragDropEnterPredicateExample {
    constructor() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /**
     * Predicate function that only allows even numbers to be dropped into a list.
     * @param {?} item
     * @return {?}
     */
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    /**
     * Predicate function that doesn't allow items to be dropped into a list.
     * @return {?}
     */
    noReturnPredicate() {
        return false;
    }
}
CdkDragDropEnterPredicateExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropEnterPredicateExample.ɵfac = function CdkDragDropEnterPredicateExample_Factory(t) { return new (t || CdkDragDropEnterPredicateExample)(); };
/** @nocollapse */ CdkDragDropEnterPredicateExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 10, vars: 6, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropEnterPredicateExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "h2");
        i0.ɵɵtext(2, "Available numbers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 1);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_3_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(4, CdkDragDropEnterPredicateExample_div_4_Template, 2, 2, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 0);
        i0.ɵɵelementStart(6, "h2");
        i0.ɵɵtext(7, "Even numbers");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 3);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropEnterPredicateExample_Template_div_cdkDropListDropped_8_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(9, CdkDragDropEnterPredicateExample_div_9_Template, 2, 2, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("cdkDropListData", ctx.all)("cdkDropListEnterPredicate", ctx.noReturnPredicate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.all);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("cdkDropListData", ctx.even)("cdkDropListEnterPredicate", ctx.evenPredicate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.even);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropEnterPredicateExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.all;
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.even;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFVLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDVTVGLDhCQUlVO0lBQUEsWUFBVTtJQUFBLGlCQUFNOzs7SUFEeEIsd0NBQXNCO0lBQ2QsZUFBVTtJQUFWLGdDQUFVOzs7SUFlcEIsOEJBSXlCO0lBQUEsWUFBVTtJQUFBLGlCQUFNOzs7SUFBdkMsd0NBQXNCO0lBQUMsZUFBVTtJQUFWLGdDQUFVOzs7OztBRHZCdkMsTUFBTSxPQUFPLGdDQUFnQztJQUw3QztRQU1FLFFBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsU0FBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0FzQmI7Ozs7O0lBcEJDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7OztJQUdELGFBQWEsQ0FBQyxJQUFxQjtRQUNqQyxPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUdELGlCQUFpQjtRQUNmLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUNBQXVDO2dCQUNqRCxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7Z0hBQ1ksZ0NBQWdDO3FFQUFoQyxnQ0FBZ0M7UUNYN0MsOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLGlDQUFpQjtRQUFBLGlCQUFLO1FBRTFCLDhCQVFFO1FBRkEsMElBQXNCLGdCQUFZLElBQUM7UUFFbkMsaUZBSVU7UUFDWixpQkFBTTtRQUNSLGlCQUFNO1FBRU4sOEJBQ0U7UUFBQSwwQkFBSTtRQUFBLDRCQUFZO1FBQUEsaUJBQUs7UUFFckIsOEJBUUU7UUFGQSwwSUFBc0IsZ0JBQVksSUFBQztRQUVuQyxpRkFJeUI7UUFDM0IsaUJBQU07UUFDUixpQkFBTTs7UUE5QkYsZUFBdUI7UUFBdkIseUNBQXVCLG9EQUFBO1FBT3JCLGVBQTBCO1FBQTFCLGlDQUEwQjtRQVk1QixlQUF3QjtRQUF4QiwwQ0FBd0IsZ0RBQUE7UUFPdEIsZUFBMkI7UUFBM0Isa0NBQTJCOztrRERyQnBCLGdDQUFnQztjQUw1QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7Ozs7SUFFQywrQ0FBa0M7O0lBQ2xDLGdEQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSwgQ2RrRHJhZ30gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBlbnRlciBwcmVkaWNhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlIHtcbiAgYWxsID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBldmVuID0gWzEwXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxudW1iZXJbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cblxuICAvKiogUHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgb25seSBhbGxvd3MgZXZlbiBudW1iZXJzIHRvIGJlIGRyb3BwZWQgaW50byBhIGxpc3QuICovXG4gIGV2ZW5QcmVkaWNhdGUoaXRlbTogQ2RrRHJhZzxudW1iZXI+KSB7XG4gICAgcmV0dXJuIGl0ZW0uZGF0YSAlIDIgPT09IDA7XG4gIH1cblxuICAvKiogUHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgZG9lc24ndCBhbGxvdyBpdGVtcyB0byBiZSBkcm9wcGVkIGludG8gYSBsaXN0LiAqL1xuICBub1JldHVyblByZWRpY2F0ZSgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aDI+QXZhaWxhYmxlIG51bWJlcnM8L2gyPlxuXG4gIDxkaXZcbiAgICBpZD1cImFsbFwiXG4gICAgY2RrRHJvcExpc3RcbiAgICBbY2RrRHJvcExpc3REYXRhXT1cImFsbFwiXG4gICAgY2RrRHJvcExpc3RDb25uZWN0ZWRUbz1cImV2ZW5cIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgW2Nka0Ryb3BMaXN0RW50ZXJQcmVkaWNhdGVdPVwibm9SZXR1cm5QcmVkaWNhdGVcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAgICpuZ0Zvcj1cImxldCBudW1iZXIgb2YgYWxsXCJcbiAgICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIlxuICAgICAgY2RrRHJhZz57e251bWJlcn19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8aDI+RXZlbiBudW1iZXJzPC9oMj5cblxuICA8ZGl2XG4gICAgaWQ9XCJldmVuXCJcbiAgICBjZGtEcm9wTGlzdFxuICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiZXZlblwiXG4gICAgY2RrRHJvcExpc3RDb25uZWN0ZWRUbz1cImFsbFwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcbiAgICBbY2RrRHJvcExpc3RFbnRlclByZWRpY2F0ZV09XCJldmVuUHJlZGljYXRlXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgICAqbmdGb3I9XCJsZXQgbnVtYmVyIG9mIGV2ZW5cIlxuICAgICAgY2RrRHJhZ1xuICAgICAgW2Nka0RyYWdEYXRhXT1cIm51bWJlclwiPnt7bnVtYmVyfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuIl19