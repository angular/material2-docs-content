import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import { Toolbar, ToolbarWidget } from '@angular/aria/toolbar';
import { RadioButton, RadioGroup } from '@angular/aria/radio-group';
import * as i1 from '@angular/cdk/a11y';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

class ToolbarBasicHorizontalExample {
  _liveAnnouncer;
  constructor(_liveAnnouncer) {
    this._liveAnnouncer = _liveAnnouncer;
  }
  alignments = [{
    value: 'left',
    label: 'Left'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'right',
    label: 'Right'
  }];
  format(tool) {
    console.log(`Tool activated: ${tool}`);
    this._liveAnnouncer.announce(`${tool} applied`, 'polite');
  }
  test(action) {
    console.log(`Action triggered: ${action}`);
    this._liveAnnouncer.announce(`${action} button activated`, 'polite');
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ToolbarBasicHorizontalExample,
    deps: [{
      token: i1.LiveAnnouncer
    }],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ToolbarBasicHorizontalExample,
    isStandalone: true,
    selector: "toolbar-basic-horizontal-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n    <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
    styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "skipDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "skipDisabled", "disabled", "wrap"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["disabled"],
      exportAs: ["ngToolbarWidget"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ToolbarBasicHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-basic-horizontal-example',
      imports: [RadioButton, RadioGroup, Toolbar, ToolbarWidget],
      template: "<div class=\"example-container\">\n    <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
      styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: i1.LiveAnnouncer
  }]
});

class ToolbarBasicVerticalExample {
  _liveAnnouncer;
  constructor(_liveAnnouncer) {
    this._liveAnnouncer = _liveAnnouncer;
  }
  alignments = [{
    value: 'left',
    label: 'Left'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'right',
    label: 'Right'
  }];
  format(tool) {
    console.log(`Tool activated: ${tool}`);
    this._liveAnnouncer.announce(`${tool} applied`, 'polite');
  }
  test(action) {
    console.log(`Action triggered: ${action}`);
    this._liveAnnouncer.announce(`${action} button activated`, 'polite');
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ToolbarBasicVerticalExample,
    deps: [{
      token: i1.LiveAnnouncer
    }],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ToolbarBasicVerticalExample,
    isStandalone: true,
    selector: "toolbar-basic-vertical-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n    <div ngToolbar orientation=\"vertical\" class=\"example-toolbar\" aria-label=\"Vertical Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
    styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "skipDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "skipDisabled", "disabled", "wrap"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["disabled"],
      exportAs: ["ngToolbarWidget"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ToolbarBasicVerticalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-basic-vertical-example',
      imports: [RadioButton, RadioGroup, Toolbar, ToolbarWidget],
      template: "<div class=\"example-container\">\n    <div ngToolbar orientation=\"vertical\" class=\"example-toolbar\" aria-label=\"Vertical Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
      styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: i1.LiveAnnouncer
  }]
});

