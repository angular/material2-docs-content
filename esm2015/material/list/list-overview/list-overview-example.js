import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title Basic list
 */
export class ListOverviewExample {
}
ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
ListOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-list", 0);
        i0.ɵɵelementStart(1, "mat-list-item", 1);
        i0.ɵɵtext(2, "Item 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-list-item", 1);
        i0.ɵɵtext(4, "Item 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-list-item", 1);
        i0.ɵɵtext(6, "Item 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatList, i1.MatListItem], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
                styleUrls: ['list-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sbUJBQW1COztzRkFBbkIsbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNWaEMsbUNBQ0U7UUFBQSx3Q0FBK0I7UUFBQSxzQkFBTTtRQUFBLGlCQUFnQjtRQUNyRCx3Q0FBK0I7UUFBQSxzQkFBTTtRQUFBLGlCQUFnQjtRQUNyRCx3Q0FBK0I7UUFBQSxzQkFBTTtRQUFBLGlCQUFnQjtRQUN2RCxpQkFBVzs7a0RETUUsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1saXN0IHJvbGU9XCJsaXN0XCI+XG4gIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiPkl0ZW0gMTwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCI+SXRlbSAyPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIj5JdGVtIDM8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuIl19