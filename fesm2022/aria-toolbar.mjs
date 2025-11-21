import * as i0 from '@angular/core';
import { inject, Directive, viewChild, signal, afterRenderEffect, Component } from '@angular/core';
import * as i1 from '@angular/aria/toolbar';
import { ToolbarWidget, Toolbar, ToolbarWidgetGroup } from '@angular/aria/toolbar';
import { Combobox, ComboboxInput, ComboboxPopupContainer, ComboboxPopup } from '@angular/aria/combobox';
import { Listbox, Option } from '@angular/aria/listbox';
import { Directionality, Dir } from '@angular/cdk/bidi';
import * as i2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i3 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

class SimpleToolbarButton {
  widget = inject(ToolbarWidget);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: SimpleToolbarButton,
    deps: [],
    target: i0.ɵɵFactoryTarget.Directive
  });
  static ɵdir = i0.ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: SimpleToolbarButton,
    isStandalone: true,
    selector: "button[toolbar-button]",
    host: {
      attributes: {
        "type": "button"
      },
      properties: {
        "aria-label": "widget.value()"
      },
      classAttribute: "example-button material-symbols-outlined"
    },
    hostDirectives: [{
      directive: i1.ToolbarWidget,
      inputs: ["value", "value", "disabled", "disabled"]
    }],
    ngImport: i0
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: SimpleToolbarButton,
  decorators: [{
    type: Directive,
    args: [{
      selector: 'button[toolbar-button]',
      hostDirectives: [{
        directive: ToolbarWidget,
        inputs: ['value', 'disabled']
      }],
      host: {
        type: 'button',
        class: 'example-button material-symbols-outlined',
        '[aria-label]': 'widget.value()'
      }
    }]
  }]
});
class SimpleToolbarToggleButton {
  widget = inject(ToolbarWidget);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: SimpleToolbarToggleButton,
    deps: [],
    target: i0.ɵɵFactoryTarget.Directive
  });
  static ɵdir = i0.ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: SimpleToolbarToggleButton,
    isStandalone: true,
    selector: "button[toolbar-toggle-button]",
    host: {
      attributes: {
        "type": "button"
      },
      properties: {
        "aria-pressed": "widget.selected()",
        "aria-label": "widget.value()"
      },
      classAttribute: "example-button material-symbols-outlined"
    },
    hostDirectives: [{
      directive: i1.ToolbarWidget,
      inputs: ["value", "value"]
    }],
    ngImport: i0
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: SimpleToolbarToggleButton,
  decorators: [{
    type: Directive,
    args: [{
      selector: 'button[toolbar-toggle-button]',
      hostDirectives: [{
        directive: ToolbarWidget,
        inputs: ['value']
      }],
      host: {
        type: 'button',
        class: 'example-button material-symbols-outlined',
        '[aria-pressed]': 'widget.selected()',
        '[aria-label]': 'widget.value()'
      }
    }]
  }]
});
class SimpleToolbarRadioButton {
  widget = inject(ToolbarWidget);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: SimpleToolbarRadioButton,
    deps: [],
    target: i0.ɵɵFactoryTarget.Directive
  });
  static ɵdir = i0.ɵɵngDeclareDirective({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: SimpleToolbarRadioButton,
    isStandalone: true,
    selector: "button[toolbar-radio-button]",
    host: {
      attributes: {
        "role": "radio",
        "type": "button"
      },
      properties: {
        "aria-checked": "widget.selected()",
        "aria-label": "widget.value()"
      },
      classAttribute: "example-button material-symbols-outlined"
    },
    hostDirectives: [{
      directive: i1.ToolbarWidget,
      inputs: ["value", "value", "disabled", "disabled"]
    }],
    ngImport: i0
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: SimpleToolbarRadioButton,
  decorators: [{
    type: Directive,
    args: [{
      selector: 'button[toolbar-radio-button]',
      hostDirectives: [{
        directive: ToolbarWidget,
        inputs: ['value', 'disabled']
      }],
      host: {
        role: 'radio',
        type: 'button',
        class: 'example-button material-symbols-outlined',
        '[aria-checked]': 'widget.selected()',
        '[aria-label]': 'widget.value()'
      }
    }]
  }]
});
class SimpleCombobox {
  dir = inject(Directionality).valueSignal;
  popover = viewChild('popover', ...(ngDevMode ? [{
    debugName: "popover"
  }] : []));
  listbox = viewChild(Listbox, ...(ngDevMode ? [{
    debugName: "listbox"
  }] : []));
  combobox = viewChild(Combobox, ...(ngDevMode ? [{
    debugName: "combobox"
  }] : []));
  value = signal('Normal text', ...(ngDevMode ? [{
    debugName: "value"
  }] : []));
  options = ['Normal text', 'Title', 'Subtitle', 'Heading 1', 'Heading 2', 'Heading 3'];
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
    type: SimpleCombobox,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: SimpleCombobox,
    isStandalone: true,
    selector: "combobox",
    host: {
      classAttribute: "example-combobox-container"
    },
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
    template: `
    <div ngCombobox [dir]="dir()" #combobox="ngCombobox" class="example-combobox" [readonly]="true">
      <div class="example-combobox-input-container">
        <input
          ngComboboxInput
          ngToolbarWidget
          [(value)]="value"
          class="example-combobox-input"
          aria-label="Select a text style"
        />
        <span class="material-symbols-outlined example-icon example-arrow-icon"
          >arrow_drop_down</span
        >
      </div>

      <div popover="manual" #popover class="example-popover">
        <ng-template ngComboboxPopupContainer>
          <div ngListbox [values]="[value()]" class="example-listbox">
            @for (option of options; track option) {
              <div ngOption [value]="option" [label]="option" class="example-option">
                <span>{{option}}</span>
                <span aria-hidden="true" class="material-symbols-outlined example-option-icon"
                  >check</span
                >
              </div>
            }
          </div>
        </ng-template>
      </div>
    </div>
  `,
    isInline: true,
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Dir,
      selector: "[dir]",
      inputs: ["dir"],
      outputs: ["dirChange"],
      exportAs: ["dir"]
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
      kind: "directive",
      type: ToolbarWidget,
      selector: "[ngToolbarWidget]",
      inputs: ["id", "disabled", "value"],
      exportAs: ["ngToolbarWidget"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: SimpleCombobox,
  decorators: [{
    type: Component,
    args: [{
      selector: 'combobox',
      imports: [Dir, Combobox, ComboboxInput, ComboboxPopup, ComboboxPopupContainer, Listbox, Option, ToolbarWidget],
      host: {
        class: 'example-combobox-container'
      },
      template: `
    <div ngCombobox [dir]="dir()" #combobox="ngCombobox" class="example-combobox" [readonly]="true">
      <div class="example-combobox-input-container">
        <input
          ngComboboxInput
          ngToolbarWidget
          [(value)]="value"
          class="example-combobox-input"
          aria-label="Select a text style"
        />
        <span class="material-symbols-outlined example-icon example-arrow-icon"
          >arrow_drop_down</span
        >
      </div>

      <div popover="manual" #popover class="example-popover">
        <ng-template ngComboboxPopupContainer>
          <div ngListbox [values]="[value()]" class="example-listbox">
            @for (option of options; track option) {
              <div ngOption [value]="option" [label]="option" class="example-option">
                <span>{{option}}</span>
                <span aria-hidden="true" class="material-symbols-outlined example-option-icon"
                  >check</span
                >
              </div>
            }
          </div>
        </ng-template>
      </div>
    </div>
  `,
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
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

class ToolbarBasicHorizontalExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ToolbarBasicHorizontalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: ToolbarBasicHorizontalExample,
    isStandalone: true,
    selector: "toolbar-basic-horizontal-example",
    ngImport: i0,
    template: "<div class=\"example-toolbar-container\">\n  <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div ngToolbarWidgetGroup role=\"radiogroup\" class=\"example-group\" aria-label=\"List options\">\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "softDisabled", "disabled", "wrap", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidgetGroup,
      selector: "[ngToolbarWidgetGroup]",
      inputs: ["disabled", "multi"],
      exportAs: ["ngToolbarWidgetGroup"]
    }, {
      kind: "component",
      type: SimpleCombobox,
      selector: "combobox"
    }, {
      kind: "directive",
      type: SimpleToolbarButton,
      selector: "button[toolbar-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarRadioButton,
      selector: "button[toolbar-radio-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarToggleButton,
      selector: "button[toolbar-toggle-button]"
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ToolbarBasicHorizontalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-basic-horizontal-example',
      imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup, SimpleCombobox, SimpleToolbarButton, SimpleToolbarRadioButton, SimpleToolbarToggleButton],
      template: "<div class=\"example-toolbar-container\">\n  <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div ngToolbarWidgetGroup role=\"radiogroup\" class=\"example-group\" aria-label=\"List options\">\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
    }]
  }]
});

class ToolbarBasicVerticalExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ToolbarBasicVerticalExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: ToolbarBasicVerticalExample,
    isStandalone: true,
    selector: "toolbar-basic-vertical-example",
    ngImport: i0,
    template: "<div class=\"example-toolbar-container\">\n  <div\n    ngToolbar\n    orientation=\"vertical\"\n    class=\"example-toolbar\"\n    aria-label=\"Vertical Toolbar Text Formatting Tools\"\n  >\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n  </div>\n</div>\n",
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "softDisabled", "disabled", "wrap", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidgetGroup,
      selector: "[ngToolbarWidgetGroup]",
      inputs: ["disabled", "multi"],
      exportAs: ["ngToolbarWidgetGroup"]
    }, {
      kind: "directive",
      type: SimpleToolbarButton,
      selector: "button[toolbar-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarRadioButton,
      selector: "button[toolbar-radio-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarToggleButton,
      selector: "button[toolbar-toggle-button]"
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ToolbarBasicVerticalExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-basic-vertical-example',
      imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup, SimpleToolbarButton, SimpleToolbarRadioButton, SimpleToolbarToggleButton],
      template: "<div class=\"example-toolbar-container\">\n  <div\n    ngToolbar\n    orientation=\"vertical\"\n    class=\"example-toolbar\"\n    aria-label=\"Vertical Toolbar Text Formatting Tools\"\n  >\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n  </div>\n</div>\n",
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
    }]
  }]
});

