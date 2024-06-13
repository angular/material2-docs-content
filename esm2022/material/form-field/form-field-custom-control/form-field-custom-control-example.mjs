import { FocusMonitor } from '@angular/cdk/a11y';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, booleanAttribute, computed, effect, forwardRef, inject, input, model, signal, viewChild, } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: FormFieldCustomControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: FormFieldCustomControlExample, isStandalone: true, selector: "form-field-custom-control-example", ngImport: i0, template: "<div [formGroup]=\"form\">\n  <mat-form-field>\n    <mat-label>Phone number</mat-label>\n    <example-tel-input formControlName=\"tel\" required></example-tel-input>\n    <mat-icon matSuffix>phone</mat-icon>\n    <mat-hint>Include area code</mat-hint>\n  </mat-form-field>\n  <p>Entered value: {{form.valueChanges | async | json}}</p>\n</div>\n", dependencies: [{ kind: "ngmodule", type: i0.forwardRef(() => FormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatus), selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i0.forwardRef(() => i1.NgControlStatusGroup), selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i0.forwardRef(() => i1.RequiredValidator), selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: i0.forwardRef(() => ReactiveFormsModule) }, { kind: "directive", type: i0.forwardRef(() => i1.FormGroupDirective), selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i0.forwardRef(() => i1.FormControlName), selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatFormFieldModule) }, { kind: "component", type: i0.forwardRef(() => i2.MatFormField), selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatLabel), selector: "mat-label" }, { kind: "directive", type: i0.forwardRef(() => i2.MatHint), selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i0.forwardRef(() => i2.MatSuffix), selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "component", type: i0.forwardRef(() => MyTelInput), selector: "example-tel-input", inputs: ["aria-describedby", "placeholder", "required", "disabled", "value"], outputs: ["valueChange"] }, { kind: "ngmodule", type: i0.forwardRef(() => MatIconModule) }, { kind: "component", type: i0.forwardRef(() => i3.MatIcon), selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "pipe", type: i0.forwardRef(() => AsyncPipe), name: "async" }, { kind: "pipe", type: i0.forwardRef(() => JsonPipe), name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: FormFieldCustomControlExample, decorators: [{
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
            this.stateChanges.next();
        });
        effect(() => {
            if (this._disabled()) {
                this.parts.disable();
            }
            else {
                this.parts.enable();
            }
        });
        effect(() => {
            this.parts.setValue(this._value() || new MyTel('', '', ''));
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: MyTelInput, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.2.0", version: "18.1.0-next.1", type: MyTelInput, isStandalone: true, selector: "example-tel-input", inputs: { _userAriaDescribedBy: { classPropertyName: "_userAriaDescribedBy", publicName: "aria-describedby", isSignal: true, isRequired: false, transformFunction: null }, _placeholder: { classPropertyName: "_placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, _required: { classPropertyName: "_required", publicName: "required", isSignal: true, isRequired: false, transformFunction: null }, _disabledByInput: { classPropertyName: "_disabledByInput", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null }, _value: { classPropertyName: "_value", publicName: "value", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { _value: "valueChange" }, host: { properties: { "class.example-floating": "shouldLabelFloat", "id": "id" } }, providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], viewQueries: [{ propertyName: "areaInput", first: true, predicate: ["area"], descendants: true, isSignal: true }, { propertyName: "exchangeInput", first: true, predicate: ["exchange"], descendants: true, isSignal: true }, { propertyName: "subscriberInput", first: true, predicate: ["subscriber"], descendants: true, isSignal: true }], ngImport: i0, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: MyTelInput, decorators: [{
            type: Component,
            args: [{ selector: 'example-tel-input', providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }], host: {
                        '[class.example-floating]': 'shouldLabelFloat',
                        '[id]': 'id',
                    }, standalone: true, imports: [FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  role=\"group\"\n  class=\"example-tel-input-container\"\n  [formGroup]=\"parts\"\n  [attr.aria-labelledby]=\"_formField?.getLabelId()\"\n  (focusin)=\"onFocusIn()\"\n  (focusout)=\"onFocusOut($event)\"\n>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"area\"\n    size=\"3\"\n    maxLength=\"3\"\n    aria-label=\"Area code\"\n    (input)=\"_handleInput(parts.controls.area, exchange)\"\n    #area\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"exchange\"\n    maxLength=\"3\"\n    size=\"3\"\n    aria-label=\"Exchange code\"\n    (input)=\"_handleInput(parts.controls.exchange, subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.exchange, area)\"\n    #exchange\n  />\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input\n    class=\"example-tel-input-element\"\n    formControlName=\"subscriber\"\n    maxLength=\"4\"\n    size=\"4\"\n    aria-label=\"Subscriber number\"\n    (input)=\"_handleInput(parts.controls.subscriber)\"\n    (keyup.backspace)=\"autoFocusPrev(parts.controls.subscriber, exchange)\"\n    #subscriber\n  />\n</div>\n", styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n  color: currentcolor;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9leGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBQyxTQUFTLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUVWLGdCQUFnQixFQUNoQixRQUFRLEVBQ1IsTUFBTSxFQUNOLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFHTCxXQUFXLEVBQ1gsV0FBVyxFQUNYLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNULG1CQUFtQixFQUNuQixVQUFVLEdBQ1gsTUFBTSxnQkFB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LElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxtQkFDMUIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge0FzeW5jUGlwZSwgSnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBPbkRlc3Ryb3ksXG4gIGJvb2xlYW5BdHRyaWJ1dGUsXG4gIGNvbXB1dGVkLFxuICBlZmZlY3QsXG4gIGZvcndhcmRSZWYsXG4gIGluamVjdCxcbiAgaW5wdXQsXG4gIG1vZGVsLFxuICBzaWduYWwsXG4gIHZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtcbiAgQWJzdHJhY3RDb250cm9sLFxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcbiAgRm9ybUJ1aWxkZXIsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtR3JvdXAsXG4gIEZvcm1zTW9kdWxlLFxuICBOZ0NvbnRyb2wsXG4gIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE1BVF9GT1JNX0ZJRUxELFxuICBNYXRGb3JtRmllbGRDb250cm9sLFxuICBNYXRGb3JtRmllbGRNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGN1c3RvbSB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0IGNvbnRyb2wuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIGZvcndhcmRSZWYoKCkgPT4gTXlUZWxJbnB1dCksXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBBc3luY1BpcGUsXG4gICAgSnNvblBpcGUsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSB7XG4gIHJlYWRvbmx5IGZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB0ZWw6IG5ldyBGb3JtQ29udHJvbChudWxsKSxcbiAgfSk7XG59XG5cbi8qKiBEYXRhIHN0cnVjdHVyZSBmb3IgaG9sZGluZyB0ZWxlcGhvbmUgbnVtYmVyLiAqL1xuZXhwb3J0IGNsYXNzIE15VGVsIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFyZWE6IHN0cmluZyxcbiAgICBwdWJsaWMgZXhjaGFuZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgc3Vic2NyaWJlcjogc3RyaW5nLFxuICApIHt9XG59XG5cbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5jc3MnLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE15VGVsSW5wdXR9XSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhhbXBsZS1mbG9hdGluZ10nOiAnc2hvdWxkTGFiZWxGbG9hdCcsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICB9LFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG4gIHJlYWRvbmx5IGFyZWFJbnB1dCA9IHZpZXdDaGlsZC5yZXF1aXJlZDxIVE1MSW5wdXRFbGVtZW50PignYXJlYScpO1xuICByZWFkb25seSBleGNoYW5nZUlucHV0ID0gdmlld0NoaWxkLnJlcXVpcmVkPEhUTUxJbnB1dEVsZW1lbnQ+KCdleGNoYW5nZScpO1xuICByZWFkb25seSBzdWJzY3JpYmVySW5wdXQgPSB2aWV3Q2hpbGQucmVxdWlyZWQ8SFRNTElucHV0RWxlbWVudD4oJ3N1YnNjcmliZXInKTtcbiAgbmdDb250cm9sID0gaW5qZWN0KE5nQ29udHJvbCwge29wdGlvbmFsOiB0cnVlLCBzZWxmOiB0cnVlfSk7XG4gIHJlYWRvbmx5IHBhcnRzOiBGb3JtR3JvdXA8e1xuICAgIGFyZWE6IEZvcm1Db250cm9sPHN0cmluZyB8IG51bGw+O1xuICAgIGV4Y2hhbmdlOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcbiAgICBzdWJzY3JpYmVyOiBGb3JtQ29udHJvbDxzdHJpbmcgfCBudWxsPjtcbiAgfT47XG4gIHJlYWRvbmx5IHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHJlYWRvbmx5IHRvdWNoZWQgPSBzaWduYWwoZmFsc2UpO1xuICByZWFkb25seSBjb250cm9sVHlwZSA9ICdleGFtcGxlLXRlbC1pbnB1dCc7XG4gIHJlYWRvbmx5IGlkID0gYGV4YW1wbGUtdGVsLWlucHV0LSR7TXlUZWxJbnB1dC5uZXh0SWQrK31gO1xuICByZWFkb25seSBfdXNlckFyaWFEZXNjcmliZWRCeSA9IGlucHV0PHN0cmluZz4oJycsIHthbGlhczogJ2FyaWEtZGVzY3JpYmVkYnknfSk7XG4gIHJlYWRvbmx5IF9wbGFjZWhvbGRlciA9IGlucHV0PHN0cmluZz4oJycsIHthbGlhczogJ3BsYWNlaG9sZGVyJ30pO1xuICByZWFkb25seSBfcmVxdWlyZWQgPSBpbnB1dDxib29sZWFuLCB1bmtub3duPihmYWxzZSwge1xuICAgIGFsaWFzOiAncmVxdWlyZWQnLFxuICAgIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSxcbiAgfSk7XG4gIHJlYWRvbmx5IF9kaXNhYmxlZEJ5SW5wdXQgPSBpbnB1dDxib29sZWFuLCB1bmtub3duPihmYWxzZSwge1xuICAgIGFsaWFzOiAnZGlzYWJsZWQnLFxuICAgIHRyYW5zZm9ybTogYm9vbGVhbkF0dHJpYnV0ZSxcbiAgfSk7XG4gIHJlYWRvbmx5IF92YWx1ZSA9IG1vZGVsPE15VGVsIHwgbnVsbD4obnVsbCwge2FsaWFzOiAndmFsdWUnfSk7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBfZm9ybUZpZWxkID0gaW5qZWN0KE1BVF9GT1JNX0ZJRUxELCB7XG4gICAgb3B0aW9uYWw6IHRydWUsXG4gIH0pO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZvY3VzZWQgPSBzaWduYWwoZmFsc2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9kaXNhYmxlZEJ5Q3ZhID0gc2lnbmFsKGZhbHNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZGlzYWJsZWQgPSBjb21wdXRlZCgoKSA9PiB0aGlzLl9kaXNhYmxlZEJ5SW5wdXQoKSB8fCB0aGlzLl9kaXNhYmxlZEJ5Q3ZhKCkpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb2N1c01vbml0b3IgPSBpbmplY3QoRm9jdXNNb25pdG9yKTtcbiAgcHJpdmF0ZSByZWFkb25seSBfZWxlbWVudFJlZiA9IGluamVjdDxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj4oRWxlbWVudFJlZik7XG5cbiAgZ2V0IGZvY3VzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWQoKTtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSxcbiAgICB9ID0gdGhpcy5wYXJ0cztcblxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5O1xuICB9XG5cbiAgZ2V0IHVzZXJBcmlhRGVzY3JpYmVkQnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3VzZXJBcmlhRGVzY3JpYmVkQnkoKTtcbiAgfVxuXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcigpO1xuICB9XG5cbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZCgpO1xuICB9XG5cbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZCgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlKCk7XG4gIH1cblxuICBnZXQgZXJyb3JTdGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXJ0cy5pbnZhbGlkICYmIHRoaXMudG91Y2hlZCgpO1xuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG5cbiAgICB0aGlzLnBhcnRzID0gaW5qZWN0KEZvcm1CdWlsZGVyKS5ncm91cCh7XG4gICAgICBhcmVhOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIGV4Y2hhbmdlOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMyldXSxcbiAgICAgIHN1YnNjcmliZXI6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpLCBWYWxpZGF0b3JzLm1heExlbmd0aCg0KV1dLFxuICAgIH0pO1xuXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIFJlYWQgc2lnbmFscyB0byB0cmlnZ2VyIGVmZmVjdC5cbiAgICAgIHRoaXMuX3BsYWNlaG9sZGVyKCk7XG4gICAgICB0aGlzLl9yZXF1aXJlZCgpO1xuICAgICAgdGhpcy5fZGlzYWJsZWQoKTtcbiAgICAgIC8vIFByb3BhZ2F0ZSBzdGF0ZSBjaGFuZ2VzLlxuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgZWZmZWN0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9kaXNhYmxlZCgpKSB7XG4gICAgICAgIHRoaXMucGFydHMuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXJ0cy5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGVmZmVjdCgoKSA9PiB7XG4gICAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHRoaXMuX3ZhbHVlKCkgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpKTtcbiAgICB9KTtcblxuICAgIHRoaXMucGFydHMuc3RhdHVzQ2hhbmdlcy5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5wYXJ0cy52YWx1ZUNoYW5nZXMucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgIGNvbnN0IHRlbCA9IHRoaXMucGFydHMudmFsaWRcbiAgICAgICAgPyBuZXcgTXlUZWwoXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnZhbHVlLmFyZWEgfHwgJycsXG4gICAgICAgICAgICB0aGlzLnBhcnRzLnZhbHVlLmV4Y2hhbmdlIHx8ICcnLFxuICAgICAgICAgICAgdGhpcy5wYXJ0cy52YWx1ZS5zdWJzY3JpYmVyIHx8ICcnLFxuICAgICAgICAgIClcbiAgICAgICAgOiBudWxsO1xuICAgICAgdGhpcy5fdXBkYXRlVmFsdWUodGVsKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYpO1xuICB9XG5cbiAgb25Gb2N1c0luKCkge1xuICAgIGlmICghdGhpcy5fZm9jdXNlZCgpKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkLnNldCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbkZvY3VzT3V0KGV2ZW50OiBGb2N1c0V2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldCBhcyBFbGVtZW50KSkge1xuICAgICAgdGhpcy50b3VjaGVkLnNldCh0cnVlKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWQuc2V0KGZhbHNlKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgYXV0b0ZvY3VzTmV4dChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wsIG5leHRFbGVtZW50PzogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghY29udHJvbC5lcnJvcnMgJiYgbmV4dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYShuZXh0RWxlbWVudCwgJ3Byb2dyYW0nKTtcbiAgICB9XG4gIH1cblxuICBhdXRvRm9jdXNQcmV2KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgcHJldkVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoY29udHJvbC52YWx1ZS5sZW5ndGggPCAxKSB7XG4gICAgICB0aGlzLl9mb2N1c01vbml0b3IuZm9jdXNWaWEocHJldkVsZW1lbnQsICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGNvbnRyb2xFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmV4YW1wbGUtdGVsLWlucHV0LWNvbnRhaW5lcicsXG4gICAgKSE7XG4gICAgY29udHJvbEVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgaWRzLmpvaW4oJyAnKSk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKCkge1xuICAgIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLnN1YnNjcmliZXIudmFsaWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN1YnNjcmliZXJJbnB1dCgpLCAncHJvZ3JhbScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYXJ0cy5jb250cm9scy5leGNoYW5nZS52YWxpZCkge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3Vic2NyaWJlcklucHV0KCksICdwcm9ncmFtJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhcnRzLmNvbnRyb2xzLmFyZWEudmFsaWQpIHtcbiAgICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmV4Y2hhbmdlSW5wdXQoKSwgJ3Byb2dyYW0nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuYXJlYUlucHV0KCksICdwcm9ncmFtJyk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuX3VwZGF0ZVZhbHVlKHRlbCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX2Rpc2FibGVkQnlDdmEuc2V0KGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgX2hhbmRsZUlucHV0KGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCwgbmV4dEVsZW1lbnQ/OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5hdXRvRm9jdXNOZXh0KGNvbnRyb2wsIG5leHRFbGVtZW50KTtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpIHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5fdmFsdWUoKTtcbiAgICBpZiAoXG4gICAgICB0ZWwgPT09IGN1cnJlbnQgfHxcbiAgICAgICh0ZWw/LmFyZWEgPT09IGN1cnJlbnQ/LmFyZWEgJiZcbiAgICAgICAgdGVsPy5leGNoYW5nZSA9PT0gY3VycmVudD8uZXhjaGFuZ2UgJiZcbiAgICAgICAgdGVsPy5zdWJzY3JpYmVyID09PSBjdXJyZW50Py5zdWJzY3JpYmVyKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZS5zZXQodGVsKTtcbiAgfVxufVxuIiwiPGRpdiBbZm9ybUdyb3VwXT1cImZvcm1cIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+UGhvbmUgbnVtYmVyPC9tYXQtbGFiZWw+XG4gICAgPGV4YW1wbGUtdGVsLWlucHV0IGZvcm1Db250cm9sTmFtZT1cInRlbFwiIHJlcXVpcmVkPjwvZXhhbXBsZS10ZWwtaW5wdXQ+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5waG9uZTwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkluY2x1ZGUgYXJlYSBjb2RlPC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPHA+RW50ZXJlZCB2YWx1ZToge3tmb3JtLnZhbHVlQ2hhbmdlcyB8IGFzeW5jIHwganNvbn19PC9wPlxuPC9kaXY+XG4iLCI8ZGl2XG4gIHJvbGU9XCJncm91cFwiXG4gIGNsYXNzPVwiZXhhbXBsZS10ZWwtaW5wdXQtY29udGFpbmVyXCJcbiAgW2Zvcm1Hcm91cF09XCJwYXJ0c1wiXG4gIFthdHRyLmFyaWEtbGFiZWxsZWRieV09XCJfZm9ybUZpZWxkPy5nZXRMYWJlbElkKClcIlxuICAoZm9jdXNpbik9XCJvbkZvY3VzSW4oKVwiXG4gIChmb2N1c291dCk9XCJvbkZvY3VzT3V0KCRldmVudClcIlxuPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgIGZvcm1Db250cm9sTmFtZT1cImFyZWFcIlxuICAgIHNpemU9XCIzXCJcbiAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICBhcmlhLWxhYmVsPVwiQXJlYSBjb2RlXCJcbiAgICAoaW5wdXQpPVwiX2hhbmRsZUlucHV0KHBhcnRzLmNvbnRyb2xzLmFyZWEsIGV4Y2hhbmdlKVwiXG4gICAgI2FyZWFcbiAgLz5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgIGZvcm1Db250cm9sTmFtZT1cImV4Y2hhbmdlXCJcbiAgICBtYXhMZW5ndGg9XCIzXCJcbiAgICBzaXplPVwiM1wiXG4gICAgYXJpYS1sYWJlbD1cIkV4Y2hhbmdlIGNvZGVcIlxuICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuZXhjaGFuZ2UsIHN1YnNjcmliZXIpXCJcbiAgICAoa2V5dXAuYmFja3NwYWNlKT1cImF1dG9Gb2N1c1ByZXYocGFydHMuY29udHJvbHMuZXhjaGFuZ2UsIGFyZWEpXCJcbiAgICAjZXhjaGFuZ2VcbiAgLz5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXRlbC1pbnB1dC1zcGFjZXJcIj4mbmRhc2g7PC9zcGFuPlxuICA8aW5wdXRcbiAgICBjbGFzcz1cImV4YW1wbGUtdGVsLWlucHV0LWVsZW1lbnRcIlxuICAgIGZvcm1Db250cm9sTmFtZT1cInN1YnNjcmliZXJcIlxuICAgIG1heExlbmd0aD1cIjRcIlxuICAgIHNpemU9XCI0XCJcbiAgICBhcmlhLWxhYmVsPVwiU3Vic2NyaWJlciBudW1iZXJcIlxuICAgIChpbnB1dCk9XCJfaGFuZGxlSW5wdXQocGFydHMuY29udHJvbHMuc3Vic2NyaWJlcilcIlxuICAgIChrZXl1cC5iYWNrc3BhY2UpPVwiYXV0b0ZvY3VzUHJldihwYXJ0cy5jb250cm9scy5zdWJzY3JpYmVyLCBleGNoYW5nZSlcIlxuICAgICNzdWJzY3JpYmVyXG4gIC8+XG48L2Rpdj5cbiJdfQ==