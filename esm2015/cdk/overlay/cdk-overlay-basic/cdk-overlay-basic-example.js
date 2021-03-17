import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
function CdkOverlayBasicExample_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 3);
    i0.ɵɵelementStart(1, "li");
    i0.ɵɵtext(2, "Item 1");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "li");
    i0.ɵɵtext(4, "Item 2");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "li");
    i0.ɵɵtext(6, "Item 3");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
/**
 * @title Overlay basic example
 */
export class CdkOverlayBasicExample {
    constructor() {
        this.isOpen = false;
    }
}
CdkOverlayBasicExample.ɵfac = function CdkOverlayBasicExample_Factory(t) { return new (t || CdkOverlayBasicExample)(); };
CdkOverlayBasicExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkOverlayBasicExample, selectors: [["cdk-overlay-basic-example"]], decls: 4, vars: 3, consts: [["type", "button", "cdkOverlayOrigin", "", 3, "click"], ["trigger", "cdkOverlayOrigin"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen"], [1, "example-list"]], template: function CdkOverlayBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function CdkOverlayBasicExample_Template_button_click_0_listener() { return ctx.isOpen = !ctx.isOpen; });
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CdkOverlayBasicExample_ng_template_3_Template, 7, 0, "ng-template", 2);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(1);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx.isOpen ? "Close" : "Open", "\n");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkConnectedOverlayOrigin", _r0)("cdkConnectedOverlayOpen", ctx.isOpen);
    } }, directives: [i1.CdkOverlayOrigin, i1.CdkConnectedOverlay], styles: [".example-list[_ngcontent-%COMP%] {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkOverlayBasicExample, [{
        type: Component,
        args: [{
                selector: 'cdk-overlay-basic-example',
                templateUrl: './cdk-overlay-basic-example.html',
                styleUrls: ['./cdk-overlay-basic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW92ZXJsYXktYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9vdmVybGF5L2Nkay1vdmVybGF5LWJhc2ljL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvb3ZlcmxheS9jZGstb3ZlcmxheS1iYXNpYy9jZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ1d0Qyw2QkFBeUI7SUFDdkIsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2pCLGlCQUFLOztBRGJQOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7OzRGQUZZLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDVG5DLG9DQUE4RjtRQUF0RiwrSEFBMEI7UUFDaEMsWUFDRjtRQUFBLGlCQUFTO1FBR1QsdUZBVWM7OztRQWRaLGVBQ0Y7UUFERSwrREFDRjtRQUtFLGVBQXFDO1FBQXJDLCtDQUFxQyx1Q0FBQTs7dUZERTFCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDL0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE92ZXJsYXkgYmFzaWMgZXhhbXBsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka092ZXJsYXlCYXNpY0V4YW1wbGUge1xuICBpc09wZW4gPSBmYWxzZTtcbn1cbiIsIjwhLS0gVGhpcyBidXR0b24gdHJpZ2dlcnMgdGhlIG92ZXJsYXkgYW5kIGlzIGl0J3Mgb3JpZ2luIC0tPlxuPGJ1dHRvbiAoY2xpY2spPVwiaXNPcGVuID0gIWlzT3BlblwiIHR5cGU9XCJidXR0b25cIiBjZGtPdmVybGF5T3JpZ2luICN0cmlnZ2VyPVwiY2RrT3ZlcmxheU9yaWdpblwiPlxuICB7e2lzT3BlbiA/IFwiQ2xvc2VcIiA6IFwiT3BlblwifX1cbjwvYnV0dG9uPlxuXG48IS0tIFRoaXMgdGVtcGxhdGUgZGlzcGxheXMgdGhlIG92ZXJsYXkgY29udGVudCBhbmQgaXMgY29ubmVjdGVkIHRvIHRoZSBidXR0b24gLS0+XG48bmctdGVtcGxhdGVcbiAgY2RrQ29ubmVjdGVkT3ZlcmxheVxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9yaWdpbl09XCJ0cmlnZ2VyXCJcbiAgW2Nka0Nvbm5lY3RlZE92ZXJsYXlPcGVuXT1cImlzT3BlblwiXG4+XG4gIDx1bCBjbGFzcz1cImV4YW1wbGUtbGlzdFwiPlxuICAgIDxsaT5JdGVtIDE8L2xpPlxuICAgIDxsaT5JdGVtIDI8L2xpPlxuICAgIDxsaT5JdGVtIDM8L2xpPlxuICA8L3VsPlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==