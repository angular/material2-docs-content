import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with actions alignment option
 */
export class CardActionsExample {
}
CardActionsExample.ɵfac = function CardActionsExample_Factory(t) { return new (t || CardActionsExample)(); };
CardActionsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CardActionsExample, selectors: [["card-actions-example"]], decls: 21, vars: 0, consts: [["mat-button", ""], ["align", "end"]], template: function CardActionsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-card");
        i0.ɵɵelementStart(1, "mat-card-title");
        i0.ɵɵtext(2, "Actions Buttons");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-card-subtitle");
        i0.ɵɵtext(4, "Start");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-card-actions");
        i0.ɵɵelementStart(6, "button", 0);
        i0.ɵɵtext(7, "LIKE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "button", 0);
        i0.ɵɵtext(9, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "br");
        i0.ɵɵelementStart(11, "mat-card");
        i0.ɵɵelementStart(12, "mat-card-title");
        i0.ɵɵtext(13, "Actions Buttons");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-card-subtitle");
        i0.ɵɵtext(15, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-card-actions", 1);
        i0.ɵɵelementStart(17, "button", 0);
        i0.ɵɵtext(18, "Like");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "button", 0);
        i0.ɵɵtext(20, "SHARE");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatCard, i1.MatCardTitle, i1.MatCardSubtitle, i1.MatCardActions, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CardActionsExample, [{
        type: Component,
        args: [{ selector: 'card-actions-example', template: "<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>Start</mat-card-subtitle>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-title>Actions Buttons</mat-card-title>\n  <mat-card-subtitle>End</mat-card-subtitle>\n  <mat-card-actions align=\"end\">\n    <button mat-button>Like</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtYWN0aW9ucy9jYXJkLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1hY3Rpb25zL2NhcmQtYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7O29GQUFsQixrQkFBa0I7cUVBQWxCLGtCQUFrQjtRQ1QvQixnQ0FBVTtRQUNSLHNDQUFnQjtRQUFBLCtCQUFlO1FBQUEsaUJBQWlCO1FBQ2hELHlDQUFtQjtRQUFBLHFCQUFLO1FBQUEsaUJBQW9CO1FBQzVDLHdDQUFrQjtRQUNoQixpQ0FBbUI7UUFBQSxvQkFBSTtRQUFBLGlCQUFTO1FBQ2hDLGlDQUFtQjtRQUFBLHFCQUFLO1FBQUEsaUJBQVM7UUFDbkMsaUJBQW1CO1FBQ3JCLGlCQUFXO1FBQ1gsc0JBQUk7UUFDSixpQ0FBVTtRQUNSLHVDQUFnQjtRQUFBLGdDQUFlO1FBQUEsaUJBQWlCO1FBQ2hELDBDQUFtQjtRQUFBLG9CQUFHO1FBQUEsaUJBQW9CO1FBQzFDLDRDQUE4QjtRQUM1QixrQ0FBbUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2hDLGtDQUFtQjtRQUFBLHNCQUFLO1FBQUEsaUJBQVM7UUFDbkMsaUJBQW1CO1FBQ3JCLGlCQUFXOzt1RkRQRSxrQkFBa0I7Y0FKOUIsU0FBUzsyQkFDRSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBhY3Rpb25zIGFsaWdubWVudCBvcHRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1hY3Rpb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtYWN0aW9ucy1leGFtcGxlLmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIENhcmRBY3Rpb25zRXhhbXBsZSB7fVxuIiwiPG1hdC1jYXJkPlxuICA8bWF0LWNhcmQtdGl0bGU+QWN0aW9ucyBCdXR0b25zPC9tYXQtY2FyZC10aXRsZT5cbiAgPG1hdC1jYXJkLXN1YnRpdGxlPlN0YXJ0PC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbjxicj5cbjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLXRpdGxlPkFjdGlvbnMgQnV0dG9uczwvbWF0LWNhcmQtdGl0bGU+XG4gIDxtYXQtY2FyZC1zdWJ0aXRsZT5FbmQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MaWtlPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+Il19