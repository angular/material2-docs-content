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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
        type: Component,
        args: [{
                selector: 'toolbar-multirow-example',
                templateUrl: 'toolbar-multirow-example.html',
                styleUrls: ['toolbar-multirow-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtLQUtzQzs7Z0JBTHJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7O2dHQUNZLHNCQUFzQjsrREFBdEIsc0JBQXNCO1lDVm5DLHNDQUNFO1lBQUEsdUNBQ0U7WUFBQSw0QkFBTTtZQUFBLDhCQUFjO1lBQUEsaUJBQU87WUFDN0IsaUJBQWtCO1lBRWxCLHVDQUNFO1lBQUEsNEJBQU07WUFBQSwyQkFBVztZQUFBLGlCQUFPO1lBQ3hCLDBCQUFvQztZQUNwQyxtQ0FBMkY7WUFBQSw2QkFBYTtZQUFBLGlCQUFXO1lBQ3JILGlCQUFrQjtZQUVsQix3Q0FDRTtZQUFBLDZCQUFNO1lBQUEsMkJBQVU7WUFBQSxpQkFBTztZQUN2QiwyQkFBb0M7WUFDcEMsb0NBQW1GO1lBQUEseUJBQVE7WUFBQSxpQkFBVztZQUN0RyxvQ0FBb0Y7WUFBQSx1QkFBTTtZQUFBLGlCQUFXO1lBQ3ZHLGlCQUFrQjtZQUNwQixpQkFBYzs7aUNEakJkO0NBVXNDLEFBTHRDLElBS3NDO1NBQXpCLHNCQUFzQjtrREFBdEIsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTXVsdGktcm93IHRvb2xiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUge31cbiIsIjxtYXQtdG9vbGJhciBjb2xvcj1cInByaW1hcnlcIj5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5DdXN0b20gVG9vbGJhcjwvc3Bhbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB1c2VyIHZlcmlmaWVkIGljb25cIj52ZXJpZmllZF91c2VyPC9tYXQtaWNvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5UaGlyZCBMaW5lPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGhlYXJ0IGljb25cIj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGRlbGV0ZSBpY29uXCI+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuIl19