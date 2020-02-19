import { Component, ViewChild, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDatepickerInput, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelActionRow, MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';

/**
 * @title Accordion with expand/collapse all toggles
 */
var ExpansionExpandCollapseAllExample = /** @class */ (function () {
    function ExpansionExpandCollapseAllExample() {
    }
    ExpansionExpandCollapseAllExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-toggle-all-example',
                    templateUrl: 'expansion-expand-collapse-all-example.html',
                    styleUrls: ['expansion-expand-collapse-all-example.css'],
                },] },
    ];
    ExpansionExpandCollapseAllExample.propDecorators = {
        accordion: [{ type: ViewChild, args: [MatAccordion,] }]
    };
    ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
    ExpansionExpandCollapseAllExample.ɵcmp = ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-toggle-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(MatAccordion, true);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.accordion = _t.first);
        } }, decls: 48, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["disabled", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
            var _r1 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "div", 0);
            ɵɵelementStart(1, "button", 1);
            ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener($event) { return ctx.accordion.openAll(); });
            ɵɵtext(2, "Expand All");
            ɵɵelementEnd();
            ɵɵelementStart(3, "button", 1);
            ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener($event) { return ctx.accordion.closeAll(); });
            ɵɵtext(4, "Collapse All");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-accordion", 2);
            ɵɵelementStart(6, "mat-expansion-panel");
            ɵɵelementStart(7, "mat-expansion-panel-header");
            ɵɵelementStart(8, "mat-panel-title");
            ɵɵtext(9, " Personal data ");
            ɵɵelementEnd();
            ɵɵelementStart(10, "mat-panel-description");
            ɵɵtext(11, " Type your name and age ");
            ɵɵelementStart(12, "mat-icon");
            ɵɵtext(13, "account_circle");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(14, "mat-form-field");
            ɵɵelementStart(15, "mat-label");
            ɵɵtext(16, "First name");
            ɵɵelementEnd();
            ɵɵelement(17, "input", 3);
            ɵɵelementEnd();
            ɵɵelementStart(18, "mat-form-field");
            ɵɵelementStart(19, "mat-label");
            ɵɵtext(20, "Age");
            ɵɵelementEnd();
            ɵɵelement(21, "input", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-expansion-panel", 5);
            ɵɵelementStart(23, "mat-expansion-panel-header");
            ɵɵelementStart(24, "mat-panel-title");
            ɵɵtext(25, " Destination ");
            ɵɵelementEnd();
            ɵɵelementStart(26, "mat-panel-description");
            ɵɵtext(27, " Type the country name ");
            ɵɵelementStart(28, "mat-icon");
            ɵɵtext(29, "map");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(30, "mat-form-field");
            ɵɵelementStart(31, "mat-label");
            ɵɵtext(32, "Country");
            ɵɵelementEnd();
            ɵɵelement(33, "input", 3);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(34, "mat-expansion-panel");
            ɵɵelementStart(35, "mat-expansion-panel-header");
            ɵɵelementStart(36, "mat-panel-title");
            ɵɵtext(37, " Day of the trip ");
            ɵɵelementEnd();
            ɵɵelementStart(38, "mat-panel-description");
            ɵɵtext(39, " Inform the date you wish to travel ");
            ɵɵelementStart(40, "mat-icon");
            ɵɵtext(41, "date_range");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(42, "mat-form-field");
            ɵɵelementStart(43, "mat-label");
            ɵɵtext(44, "Date");
            ɵɵelementEnd();
            ɵɵelementStart(45, "input", 6);
            ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_45_listener($event) { ɵɵrestoreView(_r1); var _r0 = ɵɵreference(47); return _r0.open(); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(46, "mat-datepicker", null, 7);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = ɵɵreference(47);
            ɵɵadvance(45);
            ɵɵproperty("matDatepicker", _r0);
        } }, directives: [MatButton, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIcon, MatFormField, MatLabel, MatInput, MatDatepickerInput, MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionExpandCollapseAllExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-toggle-all-example',
                templateUrl: 'expansion-expand-collapse-all-example.html',
                styleUrls: ['expansion-expand-collapse-all-example.css'],
            }]
    }], null, { accordion: [{
            type: ViewChild,
            args: [MatAccordion]
        }] }); })();

/**
 * @title Basic expansion panel
 */
