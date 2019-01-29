import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop sorting
 */
var CdkDragDropSortingExample = /** @class */ (function () {
    function CdkDragDropSortingExample() {
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
    CdkDragDropSortingExample.prototype.drop = function (event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropSortingExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-sorting-example',
            template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\n</div>\n",
            styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropSortingExample);
    return CdkDragDropSortingExample;
}());
export { CdkDragDropSortingExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrLWRyYWctZHJvcC1zb3J0aW5nL2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRTs7R0FFRztBQU1IO0lBTEE7UUFNRSxXQUFNLEdBQUc7WUFDUCxnQ0FBZ0M7WUFDaEMsbUNBQW1DO1lBQ25DLG1DQUFtQztZQUNuQyx5QkFBeUI7WUFDekIscUNBQXFDO1lBQ3JDLGlDQUFpQztZQUNqQyxpQ0FBaUM7WUFDakMsOEJBQThCO1NBQy9CLENBQUM7SUFLSixDQUFDO0lBSEMsd0NBQUksR0FBSixVQUFLLEtBQTRCO1FBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFkVSx5QkFBeUI7UUFMckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtCQUErQjtZQUN6Qyx5TEFBaUQ7O1NBRWxELENBQUM7T0FDVyx5QkFBeUIsQ0FlckM7SUFBRCxnQ0FBQztDQUFBLEFBZkQsSUFlQztTQWZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlIHtcbiAgbW92aWVzID0gW1xuICAgICdFcGlzb2RlIEkgLSBUaGUgUGhhbnRvbSBNZW5hY2UnLFxuICAgICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICdFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsXG4gICAgJ0VwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJyxcbiAgICAnRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaScsXG4gICAgJ0VwaXNvZGUgVklJIC0gVGhlIEZvcmNlIEF3YWtlbnMnLFxuICAgICdFcGlzb2RlIFZJSUkgLSBUaGUgTGFzdCBKZWRpJ1xuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm1vdmllcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIl19