import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
/** @title Monitoring autofill state with AutofillMonitor */
var TextFieldAutofillMonitorExample = /** @class */ (function () {
    function TextFieldAutofillMonitorExample(_autofill) {
        this._autofill = _autofill;
    }
    TextFieldAutofillMonitorExample.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._autofill.monitor(this.firstName)
            .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
        this._autofill.monitor(this.lastName)
            .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
    };
    TextFieldAutofillMonitorExample.prototype.ngOnDestroy = function () {
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    };
    TextFieldAutofillMonitorExample.decorators = [
        { type: Component, args: [{
                    selector: 'text-field-autofill-monitor-example',
                    template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    TextFieldAutofillMonitorExample.ctorParameters = function () { return [
        { type: AutofillMonitor }
    ]; };
    TextFieldAutofillMonitorExample.propDecorators = {
        firstName: [{ type: ViewChild, args: ['first', { read: ElementRef, static: false },] }],
        lastName: [{ type: ViewChild, args: ['last', { read: ElementRef, static: false },] }]
    };
    return TextFieldAutofillMonitorExample;
}());
export { TextFieldAutofillMonitorExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpGLDREQUE0RDtBQUM1RDtJQVdFLHlDQUFvQixTQUEwQjtRQUExQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUFHLENBQUM7SUFFbEQseURBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNqQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQXhDLENBQXdDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQscURBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUNBQXFDO29CQUMvQyx5YUFBeUQ7O2lCQUUxRDs7OztnQkFSTyxlQUFlOzs7NEJBVXBCLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7MkJBQ3RELFNBQVMsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7O0lBaUJ4RCxzQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBbkJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0b2ZpbGxNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0FmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgd2l0aCBBdXRvZmlsbE1vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2ZpcnN0JywgeyByZWFkOiBFbGVtZW50UmVmLCBzdGF0aWM6IGZhbHNlIH0pIGZpcnN0TmFtZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2xhc3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgbGFzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBmaXJzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuICBsYXN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0b2ZpbGw6IEF1dG9maWxsTW9uaXRvcikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGwubW9uaXRvcih0aGlzLmZpcnN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZmlyc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5tb25pdG9yKHRoaXMubGFzdE5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmxhc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2F1dG9maWxsLnN0b3BNb25pdG9yaW5nKHRoaXMuZmlyc3ROYW1lKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmxhc3ROYW1lKTtcbiAgfVxufVxuIl19