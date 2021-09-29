import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/scrolling";
import * as i6 from "@angular/material/button";
import * as i7 from "@angular/material/tooltip";
import * as i8 from "@angular/material/core";
function TooltipAutoHideExample_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 6);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const positionOption_r2 = ctx.$implicit;
    i0.ɵɵproperty("value", positionOption_r2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", positionOption_r2, " ");
} }
/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
export class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
}
TooltipAutoHideExample.ɵfac = function TooltipAutoHideExample_Factory(t) { return new (t || TooltipAutoHideExample)(); };
TooltipAutoHideExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipAutoHideExample, selectors: [["tooltip-auto-hide-example"]], decls: 9, vars: 3, consts: [["appearance", "fill"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["cdkScrollable", "", 1, "example-container"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipHideDelay", "100000", "aria-label", "Button that displays a tooltip that hides when scrolled out of the container", 1, "example-button", 3, "matTooltipPosition"], ["tooltip", "matTooltip"], [3, "value"]], template: function TooltipAutoHideExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Tooltip position");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 1);
        i0.ɵɵtemplate(4, TooltipAutoHideExample_mat_option_4_Template, 2, 2, "mat-option", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "div", 3);
        i0.ɵɵelementStart(6, "button", 4, 5);
        i0.ɵɵtext(8, " Action ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.position);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.positionOptions);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("matTooltipPosition", ctx.position.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i5.CdkScrollable, i6.MatButton, i7.MatTooltip, i8.MatOption], styles: [".example-button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container[_ngcontent-%COMP%] {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipAutoHideExample, [{
        type: Component,
        args: [{ selector: 'tooltip-auto-hide-example', template: "<mat-form-field appearance=\"fill\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    <mat-option *ngFor=\"let positionOption of positionOptions\" [value]=\"positionOption\">\n      {{positionOption}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n", styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1hdXRvLWhpZGUvdG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7OztJQ0V2QyxxQ0FBb0Y7SUFDbEYsWUFDRjtJQUFBLGlCQUFhOzs7SUFGOEMseUNBQXdCO0lBQ2pGLGVBQ0Y7SUFERSxrREFDRjs7QURESjs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFNRSxvQkFBZSxHQUFzQixDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDckQ7OzRGQUhZLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDWm5DLHlDQUFrQztRQUNoQyxpQ0FBVztRQUFBLGdDQUFnQjtRQUFBLGlCQUFZO1FBQ3ZDLHFDQUFxQztRQUNuQyxxRkFFYTtRQUNmLGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLDhCQUE2QztRQUMzQyxvQ0FLK0I7UUFDN0Isd0JBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNOztRQWhCUSxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFDSyxlQUFrQjtRQUFsQiw2Q0FBa0I7UUFTbkQsZUFBcUM7UUFBckMsdURBQXFDOzt1RkRBbEMsc0JBQXNCO2NBTGxDLFNBQVM7MkJBQ0UsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtUb29sdGlwUG9zaXRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgZGVtb25zdHJhdGVzIGF1dG8taGlkaW5nIHdoZW4gaXQgY2xpcHMgb3V0IG9mIGl0cyBzY3JvbGxpbmcgY29udGFpbmVyLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWF1dG8taGlkZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1hdXRvLWhpZGUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcEF1dG9IaWRlRXhhbXBsZSB7XG4gIHBvc2l0aW9uT3B0aW9uczogVG9vbHRpcFBvc2l0aW9uW10gPSBbJ2JlbG93JywgJ2Fib3ZlJywgJ2xlZnQnLCAncmlnaHQnXTtcbiAgcG9zaXRpb24gPSBuZXcgRm9ybUNvbnRyb2wodGhpcy5wb3NpdGlvbk9wdGlvbnNbMF0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+VG9vbHRpcCBwb3NpdGlvbjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwicG9zaXRpb25cIj5cbiAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgcG9zaXRpb25PcHRpb24gb2YgcG9zaXRpb25PcHRpb25zXCIgW3ZhbHVlXT1cInBvc2l0aW9uT3B0aW9uXCI+XG4gICAgICB7e3Bvc2l0aW9uT3B0aW9ufX1cbiAgICA8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIGNka1Njcm9sbGFibGU+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gI3Rvb2x0aXA9XCJtYXRUb29sdGlwXCJcbiAgICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgICBbbWF0VG9vbHRpcFBvc2l0aW9uXT1cInBvc2l0aW9uLnZhbHVlXCJcbiAgICAgICAgICBtYXRUb29sdGlwSGlkZURlbGF5PVwiMTAwMDAwXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiQnV0dG9uIHRoYXQgZGlzcGxheXMgYSB0b29sdGlwIHRoYXQgaGlkZXMgd2hlbiBzY3JvbGxlZCBvdXQgb2YgdGhlIGNvbnRhaW5lclwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJ1dHRvblwiPlxuICAgIEFjdGlvblxuICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19