import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/clipboard";
/**
 * @title Clipboard overview
 */
var CdkClipboardOverviewExample = /** @class */ (function () {
    function CdkClipboardOverviewExample() {
        this.value = "Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not " +
            "a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord " +
            "of the Sith, so powerful and so wise he could use the Force to influence the " +
            "midichlorians to create life\u2026 He had such a knowledge of the dark side that he could " +
            "even keep the ones he cared about from dying. The dark side of the Force is a pathway " +
            "to many abilities some consider to be unnatural. He became so powerful\u2026 the only " +
            "thing he was afraid of was losing his power, which eventually, of course, he did. " +
            "Unfortunately, he taught his apprentice everything he knew, then his apprentice " +
            "killed him in his sleep. Ironic. He could save others from death, but not himself.";
    }
    CdkClipboardOverviewExample.ɵfac = function CdkClipboardOverviewExample_Factory(t) { return new (t || CdkClipboardOverviewExample)(); };
    CdkClipboardOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkClipboardOverviewExample, selectors: [["cdk-clipboard-overview-example"]], decls: 5, vars: 2, consts: [["for", "clipboard-example-textarea"], ["id", "clipboard-example-textarea", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [3, "cdkCopyToClipboard"]], template: function CdkClipboardOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    return CdkClipboardOverviewExample;
}());
export { CdkClipboardOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkClipboardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-clipboard-overview-example',
                templateUrl: 'cdk-clipboard-overview-example.html',
                styleUrls: ['cdk-clipboard-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQTtRQU1FLFVBQUssR0FBRyxvRkFBb0Y7WUFDcEYsc0ZBQXNGO1lBQ3RGLCtFQUErRTtZQUMvRSw0RkFBdUY7WUFDdkYsd0ZBQXdGO1lBQ3hGLHdGQUFtRjtZQUNuRixvRkFBb0Y7WUFDcEYsa0ZBQWtGO1lBQ2xGLG9GQUFvRixDQUFDO0tBQzlGOzBHQVZZLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lDVnhDLGdDQUF3QztZQUFBLGlDQUFpQjtZQUFBLGlCQUFRO1lBQ2pFLG1DQUE2RjtZQUEvQixzSkFBbUI7WUFBQyxpQkFBVztZQUM3RixpQ0FBcUM7WUFBQSxpQ0FBaUI7WUFBQSxpQkFBUzs7WUFERCxlQUFtQjtZQUFuQixtQ0FBbUI7WUFDekUsZUFBNEI7WUFBNUIsOENBQTRCOztzQ0RGcEM7Q0FvQkMsQUFmRCxJQWVDO1NBVlksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDbGlwYm9hcmQgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0NsaXBib2FyZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHZhbHVlID0gYERpZCB5b3UgZXZlciBoZWFyIHRoZSB0cmFnZWR5IG9mIERhcnRoIFBsYWd1ZWlzIFRoZSBXaXNlPyBJIHRob3VnaHQgbm90LiBJdCdzIG5vdCBgICtcbiAgICAgICAgICBgYSBzdG9yeSB0aGUgSmVkaSB3b3VsZCB0ZWxsIHlvdS4gSXQncyBhIFNpdGggbGVnZW5kLiBEYXJ0aCBQbGFndWVpcyB3YXMgYSBEYXJrIExvcmQgYCArXG4gICAgICAgICAgYG9mIHRoZSBTaXRoLCBzbyBwb3dlcmZ1bCBhbmQgc28gd2lzZSBoZSBjb3VsZCB1c2UgdGhlIEZvcmNlIHRvIGluZmx1ZW5jZSB0aGUgYCArXG4gICAgICAgICAgYG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2Ugb2YgdGhlIGRhcmsgc2lkZSB0aGF0IGhlIGNvdWxkIGAgK1xuICAgICAgICAgIGBldmVuIGtlZXAgdGhlIG9uZXMgaGUgY2FyZWQgYWJvdXQgZnJvbSBkeWluZy4gVGhlIGRhcmsgc2lkZSBvZiB0aGUgRm9yY2UgaXMgYSBwYXRod2F5IGAgK1xuICAgICAgICAgIGB0byBtYW55IGFiaWxpdGllcyBzb21lIGNvbnNpZGVyIHRvIGJlIHVubmF0dXJhbC4gSGUgYmVjYW1lIHNvIHBvd2VyZnVs4oCmIHRoZSBvbmx5IGAgK1xuICAgICAgICAgIGB0aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC4gYCArXG4gICAgICAgICAgYFVuZm9ydHVuYXRlbHksIGhlIHRhdWdodCBoaXMgYXBwcmVudGljZSBldmVyeXRoaW5nIGhlIGtuZXcsIHRoZW4gaGlzIGFwcHJlbnRpY2UgYCArXG4gICAgICAgICAgYGtpbGxlZCBoaW0gaW4gaGlzIHNsZWVwLiBJcm9uaWMuIEhlIGNvdWxkIHNhdmUgb3RoZXJzIGZyb20gZGVhdGgsIGJ1dCBub3QgaGltc2VsZi5gO1xufVxuIiwiPGxhYmVsIGZvcj1cImNsaXBib2FyZC1leGFtcGxlLXRleHRhcmVhXCI+VGV4dCB0byBiZSBjb3BpZWQ8L2xhYmVsPlxuPHRleHRhcmVhIGlkPVwiY2xpcGJvYXJkLWV4YW1wbGUtdGV4dGFyZWFcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC90ZXh0YXJlYT5cbjxidXR0b24gW2Nka0NvcHlUb0NsaXBib2FyZF09XCJ2YWx1ZVwiPkNvcHkgdG8gY2xpcGJvYXJkPC9idXR0b24+XG4iXX0=