/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropSortingExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const movie_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(movie_r31);
} }
/**
 * \@title Drag&Drop sorting
 */
export class CdkDragDropSortingExample {
    constructor() {
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
    /**
     * @param {?} event
     * @return {?}
     */
    drop(event) {
        moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }
}
CdkDragDropSortingExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-drag-drop-sorting-example',
                templateUrl: 'cdk-drag-drop-sorting-example.html',
                styleUrls: ['cdk-drag-drop-sorting-example.css'],
            },] },
];
/** @nocollapse */ CdkDragDropSortingExample.ɵfac = function CdkDragDropSortingExample_Factory(t) { return new (t || CdkDragDropSortingExample)(); };
/** @nocollapse */ CdkDragDropSortingExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropSortingExample, selectors: [["cdk-drag-drop-sorting-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropSortingExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropSortingExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        i0.ɵɵtemplate(1, CdkDragDropSortingExample_div_1_Template, 2, 1, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.movies);
    } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropSortingExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-sorting-example',
                templateUrl: 'cdk-drag-drop-sorting-example.html',
                styleUrls: ['cdk-drag-drop-sorting-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkDragDropSortingExample.prototype.movies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1zb3J0aW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvZHJhZy1kcm9wL2Nkay1kcmFnLWRyb3Atc29ydGluZy9jZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1zb3J0aW5nL2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ0FsRSw4QkFBOEQ7SUFBQSxZQUFTO0lBQUEsaUJBQU07OztJQUFmLGVBQVM7SUFBVCwrQkFBUzs7Ozs7QURVekUsTUFBTSxPQUFPLHlCQUF5QjtJQUx0QztRQU1FLFdBQU0sR0FBRztZQUNQLGdDQUFnQztZQUNoQyxtQ0FBbUM7WUFDbkMsbUNBQW1DO1lBQ25DLHlCQUF5QjtZQUN6QixxQ0FBcUM7WUFDckMsaUNBQWlDO1lBQ2pDLGlDQUFpQztZQUNqQyw4QkFBOEI7U0FDL0IsQ0FBQztLQUtIOzs7OztJQUhDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEOztrR0FDWSx5QkFBeUI7OERBQXpCLHlCQUF5QjtRQ1h0Qyw4QkFDRTtRQURvQyxtSUFBc0IsZ0JBQVksSUFBQztRQUN2RSwwRUFBOEQ7UUFDaEUsaUJBQU07O1FBRHFCLGVBQTRCO1FBQTVCLG9DQUE0Qjs7bUNEVTFDLHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7YUFDakQ7Ozs7SUFFQywyQ0FTRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBzb3J0aW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLXNvcnRpbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kcmFnLWRyb3Atc29ydGluZy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcFNvcnRpbmdFeGFtcGxlIHtcbiAgbW92aWVzID0gW1xuICAgICdFcGlzb2RlIEkgLSBUaGUgUGhhbnRvbSBNZW5hY2UnLFxuICAgICdFcGlzb2RlIElJIC0gQXR0YWNrIG9mIHRoZSBDbG9uZXMnLFxuICAgICdFcGlzb2RlIElJSSAtIFJldmVuZ2Ugb2YgdGhlIFNpdGgnLFxuICAgICdFcGlzb2RlIElWIC0gQSBOZXcgSG9wZScsXG4gICAgJ0VwaXNvZGUgViAtIFRoZSBFbXBpcmUgU3RyaWtlcyBCYWNrJyxcbiAgICAnRXBpc29kZSBWSSAtIFJldHVybiBvZiB0aGUgSmVkaScsXG4gICAgJ0VwaXNvZGUgVklJIC0gVGhlIEZvcmNlIEF3YWtlbnMnLFxuICAgICdFcGlzb2RlIFZJSUkgLSBUaGUgTGFzdCBKZWRpJ1xuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLm1vdmllcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPGRpdiBjZGtEcm9wTGlzdCBjbGFzcz1cImV4YW1wbGUtbGlzdFwiIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiICpuZ0Zvcj1cImxldCBtb3ZpZSBvZiBtb3ZpZXNcIiBjZGtEcmFnPnt7bW92aWV9fTwvZGl2PlxuPC9kaXY+XG4iXX0=