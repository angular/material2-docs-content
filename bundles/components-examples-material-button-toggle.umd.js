(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material/button-toggle'), require('@angular/material/icon')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/button-toggle', ['exports', '@angular/core', '@angular/forms', '@angular/material/button-toggle', '@angular/material/icon'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.buttonToggle = {}), global.ng.core, global.ng.forms, global.ng.material.buttonToggle, global.ng.material.icon));
}(this, (function (exports, i0, i2$1, i1, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    /**
     * @title Button toggle appearance
     */
    var ButtonToggleAppearanceExample = /** @class */ (function () {
        function ButtonToggleAppearanceExample() {
        }
        return ButtonToggleAppearanceExample;
    }());
    ButtonToggleAppearanceExample.ɵfac = function ButtonToggleAppearanceExample_Factory(t) { return new (t || ButtonToggleAppearanceExample)(); };
    ButtonToggleAppearanceExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonToggleAppearanceExample, selectors: [["button-toggle-appearance-example"]], decls: 18, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["appearance", "legacy", "name", "fontStyle", "aria-label", "Font Style"]], template: function ButtonToggleAppearanceExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, " Default appearance: ");
                i0__namespace.ɵɵelementStart(2, "mat-button-toggle-group", 0);
                i0__namespace.ɵɵelementStart(3, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(4, "Bold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(6, "Italic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(8, "Underline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "p");
                i0__namespace.ɵɵtext(10, " Legacy appearance: ");
                i0__namespace.ɵɵelementStart(11, "mat-button-toggle-group", 4);
                i0__namespace.ɵɵelementStart(12, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(13, "Bold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(15, "Italic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(17, "Underline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatButtonToggleGroup, i1__namespace.MatButtonToggle], styles: ["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleAppearanceExample, [{
                type: i0.Component,
                args: [{
                        selector: 'button-toggle-appearance-example',
                        templateUrl: 'button-toggle-appearance-example.html',
                        styleUrls: ['button-toggle-appearance-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Exclusive selection
     */
    var ButtonToggleExclusiveExample = /** @class */ (function () {
        function ButtonToggleExclusiveExample() {
        }
        return ButtonToggleExclusiveExample;
    }());
    ButtonToggleExclusiveExample.ɵfac = function ButtonToggleExclusiveExample_Factory(t) { return new (t || ButtonToggleExclusiveExample)(); };
    ButtonToggleExclusiveExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonToggleExclusiveExample, selectors: [["button-toggle-exclusive-example"]], decls: 16, vars: 1, consts: [["group", "matButtonToggleGroup"], ["value", "left", "aria-label", "Text align left"], ["value", "center", "aria-label", "Text align center"], ["value", "right", "aria-label", "Text align right"], ["value", "justify", "disabled", "", "aria-label", "Text align justify"], [1, "example-selected-value"]], template: function ButtonToggleExclusiveExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-button-toggle-group", null, 0);
                i0__namespace.ɵɵelementStart(2, "mat-button-toggle", 1);
                i0__namespace.ɵɵelementStart(3, "mat-icon");
                i0__namespace.ɵɵtext(4, "format_align_left");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-button-toggle", 2);
                i0__namespace.ɵɵelementStart(6, "mat-icon");
                i0__namespace.ɵɵtext(7, "format_align_center");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-button-toggle", 3);
                i0__namespace.ɵɵelementStart(9, "mat-icon");
                i0__namespace.ɵɵtext(10, "format_align_right");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "mat-button-toggle", 4);
                i0__namespace.ɵɵelementStart(12, "mat-icon");
                i0__namespace.ɵɵtext(13, "format_align_justify");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "div", 5);
                i0__namespace.ɵɵtext(15);
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(1);
                i0__namespace.ɵɵadvance(15);
                i0__namespace.ɵɵtextInterpolate1("Selected value: ", _r0.value, "");
            }
        }, directives: [i1__namespace.MatButtonToggleGroup, i1__namespace.MatButtonToggle, i2__namespace.MatIcon], styles: [".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleExclusiveExample, [{
                type: i0.Component,
                args: [{
                        selector: 'button-toggle-exclusive-example',
                        templateUrl: 'button-toggle-exclusive-example.html',
                        styleUrls: ['button-toggle-exclusive-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Basic button-toggles
     */
    var ButtonToggleOverviewExample = /** @class */ (function () {
        function ButtonToggleOverviewExample() {
        }
        return ButtonToggleOverviewExample;
    }());
    ButtonToggleOverviewExample.ɵfac = function ButtonToggleOverviewExample_Factory(t) { return new (t || ButtonToggleOverviewExample)(); };
    ButtonToggleOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonToggleOverviewExample, selectors: [["button-toggle-overview-example"]], decls: 7, vars: 0, consts: [["name", "fontStyle", "aria-label", "Font Style"], ["value", "bold"], ["value", "italic"], ["value", "underline"]], template: function ButtonToggleOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-button-toggle-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(2, "Bold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(4, "Italic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(6, "Underline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.MatButtonToggleGroup, i1__namespace.MatButtonToggle], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'button-toggle-overview-example',
                        templateUrl: 'button-toggle-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatButtonToggleHarness
     */
    var ButtonToggleHarnessExample = /** @class */ (function () {
        function ButtonToggleHarnessExample() {
            this.disabled = false;
            this.appearance = 'standard';
        }
        return ButtonToggleHarnessExample;
    }());
    ButtonToggleHarnessExample.ɵfac = function ButtonToggleHarnessExample_Factory(t) { return new (t || ButtonToggleHarnessExample)(); };
    ButtonToggleHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonToggleHarnessExample, selectors: [["button-toggle-harness-example"]], decls: 5, vars: 2, consts: [[3, "disabled", "appearance"], ["value", "1"], ["value", "2"]], template: function ButtonToggleHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-button-toggle-group", 0);
                i0__namespace.ɵɵelementStart(1, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(2, "One");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(4, "Two");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("disabled", ctx.disabled)("appearance", ctx.appearance);
            }
        }, directives: [i1__namespace.MatButtonToggleGroup, i1__namespace.MatButtonToggle], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'button-toggle-harness-example',
                        templateUrl: 'button-toggle-harness-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Button-toggles with forms
     */
    var ButtonToggleFormsExample = /** @class */ (function () {
        function ButtonToggleFormsExample() {
            this.fontStyleControl = new i2$1.FormControl();
        }
        return ButtonToggleFormsExample;
    }());
    ButtonToggleFormsExample.ɵfac = function ButtonToggleFormsExample_Factory(t) { return new (t || ButtonToggleFormsExample)(); };
    ButtonToggleFormsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ButtonToggleFormsExample, selectors: [["button-toggle-forms-example"]], decls: 24, vars: 4, consts: [["aria-label", "Font Style", 3, "ngModel", "ngModelChange"], ["value", "bold"], ["value", "italic"], ["value", "underline"], ["aria-label", "Font Style", 3, "formControl"]], template: function ButtonToggleFormsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "section");
                i0__namespace.ɵɵelementStart(1, "h4");
                i0__namespace.ɵɵtext(2, "Button Toggle inside of a Template-driven form");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-button-toggle-group", 0);
                i0__namespace.ɵɵlistener("ngModelChange", function ButtonToggleFormsExample_Template_mat_button_toggle_group_ngModelChange_3_listener($event) { return ctx.fontStyle = $event; });
                i0__namespace.ɵɵelementStart(4, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(5, "Bold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(6, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(7, "Italic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(9, "Underline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "p");
                i0__namespace.ɵɵtext(11);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "section");
                i0__namespace.ɵɵelementStart(13, "h4");
                i0__namespace.ɵɵtext(14, "Button Toggle inside of a Reactive form");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "mat-button-toggle-group", 4);
                i0__namespace.ɵɵelementStart(16, "mat-button-toggle", 1);
                i0__namespace.ɵɵtext(17, "Bold");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-button-toggle", 2);
                i0__namespace.ɵɵtext(19, "Italic");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-button-toggle", 3);
                i0__namespace.ɵɵtext(21, "Underline");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "p");
                i0__namespace.ɵɵtext(23);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(3);
                i0__namespace.ɵɵproperty("ngModel", ctx.fontStyle);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyle, "");
                i0__namespace.ɵɵadvance(4);
                i0__namespace.ɵɵproperty("formControl", ctx.fontStyleControl);
                i0__namespace.ɵɵadvance(8);
                i0__namespace.ɵɵtextInterpolate1("Chosen value is ", ctx.fontStyleControl.value, "");
            }
        }, directives: [i1__namespace.MatButtonToggleGroup, i2__namespace$1.NgControlStatus, i2__namespace$1.NgModel, i1__namespace.MatButtonToggle, i2__namespace$1.FormControlDirective], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleFormsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'button-toggle-forms-example',
                        templateUrl: 'button-toggle-forms-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
    ];
    var ButtonToggleExamplesModule = /** @class */ (function () {
        function ButtonToggleExamplesModule() {
        }
        return ButtonToggleExamplesModule;
    }());
    ButtonToggleExamplesModule.ɵfac = function ButtonToggleExamplesModule_Factory(t) { return new (t || ButtonToggleExamplesModule)(); };
    ButtonToggleExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ButtonToggleExamplesModule });
    ButtonToggleExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i2$1.FormsModule,
                i1.MatButtonToggleModule,
                i2.MatIconModule,
                i2$1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ButtonToggleExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i2$1.FormsModule,
                            i1.MatButtonToggleModule,
                            i2.MatIconModule,
                            i2$1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ButtonToggleExamplesModule, { declarations: [ButtonToggleAppearanceExample,
                ButtonToggleExclusiveExample,
                ButtonToggleOverviewExample,
                ButtonToggleHarnessExample,
                ButtonToggleFormsExample], imports: [i2$1.FormsModule,
                i1.MatButtonToggleModule,
                i2.MatIconModule,
                i2$1.ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
                ButtonToggleExclusiveExample,
                ButtonToggleOverviewExample,
                ButtonToggleHarnessExample,
                ButtonToggleFormsExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ButtonToggleAppearanceExample = ButtonToggleAppearanceExample;
    exports.ButtonToggleExamplesModule = ButtonToggleExamplesModule;
    exports.ButtonToggleExclusiveExample = ButtonToggleExclusiveExample;
    exports.ButtonToggleFormsExample = ButtonToggleFormsExample;
    exports.ButtonToggleHarnessExample = ButtonToggleHarnessExample;
    exports.ButtonToggleOverviewExample = ButtonToggleOverviewExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-button-toggle.umd.js.map
