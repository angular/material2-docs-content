import * as i0 from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import * as i3 from '@angular/forms';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as i2$1 from '@angular/material/tooltip';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import * as i1$2 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$1 from '@angular/cdk/scrolling';
import { CdkScrollable } from '@angular/cdk/scrolling';
import * as i2 from '@angular/material/select';
import { MatSelectModule } from '@angular/material/select';
import * as i1 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i2$2 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import * as i2$3 from '@angular/material/checkbox';
import { MatCheckboxModule } from '@angular/material/checkbox';

class TooltipAutoHideExample {
  positionOptions = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipAutoHideExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: TooltipAutoHideExample,
    isStandalone: true,
    selector: "tooltip-auto-hide-example",
    ngImport: i0,
    template: "<mat-form-field>\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button matButton=\"elevated\" #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value!\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
    styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"],
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
      kind: "directive",
      type: i1$1.CdkScrollable,
      selector: "[cdk-scrollable], [cdkScrollable]"
    }, {
      kind: "component",
      type: i2.MatSelect,
      selector: "mat-select",
      inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"],
      outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"],
      exportAs: ["matSelect"]
    }, {
      kind: "component",
      type: i2.MatOption,
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
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipAutoHideExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-auto-hide-example',
      imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, CdkScrollable, MatButtonModule, MatTooltipModule],
      template: "<mat-form-field>\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<div class=\"example-container\" cdkScrollable>\n  <button matButton=\"elevated\" #tooltip=\"matTooltip\"\n          matTooltip=\"Info about the action\"\n          [matTooltipPosition]=\"position.value!\"\n          matTooltipHideDelay=\"100000\"\n          aria-label=\"Button that displays a tooltip that hides when scrolled out of the container\"\n          class=\"example-button\">\n    Action\n  </button>\n</div>\n",
      styles: [".example-button {\n  display: block;\n  margin: 80px auto 400px;\n}\n\n.example-container {\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #ccc;\n}\n"]
    }]
  }]
});

class TooltipCustomClassExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipCustomClassExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipCustomClassExample,
    isStandalone: true,
    selector: "tooltip-custom-class-example",
    ngImport: i0,
    template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n",
    styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }],
    encapsulation: i0.ViewEncapsulation.None
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipCustomClassExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-custom-class-example',
      encapsulation: ViewEncapsulation.None,
      imports: [MatButtonModule, MatTooltipModule],
      template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        matTooltipClass=\"example-tooltip-uppercase\"\n        aria-label=\"Button that shows a red tooltip\"\n        class=\"example-button\">\n  Uppercase-tooltip Action\n</button>\n",
      styles: [".example-button {\n  margin-top: 16px;\n}\n\n.example-tooltip-uppercase {\n  text-transform: uppercase;\n}\n"]
    }]
  }]
});

class TooltipDelayExample {
  showDelay = new FormControl(1000);
  hideDelay = new FormControl(2000);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipDelayExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipDelayExample,
    isStandalone: true,
    selector: "tooltip-delay-example",
    ngImport: i0,
    template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button matButton=\"elevated\" matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
    styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"],
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
      type: i2$2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }, {
      kind: "directive",
      type: i3.DefaultValueAccessor,
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
    }, {
      kind: "directive",
      type: i3.NumberValueAccessor,
      selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]"
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
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipDelayExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-delay-example',
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatTooltipModule],
      template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Show delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"showDelay\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <mat-label>Hide delay</mat-label>\n  <input matInput type=\"number\" [formControl]=\"hideDelay\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\">\n  <mat-hint>milliseconds</mat-hint>\n</mat-form-field>\n\n<button matButton=\"elevated\" matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
      styles: [".mat-form-field + .mat-form-field,\n.mat-raised-button {\n  margin-left: 8px;\n}\n"]
    }]
  }]
});

class TooltipDisabledExample {
  disabled = new FormControl(false);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipDisabledExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipDisabledExample,
    isStandalone: true,
    selector: "tooltip-disabled-example",
    ngImport: i0,
    template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
    styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }, {
      kind: "ngmodule",
      type: MatCheckboxModule
    }, {
      kind: "component",
      type: i2$3.MatCheckbox,
      selector: "mat-checkbox",
      inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"],
      outputs: ["change", "indeterminateChange"],
      exportAs: ["matCheckbox"]
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
  version: "21.0.0",
  ngImport: i0,
  type: TooltipDisabledExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-disabled-example',
      imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule],
      template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        [matTooltipDisabled]=\"disabled.value\"\n        aria-label=\"Button that displays a tooltip that can be programmatically disabled\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"disabled\" class=\"example-disabled-checkbox\">\n  Tooltip disabled\n</mat-checkbox>\n",
      styles: [".example-disabled-checkbox {\n  margin-left: 8px;\n}\n"]
    }]
  }]
});

class TooltipManualExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipManualExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipManualExample,
    isStandalone: true,
    selector: "tooltip-manual-example",
    ngImport: i0,
    template: "<div>\n  <span> Click the following buttons to... </span>\n  <button matButton\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button matButton\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button matButton\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button matButton=\"elevated\" #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>\n",
    styles: [".example-action-button {\n  margin-top: 16px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipManualExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-manual-example',
      imports: [MatButtonModule, MatTooltipModule],
      template: "<div>\n  <span> Click the following buttons to... </span>\n  <button matButton\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button matButton\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button matButton\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button matButton=\"elevated\" #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>\n",
      styles: [".example-action-button {\n  margin-top: 16px;\n}\n"]
    }]
  }]
});

class TooltipMessageExample {
  message = new FormControl('Info about the action');
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipMessageExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipMessageExample,
    isStandalone: true,
    selector: "tooltip-message-example",
    ngImport: i0,
    template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button matButton=\"elevated\"\n        [matTooltip]=\"message.value || ''\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n",
    styles: [".example-user-input {\n  margin-right: 8px;\n}\n"],
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
      type: i2$2.MatInput,
      selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]",
      inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly", "disabledInteractive"],
      exportAs: ["matInput"]
    }, {
      kind: "ngmodule",
      type: FormsModule
    }, {
      kind: "directive",
      type: i3.DefaultValueAccessor,
      selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"
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
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipMessageExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-message-example',
      imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatTooltipModule],
      template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip message</mat-label>\n  <input matInput [formControl]=\"message\">\n</mat-form-field>\n\n<button matButton=\"elevated\"\n        [matTooltip]=\"message.value || ''\"\n        aria-label=\"Button that displays a tooltip with a custom message\">\n  Action\n</button>\n",
      styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
    }]
  }]
});

const myCustomTooltipDefaults = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000
};
class TooltipModifiedDefaultsExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipModifiedDefaultsExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipModifiedDefaultsExample,
    isStandalone: true,
    selector: "tooltip-modified-defaults-example",
    providers: [{
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: myCustomTooltipDefaults
    }],
    ngImport: i0,
    template: "<button matButton=\"elevated\"\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n",
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipModifiedDefaultsExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-modified-defaults-example',
      providers: [{
        provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
        useValue: myCustomTooltipDefaults
      }],
      imports: [MatButtonModule, MatTooltipModule],
      template: "<button matButton=\"elevated\"\n        matTooltip=\"By default, I delay\"\n        aria-label=\"Button that displays a tooltip that has custom delays through a default config\">\n  Button with delay-default tooltip\n</button>\n"
    }]
  }]
});

class TooltipOverviewExample {
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipOverviewExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipOverviewExample,
    isStandalone: true,
    selector: "tooltip-overview-example",
    ngImport: i0,
    template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n",
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipOverviewExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-overview-example',
      imports: [MatButtonModule, MatTooltipModule],
      template: "<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n"
    }]
  }]
});

class TooltipPositionExample {
  positionOptions = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipPositionExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "17.0.0",
    version: "21.0.0",
    type: TooltipPositionExample,
    isStandalone: true,
    selector: "tooltip-position-example",
    ngImport: i0,
    template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value!\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
    styles: [".example-user-input {\n  margin-right: 8px;\n}\n"],
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
      type: i2.MatSelect,
      selector: "mat-select",
      inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth", "canSelectNullableOptions"],
      outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"],
      exportAs: ["matSelect"]
    }, {
      kind: "component",
      type: i2.MatOption,
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
    }, {
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipPositionExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-position-example',
      imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatButtonModule, MatTooltipModule],
      template: "<mat-form-field class=\"example-user-input\">\n  <mat-label>Tooltip position</mat-label>\n  <mat-select [formControl]=\"position\">\n    @for (positionOption of positionOptions; track positionOption) {\n      <mat-option [value]=\"positionOption\">{{positionOption}}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n\n<button matButton=\"elevated\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPosition]=\"position.value!\"\n        aria-label=\"Button that displays a tooltip in various positions\">\n  Action\n</button>\n",
      styles: [".example-user-input {\n  margin-right: 8px;\n}\n"]
    }]
  }]
});

