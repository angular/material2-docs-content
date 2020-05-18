/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/drag-drop/cdk-drag-drop-custom-placeholder/cdk-drag-drop-custom-placeholder-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropCustomPlaceholderExample_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} }
function CdkDragDropCustomPlaceholderExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_div_1_Template, 1, 0, "div", 3);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const movie_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", movie_r1, " ");
} }
/**
 * \@title Drag&Drop custom placeholder
 */
let CdkDragDropCustomPlaceholderExample = /** @class */ (() => {
    /**
     * \@title Drag&Drop custom placeholder
     */
    class CdkDragDropCustomPlaceholderExample {
        constructor() {
            this.movies = [
                'Episode I - The Phantom Menace',
                'Episode II - Attack of the Clones',
                'Episode III - Revenge of the Sith',
                'Episode IV - A New Hope',
                'Episode V - The Empire Strikes Back',
                'Episode VI - Return of the Jedi',
                'Episode VII - The Force Awakens',
                'Episode VIII - The Last Jedi',
                'Episode IX – The Rise of Skywalker'
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
    CdkDragDropCustomPlaceholderExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-custom-placeholder-example',
                    templateUrl: 'cdk-drag-drop-custom-placeholder-example.html',
                    styleUrls: ['cdk-drag-drop-custom-placeholder-example.css'],
                },] },
    ];
    /** @nocollapse */ CdkDragDropCustomPlaceholderExample.ɵfac = function CdkDragDropCustomPlaceholderExample_Factory(t) { return new (t || CdkDragDropCustomPlaceholderExample)(); };
    /** @nocollapse */ CdkDragDropCustomPlaceholderExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropCustomPlaceholderExample, selectors: [["cdk-drag-drop-custom-placeholder-example"]], decls: 2, vars: 1, consts: [["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"], ["class", "example-custom-placeholder", 4, "cdkDragPlaceholder"], [1, "example-custom-placeholder"]], template: function CdkDragDropCustomPlaceholderExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropCustomPlaceholderExample_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(1, CdkDragDropCustomPlaceholderExample_div_1_Template, 3, 1, "div", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.movies);
        } }, directives: [i1.CdkDropList, i2.NgForOf, i1.CdkDrag, i1.CdkDragPlaceholder], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-custom-placeholder[_ngcontent-%COMP%] {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropCustomPlaceholderExample;
})();
export { CdkDragDropCustomPlaceholderExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropCustomPlaceholderExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-custom-placeholder-example',
                templateUrl: 'cdk-drag-drop-custom-placeholder-example.html',
                styleUrls: ['cdk-drag-drop-custom-placeholder-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkDragDropCustomPlaceholderExample.prototype.movies;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXIvY2RrLWRyYWctZHJvcC1jdXN0b20tcGxhY2Vob2xkZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQWMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7O0lDQ2hFLHlCQUFrRTs7O0lBRHBFLDhCQUNFO0lBQUEsMEZBQTREO0lBQzVELFlBQ0Y7SUFBQSxpQkFBTTs7O0lBREosZUFDRjtJQURFLHlDQUNGOzs7OztBREVGOzs7O0lBQUEsTUFLYSxtQ0FBbUM7UUFMaEQ7WUFNRSxXQUFNLEdBQUc7Z0JBQ1AsZ0NBQWdDO2dCQUNoQyxtQ0FBbUM7Z0JBQ25DLG1DQUFtQztnQkFDbkMseUJBQXlCO2dCQUN6QixxQ0FBcUM7Z0JBQ3JDLGlDQUFpQztnQkFDakMsaUNBQWlDO2dCQUNqQyw4QkFBOEI7Z0JBQzlCLG9DQUFvQzthQUNyQyxDQUFDO1NBS0g7Ozs7O1FBSEMsSUFBSSxDQUFDLEtBQTRCO1lBQy9CLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3hFLENBQUM7OztnQkFwQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQ0FBMEM7b0JBQ3BELFdBQVcsRUFBRSwrQ0FBK0M7b0JBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO2lCQUM1RDs7NklBQ1ksbUNBQW1DOytGQUFuQyxtQ0FBbUM7WUNYaEQsOEJBQ0U7WUFEb0MsNklBQXNCLGdCQUFZLElBQUM7WUFDdkUsb0ZBQ0U7WUFHSixpQkFBTTs7WUFKcUIsZUFBNEI7WUFBNUIsb0NBQTRCOzs4Q0REdkQ7S0EyQkM7U0FoQlksbUNBQW1DO2tEQUFuQyxtQ0FBbUM7Y0FML0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQ0FBMEM7Z0JBQ3BELFdBQVcsRUFBRSwrQ0FBK0M7Z0JBQzVELFNBQVMsRUFBRSxDQUFDLDhDQUE4QyxDQUFDO2FBQzVEOzs7O0lBRUMscURBVUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY3VzdG9tIHBsYWNlaG9sZGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtY3VzdG9tLXBsYWNlaG9sZGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWN1c3RvbS1wbGFjZWhvbGRlci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEN1c3RvbVBsYWNlaG9sZGVyRXhhbXBsZSB7XG4gIG1vdmllcyA9IFtcbiAgICAnRXBpc29kZSBJIC0gVGhlIFBoYW50b20gTWVuYWNlJyxcbiAgICAnRXBpc29kZSBJSSAtIEF0dGFjayBvZiB0aGUgQ2xvbmVzJyxcbiAgICAnRXBpc29kZSBJSUkgLSBSZXZlbmdlIG9mIHRoZSBTaXRoJyxcbiAgICAnRXBpc29kZSBJViAtIEEgTmV3IEhvcGUnLFxuICAgICdFcGlzb2RlIFYgLSBUaGUgRW1waXJlIFN0cmlrZXMgQmFjaycsXG4gICAgJ0VwaXNvZGUgVkkgLSBSZXR1cm4gb2YgdGhlIEplZGknLFxuICAgICdFcGlzb2RlIFZJSSAtIFRoZSBGb3JjZSBBd2FrZW5zJyxcbiAgICAnRXBpc29kZSBWSUlJIC0gVGhlIExhc3QgSmVkaScsXG4gICAgJ0VwaXNvZGUgSVgg4oCTIFRoZSBSaXNlIG9mIFNreXdhbGtlcidcbiAgXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5tb3ZpZXMsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gIH1cbn1cbiIsIjxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJleGFtcGxlLWxpc3RcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiAqbmdGb3I9XCJsZXQgbW92aWUgb2YgbW92aWVzXCIgY2RrRHJhZz5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jdXN0b20tcGxhY2Vob2xkZXJcIiAqY2RrRHJhZ1BsYWNlaG9sZGVyPjwvZGl2PlxuICAgIHt7bW92aWV9fVxuICA8L2Rpdj5cbjwvZGl2PlxuIl19