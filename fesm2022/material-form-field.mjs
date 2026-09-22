import * as i0 from '@angular/core';
import { Component, signal, inject, ElementRef, viewChild, model, input, booleanAttribute, computed, effect, untracked, forwardRef } from '@angular/core';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule, MatFormField, MatHint, MatLabel, MatSuffix, MAT_FORM_FIELD, MatFormFieldControl } from '@angular/material/form-field';
import * as i3 from '@angular/material/icon';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import * as i2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { form, required, FormField, FORM_FIELD, minLength, maxLength } from '@angular/forms/signals';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import * as i3$1 from '@angular/forms';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { merge } from 'rxjs';
import * as i2$1 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i2$2 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i1$1 from '@angular/material/radio';
import { MatRadioModule } from '@angular/material/radio';
import { map } from 'rxjs/operators';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';

class FormFieldAppearanceExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldAppearanceExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldAppearanceExample,
    isStandalone: true,
    selector: "form-field-appearance-example",
    ngImport: i0,
    template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n",
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
      kind: "directive",
      type: i1.MatSuffix,
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      inputs: ["matTextSuffix"]
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
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldAppearanceExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-appearance-example',
      imports: [MatFormFieldModule, MatInputModule, MatIconModule],
      template: "<p>\n  <mat-form-field appearance=\"fill\">\n    <mat-label>Fill form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n<p>\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Outline form field</mat-label>\n    <input matInput placeholder=\"Placeholder\">\n    <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n    <mat-hint>Hint</mat-hint>\n  </mat-form-field>\n</p>\n"
    }]
  }]
});

