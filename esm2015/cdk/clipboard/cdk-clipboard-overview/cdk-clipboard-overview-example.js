import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/clipboard";
/**
 * @title Clipboard overview
 */
export class CdkClipboardOverviewExample {
    constructor() {
        this.value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
            `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
            `of the Sith, so powerful and so wise he could use the Force to influence the ` +
            `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
            `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
            `to many abilities some consider to be unnatural. He became so powerful… the only ` +
            `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
            `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
            `killed him in his sleep. Ironic. He could save others from death, but not himself.`;
    }
}
CdkClipboardOverviewExample.ɵfac = function CdkClipboardOverviewExample_Factory(t) { return new (t || CdkClipboardOverviewExample)(); };
CdkClipboardOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkClipboardOverviewExample, selectors: [["cdk-clipboard-overview-example"]], decls: 5, vars: 2, consts: [["for", "clipboard-example-textarea"], ["id", "clipboard-example-textarea", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [3, "cdkCopyToClipboard"]], template: function CdkClipboardOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "label", 0);
        i0.ɵɵtext(1, "Text to be copied");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "textarea", 1);
        i0.ɵɵlistener("ngModelChange", function CdkClipboardOverviewExample_Template_textarea_ngModelChange_2_listener($event) { return ctx.value = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵtext(4, "Copy to clipboard");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkCopyToClipboard", ctx.value);
    } }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.CdkCopyToClipboard], styles: ["textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkClipboardOverviewExample, [{
        type: Component,
        args: [{ selector: 'cdk-clipboard-overview-example', template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"] }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLDJCQUEyQjtJQUx4QztRQU1FLFVBQUssR0FBRyxvRkFBb0Y7WUFDcEYsc0ZBQXNGO1lBQ3RGLCtFQUErRTtZQUMvRSx1RkFBdUY7WUFDdkYsd0ZBQXdGO1lBQ3hGLG1GQUFtRjtZQUNuRixvRkFBb0Y7WUFDcEYsa0ZBQWtGO1lBQ2xGLG9GQUFvRixDQUFDO0tBQzlGOztzR0FWWSwyQkFBMkI7OEVBQTNCLDJCQUEyQjtRQ1Z4QyxnQ0FBd0M7UUFBQSxpQ0FBaUI7UUFBQSxpQkFBUTtRQUNqRSxtQ0FBa0Y7UUFBcEIsc0pBQW1CO1FBQUMsaUJBQVc7UUFDN0YsaUNBQXFDO1FBQUEsaUNBQWlCO1FBQUEsaUJBQVM7O1FBREQsZUFBbUI7UUFBbkIsbUNBQW1CO1FBQ3pFLGVBQTRCO1FBQTVCLDhDQUE0Qjs7dUZEUXZCLDJCQUEyQjtjQUx2QyxTQUFTOzJCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgQ2xpcGJvYXJkIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDbGlwYm9hcmRPdmVydmlld0V4YW1wbGUge1xuICB2YWx1ZSA9IGBEaWQgeW91IGV2ZXIgaGVhciB0aGUgdHJhZ2VkeSBvZiBEYXJ0aCBQbGFndWVpcyBUaGUgV2lzZT8gSSB0aG91Z2h0IG5vdC4gSXQncyBub3QgYCArXG4gICAgICAgICAgYGEgc3RvcnkgdGhlIEplZGkgd291bGQgdGVsbCB5b3UuIEl0J3MgYSBTaXRoIGxlZ2VuZC4gRGFydGggUGxhZ3VlaXMgd2FzIGEgRGFyayBMb3JkIGAgK1xuICAgICAgICAgIGBvZiB0aGUgU2l0aCwgc28gcG93ZXJmdWwgYW5kIHNvIHdpc2UgaGUgY291bGQgdXNlIHRoZSBGb3JjZSB0byBpbmZsdWVuY2UgdGhlIGAgK1xuICAgICAgICAgIGBtaWRpY2hsb3JpYW5zIHRvIGNyZWF0ZSBsaWZl4oCmIEhlIGhhZCBzdWNoIGEga25vd2xlZGdlIG9mIHRoZSBkYXJrIHNpZGUgdGhhdCBoZSBjb3VsZCBgICtcbiAgICAgICAgICBgZXZlbiBrZWVwIHRoZSBvbmVzIGhlIGNhcmVkIGFib3V0IGZyb20gZHlpbmcuIFRoZSBkYXJrIHNpZGUgb2YgdGhlIEZvcmNlIGlzIGEgcGF0aHdheSBgICtcbiAgICAgICAgICBgdG8gbWFueSBhYmlsaXRpZXMgc29tZSBjb25zaWRlciB0byBiZSB1bm5hdHVyYWwuIEhlIGJlY2FtZSBzbyBwb3dlcmZ1bOKApiB0aGUgb25seSBgICtcbiAgICAgICAgICBgdGhpbmcgaGUgd2FzIGFmcmFpZCBvZiB3YXMgbG9zaW5nIGhpcyBwb3dlciwgd2hpY2ggZXZlbnR1YWxseSwgb2YgY291cnNlLCBoZSBkaWQuIGAgK1xuICAgICAgICAgIGBVbmZvcnR1bmF0ZWx5LCBoZSB0YXVnaHQgaGlzIGFwcHJlbnRpY2UgZXZlcnl0aGluZyBoZSBrbmV3LCB0aGVuIGhpcyBhcHByZW50aWNlIGAgK1xuICAgICAgICAgIGBraWxsZWQgaGltIGluIGhpcyBzbGVlcC4gSXJvbmljLiBIZSBjb3VsZCBzYXZlIG90aGVycyBmcm9tIGRlYXRoLCBidXQgbm90IGhpbXNlbGYuYDtcbn1cbiIsIjxsYWJlbCBmb3I9XCJjbGlwYm9hcmQtZXhhbXBsZS10ZXh0YXJlYVwiPlRleHQgdG8gYmUgY29waWVkPC9sYWJlbD5cbjx0ZXh0YXJlYSBpZD1cImNsaXBib2FyZC1leGFtcGxlLXRleHRhcmVhXCIgY29scz1cIjMwXCIgcm93cz1cIjEwXCIgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiPjwvdGV4dGFyZWE+XG48YnV0dG9uIFtjZGtDb3B5VG9DbGlwYm9hcmRdPVwidmFsdWVcIj5Db3B5IHRvIGNsaXBib2FyZDwvYnV0dG9uPlxuIl19