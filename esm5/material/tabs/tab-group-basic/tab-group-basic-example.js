import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Basic use of the tab group
 */
var TabGroupBasicExample = /** @class */ (function () {
    function TabGroupBasicExample() {
    }
    TabGroupBasicExample.ɵfac = function TabGroupBasicExample_Factory(t) { return new (t || TabGroupBasicExample)(); };
    TabGroupBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabGroupBasicExample, selectors: [["tab-group-basic-example"]], decls: 7, vars: 0, consts: [["label", "First"], ["label", "Second"], ["label", "Third"]], template: function TabGroupBasicExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group");
            i0.ɵɵelementStart(1, "mat-tab", 0);
            i0.ɵɵtext(2, " Content 1 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-tab", 1);
            i0.ɵɵtext(4, " Content 2 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-tab", 2);
            i0.ɵɵtext(6, " Content 3 ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatTabGroup, i1.MatTab], styles: [""] });
    return TabGroupBasicExample;
}());
export { TabGroupBasicExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-group-basic-example',
                templateUrl: 'tab-group-basic-example.html',
                styleUrls: ['tab-group-basic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWJhc2ljLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1iYXNpYy90YWItZ3JvdXAtYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWJhc2ljL3RhYi1ncm91cC1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtvQzs0RkFBdkIsb0JBQW9COzZEQUFwQixvQkFBb0I7WUNWakMscUNBQ0U7WUFBQSxrQ0FBd0I7WUFBQSwyQkFBVTtZQUFBLGlCQUFVO1lBQzVDLGtDQUF5QjtZQUFBLDJCQUFVO1lBQUEsaUJBQVU7WUFDN0Msa0NBQXdCO1lBQUEsMkJBQVU7WUFBQSxpQkFBVTtZQUM5QyxpQkFBZ0I7OytCREpoQjtDQVVvQyxBQUxwQyxJQUtvQztTQUF2QixvQkFBb0I7a0RBQXBCLG9CQUFvQjtjQUxoQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7YUFDM0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHVzZSBvZiB0aGUgdGFiIGdyb3VwXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1ncm91cC1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEJhc2ljRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj4gQ29udGVudCAxIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJTZWNvbmRcIj4gQ29udGVudCAyIDwvbWF0LXRhYj5cbiAgPG1hdC10YWIgbGFiZWw9XCJUaGlyZFwiPiBDb250ZW50IDMgPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19