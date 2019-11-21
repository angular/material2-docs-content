import { NgIf, NgForOf, CommonModule } from '@angular/common';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineComponent, ɵɵgetCurrentView, ɵɵtemplate, ɵɵlistener, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵnextContext, ɵɵtextInterpolate1, ViewChild, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵelementContainerStart, ɵɵelement, ɵɵelementContainerEnd, ɵɵdirectiveInject, ɵɵtextInterpolate, ɵɵclassProp, ɵɵstyleProp, ChangeDetectorRef, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { FormBuilder, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, NumberValueAccessor, DefaultValueAccessor, FormControl, FormControlDirective, NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListItem, MatListModule } from '@angular/material/list';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatDrawerContainer, MatDrawer, MatDrawerContent, MatSidenavContainer, MatSidenav, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/core';
import { MediaMatcher } from '@angular/cdk/layout';

function SidenavAutosizeExample_p_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, "Lorem, ipsum dolor sit amet consectetur.");
    ɵɵelementEnd();
} }
/**
 * @title Autosize sidenav
 */
var SidenavAutosizeExample = /** @class */ (function () {
    function SidenavAutosizeExample() {
        this.showFiller = false;
    }
    SidenavAutosizeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-autosize-example',
                    templateUrl: 'sidenav-autosize-example.html',
                    styleUrls: ['sidenav-autosize-example.css'],
                },] },
    ];
    SidenavAutosizeExample.ɵfac = function SidenavAutosizeExample_Factory(t) { return new (t || SidenavAutosizeExample)(); };
    SidenavAutosizeExample.ɵcmp = ɵɵdefineComponent({ type: SidenavAutosizeExample, selectors: [["sidenav-autosize-example"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function SidenavAutosizeExample_Template(rf, ctx) { if (rf & 1) {
            var _r2 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-drawer-container", 0);
            ɵɵelementStart(1, "mat-drawer", 1, 2);
            ɵɵelementStart(3, "p");
            ɵɵtext(4, "Auto-resizing sidenav");
            ɵɵelementEnd();
            ɵɵtemplate(5, SidenavAutosizeExample_p_5_Template, 2, 0, "p", 3);
            ɵɵelementStart(6, "button", 4);
            ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_6_listener($event) { return ctx.showFiller = !ctx.showFiller; });
            ɵɵtext(7, " Toggle extra text ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(8, "div", 5);
            ɵɵelementStart(9, "button", 6);
            ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_9_listener($event) { ɵɵrestoreView(_r2); var _r0 = ɵɵreference(2); return _r0.toggle(); });
            ɵɵtext(10, " Toggle sidenav ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(5);
            ɵɵproperty("ngIf", ctx.showFiller);
        } }, directives: [MatDrawerContainer, MatDrawer, NgIf, MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}"] });
    return SidenavAutosizeExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavAutosizeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-autosize-example',
                templateUrl: 'sidenav-autosize-example.html',
                styleUrls: ['sidenav-autosize-example.css'],
            }]
    }], null, null); })();

