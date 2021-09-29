import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * @title Tooltip with a show and hide delay
 */
export class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
TooltipDelayExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 14, vars: 4, consts: [["appearance", "fill", 1, "example-user-input"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Show delay");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(3, "input", 1);
        i0.ɵɵelementStart(4, "mat-hint");
        i0.ɵɵtext(5, "milliseconds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "mat-form-field", 0);
        i0.ɵɵelementStart(7, "mat-label");
        i0.ɵɵtext(8, "Hide delay");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(9, "input", 2);
        i0.ɵɵelementStart(10, "mat-hint");
        i0.ɵɵtext(11, "milliseconds");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 3);
        i0.ɵɵtext(13, " Action\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("formControl", ctx.showDelay);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("formControl", ctx.hideDelay);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i1.MatHint, i4.MatButton, i5.MatTooltip], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDelayExample, [{
        type: Component,
        args: [{ selector: 'tooltip-delay-example', template: "<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\" appearance=\"fill\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUUzQzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztzRkFIWSxtQkFBbUI7c0VBQW5CLG1CQUFtQjtRQ1hoQyx5Q0FBNkQ7UUFDM0QsaUNBQVc7UUFBQSwwQkFBVTtRQUFBLGlCQUFZO1FBQ2pDLDJCQUM2RjtRQUM3RixnQ0FBVTtRQUFBLDRCQUFZO1FBQUEsaUJBQVc7UUFDbkMsaUJBQWlCO1FBRWpCLHlDQUE2RDtRQUMzRCxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMsMkJBQzhGO1FBQzlGLGlDQUFVO1FBQUEsNkJBQVk7UUFBQSxpQkFBVztRQUNuQyxpQkFBaUI7UUFFakIsa0NBR2tHO1FBQ2hHLDBCQUNGO1FBQUEsaUJBQVM7O1FBakJ1QixlQUF5QjtRQUF6QiwyQ0FBeUI7UUFPekIsZUFBeUI7UUFBekIsMkNBQXlCO1FBTWpELGVBQXVDO1FBQXZDLHlEQUF1Qyw0Q0FBQTs7dUZESmxDLG1CQUFtQjtjQUwvQixTQUFTOzJCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbGF5RXhhbXBsZSB7XG4gIHNob3dEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgxMDAwKTtcbiAgaGlkZURlbGF5ID0gbmV3IEZvcm1Db250cm9sKDIwMDApO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5TaG93IGRlbGF5PC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW2Zvcm1Db250cm9sXT1cInNob3dEZWxheVwiXG4gICAgICAgICBhcmlhLWxhYmVsPVwiQWRkcyBhIGRlbGF5IGJldHdlZW4gaG92ZXJpbmcgb3ZlciB0aGUgYnV0dG9uIGFuZCBkaXNwbGF5aW5nIHRoZSB0b29sdGlwXCI+XG4gIDxtYXQtaGludD5taWxsaXNlY29uZHM8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5IaWRlIGRlbGF5PC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwibnVtYmVyXCIgW2Zvcm1Db250cm9sXT1cImhpZGVEZWxheVwiXG4gICAgICAgICBhcmlhLWxhYmVsPVwiQWRkcyBhIGRlbGF5IGJldHdlZW4gaG92ZXJpbmcgYXdheSBmcm9tIHRoZSBidXR0b24gYW5kIGhpZGluZyB0aGUgdG9vbHRpcFwiPlxuICA8bWF0LWhpbnQ+bWlsbGlzZWNvbmRzPC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cInNob3dEZWxheS52YWx1ZVwiXG4gICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cImhpZGVEZWxheS52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgd2l0aCBhIGN1c3RvbWl6ZWQgZGVsYXkgaW4gc2hvd2luZyBhbmQgaGlkaW5nXCI+XG4gIEFjdGlvblxuPC9idXR0b24+XG4iXX0=