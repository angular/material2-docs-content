/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/grid-list/grid-list-dynamic/grid-list-dynamic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
/** @nocollapse */ GridListDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 4, "mat-grid-tile", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tiles);
    } }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    GridListDynamicExample.prototype.tiles;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3RDLHdDQUtFO0lBQUEsWUFDRjtJQUFBLGlCQUFnQjs7O0lBRlosK0NBQStCO0lBQS9CLDJDQUErQjtJQUYvQixzQ0FBcUIseUJBQUE7SUFHdkIsZUFDRjtJQURFLDZDQUNGOzs7OztBRExGLDBCQUtDOzs7SUFKQyxxQkFBYzs7SUFDZCxvQkFBYTs7SUFDYixvQkFBYTs7SUFDYixvQkFBYTs7Ozs7QUFXZixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsVUFBSyxHQUFXO1lBQ2QsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1NBQ25ELENBQUM7S0FDSDs7O1lBWkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs0RkFDWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ2pCbkMsd0NBQ0U7UUFBQSwyRkFLRTtRQUVKLGlCQUFnQjs7UUFOVixlQUEwQjtRQUExQixtQ0FBMEI7O2tERGVuQixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsdUNBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZSB7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNvbHM6IG51bWJlcjtcbiAgcm93czogbnVtYmVyO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIER5bmFtaWMgZ3JpZC1saXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdER5bmFtaWNFeGFtcGxlIHtcbiAgdGlsZXM6IFRpbGVbXSA9IFtcbiAgICB7dGV4dDogJ09uZScsIGNvbHM6IDMsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRibHVlJ30sXG4gICAge3RleHQ6ICdUd28nLCBjb2xzOiAxLCByb3dzOiAyLCBjb2xvcjogJ2xpZ2h0Z3JlZW4nfSxcbiAgICB7dGV4dDogJ1RocmVlJywgY29sczogMSwgcm93czogMSwgY29sb3I6ICdsaWdodHBpbmsnfSxcbiAgICB7dGV4dDogJ0ZvdXInLCBjb2xzOiAyLCByb3dzOiAxLCBjb2xvcjogJyNEREJERjEnfSxcbiAgXTtcbn1cbiIsIjxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cbiAgPG1hdC1ncmlkLXRpbGVcbiAgICAgICpuZ0Zvcj1cImxldCB0aWxlIG9mIHRpbGVzXCJcbiAgICAgIFtjb2xzcGFuXT1cInRpbGUuY29sc1wiXG4gICAgICBbcm93c3Bhbl09XCJ0aWxlLnJvd3NcIlxuICAgICAgW3N0eWxlLmJhY2tncm91bmRdPVwidGlsZS5jb2xvclwiPlxuICAgIHt7dGlsZS50ZXh0fX1cbiAgPC9tYXQtZ3JpZC10aWxlPlxuPC9tYXQtZ3JpZC1saXN0PlxuIl19