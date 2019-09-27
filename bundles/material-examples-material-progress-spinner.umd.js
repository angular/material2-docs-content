(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/card'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/slider')) :
    typeof define === 'function' && define.amd ? define('@angular/material-examples/material/progress-spinner', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/card', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/slider'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.materialExamples = global.ng.materialExamples || {}, global.ng.materialExamples.material = global.ng.materialExamples.material || {}, global.ng.materialExamples.material.progressSpinner = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.card, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.slider));
}(this, function (exports, common, core, forms, card, progressSpinner, radio, slider) { 'use strict';

    /**
     * @title Configurable progress spinner
     */
    var ProgressSpinnerConfigurableExample = /** @class */ (function () {
        function ProgressSpinnerConfigurableExample() {
            this.color = 'primary';
            this.mode = 'determinate';
            this.value = 50;
        }
        ProgressSpinnerConfigurableExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-spinner-configurable-example',
                        template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n",
                        styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"]
                    }] }
        ];
        return ProgressSpinnerConfigurableExample;
    }());

    /**
     * @title Basic progress-spinner
     */
    var ProgressSpinnerOverviewExample = /** @class */ (function () {
        function ProgressSpinnerOverviewExample() {
        }
        ProgressSpinnerOverviewExample.decorators = [
            { type: core.Component, args: [{
                        selector: 'progress-spinner-overview-example',
                        template: "<mat-spinner></mat-spinner>\n",
                        styles: ["/** No CSS for this example */\n"]
                    }] }
        ];
        return ProgressSpinnerOverviewExample;
    }());

    var EXAMPLES = [
        ProgressSpinnerConfigurableExample,
        ProgressSpinnerOverviewExample,
    ];
    var ProgressSpinnerExamplesModule = /** @class */ (function () {
        function ProgressSpinnerExamplesModule() {
        }
        ProgressSpinnerExamplesModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            card.MatCardModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            slider.MatSliderModule,
                            forms.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                    },] }
        ];
        return ProgressSpinnerExamplesModule;
    }());

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ProgressSpinnerConfigurableExample = ProgressSpinnerConfigurableExample;
    exports.ProgressSpinnerOverviewExample = ProgressSpinnerOverviewExample;
    exports.ProgressSpinnerExamplesModule = ProgressSpinnerExamplesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=material-examples-material-progress-spinner.umd.js.map
