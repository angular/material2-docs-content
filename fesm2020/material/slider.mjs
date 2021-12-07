import * as i7 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i6 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1$1 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i2 from '@angular/material/form-field';

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
SliderConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: SliderConfigurableExample, selector: "slider-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\" *ngIf=\"showTicks && !autoTicks\">\n        <mat-label>Tick interval</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n    <br>\n    <br>\n\n    <div class=\"example-label-container\" [class]=\"vertical ? 'example-label-vertical' : 'example-label-horizontal'\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Max Value</label>\n      <label class=\"example-value-label\">{{value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"getSliderTickInterval()\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\"\n        aria-labelledby=\"example-name-label\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 0 8px 16px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 8px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n\n.mat-card + .mat-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-result-card .example-label-container.example-label-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card .example-label-container.example-label-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"], components: [{ type: i1.MatCard, selector: "mat-card", exportAs: ["matCard"] }, { type: i2.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { type: i1$1.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }], directives: [{ type: i1.MatCardContent, selector: "mat-card-content, [mat-card-content], [matCardContent]" }, { type: i2.MatLabel, selector: "mat-label" }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i6.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"autoTicks\" *ngIf=\"showTicks\">\n        Auto ticks\n      </mat-checkbox>\n      <mat-form-field class=\"example-margin\" appearance=\"fill\" *ngIf=\"showTicks && !autoTicks\">\n        <mat-label>Tick interval</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"tickInterval\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vertical\">Vertical</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"invert\">Inverted</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n    <br>\n    <br>\n\n    <div class=\"example-label-container\" [class]=\"vertical ? 'example-label-vertical' : 'example-label-horizontal'\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Max Value</label>\n      <label class=\"example-value-label\">{{value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [invert]=\"invert\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [thumbLabel]=\"thumbLabel\"\n        [tickInterval]=\"getSliderTickInterval()\"\n        [(ngModel)]=\"value\"\n        [vertical]=\"vertical\"\n        aria-labelledby=\"example-name-label\">\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 0 8px 16px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 8px;\n}\n\n.mat-slider-horizontal {\n  width: 300px;\n}\n\n.mat-slider-vertical {\n  height: 300px;\n}\n\n.mat-card + .mat-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-result-card .example-label-container.example-label-horizontal {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 0 12px 16px;\n  max-width: 284px;\n}\n\n.example-result-card .example-label-container.example-label-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 68px;\n  height: 48px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"] }]
        }] });

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
SliderFormattingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderFormattingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: SliderFormattingExample, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], components: [{ type: i1$1.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', template: "<mat-slider\n  thumbLabel\n  [displayWith]=\"formatLabel\"\n  tickInterval=\"1000\"\n  step=\"1000\"\n  min=\"0\"\n  max=\"100000\"\n  aria-label=\"units\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Basic slider
 */
class SliderOverviewExample {
}
SliderOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: SliderOverviewExample, selector: "slider-overview-example", ngImport: i0, template: "<mat-slider aria-label=\"unit(s)\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], components: [{ type: i1$1.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-overview-example', template: "<mat-slider aria-label=\"unit(s)\"></mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatSliderHarness
 */
class SliderHarnessExample {
}
SliderHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SliderHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.1.0-next.3", type: SliderHarnessExample, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider value=\"50\" aria-label=\"unit(s)\"></mat-slider>\n", components: [{ type: i1$1.MatSlider, selector: "mat-slider", inputs: ["disabled", "color", "tabIndex", "invert", "max", "min", "step", "thumbLabel", "tickInterval", "value", "displayWith", "valueText", "vertical"], outputs: ["change", "input", "valueChange"], exportAs: ["matSlider"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', template: "<mat-slider value=\"50\" aria-label=\"unit(s)\"></mat-slider>\n" }]
        }] });

const EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
];
class SliderExamplesModule {
}
SliderExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SliderExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderExamplesModule, declarations: [SliderConfigurableExample,
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
        SliderOverviewExample] });
SliderExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderExamplesModule, imports: [[
            CommonModule,
            FormsModule,
            MatCardModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: SliderExamplesModule, decorators: [{
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
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SliderConfigurableExample, SliderExamplesModule, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample };
//# sourceMappingURL=slider.mjs.map
