import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { Listbox, Option } from '@angular/aria/listbox';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatPseudoCheckbox } from '@angular/material/core';
import { Dir } from '@angular/cdk/bidi';

class ListboxConfigurableExample {
  orientation = 'vertical';
  focusMode = 'roving';
  selectionMode = 'explicit';
  selection = ['Banana', 'Blackberry'];
  disabledOptions = ['Banana', 'Cantaloupe'];
  wrap = new FormControl(true, {
    nonNullable: true
  });
  multi = new FormControl(true, {
    nonNullable: true
  });
  disabled = new FormControl(false, {
    nonNullable: true
  });
  readonly = new FormControl(false, {
    nonNullable: true
  });
  softDisabled = new FormControl(false, {
    nonNullable: true
  });
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxConfigurableExample,
    isStandalone: true,
    selector: "listbox-configurable-example",
    ngImport: i0,
    template: "<div class=\"example-listbox-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n  <mat-checkbox [formControl]=\"softDisabled\">Soft Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection</mat-label>\n    <mat-select [(value)]=\"selection\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Disabled Options</mat-label>\n    <mat-select [(value)]=\"disabledOptions\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving tabindex\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion listbox -->\n<ul\n  ngListbox\n  #listbox=\"ngListbox\"\n  [values]=\"selection\"\n  [wrap]=\"wrap.value\"\n  [multi]=\"multi.value\"\n  [readonly]=\"readonly.value\"\n  [disabled]=\"disabled.value\"\n  [softDisabled]=\"softDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  [selectionMode]=\"selectionMode\"\n  class=\"example-listbox example-parent\"\n  aria-labelledby=\"configurable-select-label\"\n>\n  <label class=\"example-label\" id=\"configurable-select-label\">Configurable Select Fruits</label>\n\n  @for (fruit of fruits; track fruit) {\n    @let optionDisabled = disabledOptions.includes(fruit);\n\n    <li\n      class=\"example-option example-stateful example-selectable\"\n      [disabled]=\"optionDisabled\"\n      [value]=\"fruit\"\n      ngOption\n      #option=\"ngOption\"\n    >\n      <mat-pseudo-checkbox\n        [disabled]=\"optionDisabled || listbox.disabled()\"\n        [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n      ></mat-pseudo-checkbox>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "ngmodule",
      type: MatCheckboxModule
    }, {
      kind: "component",
      type: i2.MatCheckbox,
      selector: "mat-checkbox",
      inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"],
      outputs: ["change", "indeterminateChange"],
      exportAs: ["matCheckbox"]
    }, {
      kind: "ngmodule",
      type: MatFormFieldModule
    }, {
      kind: "component",
      type: i1.MatFormField,
      selector: "mat-form-field",
      inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"],
      exportAs: ["matFormField"]
    }, {
      kind: "directive",
      type: i1.MatLabel,
      selector: "mat-label"
    }, {
      kind: "ngmodule",
      type: MatSelectModule
    }, {
      kind: "component",
      type: i2$1.MatSelect,
      selector: "mat-select",
      inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"],
      outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"],
      exportAs: ["matSelect"]
    }, {
      kind: "component",
      type: i2$1.MatOption,
      selector: "mat-option",
      inputs: ["value", "id", "disabled"],
      outputs: ["onSelectionChange"],
      exportAs: ["matOption"]
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }, {
      kind: "directive",
      type: i3.NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "directive",
      type: i3.FormControlDirective,
      selector: "[formControl]",
      inputs: ["formControl", "disabled", "ngModel"],
      outputs: ["ngModelChange"],
      exportAs: ["ngForm"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-configurable-example',
      imports: [Listbox, Option, MatCheckboxModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatPseudoCheckbox],
      template: "<div class=\"example-listbox-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n  <mat-checkbox [formControl]=\"softDisabled\">Soft Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection</mat-label>\n    <mat-select [(value)]=\"selection\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Disabled Options</mat-label>\n    <mat-select [(value)]=\"disabledOptions\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving tabindex\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion listbox -->\n<ul\n  ngListbox\n  #listbox=\"ngListbox\"\n  [values]=\"selection\"\n  [wrap]=\"wrap.value\"\n  [multi]=\"multi.value\"\n  [readonly]=\"readonly.value\"\n  [disabled]=\"disabled.value\"\n  [softDisabled]=\"softDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  [selectionMode]=\"selectionMode\"\n  class=\"example-listbox example-parent\"\n  aria-labelledby=\"configurable-select-label\"\n>\n  <label class=\"example-label\" id=\"configurable-select-label\">Configurable Select Fruits</label>\n\n  @for (fruit of fruits; track fruit) {\n    @let optionDisabled = disabledOptions.includes(fruit);\n\n    <li\n      class=\"example-option example-stateful example-selectable\"\n      [disabled]=\"optionDisabled\"\n      [value]=\"fruit\"\n      ngOption\n      #option=\"ngOption\"\n    >\n      <mat-pseudo-checkbox\n        [disabled]=\"optionDisabled || listbox.disabled()\"\n        [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n      ></mat-pseudo-checkbox>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxSingleSelectExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxSingleSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxSingleSelectExample,
    isStandalone: true,
    selector: "listbox-single-select-example",
    ngImport: i0,
    template: "<!-- Single Select -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"false\"\n    selectionMode=\"explicit\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"single-select-label\"\n  >\n    <label class=\"example-label\" id=\"single-select-label\">Single Select Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxSingleSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-single-select-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Single Select -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"false\"\n    selectionMode=\"explicit\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"single-select-label\"\n  >\n    <label class=\"example-label\" id=\"single-select-label\">Single Select Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxMultiSelectExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxMultiSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxMultiSelectExample,
    isStandalone: true,
    selector: "listbox-multi-select-example",
    ngImport: i0,
    template: "<!-- Multi Select -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"true\"\n    selectionMode=\"explicit\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"multi-select-label\"\n  >\n    <label class=\"example-label\" id=\"multi-select-label\">Multi Select Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxMultiSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-multi-select-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Multi Select -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"true\"\n    selectionMode=\"explicit\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"multi-select-label\"\n  >\n    <label class=\"example-label\" id=\"multi-select-label\">Multi Select Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxSingleSelectFollowFocusExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxSingleSelectFollowFocusExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxSingleSelectFollowFocusExample,
    isStandalone: true,
    selector: "listbox-single-select-follow-focus-example",
    ngImport: i0,
    template: "<!-- Single Select w/ Selection Follows Focus -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"false\"\n    selectionMode=\"follow\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"single-follow-label\"\n  >\n    <label class=\"example-label\" id=\"single-follow-label\">Single Select (Follow Focus) Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxSingleSelectFollowFocusExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-single-select-follow-focus-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Single Select w/ Selection Follows Focus -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"false\"\n    selectionMode=\"follow\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"single-follow-label\"\n  >\n    <label class=\"example-label\" id=\"single-follow-label\">Single Select (Follow Focus) Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxMultiSelectFollowFocusExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxMultiSelectFollowFocusExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxMultiSelectFollowFocusExample,
    isStandalone: true,
    selector: "listbox-multi-select-follow-focus-example",
    ngImport: i0,
    template: "<!-- Multi Select w/ Selection Follows Focus -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"true\"\n    selectionMode=\"follow\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"multi-follow-label\"\n  >\n    <label class=\"example-label\" id=\"multi-follow-label\">Multi Select (Follow Focus) Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxMultiSelectFollowFocusExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-multi-select-follow-focus-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Multi Select w/ Selection Follows Focus -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [multi]=\"true\"\n    selectionMode=\"follow\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"multi-follow-label\"\n  >\n    <label class=\"example-label\" id=\"multi-follow-label\">Multi Select (Follow Focus) Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxHorizontalExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxHorizontalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxHorizontalExample,
    isStandalone: true,
    selector: "listbox-horizontal-example",
    ngImport: i0,
    template: "<!-- Horizontal Orientation -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    orientation=\"horizontal\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"horizontal-label\"\n  >\n    <label class=\"example-label\" id=\"horizontal-label\">Horizontal Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-horizontal-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Horizontal Orientation -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    orientation=\"horizontal\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"horizontal-label\"\n  >\n    <label class=\"example-label\" id=\"horizontal-label\">Horizontal Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxRtlHorizontalExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxRtlHorizontalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxRtlHorizontalExample,
    isStandalone: true,
    selector: "listbox-rtl-horizontal-example",
    ngImport: i0,
    template: "<!-- RTL & Horizontal Orientation -->\n<div class=\"example-container\" dir=\"rtl\">\n  <ul\n    ngListbox\n    orientation=\"horizontal\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"rtl-horizontal-label\"\n  >\n    <label class=\"example-label\" id=\"rtl-horizontal-label\">RTL Horizontal Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "directive",
      type: Dir,
      selector: "[dir]",
      inputs: ["dir"],
      outputs: ["dirChange"],
      exportAs: ["dir"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxRtlHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-rtl-horizontal-example',
      imports: [Listbox, Option, Dir, MatPseudoCheckbox],
      template: "<!-- RTL & Horizontal Orientation -->\n<div class=\"example-container\" dir=\"rtl\">\n  <ul\n    ngListbox\n    orientation=\"horizontal\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"rtl-horizontal-label\"\n  >\n    <label class=\"example-label\" id=\"rtl-horizontal-label\">RTL Horizontal Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxActiveDescendantExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxActiveDescendantExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxActiveDescendantExample,
    isStandalone: true,
    selector: "listbox-active-descendant-example",
    ngImport: i0,
    template: "<!-- Active Descendant -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    focusMode=\"activedescendant\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"active-descendant-label\"\n  >\n    <label class=\"example-label\" id=\"active-descendant-label\">Active Descendant Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxActiveDescendantExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-active-descendant-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Active Descendant -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    focusMode=\"activedescendant\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"active-descendant-label\"\n  >\n    <label class=\"example-label\" id=\"active-descendant-label\">Active Descendant Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxDisabledFocusableExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxDisabledFocusableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxDisabledFocusableExample,
    isStandalone: true,
    selector: "listbox-disabled-focusable-example",
    ngImport: i0,
    template: "<!-- Disabled Options are Focusable -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [softDisabled]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-focusable-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-focusable-label\">Disabled Focusable Fruits</label>\n    @for (fruit of fruits; track fruit; let i = $index) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"i % 2 === 0\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxDisabledFocusableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-disabled-focusable-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Disabled Options are Focusable -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [softDisabled]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-focusable-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-focusable-label\">Disabled Focusable Fruits</label>\n    @for (fruit of fruits; track fruit; let i = $index) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"i % 2 === 0\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxDisabledSkippedExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxDisabledSkippedExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxDisabledSkippedExample,
    isStandalone: true,
    selector: "listbox-disabled-skipped-example",
    ngImport: i0,
    template: "<!-- Disabled Options are Skipped -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [softDisabled]=\"false\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-skipped-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-skipped-label\">Disabled Skipped Fruits</label>\n    @for (fruit of fruits; track fruit; let i = $index) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"i % 2 === 0\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxDisabledSkippedExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-disabled-skipped-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Disabled Options are Skipped -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [softDisabled]=\"false\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-skipped-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-skipped-label\">Disabled Skipped Fruits</label>\n    @for (fruit of fruits; track fruit; let i = $index) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"i % 2 === 0\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxReadonlyExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxReadonlyExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxReadonlyExample,
    isStandalone: true,
    selector: "listbox-readonly-example",
    ngImport: i0,
    template: "<!-- Readonly -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [readonly]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"readonly-label\"\n  >\n    <label class=\"example-label\" id=\"readonly-label\">Readonly Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxReadonlyExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-readonly-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<!-- Readonly -->\n<div class=\"example-container\">\n  <ul\n    ngListbox\n    [readonly]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"readonly-label\"\n  >\n    <label class=\"example-label\" id=\"readonly-label\">Readonly Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

class ListboxDisabledExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ListboxDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ListboxDisabledExample,
    isStandalone: true,
    selector: "listbox-disabled-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngListbox\n    [disabled]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-label\">Disabled Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngListbox"]
    }, {
      kind: "directive",
      type: Option,
      selector: "[ngOption]",
      inputs: ["id", "value", "disabled", "label"],
      exportAs: ["ngOption"]
    }, {
      kind: "component",
      type: MatPseudoCheckbox,
      selector: "mat-pseudo-checkbox",
      inputs: ["state", "disabled", "appearance"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ListboxDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'listbox-disabled-example',
      imports: [Listbox, Option, MatPseudoCheckbox],
      template: "<div class=\"example-container\">\n  <ul\n    ngListbox\n    [disabled]=\"true\"\n    class=\"example-listbox example-parent\"\n    aria-labelledby=\"disabled-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-label\">Disabled Fruits</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-option example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngOption\n        #option=\"ngOption\"\n      >\n        <mat-pseudo-checkbox\n          [state]=\"option.selected() ? 'checked' : 'unchecked'\"\n        ></mat-pseudo-checkbox>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-listbox-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-listbox {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n  user-select: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option::before {\n  display: none;\n}\n\n.example-listbox[aria-orientation='horizontal'] .example-option[aria-selected='true']::before {\n  display: block;\n}\n\n.example-listbox[aria-disabled='true'] .example-option {\n  pointer-events: none;\n}\n\n.example-label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-option {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n"]
    }]
  }]
});

export { ListboxActiveDescendantExample, ListboxConfigurableExample, ListboxDisabledExample, ListboxDisabledFocusableExample, ListboxDisabledSkippedExample, ListboxHorizontalExample, ListboxMultiSelectExample, ListboxMultiSelectFollowFocusExample, ListboxReadonlyExample, ListboxRtlHorizontalExample, ListboxSingleSelectExample, ListboxSingleSelectFollowFocusExample };
//# sourceMappingURL=aria-listbox.mjs.map
