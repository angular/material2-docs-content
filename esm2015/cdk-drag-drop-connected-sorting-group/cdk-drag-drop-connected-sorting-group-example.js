/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
/**
 * \@title Drag&Drop connected sorting group
 */
export class CdkDragDropConnectedSortingGroupExample {
    constructor() {
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
}
CdkDragDropConnectedSortingGroupExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"todo\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of todo\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"done\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      <div class=\"example-box\" *ngFor=\"let item of done\" cdkDrag>{{item}}</div>\n    </div>\n  </div>\n</div>\n",
                styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.todo;
    /** @type {?} */
    CdkDragDropConnectedSortingGroupExample.prototype.done;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVV2RixNQUFNLE9BQU8sdUNBQXVDO0lBTHBEO1FBTUUsU0FBSSxHQUFHO1lBQ0wsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsYUFBYTtTQUNkLENBQUM7UUFFRixTQUFJLEdBQUc7WUFDTCxRQUFRO1lBQ1IsYUFBYTtZQUNiLGVBQWU7WUFDZixjQUFjO1lBQ2QsVUFBVTtTQUNYLENBQUM7SUFZSixDQUFDOzs7OztJQVZDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtDQUErQztnQkFDekQsK29CQUFpRTs7YUFFbEU7Ozs7SUFFQyx1REFLRTs7SUFFRix1REFNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY29ubmVjdGVkIHNvcnRpbmcgZ3JvdXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSB7XG4gIHRvZG8gPSBbXG4gICAgJ0dldCB0byB3b3JrJyxcbiAgICAnUGljayB1cCBncm9jZXJpZXMnLFxuICAgICdHbyBob21lJyxcbiAgICAnRmFsbCBhc2xlZXAnXG4gIF07XG5cbiAgZG9uZSA9IFtcbiAgICAnR2V0IHVwJyxcbiAgICAnQnJ1c2ggdGVldGgnLFxuICAgICdUYWtlIGEgc2hvd2VyJyxcbiAgICAnQ2hlY2sgZS1tYWlsJyxcbiAgICAnV2FsayBkb2cnXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG59XG4iXX0=