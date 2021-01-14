import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with aligned labels
 */
export class TabGroupAlignExample {
}
TabGroupAlignExample.ɵfac = function TabGroupAlignExample_Factory(t) { return new (t || TabGroupAlignExample)(); };
TabGroupAlignExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAlignExample, selectors: [["tab-group-align-example"]], decls: 21, vars: 0, consts: [["mat-align-tabs", "start"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["mat-align-tabs", "center"], ["mat-align-tabs", "end"]], template: function TabGroupAlignExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'tab-group-align-example',
                templateUrl: 'tab-group-align-example.html',
                styleUrls: ['tab-group-align-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hbGlnbi90YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFsaWduL3RhYi1ncm91cC1hbGlnbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FDVGpDLHdDQUNBO1FBQ0Usa0NBQXVCO1FBQUEseUJBQVM7UUFBQSxpQkFBVTtRQUMxQyxrQ0FBd0I7UUFBQSx5QkFBUztRQUFBLGlCQUFVO1FBQzNDLGtDQUF1QjtRQUFBLHlCQUFTO1FBQUEsaUJBQVU7UUFDNUMsaUJBQWdCO1FBRWhCLHdDQUNFO1FBQUEsa0NBQXVCO1FBQUEseUJBQVM7UUFBQSxpQkFBVTtRQUMxQyxtQ0FBd0I7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzNDLG1DQUF1QjtRQUFBLDBCQUFTO1FBQUEsaUJBQVU7UUFDNUMsaUJBQWdCO1FBRWhCLHlDQUNFO1FBQUEsbUNBQXVCO1FBQUEsMEJBQVM7UUFBQSxpQkFBVTtRQUMxQyxtQ0FBd0I7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzNDLG1DQUF1QjtRQUFBLDBCQUFTO1FBQUEsaUJBQVU7UUFDNUMsaUJBQWdCOzt1RkRSSCxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBhbGlnbmVkIGxhYmVsc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBbGlnbkV4YW1wbGUge31cbiIsIjwhLS0gI2RvY3JlZ2lvbiBhbGlnbi1zdGFydCAtLT5cbjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwic3RhcnRcIj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBhbGlnbi1zdGFydCAtLT5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwiY2VudGVyXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuXG48bWF0LXRhYi1ncm91cCBtYXQtYWxpZ24tdGFicz1cImVuZFwiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==