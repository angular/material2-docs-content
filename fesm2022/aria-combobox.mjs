import { Combobox, ComboboxInput, ComboboxPopupContainer, ComboboxPopup } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import * as i0 from '@angular/core';
import { viewChild, signal, computed, afterRenderEffect, Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tree, TreeItem, TreeItemGroup } from '@angular/aria/tree';
import { NgTemplateOutlet } from '@angular/common';

/** @title Combobox with manual selection. */
class ComboboxManualExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    listbox = viewChild(Listbox, ...(ngDevMode ? [{ debugName: "listbox" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    options = computed(() => states$2.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{ debugName: "options" }] : []));
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxManualExample, isStandalone: true, selector: "combobox-manual-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "listbox", first: true, predicate: Listbox, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"manual\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Listbox, selector: "[ngListbox]", inputs: ["orientation", "multi", "wrap", "skipDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "value"], outputs: ["valueChange"], exportAs: ["ngListbox"] }, { kind: "directive", type: Option, selector: "[ngOption]", inputs: ["value", "disabled", "label"], exportAs: ["ngOption"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-manual-example', imports: [
                        Combobox,
                        ComboboxInput,
                        ComboboxPopup,
                        ComboboxPopupContainer,
                        Listbox,
                        Option,
                        FormsModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"manual\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });
const states$2 = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];

/** @title Combobox with auto-select filtering. */
class ComboboxAutoSelectExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    listbox = viewChild(Listbox, ...(ngDevMode ? [{ debugName: "listbox" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    options = computed(() => states$1.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{ debugName: "options" }] : []));
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxAutoSelectExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxAutoSelectExample, isStandalone: true, selector: "combobox-auto-select-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "listbox", first: true, predicate: Listbox, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"auto-select\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Listbox, selector: "[ngListbox]", inputs: ["orientation", "multi", "wrap", "skipDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "value"], outputs: ["valueChange"], exportAs: ["ngListbox"] }, { kind: "directive", type: Option, selector: "[ngOption]", inputs: ["value", "disabled", "label"], exportAs: ["ngOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxAutoSelectExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-auto-select-example', imports: [Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"auto-select\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });
const states$1 = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];

/** @title Combobox with highlight filtering. */
class ComboboxHighlightExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    listbox = viewChild(Listbox, ...(ngDevMode ? [{ debugName: "listbox" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    options = computed(() => states.filter(state => state.toLowerCase().startsWith(this.searchString().toLowerCase())), ...(ngDevMode ? [{ debugName: "options" }] : []));
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxHighlightExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxHighlightExample, isStandalone: true, selector: "combobox-highlight-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "listbox", first: true, predicate: Listbox, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"highlight\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Listbox, selector: "[ngListbox]", inputs: ["orientation", "multi", "wrap", "skipDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "value"], outputs: ["valueChange"], exportAs: ["ngListbox"] }, { kind: "directive", type: Option, selector: "[ngOption]", inputs: ["value", "disabled", "label"], exportAs: ["ngOption"] }, { kind: "ngmodule", type: FormsModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxHighlightExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-highlight-example', imports: [
                        Combobox,
                        ComboboxInput,
                        ComboboxPopup,
                        ComboboxPopupContainer,
                        Listbox,
                        Option,
                        FormsModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div ngCombobox #combobox=\"ngCombobox\" filterMode=\"highlight\" class=\"example-combobox-container\">\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n      class=\"example-combobox-input\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <div ngListbox class=\"example-listbox\">\n        @for (option of options(); track option) {\n          <div\n            class=\"example-option example-selectable example-stateful\"\n            ngOption\n            [value]=\"option\"\n            [label]=\"option\"\n          >\n            <span>{{option}}</span>\n            <span\n              aria-hidden=\"true\"\n              class=\"material-symbols-outlined example-icon example-selected-icon\"\n              >check</span\n            >\n          </div>\n        }\n      </div>\n    </ng-template>\n  </div>\n</div>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });
const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
];

const TREE_NODES = [
    {
        name: 'Winter',
        children: [{ name: 'December' }, { name: 'January' }, { name: 'February' }],
    },
    {
        name: 'Spring',
        children: [{ name: 'March' }, { name: 'April' }, { name: 'May' }],
    },
    {
        name: 'Summer',
        children: [{ name: 'June' }, { name: 'July' }, { name: 'August' }],
    },
    {
        name: 'Fall',
        children: [{ name: 'September' }, { name: 'October' }, { name: 'November' }],
    },
];

/** @title Combobox with tree popup and manual filtering. */
class ComboboxTreeManualExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    tree = viewChild(Tree, ...(ngDevMode ? [{ debugName: "tree" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{ debugName: "nodes" }] : []));
    firstMatch = computed(() => {
        const flatNodes = this.flattenTreeNodes(this.nodes());
        const node = flatNodes.find(n => this.isMatch(n));
        return node?.name;
    }, ...(ngDevMode ? [{ debugName: "firstMatch" }] : []));
    flattenTreeNodes(nodes) {
        return nodes.flatMap(node => {
            return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
        });
    }
    filterTreeNodes(nodes) {
        return nodes.reduce((acc, node) => {
            const children = node.children ? this.filterTreeNodes(node.children) : undefined;
            if (this.isMatch(node) || (children && children.length > 0)) {
                acc.push({ ...node, children });
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxTreeManualExample, isStandalone: true, selector: "combobox-tree-manual-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "tree", first: true, predicate: Tree, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"manual\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Tree, selector: "[ngTree]", inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"], outputs: ["valueChange"], exportAs: ["ngTree"] }, { kind: "directive", type: TreeItem, selector: "[ngTreeItem]", inputs: ["value", "parent", "disabled", "selectable", "label"], exportAs: ["ngTreeItem"] }, { kind: "directive", type: TreeItemGroup, selector: "ng-template[ngTreeItemGroup]", inputs: ["ownedBy"], exportAs: ["ngTreeItemGroup"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-tree-manual-example', imports: [
                        Combobox,
                        ComboboxInput,
                        ComboboxPopup,
                        ComboboxPopupContainer,
                        Tree,
                        TreeItem,
                        TreeItemGroup,
                        NgTemplateOutlet,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"manual\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });

/** @title Combobox with tree popup and auto-select filtering. */
class ComboboxTreeAutoSelectExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    tree = viewChild(Tree, ...(ngDevMode ? [{ debugName: "tree" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{ debugName: "nodes" }] : []));
    firstMatch = computed(() => {
        const flatNodes = this.flattenTreeNodes(this.nodes());
        const node = flatNodes.find(n => this.isMatch(n));
        return node?.name;
    }, ...(ngDevMode ? [{ debugName: "firstMatch" }] : []));
    flattenTreeNodes(nodes) {
        return nodes.flatMap(node => {
            return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
        });
    }
    filterTreeNodes(nodes) {
        return nodes.reduce((acc, node) => {
            const children = node.children ? this.filterTreeNodes(node.children) : undefined;
            if (this.isMatch(node) || (children && children.length > 0)) {
                acc.push({ ...node, children });
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeAutoSelectExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxTreeAutoSelectExample, isStandalone: true, selector: "combobox-tree-auto-select-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "tree", first: true, predicate: Tree, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"auto-select\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template  ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Tree, selector: "[ngTree]", inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"], outputs: ["valueChange"], exportAs: ["ngTree"] }, { kind: "directive", type: TreeItem, selector: "[ngTreeItem]", inputs: ["value", "parent", "disabled", "selectable", "label"], exportAs: ["ngTreeItem"] }, { kind: "directive", type: TreeItemGroup, selector: "ng-template[ngTreeItemGroup]", inputs: ["ownedBy"], exportAs: ["ngTreeItemGroup"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeAutoSelectExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-tree-auto-select-example', imports: [
                        Combobox,
                        ComboboxInput,
                        ComboboxPopup,
                        ComboboxPopupContainer,
                        Tree,
                        TreeItem,
                        TreeItemGroup,
                        NgTemplateOutlet,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"auto-select\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template  ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });

/** @title Combobox with tree popup and highlight filtering. */
class ComboboxTreeHighlightExample {
    popover = viewChild('popover', ...(ngDevMode ? [{ debugName: "popover" }] : []));
    tree = viewChild(Tree, ...(ngDevMode ? [{ debugName: "tree" }] : []));
    combobox = viewChild(Combobox, ...(ngDevMode ? [{ debugName: "combobox" }] : []));
    searchString = signal('', ...(ngDevMode ? [{ debugName: "searchString" }] : []));
    nodes = computed(() => this.filterTreeNodes(TREE_NODES), ...(ngDevMode ? [{ debugName: "nodes" }] : []));
    firstMatch = computed(() => {
        const flatNodes = this.flattenTreeNodes(this.nodes());
        const node = flatNodes.find(n => this.isMatch(n));
        return node?.name;
    }, ...(ngDevMode ? [{ debugName: "firstMatch" }] : []));
    flattenTreeNodes(nodes) {
        return nodes.flatMap(node => {
            return node.children ? [node, ...this.flattenTreeNodes(node.children)] : [node];
        });
    }
    filterTreeNodes(nodes) {
        return nodes.reduce((acc, node) => {
            const children = node.children ? this.filterTreeNodes(node.children) : undefined;
            if (this.isMatch(node) || (children && children.length > 0)) {
                acc.push({ ...node, children });
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
            popoverEl.style.top = `${comboboxRect.bottom}px`;
            popoverEl.style.left = `${comboboxRect.left - 1}px`;
        }
        popover.nativeElement.showPopover();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeHighlightExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "20.2.0-next.2", type: ComboboxTreeHighlightExample, isStandalone: true, selector: "combobox-tree-highlight-example", viewQueries: [{ propertyName: "popover", first: true, predicate: ["popover"], descendants: true, isSignal: true }, { propertyName: "tree", first: true, predicate: Tree, descendants: true, isSignal: true }, { propertyName: "combobox", first: true, predicate: Combobox, descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"highlight\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"], dependencies: [{ kind: "directive", type: Combobox, selector: "[ngCombobox]", inputs: ["filterMode", "disabled", "readonly", "firstMatch"], exportAs: ["ngCombobox"] }, { kind: "directive", type: ComboboxInput, selector: "input[ngComboboxInput]", inputs: ["value"], outputs: ["valueChange"], exportAs: ["ngComboboxInput"] }, { kind: "directive", type: ComboboxPopupContainer, selector: "ng-template[ngComboboxPopupContainer]", exportAs: ["ngComboboxPopupContainer"] }, { kind: "directive", type: Tree, selector: "[ngTree]", inputs: ["orientation", "multi", "disabled", "selectionMode", "focusMode", "wrap", "skipDisabled", "typeaheadDelay", "value", "nav", "currentType"], outputs: ["valueChange"], exportAs: ["ngTree"] }, { kind: "directive", type: TreeItem, selector: "[ngTreeItem]", inputs: ["value", "parent", "disabled", "selectable", "label"], exportAs: ["ngTreeItem"] }, { kind: "directive", type: TreeItemGroup, selector: "ng-template[ngTreeItemGroup]", inputs: ["ownedBy"], exportAs: ["ngTreeItemGroup"] }, { kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.2.0-next.2", ngImport: i0, type: ComboboxTreeHighlightExample, decorators: [{
            type: Component,
            args: [{ selector: 'combobox-tree-highlight-example', imports: [
                        Combobox,
                        ComboboxInput,
                        ComboboxPopup,
                        ComboboxPopupContainer,
                        Tree,
                        TreeItem,
                        TreeItemGroup,
                        NgTemplateOutlet,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  ngCombobox\n  #combobox=\"ngCombobox\"\n  class=\"example-combobox-container\"\n  [firstMatch]=\"firstMatch()\"\n  filterMode=\"highlight\"\n>\n  <div class=\"example-combobox-input-container\">\n    <span class=\"material-symbols-outlined example-icon example-search-icon\">search</span>\n    <input\n      ngComboboxInput\n      class=\"example-combobox-input\"\n      placeholder=\"Search...\"\n      [(value)]=\"searchString\"\n    />\n  </div>\n\n  <div popover=\"manual\" #popover class=\"example-popover\">\n    <ng-template ngComboboxPopupContainer>\n      <ul ngTree #tree=\"ngTree\" class=\"example-tree\">\n        <ng-template\n          [ngTemplateOutlet]=\"treeNodes\"\n          [ngTemplateOutletContext]=\"{nodes: nodes(), parent: tree}\"\n        />\n      </ul>\n    </ng-template>\n  </div>\n</div>\n\n<ng-template #treeNodes let-nodes=\"nodes\" let-parent=\"parent\">\n  @for (node of nodes; track node.name) {\n    <li\n      ngTreeItem\n      [parent]=\"parent\"\n      [value]=\"node.name\"\n      [label]=\"node.name\"\n      #treeItem=\"ngTreeItem\"\n      class=\"example-tree-item example-selectable example-stateful\"\n    >\n      <span\n        aria-hidden=\"true\"\n        class=\"material-symbols-outlined example-parent-icon example-icon\"\n        >{{node.children ? 'chevron_right' : ''}}</span\n      >\n      {{ node.name }}\n      <span aria-hidden=\"true\" class=\"material-symbols-outlined example-selected-icon example-icon\"\n        >check</span\n      >\n    </li>\n\n    @if (node.children) {\n      <ul role=\"group\">\n        <ng-template ngTreeItemGroup [ownedBy]=\"treeItem\" #group=\"ngTreeItemGroup\">\n          <ng-template\n            [ngTemplateOutlet]=\"treeNodes\"\n            [ngTemplateOutletContext]=\"{nodes: node.children, parent: group}\"\n          />\n        </ng-template>\n      </ul>\n    }\n  }\n</ng-template>\n", styles: [".example-combobox-container {\n  position: relative;\n  width: 300px;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-combobox-container:has(.example-combobox-input[aria-expanded='true']) {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  align-items: center;\n}\n\n.example-icon {\n  width: 24px;\n  height: 24px;\n  font-size: 20px;\n  display: grid;\n  place-items: center;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  padding: 0 0.5rem;\n  position: absolute;\n  opacity: 0.8;\n}\n\n.example-combobox-input {\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1rem;\n  padding: 0.7rem 1rem 0.7rem 2.5rem;\n  background-color: var(--mat-sys-surface);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--mat-sys-outline);\n  border-bottom-right-radius: var(--mat-sys-corner-extra-small);\n  border-bottom-left-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-listbox {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  max-height: 10rem;\n  padding: 0.5rem;\n}\n\n.example-option {\n  cursor: pointer;\n  padding: 0.3rem 1rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-selected-icon {\n  visibility: hidden;\n}\n\n.example-option[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n\n.example-option[inert],\n.example-tree-item[inert] {\n  display: none;\n}\n\n.example-combobox-container:focus-within [data-active='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%),\n    transparent\n  );\n}\n\n.example-combobox-container:focus-within [data-active='true'][aria-selected='true'] {\n  background: color-mix(\n    in srgb,\n    var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%),\n    transparent\n  );\n  color: var(--mat-sys-primary);\n}\n\n.example-tree {\n  padding: 10px;\n  overflow-x: scroll;\n}\n\n.example-tree-item {\n  cursor: pointer;\n  list-style: none;\n  text-decoration: none;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.3rem 1rem;\n}\n\nli[aria-expanded='false'] + ul[role='group'] {\n  display: none;\n}\n\nul[role='group'] {\n  padding-inline-start: 1rem;\n}\n\n.example-icon {\n  margin: 0;\n  width: 24px;\n}\n\n.example-parent-icon {\n  transition: transform 0.2s ease;\n}\n\n.example-tree-item[aria-expanded='true'] .example-parent-icon {\n  transform: rotate(90deg);\n}\n\n.example-selected-icon {\n  visibility: hidden;\n  margin-left: auto;\n}\n\n.example-tree-item[aria-current] .example-selected-icon,\n.example-tree-item[aria-selected='true'] .example-selected-icon {\n  visibility: visible;\n}\n"] }]
        }], ctorParameters: () => [] });

export { ComboboxAutoSelectExample, ComboboxHighlightExample, ComboboxManualExample, ComboboxTreeAutoSelectExample, ComboboxTreeHighlightExample, ComboboxTreeManualExample };
//# sourceMappingURL=aria-combobox.mjs.map
