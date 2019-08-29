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
    CdkDragDropEnterPredicateExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-enter-predicate-example',
                    template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n",
                    styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return CdkDragDropEnterPredicateExample;
}());
export { CdkDragDropEnterPredicateExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlL2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFFLGlCQUFpQixFQUFVLE1BQU0sd0JBQXdCLENBQUM7QUFFaEc7O0dBRUc7QUFDSDtJQUFBO1FBTUUsUUFBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxTQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQXNCZCxDQUFDO0lBcEJDLCtDQUFJLEdBQUosVUFBSyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsd0RBQWEsR0FBYixVQUFjLElBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsNERBQWlCLEdBQWpCO1FBQ0UsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkE1QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1Q0FBdUM7b0JBQ2pELGk2QkFBeUQ7O2lCQUUxRDs7SUF5QkQsdUNBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtLCBDZGtEcmFnfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGVudGVyIHByZWRpY2F0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BFbnRlclByZWRpY2F0ZUV4YW1wbGUge1xuICBhbGwgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gIGV2ZW4gPSBbMTBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XG4gICAgICBtb3ZlSXRlbUluQXJyYXkoZXZlbnQuY29udGFpbmVyLmRhdGEsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgZXZlblByZWRpY2F0ZShpdGVtOiBDZGtEcmFnPG51bWJlcj4pIHtcbiAgICByZXR1cm4gaXRlbS5kYXRhICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkb2Vzbid0IGFsbG93IGl0ZW1zIHRvIGJlIGRyb3BwZWQgaW50byBhIGxpc3QuICovXG4gIG5vUmV0dXJuUHJlZGljYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19