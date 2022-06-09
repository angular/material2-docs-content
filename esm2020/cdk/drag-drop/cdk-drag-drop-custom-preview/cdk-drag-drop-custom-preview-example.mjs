import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
/**
 * @title Drag&Drop custom preview
 */
export class CdkDragDropCustomPreviewExample {
    constructor() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg',
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg',
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg',
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg',
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg',
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg',
            },
            {
                title: 'Episode IX – The Rise of Skywalker',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg',
            },
        ];
    }
    // tslint:enable:max-line-length
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropCustomPreviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkDragDropCustomPreviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkDragDropCustomPreviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: CdkDragDropCustomPreviewExample, selector: "cdk-drag-drop-custom-preview-example", ngImport: i0, template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i1.CdkDragPreview, selector: "ng-template[cdkDragPreview]", inputs: ["data", "matchSize"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkDragDropCustomPreviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-custom-preview-example', template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVwRTs7R0FFRztBQU1ILE1BQU0sT0FBTywrQkFBK0I7SUFMNUM7UUFNRSxpQ0FBaUM7UUFDakMsV0FBTSxHQUFHO1lBQ1A7Z0JBQ0UsS0FBSyxFQUFFLGdDQUFnQztnQkFDdkMsTUFBTSxFQUFFLG9GQUFvRjthQUM3RjtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQ0FBbUM7Z0JBQzFDLE1BQU0sRUFDSixtSEFBbUg7YUFDdEg7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxNQUFNLEVBQ0oscUdBQXFHO2FBQ3hHO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHlCQUF5QjtnQkFDaEMsTUFBTSxFQUFFLDRFQUE0RTthQUNyRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxxQ0FBcUM7Z0JBQzVDLE1BQU0sRUFBRSw2RUFBNkU7YUFDdEY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsaUNBQWlDO2dCQUN4QyxNQUFNLEVBQUUsOEVBQThFO2FBQ3ZGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztnQkFDeEMsTUFBTSxFQUNKLGtHQUFrRzthQUNyRztZQUNEO2dCQUNFLEtBQUssRUFBRSw4QkFBOEI7Z0JBQ3JDLE1BQU0sRUFBRSw0RUFBNEU7YUFDckY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsb0NBQW9DO2dCQUMzQyxNQUFNLEVBQ0osMkZBQTJGO2FBQzlGO1NBQ0YsQ0FBQztLQU1IO0lBTEMsZ0NBQWdDO0lBRWhDLElBQUksQ0FBQyxLQUFxRDtRQUN4RCxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs0SEFoRFUsK0JBQStCO2dIQUEvQiwrQkFBK0IsNEVDWDVDLHVRQU1BOzJGREthLCtCQUErQjtrQkFMM0MsU0FBUzsrQkFDRSxzQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY3VzdG9tIHByZXZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ3VzdG9tUHJldmlld0V4YW1wbGUge1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgbW92aWVzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJIC0gVGhlIFBoYW50b20gTWVuYWNlJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzQvNDAvU3Rhcl9XYXJzX1BoYW50b21fTWVuYWNlX3Bvc3Rlci5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMy8zMi9TdGFyX1dhcnNfLV9FcGlzb2RlX0lJX0F0dGFja19vZl90aGVfQ2xvbmVzXyUyOG1vdmllX3Bvc3RlciUyOS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOS85My9TdGFyX1dhcnNfRXBpc29kZV9JSUlfUmV2ZW5nZV9vZl90aGVfU2l0aF9wb3N0ZXIuanBnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOC84Ny9TdGFyV2Fyc01vdmllUG9zdGVyMTk3Ny5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi8zLzNjL1NXXy1fRW1waXJlX1N0cmlrZXNfQmFjay5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2IvYjIvUmV0dXJuT2ZUaGVKZWRpUG9zdGVyMTk4My5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJSSAtIFRoZSBGb3JjZSBBd2FrZW5zJyxcbiAgICAgIHBvc3RlcjpcbiAgICAgICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2EvYTIvU3Rhcl9XYXJzX1RoZV9Gb3JjZV9Bd2FrZW5zX1RoZWF0cmljYWxfUG9zdGVyLmpwZycsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVklJSSAtIFRoZSBMYXN0IEplZGknLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNy83Zi9TdGFyX1dhcnNfVGhlX0xhc3RfSmVkaS5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElYIOKAkyBUaGUgUmlzZSBvZiBTa3l3YWxrZXInLFxuICAgICAgcG9zdGVyOlxuICAgICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYS9hZi9TdGFyX1dhcnNfVGhlX1Jpc2Vfb2ZfU2t5d2Fsa2VyX3Bvc3Rlci5qcGcnLFxuICAgIH0sXG4gIF07XG4gIC8vIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoXG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8e3RpdGxlOiBzdHJpbmc7IHBvc3Rlcjogc3RyaW5nfVtdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm1vdmllcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdCBjbGFzcz1cImV4YW1wbGUtbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBtb3ZpZSBvZiBtb3ZpZXNcIiBjZGtEcmFnPlxuICAgIHt7bW92aWUudGl0bGV9fVxuICAgIDxpbWcgKmNka0RyYWdQcmV2aWV3IFtzcmNdPVwibW92aWUucG9zdGVyXCIgW2FsdF09XCJtb3ZpZS50aXRsZVwiPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19