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
        args: [{ selector: 'tab-group-animations-example', template: "<h3>No animation</h3>\n\n<mat-tab-group animationDuration=\"0ms\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n\n<h3>Very slow animation</h3>\n<!-- #docregion slow-animation-duration -->\n<mat-tab-group animationDuration=\"2000ms\">\n<!-- #enddocregion slow-animation-duration -->\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".mat-tab-group {\n  margin-bottom: 48px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx5QkFBeUI7O2tHQUF6Qix5QkFBeUI7NEVBQXpCLHlCQUF5QjtRQ1Z0QywwQkFBSTtRQUFBLDRCQUFZO1FBQUEsaUJBQUs7UUFFckIsd0NBQXVDO1FBQ3JDLGtDQUF1QjtRQUFBLHlCQUFTO1FBQUEsaUJBQVU7UUFDMUMsa0NBQXdCO1FBQUEseUJBQVM7UUFBQSxpQkFBVTtRQUMzQyxrQ0FBdUI7UUFBQSx5QkFBUztRQUFBLGlCQUFVO1FBQzVDLGlCQUFnQjtRQUVoQiwwQkFBSTtRQUFBLG9DQUFtQjtRQUFBLGlCQUFLO1FBRTVCLHlDQUEwQztRQUV4QyxtQ0FBdUI7UUFBQSwwQkFBUztRQUFBLGlCQUFVO1FBQzFDLG1DQUF3QjtRQUFBLDBCQUFTO1FBQUEsaUJBQVU7UUFDM0MsbUNBQXVCO1FBQUEsMEJBQVM7UUFBQSxpQkFBVTtRQUM1QyxpQkFBZ0I7O3VGRExILHlCQUF5QjtjQUxyQyxTQUFTOzJCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIGFuaW1hdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1hbmltYXRpb25zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwQW5pbWF0aW9uc0V4YW1wbGUge31cbiIsIjxoMz5ObyBhbmltYXRpb248L2gzPlxuXG48bWF0LXRhYi1ncm91cCBhbmltYXRpb25EdXJhdGlvbj1cIjBtc1wiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+Q29udGVudCAxPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlNlY29uZFwiPkNvbnRlbnQgMjwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPkNvbnRlbnQgMzwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cblxuPGgzPlZlcnkgc2xvdyBhbmltYXRpb248L2gzPlxuPCEtLSAjZG9jcmVnaW9uIHNsb3ctYW5pbWF0aW9uLWR1cmF0aW9uIC0tPlxuPG1hdC10YWItZ3JvdXAgYW5pbWF0aW9uRHVyYXRpb249XCIyMDAwbXNcIj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBzbG93LWFuaW1hdGlvbi1kdXJhdGlvbiAtLT5cbiAgPG1hdC10YWIgbGFiZWw9XCJGaXJzdFwiPkNvbnRlbnQgMTwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj5Db250ZW50IDI8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj5Db250ZW50IDM8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=