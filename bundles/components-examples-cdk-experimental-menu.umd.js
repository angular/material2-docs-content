(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk-experimental/menu')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk-experimental/menu', ['exports', '@angular/core', '@angular/cdk-experimental/menu'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdkExperimental = global.ng.componentsExamples.cdkExperimental || {}, global.ng.componentsExamples.cdkExperimental.menu = {}), global.ng.core, global.ng.cdkExperimental.menu));
}(this, (function (exports, i0, i1) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    function CdkMenuStandaloneMenuExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "button", 4);
            i0__namespace.ɵɵtext(2, "Refresh");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 4);
            i0__namespace.ɵɵtext(4, "Settings");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "button", 4);
            i0__namespace.ɵɵtext(6, "Help");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "button", 4);
            i0__namespace.ɵɵtext(8, "Sign out");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(3);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r0);
        }
    }
    /** @title Menu with Standalone Trigger. */
    var CdkMenuStandaloneMenuExample = /** @class */ (function () {
        function CdkMenuStandaloneMenuExample() {
        }
        return CdkMenuStandaloneMenuExample;
    }());
    CdkMenuStandaloneMenuExample.ɵfac = function CdkMenuStandaloneMenuExample_Factory(t) { return new (t || CdkMenuStandaloneMenuExample)(); };
    CdkMenuStandaloneMenuExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkMenuStandaloneMenuExample, selectors: [["cdk-menu-standalone-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuStandaloneMenuExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Click me!");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(2, CdkMenuStandaloneMenuExample_ng_template_2_Template, 9, 1, "ng-template", 1, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r0);
            }
        }, directives: [i1__namespace.CdkMenuItem, i1__namespace.CdkMenuItemTrigger, i1__namespace.CdkMenuPanel, i1__namespace.CdkMenu], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuStandaloneMenuExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-menu-standalone-menu-example',
                        styleUrls: ['cdk-menu-standalone-menu-example.css'],
                        templateUrl: 'cdk-menu-standalone-menu-example.html',
                    }]
            }], null, null);
    })();

    function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r3_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "button", 4);
            i0__namespace.ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_1_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r2 = i0__namespace.ɵɵnextContext(); return ctx_r2.bold = !ctx_r2.bold; });
            i0__namespace.ɵɵtext(2, " Bold ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 4);
            i0__namespace.ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_3_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r4 = i0__namespace.ɵɵnextContext(); return ctx_r4.italic = !ctx_r4.italic; });
            i0__namespace.ɵɵtext(4, " Italic ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "hr");
            i0__namespace.ɵɵelementStart(6, "div", 5);
            i0__namespace.ɵɵlistener("change", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_div_change_6_listener($event) { i0__namespace.ɵɵrestoreView(_r3_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.onSizeChange($event); });
            i0__namespace.ɵɵelementStart(7, "button", 6);
            i0__namespace.ɵɵtext(8, "Small");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(9, "button", 6);
            i0__namespace.ɵɵtext(10, " Normal ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "button", 6);
            i0__namespace.ɵɵtext(12, "Large");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(3);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r0);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("checked", ctx_r1.bold);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("checked", ctx_r1.italic);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("checked", ctx_r1.size === "Small");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("checked", ctx_r1.size === "Normal");
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("checked", ctx_r1.size === "Large");
        }
    }
    /** @title Stateful Menu with Standalone Trigger. */
    var CdkMenuStandaloneStatefulMenuExample = /** @class */ (function () {
        function CdkMenuStandaloneStatefulMenuExample() {
            this.bold = true;
            this.italic = false;
            this.size = 'Normal';
        }
        CdkMenuStandaloneStatefulMenuExample.prototype.onSizeChange = function (item) {
            var _a;
            this.size = (_a = item._elementRef.nativeElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
        };
        return CdkMenuStandaloneStatefulMenuExample;
    }());
    CdkMenuStandaloneStatefulMenuExample.ɵfac = function CdkMenuStandaloneStatefulMenuExample_Factory(t) { return new (t || CdkMenuStandaloneStatefulMenuExample)(); };
    CdkMenuStandaloneStatefulMenuExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkMenuStandaloneStatefulMenuExample, selectors: [["cdk-menu-standalone-stateful-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItemCheckbox", "", 1, "example-menu-item", 3, "checked", "cdkMenuItemToggled"], ["cdkMenuGroup", "", 3, "change"], ["cdkMenuItemRadio", "", 1, "example-menu-item", 3, "checked"]], template: function CdkMenuStandaloneStatefulMenuExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "button", 0);
                i0__namespace.ɵɵtext(1, "Click me!");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(2, CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template, 13, 6, "ng-template", 1, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r0);
            }
        }, directives: [i1__namespace.CdkMenuItem, i1__namespace.CdkMenuItemTrigger, i1__namespace.CdkMenuPanel, i1__namespace.CdkMenu, i1__namespace.CdkMenuItemCheckbox, i1__namespace.CdkMenuGroup, i1__namespace.CdkMenuItemRadio], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuStandaloneStatefulMenuExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-menu-standalone-stateful-menu-example',
                        styleUrls: ['cdk-menu-standalone-stateful-menu-example.css'],
                        templateUrl: 'cdk-menu-standalone-stateful-menu-example.html',
                    }]
            }], null, null);
    })();

    function CdkMenuMenubarExample_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "button", 9);
            i0__namespace.ɵɵtext(2, "Share");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(3, "hr");
            i0__namespace.ɵɵelementStart(4, "button", 10);
            i0__namespace.ɵɵtext(5, " New ");
            i0__namespace.ɵɵelementStart(6, "span");
            i0__namespace.ɵɵtext(7, "\u27A4");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 9);
            i0__namespace.ɵɵtext(9, "Open");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 9);
            i0__namespace.ɵɵtext(11, "Make a Copy");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(12, "hr");
            i0__namespace.ɵɵelementStart(13, "button", 10);
            i0__namespace.ɵɵtext(14, " Download ");
            i0__namespace.ɵɵelementStart(15, "span");
            i0__namespace.ɵɵtext(16, "\u27A4");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(8);
            var _r6 = i0__namespace.ɵɵreference(14);
            var _r8 = i0__namespace.ɵɵreference(16);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r0);
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r6);
            i0__namespace.ɵɵadvance(9);
            i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r8);
        }
    }
    function CdkMenuMenubarExample_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "button", 9);
            i0__namespace.ɵɵtext(2, "Undo");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 9);
            i0__namespace.ɵɵtext(4, "Redo");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "hr");
            i0__namespace.ɵɵelementStart(6, "button", 9);
            i0__namespace.ɵɵtext(7, "Cut");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 9);
            i0__namespace.ɵɵtext(9, "Copy");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 9);
            i0__namespace.ɵɵtext(11, "Paste");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r2 = i0__namespace.ɵɵreference(10);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r2);
        }
    }
    function CdkMenuMenubarExample_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "div", 11);
            i0__namespace.ɵɵelementStart(2, "button", 12);
            i0__namespace.ɵɵtext(3, "Bold");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "button", 13);
            i0__namespace.ɵɵtext(5, "Italic");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(6, "hr");
            i0__namespace.ɵɵelementStart(7, "div", 11);
            i0__namespace.ɵɵelementStart(8, "button", 14);
            i0__namespace.ɵɵtext(9, "Small");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 15);
            i0__namespace.ɵɵtext(11, "Normal");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "button", 16);
            i0__namespace.ɵɵtext(13, "Big");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r4 = i0__namespace.ɵɵreference(12);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r4);
        }
    }
    function CdkMenuMenubarExample_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "button", 9);
            i0__namespace.ɵɵtext(2, "Document");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 9);
            i0__namespace.ɵɵtext(4, "From template");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(5, "hr");
            i0__namespace.ɵɵelementStart(6, "button", 9);
            i0__namespace.ɵɵtext(7, "Spreadsheet");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "button", 9);
            i0__namespace.ɵɵtext(9, "Presentation");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "button", 9);
            i0__namespace.ɵɵtext(11, "Form");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r6 = i0__namespace.ɵɵreference(14);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r6);
        }
    }
    function CdkMenuMenubarExample_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "button", 9);
            i0__namespace.ɵɵtext(2, "Microsoft Word");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 9);
            i0__namespace.ɵɵtext(4, "PDF");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "button", 9);
            i0__namespace.ɵɵtext(6, "Plain text");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r8 = i0__namespace.ɵɵreference(16);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r8);
        }
    }
    /** @title Google Docs Menu Bar. */
    var CdkMenuMenubarExample = /** @class */ (function () {
        function CdkMenuMenubarExample() {
        }
        return CdkMenuMenubarExample;
    }());
    CdkMenuMenubarExample.ɵfac = function CdkMenuMenubarExample_Factory(t) { return new (t || CdkMenuMenubarExample)(); };
    CdkMenuMenubarExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkMenuMenubarExample, selectors: [["cdk-menu-menubar-example"]], exportAs: ["cdkMenuMenubarExample"], decls: 17, vars: 3, consts: [["cdkMenuBar", ""], ["cdkMenuItem", "", 1, "example-menu-bar-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["file", "cdkMenuPanel"], ["edit", "cdkMenuPanel"], ["format", "cdkMenuPanel"], ["new", "cdkMenuPanel"], ["download", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"], ["cdkMenuItem", "", 1, "example-menu-item", 3, "cdkMenuTriggerFor"], ["cdkMenuGroup", "", 1, "example-menu-group"], ["checked", "", "id", "bf", "cdkMenuItemCheckbox", "", 1, "example-menu-item"], ["id", "if", "cdkMenuItemCheckbox", "", 1, "example-menu-item"], ["id", "small", "cdkMenuItemRadio", "", 1, "example-menu-item"], ["checked", "", "id", "normal", "cdkMenuItemRadio", "", 1, "example-menu-item"], ["id", "large", "cdkMenuItemRadio", "", 1, "example-menu-item"]], template: function CdkMenuMenubarExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵtext(2, "File");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵtext(4, "Edit");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 1);
                i0__namespace.ɵɵtext(6, "Format");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(7, CdkMenuMenubarExample_ng_template_7_Template, 17, 3, "ng-template", 2, 3, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(9, CdkMenuMenubarExample_ng_template_9_Template, 12, 1, "ng-template", 2, 4, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(11, CdkMenuMenubarExample_ng_template_11_Template, 14, 1, "ng-template", 2, 5, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(13, CdkMenuMenubarExample_ng_template_13_Template, 12, 1, "ng-template", 2, 6, i0__namespace.ɵɵtemplateRefExtractor);
                i0__namespace.ɵɵtemplate(15, CdkMenuMenubarExample_ng_template_15_Template, 7, 1, "ng-template", 2, 7, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(8);
                var _r2 = i0__namespace.ɵɵreference(10);
                var _r4 = i0__namespace.ɵɵreference(12);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r0);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r2);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("cdkMenuTriggerFor", _r4);
            }
        }, directives: [i1__namespace.CdkMenuBar, i1__namespace.CdkMenuItem, i1__namespace.CdkMenuItemTrigger, i1__namespace.CdkMenuPanel, i1__namespace.CdkMenu, i1__namespace.CdkMenuGroup, i1__namespace.CdkMenuItemCheckbox, i1__namespace.CdkMenuItemRadio], styles: [".example-menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[role='menuitemradio'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[role='menuitemcheckbox'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'][_ngcontent-%COMP%], .example-menu-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208) !important;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuMenubarExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-menu-menubar-example',
                        exportAs: 'cdkMenuMenubarExample',
                        styleUrls: ['cdk-menu-menubar-example.css'],
                        templateUrl: 'cdk-menu-menubar-example.html',
                    }]
            }], null, null);
    })();

    /** @title Gmail inline menu. */
    var CdkMenuInlineExample = /** @class */ (function () {
        function CdkMenuInlineExample() {
        }
        return CdkMenuInlineExample;
    }());
    CdkMenuInlineExample.ɵfac = function CdkMenuInlineExample_Factory(t) { return new (t || CdkMenuInlineExample)(); };
    CdkMenuInlineExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkMenuInlineExample, selectors: [["cdk-menu-inline-example"]], exportAs: ["cdkMenuInlineExample"], decls: 13, vars: 0, consts: [["cdkMenu", "", 1, "example-menu"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuInlineExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵtext(2, "Inbox");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵtext(4, "Snoozed");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "button", 1);
                i0__namespace.ɵɵtext(6, "Important");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "button", 1);
                i0__namespace.ɵɵtext(8, "Sent");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "button", 1);
                i0__namespace.ɵɵtext(10, "Drafts");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(11, "button", 1);
                i0__namespace.ɵɵtext(12, "All Mail");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace.CdkMenu, i1__namespace.CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuInlineExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-menu-inline-example',
                        exportAs: 'cdkMenuInlineExample',
                        styleUrls: ['cdk-menu-inline-example.css'],
                        templateUrl: 'cdk-menu-inline-example.html',
                    }]
            }], null, null);
    })();

    function CdkMenuContextExample_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "button", 4);
            i0__namespace.ɵɵtext(2, "Cut");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "button", 4);
            i0__namespace.ɵɵtext(4, "Copy");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "button", 4);
            i0__namespace.ɵɵtext(6, "Link");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0__namespace.ɵɵnextContext();
            var _r0 = i0__namespace.ɵɵreference(3);
            i0__namespace.ɵɵproperty("cdkMenuPanel", _r0);
        }
    }
    /** @title Context menu. */
    var CdkMenuContextExample = /** @class */ (function () {
        function CdkMenuContextExample() {
        }
        return CdkMenuContextExample;
    }());
    CdkMenuContextExample.ɵfac = function CdkMenuContextExample_Factory(t) { return new (t || CdkMenuContextExample)(); };
    CdkMenuContextExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: CdkMenuContextExample, selectors: [["cdk-menu-context-example"]], exportAs: ["cdkMenuContextExample"], decls: 4, vars: 1, consts: [[3, "cdkContextMenuTriggerFor"], ["cdkMenuPanel", ""], ["context_menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuContextExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵtext(1, " Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.\n");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(2, CdkMenuContextExample_ng_template_2_Template, 7, 1, "ng-template", 1, 2, i0__namespace.ɵɵtemplateRefExtractor);
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(3);
                i0__namespace.ɵɵproperty("cdkContextMenuTriggerFor", _r0);
            }
        }, directives: [i1__namespace.CdkContextMenuTrigger, i1__namespace.CdkMenuPanel, i1__namespace.CdkMenu, i1__namespace.CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuContextExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-menu-context-example',
                        exportAs: 'cdkMenuContextExample',
                        styleUrls: ['cdk-menu-context-example.css'],
                        templateUrl: 'cdk-menu-context-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample,
    ];
    var CdkMenuExamplesModule = /** @class */ (function () {
        function CdkMenuExamplesModule() {
        }
        return CdkMenuExamplesModule;
    }());
    CdkMenuExamplesModule.ɵfac = function CdkMenuExamplesModule_Factory(t) { return new (t || CdkMenuExamplesModule)(); };
    CdkMenuExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: CdkMenuExamplesModule });
    CdkMenuExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[i1.CdkMenuModule]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(CdkMenuExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CdkMenuModule],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(CdkMenuExamplesModule, { declarations: [CdkMenuStandaloneMenuExample,
                CdkMenuMenubarExample,
                CdkMenuInlineExample,
                CdkMenuContextExample,
                CdkMenuStandaloneStatefulMenuExample], imports: [i1.CdkMenuModule], exports: [CdkMenuStandaloneMenuExample,
                CdkMenuMenubarExample,
                CdkMenuInlineExample,
                CdkMenuContextExample,
                CdkMenuStandaloneStatefulMenuExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CdkMenuContextExample = CdkMenuContextExample;
    exports.CdkMenuExamplesModule = CdkMenuExamplesModule;
    exports.CdkMenuInlineExample = CdkMenuInlineExample;
    exports.CdkMenuMenubarExample = CdkMenuMenubarExample;
    exports.CdkMenuStandaloneMenuExample = CdkMenuStandaloneMenuExample;
    exports.CdkMenuStandaloneStatefulMenuExample = CdkMenuStandaloneStatefulMenuExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-experimental-menu.umd.js.map
