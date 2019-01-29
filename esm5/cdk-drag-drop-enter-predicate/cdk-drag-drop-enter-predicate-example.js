import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop enter predicate
 */
var CdkDragDropEnterPredicateExample = /** @class */ (function () {
    function CdkDragDropEnterPredicateExample() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    CdkDragDropEnterPredicateExample.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    /** Predicate function that only allows even numbers to be dropped into a list. */
    CdkDragDropEnterPredicateExample.prototype.evenPredicate = function (item) {
        return item.data % 2 === 0;
    };
    /** Predicate function that doesn't allow items to be dropped into a list. */
    CdkDragDropEnterPredicateExample.prototype.noReturnPredicate = function () {
        return false;
    };
    CdkDragDropEnterPredicateExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-enter-predicate-example',
            template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n",
            styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropEnterPredicateExample);
    return CdkDragDropEnterPredicateExample;
}());
export { CdkDragDropEnterPredicateExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS9jZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsaUJBQWlCLEVBQVUsTUFBTSx3QkFBd0IsQ0FBQztBQUVoRzs7R0FFRztBQU1IO0lBTEE7UUFNRSxRQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBc0JkLENBQUM7SUFwQkMsK0NBQUksR0FBSixVQUFLLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELGtGQUFrRjtJQUNsRix3REFBYSxHQUFiLFVBQWMsSUFBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSw0REFBaUIsR0FBakI7UUFDRSxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUF2QlUsZ0NBQWdDO1FBTDVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1Q0FBdUM7WUFDakQsaTZCQUF5RDs7U0FFMUQsQ0FBQztPQUNXLGdDQUFnQyxDQXdCNUM7SUFBRCx1Q0FBQztDQUFBLEFBeEJELElBd0JDO1NBeEJZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0sIENka0RyYWd9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZW50ZXIgcHJlZGljYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSB7XG4gIGFsbCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgZXZlbiA9IFsxMF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IG9ubHkgYWxsb3dzIGV2ZW4gbnVtYmVycyB0byBiZSBkcm9wcGVkIGludG8gYSBsaXN0LiAqL1xuICBldmVuUHJlZGljYXRlKGl0ZW06IENka0RyYWc8bnVtYmVyPikge1xuICAgIHJldHVybiBpdGVtLmRhdGEgJSAyID09PSAwO1xuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRvZXNuJ3QgYWxsb3cgaXRlbXMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgbm9SZXR1cm5QcmVkaWNhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=