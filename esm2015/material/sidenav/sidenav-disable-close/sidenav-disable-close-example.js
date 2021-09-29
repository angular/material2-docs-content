import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
const _c0 = ["sidenav"];
function SidenavDisableCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵlistener("backdropClick", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_container_backdropClick_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.close("backdrop"); });
    i0.ɵɵelementStart(1, "mat-sidenav", 3, 4);
    i0.ɵɵlistener("keydown.escape", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_keydown_escape_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close("escape"); });
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 5);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.close("toggle button"); });
    i0.ɵɵtext(5, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-sidenav-content");
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵelementStart(8, "button", 5);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(2); return _r2.open(); });
    i0.ɵɵtext(9, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("Closed due to: ", ctx_r0.reason, "");
} }
function SidenavDisableCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Sidenav with custom escape and backdrop click behavior */
export class SidenavDisableCloseExample {
    constructor() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
    close(reason) {
        this.reason = reason;
        this.sidenav.close();
    }
}
SidenavDisableCloseExample.ɵfac = function SidenavDisableCloseExample_Factory(t) { return new (t || SidenavDisableCloseExample)(); };
SidenavDisableCloseExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavDisableCloseExample, selectors: [["sidenav-disable-close-example"]], viewQuery: function SidenavDisableCloseExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
    } }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "backdropClick", 4, "ngIf"], [4, "ngIf"], [1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["mat-button", "", 3, "click"]], template: function SidenavDisableCloseExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavDisableCloseExample_mat_sidenav_container_0_Template, 12, 1, "mat-sidenav-container", 0);
        i0.ɵɵtemplate(1, SidenavDisableCloseExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i3.MatButton, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavDisableCloseExample, [{
        type: Component,
        args: [{ selector: 'sidenav-disable-close-example', template: "<mat-sidenav-container\n    class=\"example-container\" (backdropClick)=\"close('backdrop')\" *ngIf=\"shouldRun\">\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <p><button mat-button (click)=\"close('toggle button')\">Toggle</button></p>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">Open</button></p>\n    <p>Closed due to: {{reason}}</p>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"] }]
    }], null, { sidenav: [{
            type: ViewChild,
            args: ['sidenav']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7OztJQ0RyRCxnREFDb0Y7SUFBdEQsd05BQWlCLGFBQU0sVUFBVSxDQUFDLElBQUM7SUFDL0QseUNBQXNFO0lBQWhELGdOQUFrQixhQUFNLFFBQVEsQ0FBQyxJQUFDO0lBQ3RELHlCQUFHO0lBQUEsaUNBQW9EO0lBQWpDLHlMQUFTLGFBQU0sZUFBZSxDQUFDLElBQUM7SUFBQyxzQkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDNUUsaUJBQWM7SUFFZCwyQ0FBcUI7SUFDbkIseUJBQUc7SUFBQSxpQ0FBNEM7SUFBekIscUxBQVMsVUFBYyxJQUFDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUFBLGlCQUFJO0lBQ2hFLDBCQUFHO0lBQUEsYUFBeUI7SUFBQSxpQkFBSTtJQUNsQyxpQkFBc0I7SUFDeEIsaUJBQXdCOzs7SUFGakIsZ0JBQXlCO0lBQXpCLDJEQUF5Qjs7O0lBSWhDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRFRyRSxvRUFBb0U7QUFNcEUsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQVFFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFPWixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0tBQ25HO0lBTkMsS0FBSyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOztvR0FSVSwwQkFBMEI7NkVBQTFCLDBCQUEwQjs7Ozs7O1FDVHZDLGdIQVV3QjtRQUV4QiwyRUFBcUU7O1FBWEYsb0NBQWU7UUFXNUUsZUFBZ0I7UUFBaEIscUNBQWdCOzt1RkRIVCwwQkFBMEI7Y0FMdEMsU0FBUzsyQkFDRSwrQkFBK0I7Z0JBS25CLE9BQU87a0JBQTVCLFNBQVM7bUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTaWRlbmF2fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IHdpdGggY3VzdG9tIGVzY2FwZSBhbmQgYmFja2Ryb3AgY2xpY2sgYmVoYXZpb3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoJ3NpZGVuYXYnKSBzaWRlbmF2OiBNYXRTaWRlbmF2O1xuXG4gIHJlYXNvbiA9ICcnO1xuXG4gIGNsb3NlKHJlYXNvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5yZWFzb24gPSByZWFzb247XG4gICAgdGhpcy5zaWRlbmF2LmNsb3NlKCk7XG4gIH1cblxuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXJcbiAgICBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKGJhY2tkcm9wQ2xpY2spPVwiY2xvc2UoJ2JhY2tkcm9wJylcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgKGtleWRvd24uZXNjYXBlKT1cImNsb3NlKCdlc2NhcGUnKVwiIGRpc2FibGVDbG9zZT5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImNsb3NlKCd0b2dnbGUgYnV0dG9uJylcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2Lm9wZW4oKVwiPk9wZW48L2J1dHRvbj48L3A+XG4gICAgPHA+Q2xvc2VkIGR1ZSB0bzoge3tyZWFzb259fTwvcD5cbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=