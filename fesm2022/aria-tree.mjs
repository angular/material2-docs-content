import * as i0 from '@angular/core';
import { model, Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import * as i3 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import { Tree, TreeItem, TreeItemGroup } from '@angular/aria/tree';

const NODES = [{
  name: 'public',
  value: 'public',
  children: [{
    name: 'index.html',
    value: 'public/index.html'
  }, {
    name: 'favicon.ico',
    value: 'public/favicon.ico'
  }, {
    name: 'styles.css',
    value: 'public/styles.css'
  }]
}, {
  name: 'src',
  value: 'src',
  children: [{
    name: 'app',
    value: 'src/app',
    children: [{
      name: 'app.component.ts',
      value: 'src/app/app.component.ts'
    }, {
      name: 'app.module.ts',
      value: 'src/app/app.module.ts',
      disabled: true
    }, {
      name: 'app.css',
      value: 'src/app/app.css'
    }]
  }, {
    name: 'assets',
    value: 'src/assets',
    children: [{
      name: 'logo.png',
      value: 'src/assets/logo.png'
    }]
  }, {
    name: 'environments',
    value: 'src/environments',
    children: [{
      name: 'environment.prod.ts',
      value: 'src/environments/environment.prod.ts'
    }, {
      name: 'environment.ts',
      value: 'src/environments/environment.ts'
    }]
  }, {
    name: 'main.ts',
    value: 'src/main.ts'
  }, {
    name: 'polyfills.ts',
    value: 'src/polyfills.ts'
  }, {
    name: 'styles.css',
    value: 'src/styles.css',
    disabled: true
  }, {
    name: 'test.ts',
    value: 'src/test.ts'
  }]
}, {
  name: 'angular.json',
  value: 'angular.json'
}, {
  name: 'package.json',
  value: 'package.json'
}, {
  name: 'README.md',
  value: 'README.md'
}];

class TreeConfigurableExample {
  nodes = NODES;
  selectionMode = 'explicit';
  focusMode = 'roving';
  multi = new FormControl(false, {
    nonNullable: true
  });
  disabled = new FormControl(false, {
    nonNullable: true
  });
  wrap = new FormControl(true, {
    nonNullable: true
  });
  skipDisabled = new FormControl(true, {
    nonNullable: true
  });
  nav = new FormControl(false, {
    nonNullable: true
  });
  selectedValues = model(['package.json'], ...(ngDevMode ? [{
    debugName: "selectedValues"
  }] : []));
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeConfigurableExample,
    isStandalone: true,
    selector: "tree-configurable-example",
    inputs: {
      selectedValues: {
        classPropertyName: "selectedValues",
        publicName: "selectedValues",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      }
    },
    outputs: {
      selectedValues: "selectedValuesChange"
    },
    ngImport: i0,
    template: "<div class=\"example-tree-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"nav\">Nav Mode</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection Strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus Strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"example-tree-output\">\n  <strong>Selected Values:</strong> {{ selectedValues().join(', ') || 'None' }}\n</div>\n\n<ul\n  ngTree\n  class=\"example-tree\"\n  [multi]=\"multi.value\"\n  [disabled]=\"disabled.value\"\n  [selectionMode]=\"selectionMode\"\n  [focusMode]=\"focusMode\"\n  [wrap]=\"wrap.value\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [nav]=\"nav.value\"\n  [(value)]=\"selectedValues\"\n  #tree=\"ngTree\"\n>\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n    @if (nav.value) {\n      <li role=\"none\" style=\"list-style: none\">\n        <a\n          ngTreeItem\n          [parent]=\"parent\"\n          [value]=\"node.value\"\n          [label]=\"node.name\"\n          [disabled]=\"node.disabled\"\n          [selectable]=\"!node.children\"\n          #treeItem=\"ngTreeItem\"\n          class=\"example-tree-item example-selectable example-stateful\"\n          [attr.href]=\"!!node.children ? null : '/aria-tree#' + node.name\"\n        >\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-parent-icon example-icon\"\n            >{{node.children ? 'chevron_right' : ''}}</span\n          >\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-icon\"\n            >{{node.children ? 'folder' : 'docs'}}</span\n          >\n          {{ node.name }}\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-selected-icon example-icon\"\n            >check</span\n          >\n        </a>\n      </li>\n\n      @if (node.children) {\n        <ul role=\"group\">\n          <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n            <ng-template\n              [ngTemplateOutlet]=\"treeNodes\"\n              [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n            />\n          </ng-template>\n        </ul>\n      }\n    } @else {\n      <li\n        ngTreeItem\n        [parent]=\"parent\"\n        [value]=\"node.value\"\n        [label]=\"node.name\"\n        [disabled]=\"node.disabled\"\n        #treeItem=\"ngTreeItem\"\n        class=\"example-tree-item example-selectable example-stateful\"\n      >\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-parent-icon example-icon\"\n          >{{node.children ? 'chevron_right' : ''}}</span\n        >\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-icon\"\n          >{{node.children ? 'folder' : 'docs'}}</span\n        >\n        {{ node.name }}\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-selected-icon example-icon\"\n          >check</span\n        >\n      </li>\n\n      @if (node.children) {\n        <ul role=\"group\">\n          <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n            <ng-template\n              [ngTemplateOutlet]=\"treeNodes\"\n              [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n            />\n          </ng-template>\n        </ul>\n      }\n    }\n  }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
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
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }, {
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-configurable-example',
      imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, MatFormFieldModule, MatSelectModule, NgTemplateOutlet, Tree, TreeItem, TreeItemGroup],
      template: "<div class=\"example-tree-controls\">\n  <mat-checkbox [formControl]=\"wrap\">Wrap</mat-checkbox>\n  <mat-checkbox [formControl]=\"multi\">Multi</mat-checkbox>\n  <mat-checkbox [formControl]=\"disabled\">Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"skipDisabled\">Skip Disabled</mat-checkbox>\n  <mat-checkbox [formControl]=\"nav\">Nav Mode</mat-checkbox>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Selection Strategy</mat-label>\n    <mat-select [(value)]=\"selectionMode\">\n      <mat-option value=\"explicit\">Explicit</mat-option>\n      <mat-option value=\"follow\">Follow</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n    <mat-label>Focus Strategy</mat-label>\n    <mat-select [(value)]=\"focusMode\">\n      <mat-option value=\"roving\">Roving</mat-option>\n      <mat-option value=\"activedescendant\">Active Descendant</mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n\n<div class=\"example-tree-output\">\n  <strong>Selected Values:</strong> {{ selectedValues().join(', ') || 'None' }}\n</div>\n\n<ul\n  ngTree\n  class=\"example-tree\"\n  [multi]=\"multi.value\"\n  [disabled]=\"disabled.value\"\n  [selectionMode]=\"selectionMode\"\n  [focusMode]=\"focusMode\"\n  [wrap]=\"wrap.value\"\n  [skipDisabled]=\"skipDisabled.value\"\n  [nav]=\"nav.value\"\n  [(value)]=\"selectedValues\"\n  #tree=\"ngTree\"\n>\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n    @if (nav.value) {\n      <li role=\"none\" style=\"list-style: none\">\n        <a\n          ngTreeItem\n          [parent]=\"parent\"\n          [value]=\"node.value\"\n          [label]=\"node.name\"\n          [disabled]=\"node.disabled\"\n          [selectable]=\"!node.children\"\n          #treeItem=\"ngTreeItem\"\n          class=\"example-tree-item example-selectable example-stateful\"\n          [attr.href]=\"!!node.children ? null : '/aria-tree#' + node.name\"\n        >\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-parent-icon example-icon\"\n            >{{node.children ? 'chevron_right' : ''}}</span\n          >\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-icon\"\n            >{{node.children ? 'folder' : 'docs'}}</span\n          >\n          {{ node.name }}\n          <span\n            aria-hidden=\"true\"\n            class=\"material-symbols-outlined example-selected-icon example-icon\"\n            >check</span\n          >\n        </a>\n      </li>\n\n      @if (node.children) {\n        <ul role=\"group\">\n          <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n            <ng-template\n              [ngTemplateOutlet]=\"treeNodes\"\n              [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n            />\n          </ng-template>\n        </ul>\n      }\n    } @else {\n      <li\n        ngTreeItem\n        [parent]=\"parent\"\n        [value]=\"node.value\"\n        [label]=\"node.name\"\n        [disabled]=\"node.disabled\"\n        #treeItem=\"ngTreeItem\"\n        class=\"example-tree-item example-selectable example-stateful\"\n      >\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-parent-icon example-icon\"\n          >{{node.children ? 'chevron_right' : ''}}</span\n        >\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-icon\"\n          >{{node.children ? 'folder' : 'docs'}}</span\n        >\n        {{ node.name }}\n        <span\n          aria-hidden=\"true\"\n          class=\"material-symbols-outlined example-selected-icon example-icon\"\n          >check</span\n        >\n      </li>\n\n      @if (node.children) {\n        <ul role=\"group\">\n          <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n            <ng-template\n              [ngTemplateOutlet]=\"treeNodes\"\n              [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n            />\n          </ng-template>\n        </ul>\n      }\n    }\n  }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeActiveDescendantExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeActiveDescendantExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeActiveDescendantExample,
    isStandalone: true,
    selector: "tree-active-descendant-example",
    ngImport: i0,
    template: "<ul ngTree focusMode=\"activedescendant\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeActiveDescendantExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-active-descendant-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree focusMode=\"activedescendant\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeDisabledExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeDisabledExample,
    isStandalone: true,
    selector: "tree-disabled-example",
    ngImport: i0,
    template: "<ul ngTree [disabled]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-disabled-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [disabled]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeDisabledFocusableExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeDisabledFocusableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeDisabledFocusableExample,
    isStandalone: true,
    selector: "tree-disabled-focusable-example",
    ngImport: i0,
    template: "<ul ngTree [skipDisabled]=\"false\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeDisabledFocusableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-disabled-focusable-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [skipDisabled]=\"false\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeDisabledSkippedExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeDisabledSkippedExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeDisabledSkippedExample,
    isStandalone: true,
    selector: "tree-disabled-skipped-example",
    ngImport: i0,
    template: "<ul ngTree [skipDisabled]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeDisabledSkippedExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-disabled-skipped-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [skipDisabled]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeMultiSelectExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeMultiSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeMultiSelectExample,
    isStandalone: true,
    selector: "tree-multi-select-example",
    ngImport: i0,
    template: "<ul ngTree [multi]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  }\n  }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeMultiSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-multi-select-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [multi]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  }\n  }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeMultiSelectFollowFocusExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeMultiSelectFollowFocusExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeMultiSelectFollowFocusExample,
    isStandalone: true,
    selector: "tree-multi-select-follow-focus-example",
    ngImport: i0,
    template: "<ul ngTree [multi]=\"true\" selectionMode=\"follow\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeMultiSelectFollowFocusExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-multi-select-follow-focus-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [multi]=\"true\" selectionMode=\"follow\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeNavExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeNavExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeNavExample,
    isStandalone: true,
    selector: "tree-nav-example",
    ngImport: i0,
    template: "<ul ngTree [nav]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n    <a\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.value\"\n      [label]=\"node.name\"\n      [disabled]=\"node.disabled\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n      href=\"#{{ node.name }}\"\n      (click)=\"$event.preventDefault()\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-icon\"\n        >{{node.children ? 'folder' : 'docs'}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </a>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeNavExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-nav-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree [nav]=\"true\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n    <a\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.value\"\n      [label]=\"node.name\"\n      [disabled]=\"node.disabled\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n      href=\"#{{ node.name }}\"\n      (click)=\"$event.preventDefault()\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-icon\"\n        >{{node.children ? 'folder' : 'docs'}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </a>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeSingleSelectExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeSingleSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeSingleSelectExample,
    isStandalone: true,
    selector: "tree-single-select-example",
    ngImport: i0,
    template: "<ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeSingleSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-single-select-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=\"group\">\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

class TreeSingleSelectFollowFocusExample {
  nodes = NODES;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "20.2.0-next.2",
    ngImport: i0,
    type: TreeSingleSelectFollowFocusExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "20.2.0-next.2",
    type: TreeSingleSelectFollowFocusExample,
    isStandalone: true,
    selector: "tree-single-select-follow-focus-example",
    ngImport: i0,
    template: "<ul ngTree selectionMode=\"follow\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=group>\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
    styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"],
      outputs: ["valueChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["value", "parent", "disabled", "selectable", "label"],
      exportAs: ["ngTreeItem"]
    }, {
      kind: "directive",
      type: TreeItemGroup,
      selector: "ng-template[ngTreeItemGroup]",
      inputs: ["ownedBy"],
      exportAs: ["ngTreeItemGroup"]
    }, {
      kind: "directive",
      type: NgTemplateOutlet,
      selector: "[ngTemplateOutlet]",
      inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "20.2.0-next.2",
  ngImport: i0,
  type: TreeSingleSelectFollowFocusExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tree-single-select-follow-focus-example',
      imports: [Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      template: "<ul ngTree selectionMode=\"follow\" #tree=\"ngTree\" class=\"example-tree\">\n  <ng-template\n    [ngTemplateOutlet]=\"treeNodes\"\n    [ngTemplateOutletContext]=\"{nodes: nodes, parent: tree}\"\n  />\n</ul>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.value) {\n  <li\n    ngTreeItem\n    [parent]=\"parent\"\n    [value]=\"node.value\"\n    [label]=\"node.name\"\n    [disabled]=\"node.disabled\"\n    #treeItem=\"ngTreeItem\"\n    class=\"example-tree-item example-selectable example-stateful\"\n  >\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-parent-icon example-icon\">{{node.children ? 'chevron_right' : ''}}</span>\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-icon\">{{node.children ? 'folder' : 'docs'}}</span>\n    {{ node.name }}\n    <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\">check</span>\n  </li>\n\n  @if (node.children) {\n  <ul role=group>\n    <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n      <ng-template\n        [ngTemplateOutlet]=\"treeNodes\"\n        [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n      />\n    </ng-template>\n  </ul>\n  } }\n</ng-template>\n",
      styles: [".example-tree-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.example-tree-output {\n  padding: 10px;\n  margin-bottom: 16px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-tree {\n  padding: 10px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  overflow-x: scroll;\n  min-width: 24rem;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n"]
    }]
  }]
});

export { TreeActiveDescendantExample, TreeConfigurableExample, TreeDisabledExample, TreeDisabledFocusableExample, TreeDisabledSkippedExample, TreeMultiSelectExample, TreeMultiSelectFollowFocusExample, TreeNavExample, TreeSingleSelectExample, TreeSingleSelectFollowFocusExample };
//# sourceMappingURL=aria-tree.mjs.map
