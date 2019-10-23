import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with aligned labels
 */
var TabGroupAlignExample = /** @class */ (function () {
    function TabGroupAlignExample() {
    }
    TabGroupAlignExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-align-example',
                    templateUrl: 'tab-group-align-example.html',
                    styleUrls: ['tab-group-align-example.css'],
                },] },
    ];
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
    return TabGroupAlignExample;
}());
export { TabGroupAlignExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TabGroupAlignExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-align-example',
                templateUrl: 'tab-group-align-example.html',
                styleUrls: ['tab-group-align-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtYWxpZ24vdGFiLWdyb3VwLWFsaWduLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtYWxpZ24vdGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS29DOztnQkFMbkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7b0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2lCQUMzQzs7NEZBQ1ksb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMsd0NBQ0U7WUFBQSxrQ0FBdUI7WUFBQSx5QkFBUztZQUFBLGlCQUFVO1lBQzFDLGtDQUF3QjtZQUFBLHlCQUFTO1lBQUEsaUJBQVU7WUFDM0Msa0NBQXVCO1lBQUEseUJBQVM7WUFBQSxpQkFBVTtZQUM1QyxpQkFBZ0I7WUFFaEIsd0NBQ0U7WUFBQSxrQ0FBdUI7WUFBQSx5QkFBUztZQUFBLGlCQUFVO1lBQzFDLG1DQUF3QjtZQUFBLDBCQUFTO1lBQUEsaUJBQVU7WUFDM0MsbUNBQXVCO1lBQUEsMEJBQVM7WUFBQSxpQkFBVTtZQUM1QyxpQkFBZ0I7WUFFaEIseUNBQ0U7WUFBQSxtQ0FBdUI7WUFBQSwwQkFBUztZQUFBLGlCQUFVO1lBQzFDLG1DQUF3QjtZQUFBLDBCQUFTO1lBQUEsaUJBQVU7WUFDM0MsbUNBQXVCO1lBQUEsMEJBQVM7WUFBQSxpQkFBVTtZQUM1QyxpQkFBZ0I7OytCRGhCaEI7Q0FVb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO21DQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgd2l0aCBhbGlnbmVkIGxhYmVsc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFsaWduLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtYWxpZ24tZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBbGlnbkV4YW1wbGUge31cbiIsIjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwic3RhcnRcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxtYXQtdGFiLWdyb3VwIG1hdC1hbGlnbi10YWJzPVwiY2VudGVyXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuXG48bWF0LXRhYi1ncm91cCBtYXQtYWxpZ24tdGFicz1cImVuZFwiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==