class FormFieldCustomControlExample {
  formModel = signal({
    tel: null
  }, ...(ngDevMode ? [{
    debugName: "formModel"
  }] : []));
  form = form(this.formModel, schemaPath => {
    required(schemaPath.tel);
  });
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldCustomControlExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldCustomControlExample,
    isStandalone: true,
    selector: "form-field-custom-control-example",
    ngImport: i0,
    template: "<mat-form-field>\n  <mat-label>Phone number</mat-label>\n  <example-tel-input [formField]=\"form.tel\"></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n<p>Entered value: {{form.tel().value() | json}}</p>\n",
    dependencies: [{
      kind: "directive",
      type: i0.forwardRef(() => FormField),
      selector: "[formField]",
      inputs: ["formField"],
      exportAs: ["formField"]
    }, {
      kind: "component",
      type: i0.forwardRef(() => MatFormField),
      selector: "mat-form-field",
      inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"],
      exportAs: ["matFormField"]
    }, {
      kind: "directive",
      type: i0.forwardRef(() => MatHint),
      selector: "mat-hint",
      inputs: ["align", "id"]
    }, {
      kind: "directive",
      type: i0.forwardRef(() => MatLabel),
      selector: "mat-label"
    }, {
      kind: "component",
      type: i0.forwardRef(() => MyTelInput),
      selector: "example-tel-input",
      inputs: ["value", "aria-describedby", "placeholder", "required", "disabled"],
      outputs: ["valueChange"]
    }, {
      kind: "component",
      type: i0.forwardRef(() => MatIcon),
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }, {
      kind: "directive",
      type: i0.forwardRef(() => MatSuffix),
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      inputs: ["matTextSuffix"]
    }, {
      kind: "pipe",
      type: i0.forwardRef(() => JsonPipe),
      name: "json"
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldCustomControlExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-custom-control-example',
      imports: [FormField, MatFormField, MatHint, MatLabel, forwardRef(() => MyTelInput), MatIcon, JsonPipe, MatSuffix],
      template: "<mat-form-field>\n  <mat-label>Phone number</mat-label>\n  <example-tel-input [formField]=\"form.tel\"></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n<p>Entered value: {{form.tel().value() | json}}</p>\n"
    }]
  }]
});
class MyTel {
  area;
  exchange;
  subscriber;
  constructor(area, exchange, subscriber) {
    this.area = area;
    this.exchange = exchange;
    this.subscriber = subscriber;
  }
}
class MyTelInput {
  static nextId = 0;
  ngControl = null;
  _formField = inject(MAT_FORM_FIELD, {
    optional: true
  });
  _formFieldControl = inject(FORM_FIELD, {
    optional: true,
    self: true
  });
  _elementRef = inject(ElementRef);
  _areaInput = viewChild.required('area', ...(ngDevMode ? [{
    debugName: "_areaInput"
  }] : []));
  _exchangeInput = viewChild.required('exchange', ...(ngDevMode ? [{
    debugName: "_exchangeInput"
  }] : []));
  _subscriberInput = viewChild.required('subscriber', ...(ngDevMode ? [{
    debugName: "_subscriberInput"
  }] : []));
  _touched = signal(false, ...(ngDevMode ? [{
    debugName: "_touched"
  }] : []));
  get ngField() {
    return this._formFieldControl?.field() ?? null;
  }
  partsModel = signal({
    area: '',
    exchange: '',
    subscriber: ''
  }, ...(ngDevMode ? [{
    debugName: "partsModel"
  }] : []));
  parts = form(this.partsModel, schemaPath => {
    required(schemaPath.area);
    minLength(schemaPath.area, 3);
    maxLength(schemaPath.area, 3);
    required(schemaPath.exchange);
    minLength(schemaPath.exchange, 3);
    maxLength(schemaPath.exchange, 3);
    required(schemaPath.subscriber);
    minLength(schemaPath.subscriber, 4);
    maxLength(schemaPath.subscriber, 4);
  });
  value = model(null, ...(ngDevMode ? [{
    debugName: "value"
  }] : []));
  controlType = 'example-tel-input';
  id = `example-tel-input-${MyTelInput.nextId++}`;
  userAriaDescribedBy = input('', {
    ...(ngDevMode ? {
      debugName: "userAriaDescribedBy"
    } : {}),
    alias: 'aria-describedby'
  });
  placeholder = input('', ...(ngDevMode ? [{
    debugName: "placeholder"
  }] : []));
  required = input(false, {
    ...(ngDevMode ? {
      debugName: "required"
    } : {}),
    transform: booleanAttribute
  });
  disabled = input(false, {
    ...(ngDevMode ? {
      debugName: "disabled"
    } : {}),
    transform: booleanAttribute
  });
  focused = signal(false, ...(ngDevMode ? [{
    debugName: "focused"
  }] : []));
  empty = computed(() => {
    const {
      area,
      exchange,
      subscriber
    } = this.partsModel();
    return !area && !exchange && !subscriber;
  }, ...(ngDevMode ? [{
    debugName: "empty"
  }] : []));
  shouldLabelFloat = computed(() => {
    const focused = this.focused();
    const empty = this.empty();
    return focused || !empty;
  }, ...(ngDevMode ? [{
    debugName: "shouldLabelFloat"
  }] : []));
  errorState = computed(() => {
    const partsValid = this.parts().valid();
    const touched = this._touched();
    return !partsValid && touched;
  }, ...(ngDevMode ? [{
    debugName: "errorState"
  }] : []));
  constructor() {
    effect(() => {
      const {
        area,
        exchange,
        subscriber
      } = this.partsModel();
      this.value.set(this.parts().valid() ? new MyTel(area, exchange, subscriber) : null);
    });
    effect(() => {
      const value = this.value() || new MyTel('', '', '');
      untracked(() => {
        const current = this.partsModel();
        if (current.area !== value.area || current.exchange !== value.exchange || current.subscriber !== value.subscriber) {
          this.partsModel.set({
            area: value.area,
            exchange: value.exchange,
            subscriber: value.subscriber
          });
        }
      });
    });
  }
  onFocusIn() {
    this.focused.set(true);
  }
  onFocusOut(event) {
    if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
      this._touched.set(true);
      this.focused.set(false);
    }
  }
  autoFocusNext(control, nextElement) {
    if (control().valid() && nextElement) {
      nextElement.focus();
    }
  }
  autoFocusPrev(control, prevElement) {
    if (control().value().length < 1) {
      prevElement.focus();
    }
  }
  setDescribedByIds(ids) {
    const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }
  onContainerClick() {
    if (this.parts.subscriber().valid() || this.parts.exchange().valid()) {
      this._subscriberInput().nativeElement.focus();
    } else if (this.parts.area().valid()) {
      this._exchangeInput().nativeElement.focus();
    } else {
      this._areaInput().nativeElement.focus();
    }
  }
  _handleTyping(control, nextElement) {
    this.autoFocusNext(control, nextElement);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: MyTelInput,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.2.0",
    version: "22.2.0-next.7",
    type: MyTelInput,
    isStandalone: true,
    selector: "example-tel-input",
    inputs: {
      value: {
        classPropertyName: "value",
        publicName: "value",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      },
      userAriaDescribedBy: {
        classPropertyName: "userAriaDescribedBy",
        publicName: "aria-describedby",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      },
      placeholder: {
        classPropertyName: "placeholder",
        publicName: "placeholder",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      },
      required: {
        classPropertyName: "required",
        publicName: "required",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      },
      disabled: {
        classPropertyName: "disabled",
        publicName: "disabled",
        isSignal: true,
        isRequired: false,
        transformFunction: null
      }
    },
    outputs: {
      value: "valueChange"
    },
    host: {
      properties: {
        "class.example-floating": "shouldLabelFloat()",
        "id": "id"
      }
    },
    providers: [{
      provide: MatFormFieldControl,
      useExisting: MyTelInput
    }],
    viewQueries: [{
      propertyName: "_areaInput",
      first: true,
      predicate: ["area"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_exchangeInput",
      first: true,
      predicate: ["exchange"],
      descendants: true,
      isSignal: true
    }, {
      propertyName: "_subscriberInput",
      first: true,
      predicate: ["subscriber"],
      descendants: true,
      isSignal: true
    }],
    ngImport: i0,
    template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.area\"\n    size=\"3\"\n    aria-label=\"Area code\"\n    (keyup)=\"_handleTyping(parts.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.exchange\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (keyup)=\"_handleTyping(parts.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.subscriber\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (keyup)=\"_handleTyping(parts.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n",
    styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"],
    dependencies: [{
      kind: "directive",
      type: FormField,
      selector: "[formField]",
      inputs: ["formField"],
      exportAs: ["formField"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: MyTelInput,
  decorators: [{
    type: Component,
    args: [{
      selector: 'example-tel-input',
      providers: [{
        provide: MatFormFieldControl,
        useExisting: MyTelInput
      }],
      host: {
        '[class.example-floating]': 'shouldLabelFloat()',
        '[id]': 'id'
      },
      imports: [FormField],
      template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.area\"\n    size=\"3\"\n    aria-label=\"Area code\"\n    (keyup)=\"_handleTyping(parts.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.exchange\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (keyup)=\"_handleTyping(parts.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    [formField]=\"parts.subscriber\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (keyup)=\"_handleTyping(parts.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n",
      styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
    }]
  }],
  ctorParameters: () => [],
  propDecorators: {
    _areaInput: [{
      type: i0.ViewChild,
      args: ['area', {
        isSignal: true
      }]
    }],
    _exchangeInput: [{
      type: i0.ViewChild,
      args: ['exchange', {
        isSignal: true
      }]
    }],
    _subscriberInput: [{
      type: i0.ViewChild,
      args: ['subscriber', {
        isSignal: true
      }]
    }],
    value: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "value",
        required: false
      }]
    }, {
      type: i0.Output,
      args: ["valueChange"]
    }],
    userAriaDescribedBy: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "aria-describedby",
        required: false
      }]
    }],
    placeholder: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "placeholder",
        required: false
      }]
    }],
    required: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "required",
        required: false
      }]
    }],
    disabled: [{
      type: i0.Input,
      args: [{
        isSignal: true,
        alias: "disabled",
        required: false
      }]
    }]
  }
});

