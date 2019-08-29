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
    CdkDragDropCustomPreviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-custom-preview-example',
                    template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>\n    {{movie.title}}\n    <img *cdkDragPreview [src]=\"movie.poster\" [alt]=\"movie.title\">\n  </div>\n</div>\n",
                    styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"]
                }] }
    ];
    return CdkDragDropCustomPreviewExample;
}());
export { CdkDragDropCustomPreviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFFcEU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsaUNBQWlDO1FBQ2pDLFdBQU0sR0FBRztZQUNQO2dCQUNFLEtBQUssRUFBRSxnQ0FBZ0M7Z0JBQ3ZDLE1BQU0sRUFBRSxvRkFBb0Y7YUFDN0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxNQUFNLEVBQUUsbUhBQW1IO2FBQzVIO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsTUFBTSxFQUFFLHFHQUFxRzthQUM5RztZQUNEO2dCQUNFLEtBQUssRUFBRSx5QkFBeUI7Z0JBQ2hDLE1BQU0sRUFBRSw0RUFBNEU7YUFDckY7WUFDRDtnQkFDRSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxNQUFNLEVBQUUsNkVBQTZFO2FBQ3RGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztnQkFDeEMsTUFBTSxFQUFFLDhFQUE4RTthQUN2RjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE1BQU0sRUFBRSxrR0FBa0c7YUFDM0c7WUFDRDtnQkFDRSxLQUFLLEVBQUUsOEJBQThCO2dCQUNyQyxNQUFNLEVBQUUsNEVBQTRFO2FBQ3JGO1NBQ0YsQ0FBQztJQU1KLENBQUM7SUFMQyxnQ0FBZ0M7SUFFaEMsOENBQUksR0FBSixVQUFLLEtBQXFEO1FBQ3hELGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNDQUFzQztvQkFDaEQsaVJBQXdEOztpQkFFekQ7O0lBMENELHNDQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0F6Q1ksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5fSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcblxuLyoqXG4gKiBAdGl0bGUgRHJhZyZEcm9wIGN1c3RvbSBwcmV2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEN1c3RvbVByZXZpZXdFeGFtcGxlIHtcbiAgLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG4gIG1vdmllcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgSSAtIFRoZSBQaGFudG9tIE1lbmFjZScsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi80LzQwL1N0YXJfV2Fyc19QaGFudG9tX01lbmFjZV9wb3N0ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMy8zMi9TdGFyX1dhcnNfLV9FcGlzb2RlX0lJX0F0dGFja19vZl90aGVfQ2xvbmVzXyUyOG1vdmllX3Bvc3RlciUyOS5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgSUlJIC0gUmV2ZW5nZSBvZiB0aGUgU2l0aCcsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi85LzkzL1N0YXJfV2Fyc19FcGlzb2RlX0lJSV9SZXZlbmdlX29mX3RoZV9TaXRoX3Bvc3Rlci5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgSVYgLSBBIE5ldyBIb3BlJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzgvODcvU3RhcldhcnNNb3ZpZVBvc3RlcjE5NzcuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi8zLzNjL1NXXy1fRW1waXJlX1N0cmlrZXNfQmFjay5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVkkgLSBSZXR1cm4gb2YgdGhlIEplZGknLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYi9iMi9SZXR1cm5PZlRoZUplZGlQb3N0ZXIxOTgzLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBWSUkgLSBUaGUgRm9yY2UgQXdha2VucycsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi9hL2EyL1N0YXJfV2Fyc19UaGVfRm9yY2VfQXdha2Vuc19UaGVhdHJpY2FsX1Bvc3Rlci5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVklJSSAtIFRoZSBMYXN0IEplZGknLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNy83Zi9TdGFyX1dhcnNfVGhlX0xhc3RfSmVkaS5qcGcnXG4gICAgfVxuICBdO1xuICAvLyB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aFxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHt0aXRsZTogc3RyaW5nLCBwb3N0ZXI6IHN0cmluZ31bXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5tb3ZpZXMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiJdfQ==