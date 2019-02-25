import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';
/** @title Form field with custom telephone number input control. */
var FormFieldCustomControlExample = /** @class */ (function () {
    function FormFieldCustomControlExample() {
    }
    FormFieldCustomControlExample = tslib_1.__decorate([
        Component({
            selector: 'form-field-custom-control-example',
            template: "<mat-form-field>\n  <example-tel-input placeholder=\"Phone number\" required></example-tel-input>\n  <mat-icon matSuffix>phone</mat-icon>\n  <mat-hint>Include area code</mat-hint>\n</mat-form-field>\n",
            styles: ["/** No CSS for this example */\n"]
        })
    ], FormFieldCustomControlExample);
    return FormFieldCustomControlExample;
}());
export { FormFieldCustomControlExample };
/** Data structure for holding telephone number. */
var MyTel = /** @class */ (function () {
    function MyTel(area, exchange, subscriber) {
        this.area = area;
        this.exchange = exchange;
        this.subscriber = subscriber;
    }
    return MyTel;
}());
export { MyTel };
/** Custom `MatFormFieldControl` for telephone number input. */
var MyTelInput = /** @class */ (function () {
    function MyTelInput(fb, fm, elRef, ngControl) {
        var _this = this;
        this.fm = fm;
        this.elRef = elRef;
        this.ngControl = ngControl;
        this.stateChanges = new Subject();
        this.focused = false;
        this.errorState = false;
        this.controlType = 'example-tel-input';
        this.id = "example-tel-input-" + MyTelInput_1.nextId++;
        this.describedBy = '';
        this.onChange = function (_) { };
        this.onTouched = function () { };
        this._required = false;
        this._disabled = false;
        this.parts = fb.group({
            area: '',
            exchange: '',
            subscriber: '',
        });
        fm.monitor(elRef, true).subscribe(function (origin) {
            if (_this.focused && !origin) {
                _this.onTouched();
            }
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
    }
    MyTelInput_1 = MyTelInput;
    Object.defineProperty(MyTelInput.prototype, "empty", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            return !area && !exchange && !subscriber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "shouldLabelFloat", {
        get: function () { return this.focused || !this.empty; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "placeholder", {
        get: function () { return this._placeholder; },
        set: function (value) {
            this._placeholder = value;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) {
            this._required = coerceBooleanProperty(value);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
            this._disabled ? this.parts.disable() : this.parts.enable();
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyTelInput.prototype, "value", {
        get: function () {
            var _a = this.parts.value, area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            if (area.length === 3 && exchange.length === 3 && subscriber.length === 4) {
                return new MyTel(area, exchange, subscriber);
            }
            return null;
        },
        set: function (tel) {
            var _a = tel || new MyTel('', '', ''), area = _a.area, exchange = _a.exchange, subscriber = _a.subscriber;
            this.parts.setValue({ area: area, exchange: exchange, subscriber: subscriber });
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    MyTelInput.prototype.ngOnDestroy = function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elRef);
    };
    MyTelInput.prototype.setDescribedByIds = function (ids) {
        this.describedBy = ids.join(' ');
    };
    MyTelInput.prototype.onContainerClick = function (event) {
        if (event.target.tagName.toLowerCase() != 'input') {
            this.elRef.nativeElement.querySelector('input').focus();
        }
    };
    MyTelInput.prototype.writeValue = function (tel) {
        this.value = tel;
    };
    MyTelInput.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MyTelInput.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    MyTelInput.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MyTelInput.prototype._handleInput = function () {
        this.onChange(this.parts.value);
    };
    var MyTelInput_1;
    MyTelInput.nextId = 0;
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String),
        tslib_1.__metadata("design:paramtypes", [String])
    ], MyTelInput.prototype, "placeholder", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], MyTelInput.prototype, "required", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], MyTelInput.prototype, "disabled", null);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object),
        tslib_1.__metadata("design:paramtypes", [Object])
    ], MyTelInput.prototype, "value", null);
    MyTelInput = MyTelInput_1 = tslib_1.__decorate([
        Component({
            selector: 'example-tel-input',
            template: "<div [formGroup]=\"parts\" class=\"example-tel-input-container\">\n  <input class=\"example-tel-input-element\" formControlName=\"area\" size=\"3\" aria-label=\"Area code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"exchange\" size=\"3\" aria-label=\"Exchange code\" (input)=\"_handleInput()\">\n  <span class=\"example-tel-input-spacer\">&ndash;</span>\n  <input class=\"example-tel-input-element\" formControlName=\"subscriber\" size=\"4\" aria-label=\"Subscriber number\" (input)=\"_handleInput()\">\n</div>\n",
            providers: [{ provide: MatFormFieldControl, useExisting: MyTelInput_1 }],
            host: {
                '[class.example-floating]': 'shouldLabelFloat',
                '[id]': 'id',
                '[attr.aria-describedby]': 'describedBy',
            },
            styles: [".example-tel-input-container {\n  display: flex;\n}\n\n.example-tel-input-element {\n  border: none;\n  background: none;\n  padding: 0;\n  outline: none;\n  font: inherit;\n  text-align: center;\n}\n\n.example-tel-input-spacer {\n  opacity: 0;\n  transition: opacity 200ms;\n}\n\n:host.example-floating .example-tel-input-spacer {\n  opacity: 1;\n}\n"]
        }),
        tslib_1.__param(3, Optional()), tslib_1.__param(3, Self()),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            FocusMonitor,
            ElementRef,
            NgControl])
    ], MyTelInput);
    return MyTelInput;
}());
export { MyTelInput };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFdBQVcsRUFBbUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDdEQsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3QixvRUFBb0U7QUFNcEU7SUFBQTtJQUE0QyxDQUFDO0lBQWhDLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLG9OQUFxRDs7U0FFdEQsQ0FBQztPQUNXLDZCQUE2QixDQUFHO0lBQUQsb0NBQUM7Q0FBQSxBQUE3QyxJQUE2QztTQUFoQyw2QkFBNkI7QUFFMUMsbURBQW1EO0FBQ25EO0lBQ0UsZUFBbUIsSUFBWSxFQUFTLFFBQWdCLEVBQVMsVUFBa0I7UUFBaEUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUcsQ0FBQztJQUN6RixZQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQsK0RBQStEO0FBWS9EO0lBNERF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QUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFIZixXQUFXO1lBQ0gsWUFBWTtZQUNULFVBQVU7WUFDYSxTQUFTO09BaEV0QyxVQUFVLENBdUh0QjtJQUFELGlCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0F2SFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHtTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggY3VzdG9tIHRlbGVwaG9uZSBudW1iZXIgaW5wdXQgY29udHJvbC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSB7fVxuXG4vKiogRGF0YSBzdHJ1Y3R1cmUgZm9yIGhvbGRpbmcgdGVsZXBob25lIG51bWJlci4gKi9cbmV4cG9ydCBjbGFzcyBNeVRlbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBhcmVhOiBzdHJpbmcsIHB1YmxpYyBleGNoYW5nZTogc3RyaW5nLCBwdWJsaWMgc3Vic2NyaWJlcjogc3RyaW5nKSB7fVxufVxuXG4vKiogQ3VzdG9tIGBNYXRGb3JtRmllbGRDb250cm9sYCBmb3IgdGVsZXBob25lIG51bWJlciBpbnB1dC4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4YW1wbGUtdGVsLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICdleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZXhhbXBsZS10ZWwtaW5wdXQtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBNeVRlbElucHV0fV0sXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmV4YW1wbGUtZmxvYXRpbmddJzogJ3Nob3VsZExhYmVsRmxvYXQnLFxuICAgICdbaWRdJzogJ2lkJyxcbiAgICAnW2F0dHIuYXJpYS1kZXNjcmliZWRieV0nOiAnZGVzY3JpYmVkQnknLFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE15VGVsSW5wdXQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTWF0Rm9ybUZpZWxkQ29udHJvbDxNeVRlbD4sIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIHBhcnRzOiBGb3JtR3JvdXA7XG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgZXJyb3JTdGF0ZSA9IGZhbHNlO1xuICBjb250cm9sVHlwZSA9ICdleGFtcGxlLXRlbC1pbnB1dCc7XG4gIGlkID0gYGV4YW1wbGUtdGVsLWlucHV0LSR7TXlUZWxJbnB1dC5uZXh0SWQrK31gO1xuICBkZXNjcmliZWRCeSA9ICcnO1xuICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHt9O1xuICBvblRvdWNoZWQgPSAoKSA9PiB7fTtcblxuICBnZXQgZW1wdHkoKSB7XG4gICAgY29uc3Qge3ZhbHVlOiB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9fSA9IHRoaXMucGFydHM7XG5cbiAgICByZXR1cm4gIWFyZWEgJiYgIWV4Y2hhbmdlICYmICFzdWJzY3JpYmVyO1xuICB9XG5cbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7IHJldHVybiB0aGlzLmZvY3VzZWQgfHwgIXRoaXMuZW1wdHk7IH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKTogc3RyaW5nIHsgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyOyB9XG4gIHNldCBwbGFjZWhvbGRlcih2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBnZXQgcmVxdWlyZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9yZXF1aXJlZDsgfVxuICBzZXQgcmVxdWlyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7IH1cbiAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xuICAgIHRoaXMuX2Rpc2FibGVkID8gdGhpcy5wYXJ0cy5kaXNhYmxlKCkgOiB0aGlzLnBhcnRzLmVuYWJsZSgpO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBNeVRlbCB8IG51bGwge1xuICAgIGNvbnN0IHt2YWx1ZToge2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfX0gPSB0aGlzLnBhcnRzO1xuICAgIGlmIChhcmVhLmxlbmd0aCA9PT0gMyAmJiBleGNoYW5nZS5sZW5ndGggPT09IDMgJiYgc3Vic2NyaWJlci5sZW5ndGggPT09IDQpIHtcbiAgICAgIHJldHVybiBuZXcgTXlUZWwoYXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXIpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBzZXQgdmFsdWUodGVsOiBNeVRlbCB8IG51bGwpIHtcbiAgICBjb25zdCB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9ID0gdGVsIHx8IG5ldyBNeVRlbCgnJywgJycsICcnKTtcbiAgICB0aGlzLnBhcnRzLnNldFZhbHVlKHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0pO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHtcblxuICAgIHRoaXMucGFydHMgPSBmYi5ncm91cCh7XG4gICAgICBhcmVhOiAnJyxcbiAgICAgIGV4Y2hhbmdlOiAnJyxcbiAgICAgIHN1YnNjcmliZXI6ICcnLFxuICAgIH0pO1xuXG4gICAgZm0ubW9uaXRvcihlbFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICBpZiAodGhpcy5mb2N1c2VkICYmICFvcmlnaW4pIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmdDb250cm9sICE9IG51bGwpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3IgPSB0aGlzO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLmVsUmVmKTtcbiAgfVxuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIG9uQ29udGFpbmVyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgIT0gJ2lucHV0Jykge1xuICAgICAgdGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykhLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0ZWw7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgX2hhbmRsZUlucHV0KCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UodGhpcy5wYXJ0cy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==