class FormFieldErrorExample {
  email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('', ...(ngDevMode ? [{
    debugName: "errorMessage"
  }] : []));
  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges).pipe(takeUntilDestroyed()).subscribe(() => this.updateErrorMessage());
  }
  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldErrorExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "22.2.0-next.7",
    type: FormFieldErrorExample,
    isStandalone: true,
    selector: "form-field-error-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n",
    styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"],
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
      type: i1.MatError,
      selector: "mat-error, [matError]",
      inputs: ["id"]
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
      type: FormsModule
    }, {
      kind: "directive",
      type: i3$1.DefaultValueAccessor,
      selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]"
    }, {
      kind: "directive",
      type: i3$1.NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "directive",
      type: i3$1.RequiredValidator,
      selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]",
      inputs: ["required"]
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }, {
      kind: "directive",
      type: i3$1.FormControlDirective,
      selector: "[formControl]",
      inputs: ["formControl", "disabled", "ngModel"],
      outputs: ["ngModelChange"],
      exportAs: ["ngForm"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldErrorExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-error-example',
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
      template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n",
      styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"]
    }]
  }],
  ctorParameters: () => []
});

class FormFieldHarnessExample {
  requiredControl = new FormControl('Initial value', [Validators.required]);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldHarnessExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldHarnessExample,
    isStandalone: true,
    selector: "form-field-harness-example",
    ngImport: i0,
    template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n",
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
      type: i1.MatHint,
      selector: "mat-hint",
      inputs: ["align", "id"]
    }, {
      kind: "directive",
      type: i1.MatError,
      selector: "mat-error, [matError]",
      inputs: ["id"]
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
      type: FormsModule
    }, {
      kind: "directive",
      type: i3$1.DefaultValueAccessor,
      selector: "input:not([type=checkbox]):not([ngNoCva])[formControlName],textarea:not([ngNoCva])[formControlName],input:not([type=checkbox]):not([ngNoCva])[formControl],textarea:not([ngNoCva])[formControl],input:not([type=checkbox]):not([ngNoCva])[ngModel],textarea:not([ngNoCva])[ngModel],[ngDefaultControl]"
    }, {
      kind: "directive",
      type: i3$1.NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }, {
      kind: "directive",
      type: i3$1.FormControlDirective,
      selector: "[formControl]",
      inputs: ["formControl", "disabled", "ngModel"],
      outputs: ["ngModelChange"],
      exportAs: ["ngForm"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldHarnessExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-harness-example',
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule],
      template: "<mat-form-field id=\"with-errors\">\n  <span class=\"custom-control\">Custom control harness</span>\n  <input matInput [formControl]=\"requiredControl\">\n\n  <mat-error>Error</mat-error>\n  <mat-hint align=\"start\">Hint</mat-hint>\n</mat-form-field>\n"
    }]
  }]
});

