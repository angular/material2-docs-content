import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/radio";
import * as i5 from "@angular/forms";
var _c0 = ["sidenav", ""];
function SidenavModeExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3, _c0);
    i0.ɵɵelementStart(3, "p");
    i0.ɵɵelementStart(4, "button", 4);
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { i0.ɵɵrestoreView(_r24); var _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
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
    i0.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_18_listener($event) { i0.ɵɵrestoreView(_r24); var _r22 = i0.ɵɵreference(2); return _r22.toggle(); });
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
    SidenavModeExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavModeExample, selectors: [["sidenav-mode-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], [3, "mode"], ["mat-button", "", 3, "click"], [1, "example-radio-group", 3, "formControl"], ["value", "over"], ["value", "side"], ["value", "push"]], template: function SidenavModeExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ i0.ɵsetClassMetadata(SidenavModeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-mode-example',
                templateUrl: 'sidenav-mode-example.html',
                styleUrls: ['sidenav-mode-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtbW9kZS9zaWRlbmF2LW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7SUNEM0MsZ0RBQ0U7SUFBQSwyQ0FDRTtJQUFBLHlCQUFHO0lBQUEsaUNBQThDO0lBQTNCLG1MQUFTLGFBQWdCLElBQUM7SUFBQyxzQkFBTTtJQUFBLGlCQUFTO0lBQUEsaUJBQUk7SUFDcEUseUJBQ0U7SUFBQSwwQ0FDRTtJQUFBLDZCQUFPO0lBQUEscUJBQUs7SUFBQSxpQkFBUTtJQUNwQiw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN0RCw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN0RCw0Q0FBK0I7SUFBQSxxQkFBSTtJQUFBLGlCQUFtQjtJQUN4RCxpQkFBa0I7SUFDcEIsaUJBQUk7SUFDTixpQkFBYztJQUVkLDRDQUNFO0lBQUEsMEJBQUc7SUFBQSxrQ0FBOEM7SUFBM0Isb0xBQVMsYUFBZ0IsSUFBQztJQUFDLHVCQUFNO0lBQUEsaUJBQVM7SUFBQSxpQkFBSTtJQUNwRSwwQkFDRTtJQUFBLDJDQUNFO0lBQUEsOEJBQU87SUFBQSxzQkFBSztJQUFBLGlCQUFRO0lBQ3BCLDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3RELDRDQUErQjtJQUFBLHFCQUFJO0lBQUEsaUJBQW1CO0lBQ3hELGlCQUFrQjtJQUNwQixpQkFBSTtJQUNOLGlCQUFzQjtJQUN4QixpQkFBd0I7OztJQXZCQSxlQUFtQjtJQUFuQix5Q0FBbUI7SUFHUSxlQUFvQjtJQUFwQiwwQ0FBb0I7SUFZcEIsZ0JBQW9CO0lBQXBCLDBDQUFvQjs7O0lBVXZFLDJCQUF3QjtJQUFBLHVEQUF1QztJQUFBLGlCQUFNOztBRHZCckUsNENBQTRDO0FBQzVDO0lBQUE7UUFNRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztLQUNuRzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7b0JBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN4Qzs7d0ZBQ1ksa0JBQWtCOzJEQUFsQixrQkFBa0I7WUNUL0Isd0dBQ0U7WUF5QkYsbUVBQXdCOztZQTFCeUIsb0NBQWlCO1lBMEI3RCxlQUFrQjtZQUFsQixxQ0FBa0I7OzZCRDFCdkI7Q0FZQyxBQVJELElBUUM7U0FIWSxrQkFBa0I7bUNBQWxCLGtCQUFrQjtjQUw5QixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsV0FBVyxFQUFFLDJCQUEyQjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7YUFDeEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgU2lkZW5hdiB3aXRoIGNvbmZpZ3VyYWJsZSBtb2RlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LW1vZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1tb2RlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LW1vZGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdk1vZGVFeGFtcGxlIHtcbiAgbW9kZSA9IG5ldyBGb3JtQ29udHJvbCgnb3ZlcicpO1xuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtc2lkZW5hdiAjc2lkZW5hdiBbbW9kZV09XCJtb2RlLnZhbHVlXCI+XG4gICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgIDxwPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbZm9ybUNvbnRyb2xdPVwibW9kZVwiPlxuICAgICAgICA8bGFiZWw+TW9kZTo8L2xhYmVsPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgPC9wPlxuICA8L21hdC1zaWRlbmF2PlxuXG4gIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPlRvZ2dsZTwvYnV0dG9uPjwvcD5cbiAgICA8cD5cbiAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgW2Zvcm1Db250cm9sXT1cIm1vZGVcIj5cbiAgICAgICAgPGxhYmVsPk1vZGU6PC9sYWJlbD5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJvdmVyXCI+T3ZlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzaWRlXCI+U2lkZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJwdXNoXCI+UHVzaDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvcD5cbiAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tibGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=