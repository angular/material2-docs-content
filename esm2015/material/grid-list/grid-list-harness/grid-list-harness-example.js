import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Testing with MatGridListHarness
 */
export class GridListHarnessExample {
}
GridListHarnessExample.ɵfac = function GridListHarnessExample_Factory(t) { return new (t || GridListHarnessExample)(); };
GridListHarnessExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListHarnessExample, selectors: [["grid-list-harness-example"]], decls: 14, vars: 0, consts: [["cols", "2", "rowHeight", "100px"], ["colspan", "2"]], template: function GridListHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵelementStart(1, "mat-grid-tile");
        i0.ɵɵtext(2, "Tile 1 (no header, no footer)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-grid-tile");
        i0.ɵɵelementStart(4, "mat-grid-tile-header");
        i0.ɵɵtext(5, "Tile 2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-grid-tile", 1);
        i0.ɵɵelementStart(7, "mat-grid-tile-header");
        i0.ɵɵtext(8, "Tile 3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-grid-tile-footer");
        i0.ɵɵtext(10, "Tile 3 footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-grid-tile");
        i0.ɵɵelementStart(12, "mat-grid-tile-header");
        i0.ɵɵtext(13, "Tile 4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatGridList, i1.MatGridTile, i1.MatGridTileText, i1.MatGridTileHeaderCssMatStyler, i1.MatGridTileFooterCssMatStyler], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListHarnessExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-harness-example',
                templateUrl: 'grid-list-harness-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNUbkMsd0NBQ0U7UUFBQSxxQ0FBZTtRQUFBLDZDQUE2QjtRQUFBLGlCQUFnQjtRQUM1RCxxQ0FDRTtRQUFBLDRDQUFzQjtRQUFBLHNCQUFNO1FBQUEsaUJBQXVCO1FBQ3JELGlCQUFnQjtRQUNoQix3Q0FDRTtRQUFBLDRDQUFzQjtRQUFBLHNCQUFNO1FBQUEsaUJBQXVCO1FBQ25ELDRDQUFzQjtRQUFBLDhCQUFhO1FBQUEsaUJBQXVCO1FBQzVELGlCQUFnQjtRQUNoQixzQ0FDRTtRQUFBLDZDQUFzQjtRQUFBLHVCQUFNO1FBQUEsaUJBQXVCO1FBQ3JELGlCQUFnQjtRQUNsQixpQkFBZ0I7O3VGREhILHNCQUFzQjtjQUpsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdEdyaWRMaXN0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdEhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMlwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XG4gIDxtYXQtZ3JpZC10aWxlPlRpbGUgMSAobm8gaGVhZGVyLCBubyBmb290ZXIpPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSAyPC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZSBjb2xzcGFuPVwiMlwiPlxuICAgIDxtYXQtZ3JpZC10aWxlLWhlYWRlcj5UaWxlIDM8L21hdC1ncmlkLXRpbGUtaGVhZGVyPlxuICAgIDxtYXQtZ3JpZC10aWxlLWZvb3Rlcj5UaWxlIDMgZm9vdGVyPC9tYXQtZ3JpZC10aWxlLWZvb3Rlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSA0PC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgPC9tYXQtZ3JpZC10aWxlPlxuPC9tYXQtZ3JpZC1saXN0PlxuIl19