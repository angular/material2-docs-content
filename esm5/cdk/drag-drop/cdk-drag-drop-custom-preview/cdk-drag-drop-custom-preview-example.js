import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropCustomPreviewExample_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 4);
} if (rf & 2) {
    var movie_r14 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("src", movie_r14.poster, i0.ɵɵsanitizeUrl)("alt", movie_r14.title);
} }
function CdkDragDropCustomPreviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CdkDragDropCustomPreviewExample_div_1_img_2_Template, 1, 2, "img", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var movie_r14 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", movie_r14.title, " ");
} }
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
            },
            {
                title: 'Episode IX – The Rise of Skywalker',
                poster: 'https://upload.wikimedia.org/wikipedia/en/a/af/Star_Wars_The_Rise_of_Skywalker_poster.jpg'
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
                    templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                    styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
                },] },
    ];
    CdkDragDropCustomPreviewExample.ɵfac = function CdkDragDropCustomPreviewExample_Factory(t) { return new (t || CdkDragDropCustomPreviewExample)(); };
    CdkDragDropCustomPreviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropCustomPreviewExample, selectors: [["cdk-drag-drop-custom-preview-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], [3, "src", "alt", 4, "cdkDragPreview"], [3, "src", "alt"]], template: function CdkDragDropCustomPreviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPreviewExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(1, CdkDragDropCustomPreviewExample_div_1_Template, 3, 1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.movies);
        } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag, i1.CdkDragPreview], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropCustomPreviewExample;
}());
export { CdkDragDropCustomPreviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropCustomPreviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-custom-preview-example',
                templateUrl: 'cdk-drag-drop-custom-preview-example.html',
                styleUrls: ['cdk-drag-drop-custom-preview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3L2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcHJldmlldy9jZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7SUNFaEUseUJBQ0Y7OztJQUR1Qix3REFBb0Isd0JBQUE7OztJQUYzQyw4QkFDRTtJQUFBLFlBQ0E7SUFBQSxzRkFDRjtJQUFBLGlCQUFNOzs7SUFGSixlQUNBO0lBREEsZ0RBQ0E7O0FEQUo7O0dBRUc7QUFDSDtJQUFBO1FBTUUsaUNBQWlDO1FBQ2pDLFdBQU0sR0FBRztZQUNQO2dCQUNFLEtBQUssRUFBRSxnQ0FBZ0M7Z0JBQ3ZDLE1BQU0sRUFBRSxvRkFBb0Y7YUFDN0Y7WUFDRDtnQkFDRSxLQUFLLEVBQUUsbUNBQW1DO2dCQUMxQyxNQUFNLEVBQUUsbUhBQW1IO2FBQzVIO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG1DQUFtQztnQkFDMUMsTUFBTSxFQUFFLHFHQUFxRzthQUM5RztZQUNEO2dCQUNFLEtBQUssRUFBRSx5QkFBeUI7Z0JBQ2hDLE1BQU0sRUFBRSw0RUFBNEU7YUFDckY7WUFDRDtnQkFDRSxLQUFLLEVBQUUscUNBQXFDO2dCQUM1QyxNQUFNLEVBQUUsNkVBQTZFO2FBQ3RGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLGlDQUFpQztnQkFDeEMsTUFBTSxFQUFFLDhFQUE4RTthQUN2RjtZQUNEO2dCQUNFLEtBQUssRUFBRSxpQ0FBaUM7Z0JBQ3hDLE1BQU0sRUFBRSxrR0FBa0c7YUFDM0c7WUFDRDtnQkFDRSxLQUFLLEVBQUUsOEJBQThCO2dCQUNyQyxNQUFNLEVBQUUsNEVBQTRFO2FBQ3JGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLG9DQUFvQztnQkFDM0MsTUFBTSxFQUFFLDJGQUEyRjthQUNwRztTQUNGLENBQUM7S0FNSDtJQUxDLGdDQUFnQztJQUVoQyw4Q0FBSSxHQUFKLFVBQUssS0FBcUQ7UUFDeEQsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Z0JBakRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0NBQXNDO29CQUNoRCxXQUFXLEVBQUUsMkNBQTJDO29CQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQztpQkFDeEQ7O2tIQUNZLCtCQUErQjt3RUFBL0IsK0JBQStCO1lDWDVDLDhCQUNFO1lBRG9DLHlJQUFzQixnQkFBWSxJQUFDO1lBQ3ZFLGdGQUNFO1lBR0osaUJBQU07O1lBSnFCLGVBQTRCO1lBQTVCLG9DQUE0Qjs7MENERHZEO0NBd0RDLEFBbERELElBa0RDO1NBN0NZLCtCQUErQjtrREFBL0IsK0JBQStCO2NBTDNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywwQ0FBMEMsQ0FBQzthQUN4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBjdXN0b20gcHJldmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLWN1c3RvbS1wcmV2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXByZXZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRHJhZ0Ryb3BDdXN0b21QcmV2aWV3RXhhbXBsZSB7XG4gIC8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuICBtb3ZpZXMgPSBbXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIEkgLSBUaGUgUGhhbnRvbSBNZW5hY2UnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vNC80MC9TdGFyX1dhcnNfUGhhbnRvbV9NZW5hY2VfcG9zdGVyLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBJSSAtIEF0dGFjayBvZiB0aGUgQ2xvbmVzJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzMvMzIvU3Rhcl9XYXJzXy1fRXBpc29kZV9JSV9BdHRhY2tfb2ZfdGhlX0Nsb25lc18lMjhtb3ZpZV9wb3N0ZXIlMjkuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vOS85My9TdGFyX1dhcnNfRXBpc29kZV9JSUlfUmV2ZW5nZV9vZl90aGVfU2l0aF9wb3N0ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsXG4gICAgICBwb3N0ZXI6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9lbi84Lzg3L1N0YXJXYXJzTW92aWVQb3N0ZXIxOTc3LmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnRXBpc29kZSBWIC0gVGhlIEVtcGlyZSBTdHJpa2VzIEJhY2snLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vMy8zYy9TV18tX0VtcGlyZV9TdHJpa2VzX0JhY2suanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJIC0gUmV0dXJuIG9mIHRoZSBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuL2IvYjIvUmV0dXJuT2ZUaGVKZWRpUG9zdGVyMTk4My5qcGcnXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0VwaXNvZGUgVklJIC0gVGhlIEZvcmNlIEF3YWtlbnMnLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYS9hMi9TdGFyX1dhcnNfVGhlX0ZvcmNlX0F3YWtlbnNfVGhlYXRyaWNhbF9Qb3N0ZXIuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIFZJSUkgLSBUaGUgTGFzdCBKZWRpJyxcbiAgICAgIHBvc3RlcjogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2VuLzcvN2YvU3Rhcl9XYXJzX1RoZV9MYXN0X0plZGkuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdFcGlzb2RlIElYIOKAkyBUaGUgUmlzZSBvZiBTa3l3YWxrZXInLFxuICAgICAgcG9zdGVyOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvZW4vYS9hZi9TdGFyX1dhcnNfVGhlX1Jpc2Vfb2ZfU2t5d2Fsa2VyX3Bvc3Rlci5qcGcnXG4gICAgfVxuICBdO1xuICAvLyB0c2xpbnQ6ZW5hYmxlOm1heC1saW5lLWxlbmd0aFxuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHt0aXRsZTogc3RyaW5nLCBwb3N0ZXI6IHN0cmluZ31bXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5tb3ZpZXMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJleGFtcGxlLWxpc3RcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiAqbmdGb3I9XCJsZXQgbW92aWUgb2YgbW92aWVzXCIgY2RrRHJhZz5cbiAgICB7e21vdmllLnRpdGxlfX1cbiAgICA8aW1nICpjZGtEcmFnUHJldmlldyBbc3JjXT1cIm1vdmllLnBvc3RlclwiIFthbHRdPVwibW92aWUudGl0bGVcIj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==