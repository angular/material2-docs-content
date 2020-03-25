import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Basic menu
 */
var MenuOverviewExample = /** @class */ (function () {
    function MenuOverviewExample() {
    }
    MenuOverviewExample.ɵfac = function MenuOverviewExample_Factory(t) { return new (t || MenuOverviewExample)(); };
    MenuOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: MenuOverviewExample, selectors: [["menu-overview-example"]], decls: 8, vars: 1, consts: [["mat-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function MenuOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵtext(1, "Menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-menu", null, 1);
            i0.ɵɵelementStart(4, "button", 2);
            i0.ɵɵtext(5, "Item 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 2);
            i0.ɵɵtext(7, "Item 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(3);
            i0.ɵɵproperty("matMenuTriggerFor", _r1);
        } }, directives: [i1.MatButton, i2.MatMenuTrigger, i2._MatMenu, i2.MatMenuItem], styles: [""] });
    return MenuOverviewExample;
}());
export { MenuOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MenuOverviewExample, [{
        type: Component,
        args: [{
                selector: 'menu-overview-example',
                templateUrl: 'menu-overview-example.html',
                styleUrls: ['menu-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUttQzswRkFBdEIsbUJBQW1COzREQUFuQixtQkFBbUI7WUNWaEMsaUNBQThDO1lBQUEsb0JBQUk7WUFBQSxpQkFBUztZQUMzRCx5Q0FDRTtZQUFBLGlDQUFzQjtZQUFBLHNCQUFNO1lBQUEsaUJBQVM7WUFDckMsaUNBQXNCO1lBQUEsc0JBQU07WUFBQSxpQkFBUztZQUN2QyxpQkFBVzs7O1lBSlEsdUNBQTBCOzs4QkRBN0M7Q0FVbUMsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbWVudS1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBNZW51T3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5NZW51PC9idXR0b24+XG48bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDE8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkl0ZW0gMjwvYnV0dG9uPlxuPC9tYXQtbWVudT5cbiJdfQ==