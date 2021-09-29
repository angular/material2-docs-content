import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/material/button";
/** @title Drawer with explicit backdrop setting */
export class SidenavBackdropExample {
}
SidenavBackdropExample.ɵfac = function SidenavBackdropExample_Factory(t) { return new (t || SidenavBackdropExample)(); };
SidenavBackdropExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SidenavBackdropExample, selectors: [["sidenav-backdrop-example"]], decls: 29, vars: 4, consts: [[1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["appearance", "fill"], ["value", "side"], ["mode", ""], ["value", "over"], ["value", "push"], ["hasBackdrop", ""], [3, "value"], ["mat-raised-button", "", 3, "click"]], template: function SidenavBackdropExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
        i0.ɵɵtext(3, "I'm a drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-drawer-content");
        i0.ɵɵelementStart(5, "mat-form-field", 3);
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Sidenav mode");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-select", 4, 5);
        i0.ɵɵelementStart(10, "mat-option", 4);
        i0.ɵɵtext(11, "Side");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 6);
        i0.ɵɵtext(13, "Over");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 7);
        i0.ɵɵtext(15, "Push");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-form-field", 3);
        i0.ɵɵelementStart(17, "mat-label");
        i0.ɵɵtext(18, "Has backdrop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-select", null, 8);
        i0.ɵɵelementStart(21, "mat-option");
        i0.ɵɵtext(22, "Unset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 9);
        i0.ɵɵtext(24, "True");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-option", 9);
        i0.ɵɵtext(26, "False");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 10);
        i0.ɵɵlistener("click", function SidenavBackdropExample_Template_button_click_27_listener() { i0.ɵɵrestoreView(_r3); const _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
        i0.ɵɵtext(28, "Toggle drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(9);
        const _r2 = i0.ɵɵreference(20);
        i0.ɵɵproperty("hasBackdrop", _r2.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("mode", _r1.value);
        i0.ɵɵadvance(22);
        i0.ɵɵproperty("value", true);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("value", false);
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i1.MatDrawerContent, i2.MatFormField, i2.MatLabel, i3.MatSelect, i4.MatOption, i5.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavBackdropExample, [{
        type: Component,
        args: [{ selector: 'sidenav-backdrop-example', template: "<mat-drawer-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n  <mat-drawer #drawer [mode]=\"mode.value\">I'm a drawer</mat-drawer>\n  <mat-drawer-content>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Sidenav mode</mat-label>\n      <mat-select #mode value=\"side\">\n        <mat-option value=\"side\">Side</mat-option>\n        <mat-option value=\"over\">Over</mat-option>\n        <mat-option value=\"push\">Push</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Has backdrop</mat-label>\n      <mat-select #hasBackdrop>\n        <mat-option>Unset</mat-option>\n        <mat-option [value]=\"true\">True</mat-option>\n        <mat-option [value]=\"false\">False</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button mat-raised-button (click)=\"drawer.toggle()\">Toggle drawer</button>\n  </mat-drawer-content>\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXhDLG1EQUFtRDtBQU1uRCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCO3lFQUF0QixzQkFBc0I7O1FDUm5DLCtDQUFrRjtRQUNoRix3Q0FBd0M7UUFBQSw0QkFBWTtRQUFBLGlCQUFhO1FBQ2pFLDBDQUFvQjtRQUNsQix5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSw0QkFBWTtRQUFBLGlCQUFZO1FBQ25DLHdDQUErQjtRQUM3QixzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQiwwQ0FBa0M7UUFDaEMsa0NBQVc7UUFBQSw2QkFBWTtRQUFBLGlCQUFZO1FBQ25DLDRDQUF5QjtRQUN2QixtQ0FBWTtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDOUIsc0NBQTJCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxzQ0FBNEI7UUFBQSxzQkFBSztRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLG1DQUFvRDtRQUExQiwwSkFBUyxZQUFlLElBQUM7UUFBQyw4QkFBYTtRQUFBLGlCQUFTO1FBQzVFLGlCQUFxQjtRQUN2QixpQkFBdUI7Ozs7UUFyQnlCLHVDQUFpQztRQUMzRCxlQUFtQjtRQUFuQixnQ0FBbUI7UUFjckIsZ0JBQWM7UUFBZCw0QkFBYztRQUNkLGVBQWU7UUFBZiw2QkFBZTs7dUZEUnRCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBEcmF3ZXIgd2l0aCBleHBsaWNpdCBiYWNrZHJvcCBzZXR0aW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSB7fVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBbaGFzQmFja2Ryb3BdPVwiaGFzQmFja2Ryb3AudmFsdWVcIj5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBbbW9kZV09XCJtb2RlLnZhbHVlXCI+SSdtIGEgZHJhd2VyPC9tYXQtZHJhd2VyPlxuICA8bWF0LWRyYXdlci1jb250ZW50PlxuICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgPG1hdC1sYWJlbD5TaWRlbmF2IG1vZGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0ICNtb2RlIHZhbHVlPVwic2lkZVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICA8bWF0LWxhYmVsPkhhcyBiYWNrZHJvcDwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgI2hhc0JhY2tkcm9wPlxuICAgICAgICA8bWF0LW9wdGlvbj5VbnNldDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRydWVcIj5UcnVlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiZmFsc2VcIj5GYWxzZTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImRyYXdlci50b2dnbGUoKVwiPlRvZ2dsZSBkcmF3ZXI8L2J1dHRvbj5cbiAgPC9tYXQtZHJhd2VyLWNvbnRlbnQ+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19