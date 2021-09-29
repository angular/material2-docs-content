import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle selection mode
 */
export class ButtonToggleModeExample {
}
ButtonToggleModeExample.ɵfac = function ButtonToggleModeExample_Factory(t) { return new (t || ButtonToggleModeExample)(); };
ButtonToggleModeExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleModeExample, selectors: [["button-toggle-mode-example"]], decls: 18, vars: 0, consts: [["name", "favoriteColor", "aria-label", "Favorite Color"], ["value", "red"], ["value", "green"], ["value", "blue"], ["name", "ingredients", "aria-label", "Ingredients", "multiple", ""], ["value", "flour"], ["value", "eggs"], ["value", "sugar"]], template: function ButtonToggleModeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h3");
        i0.ɵɵtext(1, "Single selection");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(3, "mat-button-toggle", 1);
        i0.ɵɵtext(4, "Red");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6, "Green");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-button-toggle", 3);
        i0.ɵɵtext(8, "Blue");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "h3");
        i0.ɵɵtext(10, "Multiple selection");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(12, "mat-button-toggle", 5);
        i0.ɵɵtext(13, "Flour");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 6);
        i0.ɵɵtext(15, "Eggs");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-button-toggle", 7);
        i0.ɵɵtext(17, "Sugar");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleModeExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-mode-example', template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtbW9kZS9idXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1tb2RlL2J1dHRvbi10b2dnbGUtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHVCQUF1Qjs7OEZBQXZCLHVCQUF1QjswRUFBdkIsdUJBQXVCO1FDVHBDLDBCQUFJO1FBQUEsZ0NBQWdCO1FBQUEsaUJBQUs7UUFDekIsa0RBQTBFO1FBQ3hFLDRDQUErQjtRQUFBLG1CQUFHO1FBQUEsaUJBQW9CO1FBQ3RELDRDQUFpQztRQUFBLHFCQUFLO1FBQUEsaUJBQW9CO1FBQzFELDRDQUFnQztRQUFBLG9CQUFJO1FBQUEsaUJBQW9CO1FBQzFELGlCQUEwQjtRQUUxQiwwQkFBSTtRQUFBLG1DQUFrQjtRQUFBLGlCQUFLO1FBQzNCLG1EQUE4RTtRQUM1RSw2Q0FBaUM7UUFBQSxzQkFBSztRQUFBLGlCQUFvQjtRQUMxRCw2Q0FBZ0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFvQjtRQUN4RCw2Q0FBaUM7UUFBQSxzQkFBSztRQUFBLGlCQUFvQjtRQUM1RCxpQkFBMEI7O3VGREhiLHVCQUF1QjtjQUpuQyxTQUFTOzJCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBzZWxlY3Rpb24gbW9kZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZU1vZGVFeGFtcGxlIHt9XG4iLCI8aDM+U2luZ2xlIHNlbGVjdGlvbjwvaDM+XG48bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbmFtZT1cImZhdm9yaXRlQ29sb3JcIiBhcmlhLWxhYmVsPVwiRmF2b3JpdGUgQ29sb3JcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicmVkXCI+UmVkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZ3JlZW5cIj5HcmVlbjwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJsdWVcIj5CbHVlPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG5cbjxoMz5NdWx0aXBsZSBzZWxlY3Rpb248L2gzPlxuPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG5hbWU9XCJpbmdyZWRpZW50c1wiIGFyaWEtbGFiZWw9XCJJbmdyZWRpZW50c1wiIG11bHRpcGxlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJmbG91clwiPkZsb3VyPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZWdnc1wiPkVnZ3M8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJzdWdhclwiPlN1Z2FyPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbjwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4iXX0=