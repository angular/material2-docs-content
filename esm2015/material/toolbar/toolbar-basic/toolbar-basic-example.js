import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic toolbar
 */
export class ToolbarBasicExample {
}
ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
ToolbarBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-toolbar");
        i0.ɵɵelementStart(1, "button", 0);
        i0.ɵɵelementStart(2, "mat-icon");
        i0.ɵɵtext(3, "menu");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span");
        i0.ɵɵtext(5, "My App");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "span", 1);
        i0.ɵɵelementStart(7, "button", 2);
        i0.ɵɵelementStart(8, "mat-icon");
        i0.ɵɵtext(9, "favorite");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵelementStart(11, "mat-icon");
        i0.ɵɵtext(12, "share");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarBasicExample, [{
        type: Component,
        args: [{ selector: 'toolbar-basic-example', template: "<mat-toolbar>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>My App</span>\n  <span class=\"example-spacer\"></span>\n  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n    <mat-icon>share</mat-icon>\n  </button>\n</mat-toolbar>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1iYXNpYy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLWJhc2ljL3Rvb2xiYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1iYXNpYy90b29sYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7O3NGQUFuQixtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1ZoQyxtQ0FBYTtRQUNYLGlDQUE2RjtRQUMzRixnQ0FBVTtRQUFBLG9CQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDVCw0QkFBTTtRQUFBLHNCQUFNO1FBQUEsaUJBQU87UUFDbkIsMEJBQW9DO1FBQ3BDLGlDQUE0RztRQUMxRyxnQ0FBVTtRQUFBLHdCQUFRO1FBQUEsaUJBQVc7UUFDL0IsaUJBQVM7UUFDVCxrQ0FBOEY7UUFDNUYsaUNBQVU7UUFBQSxzQkFBSztRQUFBLGlCQUFXO1FBQzVCLGlCQUFTO1FBQ1gsaUJBQWM7O3VGREZELG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgdG9vbGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhckJhc2ljRXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG48L21hdC10b29sYmFyPlxuIl19