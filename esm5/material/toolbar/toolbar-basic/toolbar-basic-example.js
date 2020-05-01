import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic toolbar
 */
var ToolbarBasicExample = /** @class */ (function () {
    function ToolbarBasicExample() {
    }
    ToolbarBasicExample.ɵfac = function ToolbarBasicExample_Factory(t) { return new (t || ToolbarBasicExample)(); };
    ToolbarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarBasicExample, selectors: [["toolbar-basic-example"]], decls: 13, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"]], template: function ToolbarBasicExample_Template(rf, ctx) { if (rf & 1) {
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
    return ToolbarBasicExample;
}());
export { ToolbarBasicExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarBasicExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-basic-example',
                templateUrl: 'toolbar-basic-example.html',
                styleUrls: ['toolbar-basic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1iYXNpYy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLWJhc2ljL3Rvb2xiYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1iYXNpYy90b29sYmFyLWJhc2ljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLbUM7MEZBQXRCLG1CQUFtQjs0REFBbkIsbUJBQW1CO1lDVmhDLG1DQUNFO1lBQUEsaUNBQ0U7WUFBQSxnQ0FBVTtZQUFBLG9CQUFJO1lBQUEsaUJBQVc7WUFDM0IsaUJBQVM7WUFDVCw0QkFBTTtZQUFBLHNCQUFNO1lBQUEsaUJBQU87WUFDbkIsMEJBQW9DO1lBQ3BDLGlDQUNFO1lBQUEsZ0NBQVU7WUFBQSx3QkFBUTtZQUFBLGlCQUFXO1lBQy9CLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHNCQUFLO1lBQUEsaUJBQVc7WUFDNUIsaUJBQVM7WUFDWCxpQkFBYzs7OEJEWmQ7Q0FVbUMsQUFMbkMsSUFLbUM7U0FBdEIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FML0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyB0b29sYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItYmFzaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci1iYXNpYy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbGJhci1iYXNpYy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyQmFzaWNFeGFtcGxlIHt9XG4iLCI8bWF0LXRvb2xiYXI+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=