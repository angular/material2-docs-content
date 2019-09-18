(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/slider'), require('@angular/cdk/coercion')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/slider', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/checkbox', '@angular/material/input', '@angular/material/slider', '@angular/cdk/coercion'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.slider = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.checkbox, global.ng.material.input, global.ng.material.slider, global.ng.cdk.coercion));
}(this, function (exports, common, core, forms, card, checkbox, input, slider, coercion) { 'use strict';

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
            this._tickInterval = 1;
        }
        Object.defineProperty(SliderConfigurableExample.prototype, "tickInterval", {
            get: function () {
                return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
            },
            set: function (value) {
                this._tickInterval = coercion.coerceNumberProperty(value);
            },
            enumerable: true,
            configurable: true
        });
        SliderConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'slider-configurable-example',
                        template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Value\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Min value\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Max value\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\">\n        <input matInput type=\"number\" placeholder=\"Step size\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" *ngIf=\"showTicks && !autoTicks\">\n        <input matInput type=\"number\" placeholder=\"Tick interval\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"tickInterval\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n",
                        styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 10px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n"]
                    }] }
        ];
        return SliderConfigurableExample;
    }());

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
            { type: core.Component, args: [{
                        selector: 'slider-formatting-example',
                        template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  min=\"1\"\n  max=\"100000\"></mat-slider>\n",
                        styles: ["mat-slider {\n  width: 300px;\n}\n"]
                    }] }
        ];
        return SliderFormattingExample;
    }());

    /**
     * @title Basic slider
     */
    var SliderOverviewExample = /** @class */ (function () {
        function SliderOverviewExample() {
        }
        SliderOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'slider-overview-example',
                        template: "<mat-slider></mat-slider>\n",
                        styles: ["/** No CSS for this example */\nmat-slider {\n  width: 300px;\n}\n"]
                    }] }
        ];
        return SliderOverviewExample;
    }());

    var EXAMPLES = [
        SliderConfigurableExample,
        SliderFormattingExample,
        SliderOverviewExample,
    ];
    var SliderExamplesModule = /** @class */ (function () {
        function SliderExamplesModule() {
        }
        SliderExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            input.MatInputModule,
                            slider.MatSliderModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return SliderExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SliderConfigurableExample = SliderConfigurableExample;
    exports.SliderFormattingExample = SliderFormattingExample;
    exports.SliderOverviewExample = SliderOverviewExample;
    exports.SliderExamplesModule = SliderExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-slider.umd.js.map