class ToolbarConfigurableExample {
  skipDisabled = new FormControl(false, {
    nonNullable: true
  });
  wrap = new FormControl(true, {
    nonNullable: true
  });
  toolbarDisabled = new FormControl(false, {
    nonNullable: true
  });
  orientation = 'horizontal';
  fruits = ['Apple', 'Apricot', 'Banana'];
  buttonFruits = ['Pear', 'Blueberry', 'Cherry', 'Date'];
  disabled = new FormControl(false, {
    nonNullable: true
  });
  readonly = new FormControl(false, {
    nonNullable: true
  });
  disabledOptions = ['Banana'];
  disabledButtonOptions = ['Pear'];
  test(x) {
    console.log(x);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ToolbarConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ToolbarConfigurableExample,
    isStandalone: true,
    selector: "toolbar-configurable-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <h4 class=\"example-heading\">Toolbar Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n    <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n    <mat-checkbox [formControl]=\"toolbarDisabled\">Disabled</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Orientation</mat-label>\n      <mat-select [(value)]=\"orientation\">\n        <mat-option value=\"vertical\">Vertical</mat-option>\n        <mat-option value=\"horizontal\">Horizontal</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <h4 class=\"example-heading\">Radio Group Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n    <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Radio Options</mat-label>\n      <mat-select [(value)]=\"disabledOptions\" multiple>\n        @for (fruit of fruits; track fruit) {\n          <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <h4 class=\"example-heading\">Button</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Buttons</mat-label>\n      <mat-select [(value)]=\"disabledButtonOptions\" multiple>\n        @for (fruit of buttonFruits; track fruit) {\n          <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- #docregion toolbar -->\n<div\n  ngToolbar\n  [orientation]=\"orientation\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [wrap]=\"wrap.value\"\n  [disabled]=\"toolbarDisabled.value\"\n  class=\"example-toolbar\"\n>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Pear')\"\n    [disabled]=\"disabledButtonOptions.includes('Pear')\"\n  >\n    Pear\n  </button>\n  <ul\n    ngRadioGroup\n    [disabled]=\"disabled.value\"\n    [readonly]=\"readonly.value\"\n    class=\"example-radio-group\"\n    aria-label=\"Select your favorite fruit\"\n  >\n    @for (fruit of fruits; track fruit) {\n      @let optionDisabled = disabledOptions.includes(fruit);\n      <li ngRadioButton [value]=\"fruit\" [disabled]=\"optionDisabled\" class=\"example-radio-button\">\n        <span class=\"example-radio-indicator\"></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <ul ngRadioGroup class=\"example-radio-group\" aria-label=\"Select your favorite fruit\">\n    @for (fruit of fruits; track fruit) {\n      @let optionDisabled = disabledOptions.includes(fruit);\n      <li ngRadioButton [value]=\"fruit\" [disabled]=\"optionDisabled\" class=\"example-radio-button\">\n        <span class=\"example-radio-indicator\"></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Blueberry')\"\n    [disabled]=\"disabledButtonOptions.includes('Blueberry')\"\n  >\n    Blueberry\n  </button>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Cherry')\"\n    [disabled]=\"disabledButtonOptions.includes('Cherry')\"\n  >\n    Cherry\n  </button>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Date')\"\n    [disabled]=\"disabledButtonOptions.includes('Date')\"\n  >\n    Date\n  </button>\n</div>\n<!-- #enddocregion toolbar -->\n",
    styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "skipDisabled", "focusMode", "disabled", "readonly", "value"],
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
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "skipDisabled", "disabled", "wrap"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["disabled"],
      exportAs: ["ngToolbarWidget"]
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
      type: i1$1.MatFormField,
      selector: "mat-form-field",
      inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"],
      exportAs: ["matFormField"]
    }, {
      kind: "directive",
      type: i1$1.MatLabel,
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
  type: ToolbarConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-configurable-example',
      imports: [RadioGroup, RadioButton, Toolbar, ToolbarWidget, MatCheckboxModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
      template: "<div class=\"example-container\">\n  <h4 class=\"example-heading\">Toolbar Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n    <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n    <mat-checkbox [formControl]=\"toolbarDisabled\">Disabled</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Orientation</mat-label>\n      <mat-select [(value)]=\"orientation\">\n        <mat-option value=\"vertical\">Vertical</mat-option>\n        <mat-option value=\"horizontal\">Horizontal</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <h4 class=\"example-heading\">Radio Group Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n    <mat-checkbox [formControl]=\"readonly\">Readonly</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Radio Options</mat-label>\n      <mat-select [(value)]=\"disabledOptions\" multiple>\n        @for (fruit of fruits; track fruit) {\n          <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <h4 class=\"example-heading\">Button</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Buttons</mat-label>\n      <mat-select [(value)]=\"disabledButtonOptions\" multiple>\n        @for (fruit of buttonFruits; track fruit) {\n          <mat-option [value]=\"fruit\">{{fruit}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- #docregion toolbar -->\n<div\n  ngToolbar\n  [orientation]=\"orientation\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [wrap]=\"wrap.value\"\n  [disabled]=\"toolbarDisabled.value\"\n  class=\"example-toolbar\"\n>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Pear')\"\n    [disabled]=\"disabledButtonOptions.includes('Pear')\"\n  >\n    Pear\n  </button>\n  <ul\n    ngRadioGroup\n    [disabled]=\"disabled.value\"\n    [readonly]=\"readonly.value\"\n    class=\"example-radio-group\"\n    aria-label=\"Select your favorite fruit\"\n  >\n    @for (fruit of fruits; track fruit) {\n      @let optionDisabled = disabledOptions.includes(fruit);\n      <li ngRadioButton [value]=\"fruit\" [disabled]=\"optionDisabled\" class=\"example-radio-button\">\n        <span class=\"example-radio-indicator\"></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <ul ngRadioGroup class=\"example-radio-group\" aria-label=\"Select your favorite fruit\">\n    @for (fruit of fruits; track fruit) {\n      @let optionDisabled = disabledOptions.includes(fruit);\n      <li ngRadioButton [value]=\"fruit\" [disabled]=\"optionDisabled\" class=\"example-radio-button\">\n        <span class=\"example-radio-indicator\"></span>\n        <span>{{ fruit }}</span>\n      </li>\n    }\n  </ul>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Blueberry')\"\n    [disabled]=\"disabledButtonOptions.includes('Blueberry')\"\n  >\n    Blueberry\n  </button>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Cherry')\"\n    [disabled]=\"disabledButtonOptions.includes('Cherry')\"\n  >\n    Cherry\n  </button>\n  <button\n    ngToolbarWidget\n    class=\"example-radio-button\"\n    (click)=\"test('Date')\"\n    [disabled]=\"disabledButtonOptions.includes('Date')\"\n  >\n    Date\n  </button>\n</div>\n<!-- #enddocregion toolbar -->\n",
      styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }]
});

