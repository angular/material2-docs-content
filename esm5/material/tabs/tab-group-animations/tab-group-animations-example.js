import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group animations
 */
var TabGroupAnimationsExample = /** @class */ (function () {
    function TabGroupAnimationsExample() {
    }
    TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
    TabGroupAnimationsExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h3");
            i0.ɵɵtext(1, "No animation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-tab-group", 0);
            i0.ɵɵelementStart(3, "mat-tab", 1);
            i0.ɵɵtext(4, "Content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-tab", 2);
            i0.ɵɵtext(6, "Content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-tab", 3);
            i0.ɵɵtext(8, "Content 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "h3");
            i0.ɵɵtext(10, "Very slow animation");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "mat-tab-group", 4);
            i0.ɵɵelementStart(12, "mat-tab", 1);
            i0.ɵɵtext(13, "Content 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-tab", 2);
            i0.ɵɵtext(15, "Content 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-tab", 3);
            i0.ɵɵtext(17, "Content 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [".mat-tab-group[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}"] });
    return TabGroupAnimationsExample;
}());
export { TabGroupAnimationsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupAnimationsExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-animations-example',
                templateUrl: 'tab-group-animations-example.html',
                styleUrls: ['tab-group-animations-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLeUM7c0dBQTVCLHlCQUF5QjtrRUFBekIseUJBQXlCO1lDVnRDLDBCQUFJO1lBQUEsNEJBQVk7WUFBQSxpQkFBSztZQUVyQix3Q0FDRTtZQUFBLGtDQUF1QjtZQUFBLHlCQUFTO1lBQUEsaUJBQVU7WUFDMUMsa0NBQXdCO1lBQUEseUJBQVM7WUFBQSxpQkFBVTtZQUMzQyxrQ0FBdUI7WUFBQSx5QkFBUztZQUFBLGlCQUFVO1lBQzVDLGlCQUFnQjtZQUVoQiwwQkFBSTtZQUFBLG9DQUFtQjtZQUFBLGlCQUFLO1lBQzVCLHlDQUNFO1lBQUEsbUNBQXVCO1lBQUEsMEJBQVM7WUFBQSxpQkFBVTtZQUMxQyxtQ0FBd0I7WUFBQSwwQkFBUztZQUFBLGlCQUFVO1lBQzNDLG1DQUF1QjtZQUFBLDBCQUFTO1lBQUEsaUJBQVU7WUFDNUMsaUJBQWdCOztvQ0RiaEI7Q0FVeUMsQUFMekMsSUFLeUM7U0FBNUIseUJBQXlCO2tEQUF6Qix5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUYWIgZ3JvdXAgYW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtYW5pbWF0aW9ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYW5pbWF0aW9ucy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBbmltYXRpb25zRXhhbXBsZSB7fVxuIiwiPGgzPk5vIGFuaW1hdGlvbjwvaDM+XG5cbjxtYXQtdGFiLWdyb3VwIGFuaW1hdGlvbkR1cmF0aW9uPVwiMG1zXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuXG48aDM+VmVyeSBzbG93IGFuaW1hdGlvbjwvaDM+XG48bWF0LXRhYi1ncm91cCBhbmltYXRpb25EdXJhdGlvbj1cIjIwMDBtc1wiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==