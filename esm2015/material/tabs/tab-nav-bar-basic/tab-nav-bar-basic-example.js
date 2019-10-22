/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const link_r21 = ctx.$implicit; const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r21 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r20.activeLink == link_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r21, " ");
} }
/**
 * \@title Basic use of the tab nav bar
 */
export class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    /**
     * @return {?}
     */
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    /**
     * @return {?}
     */
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.decorators = [
    { type: Component, args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            },] },
];
/** @nocollapse */ TabNavBarBasicExample.ngFactoryDef = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
/** @nocollapse */ TabNavBarBasicExample.ngComponentDef = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵtext(3, "Disabled Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener($event) { return ctx.toggleBackground(); });
        i0.ɵɵtext(5, " Toggle background\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener($event) { return ctx.addLink(); });
        i0.ɵɵtext(7, " Add link\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("backgroundColor", ctx.background);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.links);
    } }, directives: [i1.MatTabNav, i2.NgForOf, i1.MatTabLink, i3.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    TabNavBarBasicExample.prototype.links;
    /** @type {?} */
    TabNavBarBasicExample.prototype.activeLink;
    /** @type {?} */
    TabNavBarBasicExample.prototype.background;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1uYXYtYmFyLWJhc2ljL3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItbmF2LWJhci1iYXNpYy90YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNDdEMsNEJBRWtDO0lBRC9CLG9PQUEyQjtJQUNJLFlBQVM7SUFBQSxpQkFBSTs7OztJQUE1Qyx1REFBNkI7SUFBRSxlQUFTO0lBQVQseUNBQVM7Ozs7O0FEUTdDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBaUIsU0FBUyxDQUFDO0tBU3RDOzs7O0lBUEMsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFoQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOztrR0FDWSxxQkFBcUI7b0VBQXJCLHFCQUFxQjtRQ1hsQyw4QkFDRTtRQUFBLGtFQUVrQztRQUNsQyw0QkFBeUI7UUFBQSw2QkFBYTtRQUFBLGlCQUFJO1FBQzVDLGlCQUFNO1FBRU4saUNBQ0U7UUFEc0Qsd0dBQVMsc0JBQWtCLElBQUM7UUFDbEYsb0NBQ0Y7UUFBQSxpQkFBUztRQUNULGlDQUNFO1FBRHNELHdHQUFTLGFBQVMsSUFBQztRQUN6RSwyQkFDRjtRQUFBLGlCQUFTOztRQVpZLGdEQUE4QjtRQUNqQyxlQUEwQjtRQUExQixtQ0FBMEI7O21DRFUvQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2FBQzdDOzs7O0lBRUMsc0NBQXFDOztJQUNyQywyQ0FBMkI7O0lBQzNCLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIHRoZSB0YWIgbmF2IGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiTmF2QmFyQmFzaWNFeGFtcGxlIHtcbiAgbGlua3MgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBhY3RpdmVMaW5rID0gdGhpcy5saW5rc1swXTtcbiAgYmFja2dyb3VuZDogVGhlbWVQYWxldHRlID0gdW5kZWZpbmVkO1xuXG4gIHRvZ2dsZUJhY2tncm91bmQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kID8gdW5kZWZpbmVkIDogJ3ByaW1hcnknO1xuICB9XG5cbiAgYWRkTGluaygpIHtcbiAgICB0aGlzLmxpbmtzLnB1c2goYExpbmsgJHt0aGlzLmxpbmtzLmxlbmd0aCArIDF9YCk7XG4gIH1cbn1cbiIsIjxuYXYgbWF0LXRhYi1uYXYtYmFyIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZFwiPlxuICA8YSBtYXQtdGFiLWxpbmsgKm5nRm9yPVwibGV0IGxpbmsgb2YgbGlua3NcIlxuICAgICAoY2xpY2spPVwiYWN0aXZlTGluayA9IGxpbmtcIlxuICAgICBbYWN0aXZlXT1cImFjdGl2ZUxpbmsgPT0gbGlua1wiPiB7e2xpbmt9fSA8L2E+XG4gIDxhIG1hdC10YWItbGluayBkaXNhYmxlZD5EaXNhYmxlZCBMaW5rPC9hPlxuPC9uYXY+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIiAoY2xpY2spPVwidG9nZ2xlQmFja2dyb3VuZCgpXCI+XG4gIFRvZ2dsZSBiYWNrZ3JvdW5kXG48L2J1dHRvbj5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIiAoY2xpY2spPVwiYWRkTGluaygpXCI+XG4gIEFkZCBsaW5rXG48L2J1dHRvbj5cbiJdfQ==