import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/progress-bar";
/**
 * @title Card with footer
 */
export class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
}
CardFooterExample.ɵfac = function CardFooterExample_Factory(t) { return new (t || CardFooterExample)(); };
CardFooterExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardFooterExample, selectors: [["card-footer-example"]], decls: 18, vars: 1, consts: [[1, "example-card"], ["inset", ""], ["mat-button", ""], ["mode", "indeterminate"]], template: function CardFooterExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card", 0);
        i0.ɵɵelementStart(1, "mat-card-subtitle");
        i0.ɵɵtext(2, "Dog Breed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-title");
        i0.ɵɵtext(4, "Shiba Inu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-content");
        i0.ɵɵelementStart(6, "p");
        i0.ɵɵtext(7, "This card has divider and indeterminate progress as footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "p");
        i0.ɵɵtext(9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "mat-divider", 1);
        i0.ɵɵelementStart(11, "mat-card-actions");
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵtext(13, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "button", 2);
        i0.ɵɵtext(15, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-footer");
        i0.ɵɵelement(17, "mat-progress-bar", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(9);
        i0.ɵɵtextInterpolate(ctx.longText);
    } }, directives: [i1.MatCard, i1.MatCardSubtitle, i1.MatCardTitle, i1.MatCardContent, i2.MatDivider, i1.MatCardActions, i3.MatButton, i1.MatCardFooter, i4.MatProgressBar], styles: [".example-card[_ngcontent-%COMP%] {\n  max-width: 400px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardFooterExample, [{
        type: Component,
        args: [{ selector: 'card-footer-example', template: "<mat-card class=\"example-card\">\n  <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  <mat-card-title>Shiba Inu</mat-card-title>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n  </mat-card-content>\n  <mat-divider inset></mat-divider>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFNRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9COztrRkFKWSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ1Y5QixtQ0FBK0I7UUFDN0IseUNBQW1CO1FBQUEseUJBQVM7UUFBQSxpQkFBb0I7UUFDaEQsc0NBQWdCO1FBQUEseUJBQVM7UUFBQSxpQkFBaUI7UUFDMUMsd0NBQWtCO1FBQ2hCLHlCQUFHO1FBQUEsMEVBQTBEO1FBQUEsaUJBQUk7UUFDakUseUJBQUc7UUFBQSxZQUFjO1FBQUEsaUJBQUk7UUFDdkIsaUJBQW1CO1FBQ25CLGtDQUFpQztRQUNqQyx5Q0FBa0I7UUFDaEIsa0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNoQyxrQ0FBbUI7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ25DLGlCQUFtQjtRQUNuQix3Q0FBaUI7UUFDZix1Q0FBMEQ7UUFDNUQsaUJBQWtCO1FBQ3BCLGlCQUFXOztRQVZKLGVBQWM7UUFBZCxrQ0FBYzs7dUZES1IsaUJBQWlCO2NBTDdCLFNBQVM7MkJBQ0UscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggZm9vdGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtZm9vdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLWZvb3Rlci1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGb290ZXJFeGFtcGxlIHtcbiAgbG9uZ1RleHQgPSBgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZ1xuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xuICBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuYDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gIDxtYXQtY2FyZC1jb250ZW50PlxuICAgIDxwPlRoaXMgY2FyZCBoYXMgZGl2aWRlciBhbmQgaW5kZXRlcm1pbmF0ZSBwcm9ncmVzcyBhcyBmb290ZXI8L3A+XG4gICAgPHA+e3sgbG9uZ1RleHQgfX08L3A+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1kaXZpZGVyIGluc2V0PjwvbWF0LWRpdmlkZXI+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbiAgPG1hdC1jYXJkLWZvb3Rlcj5cbiAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiAgPC9tYXQtY2FyZC1mb290ZXI+XG48L21hdC1jYXJkPiJdfQ==