import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatCardHarness
 */
export class CardHarnessExample {
}
CardHarnessExample.ɵfac = function CardHarnessExample_Factory(t) { return new (t || CardHarnessExample)(); };
CardHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardHarnessExample, selectors: [["card-harness-example"]], decls: 17, vars: 0, consts: [["mat-card-avatar", ""], ["mat-card-image", ""], ["mat-button", ""]], template: function CardHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card");
        i0.ɵɵelementStart(2, "mat-card-header");
        i0.ɵɵelement(3, "div", 0);
        i0.ɵɵelementStart(4, "mat-card-title");
        i0.ɵɵtext(5, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-card-subtitle");
        i0.ɵɵtext(7, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "div", 1);
        i0.ɵɵelementStart(9, "mat-card-content");
        i0.ɵɵelementStart(10, "p");
        i0.ɵɵtext(11, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-card-actions");
        i0.ɵɵelementStart(13, "button", 2);
        i0.ɵɵtext(14, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 2);
        i0.ɵɵtext(16, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard, i1.MatCardHeader, i1.MatCardAvatar, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardImage, i1.MatCardContent, i1.MatCardActions, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardHarnessExample, [{
        type: Component,
        args: [{ selector: 'card-harness-example', template: "<mat-card>\n</mat-card>\n<mat-card>\n  <mat-card-header>\n    <div mat-card-avatar></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <div mat-card-image></div>\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from\n      Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu\n      was originally bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtaGFybmVzcy9jYXJkLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1oYXJuZXNzL2NhcmQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ1QvQiwyQkFDVztRQUNYLGdDQUFVO1FBQ1IsdUNBQWlCO1FBQ2YseUJBQTJCO1FBQzNCLHNDQUFnQjtRQUFBLHlCQUFTO1FBQUEsaUJBQWlCO1FBQzFDLHlDQUFtQjtRQUFBLHlCQUFTO1FBQUEsaUJBQW9CO1FBQ2xELGlCQUFrQjtRQUNsQix5QkFBMEI7UUFDMUIsd0NBQWtCO1FBQ2hCLDBCQUFHO1FBQ0Qsa09BR0Y7UUFBQSxpQkFBSTtRQUNOLGlCQUFtQjtRQUNuQix5Q0FBa0I7UUFDaEIsa0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNoQyxrQ0FBbUI7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ25DLGlCQUFtQjtRQUNyQixpQkFBVzs7dUZEWEUsa0JBQWtCO2NBSjlCLFNBQVM7MkJBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0Q2FyZEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkSGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtY2FyZD5cbjwvbWF0LWNhcmQ+XG48bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBtYXQtY2FyZC1hdmF0YXI+PC9kaXY+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8ZGl2IG1hdC1jYXJkLWltYWdlPjwvZGl2PlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2cgZnJvbVxuICAgICAgSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnVcbiAgICAgIHdhcyBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuXG4gICAgPC9wPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG4iXX0=