import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i6 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import * as i1$1 from '@angular/material/expansion';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i4 from '@angular/material/form-field';

/**
 * @title Accordion with expand/collapse all toggles
 */
class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.ɵfac = function ExpansionExpandCollapseAllExample_Factory(t) { return new (t || ExpansionExpandCollapseAllExample)(); };
ExpansionExpandCollapseAllExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionExpandCollapseAllExample, selectors: [["expansion-expand-collapse-all-example"]], viewQuery: function ExpansionExpandCollapseAllExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(MatAccordion, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.accordion = _t.first);
    } }, decls: 48, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["disabled", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_1_listener() { return ctx.accordion.openAll(); });
        i0.ɵɵtext(2, "Expand All");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 1);
        i0.ɵɵlistener("click", function ExpansionExpandCollapseAllExample_Template_button_click_3_listener() { return ctx.accordion.closeAll(); });
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
        i0.ɵɵelementStart(15, "mat-label");
        i0.ɵɵtext(16, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(17, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "mat-form-field");
        i0.ɵɵelementStart(19, "mat-label");
        i0.ɵɵtext(20, "Age");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(21, "input", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "mat-expansion-panel", 5);
        i0.ɵɵelementStart(23, "mat-expansion-panel-header");
        i0.ɵɵelementStart(24, "mat-panel-title");
        i0.ɵɵtext(25, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-panel-description");
        i0.ɵɵtext(27, " Type the country name ");
        i0.ɵɵelementStart(28, "mat-icon");
        i0.ɵɵtext(29, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "mat-form-field");
        i0.ɵɵelementStart(31, "mat-label");
        i0.ɵɵtext(32, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(33, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(34, "mat-expansion-panel");
        i0.ɵɵelementStart(35, "mat-expansion-panel-header");
        i0.ɵɵelementStart(36, "mat-panel-title");
        i0.ɵɵtext(37, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(38, "mat-panel-description");
        i0.ɵɵtext(39, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(40, "mat-icon");
        i0.ɵɵtext(41, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(42, "mat-form-field");
        i0.ɵɵelementStart(43, "mat-label");
        i0.ɵɵtext(44, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "input", 6);
        i0.ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_45_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(47); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(46, "mat-datepicker", null, 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(47);
        i0.ɵɵadvance(45);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1.MatButton, i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i4.MatLabel, i5.MatInput, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionExpandCollapseAllExample, [{
        type: Component,
        args: [{
                selector: 'expansion-expand-collapse-all-example',
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
class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
}
ExpansionOverviewExample.ɵfac = function ExpansionOverviewExample_Factory(t) { return new (t || ExpansionOverviewExample)(); };
ExpansionOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 17, vars: 1, consts: [["hideToggle", ""], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-accordion");
        i0.ɵɵelementStart(1, "mat-expansion-panel", 0);
        i0.ɵɵelementStart(2, "mat-expansion-panel-header");
        i0.ɵɵelementStart(3, "mat-panel-title");
        i0.ɵɵtext(4, " This is the expansion title ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "mat-panel-description");
        i0.ɵɵtext(6, " This is a summary of the content ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "p");
        i0.ɵɵtext(8, "This is the primary content of the panel.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_9_listener() { return ctx.panelOpenState = true; })("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_9_listener() { return ctx.panelOpenState = false; });
        i0.ɵɵelementStart(10, "mat-expansion-panel-header");
        i0.ɵɵelementStart(11, "mat-panel-title");
        i0.ɵɵtext(12, " Self aware panel ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-panel-description");
        i0.ɵɵtext(14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "p");
        i0.ɵɵtext(16, "I'm visible because I am open");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(14);
        i0.ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
    } }, directives: [i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionOverviewExample, [{
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
class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.ɵfac = function ExpansionStepsExample_Factory(t) { return new (t || ExpansionStepsExample)(); };
ExpansionStepsExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 56, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", ""], ["matInput", "", "type", "number", "min", "1"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
        const _r1 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-accordion", 0);
        i0.ɵɵelementStart(1, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_1_listener() { return ctx.setStep(0); });
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
        i0.ɵɵelementStart(10, "mat-label");
        i0.ɵɵtext(11, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(12, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-form-field");
        i0.ɵɵelementStart(14, "mat-label");
        i0.ɵɵtext(15, "Age");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(16, "input", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-action-row");
        i0.ɵɵelementStart(18, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_18_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(19, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(20, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_20_listener() { return ctx.setStep(1); });
        i0.ɵɵelementStart(21, "mat-expansion-panel-header");
        i0.ɵɵelementStart(22, "mat-panel-title");
        i0.ɵɵtext(23, " Destination ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "mat-panel-description");
        i0.ɵɵtext(25, " Type the country name ");
        i0.ɵɵelementStart(26, "mat-icon");
        i0.ɵɵtext(27, "map");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "mat-form-field");
        i0.ɵɵelementStart(29, "mat-label");
        i0.ɵɵtext(30, "Country");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "input", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "mat-action-row");
        i0.ɵɵelementStart(33, "button", 5);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_33_listener() { return ctx.prevStep(); });
        i0.ɵɵtext(34, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_35_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(36, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-expansion-panel", 1);
        i0.ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_37_listener() { return ctx.setStep(2); });
        i0.ɵɵelementStart(38, "mat-expansion-panel-header");
        i0.ɵɵelementStart(39, "mat-panel-title");
        i0.ɵɵtext(40, " Day of the trip ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "mat-panel-description");
        i0.ɵɵtext(42, " Inform the date you wish to travel ");
        i0.ɵɵelementStart(43, "mat-icon");
        i0.ɵɵtext(44, "date_range");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(45, "mat-form-field");
        i0.ɵɵelementStart(46, "mat-label");
        i0.ɵɵtext(47, "Date");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(48, "input", 6);
        i0.ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_48_listener() { i0.ɵɵrestoreView(_r1); const _r0 = i0.ɵɵreference(50); return _r0.open(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(49, "mat-datepicker", null, 7);
        i0.ɵɵelementStart(51, "mat-action-row");
        i0.ɵɵelementStart(52, "button", 5);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_52_listener() { return ctx.prevStep(); });
        i0.ɵɵtext(53, "Previous");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(54, "button", 4);
        i0.ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_54_listener() { return ctx.nextStep(); });
        i0.ɵɵtext(55, "End");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(50);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("expanded", ctx.step === 0);
        i0.ɵɵadvance(19);
        i0.ɵɵproperty("expanded", ctx.step === 1);
        i0.ɵɵadvance(17);
        i0.ɵɵproperty("expanded", ctx.step === 2);
        i0.ɵɵadvance(11);
        i0.ɵɵproperty("matDatepicker", _r0);
    } }, directives: [i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle, i1$1.MatExpansionPanelDescription, i3.MatIcon, i4.MatFormField, i4.MatLabel, i5.MatInput, i1$1.MatExpansionPanelActionRow, i1.MatButton, i6.MatDatepickerInput, i6.MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionStepsExample, [{
        type: Component,
        args: [{
                selector: 'expansion-steps-example',
                templateUrl: 'expansion-steps-example.html',
                styleUrls: ['expansion-steps-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
class ExpansionHarnessExample {
}
ExpansionHarnessExample.ɵfac = function ExpansionHarnessExample_Factory(t) { return new (t || ExpansionHarnessExample)(); };
ExpansionHarnessExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ExpansionHarnessExample, selectors: [["expansion-harness-example"]], decls: 7, vars: 0, template: function ExpansionHarnessExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-accordion");
        i0.ɵɵelementStart(1, "mat-expansion-panel");
        i0.ɵɵelementStart(2, "mat-expansion-panel-header");
        i0.ɵɵelementStart(3, "mat-panel-title");
        i0.ɵɵtext(4, " Welcome ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "p");
        i0.ɵɵtext(6, "I am the content!");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1$1.MatAccordion, i1$1.MatExpansionPanel, i1$1.MatExpansionPanelHeader, i1$1.MatExpansionPanelTitle], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionHarnessExample, [{
        type: Component,
        args: [{
                selector: 'expansion-harness-example',
                templateUrl: 'expansion-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionHarnessExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
class ExpansionExamplesModule {
}
ExpansionExamplesModule.ɵfac = function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); };
ExpansionExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
ExpansionExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatExpansionModule,
            MatIconModule,
            MatInputModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExpansionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatExpansionModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
        ExpansionHarnessExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionHarnessExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ExpansionExamplesModule, ExpansionExpandCollapseAllExample, ExpansionHarnessExample, ExpansionOverviewExample, ExpansionStepsExample };
//# sourceMappingURL=expansion.js.map
