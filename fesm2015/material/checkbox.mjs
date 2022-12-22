import * as i1$2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';

/**
 * @title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
    }
}
CheckboxConfigurableExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxConfigurableExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CheckboxConfigurableExample, selector: "checkbox-configurable-example", ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-configurable-example', template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n          class=\"example-margin\"\n          [(ngModel)]=\"checked\"\n          [(indeterminate)]=\"indeterminate\"\n          [labelPosition]=\"labelPosition\"\n          [disabled]=\"disabled\">\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = true;
    }
}
CheckboxHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CheckboxHarnessExample, selector: "checkbox-harness-example", ngImport: i0, template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', template: "<mat-checkbox\n    required\n    [checked]=\"true\"\n    name=\"first-name\"\n    value=\"first-value\"\n    aria-label=\"First checkbox\">\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });

/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' },
            ],
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
}
CheckboxOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CheckboxOverviewExample, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], dependencies: [{ kind: "directive", type: i1$2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });

/** @title Checkboxes with reactive forms */
class CheckboxReactiveFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [{ token: i1$1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
CheckboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.1.0-next.3", type: CheckboxReactiveFormsExample, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i1$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1$1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i1$2.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.FormBuilder }]; } });

const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxHarnessExample,
    CheckboxReactiveFormsExample,
];
class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckboxExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxExamplesModule, declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample], imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample] });
CheckboxExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxExamplesModule, imports: [CommonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: CheckboxExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxConfigurableExample, CheckboxExamplesModule, CheckboxHarnessExample, CheckboxOverviewExample, CheckboxReactiveFormsExample };
//# sourceMappingURL=checkbox.mjs.map
