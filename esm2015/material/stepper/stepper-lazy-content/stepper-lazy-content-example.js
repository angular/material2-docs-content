import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/stepper";
import * as i2 from "@angular/material/button";
function StepperLazyContentExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 1");
} }
function StepperLazyContentExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "This content was rendered lazily");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵtext(3, "Next");
    i0.ɵɵelementEnd();
} }
function StepperLazyContentExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 2");
} }
function StepperLazyContentExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "This content was also rendered lazily");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 3);
    i0.ɵɵtext(3, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵtext(5, "Next");
    i0.ɵɵelementEnd();
} }
function StepperLazyContentExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Step 3");
} }
/**
 * @title Stepper lazy content rendering
 */
export class StepperLazyContentExample {
}
StepperLazyContentExample.ɵfac = function StepperLazyContentExample_Factory(t) { return new (t || StepperLazyContentExample)(); };
StepperLazyContentExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperLazyContentExample, selectors: [["stepper-lazy-content-example"]], decls: 13, vars: 0, consts: [["orientation", "vertical"], ["matStepLabel", ""], ["matStepContent", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""]], template: function StepperLazyContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-stepper", 0);
        i0.ɵɵelementStart(1, "mat-step");
        i0.ɵɵtemplate(2, StepperLazyContentExample_ng_template_2_Template, 1, 0, "ng-template", 1);
        i0.ɵɵtemplate(3, StepperLazyContentExample_ng_template_3_Template, 4, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-step");
        i0.ɵɵtemplate(5, StepperLazyContentExample_ng_template_5_Template, 1, 0, "ng-template", 1);
        i0.ɵɵtemplate(6, StepperLazyContentExample_ng_template_6_Template, 6, 0, "ng-template", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-step");
        i0.ɵɵtemplate(8, StepperLazyContentExample_ng_template_8_Template, 1, 0, "ng-template", 1);
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "This content was rendered eagerly");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 3);
        i0.ɵɵtext(12, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatStepper, i1.MatStep, i1.MatStepLabel, i1.MatStepContent, i2.MatButton, i1.MatStepperPrevious, i1.MatStepperNext], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperLazyContentExample, [{
        type: Component,
        args: [{ selector: 'stepper-lazy-content-example', template: "<mat-stepper orientation=\"vertical\">\n  <mat-step>\n    <ng-template matStepLabel>Step 1</ng-template>\n    <ng-template matStepContent>\n      <p>This content was rendered lazily</p>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 2</ng-template>\n    <ng-template matStepContent>\n      <p>This content was also rendered lazily</p>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button matStepperNext>Next</button>\n    </ng-template>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Step 3</ng-template>\n    <p>This content was rendered eagerly</p>\n    <button mat-button matStepperPrevious>Back</button>\n  </mat-step>\n</mat-stepper>\n", styles: ["/** No CSS for this example */\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRVYsc0JBQU07OztJQUU5Qix5QkFBRztJQUFBLGdEQUFnQztJQUFBLGlCQUFJO0lBQ3ZDLGlDQUFrQztJQUFBLG9CQUFJO0lBQUEsaUJBQVM7OztJQUl2QixzQkFBTTs7O0lBRTlCLHlCQUFHO0lBQUEscURBQXFDO0lBQUEsaUJBQUk7SUFDNUMsaUNBQXNDO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUNuRCxpQ0FBa0M7SUFBQSxvQkFBSTtJQUFBLGlCQUFTOzs7SUFJdkIsc0JBQU07O0FEZnBDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs0RUFBekIseUJBQXlCO1FDVnRDLHNDQUFvQztRQUNsQyxnQ0FBVTtRQUNSLDBGQUE4QztRQUM5QywwRkFHYztRQUNoQixpQkFBVztRQUNYLGdDQUFVO1FBQ1IsMEZBQThDO1FBQzlDLDBGQUljO1FBQ2hCLGlCQUFXO1FBQ1gsZ0NBQVU7UUFDUiwwRkFBOEM7UUFDOUMseUJBQUc7UUFBQSxrREFBaUM7UUFBQSxpQkFBSTtRQUN4QyxrQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3JELGlCQUFXO1FBQ2IsaUJBQWM7O3VGRFhELHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciBsYXp5IGNvbnRlbnQgcmVuZGVyaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItbGF6eS1jb250ZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItbGF6eS1jb250ZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWxhenktY29udGVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyTGF6eUNvbnRlbnRFeGFtcGxlIHt9XG4iLCI8bWF0LXN0ZXBwZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5TdGVwIDE8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwQ29udGVudD5cbiAgICAgIDxwPlRoaXMgY29udGVudCB3YXMgcmVuZGVyZWQgbGF6aWx5PC9wPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5TdGVwIDI8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwQ29udGVudD5cbiAgICAgIDxwPlRoaXMgY29udGVudCB3YXMgYWxzbyByZW5kZXJlZCBsYXppbHk8L3A+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+U3RlcCAzPC9uZy10ZW1wbGF0ZT5cbiAgICA8cD5UaGlzIGNvbnRlbnQgd2FzIHJlbmRlcmVkIGVhZ2VybHk8L3A+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19