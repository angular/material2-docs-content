import * as i0 from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import * as i3$1 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/tooltip';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i2 from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import * as i3 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i4 from '@angular/material/core';
import * as i2$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i3$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * @title Tooltip that demonstrates auto-hiding when it clips out of its scrolling container.
 */
class TooltipAutoHideExample {
    constructor() {
        this.positionOptions = ['below', 'above', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipAutoHideExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-rc.0", type: TooltipAutoHideExample, isStandalone: true, selector: "tooltip-auto-hide-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value!\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n", styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "directive", type: i2.CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipAutoHideExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-auto-hide-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatSelectModule,
                        FormsModule,
                        ReactiveFormsModule,
                        CdkScrollable,
                        MatButtonModule,
                        MatTooltipModule,
                    ], template: "<mat-form-field>\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button mat-raised-button #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value!\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n", styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can have a custom class applied.
 */
class TooltipCustomClassExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipCustomClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipCustomClassExample, isStandalone: true, selector: "tooltip-custom-class-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipCustomClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-custom-class-example', encapsulation: ViewEncapsulation.None, standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n", styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"] }]
        }] });

/**
 * @title Tooltip with a show and hide delay
 */
class TooltipDelayExample {
    constructor() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipDelayExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipDelayExample, isStandalone: true, selector: "tooltip-delay-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipDelayExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-delay-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatTooltipModule,
                    ], template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button mat-raised-button matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n", styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can be disabled
 */
class TooltipDisabledExample {
    constructor() {
        this.disabled = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipDisabledExample, isStandalone: true, selector: "tooltip-disabled-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n", styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i3$2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-disabled-example', standalone: true, imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule], template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n", styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Tooltip that can be manually shown/hidden.
 */
class TooltipManualExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipManualExample, isStandalone: true, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
        }] });

/**
 * @title Tooltip with a changing message
 */
class TooltipMessageExample {
    constructor() {
        this.message = new FormControl('Info about the action');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipMessageExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipMessageExample, isStandalone: true, selector: "tooltip-message-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value || ''\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2$2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipMessageExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-message-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatTooltipModule,
                    ], template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button mat-raised-button\n        [matTooltip]=\"message.value || ''\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"] }]
        }] });

/** Custom options the configure the tooltip's default show/hide delays. */
const myCustomTooltipDefaults = {
    showDelay: 1000,
    hideDelay: 1000,
    touchendHideDelay: 1000,
};
/**
 * @title Tooltip with a show and hide delay
 */
class TooltipModifiedDefaultsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipModifiedDefaultsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipModifiedDefaultsExample, isStandalone: true, selector: "tooltip-modified-defaults-example", providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipModifiedDefaultsExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-modified-defaults-example', providers: [{ provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults }], standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n" }]
        }] });

/**
 * @title Basic tooltip
 */
class TooltipOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipOverviewExample, isStandalone: true, selector: "tooltip-overview-example", ngImport: i0, template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-overview-example', standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n" }]
        }] });

/**
 * @title Tooltip with a custom position
 */
class TooltipPositionExample {
    constructor() {
        this.positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
        this.position = new FormControl(this.positionOptions[0]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-rc.0", type: TooltipPositionExample, isStandalone: true, selector: "tooltip-position-example", ngImport: i0, template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value!\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatSelectModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatButtonModule,
                        MatTooltipModule,
                    ], template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value!\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n", styles: [".example-user-input {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Basic tooltip
 */
class TooltipPositionAtOriginExample {
    constructor() {
        this.enabled = new FormControl(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipPositionAtOriginExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipPositionAtOriginExample, isStandalone: true, selector: "tooltip-position-at-origin-example", ngImport: i0, template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1$1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i3$2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3$1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipPositionAtOriginExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-position-at-origin-example', standalone: true, imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule], template: "<button mat-raised-button\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n", styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatTooltipHarness
 */
class TooltipHarnessExample {
    constructor() {
        this.message = 'Tooltip message';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-rc.0", type: TooltipHarnessExample, isStandalone: true, selector: "tooltip-harness-example", ngImport: i0, template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n", dependencies: [{ kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-rc.0", ngImport: i0, type: TooltipHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-harness-example', standalone: true, imports: [MatTooltipModule], template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipHarnessExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionAtOriginExample, TooltipPositionExample };
//# sourceMappingURL=tooltip.mjs.map
