import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    var _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener($event) { i0.ɵɵrestoreView(_r23); var link_r21 = ctx.$implicit; var ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.activeLink = link_r21; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var link_r21 = ctx.$implicit;
    var ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r20.activeLink == link_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r21, " ");
} }
/**
 * @title Basic use of the tab nav bar
 */
var TabNavBarBasicExample = /** @class */ (function () {
    function TabNavBarBasicExample() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    TabNavBarBasicExample.prototype.toggleBackground = function () {
        this.background = this.background ? undefined : 'primary';
    };
    TabNavBarBasicExample.prototype.addLink = function () {
        this.links.push("Link " + (this.links.length + 1));
    };
    TabNavBarBasicExample.decorators = [
        { type: Component, args: [{
                    selector: 'tab-nav-bar-basic-example',
                    templateUrl: 'tab-nav-bar-basic-example.html',
                    styleUrls: ['tab-nav-bar-basic-example.css'],
                },] },
    ];
    TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
    TabNavBarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
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
    return TabNavBarBasicExample;
}());
export { TabNavBarBasicExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNDdEMsNEJBRWtDO0lBRC9CLGdPQUEyQjtJQUNJLFlBQVM7SUFBQSxpQkFBSTs7OztJQUE1Qyx1REFBNkI7SUFBRSxlQUFTO0lBQVQseUNBQVM7O0FEQTdDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFpQixTQUFTLENBQUM7S0FTdEM7SUFQQyxnREFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUM7SUFFRCx1Q0FBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O2dCQWhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsV0FBVyxFQUFFLGdDQUFnQztvQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7aUJBQzdDOzs4RkFDWSxxQkFBcUI7OERBQXJCLHFCQUFxQjtZQ1hsQyw4QkFDRTtZQUFBLGtFQUVrQztZQUNsQyw0QkFBeUI7WUFBQSw2QkFBYTtZQUFBLGlCQUFJO1lBQzVDLGlCQUFNO1lBRU4saUNBQ0U7WUFEc0Qsd0dBQVMsc0JBQWtCLElBQUM7WUFDbEYsb0NBQ0Y7WUFBQSxpQkFBUztZQUNULGlDQUNFO1lBRHNELHdHQUFTLGFBQVMsSUFBQztZQUN6RSwyQkFDRjtZQUFBLGlCQUFTOztZQVpZLGdEQUE4QjtZQUNqQyxlQUEwQjtZQUExQixtQ0FBMEI7O2dDREQ1QztDQXVCQyxBQWpCRCxJQWlCQztTQVpZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxXQUFXLEVBQUUsZ0NBQWdDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdXNlIG9mIHRoZSB0YWIgbmF2IGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiTmF2QmFyQmFzaWNFeGFtcGxlIHtcbiAgbGlua3MgPSBbJ0ZpcnN0JywgJ1NlY29uZCcsICdUaGlyZCddO1xuICBhY3RpdmVMaW5rID0gdGhpcy5saW5rc1swXTtcbiAgYmFja2dyb3VuZDogVGhlbWVQYWxldHRlID0gdW5kZWZpbmVkO1xuXG4gIHRvZ2dsZUJhY2tncm91bmQoKSB7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdGhpcy5iYWNrZ3JvdW5kID8gdW5kZWZpbmVkIDogJ3ByaW1hcnknO1xuICB9XG5cbiAgYWRkTGluaygpIHtcbiAgICB0aGlzLmxpbmtzLnB1c2goYExpbmsgJHt0aGlzLmxpbmtzLmxlbmd0aCArIDF9YCk7XG4gIH1cbn1cbiIsIjxuYXYgbWF0LXRhYi1uYXYtYmFyIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZFwiPlxuICA8YSBtYXQtdGFiLWxpbmsgKm5nRm9yPVwibGV0IGxpbmsgb2YgbGlua3NcIlxuICAgICAoY2xpY2spPVwiYWN0aXZlTGluayA9IGxpbmtcIlxuICAgICBbYWN0aXZlXT1cImFjdGl2ZUxpbmsgPT0gbGlua1wiPiB7e2xpbmt9fSA8L2E+XG4gIDxhIG1hdC10YWItbGluayBkaXNhYmxlZD5EaXNhYmxlZCBMaW5rPC9hPlxuPC9uYXY+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIiAoY2xpY2spPVwidG9nZ2xlQmFja2dyb3VuZCgpXCI+XG4gIFRvZ2dsZSBiYWNrZ3JvdW5kXG48L2J1dHRvbj5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIiAoY2xpY2spPVwiYWRkTGluaygpXCI+XG4gIEFkZCBsaW5rXG48L2J1dHRvbj5cbiJdfQ==