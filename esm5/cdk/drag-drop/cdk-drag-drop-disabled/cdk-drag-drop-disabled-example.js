import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
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
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div\n    class=\"example-box\"\n    *ngFor=\"let item of items\"\n    cdkDrag\n    [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div>\n</div>\n",
                    styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled {\n  background: #ccc;\n  cursor: default;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return CdkDragDropDisabledExample;
}());
export { CdkDragDropDisabledExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsVUFBSyxHQUFHO1lBQ04sRUFBQyxLQUFLLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztZQUM1QyxFQUFDLEtBQUssRUFBRSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDO1lBQzlDLEVBQUMsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUM7U0FDbEQsQ0FBQztJQUtKLENBQUM7SUFIQyx5Q0FBSSxHQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLG9QQUFrRDs7aUJBRW5EOztJQVdELGlDQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGRpc2FibGVkXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcERpc2FibGVkRXhhbXBsZSB7XG4gIGl0ZW1zID0gW1xuICAgIHt2YWx1ZTogJ0kgY2FuIGJlIGRyYWdnZWQnLCBkaXNhYmxlZDogZmFsc2V9LFxuICAgIHt2YWx1ZTogJ0kgY2Fubm90IGJlIGRyYWdnZWQnLCBkaXNhYmxlZDogdHJ1ZX0sXG4gICAge3ZhbHVlOiAnSSBjYW4gYWxzbyBiZSBkcmFnZ2VkJywgZGlzYWJsZWQ6IGZhbHNlfVxuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLml0ZW1zLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iXX0=