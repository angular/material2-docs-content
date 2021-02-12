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
ElevationOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 4, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'elevation-overview-example',
                styleUrls: ['elevation-overview-example.css'],
                templateUrl: 'elevation-overview-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHdCQUF3QjtJQUxyQztRQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FDbEI7O2dHQUZZLHdCQUF3Qjs2REFBeEIsd0JBQXdCO1FDVnJDLDhCQUV3QztRQUN0QywwQkFDRjtRQUFBLGlCQUFNO1FBRU4saUNBQWtEO1FBQS9CLHFJQUE4QjtRQUFDLGdDQUFnQjtRQUFBLGlCQUFTOztRQUx2RSxpREFBb0Msa0NBQUE7O3VGRFMzQix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2dCQUM3QyxXQUFXLEVBQUUsaUNBQWlDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFbGV2YXRpb24gQ1NTIGNsYXNzZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEVsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSB7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIlxuICAgIFtjbGFzcy5tYXQtZWxldmF0aW9uLXoyXT1cIiFpc0FjdGl2ZVwiXG4gICAgW2NsYXNzLm1hdC1lbGV2YXRpb24tejhdPVwiaXNBY3RpdmVcIj5cbiAgRXhhbXBsZVxuPC9kaXY+XG5cbjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiaXNBY3RpdmUgPSAhaXNBY3RpdmVcIj5Ub2dnbGUgRWxldmF0aW9uPC9idXR0b24+XG4iXX0=