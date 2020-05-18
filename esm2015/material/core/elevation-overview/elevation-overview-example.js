/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/core/elevation-overview/elevation-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * \@title Elevation CSS classes
 */
let ElevationOverviewExample = /** @class */ (() => {
    /**
     * \@title Elevation CSS classes
     */
    class ElevationOverviewExample {
        constructor() {
            this.isActive = false;
        }
    }
    ElevationOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'elevation-overview-example',
                    styleUrls: ['elevation-overview-example.css'],
                    templateUrl: 'elevation-overview-example.html',
                },] },
    ];
    /** @nocollapse */ ElevationOverviewExample.ɵfac = function ElevationOverviewExample_Factory(t) { return new (t || ElevationOverviewExample)(); };
    /** @nocollapse */ ElevationOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ElevationOverviewExample, selectors: [["elevation-overview-example"]], decls: 4, vars: 4, consts: [[1, "example-container"], ["mat-button", "", 3, "click"]], template: function ElevationOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    return ElevationOverviewExample;
})();
export { ElevationOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ElevationOverviewExample, [{
        type: Component,
        args: [{
                selector: 'elevation-overview-example',
                styleUrls: ['elevation-overview-example.css'],
                templateUrl: 'elevation-overview-example.html',
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    ElevationOverviewExample.prototype.isActive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFLeEM7Ozs7SUFBQSxNQUthLHdCQUF3QjtRQUxyQztZQU1FLGFBQVEsR0FBRyxLQUFLLENBQUM7U0FDbEI7OztnQkFQQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7aUJBQy9DOzt1SEFDWSx3QkFBd0I7b0ZBQXhCLHdCQUF3QjtZQ1ZyQyw4QkFHRTtZQUFBLDBCQUNGO1lBQUEsaUJBQU07WUFFTixpQ0FBa0Q7WUFBL0IscUlBQThCO1lBQUMsZ0NBQWdCO1lBQUEsaUJBQVM7O1lBTHZFLGlEQUFvQyxrQ0FBQTs7bUNERHhDO0tBWUM7U0FGWSx3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7Z0JBQzdDLFdBQVcsRUFBRSxpQ0FBaUM7YUFDL0M7Ozs7SUFFQyw0Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEVsZXZhdGlvbiBDU1MgY2xhc3Nlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdlbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRWxldmF0aW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgaXNBY3RpdmUgPSBmYWxzZTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1hdC1lbGV2YXRpb24tejJdPVwiIWlzQWN0aXZlXCJcbiAgICBbY2xhc3MubWF0LWVsZXZhdGlvbi16OF09XCJpc0FjdGl2ZVwiPlxuICBFeGFtcGxlXG48L2Rpdj5cblxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJpc0FjdGl2ZSA9ICFpc0FjdGl2ZVwiPlRvZ2dsZSBFbGV2YXRpb248L2J1dHRvbj5cbiJdfQ==