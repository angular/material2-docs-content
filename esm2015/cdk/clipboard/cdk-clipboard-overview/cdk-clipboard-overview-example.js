import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/clipboard";
/**
 * @title Clipboard overview
 */
let CdkClipboardOverviewExample = /** @class */ (() => {
    class CdkClipboardOverviewExample {
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
})();
export { CdkClipboardOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkClipboardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-clipboard-overview-example',
                templateUrl: 'cdk-clipboard-overview-example.html',
                styleUrls: ['cdk-clipboard-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBQ0g7SUFBQSxNQUthLDJCQUEyQjtRQUx4QztZQU1FLFVBQUssR0FBRyxvRkFBb0Y7Z0JBQ3BGLHNGQUFzRjtnQkFDdEYsK0VBQStFO2dCQUMvRSx1RkFBdUY7Z0JBQ3ZGLHdGQUF3RjtnQkFDeEYsbUZBQW1GO2dCQUNuRixvRkFBb0Y7Z0JBQ3BGLGtGQUFrRjtnQkFDbEYsb0ZBQW9GLENBQUM7U0FDOUY7OzBHQVZZLDJCQUEyQjtvRUFBM0IsMkJBQTJCO1lDVnhDLGdDQUF3QztZQUFBLGlDQUFpQjtZQUFBLGlCQUFRO1lBQ2pFLG1DQUE2RjtZQUEvQixzSkFBbUI7WUFBQyxpQkFBVztZQUM3RixpQ0FBcUM7WUFBQSxpQ0FBaUI7WUFBQSxpQkFBUzs7WUFERCxlQUFtQjtZQUFuQixtQ0FBbUI7WUFDekUsZUFBNEI7WUFBNUIsOENBQTRCOztzQ0RGcEM7S0FvQkM7U0FWWSwyQkFBMkI7a0RBQTNCLDJCQUEyQjtjQUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENsaXBib2FyZCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ2xpcGJvYXJkT3ZlcnZpZXdFeGFtcGxlIHtcbiAgdmFsdWUgPSBgRGlkIHlvdSBldmVyIGhlYXIgdGhlIHRyYWdlZHkgb2YgRGFydGggUGxhZ3VlaXMgVGhlIFdpc2U/IEkgdGhvdWdodCBub3QuIEl0J3Mgbm90IGAgK1xuICAgICAgICAgIGBhIHN0b3J5IHRoZSBKZWRpIHdvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBgICtcbiAgICAgICAgICBgb2YgdGhlIFNpdGgsIHNvIHBvd2VyZnVsIGFuZCBzbyB3aXNlIGhlIGNvdWxkIHVzZSB0aGUgRm9yY2UgdG8gaW5mbHVlbmNlIHRoZSBgICtcbiAgICAgICAgICBgbWlkaWNobG9yaWFucyB0byBjcmVhdGUgbGlmZeKApiBIZSBoYWQgc3VjaCBhIGtub3dsZWRnZSBvZiB0aGUgZGFyayBzaWRlIHRoYXQgaGUgY291bGQgYCArXG4gICAgICAgICAgYGV2ZW4ga2VlcCB0aGUgb25lcyBoZSBjYXJlZCBhYm91dCBmcm9tIGR5aW5nLiBUaGUgZGFyayBzaWRlIG9mIHRoZSBGb3JjZSBpcyBhIHBhdGh3YXkgYCArXG4gICAgICAgICAgYHRvIG1hbnkgYWJpbGl0aWVzIHNvbWUgY29uc2lkZXIgdG8gYmUgdW5uYXR1cmFsLiBIZSBiZWNhbWUgc28gcG93ZXJmdWzigKYgdGhlIG9ubHkgYCArXG4gICAgICAgICAgYHRoaW5nIGhlIHdhcyBhZnJhaWQgb2Ygd2FzIGxvc2luZyBoaXMgcG93ZXIsIHdoaWNoIGV2ZW50dWFsbHksIG9mIGNvdXJzZSwgaGUgZGlkLiBgICtcbiAgICAgICAgICBgVW5mb3J0dW5hdGVseSwgaGUgdGF1Z2h0IGhpcyBhcHByZW50aWNlIGV2ZXJ5dGhpbmcgaGUga25ldywgdGhlbiBoaXMgYXBwcmVudGljZSBgICtcbiAgICAgICAgICBga2lsbGVkIGhpbSBpbiBoaXMgc2xlZXAuIElyb25pYy4gSGUgY291bGQgc2F2ZSBvdGhlcnMgZnJvbSBkZWF0aCwgYnV0IG5vdCBoaW1zZWxmLmA7XG59XG4iLCI8bGFiZWwgZm9yPVwiY2xpcGJvYXJkLWV4YW1wbGUtdGV4dGFyZWFcIj5UZXh0IHRvIGJlIGNvcGllZDwvbGFiZWw+XG48dGV4dGFyZWEgaWQ9XCJjbGlwYm9hcmQtZXhhbXBsZS10ZXh0YXJlYVwiIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiIFsobmdNb2RlbCldPVwidmFsdWVcIj48L3RleHRhcmVhPlxuPGJ1dHRvbiBbY2RrQ29weVRvQ2xpcGJvYXJkXT1cInZhbHVlXCI+Q29weSB0byBjbGlwYm9hcmQ8L2J1dHRvbj5cbiJdfQ==