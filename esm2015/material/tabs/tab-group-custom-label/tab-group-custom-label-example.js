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
        args: [{
                selector: 'tab-group-custom-label-example',
                templateUrl: 'tab-group-custom-label-example.html',
                styleUrls: ['tab-group-custom-label-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0lsQyxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOzs7SUFPRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHdCQUNGOzs7SUFNRSxtQ0FBbUM7SUFBQSx3QkFBUTtJQUFBLGlCQUFXO0lBQ3RELHVCQUNGOztBRHJCSjs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7NkVBQTFCLDBCQUEwQjtRQ1Z2QyxxQ0FBZTtRQUNiLCtCQUFTO1FBRVAsMkZBR2M7UUFFZCwyQkFDRjtRQUFBLGlCQUFVO1FBRVYsK0JBQVM7UUFDUCwyRkFHYztRQUNkLDJCQUNGO1FBQUEsaUJBQVU7UUFFViwrQkFBUztRQUNQLDJGQUdjO1FBRWQsMkJBQ0Y7UUFBQSxpQkFBVTtRQUNaLGlCQUFnQjs7dUZEakJILDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFVzaW5nIHRhYnMgd2l0aCBhIGN1c3RvbSBsYWJlbCB0ZW1wbGF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBDdXN0b21MYWJlbEV4YW1wbGUge31cbiIsIjxtYXQtdGFiLWdyb3VwPlxuICA8bWF0LXRhYj5cbjwhLS0gI2RvY3JlZ2lvbiBsYWJlbC1kaXJlY3RpdmUgLS0+XG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLXRhYi1pY29uXCI+dGh1bWJfdXA8L21hdC1pY29uPlxuICAgICAgRmlyc3RcbiAgICA8L25nLXRlbXBsYXRlPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGxhYmVsLWRpcmVjdGl2ZSAtLT5cbiAgICBDb250ZW50IDFcbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS10YWItaWNvblwiPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgIFNlY29uZFxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgQ29udGVudCAyXG4gIDwvbWF0LXRhYj5cblxuICA8bWF0LXRhYj5cbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICBUaGlyZFxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICBDb250ZW50IDNcbiAgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19