import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/icon";
/**
 * @title Multi-row toolbar
 */
export class ToolbarMultirowExample {
}
ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
ToolbarMultirowExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDVm5DLHNDQUE2QjtRQUUzQix1Q0FBaUI7UUFDZiw0QkFBTTtRQUFBLDhCQUFjO1FBQUEsaUJBQU87UUFDN0IsaUJBQWtCO1FBSWxCLHVDQUFpQjtRQUNmLDRCQUFNO1FBQUEsMkJBQVc7UUFBQSxpQkFBTztRQUN4QiwwQkFBb0M7UUFDcEMsbUNBQTJGO1FBQUEsNkJBQWE7UUFBQSxpQkFBVztRQUNySCxpQkFBa0I7UUFHbEIsd0NBQWlCO1FBQ2YsNkJBQU07UUFBQSwyQkFBVTtRQUFBLGlCQUFPO1FBQ3ZCLDJCQUFvQztRQUNwQyxvQ0FBbUY7UUFBQSx5QkFBUTtRQUFBLGlCQUFXO1FBQ3RHLG9DQUFvRjtRQUFBLHVCQUFNO1FBQUEsaUJBQVc7UUFDdkcsaUJBQWtCO1FBQ3BCLGlCQUFjOzt1RkRYRCxzQkFBc0I7Y0FMbEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSwrQkFBK0I7Z0JBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBNdWx0aS1yb3cgdG9vbGJhclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck11bHRpcm93RXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiPlxuPCEtLSAjZG9jcmVnaW9uIHRvb2xiYXItcm93IC0tPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPkN1c3RvbSBUb29sYmFyPC9zcGFuPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwhLS0gI2VuZGRvY3JlZ2lvbiB0b29sYmFyLXJvdyAtLT5cblxuPCEtLSAjZG9jcmVnaW9uIHRvb2xiYXItcG9zaXRpb24tY29udGVudCAtLT5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB1c2VyIHZlcmlmaWVkIGljb25cIj52ZXJpZmllZF91c2VyPC9tYXQtaWNvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1wb3NpdGlvbi1jb250ZW50IC0tPlxuXG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPHNwYW4+VGhpcmQgTGluZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBoZWFydCBpY29uXCI+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBkZWxldGUgaWNvblwiPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPC9tYXQtdG9vbGJhcj5cbiJdfQ==