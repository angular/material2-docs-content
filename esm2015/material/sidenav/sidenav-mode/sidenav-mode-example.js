/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/radio";
import * as i5 from "@angular/forms";
const _c0 = ["sidenav", ""];
function SidenavModeExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3, _c0);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r24); const _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
    i0.ɵɵtext(5, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p");
    i0.ɵɵelementStart(7, "mat-radio-group", 5);
    i0.ɵɵelementStart(8, "label");
    i0.ɵɵtext(9, "Mode:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-radio-button", 6);
    i0.ɵɵtext(11, "Over");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "mat-radio-button", 7);
    i0.ɵɵtext(13, "Side");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "mat-radio-button", 8);
    i0.ɵɵtext(15, "Push");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(16, "mat-sidenav-content");
    i0.ɵɵelementStart(17, "p");
    i0.ɵɵelementStart(18, "button", 4);
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r24); const _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
    i0.ɵɵtext(19, "Toggle");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "p");
    i0.ɵɵelementStart(21, "mat-radio-group", 5);
    i0.ɵɵelementStart(22, "label");
    i0.ɵɵtext(23, "Mode:");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(24, "mat-radio-button", 6);
    i0.ɵɵtext(25, "Over");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(26, "mat-radio-button", 7);
    i0.ɵɵtext(27, "Side");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(28, "mat-radio-button", 8);
    i0.ɵɵtext(29, "Push");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
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
/**
 * \@title Sidenav with configurable mode
 */
export class SidenavModeExample {
    constructor() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some((/**
         * @param {?} h
         * @return {?}
         */
        h => h.test(window.location.host)));
    }
}
SidenavModeExample.decorators = [
    { type: Component, args: [{
                selector: 'sidenav-mode-example',
                templateUrl: 'sidenav-mode-example.html',
                styleUrls: ['sidenav-mode-example.css'],
            },] },
];
/** @nocollapse */ SidenavModeExample.ngFactoryDef = function SidenavModeExample_Factory(t) { return new (t || SidenavModeExample)(); };
/** @nocollapse */ SidenavModeExample.ngComponentDef = i0.ɵɵdefineComponent({ type: SidenavModeExample, selectors: [["sidenav-mode-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], [3, "mode"], ["mat-button", "", 3, "click"], [1, "example-radio-group", 3, "formControl"], ["value", "over"], ["value", "side"], ["value", "push"]], template: function SidenavModeExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavModeExample_mat_sidenav_container_0_Template, 30, 3, "mat-sidenav-container", 0);
        i0.ɵɵtemplate(1, SidenavModeExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i3.MatButton, i4.MatRadioGroup, i5.NgControlStatus, i5.FormControlDirective, i4.MatRadioButton, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavModeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-mode-example',
                templateUrl: 'sidenav-mode-example.html',
                styleUrls: ['sidenav-mode-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    SidenavModeExample.prototype.mode;
    /** @type {?} */
    SidenavModeExample.prototype.shouldRun;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW1vZGUvc2lkZW5hdi1tb2RlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW1vZGUvc2lkZW5hdi1tb2RlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNEM0MsZ0RBQ0U7SUFBQSwyQ0FDRTtJQUFBLHlCQUFHO0lBQUEsaUNBQThDO0lBQTNCLHFMQUFTLGFBQWdCLElBQUM7SUFBQyxzQkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDcEUseUJBQ0U7SUFBQSwwQ0FDRTtJQUFBLDZCQUFPO0lBQUEscUJBQUs7SUFBQSxpQkFBUTtJQUNwQiw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN0RCw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN0RCw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN4RCxpQkFBa0I7SUFDcEIsaUJBQUk7SUFDTixpQkFBYztJQUVkLDRDQUNFO0lBQUEsMEJBQUc7SUFBQSxrQ0FBOEM7SUFBM0Isc0xBQVMsYUFBZ0IsSUFBQztJQUFDLHVCQUFNO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUNwRSwwQkFDRTtJQUFBLDJDQUNFO0lBQUEsOEJBQU87SUFBQSxzQkFBSztJQUFBLGlCQUFRO0lBQ3BCLDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3hELGlCQUFrQjtJQUNwQixpQkFBSTtJQUNOLGlCQUFzQjtJQUN4QixpQkFBd0I7OztJQXZCQSxlQUFtQjtJQUFuQix5Q0FBbUI7SUFHUSxlQUFvQjtJQUFwQiwwQ0FBb0I7SUFZcEIsZ0JBQW9CO0lBQXBCLDBDQUFvQjs7O0lBVXZFLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOzs7OztBRGpCckUsTUFBTSxPQUFPLGtCQUFrQjtJQUwvQjtRQU1FLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixjQUFTLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDO0tBQ25HOzs7WUFSQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEM7OzRGQUNZLGtCQUFrQjtpRUFBbEIsa0JBQWtCO1FDVC9CLHdHQUNFO1FBeUJGLG1FQUF3Qjs7UUExQnlCLG9DQUFpQjtRQTBCN0QsZUFBa0I7UUFBbEIscUNBQWtCOzttQ0RqQlYsa0JBQWtCO2NBTDlCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxXQUFXLEVBQUUsMkJBQTJCO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQzthQUN4Qzs7OztJQUVDLGtDQUErQjs7SUFDL0IsdUNBQWtHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgd2l0aCBjb25maWd1cmFibGUgbW9kZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1tb2RlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1tb2RlLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZNb2RlRXhhbXBsZSB7XG4gIG1vZGUgPSBuZXcgRm9ybUNvbnRyb2woJ292ZXInKTtcbiAgc2hvdWxkUnVuID0gWy8oXnxcXC4pcGxua3JcXC5jbyQvLCAvKF58XFwuKXN0YWNrYmxpdHpcXC5pbyQvXS5zb21lKGggPT4gaC50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KSk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgI3NpZGVuYXYgW21vZGVdPVwibW9kZS52YWx1ZVwiPlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPlRvZ2dsZTwvYnV0dG9uPjwvcD5cbiAgICA8cD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgW2Zvcm1Db250cm9sXT1cIm1vZGVcIj5cbiAgICAgICAgPGxhYmVsPk1vZGU6PC9sYWJlbD5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJvdmVyXCI+T3ZlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzaWRlXCI+U2lkZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJwdXNoXCI+UHVzaDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvcD5cbiAgPC9tYXQtc2lkZW5hdj5cblxuICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgPHA+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFtmb3JtQ29udHJvbF09XCJtb2RlXCI+XG4gICAgICAgIDxsYWJlbD5Nb2RlOjwvbGFiZWw+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwib3ZlclwiPk92ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic2lkZVwiPlNpZGU8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwicHVzaFwiPlB1c2g8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L3A+XG4gIDwvbWF0LXNpZGVuYXYtY29udGVudD5cbjwvbWF0LXNpZGVuYXYtY29udGFpbmVyPlxuXG48ZGl2ICpuZ0lmPVwiIXNob3VsZFJ1blwiPlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxuIl19