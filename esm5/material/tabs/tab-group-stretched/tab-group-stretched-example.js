import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with stretched labels
 */
var TabGroupStretchedExample = /** @class */ (function () {
    function TabGroupStretchedExample() {
    }
    TabGroupStretchedExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-group-stretched-example',
                    templateUrl: 'tab-group-stretched-example.html',
                    styleUrls: ['tab-group-stretched-example.css'],
                },] },
    ];
    TabGroupStretchedExample.ɵfac = function TabGroupStretchedExample_Factory(t) { return new (t || TabGroupStretchedExample)(); };
    TabGroupStretchedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupStretchedExample, selectors: [["tab-group-stretched-example"]], decls: 7, vars: 0, consts: [["mat-stretch-tabs", "", 1, "example-stretched-tabs", "mat-elevation-z4"], ["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupStretchedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group", 0);
            i0.ɵɵelementStart(1, "mat-tab", 1);
            i0.ɵɵtext(2, " Content 1 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-tab", 2);
            i0.ɵɵtext(4, " Content 2 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-tab", 3);
            i0.ɵɵtext(6, " Content 3 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [".example-stretched-tabs[_ngcontent-%COMP%] {\n  max-width: 800px;\n}"] });
    return TabGroupStretchedExample;
}());
export { TabGroupStretchedExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupStretchedExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-stretched-example',
                templateUrl: 'tab-group-stretched-example.html',
                styleUrls: ['tab-group-stretched-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtc3RyZXRjaGVkL3RhYi1ncm91cC1zdHJldGNoZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXN0cmV0Y2hlZC90YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS3dDOztnQkFMdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFdBQVcsRUFBRSxrQ0FBa0M7b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO2lCQUMvQzs7b0dBQ1ksd0JBQXdCO2lFQUF4Qix3QkFBd0I7WUNWckMsd0NBQ0U7WUFBQSxrQ0FBd0I7WUFBQSwyQkFBVTtZQUFBLGlCQUFVO1lBQzVDLGtDQUF5QjtZQUFBLDJCQUFVO1lBQUEsaUJBQVU7WUFDN0Msa0NBQXdCO1lBQUEsMkJBQVU7WUFBQSxpQkFBVTtZQUM5QyxpQkFBZ0I7O21DREpoQjtDQVV3QyxBQUx4QyxJQUt3QztTQUEzQix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB3aXRoIHN0cmV0Y2hlZCBsYWJlbHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtc3RyZXRjaGVkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXAgbWF0LXN0cmV0Y2gtdGFicyBjbGFzcz1cImV4YW1wbGUtc3RyZXRjaGVkLXRhYnMgbWF0LWVsZXZhdGlvbi16NFwiPlxuICA8bWF0LXRhYiBsYWJlbD1cIkZpcnN0XCI+IENvbnRlbnQgMSA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+IENvbnRlbnQgMiA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiVGhpcmRcIj4gQ29udGVudCAzIDwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==