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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRXhDLG1EQUFtRDtBQU1uRCxNQUFNLE9BQU8sc0JBQXNCOzs0RkFBdEIsc0JBQXNCOzJEQUF0QixzQkFBc0I7O1FDUm5DLCtDQUNFO1FBQUEsd0NBQXdDO1FBQUEsNEJBQVk7UUFBQSxpQkFBYTtRQUNqRSwwQ0FDRTtRQUFBLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSw0QkFBWTtRQUFBLGlCQUFZO1FBQ25DLHdDQUNFO1FBQUEsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUMxQyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDNUMsaUJBQWE7UUFDZixpQkFBaUI7UUFDakIsdUNBQ0U7UUFBQSxrQ0FBVztRQUFBLDZCQUFZO1FBQUEsaUJBQVk7UUFDbkMsNENBQ0U7UUFBQSxtQ0FBWTtRQUFBLHNCQUFLO1FBQUEsaUJBQWE7UUFDOUIsc0NBQTJCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUM1QyxzQ0FBNEI7UUFBQSxzQkFBSztRQUFBLGlCQUFhO1FBQ2hELGlCQUFhO1FBQ2YsaUJBQWlCO1FBQ2pCLGtDQUFvRDtRQUExQiwwSkFBUyxZQUFlLElBQUM7UUFBQyw4QkFBYTtRQUFBLGlCQUFTO1FBQzVFLGlCQUFxQjtRQUN2QixpQkFBdUI7Ozs7UUFyQnlCLHVDQUFpQztRQUMzRCxlQUFtQjtRQUFuQixnQ0FBbUI7UUFjckIsZ0JBQWM7UUFBZCw0QkFBYztRQUNkLGVBQWU7UUFBZiw2QkFBZTs7dUZEUnRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgRHJhd2VyIHdpdGggZXhwbGljaXQgYmFja2Ryb3Agc2V0dGluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1iYWNrZHJvcC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZCYWNrZHJvcEV4YW1wbGUge31cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2hhc0JhY2tkcm9wXT1cImhhc0JhY2tkcm9wLnZhbHVlXCI+XG4gIDxtYXQtZHJhd2VyICNkcmF3ZXIgW21vZGVdPVwibW9kZS52YWx1ZVwiPkknbSBhIGRyYXdlcjwvbWF0LWRyYXdlcj5cbiAgPG1hdC1kcmF3ZXItY29udGVudD5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPlNpZGVuYXYgbW9kZTwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgI21vZGUgdmFsdWU9XCJzaWRlXCI+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwic2lkZVwiPlNpZGU8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3ZlclwiPk92ZXI8L21hdC1vcHRpb24+XG4gICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwicHVzaFwiPlB1c2g8L21hdC1vcHRpb24+XG4gICAgICA8L21hdC1zZWxlY3Q+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPkhhcyBiYWNrZHJvcDwvbWF0LWxhYmVsPlxuICAgICAgPG1hdC1zZWxlY3QgI2hhc0JhY2tkcm9wPlxuICAgICAgICA8bWF0LW9wdGlvbj5VbnNldDwvbWF0LW9wdGlvbj5cbiAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInRydWVcIj5UcnVlPC9tYXQtb3B0aW9uPlxuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwiZmFsc2VcIj5GYWxzZTwvbWF0LW9wdGlvbj5cbiAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImRyYXdlci50b2dnbGUoKVwiPlRvZ2dsZSBkcmF3ZXI8L2J1dHRvbj5cbiAgPC9tYXQtZHJhd2VyLWNvbnRlbnQ+XG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19