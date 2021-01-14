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
TooltipManualExample.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipManualExample, selectors: [["tooltip-manual-example"]], decls: 12, vars: 0, consts: [["mat-button", "", "aria-label", "Show tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-button", "", "aria-label", "Show/Hide tooltip on the button at the end of this section", 1, "example-action-button", 3, "click"], ["mat-raised-button", "", "matTooltip", "Info about the action", "matTooltipPosition", "right", "aria-tooltip", "Button that displays and hides a tooltip triggered by other buttons"], ["tooltip", "matTooltip"]], template: function TooltipManualExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'tooltip-manual-example',
                templateUrl: 'tooltip-manual-example.html',
                styleUrls: ['tooltip-manual-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sb0JBQW9COzt3RkFBcEIsb0JBQW9CO3lEQUFwQixvQkFBb0I7O1FDVmpDLDJCQUNFO1FBQUEsNEJBQU87UUFBQSxtREFBa0M7UUFBQSxpQkFBTztRQUNoRCxpQ0FJRTtRQUhNLHdKQUFTLFVBQWMsSUFBQztRQUc5QixzQkFDRjtRQUFBLGlCQUFTO1FBQ1QsaUNBSUU7UUFITSx3SkFBUyxVQUFjLElBQUM7UUFHOUIsc0JBQ0Y7UUFBQSxpQkFBUztRQUNULGlDQUlFO1FBSE0sd0pBQVMsWUFBZ0IsSUFBQztRQUdoQyxrQ0FDRjtRQUFBLGlCQUFTO1FBQ1gsaUJBQU07UUFFTixvQ0FJRTtRQUFBLDBCQUNGO1FBQUEsaUJBQVM7O3VGRGpCSSxvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHRoYXQgY2FuIGJlIG1hbnVhbGx5IHNob3duL2hpZGRlbi5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbHRpcC1tYW51YWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNYW51YWxFeGFtcGxlIHt9XG4iLCI8ZGl2PlxuICA8c3Bhbj4gQ2xpY2sgdGhlIGZvbGxvd2luZyBidXR0b25zIHRvLi4uIDwvc3Bhbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cInRvb2x0aXAuc2hvdygpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiU2hvdyB0b29sdGlwIG9uIHRoZSBidXR0b24gYXQgdGhlIGVuZCBvZiB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XG4gICAgc2hvd1xuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cInRvb2x0aXAuaGlkZSgpXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiSGlkZSB0b29sdGlwIG9uIHRoZSBidXR0b24gYXQgdGhlIGVuZCBvZiB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XG4gICAgaGlkZVxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uXG4gICAgICAgICAgKGNsaWNrKT1cInRvb2x0aXAudG9nZ2xlKClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93L0hpZGUgdG9vbHRpcCBvbiB0aGUgYnV0dG9uIGF0IHRoZSBlbmQgb2YgdGhpcyBzZWN0aW9uXCJcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiPlxuICAgIHRvZ2dsZSBzaG93L2hpZGVcbiAgPC9idXR0b24+XG48L2Rpdj5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAjdG9vbHRpcD1cIm1hdFRvb2x0aXBcIlxuICAgICAgICBtYXRUb29sdGlwPVwiSW5mbyBhYm91dCB0aGUgYWN0aW9uXCJcbiAgICAgICAgbWF0VG9vbHRpcFBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICBhcmlhLXRvb2x0aXA9XCJCdXR0b24gdGhhdCBkaXNwbGF5cyBhbmQgaGlkZXMgYSB0b29sdGlwIHRyaWdnZXJlZCBieSBvdGhlciBidXR0b25zXCI+XG4gIEFjdGlvblxuPC9idXR0b24+Il19