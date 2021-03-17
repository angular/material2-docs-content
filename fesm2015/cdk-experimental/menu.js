import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵnextContext, ɵɵreference, ɵɵproperty, ɵɵdefineComponent, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵsetClassMetadata, Component, ɵɵgetCurrentView, ɵɵlistener, ɵɵrestoreView, ɵɵelement, ɵɵadvance, ɵɵdefineNgModule, ɵɵdefineInjector, NgModule, ɵɵsetNgModuleScope } from '@angular/core';
import { CdkMenuItem, CdkMenuItemTrigger, CdkMenuPanel, CdkMenu, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenuItemRadio, CdkMenuBar, CdkContextMenuTrigger, CdkMenuModule } from '@angular/cdk-experimental/menu';

function CdkMenuStandaloneMenuExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "button", 4);
    ɵɵtext(2, "Refresh");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵtext(4, "Settings");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 4);
    ɵɵtext(6, "Help");
    ɵɵelementEnd();
    ɵɵelementStart(7, "button", 4);
    ɵɵtext(8, "Sign out");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵproperty("cdkMenuPanel", _r0);
} }
/** @title Menu with Standalone Trigger. */
class CdkMenuStandaloneMenuExample {
}
CdkMenuStandaloneMenuExample.ɵfac = function CdkMenuStandaloneMenuExample_Factory(t) { return new (t || CdkMenuStandaloneMenuExample)(); };
CdkMenuStandaloneMenuExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkMenuStandaloneMenuExample, selectors: [["cdk-menu-standalone-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuStandaloneMenuExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Click me!");
        ɵɵelementEnd();
        ɵɵtemplate(2, CdkMenuStandaloneMenuExample_ng_template_2_Template, 9, 1, "ng-template", 1, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(3);
        ɵɵproperty("cdkMenuTriggerFor", _r0);
    } }, directives: [CdkMenuItem, CdkMenuItemTrigger, CdkMenuPanel, CdkMenu], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuStandaloneMenuExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-standalone-menu-example',
                styleUrls: ['cdk-menu-standalone-menu-example.css'],
                templateUrl: 'cdk-menu-standalone-menu-example.html',
            }]
    }], null, null); })();

function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "button", 4);
    ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_1_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.bold = !ctx_r2.bold; });
    ɵɵtext(2, " Bold ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵlistener("cdkMenuItemToggled", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_button_cdkMenuItemToggled_3_listener() { ɵɵrestoreView(_r3); const ctx_r4 = ɵɵnextContext(); return ctx_r4.italic = !ctx_r4.italic; });
    ɵɵtext(4, " Italic ");
    ɵɵelementEnd();
    ɵɵelement(5, "hr");
    ɵɵelementStart(6, "div", 5);
    ɵɵlistener("change", function CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template_div_change_6_listener($event) { ɵɵrestoreView(_r3); const ctx_r5 = ɵɵnextContext(); return ctx_r5.onSizeChange($event); });
    ɵɵelementStart(7, "button", 6);
    ɵɵtext(8, "Small");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 6);
    ɵɵtext(10, " Normal ");
    ɵɵelementEnd();
    ɵɵelementStart(11, "button", 6);
    ɵɵtext(12, "Large");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵproperty("cdkMenuPanel", _r0);
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r1.bold);
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r1.italic);
    ɵɵadvance(4);
    ɵɵproperty("checked", ctx_r1.size === "Small");
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r1.size === "Normal");
    ɵɵadvance(2);
    ɵɵproperty("checked", ctx_r1.size === "Large");
} }
/** @title Stateful Menu with Standalone Trigger. */
class CdkMenuStandaloneStatefulMenuExample {
    constructor() {
        this.bold = true;
        this.italic = false;
        this.size = 'Normal';
    }
    onSizeChange(item) {
        var _a;
        this.size = (_a = item._elementRef.nativeElement.textContent) === null || _a === void 0 ? void 0 : _a.trim();
    }
}
CdkMenuStandaloneStatefulMenuExample.ɵfac = function CdkMenuStandaloneStatefulMenuExample_Factory(t) { return new (t || CdkMenuStandaloneStatefulMenuExample)(); };
CdkMenuStandaloneStatefulMenuExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkMenuStandaloneStatefulMenuExample, selectors: [["cdk-menu-standalone-stateful-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItemCheckbox", "", 1, "example-menu-item", 3, "checked", "cdkMenuItemToggled"], ["cdkMenuGroup", "", 3, "change"], ["cdkMenuItemRadio", "", 1, "example-menu-item", 3, "checked"]], template: function CdkMenuStandaloneStatefulMenuExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "button", 0);
        ɵɵtext(1, "Click me!");
        ɵɵelementEnd();
        ɵɵtemplate(2, CdkMenuStandaloneStatefulMenuExample_ng_template_2_Template, 13, 6, "ng-template", 1, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(3);
        ɵɵproperty("cdkMenuTriggerFor", _r0);
    } }, directives: [CdkMenuItem, CdkMenuItemTrigger, CdkMenuPanel, CdkMenu, CdkMenuItemCheckbox, CdkMenuGroup, CdkMenuItemRadio], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nhr[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[role='menuitemradio'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu-item[role='menuitemcheckbox'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuStandaloneStatefulMenuExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-standalone-stateful-menu-example',
                styleUrls: ['cdk-menu-standalone-stateful-menu-example.css'],
                templateUrl: 'cdk-menu-standalone-stateful-menu-example.html',
            }]
    }], null, null); })();

