import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i6 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1$1 from '@angular/material/progress-spinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import * as i4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i5 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Configurable progress spinner
 */
class ProgressSpinnerConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
    }
}
ProgressSpinnerConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressSpinnerConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ProgressSpinnerConfigurableExample, selector: "progress-spinner-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { kind: "directive", type: i2.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }, { kind: "directive", type: i4.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i5.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress spinner configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"] }]
        }] });

/**
 * @title Basic progress-spinner
 */
class ProgressSpinnerOverviewExample {
}
ProgressSpinnerOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressSpinnerOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ProgressSpinnerOverviewExample, selector: "progress-spinner-overview-example", ngImport: i0, template: "<mat-spinner></mat-spinner>\n", dependencies: [{ kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-overview-example', template: "<mat-spinner></mat-spinner>\n" }]
        }] });

/**
 * @title Testing with MatProgressSpinnerHarness
 */
class ProgressSpinnerHarnessExample {
}
ProgressSpinnerHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressSpinnerHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ProgressSpinnerHarnessExample, selector: "progress-spinner-harness-example", ngImport: i0, template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value\"></mat-progress-spinner>\n<mat-spinner></mat-spinner>\n", dependencies: [{ kind: "component", type: i1$1.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "diameter", "strokeWidth", "mode", "value"], exportAs: ["matProgressSpinner"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-spinner-harness-example', template: "<mat-progress-spinner mode=\"determinate\" [value]=\"value\"></mat-progress-spinner>\n<mat-spinner></mat-spinner>\n" }]
        }] });

const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerHarnessExample,
    ProgressSpinnerOverviewExample,
];
class ProgressSpinnerExamplesModule {
}
ProgressSpinnerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerExamplesModule, declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample] });
ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerExamplesModule, imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressSpinnerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressSpinnerConfigurableExample, ProgressSpinnerExamplesModule, ProgressSpinnerHarnessExample, ProgressSpinnerOverviewExample };
//# sourceMappingURL=progress-spinner.mjs.map
