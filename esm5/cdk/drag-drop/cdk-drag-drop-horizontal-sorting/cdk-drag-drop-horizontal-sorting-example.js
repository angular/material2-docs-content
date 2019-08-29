import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop horizontal sorting
 */
var CdkDragDropHorizontalSortingExample = /** @class */ (function () {
    function CdkDragDropHorizontalSortingExample() {
        this.timePeriods = [
            'Bronze age',
            'Iron age',
            'Middle ages',
            'Early modern period',
            'Long nineteenth century'
        ];
    }
    CdkDragDropHorizontalSortingExample.prototype.drop = function (event) {
        moveItemInArray(this.timePeriods, event.previousIndex, event.currentIndex);
    };
    CdkDragDropHorizontalSortingExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-horizontal-sorting-example',
                    template: "<div cdkDropList cdkDropListOrientation=\"horizontal\" class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let timePeriod of timePeriods\" cdkDrag>{{timePeriod}}</div>\n</div>\n",
                    styles: [".example-list {\n  width: 1000px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: flex;\n  flex-direction: row;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-right: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n  flex-grow: 1;\n  flex-basis: 0;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return CdkDragDropHorizontalSortingExample;
}());
export { CdkDragDropHorizontalSortingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nL2Nkay1kcmFnLWRyb3AtaG9yaXpvbnRhbC1zb3J0aW5nLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsZ0JBQVcsR0FBRztZQUNaLFlBQVk7WUFDWixVQUFVO1lBQ1YsYUFBYTtZQUNiLHFCQUFxQjtZQUNyQix5QkFBeUI7U0FDMUIsQ0FBQztJQUtKLENBQUM7SUFIQyxrREFBSSxHQUFKLFVBQUssS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMENBQTBDO29CQUNwRCw4T0FBNEQ7O2lCQUU3RDs7SUFhRCwwQ0FBQztDQUFBLEFBakJELElBaUJDO1NBWlksbUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGhvcml6b250YWwgc29ydGluZ1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWhvcml6b250YWwtc29ydGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1ob3Jpem9udGFsLXNvcnRpbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BIb3Jpem9udGFsU29ydGluZ0V4YW1wbGUge1xuICB0aW1lUGVyaW9kcyA9IFtcbiAgICAnQnJvbnplIGFnZScsXG4gICAgJ0lyb24gYWdlJyxcbiAgICAnTWlkZGxlIGFnZXMnLFxuICAgICdFYXJseSBtb2Rlcm4gcGVyaW9kJyxcbiAgICAnTG9uZyBuaW5ldGVlbnRoIGNlbnR1cnknXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudGltZVBlcmlvZHMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiJdfQ==