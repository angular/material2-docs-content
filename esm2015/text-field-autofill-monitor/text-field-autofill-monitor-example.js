/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
/**
 * \@title Monitoring autofill state with AutofillMonitor
 */
export class TextFieldAutofillMonitorExample {
    /**
     * @param {?} autofill
     */
    constructor(autofill) {
        this.autofill = autofill;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.autofill.monitor(this.firstName)
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => this.firstNameAutofilled = e.isAutofilled));
        this.autofill.monitor(this.lastName)
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => this.lastNameAutofilled = e.isAutofilled));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.autofill.stopMonitoring(this.firstName);
        this.autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autofill-monitor-example',
                template: "<form>\n  <mat-form-field>\n    <mat-label>First name</mat-label>\n    <input matInput #first>\n    <mat-hint *ngIf=\"firstNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-label>Last name</mat-label>\n    <input matInput #last>\n    <mat-hint *ngIf=\"lastNameAutofilled\">Autofilled!</mat-hint>\n  </mat-form-field>\n  <button mat-raised-button>Submit</button>\n</form>\n",
                styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
/** @nocollapse */
TextFieldAutofillMonitorExample.ctorParameters = () => [
    { type: AutofillMonitor }
];
TextFieldAutofillMonitorExample.propDecorators = {
    firstName: [{ type: ViewChild, args: ['first', { read: ElementRef, static: false },] }],
    lastName: [{ type: ViewChild, args: ['last', { read: ElementRef, static: false },] }]
};
if (false) {
    /** @type {?} */
    TextFieldAutofillMonitorExample.prototype.firstName;
    /** @type {?} */
    TextFieldAutofillMonitorExample.prototype.lastName;
    /** @type {?} */
    TextFieldAutofillMonitorExample.prototype.firstNameAutofilled;
    /** @type {?} */
    TextFieldAutofillMonitorExample.prototype.lastNameAutofilled;
    /**
     * @type {?}
     * @private
     */
    TextFieldAutofillMonitorExample.prototype.autofill;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVF6RixNQUFNLE9BQU8sK0JBQStCOzs7O0lBTTFDLFlBQW9CLFFBQXlCO1FBQXpCLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBQUcsQ0FBQzs7OztJQUVqRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNoQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDL0IsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBdkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyx5YUFBeUQ7O2FBRTFEOzs7O1lBUk8sZUFBZTs7O3dCQVVwQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO3VCQUN0RCxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBRHRELG9EQUE0Rjs7SUFDNUYsbURBQTBGOztJQUMxRiw4REFBNkI7O0lBQzdCLDZEQUE0Qjs7Ozs7SUFFaEIsbURBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRvZmlsbE1vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSB3aXRoIEF1dG9maWxsTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlyc3QnLCB7IHJlYWQ6IEVsZW1lbnRSZWYsIHN0YXRpYzogZmFsc2UgfSkgZmlyc3ROYW1lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbGFzdCcsIHsgcmVhZDogRWxlbWVudFJlZiwgc3RhdGljOiBmYWxzZSB9KSBsYXN0TmFtZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIGZpcnN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG4gIGxhc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dG9maWxsOiBBdXRvZmlsbE1vbml0b3IpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuYXV0b2ZpbGwubW9uaXRvcih0aGlzLmZpcnN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZmlyc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgICB0aGlzLmF1dG9maWxsLm1vbml0b3IodGhpcy5sYXN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMubGFzdE5hbWVBdXRvZmlsbGVkID0gZS5pc0F1dG9maWxsZWQpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmZpcnN0TmFtZSk7XG4gICAgdGhpcy5hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmxhc3ROYW1lKTtcbiAgfVxufVxuIl19