/** @title Drawer with explicit backdrop setting */
var SidenavBackdropExample = /** @class */ (function () {
    function SidenavBackdropExample() {
    }
    SidenavBackdropExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-backdrop-example',
                    templateUrl: 'sidenav-backdrop-example.html',
                    styleUrls: ['sidenav-backdrop-example.css'],
                },] },
    ];
    SidenavBackdropExample.ɵfac = function SidenavBackdropExample_Factory(t) { return new (t || SidenavBackdropExample)(); };
    SidenavBackdropExample.ɵcmp = ɵɵdefineComponent({ type: SidenavBackdropExample, selectors: [["sidenav-backdrop-example"]], decls: 29, vars: 4, consts: [[1, "example-container", 3, "hasBackdrop"], [3, "mode"], ["drawer", ""], ["value", "side"], ["mode", ""], ["value", "over"], ["value", "push"], ["hasBackdrop", ""], [3, "value"], ["mat-raised-button", "", 3, "click"]], template: function SidenavBackdropExample_Template(rf, ctx) { if (rf & 1) {
            var _r6 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-drawer-container", 0);
            ɵɵelementStart(1, "mat-drawer", 1, 2);
            ɵɵtext(3, "I'm a drawer");
            ɵɵelementEnd();
            ɵɵelementStart(4, "mat-drawer-content");
            ɵɵelementStart(5, "mat-form-field");
            ɵɵelementStart(6, "mat-label");
            ɵɵtext(7, "Sidenav mode");
            ɵɵelementEnd();
            ɵɵelementStart(8, "mat-select", 3, 4);
            ɵɵelementStart(10, "mat-option", 3);
            ɵɵtext(11, "Side");
            ɵɵelementEnd();
            ɵɵelementStart(12, "mat-option", 5);
            ɵɵtext(13, "Over");
            ɵɵelementEnd();
            ɵɵelementStart(14, "mat-option", 6);
            ɵɵtext(15, "Push");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-form-field");
            ɵɵelementStart(17, "mat-label");
            ɵɵtext(18, "Has backdrop");
            ɵɵelementEnd();
            ɵɵelementStart(19, "mat-select", null, 7);
            ɵɵelementStart(21, "mat-option");
            ɵɵtext(22, "Unset");
            ɵɵelementEnd();
            ɵɵelementStart(23, "mat-option", 8);
            ɵɵtext(24, "True");
            ɵɵelementEnd();
            ɵɵelementStart(25, "mat-option", 8);
            ɵɵtext(26, "False");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(27, "button", 9);
            ɵɵlistener("click", function SidenavBackdropExample_Template_button_click_27_listener($event) { ɵɵrestoreView(_r6); var _r3 = ɵɵreference(2); return _r3.toggle(); });
            ɵɵtext(28, "Toggle drawer");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r4 = ɵɵreference(9);
            var _r5 = ɵɵreference(20);
            ɵɵproperty("hasBackdrop", _r5.value);
            ɵɵadvance(1);
            ɵɵproperty("mode", _r4.value);
            ɵɵadvance(22);
            ɵɵproperty("value", true);
            ɵɵadvance(2);
            ɵɵproperty("value", false);
        } }, directives: [MatDrawerContainer, MatDrawer, MatDrawerContent, MatFormField, MatLabel, MatSelect, MatOption, MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 12px;\n  border: 1px solid #555;\n}\n\nmat-drawer-content[_ngcontent-%COMP%] {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}"] });
    return SidenavBackdropExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavBackdropExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-backdrop-example',
                templateUrl: 'sidenav-backdrop-example.html',
                styleUrls: ['sidenav-backdrop-example.css'],
            }]
    }], null, null); })();

var _c0 = ["sidenav"];
function SidenavDisableCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-sidenav-container", 2);
    ɵɵlistener("backdropClick", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_container_backdropClick_0_listener($event) { ɵɵrestoreView(_r11); var ctx_r10 = ɵɵnextContext(); return ctx_r10.close("backdrop"); });
    ɵɵelementStart(1, "mat-sidenav", 3, 4);
    ɵɵlistener("keydown.escape", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_mat_sidenav_keydown_escape_1_listener($event) { ɵɵrestoreView(_r11); var ctx_r12 = ɵɵnextContext(); return ctx_r12.close("escape"); });
    ɵɵelementStart(3, "p");
    ɵɵelementStart(4, "button", 5);
    ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { ɵɵrestoreView(_r11); var ctx_r13 = ɵɵnextContext(); return ctx_r13.close("toggle button"); });
    ɵɵtext(5, "Toggle");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-sidenav-content");
    ɵɵelementStart(7, "p");
    ɵɵelementStart(8, "button", 5);
    ɵɵlistener("click", function SidenavDisableCloseExample_mat_sidenav_container_0_Template_button_click_8_listener($event) { ɵɵrestoreView(_r11); var _r9 = ɵɵreference(2); return _r9.open(); });
    ɵɵtext(9, "Open");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(10, "p");
    ɵɵtext(11);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = ɵɵnextContext();
    ɵɵadvance(11);
    ɵɵtextInterpolate1("Closed due to: ", ctx_r7.reason, "");
} }
function SidenavDisableCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
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
    SidenavDisableCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-disable-close-example',
                    templateUrl: 'sidenav-disable-close-example.html',
                    styleUrls: ['sidenav-disable-close-example.css'],
                },] },
    ];
    SidenavDisableCloseExample.propDecorators = {
        sidenav: [{ type: ViewChild, args: ['sidenav',] }]
    };
    SidenavDisableCloseExample.ɵfac = function SidenavDisableCloseExample_Factory(t) { return new (t || SidenavDisableCloseExample)(); };
    SidenavDisableCloseExample.ɵcmp = ɵɵdefineComponent({ type: SidenavDisableCloseExample, selectors: [["sidenav-disable-close-example"]], viewQuery: function SidenavDisableCloseExample_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sidenav = _t.first);
        } }, decls: 2, vars: 2, consts: [["class", "example-container", 3, "backdropClick", 4, "ngIf"], [4, "ngIf"], [1, "example-container", 3, "backdropClick"], ["disableClose", "", 3, "keydown.escape"], ["sidenav", ""], ["mat-button", "", 3, "click"]], template: function SidenavDisableCloseExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavDisableCloseExample_mat_sidenav_container_0_Template, 12, 1, "mat-sidenav-container", 0);
            ɵɵtemplate(1, SidenavDisableCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatSidenavContainer, MatSidenav, MatButton, MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavDisableCloseExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavDisableCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-disable-close-example',
                templateUrl: 'sidenav-disable-close-example.html',
                styleUrls: ['sidenav-disable-close-example.css'],
            }]
    }], null, { sidenav: [{
            type: ViewChild,
            args: ['sidenav']
        }] }); })();

