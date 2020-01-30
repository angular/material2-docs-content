import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title Basic list
 */
var ListOverviewExample = /** @class */ (function () {
    function ListOverviewExample() {
    }
    ListOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'list-overview-example',
                    templateUrl: 'list-overview-example.html',
                    styleUrls: ['list-overview-example.css'],
                },] },
    ];
    ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
    ListOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-list", 0);
            i0.ɵɵelementStart(1, "mat-list-item", 1);
            i0.ɵɵtext(2, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-list-item", 1);
            i0.ɵɵtext(4, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-list-item", 1);
            i0.ɵɵtext(6, "Item 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatList, i1.MatListItem], styles: [""] });
    return ListOverviewExample;
}());
export { ListOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
                styleUrls: ['list-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS21DOztnQkFMbEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7b0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2lCQUN6Qzs7MEZBQ1ksbUJBQW1COzREQUFuQixtQkFBbUI7WUNWaEMsbUNBQ0U7WUFBQSx3Q0FBK0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFnQjtZQUNyRCx3Q0FBK0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFnQjtZQUNyRCx3Q0FBK0I7WUFBQSxzQkFBTTtZQUFBLGlCQUFnQjtZQUN2RCxpQkFBVzs7OEJESlg7Q0FVbUMsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBsaXN0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbGlzdC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8bWF0LWxpc3Qgcm9sZT1cImxpc3RcIj5cbiAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCI+SXRlbSAxPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIj5JdGVtIDI8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiPkl0ZW0gMzwvbWF0LWxpc3QtaXRlbT5cbjwvbWF0LWxpc3Q+XG4iXX0=