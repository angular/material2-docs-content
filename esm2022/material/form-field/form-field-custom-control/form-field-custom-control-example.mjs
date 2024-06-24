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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.3", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i2.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i2.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"], outputs: ["valueChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i0.forwardRef(() => AsyncPipe), name: "async" }, { kind: "pipe", type: i0.forwardRef(() => JsonPipe), name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: MyTelInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.1.0-next.3", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { _userAriaDescribedBy: { classPropertyName: "_userAriaDescribedBy", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null }, _placeholder: { classPropertyName: "_placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, _required: { classPropertyName: "_required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, _disabledByInput: { classPropertyName: "_disabledByInput", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, _value: { classPropertyName: "_value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { _value: "valueChange" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true, isSignal: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true, isSignal: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBR0wsV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsVUFBVSxHQUNY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Qjs7a0dBRy9CLFVBQVU7a0JBYnRCLFNBQVM7K0JBQ0UsbUJBQW1CLGFBR2xCLENBQUMsRUFBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxZQUFZLEVBQUMsQ0FBQyxRQUM5RDt3QkFDSiwwQkFBMEIsRUFBRSxrQkFBa0I7d0JBQzlDLE1BQU0sRUFBRSxJQUFJO3FCQUNiLGNBQ1csSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLG1CQUFtQixDQUFDLG1CQUMxQix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb2N1c01vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7QXN5bmNQaXBlLCBKc29uUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgYm9vbGVhbkF0dHJpYnV0ZSxcbiAgY29tcHV0ZWQsXG4gIGVmZmVjdCxcbiAgZm9yd2FyZFJlZixcbiAgaW5qZWN0LFxuICBpbnB1dCxcbiAgbW9kZWwsXG4gIHNpZ25hbCxcbiAgdW50cmFja2VkLFxuICB2aWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlVW50aWxEZXN0cm95ZWR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcbmltcG9ydCB7XG4gIEFic3RyYWN0Q29udHJvbCxcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXG4gIEZvcm1CdWlsZGVyLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwLFxuICBGb3Jtc01vZHVsZSxcbiAgTmdDb250cm9sLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBWYWxpZGF0b3JzLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBNQVRfRk9STV9GSUVMRCxcbiAgTWF0Rm9ybUZpZWxkQ29udHJvbCxcbiAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBmb3J3YXJkUmVmKCgpID0+IE15VGVsSW5wdXQpLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgQXN5bmNQaXBlLFxuICAgIEpzb25QaXBlLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge1xuICByZWFkb25seSBmb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgdGVsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCksXG4gIH0pO1xufVxuXG4vKiogRGF0YSBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgdGVsZXBob25lIG51bWJlci4gKi9cbmV4cG9ydCBjbGFzcyBNeVRlbCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcmVhOiBzdHJpbmcsXG4gICAgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsXG4gICAgcHVibGljIHN1YnNjcmliZXI6IHN0cmluZyxcbiAgKSB7fVxufVxuXG4vKiogQ3VzdG9tIGBNYXRGb3JtRmllbGRDb250cm9sYCBmb3IgdGVsZXBob25lIG51bWJlciBpbnB1dC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuY3NzJyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0fV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmV4YW1wbGUtZmxvYXRpbmddJzogJ3Nob3VsZExhYmVsRmxvYXQnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgfSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE15VGVsSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxNeVRlbD4sIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuICByZWFkb25seSBhcmVhSW5wdXQgPSB2aWV3Q2hpbGQucmVxdWlyZWQ8SFRNTElucHV0RWxlbWVudD4oJ2FyZWEnKTtcbiAgcmVhZG9ubHkgZXhjaGFuZ2VJbnB1dCA9IHZpZXdDaGlsZC5yZXF1aXJlZDxIVE1MSW5wdXRFbGVtZW50PignZXhjaGFuZ2UnKTtcbiAgcmVhZG9ubHkgc3Vic2NyaWJlcklucHV0ID0gdmlld0NoaWxkLnJlcXVpcmVkPEhUTUxJbnB1dEVsZW1lbnQ+KCdzdWJzY3JpYmVyJyk7XG4gIG5nQ29udHJvbCA9IGluamVjdChOZ0NvbnRyb2wsIHtvcHRpb25hbDogdHJ1ZSwgc2VsZjogdHJ1ZX0pO1xuICByZWFkb25seSBwYXJ0czogRm9ybUdyb3VwPHtcbiAgICBhcmVhOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcbiAgICBleGNoYW5nZTogRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVsbD47XG4gICAgc3Vic2NyaWJlcjogRm9ybUNvbnRyb2w8c3RyaW5nIHwgbnVsbD47XG4gIH0+O1xuICByZWFkb25seSBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICByZWFkb25seSB0b3VjaGVkID0gc2lnbmFsKGZhbHNlKTtcbiAgcmVhZG9ubHkgY29udHJvbFR5cGUgPSAnZXhhbXBsZS10ZWwtaW5wdXQnO1xuICByZWFkb25seSBpZCA9IGBleGFtcGxlLXRlbC1pbnB1dC0ke015VGVsSW5wdXQubmV4dElkKyt9YDtcbiAgcmVhZG9ubHkgX3VzZXJBcmlhRGVzY3JpYmVkQnkgPSBpbnB1dDxzdHJpbmc+KCcnLCB7YWxpYXM6ICdhcmlhLWRlc2NyaWJlZGJ5J30pO1xuICByZWFkb25seSBfcGxhY2Vob2xkZXIgPSBpbnB1dDxzdHJpbmc+KCcnLCB7YWxpYXM6ICdwbGFjZWhvbGRlcid9KTtcbiAgcmVhZG9ubHkgX3JlcXVpcmVkID0gaW5wdXQ8Ym9vbGVhbiwgdW5rbm93bj4oZmFsc2UsIHtcbiAgICBhbGlhczogJ3JlcXVpcmVkJyxcbiAgICB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUsXG4gIH0pO1xuICByZWFkb25seSBfZGlzYWJsZWRCeUlucHV0ID0gaW5wdXQ8Ym9vbGVhbiwgdW5rbm93bj4oZmFsc2UsIHtcbiAgICBhbGlhczogJ2Rpc2FibGVkJyxcbiAgICB0cmFuc2Zvcm06IGJvb2xlYW5BdHRyaWJ1dGUsXG4gIH0pO1xuICByZWFkb25seSBfdmFsdWUgPSBtb2RlbDxNeVRlbCB8IG51bGw+KG51bGwsIHthbGlhczogJ3ZhbHVlJ30pO1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgX2Zvcm1GaWVsZCA9IGluamVjdChNQVRfRk9STV9GSUVMRCwge1xuICAgIG9wdGlvbmFsOiB0cnVlLFxuICB9KTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9mb2N1c2VkID0gc2lnbmFsKGZhbHNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGlzYWJsZWRCeUN2YSA9IHNpZ25hbChmYWxzZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2Rpc2FibGVkID0gY29tcHV0ZWQoKCkgPT4gdGhpcy5fZGlzYWJsZWRCeUlucHV0KCkgfHwgdGhpcy5fZGlzYWJsZWRCeUN2YSgpKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZm9jdXNNb25pdG9yID0gaW5qZWN0KEZvY3VzTW9uaXRvcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2VsZW1lbnRSZWYgPSBpbmplY3Q8RWxlbWVudFJlZjxIVE1MRWxlbWVudD4+KEVsZW1lbnRSZWYpO1xuXG4gIGdldCBmb2N1c2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9mb2N1c2VkKCk7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0sXG4gICAgfSA9IHRoaXMucGFydHM7XG5cbiAgICByZXR1cm4gIWFyZWEgJiYgIWV4Y2hhbmdlICYmICFzdWJzY3JpYmVyO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTtcbiAgfVxuXG4gIGdldCB1c2VyQXJpYURlc2NyaWJlZEJ5KCkge1xuICAgIHJldHVybiB0aGlzLl91c2VyQXJpYURlc2NyaWJlZEJ5KCk7XG4gIH1cblxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXIoKTtcbiAgfVxuXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQoKTtcbiAgfVxuXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQoKTtcbiAgfVxuXG4gIGdldCB2YWx1ZSgpOiBNeVRlbCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZSgpO1xuICB9XG5cbiAgZ2V0IGVycm9yU3RhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucGFydHMuaW52YWxpZCAmJiB0aGlzLnRvdWNoZWQoKTtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuXG4gICAgdGhpcy5wYXJ0cyA9IGluamVjdChGb3JtQnVpbGRlcikuZ3JvdXAoe1xuICAgICAgYXJlYTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXV0sXG4gICAgICBleGNoYW5nZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDMpXV0sXG4gICAgICBzdWJzY3JpYmVyOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoNCldXSxcbiAgICB9KTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBSZWFkIHNpZ25hbHMgdG8gdHJpZ2dlciBlZmZlY3QuXG4gICAgICB0aGlzLl9wbGFjZWhvbGRlcigpO1xuICAgICAgdGhpcy5fcmVxdWlyZWQoKTtcbiAgICAgIHRoaXMuX2Rpc2FibGVkKCk7XG4gICAgICAvLyBQcm9wYWdhdGUgc3RhdGUgY2hhbmdlcy5cbiAgICAgIHVudHJhY2tlZCgoKSA9PiB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCkpO1xuICAgIH0pO1xuXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCgpKSB7XG4gICAgICAgIHVudHJhY2tlZCgoKSA9PiB0aGlzLnBhcnRzLmRpc2FibGUoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1bnRyYWNrZWQoKCkgPT4gdGhpcy5wYXJ0cy5lbmFibGUoKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBlZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLl92YWx1ZSgpIHx8IG5ldyBNeVRlbCgnJywgJycsICcnKTtcbiAgICAgIHVudHJhY2tlZCgoKSA9PiB0aGlzLnBhcnRzLnNldFZhbHVlKHZhbHVlKSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnBhcnRzLnN0YXR1c0NoYW5nZXMucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFydHMudmFsdWVDaGFuZ2VzLnBpcGUodGFrZVVudGlsRGVzdHJveWVkKCkpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICBjb25zdCB0ZWwgPSB0aGlzLnBhcnRzLnZhbGlkXG4gICAgICAgID8gbmV3IE15VGVsKFxuICAgICAgICAgICAgdGhpcy5wYXJ0cy52YWx1ZS5hcmVhIHx8ICcnLFxuICAgICAgICAgICAgdGhpcy5wYXJ0cy52YWx1ZS5leGNoYW5nZSB8fCAnJyxcbiAgICAgICAgICAgIHRoaXMucGFydHMudmFsdWUuc3Vic2NyaWJlciB8fCAnJyxcbiAgICAgICAgICApXG4gICAgICAgIDogbnVsbDtcbiAgICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRlbCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmKTtcbiAgfVxuXG4gIG9uRm9jdXNJbigpIHtcbiAgICBpZiAoIXRoaXMuX2ZvY3VzZWQoKSkge1xuICAgICAgdGhpcy5fZm9jdXNlZC5zZXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c091dChldmVudDogRm9jdXNFdmVudCkge1xuICAgIGlmICghdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgRWxlbWVudCkpIHtcbiAgICAgIHRoaXMudG91Y2hlZC5zZXQodHJ1ZSk7XG4gICAgICB0aGlzLl9mb2N1c2VkLnNldChmYWxzZSk7XG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuXG4gIGF1dG9Gb2N1c05leHQoY29udHJvbDogQWJzdHJhY3RDb250cm9sLCBuZXh0RWxlbWVudD86IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIWNvbnRyb2wuZXJyb3JzICYmIG5leHRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEobmV4dEVsZW1lbnQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgYXV0b0ZvY3VzUHJldihjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIHByZXZFbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKGNvbnRyb2wudmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHByZXZFbGVtZW50LCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjb250cm9sRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJy5leGFtcGxlLXRlbC1pbnB1dC1jb250YWluZXInLFxuICAgICkhO1xuICAgIGNvbnRyb2xFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGlkcy5qb2luKCcgJykpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljaygpIHtcbiAgICBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5zdWJzY3JpYmVySW5wdXQoKSwgJ3Byb2dyYW0nKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucGFydHMuY29udHJvbHMuZXhjaGFuZ2UudmFsaWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN1YnNjcmliZXJJbnB1dCgpLCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5hcmVhLnZhbGlkKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEodGhpcy5leGNoYW5nZUlucHV0KCksICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmFyZWFJbnB1dCgpLCAncHJvZ3JhbScpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl91cGRhdGVWYWx1ZSh0ZWwpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNhYmxlZEJ5Q3ZhLnNldChpc0Rpc2FibGVkKTtcbiAgfVxuXG4gIF9oYW5kbGVJbnB1dChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5leHRFbGVtZW50PzogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuYXV0b0ZvY3VzTmV4dChjb250cm9sLCBuZXh0RWxlbWVudCk7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3VwZGF0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKSB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuX3ZhbHVlKCk7XG4gICAgaWYgKFxuICAgICAgdGVsID09PSBjdXJyZW50IHx8XG4gICAgICAodGVsPy5hcmVhID09PSBjdXJyZW50Py5hcmVhICYmXG4gICAgICAgIHRlbD8uZXhjaGFuZ2UgPT09IGN1cnJlbnQ/LmV4Y2hhbmdlICYmXG4gICAgICAgIHRlbD8uc3Vic2NyaWJlciA9PT0gY3VycmVudD8uc3Vic2NyaWJlcilcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fdmFsdWUuc2V0KHRlbCk7XG4gIH1cbn1cbiIsIjxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlBob25lIG51bWJlcjwvbWF0LWxhYmVsPlxuICAgIDxleGFtcGxlLXRlbC1pbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ0ZWxcIiByZXF1aXJlZD48L2V4YW1wbGUtdGVsLWlucHV0PlxuICAgIDxtYXQtaWNvbiBtYXRTdWZmaXg+cGhvbmU8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5JbmNsdWRlIGFyZWEgY29kZTwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxwPkVudGVyZWQgdmFsdWU6IHt7Zm9ybS52YWx1ZUNoYW5nZXMgfCBhc3luYyB8IGpzb259fTwvcD5cbjwvZGl2PlxuIiwiPGRpdlxuICByb2xlPVwiZ3JvdXBcIlxuICBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lclwiXG4gIFtmb3JtR3JvdXBdPVwicGFydHNcIlxuICBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiX2Zvcm1GaWVsZD8uZ2V0TGFiZWxJZCgpXCJcbiAgKGZvY3VzaW4pPVwib25Gb2N1c0luKClcIlxuICAoZm9jdXNvdXQpPVwib25Gb2N1c091dCgkZXZlbnQpXCJcbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICBmb3JtQ29udHJvbE5hbWU9XCJhcmVhXCJcbiAgICBzaXplPVwiM1wiXG4gICAgbWF4TGVuZ3RoPVwiM1wiXG4gICAgYXJpYS1sYWJlbD1cIkFyZWEgY29kZVwiXG4gICAgKGlucHV0KT1cIl9oYW5kbGVJbnB1dChwYXJ0cy5jb250cm9scy5hcmVhLCBleGNoYW5nZSlcIlxuICAgICNhcmVhXG4gIC8+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICBmb3JtQ29udHJvbE5hbWU9XCJleGNoYW5nZVwiXG4gICAgbWF4TGVuZ3RoPVwiM1wiXG4gICAgc2l6ZT1cIjNcIlxuICAgIGFyaWEtbGFiZWw9XCJFeGNoYW5nZSBjb2RlXCJcbiAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLCBzdWJzY3JpYmVyKVwiXG4gICAgKGtleXVwLmJhY2tzcGFjZSk9XCJhdXRvRm9jdXNQcmV2KHBhcnRzLmNvbnRyb2xzLmV4Y2hhbmdlLCBhcmVhKVwiXG4gICAgI2V4Y2hhbmdlXG4gIC8+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtc3BhY2VyXCI+Jm5kYXNoOzwvc3Bhbj5cbiAgPGlucHV0XG4gICAgY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1lbGVtZW50XCJcbiAgICBmb3JtQ29udHJvbE5hbWU9XCJzdWJzY3JpYmVyXCJcbiAgICBtYXhMZW5ndGg9XCI0XCJcbiAgICBzaXplPVwiNFwiXG4gICAgYXJpYS1sYWJlbD1cIlN1YnNjcmliZXIgbnVtYmVyXCJcbiAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIpXCJcbiAgICAoa2V5dXAuYmFja3NwYWNlKT1cImF1dG9Gb2N1c1ByZXYocGFydHMuY29udHJvbHMuc3Vic2NyaWJlciwgZXhjaGFuZ2UpXCJcbiAgICAjc3Vic2NyaWJlclxuICAvPlxuPC9kaXY+XG4iXX0=