(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/cdk/clipboard')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/clipboard', ['exports', '@angular/core', '@angular/forms', '@angular/cdk/clipboard'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.clipboard = {}), global.ng.core, global.ng.forms, global.ng.cdk.clipboard));
}(this, (function (exports, i0, i1, i2) { 'use strict';

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
        return CdkClipboardOverviewExample;
    }());
    CdkClipboardOverviewExample.ɵfac = function CdkClipboardOverviewExample_Factory(t) { return new (t || CdkClipboardOverviewExample)(); };
    CdkClipboardOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CdkClipboardOverviewExample, selectors: [["cdk-clipboard-overview-example"]], decls: 5, vars: 2, consts: [["for", "clipboard-example-textarea"], ["id", "clipboard-example-textarea", "cols", "30", "rows", "10", 3, "ngModel", "ngModelChange"], [3, "cdkCopyToClipboard"]], template: function CdkClipboardOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "label", 0);
                i0.ɵɵtext(1, "Text to be copied");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "textarea", 1);
                i0.ɵɵlistener("ngModelChange", function CdkClipboardOverviewExample_Template_textarea_ngModelChange_2_listener($event) { return ctx.value = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 2);
                i0.ɵɵtext(4, "Copy to clipboard");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngModel", ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("cdkCopyToClipboard", ctx.value);
            }
        }, directives: [i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, i2.CdkCopyToClipboard], styles: ["textarea[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkClipboardOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-clipboard-overview-example',
                        templateUrl: 'cdk-clipboard-overview-example.html',
                        styleUrls: ['cdk-clipboard-overview-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [CdkClipboardOverviewExample];
    var CdkClipboardExamplesModule = /** @class */ (function () {
        function CdkClipboardExamplesModule() {
        }
        return CdkClipboardExamplesModule;
    }());
    CdkClipboardExamplesModule.ɵfac = function CdkClipboardExamplesModule_Factory(t) { return new (t || CdkClipboardExamplesModule)(); };
    CdkClipboardExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkClipboardExamplesModule });
    CdkClipboardExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[i2.ClipboardModule, i1.FormsModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkClipboardExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.ClipboardModule, i1.FormsModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkClipboardExamplesModule, { declarations: [CdkClipboardOverviewExample], imports: [i2.ClipboardModule, i1.FormsModule], exports: [CdkClipboardOverviewExample] }); })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkClipboardExamplesModule = CdkClipboardExamplesModule;
    exports.CdkClipboardOverviewExample = CdkClipboardOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-clipboard.umd.js.map