/** @title Basic drawer */
var SidenavDrawerOverviewExample = /** @class */ (function () {
    function SidenavDrawerOverviewExample() {
    }
    SidenavDrawerOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-drawer-overview-example',
                    templateUrl: 'sidenav-drawer-overview-example.html',
                    styleUrls: ['sidenav-drawer-overview-example.css'],
                },] },
    ];
    SidenavDrawerOverviewExample.ɵfac = function SidenavDrawerOverviewExample_Factory(t) { return new (t || SidenavDrawerOverviewExample)(); };
    SidenavDrawerOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SidenavDrawerOverviewExample, selectors: [["sidenav-drawer-overview-example"]], decls: 5, vars: 0, consts: [[1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavDrawerOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-drawer-container", 0);
            ɵɵelementStart(1, "mat-drawer", 1);
            ɵɵtext(2, "Drawer content");
            ɵɵelementEnd();
            ɵɵelementStart(3, "mat-drawer-content");
            ɵɵtext(4, "Main content");
            ɵɵelementEnd();
            ɵɵelementEnd();
        } }, directives: [MatDrawerContainer, MatDrawer, MatDrawerContent], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 200px;\n  margin: 10px;\n  border: 1px solid #555;\n}"] });
    return SidenavDrawerOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavDrawerOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-drawer-overview-example',
                templateUrl: 'sidenav-drawer-overview-example.html',
                styleUrls: ['sidenav-drawer-overview-example.css'],
            }]
    }], null, null); })();

