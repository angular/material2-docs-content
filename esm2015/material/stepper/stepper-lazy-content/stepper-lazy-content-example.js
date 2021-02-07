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
    i0.ɵɵelementStart(2, "button", 3);
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
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵtext(3, "Back");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 3);
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
StepperLazyContentExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperLazyContentExample, selectors: [["stepper-lazy-content-example"]], decls: 13, vars: 0, consts: [["matStepLabel", ""], ["matStepContent", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", "matStepperNext", ""]], template: function StepperLazyContentExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-vertical-stepper");
        i0.ɵɵelementStart(1, "mat-step");
        i0.ɵɵtemplate(2, StepperLazyContentExample_ng_template_2_Template, 1, 0, "ng-template", 0);
        i0.ɵɵtemplate(3, StepperLazyContentExample_ng_template_3_Template, 4, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-step");
        i0.ɵɵtemplate(5, StepperLazyContentExample_ng_template_5_Template, 1, 0, "ng-template", 0);
        i0.ɵɵtemplate(6, StepperLazyContentExample_ng_template_6_Template, 6, 0, "ng-template", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-step");
        i0.ɵɵtemplate(8, StepperLazyContentExample_ng_template_8_Template, 1, 0, "ng-template", 0);
        i0.ɵɵelementStart(9, "p");
        i0.ɵɵtext(10, "This content was rendered eagerly");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 2);
        i0.ɵɵtext(12, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatVerticalStepper, i1.MatStep, i1.MatStepLabel, i1.MatStepContent, i2.MatButton, i1.MatStepperPrevious, i1.MatStepperNext], styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperLazyContentExample, [{
        type: Component,
        args: [{
                selector: 'stepper-lazy-content-example',
                templateUrl: 'stepper-lazy-content-example.html',
                styleUrls: ['stepper-lazy-content-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDRVYsc0JBQU07OztJQUU5Qix5QkFBRztJQUFBLGdEQUFnQztJQUFBLGlCQUFJO0lBQ3ZDLGlDQUFrQztJQUFBLG9CQUFJO0lBQUEsaUJBQVM7OztJQUl2QixzQkFBTTs7O0lBRTlCLHlCQUFHO0lBQUEscURBQXFDO0lBQUEsaUJBQUk7SUFDNUMsaUNBQXNDO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUNuRCxpQ0FBa0M7SUFBQSxvQkFBSTtJQUFBLGlCQUFTOzs7SUFJdkIsc0JBQU07O0FEZnBDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs4REFBekIseUJBQXlCO1FDVnRDLDRDQUNFO1FBQUEsZ0NBQ0U7UUFBQSwwRkFBOEM7UUFDOUMsMEZBR2M7UUFDaEIsaUJBQVc7UUFDWCxnQ0FDRTtRQUFBLDBGQUE4QztRQUM5QywwRkFJYztRQUNoQixpQkFBVztRQUNYLGdDQUNFO1FBQUEsMEZBQThDO1FBQzlDLHlCQUFHO1FBQUEsa0RBQWlDO1FBQUEsaUJBQUk7UUFDeEMsa0NBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNyRCxpQkFBVztRQUNiLGlCQUF1Qjs7dUZEWFYseUJBQXlCO2NBTHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciBsYXp5IGNvbnRlbnQgcmVuZGVyaW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItbGF6eS1jb250ZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItbGF6eS1jb250ZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWxhenktY29udGVudC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyTGF6eUNvbnRlbnRFeGFtcGxlIHt9XG4iLCI8bWF0LXZlcnRpY2FsLXN0ZXBwZXI+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlN0ZXAgMTwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBDb250ZW50PlxuICAgICAgPHA+VGhpcyBjb250ZW50IHdhcyByZW5kZXJlZCBsYXppbHk8L3A+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPlN0ZXAgMjwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBDb250ZW50PlxuICAgICAgPHA+VGhpcyBjb250ZW50IHdhcyBhbHNvIHJlbmRlcmVkIGxhemlseTwvcD5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5TdGVwIDM8L25nLXRlbXBsYXRlPlxuICAgIDxwPlRoaXMgY29udGVudCB3YXMgcmVuZGVyZWQgZWFnZXJseTwvcD5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXZlcnRpY2FsLXN0ZXBwZXI+XG4iXX0=