class TooltipPositionAtOriginExample {
  enabled = new FormControl(false);
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipPositionAtOriginExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipPositionAtOriginExample,
    isStandalone: true,
    selector: "tooltip-position-at-origin-example",
    ngImport: i0,
    template: "<button matButton=\"elevated\"\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n",
    styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"],
    dependencies: [{
      kind: "ngmodule",
      type: MatButtonModule
    }, {
      kind: "component",
      type: i1$2.MatButton,
      selector: "    button[matButton], a[matButton], button[mat-button], button[mat-raised-button],    button[mat-flat-button], button[mat-stroked-button], a[mat-button], a[mat-raised-button],    a[mat-flat-button], a[mat-stroked-button]  ",
      inputs: ["matButton"],
      exportAs: ["matButton", "matAnchor"]
    }, {
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }, {
      kind: "ngmodule",
      type: MatCheckboxModule
    }, {
      kind: "component",
      type: i2$3.MatCheckbox,
      selector: "mat-checkbox",
      inputs: ["aria-label", "aria-labelledby", "aria-describedby", "aria-expanded", "aria-controls", "aria-owns", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "disabledInteractive", "checked", "disabled", "indeterminate"],
      outputs: ["change", "indeterminateChange"],
      exportAs: ["matCheckbox"]
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
  version: "21.0.0",
  ngImport: i0,
  type: TooltipPositionAtOriginExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-position-at-origin-example',
      imports: [MatButtonModule, MatTooltipModule, MatCheckboxModule, FormsModule, ReactiveFormsModule],
      template: "<button matButton=\"elevated\"\n        class=\"demo-button\"\n        matTooltip=\"Info about the action\"\n        [matTooltipPositionAtOrigin]=\"enabled.value\"\n        aria-label=\"Button that displays a tooltip when focused or hovered over\">\n  Action\n</button>\n\n<mat-checkbox [formControl]=\"enabled\" class=\"example-enabled-checkbox\">\n  Position at origin enabled\n</mat-checkbox>\n",
      styles: ["button.demo-button {\n  width: 500px;\n  height: 500px;\n}\n\n.example-enabled-checkbox {\n  margin-left: 8px;\n}\n"]
    }]
  }]
});

class TooltipHarnessExample {
  message = 'Tooltip message';
  static ɵfac = i0.ɵɵngDeclareFactory({
    minVersion: "12.0.0",
    version: "21.0.0",
    ngImport: i0,
    type: TooltipHarnessExample,
    deps: [],
    target: i0.ɵɵFactoryTarget.Component
  });
  static ɵcmp = i0.ɵɵngDeclareComponent({
    minVersion: "14.0.0",
    version: "21.0.0",
    type: TooltipHarnessExample,
    isStandalone: true,
    selector: "tooltip-harness-example",
    ngImport: i0,
    template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n",
    dependencies: [{
      kind: "ngmodule",
      type: MatTooltipModule
    }, {
      kind: "directive",
      type: i2$1.MatTooltip,
      selector: "[matTooltip]",
      inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"],
      exportAs: ["matTooltip"]
    }]
  });
}
i0.ɵɵngDeclareClassMetadata({
  minVersion: "12.0.0",
  version: "21.0.0",
  ngImport: i0,
  type: TooltipHarnessExample,
  decorators: [{
    type: Component,
    args: [{
      selector: 'tooltip-harness-example',
      imports: [MatTooltipModule],
      template: "<button [matTooltip]=\"message\" id=\"one\">Trigger 1</button>\n<button matTooltip=\"Static message\" id=\"two\">Trigger 2</button>\n"
    }]
  }]
});

export { TooltipAutoHideExample, TooltipCustomClassExample, TooltipDelayExample, TooltipDisabledExample, TooltipHarnessExample, TooltipManualExample, TooltipMessageExample, TooltipModifiedDefaultsExample, TooltipOverviewExample, TooltipPositionAtOriginExample, TooltipPositionExample };
//# sourceMappingURL=material-tooltip.mjs.map
