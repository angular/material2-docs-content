/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * \@title Expansion panel as accordion
 */
export class ExpansionStepsExample {
    constructor() {
        this.step = 0;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setStep(index) {
        this.step = index;
    }
    /**
     * @return {?}
     */
    nextStep() {
        this.step++;
    }
    /**
     * @return {?}
     */
    prevStep() {
        this.step--;
    }
}
ExpansionStepsExample.decorators = [
    { type: Component, args: [{
                selector: 'expansion-steps-example',
                template: "<mat-accordion class=\"example-headers-align\">\n  <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Personal data\n      </mat-panel-title>\n      <mat-panel-description>\n        Type your name and age\n        <mat-icon>account_circle</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"First name\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Destination\n      </mat-panel-title>\n      <mat-panel-description>\n        Type the country name\n        <mat-icon>map</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Country\">\n    </mat-form-field>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Day of the trip\n      </mat-panel-title>\n      <mat-panel-description>\n        Inform the date you wish to travel\n        <mat-icon>date_range</mat-icon>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n    </mat-form-field>\n    <mat-datepicker #picker></mat-datepicker>\n\n    <mat-action-row>\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n    </mat-action-row>\n  </mat-expansion-panel>\n\n</mat-accordion>\n",
                styles: [".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    ExpansionStepsExample.prototype.step;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBVXhDLE1BQU0sT0FBTyxxQkFBcUI7SUFMbEM7UUFNRSxTQUFJLEdBQUcsQ0FBQyxDQUFDO0lBYVgsQ0FBQzs7Ozs7SUFYQyxPQUFPLENBQUMsS0FBYTtRQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxveEVBQTJDOzthQUU1Qzs7OztJQUVDLHFDQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBFeHBhbnNpb24gcGFuZWwgYXMgYWNjb3JkaW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdleHBhbnNpb24tc3RlcHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25TdGVwc0V4YW1wbGUge1xuICBzdGVwID0gMDtcblxuICBzZXRTdGVwKGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLnN0ZXAgPSBpbmRleDtcbiAgfVxuXG4gIG5leHRTdGVwKCkge1xuICAgIHRoaXMuc3RlcCsrO1xuICB9XG5cbiAgcHJldlN0ZXAoKSB7XG4gICAgdGhpcy5zdGVwLS07XG4gIH1cbn1cbiJdfQ==