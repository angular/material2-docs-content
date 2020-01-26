/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/sidenav/sidenav-responsive/sidenav-responsive-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/layout";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/toolbar";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/icon";
import * as i6 from "@angular/material/sidenav";
import * as i7 from "@angular/material/list";
function SidenavResponsiveExample_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 11);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const nav_r46 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(nav_r46);
} }
function SidenavResponsiveExample_div_0_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const content_r47 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(content_r47);
} }
function SidenavResponsiveExample_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "mat-toolbar", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵlistener("click", function SidenavResponsiveExample_div_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r49); const _r43 = i0.ɵɵreference(9); return _r43.toggle(); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "menu");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1", 5);
    i0.ɵɵtext(6, "Responsive App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-sidenav-container", 6);
    i0.ɵɵelementStart(8, "mat-sidenav", 7, 8);
    i0.ɵɵelementStart(10, "mat-nav-list");
    i0.ɵɵtemplate(11, SidenavResponsiveExample_div_0_a_11_Template, 2, 1, "a", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-sidenav-content");
    i0.ɵɵtemplate(13, SidenavResponsiveExample_div_0_p_13_Template, 2, 1, "p", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r41 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("example-is-mobile", ctx_r41.mobileQuery.matches);
    i0.ɵɵadvance(7);
    i0.ɵɵstyleProp("margin-top", ctx_r41.mobileQuery.matches ? 56 : 0, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", ctx_r41.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx_r41.mobileQuery.matches);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r41.fillerNav);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r41.fillerContent);
} }
function SidenavResponsiveExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Responsive sidenav
 */
export class SidenavResponsiveExample {
    /**
     * @param {?} changeDetectorRef
     * @param {?} media
     */
    constructor(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, (/**
         * @param {?} _
         * @param {?} i
         * @return {?}
         */
        (_, i) => `Nav Item ${i + 1}`));
        this.fillerContent = Array.from({ length: 50 }, (/**
         * @return {?}
         */
        () => `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`));
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
         * @param {?} h
         * @return {?}
         */
        h => h.test(window.location.host)));
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = (/**
         * @return {?}
         */
        () => changeDetectorRef.detectChanges());
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
SidenavResponsiveExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            },] },
];
/** @nocollapse */
SidenavResponsiveExample.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: MediaMatcher }
];
/** @nocollapse */ SidenavResponsiveExample.ɵfac = function SidenavResponsiveExample_Factory(t) { return new (t || SidenavResponsiveExample)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.MediaMatcher)); };
/** @nocollapse */ SidenavResponsiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavResponsiveExample, selectors: [["sidenav-responsive-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "example-is-mobile", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", "."]], template: function SidenavResponsiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavResponsiveExample_div_0_Template, 14, 8, "div", 0);
        i0.ɵɵtemplate(1, SidenavResponsiveExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatButton, i5.MatIcon, i6.MatSidenavContainer, i6.MatSidenav, i7.MatNavList, i2.NgForOf, i6.MatSidenavContent, i7.MatListItem], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavResponsiveExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.MediaMatcher }]; }, null); })();
