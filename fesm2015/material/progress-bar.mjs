import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i5 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i3 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';

/**
 * @title Buffer progress-bar
 */
class ProgressBarBufferExample {
}
ProgressBarBufferExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarBufferExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarBufferExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarBufferExample, selector: "progress-bar-buffer-example", ngImport: i0, template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n", components: [{ type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarBufferExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-buffer-example', template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Configurable progress-bar
 */
class ProgressBarConfigurableExample {
    constructor() {
        this.color = 'primary';
        this.mode = 'determinate';
        this.value = 50;
        this.bufferValue = 75;
    }
}
ProgressBarConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarConfigurableExample, selector: "progress-bar-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"], components: [{ type: i1$1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { type: i3.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }, { type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }], directives: [{ type: i1$1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i2.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Color:</label>\n      <mat-radio-group [(ngModel)]=\"color\">\n        <mat-radio-button class=\"example-margin\" value=\"primary\">\n          Primary\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"accent\">\n          Accent\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"warn\">\n          Warn\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\" *ngIf=\"mode === 'determinate' || mode === 'buffer'\">\n      <label class=\"example-margin\">Progress:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n    <section class=\"example-section\" *ngIf=\"mode === 'buffer'\">\n      <label class=\"example-margin\">Buffer:</label>\n      <mat-slider class=\"example-margin\" [(ngModel)]=\"bufferValue\"></mat-slider>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [color]=\"color\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"] }]
        }] });

/**
 * @title Determinate progress-bar
 */
class ProgressBarDeterminateExample {
}
ProgressBarDeterminateExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarDeterminateExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarDeterminateExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarDeterminateExample, selector: "progress-bar-determinate-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n", components: [{ type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarDeterminateExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-determinate-example', template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Indeterminate progress-bar
 */
class ProgressBarIndeterminateExample {
}
ProgressBarIndeterminateExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarIndeterminateExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarIndeterminateExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarIndeterminateExample, selector: "progress-bar-indeterminate-example", ngImport: i0, template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", components: [{ type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarIndeterminateExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-indeterminate-example', template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Query progress-bar
 */
class ProgressBarQueryExample {
}
ProgressBarQueryExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarQueryExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarQueryExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarQueryExample, selector: "progress-bar-query-example", ngImport: i0, template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n", components: [{ type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarQueryExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-query-example', template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Testing with MatProgressBarHarness
 */
class ProgressBarHarnessExample {
}
ProgressBarHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ProgressBarHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: ProgressBarHarnessExample, selector: "progress-bar-harness-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", components: [{ type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-harness-example', template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });

const EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarHarnessExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
class ProgressBarExamplesModule {
}
ProgressBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarExamplesModule, declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] });
ProgressBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarExamplesModule, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressBarModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressBarModule,
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

export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarExamplesModule, ProgressBarHarnessExample, ProgressBarIndeterminateExample, ProgressBarQueryExample };
//# sourceMappingURL=progress-bar.mjs.map
