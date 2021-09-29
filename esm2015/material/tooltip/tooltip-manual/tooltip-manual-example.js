import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
}
TooltipManualExample.ɵfac = function TooltipManualExample_Factory(t) { return new (t || TooltipManualExample)(); };
TooltipManualExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, " Click the following buttons to... ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 0);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(10); return _r0.show(); });
        i0.ɵɵtext(4, " show ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 1);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(10); return _r0.hide(); });
        i0.ɵɵtext(6, " hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 2);
        i0.ɵɵlistener("click", function TooltipManualExample_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(10); return _r0.toggle(); });
        i0.ɵɵtext(8, " toggle show/hide ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 3, 4);
        i0.ɵɵtext(11, " Action\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton, i2.MatTooltip], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipManualExample, [{
        type: Component,
        args: [{ selector: 'tooltip-manual-example', template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9COzt3RkFBcEIsb0JBQW9CO3VFQUFwQixvQkFBb0I7O1FDVmpDLDJCQUFLO1FBQ0gsNEJBQU07UUFBQyxtREFBa0M7UUFBQSxpQkFBTztRQUNoRCxpQ0FHc0M7UUFGOUIsd0pBQVMsVUFBYyxJQUFDO1FBRzlCLHNCQUNGO1FBQUEsaUJBQVM7UUFDVCxpQ0FHc0M7UUFGOUIsd0pBQVMsVUFBYyxJQUFDO1FBRzlCLHNCQUNGO1FBQUEsaUJBQVM7UUFDVCxpQ0FHc0M7UUFGOUIsd0pBQVMsWUFBZ0IsSUFBQztRQUdoQyxrQ0FDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFTixvQ0FHMkY7UUFDekYsMEJBQ0Y7UUFBQSxpQkFBUzs7dUZEakJJLG9CQUFvQjtjQUxoQyxTQUFTOzJCQUNFLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBiZSBtYW51YWxseSBzaG93bi9oaWRkZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLW1hbnVhbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwTWFudWFsRXhhbXBsZSB7fVxuIiwiPGRpdj5cbiAgPHNwYW4+IENsaWNrIHRoZSBmb2xsb3dpbmcgYnV0dG9ucyB0by4uLiA8L3NwYW4+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLnNob3coKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxuICAgIHNob3dcbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLmhpZGUoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkhpZGUgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxuICAgIGhpZGVcbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJ0b29sdGlwLnRvZ2dsZSgpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdy9IaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICB0b2dnbGUgc2hvdy9oaWRlXG4gIDwvYnV0dG9uPlxuPC9kaXY+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIG1hdFRvb2x0aXBQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgYXJpYS10b29sdGlwPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYW5kIGhpZGVzIGEgdG9vbHRpcCB0cmlnZ2VyZWQgYnkgb3RoZXIgYnV0dG9uc1wiPlxuICBBY3Rpb25cbjwvYnV0dG9uPiJdfQ==