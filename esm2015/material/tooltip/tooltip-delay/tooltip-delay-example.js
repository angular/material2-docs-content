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
TooltipDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 14, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUUzQzs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25DOztzRkFIWSxtQkFBbUI7d0RBQW5CLG1CQUFtQjtRQ1hoQyx5Q0FDRTtRQUFBLGlDQUFXO1FBQUEsMEJBQVU7UUFBQSxpQkFBWTtRQUNqQywyQkFFQTtRQUFBLGdDQUFVO1FBQUEsNEJBQVk7UUFBQSxpQkFBVztRQUNuQyxpQkFBaUI7UUFFakIseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMsMkJBRUE7UUFBQSxpQ0FBVTtRQUFBLDZCQUFZO1FBQUEsaUJBQVc7UUFDbkMsaUJBQWlCO1FBRWpCLGtDQUlFO1FBQUEsMEJBQ0Y7UUFBQSxpQkFBUzs7UUFqQnVCLGVBQXlCO1FBQXpCLDJDQUF5QjtRQU96QixlQUF5QjtRQUF6QiwyQ0FBeUI7UUFNakQsZUFBdUM7UUFBdkMseURBQXVDLDRDQUFBOzt1RkRKbEMsbUJBQW1CO2NBTC9CLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB3aXRoIGEgc2hvdyBhbmQgaGlkZSBkZWxheVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcERlbGF5RXhhbXBsZSB7XG4gIHNob3dEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgxMDAwKTtcbiAgaGlkZURlbGF5ID0gbmV3IEZvcm1Db250cm9sKDIwMDApO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS11c2VyLWlucHV0XCI+XG4gIDxtYXQtbGFiZWw+U2hvdyBkZWxheTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIFtmb3JtQ29udHJvbF09XCJzaG93RGVsYXlcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZHMgYSBkZWxheSBiZXR3ZWVuIGhvdmVyaW5nIG92ZXIgdGhlIGJ1dHRvbiBhbmQgZGlzcGxheWluZyB0aGUgdG9vbHRpcFwiPlxuICA8bWF0LWhpbnQ+bWlsbGlzZWNvbmRzPC9tYXQtaGludD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8bWF0LWxhYmVsPkhpZGUgZGVsYXk8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBbZm9ybUNvbnRyb2xdPVwiaGlkZURlbGF5XCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBhd2F5IGZyb20gdGhlIGJ1dHRvbiBhbmQgaGlkaW5nIHRoZSB0b29sdGlwXCI+XG4gIDxtYXQtaGludD5taWxsaXNlY29uZHM8L21hdC1oaW50PlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgW21hdFRvb2x0aXBTaG93RGVsYXldPVwic2hvd0RlbGF5LnZhbHVlXCJcbiAgICAgICAgW21hdFRvb2x0aXBIaWRlRGVsYXldPVwiaGlkZURlbGF5LnZhbHVlXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGEgdG9vbHRpcCB3aXRoIGEgY3VzdG9taXplZCBkZWxheSBpbiBzaG93aW5nIGFuZCBoaWRpbmdcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj5cbiJdfQ==