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
var _c0 = ["snav", ""];
function SidenavResponsiveExample_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var nav_r46 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(nav_r46);
} }
function SidenavResponsiveExample_div_0_p_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var content_r47 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(content_r47);
} }
function SidenavResponsiveExample_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelementStart(1, "mat-toolbar", 3);
    i0.ɵɵelementStart(2, "button", 4);
    i0.ɵɵlistener("click", function SidenavResponsiveExample_div_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r49); var _r43 = i0.ɵɵreference(9); return _r43.toggle(); });
    i0.ɵɵelementStart(3, "mat-icon");
    i0.ɵɵtext(4, "menu");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "h1", 5);
    i0.ɵɵtext(6, "Responsive App");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "mat-sidenav-container", 6);
    i0.ɵɵelementStart(8, "mat-sidenav", 7, _c0);
    i0.ɵɵelementStart(10, "mat-nav-list");
    i0.ɵɵtemplate(11, SidenavResponsiveExample_div_0_a_11_Template, 2, 1, "a", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-sidenav-content");
    i0.ɵɵtemplate(13, SidenavResponsiveExample_div_0_p_13_Template, 2, 1, "p", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = i0.ɵɵnextContext();
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
/** @title Responsive sidenav */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavResponsiveExample.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavResponsiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-responsive-example',
                    templateUrl: 'sidenav-responsive-example.html',
                    styleUrls: ['sidenav-responsive-example.css'],
                },] },
    ];
    /** @nocollapse */
    SidenavResponsiveExample.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    SidenavResponsiveExample.ɵfac = function SidenavResponsiveExample_Factory(t) { return new (t || SidenavResponsiveExample)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.MediaMatcher)); };
    SidenavResponsiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavResponsiveExample, selectors: [["sidenav-responsive-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "example-is-mobile", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", "."]], template: function SidenavResponsiveExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavResponsiveExample_div_0_Template, 14, 6, "div", 0);
            i0.ɵɵtemplate(1, SidenavResponsiveExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i2.NgIf, i3.MatToolbar, i4.MatButton, i5.MatIcon, i6.MatSidenavContainer, i6.MatSidenav, i7.MatNavList, i2.NgForOf, i6.MatSidenavContent, i7.MatListItem], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}"] });
    return SidenavResponsiveExample;
}());
export { SidenavResponsiveExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavResponsiveExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.MediaMatcher }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtcmVzcG9uc2l2ZS9zaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQVksTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7O0lDVTlELDZCQUE4RDtJQUFBLFlBQU87SUFBQSxpQkFBSTs7O0lBQVgsZUFBTztJQUFQLDZCQUFPOzs7SUFLdkUseUJBQXlDO0lBQUEsWUFBVztJQUFBLGlCQUFJOzs7SUFBZixlQUFXO0lBQVgsaUNBQVc7Ozs7SUFoQjFELDhCQUNFO0lBQUEsc0NBQ0U7SUFBQSxpQ0FBZ0Q7SUFBeEIsdUtBQVMsYUFBYSxJQUFDO0lBQUMsZ0NBQVU7SUFBQSxvQkFBSTtJQUFBLGlCQUFXO0lBQUEsaUJBQVM7SUFDbEYsNkJBQTZCO0lBQUEsOEJBQWM7SUFBQSxpQkFBSztJQUNsRCxpQkFBYztJQUVkLGdEQUVFO0lBQUEsMkNBRUU7SUFBQSxxQ0FDRTtJQUFBLDZFQUE4RDtJQUNoRSxpQkFBZTtJQUNqQixpQkFBYztJQUVkLDRDQUNFO0lBQUEsNkVBQXlDO0lBQzNDLGlCQUFzQjtJQUN4QixpQkFBd0I7SUFDMUIsaUJBQU07OztJQW5CeUIsZ0VBQStDO0lBT3JELGVBQW1EO0lBQW5ELHdFQUFtRDtJQUNyRCxlQUE4QztJQUE5QyxvRUFBOEMsZ0RBQUE7SUFHN0IsZUFBNkI7SUFBN0IsMkNBQTZCO0lBSzVELGVBQXFDO0lBQXJDLCtDQUFxQzs7O0lBSzlDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRGxCckUsZ0NBQWdDO0FBQ2hDO0lBbUJFLGtDQUFZLGlCQUFvQyxFQUFFLEtBQW1CO1FBWHJFLGNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFFLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLGVBQVksQ0FBQyxHQUFHLENBQUMsQ0FBRSxFQUFuQixDQUFtQixDQUFDLENBQUM7UUFFcEUsa0JBQWEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLEVBQUUsRUFBQyxFQUFFO1lBQ3JDLE9BQUEsK2RBSXdGO1FBSnhGLENBSXdGLENBQUMsQ0FBQztRQWM5RixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO1FBVGhHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxjQUFNLE9BQUEsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEVBQWpDLENBQWlDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM3RCxDQUFDOztnQkEzQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2lCQUM5Qzs7OztnQkFQTyxpQkFBaUI7Z0JBRGpCLFlBQVk7O29HQVNQLHdCQUF3QjtpRUFBeEIsd0JBQXdCO1lDVHJDLDBFQUNFO1lBb0JGLHlFQUF3Qjs7WUFyQnVELG9DQUFpQjtZQXFCM0YsZUFBa0I7WUFBbEIscUNBQWtCOzttQ0RyQnZCO0NBa0NDLEFBOUJELElBOEJDO1NBekJZLHdCQUF3QjttQ0FBeEIsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQzthQUM5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TWVkaWFNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgT25EZXN0cm95fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBSZXNwb25zaXZlIHNpZGVuYXYgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBtb2JpbGVRdWVyeTogTWVkaWFRdWVyeUxpc3Q7XG5cbiAgZmlsbGVyTmF2ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1MH0sIChfLCBpKSA9PiBgTmF2IEl0ZW0gJHtpICsgMX1gKTtcblxuICBmaWxsZXJDb250ZW50ID0gQXJyYXkuZnJvbSh7bGVuZ3RoOiA1MH0sICgpID0+XG4gICAgICBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXRcbiAgICAgICBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jb1xuICAgICAgIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpblxuICAgICAgIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIGNpbGx1bSBkb2xvcmUgZXUgZnVnaWF0IG51bGxhIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdFxuICAgICAgIGN1cGlkYXRhdCBub24gcHJvaWRlbnQsIHN1bnQgaW4gY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uYCk7XG5cbiAgcHJpdmF0ZSBfbW9iaWxlUXVlcnlMaXN0ZW5lcjogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIG1lZGlhOiBNZWRpYU1hdGNoZXIpIHtcbiAgICB0aGlzLm1vYmlsZVF1ZXJ5ID0gbWVkaWEubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNjAwcHgpJyk7XG4gICAgdGhpcy5fbW9iaWxlUXVlcnlMaXN0ZW5lciA9ICgpID0+IGNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm1vYmlsZVF1ZXJ5LmFkZExpc3RlbmVyKHRoaXMuX21vYmlsZVF1ZXJ5TGlzdGVuZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tb2JpbGVRdWVyeS5yZW1vdmVMaXN0ZW5lcih0aGlzLl9tb2JpbGVRdWVyeUxpc3RlbmVyKTtcbiAgfVxuXG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2NsYXNzLmV4YW1wbGUtaXMtbW9iaWxlXT1cIm1vYmlsZVF1ZXJ5Lm1hdGNoZXNcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3M9XCJleGFtcGxlLXRvb2xiYXJcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwic25hdi50b2dnbGUoKVwiPjxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICA8aDEgY2xhc3M9XCJleGFtcGxlLWFwcC1uYW1lXCI+UmVzcG9uc2l2ZSBBcHA8L2gxPlxuICA8L21hdC10b29sYmFyPlxuXG4gIDxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXYtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUubWFyZ2luVG9wLnB4XT1cIm1vYmlsZVF1ZXJ5Lm1hdGNoZXMgPyA1NiA6IDBcIj5cbiAgICA8bWF0LXNpZGVuYXYgI3NuYXYgW21vZGVdPVwibW9iaWxlUXVlcnkubWF0Y2hlcyA/ICdvdmVyJyA6ICdzaWRlJ1wiXG4gICAgICAgICAgICAgICAgIFtmaXhlZEluVmlld3BvcnRdPVwibW9iaWxlUXVlcnkubWF0Y2hlc1wiIGZpeGVkVG9wR2FwPVwiNTZcIj5cbiAgICAgIDxtYXQtbmF2LWxpc3Q+XG4gICAgICAgIDxhIG1hdC1saXN0LWl0ZW0gcm91dGVyTGluaz1cIi5cIiAqbmdGb3I9XCJsZXQgbmF2IG9mIGZpbGxlck5hdlwiPnt7bmF2fX08L2E+XG4gICAgICA8L21hdC1uYXYtbGlzdD5cbiAgICA8L21hdC1zaWRlbmF2PlxuXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgICA8cCAqbmdGb3I9XCJsZXQgY29udGVudCBvZiBmaWxsZXJDb250ZW50XCI+e3tjb250ZW50fX08L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19