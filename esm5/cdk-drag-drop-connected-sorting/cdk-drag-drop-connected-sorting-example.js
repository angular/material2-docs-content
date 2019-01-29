import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop connected sorting
 */
var CdkDragDropConnectedSortingExample = /** @class */ (function () {
    function CdkDragDropConnectedSortingExample() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    CdkDragDropConnectedSortingExample.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CdkDragDropConnectedSortingExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-connected-sorting-example',
            template: "<div class=\"example-container\">\n  <h2>To do</h2>\n\n  <div\n    cdkDropList\n    #todoList=\"cdkDropList\"\n    [cdkDropListData]=\"todo\"\n    [cdkDropListConnectedTo]=\"[doneList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Done</h2>\n\n  <div\n    cdkDropList\n    #doneList=\"cdkDropList\"\n    [cdkDropListData]=\"done\"\n    [cdkDropListConnectedTo]=\"[todoList]\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\">\n    <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n  </div>\n</div>\n\n",
            styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropConnectedSortingExample);
    return CdkDragDropConnectedSortingExample;
}());
export { CdkDragDropConnectedSortingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmcvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV2Rjs7R0FFRztBQU1IO0lBTEE7UUFNRSxTQUFJLEdBQUc7WUFDTCxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxhQUFhO1NBQ2QsQ0FBQztRQUVGLFNBQUksR0FBRztZQUNMLFFBQVE7WUFDUixhQUFhO1lBQ2IsZUFBZTtZQUNmLGNBQWM7WUFDZCxVQUFVO1NBQ1gsQ0FBQztJQVlKLENBQUM7SUFWQyxpREFBSSxHQUFKLFVBQUssS0FBNEI7UUFDL0IsSUFBSSxLQUFLLENBQUMsaUJBQWlCLEtBQUssS0FBSyxDQUFDLFNBQVMsRUFBRTtZQUMvQyxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDaEY7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQzVCLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUNwQixLQUFLLENBQUMsYUFBYSxFQUNuQixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBekJVLGtDQUFrQztRQUw5QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUNBQXlDO1lBQ25ELGl1QkFBMkQ7O1NBRTVELENBQUM7T0FDVyxrQ0FBa0MsQ0EwQjlDO0lBQUQseUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQTFCWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGNvbm5lY3RlZCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcENvbm5lY3RlZFNvcnRpbmdFeGFtcGxlIHtcbiAgdG9kbyA9IFtcbiAgICAnR2V0IHRvIHdvcmsnLFxuICAgICdQaWNrIHVwIGdyb2NlcmllcycsXG4gICAgJ0dvIGhvbWUnLFxuICAgICdGYWxsIGFzbGVlcCdcbiAgXTtcblxuICBkb25lID0gW1xuICAgICdHZXQgdXAnLFxuICAgICdCcnVzaCB0ZWV0aCcsXG4gICAgJ1Rha2UgYSBzaG93ZXInLFxuICAgICdDaGVjayBlLW1haWwnLFxuICAgICdXYWxrIGRvZydcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==