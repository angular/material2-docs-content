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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjs7NEZBQXRCLHNCQUFzQjsyREFBdEIsc0JBQXNCO1FDVm5DLHNDQUNBO1FBQ0UsdUNBQ0U7UUFBQSw0QkFBTTtRQUFBLDhCQUFjO1FBQUEsaUJBQU87UUFDN0IsaUJBQWtCO1FBSWxCLHVDQUNFO1FBQUEsNEJBQU07UUFBQSwyQkFBVztRQUFBLGlCQUFPO1FBQ3hCLDBCQUFvQztRQUNwQyxtQ0FBMkY7UUFBQSw2QkFBYTtRQUFBLGlCQUFXO1FBQ3JILGlCQUFrQjtRQUdsQix3Q0FDRTtRQUFBLDZCQUFNO1FBQUEsMkJBQVU7UUFBQSxpQkFBTztRQUN2QiwyQkFBb0M7UUFDcEMsb0NBQW1GO1FBQUEseUJBQVE7UUFBQSxpQkFBVztRQUN0RyxvQ0FBb0Y7UUFBQSx1QkFBTTtRQUFBLGlCQUFXO1FBQ3ZHLGlCQUFrQjtRQUNwQixpQkFBYzs7dUZEWEQsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTXVsdGktcm93IHRvb2xiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUge31cbiIsIjxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbjwhLS0gI2RvY3JlZ2lvbiB0b29sYmFyLXJvdyAtLT5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5DdXN0b20gVG9vbGJhcjwvc3Bhbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1yb3cgLS0+XG5cbjwhLS0gI2RvY3JlZ2lvbiB0b29sYmFyLXBvc2l0aW9uLWNvbnRlbnQgLS0+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPHNwYW4+U2Vjb25kIExpbmU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgdXNlciB2ZXJpZmllZCBpY29uXCI+dmVyaWZpZWRfdXNlcjwvbWF0LWljb24+XG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPCEtLSAjZW5kZG9jcmVnaW9uIHRvb2xiYXItcG9zaXRpb24tY29udGVudCAtLT5cblxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPlRoaXJkIExpbmU8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaGVhcnQgaWNvblwiPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgZGVsZXRlIGljb25cIj5kZWxldGU8L21hdC1pY29uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwvbWF0LXRvb2xiYXI+XG4iXX0=