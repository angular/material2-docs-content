import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Toolbar overview
 */
let ToolbarOverviewExample = /** @class */ (() => {
    class ToolbarOverviewExample {
    }
    ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
    ToolbarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 47, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-toolbar");
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵelementStart(3, "mat-icon");
            i0.ɵɵtext(4, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "My App");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "span", 1);
            i0.ɵɵelementStart(8, "button", 2);
            i0.ɵɵelementStart(9, "mat-icon");
            i0.ɵɵtext(10, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "button", 3);
            i0.ɵɵelementStart(12, "mat-icon");
            i0.ɵɵtext(13, "share");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵelementStart(15, "mat-toolbar", 4);
            i0.ɵɵelementStart(16, "button", 0);
            i0.ɵɵelementStart(17, "mat-icon");
            i0.ɵɵtext(18, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "span");
            i0.ɵɵtext(20, "My App");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "span", 1);
            i0.ɵɵelementStart(22, "button", 2);
            i0.ɵɵelementStart(23, "mat-icon");
            i0.ɵɵtext(24, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 3);
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "share");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "p");
            i0.ɵɵelementStart(29, "mat-toolbar", 4);
            i0.ɵɵelementStart(30, "mat-toolbar-row");
            i0.ɵɵelementStart(31, "span");
            i0.ɵɵtext(32, "My App");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(33, "span", 1);
            i0.ɵɵelementStart(34, "button", 0);
            i0.ɵɵelementStart(35, "mat-icon");
            i0.ɵɵtext(36, "menu");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "mat-toolbar-row");
            i0.ɵɵelementStart(38, "span");
            i0.ɵɵtext(39, "Second Line");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(40, "span", 1);
            i0.ɵɵelementStart(41, "button", 2);
            i0.ɵɵelementStart(42, "mat-icon");
            i0.ɵɵtext(43, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "button", 3);
            i0.ɵɵelementStart(45, "mat-icon");
            i0.ɵɵtext(46, "share");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatToolbar, i2.MatButton, i3.MatIcon, i1.MatToolbarRow], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    return ToolbarOverviewExample;
})();
export { ToolbarOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUEsTUFLYSxzQkFBc0I7O2dHQUF0QixzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQ1ZuQyx5QkFDRTtZQUFBLG1DQUNDO1lBQUEsaUNBQ0M7WUFBQSxnQ0FBVTtZQUFBLG9CQUFJO1lBQUEsaUJBQVc7WUFDM0IsaUJBQVM7WUFDVCw0QkFBTTtZQUFBLHNCQUFNO1lBQUEsaUJBQU87WUFDbkIsMEJBQW9DO1lBQ3BDLGlDQUNFO1lBQUEsZ0NBQVU7WUFBQSx5QkFBUTtZQUFBLGlCQUFXO1lBQy9CLGlCQUFTO1lBQ1Qsa0NBQ0M7WUFBQSxpQ0FBVTtZQUFBLHNCQUFLO1lBQUEsaUJBQVc7WUFDNUIsaUJBQVM7WUFDVixpQkFBYztZQUNkLGlCQUFJO1lBRUosMEJBQ0U7WUFBQSx1Q0FDRTtZQUFBLGtDQUNFO1lBQUEsaUNBQVU7WUFBQSxxQkFBSTtZQUFBLGlCQUFXO1lBQzNCLGlCQUFTO1lBQ1QsNkJBQU07WUFBQSx1QkFBTTtZQUFBLGlCQUFPO1lBQ25CLDJCQUFvQztZQUNwQyxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUMvQixpQkFBUztZQUNULGtDQUNFO1lBQUEsaUNBQVU7WUFBQSxzQkFBSztZQUFBLGlCQUFXO1lBQzVCLGlCQUFTO1lBQ1gsaUJBQWM7WUFDaEIsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLHVDQUNFO1lBQUEsd0NBQ0U7WUFBQSw2QkFBTTtZQUFBLHVCQUFNO1lBQUEsaUJBQU87WUFDbkIsMkJBQW9DO1lBQ3BDLGtDQUNFO1lBQUEsaUNBQVU7WUFBQSxxQkFBSTtZQUFBLGlCQUFXO1lBQzNCLGlCQUFTO1lBQ1gsaUJBQWtCO1lBRWxCLHdDQUNFO1lBQUEsNkJBQU07WUFBQSw0QkFBVztZQUFBLGlCQUFPO1lBQ3hCLDJCQUFvQztZQUNwQyxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUMvQixpQkFBUztZQUNULGtDQUNFO1lBQUEsaUNBQVU7WUFBQSxzQkFBSztZQUFBLGlCQUFXO1lBQzVCLGlCQUFTO1lBQ1gsaUJBQWtCO1lBQ3BCLGlCQUFjO1lBQ2hCLGlCQUFJOztpQ0RyREo7S0FVc0M7U0FBekIsc0JBQXNCO2tEQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sYmFyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbGJhci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyT3ZlcnZpZXdFeGFtcGxlIHt9XG4iLCI8cD5cbiAgPG1hdC10b29sYmFyPlxuICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb24gZmF2b3JpdGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggaGVhcnQgaWNvblwiPlxuICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggc2hhcmUgaWNvblwiPlxuICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiA8L2J1dHRvbj5cbjwvbWF0LXRvb2xiYXI+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRvb2xiYXI+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuXG4gICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgIDxzcGFuPlNlY29uZCBMaW5lPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICA8L21hdC10b29sYmFyPlxuPC9wPlxuIl19