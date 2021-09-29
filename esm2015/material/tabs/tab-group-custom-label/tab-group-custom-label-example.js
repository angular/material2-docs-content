import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/material/icon";
function TabGroupCustomLabelExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " First ");
} }
function TabGroupCustomLabelExample_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Second ");
} }
function TabGroupCustomLabelExample_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-icon", 1);
    i0.ɵɵtext(1, "thumb_up");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " Third ");
} }
/**
 * @title Using tabs with a custom label template
 */
export class TabGroupCustomLabelExample {
}
TabGroupCustomLabelExample.ɵfac = function TabGroupCustomLabelExample_Factory(t) { return new (t || TabGroupCustomLabelExample)(); };
TabGroupCustomLabelExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupCustomLabelExample, selectors: [["tab-group-custom-label-example"]], decls: 10, vars: 0, consts: [["mat-tab-label", ""], [1, "example-tab-icon"]], template: function TabGroupCustomLabelExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group");
        i0.ɵɵelementStart(1, "mat-tab");
        i0.ɵɵtemplate(2, TabGroupCustomLabelExample_ng_template_2_Template, 3, 0, "ng-template", 0);
        i0.ɵɵtext(3, " Content 1 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-tab");
        i0.ɵɵtemplate(5, TabGroupCustomLabelExample_ng_template_5_Template, 3, 0, "ng-template", 0);
        i0.ɵɵtext(6, " Content 2 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-tab");
        i0.ɵɵtemplate(8, TabGroupCustomLabelExample_ng_template_8_Template, 3, 0, "ng-template", 0);
        i0.ɵɵtext(9, " Content 3 ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab, i1.MatTabLabel, i2.MatIcon], styles: [".example-tab-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupCustomLabelExample, [{
        type: Component,
        args: [{ selector: 'tab-group-custom-label-example', template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0lsQyxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOzs7SUFPRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHdCQUNGOzs7SUFNRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOztBRHJCSjs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ1Z2QyxxQ0FBZTtRQUNiLCtCQUFTO1FBRVAsMkZBR2M7UUFFZCwyQkFDRjtRQUFBLGlCQUFVO1FBRVYsK0JBQVM7UUFDUCwyRkFHYztRQUNkLDJCQUNGO1FBQUEsaUJBQVU7UUFFViwrQkFBUztRQUNQLDJGQUdjO1FBRWQsMkJBQ0Y7UUFBQSxpQkFBVTtRQUNaLGlCQUFnQjs7dUZEakJILDBCQUEwQjtjQUx0QyxTQUFTOzJCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVXNpbmcgdGFicyB3aXRoIGEgY3VzdG9tIGxhYmVsIHRlbXBsYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiPlxuPCEtLSAjZG9jcmVnaW9uIGxhYmVsLWRpcmVjdGl2ZSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICBGaXJzdFxuICAgIDwvbmctdGVtcGxhdGU+XG48IS0tICNlbmRkb2NyZWdpb24gbGFiZWwtZGlyZWN0aXZlIC0tPlxuICAgIENvbnRlbnQgMVxuICA8L21hdC10YWI+XG5cbiAgPG1hdC10YWI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLXRhYi1pY29uXCI+dGh1bWJfdXA8L21hdC1pY29uPlxuICAgICAgU2Vjb25kXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBDb250ZW50IDJcbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS10YWItaWNvblwiPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgIFRoaXJkXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIENvbnRlbnQgM1xuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=