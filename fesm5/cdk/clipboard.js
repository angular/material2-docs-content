import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from '@angular/cdk/clipboard';

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

var EXAMPLES = [CdkClipboardOverviewExample];
var CdkClipboardExamplesModule = /** @class */ (function () {
    function CdkClipboardExamplesModule() {
    }
    CdkClipboardExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ClipboardModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkClipboardExamplesModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CdkClipboardOverviewExample, CdkClipboardExamplesModule };
//# sourceMappingURL=clipboard.js.map
