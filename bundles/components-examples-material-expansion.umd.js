(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/datepicker'), require('@angular/material/core'), require('@angular/material/expansion'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/expansion', ['exports', '@angular/core', '@angular/material/button', '@angular/material/datepicker', '@angular/material/core', '@angular/material/expansion', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.expansion = {}), global.ng.core, global.ng.material.button, global.ng.material.datepicker, global.ng.material.core, global.ng.material.expansion, global.ng.material.icon, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i0, i1$1, i6, core, i1, i3, i5, i4) { 'use strict';

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
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1$1);
    var i6__namespace = /*#__PURE__*/_interopNamespace(i6);
    var i1__namespace$1 = /*#__PURE__*/_interopNamespace(i1);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
    var i5__namespace = /*#__PURE__*/_interopNamespace(i5);
    var i4__namespace = /*#__PURE__*/_interopNamespace(i4);

    /**
     * @title Accordion with expand/collapse all toggles
     */
    var ExpansionExpandCollapseAllExample = /** @class */ (function () {
        function ExpansionExpandCollapseAllExample() {
        }
        return ExpansionExpandCollapseAllExample;
    }());
    ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
    ExpansionExpandCollapseAllExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-expand-collapse-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵviewQuery(i1.MatAccordion, 5);
            }
            if (rf & 2) {
                var _t = void 0;
                i0__namespace.ɵɵqueryRefresh(_t = i0__namespace.ɵɵloadQuery()) && (ctx.accordion = _t.first);
            }
        }, decls: 48, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["appearance", "fill"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["disabled", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "div", 0);
                i0__namespace.ɵɵelementStart(1, "button", 1);
                i0__namespace.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener() { return ctx.accordion.openAll(); });
                i0__namespace.ɵɵtext(2, "Expand All");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(3, "button", 1);
                i0__namespace.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener() { return ctx.accordion.closeAll(); });
                i0__namespace.ɵɵtext(4, "Collapse All");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-accordion", 2);
                i0__namespace.ɵɵelementStart(6, "mat-expansion-panel");
                i0__namespace.ɵɵelementStart(7, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(8, "mat-panel-title");
                i0__namespace.ɵɵtext(9, " Personal data ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(10, "mat-panel-description");
                i0__namespace.ɵɵtext(11, " Type your name and age ");
                i0__namespace.ɵɵelementStart(12, "mat-icon");
                i0__namespace.ɵɵtext(13, "account_circle");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(14, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(15, "mat-label");
                i0__namespace.ɵɵtext(16, "First name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(17, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(18, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(19, "mat-label");
                i0__namespace.ɵɵtext(20, "Age");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(21, "input", 5);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(22, "mat-expansion-panel", 6);
                i0__namespace.ɵɵelementStart(23, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(24, "mat-panel-title");
                i0__namespace.ɵɵtext(25, " Destination ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(26, "mat-panel-description");
                i0__namespace.ɵɵtext(27, " Type the country name ");
                i0__namespace.ɵɵelementStart(28, "mat-icon");
                i0__namespace.ɵɵtext(29, "map");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(30, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(31, "mat-label");
                i0__namespace.ɵɵtext(32, "Country");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(33, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(34, "mat-expansion-panel");
                i0__namespace.ɵɵelementStart(35, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(36, "mat-panel-title");
                i0__namespace.ɵɵtext(37, " Day of the trip ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(38, "mat-panel-description");
                i0__namespace.ɵɵtext(39, " Inform the date you wish to travel ");
                i0__namespace.ɵɵelementStart(40, "mat-icon");
                i0__namespace.ɵɵtext(41, "date_range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(42, "mat-form-field", 3);
                i0__namespace.ɵɵelementStart(43, "mat-label");
                i0__namespace.ɵɵtext(44, "Date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(45, "input", 7);
                i0__namespace.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_45_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(47); return _r0.open(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(46, "mat-datepicker", null, 8);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(47);
                i0__namespace.ɵɵadvance(45);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
            }
        }, directives: [i1__namespace.MatButton, i1__namespace$1.MatAccordion, i1__namespace$1.MatExpansionPanel, i1__namespace$1.MatExpansionPanelHeader, i1__namespace$1.MatExpansionPanelTitle, i1__namespace$1.MatExpansionPanelDescription, i3__namespace.MatIcon, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i6__namespace.MatDatepickerInput, i6__namespace.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
                type: i0.Component,
                args: [{
                        selector: 'expansion-expand-collapse-all-example',
                        templateUrl: 'expansion-expand-collapse-all-example.html',
                        styleUrls: ['expansion-expand-collapse-all-example.css'],
                    }]
            }], null, { accordion: [{
                    type: i0.ViewChild,
                    args: [i1.MatAccordion]
                }] });
    })();

    /**
     * @title Basic expansion panel
     */
    var ExpansionOverviewExample = /** @class */ (function () {
        function ExpansionOverviewExample() {
            this.panelOpenState = false;
        }
        return ExpansionOverviewExample;
    }());
    ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
    ExpansionOverviewExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 17, vars: 1, consts: [["hideToggle", ""], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-accordion");
                i0__namespace.ɵɵelementStart(1, "mat-expansion-panel", 0);
                i0__namespace.ɵɵelementStart(2, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(3, "mat-panel-title");
                i0__namespace.ɵɵtext(4, " This is the expansion title ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-panel-description");
                i0__namespace.ɵɵtext(6, " This is a summary of the content ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(7, "p");
                i0__namespace.ɵɵtext(8, "This is the primary content of the panel.");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-expansion-panel", 1);
                i0__namespace.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_9_listener() { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_9_listener() { return ctx.panelOpenState = false; });
                i0__namespace.ɵɵelementStart(10, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(11, "mat-panel-title");
                i0__namespace.ɵɵtext(12, " Self aware panel ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "mat-panel-description");
                i0__namespace.ɵɵtext(14);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(15, "p");
                i0__namespace.ɵɵtext(16, "I'm visible because I am open");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0__namespace.ɵɵadvance(14);
                i0__namespace.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
            }
        }, directives: [i1__namespace$1.MatAccordion, i1__namespace$1.MatExpansionPanel, i1__namespace$1.MatExpansionPanelHeader, i1__namespace$1.MatExpansionPanelTitle, i1__namespace$1.MatExpansionPanelDescription], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExpansionOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'expansion-overview-example',
                        templateUrl: 'expansion-overview-example.html',
                        styleUrls: ['expansion-overview-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Expansion panel as accordion
     */
    var ExpansionStepsExample = /** @class */ (function () {
        function ExpansionStepsExample() {
            this.step = 0;
        }
        ExpansionStepsExample.prototype.setStep = function (index) {
            this.step = index;
        };
        ExpansionStepsExample.prototype.nextStep = function () {
            this.step++;
        };
        ExpansionStepsExample.prototype.prevStep = function () {
            this.step--;
        };
        return ExpansionStepsExample;
    }());
    ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
    ExpansionStepsExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["appearance", "fill"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0__namespace.ɵɵgetCurrentView();
                i0__namespace.ɵɵelementStart(0, "mat-accordion", 0);
                i0__namespace.ɵɵelementStart(1, "mat-expansion-panel", 1);
                i0__namespace.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener() { return ctx.setStep(0); });
                i0__namespace.ɵɵelementStart(2, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(3, "mat-panel-title");
                i0__namespace.ɵɵtext(4, " Personal data ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "mat-panel-description");
                i0__namespace.ɵɵtext(6, " Type your name and age ");
                i0__namespace.ɵɵelementStart(7, "mat-icon");
                i0__namespace.ɵɵtext(8, "account_circle");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(9, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(10, "mat-label");
                i0__namespace.ɵɵtext(11, "First name");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(12, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(13, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(14, "mat-label");
                i0__namespace.ɵɵtext(15, "Age");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(16, "input", 4);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(17, "mat-action-row");
                i0__namespace.ɵɵelementStart(18, "button", 5);
                i0__namespace.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener() { return ctx.nextStep(); });
                i0__namespace.ɵɵtext(19, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(20, "mat-expansion-panel", 1);
                i0__namespace.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener() { return ctx.setStep(1); });
                i0__namespace.ɵɵelementStart(21, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(22, "mat-panel-title");
                i0__namespace.ɵɵtext(23, " Destination ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(24, "mat-panel-description");
                i0__namespace.ɵɵtext(25, " Type the country name ");
                i0__namespace.ɵɵelementStart(26, "mat-icon");
                i0__namespace.ɵɵtext(27, "map");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(28, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(29, "mat-label");
                i0__namespace.ɵɵtext(30, "Country");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(31, "input", 3);
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(32, "mat-action-row");
                i0__namespace.ɵɵelementStart(33, "button", 6);
                i0__namespace.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener() { return ctx.prevStep(); });
                i0__namespace.ɵɵtext(34, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(35, "button", 5);
                i0__namespace.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener() { return ctx.nextStep(); });
                i0__namespace.ɵɵtext(36, "Next");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(37, "mat-expansion-panel", 1);
                i0__namespace.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener() { return ctx.setStep(2); });
                i0__namespace.ɵɵelementStart(38, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(39, "mat-panel-title");
                i0__namespace.ɵɵtext(40, " Day of the trip ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(41, "mat-panel-description");
                i0__namespace.ɵɵtext(42, " Inform the date you wish to travel ");
                i0__namespace.ɵɵelementStart(43, "mat-icon");
                i0__namespace.ɵɵtext(44, "date_range");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(45, "mat-form-field", 2);
                i0__namespace.ɵɵelementStart(46, "mat-label");
                i0__namespace.ɵɵtext(47, "Date");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(48, "input", 7);
                i0__namespace.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener() { i0__namespace.ɵɵrestoreView(_r1_1); var _r0 = i0__namespace.ɵɵreference(50); return _r0.open(); });
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelement(49, "mat-datepicker", null, 8);
                i0__namespace.ɵɵelementStart(51, "mat-action-row");
                i0__namespace.ɵɵelementStart(52, "button", 6);
                i0__namespace.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener() { return ctx.prevStep(); });
                i0__namespace.ɵɵtext(53, "Previous");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(54, "button", 5);
                i0__namespace.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener() { return ctx.nextStep(); });
                i0__namespace.ɵɵtext(55, "End");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0__namespace.ɵɵreference(50);
                i0__namespace.ɵɵadvance(1);
                i0__namespace.ɵɵproperty("expanded", ctx.step === 0);
                i0__namespace.ɵɵadvance(19);
                i0__namespace.ɵɵproperty("expanded", ctx.step === 1);
                i0__namespace.ɵɵadvance(17);
                i0__namespace.ɵɵproperty("expanded", ctx.step === 2);
                i0__namespace.ɵɵadvance(11);
                i0__namespace.ɵɵproperty("matDatepicker", _r0);
            }
        }, directives: [i1__namespace$1.MatAccordion, i1__namespace$1.MatExpansionPanel, i1__namespace$1.MatExpansionPanelHeader, i1__namespace$1.MatExpansionPanelTitle, i1__namespace$1.MatExpansionPanelDescription, i3__namespace.MatIcon, i4__namespace.MatFormField, i4__namespace.MatLabel, i5__namespace.MatInput, i1__namespace$1.MatExpansionPanelActionRow, i1__namespace.MatButton, i6__namespace.MatDatepickerInput, i6__namespace.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExpansionStepsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'expansion-steps-example',
                        templateUrl: 'expansion-steps-example.html',
                        styleUrls: ['expansion-steps-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
     */
    var ExpansionHarnessExample = /** @class */ (function () {
        function ExpansionHarnessExample() {
        }
        return ExpansionHarnessExample;
    }());
    ExpansionHarnessExample.ɵfac = function ExpansionHarnessExample_Factory(t) { return new (t || ExpansionHarnessExample)(); };
    ExpansionHarnessExample.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: ExpansionHarnessExample, selectors: [["expansion-harness-example"]], decls: 7, vars: 0, template: function ExpansionHarnessExample_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "mat-accordion");
                i0__namespace.ɵɵelementStart(1, "mat-expansion-panel");
                i0__namespace.ɵɵelementStart(2, "mat-expansion-panel-header");
                i0__namespace.ɵɵelementStart(3, "mat-panel-title");
                i0__namespace.ɵɵtext(4, " Welcome ");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementStart(5, "p");
                i0__namespace.ɵɵtext(6, "I am the content!");
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
                i0__namespace.ɵɵelementEnd();
            }
        }, directives: [i1__namespace$1.MatAccordion, i1__namespace$1.MatExpansionPanel, i1__namespace$1.MatExpansionPanelHeader, i1__namespace$1.MatExpansionPanelTitle], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExpansionHarnessExample, [{
                type: i0.Component,
                args: [{
                        selector: 'expansion-harness-example',
                        templateUrl: 'expansion-harness-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        ExpansionExpandCollapseAllExample,
        ExpansionHarnessExample,
        ExpansionOverviewExample,
        ExpansionStepsExample,
    ];
    var ExpansionExamplesModule = /** @class */ (function () {
        function ExpansionExamplesModule() {
        }
        return ExpansionExamplesModule;
    }());
    ExpansionExamplesModule.ɵfac = function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); };
    ExpansionExamplesModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
    ExpansionExamplesModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ imports: [[
                i1$1.MatButtonModule,
                i6.MatDatepickerModule,
                core.MatNativeDateModule,
                i1.MatExpansionModule,
                i3.MatIconModule,
                i5.MatInputModule,
            ]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ExpansionExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1$1.MatButtonModule,
                            i6.MatDatepickerModule,
                            core.MatNativeDateModule,
                            i1.MatExpansionModule,
                            i3.MatIconModule,
                            i5.MatInputModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
                ExpansionHarnessExample,
                ExpansionOverviewExample,
                ExpansionStepsExample], imports: [i1$1.MatButtonModule,
                i6.MatDatepickerModule,
                core.MatNativeDateModule,
                i1.MatExpansionModule,
                i3.MatIconModule,
                i5.MatInputModule], exports: [ExpansionExpandCollapseAllExample,
                ExpansionHarnessExample,
                ExpansionOverviewExample,
                ExpansionStepsExample] });
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ExpansionExamplesModule = ExpansionExamplesModule;
    exports.ExpansionExpandCollapseAllExample = ExpansionExpandCollapseAllExample;
    exports.ExpansionHarnessExample = ExpansionHarnessExample;
    exports.ExpansionOverviewExample = ExpansionOverviewExample;
    exports.ExpansionStepsExample = ExpansionStepsExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-expansion.umd.js.map
