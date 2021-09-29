import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Elevation CSS classes
 */
export class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
}
ElevationOverviewExample.ɵfac = function ElevationOverviewExample_Factory(t) { return new (t || ElevationOverviewExample)(); };
ElevationOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 4, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Example\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "button", 1);
        i0.ɵɵlistener("click", function ElevationOverviewExample_Template_button_click_2_listener() { return ctx.isActive = !ctx.isActive; });
        i0.ɵɵtext(3, "Toggle Elevation");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("mat-elevation-z2", !ctx.isActive)("mat-elevation-z8", ctx.isActive);
    } }, directives: [i1.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  padding: 16px;\n  margin-bottom: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElevationOverviewExample, [{
        type: Component,
        args: [{ selector: 'elevation-overview-example', template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7O2dHQUZZLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDVnJDLDhCQUV3QztRQUN0QywwQkFDRjtRQUFBLGlCQUFNO1FBRU4saUNBQWtEO1FBQS9CLHFJQUE4QjtRQUFDLGdDQUFnQjtRQUFBLGlCQUFTOztRQUx2RSxpREFBb0Msa0NBQUE7O3VGRFMzQix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEVsZXZhdGlvbiBDU1MgY2xhc3Nlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRWxldmF0aW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaXNBY3RpdmUgPSBmYWxzZTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1hdC1lbGV2YXRpb24tejJdPVwiIWlzQWN0aXZlXCJcbiAgICBbY2xhc3MubWF0LWVsZXZhdGlvbi16OF09XCJpc0FjdGl2ZVwiPlxuICBFeGFtcGxlXG48L2Rpdj5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJpc0FjdGl2ZSA9ICFpc0FjdGl2ZVwiPlRvZ2dsZSBFbGV2YXRpb248L2J1dHRvbj5cbiJdfQ==