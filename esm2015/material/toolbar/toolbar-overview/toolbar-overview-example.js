/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/toolbar/toolbar-overview/toolbar-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * \@title Toolbar overview
 */
let ToolbarOverviewExample = /** @class */ (() => {
    /**
     * \@title Toolbar overview
     */
    class ToolbarOverviewExample {
    }
    ToolbarOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-overview-example',
                    templateUrl: 'toolbar-overview-example.html',
                    styleUrls: ['toolbar-overview-example.css'],
                },] },
    ];
    /** @nocollapse */ ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
    /** @nocollapse */ ToolbarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 47, vars: 0, consts: [["mat-icon-button", "", "aria-label", "Example icon-button with menu icon", 1, "example-icon"], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], ["color", "primary"]], template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0FBS3hDOzs7O0lBQUEsTUFLYSxzQkFBc0I7OztnQkFMbEMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7bUhBQ1ksc0JBQXNCO2tGQUF0QixzQkFBc0I7WUNWbkMseUJBQ0U7WUFBQSxtQ0FDQztZQUFBLGlDQUNDO1lBQUEsZ0NBQVU7WUFBQSxvQkFBSTtZQUFBLGlCQUFXO1lBQzNCLGlCQUFTO1lBQ1QsNEJBQU07WUFBQSxzQkFBTTtZQUFBLGlCQUFPO1lBQ25CLDBCQUFvQztZQUNwQyxpQ0FDRTtZQUFBLGdDQUFVO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUMvQixpQkFBUztZQUNULGtDQUNDO1lBQUEsaUNBQVU7WUFBQSxzQkFBSztZQUFBLGlCQUFXO1lBQzVCLGlCQUFTO1lBQ1YsaUJBQWM7WUFDZCxpQkFBSTtZQUVKLDBCQUNFO1lBQUEsdUNBQ0U7WUFBQSxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEscUJBQUk7WUFBQSxpQkFBVztZQUMzQixpQkFBUztZQUNULDZCQUFNO1lBQUEsdUJBQU07WUFBQSxpQkFBTztZQUNuQiwyQkFBb0M7WUFDcEMsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHlCQUFRO1lBQUEsaUJBQVc7WUFDL0IsaUJBQVM7WUFDVCxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEsc0JBQUs7WUFBQSxpQkFBVztZQUM1QixpQkFBUztZQUNYLGlCQUFjO1lBQ2hCLGlCQUFJO1lBRUosMEJBQ0U7WUFBQSx1Q0FDRTtZQUFBLHdDQUNFO1lBQUEsNkJBQU07WUFBQSx1QkFBTTtZQUFBLGlCQUFPO1lBQ25CLDJCQUFvQztZQUNwQyxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEscUJBQUk7WUFBQSxpQkFBVztZQUMzQixpQkFBUztZQUNYLGlCQUFrQjtZQUVsQix3Q0FDRTtZQUFBLDZCQUFNO1lBQUEsNEJBQVc7WUFBQSxpQkFBTztZQUN4QiwyQkFBb0M7WUFDcEMsa0NBQ0U7WUFBQSxpQ0FBVTtZQUFBLHlCQUFRO1lBQUEsaUJBQVc7WUFDL0IsaUJBQVM7WUFDVCxrQ0FDRTtZQUFBLGlDQUFVO1lBQUEsc0JBQUs7WUFBQSxpQkFBVztZQUM1QixpQkFBUztZQUNYLGlCQUFrQjtZQUNwQixpQkFBYztZQUNoQixpQkFBSTs7aUNEckRKO0tBVXNDO1NBQXpCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbGJhciBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtdG9vbGJhcj5cbiAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gIDwvYnV0dG9uPlxuICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gPC9idXR0b24+XG48L21hdC10b29sYmFyPlxuPC9wPlxuXG48cD5cbiAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBtZW51IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICAgICA8bWF0LWljb24+c2hhcmU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC10b29sYmFyPlxuPC9wPlxuXG48cD5cbiAgPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICA8c3Bhbj5NeSBBcHA8L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+bWVudTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cblxuICAgIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvbiBmYXZvcml0ZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBoZWFydCBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbi1idXR0b24gd2l0aCBzaGFyZSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC10b29sYmFyLXJvdz5cbiAgPC9tYXQtdG9vbGJhcj5cbjwvcD5cbiJdfQ==