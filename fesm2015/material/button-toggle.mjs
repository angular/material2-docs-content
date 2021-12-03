import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i1 from '@angular/material/button-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';

/**
 * @title Button toggle appearance
 */
class ButtonToggleAppearanceExample {
}
ButtonToggleAppearanceExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleAppearanceExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleAppearanceExample, selector: "button-toggle-appearance-example", ngImport: i0, template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"], components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-appearance-example', template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
        }] });

/**
 * @title Exclusive selection
 */
class ButtonToggleExclusiveExample {
}
ButtonToggleExclusiveExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExclusiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleExclusiveExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleExclusiveExample, selector: "button-toggle-exclusive-example", ngImport: i0, template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"], components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExclusiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-exclusive-example', template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\n  <mat-button-toggle value=\"left\" aria-label=\"Text align left\">\n    <mat-icon>format_align_left</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"center\" aria-label=\"Text align center\">\n    <mat-icon>format_align_center</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"right\" aria-label=\"Text align right\">\n    <mat-icon>format_align_right</mat-icon>\n  </mat-button-toggle>\n  <mat-button-toggle value=\"justify\" disabled aria-label=\"Text align justify\">\n    <mat-icon>format_align_justify</mat-icon>\n  </mat-button-toggle>\n</mat-button-toggle-group>\n<div class=\"example-selected-value\">Selected value: {{group.value}}</div>\n", styles: [".example-selected-value {\n  margin: 15px 0;\n}\n"] }]
        }] });

/**
 * @title Basic button-toggles
 */
class ButtonToggleOverviewExample {
}
ButtonToggleOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleOverviewExample, selector: "button-toggle-overview-example", ngImport: i0, template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-overview-example', template: "<mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n  <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n  <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n  <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });

/**
 * @title Testing with MatButtonToggleHarness
 */
class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
}
ButtonToggleHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleHarnessExample, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });

/**
 * @title Button-toggles with forms
 */
class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl();
    }
}
ButtonToggleFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleFormsExample, selector: "button-toggle-forms-example", ngImport: i0, template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i2$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-forms-example', template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n" }]
        }] });

/**
 * @title Button toggle selection mode
 */
class ButtonToggleModeExample {
}
ButtonToggleModeExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonToggleModeExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.1", type: ButtonToggleModeExample, selector: "button-toggle-mode-example", ngImport: i0, template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n", components: [{ type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }], directives: [{ type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-mode-example', template: "<h3>Single selection</h3>\n<mat-button-toggle-group name=\"favoriteColor\" aria-label=\"Favorite Color\">\n  <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n  <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n  <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n</mat-button-toggle-group>\n\n<h3>Multiple selection</h3>\n<mat-button-toggle-group name=\"ingredients\" aria-label=\"Ingredients\" multiple>\n  <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n  <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n  <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });

const EXAMPLES = [
    ButtonToggleAppearanceExample,
    ButtonToggleExclusiveExample,
    ButtonToggleOverviewExample,
    ButtonToggleHarnessExample,
    ButtonToggleFormsExample,
    ButtonToggleModeExample,
];
class ButtonToggleExamplesModule {
}
ButtonToggleExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonToggleExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExamplesModule, declarations: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample], imports: [FormsModule, MatButtonToggleModule, MatIconModule, ReactiveFormsModule], exports: [ButtonToggleAppearanceExample,
        ButtonToggleExclusiveExample,
        ButtonToggleOverviewExample,
        ButtonToggleHarnessExample,
        ButtonToggleFormsExample,
        ButtonToggleModeExample] });
ButtonToggleExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExamplesModule, imports: [[FormsModule, MatButtonToggleModule, MatIconModule, ReactiveFormsModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: ButtonToggleExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, MatButtonToggleModule, MatIconModule, ReactiveFormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonToggleAppearanceExample, ButtonToggleExamplesModule, ButtonToggleExclusiveExample, ButtonToggleFormsExample, ButtonToggleHarnessExample, ButtonToggleModeExample, ButtonToggleOverviewExample };
//# sourceMappingURL=button-toggle.mjs.map
