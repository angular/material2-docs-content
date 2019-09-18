import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
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

export { ProgressSpinnerConfigurableExample, ProgressSpinnerOverviewExample, ProgressSpinnerExamplesModule };
//# sourceMappingURL=progress-spinner.js.map
