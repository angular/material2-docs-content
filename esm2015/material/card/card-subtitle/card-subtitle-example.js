import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with sub-title
 */
export class CardSubtitleExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardSubtitleExample.ɵfac = function CardSubtitleExample_Factory(t) { return new (t || CardSubtitleExample)(); };
CardSubtitleExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardSubtitleExample, selectors: [["card-subtitle-example"]], decls: 15, vars: 1, consts: [[1, "example-card"], ["mat-button", ""]], template: function CardSubtitleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-title");
        i0.ɵɵtext(2, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-subtitle");
        i0.ɵɵtext(4, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-content");
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "This card indeterminates progress bar.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-card-actions");
        i0.ɵɵelementStart(11, "button", 1);
        i0.ɵɵtext(12, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 1);
        i0.ɵɵtext(14, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate(ctx.longText);
    } }, directives: [i1.MatCard, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardContent, i1.MatCardActions, i2.MatButton], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardSubtitleExample, [{
        type: Component,
        args: [{ selector: 'card-subtitle-example', template: "<mat-card class=\"example-card\">\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O3NGQUpZLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDVmhDLG1DQUErQjtRQUM3QixzQ0FBZ0I7UUFBQSx5QkFBUztRQUFBLGlCQUFpQjtRQUMxQyx5Q0FBbUI7UUFBQSx5QkFBUztRQUFBLGlCQUFvQjtRQUNoRCx3Q0FBa0I7UUFDaEIseUJBQUc7UUFBQSxzREFBc0M7UUFBQSxpQkFBSTtRQUM3Qyx5QkFBRztRQUFBLFlBQVk7UUFBQSxpQkFBSTtRQUNyQixpQkFBbUI7UUFDbkIseUNBQWtCO1FBQ2hCLGtDQUFtQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDaEMsa0NBQW1CO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNuQyxpQkFBbUI7UUFDckIsaUJBQVc7O1FBTkosZUFBWTtRQUFaLGtDQUFZOzt1RkRLTixtQkFBbUI7Y0FML0IsU0FBUzsyQkFDRSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBzdWItdGl0bGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1zdWJ0aXRsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLXN1YnRpdGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLXN1YnRpdGxlLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FyZFN1YnRpdGxlRXhhbXBsZSB7XG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcbiAgZnJvbSBKYXBhbi4gQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXNcbiAgb3JpZ2luYWxseSBicmVkIGZvciBodW50aW5nLmA7XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gIDxtYXQtY2FyZC1zdWJ0aXRsZT5Eb2cgQnJlZWQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5UaGlzIGNhcmQgaW5kZXRlcm1pbmF0ZXMgcHJvZ3Jlc3MgYmFyLjwvcD5cbiAgICA8cD57e2xvbmdUZXh0fX08L3A+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD4iXX0=