import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Tabs, TabList, Tab, TabPanel, TabContent } from '@angular/aria/tabs';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Dir } from '@angular/cdk/bidi';

class TabsConfigurableExample {
  orientation = 'horizontal';
  focusMode = 'roving';
  selectionMode = 'follow';
  tabSelection = 'tab-1';
  wrap = new FormControl(true, {
    nonNullable: true
  });
  disabled = new FormControl(false, {
    nonNullable: true
  });
  skipDisabled = new FormControl(true, {
    nonNullable: true
  });
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsConfigurableExample,
    isStandalone: true,
    selector: "tabs-configurable-example",
    ngImport: i0,
    template: "<div class=\"example-tablist-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Tab selection</mat-label>\n    <mat-select [(value)]=\"tabSelection\">\n      <mat-option value=\"tab-1\">Tab 1</mat-option>\n      <mat-option value=\"tab-2\">Tab 2</mat-option>\n      <mat-option value=\"tab-3\">Tab 3</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion tabs -->\n<div ngTabs class=\"example-tabs\">\n  <ul\n    ngTabList\n    class=\"example-tablist\"\n    [wrap]=\"wrap.value\"\n    [disabled]=\"disabled.value\"\n    [skipDisabled]=\"skipDisabled.value\"\n    [orientation]=\"orientation\"\n    [focusMode]=\"focusMode\"\n    [selectionMode]=\"selectionMode\"\n    [(selectedTab)]=\"tabSelection\"\n  >\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\" disabled=\"true\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n</div>\n<!-- #enddocregion tabs -->\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
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
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-configurable-example',
      imports: [Tabs, TabList, Tab, TabPanel, TabContent, MatCheckboxModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
      template: "<div class=\"example-tablist-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Orientation</mat-label>\n    <mat-select [(value)]=\"orientation\">\n      <mat-option value=\"vertical\">Vertical</mat-option>\n      <mat-option value=\"horizontal\">Horizontal</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow Focus</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving Tabindex</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Tab selection</mat-label>\n    <mat-select [(value)]=\"tabSelection\">\n      <mat-option value=\"tab-1\">Tab 1</mat-option>\n      <mat-option value=\"tab-2\">Tab 2</mat-option>\n      <mat-option value=\"tab-3\">Tab 3</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<!-- #docregion tabs -->\n<div ngTabs class=\"example-tabs\">\n  <ul\n    ngTabList\n    class=\"example-tablist\"\n    [wrap]=\"wrap.value\"\n    [disabled]=\"disabled.value\"\n    [skipDisabled]=\"skipDisabled.value\"\n    [orientation]=\"orientation\"\n    [focusMode]=\"focusMode\"\n    [selectionMode]=\"selectionMode\"\n    [(selectedTab)]=\"tabSelection\"\n  >\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\" disabled=\"true\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n</div>\n<!-- #enddocregion tabs -->\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsExplicitSelectionExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsExplicitSelectionExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsExplicitSelectionExample,
    isStandalone: true,
    selector: "tabs-explicit-selection-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectionMode=\"explicit\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsExplicitSelectionExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-explicit-selection-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectionMode=\"explicit\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsSelectionFollowsFocusExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsSelectionFollowsFocusExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsSelectionFollowsFocusExample,
    isStandalone: true,
    selector: "tabs-selection-follows-focus-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectionMode=\"follow\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsSelectionFollowsFocusExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-selection-follows-focus-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectionMode=\"follow\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsVerticalExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsVerticalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsVerticalExample,
    isStandalone: true,
    selector: "tabs-vertical-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" orientation=\"vertical\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsVerticalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-vertical-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" orientation=\"vertical\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsRtlExample {
  selectedIndex = 0;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsRtlExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsRtlExample,
    isStandalone: true,
    selector: "tabs-rtl-example",
    ngImport: i0,
    template: "<div class=\"example-container\" dir=\"rtl\">\n  <div ngTabs class=\"example-tabs\">\n    <ul ngTabList class=\"example-tablist\" selectedTab=\"tab-1\">\n      <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n      <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n      <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n      <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n      <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n    </ul>\n\n    <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 1</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 2</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 3</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 4</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 5</ng-template>\n    </div>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }, {
      kind: "directive",
      type: Dir,
      selector: "[dir]",
      inputs: ["dir"],
      outputs: ["dirChange"],
      exportAs: ["dir"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsRtlExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-rtl-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent, Dir],
      template: "<div class=\"example-container\" dir=\"rtl\">\n  <div ngTabs class=\"example-tabs\">\n    <ul ngTabList class=\"example-tablist\" selectedTab=\"tab-1\">\n      <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n      <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n      <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n      <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n      <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n    </ul>\n\n    <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 1</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 2</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 3</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 4</ng-template>\n    </div>\n\n    <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n      <ng-template ngTabContent>Tabpanel 5</ng-template>\n    </div>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsActiveDescendantExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsActiveDescendantExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsActiveDescendantExample,
    isStandalone: true,
    selector: "tabs-active-descendant-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" focusMode=\"activedescendant\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsActiveDescendantExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-active-descendant-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" focusMode=\"activedescendant\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsDisabledFocusableExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsDisabledFocusableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsDisabledFocusableExample,
    isStandalone: true,
    selector: "tabs-disabled-focusable-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" [skipDisabled]=\"false\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\" disabled>tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\" disabled>tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsDisabledFocusableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-disabled-focusable-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" [skipDisabled]=\"false\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\" disabled>tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\" disabled>tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsDisabledSkippedExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsDisabledSkippedExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsDisabledSkippedExample,
    isStandalone: true,
    selector: "tabs-disabled-skipped-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" [skipDisabled]=\"true\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\" disabled>tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\" disabled>tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsDisabledSkippedExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-disabled-skipped-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" [skipDisabled]=\"true\" selectedTab=\"tab-1\">\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\" disabled>tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\" disabled>tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

class TabsDisabledExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TabsDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "20.2.0-next.2",
    type: TabsDisabledExample,
    isStandalone: true,
    selector: "tabs-disabled-example",
    ngImport: i0,
    template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectedTab=\"tab-1\" disabled>\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
    styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: TabList,
      selector: "[ngTabList]",
      inputs: ["orientation", "wrap", "skipDisabled", "focusMode", "selectionMode", "disabled", "selectedTab"],
      outputs: ["selectedTabChange"],
      exportAs: ["ngTabList"]
    }, {
      kind: "directive",
      type: Tab,
      selector: "[ngTab]",
      inputs: ["disabled", "value"],
      exportAs: ["ngTab"]
    }, {
      kind: "directive",
      type: Tabs,
      selector: "[ngTabs]",
      exportAs: ["ngTabs"]
    }, {
      kind: "directive",
      type: TabPanel,
      selector: "[ngTabPanel]",
      inputs: ["value"],
      exportAs: ["ngTabPanel"]
    }, {
      kind: "directive",
      type: TabContent,
      selector: "ng-template[ngTabContent]",
      exportAs: ["ngTabContent"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TabsDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tabs-disabled-example',
      imports: [TabList, Tab, Tabs, TabPanel, TabContent],
      template: "<div ngTabs class=\"example-tabs\">\n  <ul ngTabList class=\"example-tablist\" selectedTab=\"tab-1\" disabled>\n    <li ngTab value=\"tab-1\" class=\"example-tab\">tab 1</li>\n    <li ngTab value=\"tab-2\" class=\"example-tab\">tab 2</li>\n    <li ngTab value=\"tab-3\" class=\"example-tab\">tab 3</li>\n    <li ngTab value=\"tab-4\" class=\"example-tab\">tab 4</li>\n    <li ngTab value=\"tab-5\" class=\"example-tab\">tab 5</li>\n  </ul>\n\n  <div ngTabPanel value=\"tab-1\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 1</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-2\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 2</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-3\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 3</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-4\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 4</ng-template>\n  </div>\n\n  <div ngTabPanel value=\"tab-5\" class=\"example-tabpanel\">\n    <ng-template ngTabContent>Tabpanel 5</ng-template>\n  </div>\n</div>\n",
      styles: [".example-tablist-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 16px;\n}\n\n.example-tabs {\n  border: 1px solid var(--mat-sys-outline);\n  min-height: 30vh;\n}\n\n.example-tabs:has(ul[aria-orientation='vertical']) {\n  display: flex;\n}\n\n.example-tablist {\n  gap: 8px;\n  margin: 0;\n  padding: 8px;\n  max-height: 50vh;\n  border-bottom: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  list-style: none;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.example-tablist[aria-orientation='vertical'] {\n  flex-direction: column;\n  border-bottom: initial;\n  border-right: 1px solid var(--mat-sys-outline);\n  justify-content: start;\n}\n\n.example-tablist[aria-orientation='horizontal'] li::before {\n  display: none;\n}\n\n.example-tablist[aria-orientation='horizontal'] li[aria-selected='true']::before {\n  display: block;\n}\n\n.example-tablist[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tab {\n  gap: 16px;\n  padding: 16px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tablist:focus-within .example-tab:hover,\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  outline: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tab:focus-within {\n  outline: 2px solid var(--mat-sys-primary);\n  background: var(--mat-sys-surface-container);\n}\n\n.example-tablist:focus-within .example-tab[data-active='true'] {\n  background-color: var(--mat-sys-secondary-container);\n}\n\n.example-tab[aria-disabled='true'] {\n  background-color: var(--mat-sys-surface-dim);\n}\n\n.example-tabpanel {\n  margin: 8px;\n}\n"]
    }]
  }]
});

export { TabsActiveDescendantExample, TabsConfigurableExample, TabsDisabledExample, TabsDisabledFocusableExample, TabsDisabledSkippedExample, TabsExplicitSelectionExample, TabsRtlExample, TabsSelectionFollowsFocusExample, TabsVerticalExample };
//# sourceMappingURL=aria-tabs.mjs.map
