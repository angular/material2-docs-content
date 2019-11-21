import { Component, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { CdkCopyToClipboard, ClipboardModule } from '@angular/cdk/clipboard';

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
                    templateUrl: 'cdk-clipboard-overview-example.html',
                    styleUrls: ['cdk-clipboard-overview-example.css'],
                },] },
    ];
    CdkClipboardOverviewExample.ɵfac = function CdkClipboardOverviewExample_Factory(t) { return new (t || CdkClipboardOverviewExample)(); };
    CdkClipboardOverviewExample.ɵcmp = ɵɵdefineComponent({ type: CdkClipboardOverviewExample, selectors: [["cdk-clipboard-overview-example"]], decls: 5, vars: 2, consts: [["for", "clipboard-example-textarea"], ["id", "clipboard-example-textarea", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [3, "cdkCopyToClipboard"]], template: function CdkClipboardOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "label", 0);
            ɵɵtext(1, "Text to be copied");
            ɵɵelementEnd();
            ɵɵelementStart(2, "textarea", 1);
            ɵɵlistener("ngModelChange", function CdkClipboardOverviewExample_Template_textarea_ngModelChange_2_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵelementStart(3, "button", 2);
            ɵɵtext(4, "Copy to clipboard");
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.value);
            ɵɵadvance(1);
            ɵɵproperty("cdkCopyToClipboard", ctx.value);
        } }, directives: [DefaultValueAccessor, NgControlStatus, NgModel, CdkCopyToClipboard], styles: ["textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 8px;\n}"] });
    return CdkClipboardOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkClipboardOverviewExample, [{
        type: Component,
        args: [{
                selector: 'cdk-clipboard-overview-example',
                templateUrl: 'cdk-clipboard-overview-example.html',
                styleUrls: ['cdk-clipboard-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [CdkClipboardOverviewExample];
var CdkClipboardExamplesModule = /** @class */ (function () {
    function CdkClipboardExamplesModule() {
    }
    CdkClipboardExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ClipboardModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    CdkClipboardExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkClipboardExamplesModule });
    CdkClipboardExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkClipboardExamplesModule_Factory(t) { return new (t || CdkClipboardExamplesModule)(); }, imports: [[ClipboardModule, FormsModule]] });
    return CdkClipboardExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkClipboardExamplesModule, { declarations: [CdkClipboardOverviewExample], imports: [ClipboardModule, FormsModule], exports: [CdkClipboardOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkClipboardExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [ClipboardModule, FormsModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { CdkClipboardExamplesModule, CdkClipboardOverviewExample };
//# sourceMappingURL=clipboard.js.map
