/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/cdk/text-field/text-field-autofill-monitor/text-field-autofill-monitor-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { AutofillMonitor } from '@angular/cdk/text-field';
import { Component, ElementRef, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/text-field";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/button";
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
let TextFieldAutofillMonitorExample = /** @class */ (() => {
    /**
     * \@title Monitoring autofill state with AutofillMonitor
     */
    class TextFieldAutofillMonitorExample {
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
        } }, decls: 15, vars: 2, consts: [[3, "submit"], ["matInput", ""], ["first", ""], [4, "ngIf"], ["last", ""], ["mat-raised-button", ""]], template: function TextFieldAutofillMonitorExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("submit", function TextFieldAutofillMonitorExample_Template_form_submit_0_listener($event) { return $event.preventDefault(); });
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "First name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 1, 2);
            i0.ɵɵtemplate(6, TextFieldAutofillMonitorExample_mat_hint_6_Template, 2, 0, "mat-hint", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelementStart(8, "mat-label");
            i0.ɵɵtext(9, "Last name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 1, 4);
            i0.ɵɵtemplate(12, TextFieldAutofillMonitorExample_mat_hint_12_Template, 2, 0, "mat-hint", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 5);
            i0.ɵɵtext(14, "Submit");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.firstNameAutofilled);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.lastNameAutofilled);
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.NgIf, i5.MatButton, i2.MatHint], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    return TextFieldAutofillMonitorExample;
})();
export { TextFieldAutofillMonitorExample };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3IvdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN4RCxPQUFPLEVBQWdCLFNBQVMsRUFBRSxVQUFVLEVBQWEsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7O0lDR3JGLGdDQUFzQztJQUFBLDJCQUFXO0lBQUEsaUJBQVc7OztJQUs1RCxnQ0FBcUM7SUFBQSwyQkFBVztJQUFBLGlCQUFXOzs7OztBREwvRDs7OztJQUFBLE1BS2EsK0JBQStCOzs7O1FBTTFDLFlBQW9CLFNBQTBCO1lBQTFCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQUcsQ0FBQzs7OztRQUVsRCxlQUFlO1lBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztpQkFDakMsU0FBUzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNoQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLFlBQVksRUFBQyxDQUFDO1FBQ2hFLENBQUM7Ozs7UUFFRCxXQUFXO1lBQ1QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7Z0JBdkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUNBQXFDO29CQUMvQyxXQUFXLEVBQUUsNENBQTRDO29CQUN6RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztpQkFDekQ7Ozs7Z0JBUk8sZUFBZTs7OzRCQVVwQixTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzsyQkFDckMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7O3FJQUYxQiwrQkFBK0I7MkZBQS9CLCtCQUErQjtzQ0FDZixVQUFVO3NDQUNYLFVBQVU7Ozs7OztZQ1h0QywrQkFDRTtZQURJLGtIQUFVLHVCQUF1QixJQUFDO1lBQ3RDLHNDQUNFO1lBQUEsaUNBQVc7WUFBQSwwQkFBVTtZQUFBLGlCQUFZO1lBQ2pDLDhCQUNBO1lBQUEsMEZBQXNDO1lBQ3hDLGlCQUFpQjtZQUNqQixzQ0FDRTtZQUFBLGlDQUFXO1lBQUEseUJBQVM7WUFBQSxpQkFBWTtZQUNoQywrQkFDQTtZQUFBLDRGQUFxQztZQUN2QyxpQkFBaUI7WUFDakIsa0NBQTBCO1lBQUEsdUJBQU07WUFBQSxpQkFBUztZQUMzQyxpQkFBTzs7WUFSTyxlQUEyQjtZQUEzQiw4Q0FBMkI7WUFLM0IsZUFBMEI7WUFBMUIsNkNBQTBCOzswQ0RUeEM7S0E0QkM7U0FuQlksK0JBQStCO2tEQUEvQiwrQkFBK0I7Y0FMM0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEOztrQkFFRSxTQUFTO21CQUFDLE9BQU8sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7O2tCQUNyQyxTQUFTO21CQUFDLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7Ozs7SUFEckMsb0RBQTJFOztJQUMzRSxtREFBeUU7O0lBQ3pFLDhEQUE2Qjs7SUFDN0IsNkRBQTRCOzs7OztJQUVoQixvREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0F1dG9maWxsTW9uaXRvcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIHdpdGggQXV0b2ZpbGxNb25pdG9yICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKCdmaXJzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgZmlyc3ROYW1lOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgQFZpZXdDaGlsZCgnbGFzdCcsIHtyZWFkOiBFbGVtZW50UmVmfSkgbGFzdE5hbWU6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuICBmaXJzdE5hbWVBdXRvZmlsbGVkOiBib29sZWFuO1xuICBsYXN0TmFtZUF1dG9maWxsZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0b2ZpbGw6IEF1dG9maWxsTW9uaXRvcikge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fYXV0b2ZpbGwubW9uaXRvcih0aGlzLmZpcnN0TmFtZSlcbiAgICAgICAgLnN1YnNjcmliZShlID0+IHRoaXMuZmlyc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5tb25pdG9yKHRoaXMubGFzdE5hbWUpXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmxhc3ROYW1lQXV0b2ZpbGxlZCA9IGUuaXNBdXRvZmlsbGVkKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2F1dG9maWxsLnN0b3BNb25pdG9yaW5nKHRoaXMuZmlyc3ROYW1lKTtcbiAgICB0aGlzLl9hdXRvZmlsbC5zdG9wTW9uaXRvcmluZyh0aGlzLmxhc3ROYW1lKTtcbiAgfVxufVxuIiwiPGZvcm0gKHN1Ym1pdCk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GaXJzdCBuYW1lPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNmaXJzdD5cbiAgICA8bWF0LWhpbnQgKm5nSWY9XCJmaXJzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5MYXN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgI2xhc3Q+XG4gICAgPG1hdC1oaW50ICpuZ0lmPVwibGFzdE5hbWVBdXRvZmlsbGVkXCI+QXV0b2ZpbGxlZCE8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uPlN1Ym1pdDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19