import * as i0 from '@angular/core';
import { Component, signal } from '@angular/core';
import * as i1 from '@angular/material/progress-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i4 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i3 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i2 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import * as i1$1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Buffer progress-bar
 */
class ProgressBarBufferExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarBufferExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: ProgressBarBufferExample, isStandalone: true, selector: "progress-bar-buffer-example", ngImport: i0, template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarBufferExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-buffer-example', imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"buffer\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Configurable progress-bar
 */
class ProgressBarConfigurableExample {
    mode = 'determinate';
    value = 50;
    bufferValue = 75;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.0-next.10", type: ProgressBarConfigurableExample, isStandalone: true, selector: "progress-bar-configurable-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    @if (mode === 'determinate' || mode === 'buffer') {\n      <section class=\"example-section\">\n        <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\">\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\n        </mat-slider>\n      </section>\n    }\n    @if (mode === 'buffer') {\n      <section class=\"example-section\">\n        <label class=\"example-margin\">Buffer:</label>\n        <mat-slider class=\"example-margin\">\n          <input type=\"range\" [(ngModel)]=\"bufferValue\" matSliderThumb>\n        </mat-slider>\n      </section>\n    }\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.example-card {\n  margin-bottom: 10px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1$1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1$1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i2.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i2.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.RangeValueAccessor, selector: "input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i4.MatSlider, selector: "mat-slider", inputs: ["disabled", "discrete", "showTickMarks", "min", "color", "disableRipple", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i4.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-configurable-example', imports: [MatCardModule, MatRadioModule, FormsModule, MatSliderModule, MatProgressBarModule], template: "<mat-card class=\"example-card\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Progress bar configuration</h2>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Mode:</label>\n      <mat-radio-group [(ngModel)]=\"mode\">\n        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n          Determinate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n          Indeterminate\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"buffer\">\n          Buffer\n        </mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"query\">\n          Query\n        </mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    @if (mode === 'determinate' || mode === 'buffer') {\n      <section class=\"example-section\">\n        <label class=\"example-margin\">Progress:</label>\n        <mat-slider class=\"example-margin\">\n          <input type=\"range\" [(ngModel)]=\"value\" matSliderThumb>\n        </mat-slider>\n      </section>\n    }\n    @if (mode === 'buffer') {\n      <section class=\"example-section\">\n        <label class=\"example-margin\">Buffer:</label>\n        <mat-slider class=\"example-margin\">\n          <input type=\"range\" [(ngModel)]=\"bufferValue\" matSliderThumb>\n        </mat-slider>\n      </section>\n    }\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-progress-bar\n          class=\"example-margin\"\n          [mode]=\"mode\"\n          [value]=\"value\"\n          [bufferValue]=\"bufferValue\">\n      </mat-progress-bar>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n\n.example-card {\n  margin-bottom: 10px;\n}\n"] }]
        }] });

/**
 * @title Determinate progress-bar
 */
class ProgressBarDeterminateExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarDeterminateExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: ProgressBarDeterminateExample, isStandalone: true, selector: "progress-bar-determinate-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarDeterminateExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-determinate-example', imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"determinate\" value=\"40\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Indeterminate progress-bar
 */
class ProgressBarIndeterminateExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarIndeterminateExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: ProgressBarIndeterminateExample, isStandalone: true, selector: "progress-bar-indeterminate-example", ngImport: i0, template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarIndeterminateExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-indeterminate-example', imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Query progress-bar
 */
class ProgressBarQueryExample {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarQueryExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: ProgressBarQueryExample, isStandalone: true, selector: "progress-bar-query-example", ngImport: i0, template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarQueryExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-query-example', imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"query\"></mat-progress-bar>\n" }]
        }] });

/**
 * @title Testing with MatProgressBarHarness
 */
class ProgressBarHarnessExample {
    value = signal(undefined);
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.10", type: ProgressBarHarnessExample, isStandalone: true, selector: "progress-bar-harness-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" [value]=\"value()\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.10", ngImport: i0, type: ProgressBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-harness-example', imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"determinate\" [value]=\"value()\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarHarnessExample, ProgressBarIndeterminateExample, ProgressBarQueryExample };
//# sourceMappingURL=progress-bar.mjs.map
