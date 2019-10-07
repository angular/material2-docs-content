(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/cdk/clipboard')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/cdk/clipboard', ['exports', '@angular/core', '@angular/forms', '@angular/cdk/clipboard'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.cdk = global.ng.materialExamples.cdk || {}, global.ng.materialExamples.cdk.clipboard = {}), global.ng.core, global.ng.forms, global.ng.cdk.clipboard));
}(this, function (exports, core, forms, clipboard) { 'use strict';

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
            { type: core.Component, args: [{
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
            { type: core.NgModule, args: [{
                        imports: [clipboard.ClipboardModule, forms.FormsModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return CdkClipboardExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkClipboardOverviewExample = CdkClipboardOverviewExample;
    exports.CdkClipboardExamplesModule = CdkClipboardExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-cdk-clipboard.umd.js.map
