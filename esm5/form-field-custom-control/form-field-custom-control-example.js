import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, Optional, Self } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDL0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFFBQVEsRUFBRSxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEYsT0FBTyxFQUFDLFdBQVcsRUFBbUMsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdkYsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUU3QixvRUFBb0U7QUFNcEU7SUFBQTtJQUE0QyxDQUFDO0lBQWhDLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUNBQW1DO1lBQzdDLG9OQUFxRDs7U0FFdEQsQ0FBQztPQUNXLDZCQUE2QixDQUFHO0lBQUQsb0NBQUM7Q0FBQSxBQUE3QyxJQUE2QztTQUFoQyw2QkFBNkI7QUFFMUMsbURBQW1EO0FBQ25EO0lBQ0UsZUFBbUIsSUFBWSxFQUFTLFFBQWdCLEVBQVMsVUFBa0I7UUFBaEUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxlQUFVLEdBQVYsVUFBVSxDQUFRO0lBQUcsQ0FBQztJQUN6RixZQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7O0FBRUQsK0RBQStEO0FBWS9EO0lBNERF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QUFFLENBQUEsRUFBRSxtQkFBQSxJQUFJLEVBQUUsQ0FBQTtpREFIZixXQUFXO1lBQ0gsWUFBWTtZQUNULFVBQVU7WUFDYSxTQUFTO09BaEV0QyxVQUFVLENBdUh0QjtJQUFELGlCQUFDO0NBQUEsQUF2SEQsSUF1SEM7U0F2SFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Rm9jdXNNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcbmltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgU2VsZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOZ0NvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge1N1YmplY3R9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBjdXN0b20gdGVsZXBob25lIG51bWJlciBpbnB1dCBjb250cm9sLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlIHt9XG5cbi8qKiBEYXRhIHN0cnVjdHVyZSBmb3IgaG9sZGluZyB0ZWxlcGhvbmUgbnVtYmVyLiAqL1xuZXhwb3J0IGNsYXNzIE15VGVsIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFyZWE6IHN0cmluZywgcHVibGljIGV4Y2hhbmdlOiBzdHJpbmcsIHB1YmxpYyBzdWJzY3JpYmVyOiBzdHJpbmcpIHt9XG59XG5cbi8qKiBDdXN0b20gYE1hdEZvcm1GaWVsZENvbnRyb2xgIGZvciB0ZWxlcGhvbmUgbnVtYmVyIGlucHV0LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS10ZWwtaW5wdXQnLFxuICB0ZW1wbGF0ZVVybDogJ2V4YW1wbGUtdGVsLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydleGFtcGxlLXRlbC1pbnB1dC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IE15VGVsSW5wdXR9XSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZXhhbXBsZS1mbG9hdGluZ10nOiAnc2hvdWxkTGFiZWxGbG9hdCcsXG4gICAgJ1tpZF0nOiAnaWQnLFxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdkZXNjcmliZWRCeScsXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTXlUZWxJbnB1dCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBNYXRGb3JtRmllbGRDb250cm9sPE15VGVsPiwgT25EZXN0cm95IHtcbiAgc3RhdGljIG5leHRJZCA9IDA7XG5cbiAgcGFydHM6IEZvcm1Hcm91cDtcbiAgc3RhdGVDaGFuZ2VzID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgZm9jdXNlZCA9IGZhbHNlO1xuICBlcnJvclN0YXRlID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2V4YW1wbGUtdGVsLWlucHV0JztcbiAgaWQgPSBgZXhhbXBsZS10ZWwtaW5wdXQtJHtNeVRlbElucHV0Lm5leHRJZCsrfWA7XG4gIGRlc2NyaWJlZEJ5ID0gJyc7XG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIGdldCBlbXB0eSgpIHtcbiAgICBjb25zdCB7dmFsdWU6IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn19ID0gdGhpcy5wYXJ0cztcblxuICAgIHJldHVybiAhYXJlYSAmJiAhZXhjaGFuZ2UgJiYgIXN1YnNjcmliZXI7XG4gIH1cblxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHsgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eTsgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7IH1cbiAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX3JlcXVpcmVkOyB9XG4gIHNldCByZXF1aXJlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cbiAgcHJpdmF0ZSBfcmVxdWlyZWQgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XG4gICAgdGhpcy5fZGlzYWJsZWQgPyB0aGlzLnBhcnRzLmRpc2FibGUoKSA6IHRoaXMucGFydHMuZW5hYmxlKCk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgZ2V0IHZhbHVlKCk6IE15VGVsIHwgbnVsbCB7XG4gICAgY29uc3Qge3ZhbHVlOiB7YXJlYSwgZXhjaGFuZ2UsIHN1YnNjcmliZXJ9fSA9IHRoaXMucGFydHM7XG4gICAgaWYgKGFyZWEubGVuZ3RoID09PSAzICYmIGV4Y2hhbmdlLmxlbmd0aCA9PT0gMyAmJiBzdWJzY3JpYmVyLmxlbmd0aCA9PT0gNCkge1xuICAgICAgcmV0dXJuIG5ldyBNeVRlbChhcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcik7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHNldCB2YWx1ZSh0ZWw6IE15VGVsIHwgbnVsbCkge1xuICAgIGNvbnN0IHthcmVhLCBleGNoYW5nZSwgc3Vic2NyaWJlcn0gPSB0ZWwgfHwgbmV3IE15VGVsKCcnLCAnJywgJycpO1xuICAgIHRoaXMucGFydHMuc2V0VmFsdWUoe2FyZWEsIGV4Y2hhbmdlLCBzdWJzY3JpYmVyfSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgZm06IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCkge1xuXG4gICAgdGhpcy5wYXJ0cyA9IGZiLmdyb3VwKHtcbiAgICAgIGFyZWE6ICcnLFxuICAgICAgZXhjaGFuZ2U6ICcnLFxuICAgICAgc3Vic2NyaWJlcjogJycsXG4gICAgfSk7XG5cbiAgICBmbS5tb25pdG9yKGVsUmVmLCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIGlmICh0aGlzLmZvY3VzZWQgJiYgIW9yaWdpbikge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c2VkID0gISFvcmlnaW47XG4gICAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuZWxSZWYpO1xuICB9XG5cbiAgc2V0RGVzY3JpYmVkQnlJZHMoaWRzOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuZGVzY3JpYmVkQnkgPSBpZHMuam9pbignICcpO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPSAnaW5wdXQnKSB7XG4gICAgICB0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKSEuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHRlbDogTXlUZWwgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRlbDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBfaGFuZGxlSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhcnRzLnZhbHVlKTtcbiAgfVxufVxuIl19