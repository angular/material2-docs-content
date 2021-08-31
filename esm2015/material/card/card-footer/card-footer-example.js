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
        args: [{
                selector: 'card-footer-example',
                templateUrl: 'card-footer-example.html',
                styleUrls: ['card-footer-example.css']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFNRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9COztrRkFKWSxpQkFBaUI7b0VBQWpCLGlCQUFpQjtRQ1Y5QixtQ0FBK0I7UUFDN0IseUNBQW1CO1FBQUEseUJBQVM7UUFBQSxpQkFBb0I7UUFDaEQsc0NBQWdCO1FBQUEseUJBQVM7UUFBQSxpQkFBaUI7UUFDMUMsd0NBQWtCO1FBQ2hCLHlCQUFHO1FBQUEsMEVBQTBEO1FBQUEsaUJBQUk7UUFDakUseUJBQUc7UUFBQSxZQUFjO1FBQUEsaUJBQUk7UUFDdkIsaUJBQW1CO1FBQ25CLGtDQUFpQztRQUNqQyx5Q0FBa0I7UUFDaEIsa0NBQW1CO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNoQyxrQ0FBbUI7UUFBQSxzQkFBSztRQUFBLGlCQUFTO1FBQ25DLGlCQUFtQjtRQUNuQix3Q0FBaUI7UUFDZix1Q0FBMEQ7UUFDNUQsaUJBQWtCO1FBQ3BCLGlCQUFXOztRQVZKLGVBQWM7UUFBZCxrQ0FBYzs7dUZES1IsaUJBQWlCO2NBTDdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixXQUFXLEVBQUUsMEJBQTBCO2dCQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzthQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ2FyZCB3aXRoIGZvb3RlclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLWZvb3Rlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLWZvb3Rlci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FyZC1mb290ZXItZXhhbXBsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRm9vdGVyRXhhbXBsZSB7XG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcbiAgZnJvbSBKYXBhbi4gQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXNcbiAgb3JpZ2luYWxseSBicmVkIGZvciBodW50aW5nLmA7XG59XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5UaGlzIGNhcmQgaGFzIGRpdmlkZXIgYW5kIGluZGV0ZXJtaW5hdGUgcHJvZ3Jlc3MgYXMgZm9vdGVyPC9wPlxuICAgIDxwPnt7IGxvbmdUZXh0IH19PC9wPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gIDxtYXQtZGl2aWRlciBpbnNldD48L21hdC1kaXZpZGVyPlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gIDxtYXQtY2FyZC1mb290ZXI+XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gIDwvbWF0LWNhcmQtZm9vdGVyPlxuPC9tYXQtY2FyZD4iXX0=