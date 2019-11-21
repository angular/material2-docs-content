import { NgIf, CommonModule } from '@angular/common';
import { ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, Component, ɵɵdefineComponent, ɵɵtemplate, ɵsetClassMetadata, ɵɵelement, NgModule, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope } from '@angular/core';
import { NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, FormsModule } from '@angular/forms';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatFormField } from '@angular/material/form-field';

function SliderConfigurableExample_mat_checkbox_16_Template(rf, ctx) { if (rf & 1) {
    var _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-checkbox", 7);
    ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_checkbox_16_Template_mat_checkbox_ngModelChange_0_listener($event) { ɵɵrestoreView(_r3); var ctx_r2 = ɵɵnextContext(); return ctx_r2.autoTicks = $event; });
    ɵɵtext(1, " Auto ticks ");
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngModel", ctx_r0.autoTicks);
} }
function SliderConfigurableExample_mat_form_field_17_Template(rf, ctx) { if (rf & 1) {
    var _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 2);
    ɵɵelementStart(1, "input", 12);
    ɵɵlistener("ngModelChange", function SliderConfigurableExample_mat_form_field_17_Template_input_ngModelChange_1_listener($event) { ɵɵrestoreView(_r5); var ctx_r4 = ɵɵnextContext(); return ctx_r4.tickInterval = $event; });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngModel", ctx_r1.tickInterval);
} }
/**
 * @title Configurable slider
 */
