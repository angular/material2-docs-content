import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
/**
 * @title Testing with MatToolbarHarness
 */
export class ToolbarHarnessExample {
}
ToolbarHarnessExample.ɵfac = function ToolbarHarnessExample_Factory(t) { return new (t || ToolbarHarnessExample)(); };
ToolbarHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarHarnessExample, selectors: [["toolbar-harness-example"]], decls: 14, vars: 0, consts: [["mat-button", ""]], template: function ToolbarHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-toolbar");
        i0.ɵɵelementStart(4, "mat-toolbar-row");
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6, "Row 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-toolbar-row");
        i0.ɵɵelementStart(8, "span");
        i0.ɵɵtext(9, "Row 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 0);
        i0.ɵɵtext(11, " Button 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 0);
        i0.ɵɵtext(13, " Button 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatButton], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarHarnessExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-harness-example',
                templateUrl: 'toolbar-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL3Rvb2xiYXItaGFybmVzcy90b29sYmFyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1oYXJuZXNzL3Rvb2xiYXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1RsQyxtQ0FBYTtRQUFBLDRCQUFNO1FBQUEsc0JBQU07UUFBQSxpQkFBTztRQUFBLGlCQUFjO1FBQzlDLG1DQUNFO1FBQUEsdUNBQWlCO1FBQUEsNEJBQU07UUFBQSxxQkFBSztRQUFBLGlCQUFPO1FBQUEsaUJBQWtCO1FBQ3JELHVDQUFpQjtRQUFBLDRCQUFNO1FBQUEscUJBQUs7UUFBQSxpQkFBTztRQUNqQyxrQ0FDRTtRQUFBLDJCQUNGO1FBQUEsaUJBQVM7UUFDVCxrQ0FDRTtRQUFBLDJCQUNGO1FBQUEsaUJBQVM7UUFDWCxpQkFBa0I7UUFDcEIsaUJBQWM7O3VGREZELHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRvb2xiYXJIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LXRvb2xiYXI+PHNwYW4+TXkgQXBwPC9zcGFuPjwvbWF0LXRvb2xiYXI+XG48bWF0LXRvb2xiYXI+XG4gIDxtYXQtdG9vbGJhci1yb3c+PHNwYW4+Um93IDE8L3NwYW4+PC9tYXQtdG9vbGJhci1yb3c+XG4gIDxtYXQtdG9vbGJhci1yb3c+PHNwYW4+Um93IDI8L3NwYW4+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlxuICAgICAgQnV0dG9uIDFcbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+XG4gICAgICBCdXR0b24gMlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=