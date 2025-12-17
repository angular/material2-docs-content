import * as i0 from '@angular/core';
import { Component, inject, ElementRef, ViewChild, Injector, afterNextRender } from '@angular/core';
import * as i1$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i3 from '@angular/cdk/text-field';
import { TextFieldModule, AutofillMonitor } from '@angular/cdk/text-field';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';

class TextFieldAutofillDirectiveExample {
  firstNameAutofilled = false;
  lastNameAutofilled = false;
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.3",
    ngImport: i0,
    type: TextFieldAutofillDirectiveExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.3",
    type: TextFieldAutofillDirectiveExample,
    isStandalone: true,
    selector: "text-field-autofill-directive-example",
    ngImport: i0,
    template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button matButton=\"elevated\">Submit</button>\n</form>\n",
    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"],
    dependencies: [{
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
      kind: "directive",
      type: i1.MatHint,
      selector: "mat-hint",
      inputs: ["align", "id"]
    }, {
      kind: "ngmodule",
      type: MatInputModule
    }, {
      kind: "directive",
      type: i2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
    }, {
      kind: "directive",
      type: i3.CdkAutofill,
      selector: "[cdkAutofill]",
      outputs: ["cdkAutofill"]
    }, {
      kind: "ngmodule",
      type: TextFieldModule
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.3",
  ngImport: i0,
  type: TextFieldAutofillDirectiveExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'text-field-autofill-directive-example',
      imports: [MatFormFieldModule, MatInputModule, TextFieldModule, MatButtonModule],
      template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput (cdkAutofill)=\"firstNameAutofilled = $event.isAutofilled\">\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput (cdkAutofill)=\"lastNameAutofilled = $event.isAutofilled\">\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button matButton=\"elevated\">Submit</button>\n</form>\n",
      styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
    }]
  }]
});

class TextFieldAutofillMonitorExample {
  _autofill = inject(AutofillMonitor);
  firstName;
  lastName;
  firstNameAutofilled = false;
  lastNameAutofilled = false;
  ngAfterViewInit() {
    this._autofill.monitor(this.firstName).subscribe(e => this.firstNameAutofilled = e.isAutofilled);
    this._autofill.monitor(this.lastName).subscribe(e => this.lastNameAutofilled = e.isAutofilled);
  }
  ngOnDestroy() {
    this._autofill.stopMonitoring(this.firstName);
    this._autofill.stopMonitoring(this.lastName);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.3",
    ngImport: i0,
    type: TextFieldAutofillMonitorExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.3",
    type: TextFieldAutofillMonitorExample,
    isStandalone: true,
    selector: "text-field-autofill-monitor-example",
    viewQueries: [{
      propertyName: "firstName",
      first: true,
      predicate: ["first"],
      descendants: true,
      read: ElementRef
    }, {
      propertyName: "lastName",
      first: true,
      predicate: ["last"],
      descendants: true,
      read: ElementRef
    }],
    ngImport: i0,
    template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button matButton=\"elevated\">Submit</button>\n</form>\n",
    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"],
    dependencies: [{
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
      kind: "directive",
      type: i1.MatHint,
      selector: "mat-hint",
      inputs: ["align", "id"]
    }, {
      kind: "ngmodule",
      type: MatInputModule
    }, {
      kind: "directive",
      type: i2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$1.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.3",
  ngImport: i0,
  type: TextFieldAutofillMonitorExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'text-field-autofill-monitor-example',
      imports: [MatFormFieldModule, MatInputModule, MatButtonModule],
      template: "<form (submit)=\"$event.preventDefault()\">\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    @if (firstNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    @if (lastNameAutofilled) {\n      <mat-hint>Autofilled!</mat-hint>\n    }\n  </mat-form-field>\n  <button matButton=\"elevated\">Submit</button>\n</form>\n",
      styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
    }]
  }],
  propDecorators: {
    firstName: [{
      type: ViewChild,
      args: ['first', {
        read: ElementRef
      }]
    }],
    lastName: [{
      type: ViewChild,
      args: ['last', {
        read: ElementRef
      }]
    }]
  }
});

class TextFieldAutosizeTextareaExample {
  _injector = inject(Injector);
  autosize;
  triggerResize() {
    afterNextRender(() => {
      this.autosize.resizeToFitContent(true);
    }, {
      injector: this._injector
    });
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.3",
    ngImport: i0,
    type: TextFieldAutosizeTextareaExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.3",
    type: TextFieldAutosizeTextareaExample,
    isStandalone: true,
    selector: "text-field-autosize-textarea-example",
    viewQueries: [{
      propertyName: "autosize",
      first: true,
      predicate: ["autosize"],
      descendants: true
    }],
    ngImport: i0,
    template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"],
    dependencies: [{
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
      type: MatInputModule
    }, {
      kind: "directive",
      type: i2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
    }, {
      kind: "directive",
      type: i3.CdkTextareaAutosize,
      selector: "textarea[cdkTextareaAutosize]",
      inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"],
      exportAs: ["cdkTextareaAutosize"]
    }, {
      kind: "ngmodule",
      type: TextFieldModule
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.3",
  ngImport: i0,
  type: TextFieldAutosizeTextareaExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'text-field-autosize-textarea-example',
      imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule],
      template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n",
      styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
    }]
  }],
  propDecorators: {
    autosize: [{
      type: ViewChild,
      args: ['autosize']
    }]
  }
});

export { TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample };
//# sourceMappingURL=cdk-text-field.mjs.map
