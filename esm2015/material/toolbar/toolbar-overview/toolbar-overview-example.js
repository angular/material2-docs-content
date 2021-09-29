import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Toolbar overview
 */
export class ToolbarOverviewExample {
}
ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
ToolbarOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵelementStart(1, "mat-toolbar");
        i0.ɵɵelementStart(2, "span");
        i0.ɵɵtext(3, "My Application");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵelementStart(5, "mat-toolbar");
        i0.ɵɵelementStart(6, "button", 0);
        i0.ɵɵelementStart(7, "mat-icon");
        i0.ɵɵtext(8, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "span");
        i0.ɵɵtext(10, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "span", 1);
        i0.ɵɵelementStart(12, "button", 2);
        i0.ɵɵelementStart(13, "mat-icon");
        i0.ɵɵtext(14, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 3);
        i0.ɵɵelementStart(16, "mat-icon");
        i0.ɵɵtext(17, "share");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "p");
        i0.ɵɵelementStart(19, "mat-toolbar", 4);
        i0.ɵɵelementStart(20, "button", 0);
        i0.ɵɵelementStart(21, "mat-icon");
        i0.ɵɵtext(22, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "span");
        i0.ɵɵtext(24, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(25, "span", 1);
        i0.ɵɵelementStart(26, "button", 2);
        i0.ɵɵelementStart(27, "mat-icon");
        i0.ɵɵtext(28, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(29, "button", 3);
        i0.ɵɵelementStart(30, "mat-icon");
        i0.ɵɵtext(31, "share");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "p");
        i0.ɵɵelementStart(33, "mat-toolbar", 4);
        i0.ɵɵelementStart(34, "mat-toolbar-row");
        i0.ɵɵelementStart(35, "span");
        i0.ɵɵtext(36, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(37, "span", 1);
        i0.ɵɵelementStart(38, "button", 0);
        i0.ɵɵelementStart(39, "mat-icon");
        i0.ɵɵtext(40, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-toolbar-row");
        i0.ɵɵelementStart(42, "span");
        i0.ɵɵtext(43, "Second Line");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(44, "span", 1);
        i0.ɵɵelementStart(45, "button", 2);
        i0.ɵɵelementStart(46, "mat-icon");
        i0.ɵɵtext(47, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "button", 3);
        i0.ɵɵelementStart(49, "mat-icon");
        i0.ɵɵtext(50, "share");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon, i1.MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{ selector: 'toolbar-overview-example', template: "<p>\n<!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n<!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n   <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n   <mat-icon>share</mat-icon>\n </button>\n</mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7eUVBQXRCLHNCQUFzQjtRQ1ZuQyx5QkFBRztRQUVELG1DQUFhO1FBQ1gsNEJBQU07UUFBQSw4QkFBYztRQUFBLGlCQUFPO1FBQzdCLGlCQUFjO1FBRWhCLGlCQUFJO1FBRUoseUJBQUc7UUFDRCxtQ0FBYTtRQUNaLGlDQUE2RjtRQUM1RixnQ0FBVTtRQUFBLG9CQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDVCw0QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE0RztRQUMxRyxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFDL0IsaUJBQVM7UUFDVCxrQ0FBOEY7UUFDN0YsaUNBQVU7UUFBQSxzQkFBSztRQUFBLGlCQUFXO1FBQzVCLGlCQUFTO1FBQ1YsaUJBQWM7UUFDZCxpQkFBSTtRQUVKLDBCQUFHO1FBQ0QsdUNBQTZCO1FBQzNCLGtDQUE2RjtRQUMzRixpQ0FBVTtRQUFBLHFCQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDVCw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE0RztRQUMxRyxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFDL0IsaUJBQVM7UUFDVCxrQ0FBOEY7UUFDNUYsaUNBQVU7UUFBQSxzQkFBSztRQUFBLGlCQUFXO1FBQzVCLGlCQUFTO1FBQ1gsaUJBQWM7UUFDaEIsaUJBQUk7UUFFSiwwQkFBRztRQUNELHVDQUE2QjtRQUMzQix3Q0FBaUI7UUFDZiw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE2RjtRQUMzRixpQ0FBVTtRQUFBLHFCQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDWCxpQkFBa0I7UUFFbEIsd0NBQWlCO1FBQ2YsNkJBQU07UUFBQSw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDJCQUFvQztRQUNwQyxrQ0FBNEc7UUFDMUcsaUNBQVU7UUFBQSx5QkFBUTtRQUFBLGlCQUFXO1FBQy9CLGlCQUFTO1FBQ1Qsa0NBQThGO1FBQzVGLGlDQUFVO1FBQUEsc0JBQUs7UUFBQSxpQkFBVztRQUM1QixpQkFBUztRQUNYLGlCQUFrQjtRQUNwQixpQkFBYztRQUNoQixpQkFBSTs7dUZEbkRTLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbGJhciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPHA+XG48IS0tICNkb2NyZWdpb24gdG9vbGJhci1zaW1wbGUgLS0+XG4gIDxtYXQtdG9vbGJhcj5cbiAgICA8c3Bhbj5NeSBBcHBsaWNhdGlvbjwvc3Bhbj5cbiAgPC9tYXQtdG9vbGJhcj5cbjwhLS0gI2VuZGRvY3JlZ2lvbiB0b29sYmFyLXNpbXBsZSAtLT5cbjwvcD5cblxuPHA+XG4gIDxtYXQtdG9vbGJhcj5cbiAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gPC9idXR0b24+XG48L21hdC10b29sYmFyPlxuPC9wPlxuXG48cD5cbiAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICAgICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10b29sYmFyPlxuPC9wPlxuXG48cD5cbiAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cblxuICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgPC9tYXQtdG9vbGJhcj5cbjwvcD5cbiJdfQ==