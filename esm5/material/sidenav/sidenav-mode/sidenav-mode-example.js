import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/radio";
import * as i5 from "@angular/forms";
function SidenavModeExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3, 4);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 5);
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r24); var _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
    i0.ɵɵtext(5, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵelementStart(7, "mat-radio-group", 6);
    i0.ɵɵelementStart(8, "label");
    i0.ɵɵtext(9, "Mode:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-radio-button", 7);
    i0.ɵɵtext(11, "Over");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-radio-button", 8);
    i0.ɵɵtext(13, "Side");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-radio-button", 9);
    i0.ɵɵtext(15, "Push");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-sidenav-content");
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵelementStart(18, "button", 5);
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r24); var _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
    i0.ɵɵtext(19, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵelementStart(21, "mat-radio-group", 6);
    i0.ɵɵelementStart(22, "label");
    i0.ɵɵtext(23, "Mode:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-radio-button", 7);
    i0.ɵɵtext(25, "Over");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-radio-button", 8);
    i0.ɵɵtext(27, "Side");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-radio-button", 9);
    i0.ɵɵtext(29, "Push");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("mode", ctx_r20.mode.value);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("formControl", ctx_r20.mode);
    i0.ɵɵadvance(14);
    i0.ɵɵproperty("formControl", ctx_r20.mode);
} }
function SidenavModeExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Sidenav with configurable mode */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    templateUrl: 'sidenav-mode-example.html',
                    styleUrls: ['sidenav-mode-example.css'],
                },] },
    ];
    SidenavModeExample.ɵfac = function SidenavModeExample_Factory(t) { return new (t || SidenavModeExample)(); };
    SidenavModeExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavModeExample, selectors: [["sidenav-mode-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], [3, "mode"], ["sidenav", ""], ["mat-button", "", 3, "click"], [1, "example-radio-group", 3, "formControl"], ["value", "over"], ["value", "side"], ["value", "push"]], template: function SidenavModeExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SidenavModeExample_mat_sidenav_container_0_Template, 30, 3, "mat-sidenav-container", 0);
            i0.ɵɵtemplate(1, SidenavModeExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.shouldRun);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i3.MatButton, i4.MatRadioGroup, i5.NgControlStatus, i5.FormControlDirective, i4.MatRadioButton, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}"] });
    return SidenavModeExample;
}());
export { SidenavModeExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavModeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-mode-example',
                templateUrl: 'sidenav-mode-example.html',
                styleUrls: ['sidenav-mode-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtbW9kZS9zaWRlbmF2LW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ0QzQyxnREFDRTtJQUFBLHlDQUNFO0lBQUEseUJBQUc7SUFBQSxpQ0FBOEM7SUFBM0IsbUxBQVMsYUFBZ0IsSUFBQztJQUFDLHNCQUFNO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUNwRSx5QkFDRTtJQUFBLDBDQUNFO0lBQUEsNkJBQU87SUFBQSxxQkFBSztJQUFBLGlCQUFRO0lBQ3BCLDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3hELGlCQUFrQjtJQUNwQixpQkFBSTtJQUNOLGlCQUFjO0lBRWQsNENBQ0U7SUFBQSwwQkFBRztJQUFBLGtDQUE4QztJQUEzQixvTEFBUyxhQUFnQixJQUFDO0lBQUMsdUJBQU07SUFBQSxpQkFBUztJQUFBLGlCQUFJO0lBQ3BFLDBCQUNFO0lBQUEsMkNBQ0U7SUFBQSw4QkFBTztJQUFBLHNCQUFLO0lBQUEsaUJBQVE7SUFDcEIsNENBQStCO0lBQUEscUJBQUk7SUFBQSxpQkFBbUI7SUFDdEQsNENBQStCO0lBQUEscUJBQUk7SUFBQSxpQkFBbUI7SUFDdEQsNENBQStCO0lBQUEscUJBQUk7SUFBQSxpQkFBbUI7SUFDeEQsaUJBQWtCO0lBQ3BCLGlCQUFJO0lBQ04saUJBQXNCO0lBQ3hCLGlCQUF3Qjs7O0lBdkJBLGVBQW1CO0lBQW5CLHlDQUFtQjtJQUdRLGVBQW9CO0lBQXBCLDBDQUFvQjtJQVlwQixnQkFBb0I7SUFBcEIsMENBQW9COzs7SUFVdkUsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07O0FEdkJyRSw0Q0FBNEM7QUFDNUM7SUFBQTtRQU1FLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDO0tBQ25HOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtvQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7aUJBQ3hDOzt3RkFDWSxrQkFBa0I7MkRBQWxCLGtCQUFrQjtZQ1QvQix3R0FDRTtZQXlCRixtRUFBd0I7O1lBMUJ5QixvQ0FBaUI7WUEwQjdELGVBQWtCO1lBQWxCLHFDQUFrQjs7NkJEMUJ2QjtDQVlDLEFBUkQsSUFRQztTQUhZLGtCQUFrQjtrREFBbEIsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IHdpdGggY29uZmlndXJhYmxlIG1vZGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtbW9kZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW1vZGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtbW9kZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2TW9kZUV4YW1wbGUge1xuICBtb2RlID0gbmV3IEZvcm1Db250cm9sKCdvdmVyJyk7XG4gIHNob3VsZFJ1biA9IFsvKF58XFwuKXBsbmtyXFwuY28kLywgLyhefFxcLilzdGFja2JsaXR6XFwuaW8kL10uc29tZShoID0+IGgudGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCkpO1xufVxuIiwiPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgKm5nSWY9XCJzaG91bGRSdW5cIj5cbiAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IFttb2RlXT1cIm1vZGUudmFsdWVcIj5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgPHA+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFtmb3JtQ29udHJvbF09XCJtb2RlXCI+XG4gICAgICAgIDxsYWJlbD5Nb2RlOjwvbGFiZWw+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwib3ZlclwiPk92ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic2lkZVwiPlNpZGU8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwicHVzaFwiPlB1c2g8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3A+XG4gIDwvbWF0LXNpZGVuYXY+XG5cbiAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgIDxwPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbZm9ybUNvbnRyb2xdPVwibW9kZVwiPlxuICAgICAgICA8bGFiZWw+TW9kZTo8L2xhYmVsPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9wPlxuICA8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==