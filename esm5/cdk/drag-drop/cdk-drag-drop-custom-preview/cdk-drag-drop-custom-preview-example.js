import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
/**
 * @title Drag&Drop custom preview
 */
var CdkDragDropCustomPreviewExample = /** @class */ (function () {
    function CdkDragDropCustomPreviewExample() {
        // tslint:disable:max-line-length
        this.movies = [
            {
                title: 'Episode I - The Phantom Menace',
                poster: 'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'
            },
            {
                title: 'Episode II - Attack of the Clones',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'
            },
            {
                title: 'Episode III - Revenge of the Sith',
                poster: 'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'
            },
            {
                title: 'Episode IV - A New Hope',
                poster: 'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'
            },
            {
                title: 'Episode V - The Empire Strikes Back',
                poster: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'
            },
            {
                title: 'Episode VI - Return of the Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'
            },
            {
                title: 'Episode VII - The Force Awakens',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'
            },
            {
                title: 'Episode VIII - The Last Jedi',
                poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'
            }
        ];
    }
    // tslint:enable:max-line-length
    CdkDragDropCustomPreviewExample.prototype.drop = function (event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    };
    CdkDragDropCustomPreviewExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-drag-drop-custom-preview-example',
            template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n",
            styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
        })
    ], CdkDragDropCustomPreviewExample);
    return CdkDragDropCustomPreviewExample;
}());
export { CdkDragDropCustomPreviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXBFOztHQUVHO0FBTUg7SUFMQTtRQU1FLGlDQUFpQztRQUNqQyxXQUFNLEdBQUc7WUFDUDtnQkFDRSxLQUFLLEVBQUUsZ0NBQWdDO2dCQUN2QyxNQUFNLEVBQUUsb0ZBQW9GO2FBQzdGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsTUFBTSxFQUFFLG1IQUFtSDthQUM1SDtZQUNEO2dCQUNFLEtBQUssRUFBRSxtQ0FBbUM7Z0JBQzFDLE1BQU0sRUFBRSxxR0FBcUc7YUFDOUc7WUFDRDtnQkFDRSxLQUFLLEVBQUUseUJBQXlCO2dCQUNoQyxNQUFNLEVBQUUsNEVBQTRFO2FBQ3JGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLHFDQUFxQztnQkFDNUMsTUFBTSxFQUFFLDZFQUE2RTthQUN0RjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE1BQU0sRUFBRSw4RUFBOEU7YUFDdkY7WUFDRDtnQkFDRSxLQUFLLEVBQUUsaUNBQWlDO2dCQUN4QyxNQUFNLEVBQUUsa0dBQWtHO2FBQzNHO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLDhCQUE4QjtnQkFDckMsTUFBTSxFQUFFLDRFQUE0RTthQUNyRjtTQUNGLENBQUM7SUFNSixDQUFDO0lBTEMsZ0NBQWdDO0lBRWhDLDhDQUFJLEdBQUosVUFBSyxLQUFxRDtRQUN4RCxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBeENVLCtCQUErQjtRQUwzQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0NBQXNDO1lBQ2hELGlSQUF3RDs7U0FFekQsQ0FBQztPQUNXLCtCQUErQixDQXlDM0M7SUFBRCxzQ0FBQztDQUFBLEFBekNELElBeUNDO1NBekNZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBjdXN0b20gcHJldmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuICBtb3ZpZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIEkgLSBUaGUgUGhhbnRvbSBNZW5hY2UnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNC80MC9TdGFyX1dhcnNfUGhhbnRvbV9NZW5hY2VfcG9zdGVyLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJSSAtIEF0dGFjayBvZiB0aGUgQ2xvbmVzJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzMvMzIvU3Rhcl9XYXJzXy1fRXBpc29kZV9JSV9BdHRhY2tfb2ZfdGhlX0Nsb25lc18lMjhtb3ZpZV9wb3N0ZXIlMjkuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOS85My9TdGFyX1dhcnNfRXBpc29kZV9JSUlfUmV2ZW5nZV9vZl90aGVfU2l0aF9wb3N0ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi84Lzg3L1N0YXJXYXJzTW92aWVQb3N0ZXIxOTc3LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBWIC0gVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMy8zYy9TV18tX0VtcGlyZV9TdHJpa2VzX0JhY2suanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2IvYjIvUmV0dXJuT2ZUaGVKZWRpUG9zdGVyMTk4My5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVklJIC0gVGhlIEZvcmNlIEF3YWtlbnMnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYS9hMi9TdGFyX1dhcnNfVGhlX0ZvcmNlX0F3YWtlbnNfVGhlYXRyaWNhbF9Qb3N0ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJSUkgLSBUaGUgTGFzdCBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzcvN2YvU3Rhcl9XYXJzX1RoZV9MYXN0X0plZGkuanBnJ1xuICAgIH1cbiAgXTtcbiAgLy8gdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGhcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDx7dGl0bGU6IHN0cmluZywgcG9zdGVyOiBzdHJpbmd9W10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMubW92aWVzLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iXX0=