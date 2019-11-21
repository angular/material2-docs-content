/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
import * as i5 from "@angular/material/tooltip";
/**
 * \@title Tooltip with a show and hide delay
 */
export class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
}
TooltipDelayExample.decorators = [
    { type: Component, args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            },] },
];
/** @nocollapse */ TooltipDelayExample.ɵfac = function TooltipDelayExample_Factory(t) { return new (t || TooltipDelayExample)(); };
/** @nocollapse */ TooltipDelayExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipDelayExample, selectors: [["tooltip-delay-example"]], decls: 6, vars: 4, consts: [[1, "example-user-input"], ["matInput", "", "placeholder", "Show delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering over the button and displaying the tooltip", 3, "formControl"], ["matInput", "", "placeholder", "Hide delay (milliseconds)", "type", "number", "aria-label", "Adds a delay between hovering away from the button and hiding the tooltip", 3, "formControl"], ["mat-raised-button", "", "matTooltip", "Info about the action", "aria-label", "Button that displays a tooltip with a customized delay in showing and hiding", 3, "matTooltipShowDelay", "matTooltipHideDelay"]], template: function TooltipDelayExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field", 0);
        i0.ɵɵelement(1, "input", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-form-field", 0);
        i0.ɵɵelement(3, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵtext(5, " Action\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formControl", ctx.showDelay);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("formControl", ctx.hideDelay);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("matTooltipShowDelay", ctx.showDelay.value)("matTooltipHideDelay", ctx.hideDelay.value);
    } }, directives: [i1.MatFormField, i2.MatInput, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.NgControlStatus, i3.FormControlDirective, i4.MatButton, i5.MatTooltip], styles: [".example-user-input[_ngcontent-%COMP%] {\n  display: block;\n  width: 150px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TooltipDelayExample, [{
        type: Component,
        args: [{
                selector: 'tooltip-delay-example',
                templateUrl: 'tooltip-delay-example.html',
                styleUrls: ['tooltip-delay-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    TooltipDelayExample.prototype.showDelay;
    /** @type {?} */
    TooltipDelayExample.prototype.hideDelay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbHRpcC90b29sdGlwLWRlbGF5L3Rvb2x0aXAtZGVsYXktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFVM0MsTUFBTSxPQUFPLG1CQUFtQjtJQUxoQztRQU1FLGNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkM7OztZQVJBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsNEJBQTRCO2dCQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQzthQUN6Qzs7c0ZBQ1ksbUJBQW1CO3dEQUFuQixtQkFBbUI7UUNYaEMseUNBQ0U7UUFBQSwyQkFJRjtRQUFBLGlCQUFpQjtRQUVqQix5Q0FDRTtRQUFBLDJCQUlGO1FBQUEsaUJBQWlCO1FBRWpCLGlDQUtFO1FBQUEseUJBQ0Y7UUFBQSxpQkFBUzs7UUFoQkEsZUFBeUI7UUFBekIsMkNBQXlCO1FBT3pCLGVBQXlCO1FBQXpCLDJDQUF5QjtRQUsxQixlQUF1QztRQUF2Qyx5REFBdUMsNENBQUE7O2tERExsQyxtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOzs7O0lBRUMsd0NBQWtDOztJQUNsQyx3Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2x0aXAgd2l0aCBhIHNob3cgYW5kIGhpZGUgZGVsYXlcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1kZWxheS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sdGlwLWRlbGF5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sdGlwLWRlbGF5LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBEZWxheUV4YW1wbGUge1xuICBzaG93RGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMTAwMCk7XG4gIGhpZGVEZWxheSA9IG5ldyBGb3JtQ29udHJvbCgyMDAwKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtdXNlci1pbnB1dFwiPlxuICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaG93IGRlbGF5IChtaWxsaXNlY29uZHMpXCJcbiAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZHMgYSBkZWxheSBiZXR3ZWVuIGhvdmVyaW5nIG92ZXIgdGhlIGJ1dHRvbiBhbmQgZGlzcGxheWluZyB0aGUgdG9vbHRpcFwiXG4gICAgICAgICBbZm9ybUNvbnRyb2xdPVwic2hvd0RlbGF5XCI+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLXVzZXItaW5wdXRcIj5cbiAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiSGlkZSBkZWxheSAobWlsbGlzZWNvbmRzKVwiXG4gICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgIGFyaWEtbGFiZWw9XCJBZGRzIGEgZGVsYXkgYmV0d2VlbiBob3ZlcmluZyBhd2F5IGZyb20gdGhlIGJ1dHRvbiBhbmQgaGlkaW5nIHRoZSB0b29sdGlwXCJcbiAgICAgICAgIFtmb3JtQ29udHJvbF09XCJoaWRlRGVsYXlcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxidXR0b24gbWF0LXJhaXNlZC1idXR0b25cbiAgICAgICAgbWF0VG9vbHRpcD1cIkluZm8gYWJvdXQgdGhlIGFjdGlvblwiXG4gICAgICAgIFttYXRUb29sdGlwU2hvd0RlbGF5XT1cInNob3dEZWxheS52YWx1ZVwiXG4gICAgICAgIFttYXRUb29sdGlwSGlkZURlbGF5XT1cImhpZGVEZWxheS52YWx1ZVwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhIHRvb2x0aXAgd2l0aCBhIGN1c3RvbWl6ZWQgZGVsYXkgaW4gc2hvd2luZyBhbmQgaGlkaW5nXCI+XG4gIEFjdGlvblxuPC9idXR0b24+XG4iXX0=