function SidenavFixedExample_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r19 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-toolbar", 1);
    ɵɵtext(2, "Header");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-sidenav-container", 2);
    ɵɵelementStart(4, "mat-sidenav", 3, 4);
    ɵɵtext(6);
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-sidenav-content", 5);
    ɵɵelementStart(8, "p");
    ɵɵelementStart(9, "mat-checkbox", 6);
    ɵɵtext(10, "Fixed");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "p");
    ɵɵelementStart(12, "mat-form-field");
    ɵɵelement(13, "input", 7);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(14, "p");
    ɵɵelementStart(15, "mat-form-field");
    ɵɵelement(16, "input", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(17, "p");
    ɵɵelementStart(18, "button", 9);
    ɵɵlistener("click", function SidenavFixedExample_ng_container_0_Template_button_click_18_listener($event) { ɵɵrestoreView(_r19); var _r17 = ɵɵreference(5); return _r17.toggle(); });
    ɵɵtext(19, "Toggle");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-toolbar", 10);
    ɵɵtext(21, "Footer");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    var ctx_r15 = ɵɵnextContext();
    ɵɵadvance(4);
    ɵɵproperty("fixedInViewport", ctx_r15.options.value.fixed)("fixedTopGap", ctx_r15.options.value.top)("fixedBottomGap", ctx_r15.options.value.bottom);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ctx_r15.options.value.fixed ? "Fixed" : "Non-fixed", " Sidenav ");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r15.options);
} }
function SidenavFixedExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
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
    SidenavFixedExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-fixed-example',
                    templateUrl: 'sidenav-fixed-example.html',
                    styleUrls: ['sidenav-fixed-example.css'],
                },] },
    ];
    /** @nocollapse */
    SidenavFixedExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    SidenavFixedExample.ɵfac = function SidenavFixedExample_Factory(t) { return new (t || SidenavFixedExample)(ɵɵdirectiveInject(FormBuilder)); };
    SidenavFixedExample.ɵcmp = ɵɵdefineComponent({ type: SidenavFixedExample, selectors: [["sidenav-fixed-example"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "example-header"], [1, "example-container"], ["mode", "side", "opened", "", 1, "example-sidenav", 3, "fixedInViewport", "fixedTopGap", "fixedBottomGap"], ["sidenav", ""], [3, "formGroup"], ["formControlName", "fixed"], ["matInput", "", "type", "number", "formControlName", "top", "placeholder", "Top gap"], ["matInput", "", "type", "number", "formControlName", "bottom", "placeholder", "Bottom gap"], ["mat-button", "", 3, "click"], [1, "example-footer"]], template: function SidenavFixedExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavFixedExample_ng_container_0_Template, 22, 5, "ng-container", 0);
            ɵɵtemplate(1, SidenavFixedExample_div_1_Template, 2, 0, "div", 0);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatToolbar, MatSidenavContainer, MatSidenav, MatSidenavContent, NgControlStatusGroup, FormGroupDirective, MatCheckbox, NgControlStatus, FormControlName, MatFormField, NumberValueAccessor, DefaultValueAccessor, MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  bottom: 60px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavFixedExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavFixedExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-fixed-example',
                templateUrl: 'sidenav-fixed-example.html',
                styleUrls: ['sidenav-fixed-example.css'],
            }]
    }], function () { return [{ type: FormBuilder }]; }, null); })();

function SidenavModeExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r24 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-sidenav-container", 2);
    ɵɵelementStart(1, "mat-sidenav", 3, 4);
    ɵɵelementStart(3, "p");
    ɵɵelementStart(4, "button", 5);
    ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_4_listener($event) { ɵɵrestoreView(_r24); var _r22 = ɵɵreference(2); return _r22.toggle(); });
    ɵɵtext(5, "Toggle");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "p");
    ɵɵelementStart(7, "mat-radio-group", 6);
    ɵɵelementStart(8, "label");
    ɵɵtext(9, "Mode:");
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-radio-button", 7);
    ɵɵtext(11, "Over");
    ɵɵelementEnd();
    ɵɵelementStart(12, "mat-radio-button", 8);
    ɵɵtext(13, "Side");
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-radio-button", 9);
    ɵɵtext(15, "Push");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(16, "mat-sidenav-content");
    ɵɵelementStart(17, "p");
    ɵɵelementStart(18, "button", 5);
    ɵɵlistener("click", function SidenavModeExample_mat_sidenav_container_0_Template_button_click_18_listener($event) { ɵɵrestoreView(_r24); var _r22 = ɵɵreference(2); return _r22.toggle(); });
    ɵɵtext(19, "Toggle");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "p");
    ɵɵelementStart(21, "mat-radio-group", 6);
    ɵɵelementStart(22, "label");
    ɵɵtext(23, "Mode:");
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-radio-button", 7);
    ɵɵtext(25, "Over");
    ɵɵelementEnd();
    ɵɵelementStart(26, "mat-radio-button", 8);
    ɵɵtext(27, "Side");
    ɵɵelementEnd();
    ɵɵelementStart(28, "mat-radio-button", 9);
    ɵɵtext(29, "Push");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r20 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("mode", ctx_r20.mode.value);
    ɵɵadvance(6);
    ɵɵproperty("formControl", ctx_r20.mode);
    ɵɵadvance(14);
    ɵɵproperty("formControl", ctx_r20.mode);
} }
function SidenavModeExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
/** @title Sidenav with configurable mode */
var SidenavModeExample = /** @class */ (function () {
    function SidenavModeExample() {
        this.mode = new FormControl('over');
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavModeExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-mode-example',
                    templateUrl: 'sidenav-mode-example.html',
                    styleUrls: ['sidenav-mode-example.css'],
                },] },
    ];
    SidenavModeExample.ɵfac = function SidenavModeExample_Factory(t) { return new (t || SidenavModeExample)(); };
    SidenavModeExample.ɵcmp = ɵɵdefineComponent({ type: SidenavModeExample, selectors: [["sidenav-mode-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], [3, "mode"], ["sidenav", ""], ["mat-button", "", 3, "click"], [1, "example-radio-group", 3, "formControl"], ["value", "over"], ["value", "side"], ["value", "push"]], template: function SidenavModeExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavModeExample_mat_sidenav_container_0_Template, 30, 3, "mat-sidenav-container", 0);
            ɵɵtemplate(1, SidenavModeExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatSidenavContainer, MatSidenav, MatButton, MatRadioGroup, NgControlStatus, FormControlDirective, MatRadioButton, MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}"] });
    return SidenavModeExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavModeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-mode-example',
                templateUrl: 'sidenav-mode-example.html',
                styleUrls: ['sidenav-mode-example.css'],
            }]
    }], null, null); })();

function SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var e_r30 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(e_r30);
} }
function SidenavOpenCloseExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    var _r32 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-sidenav-container", 2);
    ɵɵelementStart(1, "mat-sidenav", 3, 4);
    ɵɵlistener("openedChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_openedChange_1_listener($event) { ɵɵrestoreView(_r32); var ctx_r31 = ɵɵnextContext(); return ctx_r31.opened = $event; });
    ɵɵlistener("opened", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_opened_1_listener($event) { ɵɵrestoreView(_r32); var ctx_r33 = ɵɵnextContext(); return ctx_r33.events.push("open!"); });
    ɵɵlistener("closed", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_sidenav_closed_1_listener($event) { ɵɵrestoreView(_r32); var ctx_r34 = ɵɵnextContext(); return ctx_r34.events.push("close!"); });
    ɵɵtext(3, " Sidenav content ");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-sidenav-content");
    ɵɵelementStart(5, "p");
    ɵɵelementStart(6, "mat-checkbox", 5);
    ɵɵlistener("ngModelChange", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_mat_checkbox_ngModelChange_6_listener($event) { ɵɵrestoreView(_r32); var ctx_r35 = ɵɵnextContext(); return ctx_r35.opened = $event; });
    ɵɵtext(7, "sidenav.opened");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(8, "p");
    ɵɵelementStart(9, "button", 6);
    ɵɵlistener("click", function SidenavOpenCloseExample_mat_sidenav_container_0_Template_button_click_9_listener($event) { ɵɵrestoreView(_r32); var _r28 = ɵɵreference(2); return _r28.toggle(); });
    ɵɵtext(10, "sidenav.toggle()");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "p");
    ɵɵtext(12, "Events:");
    ɵɵelementEnd();
    ɵɵelementStart(13, "div", 7);
    ɵɵtemplate(14, SidenavOpenCloseExample_mat_sidenav_container_0_div_14_Template, 2, 1, "div", 8);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r26 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("opened", ctx_r26.opened);
    ɵɵadvance(5);
    ɵɵproperty("ngModel", ctx_r26.opened);
    ɵɵadvance(8);
    ɵɵproperty("ngForOf", ctx_r26.events);
} }
function SidenavOpenCloseExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
/** @title Sidenav open & close behavior */
var SidenavOpenCloseExample = /** @class */ (function () {
    function SidenavOpenCloseExample() {
        this.events = [];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOpenCloseExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-open-close-example',
                    templateUrl: 'sidenav-open-close-example.html',
                    styleUrls: ['sidenav-open-close-example.css'],
                },] },
    ];
    SidenavOpenCloseExample.ɵfac = function SidenavOpenCloseExample_Factory(t) { return new (t || SidenavOpenCloseExample)(); };
    SidenavOpenCloseExample.ɵcmp = ɵɵdefineComponent({ type: SidenavOpenCloseExample, selectors: [["sidenav-open-close-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], [3, "ngModel", "ngModelChange"], ["mat-button", "", 3, "click"], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function SidenavOpenCloseExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavOpenCloseExample_mat_sidenav_container_0_Template, 15, 3, "mat-sidenav-container", 0);
            ɵɵtemplate(1, SidenavOpenCloseExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatSidenavContainer, MatSidenav, MatSidenavContent, MatCheckbox, NgControlStatus, NgModel, MatButton, NgForOf], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}"] });
    return SidenavOpenCloseExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavOpenCloseExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-open-close-example',
                templateUrl: 'sidenav-open-close-example.html',
                styleUrls: ['sidenav-open-close-example.css'],
            }]
    }], null, null); })();

function SidenavOverviewExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-sidenav-container", 2);
    ɵɵelementStart(1, "mat-sidenav", 3);
    ɵɵtext(2, "Sidenav content");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-sidenav-content");
    ɵɵtext(4, "Main content");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function SidenavOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
/** @title Basic sidenav */
var SidenavOverviewExample = /** @class */ (function () {
    function SidenavOverviewExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-overview-example',
                    templateUrl: 'sidenav-overview-example.html',
                    styleUrls: ['sidenav-overview-example.css'],
                },] },
    ];
    SidenavOverviewExample.ɵfac = function SidenavOverviewExample_Factory(t) { return new (t || SidenavOverviewExample)(); };
    SidenavOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SidenavOverviewExample, selectors: [["sidenav-overview-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavOverviewExample_mat_sidenav_container_0_Template, 5, 0, "mat-sidenav-container", 0);
            ɵɵtemplate(1, SidenavOverviewExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatSidenavContainer, MatSidenav, MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}"] });
    return SidenavOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-overview-example',
                templateUrl: 'sidenav-overview-example.html',
                styleUrls: ['sidenav-overview-example.css'],
            }]
    }], null, null); })();

function SidenavPositionExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-sidenav-container", 2);
    ɵɵelementStart(1, "mat-sidenav", 3);
    ɵɵtext(2, "Start content");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-sidenav", 4);
    ɵɵtext(4, "End content");
    ɵɵelementEnd();
    ɵɵtext(5, " Implicit main content\n");
    ɵɵelementEnd();
} }
function SidenavPositionExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
/** @title Implicit main content with two sidenavs */
var SidenavPositionExample = /** @class */ (function () {
    function SidenavPositionExample() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    SidenavPositionExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-position-example',
                    templateUrl: 'sidenav-position-example.html',
                    styleUrls: ['sidenav-position-example.css'],
                },] },
    ];
    SidenavPositionExample.ɵfac = function SidenavPositionExample_Factory(t) { return new (t || SidenavPositionExample)(); };
    SidenavPositionExample.ɵcmp = ɵɵdefineComponent({ type: SidenavPositionExample, selectors: [["sidenav-position-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["opened", "", "mode", "side"], ["opened", "", "mode", "side", "position", "end"]], template: function SidenavPositionExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavPositionExample_mat_sidenav_container_0_Template, 6, 0, "mat-sidenav-container", 0);
            ɵɵtemplate(1, SidenavPositionExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatSidenavContainer, MatSidenav], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}"] });
    return SidenavPositionExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavPositionExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-position-example',
                templateUrl: 'sidenav-position-example.html',
                styleUrls: ['sidenav-position-example.css'],
            }]
    }], null, null); })();

