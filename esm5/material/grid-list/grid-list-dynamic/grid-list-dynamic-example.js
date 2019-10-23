import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
import * as i2 from "@angular/common";
function GridListDynamicExample_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-grid-tile", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var tile_r1 = ctx.$implicit;
    i0.ɵɵstyleSanitizer(i0.ɵɵdefaultStyleSanitizer);
    i0.ɵɵstyleProp("background", tile_r1.color);
    i0.ɵɵproperty("colspan", tile_r1.cols)("rowspan", tile_r1.rows);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", tile_r1.text, " ");
} }
/**
 * @title Dynamic grid-list
 */
var GridListDynamicExample = /** @class */ (function () {
    function GridListDynamicExample() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    GridListDynamicExample.decorators = [
        { type: Component, args: [{
                    selector: 'grid-list-dynamic-example',
                    templateUrl: 'grid-list-dynamic-example.html',
                    styleUrls: ['grid-list-dynamic-example.css'],
                },] },
    ];
    GridListDynamicExample.ɵfac = function GridListDynamicExample_Factory(t) { return new (t || GridListDynamicExample)(); };
    GridListDynamicExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListDynamicExample, selectors: [["grid-list-dynamic-example"]], decls: 2, vars: 1, consts: [["cols", "4", "rowHeight", "100px"], [3, "colspan", "rowspan", "background", 4, "ngFor", "ngForOf"], [3, "colspan", "rowspan"]], template: function GridListDynamicExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-grid-list", 0);
            i0.ɵɵtemplate(1, GridListDynamicExample_mat_grid_tile_1_Template, 2, 4, "mat-grid-tile", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.tiles);
        } }, directives: [i1.MatGridList, i2.NgForOf, i1.MatGridTile], styles: [""] });
    return GridListDynamicExample;
}());
export { GridListDynamicExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(GridListDynamicExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-dynamic-example',
                templateUrl: 'grid-list-dynamic-example.html',
                styleUrls: ['grid-list-dynamic-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LWR5bmFtaWMvZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0lDQ3RDLHdDQUtFO0lBQUEsWUFDRjtJQUFBLGlCQUFnQjs7O0lBRlosK0NBQStCO0lBQS9CLDJDQUErQjtJQUYvQixzQ0FBcUIseUJBQUE7SUFHdkIsZUFDRjtJQURFLDZDQUNGOztBREVGOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFVBQUssR0FBVztZQUNkLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBQztZQUNuRCxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUM7WUFDcEQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ3JELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztTQUNuRCxDQUFDO0tBQ0g7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO29CQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztpQkFDN0M7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDakJuQyx3Q0FDRTtZQUFBLDJGQUtFO1lBRUosaUJBQWdCOztZQU5WLGVBQTBCO1lBQTFCLG1DQUEwQjs7aUNERmhDO0NBd0JDLEFBWkQsSUFZQztTQVBZLHNCQUFzQjttQ0FBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUaWxlIHtcbiAgY29sb3I6IHN0cmluZztcbiAgY29sczogbnVtYmVyO1xuICByb3dzOiBudW1iZXI7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRHluYW1pYyBncmlkLWxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0RHluYW1pY0V4YW1wbGUge1xuICB0aWxlczogVGlsZVtdID0gW1xuICAgIHt0ZXh0OiAnT25lJywgY29sczogMywgcm93czogMSwgY29sb3I6ICdsaWdodGJsdWUnfSxcbiAgICB7dGV4dDogJ1R3bycsIGNvbHM6IDEsIHJvd3M6IDIsIGNvbG9yOiAnbGlnaHRncmVlbid9LFxuICAgIHt0ZXh0OiAnVGhyZWUnLCBjb2xzOiAxLCByb3dzOiAxLCBjb2xvcjogJ2xpZ2h0cGluayd9LFxuICAgIHt0ZXh0OiAnRm91cicsIGNvbHM6IDIsIHJvd3M6IDEsIGNvbG9yOiAnI0REQkRGMSd9LFxuICBdO1xufVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjRcIiByb3dIZWlnaHQ9XCIxMDBweFwiPlxuICA8bWF0LWdyaWQtdGlsZVxuICAgICAgKm5nRm9yPVwibGV0IHRpbGUgb2YgdGlsZXNcIlxuICAgICAgW2NvbHNwYW5dPVwidGlsZS5jb2xzXCJcbiAgICAgIFtyb3dzcGFuXT1cInRpbGUucm93c1wiXG4gICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCJ0aWxlLmNvbG9yXCI+XG4gICAge3t0aWxlLnRleHR9fVxuICA8L21hdC1ncmlkLXRpbGU+XG48L21hdC1ncmlkLWxpc3Q+XG4iXX0=