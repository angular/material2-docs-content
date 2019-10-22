/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵstyleProp("background", tile_r1.color);
    i0.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
/**
 * @record
 */
export function Tile() { }
if (false) {
    /** @type {?} */
    Tile.prototype.color;
    /** @type {?} */
    Tile.prototype.cols;
    /** @type {?} */
    Tile.prototype.rows;
    /** @type {?} */
    Tile.prototype.text;
}
/**
 * \@title Dynamic grid-list
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
GridListDynamicExample.decorators = [
    { type: Component, args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            },] },
];
/** @nocollapse */ GridListDynamicExample.ngFactoryDef = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
/** @nocollapse */ GridListDynamicExample.ngComponentDef = i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 4, "mat-grid-tile", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tiles);
    } }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    GridListDynamicExample.prototype.tiles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0N0Qyx3Q0FLRTtJQUFBLFlBQ0Y7SUFBQSxpQkFBZ0I7OztJQUZaLCtDQUErQjtJQUEvQiwyQ0FBK0I7SUFGL0Isc0NBQXFCLHlCQUFBO0lBR3ZCLGVBQ0Y7SUFERSw2Q0FDRjs7Ozs7QURMRiwwQkFLQzs7O0lBSkMscUJBQWM7O0lBQ2Qsb0JBQWE7O0lBQ2Isb0JBQWE7O0lBQ2Isb0JBQWE7Ozs7O0FBV2YsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFVBQUssR0FBVztZQUNkLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztTQUNuRCxDQUFDO0tBQ0g7OztZQVpBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7b0dBQ1ksc0JBQXNCO3FFQUF0QixzQkFBc0I7UUNqQm5DLHdDQUNFO1FBQUEsMkZBS0U7UUFFSixpQkFBZ0I7O1FBTlYsZUFBMEI7UUFBMUIsbUNBQTBCOzttQ0RlbkIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztJQUVDLHVDQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGUge1xuICBjb2xvcjogc3RyaW5nO1xuICBjb2xzOiBudW1iZXI7XG4gIHJvd3M6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEeW5hbWljIGdyaWQtbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3REeW5hbWljRXhhbXBsZSB7XG4gIHRpbGVzOiBUaWxlW10gPSBbXG4gICAge3RleHQ6ICdPbmUnLCBjb2xzOiAzLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0Ymx1ZSd9LFxuICAgIHt0ZXh0OiAnVHdvJywgY29sczogMSwgcm93czogMiwgY29sb3I6ICdsaWdodGdyZWVuJ30sXG4gICAge3RleHQ6ICdUaHJlZScsIGNvbHM6IDEsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRwaW5rJ30sXG4gICAge3RleHQ6ICdGb3VyJywgY29sczogMiwgcm93czogMSwgY29sb3I6ICcjRERCREYxJ30sXG4gIF07XG59XG4iLCI8bWF0LWdyaWQtbGlzdCBjb2xzPVwiNFwiIHJvd0hlaWdodD1cIjEwMHB4XCI+XG4gIDxtYXQtZ3JpZC10aWxlXG4gICAgICAqbmdGb3I9XCJsZXQgdGlsZSBvZiB0aWxlc1wiXG4gICAgICBbY29sc3Bhbl09XCJ0aWxlLmNvbHNcIlxuICAgICAgW3Jvd3NwYW5dPVwidGlsZS5yb3dzXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInRpbGUuY29sb3JcIj5cbiAgICB7e3RpbGUudGV4dH19XG4gIDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==