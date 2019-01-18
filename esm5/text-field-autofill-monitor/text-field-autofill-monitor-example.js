import * as tslib_1 from "tslib";
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
/** @title Monitoring autofill state with AutofillMonitor */
var TextFieldAutofillMonitorExample = /** @class */ (function () {
    function TextFieldAutofillMonitorExample(autofill) {
        this.autofill = autofill;
    }
    TextFieldAutofillMonitorExample.prototype.ngOnInit = function () {
        var _this = this;
        this.autofill.monitor(this.firstName)
            .subscribe(function (e) { return _this.firstNameAutofilled = e.isAutofilled; });
        this.autofill.monitor(this.lastName)
            .subscribe(function (e) { return _this.lastNameAutofilled = e.isAutofilled; });
    };
    TextFieldAutofillMonitorExample.prototype.ngOnDestroy = function () {
        this.autofill.stopMonitoring(this.firstName);
        this.autofill.stopMonitoring(this.lastName);
    };
    tslib_1.__decorate([
        ViewChild('first', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TextFieldAutofillMonitorExample.prototype, "firstName", void 0);
    tslib_1.__decorate([
        ViewChild('last', { read: ElementRef }),
        tslib_1.__metadata("design:type", ElementRef)
    ], TextFieldAutofillMonitorExample.prototype, "lastName", void 0);
    TextFieldAutofillMonitorExample = tslib_1.__decorate([
        Component({
            selector: 'text-field-autofill-monitor-example',
            template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [AutofillMonitor])
    ], TextFieldAutofillMonitorExample);
    return TextFieldAutofillMonitorExample;
}());
export { TextFieldAutofillMonitorExample };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQXFCLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVsRiw0REFBNEQ7QUFNNUQ7SUFNRSx5Q0FBb0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFBRyxDQUFDO0lBRWpELGtEQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDaEMsU0FBUyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQXpDLENBQXlDLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQy9CLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUF4QyxDQUF3QyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHFEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFqQnVDO1FBQXZDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLENBQUM7MENBQVksVUFBVTtzRUFBYztJQUNwQztRQUF0QyxTQUFTLENBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDOzBDQUFXLFVBQVU7cUVBQWM7SUFGOUQsK0JBQStCO1FBTDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxxQ0FBcUM7WUFDL0MseWFBQXlEOztTQUUxRCxDQUFDO2lEQU84QixlQUFlO09BTmxDLCtCQUErQixDQW1CM0M7SUFBRCxzQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXV0b2ZpbGxNb25pdG9yfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSB3aXRoIEF1dG9maWxsTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlIGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xuICBAVmlld0NoaWxkKCdmaXJzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgZmlyc3ROYW1lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbGFzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgbGFzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBmaXJzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuICBsYXN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRvZmlsbDogQXV0b2ZpbGxNb25pdG9yKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXV0b2ZpbGwubW9uaXRvcih0aGlzLmZpcnN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZmlyc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgICB0aGlzLmF1dG9maWxsLm1vbml0b3IodGhpcy5sYXN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMubGFzdE5hbWVBdXRvZmlsbGVkID0gZS5pc0F1dG9maWxsZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmZpcnN0TmFtZSk7XG4gICAgdGhpcy5hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmxhc3ROYW1lKTtcbiAgfVxufVxuIl19