import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
import * as i2 from "@angular/common";
function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tile_r1 = ctx.$implicit;
    i0.ɵɵstyleProp("background", tile_r1.color);
    i0.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
/**
 * @title Dynamic grid-list
 */
export class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
}
GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
GridListDynamicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 5, "mat-grid-tile", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tiles);
    } }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{ selector: 'grid-list-dynamic-example', template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  <mat-grid-tile\n      *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">\n    {{tile.text}}\n  </mat-grid-tile>\n</mat-grid-list>\n" }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0N0Qyx3Q0FJb0M7SUFDbEMsWUFDRjtJQUFBLGlCQUFnQjs7O0lBRlosMkNBQStCO0lBRi9CLHNDQUFxQix5QkFBQTtJQUd2QixlQUNGO0lBREUsNkNBQ0Y7O0FERUY7O0dBRUc7QUFLSCxNQUFNLE9BQU8sc0JBQXNCO0lBSm5DO1FBS0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1NBQ25ELENBQUM7S0FDSDs7NEZBUFksc0JBQXNCO3lFQUF0QixzQkFBc0I7UUNoQm5DLHdDQUEwQztRQUN4QywyRkFNZ0I7UUFDbEIsaUJBQWdCOztRQU5PLGVBQVE7UUFBUixtQ0FBUTs7dUZEY2xCLHNCQUFzQjtjQUpsQyxTQUFTOzJCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sczogbnVtYmVyO1xuICByb3dzOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRHluYW1pYyBncmlkLWxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3REeW5hbWljRXhhbXBsZSB7XG4gIHRpbGVzOiBUaWxlW10gPSBbXG4gICAge3RleHQ6ICdPbmUnLCBjb2xzOiAzLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0Ymx1ZSd9LFxuICAgIHt0ZXh0OiAnVHdvJywgY29sczogMSwgcm93czogMiwgY29sb3I6ICdsaWdodGdyZWVuJ30sXG4gICAge3RleHQ6ICdUaHJlZScsIGNvbHM6IDEsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRwaW5rJ30sXG4gICAge3RleHQ6ICdGb3VyJywgY29sczogMiwgcm93czogMSwgY29sb3I6ICcjRERCREYxJ30sXG4gIF07XG59XG4iLCI8bWF0LWdyaWQtbGlzdCBjb2xzPVwiNFwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XG4gIDxtYXQtZ3JpZC10aWxlXG4gICAgICAqbmdGb3I9XCJsZXQgdGlsZSBvZiB0aWxlc1wiXG4gICAgICBbY29sc3Bhbl09XCJ0aWxlLmNvbHNcIlxuICAgICAgW3Jvd3NwYW5dPVwidGlsZS5yb3dzXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInRpbGUuY29sb3JcIj5cbiAgICB7e3RpbGUudGV4dH19XG4gIDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==