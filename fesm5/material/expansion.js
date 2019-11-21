import { Component, ViewChild, ɵɵdefineComponent, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵtext, ɵɵelementEnd, ɵɵelement, ɵɵrestoreView, ɵɵreference, ɵɵadvance, ɵɵproperty, ɵsetClassMetadata, ɵɵtextInterpolate1, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDatepickerInput, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelActionRow, MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';

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
        } }, decls: 40, vars: 1, consts: [[1, "example-action-buttons"], ["mat-button", "", 3, "click"], ["multi", "", 1, "example-headers-align"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["disabled", ""], ["matInput", "", "placeholder", "Country"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionExpandCollapseAllExample_Template(rf, ctx) { if (rf & 1) {
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
            ɵɵelement(15, "input", 3);
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-form-field");
            ɵɵelement(17, "input", 4);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(18, "mat-expansion-panel", 5);
            ɵɵelementStart(19, "mat-expansion-panel-header");
            ɵɵelementStart(20, "mat-panel-title");
            ɵɵtext(21, " Destination ");
            ɵɵelementEnd();
            ɵɵelementStart(22, "mat-panel-description");
            ɵɵtext(23, " Type the country name ");
            ɵɵelementStart(24, "mat-icon");
            ɵɵtext(25, "map");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(26, "mat-form-field");
            ɵɵelement(27, "input", 6);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(28, "mat-expansion-panel");
            ɵɵelementStart(29, "mat-expansion-panel-header");
            ɵɵelementStart(30, "mat-panel-title");
            ɵɵtext(31, " Day of the trip ");
            ɵɵelementEnd();
            ɵɵelementStart(32, "mat-panel-description");
            ɵɵtext(33, " Inform the date you wish to travel ");
            ɵɵelementStart(34, "mat-icon");
            ɵɵtext(35, "date_range");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(36, "mat-form-field");
            ɵɵelementStart(37, "input", 7);
            ɵɵlistener("focus", function ExpansionExpandCollapseAllExample_Template_input_focus_37_listener($event) { ɵɵrestoreView(_r1); var _r0 = ɵɵreference(39); return _r0.open(); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(38, "mat-datepicker", null, 8);
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r0 = ɵɵreference(39);
            ɵɵadvance(37);
            ɵɵproperty("matDatepicker", _r0);
        } }, directives: [MatButton, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIcon, MatFormField, MatInput, MatDatepickerInput, MatDatepicker], styles: [".example-action-buttons[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}"] });
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
    ExpansionOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ExpansionOverviewExample, selectors: [["expansion-overview-example"]], decls: 19, vars: 1, consts: [["matInput", "", "placeholder", "First name"], ["matInput", "", "placeholder", "Age"], [3, "opened", "closed"]], template: function ExpansionOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
            ɵɵelement(8, "input", 0);
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field");
            ɵɵelement(10, "input", 1);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-expansion-panel", 2);
            ɵɵlistener("opened", function ExpansionOverviewExample_Template_mat_expansion_panel_opened_11_listener($event) { return ctx.panelOpenState = true; });
            ɵɵlistener("closed", function ExpansionOverviewExample_Template_mat_expansion_panel_closed_11_listener($event) { return ctx.panelOpenState = false; });
            ɵɵelementStart(12, "mat-expansion-panel-header");
            ɵɵelementStart(13, "mat-panel-title");
            ɵɵtext(14, " Self aware panel ");
            ɵɵelementEnd();
            ɵɵelementStart(15, "mat-panel-description");
            ɵɵtext(16);
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(17, "p");
            ɵɵtext(18, "I'm visible because I am open");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(16);
            ɵɵtextInterpolate1(" Currently I am ", ctx.panelOpenState ? "open" : "closed", " ");
        } }, directives: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatFormField, MatInput], styles: [""] });
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
    ExpansionStepsExample.ɵcmp = ɵɵdefineComponent({ type: ExpansionStepsExample, selectors: [["expansion-steps-example"]], decls: 48, vars: 4, consts: [[1, "example-headers-align"], ["hideToggle", "", 3, "expanded", "opened"], ["matInput", "", "placeholder", "First name"], ["matInput", "", "type", "number", "min", "1", "placeholder", "Age"], ["mat-button", "", "color", "primary", 3, "click"], ["matInput", "", "placeholder", "Country"], ["mat-button", "", "color", "warn", 3, "click"], ["matInput", "", "placeholder", "Date", "readonly", "", 3, "matDatepicker", "focus"], ["picker", ""]], template: function ExpansionStepsExample_Template(rf, ctx) { if (rf & 1) {
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
            ɵɵelement(10, "input", 2);
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-form-field");
            ɵɵelement(12, "input", 3);
            ɵɵelementEnd();
            ɵɵelementStart(13, "mat-action-row");
            ɵɵelementStart(14, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_14_listener($event) { return ctx.nextStep(); });
            ɵɵtext(15, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(16, "mat-expansion-panel", 1);
            ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_16_listener($event) { return ctx.setStep(1); });
            ɵɵelementStart(17, "mat-expansion-panel-header");
            ɵɵelementStart(18, "mat-panel-title");
            ɵɵtext(19, " Destination ");
            ɵɵelementEnd();
            ɵɵelementStart(20, "mat-panel-description");
            ɵɵtext(21, " Type the country name ");
            ɵɵelementStart(22, "mat-icon");
            ɵɵtext(23, "map");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(24, "mat-form-field");
            ɵɵelement(25, "input", 5);
            ɵɵelementEnd();
            ɵɵelementStart(26, "mat-action-row");
            ɵɵelementStart(27, "button", 6);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_27_listener($event) { return ctx.prevStep(); });
            ɵɵtext(28, "Previous");
            ɵɵelementEnd();
            ɵɵelementStart(29, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_29_listener($event) { return ctx.nextStep(); });
            ɵɵtext(30, "Next");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(31, "mat-expansion-panel", 1);
            ɵɵlistener("opened", function ExpansionStepsExample_Template_mat_expansion_panel_opened_31_listener($event) { return ctx.setStep(2); });
            ɵɵelementStart(32, "mat-expansion-panel-header");
            ɵɵelementStart(33, "mat-panel-title");
            ɵɵtext(34, " Day of the trip ");
            ɵɵelementEnd();
            ɵɵelementStart(35, "mat-panel-description");
            ɵɵtext(36, " Inform the date you wish to travel ");
            ɵɵelementStart(37, "mat-icon");
            ɵɵtext(38, "date_range");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(39, "mat-form-field");
            ɵɵelementStart(40, "input", 7);
            ɵɵlistener("focus", function ExpansionStepsExample_Template_input_focus_40_listener($event) { ɵɵrestoreView(_r3); var _r2 = ɵɵreference(42); return _r2.open(); });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelement(41, "mat-datepicker", null, 8);
            ɵɵelementStart(43, "mat-action-row");
            ɵɵelementStart(44, "button", 6);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_44_listener($event) { return ctx.prevStep(); });
            ɵɵtext(45, "Previous");
            ɵɵelementEnd();
            ɵɵelementStart(46, "button", 4);
            ɵɵlistener("click", function ExpansionStepsExample_Template_button_click_46_listener($event) { return ctx.nextStep(); });
            ɵɵtext(47, "End");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            var _r2 = ɵɵreference(42);
            ɵɵadvance(1);
            ɵɵproperty("expanded", ctx.step === 0);
            ɵɵadvance(15);
            ɵɵproperty("expanded", ctx.step === 1);
            ɵɵadvance(15);
            ɵɵproperty("expanded", ctx.step === 2);
            ɵɵadvance(9);
            ɵɵproperty("matDatepicker", _r2);
        } }, directives: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIcon, MatFormField, MatInput, MatExpansionPanelActionRow, MatButton, MatDatepickerInput, MatDatepicker], styles: [".example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0;\n}\n\n.example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
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
        MatInputModule] }); })();
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
            }]
    }], null, null); })();

export { ExpansionExamplesModule, ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample };
//# sourceMappingURL=expansion.js.map
