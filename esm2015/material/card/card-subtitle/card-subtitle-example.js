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
        args: [{
                selector: 'card-subtitle-example',
                templateUrl: 'card-subtitle-example.html',
                styleUrls: ['card-subtitle-example.css']
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7O3NGQUpZLG1CQUFtQjtzRUFBbkIsbUJBQW1CO1FDVmhDLG1DQUErQjtRQUM3QixzQ0FBZ0I7UUFBQSx5QkFBUztRQUFBLGlCQUFpQjtRQUMxQyx5Q0FBbUI7UUFBQSx5QkFBUztRQUFBLGlCQUFvQjtRQUNoRCx3Q0FBa0I7UUFDaEIseUJBQUc7UUFBQSxzREFBc0M7UUFBQSxpQkFBSTtRQUM3Qyx5QkFBRztRQUFBLFlBQVk7UUFBQSxpQkFBSTtRQUNyQixpQkFBbUI7UUFDbkIseUNBQWtCO1FBQ2hCLGtDQUFtQjtRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDaEMsa0NBQW1CO1FBQUEsc0JBQUs7UUFBQSxpQkFBUztRQUNuQyxpQkFBbUI7UUFDckIsaUJBQVc7O1FBTkosZUFBWTtRQUFaLGtDQUFZOzt1RkRLTixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggc3ViLXRpdGxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtc3VidGl0bGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcmRTdWJ0aXRsZUV4YW1wbGUge1xuICBsb25nVGV4dCA9IGBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nXG4gIGZyb20gSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnUgd2FzXG4gIG9yaWdpbmFsbHkgYnJlZCBmb3IgaHVudGluZy5gO1xufVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICA8bWF0LWNhcmQtc3VidGl0bGU+RG9nIEJyZWVkPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPHA+VGhpcyBjYXJkIGluZGV0ZXJtaW5hdGVzIHByb2dyZXNzIGJhci48L3A+XG4gICAgPHA+e3tsb25nVGV4dH19PC9wPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+Il19