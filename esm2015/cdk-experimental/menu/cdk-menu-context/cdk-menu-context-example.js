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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztJQ1l0Qyw4QkFDRTtJQUFBLGlDQUE4QztJQUFBLG1CQUFHO0lBQUEsaUJBQVM7SUFDMUQsaUNBQThDO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUMzRCxpQ0FBOEM7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQzdELGlCQUFNOzs7O0lBSjRCLGtDQUE2Qjs7QURWakUsMkJBQTJCO0FBTzNCLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7MERBQXJCLHFCQUFxQjtRQ1RsQyw4QkFDRTtRQUFBLGd3QkFRRjtRQUFBLGlCQUFNO1FBRU4sb0hBTWM7OztRQWpCVCw4Q0FBeUM7O3VGRFNqQyxxQkFBcUI7Y0FOakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxXQUFXLEVBQUUsK0JBQStCO2FBQzdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIENvbnRleHQgbWVudS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudUNvbnRleHRFeGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1jb250ZXh0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVDb250ZXh0RXhhbXBsZSB7fVxuIiwiPGRpdiBbY2RrQ29udGV4dE1lbnVUcmlnZ2VyRm9yXT1cImNvbnRleHRfbWVudVwiPlxuICBEaWQgeW91IGV2ZXIgaGVhciB0aGUgdHJhZ2VkeSBvZiBEYXJ0aCBQbGFndWVpcyBUaGUgV2lzZT8gSSB0aG91Z2h0IG5vdC4gSXQncyBub3QgYSBzdG9yeSB0aGUgSmVkaVxuICB3b3VsZCB0ZWxsIHlvdS4gSXQncyBhIFNpdGggbGVnZW5kLiBEYXJ0aCBQbGFndWVpcyB3YXMgYSBEYXJrIExvcmQgb2YgdGhlIFNpdGgsIHNvIHBvd2VyZnVsIGFuZCBzb1xuICB3aXNlIGhlIGNvdWxkIHVzZSB0aGUgRm9yY2UgdG8gaW5mbHVlbmNlIHRoZSBtaWRpY2hsb3JpYW5zIHRvIGNyZWF0ZSBsaWZl4oCmIEhlIGhhZCBzdWNoIGEga25vd2xlZGdlXG4gIG9mIHRoZSBkYXJrIHNpZGUgdGhhdCBoZSBjb3VsZCBldmVuIGtlZXAgdGhlIG9uZXMgaGUgY2FyZWQgYWJvdXQgZnJvbSBkeWluZy4gVGhlIGRhcmsgc2lkZSBvZiB0aGVcbiAgRm9yY2UgaXMgYSBwYXRod2F5IHRvIG1hbnkgYWJpbGl0aWVzIHNvbWUgY29uc2lkZXIgdG8gYmUgdW5uYXR1cmFsLiBIZSBiZWNhbWUgc28gcG93ZXJmdWzigKYgdGhlXG4gIG9ubHkgdGhpbmcgaGUgd2FzIGFmcmFpZCBvZiB3YXMgbG9zaW5nIGhpcyBwb3dlciwgd2hpY2ggZXZlbnR1YWxseSwgb2YgY291cnNlLCBoZSBkaWQuXG4gIFVuZm9ydHVuYXRlbHksIGhlIHRhdWdodCBoaXMgYXBwcmVudGljZSBldmVyeXRoaW5nIGhlIGtuZXcsIHRoZW4gaGlzIGFwcHJlbnRpY2Uga2lsbGVkIGhpbSBpbiBoaXNcbiAgc2xlZXAuIElyb25pYy4gSGUgY291bGQgc2F2ZSBvdGhlcnMgZnJvbSBkZWF0aCwgYnV0IG5vdCBoaW1zZWxmLlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjY29udGV4dF9tZW51PVwiY2RrTWVudVBhbmVsXCIgY2RrTWVudVBhbmVsPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudSBbY2RrTWVudVBhbmVsXT1cImNvbnRleHRfbWVudVwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkN1dDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkNvcHk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5MaW5rPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==