if (false) {
    /** @type {?} */
    SidenavResponsiveExample.prototype.mobileQuery;
    /** @type {?} */
    SidenavResponsiveExample.prototype.fillerNav;
    /** @type {?} */
    SidenavResponsiveExample.prototype.fillerContent;
    /**
     * @type {?}
     * @private
     */
    SidenavResponsiveExample.prototype._mobileQueryListener;
    /** @type {?} */
    SidenavResponsiveExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtcmVzcG9uc2l2ZS9zaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUFFLFNBQVMsRUFBWSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztJQ1U5RCw2QkFBOEQ7SUFBQSxZQUFPO0lBQUEsaUJBQUk7OztJQUFYLGVBQU87SUFBUCw2QkFBTzs7O0lBS3ZFLHlCQUF5QztJQUFBLFlBQVc7SUFBQSxpQkFBSTs7O0lBQWYsZUFBVztJQUFYLGlDQUFXOzs7O0lBaEIxRCw4QkFDRTtJQUFBLHNDQUNFO0lBQUEsaUNBQWdEO0lBQXhCLHlLQUFTLGFBQWEsSUFBQztJQUFDLGdDQUFVO0lBQUEsb0JBQUk7SUFBQSxpQkFBVztJQUFBLGlCQUFTO0lBQ2xGLDZCQUE2QjtJQUFBLDhCQUFjO0lBQUEsaUJBQUs7SUFDbEQsaUJBQWM7SUFFZCxnREFFRTtJQUFBLHlDQUVFO0lBQUEscUNBQ0U7SUFBQSw2RUFBOEQ7SUFDaEUsaUJBQWU7SUFDakIsaUJBQWM7SUFFZCw0Q0FDRTtJQUFBLDhFQUF5QztJQUMzQyxpQkFBc0I7SUFDeEIsaUJBQXdCO0lBQzFCLGlCQUFNOzs7SUFuQnlCLGdFQUErQztJQU9yRCxlQUFtRDtJQUFuRCx3RUFBbUQ7SUFDckQsZUFBOEM7SUFBOUMsb0VBQThDLGdEQUFBO0lBRzdCLGVBQTZCO0lBQTdCLDJDQUE2QjtJQUs1RCxlQUFxQztJQUFyQywrQ0FBcUM7OztJQUs5QywyQkFBd0I7SUFBQSx1REFBdUM7SUFBQSxpQkFBTTs7Ozs7QURackUsTUFBTSxPQUFPLHdCQUF3Qjs7Ozs7SUFjbkMsWUFBWSxpQkFBb0MsRUFBRSxLQUFtQjtRQVhyRSxjQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7Ozs7O1FBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBQyxDQUFDO1FBRXBFLGtCQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUM7OztRQUFFLEdBQUcsRUFBRSxDQUMxQzs7Ozs4RkFJd0YsRUFBQyxDQUFDO1FBYzlGLGNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUM7UUFUaEcsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQjs7O1FBQUcsR0FBRyxFQUFFLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLENBQUEsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7WUFQTyxpQkFBaUI7WUFEakIsWUFBWTs7Z0dBU1Asd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNUckMsMEVBQ0U7UUFvQkYseUVBQXdCOztRQXJCdUQsb0NBQWlCO1FBcUIzRixlQUFrQjtRQUFsQixxQ0FBa0I7O2tERFpWLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLGlDQUFpQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7YUFDOUM7Ozs7SUFFQywrQ0FBNEI7O0lBRTVCLDZDQUFvRTs7SUFFcEUsaURBSzhGOzs7OztJQUU5Rix3REFBeUM7O0lBWXpDLDZDQUFrRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBSZXNwb25zaXZlIHNpZGVuYXYgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtb2JpbGVRdWVyeTogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgZmlsbGVyTmF2ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1MH0sIChfLCBpKSA9PiBgTmF2IEl0ZW0gJHtpICsgMX1gKTtcblxuICBmaWxsZXJDb250ZW50ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1MH0sICgpID0+XG4gICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXRcbiAgICAgICBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xuICAgICAgIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdFxuICAgICAgIGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XG5cbiAgcHJpdmF0ZSBfbW9iaWxlUXVlcnlMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG1lZGlhOiBNZWRpYU1hdGNoZXIpIHtcbiAgICB0aGlzLm1vYmlsZVF1ZXJ5ID0gbWVkaWEubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjAwcHgpJyk7XG4gICAgdGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lciA9ICgpID0+IGNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm1vYmlsZVF1ZXJ5LmFkZExpc3RlbmVyKHRoaXMuX21vYmlsZVF1ZXJ5TGlzdGVuZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb2JpbGVRdWVyeS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyKTtcbiAgfVxuXG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2NsYXNzLmV4YW1wbGUtaXMtbW9iaWxlXT1cIm1vYmlsZVF1ZXJ5Lm1hdGNoZXNcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleGFtcGxlLXRvb2xiYXJcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic25hdi50b2dnbGUoKVwiPjxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICA8aDEgY2xhc3M9XCJleGFtcGxlLWFwcC1uYW1lXCI+UmVzcG9uc2l2ZSBBcHA8L2gxPlxuICA8L21hdC10b29sYmFyPlxuXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXYtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIm1vYmlsZVF1ZXJ5Lm1hdGNoZXMgPyA1NiA6IDBcIj5cbiAgICA8bWF0LXNpZGVuYXYgI3NuYXYgW21vZGVdPVwibW9iaWxlUXVlcnkubWF0Y2hlcyA/ICdvdmVyJyA6ICdzaWRlJ1wiXG4gICAgICAgICAgICAgICAgIFtmaXhlZEluVmlld3BvcnRdPVwibW9iaWxlUXVlcnkubWF0Y2hlc1wiIGZpeGVkVG9wR2FwPVwiNTZcIj5cbiAgICAgIDxtYXQtbmF2LWxpc3Q+XG4gICAgICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cIi5cIiAqbmdGb3I9XCJsZXQgbmF2IG9mIGZpbGxlck5hdlwiPnt7bmF2fX08L2E+XG4gICAgICA8L21hdC1uYXYtbGlzdD5cbiAgICA8L21hdC1zaWRlbmF2PlxuXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgICA8cCAqbmdGb3I9XCJsZXQgY29udGVudCBvZiBmaWxsZXJDb250ZW50XCI+e3tjb250ZW50fX08L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19