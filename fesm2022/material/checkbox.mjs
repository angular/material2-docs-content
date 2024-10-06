import * as i0 from '@angular/core';
import { model, Component, ChangeDetectionStrategy, input, signal, computed, inject } from '@angular/core';
import * as i1$2 from '@angular/forms';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/card';
import { MatCardModule } from '@angular/material/card';
import * as i1$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i4 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { JsonPipe } from '@angular/common';

/**
 * @title Configurable checkbox
 */
class CheckboxConfigurableExample {
    constructor() {
        this.checked = model(false);
        this.indeterminate = model(false);
        this.labelPosition = model('after');
        this.disabled = model(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.0.0-next.8", type: CheckboxConfigurableExample, isStandalone: true, selector: "checkbox-configurable-example", inputs: { checked: { classPropertyName: "checked", publicName: "checked", isSignal: true, isRequired: false, transformFunction: null }, indeterminate: { classPropertyName: "indeterminate", publicName: "indeterminate", isSignal: true, isRequired: false, transformFunction: null }, labelPosition: { classPropertyName: "labelPosition", publicName: "labelPosition", isSignal: true, isRequired: false, transformFunction: null }, disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { checked: "checkedChange", indeterminate: "indeterminateChange", labelPosition: "labelPositionChange", disabled: "disabledChange" }, ngImport: i0, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [labelPosition]=\"labelPosition()\"\n        [disabled]=\"disabled()\"\n      >\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i4.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i4.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"], outputs: ["change"], exportAs: ["matRadioButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-configurable-example', standalone: true, imports: [MatCardModule, MatCheckboxModule, FormsModule, MatRadioModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-card>\n  <mat-card-content>\n    <h2 class=\"example-h2\">Checkbox configuration</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checked\">Checked</mat-checkbox>\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"indeterminate\">Indeterminate</mat-checkbox>\n    </section>\n\n    <section class=\"example-section\">\n      <label class=\"example-margin\">Align:</label>\n      <mat-radio-group [(ngModel)]=\"labelPosition\">\n        <mat-radio-button class=\"example-margin\" value=\"after\">After</mat-radio-button>\n        <mat-radio-button class=\"example-margin\" value=\"before\">Before</mat-radio-button>\n      </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Disabled</mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"result\">\n  <mat-card-content>\n    <h2 class=\"example-h2\">Result</h2>\n\n    <section class=\"example-section\">\n      <mat-checkbox\n        class=\"example-margin\"\n        [(ngModel)]=\"checked\"\n        [(indeterminate)]=\"indeterminate\"\n        [labelPosition]=\"labelPosition()\"\n        [disabled]=\"disabled()\"\n      >\n        I'm a checkbox\n      </mat-checkbox>\n    </section>\n  </mat-card-content>\n</mat-card>\n", styles: [".example-h2 {\n  margin: 10px;\n}\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center;\n  height: 60px;\n}\n\n.example-margin {\n  margin: 0 10px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatCheckboxHarness
 */
class CheckboxHarnessExample {
    constructor() {
        this.disabled = input(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.0.0-next.8", type: CheckboxHarnessExample, isStandalone: true, selector: "checkbox-harness-example", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<mat-checkbox\n  required\n  [checked]=\"true\"\n  name=\"first-name\"\n  value=\"first-value\"\n  aria-label=\"First checkbox\"\n>\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled()\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', standalone: true, imports: [MatCheckboxModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-checkbox\n  required\n  [checked]=\"true\"\n  name=\"first-name\"\n  value=\"first-value\"\n  aria-label=\"First checkbox\"\n>\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled()\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });

/**
 * @title Basic checkboxes
 */
class CheckboxOverviewExample {
    constructor() {
        this.task = signal({
            name: 'Parent task',
            completed: false,
            subtasks: [
                { name: 'Child task 1', completed: false },
                { name: 'Child task 2', completed: false },
                { name: 'Child task 3', completed: false },
            ],
        });
        this.partiallyComplete = computed(() => {
            const task = this.task();
            if (!task.subtasks) {
                return false;
            }
            return task.subtasks.some(t => t.completed) && !task.subtasks.every(t => t.completed);
        });
    }
    update(completed, index) {
        this.task.update(task => {
            if (index === undefined) {
                task.completed = completed;
                task.subtasks?.forEach(t => (t.completed = completed));
            }
            else {
                task.subtasks[index].completed = completed;
                task.completed = task.subtasks?.every(t => t.completed) ?? true;
            }
            return { ...task };
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "19.0.0-next.8", type: CheckboxOverviewExample, isStandalone: true, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox\n      class=\"example-margin\"\n      [checked]=\"task().completed\"\n      [indeterminate]=\"partiallyComplete()\"\n      (change)=\"update($event.checked)\"\n    >\n      {{task().name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      @for (subtask of task().subtasks; track subtask; let i = $index) {\n        <li>\n          <mat-checkbox [checked]=\"subtask.completed\" (change)=\"update($event.checked, i)\">\n            {{subtask.name}}\n          </mat-checkbox>\n        </li>\n      }\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', standalone: true, imports: [MatCheckboxModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox\n      class=\"example-margin\"\n      [checked]=\"task().completed\"\n      [indeterminate]=\"partiallyComplete()\"\n      (change)=\"update($event.checked)\"\n    >\n      {{task().name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      @for (subtask of task().subtasks; track subtask; let i = $index) {\n        <li>\n          <mat-checkbox [checked]=\"subtask.completed\" (change)=\"update($event.checked, i)\">\n            {{subtask.name}}\n          </mat-checkbox>\n        </li>\n      }\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });

/** @title Checkboxes with reactive forms */
class CheckboxReactiveFormsExample {
    constructor() {
        this._formBuilder = inject(FormBuilder);
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.8", type: CheckboxReactiveFormsExample, isStandalone: true, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1$2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1$2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1$2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1$2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: JsonPipe, name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.8", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { CheckboxConfigurableExample, CheckboxHarnessExample, CheckboxOverviewExample, CheckboxReactiveFormsExample };
//# sourceMappingURL=checkbox.mjs.map