class FormFieldHintExample {
  value = signal('', ...(ngDevMode ? [{
    debugName: "value"
  }] : []));
  onInput(event) {
    this.value.set(event.target.value);
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldHintExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldHintExample,
    isStandalone: true,
    selector: "form-field-hint-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
    styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"],
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
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldHintExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-hint-example',
      imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
      template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n",
      styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"]
    }]
  }]
});

class FormFieldLabelExample {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl
  });
  hideRequired = toSignal(this.hideRequiredControl.valueChanges);
  floatLabel = toSignal(this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')), {
    initialValue: 'auto'
  });
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldLabelExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldLabelExample,
    isStandalone: true,
    selector: "form-field-label-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n",
    styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: FormsModule
    }, {
      kind: "directive",
      type: i3$1.ɵNgNoValidate,
      selector: "form:not([ngNoForm]):not([ngNativeValidate])"
    }, {
      kind: "directive",
      type: i3$1.NgControlStatus,
      selector: "[formControlName],[ngModel],[formControl]"
    }, {
      kind: "directive",
      type: i3$1.NgControlStatusGroup,
      selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],[formArray],form:not([ngNoForm]),[ngForm]"
    }, {
      kind: "ngmodule",
      type: ReactiveFormsModule
    }, {
      kind: "directive",
      type: i3$1.FormControlDirective,
      selector: "[formControl]",
      inputs: ["formControl", "disabled", "ngModel"],
      outputs: ["ngModelChange"],
      exportAs: ["ngForm"]
    }, {
      kind: "directive",
      type: i3$1.FormGroupDirective,
      selector: "[formGroup]",
      inputs: ["formGroup"],
      outputs: ["ngSubmit"],
      exportAs: ["ngForm"]
    }, {
      kind: "ngmodule",
      type: MatCheckboxModule
    }, {
      kind: "component",
      type: i2$2.MatCheckbox,
      selector: "mat-checkbox",
      inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"],
      outputs: ["change", "indeterminateChange"],
      exportAs: ["matCheckbox"]
    }, {
      kind: "ngmodule",
      type: MatRadioModule
    }, {
      kind: "directive",
      type: i1$1.MatRadioGroup,
      selector: "mat-radio-group",
      inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required", "disabledInteractive"],
      outputs: ["change"],
      exportAs: ["matRadioGroup"]
    }, {
      kind: "component",
      type: i1$1.MatRadioButton,
      selector: "mat-radio-button",
      inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color", "disabledInteractive"],
      outputs: ["change"],
      exportAs: ["matRadioButton"]
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
      type: MatInputModule
    }, {
      kind: "directive",
      type: i2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
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
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldLabelExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-label-example',
      imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule],
      template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <input matInput placeholder=\"Simple placeholder\" required />\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"floatLabel()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\" />\n      </mat-form-field>\n\n      <mat-form-field [hideRequiredMarker]=\"hideRequired()\" [floatLabel]=\"floatLabel()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n",
      styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"]
    }]
  }]
});

class FormFieldOverviewExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldOverviewExample,
    isStandalone: true,
    selector: "form-field-overview-example",
    ngImport: i0,
    template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n",
    styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"],
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
      type: MatInputModule
    }, {
      kind: "directive",
      type: i2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
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
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-overview-example',
      imports: [MatFormFieldModule, MatInputModule, MatSelectModule],
      template: "<mat-form-field>\n  <mat-label>Input</mat-label>\n  <input matInput>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Select</mat-label>\n  <mat-select>\n    <mat-option value=\"one\">First option</mat-option>\n    <mat-option value=\"two\">Second option</mat-option>\n  </mat-select>\n</mat-form-field>\n<mat-form-field>\n  <mat-label>Textarea</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n",
      styles: [":host {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n"]
    }]
  }]
});

class FormFieldPrefixSuffixExample {
  hide = signal(true, ...(ngDevMode ? [{
    debugName: "hide"
  }] : []));
  clickEvent(event) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "22.2.0-next.7",
    ngImport: i0,
    type: FormFieldPrefixSuffixExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "22.2.0-next.7",
    type: FormFieldPrefixSuffixExample,
    isStandalone: true,
    selector: "form-field-prefix-suffix-example",
    ngImport: i0,
    template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      matIconButton\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n",
    styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"],
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
      type: i1.MatPrefix,
      selector: "[matPrefix], [matIconPrefix], [matTextPrefix]",
      inputs: ["matTextPrefix"]
    }, {
      kind: "directive",
      type: i1.MatSuffix,
      selector: "[matSuffix], [matIconSuffix], [matTextSuffix]",
      inputs: ["matTextSuffix"]
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
      type: i1$2.MatIconButton,
      selector: "button[mat-icon-button], a[mat-icon-button], button[matIconButton], a[matIconButton]",
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatIconModule
    }, {
      kind: "component",
      type: i3.MatIcon,
      selector: "mat-icon",
      inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"],
      exportAs: ["matIcon"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "22.2.0-next.7",
  ngImport: i0,
  type: FormFieldPrefixSuffixExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'form-field-prefix-suffix-example',
      imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
      template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      matIconButton\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n",
      styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"]
    }]
  }]
});

export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, MyTelInput };
//# sourceMappingURL=material-form-field.mjs.map
