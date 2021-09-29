import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/stepper";
function StepperHarnessExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "One");
} }
function StepperHarnessExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Two");
} }
function StepperHarnessExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Three");
} }
/**
 * @title Testing with MatStepperHarness
 */
export class StepperHarnessExample {
}
StepperHarnessExample.ɵfac = function StepperHarnessExample_Factory(t) { return new (t || StepperHarnessExample)(); };
StepperHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-stepper");
        i0.ɵɵelementStart(1, "mat-step");
        i0.ɵɵtemplate(2, StepperHarnessExample_ng_template_2_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵtext(4, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-step", 2);
        i0.ɵɵtemplate(6, StepperHarnessExample_ng_template_6_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(7, "button", 3);
        i0.ɵɵtext(8, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 1);
        i0.ɵɵtext(10, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-step", 2);
        i0.ɵɵtemplate(12, StepperHarnessExample_ng_template_12_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(13, "button", 3);
        i0.ɵɵtext(14, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatStepper, i1.MatStep, i1.MatStepLabel, i1.MatStepperNext, i1.MatStepperPrevious], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperHarnessExample, [{
        type: Component,
        args: [{ selector: 'stepper-harness-example', template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1oYXJuZXNzL3N0ZXBwZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0VWLG1CQUFHOzs7SUFJSCxtQkFBRzs7O0lBS0gscUJBQUs7O0FEVG5DOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt3RUFBckIscUJBQXFCO1FDVGxDLG1DQUFhO1FBQ1gsZ0NBQVU7UUFDUixzRkFBMkM7UUFDM0MsaUNBQXVCO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUN0QyxpQkFBVztRQUNYLG1DQUFtQjtRQUNqQixzRkFBMkM7UUFDM0MsaUNBQTJCO1FBQUEsd0JBQVE7UUFBQSxpQkFBUztRQUM1QyxpQ0FBdUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3RDLGlCQUFXO1FBQ1gsb0NBQW1CO1FBQ2pCLHdGQUE2QztRQUM3QyxrQ0FBMkI7UUFBQSx5QkFBUTtRQUFBLGlCQUFTO1FBQzlDLGlCQUFXO1FBQ2IsaUJBQWM7O3VGRExELHFCQUFxQjtjQUpqQyxTQUFTOzJCQUNFLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFN0ZXBwZXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LXN0ZXBwZXI+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPk9uZTwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBvcHRpb25hbD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlR3bzwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+UHJldmlvdXM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIG9wdGlvbmFsPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+VGhyZWU8L25nLXRlbXBsYXRlPlxuICAgIDxidXR0b24gbWF0U3RlcHBlclByZXZpb3VzPlByZXZpb3VzPC9idXR0b24+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19