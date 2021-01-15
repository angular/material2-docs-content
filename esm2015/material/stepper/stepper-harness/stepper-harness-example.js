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
StepperHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperHarnessExample, selectors: [["stepper-harness-example"]], decls: 15, vars: 0, consts: [["matStepLabel", ""], ["matStepperNext", ""], ["optional", ""], ["matStepperPrevious", ""]], template: function StepperHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-horizontal-stepper");
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
    } }, directives: [i1.MatHorizontalStepper, i1.MatStep, i1.MatStepLabel, i1.MatStepperNext, i1.MatStepperPrevious], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperHarnessExample, [{
        type: Component,
        args: [{
                selector: 'stepper-harness-example',
                templateUrl: 'stepper-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1oYXJuZXNzL3N0ZXBwZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ0VWLG1CQUFHOzs7SUFJSCxtQkFBRzs7O0lBS0gscUJBQUs7O0FEVG5DOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjswREFBckIscUJBQXFCO1FDVGxDLDhDQUNFO1FBQUEsZ0NBQ0U7UUFBQSxzRkFBMkM7UUFDM0MsaUNBQXVCO1FBQUEsb0JBQUk7UUFBQSxpQkFBUztRQUN0QyxpQkFBVztRQUNYLG1DQUNFO1FBQUEsc0ZBQTJDO1FBQzNDLGlDQUEyQjtRQUFBLHdCQUFRO1FBQUEsaUJBQVM7UUFDNUMsaUNBQXVCO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUN0QyxpQkFBVztRQUNYLG9DQUNFO1FBQUEsd0ZBQTZDO1FBQzdDLGtDQUEyQjtRQUFBLHlCQUFRO1FBQUEsaUJBQVM7UUFDOUMsaUJBQVc7UUFDYixpQkFBeUI7O2tERExaLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFN0ZXBwZXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+T25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIG9wdGlvbmFsPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+VHdvPC9uZy10ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5QcmV2aW91czwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgb3B0aW9uYWw+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5UaHJlZTwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+UHJldmlvdXM8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==