function SidenavResponsiveExample_div_0_a_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "a", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var nav_r46 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(nav_r46);
} }
function SidenavResponsiveExample_div_0_p_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    var content_r47 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(content_r47);
} }
function SidenavResponsiveExample_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r49 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵelementStart(1, "mat-toolbar", 3);
    ɵɵelementStart(2, "button", 4);
    ɵɵlistener("click", function SidenavResponsiveExample_div_0_Template_button_click_2_listener($event) { ɵɵrestoreView(_r49); var _r43 = ɵɵreference(9); return _r43.toggle(); });
    ɵɵelementStart(3, "mat-icon");
    ɵɵtext(4, "menu");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(5, "h1", 5);
    ɵɵtext(6, "Responsive App");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "mat-sidenav-container", 6);
    ɵɵelementStart(8, "mat-sidenav", 7, 8);
    ɵɵelementStart(10, "mat-nav-list");
    ɵɵtemplate(11, SidenavResponsiveExample_div_0_a_11_Template, 2, 1, "a", 9);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "mat-sidenav-content");
    ɵɵtemplate(13, SidenavResponsiveExample_div_0_p_13_Template, 2, 1, "p", 10);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r41 = ɵɵnextContext();
    ɵɵclassProp("example-is-mobile", ctx_r41.mobileQuery.matches);
    ɵɵadvance(7);
    ɵɵstyleProp("margin-top", ctx_r41.mobileQuery.matches ? 56 : 0, "px");
    ɵɵadvance(1);
    ɵɵproperty("mode", ctx_r41.mobileQuery.matches ? "over" : "side")("fixedInViewport", ctx_r41.mobileQuery.matches);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r41.fillerNav);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r41.fillerContent);
} }
function SidenavResponsiveExample_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtext(1, "Please open on Stackblitz to see result");
    ɵɵelementEnd();
} }
/** @title Responsive sidenav */
var SidenavResponsiveExample = /** @class */ (function () {
    function SidenavResponsiveExample(changeDetectorRef, media) {
        this.fillerNav = Array.from({ length: 50 }, function (_, i) { return "Nav Item " + (i + 1); });
        this.fillerContent = Array.from({ length: 50 }, function () {
            return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
        });
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    SidenavResponsiveExample.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    SidenavResponsiveExample.decorators = [
        { type: Component, args: [{
                    selector: 'sidenav-responsive-example',
                    templateUrl: 'sidenav-responsive-example.html',
                    styleUrls: ['sidenav-responsive-example.css'],
                },] },
    ];
    /** @nocollapse */
    SidenavResponsiveExample.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: MediaMatcher }
    ]; };
    SidenavResponsiveExample.ɵfac = function SidenavResponsiveExample_Factory(t) { return new (t || SidenavResponsiveExample)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(MediaMatcher)); };
    SidenavResponsiveExample.ɵcmp = ɵɵdefineComponent({ type: SidenavResponsiveExample, selectors: [["sidenav-responsive-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 3, "example-is-mobile", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["color", "primary", 1, "example-toolbar"], ["mat-icon-button", "", 3, "click"], [1, "example-app-name"], [1, "example-sidenav-container"], ["fixedTopGap", "56", 3, "mode", "fixedInViewport"], ["snav", ""], ["mat-list-item", "", "routerLink", ".", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["mat-list-item", "", "routerLink", "."]], template: function SidenavResponsiveExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵtemplate(0, SidenavResponsiveExample_div_0_Template, 14, 6, "div", 0);
            ɵɵtemplate(1, SidenavResponsiveExample_div_1_Template, 2, 0, "div", 1);
        } if (rf & 2) {
            ɵɵproperty("ngIf", ctx.shouldRun);
            ɵɵadvance(1);
            ɵɵproperty("ngIf", !ctx.shouldRun);
        } }, directives: [NgIf, MatToolbar, MatButton, MatIcon, MatSidenavContainer, MatSidenav, MatNavList, NgForOf, MatSidenavContent, MatListItem], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  z-index: 2;\n}\n\nh1.example-app-name[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n\n.example-is-mobile[_ngcontent-%COMP%]   .example-sidenav-container[_ngcontent-%COMP%] {\n  \n  flex: 1 0 auto;\n}"] });
    return SidenavResponsiveExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavResponsiveExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-responsive-example',
                templateUrl: 'sidenav-responsive-example.html',
                styleUrls: ['sidenav-responsive-example.css'],
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: MediaMatcher }]; }, null); })();

var EXAMPLES = [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
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
    SidenavExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatListModule,
                        MatRadioModule,
                        MatSidenavModule,
                        MatSelectModule,
                        MatToolbarModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] },
    ];
    SidenavExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SidenavExamplesModule });
    SidenavExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SidenavExamplesModule_Factory(t) { return new (t || SidenavExamplesModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatListModule,
                MatRadioModule,
                MatSidenavModule,
                MatSelectModule,
                MatToolbarModule,
                ReactiveFormsModule,
            ]] });
    return SidenavExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SidenavExamplesModule, { declarations: [SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatRadioModule,
        MatSidenavModule,
        MatSelectModule,
        MatToolbarModule,
        ReactiveFormsModule], exports: [SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SidenavExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatListModule,
                    MatRadioModule,
                    MatSidenavModule,
                    MatSelectModule,
                    MatToolbarModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();

export { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavExamplesModule, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample };
//# sourceMappingURL=sidenav.js.map
