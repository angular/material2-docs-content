import { FocusMonitor } from '@angular/cdk/a11y';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, booleanAttribute, computed, effect, forwardRef, inject, input, model, signal, untracked, viewChild, } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgControl, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MAT_FORM_FIELD, MatFormFieldControl, MatFormFieldModule, } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/icon";
/** @title Form field with custom telephone number input control. */
export class FormFieldCustomControlExample {
    constructor() {
        this.form = new FormGroup({
            tel: new FormControl(null),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i2.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i2.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"], outputs: ["valueChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i0.forwardRef(() => AsyncPipe), name: "async" }, { kind: "pipe", type: i0.forwardRef(() => JsonPipe), name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-custom-control-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        forwardRef(() => MyTelInput),
                        MatIconModule,
                        AsyncPipe,
                        JsonPipe,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n" }]
        }] });
/** Data structure for holding telephone number. */
export class MyTel {
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
/** Custom `MatFormFieldControl` for telephone number input. */
export class MyTelInput {
    static { this.nextId = 0; }
    get focused() {
        return this._focused();
    }
    get empty() {
        const { value: { area, exchange, subscriber }, } = this.parts;
        return !area && !exchange && !subscriber;
    }
    get shouldLabelFloat() {
        return this.focused || !this.empty;
    }
    get userAriaDescribedBy() {
        return this._userAriaDescribedBy();
    }
    get placeholder() {
        return this._placeholder();
    }
    get required() {
        return this._required();
    }
    get disabled() {
        return this._disabled();
    }
    get value() {
        return this._value();
    }
    get errorState() {
        return this.parts.invalid && this.touched();
    }
    constructor() {
        this.areaInput = viewChild.required('area');
        this.exchangeInput = viewChild.required('exchange');
        this.subscriberInput = viewChild.required('subscriber');
        this.ngControl = inject(NgControl, { optional: true, self: true });
        this.stateChanges = new Subject();
        this.touched = signal(false);
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this._userAriaDescribedBy = input('', { alias: 'aria-describedby' });
        this._placeholder = input('', { alias: 'placeholder' });
        this._required = input(false, {
            alias: 'required',
            transform: booleanAttribute,
        });
        this._disabledByInput = input(false, {
            alias: 'disabled',
            transform: booleanAttribute,
        });
        this._value = model(null, { alias: 'value' });
        this.onChange = (_) => { };
        this.onTouched = () => { };
        this._formField = inject(MAT_FORM_FIELD, {
            optional: true,
        });
        this._focused = signal(false);
        this._disabledByCva = signal(false);
        this._disabled = computed(() => this._disabledByInput() || this._disabledByCva());
        this._focusMonitor = inject(FocusMonitor);
        this._elementRef = inject(ElementRef);
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        this.parts = inject(FormBuilder).group({
            area: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            exchange: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
            subscriber: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
        });
        effect(() => {
            // Read signals to trigger effect.
            this._placeholder();
            this._required();
            this._disabled();
            this._focused();
            // Propagate state changes.
            untracked(() => this.stateChanges.next());
        });
        effect(() => {
            if (this._disabled()) {
                untracked(() => this.parts.disable());
            }
            else {
                untracked(() => this.parts.enable());
            }
        });
        effect(() => {
            const value = this._value() || new MyTel('', '', '');
            untracked(() => this.parts.setValue(value));
        });
        this.parts.statusChanges.pipe(takeUntilDestroyed()).subscribe(() => {
            this.stateChanges.next();
        });
        this.parts.valueChanges.pipe(takeUntilDestroyed()).subscribe(value => {
            const tel = this.parts.valid
                ? new MyTel(this.parts.value.area || '', this.parts.value.exchange || '', this.parts.value.subscriber || '')
                : null;
            this._updateValue(tel);
        });
    }
    ngOnDestroy() {
        this.stateChanges.complete();
        this._focusMonitor.stopMonitoring(this._elementRef);
    }
    onFocusIn() {
        if (!this._focused()) {
            this._focused.set(true);
        }
    }
    onFocusOut(event) {
        if (!this._elementRef.nativeElement.contains(event.relatedTarget)) {
            this.touched.set(true);
            this._focused.set(false);
            this.onTouched();
        }
    }
    autoFocusNext(control, nextElement) {
        if (!control.errors && nextElement) {
            this._focusMonitor.focusVia(nextElement, 'program');
        }
    }
    autoFocusPrev(control, prevElement) {
        if (control.value.length < 1) {
            this._focusMonitor.focusVia(prevElement, 'program');
        }
    }
    setDescribedByIds(ids) {
        const controlElement = this._elementRef.nativeElement.querySelector('.example-tel-input-container');
        controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
    onContainerClick() {
        if (this.parts.controls.subscriber.valid) {
            this._focusMonitor.focusVia(this.subscriberInput(), 'program');
        }
        else if (this.parts.controls.exchange.valid) {
            this._focusMonitor.focusVia(this.subscriberInput(), 'program');
        }
        else if (this.parts.controls.area.valid) {
            this._focusMonitor.focusVia(this.exchangeInput(), 'program');
        }
        else {
            this._focusMonitor.focusVia(this.areaInput(), 'program');
        }
    }
    writeValue(tel) {
        this._updateValue(tel);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this._disabledByCva.set(isDisabled);
    }
    _handleInput(control, nextElement) {
        this.autoFocusNext(control, nextElement);
        this.onChange(this.value);
    }
    _updateValue(tel) {
        const current = this._value();
        if (tel === current ||
            (tel?.area === current?.area &&
                tel?.exchange === current?.exchange &&
                tel?.subscriber === current?.subscriber)) {
            return;
        }
        this._value.set(tel);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: MyTelInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.2.0-next.2", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { _userAriaDescribedBy: { classPropertyName: "_userAriaDescribedBy", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null }, _placeholder: { classPropertyName: "_placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, _required: { classPropertyName: "_required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, _disabledByInput: { classPropertyName: "_disabledByInput", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, _value: { classPropertyName: "_value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { _value: "valueChange" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true, isSignal: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true, isSignal: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBR0wsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsVUFBVSxHQUNY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ckNBd0NBLGdiRndDWSxXQUFXLGtqQkFBRSxtQkFBbUI7O2tHQUcvQixVQUFVO2tCQWJ0QixTQUFTOytCQUNFLG1CQUFtQixhQUdsQixDQUFDLEVBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsWUFBWSxFQUFDLENBQUMsUUFDOUQ7d0JBQ0osMEJBQTBCLEVBQUUsa0JBQWtCO3dCQUM5QyxNQUFNLEVBQUUsSUFBSTtxQkFDYixjQUNXLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxtQkFDMUIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0FzeW5jUGlwZSwgSnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGNvbXB1dGVkLFxuICBlZmZlY3QsXG4gIGZvcndhcmRSZWYsXG4gIGluamVjdCxcbiAgaW5wdXQsXG4gIG1vZGVsLFxuICBzaWduYWwsXG4gIHVudHJhY2tlZCxcbiAgdmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7dGFrZVVudGlsRGVzdHJveWVkfSBmcm9tICdAYW5ndWxhci9jb3JlL3J4anMtaW50ZXJvcCc7XG5pbXBvcnQge1xuICBBYnN0cmFjdENvbnRyb2wsXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxuICBGb3JtQnVpbGRlcixcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1Hcm91cCxcbiAgRm9ybXNNb2R1bGUsXG4gIE5nQ29udHJvbCxcbiAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgTUFUX0ZPUk1fRklFTEQsXG4gIE1hdEZvcm1GaWVsZENvbnRyb2wsXG4gIE1hdEZvcm1GaWVsZE1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggY3VzdG9tIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQgY29udHJvbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgZm9yd2FyZFJlZigoKSA9PiBNeVRlbElucHV0KSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIEFzeW5jUGlwZSxcbiAgICBKc29uUGlwZSxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlIHtcbiAgcmVhZG9ubHkgZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgIHRlbDogbmV3IEZvcm1Db250cm9sKG51bGwpLFxuICB9KTtcbn1cblxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXG5leHBvcnQgY2xhc3MgTXlUZWwge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJlYTogc3RyaW5nLFxuICAgIHB1YmxpYyBleGNoYW5nZTogc3RyaW5nLFxuICAgIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmcsXG4gICkge31cbn1cblxuLyoqIEN1c3RvbSBgTWF0Rm9ybUZpZWxkQ29udHJvbGAgZm9yIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmNzcycsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXlUZWxJbnB1dH1dLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gIH0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNeVRlbElucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8TXlUZWw+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcbiAgcmVhZG9ubHkgYXJlYUlucHV0ID0gdmlld0NoaWxkLnJlcXVpcmVkPEhUTUxJbnB1dEVsZW1lbnQ+KCdhcmVhJyk7XG4gIHJlYWRvbmx5IGV4Y2hhbmdlSW5wdXQgPSB2aWV3Q2hpbGQucmVxdWlyZWQ8SFRNTElucHV0RWxlbWVudD4oJ2V4Y2hhbmdlJyk7XG4gIHJlYWRvbmx5IHN1YnNjcmliZXJJbnB1dCA9IHZpZXdDaGlsZC5yZXF1aXJlZDxIVE1MSW5wdXRFbGVtZW50Pignc3Vic2NyaWJlcicpO1xuICBuZ0NvbnRyb2wgPSBpbmplY3QoTmdDb250cm9sLCB7b3B0aW9uYWw6IHRydWUsIHNlbGY6IHRydWV9KTtcbiAgcmVhZG9ubHkgcGFydHM6IEZvcm1Hcm91cDx7XG4gICAgYXJlYTogRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVsbD47XG4gICAgZXhjaGFuZ2U6IEZvcm1Db250cm9sPHN0cmluZyB8IG51bGw+O1xuICAgIHN1YnNjcmliZXI6IEZvcm1Db250cm9sPHN0cmluZyB8IG51bGw+O1xuICB9PjtcbiAgcmVhZG9ubHkgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcmVhZG9ubHkgdG91Y2hlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHJlYWRvbmx5IGNvbnRyb2xUeXBlID0gJ2V4YW1wbGUtdGVsLWlucHV0JztcbiAgcmVhZG9ubHkgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XG4gIHJlYWRvbmx5IF91c2VyQXJpYURlc2NyaWJlZEJ5ID0gaW5wdXQ8c3RyaW5nPignJywge2FsaWFzOiAnYXJpYS1kZXNjcmliZWRieSd9KTtcbiAgcmVhZG9ubHkgX3BsYWNlaG9sZGVyID0gaW5wdXQ8c3RyaW5nPignJywge2FsaWFzOiAncGxhY2Vob2xkZXInfSk7XG4gIHJlYWRvbmx5IF9yZXF1aXJlZCA9IGlucHV0PGJvb2xlYW4sIHVua25vd24+KGZhbHNlLCB7XG4gICAgYWxpYXM6ICdyZXF1aXJlZCcsXG4gICAgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlLFxuICB9KTtcbiAgcmVhZG9ubHkgX2Rpc2FibGVkQnlJbnB1dCA9IGlucHV0PGJvb2xlYW4sIHVua25vd24+KGZhbHNlLCB7XG4gICAgYWxpYXM6ICdkaXNhYmxlZCcsXG4gICAgdHJhbnNmb3JtOiBib29sZWFuQXR0cmlidXRlLFxuICB9KTtcbiAgcmVhZG9ubHkgX3ZhbHVlID0gbW9kZWw8TXlUZWwgfCBudWxsPihudWxsLCB7YWxpYXM6ICd2YWx1ZSd9KTtcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IF9mb3JtRmllbGQgPSBpbmplY3QoTUFUX0ZPUk1fRklFTEQsIHtcbiAgICBvcHRpb25hbDogdHJ1ZSxcbiAgfSk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZm9jdXNlZCA9IHNpZ25hbChmYWxzZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc2FibGVkQnlDdmEgPSBzaWduYWwoZmFsc2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9kaXNhYmxlZCA9IGNvbXB1dGVkKCgpID0+IHRoaXMuX2Rpc2FibGVkQnlJbnB1dCgpIHx8IHRoaXMuX2Rpc2FibGVkQnlDdmEoKSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZvY3VzTW9uaXRvciA9IGluamVjdChGb2N1c01vbml0b3IpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9lbGVtZW50UmVmID0gaW5qZWN0PEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+PihFbGVtZW50UmVmKTtcblxuICBnZXQgZm9jdXNlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZm9jdXNlZCgpO1xuICB9XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlOiB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9LFxuICAgIH0gPSB0aGlzLnBhcnRzO1xuXG4gICAgcmV0dXJuICFhcmVhICYmICFleGNoYW5nZSAmJiAhc3Vic2NyaWJlcjtcbiAgfVxuXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7XG4gIH1cblxuICBnZXQgdXNlckFyaWFEZXNjcmliZWRCeSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdXNlckFyaWFEZXNjcmliZWRCeSgpO1xuICB9XG5cbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyKCk7XG4gIH1cblxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVkKCk7XG4gIH1cblxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkKCk7XG4gIH1cblxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUoKTtcbiAgfVxuXG4gIGdldCBlcnJvclN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhcnRzLmludmFsaWQgJiYgdGhpcy50b3VjaGVkKCk7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cblxuICAgIHRoaXMucGFydHMgPSBpbmplY3QoRm9ybUJ1aWxkZXIpLmdyb3VwKHtcbiAgICAgIGFyZWE6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1dLFxuICAgICAgZXhjaGFuZ2U6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDMpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgzKV1dLFxuICAgICAgc3Vic2NyaWJlcjogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDQpXV0sXG4gICAgfSk7XG5cbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgLy8gUmVhZCBzaWduYWxzIHRvIHRyaWdnZXIgZWZmZWN0LlxuICAgICAgdGhpcy5fcGxhY2Vob2xkZXIoKTtcbiAgICAgIHRoaXMuX3JlcXVpcmVkKCk7XG4gICAgICB0aGlzLl9kaXNhYmxlZCgpO1xuICAgICAgdGhpcy5fZm9jdXNlZCgpO1xuICAgICAgLy8gUHJvcGFnYXRlIHN0YXRlIGNoYW5nZXMuXG4gICAgICB1bnRyYWNrZWQoKCkgPT4gdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpKTtcbiAgICB9KTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZGlzYWJsZWQoKSkge1xuICAgICAgICB1bnRyYWNrZWQoKCkgPT4gdGhpcy5wYXJ0cy5kaXNhYmxlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdW50cmFja2VkKCgpID0+IHRoaXMucGFydHMuZW5hYmxlKCkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fdmFsdWUoKSB8fCBuZXcgTXlUZWwoJycsICcnLCAnJyk7XG4gICAgICB1bnRyYWNrZWQoKCkgPT4gdGhpcy5wYXJ0cy5zZXRWYWx1ZSh2YWx1ZSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYXJ0cy5zdGF0dXNDaGFuZ2VzLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcnRzLnZhbHVlQ2hhbmdlcy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgY29uc3QgdGVsID0gdGhpcy5wYXJ0cy52YWxpZFxuICAgICAgICA/IG5ldyBNeVRlbChcbiAgICAgICAgICAgIHRoaXMucGFydHMudmFsdWUuYXJlYSB8fCAnJyxcbiAgICAgICAgICAgIHRoaXMucGFydHMudmFsdWUuZXhjaGFuZ2UgfHwgJycsXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnZhbHVlLnN1YnNjcmliZXIgfHwgJycsXG4gICAgICAgICAgKVxuICAgICAgICA6IG51bGw7XG4gICAgICB0aGlzLl91cGRhdGVWYWx1ZSh0ZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLl9mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5fZWxlbWVudFJlZik7XG4gIH1cblxuICBvbkZvY3VzSW4oKSB7XG4gICAgaWYgKCF0aGlzLl9mb2N1c2VkKCkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWQuc2V0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uRm9jdXNPdXQoZXZlbnQ6IEZvY3VzRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQpKSB7XG4gICAgICB0aGlzLnRvdWNoZWQuc2V0KHRydWUpO1xuICAgICAgdGhpcy5fZm9jdXNlZC5zZXQoZmFsc2UpO1xuICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBhdXRvRm9jdXNOZXh0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCFjb250cm9sLmVycm9ycyAmJiBuZXh0RWxlbWVudCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKG5leHRFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c1ByZXYoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBwcmV2RWxlbWVudDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChjb250cm9sLnZhbHVlLmxlbmd0aCA8IDEpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShwcmV2RWxlbWVudCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgY29udHJvbEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcuZXhhbXBsZS10ZWwtaW5wdXQtY29udGFpbmVyJyxcbiAgICApITtcbiAgICBjb250cm9sRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknLCBpZHMuam9pbignICcpKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMucGFydHMuY29udHJvbHMuc3Vic2NyaWJlci52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0KCksICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQoKSwgJ3Byb2dyYW0nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFydHMuY29udHJvbHMuYXJlYS52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuZXhjaGFuZ2VJbnB1dCgpLCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5hcmVhSW5wdXQoKSwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5fdXBkYXRlVmFsdWUodGVsKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzYWJsZWRCeUN2YS5zZXQoaXNEaXNhYmxlZCk7XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dG9Gb2N1c05leHQoY29udHJvbCwgbmV4dEVsZW1lbnQpO1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLl92YWx1ZSgpO1xuICAgIGlmIChcbiAgICAgIHRlbCA9PT0gY3VycmVudCB8fFxuICAgICAgKHRlbD8uYXJlYSA9PT0gY3VycmVudD8uYXJlYSAmJlxuICAgICAgICB0ZWw/LmV4Y2hhbmdlID09PSBjdXJyZW50Py5leGNoYW5nZSAmJlxuICAgICAgICB0ZWw/LnN1YnNjcmliZXIgPT09IGN1cnJlbnQ/LnN1YnNjcmliZXIpXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlLnNldCh0ZWwpO1xuICB9XG59XG4iLCI8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5QaG9uZSBudW1iZXI8L21hdC1sYWJlbD5cbiAgICA8ZXhhbXBsZS10ZWwtaW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwidGVsXCIgcmVxdWlyZWQ+PC9leGFtcGxlLXRlbC1pbnB1dD5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnBob25lPC9tYXQtaWNvbj5cbiAgICA8bWF0LWhpbnQ+SW5jbHVkZSBhcmVhIGNvZGU8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8cD5FbnRlcmVkIHZhbHVlOiB7e2Zvcm0udmFsdWVDaGFuZ2VzIHwgYXN5bmMgfCBqc29ufX08L3A+XG48L2Rpdj5cbiIsIjxkaXZcbiAgcm9sZT1cImdyb3VwXCJcbiAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXJcIlxuICBbZm9ybUdyb3VwXT1cInBhcnRzXCJcbiAgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cIl9mb3JtRmllbGQ/LmdldExhYmVsSWQoKVwiXG4gIChmb2N1c2luKT1cIm9uRm9jdXNJbigpXCJcbiAgKGZvY3Vzb3V0KT1cIm9uRm9jdXNPdXQoJGV2ZW50KVwiXG4+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgZm9ybUNvbnRyb2xOYW1lPVwiYXJlYVwiXG4gICAgc2l6ZT1cIjNcIlxuICAgIG1heExlbmd0aD1cIjNcIlxuICAgIGFyaWEtbGFiZWw9XCJBcmVhIGNvZGVcIlxuICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuYXJlYSwgZXhjaGFuZ2UpXCJcbiAgICAjYXJlYVxuICAvPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgZm9ybUNvbnRyb2xOYW1lPVwiZXhjaGFuZ2VcIlxuICAgIG1heExlbmd0aD1cIjNcIlxuICAgIHNpemU9XCIzXCJcbiAgICBhcmlhLWxhYmVsPVwiRXhjaGFuZ2UgY29kZVwiXG4gICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgc3Vic2NyaWJlcilcIlxuICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5leGNoYW5nZSwgYXJlYSlcIlxuICAgICNleGNoYW5nZVxuICAvPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LXNwYWNlclwiPiZuZGFzaDs8L3NwYW4+XG4gIDxpbnB1dFxuICAgIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtZWxlbWVudFwiXG4gICAgZm9ybUNvbnRyb2xOYW1lPVwic3Vic2NyaWJlclwiXG4gICAgbWF4TGVuZ3RoPVwiNFwiXG4gICAgc2l6ZT1cIjRcIlxuICAgIGFyaWEtbGFiZWw9XCJTdWJzY3JpYmVyIG51bWJlclwiXG4gICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyKVwiXG4gICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIsIGV4Y2hhbmdlKVwiXG4gICAgI3N1YnNjcmliZXJcbiAgLz5cbjwvZGl2PlxuIl19