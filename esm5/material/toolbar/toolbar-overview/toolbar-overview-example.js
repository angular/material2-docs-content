import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Toolbar overview
 */
var ToolbarOverviewExample = /** @class */ (function () {
    function ToolbarOverviewExample() {
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
}());
export { ToolbarOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-overview-example',
                templateUrl: 'toolbar-overview-example.html',
                styleUrls: ['toolbar-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7S0FLc0M7Z0dBQXpCLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDVm5DLHlCQUNFO1lBQUEsbUNBQ0M7WUFBQSxpQ0FDQztZQUFBLGdDQUFVO1lBQUEsb0JBQUk7WUFBQSxpQkFBVztZQUMzQixpQkFBUztZQUNULDRCQUFNO1lBQUEsc0JBQU07WUFBQSxpQkFBTztZQUNuQiwwQkFBb0M7WUFDcEMsaUNBQ0U7WUFBQSxnQ0FBVTtZQUFBLHlCQUFRO1lBQUEsaUJBQVc7WUFDL0IsaUJBQVM7WUFDVCxrQ0FDQztZQUFBLGlDQUFVO1lBQUEsc0JBQUs7WUFBQSxpQkFBVztZQUM1QixpQkFBUztZQUNWLGlCQUFjO1lBQ2QsaUJBQUk7WUFFSiwwQkFDRTtZQUFBLHVDQUNFO1lBQUEsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHFCQUFJO1lBQUEsaUJBQVc7WUFDM0IsaUJBQVM7WUFDVCw2QkFBTTtZQUFBLHVCQUFNO1lBQUEsaUJBQU87WUFDbkIsMkJBQW9DO1lBQ3BDLGtDQUNFO1lBQUEsaUNBQVU7WUFBQSx5QkFBUTtZQUFBLGlCQUFXO1lBQy9CLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHNCQUFLO1lBQUEsaUJBQVc7WUFDNUIsaUJBQVM7WUFDWCxpQkFBYztZQUNoQixpQkFBSTtZQUVKLDBCQUNFO1lBQUEsdUNBQ0U7WUFBQSx3Q0FDRTtZQUFBLDZCQUFNO1lBQUEsdUJBQU07WUFBQSxpQkFBTztZQUNuQiwyQkFBb0M7WUFDcEMsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHFCQUFJO1lBQUEsaUJBQVc7WUFDM0IsaUJBQVM7WUFDWCxpQkFBa0I7WUFFbEIsd0NBQ0U7WUFBQSw2QkFBTTtZQUFBLDRCQUFXO1lBQUEsaUJBQU87WUFDeEIsMkJBQW9DO1lBQ3BDLGtDQUNFO1lBQUEsaUNBQVU7WUFBQSx5QkFBUTtZQUFBLGlCQUFXO1lBQy9CLGlCQUFTO1lBQ1Qsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHNCQUFLO1lBQUEsaUJBQVc7WUFDNUIsaUJBQVM7WUFDWCxpQkFBa0I7WUFDcEIsaUJBQWM7WUFDaEIsaUJBQUk7O2lDRHJESjtDQVVzQyxBQUx0QyxJQUtzQztTQUF6QixzQkFBc0I7a0RBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRvb2xiYXIgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJPdmVydmlld0V4YW1wbGUge31cbiIsIjxwPlxuICA8bWF0LXRvb2xiYXI+XG4gICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuIDwvYnV0dG9uPlxuPC9tYXQtdG9vbGJhcj5cbjwvcD5cblxuPHA+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb24gZmF2b3JpdGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggaGVhcnQgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggc2hhcmUgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtdG9vbGJhcj5cbjwvcD5cblxuPHA+XG4gIDxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgPHNwYW4+TXkgQXBwPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG5cbiAgICA8bWF0LXRvb2xiYXItcm93PlxuICAgICAgPHNwYW4+U2Vjb25kIExpbmU8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb24gZmF2b3JpdGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggaGVhcnQgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggc2hhcmUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9tYXQtdG9vbGJhci1yb3c+XG4gIDwvbWF0LXRvb2xiYXI+XG48L3A+XG4iXX0=