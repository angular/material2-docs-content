(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button-toggle'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/button-toggle', ['exports', '@angular/core', '@angular/material/button-toggle', '@angular/material/icon'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.buttonToggle = {}), global.ng.core, global.ng.material.buttonToggle, global.ng.material.icon));
}(this, (function (exports, i0, i1, i2) { 'use strict';

    /**
     * @title Button toggle appearance
     */
    var ButtonToggleAppearanceExample = /** @class */ (function () {
        function ButtonToggleAppearanceExample() {
        }
        ButtonToggleAppearanceExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'button-toggle-appearance-example',
                        templateUrl: 'button-toggle-appearance-example.html',
                        styleUrls: ['button-toggle-appearance-example.css'],
                    },] },
        ];
        ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
        ButtonToggleAppearanceExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵtext(1, " Default appearance: ");
                i0.ɵɵelementStart(2, "mat-button-toggle-group", 0);
                i0.ɵɵelementStart(3, "mat-button-toggle", 1);
                i0.ɵɵtext(4, "Bold");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-button-toggle", 2);
                i0.ɵɵtext(6, "Italic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-button-toggle", 3);
                i0.ɵɵtext(8, "Underline");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "p");
                i0.ɵɵtext(10, " Legacy appearance: ");
                i0.ɵɵelementStart(11, "mat-button-toggle-group", 4);
                i0.ɵɵelementStart(12, "mat-button-toggle", 1);
                i0.ɵɵtext(13, "Bold");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-button-toggle", 2);
                i0.ɵɵtext(15, "Italic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-button-toggle", 3);
                i0.ɵɵtext(17, "Underline");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
        return ButtonToggleAppearanceExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
            type: i0.Component,
            args: [{
                    selector: 'button-toggle-appearance-example',
                    templateUrl: 'button-toggle-appearance-example.html',
                    styleUrls: ['button-toggle-appearance-example.css'],
                }]
        }], null, null); })();

    /**
     * @title Exclusive selection
     */
    var ButtonToggleExclusiveExample = /** @class */ (function () {
        function ButtonToggleExclusiveExample() {
        }
        ButtonToggleExclusiveExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'button-toggle-exclusive-example',
                        templateUrl: 'button-toggle-exclusive-example.html',
                        styleUrls: ['button-toggle-exclusive-example.css'],
                    },] },
        ];
        ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
        ButtonToggleExclusiveExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
                i0.ɵɵelementStart(2, "mat-button-toggle", 1);
                i0.ɵɵelementStart(3, "mat-icon");
                i0.ɵɵtext(4, "format_align_left");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-button-toggle", 2);
                i0.ɵɵelementStart(6, "mat-icon");
                i0.ɵɵtext(7, "format_align_center");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-button-toggle", 3);
                i0.ɵɵelementStart(9, "mat-icon");
                i0.ɵɵtext(10, "format_align_right");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-button-toggle", 4);
                i0.ɵɵelementStart(12, "mat-icon");
                i0.ɵɵtext(13, "format_align_justify");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "div", 5);
                i0.ɵɵtext(15);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r0 = i0.ɵɵreference(1);
                i0.ɵɵadvance(15);
                i0.ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
            } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle, i2.MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
        return ButtonToggleExclusiveExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
            type: i0.Component,
            args: [{
                    selector: 'button-toggle-exclusive-example',
                    templateUrl: 'button-toggle-exclusive-example.html',
                    styleUrls: ['button-toggle-exclusive-example.css'],
                }]
        }], null, null); })();

    /**
     * @title Basic button-toggles
     */
    var ButtonToggleOverviewExample = /** @class */ (function () {
        function ButtonToggleOverviewExample() {
        }
        ButtonToggleOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'button-toggle-overview-example',
                        templateUrl: 'button-toggle-overview-example.html',
                        styleUrls: ['button-toggle-overview-example.css'],
                    },] },
        ];
        ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
        ButtonToggleOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-button-toggle-group", 0);
                i0.ɵɵelementStart(1, "mat-button-toggle", 1);
                i0.ɵɵtext(2, "Bold");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-button-toggle", 2);
                i0.ɵɵtext(4, "Italic");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-button-toggle", 3);
                i0.ɵɵtext(6, "Underline");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } }, directives: [i1.MatButtonToggleGroup, i1.MatButtonToggle], styles: [""] });
        return ButtonToggleOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'button-toggle-overview-example',
                    templateUrl: 'button-toggle-overview-example.html',
                    styleUrls: ['button-toggle-overview-example.css'],
                }]
        }], null, null); })();

    var EXAMPLES = [
        ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
    ];
    var ButtonToggleExamplesModule = /** @class */ (function () {
        function ButtonToggleExamplesModule() {
        }
        ButtonToggleExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatButtonToggleModule,
                            i2.MatIconModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] },
        ];
        ButtonToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
        ButtonToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); }, imports: [[
                    i1.MatButtonToggleModule,
                    i2.MatIconModule,
                ]] });
        return ButtonToggleExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
            ButtonToggleExclusiveExample,
            ButtonToggleOverviewExample], imports: [i1.MatButtonToggleModule,
            i2.MatIconModule], exports: [ButtonToggleAppearanceExample,
            ButtonToggleExclusiveExample,
            ButtonToggleOverviewExample] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatButtonToggleModule,
                        i2.MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }], null, null); })();

    exports.ButtonToggleAppearanceExample = ButtonToggleAppearanceExample;
    exports.ButtonToggleExamplesModule = ButtonToggleExamplesModule;
    exports.ButtonToggleExclusiveExample = ButtonToggleExclusiveExample;
    exports.ButtonToggleOverviewExample = ButtonToggleOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-button-toggle.umd.js.map
