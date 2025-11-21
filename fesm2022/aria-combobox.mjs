import { ComboboxDialog, Combobox, ComboboxInput, ComboboxPopupContainer, ComboboxPopup } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import * as i0 from '@angular/core';
import { viewChild, signal, computed, afterRenderEffect, untracked, Component, ChangeDetectionStrategy, viewChildren } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { Tree, TreeItem, TreeItemGroup } from '@angular/aria/tree';
import { NgTemplateOutlet } from '@angular/common';

class ComboboxDialogExample {
  dialog = viewChild(ComboboxDialog, ...(ngDevMode ? [{
    debugName: "dialog"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  value = signal('', ...(ngDevMode ? [{
    debugName: "value"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  options = computed(() => states$4.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  selectedStates = signal([], ...(ngDevMode ? [{
    debugName: "selectedStates"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      if (this.dialog() && this.combobox()?.expanded()) {
        untracked(() => this.listbox()?.gotoFirst());
        this.positionDialog();
      }
    });
    afterRenderEffect(() => {
      if (this.selectedStates().length > 0) {
        untracked(() => this.dialog()?.close());
        this.value.set(this.selectedStates()[0]);
        this.searchString.set('');
      }
    });
    afterRenderEffect(() => this.listbox()?.scrollActiveItemIntoView());
  }
  positionDialog() {
    const dialog = this.dialog();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const scrollY = window.scrollY;
    if (comboboxRect) {
      dialog.element.style.width = `${comboboxRect.width}px`;
      dialog.element.style.top = `${comboboxRect.bottom + scrollY + 4}px`;
      dialog.element.style.left = `${comboboxRect.left - 1}px`;
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxDialogExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxDialogExample,
    isStandalone: true,
    selector: "combobox-dialog-example",
    viewQueries: [{
      propertyName: "dialog",
      first: true,
      predicate: ComboboxDialog,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox #combobox=\"ngCombobox\" class=\"example-combobox-container\" [readonly]=\"true\">\n  <div class=\"example-combobox-input-container\">\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Select a state...\"\n      [value]=\"value()\"\n    />\n    <span class=\"material-symbols-outlined example-icon example-arrow-icon\">arrow_drop_down</span>\n  </div>\n\n  <ng-template ngComboboxPopupContainer>\n    <dialog ngComboboxDialog class=\"example-dialog\">\n      <div\n        ngCombobox\n        #combobox=\"ngCombobox\"\n        filterMode=\"manual\"\n        [alwaysExpanded]=\"true\"\n        class=\"example-combobox-container\"\n      >\n        <!-- TODO: Don't clear selection on backspace for manual filter mode -->\n        <div class=\"example-combobox-input-container\">\n          <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n          <input\n            ngComboboxInput\n            class=\"example-combobox-input\"\n            placeholder=\"Search...\"\n            [(value)]=\"searchString\"\n          />\n        </div>\n\n        <ng-template ngComboboxPopupContainer>\n          <div ngListbox class=\"example-listbox\" [(values)]=\"selectedStates\">\n            @for (option of options(); track option) {\n              <div class=\"example-option\" ngOption [value]=\"option\" [label]=\"option\">\n                <span>{{option}}</span>\n                <span\n                  aria-hidden=\"true\"\n                  class=\"material-symbols-outlined example-icon example-selected-icon\"\n                  >check</span\n                >\n              </div>\n            }\n          </div>\n        </ng-template>\n      </div>\n    </dialog>\n  </ng-template>\n</div>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']) {\n  width: 225px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true'] {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-dialog {\n  position: absolute;\n  left: auto;\n  right: auto;\n  top: auto;\n  bottom: auto;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-dialog .example-combobox-input-container {\n  border-radius: 0;\n}\n\n.example-dialog .example-combobox-container,\n.example-dialog .example-combobox-input-container {\n  border: none;\n}\n\n.example-dialog .example-combobox-input {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.example-dialog .example-combobox-container:focus-within .example-combobox-input {\n  outline: none;\n  box-shadow: none;\n}\n\n.example-dialog .example-combobox-input-container {\n  border-bottom: 1px solid var(--mat-sys-outline);\n}\n\n.example-dialog::backdrop {\n  opacity: 0;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: ComboboxDialog,
      selector: "dialog[ngComboboxDialog]",
      exportAs: ["ngComboboxDialog"]
    }, {
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: FormsModule
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxDialogExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-dialog-example',
      imports: [ComboboxDialog, Combobox, ComboboxInput, ComboboxPopupContainer, Listbox, Option, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox #combobox=\"ngCombobox\" class=\"example-combobox-container\" [readonly]=\"true\">\n  <div class=\"example-combobox-input-container\">\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Select a state...\"\n      [value]=\"value()\"\n    />\n    <span class=\"material-symbols-outlined example-icon example-arrow-icon\">arrow_drop_down</span>\n  </div>\n\n  <ng-template ngComboboxPopupContainer>\n    <dialog ngComboboxDialog class=\"example-dialog\">\n      <div\n        ngCombobox\n        #combobox=\"ngCombobox\"\n        filterMode=\"manual\"\n        [alwaysExpanded]=\"true\"\n        class=\"example-combobox-container\"\n      >\n        <!-- TODO: Don't clear selection on backspace for manual filter mode -->\n        <div class=\"example-combobox-input-container\">\n          <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n          <input\n            ngComboboxInput\n            class=\"example-combobox-input\"\n            placeholder=\"Search...\"\n            [(value)]=\"searchString\"\n          />\n        </div>\n\n        <ng-template ngComboboxPopupContainer>\n          <div ngListbox class=\"example-listbox\" [(values)]=\"selectedStates\">\n            @for (option of options(); track option) {\n              <div class=\"example-option\" ngOption [value]=\"option\" [label]=\"option\">\n                <span>{{option}}</span>\n                <span\n                  aria-hidden=\"true\"\n                  class=\"material-symbols-outlined example-icon example-selected-icon\"\n                  >check</span\n                >\n              </div>\n            }\n          </div>\n        </ng-template>\n      </div>\n    </dialog>\n  </ng-template>\n</div>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']) {\n  width: 225px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true'] {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-dialog {\n  position: absolute;\n  left: auto;\n  right: auto;\n  top: auto;\n  bottom: auto;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-dialog .example-combobox-input-container {\n  border-radius: 0;\n}\n\n.example-dialog .example-combobox-container,\n.example-dialog .example-combobox-input-container {\n  border: none;\n}\n\n.example-dialog .example-combobox-input {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.example-dialog .example-combobox-container:focus-within .example-combobox-input {\n  outline: none;\n  box-shadow: none;\n}\n\n.example-dialog .example-combobox-input-container {\n  border-bottom: 1px solid var(--mat-sys-outline);\n}\n\n.example-dialog::backdrop {\n  opacity: 0;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    dialog: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => ComboboxDialog), {
        isSignal: true
      }]
    }],
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});
const states$4 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ComboboxManualExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  options = computed(() => states$3.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxManualExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxManualExample,
    isStandalone: true,
    selector: "combobox-manual-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"manual\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: FormsModule
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxManualExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-manual-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"manual\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});
const states$3 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ComboboxAutoSelectExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  options = computed(() => states$2.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxAutoSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxAutoSelectExample,
    isStandalone: true,
    selector: "combobox-auto-select-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"auto-select\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxAutoSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-auto-select-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"auto-select\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});
const states$2 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ComboboxHighlightExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  options = computed(() => states$1.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxHighlightExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxHighlightExample,
    isStandalone: true,
    selector: "combobox-highlight-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"highlight\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: FormsModule
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxHighlightExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-highlight-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"highlight\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});
const states$1 = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ComboboxDisabledExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  options = computed(() => states.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxDisabledExample,
    isStandalone: true,
    selector: "combobox-disabled-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox #combobox=\"ngCombobox\" class=\"example-combobox-container\" disabled>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: FormsModule
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-disabled-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, FormsModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox #combobox=\"ngCombobox\" class=\"example-combobox-container\" disabled>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});
const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

class ComboboxReadonlyExample {
  displayValue = signal('', ...(ngDevMode ? [{
    debugName: "displayValue"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  options = viewChildren(Option, ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  labels = [{
    value: 'Important',
    icon: 'label'
  }, {
    value: 'Starred',
    icon: 'star'
  }, {
    value: 'Work',
    icon: 'work'
  }, {
    value: 'Personal',
    icon: 'person'
  }, {
    value: 'To Do',
    icon: 'checklist'
  }, {
    value: 'Later',
    icon: 'schedule'
  }, {
    value: 'Read',
    icon: 'menu_book'
  }, {
    value: 'Travel',
    icon: 'flight'
  }];
  constructor() {
    afterRenderEffect(() => {
      const values = this.listbox()?.values() || [];
      const displayValue = values.length ? values[0] : 'Select a label';
      this.displayValue.set(displayValue);
    });
    afterRenderEffect(() => {
      const option = this.options().find(opt => opt.active());
      setTimeout(() => option?.element.scrollIntoView({
        block: 'nearest'
      }), 50);
    });
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxReadonlyExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxReadonlyExample,
    isStandalone: true,
    selector: "combobox-readonly-example",
    viewQueries: [{
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "options",
      predicate: Option,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox readonly>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: OverlayModule
    }, {
      kind: "directive",
      type: i1.CdkConnectedOverlay,
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation", "cdkConnectedOverlayUsePopover", "cdkConnectedOverlayMatchWidth", "cdkConnectedOverlay"],
      outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"],
      exportAs: ["cdkConnectedOverlay"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxReadonlyExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-readonly-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, OverlayModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox readonly>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    options: [{
      type: i0.ViewChildren,
      args: [i0.forwardRef(() => Option), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class ComboboxReadonlyMultiselectExample {
  displayValue = signal('', ...(ngDevMode ? [{
    debugName: "displayValue"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  options = viewChildren(Option, ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  labels = [{
    value: 'Important',
    icon: 'label'
  }, {
    value: 'Starred',
    icon: 'star'
  }, {
    value: 'Work',
    icon: 'work'
  }, {
    value: 'Personal',
    icon: 'person'
  }, {
    value: 'To Do',
    icon: 'checklist'
  }, {
    value: 'Later',
    icon: 'schedule'
  }, {
    value: 'Read',
    icon: 'menu_book'
  }, {
    value: 'Travel',
    icon: 'flight'
  }];
  constructor() {
    afterRenderEffect(() => {
      const values = this.listbox()?.values() || [];
      if (values.length === 0) {
        this.displayValue.set('Select a label');
      } else if (values.length === 1) {
        this.displayValue.set(values[0]);
      } else {
        this.displayValue.set(`${values[0]} + ${values.length - 1} more`);
      }
    });
    afterRenderEffect(() => {
      const option = this.options().find(opt => opt.active());
      setTimeout(() => option?.element.scrollIntoView({
        block: 'nearest'
      }), 50);
    });
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxReadonlyMultiselectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxReadonlyMultiselectExample,
    isStandalone: true,
    selector: "combobox-readonly-multiselect-example",
    viewQueries: [{
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "options",
      predicate: Option,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox readonly>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox multi>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: OverlayModule
    }, {
      kind: "directive",
      type: i1.CdkConnectedOverlay,
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation", "cdkConnectedOverlayUsePopover", "cdkConnectedOverlayMatchWidth", "cdkConnectedOverlay"],
      outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"],
      exportAs: ["cdkConnectedOverlay"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxReadonlyMultiselectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-readonly-multiselect-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, OverlayModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox readonly>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox multi>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    options: [{
      type: i0.ViewChildren,
      args: [i0.forwardRef(() => Option), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class ComboboxReadonlyDisabledExample {
  displayValue = signal('', ...(ngDevMode ? [{
    debugName: "displayValue"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  options = viewChildren(Option, ...(ngDevMode ? [{
    debugName: "options"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  labels = [{
    value: 'Important',
    icon: 'label'
  }, {
    value: 'Starred',
    icon: 'star'
  }, {
    value: 'Work',
    icon: 'work'
  }, {
    value: 'Personal',
    icon: 'person'
  }, {
    value: 'To Do',
    icon: 'checklist'
  }, {
    value: 'Later',
    icon: 'schedule'
  }, {
    value: 'Read',
    icon: 'menu_book'
  }, {
    value: 'Travel',
    icon: 'flight'
  }];
  constructor() {
    afterRenderEffect(() => {
      const values = this.listbox()?.values() || [];
      if (values.length === 0) {
        this.displayValue.set('Select a label');
      } else if (values.length === 1) {
        this.displayValue.set(values[0]);
      } else {
        this.displayValue.set(`${values[0]} + ${values.length - 1} more`);
      }
    });
    afterRenderEffect(() => {
      const option = this.options().find(opt => opt.active());
      setTimeout(() => option?.element.scrollIntoView({
        block: 'nearest'
      }), 50);
    });
    afterRenderEffect(() => {
      if (!this.combobox()?.expanded()) {
        setTimeout(() => this.listbox()?.element.scrollTo(0, 0), 150);
      }
    });
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxReadonlyDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxReadonlyDisabledExample,
    isStandalone: true,
    selector: "combobox-readonly-disabled-example",
    viewQueries: [{
      propertyName: "listbox",
      first: true,
      predicate: Listbox,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "options",
      predicate: Option,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div ngCombobox readonly disabled>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
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
      type: OverlayModule
    }, {
      kind: "directive",
      type: i1.CdkConnectedOverlay,
      selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]",
      inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush", "cdkConnectedOverlayDisposeOnNavigation", "cdkConnectedOverlayUsePopover", "cdkConnectedOverlayMatchWidth", "cdkConnectedOverlay"],
      outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"],
      exportAs: ["cdkConnectedOverlay"]
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxReadonlyDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-readonly-disabled-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, OverlayModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div ngCombobox readonly disabled>\n  <div #origin class=\"example-select\">\n    <span class=\"example-combobox-text\">{{ displayValue() }}</span>\n    <input aria-label=\"Label dropdown\" placeholder=\"Select a label\" ngComboboxInput />\n    <span class=\"example-arrow material-symbols-outlined\">arrow_drop_down</span>\n  </div>\n\n  <ng-template\n    [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"true\"\n  >\n    <ng-template ngComboboxPopupContainer>\n      <div class=\"example-popup-container\">\n        <div ngListbox>\n          @for (label of labels; track label.value) {\n            <div ngOption [value]=\"label.value\" [label]=\"label.value\">\n              <span class=\"example-option-icon material-symbols-outlined\">{{label.icon}}</span>\n              <span class=\"example-option-text\">{{label.value}}</span>\n              <span class=\"example-option-check material-symbols-outlined\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-select {\n  display: flex;\n  position: relative;\n  align-items: center;\n  color: var(--mat-sys-on-primary);\n  font-size: var(--mat-sys-label-large);\n  background-color: var(--mat-sys-primary);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n.example-select:has([ngComboboxInput][aria-disabled='true']) {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.example-select:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 90%, transparent);\n}\n\n[ngComboboxInput] {\n  opacity: 0;\n  cursor: pointer;\n  padding: 0 3rem;\n  height: 3rem;\n  border: none;\n}\n\n[ngCombobox]:focus-within .example-select {\n  outline-offset: 2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n.example-combobox-text {\n  left: 2rem;\n  position: absolute;\n}\n\n.example-arrow {\n  right: 1rem;\n  position: absolute;\n  pointer-events: none;\n  transition: transform 150ms ease-in-out;\n}\n\n[ngComboboxInput][aria-expanded='true'] ~ .example-arrow {\n  transform: rotate(180deg);\n}\n\n.example-popup-container {\n  width: 100%;\n  padding: 0.5rem;\n  margin-top: 8px;\n  border-radius: var(--mat-sys-corner-large);\n  background-color: var(--mat-sys-surface-container);\n\n  max-height: 13rem;\n  opacity: 1;\n  visibility: visible;\n  transition: max-height 150ms ease-out, visibility 0s, opacity 25ms ease-out;\n}\n\n[ngListbox] {\n  gap: 4px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='false']) .example-popup-container {\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: max-height 150ms ease-in, visibility 0s 150ms, opacity 150ms ease-in;\n}\n\n[ngCombobox]:has([ngComboboxInput][aria-expanded='true']) [ngListbox] {\n  display: flex;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  padding: 0 1rem;\n  min-height: 3rem;\n  color: var(--mat-sys-on-surface);\n  font-size: var(--mat-sys-label-large);\n  border-radius: var(--mat-sys-corner-extra-large);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  padding-right: 1rem;\n}\n\n.example-option-check,\n.example-option-icon {\n  font-size: var(--mat-sys-label-large);\n}\n\n[ngOption]:not([aria-selected='true']) .example-option-check {\n  display: none;\n}\n\n.example-option-text {\n  flex: 1;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    listbox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Listbox), {
        isSignal: true
      }]
    }],
    options: [{
      type: i0.ViewChildren,
      args: [i0.forwardRef(() => Option), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

const TREE_NODES = [{
  name: 'Winter',
  children: [{
    name: 'December'
  }, {
    name: 'January'
  }, {
    name: 'February'
  }]
}, {
  name: 'Spring',
  children: [{
    name: 'March'
  }, {
    name: 'April'
  }, {
    name: 'May'
  }]
}, {
  name: 'Summer',
  children: [{
    name: 'June'
  }, {
    name: 'July'
  }, {
    name: 'August'
  }]
}, {
  name: 'Fall',
  children: [{
    name: 'September'
  }, {
    name: 'October'
  }, {
    name: 'November'
  }]
}];

class ComboboxTreeManualExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  tree = viewChild(Tree, ...(ngDevMode ? [{
    debugName: "tree"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{
    debugName: "nodes"
  }] : []));
  firstMatch = computed(() => {
    const flatNodes = this.flattenTreeNodes(this.nodes());
    const node = flatNodes.find(n => this.isMatch(n));
    return node?.name;
  }, ...(ngDevMode ? [{
    debugName: "firstMatch"
  }] : []));
  flattenTreeNodes(nodes) {
    return nodes.flatMap(node => {
      return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
    });
  }
  filterTreeNodes(nodes) {
    return nodes.reduce((acc, node) => {
      const children = node.children ? this.filterTreeNodes(node.children) : undefined;
      if (this.isMatch(node) || children && children.length > 0) {
        acc.push({
          ...node,
          children
        });
      }
      return acc;
    }, []);
  }
  isMatch(node) {
    return node.name.toLowerCase().includes(this.searchString().toLowerCase());
  }
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.tree()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxTreeManualExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxTreeManualExample,
    isStandalone: true,
    selector: "combobox-tree-manual-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "tree",
      first: true,
      predicate: Tree,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"manual\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["id", "orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "softDisabled", "typeaheadDelay", "values", "nav", "currentType"],
      outputs: ["valuesChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["id", "value", "parent", "disabled", "selectable", "expanded", "label"],
      outputs: ["expandedChange"],
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
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxTreeManualExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-tree-manual-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"manual\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    tree: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Tree), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class ComboboxTreeAutoSelectExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  tree = viewChild(Tree, ...(ngDevMode ? [{
    debugName: "tree"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{
    debugName: "nodes"
  }] : []));
  firstMatch = computed(() => {
    const flatNodes = this.flattenTreeNodes(this.nodes());
    const node = flatNodes.find(n => this.isMatch(n));
    return node?.name;
  }, ...(ngDevMode ? [{
    debugName: "firstMatch"
  }] : []));
  flattenTreeNodes(nodes) {
    return nodes.flatMap(node => {
      return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
    });
  }
  filterTreeNodes(nodes) {
    return nodes.reduce((acc, node) => {
      const children = node.children ? this.filterTreeNodes(node.children) : undefined;
      if (this.isMatch(node) || children && children.length > 0) {
        acc.push({
          ...node,
          children
        });
      }
      return acc;
    }, []);
  }
  isMatch(node) {
    return node.name.toLowerCase().includes(this.searchString().toLowerCase());
  }
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.tree()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxTreeAutoSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxTreeAutoSelectExample,
    isStandalone: true,
    selector: "combobox-tree-auto-select-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "tree",
      first: true,
      predicate: Tree,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"auto-select\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template  ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["id", "orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "softDisabled", "typeaheadDelay", "values", "nav", "currentType"],
      outputs: ["valuesChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["id", "value", "parent", "disabled", "selectable", "expanded", "label"],
      outputs: ["expandedChange"],
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
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxTreeAutoSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-tree-auto-select-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"auto-select\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template  ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    tree: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Tree), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class ComboboxTreeHighlightExample {
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  tree = viewChild(Tree, ...(ngDevMode ? [{
    debugName: "tree"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{
    debugName: "nodes"
  }] : []));
  firstMatch = computed(() => {
    const flatNodes = this.flattenTreeNodes(this.nodes());
    const node = flatNodes.find(n => this.isMatch(n));
    return node?.name;
  }, ...(ngDevMode ? [{
    debugName: "firstMatch"
  }] : []));
  flattenTreeNodes(nodes) {
    return nodes.flatMap(node => {
      return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
    });
  }
  filterTreeNodes(nodes) {
    return nodes.reduce((acc, node) => {
      const children = node.children ? this.filterTreeNodes(node.children) : undefined;
      if (this.isMatch(node) || children && children.length > 0) {
        acc.push({
          ...node,
          children
        });
      }
      return acc;
    }, []);
  }
  isMatch(node) {
    return node.name.toLowerCase().includes(this.searchString().toLowerCase());
  }
  constructor() {
    afterRenderEffect(() => {
      const popover = this.popover();
      const combobox = this.combobox();
      combobox.expanded() ? this.showPopover() : popover.nativeElement.hidePopover();
      this.tree()?.scrollActiveItemIntoView();
    });
  }
  showPopover() {
    const popover = this.popover();
    const combobox = this.combobox();
    const comboboxRect = combobox.inputElement()?.getBoundingClientRect();
    const popoverEl = popover.nativeElement;
    if (comboboxRect) {
      popoverEl.style.width = `${comboboxRect.width}px`;
      popoverEl.style.top = `${comboboxRect.bottom + 4}px`;
      popoverEl.style.left = `${comboboxRect.left - 1}px`;
    }
    popover.nativeElement.showPopover();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ComboboxTreeHighlightExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ComboboxTreeHighlightExample,
    isStandalone: true,
    selector: "combobox-tree-highlight-example",
    viewQueries: [{
      propertyName: "popover",
      first: true,
      predicate: ["popover"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "tree",
      first: true,
      predicate: Tree,
      descendants: true,
      isSignal: true
    }, {
      propertyName: "combobox",
      first: true,
      predicate: Combobox,
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"highlight\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
    styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["filterMode", "disabled", "readonly", "firstMatch", "alwaysExpanded"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxInput,
      selector: "input[ngComboboxInput]",
      inputs: ["value"],
      outputs: ["valueChange"],
      exportAs: ["ngComboboxInput"]
    }, {
      kind: "directive",
      type: ComboboxPopupContainer,
      selector: "ng-template[ngComboboxPopupContainer]",
      exportAs: ["ngComboboxPopupContainer"]
    }, {
      kind: "directive",
      type: Tree,
      selector: "[ngTree]",
      inputs: ["id", "orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "softDisabled", "typeaheadDelay", "values", "nav", "currentType"],
      outputs: ["valuesChange"],
      exportAs: ["ngTree"]
    }, {
      kind: "directive",
      type: TreeItem,
      selector: "[ngTreeItem]",
      inputs: ["id", "value", "parent", "disabled", "selectable", "expanded", "label"],
      outputs: ["expandedChange"],
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
    }],
    changeDetection: i0.ChangeDetectionStrategy.OnPush
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ComboboxTreeHighlightExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox-tree-highlight-example',
      imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Tree, TreeItem, TreeItemGroup, NgTemplateOutlet],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"highlight\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      [selectable]=\"!node.children\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n",
      styles: [".example-combobox-container {\n  position: relative;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has([readonly='true']:not([aria-disabled='true'])) {\n  width: 200px;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input {\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-input[readonly='true']:not([aria-disabled='true']) {\n  cursor: pointer;\n  padding: 0.7rem 1rem;\n}\n\n.example-combobox-container:focus-within .example-combobox-input {\n  outline: 1.5px solid var(--mat-sys-primary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-primary) 25%, transparent);\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-arrow-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.8;\n  transition: transform 0.2s ease;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n  gap: 4px;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.example-option-text {\n  flex: 1;\n}\n\n.example-checkbox-blank-icon,\n.example-option[aria-selected='true'] .example-checkbox-filled-icon {\n  display: flex;\n  align-items: center;\n}\n\n.example-checkbox-filled-icon,\n.example-option[aria-selected='true'] .example-checkbox-blank-icon {\n  display: none;\n}\n\n.example-checkbox-blank-icon {\n  opacity: 0.6;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent);\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 80%, transparent);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-combobox-container:has([aria-disabled='true']) {\n  opacity: 0.4;\n  cursor: default;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    popover: [{
      type: i0.ViewChild,
      args: ['popover', {
        isSignal: true
      }]
    }],
    tree: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Tree), {
        isSignal: true
      }]
    }],
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

export { ComboboxAutoSelectExample, ComboboxDialogExample, ComboboxDisabledExample, ComboboxHighlightExample, ComboboxManualExample, ComboboxReadonlyDisabledExample, ComboboxReadonlyExample, ComboboxReadonlyMultiselectExample, ComboboxTreeAutoSelectExample, ComboboxTreeHighlightExample, ComboboxTreeManualExample };
//# sourceMappingURL=aria-combobox.mjs.map
