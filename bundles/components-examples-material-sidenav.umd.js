(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/checkbox'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/toolbar'), require('@angular/material/form-field'), require('@angular/material/core'), require('@angular/cdk/layout')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/sidenav', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/checkbox', '@angular/material/icon', '@angular/material/list', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/toolbar', '@angular/material/form-field', '@angular/material/core', '@angular/cdk/layout'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.sidenav = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.checkbox, global.ng.material.icon, global.ng.material.list, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.toolbar, global.ng.material.formField, global.ng.material.core, global.ng.cdk.layout));
}(this, (function (exports, i1, i0, i1$1, i3, i5, i5$1, i7, i4$1, i3$1, i2, i3$2, i2$1, i4, i1$2) { 'use strict';

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

    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1$1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i5__namespace$1 = /*#__PURE__*/_interopNamespace(i5$1);
    var i7__namespace = /*#__PURE__*/_interopNamespace(i7);
    var i4__namespace$1 = /*#__PURE__*/_interopNamespace(i4$1);
    var i3__namespace$1 = /*#__PURE__*/_interopNamespace(i3$1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace$2 = /*#__PURE__*/_interopNamespace(i3$2);
    var i2__namespace$1 = /*#__PURE__*/_interopNamespace(i2$1);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);
    var i1__namespace$2 = /*#__PURE__*/_interopNamespace(i1$2);

    function SidenavAutosizeExample_p_5_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵtext(1, "Lorem, ipsum dolor sit amet consectetur.");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /**
     * @title Autosize sidenav
     */
    var SidenavAutosizeExample = /** @class */ (function () {
        function SidenavAutosizeExample() {
            this.showFiller = false;
        }
        return SidenavAutosizeExample;
    }());
    SidenavAutosizeExample.ɵfac = function SidenavAutosizeExample_Factory(t) { return new (t || SidenavAutosizeExample)(); };
    SidenavAutosizeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavAutosizeExample, selectors: [["sidenav-autosize-example"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function SidenavAutosizeExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r2_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-drawer-container", 0);
                i0__namespace.ɵɵelementStart(1, "mat-drawer", 1, 2);
                i0__namespace.ɵɵelementStart(3, "p");
                i0__namespace.ɵɵtext(4, "Auto-resizing sidenav");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵtemplate(5, SidenavAutosizeExample_p_5_Template, 2, 0, "p", 3);
                i0__namespace.ɵɵelementStart(6, "button", 4);
                i0__namespace.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_6_listener() { return ctx.showFiller = !ctx.showFiller; });
                i0__namespace.ɵɵtext(7, " Toggle extra text ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "div", 5);
                i0__namespace.ɵɵelementStart(9, "button", 6);
                i0__namespace.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_9_listener() { i0__namespace.ɵɵrestoreView(_r2_1); var _r0 = i0__namespace.ɵɵreference(2); return _r0.toggle(); });
                i0__namespace.ɵɵtext(10, " Toggle sidenav ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(5);
                i0__namespace.ɵɵproperty("ngIf", ctx.showFiller);
            }
        }, directives: [i2__namespace.MatDrawerContainer, i2__namespace.MatDrawer, i1__namespace.NgIf, i3__namespace.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavAutosizeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-autosize-example',
                        templateUrl: 'sidenav-autosize-example.html',
                        styleUrls: ['sidenav-autosize-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Drawer with explicit backdrop setting */
    var SidenavBackdropExample = /** @class */ (function () {
        function SidenavBackdropExample() {
        }
        return SidenavBackdropExample;
    }());
    SidenavBackdropExample.ɵfac = function SidenavBackdropExample_Factory(t) { return new (t || SidenavBackdropExample)(); };
    SidenavBackdropExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavBackdropExample, selectors: [["sidenav-backdrop-example"]], decls: 29, vars: 4, consts: [[1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["appearance", "fill"], ["value", "side"], ["mode", ""], ["value", "over"], ["value", "push"], ["hasBackdrop", ""], [3, "value"], ["mat-raised-button", "", 3, "click"]], template: function SidenavBackdropExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r3_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-drawer-container", 0);
                i0__namespace.ɵɵelementStart(1, "mat-drawer", 1, 2);
                i0__namespace.ɵɵtext(3, "I'm a drawer");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(4, "mat-drawer-content");
                i0__namespace.ɵɵelementStart(5, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(6, "mat-label");
                i0__namespace.ɵɵtext(7, "Sidenav mode");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(8, "mat-select", 4, 5);
                i0__namespace.ɵɵelementStart(10, "mat-option", 4);
                i0__namespace.ɵɵtext(11, "Side");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(12, "mat-option", 6);
                i0__namespace.ɵɵtext(13, "Over");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-option", 7);
                i0__namespace.ɵɵtext(15, "Push");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(16, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(17, "mat-label");
                i0__namespace.ɵɵtext(18, "Has backdrop");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(19, "mat-select", null, 8);
                i0__namespace.ɵɵelementStart(21, "mat-option");
                i0__namespace.ɵɵtext(22, "Unset");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(23, "mat-option", 9);
                i0__namespace.ɵɵtext(24, "True");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(25, "mat-option", 9);
                i0__namespace.ɵɵtext(26, "False");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(27, "button", 10);
                i0__namespace.ɵɵlistener("click", function SidenavBackdropExample_Template_button_click_27_listener() { i0__namespace.ɵɵrestoreView(_r3_1); var _r0 = i0__namespace.ɵɵreference(2); return _r0.toggle(); });
                i0__namespace.ɵɵtext(28, "Toggle drawer");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r1 = i0__namespace.ɵɵreference(9);
                var _r2 = i0__namespace.ɵɵreference(20);
                i0__namespace.ɵɵproperty("hasBackdrop", _r2.value);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("mode", _r1.value);
                i0__namespace.ɵɵadvance(22);
                i0__namespace.ɵɵproperty("value", true);
                i0__namespace.ɵɵadvance(2);
                i0__namespace.ɵɵproperty("value", false);
            }
        }, directives: [i2__namespace.MatDrawerContainer, i2__namespace.MatDrawer, i2__namespace.MatDrawerContent, i2__namespace$1.MatFormField, i2__namespace$1.MatLabel, i3__namespace$1.MatSelect, i4__namespace.MatOption, i3__namespace.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavBackdropExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-backdrop-example',
                        templateUrl: 'sidenav-backdrop-example.html',
                        styleUrls: ['sidenav-backdrop-example.css'],
                    }]
            }], null, null);
    })();

    var _c0 = ["sidenav"];
    function SidenavDisableCloseExample_mat_sidenav_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 2);
            i0__namespace.ɵɵlistener("backdropClick", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_container_backdropClick_0_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(); return ctx_r3.close("backdrop"); });
            i0__namespace.ɵɵelementStart(1, "mat-sidenav", 3, 4);
            i0__namespace.ɵɵlistener("keydown.escape", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_keydown_escape_1_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.close("escape"); });
            i0__namespace.ɵɵelementStart(3, "p");
            i0__namespace.ɵɵelementStart(4, "button", 5);
            i0__namespace.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_4_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r6 = i0__namespace.ɵɵnextContext(); return ctx_r6.close("toggle button"); });
            i0__namespace.ɵɵtext(5, "Toggle");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "mat-sidenav-content");
            i0__namespace.ɵɵelementStart(7, "p");
            i0__namespace.ɵɵelementStart(8, "button", 5);
            i0__namespace.ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_8_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(2); return _r2.open(); });
            i0__namespace.ɵɵtext(9, "Open");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "p");
            i0__namespace.ɵɵtext(11);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(11);
            i0__namespace.ɵɵtextInterpolate1("Closed due to: ", ctx_r0.reason, "");
        }
    }
    function SidenavDisableCloseExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Sidenav with custom escape and backdrop click behavior */
    var SidenavDisableCloseExample = /** @class */ (function () {
        function SidenavDisableCloseExample() {
            this.reason = '';
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        SidenavDisableCloseExample.prototype.close = function (reason) {
            this.reason = reason;
            this.sidenav.close();
        };
        return SidenavDisableCloseExample;
    }());
    SidenavDisableCloseExample.ɵfac = function SidenavDisableCloseExample_Factory(t) { return new (t || SidenavDisableCloseExample)(); };
    SidenavDisableCloseExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavDisableCloseExample, selectors: [["sidenav-disable-close-example"]], viewQuery: function SidenavDisableCloseExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(_c0, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.sidenav = _t.first);
            }
        }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "backdropClick", 4, "ngIf"], [4, "ngIf"], [1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["mat-button", "", 3, "click"]], template: function SidenavDisableCloseExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavDisableCloseExample_mat_sidenav_container_0_Template, 12, 1, "mat-sidenav-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavDisableCloseExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i3__namespace.MatButton, i2__namespace.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavDisableCloseExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-disable-close-example',
                        templateUrl: 'sidenav-disable-close-example.html',
                        styleUrls: ['sidenav-disable-close-example.css'],
                    }]
            }], null, { sidenav: [{
                    type: i0.ViewChild,
                    args: ['sidenav']
                }] });
    })();

    /** @title Basic drawer */
    var SidenavDrawerOverviewExample = /** @class */ (function () {
        function SidenavDrawerOverviewExample() {
        }
        return SidenavDrawerOverviewExample;
    }());
    SidenavDrawerOverviewExample.ɵfac = function SidenavDrawerOverviewExample_Factory(t) { return new (t || SidenavDrawerOverviewExample)(); };
    SidenavDrawerOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavDrawerOverviewExample, selectors: [["sidenav-drawer-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavDrawerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-drawer-container", 0);
                i0__namespace.ɵɵelementStart(1, "mat-drawer", 1);
                i0__namespace.ɵɵtext(2, "Drawer content");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-drawer-content");
                i0__namespace.ɵɵtext(4, "Main content");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatDrawerContainer, i2__namespace.MatDrawer, i2__namespace.MatDrawerContent], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavDrawerOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-drawer-overview-example',
                        templateUrl: 'sidenav-drawer-overview-example.html',
                        styleUrls: ['sidenav-drawer-overview-example.css'],
                    }]
            }], null, null);
    })();

    function SidenavFixedExample_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementContainerStart(0);
            i0__namespace.ɵɵelementStart(1, "mat-toolbar", 1);
            i0__namespace.ɵɵtext(2, "Header");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-sidenav-container", 2);
            i0__namespace.ɵɵelementStart(4, "mat-sidenav", 3, 4);
            i0__namespace.ɵɵtext(6);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "mat-sidenav-content", 5);
            i0__namespace.ɵɵelementStart(8, "p");
            i0__namespace.ɵɵelementStart(9, "mat-checkbox", 6);
            i0__namespace.ɵɵtext(10, "Fixed");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "p");
            i0__namespace.ɵɵelementStart(12, "mat-form-field", 7);
            i0__namespace.ɵɵelementStart(13, "mat-label");
            i0__namespace.ɵɵtext(14, "Top gap");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(15, "input", 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(16, "p");
            i0__namespace.ɵɵelementStart(17, "mat-form-field", 7);
            i0__namespace.ɵɵelementStart(18, "mat-label");
            i0__namespace.ɵɵtext(19, "Bottom gap");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelement(20, "input", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(21, "p");
            i0__namespace.ɵɵelementStart(22, "button", 10);
            i0__namespace.ɵɵlistener("click", function SidenavFixedExample_ng_container_0_Template_button_click_22_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(5); return _r2.toggle(); });
            i0__namespace.ɵɵtext(23, "Toggle");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(24, "mat-toolbar", 11);
            i0__namespace.ɵɵtext(25, "Footer");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(4);
            i0__namespace.ɵɵproperty("fixedInViewport", ctx_r0.options.value.fixed)("fixedTopGap", ctx_r0.options.value.top)("fixedBottomGap", ctx_r0.options.value.bottom);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r0.options.value.fixed ? "Fixed" : "Non-fixed", " Sidenav ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("formGroup", ctx_r0.options);
        }
    }
    function SidenavFixedExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on StackBlitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Fixed sidenav */
    var SidenavFixedExample = /** @class */ (function () {
        function SidenavFixedExample(fb) {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
            this.options = fb.group({
                bottom: 0,
                fixed: false,
                top: 0
            });
        }
        return SidenavFixedExample;
    }());
    SidenavFixedExample.ɵfac = function SidenavFixedExample_Factory(t) { return new (t || SidenavFixedExample)(i0__namespace.ɵɵdirectiveInject(i1__namespace$1.FormBuilder)); };
    SidenavFixedExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavFixedExample, selectors: [["sidenav-fixed-example"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-header"], [1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [3, "formGroup"], ["formControlName", "fixed"], ["appearance", "fill"], ["matInput", "", "type", "number", "formControlName", "top"], ["matInput", "", "type", "number", "formControlName", "bottom"], ["mat-button", "", 3, "click"], [1, "example-footer"]], template: function SidenavFixedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavFixedExample_ng_container_0_Template, 26, 5, "ng-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavFixedExample_div_1_Template, 2, 0, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i3__namespace$2.MatToolbar, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i2__namespace.MatSidenavContent, i1__namespace$1.NgControlStatusGroup, i1__namespace$1.FormGroupDirective, i5__namespace.MatCheckbox, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlName, i2__namespace$1.MatFormField, i2__namespace$1.MatLabel, i1__namespace$1.NumberValueAccessor, i1__namespace$1.DefaultValueAccessor, i3__namespace.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavFixedExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-fixed-example',
                        templateUrl: 'sidenav-fixed-example.html',
                        styleUrls: ['sidenav-fixed-example.css'],
                    }]
            }], function () { return [{ type: i1__namespace$1.FormBuilder }]; }, null);
    })();

    function SidenavModeExample_mat_sidenav_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 2);
            i0__namespace.ɵɵelementStart(1, "mat-sidenav", 3, 4);
            i0__namespace.ɵɵelementStart(3, "p");
            i0__namespace.ɵɵelementStart(4, "button", 5);
            i0__namespace.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_4_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(2); return _r2.toggle(); });
            i0__namespace.ɵɵtext(5, "Toggle");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(6, "p");
            i0__namespace.ɵɵelementStart(7, "mat-radio-group", 6);
            i0__namespace.ɵɵelementStart(8, "label");
            i0__namespace.ɵɵtext(9, "Mode:");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(10, "mat-radio-button", 7);
            i0__namespace.ɵɵtext(11, "Over");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "mat-radio-button", 8);
            i0__namespace.ɵɵtext(13, "Side");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(14, "mat-radio-button", 9);
            i0__namespace.ɵɵtext(15, "Push");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(16, "mat-sidenav-content");
            i0__namespace.ɵɵelementStart(17, "p");
            i0__namespace.ɵɵelementStart(18, "button", 5);
            i0__namespace.ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_18_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var _r2 = i0__namespace.ɵɵreference(2); return _r2.toggle(); });
            i0__namespace.ɵɵtext(19, "Toggle");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(20, "p");
            i0__namespace.ɵɵelementStart(21, "mat-radio-group", 6);
            i0__namespace.ɵɵelementStart(22, "label");
            i0__namespace.ɵɵtext(23, "Mode:");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(24, "mat-radio-button", 7);
            i0__namespace.ɵɵtext(25, "Over");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(26, "mat-radio-button", 8);
            i0__namespace.ɵɵtext(27, "Side");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(28, "mat-radio-button", 9);
            i0__namespace.ɵɵtext(29, "Push");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("mode", ctx_r0.mode.value);
            i0__namespace.ɵɵadvance(6);
            i0__namespace.ɵɵproperty("formControl", ctx_r0.mode);
            i0__namespace.ɵɵadvance(14);
            i0__namespace.ɵɵproperty("formControl", ctx_r0.mode);
        }
    }
    function SidenavModeExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Sidenav with configurable mode */
    var SidenavModeExample = /** @class */ (function () {
        function SidenavModeExample() {
            this.mode = new i1$1.FormControl('over');
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        return SidenavModeExample;
    }());
    SidenavModeExample.ɵfac = function SidenavModeExample_Factory(t) { return new (t || SidenavModeExample)(); };
    SidenavModeExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavModeExample, selectors: [["sidenav-mode-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], [3, "mode"], ["sidenav", ""], ["mat-button", "", 3, "click"], [1, "example-radio-group", 3, "formControl"], ["value", "over"], ["value", "side"], ["value", "push"]], template: function SidenavModeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavModeExample_mat_sidenav_container_0_Template, 30, 3, "mat-sidenav-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavModeExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i3__namespace.MatButton, i4__namespace$1.MatRadioGroup, i1__namespace$1.NgControlStatus, i1__namespace$1.FormControlDirective, i4__namespace$1.MatRadioButton, i2__namespace.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavModeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-mode-example',
                        templateUrl: 'sidenav-mode-example.html',
                        styleUrls: ['sidenav-mode-example.css'],
                    }]
            }], null, null);
    })();

    function SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var e_r4 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(e_r4);
        }
    }
    function SidenavOpenCloseExample_mat_sidenav_container_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r6_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 2);
            i0__namespace.ɵɵelementStart(1, "mat-sidenav", 3, 4);
            i0__namespace.ɵɵlistener("openedChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_openedChange_1_listener($event) { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r5 = i0__namespace.ɵɵnextContext(); return ctx_r5.opened = $event; })("opened", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_opened_1_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r7 = i0__namespace.ɵɵnextContext(); return ctx_r7.events.push("open!"); })("closed", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_closed_1_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r8 = i0__namespace.ɵɵnextContext(); return ctx_r8.events.push("close!"); });
            i0__namespace.ɵɵtext(3, " Sidenav content ");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "mat-sidenav-content");
            i0__namespace.ɵɵelementStart(5, "p");
            i0__namespace.ɵɵelementStart(6, "mat-checkbox", 5);
            i0__namespace.ɵɵlistener("ngModelChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_checkbox_ngModelChange_6_listener($event) { i0__namespace.ɵɵrestoreView(_r6_1); var ctx_r9 = i0__namespace.ɵɵnextContext(); return ctx_r9.opened = $event; });
            i0__namespace.ɵɵtext(7, "sidenav.opened");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(8, "p");
            i0__namespace.ɵɵelementStart(9, "button", 6);
            i0__namespace.ɵɵlistener("click", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_button_click_9_listener() { i0__namespace.ɵɵrestoreView(_r6_1); var _r2 = i0__namespace.ɵɵreference(2); return _r2.toggle(); });
            i0__namespace.ɵɵtext(10, "sidenav.toggle()");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(11, "p");
            i0__namespace.ɵɵtext(12, "Events:");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(13, "div", 7);
            i0__namespace.ɵɵtemplate(14, SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template, 2, 1, "div", 8);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("opened", ctx_r0.opened);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngModel", ctx_r0.opened);
            i0__namespace.ɵɵadvance(8);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.events);
        }
    }
    function SidenavOpenCloseExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Sidenav open & close behavior */
    var SidenavOpenCloseExample = /** @class */ (function () {
        function SidenavOpenCloseExample() {
            this.events = [];
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        return SidenavOpenCloseExample;
    }());
    SidenavOpenCloseExample.ɵfac = function SidenavOpenCloseExample_Factory(t) { return new (t || SidenavOpenCloseExample)(); };
    SidenavOpenCloseExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavOpenCloseExample, selectors: [["sidenav-open-close-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function SidenavOpenCloseExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavOpenCloseExample_mat_sidenav_container_0_Template, 15, 3, "mat-sidenav-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavOpenCloseExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i2__namespace.MatSidenavContent, i5__namespace.MatCheckbox, i1__namespace$1.NgControlStatus, i1__namespace$1.NgModel, i3__namespace.MatButton, i1__namespace.NgForOf], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavOpenCloseExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-open-close-example',
                        templateUrl: 'sidenav-open-close-example.html',
                        styleUrls: ['sidenav-open-close-example.css'],
                    }]
            }], null, null);
    })();

    function SidenavOverviewExample_mat_sidenav_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 2);
            i0__namespace.ɵɵelementStart(1, "mat-sidenav", 3);
            i0__namespace.ɵɵtext(2, "Sidenav content");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-sidenav-content");
            i0__namespace.ɵɵtext(4, "Main content");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
    }
    function SidenavOverviewExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Basic sidenav */
    var SidenavOverviewExample = /** @class */ (function () {
        function SidenavOverviewExample() {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        return SidenavOverviewExample;
    }());
    SidenavOverviewExample.ɵfac = function SidenavOverviewExample_Factory(t) { return new (t || SidenavOverviewExample)(); };
    SidenavOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavOverviewExample, selectors: [["sidenav-overview-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavOverviewExample_mat_sidenav_container_0_Template, 5, 0, "mat-sidenav-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavOverviewExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i2__namespace.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-overview-example',
                        templateUrl: 'sidenav-overview-example.html',
                        styleUrls: ['sidenav-overview-example.css'],
                    }]
            }], null, null);
    })();

    function SidenavPositionExample_mat_sidenav_container_0_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "mat-sidenav-container", 2);
            i0__namespace.ɵɵelementStart(1, "mat-sidenav", 3);
            i0__namespace.ɵɵtext(2, "Start content");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "mat-sidenav", 4);
            i0__namespace.ɵɵtext(4, "End content");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtext(5, " Implicit main content\n");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function SidenavPositionExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Implicit main content with two sidenavs */
    var SidenavPositionExample = /** @class */ (function () {
        function SidenavPositionExample() {
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        }
        return SidenavPositionExample;
    }());
    SidenavPositionExample.ɵfac = function SidenavPositionExample_Factory(t) { return new (t || SidenavPositionExample)(); };
    SidenavPositionExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavPositionExample, selectors: [["sidenav-position-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["opened", "", "mode", "side"], ["opened", "", "mode", "side", "position", "end"]], template: function SidenavPositionExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavPositionExample_mat_sidenav_container_0_Template, 6, 0, "mat-sidenav-container", 0);
                i0__namespace.ɵɵtemplate(1, SidenavPositionExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavPositionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-position-example',
                        templateUrl: 'sidenav-position-example.html',
                        styleUrls: ['sidenav-position-example.css'],
                    }]
            }], null, null);
    })();

    function SidenavResponsiveExample_div_0_a_11_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "a", 11);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var nav_r5 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(nav_r5);
        }
    }
    function SidenavResponsiveExample_div_0_p_13_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "p");
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var content_r6 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate(content_r6);
        }
    }
    function SidenavResponsiveExample_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r8_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 2);
            i0__namespace.ɵɵelementStart(1, "mat-toolbar", 3);
            i0__namespace.ɵɵelementStart(2, "button", 4);
            i0__namespace.ɵɵlistener("click", function SidenavResponsiveExample_div_0_Template_button_click_2_listener() { i0__namespace.ɵɵrestoreView(_r8_1); var _r2 = i0__namespace.ɵɵreference(9); return _r2.toggle(); });
            i0__namespace.ɵɵelementStart(3, "mat-icon");
            i0__namespace.ɵɵtext(4, "menu");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(5, "h1", 5);
            i0__namespace.ɵɵtext(6, "Responsive App");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(7, "mat-sidenav-container", 6);
            i0__namespace.ɵɵelementStart(8, "mat-sidenav", 7, 8);
            i0__namespace.ɵɵelementStart(10, "mat-nav-list");
            i0__namespace.ɵɵtemplate(11, SidenavResponsiveExample_div_0_a_11_Template, 2, 1, "a", 9);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(12, "mat-sidenav-content");
            i0__namespace.ɵɵtemplate(13, SidenavResponsiveExample_div_0_p_13_Template, 2, 1, "p", 10);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵclassProp("example-is-mobile", ctx_r0.mobileQuery.matches);
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵstyleProp("margin-top", ctx_r0.mobileQuery.matches ? 56 : 0, "px");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("mode", ctx_r0.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx_r0.mobileQuery.matches);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.fillerNav);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r0.fillerContent);
        }
    }
    function SidenavResponsiveExample_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtext(1, "Please open on Stackblitz to see result");
            i0__namespace.ɵɵelementEnd();
        }
    }
    /** @title Responsive sidenav */
    var SidenavResponsiveExample = /** @class */ (function () {
        function SidenavResponsiveExample(changeDetectorRef, media) {
            this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
            this.fillerContent = Array.from({ length: 50 }, function () { return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."; });
            this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
            this.mobileQuery = media.matchMedia('(max-width: 600px)');
            this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
            this.mobileQuery.addListener(this._mobileQueryListener);
        }
        SidenavResponsiveExample.prototype.ngOnDestroy = function () {
            this.mobileQuery.removeListener(this._mobileQueryListener);
        };
        return SidenavResponsiveExample;
    }());
    SidenavResponsiveExample.ɵfac = function SidenavResponsiveExample_Factory(t) { return new (t || SidenavResponsiveExample)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ChangeDetectorRef), i0__namespace.ɵɵdirectiveInject(i1__namespace$2.MediaMatcher)); };
    SidenavResponsiveExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavResponsiveExample, selectors: [["sidenav-responsive-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "example-is-mobile", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", "."]], template: function SidenavResponsiveExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, SidenavResponsiveExample_div_0_Template, 14, 8, "div", 0);
                i0__namespace.ɵɵtemplate(1, SidenavResponsiveExample_div_1_Template, 2, 0, "div", 1);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.shouldRun);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("ngIf", !ctx.shouldRun);
            }
        }, directives: [i1__namespace.NgIf, i3__namespace$2.MatToolbar, i3__namespace.MatButton, i5__namespace$1.MatIcon, i2__namespace.MatSidenavContainer, i2__namespace.MatSidenav, i7__namespace.MatNavList, i1__namespace.NgForOf, i2__namespace.MatSidenavContent, i7__namespace.MatListItem], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavResponsiveExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-responsive-example',
                        templateUrl: 'sidenav-responsive-example.html',
                        styleUrls: ['sidenav-responsive-example.css'],
                    }]
            }], function () { return [{ type: i0__namespace.ChangeDetectorRef }, { type: i1__namespace$2.MediaMatcher }]; }, null);
    })();

    /**
     * @title Testing with MatSidenavHarness
     */
    var SidenavHarnessExample = /** @class */ (function () {
        function SidenavHarnessExample() {
        }
        return SidenavHarnessExample;
    }());
    SidenavHarnessExample.ɵfac = function SidenavHarnessExample_Factory(t) { return new (t || SidenavHarnessExample)(); };
    SidenavHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: SidenavHarnessExample, selectors: [["sidenav-harness-example"]], decls: 5, vars: 0, consts: [["mode", "side"]], template: function SidenavHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-drawer-container");
                i0__namespace.ɵɵelementStart(1, "mat-drawer", 0);
                i0__namespace.ɵɵtext(2, "Hello from the drawer");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "mat-drawer-content");
                i0__namespace.ɵɵtext(4, "Hello from the content");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i2__namespace.MatDrawerContainer, i2__namespace.MatDrawer, i2__namespace.MatDrawerContent], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'sidenav-harness-example',
                        templateUrl: 'sidenav-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavHarnessExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample,
    ];
    var SidenavExamplesModule = /** @class */ (function () {
        function SidenavExamplesModule() {
        }
        return SidenavExamplesModule;
    }());
    SidenavExamplesModule.ɵfac = function SidenavExamplesModule_Factory(t) { return new (t || SidenavExamplesModule)(); };
    SidenavExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: SidenavExamplesModule });
    SidenavExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1.CommonModule,
                i1$1.FormsModule,
                i3.MatButtonModule,
                i5.MatCheckboxModule,
                i5$1.MatIconModule,
                i7.MatListModule,
                i4$1.MatRadioModule,
                i2.MatSidenavModule,
                i3$1.MatSelectModule,
                i3$2.MatToolbarModule,
                i1$1.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(SidenavExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CommonModule,
                            i1$1.FormsModule,
                            i3.MatButtonModule,
                            i5.MatCheckboxModule,
                            i5$1.MatIconModule,
                            i7.MatListModule,
                            i4$1.MatRadioModule,
                            i2.MatSidenavModule,
                            i3$1.MatSelectModule,
                            i3$2.MatToolbarModule,
                            i1$1.ReactiveFormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(SidenavExamplesModule, { declarations: [SidenavAutosizeExample,
                SidenavBackdropExample,
                SidenavDisableCloseExample,
                SidenavDrawerOverviewExample,
                SidenavHarnessExample,
                SidenavFixedExample,
                SidenavModeExample,
                SidenavOpenCloseExample,
                SidenavOverviewExample,
                SidenavPositionExample,
                SidenavResponsiveExample], imports: [i1.CommonModule,
                i1$1.FormsModule,
                i3.MatButtonModule,
                i5.MatCheckboxModule,
                i5$1.MatIconModule,
                i7.MatListModule,
                i4$1.MatRadioModule,
                i2.MatSidenavModule,
                i3$1.MatSelectModule,
                i3$2.MatToolbarModule,
                i1$1.ReactiveFormsModule], exports: [SidenavAutosizeExample,
                SidenavBackdropExample,
                SidenavDisableCloseExample,
                SidenavDrawerOverviewExample,
                SidenavHarnessExample,
                SidenavFixedExample,
                SidenavModeExample,
                SidenavOpenCloseExample,
                SidenavOverviewExample,
                SidenavPositionExample,
                SidenavResponsiveExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SidenavAutosizeExample = SidenavAutosizeExample;
    exports.SidenavBackdropExample = SidenavBackdropExample;
    exports.SidenavDisableCloseExample = SidenavDisableCloseExample;
    exports.SidenavDrawerOverviewExample = SidenavDrawerOverviewExample;
    exports.SidenavExamplesModule = SidenavExamplesModule;
    exports.SidenavFixedExample = SidenavFixedExample;
    exports.SidenavHarnessExample = SidenavHarnessExample;
    exports.SidenavModeExample = SidenavModeExample;
    exports.SidenavOpenCloseExample = SidenavOpenCloseExample;
    exports.SidenavOverviewExample = SidenavOverviewExample;
    exports.SidenavPositionExample = SidenavPositionExample;
    exports.SidenavResponsiveExample = SidenavResponsiveExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-sidenav.umd.js.map
