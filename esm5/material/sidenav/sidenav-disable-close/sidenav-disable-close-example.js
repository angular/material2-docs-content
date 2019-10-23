import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
var _c0 = ["sidenav"];
var _c1 = ["sidenav", ""];
function SidenavDisableCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵlistener("backdropClick", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_container_backdropClick_0_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.close("backdrop"); });
    i0.ɵɵelementStart(1, "mat-sidenav", 3, _c1);
    i0.ɵɵlistener("keydown.escape", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_keydown_escape_1_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.close("escape"); });
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r11); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.close("toggle button"); });
    i0.ɵɵtext(5, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "mat-sidenav-content");
    i0.ɵɵelementStart(7, "p");
    i0.ɵɵelementStart(8, "button", 4);
    i0.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_8_listener($event) { i0.ɵɵrestoreView(_r11); var _r9 = i0.ɵɵreference(2); return _r9.open(); });
    i0.ɵɵtext(9, "Open");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "p");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(11);
    i0.ɵɵtextInterpolate1("Closed due to: ", ctx_r7.reason, "");
} }
function SidenavDisableCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Sidenav with custom escape and backdrop click behavior */
var SidenavDisableCloseExample = /** @class */ (function () {
    function SidenavDisableCloseExample() {
        this.reason = '';
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavDisableCloseExample.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavDisableCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    templateUrl: 'sidenav-disable-close-example.html',
                    styleUrls: ['sidenav-disable-close-example.css'],
                },] },
    ];
    SidenavDisableCloseExample.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['sidenav', { static: false },] }]
    };
    SidenavDisableCloseExample.ɵfac = function SidenavDisableCloseExample_Factory(t) { return new (t || SidenavDisableCloseExample)(); };
    SidenavDisableCloseExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavDisableCloseExample, selectors: [["sidenav-disable-close-example"]], viewQuery: function SidenavDisableCloseExample_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.sidenav = _t.first);
        } }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "backdropClick", 4, "ngIf"], [4, "ngIf"], [1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["mat-button", "", 3, "click"]], template: function SidenavDisableCloseExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavDisableCloseExample_mat_sidenav_container_0_Template, 12, 1, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavDisableCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i3.MatButton, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavDisableCloseExample;
}());
export { SidenavDisableCloseExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavDisableCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-disable-close-example',
                templateUrl: 'sidenav-disable-close-example.html',
                styleUrls: ['sidenav-disable-close-example.css'],
            }]
    }], null, { sidenav: [{
            type: ViewChild,
            args: ['sidenav', { static: false }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWRpc2FibGUtY2xvc2Uvc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWRpc2FibGUtY2xvc2Uvc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztJQ0RyRCxnREFFRTtJQUQ0Qiw0T0FBdUIsVUFBVSxLQUFFO0lBQy9ELDJDQUNFO0lBRG9CLG9PQUF3QixRQUFRLEtBQUU7SUFDdEQseUJBQUc7SUFBQSxpQ0FBb0Q7SUFBakMsNk1BQWUsZUFBZSxLQUFFO0lBQUMsc0JBQU07SUFBQSxpQkFBUztJQUFBLGlCQUFJO0lBQzVFLGlCQUFjO0lBRWQsMkNBQ0U7SUFBQSx5QkFBRztJQUFBLGlDQUE0QztJQUF6QiwwTEFBUyxVQUFjLElBQUM7SUFBQyxvQkFBSTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDaEUsMEJBQUc7SUFBQSxhQUF5QjtJQUFBLGlCQUFJO0lBQ2xDLGlCQUFzQjtJQUN4QixpQkFBd0I7OztJQUZqQixnQkFBeUI7SUFBekIsMkRBQXlCOzs7SUFJaEMsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07O0FEVHJFLG9FQUFvRTtBQUNwRTtJQUFBO1FBUUUsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQU9aLGNBQVMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLHVCQUF1QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixDQUFDLENBQUM7S0FDbkc7SUFOQywwQ0FBSyxHQUFMLFVBQU0sTUFBYztRQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxXQUFXLEVBQUUsb0NBQW9DO29CQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQztpQkFDakQ7OzswQkFFRSxTQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7d0dBRDFCLDBCQUEwQjttRUFBMUIsMEJBQTBCOzs7Ozs7WUNUdkMsZ0hBRUU7WUFVRiwyRUFBd0I7O1lBWDBDLG9DQUFpQjtZQVc5RSxlQUFrQjtZQUFsQixxQ0FBa0I7O3FDRFp2QjtDQW9CQyxBQWhCRCxJQWdCQztTQVhZLDBCQUEwQjttQ0FBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7a0JBRUUsU0FBUzttQkFBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNpZGVuYXZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgd2l0aCBjdXN0b20gZXNjYXBlIGFuZCBiYWNrZHJvcCBjbGljayBiZWhhdmlvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZEaXNhYmxlQ2xvc2VFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicsIHtzdGF0aWM6IGZhbHNlfSkgc2lkZW5hdjogTWF0U2lkZW5hdjtcblxuICByZWFzb24gPSAnJztcblxuICBjbG9zZShyZWFzb246IHN0cmluZykge1xuICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgIHRoaXMuc2lkZW5hdi5jbG9zZSgpO1xuICB9XG5cbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyXG4gICAgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIChiYWNrZHJvcENsaWNrKT1cImNsb3NlKCdiYWNrZHJvcCcpXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IChrZXlkb3duLmVzY2FwZSk9XCJjbG9zZSgnZXNjYXBlJylcIiBkaXNhYmxlQ2xvc2U+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJjbG9zZSgndG9nZ2xlIGJ1dHRvbicpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICA8L21hdC1zaWRlbmF2PlxuXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi5vcGVuKClcIj5PcGVuPC9idXR0b24+PC9wPlxuICAgIDxwPkNsb3NlZCBkdWUgdG86IHt7cmVhc29ufX08L3A+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19