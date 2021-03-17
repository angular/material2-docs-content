import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group animations
 */
export class TabGroupAnimationsExample {
}
TabGroupAnimationsExample.ɵfac = function TabGroupAnimationsExample_Factory(t) { return new (t || TabGroupAnimationsExample)(); };
TabGroupAnimationsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabGroupAnimationsExample, selectors: [["tab-group-animations-example"]], decls: 18, vars: 0, consts: [["animationDuration", "0ms"], ["label", "First"], ["label", "Second"], ["label", "Third"], ["animationDuration", "2000ms"]], template: function TabGroupAnimationsExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabGroupAnimationsExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-animations-example',
                templateUrl: 'tab-group-animations-example.html',
                styleUrls: ['tab-group-animations-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7O2tHQUF6Qix5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ1Z0QywwQkFBSTtRQUFBLDRCQUFZO1FBQUEsaUJBQUs7UUFFckIsd0NBQXVDO1FBQ3JDLGtDQUF1QjtRQUFBLHlCQUFTO1FBQUEsaUJBQVU7UUFDMUMsa0NBQXdCO1FBQUEseUJBQVM7UUFBQSxpQkFBVTtRQUMzQyxrQ0FBdUI7UUFBQSx5QkFBUztRQUFBLGlCQUFVO1FBQzVDLGlCQUFnQjtRQUVoQiwwQkFBSTtRQUFBLG9DQUFtQjtRQUFBLGlCQUFLO1FBRTVCLHlDQUEwQztRQUV4QyxtQ0FBdUI7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzFDLG1DQUF3QjtRQUFBLDBCQUFTO1FBQUEsaUJBQVU7UUFDM0MsbUNBQXVCO1FBQUEsMEJBQVM7UUFBQSxpQkFBVTtRQUM1QyxpQkFBZ0I7O3VGRExILHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCBhbmltYXRpb25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1hbmltYXRpb25zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtYW5pbWF0aW9ucy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEFuaW1hdGlvbnNFeGFtcGxlIHt9XG4iLCI8aDM+Tm8gYW5pbWF0aW9uPC9oMz5cblxuPG1hdC10YWItZ3JvdXAgYW5pbWF0aW9uRHVyYXRpb249XCIwbXNcIj5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG5cbjxoMz5WZXJ5IHNsb3cgYW5pbWF0aW9uPC9oMz5cbjwhLS0gI2RvY3JlZ2lvbiBzbG93LWFuaW1hdGlvbi1kdXJhdGlvbiAtLT5cbjxtYXQtdGFiLWdyb3VwIGFuaW1hdGlvbkR1cmF0aW9uPVwiMjAwMG1zXCI+XG48IS0tICNlbmRkb2NyZWdpb24gc2xvdy1hbmltYXRpb24tZHVyYXRpb24gLS0+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19