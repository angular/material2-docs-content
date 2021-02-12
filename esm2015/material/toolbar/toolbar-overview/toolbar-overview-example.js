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
ToolbarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 51, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQ1ZuQyx5QkFBRztRQUVELG1DQUFhO1FBQ1gsNEJBQU07UUFBQSw4QkFBYztRQUFBLGlCQUFPO1FBQzdCLGlCQUFjO1FBRWhCLGlCQUFJO1FBRUoseUJBQUc7UUFDRCxtQ0FBYTtRQUNaLGlDQUE2RjtRQUM1RixnQ0FBVTtRQUFBLG9CQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDVCw0QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE0RztRQUMxRyxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFDL0IsaUJBQVM7UUFDVCxrQ0FBOEY7UUFDN0YsaUNBQVU7UUFBQSxzQkFBSztRQUFBLGlCQUFXO1FBQzVCLGlCQUFTO1FBQ1YsaUJBQWM7UUFDZCxpQkFBSTtRQUVKLDBCQUFHO1FBQ0QsdUNBQTZCO1FBQzNCLGtDQUE2RjtRQUMzRixpQ0FBVTtRQUFBLHFCQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDVCw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE0RztRQUMxRyxpQ0FBVTtRQUFBLHlCQUFRO1FBQUEsaUJBQVc7UUFDL0IsaUJBQVM7UUFDVCxrQ0FBOEY7UUFDNUYsaUNBQVU7UUFBQSxzQkFBSztRQUFBLGlCQUFXO1FBQzVCLGlCQUFTO1FBQ1gsaUJBQWM7UUFDaEIsaUJBQUk7UUFFSiwwQkFBRztRQUNELHVDQUE2QjtRQUMzQix3Q0FBaUI7UUFDZiw2QkFBTTtRQUFBLHVCQUFNO1FBQUEsaUJBQU87UUFDbkIsMkJBQW9DO1FBQ3BDLGtDQUE2RjtRQUMzRixpQ0FBVTtRQUFBLHFCQUFJO1FBQUEsaUJBQVc7UUFDM0IsaUJBQVM7UUFDWCxpQkFBa0I7UUFFbEIsd0NBQWlCO1FBQ2YsNkJBQU07UUFBQSw0QkFBVztRQUFBLGlCQUFPO1FBQ3hCLDJCQUFvQztRQUNwQyxrQ0FBNEc7UUFDMUcsaUNBQVU7UUFBQSx5QkFBUTtRQUFBLGlCQUFXO1FBQy9CLGlCQUFTO1FBQ1Qsa0NBQThGO1FBQzVGLGlDQUFVO1FBQUEsc0JBQUs7UUFBQSxpQkFBVztRQUM1QixpQkFBUztRQUNYLGlCQUFrQjtRQUNwQixpQkFBYztRQUNoQixpQkFBSTs7dUZEbkRTLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2xiYXIgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxwPlxuPCEtLSAjZG9jcmVnaW9uIHRvb2xiYXItc2ltcGxlIC0tPlxuICA8bWF0LXRvb2xiYXI+XG4gICAgPHNwYW4+TXkgQXBwbGljYXRpb248L3NwYW4+XG4gIDwvbWF0LXRvb2xiYXI+XG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1zaW1wbGUgLS0+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXI+XG4gICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuIDwvYnV0dG9uPlxuPC9tYXQtdG9vbGJhcj5cbjwvcD5cblxuPHA+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb24gZmF2b3JpdGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggaGVhcnQgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggc2hhcmUgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdG9vbGJhcj5cbjwvcD5cblxuPHA+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG5cbiAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgPHNwYW4+U2Vjb25kIExpbmU8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb24gZmF2b3JpdGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggaGVhcnQgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggc2hhcmUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gIDwvbWF0LXRvb2xiYXI+XG48L3A+XG4iXX0=