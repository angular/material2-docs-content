import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/icon";
/**
 * @title Multi-row toolbar
 */
var ToolbarMultirowExample = /** @class */ (function () {
    function ToolbarMultirowExample() {
    }
    ToolbarMultirowExample.decorators = [
        { type: Component, args: [{
                    selector: 'toolbar-multirow-example',
                    templateUrl: 'toolbar-multirow-example.html',
                    styleUrls: ['toolbar-multirow-example.css'],
                },] },
    ];
    ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
    ToolbarMultirowExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-toolbar", 0);
            i0.ɵɵelementStart(1, "mat-toolbar-row");
            i0.ɵɵelementStart(2, "span");
            i0.ɵɵtext(3, "Custom Toolbar");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-toolbar-row");
            i0.ɵɵelementStart(5, "span");
            i0.ɵɵtext(6, "Second Line");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(7, "span", 1);
            i0.ɵɵelementStart(8, "mat-icon", 2);
            i0.ɵɵtext(9, "verified_user");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-toolbar-row");
            i0.ɵɵelementStart(11, "span");
            i0.ɵɵtext(12, "Third Line");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "span", 1);
            i0.ɵɵelementStart(14, "mat-icon", 3);
            i0.ɵɵtext(15, "favorite");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-icon", 4);
            i0.ɵɵtext(17, "delete");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
    return ToolbarMultirowExample;
}());
export { ToolbarMultirowExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO0tBS3NDOztnQkFMckMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7b0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2lCQUM1Qzs7Z0dBQ1ksc0JBQXNCOytEQUF0QixzQkFBc0I7WUNWbkMsc0NBQ0U7WUFBQSx1Q0FDRTtZQUFBLDRCQUFNO1lBQUEsOEJBQWM7WUFBQSxpQkFBTztZQUM3QixpQkFBa0I7WUFFbEIsdUNBQ0U7WUFBQSw0QkFBTTtZQUFBLDJCQUFXO1lBQUEsaUJBQU87WUFDeEIsMEJBQW9DO1lBQ3BDLG1DQUEyRjtZQUFBLDZCQUFhO1lBQUEsaUJBQVc7WUFDckgsaUJBQWtCO1lBRWxCLHdDQUNFO1lBQUEsNkJBQU07WUFBQSwyQkFBVTtZQUFBLGlCQUFPO1lBQ3ZCLDJCQUFvQztZQUNwQyxvQ0FBbUY7WUFBQSx5QkFBUTtZQUFBLGlCQUFXO1lBQ3RHLG9DQUFvRjtZQUFBLHVCQUFNO1lBQUEsaUJBQVc7WUFDdkcsaUJBQWtCO1lBQ3BCLGlCQUFjOztpQ0RqQmQ7Q0FVc0MsQUFMdEMsSUFLc0M7U0FBekIsc0JBQXNCO21DQUF0QixzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNdWx0aS1yb3cgdG9vbGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck11bHRpcm93RXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPkN1c3RvbSBUb29sYmFyPC9zcGFuPlxuICA8L21hdC10b29sYmFyLXJvdz5cblxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPlNlY29uZCBMaW5lPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIHVzZXIgdmVyaWZpZWQgaWNvblwiPnZlcmlmaWVkX3VzZXI8L21hdC1pY29uPlxuICA8L21hdC10b29sYmFyLXJvdz5cblxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPlRoaXJkIExpbmU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaGVhcnQgaWNvblwiPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZGVsZXRlIGljb25cIj5kZWxldGU8L21hdC1pY29uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=