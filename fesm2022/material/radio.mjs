import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

/**
 * @title Radios with ngModel
 */
class RadioNgModelExample {
    constructor() {
        this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioNgModelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0-rc.2", type: RadioNgModelExample, isStandalone: true, selector: "radio-ng-model-example", ngImport: i0, template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  @for (season of seasons; track season) {\n    <mat-radio-button class=\"example-radio-button\" [value]=\"season\">{{season}}</mat-radio-button>\n  }\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioNgModelExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-ng-model-example', standalone: true, imports: [MatRadioModule, FormsModule], template: "<label id=\"example-radio-group-label\">Pick your favorite season</label>\n<mat-radio-group\n  aria-labelledby=\"example-radio-group-label\"\n  class=\"example-radio-group\"\n  [(ngModel)]=\"favoriteSeason\">\n  @for (season of seasons; track season) {\n    <mat-radio-button class=\"example-radio-button\" [value]=\"season\">{{season}}</mat-radio-button>\n  }\n</mat-radio-group>\n<div>Your favorite season is: {{favoriteSeason}}</div>\n", styles: [".example-radio-group {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n  align-items: flex-start;\n}\n\n.example-radio-button {\n  margin: 5px;\n}\n"] }]
        }] });

/**
 * @title Basic radios
 */
class RadioOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: RadioOverviewExample, isStandalone: true, selector: "radio-overview-example", ngImport: i0, template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-mdc-radio-button ~ .mat-mdc-radio-button {\n  margin-left: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-overview-example', standalone: true, imports: [MatRadioModule], template: "<mat-radio-group aria-label=\"Select an option\">\n  <mat-radio-button value=\"1\">Option 1</mat-radio-button>\n  <mat-radio-button value=\"2\">Option 2</mat-radio-button>\n</mat-radio-group>\n", styles: [".mat-mdc-radio-button ~ .mat-mdc-radio-button {\n  margin-left: 16px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatRadioHarness
 */
class RadioHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: RadioHarnessExample, isStandalone: true, selector: "radio-harness-example", ngImport: i0, template: "<mat-radio-group name=\"flavors\">\n  <mat-radio-button value=\"chocolate\" checked=\"true\">Chocolate</mat-radio-button>\n  <mat-radio-button value=\"vanilla\">Vanilla</mat-radio-button>\n  <mat-radio-button value=\"strawberry\">Strawberry</mat-radio-button>\n</mat-radio-group>\n", dependencies: [{ kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i1.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i1.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex", "id", "name", "aria-label", "aria-labelledby", "aria-describedby", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: RadioHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'radio-harness-example', standalone: true, imports: [MatRadioModule], template: "<mat-radio-group name=\"flavors\">\n  <mat-radio-button value=\"chocolate\" checked=\"true\">Chocolate</mat-radio-button>\n  <mat-radio-button value=\"vanilla\">Vanilla</mat-radio-button>\n  <mat-radio-button value=\"strawberry\">Strawberry</mat-radio-button>\n</mat-radio-group>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { RadioHarnessExample, RadioNgModelExample, RadioOverviewExample };
//# sourceMappingURL=radio.mjs.map
