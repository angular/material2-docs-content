/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/clipboard";
/**
 * \@title Clipboard overview
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
CdkClipboardOverviewExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-clipboard-overview-example',
                templateUrl: 'cdk-clipboard-overview-example.html',
                styleUrls: ['cdk-clipboard-overview-example.css'],
            },] },
];
/** @nocollapse */ CdkClipboardOverviewExample.ɵfac = function CdkClipboardOverviewExample_Factory(t) { return new (t || CdkClipboardOverviewExample)(); };
/** @nocollapse */ CdkClipboardOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkClipboardOverviewExample, selectors: [["cdk-clipboard-overview-example"]], decls: 5, vars: 2, consts: [["for", "clipboard-example-textarea"], ["id", "clipboard-example-textarea", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [3, "cdkCopyToClipboard"]], template: function CdkClipboardOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkClipboardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-clipboard-overview-example',
                templateUrl: 'cdk-clipboard-overview-example.html',
                styleUrls: ['cdk-clipboard-overview-example.css'],
            }]
    }], null, null); })();
if (false) {
    /** @type {?} */
    CdkClipboardOverviewExample.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVV4QyxNQUFNLE9BQU8sMkJBQTJCO0lBTHhDO1FBTUUsVUFBSyxHQUFHLG9GQUFvRjtZQUNwRixzRkFBc0Y7WUFDdEYsK0VBQStFO1lBQy9FLHVGQUF1RjtZQUN2Rix3RkFBd0Y7WUFDeEYsbUZBQW1GO1lBQ25GLG9GQUFvRjtZQUNwRixrRkFBa0Y7WUFDbEYsb0ZBQW9GLENBQUM7S0FDOUY7OztZQWZBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDs7c0dBQ1ksMkJBQTJCO2dFQUEzQiwyQkFBMkI7UUNWeEMsZ0NBQXdDO1FBQUEsaUNBQWlCO1FBQUEsaUJBQVE7UUFDakUsbUNBQTZGO1FBQS9CLHNKQUFtQjtRQUFDLGlCQUFXO1FBQzdGLGlDQUFxQztRQUFBLGlDQUFpQjtRQUFBLGlCQUFTOztRQURELGVBQW1CO1FBQW5CLG1DQUFtQjtRQUN6RSxlQUE0QjtRQUE1Qiw4Q0FBNEI7O2tERFF2QiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEOzs7O0lBRUMsNENBUTZGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDbGlwYm9hcmQgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0NsaXBib2FyZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHZhbHVlID0gYERpZCB5b3UgZXZlciBoZWFyIHRoZSB0cmFnZWR5IG9mIERhcnRoIFBsYWd1ZWlzIFRoZSBXaXNlPyBJIHRob3VnaHQgbm90LiBJdCdzIG5vdCBgICtcbiAgICAgICAgICBgYSBzdG9yeSB0aGUgSmVkaSB3b3VsZCB0ZWxsIHlvdS4gSXQncyBhIFNpdGggbGVnZW5kLiBEYXJ0aCBQbGFndWVpcyB3YXMgYSBEYXJrIExvcmQgYCArXG4gICAgICAgICAgYG9mIHRoZSBTaXRoLCBzbyBwb3dlcmZ1bCBhbmQgc28gd2lzZSBoZSBjb3VsZCB1c2UgdGhlIEZvcmNlIHRvIGluZmx1ZW5jZSB0aGUgYCArXG4gICAgICAgICAgYG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2Ugb2YgdGhlIGRhcmsgc2lkZSB0aGF0IGhlIGNvdWxkIGAgK1xuICAgICAgICAgIGBldmVuIGtlZXAgdGhlIG9uZXMgaGUgY2FyZWQgYWJvdXQgZnJvbSBkeWluZy4gVGhlIGRhcmsgc2lkZSBvZiB0aGUgRm9yY2UgaXMgYSBwYXRod2F5IGAgK1xuICAgICAgICAgIGB0byBtYW55IGFiaWxpdGllcyBzb21lIGNvbnNpZGVyIHRvIGJlIHVubmF0dXJhbC4gSGUgYmVjYW1lIHNvIHBvd2VyZnVs4oCmIHRoZSBvbmx5IGAgK1xuICAgICAgICAgIGB0aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC4gYCArXG4gICAgICAgICAgYFVuZm9ydHVuYXRlbHksIGhlIHRhdWdodCBoaXMgYXBwcmVudGljZSBldmVyeXRoaW5nIGhlIGtuZXcsIHRoZW4gaGlzIGFwcHJlbnRpY2UgYCArXG4gICAgICAgICAgYGtpbGxlZCBoaW0gaW4gaGlzIHNsZWVwLiBJcm9uaWMuIEhlIGNvdWxkIHNhdmUgb3RoZXJzIGZyb20gZGVhdGgsIGJ1dCBub3QgaGltc2VsZi5gO1xufVxuIiwiPGxhYmVsIGZvcj1cImNsaXBib2FyZC1leGFtcGxlLXRleHRhcmVhXCI+VGV4dCB0byBiZSBjb3BpZWQ8L2xhYmVsPlxuPHRleHRhcmVhIGlkPVwiY2xpcGJvYXJkLWV4YW1wbGUtdGV4dGFyZWFcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC90ZXh0YXJlYT5cbjxidXR0b24gW2Nka0NvcHlUb0NsaXBib2FyZF09XCJ2YWx1ZVwiPkNvcHkgdG8gY2xpcGJvYXJkPC9idXR0b24+XG4iXX0=