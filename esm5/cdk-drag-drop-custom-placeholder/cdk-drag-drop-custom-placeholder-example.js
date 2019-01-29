import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop custom placeholer
 */
var CdkDragDropCustomPlaceholderExample = /** @class */ (function () {
    function CdkDragDropCustomPlaceholderExample() {
        this.movies = [
            'Episode I - The Phantom Menace',
            'Episode II - Attack of the Clones',
            'Episode III - Revenge of the Sith',
            'Episode IV - A New Hope',
            'Episode V - The Empire Strikes Back',
            'Episode VI - Return of the Jedi',
            'Episode VII - The Force Awakens',
            'Episode VIII - The Last Jedi'
        ];
    }
    CdkDragDropCustomPlaceholderExample.prototype.drop = function (event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropCustomPlaceholderExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-custom-placeholder-example',
            template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    <div class=\"example-custom-placeholder\" *cdkDragPlaceholder></div>\n    {{movie}}\n  </div>\n</div>\n",
            styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropCustomPlaceholderExample);
    return CdkDragDropCustomPlaceholderExample;
}());
export { CdkDragDropCustomPlaceholderExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci9jZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTs7R0FFRztBQU1IO0lBTEE7UUFNRSxXQUFNLEdBQUc7WUFDUCxnQ0FBZ0M7WUFDaEMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyx5QkFBeUI7WUFDekIscUNBQXFDO1lBQ3JDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsOEJBQThCO1NBQy9CLENBQUM7SUFLSixDQUFDO0lBSEMsa0RBQUksR0FBSixVQUFLLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFkVSxtQ0FBbUM7UUFML0MsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBDQUEwQztZQUNwRCw2UUFBNEQ7O1NBRTdELENBQUM7T0FDVyxtQ0FBbUMsQ0FlL0M7SUFBRCwwQ0FBQztDQUFBLEFBZkQsSUFlQztTQWZZLG1DQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBjdXN0b20gcGxhY2Vob2xlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BDdXN0b21QbGFjZWhvbGRlckV4YW1wbGUge1xuICBtb3ZpZXMgPSBbXG4gICAgJ0VwaXNvZGUgSSAtIFRoZSBQaGFudG9tIE1lbmFjZScsXG4gICAgJ0VwaXNvZGUgSUkgLSBBdHRhY2sgb2YgdGhlIENsb25lcycsXG4gICAgJ0VwaXNvZGUgSUlJIC0gUmV2ZW5nZSBvZiB0aGUgU2l0aCcsXG4gICAgJ0VwaXNvZGUgSVYgLSBBIE5ldyBIb3BlJyxcbiAgICAnRXBpc29kZSBWIC0gVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLFxuICAgICdFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJyxcbiAgICAnRXBpc29kZSBWSUkgLSBUaGUgRm9yY2UgQXdha2VucycsXG4gICAgJ0VwaXNvZGUgVklJSSAtIFRoZSBMYXN0IEplZGknXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMubW92aWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iXX0=