function CdkMenuMenubarExample_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "button", 9);
    ɵɵtext(2, "Share");
    ɵɵelementEnd();
    ɵɵelement(3, "hr");
    ɵɵelementStart(4, "button", 10);
    ɵɵtext(5, " New ");
    ɵɵelementStart(6, "span");
    ɵɵtext(7, "\u27A4");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 9);
    ɵɵtext(9, "Open");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵtext(11, "Make a Copy");
    ɵɵelementEnd();
    ɵɵelement(12, "hr");
    ɵɵelementStart(13, "button", 10);
    ɵɵtext(14, " Download ");
    ɵɵelementStart(15, "span");
    ɵɵtext(16, "\u27A4");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(8);
    const _r6 = ɵɵreference(14);
    const _r8 = ɵɵreference(16);
    ɵɵproperty("cdkMenuPanel", _r0);
    ɵɵadvance(4);
    ɵɵproperty("cdkMenuTriggerFor", _r6);
    ɵɵadvance(9);
    ɵɵproperty("cdkMenuTriggerFor", _r8);
} }
function CdkMenuMenubarExample_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "button", 9);
    ɵɵtext(2, "Undo");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 9);
    ɵɵtext(4, "Redo");
    ɵɵelementEnd();
    ɵɵelement(5, "hr");
    ɵɵelementStart(6, "button", 9);
    ɵɵtext(7, "Cut");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 9);
    ɵɵtext(9, "Copy");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵtext(11, "Paste");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r2 = ɵɵreference(10);
    ɵɵproperty("cdkMenuPanel", _r2);
} }
function CdkMenuMenubarExample_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "div", 11);
    ɵɵelementStart(2, "button", 12);
    ɵɵtext(3, "Bold");
    ɵɵelementEnd();
    ɵɵelementStart(4, "button", 13);
    ɵɵtext(5, "Italic");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelement(6, "hr");
    ɵɵelementStart(7, "div", 11);
    ɵɵelementStart(8, "button", 14);
    ɵɵtext(9, "Small");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 15);
    ɵɵtext(11, "Normal");
    ɵɵelementEnd();
    ɵɵelementStart(12, "button", 16);
    ɵɵtext(13, "Big");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r4 = ɵɵreference(12);
    ɵɵproperty("cdkMenuPanel", _r4);
} }
function CdkMenuMenubarExample_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "button", 9);
    ɵɵtext(2, "Document");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 9);
    ɵɵtext(4, "From template");
    ɵɵelementEnd();
    ɵɵelement(5, "hr");
    ɵɵelementStart(6, "button", 9);
    ɵɵtext(7, "Spreadsheet");
    ɵɵelementEnd();
    ɵɵelementStart(8, "button", 9);
    ɵɵtext(9, "Presentation");
    ɵɵelementEnd();
    ɵɵelementStart(10, "button", 9);
    ɵɵtext(11, "Form");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r6 = ɵɵreference(14);
    ɵɵproperty("cdkMenuPanel", _r6);
} }
function CdkMenuMenubarExample_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "button", 9);
    ɵɵtext(2, "Microsoft Word");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 9);
    ɵɵtext(4, "PDF");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 9);
    ɵɵtext(6, "Plain text");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r8 = ɵɵreference(16);
    ɵɵproperty("cdkMenuPanel", _r8);
} }
/** @title Google Docs Menu Bar. */
class CdkMenuMenubarExample {
}
CdkMenuMenubarExample.ɵfac = function CdkMenuMenubarExample_Factory(t) { return new (t || CdkMenuMenubarExample)(); };
CdkMenuMenubarExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkMenuMenubarExample, selectors: [["cdk-menu-menubar-example"]], exportAs: ["cdkMenuMenubarExample"], decls: 17, vars: 3, consts: [["cdkMenuBar", ""], ["cdkMenuItem", "", 1, "example-menu-bar-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["file", "cdkMenuPanel"], ["edit", "cdkMenuPanel"], ["format", "cdkMenuPanel"], ["new", "cdkMenuPanel"], ["download", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"], ["cdkMenuItem", "", 1, "example-menu-item", 3, "cdkMenuTriggerFor"], ["cdkMenuGroup", "", 1, "example-menu-group"], ["checked", "", "id", "bf", "cdkMenuItemCheckbox", "", 1, "example-menu-item"], ["id", "if", "cdkMenuItemCheckbox", "", 1, "example-menu-item"], ["id", "small", "cdkMenuItemRadio", "", 1, "example-menu-item"], ["checked", "", "id", "normal", "cdkMenuItemRadio", "", 1, "example-menu-item"], ["id", "large", "cdkMenuItemRadio", "", 1, "example-menu-item"]], template: function CdkMenuMenubarExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵtext(2, "File");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 1);
        ɵɵtext(4, "Edit");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 1);
        ɵɵtext(6, "Format");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵtemplate(7, CdkMenuMenubarExample_ng_template_7_Template, 17, 3, "ng-template", 2, 3, ɵɵtemplateRefExtractor);
        ɵɵtemplate(9, CdkMenuMenubarExample_ng_template_9_Template, 12, 1, "ng-template", 2, 4, ɵɵtemplateRefExtractor);
        ɵɵtemplate(11, CdkMenuMenubarExample_ng_template_11_Template, 14, 1, "ng-template", 2, 5, ɵɵtemplateRefExtractor);
        ɵɵtemplate(13, CdkMenuMenubarExample_ng_template_13_Template, 12, 1, "ng-template", 2, 6, ɵɵtemplateRefExtractor);
        ɵɵtemplate(15, CdkMenuMenubarExample_ng_template_15_Template, 7, 1, "ng-template", 2, 7, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(8);
        const _r2 = ɵɵreference(10);
        const _r4 = ɵɵreference(12);
        ɵɵadvance(1);
        ɵɵproperty("cdkMenuTriggerFor", _r0);
        ɵɵadvance(2);
        ɵɵproperty("cdkMenuTriggerFor", _r2);
        ɵɵadvance(2);
        ɵɵproperty("cdkMenuTriggerFor", _r4);
    } }, directives: [CdkMenuBar, CdkMenuItem, CdkMenuItemTrigger, CdkMenuPanel, CdkMenu, CdkMenuGroup, CdkMenuItemCheckbox, CdkMenuItemRadio], styles: [".example-menu-bar-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 34px;\n  line-height: 26px;\n  padding: 0 16px;\n}\n\n.example-menu-bar-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(0, 0, 0, 0.12);\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-group[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  justify-content: flex-end;\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[role='menuitemradio'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[role='menuitemcheckbox'][aria-checked='true'][_ngcontent-%COMP%] {\n  background-color: rgb(225, 225, 225);\n}\n.example-menu[_ngcontent-%COMP%]   .example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-menu-bar-item[aria-expanded='true'][_ngcontent-%COMP%], .example-menu-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208) !important;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuMenubarExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-menubar-example',
                exportAs: 'cdkMenuMenubarExample',
                styleUrls: ['cdk-menu-menubar-example.css'],
                templateUrl: 'cdk-menu-menubar-example.html',
            }]
    }], null, null); })();

