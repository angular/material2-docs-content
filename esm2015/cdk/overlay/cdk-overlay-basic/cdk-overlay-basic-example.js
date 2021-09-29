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
        args: [{ selector: 'cdk-overlay-basic-example', template: "<!-- This button triggers the overlay and is it's origin -->\n<button (click)=\"isOpen = !isOpen\" type=\"button\" cdkOverlayOrigin #trigger=\"cdkOverlayOrigin\">\n  {{isOpen ? \"Close\" : \"Open\"}}\n</button>\n\n<!-- This template displays the overlay content and is connected to the button -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"trigger\"\n  [cdkConnectedOverlayOpen]=\"isOpen\"\n>\n  <ul class=\"example-list\">\n    <li>Item 1</li>\n    <li>Item 2</li>\n    <li>Item 3</li>\n  </ul>\n</ng-template>\n", styles: [".example-list {\n  width: 100px;\n  border: solid 1px #ccc;\n  border-radius: 5px;\n  background: #fff;\n  text-align: center;\n  padding: 10px;\n  margin: 0;\n}\n\n.example-list > li {\n  list-style-type: none;\n  border-bottom: solid 1px #8b8b8b;\n  padding: 8px 0;\n}\n\n.example-list > li:last-child {\n  border-bottom: none;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW92ZXJsYXktYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9vdmVybGF5L2Nkay1vdmVybGF5LWJhc2ljL2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvb3ZlcmxheS9jZGstb3ZlcmxheS1iYXNpYy9jZGstb3ZlcmxheS1iYXNpYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ1d0Qyw2QkFBeUI7SUFDdkIsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2YsMEJBQUk7SUFBQSxzQkFBTTtJQUFBLGlCQUFLO0lBQ2pCLGlCQUFLOztBRGJQOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFdBQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7OzRGQUZZLHNCQUFzQjt5RUFBdEIsc0JBQXNCO1FDVG5DLG9DQUE4RjtRQUF0RiwrSEFBMEI7UUFDaEMsWUFDRjtRQUFBLGlCQUFTO1FBR1QsdUZBVWM7OztRQWRaLGVBQ0Y7UUFERSwrREFDRjtRQUtFLGVBQXFDO1FBQXJDLCtDQUFxQyx1Q0FBQTs7dUZERTFCLHNCQUFzQjtjQUxsQyxTQUFTOzJCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgT3ZlcmxheSBiYXNpYyBleGFtcGxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1vdmVybGF5LWJhc2ljLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLW92ZXJsYXktYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2RrLW92ZXJsYXktYmFzaWMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrT3ZlcmxheUJhc2ljRXhhbXBsZSB7XG4gIGlzT3BlbiA9IGZhbHNlO1xufVxuIiwiPCEtLSBUaGlzIGJ1dHRvbiB0cmlnZ2VycyB0aGUgb3ZlcmxheSBhbmQgaXMgaXQncyBvcmlnaW4gLS0+XG48YnV0dG9uIChjbGljayk9XCJpc09wZW4gPSAhaXNPcGVuXCIgdHlwZT1cImJ1dHRvblwiIGNka092ZXJsYXlPcmlnaW4gI3RyaWdnZXI9XCJjZGtPdmVybGF5T3JpZ2luXCI+XG4gIHt7aXNPcGVuID8gXCJDbG9zZVwiIDogXCJPcGVuXCJ9fVxuPC9idXR0b24+XG5cbjwhLS0gVGhpcyB0ZW1wbGF0ZSBkaXNwbGF5cyB0aGUgb3ZlcmxheSBjb250ZW50IGFuZCBpcyBjb25uZWN0ZWQgdG8gdGhlIGJ1dHRvbiAtLT5cbjxuZy10ZW1wbGF0ZVxuICBjZGtDb25uZWN0ZWRPdmVybGF5XG4gIFtjZGtDb25uZWN0ZWRPdmVybGF5T3JpZ2luXT1cInRyaWdnZXJcIlxuICBbY2RrQ29ubmVjdGVkT3ZlcmxheU9wZW5dPVwiaXNPcGVuXCJcbj5cbiAgPHVsIGNsYXNzPVwiZXhhbXBsZS1saXN0XCI+XG4gICAgPGxpPkl0ZW0gMTwvbGk+XG4gICAgPGxpPkl0ZW0gMjwvbGk+XG4gICAgPGxpPkl0ZW0gMzwvbGk+XG4gIDwvdWw+XG48L25nLXRlbXBsYXRlPlxuIl19