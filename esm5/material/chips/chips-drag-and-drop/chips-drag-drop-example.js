import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
/**
 * @title Chips Drag and Drop
 */
var ChipsDragDropExample = /** @class */ (function () {
    function ChipsDragDropExample() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    ChipsDragDropExample.prototype.drop = function (event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    };
    ChipsDragDropExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-drag-drop-example',
                    template: "<mat-chip-list\n  class=\"example-chip\"\n  cdkDropList \n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  <mat-chip\n    class=\"example-box\"\n    cdkDrag\n    *ngFor=\"let vegetable of vegetables\">\n    {{vegetable.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                    styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return ChipsDragDropExample;
}());
export { ChipsDragDropExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtZHJhZy1hbmQtZHJvcC9jaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQU14Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxlQUFVLEdBQWdCO1lBQ3hCLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztZQUNmLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztZQUNoQixFQUFDLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDcEIsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQztZQUNkLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQztTQUNqQixDQUFDO0lBS0osQ0FBQztJQUhDLG1DQUFJLEdBQUosVUFBSyxLQUErQjtRQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLG9UQUEyQzs7aUJBRTVDOztJQWNELDJCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZlZ2V0YWJsZSB7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgRHJhZyBhbmQgRHJvcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0RyYWdEcm9wRXhhbXBsZSB7XG4gIHZlZ2V0YWJsZXM6IFZlZ2V0YWJsZVtdID0gW1xuICAgIHtuYW1lOiAnYXBwbGUnfSxcbiAgICB7bmFtZTogJ2JhbmFuYSd9LFxuICAgIHtuYW1lOiAnc3RyYXdiZXJyeSd9LFxuICAgIHtuYW1lOiAnb3JhbmdlJ30sXG4gICAge25hbWU6ICdraXdpJ30sXG4gICAge25hbWU6ICdjaGVycnknfSxcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxWZWdldGFibGVbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy52ZWdldGFibGVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iXX0=