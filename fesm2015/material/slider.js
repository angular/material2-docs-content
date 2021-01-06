import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, Component, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatFormField, MatLabel } from '@angular/material/form-field';

function SliderConfigurableExample_mat_checkbox_24_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 4);
    ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_24_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    ɵɵtext(1, " Auto ticks ");
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_25_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 2);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Tick interval");
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 3);
    ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_25_Template_input_ngModelChange_3_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * @title Configurable slider
 */
class SliderConfigurableExample {
    constructor() {
        this.autoTicks = false;
        this.disabled = false;
        this.invert = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
        this.vertical = false;
        this.tickInterval = 1;
    }
    getSliderTickInterval() {
        if (this.showTicks) {
            return this.autoTicks ? 'auto' : this.tickInterval;
        }
        return 0;
    }
}
SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
SliderConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 42, vars: 20, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "example-result-card"], [1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-card");
        ɵɵelementStart(1, "mat-card-content");
        ɵɵelementStart(2, "h2", 0);
        ɵɵtext(3, "Slider configuration");
        ɵɵelementEnd();
        ɵɵelementStart(4, "section", 1);
        ɵɵelementStart(5, "mat-form-field", 2);
        ɵɵelementStart(6, "mat-label");
        ɵɵtext(7, "Value");
        ɵɵelementEnd();
        ɵɵelementStart(8, "input", 3);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.value = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(9, "mat-form-field", 2);
        ɵɵelementStart(10, "mat-label");
        ɵɵtext(11, "Min value");
        ɵɵelementEnd();
        ɵɵelementStart(12, "input", 3);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.min = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(13, "mat-form-field", 2);
        ɵɵelementStart(14, "mat-label");
        ɵɵtext(15, "Max value");
        ɵɵelementEnd();
        ɵɵelementStart(16, "input", 3);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_16_listener($event) { return ctx.max = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(17, "mat-form-field", 2);
        ɵɵelementStart(18, "mat-label");
        ɵɵtext(19, "Step size");
        ɵɵelementEnd();
        ɵɵelementStart(20, "input", 3);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_20_listener($event) { return ctx.step = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(21, "section", 1);
        ɵɵelementStart(22, "mat-checkbox", 4);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.showTicks = $event; });
        ɵɵtext(23, "Show ticks");
        ɵɵelementEnd();
        ɵɵtemplate(24, SliderConfigurableExample_mat_checkbox_24_Template, 2, 1, "mat-checkbox", 5);
        ɵɵtemplate(25, SliderConfigurableExample_mat_form_field_25_Template, 4, 1, "mat-form-field", 6);
        ɵɵelementEnd();
        ɵɵelementStart(26, "section", 1);
        ɵɵelementStart(27, "mat-checkbox", 4);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.thumbLabel = $event; });
        ɵɵtext(28, "Show thumb label");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(29, "section", 1);
        ɵɵelementStart(30, "mat-checkbox", 4);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_30_listener($event) { return ctx.vertical = $event; });
        ɵɵtext(31, "Vertical");
        ɵɵelementEnd();
        ɵɵelementStart(32, "mat-checkbox", 4);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_32_listener($event) { return ctx.invert = $event; });
        ɵɵtext(33, "Inverted");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(34, "section", 1);
        ɵɵelementStart(35, "mat-checkbox", 4);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_35_listener($event) { return ctx.disabled = $event; });
        ɵɵtext(36, "Disabled");
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(37, "mat-card", 7);
        ɵɵelementStart(38, "mat-card-content");
        ɵɵelementStart(39, "h2");
        ɵɵtext(40, "Result");
        ɵɵelementEnd();
        ɵɵelementStart(41, "mat-slider", 8);
        ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_41_listener($event) { return ctx.value = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(8);
        ɵɵproperty("ngModel", ctx.value);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.min);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.max);
        ɵɵadvance(4);
        ɵɵproperty("ngModel", ctx.step);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.showTicks);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showTicks);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.showTicks && !ctx.autoTicks);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.thumbLabel);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.vertical);
        ɵɵadvance(2);
        ɵɵproperty("ngModel", ctx.invert);
        ɵɵadvance(3);
        ɵɵproperty("ngModel", ctx.disabled);
        ɵɵadvance(6);
        ɵɵproperty("disabled", ctx.disabled)("invert", ctx.invert)("max", ctx.max)("min", ctx.min)("step", ctx.step)("thumbLabel", ctx.thumbLabel)("tickInterval", ctx.getSliderTickInterval())("ngModel", ctx.value)("vertical", ctx.vertical);
    } }, directives: [MatCard, MatCardContent, MatFormField, MatLabel, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, MatCheckbox, NgIf, MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.mat-card[_ngcontent-%COMP%]    + .mat-card[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.example-result-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderConfigurableExample, [{
        type: Component,
        args: [{
                selector: 'slider-configurable-example',
                templateUrl: 'slider-configurable-example.html',
                styleUrls: ['slider-configurable-example.css'],
            }]
    }], null, null); })();

/**
 * @title Slider with custom thumb label formatting.
 */
class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    }
}
SliderFormattingExample.ɵfac = function SliderFormattingExample_Factory(t) { return new (t || SliderFormattingExample)(); };
SliderFormattingExample.ɵcmp = ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "min", "1", "max", "100000", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-slider", 0);
    } if (rf & 2) {
        ɵɵproperty("displayWith", ctx.formatLabel);
    } }, directives: [MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderFormattingExample, [{
        type: Component,
        args: [{
                selector: 'slider-formatting-example',
                templateUrl: 'slider-formatting-example.html',
                styleUrls: ['slider-formatting-example.css'],
            }]
    }], null, null); })();

/**
 * @title Basic slider
 */
class SliderOverviewExample {
}
SliderOverviewExample.ɵfac = function SliderOverviewExample_Factory(t) { return new (t || SliderOverviewExample)(); };
SliderOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SliderOverviewExample, selectors: [["slider-overview-example"]], decls: 1, vars: 0, template: function SliderOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-slider");
    } }, directives: [MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderOverviewExample, [{
        type: Component,
        args: [{
                selector: 'slider-overview-example',
                templateUrl: 'slider-overview-example.html',
                styleUrls: ['slider-overview-example.css'],
            }]
    }], null, null); })();

/**
 * @title Testing with MatSliderHarness
 */
class SliderHarnessExample {
}
SliderHarnessExample.ɵfac = function SliderHarnessExample_Factory(t) { return new (t || SliderHarnessExample)(); };
SliderHarnessExample.ɵcmp = ɵɵdefineComponent({ type: SliderHarnessExample, selectors: [["slider-harness-example"]], decls: 1, vars: 0, consts: [["value", "50"]], template: function SliderHarnessExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-slider", 0);
    } }, directives: [MatSlider], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderHarnessExample, [{
        type: Component,
        args: [{
                selector: 'slider-harness-example',
                templateUrl: 'slider-harness-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
];
class SliderExamplesModule {
}
SliderExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SliderExamplesModule });
SliderExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); }, imports: [[
            CommonModule,
            FormsModule,
            MatCardModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCardModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSliderModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { SliderConfigurableExample, SliderExamplesModule, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample };
//# sourceMappingURL=slider.js.map
