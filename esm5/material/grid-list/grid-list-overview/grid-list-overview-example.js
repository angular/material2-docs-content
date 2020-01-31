import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Basic grid-list
 */
var GridListOverviewExample = /** @class */ (function () {
    function GridListOverviewExample() {
    }
    GridListOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'grid-list-overview-example',
                    styleUrls: ['grid-list-overview-example.css'],
                    templateUrl: 'grid-list-overview-example.html',
                },] },
    ];
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
    return GridListOverviewExample;
}());
export { GridListOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GridListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'grid-list-overview-example',
                styleUrls: ['grid-list-overview-example.css'],
                templateUrl: 'grid-list-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9ncmlkLWxpc3QvZ3JpZC1saXN0LW92ZXJ2aWV3L2dyaWQtbGlzdC1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1vdmVydmlldy9ncmlkLWxpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLdUM7O2dCQUx0QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7aUJBQy9DOztrR0FDWSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQ1ZwQyx3Q0FDRTtZQUFBLHFDQUFlO1lBQUEsaUJBQUM7WUFBQSxpQkFBZ0I7WUFDaEMscUNBQWU7WUFBQSxpQkFBQztZQUFBLGlCQUFnQjtZQUNoQyxxQ0FBZTtZQUFBLGlCQUFDO1lBQUEsaUJBQWdCO1lBQ2hDLHFDQUFlO1lBQUEsaUJBQUM7WUFBQSxpQkFBZ0I7WUFDbEMsaUJBQWdCOztrQ0RMaEI7Q0FVdUMsQUFMdkMsSUFLdUM7U0FBMUIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBncmlkLWxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZ3JpZC1saXN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWdyaWQtbGlzdCBjb2xzPVwiMlwiIHJvd0hlaWdodD1cIjI6MVwiPlxuICA8bWF0LWdyaWQtdGlsZT4xPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT4yPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT4zPC9tYXQtZ3JpZC10aWxlPlxuICA8bWF0LWdyaWQtdGlsZT40PC9tYXQtZ3JpZC10aWxlPlxuPC9tYXQtZ3JpZC1saXN0PlxuIl19