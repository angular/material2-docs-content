import * as i0 from '@angular/core';
import { Component, ViewChild, NgModule } from '@angular/core';
import * as i1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import * as i3 from '@angular/material/expansion';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import * as i4 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i5 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i6 from '@angular/material/form-field';

/**
 * @title Accordion with expand/collapse all toggles
 */
class ExpansionExpandCollapseAllExample {
}
ExpansionExpandCollapseAllExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExpandCollapseAllExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionExpandCollapseAllExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ExpansionExpandCollapseAllExample, selector: "expansion-expand-collapse-all-example", viewQueries: [{ propertyName: "accordion", first: true, predicate: MatAccordion, descendants: true }], ngImport: i0, template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<!-- #docregion multi -->\n<mat-accordion class=\"example-headers-align\" multi>\n<!-- #enddocregion multi -->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n<!-- #docregion disabled -->\n  <mat-expansion-panel disabled>\n<!-- #enddocregion disabled -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i3.MatExpansionPanelDescription, selector: "mat-panel-description" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExpandCollapseAllExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-expand-collapse-all-example', template: "<div class=\"example-action-buttons\">\n  <button mat-button (click)=\"accordion.openAll()\">Expand All</button>\n  <button mat-button (click)=\"accordion.closeAll()\">Collapse All</button>\n</div>\n<!-- #docregion multi -->\n<mat-accordion class=\"example-headers-align\" multi>\n<!-- #enddocregion multi -->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n\n  </mat-expansion-panel>\n<!-- #docregion disabled -->\n  <mat-expansion-panel disabled>\n<!-- #enddocregion disabled -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".example-action-buttons {\n  padding-bottom: 20px;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], propDecorators: { accordion: [{
                type: ViewChild,
                args: [MatAccordion]
            }] } });

/**
 * @title Basic expansion panel
 */
class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
}
ExpansionOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ExpansionOverviewExample, selector: "expansion-overview-example", ngImport: i0, template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i3.MatExpansionPanelDescription, selector: "mat-panel-description" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-overview-example', template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", styles: [".mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Expansion panel as accordion
 */
class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionStepsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionStepsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ExpansionStepsExample, selector: "expansion-steps-example", ngImport: i0, template: "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n<!-- #docregion action-bar -->\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n<!-- #enddocregion action-bar -->\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n", styles: [".example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "directive", type: i3.MatExpansionPanelActionRow, selector: "mat-action-row" }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i3.MatExpansionPanelDescription, selector: "mat-panel-description" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i6.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i6.MatLabel, selector: "mat-label" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionStepsExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-steps-example', template: "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Age</mat-label>\n      <input matInput type=\"number\" min=\"1\">\n    </mat-form-field>\n<!-- #docregion action-bar -->\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n<!-- #enddocregion action-bar -->\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Country</mat-label>\n      <input matInput>\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field appearance=\"fill\">\n      <mat-label>Date</mat-label>\n      <input matInput [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n", styles: [".example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.example-headers-align .mat-mdc-form-field + .mat-mdc-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
class ExpansionHarnessExample {
}
ExpansionHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ExpansionHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.0-next.1", type: ExpansionHarnessExample, selector: "expansion-harness-example", ngImport: i0, template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", dependencies: [{ kind: "directive", type: i3.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i3.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i3.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["tabIndex", "expandedHeight", "collapsedHeight"] }, { kind: "directive", type: i3.MatExpansionPanelTitle, selector: "mat-panel-title" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-harness-example', template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n" }]
        }] });

const EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionHarnessExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
class ExpansionExamplesModule {
}
ExpansionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExpansionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExamplesModule, declarations: [ExpansionExpandCollapseAllExample,
        ExpansionHarnessExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionHarnessExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] });
ExpansionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExamplesModule, imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: ExpansionExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatButtonModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatInputModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ExpansionExamplesModule, ExpansionExpandCollapseAllExample, ExpansionHarnessExample, ExpansionOverviewExample, ExpansionStepsExample };
//# sourceMappingURL=expansion.mjs.map
