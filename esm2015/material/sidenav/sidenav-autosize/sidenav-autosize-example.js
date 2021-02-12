import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function SidenavAutosizeExample_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Lorem, ipsum dolor sit amet consectetur.");
    i0.ɵɵelementEnd();
} }
/**
 * @title Autosize sidenav
 */
export class SidenavAutosizeExample {
    constructor() {
        this.showFiller = false;
    }
}
SidenavAutosizeExample.ɵfac = function SidenavAutosizeExample_Factory(t) { return new (t || SidenavAutosizeExample)(); };
SidenavAutosizeExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavAutosizeExample, selectors: [["sidenav-autosize-example"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function SidenavAutosizeExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4, "Auto-resizing sidenav");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SidenavAutosizeExample_p_5_Template, 2, 0, "p", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_6_listener() { return ctx.showFiller = !ctx.showFiller; });
        i0.ɵɵtext(7, " Toggle extra text ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "button", 6);
        i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
        i0.ɵɵtext(10, " Toggle sidenav ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.showFiller);
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i2.NgIf, i3.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavAutosizeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-autosize-example',
                templateUrl: 'sidenav-autosize-example.html',
                styleUrls: ['sidenav-autosize-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNHcEMseUJBQXNCO0lBQUEsd0RBQXdDO0lBQUEsaUJBQUk7O0FERHRFOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FDcEI7OzRGQUZZLHNCQUFzQjsyREFBdEIsc0JBQXNCOztRQ1ZuQywrQ0FBeUQ7UUFDdkQsd0NBQXdEO1FBQ3RELHlCQUFHO1FBQUEscUNBQXFCO1FBQUEsaUJBQUk7UUFDNUIsbUVBQWtFO1FBQ2xFLGlDQUE2RDtRQUFyRCx1SUFBa0M7UUFDeEMsbUNBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFhO1FBRWIsOEJBQXFDO1FBQ25DLGlDQUEyRDtRQUExQix5SkFBUyxZQUFlLElBQUM7UUFDeEQsaUNBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBRVIsaUJBQXVCOztRQVpmLGVBQWdCO1FBQWhCLHFDQUFnQjs7dUZET1gsc0JBQXNCO2NBTGxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsK0JBQStCO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQXV0b3NpemUgc2lkZW5hdlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZW5hdkF1dG9zaXplRXhhbXBsZSB7XG4gIHNob3dGaWxsZXIgPSBmYWxzZTtcbn1cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgYXV0b3NpemU+XG4gIDxtYXQtZHJhd2VyICNkcmF3ZXIgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXZcIiBtb2RlPVwic2lkZVwiPlxuICAgIDxwPkF1dG8tcmVzaXppbmcgc2lkZW5hdjwvcD5cbiAgICA8cCAqbmdJZj1cInNob3dGaWxsZXJcIj5Mb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIuPC9wPlxuICAgIDxidXR0b24gKGNsaWNrKT1cInNob3dGaWxsZXIgPSAhc2hvd0ZpbGxlclwiIG1hdC1yYWlzZWQtYnV0dG9uPlxuICAgICAgVG9nZ2xlIGV4dHJhIHRleHRcbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtZHJhd2VyPlxuXG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLXNpZGVuYXYtY29udGVudFwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG1hdC1idXR0b24gKGNsaWNrKT1cImRyYXdlci50b2dnbGUoKVwiPlxuICAgICAgVG9nZ2xlIHNpZGVuYXZcbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG5cbjwvbWF0LWRyYXdlci1jb250YWluZXI+XG4iXX0=