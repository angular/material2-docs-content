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
ListHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListHarnessExample, selectors: [["list-harness-example"]], decls: 19, vars: 0, consts: [["matLine", ""], ["matListIcon", ""], ["matListAvatar", ""], ["matSubheader", ""], ["mat-list-item", ""]], template: function ListHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'list-harness-example', template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3QtaGFybmVzcy9saXN0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ1QvQixnQ0FBVTtRQUNSLHFDQUFlO1FBQ2IsOEJBQWE7UUFBQSxxQkFBSztRQUFBLGlCQUFNO1FBQ3hCLDhCQUFhO1FBQUEsaUJBQUM7UUFBQSxpQkFBTTtRQUNwQiw4QkFBaUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFNO1FBQzNCLDhCQUFtQjtRQUFBLHNCQUFNO1FBQUEsaUJBQU07UUFDakMsaUJBQWdCO1FBQ2hCLCtCQUFrQjtRQUFBLDBCQUFTO1FBQUEsaUJBQU07UUFDakMsNkJBQWlCO1FBQ2YsNkJBQU07UUFBQSx1QkFBTTtRQUFBLGlCQUFPO1FBQ3JCLGlCQUFJO1FBQ0osa0NBQXNCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUNyQywrQkFBa0I7UUFBQSwwQkFBUztRQUFBLGlCQUFNO1FBQ25DLGlCQUFXOzt1RkRKRSxrQkFBa0I7Y0FKOUIsU0FBUzsyQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRMaXN0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1saXN0PlxuICA8bWF0LWxpc3QtaXRlbT5cbiAgICA8ZGl2IG1hdExpbmU+SXRlbSA8L2Rpdj5cbiAgICA8ZGl2IG1hdExpbmU+MTwvZGl2PlxuICAgIDxkaXYgbWF0TGlzdEljb24+aWNvbjwvZGl2PlxuICAgIDxkaXYgbWF0TGlzdEF2YXRhcj5BdmF0YXI8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8ZGl2IG1hdFN1YmhlYWRlcj5TZWN0aW9uIDE8L2Rpdj5cbiAgPGEgbWF0LWxpc3QtaXRlbT5cbiAgICA8c3Bhbj5JdGVtIDI8L3NwYW4+XG4gIDwvYT5cbiAgPGJ1dHRvbiBtYXQtbGlzdC1pdGVtPkl0ZW0gMzwvYnV0dG9uPlxuICA8ZGl2IG1hdFN1YmhlYWRlcj5TZWN0aW9uIDI8L2Rpdj5cbjwvbWF0LWxpc3Q+XG4iXX0=