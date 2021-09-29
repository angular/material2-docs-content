import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/mdc-card";
import * as i2 from "@angular/material-experimental/mdc-button";
/**
 * @title Card with multiple sections
 */
export class MdcCardFancyExample {
}
MdcCardFancyExample.ɵfac = function MdcCardFancyExample_Factory(t) { return new (t || MdcCardFancyExample)(); };
MdcCardFancyExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MdcCardFancyExample, selectors: [["mdc-card-fancy-example"]], decls: 16, vars: 0, consts: [[1, "example-card"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-button", ""]], template: function MdcCardFancyExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-header");
        i0.ɵɵelement(2, "div", 1);
        i0.ɵɵelementStart(3, "mat-card-title");
        i0.ɵɵtext(4, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-subtitle");
        i0.ɵɵtext(6, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "img", 2);
        i0.ɵɵelementStart(8, "mat-card-content");
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-card-actions");
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵtext(13, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 3);
        i0.ɵɵtext(15, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\n\n.example-header-image[_ngcontent-%COMP%] {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MdcCardFancyExample, [{
        type: Component,
        args: [{ selector: 'mdc-card-fancy-example', template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9tZGMtY2FyZC9tZGMtY2FyZC1mYW5jeS9tZGMtY2FyZC1mYW5jeS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL21kYy1jYXJkL21kYy1jYXJkLWZhbmN5L21kYy1jYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjs7c0ZBQW5CLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDVmhDLG1DQUErQjtRQUM3Qix1Q0FBaUI7UUFDZix5QkFBd0Q7UUFDeEQsc0NBQWdCO1FBQUEseUJBQVM7UUFBQSxpQkFBaUI7UUFDMUMseUNBQW1CO1FBQUEseUJBQVM7UUFBQSxpQkFBb0I7UUFDbEQsaUJBQWtCO1FBQ2xCLHlCQUFnSDtRQUNoSCx3Q0FBa0I7UUFDaEIseUJBQUc7UUFDRCxrT0FHRjtRQUFBLGlCQUFJO1FBQ04saUJBQW1CO1FBQ25CLHlDQUFrQjtRQUNoQixrQ0FBbUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2hDLGtDQUFtQjtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDbkMsaUJBQW1CO1FBQ3JCLGlCQUFXOzt1RkRSRSxtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBtdWx0aXBsZSBzZWN0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZGMtY2FyZC1mYW5jeS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdtZGMtY2FyZC1mYW5jeS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWRjLWNhcmQtZmFuY3ktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgTWRjQ2FyZEZhbmN5RXhhbXBsZSB7fVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBtYXQtY2FyZC1hdmF0YXIgY2xhc3M9XCJleGFtcGxlLWhlYWRlci1pbWFnZVwiPjwvZGl2PlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5Eb2cgQnJlZWQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPHA+XG4gICAgICBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nIGZyb20gSmFwYW4uXG4gICAgICBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhcyBvcmlnaW5hbGx5XG4gICAgICBicmVkIGZvciBodW50aW5nLlxuICAgIDwvcD5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG48L21hdC1jYXJkPlxuIl19