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
SidenavBackdropExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavBackdropExample, selectors: [["sidenav-backdrop-example"]], decls: 29, vars: 4, consts: [[1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["value", "side"], ["mode", ""], ["value", "over"], ["value", "push"], ["hasBackdrop", ""], [3, "value"], ["mat-raised-button", "", 3, "click"]], template: function SidenavBackdropExample_Template(rf, ctx) { if (rf & 1) {
        const _r3 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
        i0.ɵɵtext(3, "I'm a drawer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "mat-drawer-content");
        i0.ɵɵelementStart(5, "mat-form-field");
        i0.ɵɵelementStart(6, "mat-label");
        i0.ɵɵtext(7, "Sidenav mode");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "mat-select", 3, 4);
        i0.ɵɵelementStart(10, "mat-option", 3);
        i0.ɵɵtext(11, "Side");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "mat-option", 5);
        i0.ɵɵtext(13, "Over");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "mat-option", 6);
        i0.ɵɵtext(15, "Push");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "mat-form-field");
        i0.ɵɵelementStart(17, "mat-label");
        i0.ɵɵtext(18, "Has backdrop");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-select", null, 7);
        i0.ɵɵelementStart(21, "mat-option");
        i0.ɵɵtext(22, "Unset");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "mat-option", 8);
        i0.ɵɵtext(24, "True");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "mat-option", 8);
        i0.ɵɵtext(26, "False");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(27, "button", 9);
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
        args: [{
                selector: 'sidenav-backdrop-example',
                templateUrl: 'sidenav-backdrop-example.html',
                styleUrls: ['sidenav-backdrop-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXhDLG1EQUFtRDtBQU1uRCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzJEQUF0QixzQkFBc0I7O1FDUm5DLCtDQUFrRjtRQUNoRix3Q0FBd0M7UUFBQSw0QkFBWTtRQUFBLGlCQUFhO1FBQ2pFLDBDQUFvQjtRQUNsQixzQ0FBZ0I7UUFDZCxpQ0FBVztRQUFBLDRCQUFZO1FBQUEsaUJBQVk7UUFDbkMsd0NBQStCO1FBQzdCLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUMxQyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzVDLGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLHVDQUFnQjtRQUNkLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyw0Q0FBeUI7UUFDdkIsbUNBQVk7UUFBQSxzQkFBSztRQUFBLGlCQUFhO1FBQzlCLHNDQUEyQjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDNUMsc0NBQTRCO1FBQUEsc0JBQUs7UUFBQSxpQkFBYTtRQUNoRCxpQkFBYTtRQUNmLGlCQUFpQjtRQUNqQixrQ0FBb0Q7UUFBMUIsMEpBQVMsWUFBZSxJQUFDO1FBQUMsOEJBQWE7UUFBQSxpQkFBUztRQUM1RSxpQkFBcUI7UUFDdkIsaUJBQXVCOzs7O1FBckJ5Qix1Q0FBaUM7UUFDM0QsZUFBbUI7UUFBbkIsZ0NBQW1CO1FBY3JCLGdCQUFjO1FBQWQsNEJBQWM7UUFDZCxlQUFlO1FBQWYsNkJBQWU7O3VGRFJ0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERyYXdlciB3aXRoIGV4cGxpY2l0IGJhY2tkcm9wIHNldHRpbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2QmFja2Ryb3BFeGFtcGxlIHt9XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIFtoYXNCYWNrZHJvcF09XCJoYXNCYWNrZHJvcC52YWx1ZVwiPlxuICA8bWF0LWRyYXdlciAjZHJhd2VyIFttb2RlXT1cIm1vZGUudmFsdWVcIj5JJ20gYSBkcmF3ZXI8L21hdC1kcmF3ZXI+XG4gIDxtYXQtZHJhd2VyLWNvbnRlbnQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5TaWRlbmF2IG1vZGU8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0ICNtb2RlIHZhbHVlPVwic2lkZVwiPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtb3B0aW9uPlxuICAgICAgPC9tYXQtc2VsZWN0PlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5IYXMgYmFja2Ryb3A8L21hdC1sYWJlbD5cbiAgICAgIDxtYXQtc2VsZWN0ICNoYXNCYWNrZHJvcD5cbiAgICAgICAgPG1hdC1vcHRpb24+VW5zZXQ8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJ0cnVlXCI+VHJ1ZTwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cImZhbHNlXCI+RmFsc2U8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJkcmF3ZXIudG9nZ2xlKClcIj5Ub2dnbGUgZHJhd2VyPC9idXR0b24+XG4gIDwvbWF0LWRyYXdlci1jb250ZW50PlxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==