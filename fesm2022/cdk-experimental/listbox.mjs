import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk-experimental/listbox';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckbox } from '@angular/material/core';

/** @title Listbox using UI Patterns. */
class CdkListboxExample {
    orientation = 'vertical';
    focusMode = 'roving';
    selectionMode = 'explicit';
    wrap = new FormControl(true, { nonNullable: true });
    multi = new FormControl(false, { nonNullable: true });
    disabled = new FormControl(false, { nonNullable: true });
    skipDisabled = new FormControl(true, { nonNullable: true });
    fruits = [
        'Apple',
        'Apricot',
        'Banana',
        'Blackberry',
        'Blueberry',
        'Cantaloupe',
        'Cherry',
        'Clementine',
        'Cranberry',
        'Dates',
        'Figs',
        'Grapes',
        'Grapefruit',
        'Guava',
        'Kiwi',
        'Kumquat',
        'Lemon',
        'Lime',
        'Mandarin',
        'Mango',
        'Nectarine',
        'Orange',
        'Papaya',
        'Passion',
        'Peach',
        'Pear',
        'Pineapple',
        'Plum',
        'Pomegranate',
        'Raspberries',
        'Strawberry',
        'Tangerine',
        'Watermelon',
    ];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0-next.4", ngImport: i0, type: CdkListboxExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0-next.4", type: CdkListboxExample, isStandalone: true, selector: "cdk-listbox-example", exportAs: ["cdkListboxExample"], ngImport: i0, template: "<div class=\"example-listbox-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving tabindex\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion listbox -->\n<ul\n  cdkListbox\n  [wrap]=\"wrap.value\"\n  [disabled]=\"disabled.value\"\n  [multiselectable]=\"multi.value\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  [selectionMode]=\"selectionMode\"\n  class=\"example-listbox\"\n>\n  <label class=\"example-label\" id=\"fruit-example-label\">List of Fruits</label>\n\n  @for (fruit of fruits; track fruit) {\n    <li class=\"example-option\" [value]=\"fruit\" cdkOption #option=\"cdkOption\">\n      <mat-pseudo-checkbox [state]=\"option.pattern.selected() ? 'checked' : 'unchecked'\"></mat-pseudo-checkbox>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox-controls {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-option:hover,\n.example-option[tabindex='0'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-option:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-option[aria-selected='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["orientation", "multiselectable", "wrap", "skipDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "value", "activeIndex"], outputs: ["valueChange", "activeIndexChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["value", "disabled", "label"], exportAs: ["cdkOption"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2$1.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i2$1.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: MatPseudoCheckbox, selector: "mat-pseudo-checkbox", inputs: ["state", "disabled", "appearance"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0-next.4", ngImport: i0, type: CdkListboxExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-example', exportAs: 'cdkListboxExample', imports: [
                        CdkListbox,
                        CdkOption,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatSelectModule,
                        ReactiveFormsModule,
                        MatPseudoCheckbox,
                    ], template: "<div class=\"example-listbox-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving tabindex\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion listbox -->\n<ul\n  cdkListbox\n  [wrap]=\"wrap.value\"\n  [disabled]=\"disabled.value\"\n  [multiselectable]=\"multi.value\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  [selectionMode]=\"selectionMode\"\n  class=\"example-listbox\"\n>\n  <label class=\"example-label\" id=\"fruit-example-label\">List of Fruits</label>\n\n  @for (fruit of fruits; track fruit) {\n    <li class=\"example-option\" [value]=\"fruit\" cdkOption #option=\"cdkOption\">\n      <mat-pseudo-checkbox [state]=\"option.pattern.selected() ? 'checked' : 'unchecked'\"></mat-pseudo-checkbox>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox-controls {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-option:hover,\n.example-option[tabindex='0'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-option:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-option[aria-selected='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n"] }]
        }] });

export { CdkListboxExample };
//# sourceMappingURL=listbox.mjs.map