class ToolbarRtlExample {
  _liveAnnouncer;
  constructor(_liveAnnouncer) {
    this._liveAnnouncer = _liveAnnouncer;
  }
  alignments = [{
    value: 'left',
    label: 'Left'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'right',
    label: 'Right'
  }];
  format(tool) {
    console.log(`Tool activated: ${tool}`);
    this._liveAnnouncer.announce(`${tool} applied`, 'polite');
  }
  test(action) {
    console.log(`Action triggered: ${action}`);
    this._liveAnnouncer.announce(`${action} button activated`, 'polite');
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ToolbarRtlExample,
    deps: [{
      token: i1.LiveAnnouncer
    }],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ToolbarRtlExample,
    isStandalone: true,
    selector: "toolbar-rtl-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n    <div ngToolbar class=\"example-toolbar\" dir=\"rtl\" aria-label=\"RTL Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
    styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "skipDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "skipDisabled", "disabled", "wrap"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["disabled"],
      exportAs: ["ngToolbarWidget"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ToolbarRtlExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-rtl-example',
      imports: [RadioButton, RadioGroup, Toolbar, ToolbarWidget],
      template: "<div class=\"example-container\">\n    <div ngToolbar class=\"example-toolbar\" dir=\"rtl\" aria-label=\"RTL Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li ngRadioButton [value]=\"alignment.value\" class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
      styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: i1.LiveAnnouncer
  }]
});

