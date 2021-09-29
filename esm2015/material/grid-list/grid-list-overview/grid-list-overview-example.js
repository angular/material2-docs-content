import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Basic grid-list
 */
export class GridListOverviewExample {
}
GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
GridListOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-grid-list", 0);
        i0.ɵɵelementStart(1, "mat-grid-tile");
        i0.ɵɵtext(2, "1");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-grid-tile");
        i0.ɵɵtext(4, "2");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-grid-tile");
        i0.ɵɵtext(6, "3");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-grid-tile");
        i0.ɵɵtext(8, "4");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatGridList, i1.MatGridTile], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  background: lightblue;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GridListOverviewExample, [{
        type: Component,
        args: [{ selector: 'grid-list-overview-example', template: "<mat-grid-list cols=\"2\" rowHeight=\"2:1\">\n  <mat-grid-tile>1</mat-grid-tile>\n  <mat-grid-tile>2</mat-grid-tile>\n  <mat-grid-tile>3</mat-grid-tile>\n  <mat-grid-tile>4</mat-grid-tile>\n</mat-grid-list>\n", styles: ["mat-grid-tile {\n  background: lightblue;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1vdmVydmlldy9ncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7MEVBQXZCLHVCQUF1QjtRQ1ZwQyx3Q0FBd0M7UUFDdEMscUNBQWU7UUFBQSxpQkFBQztRQUFBLGlCQUFnQjtRQUNoQyxxQ0FBZTtRQUFBLGlCQUFDO1FBQUEsaUJBQWdCO1FBQ2hDLHFDQUFlO1FBQUEsaUJBQUM7UUFBQSxpQkFBZ0I7UUFDaEMscUNBQWU7UUFBQSxpQkFBQztRQUFBLGlCQUFnQjtRQUNsQyxpQkFBZ0I7O3VGREtILHVCQUF1QjtjQUxuQyxTQUFTOzJCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgZ3JpZC1saXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdE92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1ncmlkLWxpc3QgY29scz1cIjJcIiByb3dIZWlnaHQ9XCIyOjFcIj5cbiAgPG1hdC1ncmlkLXRpbGU+MTwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+MjwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+MzwvbWF0LWdyaWQtdGlsZT5cbiAgPG1hdC1ncmlkLXRpbGU+NDwvbWF0LWdyaWQtdGlsZT5cbjwvbWF0LWdyaWQtbGlzdD5cbiJdfQ==