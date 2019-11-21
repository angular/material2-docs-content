(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/button'), require('@angular/material/datepicker'), require('@angular/material/expansion'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/expansion', ['exports', '@angular/core', '@angular/material/button', '@angular/material/datepicker', '@angular/material/expansion', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.expansion = {}), global.ng.core, global.ng.material.button, global.ng.material.datepicker, global.ng.material.expansion, global.ng.material.icon, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i0, i1, i6, i1$1, i3, i5, i4) { 'use strict';

    /**
     * @title Accordion with expand/collapse all toggles
     */
    var ExpansionExpandCollapseAllExample = /** @class */ (function () {
        function ExpansionExpandCollapseAllExample() {
        }
        ExpansionExpandCollapseAllExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'expansion-toggle-all-example',
                        templateUrl: 'expansion-expand-collapse-all-example.html',
                        styleUrls: ['expansion-expand-collapse-all-example.css'],
                    },] },
        ];
        ExpansionExpandCollapseAllExample.propDecorators = {
            accordion: [{ type: i0.ViewChild, args: [i1$1.MatAccordion,] }]
        };
        ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
        ExpansionExpandCollapseAllExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-toggle-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵviewQuery(i1$1.MatAccordion, true);
            } if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
            } }, decls: 40, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["disabled", ""], ["matInput", "", "placeholder", "Country"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
                var _r1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener($event) { return ctx.accordion.openAll(); });
                i0.ɵɵtext(2, "Expand All");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 1);
                i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener($event) { return ctx.accordion.closeAll(); });
                i0.ɵɵtext(4, "Collapse All");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-accordion", 2);
                i0.ɵɵelementStart(6, "mat-expansion-panel");
                i0.ɵɵelementStart(7, "mat-expansion-panel-header");
                i0.ɵɵelementStart(8, "mat-panel-title");
                i0.ɵɵtext(9, " Personal data ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-panel-description");
                i0.ɵɵtext(11, " Type your name and age ");
                i0.ɵɵelementStart(12, "mat-icon");
                i0.ɵɵtext(13, "account_circle");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field");
                i0.ɵɵelement(15, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-form-field");
                i0.ɵɵelement(17, "input", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mat-expansion-panel", 5);
                i0.ɵɵelementStart(19, "mat-expansion-panel-header");
                i0.ɵɵelementStart(20, "mat-panel-title");
                i0.ɵɵtext(21, " Destination ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "mat-panel-description");
                i0.ɵɵtext(23, " Type the country name ");
                i0.ɵɵelementStart(24, "mat-icon");
                i0.ɵɵtext(25, "map");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-form-field");
                i0.ɵɵelement(27, "input", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "mat-expansion-panel");
                i0.ɵɵelementStart(29, "mat-expansion-panel-header");
                i0.ɵɵelementStart(30, "mat-panel-title");
                i0.ɵɵtext(31, " Day of the trip ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(32, "mat-panel-description");
                i0.ɵɵtext(33, " Inform the date you wish to travel ");
                i0.ɵɵelementStart(34, "mat-icon");
                i0.ɵɵtext(35, "date_range");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(36, "mat-form-field");
                i0.ɵɵelementStart(37, "input", 7);
                i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_37_listener($event) { i0.ɵɵrestoreView(_r1); var _r0 = i0.ɵɵreference(39); return _r0.open(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(38, "mat-datepicker", null, 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r0 = i0.ɵɵreference(39);
                i0.ɵɵadvance(37);
                i0.ɵɵproperty("matDatepicker", _r0);
            } }, directives: [i1.MatButton, i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}"] });
        return ExpansionExpandCollapseAllExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
            type: i0.Component,
            args: [{
                    selector: 'expansion-toggle-all-example',
                    templateUrl: 'expansion-expand-collapse-all-example.html',
                    styleUrls: ['expansion-expand-collapse-all-example.css'],
                }]
        }], null, { accordion: [{
                type: i0.ViewChild,
                args: [i1$1.MatAccordion]
            }] }); })();

    /**
     * @title Basic expansion panel
     */
    var ExpansionOverviewExample = /** @class */ (function () {
        function ExpansionOverviewExample() {
            this.panelOpenState = false;
        }
        ExpansionOverviewExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'expansion-overview-example',
                        templateUrl: 'expansion-overview-example.html',
                        styleUrls: ['expansion-overview-example.css'],
                    },] },
        ];
        ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
        ExpansionOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 19, vars: 1, consts: [["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Age"], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-accordion");
                i0.ɵɵelementStart(1, "mat-expansion-panel");
                i0.ɵɵelementStart(2, "mat-expansion-panel-header");
                i0.ɵɵelementStart(3, "mat-panel-title");
                i0.ɵɵtext(4, " Personal data ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-panel-description");
                i0.ɵɵtext(6, " Type your name and age ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-form-field");
                i0.ɵɵelement(8, "input", 0);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field");
                i0.ɵɵelement(10, "input", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-expansion-panel", 2);
                i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_11_listener($event) { return ctx.panelOpenState = true; });
                i0.ɵɵlistener("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_11_listener($event) { return ctx.panelOpenState = false; });
                i0.ɵɵelementStart(12, "mat-expansion-panel-header");
                i0.ɵɵelementStart(13, "mat-panel-title");
                i0.ɵɵtext(14, " Self aware panel ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "mat-panel-description");
                i0.ɵɵtext(16);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "p");
                i0.ɵɵtext(18, "I'm visible because I am open");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵadvance(16);
                i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
            } }, directives: [i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription, i4.MatFormField, i5.MatInput], styles: [""] });
        return ExpansionOverviewExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionOverviewExample, [{
            type: i0.Component,
            args: [{
                    selector: 'expansion-overview-example',
                    templateUrl: 'expansion-overview-example.html',
                    styleUrls: ['expansion-overview-example.css'],
                }]
        }], null, null); })();

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
        ExpansionStepsExample.decorators = [
            { type: i0.Component, args: [{
                        selector: 'expansion-steps-example',
                        templateUrl: 'expansion-steps-example.html',
                        styleUrls: ['expansion-steps-example.css'],
                    },] },
        ];
        ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
        ExpansionStepsExample.ɵcmp = i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 48, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
                var _r3 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-accordion", 0);
                i0.ɵɵelementStart(1, "mat-expansion-panel", 1);
                i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener($event) { return ctx.setStep(0); });
                i0.ɵɵelementStart(2, "mat-expansion-panel-header");
                i0.ɵɵelementStart(3, "mat-panel-title");
                i0.ɵɵtext(4, " Personal data ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-panel-description");
                i0.ɵɵtext(6, " Type your name and age ");
                i0.ɵɵelementStart(7, "mat-icon");
                i0.ɵɵtext(8, "account_circle");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field");
                i0.ɵɵelement(10, "input", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-form-field");
                i0.ɵɵelement(12, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "mat-action-row");
                i0.ɵɵelementStart(14, "button", 4);
                i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_14_listener($event) { return ctx.nextStep(); });
                i0.ɵɵtext(15, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "mat-expansion-panel", 1);
                i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_16_listener($event) { return ctx.setStep(1); });
                i0.ɵɵelementStart(17, "mat-expansion-panel-header");
                i0.ɵɵelementStart(18, "mat-panel-title");
                i0.ɵɵtext(19, " Destination ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "mat-panel-description");
                i0.ɵɵtext(21, " Type the country name ");
                i0.ɵɵelementStart(22, "mat-icon");
                i0.ɵɵtext(23, "map");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "mat-form-field");
                i0.ɵɵelement(25, "input", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "mat-action-row");
                i0.ɵɵelementStart(27, "button", 6);
                i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_27_listener($event) { return ctx.prevStep(); });
                i0.ɵɵtext(28, "Previous");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "button", 4);
                i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_29_listener($event) { return ctx.nextStep(); });
                i0.ɵɵtext(30, "Next");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "mat-expansion-panel", 1);
                i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_31_listener($event) { return ctx.setStep(2); });
                i0.ɵɵelementStart(32, "mat-expansion-panel-header");
                i0.ɵɵelementStart(33, "mat-panel-title");
                i0.ɵɵtext(34, " Day of the trip ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "mat-panel-description");
                i0.ɵɵtext(36, " Inform the date you wish to travel ");
                i0.ɵɵelementStart(37, "mat-icon");
                i0.ɵɵtext(38, "date_range");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "mat-form-field");
                i0.ɵɵelementStart(40, "input", 7);
                i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_40_listener($event) { i0.ɵɵrestoreView(_r3); var _r2 = i0.ɵɵreference(42); return _r2.open(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(41, "mat-datepicker", null, 8);
                i0.ɵɵelementStart(43, "mat-action-row");
                i0.ɵɵelementStart(44, "button", 6);
                i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_44_listener($event) { return ctx.prevStep(); });
                i0.ɵɵtext(45, "Previous");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(46, "button", 4);
                i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_46_listener($event) { return ctx.nextStep(); });
                i0.ɵɵtext(47, "End");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                var _r2 = i0.ɵɵreference(42);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("expanded", ctx.step === 0);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("expanded", ctx.step === 1);
                i0.ɵɵadvance(15);
                i0.ɵɵproperty("expanded", ctx.step === 2);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("matDatepicker", _r2);
            } }, directives: [i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i5.MatInput, i1$1.MatExpansionPanelActionRow, i1.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
        return ExpansionStepsExample;
    }());
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionStepsExample, [{
            type: i0.Component,
            args: [{
                    selector: 'expansion-steps-example',
                    templateUrl: 'expansion-steps-example.html',
                    styleUrls: ['expansion-steps-example.css'],
                }]
        }], null, null); })();

    var EXAMPLES = [
        ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample,
    ];
    var ExpansionExamplesModule = /** @class */ (function () {
        function ExpansionExamplesModule() {
        }
        ExpansionExamplesModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            i1.MatButtonModule,
                            i6.MatDatepickerModule,
                            i1$1.MatExpansionModule,
                            i3.MatIconModule,
                            i5.MatInputModule,
                        ],
                        declarations: EXAMPLES,
                    },] },
        ];
        ExpansionExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
        ExpansionExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); }, imports: [[
                    i1.MatButtonModule,
                    i6.MatDatepickerModule,
                    i1$1.MatExpansionModule,
                    i3.MatIconModule,
                    i5.MatInputModule,
                ]] });
        return ExpansionExamplesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
            ExpansionOverviewExample,
            ExpansionStepsExample], imports: [i1.MatButtonModule,
            i6.MatDatepickerModule,
            i1$1.MatExpansionModule,
            i3.MatIconModule,
            i5.MatInputModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExamplesModule, [{
            type: i0.NgModule,
            args: [{
                    imports: [
                        i1.MatButtonModule,
                        i6.MatDatepickerModule,
                        i1$1.MatExpansionModule,
                        i3.MatIconModule,
                        i5.MatInputModule,
                    ],
                    declarations: EXAMPLES,
                }]
        }], null, null); })();

    exports.ExpansionExamplesModule = ExpansionExamplesModule;
    exports.ExpansionExpandCollapseAllExample = ExpansionExpandCollapseAllExample;
    exports.ExpansionOverviewExample = ExpansionOverviewExample;
    exports.ExpansionStepsExample = ExpansionStepsExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-expansion.umd.js.map
