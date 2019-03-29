/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
/**
 * \@title Form field with custom telephone number input control.
 */
export class FormFieldCustomControlExample {
}
FormFieldCustomControlExample.decorators = [
    { type: Component, args: [{
                selector: 'form-field-custom-control-example',
                template: "<mat-form-field>\n  <example-tel-input placeholder=\"Phone number\" required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n",
                styles: ["/** No CSS for this example */\n"]
            }] }
];
/**
 * Data structure for holding telephone number.
 */
export class MyTel {
    /**
     * @param {?} area
     * @param {?} exchange
     * @param {?} subscriber
     */
    constructor(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
}
if (false) {
    /** @type {?} */
    MyTel.prototype.area;
    /** @type {?} */
    MyTel.prototype.exchange;
    /** @type {?} */
    MyTel.prototype.subscriber;
}
/**
 * Custom `MatFormFieldControl` for telephone number input.
 */
export class MyTelInput {
    /**
     * @param {?} fb
     * @param {?} fm
     * @param {?} elRef
     * @param {?} ngControl
     */
    constructor(fb, fm, elRef, ngControl) {
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = `example-tel-input-${MyTelInput.nextId++}`;
        this.describedBy = '';
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        fm.monitor(elRef, true).subscribe((/**
         * @param {?} origin
         * @return {?}
         */
        origin => {
            if (this.focused && !origin) {
                this.onTouched();
            }
            this.focused = !!origin;
            this.stateChanges.next();
        }));
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    /**
     * @return {?}
     */
    get empty() {
        const { value: { area, exchange, subscriber } } = this.parts;
        return !area && !exchange && !subscriber;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() { return this.focused || !this.empty; }
    /**
     * @return {?}
     */
    get placeholder() { return this._placeholder; }
    /**
     * @param {?} value
     * @return {?}
     */
    set placeholder(value) {
        this._placeholder = value;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get required() { return this._required; }
    /**
     * @param {?} value
     * @return {?}
     */
    set required(value) {
        this._required = coerceBooleanProperty(value);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        this._disabled ? this.parts.disable() : this.parts.enable();
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get value() {
        const { value: { area, exchange, subscriber } } = this.parts;
        if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
            return new MyTel(area, exchange, subscriber);
        }
        return null;
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    set value(tel) {
        const { area, exchange, subscriber } = tel || new MyTel('', '', '');
        this.parts.setValue({ area, exchange, subscriber });
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef);
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if (((/** @type {?} */ (event.target))).tagName.toLowerCase() != 'input') {
            (/** @type {?} */ (this.elRef.nativeElement.querySelector('input'))).focus();
        }
    }
    /**
     * @param {?} tel
     * @return {?}
     */
    writeValue(tel) {
        this.value = tel;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    _handleInput() {
        this.onChange(this.parts.value);
    }
}
MyTelInput.nextId = 0;
MyTelInput.decorators = [
    { type: Component, args: [{
                selector: 'example-tel-input',
                template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\">\n  <input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\" aria-label=\"Area code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\" aria-label=\"Exchange code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\" aria-label=\"Subscriber number\" (input)=\"_handleInput()\">\n</div>\n",
                providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput }],
                host: {
                    '[class.example-floating]': 'shouldLabelFloat',
                    '[id]': 'id',
                    '[attr.aria-describedby]': 'describedBy',
                },
                styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
            }] }
];
/** @nocollapse */
MyTelInput.ctorParameters = () => [
    { type: FormBuilder },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] }
];
MyTelInput.propDecorators = {
    placeholder: [{ type: Input }],
    required: [{ type: Input }],
    disabled: [{ type: Input }],
    value: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MyTelInput.nextId;
    /** @type {?} */
    MyTelInput.prototype.parts;
    /** @type {?} */
    MyTelInput.prototype.stateChanges;
    /** @type {?} */
    MyTelInput.prototype.focused;
    /** @type {?} */
    MyTelInput.prototype.errorState;
    /** @type {?} */
    MyTelInput.prototype.controlType;
    /** @type {?} */
    MyTelInput.prototype.id;
    /** @type {?} */
    MyTelInput.prototype.describedBy;
    /** @type {?} */
    MyTelInput.prototype.onChange;
    /** @type {?} */
    MyTelInput.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._placeholder;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._required;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype._disabled;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype.fm;
    /**
     * @type {?}
     * @private
     */
    MyTelInput.prototype.elRef;
    /** @type {?} */
    MyTelInput.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFdBQVcsRUFBbUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQzs7OztBQVE3QixNQUFNLE9BQU8sNkJBQTZCOzs7WUFMekMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLG9OQUFxRDs7YUFFdEQ7Ozs7O0FBSUQsTUFBTSxPQUFPLEtBQUs7Ozs7OztJQUNoQixZQUFtQixJQUFZLEVBQVMsUUFBZ0IsRUFBUyxVQUFrQjtRQUFoRSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQVE7SUFBRyxDQUFDO0NBQ3hGOzs7SUFEYSxxQkFBbUI7O0lBQUUseUJBQXVCOztJQUFFLDJCQUF5Qjs7Ozs7QUFlckYsTUFBTSxPQUFPLFVBQVU7Ozs7Ozs7SUE0RHJCLFlBQ0UsRUFBZSxFQUNQLEVBQWdCLEVBQ2hCLEtBQThCLEVBQ1gsU0FBb0I7UUFG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SUE3Q04sa0JBQWtCOztJQUVsQiwyQkFBaUI7O0lBQ2pCLGtDQUFtQzs7SUFDbkMsNkJBQWdCOztJQUNoQixnQ0FBbUI7O0lBQ25CLGlDQUFrQzs7SUFDbEMsd0JBQWdEOztJQUNoRCxpQ0FBaUI7O0lBQ2pCLDhCQUEwQjs7SUFDMUIsK0JBQXFCOzs7OztJQWdCckIsa0NBQTZCOzs7OztJQVE3QiwrQkFBMEI7Ozs7O0lBUzFCLCtCQUEwQjs7Ozs7SUFrQnhCLHdCQUF3Qjs7Ozs7SUFDeEIsMkJBQXNDOztJQUN0QywrQkFBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNlbGZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZENvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB3aXRoIGN1c3RvbSB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0IGNvbnRyb2wuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUge31cblxuLyoqIERhdGEgc3RydWN0dXJlIGZvciBob2xkaW5nIHRlbGVwaG9uZSBudW1iZXIuICovXG5leHBvcnQgY2xhc3MgTXlUZWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXJlYTogc3RyaW5nLCBwdWJsaWMgZXhjaGFuZ2U6IHN0cmluZywgcHVibGljIHN1YnNjcmliZXI6IHN0cmluZykge31cbn1cblxuLyoqIEN1c3RvbSBgTWF0Rm9ybUZpZWxkQ29udHJvbGAgZm9yIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleGFtcGxlLXRlbC1pbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBNYXRGb3JtRmllbGRDb250cm9sLCB1c2VFeGlzdGluZzogTXlUZWxJbnB1dH1dLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5leGFtcGxlLWZsb2F0aW5nXSc6ICdzaG91bGRMYWJlbEZsb2F0JyxcbiAgICAnW2lkXSc6ICdpZCcsXG4gICAgJ1thdHRyLmFyaWEtZGVzY3JpYmVkYnldJzogJ2Rlc2NyaWJlZEJ5JyxcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBNeVRlbElucHV0IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE1hdEZvcm1GaWVsZENvbnRyb2w8TXlUZWw+LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcblxuICBwYXJ0czogRm9ybUdyb3VwO1xuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGVycm9yU3RhdGUgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZXhhbXBsZS10ZWwtaW5wdXQnO1xuICBpZCA9IGBleGFtcGxlLXRlbC1pbnB1dC0ke015VGVsSW5wdXQubmV4dElkKyt9YDtcbiAgZGVzY3JpYmVkQnkgPSAnJztcbiAgb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgZ2V0IGVtcHR5KCkge1xuICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuXG4gICAgcmV0dXJuICFhcmVhICYmICFleGNoYW5nZSAmJiAhc3Vic2NyaWJlcjtcbiAgfVxuXG4gIGdldCBzaG91bGRMYWJlbEZsb2F0KCkgeyByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5OyB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHBsYWNlaG9sZGVyKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjsgfVxuICBzZXQgcGxhY2Vob2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7IH1cbiAgc2V0IHJlcXVpcmVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2Rpc2FibGVkOyB9XG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLl9kaXNhYmxlZCA/IHRoaXMucGFydHMuZGlzYWJsZSgpIDogdGhpcy5wYXJ0cy5lbmFibGUoKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogTXlUZWwgfCBudWxsIHtcbiAgICBjb25zdCB7dmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn19ID0gdGhpcy5wYXJ0cztcbiAgICBpZiAoYXJlYS5sZW5ndGggPT09IDMgJiYgZXhjaGFuZ2UubGVuZ3RoID09PSAzICYmIHN1YnNjcmliZXIubGVuZ3RoID09PSA0KSB7XG4gICAgICByZXR1cm4gbmV3IE15VGVsKGFyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgc2V0IHZhbHVlKHRlbDogTXlUZWwgfCBudWxsKSB7XG4gICAgY29uc3Qge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSA9IHRlbCB8fCBuZXcgTXlUZWwoJycsICcnLCAnJyk7XG4gICAgdGhpcy5wYXJ0cy5zZXRWYWx1ZSh7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9KTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIEBPcHRpb25hbCgpIEBTZWxmKCkgcHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7XG5cbiAgICB0aGlzLnBhcnRzID0gZmIuZ3JvdXAoe1xuICAgICAgYXJlYTogJycsXG4gICAgICBleGNoYW5nZTogJycsXG4gICAgICBzdWJzY3JpYmVyOiAnJyxcbiAgICB9KTtcblxuICAgIGZtLm1vbml0b3IoZWxSZWYsIHRydWUpLnN1YnNjcmliZShvcmlnaW4gPT4ge1xuICAgICAgaWYgKHRoaXMuZm9jdXNlZCAmJiAhb3JpZ2luKSB7XG4gICAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5jb21wbGV0ZSgpO1xuICAgIHRoaXMuZm0uc3RvcE1vbml0b3JpbmcodGhpcy5lbFJlZik7XG4gIH1cblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9ICdpbnB1dCcpIHtcbiAgICAgIHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpIS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHdyaXRlVmFsdWUodGVsOiBNeVRlbCB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdGVsO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIF9oYW5kbGVJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFydHMudmFsdWUpO1xuICB9XG59XG4iXX0=