var ExpansionOverviewExample = /** @class */ (function () {
    function ExpansionOverviewExample() {
        this.panelOpenState = false;
    }
    ExpansionOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'expansion-overview-example',
                    templateUrl: 'expansion-overview-example.html',
                    styleUrls: ['expansion-overview-example.css'],
                },] },
    ];
    ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
    ExpansionOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 23, vars: 1, consts: [["matInput", ""], ["matInput", "", "type", "number", "min", "1"], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-accordion");
            ɵɵelementStart(1, "mat-expansion-panel");
            ɵɵelementStart(2, "mat-expansion-panel-header");
            ɵɵelementStart(3, "mat-panel-title");
            ɵɵtext(4, " Personal data ");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-panel-description");
            ɵɵtext(6, " Type your name and age ");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-form-field");
            ɵɵelementStart(8, "mat-label");
            ɵɵtext(9, "First name");
            ɵɵelementEnd();
            ɵɵelement(10, "input", 0);
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-form-field");
            ɵɵelementStart(12, "mat-label");
            ɵɵtext(13, "Age");
            ɵɵelementEnd();
            ɵɵelement(14, "input", 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-expansion-panel", 2);
            ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_15_listener($event) { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_15_listener($event) { return ctx.panelOpenState = false; });
            ɵɵelementStart(16, "mat-expansion-panel-header");
            ɵɵelementStart(17, "mat-panel-title");
            ɵɵtext(18, " Self aware panel ");
            ɵɵelementEnd();
            ɵɵelementStart(19, "mat-panel-description");
            ɵɵtext(20);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(21, "p");
            ɵɵtext(22, "I'm visible because I am open");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(20);
            ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
        } }, directives: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatFormField, MatLabel, MatInput], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExpansionOverviewExample, [{
        type: Component,
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
        { type: Component, args: [{
                    selector: 'expansion-steps-example',
                    templateUrl: 'expansion-steps-example.html',
                    styleUrls: ['expansion-steps-example.css'],
                },] },
    ];
    ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
    ExpansionStepsExample.ɵcmp = ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
            var _r3 = ɵɵgetCurrentView();
            ɵɵelementStart(0, "mat-accordion", 0);
            ɵɵelementStart(1, "mat-expansion-panel", 1);
            ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener($event) { return ctx.setStep(0); });
            ɵɵelementStart(2, "mat-expansion-panel-header");
            ɵɵelementStart(3, "mat-panel-title");
            ɵɵtext(4, " Personal data ");
            ɵɵelementEnd();
            ɵɵelementStart(5, "mat-panel-description");
            ɵɵtext(6, " Type your name and age ");
            ɵɵelementStart(7, "mat-icon");
            ɵɵtext(8, "account_circle");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field");
            ɵɵelementStart(10, "mat-label");
            ɵɵtext(11, "First name");
            ɵɵelementEnd();
            ɵɵelement(12, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-form-field");
            ɵɵelementStart(14, "mat-label");
            ɵɵtext(15, "Age");
            ɵɵelementEnd();
            ɵɵelement(16, "input", 3);
            ɵɵelementEnd();
            ɵɵelementStart(17, "mat-action-row");
            ɵɵelementStart(18, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener($event) { return ctx.nextStep(); });
            ɵɵtext(19, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-expansion-panel", 1);
            ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener($event) { return ctx.setStep(1); });
            ɵɵelementStart(21, "mat-expansion-panel-header");
            ɵɵelementStart(22, "mat-panel-title");
            ɵɵtext(23, " Destination ");
            ɵɵelementEnd();
            ɵɵelementStart(24, "mat-panel-description");
            ɵɵtext(25, " Type the country name ");
            ɵɵelementStart(26, "mat-icon");
            ɵɵtext(27, "map");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(28, "mat-form-field");
            ɵɵelementStart(29, "mat-label");
            ɵɵtext(30, "Country");
            ɵɵelementEnd();
            ɵɵelement(31, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(32, "mat-action-row");
            ɵɵelementStart(33, "button", 5);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener($event) { return ctx.prevStep(); });
            ɵɵtext(34, "Previous");
            ɵɵelementEnd();
            ɵɵelementStart(35, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener($event) { return ctx.nextStep(); });
            ɵɵtext(36, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(37, "mat-expansion-panel", 1);
            ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener($event) { return ctx.setStep(2); });
            ɵɵelementStart(38, "mat-expansion-panel-header");
            ɵɵelementStart(39, "mat-panel-title");
            ɵɵtext(40, " Day of the trip ");
            ɵɵelementEnd();
            ɵɵelementStart(41, "mat-panel-description");
            ɵɵtext(42, " Inform the date you wish to travel ");
            ɵɵelementStart(43, "mat-icon");
            ɵɵtext(44, "date_range");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(45, "mat-form-field");
            ɵɵelementStart(46, "mat-label");
            ɵɵtext(47, "Date");
            ɵɵelementEnd();
            ɵɵelementStart(48, "input", 6);
            ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener($event) { ɵɵrestoreView(_r3); var _r2 = ɵɵreference(50); return _r2.open(); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(49, "mat-datepicker", null, 7);
            ɵɵelementStart(51, "mat-action-row");
            ɵɵelementStart(52, "button", 5);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener($event) { return ctx.prevStep(); });
            ɵɵtext(53, "Previous");
            ɵɵelementEnd();
            ɵɵelementStart(54, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener($event) { return ctx.nextStep(); });
            ɵɵtext(55, "End");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(50);
            ɵɵadvance(1);
            ɵɵproperty("expanded", ctx.step === 0);
            ɵɵadvance(19);
            ɵɵproperty("expanded", ctx.step === 1);
            ɵɵadvance(17);
            ɵɵproperty("expanded", ctx.step === 2);
            ɵɵadvance(11);
            ɵɵproperty("matDatepicker", _r2);
        } }, directives: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIcon, MatFormField, MatLabel, MatInput, MatExpansionPanelActionRow, MatButton, MatDatepickerInput, MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
    return ExpansionStepsExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
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
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatDatepickerModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatInputModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    ExpansionExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ExpansionExamplesModule });
    ExpansionExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatDatepickerModule,
                MatExpansionModule,
                MatIconModule,
                MatInputModule,
            ]] });
    return ExpansionExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ExpansionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDatepickerModule,
                    MatExpansionModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

export { ExpansionExamplesModule, ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample };
//# sourceMappingURL=expansion.js.map
