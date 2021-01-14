import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
import * as i2 from "@angular/material/core";
/**
 * @title Testing with MatListHarness
 */
export class ListHarnessExample {
}
ListHarnessExample.ɵfac = function ListHarnessExample_Factory(t) { return new (t || ListHarnessExample)(); };
ListHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListHarnessExample, selectors: [["list-harness-example"]], decls: 19, vars: 0, consts: [["matLine", ""], ["matListIcon", ""], ["matListAvatar", ""], ["matSubheader", ""], ["mat-list-item", ""]], template: function ListHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list");
        i0.ɵɵelementStart(1, "mat-list-item");
        i0.ɵɵelementStart(2, "div", 0);
        i0.ɵɵtext(3, "Item ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 0);
        i0.ɵɵtext(5, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵtext(7, "icon");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 2);
        i0.ɵɵtext(9, "Avatar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "div", 3);
        i0.ɵɵtext(11, "Section 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "a", 4);
        i0.ɵɵelementStart(13, "span");
        i0.ɵɵtext(14, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 4);
        i0.ɵɵtext(16, "Item 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 3);
        i0.ɵɵtext(18, "Section 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatList, i1.MatListItem, i2.MatLine, i1.MatListIconCssMatStyler, i1.MatListAvatarCssMatStyler, i1.MatListSubheaderCssMatStyler], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListHarnessExample, [{
        type: Component,
        args: [{
                selector: 'list-harness-example',
                templateUrl: 'list-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3QtaGFybmVzcy9saXN0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7dURBQWxCLGtCQUFrQjtRQ1QvQixnQ0FDRTtRQUFBLHFDQUNFO1FBQUEsOEJBQWE7UUFBQSxxQkFBSztRQUFBLGlCQUFNO1FBQ3hCLDhCQUFhO1FBQUEsaUJBQUM7UUFBQSxpQkFBTTtRQUNwQiw4QkFBaUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFNO1FBQzNCLDhCQUFtQjtRQUFBLHNCQUFNO1FBQUEsaUJBQU07UUFDakMsaUJBQWdCO1FBQ2hCLCtCQUFrQjtRQUFBLDBCQUFTO1FBQUEsaUJBQU07UUFDakMsNkJBQ0U7UUFBQSw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDckIsaUJBQUk7UUFDSixrQ0FBc0I7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQ3JDLCtCQUFrQjtRQUFBLDBCQUFTO1FBQUEsaUJBQU07UUFDbkMsaUJBQVc7O3VGREpFLGtCQUFrQjtjQUo5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdExpc3RIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3QtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWxpc3Q+XG4gIDxtYXQtbGlzdC1pdGVtPlxuICAgIDxkaXYgbWF0TGluZT5JdGVtIDwvZGl2PlxuICAgIDxkaXYgbWF0TGluZT4xPC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0SWNvbj5pY29uPC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0QXZhdGFyPkF2YXRhcjwvZGl2PlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxkaXYgbWF0U3ViaGVhZGVyPlNlY3Rpb24gMTwvZGl2PlxuICA8YSBtYXQtbGlzdC1pdGVtPlxuICAgIDxzcGFuPkl0ZW0gMjwvc3Bhbj5cbiAgPC9hPlxuICA8YnV0dG9uIG1hdC1saXN0LWl0ZW0+SXRlbSAzPC9idXR0b24+XG4gIDxkaXYgbWF0U3ViaGVhZGVyPlNlY3Rpb24gMjwvZGl2PlxuPC9tYXQtbGlzdD5cbiJdfQ==