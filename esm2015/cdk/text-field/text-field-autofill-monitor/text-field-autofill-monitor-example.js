/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/text-field";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
const _c0 = ["first"];
const _c1 = ["last"];
const _c2 = ["first", ""];
const _c3 = ["last", ""];
function TextFieldAutofillMonitorExample_mat_hint_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
function TextFieldAutofillMonitorExample_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-hint");
    i0.ɵɵtext(1, "Autofilled!");
    i0.ɵɵelementEnd();
} }
/**
 * \@title Monitoring autofill state with AutofillMonitor
 */
export class TextFieldAutofillMonitorExample {
    /**
     * @param {?} _autofill
     */
    constructor(_autofill) {
        this._autofill = _autofill;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._autofill.monitor(this.firstName)
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => this.firstNameAutofilled = e.isAutofilled));
        this._autofill.monitor(this.lastName)
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
        this._autofill.stopMonitoring(this.firstName);
        this._autofill.stopMonitoring(this.lastName);
    }
}
TextFieldAutofillMonitorExample.decorators = [
    { type: Component, args: [{
                selector: 'text-field-autofill-monitor-example',
                templateUrl: './text-field-autofill-monitor-example.html',
                styleUrls: ['./text-field-autofill-monitor-example.css'],
            },] },
];
/** @nocollapse */
TextFieldAutofillMonitorExample.ctorParameters = () => [
    { type: AutofillMonitor }
];
TextFieldAutofillMonitorExample.propDecorators = {
    firstName: [{ type: ViewChild, args: ['first', { read: ElementRef },] }],
    lastName: [{ type: ViewChild, args: ['last', { read: ElementRef },] }]
};
/** @nocollapse */ TextFieldAutofillMonitorExample.ɵfac = function TextFieldAutofillMonitorExample_Factory(t) { return new (t || TextFieldAutofillMonitorExample)(i0.ɵɵdirectiveInject(i1.AutofillMonitor)); };
/** @nocollapse */ TextFieldAutofillMonitorExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutofillMonitorExample, selectors: [["text-field-autofill-monitor-example"]], viewQuery: function TextFieldAutofillMonitorExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true, ElementRef);
        i0.ɵɵviewQuery(_c1, true, ElementRef);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.firstName = _t.first);
        i0.ɵɵqueryRefresh((_t = i0.ɵɵloadQuery())) && (ctx.lastName = _t.first);
    } }, decls: 15, vars: 2, consts: [["matInput", ""], [4, "ngIf"], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 0, _c2);
        i0.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 0, _c3);
        i0.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 2);
        i0.ɵɵtext(14, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NgIf, i2.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autofill-monitor-example',
                templateUrl: './text-field-autofill-monitor-example.html',
                styleUrls: ['./text-field-autofill-monitor-example.css'],
            }]
    }], function () { return [{ type: i1.AutofillMonitor }]; }, { firstName: [{
            type: ViewChild,
            args: ['first', { read: ElementRef }]
        }], lastName: [{
            type: ViewChild,
            args: ['last', { read: ElementRef }]
        }] });
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
    TextFieldAutofillMonitorExample.prototype._autofill;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFnQixTQUFTLEVBQUUsVUFBVSxFQUFhLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUNHckYsZ0NBQXNDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7O0lBSzVELGdDQUFxQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7Ozs7O0FEQS9ELE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFNMUMsWUFBb0IsU0FBMEI7UUFBMUIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7SUFBRyxDQUFDOzs7O0lBRWxELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQ2pDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoQyxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7WUF2QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOzs7O1lBUk8sZUFBZTs7O3dCQVVwQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzt1QkFDckMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7OzhHQUYxQiwrQkFBK0I7b0VBQS9CLCtCQUErQjtrQ0FDZixVQUFVO2tDQUNYLFVBQVU7Ozs7OztRQ1h0Qyw0QkFDRTtRQUFBLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSwwQkFBVTtRQUFBLGlCQUFZO1FBQ2pDLGdDQUNBO1FBQUEsMEZBQXNDO1FBQ3hDLGlCQUFpQjtRQUNqQixzQ0FDRTtRQUFBLGlDQUFXO1FBQUEseUJBQVM7UUFBQSxpQkFBWTtRQUNoQyxpQ0FDQTtRQUFBLDRGQUFxQztRQUN2QyxpQkFBaUI7UUFDakIsa0NBQTBCO1FBQUEsdUJBQU07UUFBQSxpQkFBUztRQUMzQyxpQkFBTzs7UUFSTyxlQUEyQjtRQUEzQiw4Q0FBMkI7UUFLM0IsZUFBMEI7UUFBMUIsNkNBQTBCOzttQ0RBM0IsK0JBQStCO2NBTDNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUscUNBQXFDO2dCQUMvQyxXQUFXLEVBQUUsNENBQTRDO2dCQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs7a0JBRUUsU0FBUzttQkFBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOztrQkFDckMsU0FBUzttQkFBQyxNQUFNLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDOzs7O0lBRHJDLG9EQUEyRTs7SUFDM0UsbURBQXlFOztJQUN6RSw4REFBNkI7O0lBQzdCLDZEQUE0Qjs7Ozs7SUFFaEIsb0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBdXRvZmlsbE1vbml0b3J9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7QWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSB3aXRoIEF1dG9maWxsTW9uaXRvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZmlyc3QnLCB7cmVhZDogRWxlbWVudFJlZn0pIGZpcnN0TmFtZTogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ2xhc3QnLCB7cmVhZDogRWxlbWVudFJlZn0pIGxhc3ROYW1lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgZmlyc3ROYW1lQXV0b2ZpbGxlZDogYm9vbGVhbjtcbiAgbGFzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dG9maWxsOiBBdXRvZmlsbE1vbml0b3IpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2F1dG9maWxsLm1vbml0b3IodGhpcy5maXJzdE5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmZpcnN0TmFtZUF1dG9maWxsZWQgPSBlLmlzQXV0b2ZpbGxlZCk7XG4gICAgdGhpcy5fYXV0b2ZpbGwubW9uaXRvcih0aGlzLmxhc3ROYW1lKVxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5sYXN0TmFtZUF1dG9maWxsZWQgPSBlLmlzQXV0b2ZpbGxlZCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLl9hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmZpcnN0TmFtZSk7XG4gICAgdGhpcy5fYXV0b2ZpbGwuc3RvcE1vbml0b3JpbmcodGhpcy5sYXN0TmFtZSk7XG4gIH1cbn1cbiIsIjxmb3JtPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNmaXJzdD5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJmaXJzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5MYXN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI2xhc3Q+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwibGFzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19