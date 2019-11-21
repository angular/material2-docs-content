(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/icon'), require('@angular/material/toolbar')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/toolbar', ['exports', '@angular/core', '@angular/material/icon', '@angular/material/toolbar'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.toolbar = {}), global.ng.core, global.ng.material.icon, global.ng.material.toolbar));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    /**
     * @title Multi-row toolbar
     */
    var ToolbarMultirowExample = /** @class */ (function () {
        function ToolbarMultirowExample() {
        }
        ToolbarMultirowExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'toolbar-multirow-example',
                        templateUrl: 'toolbar-multirow-example.html',
                        styleUrls: ['toolbar-multirow-example.css'],
                    },] },
        ];
        ToolbarMultirowExample.ɵfac = function ToolbarMultirowExample_Factory(t) { return new (t || ToolbarMultirowExample)(); };
        ToolbarMultirowExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarMultirowExample, selectors: [["toolbar-multirow-example"]], decls: 18, vars: 0, consts: [["color", "primary"], [1, "example-spacer"], ["aria-hidden", "false", "aria-label", "Example user verified icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example heart icon", 1, "example-icon"], ["aria-hidden", "false", "aria-label", "Example delete icon", 1, "example-icon"]], template: function ToolbarMultirowExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-toolbar", 0);
                i0.ɵɵelementStart(1, "mat-toolbar-row");
                i0.ɵɵelementStart(2, "span");
                i0.ɵɵtext(3, "Custom Toolbar");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-toolbar-row");
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, "Second Line");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "span", 1);
                i0.ɵɵelementStart(8, "mat-icon", 2);
                i0.ɵɵtext(9, "verified_user");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-toolbar-row");
                i0.ɵɵelementStart(11, "span");
                i0.ɵɵtext(12, "Third Line");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(13, "span", 1);
                i0.ɵɵelementStart(14, "mat-icon", 3);
                i0.ɵɵtext(15, "favorite");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-icon", 4);
                i0.ɵɵtext(17, "delete");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatToolbar, i1.MatToolbarRow, i2.MatIcon], styles: [".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"] });
        return ToolbarMultirowExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarMultirowExample, [{
            type: i0.Component,
            args: [{
                    selector: 'toolbar-multirow-example',
                    templateUrl: 'toolbar-multirow-example.html',
                    styleUrls: ['toolbar-multirow-example.css'],
                }]
        }], null, null); })();

    /**
     * @title Basic toolbar
     */
    var ToolbarOverviewExample = /** @class */ (function () {
        function ToolbarOverviewExample() {
        }
        ToolbarOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'toolbar-overview-example',
                        templateUrl: 'toolbar-overview-example.html',
                        styleUrls: ['toolbar-overview-example.css'],
                    },] },
        ];
        ToolbarOverviewExample.ɵfac = function ToolbarOverviewExample_Factory(t) { return new (t || ToolbarOverviewExample)(); };
        ToolbarOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ToolbarOverviewExample, selectors: [["toolbar-overview-example"]], decls: 2, vars: 0, template: function ToolbarOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-toolbar");
                i0.ɵɵtext(1, "My App");
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatToolbar], styles: [""] });
        return ToolbarOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'toolbar-overview-example',
                    templateUrl: 'toolbar-overview-example.html',
                    styleUrls: ['toolbar-overview-example.css'],
                }]
        }], null, null); })();

    var EXAMPLES = [
        ToolbarMultirowExample,
        ToolbarOverviewExample,
    ];
    var ToolbarExamplesModule = /** @class */ (function () {
        function ToolbarExamplesModule() {
        }
        ToolbarExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i2.MatIconModule,
                            i1.MatToolbarModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        ToolbarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToolbarExamplesModule });
        ToolbarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ToolbarExamplesModule_Factory(t) { return new (t || ToolbarExamplesModule)(); }, imports: [[
                    i2.MatIconModule,
                    i1.MatToolbarModule,
                ]] });
        return ToolbarExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToolbarExamplesModule, { declarations: [ToolbarMultirowExample,
            ToolbarOverviewExample], imports: [i2.MatIconModule,
            i1.MatToolbarModule], exports: [ToolbarMultirowExample,
            ToolbarOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ToolbarExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i2.MatIconModule,
                        i1.MatToolbarModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.ToolbarExamplesModule = ToolbarExamplesModule;
    exports.ToolbarMultirowExample = ToolbarMultirowExample;
    exports.ToolbarOverviewExample = ToolbarOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-toolbar.umd.js.map
