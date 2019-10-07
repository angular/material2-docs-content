import { Component } from '@angular/core';
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
    CdkClipboardOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-clipboard-overview-example',
                    template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n",
                    styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"]
                }] }
    ];
    return CdkClipboardOverviewExample;
}());
export { CdkClipboardOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV4Qzs7R0FFRztBQUNIO0lBQUE7UUFNRSxVQUFLLEdBQUcsb0ZBQW9GO1lBQ3BGLHNGQUFzRjtZQUN0RiwrRUFBK0U7WUFDL0UsNEZBQXVGO1lBQ3ZGLHdGQUF3RjtZQUN4Rix3RkFBbUY7WUFDbkYsb0ZBQW9GO1lBQ3BGLGtGQUFrRjtZQUNsRixvRkFBb0YsQ0FBQztJQUMvRixDQUFDOztnQkFmQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsMlBBQWtEOztpQkFFbkQ7O0lBV0Qsa0NBQUM7Q0FBQSxBQWZELElBZUM7U0FWWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIENsaXBib2FyZCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ2xpcGJvYXJkT3ZlcnZpZXdFeGFtcGxlIHtcbiAgdmFsdWUgPSBgRGlkIHlvdSBldmVyIGhlYXIgdGhlIHRyYWdlZHkgb2YgRGFydGggUGxhZ3VlaXMgVGhlIFdpc2U/IEkgdGhvdWdodCBub3QuIEl0J3Mgbm90IGAgK1xuICAgICAgICAgIGBhIHN0b3J5IHRoZSBKZWRpIHdvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBgICtcbiAgICAgICAgICBgb2YgdGhlIFNpdGgsIHNvIHBvd2VyZnVsIGFuZCBzbyB3aXNlIGhlIGNvdWxkIHVzZSB0aGUgRm9yY2UgdG8gaW5mbHVlbmNlIHRoZSBgICtcbiAgICAgICAgICBgbWlkaWNobG9yaWFucyB0byBjcmVhdGUgbGlmZeKApiBIZSBoYWQgc3VjaCBhIGtub3dsZWRnZSBvZiB0aGUgZGFyayBzaWRlIHRoYXQgaGUgY291bGQgYCArXG4gICAgICAgICAgYGV2ZW4ga2VlcCB0aGUgb25lcyBoZSBjYXJlZCBhYm91dCBmcm9tIGR5aW5nLiBUaGUgZGFyayBzaWRlIG9mIHRoZSBGb3JjZSBpcyBhIHBhdGh3YXkgYCArXG4gICAgICAgICAgYHRvIG1hbnkgYWJpbGl0aWVzIHNvbWUgY29uc2lkZXIgdG8gYmUgdW5uYXR1cmFsLiBIZSBiZWNhbWUgc28gcG93ZXJmdWzigKYgdGhlIG9ubHkgYCArXG4gICAgICAgICAgYHRoaW5nIGhlIHdhcyBhZnJhaWQgb2Ygd2FzIGxvc2luZyBoaXMgcG93ZXIsIHdoaWNoIGV2ZW50dWFsbHksIG9mIGNvdXJzZSwgaGUgZGlkLiBgICtcbiAgICAgICAgICBgVW5mb3J0dW5hdGVseSwgaGUgdGF1Z2h0IGhpcyBhcHByZW50aWNlIGV2ZXJ5dGhpbmcgaGUga25ldywgdGhlbiBoaXMgYXBwcmVudGljZSBgICtcbiAgICAgICAgICBga2lsbGVkIGhpbSBpbiBoaXMgc2xlZXAuIElyb25pYy4gSGUgY291bGQgc2F2ZSBvdGhlcnMgZnJvbSBkZWF0aCwgYnV0IG5vdCBoaW1zZWxmLmA7XG59XG4iXX0=