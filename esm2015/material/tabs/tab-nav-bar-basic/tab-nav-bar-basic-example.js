/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tabs/tab-nav-bar-basic/tab-nav-bar-basic-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const link_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.activeLink = link_r1; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r0.activeLink == link_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r1, " ");
} }
/**
 * \@title Basic use of the tab nav bar
 */
let TabNavBarBasicExample = /** @class */ (() => {
    /**
     * \@title Basic use of the tab nav bar
     */
    class TabNavBarBasicExample {
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
    /** @nocollapse */ TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
    /** @nocollapse */ TabNavBarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "nav", 0);
            i0.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
            i0.ɵɵelementStart(2, "a", 2);
            i0.ɵɵtext(3, "Disabled Link");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener() { return ctx.toggleBackground(); });
            i0.ɵɵtext(5, " Toggle background\n");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "button", 3);
            i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener() { return ctx.addLink(); });
            i0.ɵɵtext(7, " Add link\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("backgroundColor", ctx.background);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.links);
        } }, directives: [i1.MatTabNav, i2.NgForOf, i1.MatTabLink, i3.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
    return TabNavBarBasicExample;
})();
export { TabNavBarBasicExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TabNavBarBasicExample.prototype.links;
    /** @type {?} */
    TabNavBarBasicExample.prototype.activeLink;
    /** @type {?} */
    TabNavBarBasicExample.prototype.background;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztJQ0N0Qyw0QkFFa0M7SUFEL0IseU5BQTJCO0lBQ0ksWUFBUztJQUFBLGlCQUFJOzs7O0lBQTVDLHFEQUE2QjtJQUFFLGVBQVM7SUFBVCx3Q0FBUzs7Ozs7QURHN0M7Ozs7SUFBQSxNQUthLHFCQUFxQjtRQUxsQztZQU1FLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsZUFBVSxHQUFpQixTQUFTLENBQUM7U0FTdEM7Ozs7UUFQQyxnQkFBZ0I7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzVELENBQUM7Ozs7UUFFRCxPQUFPO1lBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7OztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLFdBQVcsRUFBRSxnQ0FBZ0M7b0JBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7aUhBQ1kscUJBQXFCO2lGQUFyQixxQkFBcUI7WUNYbEMsOEJBQ0U7WUFBQSxrRUFFa0M7WUFDbEMsNEJBQXlCO1lBQUEsNkJBQWE7WUFBQSxpQkFBSTtZQUM1QyxpQkFBTTtZQUVOLGlDQUNFO1lBRHNELGtHQUFTLHNCQUFrQixJQUFDO1lBQ2xGLG9DQUNGO1lBQUEsaUJBQVM7WUFDVCxpQ0FDRTtZQURzRCxrR0FBUyxhQUFTLElBQUM7WUFDekUsMkJBQ0Y7WUFBQSxpQkFBUzs7WUFaWSxnREFBOEI7WUFDakMsZUFBMEI7WUFBMUIsbUNBQTBCOztnQ0RENUM7S0F1QkM7U0FaWSxxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0M7Ozs7SUFFQyxzQ0FBcUM7O0lBQ3JDLDJDQUEyQjs7SUFDM0IsMkNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB1c2Ugb2YgdGhlIHRhYiBuYXYgYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItbmF2LWJhci1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJOYXZCYXJCYXNpY0V4YW1wbGUge1xuICBsaW5rcyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzWzBdO1xuICBiYWNrZ3JvdW5kOiBUaGVtZVBhbGV0dGUgPSB1bmRlZmluZWQ7XG5cbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQgPyB1bmRlZmluZWQgOiAncHJpbWFyeSc7XG4gIH1cblxuICBhZGRMaW5rKCkge1xuICAgIHRoaXMubGlua3MucHVzaChgTGluayAke3RoaXMubGlua3MubGVuZ3RoICsgMX1gKTtcbiAgfVxufVxuIiwiPG5hdiBtYXQtdGFiLW5hdi1iYXIgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kXCI+XG4gIDxhIG1hdC10YWItbGluayAqbmdGb3I9XCJsZXQgbGluayBvZiBsaW5rc1wiXG4gICAgIChjbGljayk9XCJhY3RpdmVMaW5rID0gbGlua1wiXG4gICAgIFthY3RpdmVdPVwiYWN0aXZlTGluayA9PSBsaW5rXCI+IHt7bGlua319IDwvYT5cbiAgPGEgbWF0LXRhYi1saW5rIGRpc2FibGVkPkRpc2FibGVkIExpbms8L2E+XG48L25hdj5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVCYWNrZ3JvdW5kKClcIj5cbiAgVG9nZ2xlIGJhY2tncm91bmRcbjwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJhZGRMaW5rKClcIj5cbiAgQWRkIGxpbmtcbjwvYnV0dG9uPlxuIl19