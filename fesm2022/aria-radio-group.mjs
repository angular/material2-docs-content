import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RadioGroup, RadioButton } from '@angular/aria/radio-group';
import { Dir } from '@angular/cdk/bidi';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';

class RadioGroupStandardExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupStandardExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupStandardExample,
    isStandalone: true,
    selector: "radio-group-standard-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"standard-radio-label\"\n  >\n    <label class=\"example-label\" id=\"standard-radio-label\">Favorite Fruit</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupStandardExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-standard-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"standard-radio-label\"\n  >\n    <label class=\"example-label\" id=\"standard-radio-label\">Favorite Fruit</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupHorizontalExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupHorizontalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupHorizontalExample,
    isStandalone: true,
    selector: "radio-group-horizontal-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    orientation=\"horizontal\"\n    class=\"example-radio-group example-radio-group-horizontal example-parent\"\n    aria-labelledby=\"horizontal-radio-label\"\n  >\n    <label class=\"example-label\" id=\"horizontal-radio-label\">Favorite Fruit (Horizontal)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-horizontal-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    orientation=\"horizontal\"\n    class=\"example-radio-group example-radio-group-horizontal example-parent\"\n    aria-labelledby=\"horizontal-radio-label\"\n  >\n    <label class=\"example-label\" id=\"horizontal-radio-label\">Favorite Fruit (Horizontal)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupRtlHorizontalExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupRtlHorizontalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupRtlHorizontalExample,
    isStandalone: true,
    selector: "radio-group-rtl-horizontal-example",
    ngImport: i0,
    template: "<div class=\"example-container\" dir=\"rtl\">\n  <ul\n    ngRadioGroup\n    orientation=\"horizontal\"\n    class=\"example-radio-group example-radio-group-horizontal\"\n    aria-labelledby=\"rtl-horizontal-radio-label\"\n  >\n    <label class=\"example-label\" id=\"rtl-horizontal-radio-label\"\n      >Favorite Fruit (RTL Horizontal)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li class=\"example-radio-button\" [value]=\"fruit\" ngRadioButton #radioButton=\"ngRadioButton\">\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "directive",
      type: Dir,
      selector: "[dir]",
      inputs: ["dir"],
      outputs: ["dirChange"],
      exportAs: ["dir"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupRtlHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-rtl-horizontal-example',
      imports: [RadioGroup, RadioButton, Dir, FormsModule],
      template: "<div class=\"example-container\" dir=\"rtl\">\n  <ul\n    ngRadioGroup\n    orientation=\"horizontal\"\n    class=\"example-radio-group example-radio-group-horizontal\"\n    aria-labelledby=\"rtl-horizontal-radio-label\"\n  >\n    <label class=\"example-label\" id=\"rtl-horizontal-radio-label\"\n      >Favorite Fruit (RTL Horizontal)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li class=\"example-radio-button\" [value]=\"fruit\" ngRadioButton #radioButton=\"ngRadioButton\">\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupActiveDescendantExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupActiveDescendantExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupActiveDescendantExample,
    isStandalone: true,
    selector: "radio-group-active-descendant-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    focusMode=\"activedescendant\"\n    class=\"example-radio-group\"\n    aria-labelledby=\"active-descendant-radio-label\"\n  >\n    <label class=\"example-label\" id=\"active-descendant-radio-label\"\n      >Favorite Fruit (Active Descendant)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupActiveDescendantExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-active-descendant-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    focusMode=\"activedescendant\"\n    class=\"example-radio-group\"\n    aria-labelledby=\"active-descendant-radio-label\"\n  >\n    <label class=\"example-label\" id=\"active-descendant-radio-label\"\n      >Favorite Fruit (Active Descendant)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupDisabledFocusableExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  disabledFruits = ['Banana', 'Kiwi'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupDisabledFocusableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupDisabledFocusableExample,
    isStandalone: true,
    selector: "radio-group-disabled-focusable-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [softDisabled]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-focusable-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-focusable-radio-label\"\n      >Favorite Fruit (Disabled are Focusable)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"disabledFruits.includes(fruit)\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }} {{ disabledFruits.includes(fruit) ? '(Disabled)' : '' }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupDisabledFocusableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-disabled-focusable-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [softDisabled]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-focusable-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-focusable-radio-label\"\n      >Favorite Fruit (Disabled are Focusable)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"disabledFruits.includes(fruit)\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }} {{ disabledFruits.includes(fruit) ? '(Disabled)' : '' }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupDisabledSkippedExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  disabledFruits = ['Banana', 'Kiwi'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupDisabledSkippedExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupDisabledSkippedExample,
    isStandalone: true,
    selector: "radio-group-disabled-skipped-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-skipped-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-skipped-radio-label\"\n      >Select a Fruit (Disabled are Skipped)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"disabledFruits.includes(fruit)\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }} {{ disabledFruits.includes(fruit) ? '(Disabled)' : '' }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupDisabledSkippedExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-disabled-skipped-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-skipped-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-skipped-radio-label\"\n      >Select a Fruit (Disabled are Skipped)</label\n    >\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        [disabled]=\"disabledFruits.includes(fruit)\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }} {{ disabledFruits.includes(fruit) ? '(Disabled)' : '' }}</span>\n      </li>\n    }\n  </ul>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupReadonlyExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupReadonlyExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupReadonlyExample,
    isStandalone: true,
    selector: "radio-group-readonly-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [readonly]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"readonly-radio-label\"\n  >\n    <label class=\"example-label\" id=\"readonly-radio-label\">Favorite Fruit (Readonly)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <p><i>The radio group is navigable, but selection cannot be changed.</i></p>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupReadonlyExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-readonly-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [readonly]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"readonly-radio-label\"\n  >\n    <label class=\"example-label\" id=\"readonly-radio-label\">Favorite Fruit (Readonly)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <p><i>The radio group is navigable, but selection cannot be changed.</i></p>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupDisabledExample {
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupDisabledExample,
    isStandalone: true,
    selector: "radio-group-disabled-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [disabled]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-radio-label\">Favorite Fruit (Disabled)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <p><i>The entire radio group is disabled. Focus should not enter the group.</i></p>\n</div>\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-disabled-example',
      imports: [RadioGroup, RadioButton, FormsModule],
      template: "<div class=\"example-container\">\n  <ul\n    ngRadioGroup\n    [disabled]=\"true\"\n    class=\"example-radio-group example-parent\"\n    aria-labelledby=\"disabled-radio-label\"\n  >\n    <label class=\"example-label\" id=\"disabled-radio-label\">Favorite Fruit (Disabled)</label>\n    @for (fruit of fruits; track fruit) {\n      <li\n        class=\"example-radio-button example-stateful example-selectable\"\n        [value]=\"fruit\"\n        ngRadioButton\n        #radioButton=\"ngRadioButton\"\n      >\n        <span\n          class=\"example-radio-indicator\"\n          [class.example-radio-checked]=\"radioButton.selected()\"\n        ></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <p><i>The entire radio group is disabled. Focus should not enter the group.</i></p>\n</div>\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class RadioGroupConfigurableExample {
  orientation = 'vertical';
  disabled = new FormControl(false, {
    nonNullable: true
  });
  fruits = ['Apple', 'Apricot', 'Banana', 'Blackberry', 'Blueberry', 'Cantaloupe', 'Cherry', 'Clementine', 'Cranberry', 'Dates', 'Figs', 'Grapes', 'Grapefruit', 'Guava', 'Kiwi', 'Kumquat', 'Lemon', 'Lime', 'Mandarin', 'Mango', 'Nectarine', 'Orange', 'Papaya', 'Passion', 'Peach', 'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberries', 'Strawberry', 'Tangerine', 'Watermelon'];
  readonly = new FormControl(false, {
    nonNullable: true
  });
  softDisabled = new FormControl(false, {
    nonNullable: true
  });
  focusMode = 'roving';
  disabledOptions = ['Banana'];
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: RadioGroupConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: RadioGroupConfigurableExample,
    isStandalone: true,
    selector: "radio-group-configurable-example",
    ngImport: i0,
    template: "<div class=\"example-radio-controls\">\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n  <mat-checkbox [formControl]=\"softDisabled\">Soft Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Disabled Radio Options</mat-label>\n    <mat-select [(value)]=\"disabledOptions\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion radio-group -->\n<ul\n  ngRadioGroup\n  [disabled]=\"disabled.value\"\n  [readonly]=\"readonly.value\"\n  [softDisabled]=\"softDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  class=\"example-radio-group example-parent\"\n  aria-label=\"Select your favorite fruit\"\n>\n  @for (fruit of fruits; track fruit) {\n    @let optionDisabled = disabledOptions.includes(fruit);\n    <li\n      ngRadioButton\n      [value]=\"fruit\"\n      [disabled]=\"optionDisabled\"\n      class=\"example-radio-button example-stateful example-selectable\"\n    >\n      <span class=\"example-radio-indicator\"></span>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion radio-group -->\n",
    styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "softDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
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
      type: FormsModule
    }, {
      kind: "directive",
      type: i3.NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }, {
      kind: "directive",
      type: i3.FormControlDirective,
      selector: "[formControl]",
      inputs: ["formControl", "disabled", "ngModel"],
      outputs: ["ngModelChange"],
      exportAs: ["ngForm"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: RadioGroupConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'radio-group-configurable-example',
      imports: [RadioGroup, RadioButton, MatCheckboxModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
      template: "<div class=\"example-radio-controls\">\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n  <mat-checkbox [formControl]=\"softDisabled\">Soft Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Disabled Radio Options</mat-label>\n    <mat-select [(value)]=\"disabledOptions\" multiple>\n      @for (fruit of fruits; track fruit) {\n        <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n      }\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion radio-group -->\n<ul\n  ngRadioGroup\n  [disabled]=\"disabled.value\"\n  [readonly]=\"readonly.value\"\n  [softDisabled]=\"softDisabled.value\"\n  [orientation]=\"orientation\"\n  [focusMode]=\"focusMode\"\n  class=\"example-radio-group example-parent\"\n  aria-label=\"Select your favorite fruit\"\n>\n  @for (fruit of fruits; track fruit) {\n    @let optionDisabled = disabledOptions.includes(fruit);\n    <li\n      ngRadioButton\n      [value]=\"fruit\"\n      [disabled]=\"optionDisabled\"\n      class=\"example-radio-button example-stateful example-selectable\"\n    >\n      <span class=\"example-radio-indicator\"></span>\n      <span>{{ fruit }}</span>\n    </li>\n  }\n</ul>\n<!-- #enddocregion radio-group -->\n",
      styles: [".example-radio-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

export { RadioGroupActiveDescendantExample, RadioGroupConfigurableExample, RadioGroupDisabledExample, RadioGroupDisabledFocusableExample, RadioGroupDisabledSkippedExample, RadioGroupHorizontalExample, RadioGroupReadonlyExample, RadioGroupRtlHorizontalExample, RadioGroupStandardExample };
//# sourceMappingURL=aria-radio-group.mjs.map
