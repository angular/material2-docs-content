import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
/** @title Gmail inline menu. */
export class CdkMenuInlineExample {
}
CdkMenuInlineExample.ɵfac = function CdkMenuInlineExample_Factory(t) { return new (t || CdkMenuInlineExample)(); };
CdkMenuInlineExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkMenuInlineExample, selectors: [["cdk-menu-inline-example"]], exportAs: ["cdkMenuInlineExample"], decls: 13, vars: 0, consts: [["cdkMenu", "", 1, "example-menu"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuInlineExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵtext(2, "Inbox");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵtext(4, "Snoozed");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 1);
        i0.ɵɵtext(6, "Important");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "button", 1);
        i0.ɵɵtext(8, "Sent");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 1);
        i0.ɵɵtext(10, "Drafts");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "button", 1);
        i0.ɵɵtext(12, "All Mail");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkMenu, i1.CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuInlineExample, [{
        type: Component,
        args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4QyxnQ0FBZ0M7QUFPaEMsTUFBTSxPQUFPLG9CQUFvQjs7d0ZBQXBCLG9CQUFvQjt1RUFBcEIsb0JBQW9CO1FDVGpDLDhCQUFrQztRQUNoQyxpQ0FBOEM7UUFBQSxxQkFBSztRQUFBLGlCQUFTO1FBQzVELGlDQUE4QztRQUFBLHVCQUFPO1FBQUEsaUJBQVM7UUFDOUQsaUNBQThDO1FBQUEseUJBQVM7UUFBQSxpQkFBUztRQUNoRSxpQ0FBOEM7UUFBQSxvQkFBSTtRQUFBLGlCQUFTO1FBQzNELGlDQUE4QztRQUFBLHVCQUFNO1FBQUEsaUJBQVM7UUFDN0Qsa0NBQThDO1FBQUEseUJBQVE7UUFBQSxpQkFBUztRQUNqRSxpQkFBTTs7dUZERU8sb0JBQW9CO2NBTmhDLFNBQVM7MkJBQ0UseUJBQXlCLFlBQ3pCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBHbWFpbCBpbmxpbmUgbWVudS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LWlubGluZS1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51SW5saW5lRXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1pbmxpbmUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1pbmxpbmUtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUlubGluZUV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5JbmJveDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Tbm9vemVkPC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkltcG9ydGFudDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TZW50PC9idXR0b24+XG4gIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkRyYWZ0czwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5BbGwgTWFpbDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=