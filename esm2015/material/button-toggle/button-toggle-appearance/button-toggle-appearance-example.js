import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle appearance
 */
export class ButtonToggleAppearanceExample {
}
ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
ButtonToggleAppearanceExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, " Default appearance: ");
        i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
        i0.ɵɵelementStart(3, "mat-button-toggle", 1);
        i0.ɵɵtext(4, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-button-toggle", 2);
        i0.ɵɵtext(6, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-button-toggle", 3);
        i0.ɵɵtext(8, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, " Legacy appearance: ");
        i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
        i0.ɵɵelementStart(12, "mat-button-toggle", 1);
        i0.ɵɵtext(13, "Bold");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-button-toggle", 2);
        i0.ɵɵtext(15, "Italic");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-button-toggle", 3);
        i0.ɵɵtext(17, "Underline");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
        type: Component,
        args: [{ selector: 'button-toggle-appearance-example', template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDZCQUE2Qjs7MEdBQTdCLDZCQUE2QjtnRkFBN0IsNkJBQTZCO1FDVjFDLHlCQUFHO1FBQ0QscUNBQ0E7UUFBQSxrREFBa0U7UUFDaEUsNENBQWdDO1FBQUEsb0JBQUk7UUFBQSxpQkFBb0I7UUFDeEQsNENBQWtDO1FBQUEsc0JBQU07UUFBQSxpQkFBb0I7UUFDNUQsNENBQXFDO1FBQUEseUJBQVM7UUFBQSxpQkFBb0I7UUFDcEUsaUJBQTBCO1FBQzVCLGlCQUFJO1FBRUoseUJBQUc7UUFDRCxxQ0FDQTtRQUFBLG1EQUFzRjtRQUNwRiw2Q0FBZ0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFvQjtRQUN4RCw2Q0FBa0M7UUFBQSx1QkFBTTtRQUFBLGlCQUFvQjtRQUM1RCw2Q0FBcUM7UUFBQSwwQkFBUztRQUFBLGlCQUFvQjtRQUNwRSxpQkFBMEI7UUFDNUIsaUJBQUk7O3VGRE5TLDZCQUE2QjtjQUx6QyxTQUFTOzJCQUNFLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBhcHBlYXJhbmNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVBcHBlYXJhbmNlRXhhbXBsZSB7fVxuIiwiPHA+XG4gIERlZmF1bHQgYXBwZWFyYW5jZTpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIG5hbWU9XCJmb250U3R5bGVcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L3A+XG5cbjxwPlxuICBMZWdhY3kgYXBwZWFyYW5jZTpcbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIGFwcGVhcmFuY2U9XCJsZWdhY3lcIiBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJib2xkXCI+Qm9sZDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaXRhbGljXCI+SXRhbGljPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9wPlxuIl19