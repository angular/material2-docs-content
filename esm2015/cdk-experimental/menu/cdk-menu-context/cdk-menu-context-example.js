import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
function CdkMenuContextExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵtext(2, "Cut");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵtext(4, "Copy");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 4);
    i0.ɵɵtext(6, "Link");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵproperty("cdkMenuPanel", _r0);
} }
/** @title Context menu. */
export class CdkMenuContextExample {
}
CdkMenuContextExample.ɵfac = function CdkMenuContextExample_Factory(t) { return new (t || CdkMenuContextExample)(); };
CdkMenuContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkMenuContextExample, selectors: [["cdk-menu-context-example"]], exportAs: ["cdkMenuContextExample"], decls: 4, vars: 1, consts: [[3, "cdkContextMenuTriggerFor"], ["cdkMenuPanel", ""], ["context_menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuContextExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.\n");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, CdkMenuContextExample_ng_template_2_Template, 7, 1, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkContextMenuTriggerFor", _r0);
    } }, directives: [i1.CdkContextMenuTrigger, i1.CdkMenuPanel, i1.CdkMenu, i1.CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuContextExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-context-example',
                exportAs: 'cdkMenuContextExample',
                styleUrls: ['cdk-menu-context-example.css'],
                templateUrl: 'cdk-menu-context-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ1l0Qyw4QkFBZ0U7SUFDOUQsaUNBQThDO0lBQUEsbUJBQUc7SUFBQSxpQkFBUztJQUMxRCxpQ0FBOEM7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQzNELGlDQUE4QztJQUFBLG9CQUFJO0lBQUEsaUJBQVM7SUFDN0QsaUJBQU07Ozs7SUFKNEIsa0NBQTZCOztBRFZqRSwyQkFBMkI7QUFPM0IsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjswREFBckIscUJBQXFCO1FDVGxDLDhCQUErQztRQUM3Qyxnd0JBUUY7UUFBQSxpQkFBTTtRQUVOLG9IQU1jOzs7UUFqQlQsOENBQXlDOzt1RkRTakMscUJBQXFCO2NBTmpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztnQkFDM0MsV0FBVyxFQUFFLCtCQUErQjthQUM3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBDb250ZXh0IG1lbnUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1jb250ZXh0LWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka01lbnVDb250ZXh0RXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstbWVudS1jb250ZXh0LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51Q29udGV4dEV4YW1wbGUge31cbiIsIjxkaXYgW2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcl09XCJjb250ZXh0X21lbnVcIj5cbiAgRGlkIHlvdSBldmVyIGhlYXIgdGhlIHRyYWdlZHkgb2YgRGFydGggUGxhZ3VlaXMgVGhlIFdpc2U/IEkgdGhvdWdodCBub3QuIEl0J3Mgbm90IGEgc3RvcnkgdGhlIEplZGlcbiAgd291bGQgdGVsbCB5b3UuIEl0J3MgYSBTaXRoIGxlZ2VuZC4gRGFydGggUGxhZ3VlaXMgd2FzIGEgRGFyayBMb3JkIG9mIHRoZSBTaXRoLCBzbyBwb3dlcmZ1bCBhbmQgc29cbiAgd2lzZSBoZSBjb3VsZCB1c2UgdGhlIEZvcmNlIHRvIGluZmx1ZW5jZSB0aGUgbWlkaWNobG9yaWFucyB0byBjcmVhdGUgbGlmZeKApiBIZSBoYWQgc3VjaCBhIGtub3dsZWRnZVxuICBvZiB0aGUgZGFyayBzaWRlIHRoYXQgaGUgY291bGQgZXZlbiBrZWVwIHRoZSBvbmVzIGhlIGNhcmVkIGFib3V0IGZyb20gZHlpbmcuIFRoZSBkYXJrIHNpZGUgb2YgdGhlXG4gIEZvcmNlIGlzIGEgcGF0aHdheSB0byBtYW55IGFiaWxpdGllcyBzb21lIGNvbnNpZGVyIHRvIGJlIHVubmF0dXJhbC4gSGUgYmVjYW1lIHNvIHBvd2VyZnVs4oCmIHRoZVxuICBvbmx5IHRoaW5nIGhlIHdhcyBhZnJhaWQgb2Ygd2FzIGxvc2luZyBoaXMgcG93ZXIsIHdoaWNoIGV2ZW50dWFsbHksIG9mIGNvdXJzZSwgaGUgZGlkLlxuICBVbmZvcnR1bmF0ZWx5LCBoZSB0YXVnaHQgaGlzIGFwcHJlbnRpY2UgZXZlcnl0aGluZyBoZSBrbmV3LCB0aGVuIGhpcyBhcHByZW50aWNlIGtpbGxlZCBoaW0gaW4gaGlzXG4gIHNsZWVwLiBJcm9uaWMuIEhlIGNvdWxkIHNhdmUgb3RoZXJzIGZyb20gZGVhdGgsIGJ1dCBub3QgaGltc2VsZi5cbjwvZGl2PlxuXG48bmctdGVtcGxhdGUgI2NvbnRleHRfbWVudT1cImNka01lbnVQYW5lbFwiIGNka01lbnVQYW5lbD5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnUgW2Nka01lbnVQYW5lbF09XCJjb250ZXh0X21lbnVcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5DdXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5Db3B5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+TGluazwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=