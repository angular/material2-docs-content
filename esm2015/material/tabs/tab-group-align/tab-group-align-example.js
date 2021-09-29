import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with aligned labels
 */
export class TabGroupAlignExample {
}
TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
TabGroupAlignExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-tab-group", 0);
        i0.ɵɵelementStart(1, "mat-tab", 1);
        i0.ɵɵtext(2, "Content 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-tab", 2);
        i0.ɵɵtext(4, "Content 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-tab", 3);
        i0.ɵɵtext(6, "Content 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-tab-group", 4);
        i0.ɵɵelementStart(8, "mat-tab", 1);
        i0.ɵɵtext(9, "Content 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-tab", 2);
        i0.ɵɵtext(11, "Content 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-tab", 3);
        i0.ɵɵtext(13, "Content 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-tab-group", 5);
        i0.ɵɵelementStart(15, "mat-tab", 1);
        i0.ɵɵtext(16, "Content 1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-tab", 2);
        i0.ɵɵtext(18, "Content 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-tab", 3);
        i0.ɵɵtext(20, "Content 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupAlignExample, [{
        type: Component,
        args: [{ selector: 'tab-group-align-example', template: "<!-- #docregion align-start -->\n<mat-tab-group mat-align-tabs=\"start\">\n<!-- #enddocregion align-start -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"center\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<mat-tab-group mat-align-tabs=\"end\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hbGlnbi90YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFsaWduL3RhYi1ncm91cC1hbGlnbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVGpDLHdDQUFzQztRQUVwQyxrQ0FBdUI7UUFBQSx5QkFBUztRQUFBLGlCQUFVO1FBQzFDLGtDQUF3QjtRQUFBLHlCQUFTO1FBQUEsaUJBQVU7UUFDM0Msa0NBQXVCO1FBQUEseUJBQVM7UUFBQSxpQkFBVTtRQUM1QyxpQkFBZ0I7UUFFaEIsd0NBQXVDO1FBQ3JDLGtDQUF1QjtRQUFBLHlCQUFTO1FBQUEsaUJBQVU7UUFDMUMsbUNBQXdCO1FBQUEsMEJBQVM7UUFBQSxpQkFBVTtRQUMzQyxtQ0FBdUI7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzVDLGlCQUFnQjtRQUVoQix5Q0FBb0M7UUFDbEMsbUNBQXVCO1FBQUEsMEJBQVM7UUFBQSxpQkFBVTtRQUMxQyxtQ0FBd0I7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzNDLG1DQUF1QjtRQUFBLDBCQUFTO1FBQUEsaUJBQVU7UUFDNUMsaUJBQWdCOzt1RkRSSCxvQkFBb0I7Y0FMaEMsU0FBUzsyQkFDRSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIGFsaWduZWQgbGFiZWxzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hbGlnbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hbGlnbi1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFsaWduRXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIGFsaWduLXN0YXJ0IC0tPlxuPG1hdC10YWItZ3JvdXAgbWF0LWFsaWduLXRhYnM9XCJzdGFydFwiPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGFsaWduLXN0YXJ0IC0tPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cblxuPG1hdC10YWItZ3JvdXAgbWF0LWFsaWduLXRhYnM9XCJjZW50ZXJcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwiZW5kXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19