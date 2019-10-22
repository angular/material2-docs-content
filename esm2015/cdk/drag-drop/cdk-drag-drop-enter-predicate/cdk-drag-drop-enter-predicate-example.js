/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ CdkDragDropEnterPredicateExample.ngFactoryDef = function CdkDragDropEnterPredicateExample_Factory(t) { return new (t || CdkDragDropEnterPredicateExample)(); };
/** @nocollapse */ CdkDragDropEnterPredicateExample.ngComponentDef = i0.ɵɵdefineComponent({ type: CdkDragDropEnterPredicateExample, selectors: [["cdk-drag-drop-enter-predicate-example"]], decls: 10, vars: 6, consts: [[1, "example-container"], ["id", "all", "cdkDropList", "", "cdkDropListConnectedTo", "even", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["id", "even", "cdkDropList", "", "cdkDropListConnectedTo", "all", 1, "example-list", 3, "cdkDropListData", "cdkDropListEnterPredicate", "cdkDropListDropped"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropEnterPredicateExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropEnterPredicateExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-enter-predicate-example',
                templateUrl: 'cdk-drag-drop-enter-predicate-example.html',
                styleUrls: ['cdk-drag-drop-enter-predicate-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.all;
    /** @type {?} */
    CdkDragDropEnterPredicateExample.prototype.even;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ1U1Riw4QkFJVTtJQUFBLFlBQVU7SUFBQSxpQkFBTTs7O0lBRHhCLHdDQUFzQjtJQUNkLGVBQVU7SUFBVixnQ0FBVTs7O0lBZXBCLDhCQUl5QjtJQUFBLFlBQVU7SUFBQSxpQkFBTTs7O0lBQXZDLHdDQUFzQjtJQUFDLGVBQVU7SUFBVixnQ0FBVTs7Ozs7QUR2QnZDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFMN0M7UUFNRSxRQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBc0JiOzs7OztJQXBCQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsSUFBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Ozs7SUFHRCxpQkFBaUI7UUFDZixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztnQkFDakQsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7O3dIQUNZLGdDQUFnQzsrRUFBaEMsZ0NBQWdDO1FDWDdDLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSxpQ0FBaUI7UUFBQSxpQkFBSztRQUUxQiw4QkFRRTtRQUZBLDBJQUFzQixnQkFBWSxJQUFDO1FBRW5DLGlGQUlVO1FBQ1osaUJBQU07UUFDUixpQkFBTTtRQUVOLDhCQUNFO1FBQUEsMEJBQUk7UUFBQSw0QkFBWTtRQUFBLGlCQUFLO1FBRXJCLDhCQVFFO1FBRkEsMElBQXNCLGdCQUFZLElBQUM7UUFFbkMsaUZBSXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07O1FBOUJGLGVBQXVCO1FBQXZCLHlDQUF1QixvREFBQTtRQU9yQixlQUEwQjtRQUExQixpQ0FBMEI7UUFZNUIsZUFBd0I7UUFBeEIsMENBQXdCLGdEQUFBO1FBT3RCLGVBQTJCO1FBQTNCLGtDQUEyQjs7bUNEckJwQixnQ0FBZ0M7Y0FMNUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOzs7O0lBRUMsK0NBQWtDOztJQUNsQyxnREFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0sIENka0RyYWd9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZW50ZXIgcHJlZGljYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSB7XG4gIGFsbCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgZXZlbiA9IFsxMF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IG9ubHkgYWxsb3dzIGV2ZW4gbnVtYmVycyB0byBiZSBkcm9wcGVkIGludG8gYSBsaXN0LiAqL1xuICBldmVuUHJlZGljYXRlKGl0ZW06IENka0RyYWc8bnVtYmVyPikge1xuICAgIHJldHVybiBpdGVtLmRhdGEgJSAyID09PSAwO1xuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRvZXNuJ3QgYWxsb3cgaXRlbXMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgbm9SZXR1cm5QcmVkaWNhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGgyPkF2YWlsYWJsZSBudW1iZXJzPC9oMj5cblxuICA8ZGl2XG4gICAgaWQ9XCJhbGxcIlxuICAgIGNka0Ryb3BMaXN0XG4gICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJhbGxcIlxuICAgIGNka0Ryb3BMaXN0Q29ubmVjdGVkVG89XCJldmVuXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxuICAgIFtjZGtEcm9wTGlzdEVudGVyUHJlZGljYXRlXT1cIm5vUmV0dXJuUHJlZGljYXRlXCI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgICAqbmdGb3I9XCJsZXQgbnVtYmVyIG9mIGFsbFwiXG4gICAgICBbY2RrRHJhZ0RhdGFdPVwibnVtYmVyXCJcbiAgICAgIGNka0RyYWc+e3tudW1iZXJ9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGgyPkV2ZW4gbnVtYmVyczwvaDI+XG5cbiAgPGRpdlxuICAgIGlkPVwiZXZlblwiXG4gICAgY2RrRHJvcExpc3RcbiAgICBbY2RrRHJvcExpc3REYXRhXT1cImV2ZW5cIlxuICAgIGNka0Ryb3BMaXN0Q29ubmVjdGVkVG89XCJhbGxcIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgW2Nka0Ryb3BMaXN0RW50ZXJQcmVkaWNhdGVdPVwiZXZlblByZWRpY2F0ZVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICAgKm5nRm9yPVwibGV0IG51bWJlciBvZiBldmVuXCJcbiAgICAgIGNka0RyYWdcbiAgICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIj57e251bWJlcn19PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==