/** @title Gmail inline menu. */
class CdkMenuInlineExample {
}
CdkMenuInlineExample.ɵfac = function CdkMenuInlineExample_Factory(t) { return new (t || CdkMenuInlineExample)(); };
CdkMenuInlineExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkMenuInlineExample, selectors: [["cdk-menu-inline-example"]], exportAs: ["cdkMenuInlineExample"], decls: 13, vars: 0, consts: [["cdkMenu", "", 1, "example-menu"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuInlineExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵtext(2, "Inbox");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 1);
        ɵɵtext(4, "Snoozed");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 1);
        ɵɵtext(6, "Important");
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 1);
        ɵɵtext(8, "Sent");
        ɵɵelementEnd();
        ɵɵelementStart(9, "button", 1);
        ɵɵtext(10, "Drafts");
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 1);
        ɵɵtext(12, "All Mail");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [CdkMenu, CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuInlineExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-inline-example',
                exportAs: 'cdkMenuInlineExample',
                styleUrls: ['cdk-menu-inline-example.css'],
                templateUrl: 'cdk-menu-inline-example.html',
            }]
    }], null, null); })();

function CdkMenuContextExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵelementStart(1, "button", 4);
    ɵɵtext(2, "Cut");
    ɵɵelementEnd();
    ɵɵelementStart(3, "button", 4);
    ɵɵtext(4, "Copy");
    ɵɵelementEnd();
    ɵɵelementStart(5, "button", 4);
    ɵɵtext(6, "Link");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    ɵɵnextContext();
    const _r0 = ɵɵreference(3);
    ɵɵproperty("cdkMenuPanel", _r0);
} }
/** @title Context menu. */
class CdkMenuContextExample {
}
CdkMenuContextExample.ɵfac = function CdkMenuContextExample_Factory(t) { return new (t || CdkMenuContextExample)(); };
CdkMenuContextExample.ɵcmp = /*@__PURE__*/ ɵɵdefineComponent({ type: CdkMenuContextExample, selectors: [["cdk-menu-context-example"]], exportAs: ["cdkMenuContextExample"], decls: 4, vars: 1, consts: [[3, "cdkContextMenuTriggerFor"], ["cdkMenuPanel", ""], ["context_menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuContextExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtext(1, " Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.\n");
        ɵɵelementEnd();
        ɵɵtemplate(2, CdkMenuContextExample_ng_template_2_Template, 7, 1, "ng-template", 1, 2, ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = ɵɵreference(3);
        ɵɵproperty("cdkContextMenuTriggerFor", _r0);
    } }, directives: [CdkContextMenuTrigger, CdkMenuPanel, CdkMenu, CdkMenuItem], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuContextExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-context-example',
                exportAs: 'cdkMenuContextExample',
                styleUrls: ['cdk-menu-context-example.css'],
                templateUrl: 'cdk-menu-context-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    CdkMenuStandaloneMenuExample,
    CdkMenuMenubarExample,
    CdkMenuInlineExample,
    CdkMenuContextExample,
    CdkMenuStandaloneStatefulMenuExample,
];
class CdkMenuExamplesModule {
}
CdkMenuExamplesModule.ɵfac = function CdkMenuExamplesModule_Factory(t) { return new (t || CdkMenuExamplesModule)(); };
CdkMenuExamplesModule.ɵmod = /*@__PURE__*/ ɵɵdefineNgModule({ type: CdkMenuExamplesModule });
CdkMenuExamplesModule.ɵinj = /*@__PURE__*/ ɵɵdefineInjector({ imports: [[CdkMenuModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CdkMenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [CdkMenuModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkMenuExamplesModule, { declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkMenuContextExample, CdkMenuExamplesModule, CdkMenuInlineExample, CdkMenuMenubarExample, CdkMenuStandaloneMenuExample, CdkMenuStandaloneStatefulMenuExample };
//# sourceMappingURL=menu.js.map
