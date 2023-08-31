import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i1$1 from '@angular/material/slider';
import { MatSliderModule } from '@angular/material/slider';
import * as i5 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i4 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';

/**
 * @title Configurable slider
 */
class SliderConfigurableExample {
    constructor() {
        this.disabled = false;
        this.max = 100;
        this.min = 0;
        this.showTicks = false;
        this.step = 1;
        this.thumbLabel = false;
        this.value = 0;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SliderConfigurableExample, isStandalone: true, selector: "slider-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n\n    <div class=\"example-label-container\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Value</label>\n      <label class=\"example-value-label\">{{slider.value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [discrete]=\"thumbLabel\"\n        [showTickMarks]=\"showTicks\">\n      <input matSliderThumb [(ngModel)]=\"value\" #slider>\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.example-section {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.example-margin {\n  margin: 8px;\n}\n\n.example-width {\n  max-width: 180px;\n  width: 100%;\n}\n\n.mat-mdc-slider {\n  max-width: 300px;\n  width: 100%;\n}\n\n.mat-mdc-card + .mat-mdc-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-label-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 10px 0;\n  max-width: 284px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i5.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1$1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1$1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-configurable-example', standalone: true, imports: [
                        MatCardModule,
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatCheckboxModule,
                        MatSliderModule,
                    ], template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Slider configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"value\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Min value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"min\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Max value</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"max\">\n      </mat-form-field>\n      <mat-form-field class=\"example-margin example-width\">\n        <mat-label>Step size</mat-label>\n        <input matInput type=\"number\" [(ngModel)]=\"step\">\n      </mat-form-field>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"showTicks\">Show ticks</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"thumbLabel\">Show thumb label</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-result-card\">\n  <mat-card-content>\n    <h2>Result</h2>\n\n    <div class=\"example-label-container\">\n      <label id=\"example-name-label\" class=\"example-name-label\">Value</label>\n      <label class=\"example-value-label\">{{slider.value}}</label>\n    </div>\n    <mat-slider\n        class=\"example-margin\"\n        [disabled]=\"disabled\"\n        [max]=\"max\"\n        [min]=\"min\"\n        [step]=\"step\"\n        [discrete]=\"thumbLabel\"\n        [showTickMarks]=\"showTicks\">\n      <input matSliderThumb [(ngModel)]=\"value\" #slider>\n    </mat-slider>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.example-section {\n  display: flex;\n  flex-wrap: wrap;\n  align-content: center;\n  align-items: center;\n}\n\n.example-margin {\n  margin: 8px;\n}\n\n.example-width {\n  max-width: 180px;\n  width: 100%;\n}\n\n.mat-mdc-slider {\n  max-width: 300px;\n  width: 100%;\n}\n\n.mat-mdc-card + .mat-mdc-card {\n  margin-top: 8px;\n}\n\n.example-result-card h2 {\n  margin: 0 8px;\n}\n\n.example-label-container {\n  display: flex;\n  justify-content: space-between;\n  margin: 20px 10px 0;\n  max-width: 284px;\n}\n\n.example-result-card .example-value-label {\n  font-weight: 600;\n}\n"] }]
        }] });

/**
 * @title Slider with custom thumb label formatting.
 */
class SliderFormattingExample {
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderFormattingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SliderFormattingExample, isStandalone: true, selector: "slider-formatting-example", ngImport: i0, template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1$1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1$1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderFormattingExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-formatting-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"0\" max=\"100000\" step=\"1000\" showTickMarks discrete [displayWith]=\"formatLabel\">\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Basic slider
 */
class SliderOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SliderOverviewExample, isStandalone: true, selector: "slider-overview-example", ngImport: i0, template: "<mat-slider>\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1$1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1$1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-overview-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider>\n  <input matSliderThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatSliderHarness
 */
class SliderHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SliderHarnessExample, isStandalone: true, selector: "slider-harness-example", ngImport: i0, template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n", dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1$1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1$1.MatSliderThumb, selector: "input[matSliderThumb]", inputs: ["value"], outputs: ["valueChange", "dragStart", "dragEnd"], exportAs: ["matSliderThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-harness-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider>\n  <input matSliderThumb value=\"50\">\n</mat-slider>\n" }]
        }] });

/**
 * @title Range slider
 */
class SliderRangeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderRangeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.1", type: SliderRangeExample, isStandalone: true, selector: "slider-range-example", ngImport: i0, template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSliderModule }, { kind: "component", type: i1$1.MatSlider, selector: "mat-slider", inputs: ["color", "disableRipple", "disabled", "discrete", "showTickMarks", "min", "max", "step", "displayWith"], exportAs: ["matSlider"] }, { kind: "directive", type: i1$1.MatSliderRangeThumb, selector: "input[matSliderStartThumb], input[matSliderEndThumb]", exportAs: ["matSliderRangeThumb"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.1", ngImport: i0, type: SliderRangeExample, decorators: [{
            type: Component,
            args: [{ selector: 'slider-range-example', standalone: true, imports: [MatSliderModule], template: "<mat-slider min=\"200\" max=\"500\">\n  <input value=\"300\" matSliderStartThumb>\n  <input value=\"400\" matSliderEndThumb>\n</mat-slider>\n", styles: ["mat-slider {\n  width: 300px;\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SliderConfigurableExample, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample, SliderRangeExample };
//# sourceMappingURL=slider.mjs.map
