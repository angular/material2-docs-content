import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
function CdkMenuStandaloneMenuExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵtext(2, "Refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵtext(4, "Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 4);
    i0.ɵɵtext(6, "Help");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 4);
    i0.ɵɵtext(8, "Sign out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵproperty("cdkMenuPanel", _r0);
} }
/** @title Menu with Standalone Trigger. */
export class CdkMenuStandaloneMenuExample {
}
CdkMenuStandaloneMenuExample.ɵfac = function CdkMenuStandaloneMenuExample_Factory(t) { return new (t || CdkMenuStandaloneMenuExample)(); };
CdkMenuStandaloneMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkMenuStandaloneMenuExample, selectors: [["cdk-menu-standalone-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuStandaloneMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Click me!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, CdkMenuStandaloneMenuExample_ng_template_2_Template, 9, 1, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkMenuTriggerFor", _r0);
    } }, directives: [i1.CdkMenuItem, i1.CdkMenuItemTrigger, i1.CdkMenuPanel, i1.CdkMenu], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuStandaloneMenuExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-standalone-menu-example',
                styleUrls: ['cdk-menu-standalone-menu-example.css'],
                templateUrl: 'cdk-menu-standalone-menu-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNHdEMsOEJBQXdEO0lBQ3RELGlDQUE4QztJQUFBLHVCQUFPO0lBQUEsaUJBQVM7SUFDOUQsaUNBQThDO0lBQUEsd0JBQVE7SUFBQSxpQkFBUztJQUMvRCxpQ0FBOEM7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQzNELGlDQUE4QztJQUFBLHdCQUFRO0lBQUEsaUJBQVM7SUFDakUsaUJBQU07Ozs7SUFMNEIsa0NBQXFCOztBRER6RCwyQ0FBMkM7QUFNM0MsTUFBTSxPQUFPLDRCQUE0Qjs7d0dBQTVCLDRCQUE0QjtpRUFBNUIsNEJBQTRCO1FDUnpDLGlDQUErRTtRQUFBLHlCQUFTO1FBQUEsaUJBQVM7UUFFakcsMkhBT2M7OztRQVRNLHVDQUEwQjs7dUZEUWpDLDRCQUE0QjtjQUx4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztnQkFDNUMsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELFdBQVcsRUFBRSx1Q0FBdUM7YUFDckQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTWVudSB3aXRoIFN0YW5kYWxvbmUgVHJpZ2dlci4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIGNka01lbnVJdGVtIFtjZGtNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgY2xhc3M9XCJleGFtcGxlLXN0YW5kYWxvbmUtaXRlbVwiPkNsaWNrIG1lITwvYnV0dG9uPlxuXG48bmctdGVtcGxhdGUgY2RrTWVudVBhbmVsICNtZW51PVwiY2RrTWVudVBhbmVsXCI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51IFtjZGtNZW51UGFuZWxdPVwibWVudVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlJlZnJlc2g8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TZXR0aW5nczwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkhlbHA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TaWduIG91dDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=