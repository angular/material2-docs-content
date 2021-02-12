import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Testing with MatTabGroupHarness
 */
export class TabGroupHarnessExample {
}
TabGroupHarnessExample.ɵfac = function TabGroupHarnessExample_Factory(t) { return new (t || TabGroupHarnessExample)(); };
TabGroupHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupHarnessExample, selectors: [["tab-group-harness-example"]], decls: 10, vars: 0, consts: [["label", "Profile", "aria-label", "Profile tab"], [1, "test-tab-content"], ["label", "Settings", "aria-label", "Settings tab"], ["label", "FAQ", "aria-label", "FAQ tab"]], template: function TabGroupHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group");
        i0.ɵɵelementStart(1, "mat-tab", 0);
        i0.ɵɵelementStart(2, "span", 1);
        i0.ɵɵtext(3, "Your personal information");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-tab", 2);
        i0.ɵɵelementStart(5, "span", 1);
        i0.ɵɵtext(6, "Privacy settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-tab", 3);
        i0.ɵɵelementStart(8, "span", 1);
        i0.ɵɵtext(9, "How to update profile picture");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupHarnessExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-harness-example',
                templateUrl: 'tab-group-harness-example.html'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhhcm5lc3MvdGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWhhcm5lc3MvdGFiLWdyb3VwLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1RuQyxxQ0FBZTtRQUNiLGtDQUFrRDtRQUNoRCwrQkFBK0I7UUFBQSx5Q0FBeUI7UUFBQSxpQkFBTztRQUNqRSxpQkFBVTtRQUNWLGtDQUFvRDtRQUNsRCwrQkFBK0I7UUFBQSxnQ0FBZ0I7UUFBQSxpQkFBTztRQUN4RCxpQkFBVTtRQUNWLGtDQUEwQztRQUN4QywrQkFBK0I7UUFBQSw2Q0FBNkI7UUFBQSxpQkFBTztRQUNyRSxpQkFBVTtRQUNaLGlCQUFnQjs7dUZEREgsc0JBQXNCO2NBSmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0VGFiR3JvdXBIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1oYXJuZXNzLWV4YW1wbGUuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiIGxhYmVsPVwiUHJvZmlsZVwiIGFyaWEtbGFiZWw9XCJQcm9maWxlIHRhYlwiPlxuICAgIDxzcGFuIGNsYXNzPVwidGVzdC10YWItY29udGVudFwiPllvdXIgcGVyc29uYWwgaW5mb3JtYXRpb248L3NwYW4+XG4gIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZXR0aW5nc1wiIGFyaWEtbGFiZWw9XCJTZXR0aW5ncyB0YWJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRlc3QtdGFiLWNvbnRlbnRcIj5Qcml2YWN5IHNldHRpbmdzPC9zcGFuPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRkFRXCIgYXJpYS1sYWJlbD1cIkZBUSB0YWJcIj5cbiAgICA8c3BhbiBjbGFzcz1cInRlc3QtdGFiLWNvbnRlbnRcIj5Ib3cgdG8gdXBkYXRlIHByb2ZpbGUgcGljdHVyZTwvc3Bhbj5cbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19