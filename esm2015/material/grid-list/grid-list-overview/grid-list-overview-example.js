import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Basic grid-list
 */
export class GridListOverviewExample {
}
GridListOverviewExample.ɵfac = function GridListOverviewExample_Factory(t) { return new (t || GridListOverviewExample)(); };
GridListOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: GridListOverviewExample, selectors: [["grid-list-overview-example"]], decls: 9, vars: 0, consts: [["cols", "2", "rowHeight", "2:1"]], template: function GridListOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'grid-list-overview-example',
                styleUrls: ['grid-list-overview-example.css'],
                templateUrl: 'grid-list-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1vdmVydmlldy9ncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7OzhGQUF2Qix1QkFBdUI7NERBQXZCLHVCQUF1QjtRQ1ZwQyx3Q0FBd0M7UUFDdEMscUNBQWU7UUFBQSxpQkFBQztRQUFBLGlCQUFnQjtRQUNoQyxxQ0FBZTtRQUFBLGlCQUFDO1FBQUEsaUJBQWdCO1FBQ2hDLHFDQUFlO1FBQUEsaUJBQUM7UUFBQSxpQkFBZ0I7UUFDaEMscUNBQWU7UUFBQSxpQkFBQztRQUFBLGlCQUFnQjtRQUNsQyxpQkFBZ0I7O3VGREtILHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGdyaWQtbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgR3JpZExpc3RPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtZ3JpZC1saXN0IGNvbHM9XCIyXCIgcm93SGVpZ2h0PVwiMjoxXCI+XG4gIDxtYXQtZ3JpZC10aWxlPjE8L21hdC1ncmlkLXRpbGU+XG4gIDxtYXQtZ3JpZC10aWxlPjI8L21hdC1ncmlkLXRpbGU+XG4gIDxtYXQtZ3JpZC10aWxlPjM8L21hdC1ncmlkLXRpbGU+XG4gIDxtYXQtZ3JpZC10aWxlPjQ8L21hdC1ncmlkLXRpbGU+XG48L21hdC1ncmlkLWxpc3Q+XG4iXX0=