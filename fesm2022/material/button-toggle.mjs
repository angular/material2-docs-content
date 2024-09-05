import * as i0 from '@angular/core';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import * as i1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.3", type: ButtonToggleAppearanceExample, isStandalone: true, selector: "button-toggle-appearance-example", ngImport: i0, template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-appearance-example', standalone: true, imports: [MatButtonToggleModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
        }] });

/**
 * @title Basic button-toggles
 */
class ButtonToggleOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.3", type: ButtonToggleOverviewExample, isStandalone: true, selector: "button-toggle-overview-example", ngImport: i0, template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-overview-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });

/**
 * @title Testing with MatButtonToggleHarness
 */
class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = signal(false);
        this.appearance = signal('standard');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.3", type: ButtonToggleHarnessExample, isStandalone: true, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled()\" [appearance]=\"appearance()\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', standalone: true, imports: [MatButtonToggleModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-button-toggle-group [disabled]=\"disabled()\" [appearance]=\"appearance()\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });

/**
 * @title Button-toggles with forms
 */
class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.3", type: ButtonToggleFormsExample, isStandalone: true, selector: "button-toggle-forms-example", ngImport: i0, template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-forms-example', standalone: true, imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n" }]
        }] });

/**
 * @title Button toggle selection mode
 */
class ButtonToggleModeExample {
    constructor() {
        this.hideSingleSelectionIndicator = signal(false);
        this.hideMultipleSelectionIndicator = signal(false);
    }
    toggleSingleSelectionIndicator() {
        this.hideSingleSelectionIndicator.update(value => !value);
    }
    toggleMultipleSelectionIndicator() {
        this.hideMultipleSelectionIndicator.update(value => !value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.0-next.3", type: ButtonToggleModeExample, isStandalone: true, selector: "button-toggle-mode-example", ngImport: i0, template: "<section>\n  <mat-checkbox\n    [checked]=\"hideSingleSelectionIndicator()\"\n    (change)=\"toggleSingleSelectionIndicator()\"\n  >\n    Hide Single Selection Indicator\n  </mat-checkbox>\n  <mat-checkbox\n    [checked]=\"hideMultipleSelectionIndicator()\"\n    (change)=\"toggleMultipleSelectionIndicator()\"\n  >\n    Hide Multiple Selection Indicator\n  </mat-checkbox>\n</section>\n<section>\n  <h3>Single selection</h3>\n  <mat-button-toggle-group\n    name=\"favoriteColor\"\n    aria-label=\"Favorite Color\"\n    [hideSingleSelectionIndicator]=\"hideSingleSelectionIndicator()\"\n  >\n    <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n    <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n    <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n<section>\n  <h3>Multiple selection</h3>\n  <mat-button-toggle-group\n    name=\"ingredients\"\n    aria-label=\"Ingredients\"\n    [hideMultipleSelectionIndicator]=\"hideMultipleSelectionIndicator()\"\n    multiple\n  >\n    <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n    <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n    <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "disabledInteractive", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled", "disabledInteractive"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2$1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.0-next.3", ngImport: i0, type: ButtonToggleModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-mode-example', standalone: true, imports: [MatButtonToggleModule, MatCheckboxModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section>\n  <mat-checkbox\n    [checked]=\"hideSingleSelectionIndicator()\"\n    (change)=\"toggleSingleSelectionIndicator()\"\n  >\n    Hide Single Selection Indicator\n  </mat-checkbox>\n  <mat-checkbox\n    [checked]=\"hideMultipleSelectionIndicator()\"\n    (change)=\"toggleMultipleSelectionIndicator()\"\n  >\n    Hide Multiple Selection Indicator\n  </mat-checkbox>\n</section>\n<section>\n  <h3>Single selection</h3>\n  <mat-button-toggle-group\n    name=\"favoriteColor\"\n    aria-label=\"Favorite Color\"\n    [hideSingleSelectionIndicator]=\"hideSingleSelectionIndicator()\"\n  >\n    <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n    <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n    <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n<section>\n  <h3>Multiple selection</h3>\n  <mat-button-toggle-group\n    name=\"ingredients\"\n    aria-label=\"Ingredients\"\n    [hideMultipleSelectionIndicator]=\"hideMultipleSelectionIndicator()\"\n    multiple\n  >\n    <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n    <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n    <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonToggleAppearanceExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleModeExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.mjs.map
