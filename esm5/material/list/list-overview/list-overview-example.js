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
    ListOverviewExample.ngFactoryDef = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
    ListOverviewExample.ngComponentDef = i0.ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(ListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
                styleUrls: ['list-overview-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLbUM7O2dCQUxsQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7aUJBQ3pDOztrR0FDWSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtZQ1ZoQyxtQ0FDRTtZQUFBLHdDQUErQjtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3JELHdDQUErQjtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3JELHdDQUErQjtZQUFBLHNCQUFNO1lBQUEsaUJBQWdCO1lBQ3ZELGlCQUFXOzs4QkRKWDtDQVVtQyxBQUxuQyxJQUttQztTQUF0QixtQkFBbUI7bUNBQW5CLG1CQUFtQjtjQUwvQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLDRCQUE0QjtnQkFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7YUFDekMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIGxpc3RcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGlzdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsaXN0LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RPdmVydmlld0V4YW1wbGUge31cbiIsIjxtYXQtbGlzdCByb2xlPVwibGlzdFwiPlxuICA8bWF0LWxpc3QtaXRlbSByb2xlPVwibGlzdGl0ZW1cIj5JdGVtIDE8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtbGlzdC1pdGVtIHJvbGU9XCJsaXN0aXRlbVwiPkl0ZW0gMjwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0gcm9sZT1cImxpc3RpdGVtXCI+SXRlbSAzPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==