class ToolbarConfigurableExample {
  wrap = true;
  softDisabled = true;
  toolbarDisabled = false;
  orientation = 'horizontal';
  widgets = ['Undo', 'Redo', 'Bold', 'Italic', 'Underline', 'Text style', 'Align left', 'Align center', 'Align right', 'Checklist', 'Bullet list', 'Numbered list'];
  groups = ['Alignment options', 'List options'];
  disabledGroups = [];
  disabledWidgets = [];
  isDisabled(value) {
    return this.disabledWidgets.includes(value) || this.disabledGroups.includes(value);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ToolbarConfigurableExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: ToolbarConfigurableExample,
    isStandalone: true,
    selector: "toolbar-configurable-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <h4 class=\"example-heading\">Toolbar Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [(ngModel)]=\"softDisabled\">Soft Disabled</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"wrap\">Wrap</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"toolbarDisabled\">Disabled</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Orientation</mat-label>\n      <mat-select [(value)]=\"orientation\">\n        <mat-option value=\"vertical\">Vertical</mat-option>\n        <mat-option value=\"horizontal\">Horizontal</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <h4 class=\"example-heading\">Button</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Buttons</mat-label>\n      <mat-select multiple [(value)]=\"disabledWidgets\">\n        @for (widget of widgets; track widget) {\n          <mat-option [value]=\"widget\">{{widget}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Groups</mat-label>\n      <mat-select multiple [(value)]=\"disabledGroups\">\n        @for (group of groups; track group) {\n          <mat-option [value]=\"group\">{{group}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- #docregion toolbar -->\n<div\n  ngToolbar\n  [wrap]=\"wrap\"\n  [orientation]=\"orientation\"\n  [disabled]=\"toolbarDisabled\"\n  [softDisabled]=\"softDisabled\"\n  class=\"example-toolbar\"\n  aria-label=\"Horizontal Toolbar Text Formatting Tools\"\n>\n  <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n    <button toolbar-button value=\"undo\" [disabled]=\"isDisabled('Undo')\">undo</button>\n    <button toolbar-button value=\"redo\" [disabled]=\"isDisabled('Redo')\">redo</button>\n  </div>\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div class=\"example-group\" aria-label=\"Text formatting options\">\n    <button toolbar-toggle-button value=\"bold\" [disabled]=\"isDisabled('Bold')\">format_bold</button>\n    <button toolbar-toggle-button value=\"italic\" [disabled]=\"isDisabled('Italic')\">\n      format_italic\n    </button>\n    <button toolbar-toggle-button value=\"underline\" [disabled]=\"isDisabled('Underline')\">\n      format_underlined\n    </button>\n  </div>\n\n  @if (orientation === 'horizontal') {\n    <div class=\"example-separator\" role=\"separator\"></div>\n    <combobox />\n  }\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div\n    ngToolbarWidgetGroup\n    role=\"radiogroup\"\n    class=\"example-group\"\n    aria-label=\"Alignment options\"\n    [disabled]=\"isDisabled('Alignment options')\"\n  >\n    <button toolbar-radio-button value=\"align left\" [disabled]=\"isDisabled('Align left')\">\n      format_align_left\n    </button>\n    <button toolbar-radio-button value=\"align center\" [disabled]=\"isDisabled('Align center')\">\n      format_align_center\n    </button>\n    <button toolbar-radio-button value=\"align right\" [disabled]=\"isDisabled('Align right')\">\n      format_align_right\n    </button>\n  </div>\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div\n    ngToolbarWidgetGroup\n    role=\"radiogroup\"\n    class=\"example-group\"\n    aria-label=\"List options\"\n    [disabled]=\"isDisabled('List options')\"\n  >\n    <button toolbar-radio-button value=\"checklist\" [disabled]=\"isDisabled('Checklist')\">\n      checklist\n    </button>\n    <button toolbar-radio-button value=\"bullet list\" [disabled]=\"isDisabled('Bullet list')\">\n      format_list_bulleted\n    </button>\n    <button toolbar-radio-button value=\"numbered list\" [disabled]=\"isDisabled('Numbered list')\">\n      format_list_numbered\n    </button>\n  </div>\n</div>\n<!-- #enddocregion toolbar -->\n",
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "softDisabled", "disabled", "wrap", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidgetGroup,
      selector: "[ngToolbarWidgetGroup]",
      inputs: ["disabled", "multi"],
      exportAs: ["ngToolbarWidgetGroup"]
    }, {
      kind: "component",
      type: SimpleCombobox,
      selector: "combobox"
    }, {
      kind: "directive",
      type: SimpleToolbarButton,
      selector: "button[toolbar-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarRadioButton,
      selector: "button[toolbar-radio-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarToggleButton,
      selector: "button[toolbar-toggle-button]"
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
      kind: "directive",
      type: i3.NgModel,
      selector: "[ngModel]:not([formControlName]):not([formControl])",
      inputs: ["name", "disabled", "ngModel", "ngModelOptions"],
      outputs: ["ngModelChange"],
      exportAs: ["ngModel"]
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ToolbarConfigurableExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-configurable-example',
      imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup, SimpleCombobox, SimpleToolbarButton, SimpleToolbarRadioButton, SimpleToolbarToggleButton, MatCheckboxModule, MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
      template: "<div class=\"example-container\">\n  <h4 class=\"example-heading\">Toolbar Controls</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-checkbox [(ngModel)]=\"softDisabled\">Soft Disabled</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"wrap\">Wrap</mat-checkbox>\n    <mat-checkbox [(ngModel)]=\"toolbarDisabled\">Disabled</mat-checkbox>\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Orientation</mat-label>\n      <mat-select [(value)]=\"orientation\">\n        <mat-option value=\"vertical\">Vertical</mat-option>\n        <mat-option value=\"horizontal\">Horizontal</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <h4 class=\"example-heading\">Button</h4>\n  <div class=\"example-toolbar-controls\">\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Buttons</mat-label>\n      <mat-select multiple [(value)]=\"disabledWidgets\">\n        @for (widget of widgets; track widget) {\n          <mat-option [value]=\"widget\">{{widget}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n\n    <mat-form-field subscriptSizing=\"dynamic\" appearance=\"outline\">\n      <mat-label>Disabled Groups</mat-label>\n      <mat-select multiple [(value)]=\"disabledGroups\">\n        @for (group of groups; track group) {\n          <mat-option [value]=\"group\">{{group}}</mat-option>\n        }\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n\n<!-- #docregion toolbar -->\n<div\n  ngToolbar\n  [wrap]=\"wrap\"\n  [orientation]=\"orientation\"\n  [disabled]=\"toolbarDisabled\"\n  [softDisabled]=\"softDisabled\"\n  class=\"example-toolbar\"\n  aria-label=\"Horizontal Toolbar Text Formatting Tools\"\n>\n  <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n    <button toolbar-button value=\"undo\" [disabled]=\"isDisabled('Undo')\">undo</button>\n    <button toolbar-button value=\"redo\" [disabled]=\"isDisabled('Redo')\">redo</button>\n  </div>\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div class=\"example-group\" aria-label=\"Text formatting options\">\n    <button toolbar-toggle-button value=\"bold\" [disabled]=\"isDisabled('Bold')\">format_bold</button>\n    <button toolbar-toggle-button value=\"italic\" [disabled]=\"isDisabled('Italic')\">\n      format_italic\n    </button>\n    <button toolbar-toggle-button value=\"underline\" [disabled]=\"isDisabled('Underline')\">\n      format_underlined\n    </button>\n  </div>\n\n  @if (orientation === 'horizontal') {\n    <div class=\"example-separator\" role=\"separator\"></div>\n    <combobox />\n  }\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div\n    ngToolbarWidgetGroup\n    role=\"radiogroup\"\n    class=\"example-group\"\n    aria-label=\"Alignment options\"\n    [disabled]=\"isDisabled('Alignment options')\"\n  >\n    <button toolbar-radio-button value=\"align left\" [disabled]=\"isDisabled('Align left')\">\n      format_align_left\n    </button>\n    <button toolbar-radio-button value=\"align center\" [disabled]=\"isDisabled('Align center')\">\n      format_align_center\n    </button>\n    <button toolbar-radio-button value=\"align right\" [disabled]=\"isDisabled('Align right')\">\n      format_align_right\n    </button>\n  </div>\n\n  <div class=\"example-separator\" role=\"separator\"></div>\n\n  <div\n    ngToolbarWidgetGroup\n    role=\"radiogroup\"\n    class=\"example-group\"\n    aria-label=\"List options\"\n    [disabled]=\"isDisabled('List options')\"\n  >\n    <button toolbar-radio-button value=\"checklist\" [disabled]=\"isDisabled('Checklist')\">\n      checklist\n    </button>\n    <button toolbar-radio-button value=\"bullet list\" [disabled]=\"isDisabled('Bullet list')\">\n      format_list_bulleted\n    </button>\n    <button toolbar-radio-button value=\"numbered list\" [disabled]=\"isDisabled('Numbered list')\">\n      format_list_numbered\n    </button>\n  </div>\n</div>\n<!-- #enddocregion toolbar -->\n",
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
    }]
  }]
});

class ToolbarRtlExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ToolbarRtlExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: ToolbarRtlExample,
    isStandalone: true,
    selector: "toolbar-rtl-example",
    ngImport: i0,
    template: "<div class=\"example-toolbar-container\" dir=\"rtl\">\n  <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div ngToolbarWidgetGroup role=\"radiogroup\" class=\"example-group\" aria-label=\"List options\">\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Dir,
      selector: "[dir]",
      inputs: ["dir"],
      outputs: ["dirChange"],
      exportAs: ["dir"]
    }, {
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "softDisabled", "disabled", "wrap", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidgetGroup,
      selector: "[ngToolbarWidgetGroup]",
      inputs: ["disabled", "multi"],
      exportAs: ["ngToolbarWidgetGroup"]
    }, {
      kind: "component",
      type: SimpleCombobox,
      selector: "combobox"
    }, {
      kind: "directive",
      type: SimpleToolbarButton,
      selector: "button[toolbar-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarRadioButton,
      selector: "button[toolbar-radio-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarToggleButton,
      selector: "button[toolbar-toggle-button]"
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ToolbarRtlExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-rtl-example',
      imports: [Dir, Toolbar, ToolbarWidget, ToolbarWidgetGroup, SimpleCombobox, SimpleToolbarButton, SimpleToolbarRadioButton, SimpleToolbarToggleButton],
      template: "<div class=\"example-toolbar-container\" dir=\"rtl\">\n  <div ngToolbar class=\"example-toolbar\" aria-label=\"Horizontal Toolbar Text Formatting Tools\">\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div ngToolbarWidgetGroup role=\"radiogroup\" class=\"example-group\" aria-label=\"List options\">\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
    }]
  }]
});

class ToolbarHardDisabledExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: ToolbarHardDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: ToolbarHardDisabledExample,
    isStandalone: true,
    selector: "toolbar-hard-disabled-example",
    ngImport: i0,
    template: "<div class=\"example-toolbar-container\">\n  <div\n    ngToolbar\n    [softDisabled]=\"false\"\n    class=\"example-toolbar\"\n    aria-label=\"Horizontal Toolbar Text Formatting Tools\"\n  >\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\" [disabled]=\"true\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\" [disabled]=\"true\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      [disabled]=\"true\"\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"List options\"\n    >\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
    styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: Toolbar,
      selector: "[ngToolbar]",
      inputs: ["orientation", "softDisabled", "disabled", "wrap", "values"],
      outputs: ["valuesChange"],
      exportAs: ["ngToolbar"]
    }, {
      kind: "directive",
      type: ToolbarWidgetGroup,
      selector: "[ngToolbarWidgetGroup]",
      inputs: ["disabled", "multi"],
      exportAs: ["ngToolbarWidgetGroup"]
    }, {
      kind: "component",
      type: SimpleCombobox,
      selector: "combobox"
    }, {
      kind: "directive",
      type: SimpleToolbarButton,
      selector: "button[toolbar-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarRadioButton,
      selector: "button[toolbar-radio-button]"
    }, {
      kind: "directive",
      type: SimpleToolbarToggleButton,
      selector: "button[toolbar-toggle-button]"
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: ToolbarHardDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'toolbar-hard-disabled-example',
      imports: [Toolbar, ToolbarWidget, ToolbarWidgetGroup, SimpleCombobox, SimpleToolbarButton, SimpleToolbarRadioButton, SimpleToolbarToggleButton],
      template: "<div class=\"example-toolbar-container\">\n  <div\n    ngToolbar\n    [softDisabled]=\"false\"\n    class=\"example-toolbar\"\n    aria-label=\"Horizontal Toolbar Text Formatting Tools\"\n  >\n    <div class=\"example-group\" aria-label=\"Undo and Redo options\">\n      <button toolbar-button value=\"undo\">undo</button>\n      <button toolbar-button value=\"redo\" [disabled]=\"true\">redo</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div class=\"example-group\" aria-label=\"Text formatting options\">\n      <button toolbar-toggle-button value=\"bold\">format_bold</button>\n      <button toolbar-toggle-button value=\"italic\">format_italic</button>\n      <button toolbar-toggle-button value=\"underline\">format_underlined</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <combobox />\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"Alignment options\"\n    >\n      <button toolbar-radio-button value=\"align left\">format_align_left</button>\n      <button toolbar-radio-button value=\"align center\" [disabled]=\"true\">format_align_center</button>\n      <button toolbar-radio-button value=\"align right\">format_align_right</button>\n    </div>\n\n    <div class=\"example-separator\" role=\"separator\"></div>\n\n    <div\n      [disabled]=\"true\"\n      ngToolbarWidgetGroup\n      role=\"radiogroup\"\n      class=\"example-group\"\n      aria-label=\"List options\"\n    >\n      <button toolbar-radio-button value=\"checklist\">checklist</button>\n      <button toolbar-radio-button value=\"bullet list\">format_list_bulleted</button>\n      <button toolbar-radio-button value=\"numbered list\">format_list_numbered</button>\n    </div>\n  </div>\n</div>\n",
      styles: [".example-heading {\n  margin: 16px 0 4px;\n}\n\n.example-toolbar-controls {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding-bottom: 4px;\n}\n\n.example-toolbar {\n  gap: 16px;\n  padding: 8px;\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  flex-direction: row;\n  border-radius: var(--mat-sys-corner-small);\n  background-color: var(--mat-sys-surface);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'],\n.example-toolbar[aria-orientation='vertical'] .example-group {\n  flex-direction: column;\n}\n\n.example-group {\n  gap: 4px;\n  display: flex;\n}\n\n.example-button {\n  cursor: pointer;\n  opacity: 0.875;\n  font-size: 1.25rem;\n  padding: 6px 8px;\n  background-color: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--mat-sys-corner-extra-small);\n}\n\n.example-button:focus,\n.example-button:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-button:active {\n  background: color-mix(in srgb, var(--mat-sys-outline) 20%, transparent);\n}\n\n.example-button[aria-pressed='true'],\n.example-button[aria-checked='true'] {\n  color: color-mix(in srgb, var(--mat-sys-primary) 90%, black);\n  background: color-mix(in srgb, var(--mat-sys-primary) 15%, transparent);\n}\n\n.example-button:focus {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-button[aria-disabled='true'] {\n  cursor: default;\n  opacity: 0.45;\n}\n\n.example-separator {\n  width: 1px;\n  background: color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-toolbar[aria-orientation='vertical'] .example-separator {\n  height: 1px;\n  width: auto;\n}\n\n.example-combobox-container {\n  border-radius: var(--mat-sys-corner-extra-small);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n}\n\n.example-combobox-container:focus-within {\n  border-color: var(--mat-sys-primary);\n  outline: 2px solid color-mix(in srgb, var(--mat-sys-primary) 50%, transparent);\n}\n\n.example-combobox {\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  position: relative;\n  flex-direction: column;\n}\n\n.example-combobox-input-container {\n  display: flex;\n  position: relative;\n  align-items: center;\n  border-radius: var(--mat-sys-corner-extra-small);\n  height: 100%;\n}\n\n.example-combobox-input {\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  height: 100%;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: transparent;\n}\n\n.example-combobox-input::-moz-selection {\n  background: transparent;\n}\n\n.example-combobox-input::-webkit-selection {\n  background: transparent;\n}\n\n.example-arrow-icon {\n  padding: 0 0.2rem;\n  position: absolute;\n  right: 0;\n  opacity: 0.7;\n  transition: transform 0.2s ease;\n  pointer-events: none;\n}\n\n.example-combobox[dir='rtl'] .example-arrow-icon {\n  right: auto;\n  left: 0;\n}\n\n.example-combobox-input[aria-expanded='true'] + .example-arrow-icon {\n  transform: rotate(180deg);\n}\n\n.example-popover {\n  margin: 0;\n  padding: 0;\n  border: 1px solid color-mix(in srgb, var(--mat-sys-outline) 50%, transparent);\n  border-radius: var(--mat-sys-corner-extra-small);\n  background-color: var(--mat-sys-surface);\n}\n\n.example-option {\n  cursor: pointer;\n  font-size: 0.8rem;\n  padding: 0.5rem;\n  display: flex;\n  overflow: hidden;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.example-option:hover {\n  background: color-mix(in srgb, var(--mat-sys-outline) 10%, transparent);\n}\n\n.example-option[data-active='true'] {\n  border-radius: var(--mat-sys-corner-extra-small);\n  outline: 1px solid var(--mat-sys-primary);\n  outline-offset: -1px;\n}\n\n.example-option[aria-selected='true'] {\n  color: var(--mat-sys-primary);\n  background: color-mix(in srgb, var(--mat-sys-primary) 10%, transparent);\n}\n\n.example-option-icon {\n  font-size: 1rem;\n}\n\n.example-option[aria-selected='false'] .example-option-icon {\n  visibility: hidden;\n}\n"]
    }]
  }]
});

export { ToolbarBasicHorizontalExample, ToolbarBasicVerticalExample, ToolbarConfigurableExample, ToolbarHardDisabledExample, ToolbarRtlExample };
//# sourceMappingURL=aria-toolbar.mjs.map
