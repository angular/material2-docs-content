import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Testing with MatGridListHarness
 */
export class GridListHarnessExample {
}
GridListHarnessExample.ɵfac = function GridListHarnessExample_Factory(t) { return new (t || GridListHarnessExample)(); };
GridListHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListHarnessExample, selectors: [["grid-list-harness-example"]], decls: 14, vars: 0, consts: [["cols", "2", "rowHeight", "100px"], ["colspan", "2"]], template: function GridListHarnessExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{ selector: 'grid-list-harness-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n  <mat-grid-tile>Tile 1 (no header, no footer)</mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 2</mat-grid-tile-header>\n  </mat-grid-tile>\n  <mat-grid-tile colspan=\"2\">\n    <mat-grid-tile-header>Tile 3</mat-grid-tile-header>\n    <mat-grid-tile-footer>Tile 3 footer</mat-grid-tile-footer>\n  </mat-grid-tile>\n  <mat-grid-tile>\n    <mat-grid-tile-header>Tile 4</mat-grid-tile-header>\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtaGFybmVzcy9ncmlkLWxpc3QtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1oYXJuZXNzL2dyaWQtbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFLSCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNUbkMsd0NBQTBDO1FBQ3hDLHFDQUFlO1FBQUEsNkNBQTZCO1FBQUEsaUJBQWdCO1FBQzVELHFDQUFlO1FBQ2IsNENBQXNCO1FBQUEsc0JBQU07UUFBQSxpQkFBdUI7UUFDckQsaUJBQWdCO1FBQ2hCLHdDQUEyQjtRQUN6Qiw0Q0FBc0I7UUFBQSxzQkFBTTtRQUFBLGlCQUF1QjtRQUNuRCw0Q0FBc0I7UUFBQSw4QkFBYTtRQUFBLGlCQUF1QjtRQUM1RCxpQkFBZ0I7UUFDaEIsc0NBQWU7UUFDYiw2Q0FBc0I7UUFBQSx1QkFBTTtRQUFBLGlCQUF1QjtRQUNyRCxpQkFBZ0I7UUFDbEIsaUJBQWdCOzt1RkRISCxzQkFBc0I7Y0FKbEMsU0FBUzsyQkFDRSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRHcmlkTGlzdEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RIYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjJcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxuICA8bWF0LWdyaWQtdGlsZT5UaWxlIDEgKG5vIGhlYWRlciwgbm8gZm9vdGVyKTwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgMjwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGUgY29sc3Bhbj1cIjJcIj5cbiAgICA8bWF0LWdyaWQtdGlsZS1oZWFkZXI+VGlsZSAzPC9tYXQtZ3JpZC10aWxlLWhlYWRlcj5cbiAgICA8bWF0LWdyaWQtdGlsZS1mb290ZXI+VGlsZSAzIGZvb3RlcjwvbWF0LWdyaWQtdGlsZS1mb290ZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+XG4gICAgPG1hdC1ncmlkLXRpbGUtaGVhZGVyPlRpbGUgNDwvbWF0LWdyaWQtdGlsZS1oZWFkZXI+XG4gIDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==