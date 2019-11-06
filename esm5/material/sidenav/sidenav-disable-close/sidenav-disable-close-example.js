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
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
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
            args: ['sidenav']
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1kaXNhYmxlLWNsb3NlL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7Ozs7SUNEckQsZ0RBRUU7SUFENEIsNE9BQXVCLFVBQVUsS0FBRTtJQUMvRCwyQ0FDRTtJQURvQixvT0FBd0IsUUFBUSxLQUFFO0lBQ3RELHlCQUFHO0lBQUEsaUNBQW9EO0lBQWpDLDZNQUFlLGVBQWUsS0FBRTtJQUFDLHNCQUFNO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUM1RSxpQkFBYztJQUVkLDJDQUNFO0lBQUEseUJBQUc7SUFBQSxpQ0FBNEM7SUFBekIsMExBQVMsVUFBYyxJQUFDO0lBQUMsb0JBQUk7SUFBQSxpQkFBUztJQUFBLGlCQUFJO0lBQ2hFLDBCQUFHO0lBQUEsYUFBeUI7SUFBQSxpQkFBSTtJQUNsQyxpQkFBc0I7SUFDeEIsaUJBQXdCOzs7SUFGakIsZ0JBQXlCO0lBQXpCLDJEQUF5Qjs7O0lBSWhDLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRFRyRSxvRUFBb0U7QUFDcEU7SUFBQTtRQVFFLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFPWixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0tBQ25HO0lBTkMsMENBQUssR0FBTCxVQUFNLE1BQWM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFiRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7aUJBQ2pEOzs7MEJBRUUsU0FBUyxTQUFDLFNBQVM7O3dHQURULDBCQUEwQjttRUFBMUIsMEJBQTBCOzs7Ozs7WUNUdkMsZ0hBRUU7WUFVRiwyRUFBd0I7O1lBWDBDLG9DQUFpQjtZQVc5RSxlQUFrQjtZQUFsQixxQ0FBa0I7O3FDRFp2QjtDQW9CQyxBQWhCRCxJQWdCQztTQVhZLDBCQUEwQjttQ0FBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRDs7a0JBRUUsU0FBUzttQkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNpZGVuYXZ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgd2l0aCBjdXN0b20gZXNjYXBlIGFuZCBiYWNrZHJvcCBjbGljayBiZWhhdmlvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtZGlzYWJsZS1jbG9zZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZEaXNhYmxlQ2xvc2VFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgnc2lkZW5hdicpIHNpZGVuYXY6IE1hdFNpZGVuYXY7XG5cbiAgcmVhc29uID0gJyc7XG5cbiAgY2xvc2UocmVhc29uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvbjtcbiAgICB0aGlzLnNpZGVuYXYuY2xvc2UoKTtcbiAgfVxuXG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lclxuICAgIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiAoYmFja2Ryb3BDbGljayk9XCJjbG9zZSgnYmFja2Ryb3AnKVwiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiAoa2V5ZG93bi5lc2NhcGUpPVwiY2xvc2UoJ2VzY2FwZScpXCIgZGlzYWJsZUNsb3NlPlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwiY2xvc2UoJ3RvZ2dsZSBidXR0b24nKVwiPlRvZ2dsZTwvYnV0dG9uPjwvcD5cbiAgPC9tYXQtc2lkZW5hdj5cblxuICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYub3BlbigpXCI+T3BlbjwvYnV0dG9uPjwvcD5cbiAgICA8cD5DbG9zZWQgZHVlIHRvOiB7e3JlYXNvbn19PC9wPlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==