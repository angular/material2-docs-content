(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/progress-bar', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/slider'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.progressBar = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material['progress-bar'], global.ng.material.radio, global.ng.material.slider));
}(this, function (exports, common, core, forms, card, progressBar, radio, slider) { 'use strict';

    /**
     * @title Buffer progress-bar
     */
    var ProgressBarBufferExample = /** @class */ (function () {
        function ProgressBarBufferExample() {
        }
        ProgressBarBufferExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-bar-buffer-example',
                        template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ProgressBarBufferExample;
    }());

    /**
     * @title Configurable progress-bar
     */
    var ProgressBarConfigurableExample = /** @class */ (function () {
        function ProgressBarConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
            this.bufferValue = 75;
        }
        ProgressBarConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-bar-configurable-example',
                        template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n",
                        styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
                    }] }
        ];
        return ProgressBarConfigurableExample;
    }());

    /**
     * @title Determinate progress-bar
     */
    var ProgressBarDeterminateExample = /** @class */ (function () {
        function ProgressBarDeterminateExample() {
        }
        ProgressBarDeterminateExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-bar-determinate-example',
                        template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ProgressBarDeterminateExample;
    }());

    /**
     * @title Indeterminate progress-bar
     */
    var ProgressBarIndeterminateExample = /** @class */ (function () {
        function ProgressBarIndeterminateExample() {
        }
        ProgressBarIndeterminateExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-bar-indeterminate-example',
                        template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ProgressBarIndeterminateExample;
    }());

    /**
     * @title Query progress-bar
     */
    var ProgressBarQueryExample = /** @class */ (function () {
        function ProgressBarQueryExample() {
        }
        ProgressBarQueryExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-bar-query-example',
                        template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ProgressBarQueryExample;
    }());

    var EXAMPLES = [
        ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample,
    ];
    var ProgressBarExamplesModule = /** @class */ (function () {
        function ProgressBarExamplesModule() {
        }
        ProgressBarExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            card.MatCardModule,
                            progressBar.MatProgressBarModule,
                            radio.MatRadioModule,
                            slider.MatSliderModule,
                            forms.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return ProgressBarExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProgressBarBufferExample = ProgressBarBufferExample;
    exports.ProgressBarConfigurableExample = ProgressBarConfigurableExample;
    exports.ProgressBarDeterminateExample = ProgressBarDeterminateExample;
    exports.ProgressBarIndeterminateExample = ProgressBarIndeterminateExample;
    exports.ProgressBarQueryExample = ProgressBarQueryExample;
    exports.ProgressBarExamplesModule = ProgressBarExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-progress-bar.umd.js.map