class ToolbarSkipDisabledExample {
  _liveAnnouncer;
  constructor(_liveAnnouncer) {
    this._liveAnnouncer = _liveAnnouncer;
  }
  alignments = [{
    value: 'left',
    label: 'Left'
  }, {
    value: 'center',
    label: 'Center'
  }, {
    value: 'right',
    label: 'Right'
  }];
  disabledOptions = ['center'];
  format(tool) {
    console.log(`Tool activated: ${tool}`);
    this._liveAnnouncer.announce(`${tool} applied`, 'polite');
  }
  test(action) {
    console.log(`Action triggered: ${action}`);
    this._liveAnnouncer.announce(`${action} button activated`, 'polite');
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: ToolbarSkipDisabledExample,
    deps: [{
      token: i1.LiveAnnouncer
    }],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: ToolbarSkipDisabledExample,
    isStandalone: true,
    selector: "toolbar-skip-disabled-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n    <div ngToolbar skipDisabled=\"true\" class=\"example-toolbar\" aria-label=\"Skip Disabled Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li\n              ngRadioButton\n              [value]=\"alignment.value\"\n              [disabled]=\"disabledOptions.includes(alignment.value)\"\n              class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
    styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"],
    dependencies: [{
      kind: "directive",
      type: RadioButton,
      selector: "[ngRadioButton]",
      inputs: ["value", "disabled"],
      exportAs: ["ngRadioButton"]
    }, {
      kind: "directive",
      type: RadioGroup,
      selector: "[ngRadioGroup]",
      inputs: ["orientation", "skipDisabled", "focusMode", "disabled", "readonly", "value"],
      outputs: ["valueChange"],
      exportAs: ["ngRadioGroup"]
    }, {
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "skipDisabled", "disabled", "wrap"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["disabled"],
      exportAs: ["ngToolbarWidget"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: ToolbarSkipDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-skip-disabled-example',
      imports: [RadioButton, RadioGroup, Toolbar, ToolbarWidget],
      template: "<div class=\"example-container\">\n    <div ngToolbar skipDisabled=\"true\" class=\"example-toolbar\" aria-label=\"Skip Disabled Toolbar Text Formatting Tools\">\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('bold')\"\n            (keydown.enter)=\"format('bold')\">\n            Bold\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\"\n            (click)=\"format('italic')\"\n            (keydown.enter)=\"format('italic')\">\n            Italic\n        </button>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            (click)=\"format('underline')\"\n            (keydown.enter)=\"format('underline')\">\n            Underline\n        </button>\n        <ul\n            ngRadioGroup\n            class=\"example-radio-group\"\n            aria-label=\"Select text alignment\"\n        >\n            @for (alignment of alignments; track alignment) {\n            <li\n              ngRadioButton\n              [value]=\"alignment.value\"\n              [disabled]=\"disabledOptions.includes(alignment.value)\"\n              class=\"example-radio-button\">\n                <span class=\"example-radio-indicator\"></span>\n                <span>{{ alignment.label }}</span>\n            </li>\n            }\n        </ul>\n        <button\n            ngToolbarWidget\n            class=\"example-radio-button\"\n            [disabled]=\"true\">\n            Disabled Action\n        </button>\n    </div>\n</div>\n",
      styles: [".example-container {\n  padding-bottom: 32px;\n}\n\n.example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  display: flex;\n  flex-direction: column;\n  padding: 8px;\n  width: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  gap: 16px;\n}\n.example-toolbar[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group {\n  gap: 4px;\n  margin: 0;\n  padding: 8px;\n  max-height: 300px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: column;\n  overflow: scroll;\n}\n\n.example-radio-group[aria-orientation='horizontal'] {\n  flex-direction: row;\n  width: 100%;\n}\n\n.example-radio-group[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n  pointer-events: none;\n}\n\n.example-radio-group label {\n  padding: 16px;\n  flex-shrink: 0;\n}\n\n.example-radio-button {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n/* Basic visual indicator for the radio button */\n.example-radio-indicator {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  border: 2px solid var(--mat-sys-outline);\n  display: inline-block;\n  position: relative;\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator {\n  border-color: var(--mat-sys-primary);\n}\n\n.example-radio-button[aria-checked='true'] .example-radio-indicator::after {\n  content: '';\n  display: block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: var(--mat-sys-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.example-radio-button[aria-disabled='true'][aria-checked='true'] .example-radio-indicator::after {\n  background-color: var(--mat-sys-outline);\n}\n\n.example-radio-button[data-active='true'],\n.example-radio-button[aria-disabled='false']:hover {\n  outline: 2px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[aria-disabled='false']:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-radio-button[data-active='true'][aria-disabled='true'],\n.example-radio-button[aria-disabled='true']:focus-within {\n  outline: 2px solid var(--mat-sys-outline);\n}\n\n.example-radio-button[aria-disabled='true'] {\n  cursor: default;\n}\n\n.example-radio-button[aria-disabled='true'] span:not(.example-radio-indicator) {\n  opacity: 0.3;\n}\n\n.example-radio-button[aria-disabled='true']::before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-on-surface);\n  opacity: var(--mat-sys-focus-state-layer-opacity);\n}\n"]
    }]
  }],
  ctorParameters: () => [{
    type: i1.LiveAnnouncer
  }]
});

export { ToolbarBasicHorizontalExample, ToolbarBasicVerticalExample, ToolbarConfigurableExample, ToolbarRtlExample, ToolbarSkipDisabledExample };
//# sourceMappingURL=aria-toolbar.mjs.map
