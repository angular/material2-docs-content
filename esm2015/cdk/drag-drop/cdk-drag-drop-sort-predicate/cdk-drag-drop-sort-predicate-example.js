import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropSortPredicateExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const number_r1 = ctx.$implicit;
    i0.ɵɵproperty("cdkDragData", number_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(number_r1);
} }
/**
 * @title Drag&Drop sort predicate
 */
export class CdkDragDropSortPredicateExample {
    constructor() {
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    }
    drop(event) {
        moveItemInArray(this.numbers, event.previousIndex, event.currentIndex);
    }
    /**
     * Predicate function that only allows even numbers to be
     * sorted into even indices and odd numbers at odd indices.
     */
    sortPredicate(index, item) {
        return (index + 1) % 2 === item.data % 2;
    }
}
CdkDragDropSortPredicateExample.ɵfac = function CdkDragDropSortPredicateExample_Factory(t) { return new (t || CdkDragDropSortPredicateExample)(); };
CdkDragDropSortPredicateExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropSortPredicateExample, selectors: [["cdk-drag-drop-sort-predicate-example"]], decls: 2, vars: 2, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListSortPredicate", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "cdkDragData", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box", 3, "cdkDragData"]], template: function CdkDragDropSortPredicateExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropSortPredicateExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropSortPredicateExample_div_1_Template, 2, 2, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cdkDropListSortPredicate", ctx.sortPredicate);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.numbers);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  width: 400px;\n  max-width: 100%;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkDragDropSortPredicateExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-sort-predicate-example',
                templateUrl: 'cdk-drag-drop-sort-predicate-example.html',
                styleUrls: ['cdk-drag-drop-sort-predicate-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlL2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLXNvcnQtcHJlZGljYXRlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQVUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNJM0UsOEJBSVU7SUFBQSxZQUFVO0lBQUEsaUJBQU07OztJQUR4Qix1Q0FBc0I7SUFDZCxlQUFVO0lBQVYsK0JBQVU7O0FETnRCOztHQUVHO0FBTUgsTUFBTSxPQUFPLCtCQUErQjtJQUw1QztRQU1FLFlBQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQWFwQztJQVhDLElBQUksQ0FBQyxLQUEyQjtRQUM5QixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFxQjtRQUNoRCxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs4R0FiVSwrQkFBK0I7b0VBQS9CLCtCQUErQjtRQ1g1Qyw4QkFJNkM7UUFEM0MseUlBQXNCLGdCQUFZLElBQUM7UUFFbkMsZ0ZBSTBCO1FBQzVCLGlCQUFNOztRQU5KLDREQUEwQztRQUdyQixlQUFVO1FBQVYscUNBQVU7O3VGRElwQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxzQ0FBc0M7Z0JBQ2hELFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDBDQUEwQyxDQUFDO2FBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCBDZGtEcmFnfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIHNvcnQgcHJlZGljYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atc29ydC1wcmVkaWNhdGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1zb3J0LXByZWRpY2F0ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcFNvcnRQcmVkaWNhdGVFeGFtcGxlIHtcbiAgbnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDx1bmtub3duPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm51bWJlcnMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cblxuICAvKipcbiAgICogUHJlZGljYXRlIGZ1bmN0aW9uIHRoYXQgb25seSBhbGxvd3MgZXZlbiBudW1iZXJzIHRvIGJlXG4gICAqIHNvcnRlZCBpbnRvIGV2ZW4gaW5kaWNlcyBhbmQgb2RkIG51bWJlcnMgYXQgb2RkIGluZGljZXMuXG4gICAqL1xuICBzb3J0UHJlZGljYXRlKGluZGV4OiBudW1iZXIsIGl0ZW06IENka0RyYWc8bnVtYmVyPikge1xuICAgIHJldHVybiAoaW5kZXggKyAxKSAlIDIgPT09IGl0ZW0uZGF0YSAlIDI7XG4gIH1cbn1cbiIsIjxkaXZcbiAgY2RrRHJvcExpc3RcbiAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiXG4gIFtjZGtEcm9wTGlzdFNvcnRQcmVkaWNhdGVdPVwic29ydFByZWRpY2F0ZVwiPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgKm5nRm9yPVwibGV0IG51bWJlciBvZiBudW1iZXJzXCJcbiAgICBbY2RrRHJhZ0RhdGFdPVwibnVtYmVyXCJcbiAgICBjZGtEcmFnPnt7bnVtYmVyfX08L2Rpdj5cbjwvZGl2PlxuIl19