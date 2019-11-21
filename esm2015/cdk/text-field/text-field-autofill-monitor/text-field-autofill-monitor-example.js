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
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.firstName = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.lastName = _t.first);
    } }, decls: 15, vars: 2, consts: [["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "form");
        i0.ɵɵelementStart(1, "mat-form-field");
        i0.ɵɵelementStart(2, "mat-label");
        i0.ɵɵtext(3, "First name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 0, 1);
        i0.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-form-field");
        i0.ɵɵelementStart(8, "mat-label");
        i0.ɵɵtext(9, "Last name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 0, 3);
        i0.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 4);
        i0.ɵɵtext(14, "Submit");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NgIf, i2.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldAutofillMonitorExample, [{
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
        }] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBZ0IsU0FBUyxFQUFFLFVBQVUsRUFBYSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7OztJQ0dyRixnQ0FBc0M7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7SUFLNUQsZ0NBQXFDO0lBQUEsMkJBQVc7SUFBQSxpQkFBVzs7Ozs7QURBL0QsTUFBTSxPQUFPLCtCQUErQjs7OztJQU0xQyxZQUFvQixTQUEwQjtRQUExQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtJQUFHLENBQUM7Ozs7SUFFbEQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDakMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2hDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsV0FBVyxFQUFFLDRDQUE0QztnQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7Ozs7WUFSTyxlQUFlOzs7d0JBVXBCLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO3VCQUNyQyxTQUFTLFNBQUMsTUFBTSxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs7OEdBRjFCLCtCQUErQjtvRUFBL0IsK0JBQStCO2tDQUNmLFVBQVU7a0NBQ1gsVUFBVTs7Ozs7O1FDWHRDLDRCQUNFO1FBQUEsc0NBQ0U7UUFBQSxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMsOEJBQ0E7UUFBQSwwRkFBc0M7UUFDeEMsaUJBQWlCO1FBQ2pCLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSx5QkFBUztRQUFBLGlCQUFZO1FBQ2hDLCtCQUNBO1FBQUEsNEZBQXFDO1FBQ3ZDLGlCQUFpQjtRQUNqQixrQ0FBMEI7UUFBQSx1QkFBTTtRQUFBLGlCQUFTO1FBQzNDLGlCQUFPOztRQVJPLGVBQTJCO1FBQTNCLDhDQUEyQjtRQUszQixlQUEwQjtRQUExQiw2Q0FBMEI7O2tEREEzQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztrQkFFRSxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7O2tCQUNyQyxTQUFTO21CQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7SUFEckMsb0RBQTJFOztJQUMzRSxtREFBeUU7O0lBQ3pFLDhEQUE2Qjs7SUFDN0IsNkRBQTRCOzs7OztJQUVoQixvREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dG9maWxsTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggQXV0b2ZpbGxNb25pdG9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaXJzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgZmlyc3ROYW1lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbGFzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgbGFzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBmaXJzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuICBsYXN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0b2ZpbGw6IEF1dG9maWxsTW9uaXRvcikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGwubW9uaXRvcih0aGlzLmZpcnN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZmlyc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5tb25pdG9yKHRoaXMubGFzdE5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmxhc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2F1dG9maWxsLnN0b3BNb25pdG9yaW5nKHRoaXMuZmlyc3ROYW1lKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmxhc3ROYW1lKTtcbiAgfVxufVxuIiwiPGZvcm0+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI2ZpcnN0PlxuICAgIDxtYXQtaGludCAqbmdJZj1cImZpcnN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkxhc3QgbmFtZTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCAjbGFzdD5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJsYXN0TmFtZUF1dG9maWxsZWRcIj5BdXRvZmlsbGVkITwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+U3VibWl0PC9idXR0b24+XG48L2Zvcm0+XG4iXX0=