var SliderConfigurableExample = /** @class */ (function () {
    function SliderConfigurableExample() {
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
    SliderConfigurableExample.prototype.getSliderTickInterval = function () {
        return this.showTicks ? (this.autoTicks ? 'auto' : this.tickInterval) : 0;
    };
    SliderConfigurableExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-configurable-example',
                    templateUrl: 'slider-configurable-example.html',
                    styleUrls: ['slider-configurable-example.css'],
                },] },
    ];
    SliderConfigurableExample.ɵfac = function SliderConfigurableExample_Factory(t) { return new (t || SliderConfigurableExample)(); };
    SliderConfigurableExample.ɵcmp = ɵɵdefineComponent({ type: SliderConfigurableExample, selectors: [["slider-configurable-example"]], decls: 34, vars: 20, consts: [[1, "example-h2"], [1, "example-section"], [1, "example-margin"], ["matInput", "", "type", "number", "placeholder", "Value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Min value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Max value", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Step size", 3, "ngModel", "ngModelChange"], [1, "example-margin", 3, "ngModel", "ngModelChange"], ["class", "example-margin", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "example-margin", 4, "ngIf"], [1, "result"], [1, "example-margin", 3, "disabled", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "ngModel", "vertical", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Tick interval", 3, "ngModel", "ngModelChange"]], template: function SliderConfigurableExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "mat-card");
            ɵɵelementStart(1, "mat-card-content");
            ɵɵelementStart(2, "h2", 0);
            ɵɵtext(3, "Slider configuration");
            ɵɵelementEnd();
            ɵɵelementStart(4, "section", 1);
            ɵɵelementStart(5, "mat-form-field", 2);
            ɵɵelementStart(6, "input", 3);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_6_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(7, "mat-form-field", 2);
            ɵɵelementStart(8, "input", 4);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_8_listener($event) { return ctx.min = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(9, "mat-form-field", 2);
            ɵɵelementStart(10, "input", 5);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_10_listener($event) { return ctx.max = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(11, "mat-form-field", 2);
            ɵɵelementStart(12, "input", 6);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_input_ngModelChange_12_listener($event) { return ctx.step = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(13, "section", 1);
            ɵɵelementStart(14, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_14_listener($event) { return ctx.showTicks = $event; });
            ɵɵtext(15, "Show ticks");
            ɵɵelementEnd();
            ɵɵtemplate(16, SliderConfigurableExample_mat_checkbox_16_Template, 2, 1, "mat-checkbox", 8);
            ɵɵtemplate(17, SliderConfigurableExample_mat_form_field_17_Template, 2, 1, "mat-form-field", 9);
            ɵɵelementEnd();
            ɵɵelementStart(18, "section", 1);
            ɵɵelementStart(19, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_19_listener($event) { return ctx.thumbLabel = $event; });
            ɵɵtext(20, "Show thumb label");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(21, "section", 1);
            ɵɵelementStart(22, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_22_listener($event) { return ctx.vertical = $event; });
            ɵɵtext(23, "Vertical");
            ɵɵelementEnd();
            ɵɵelementStart(24, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_24_listener($event) { return ctx.invert = $event; });
            ɵɵtext(25, "Inverted");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(26, "section", 1);
            ɵɵelementStart(27, "mat-checkbox", 7);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_checkbox_ngModelChange_27_listener($event) { return ctx.disabled = $event; });
            ɵɵtext(28, "Disabled");
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementStart(29, "mat-card", 10);
            ɵɵelementStart(30, "mat-card-content");
            ɵɵelementStart(31, "h2", 0);
            ɵɵtext(32, "Result");
            ɵɵelementEnd();
            ɵɵelementStart(33, "mat-slider", 11);
            ɵɵlistener("ngModelChange", function SliderConfigurableExample_Template_mat_slider_ngModelChange_33_listener($event) { return ctx.value = $event; });
            ɵɵelementEnd();
            ɵɵelementEnd();
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(6);
            ɵɵproperty("ngModel", ctx.value);
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.min);
            ɵɵadvance(2);
            ɵɵproperty("ngModel", ctx.max);
            ɵɵadvance(2);
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
        } }, directives: [MatCard, MatCardContent, MatFormField, MatInput, NumberValueAccessor, DefaultValueAccessor, NgControlStatus, NgModel, MatCheckbox, NgIf, MatSlider], styles: [".example-h2[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.example-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.mat-slider-vertical[_ngcontent-%COMP%] {\n  height: 300px;\n}"] });
    return SliderConfigurableExample;
}());
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
var SliderFormattingExample = /** @class */ (function () {
    function SliderFormattingExample() {
    }
    SliderFormattingExample.prototype.formatLabel = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    SliderFormattingExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-formatting-example',
                    templateUrl: 'slider-formatting-example.html',
                    styleUrls: ['slider-formatting-example.css'],
                },] },
    ];
    SliderFormattingExample.ɵfac = function SliderFormattingExample_Factory(t) { return new (t || SliderFormattingExample)(); };
    SliderFormattingExample.ɵcmp = ɵɵdefineComponent({ type: SliderFormattingExample, selectors: [["slider-formatting-example"]], decls: 1, vars: 1, consts: [["thumbLabel", "", "tickInterval", "1000", "min", "1", "max", "100000", 3, "displayWith"]], template: function SliderFormattingExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "mat-slider", 0);
        } if (rf & 2) {
            ɵɵproperty("displayWith", ctx.formatLabel);
        } }, directives: [MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    return SliderFormattingExample;
}());
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
var SliderOverviewExample = /** @class */ (function () {
    function SliderOverviewExample() {
    }
    SliderOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'slider-overview-example',
                    templateUrl: 'slider-overview-example.html',
                    styleUrls: ['slider-overview-example.css'],
                },] },
    ];
    SliderOverviewExample.ɵfac = function SliderOverviewExample_Factory(t) { return new (t || SliderOverviewExample)(); };
    SliderOverviewExample.ɵcmp = ɵɵdefineComponent({ type: SliderOverviewExample, selectors: [["slider-overview-example"]], decls: 1, vars: 0, template: function SliderOverviewExample_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "mat-slider");
        } }, directives: [MatSlider], styles: ["mat-slider[_ngcontent-%COMP%] {\n  width: 300px;\n}"] });
    return SliderOverviewExample;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(SliderOverviewExample, [{
        type: Component,
        args: [{
                selector: 'slider-overview-example',
                templateUrl: 'slider-overview-example.html',
                styleUrls: ['slider-overview-example.css'],
            }]
    }], null, null); })();

var EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderOverviewExample,
];
var SliderExamplesModule = /** @class */ (function () {
    function SliderExamplesModule() {
    }
    SliderExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    SliderExamplesModule.ɵmod = ɵɵdefineNgModule({ type: SliderExamplesModule });
    SliderExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function SliderExamplesModule_Factory(t) { return new (t || SliderExamplesModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MatCardModule,
                MatCheckboxModule,
                MatInputModule,
                MatSliderModule,
            ]] });
    return SliderExamplesModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(SliderExamplesModule, { declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
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
            }]
    }], null, null); })();

export { SliderConfigurableExample, SliderExamplesModule, SliderFormattingExample, SliderOverviewExample };
//# sourceMappingURL=slider.js.map
