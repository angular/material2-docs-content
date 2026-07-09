import { Combobox, ComboboxPopup, ComboboxWidget } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import * as i0 from '@angular/core';
import { viewChild, signal, computed, afterRenderEffect, Component, effect } from '@angular/core';
import * as i1 from '@angular/cdk/overlay';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';

const COUNTRIES = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', "Côte d'Ivoire", 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (fmr. ""Swaziland"")', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'];

class AutocompleteAutoSelectExample {
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  popupExpanded = signal(false, ...(ngDevMode ? [{
    debugName: "popupExpanded"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  selectedOption = signal([], ...(ngDevMode ? [{
    debugName: "selectedOption"
  }] : []));
  query = computed(() => this.searchString(), ...(ngDevMode ? [{
    debugName: "query"
  }] : []));
  countries = computed(() => COUNTRIES.filter(country => country.toLowerCase().startsWith(this.query().toLowerCase())), ...(ngDevMode ? [{
    debugName: "countries"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  clear() {
    this.searchString.set('');
    this.selectedOption.set([]);
  }
  onCommit() {
    const selectedOption = this.selectedOption();
    if (selectedOption.length > 0) {
      this.searchString.set(selectedOption[0]);
    }
    this.popupExpanded.set(false);
    this.combobox()?.element.focus();
  }
  onKeydown(event) {
    if (event.key === 'Enter') {
      this.clear();
      this.popupExpanded.set(false);
      event.stopPropagation();
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.6",
    ngImport: i0,
    type: AutocompleteAutoSelectExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.0.6",
    type: AutocompleteAutoSelectExample,
    isStandalone: true,
    selector: "autocomplete-auto-select-example",
    viewQueries: [{
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
    template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input\n      ngCombobox\n      #combobox=\"ngCombobox\"\n      aria-label=\"Label dropdown\"\n      placeholder=\"Select a country\"\n      [(value)]=\"searchString\"\n      [(expanded)]=\"popupExpanded\"\n      (click)=\"popupExpanded.set(true)\"\n    />\n    <button\n      class=\"example-clear-button\"\n      aria-label=\"Clear\"\n      (keydown)=\"onKeydown($event)\"\n      (click)=\"clear()\"\n    >\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n\n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\" [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n          <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" [(value)]=\"selectedOption\"\n          (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n            <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n              <span class=\"example-option-label\">{{country}}</span>\n              <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["disabled", "softDisabled", "alwaysExpanded", "tabindex", "expanded", "value", "inlineSuggestion"],
      outputs: ["expandedChange", "valueChange"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxPopup,
      selector: "ng-template[ngComboboxPopup]",
      inputs: ["combobox", "popupType"],
      exportAs: ["ngComboboxPopup"]
    }, {
      kind: "directive",
      type: ComboboxWidget,
      selector: "[ngComboboxWidget]",
      inputs: ["activeDescendant"],
      exportAs: ["ngComboboxWidget"]
    }, {
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "tabindex", "value"],
      outputs: ["valueChange"],
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
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.6",
  ngImport: i0,
  type: AutocompleteAutoSelectExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'autocomplete-auto-select-example',
      imports: [Combobox, ComboboxPopup, ComboboxWidget, Listbox, Option, OverlayModule, FormsModule],
      template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input\n      ngCombobox\n      #combobox=\"ngCombobox\"\n      aria-label=\"Label dropdown\"\n      placeholder=\"Select a country\"\n      [(value)]=\"searchString\"\n      [(expanded)]=\"popupExpanded\"\n      (click)=\"popupExpanded.set(true)\"\n    />\n    <button\n      class=\"example-clear-button\"\n      aria-label=\"Clear\"\n      (keydown)=\"onKeydown($event)\"\n      (click)=\"clear()\"\n    >\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n\n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\" [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n          <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" [(value)]=\"selectedOption\"\n          (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n            <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n              <span class=\"example-option-label\">{{country}}</span>\n              <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"]
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
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class AutocompleteDisabledExample {
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  popupExpanded = signal(false, ...(ngDevMode ? [{
    debugName: "popupExpanded"
  }] : []));
  searchString = signal('Select a country', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  selectedOption = signal([], ...(ngDevMode ? [{
    debugName: "selectedOption"
  }] : []));
  query = computed(() => this.searchString(), ...(ngDevMode ? [{
    debugName: "query"
  }] : []));
  countries = computed(() => COUNTRIES.filter(country => country.toLowerCase().startsWith(this.query().toLowerCase())), ...(ngDevMode ? [{
    debugName: "countries"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.6",
    ngImport: i0,
    type: AutocompleteDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.0.6",
    type: AutocompleteDisabledExample,
    isStandalone: true,
    selector: "autocomplete-disabled-example",
    viewQueries: [{
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
    template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input\n      ngCombobox\n      #combobox=\"ngCombobox\"\n      aria-label=\"Label dropdown\"\n      placeholder=\"Select a country\"\n      [(value)]=\"searchString\"\n      [(expanded)]=\"popupExpanded\"\n      disabled\n      readonly\n    />\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\" [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n          <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" [(value)]=\"selectedOption\">\n          @for (country of countries(); track country) {\n            <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n              <span class=\"example-option-label\">{{country}}</span>\n              <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["disabled", "softDisabled", "alwaysExpanded", "tabindex", "expanded", "value", "inlineSuggestion"],
      outputs: ["expandedChange", "valueChange"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxPopup,
      selector: "ng-template[ngComboboxPopup]",
      inputs: ["combobox", "popupType"],
      exportAs: ["ngComboboxPopup"]
    }, {
      kind: "directive",
      type: ComboboxWidget,
      selector: "[ngComboboxWidget]",
      inputs: ["activeDescendant"],
      exportAs: ["ngComboboxWidget"]
    }, {
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "tabindex", "value"],
      outputs: ["valueChange"],
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
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.6",
  ngImport: i0,
  type: AutocompleteDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'autocomplete-disabled-example',
      imports: [Combobox, ComboboxPopup, ComboboxWidget, Listbox, Option, OverlayModule, FormsModule],
      template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input\n      ngCombobox\n      #combobox=\"ngCombobox\"\n      aria-label=\"Label dropdown\"\n      placeholder=\"Select a country\"\n      [(value)]=\"searchString\"\n      [(expanded)]=\"popupExpanded\"\n      disabled\n      readonly\n    />\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\" [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n          <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" [(value)]=\"selectedOption\">\n          @for (country of countries(); track country) {\n            <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n              <span class=\"example-option-label\">{{country}}</span>\n              <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n            </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"]
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
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class AutocompleteHighlightExample {
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  popupExpanded = signal(false, ...(ngDevMode ? [{
    debugName: "popupExpanded"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  selectedOption = signal([], ...(ngDevMode ? [{
    debugName: "selectedOption"
  }] : []));
  navigated = signal(false, ...(ngDevMode ? [{
    debugName: "navigated"
  }] : []));
  query = computed(() => this.searchString(), ...(ngDevMode ? [{
    debugName: "query"
  }] : []));
  countries = computed(() => COUNTRIES.filter(country => country.toLowerCase().startsWith(this.query().toLowerCase())), ...(ngDevMode ? [{
    debugName: "countries"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      this.listbox()?.scrollActiveItemIntoView();
    });
    effect(() => {
      if (!this.popupExpanded()) {
        this.navigated.set(false);
      }
    });
  }
  clear() {
    this.searchString.set('');
    this.selectedOption.set([]);
  }
  onCommit() {
    const selectedOption = this.selectedOption();
    if (selectedOption.length > 0) {
      this.searchString.set(selectedOption[0]);
    }
    this.popupExpanded.set(false);
    this.combobox()?.element.focus();
  }
  onKeydown(event) {
    if (event.key === 'Enter') {
      this.clear();
      this.popupExpanded.set(false);
      event.stopPropagation();
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.6",
    ngImport: i0,
    type: AutocompleteHighlightExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.0.6",
    type: AutocompleteHighlightExample,
    isStandalone: true,
    selector: "autocomplete-highlight-example",
    viewQueries: [{
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
    template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input ngCombobox #combobox=\"ngCombobox\" aria-label=\"Label dropdown\" placeholder=\"Select a country\"\n      [(value)]=\"searchString\" [(expanded)]=\"popupExpanded\" (click)=\"popupExpanded.set(true)\"\n      (keydown.arrowdown)=\"navigated.set(true)\" (keydown.arrowup)=\"navigated.set(true)\"\n      [inlineSuggestion]=\"(searchString() || navigated()) ? selectedOption()[0] : undefined\" />\n    <button class=\"example-clear-button\" aria-label=\"Clear\" (keydown)=\"onKeydown($event)\" (click)=\"clear()\">\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n\n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n        <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" selectionMode=\"follow\" [(value)]=\"selectedOption\"\n          (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n          <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n            <span class=\"example-option-label\">{{country}}</span>\n            <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n          </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>",
    styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["disabled", "softDisabled", "alwaysExpanded", "tabindex", "expanded", "value", "inlineSuggestion"],
      outputs: ["expandedChange", "valueChange"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxPopup,
      selector: "ng-template[ngComboboxPopup]",
      inputs: ["combobox", "popupType"],
      exportAs: ["ngComboboxPopup"]
    }, {
      kind: "directive",
      type: ComboboxWidget,
      selector: "[ngComboboxWidget]",
      inputs: ["activeDescendant"],
      exportAs: ["ngComboboxWidget"]
    }, {
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "tabindex", "value"],
      outputs: ["valueChange"],
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
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.6",
  ngImport: i0,
  type: AutocompleteHighlightExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'autocomplete-highlight-example',
      imports: [Combobox, ComboboxPopup, ComboboxWidget, Listbox, Option, OverlayModule, FormsModule],
      template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input ngCombobox #combobox=\"ngCombobox\" aria-label=\"Label dropdown\" placeholder=\"Select a country\"\n      [(value)]=\"searchString\" [(expanded)]=\"popupExpanded\" (click)=\"popupExpanded.set(true)\"\n      (keydown.arrowdown)=\"navigated.set(true)\" (keydown.arrowup)=\"navigated.set(true)\"\n      [inlineSuggestion]=\"(searchString() || navigated()) ? selectedOption()[0] : undefined\" />\n    <button class=\"example-clear-button\" aria-label=\"Clear\" (keydown)=\"onKeydown($event)\" (click)=\"clear()\">\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n\n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n        <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" selectionMode=\"follow\" [(value)]=\"selectedOption\"\n          (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n          <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n            <span class=\"example-option-label\">{{country}}</span>\n            <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n          </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>",
      styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"]
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
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

class AutocompleteManualExample {
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  popupExpanded = signal(false, ...(ngDevMode ? [{
    debugName: "popupExpanded"
  }] : []));
  searchString = signal('', ...(ngDevMode ? [{
    debugName: "searchString"
  }] : []));
  selectedOption = signal([], ...(ngDevMode ? [{
    debugName: "selectedOption"
  }] : []));
  query = computed(() => this.searchString(), ...(ngDevMode ? [{
    debugName: "query"
  }] : []));
  countries = computed(() => COUNTRIES.filter(country => country.toLowerCase().startsWith(this.query().toLowerCase())), ...(ngDevMode ? [{
    debugName: "countries"
  }] : []));
  constructor() {
    afterRenderEffect(() => {
      this.listbox()?.scrollActiveItemIntoView();
    });
  }
  clear() {
    this.searchString.set('');
    this.selectedOption.set([]);
  }
  onCommit() {
    const selectedOption = this.selectedOption();
    if (selectedOption.length > 0) {
      this.searchString.set(selectedOption[0]);
    }
    this.popupExpanded.set(false);
    this.combobox()?.element.focus();
  }
  onKeydown(event) {
    if (event.key === 'Enter') {
      this.clear();
      this.popupExpanded.set(false);
      event.stopPropagation();
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.0.6",
    ngImport: i0,
    type: AutocompleteManualExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.0.6",
    type: AutocompleteManualExample,
    isStandalone: true,
    selector: "autocomplete-manual-example",
    viewQueries: [{
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
    template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input ngCombobox #combobox=\"ngCombobox\" aria-label=\"Label dropdown\" placeholder=\"Select a country\"\n      [(value)]=\"searchString\" [(expanded)]=\"popupExpanded\" (click)=\"popupExpanded.set(true)\" />\n    <button class=\"example-clear-button\" aria-label=\"Clear\" (keydown)=\"onKeydown($event)\" (click)=\"clear()\">\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n  \n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n        <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" selectionMode=\"explicit\"\n          [(value)]=\"selectedOption\" (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n          <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n            <span class=\"example-option-label\">{{country}}</span>\n            <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n          </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
    styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"],
    dependencies: [{
      kind: "directive",
      type: Combobox,
      selector: "[ngCombobox]",
      inputs: ["disabled", "softDisabled", "alwaysExpanded", "tabindex", "expanded", "value", "inlineSuggestion"],
      outputs: ["expandedChange", "valueChange"],
      exportAs: ["ngCombobox"]
    }, {
      kind: "directive",
      type: ComboboxPopup,
      selector: "ng-template[ngComboboxPopup]",
      inputs: ["combobox", "popupType"],
      exportAs: ["ngComboboxPopup"]
    }, {
      kind: "directive",
      type: ComboboxWidget,
      selector: "[ngComboboxWidget]",
      inputs: ["activeDescendant"],
      exportAs: ["ngComboboxWidget"]
    }, {
      kind: "directive",
      type: Listbox,
      selector: "[ngListbox]",
      inputs: ["id", "orientation", "multi", "wrap", "softDisabled", "focusMode", "selectionMode", "typeaheadDelay", "disabled", "readonly", "tabindex", "value"],
      outputs: ["valueChange"],
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
    }, {
      kind: "ngmodule",
      type: FormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.0.6",
  ngImport: i0,
  type: AutocompleteManualExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'autocomplete-manual-example',
      imports: [Combobox, ComboboxPopup, ComboboxWidget, Listbox, Option, OverlayModule, FormsModule],
      template: "<div class=\"example-combobox-container\">\n  <div #origin class=\"example-autocomplete\">\n    <span class=\"example-search-icon material-symbols-outlined\" translate=\"no\">search</span>\n    <input ngCombobox #combobox=\"ngCombobox\" aria-label=\"Label dropdown\" placeholder=\"Select a country\"\n      [(value)]=\"searchString\" [(expanded)]=\"popupExpanded\" (click)=\"popupExpanded.set(true)\" />\n    <button class=\"example-clear-button\" aria-label=\"Clear\" (keydown)=\"onKeydown($event)\" (click)=\"clear()\">\n      <span aria-hidden=\"true\" class=\"example-clear-icon material-symbols-outlined\">close</span>\n    </button>\n  </div>\n  \n  <div aria-live=\"polite\" class=\"cdk-visually-hidden\">\n    {{countries().length === 0 ? 'No results found for ' + query() : ''}}\n  </div>\n\n  <ng-template [cdkConnectedOverlay]=\"{origin, usePopover: 'inline', matchWidth: true}\"\n    [cdkConnectedOverlayOpen]=\"popupExpanded()\">\n    <ng-template ngComboboxPopup [combobox]=\"combobox\">\n      <div class=\"example-popup\">\n        @if (countries().length === 0) {\n        <div class=\"example-no-results\">No results found</div>\n        }\n\n        <div ngListbox ngComboboxWidget focusMode=\"activedescendant\" [tabindex]=\"-1\" selectionMode=\"explicit\"\n          [(value)]=\"selectedOption\" (click)=\"onCommit()\" (keydown.enter)=\"onCommit()\">\n          @for (country of countries(); track country) {\n          <div ngOption [value]=\"country\" [label]=\"country\" [disabled]=\"country === 'Brazil'\">\n            <span class=\"example-option-label\">{{country}}</span>\n            <span class=\"example-check-icon material-symbols-outlined\" translate=\"no\">check</span>\n          </div>\n          }\n        </div>\n      </div>\n    </ng-template>\n  </ng-template>\n</div>\n",
      styles: [".example-autocomplete {\n  display: flex;\n  position: relative;\n  align-items: center;\n\n  /* stylelint-disable-next-line material/no-prefixes -- Valid in all remotely recent browsers. */\n  width: fit-content;\n\n  /* The ::placeholder selectors are intentionally separated.\n  The 'material/no-prefixes' stylelint rule flags the standard ::placeholder\n  when grouped with vendor prefixes. Each prefix is on its own rule to comply.\n  Vendor prefixes are included to ensure consistent placeholder styling\n  across different browsers.\n\n  NOTE: These styles are primarily needed for internal testing. */\n\n  /* stylelint-disable material/no-prefixes -- Provides all prefixes for ::placeholder */\n  input::-webkit-input-placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::-moz-placeholder /* Firefox 19+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-ms-input-placeholder /* IE 10+ */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input:-moz-placeholder  /* Firefox 18- */ {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n  input::placeholder {\n    color: var(--mat-sys-on-surface-variant);\n  }\n\n}\n\n.example-search-icon,\n.example-check-icon {\n  font-size: 1.25rem;\n  pointer-events: none;\n}\n\n.example-search-icon {\n  left: 0.75rem;\n  position: absolute;\n}\n\ninput[ngCombobox] {\n  width: 13rem;\n  font-size: 0.9rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  padding: 0.7rem 2.5rem;\n  outline-color: var(--mat-sys-primary);\n  border: 1px solid var(--mat-sys-outline);\n  background-color: var(--mat-sys-surface);\n}\n\ninput[ngCombobox][aria-disabled='true'],\ninput[ngCombobox]:disabled {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n\n.example-clear-button {\n  position: absolute;\n  right: 0.5rem;\n  background-color: transparent;\n  border: none;\n  display: flex;\n  width: 2rem;\n  height: 2rem;\n  align-items: center;\n  cursor: pointer;\n}\n\n.example-clear-icon {\n  font-size: 1.25rem;\n}\n\n.example-popup {\n  width: 100%;\n  margin-top: 2px;\n  padding: 0.1rem;\n  max-height: 11rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid var(--mat-sys-outline);\n}\n\n.example-no-results {\n  padding: 1rem;\n}\n\n[ngListbox] {\n  gap: 2px;\n  height: 100%;\n  display: flex;\n  overflow: auto;\n  flex-direction: column;\n}\n\n[ngOption] {\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  margin: 1px;\n  font-size: 0.9rem;\n  padding: 0.7rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n[ngOption][aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.5;\n  background-color: var(--mat-sys-surface-dim);\n}\n\n[ngOption]:hover {\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 5%, transparent);\n}\n\n[ngOption][data-active='true'] {\n  outline-offset: -2px;\n  outline: 2px solid var(--mat-sys-primary);\n}\n\n[ngOption][aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background-color: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n[ngOption]:not([aria-selected='true']) .example-check-icon {\n  display: none;\n}\n\n.example-option-label {\n  flex: 1;\n}\n\n.example-check-icon {\n  font-size: 0.9rem;\n}\n\n"]
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
    combobox: [{
      type: i0.ViewChild,
      args: [i0.forwardRef(() => Combobox), {
        isSignal: true
      }]
    }]
  }
});

export { AutocompleteAutoSelectExample, AutocompleteDisabledExample, AutocompleteHighlightExample, AutocompleteManualExample };
//# sourceMappingURL=aria-autocomplete.mjs.map
