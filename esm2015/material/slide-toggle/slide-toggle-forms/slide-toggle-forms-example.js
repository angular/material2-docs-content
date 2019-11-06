/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/material/button";
const _c0 = ["form", "ngForm"];
/**
 * \@title Slide-toggle with forms
 */
export class SlideToggleFormsExample {
    /**
     * @param {?} formBuilder
     */
    constructor(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    /**
     * @return {?}
     */
    onFormSubmit() {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    }
}
SlideToggleFormsExample.decorators = [
    { type: Component, args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            },] },
];
/** @nocollapse */
SlideToggleFormsExample.ctorParameters = () => [
    { type: FormBuilder }
];
/** @nocollapse */ SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
/** @nocollapse */ SlideToggleFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"], ["mat-rasied-button", "", "type", "submit"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "Slide Toggle using a simple NgModel.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-slide-toggle", 0);
        i0.ɵɵlistener("ngModelChange", function SlideToggleFormsExample_Template_mat_slide_toggle_ngModelChange_2_listener($event) { return ctx.isChecked = $event; });
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "p");
        i0.ɵɵtext(5, "Slide Toggle inside of a Template-driven form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "form", 1, _c0);
        i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener($event) { return ctx.onFormSubmit(); });
        i0.ɵɵelementStart(8, "mat-slide-toggle", 2);
        i0.ɵɵtext(9, "Enable Wifi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "mat-slide-toggle", 3);
        i0.ɵɵtext(11, "Accept Terms of Service");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "button", 4);
        i0.ɵɵtext(13, "Save Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "p");
        i0.ɵɵtext(15, "Slide Toggle inside of a Reactive form");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "form", 5);
        i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener($event) { return ctx.onFormSubmit(); });
        i0.ɵɵelementStart(17, "mat-slide-toggle", 6);
        i0.ɵɵtext(18, "Enable Wifi");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(19, "mat-slide-toggle", 7);
        i0.ɵɵtext(20, "Accept Terms of Service");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "p");
        i0.ɵɵtext(22);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "button", 8);
        i0.ɵɵtext(24, "Save Settings");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.isChecked);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Slide Toggle Checked: ", ctx.isChecked, "");
        i0.ɵɵadvance(13);
        i0.ɵɵproperty("formGroup", ctx.formGroup);
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate1("Form Group Status: ", ctx.formGroup.status, "");
    } }, directives: [i2.MatSlideToggle, i1.NgControlStatus, i1.NgModel, i1.NgControlStatusGroup, i1.NgForm, i2.MatSlideToggleRequiredValidator, i1.RequiredValidator, i3.MatButton, i1.FormGroupDirective, i1.FormControlName], styles: [".example-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  display: block;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
if (false) {
    /** @type {?} */
    SlideToggleFormsExample.prototype.isChecked;
    /** @type {?} */
    SlideToggleFormsExample.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztBQVVsRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBSWxDLFlBQVksV0FBd0I7UUFIcEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsbUNBQW1DO2dCQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQzthQUNoRDs7OztZQVRPLFdBQVc7OzhGQVVOLHVCQUF1Qjs0REFBdkIsdUJBQXVCO1FDWHBDLHlCQUFHO1FBQUEsb0RBQW9DO1FBQUEsaUJBQUk7UUFFM0MsMkNBQTBDO1FBQXhCLDhKQUF1QjtRQUFDLFlBQW1DO1FBQUEsaUJBQW1CO1FBRWhHLHlCQUFHO1FBQUEsNkRBQTZDO1FBQUEsaUJBQUk7UUFFcEQsb0NBRUU7UUFGd0MsOEdBQVksa0JBQWMsSUFBQztRQUVuRSwyQ0FBNEM7UUFBQSwyQkFBVztRQUFBLGlCQUFtQjtRQUMxRSw0Q0FBc0Q7UUFBQSx3Q0FBdUI7UUFBQSxpQkFBbUI7UUFFaEcsa0NBQXdDO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUNoRSxpQkFBTztRQUVQLDBCQUFHO1FBQUEsdURBQXNDO1FBQUEsaUJBQUk7UUFFN0MsZ0NBRUU7UUFGaUQsK0dBQVksa0JBQWMsSUFBQztRQUU1RSw0Q0FBK0M7UUFBQSw0QkFBVztRQUFBLGlCQUFtQjtRQUM3RSw0Q0FBZ0Q7UUFBQSx3Q0FBdUI7UUFBQSxpQkFBbUI7UUFFMUYsMEJBQUc7UUFBQSxhQUF1QztRQUFBLGlCQUFJO1FBRTlDLGtDQUF3QztRQUFBLDhCQUFhO1FBQUEsaUJBQVM7UUFDaEUsaUJBQU87O1FBdEJXLGVBQXVCO1FBQXZCLHVDQUF1QjtRQUFDLGVBQW1DO1FBQW5DLGtFQUFtQztRQWNsRCxnQkFBdUI7UUFBdkIseUNBQXVCO1FBSzdDLGVBQXVDO1FBQXZDLHNFQUF1Qzs7bUNEVi9CLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQ7Ozs7SUFFQyw0Q0FBaUI7O0lBQ2pCLDRDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZS10b2dnbGUgd2l0aCBmb3Jtc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlIHtcbiAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG5cbiAgY29uc3RydWN0b3IoZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBlbmFibGVXaWZpOiAnJyxcbiAgICAgIGFjY2VwdFRlcm1zOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXVxuICAgIH0pO1xuICB9XG5cbiAgb25Gb3JtU3VibWl0KCkge1xuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBudWxsLCAyKSk7XG4gIH1cbn1cbiIsIjxwPlNsaWRlIFRvZ2dsZSB1c2luZyBhIHNpbXBsZSBOZ01vZGVsLjwvcD5cblxuPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRcIj5TbGlkZSBUb2dnbGUgQ2hlY2tlZDoge3tpc0NoZWNrZWR9fTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuPHA+U2xpZGUgVG9nZ2xlIGluc2lkZSBvZiBhIFRlbXBsYXRlLWRyaXZlbiBmb3JtPC9wPlxuXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiICNmb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uRm9ybVN1Ym1pdCgpXCIgbmdOYXRpdmVWYWxpZGF0ZT5cblxuICA8bWF0LXNsaWRlLXRvZ2dsZSBuZ01vZGVsIG5hbWU9XCJlbmFibGVXaWZpXCI+RW5hYmxlIFdpZmk8L21hdC1zbGlkZS10b2dnbGU+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIG5nTW9kZWwgbmFtZT1cImFjY2VwdFRlcm1zXCIgcmVxdWlyZWQ+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBTZXR0aW5nczwvYnV0dG9uPlxuPC9mb3JtPlxuXG48cD5TbGlkZSBUb2dnbGUgaW5zaWRlIG9mIGEgUmVhY3RpdmUgZm9ybTwvcD5cblxuPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1Hcm91cFwiIChuZ1N1Ym1pdCk9XCJvbkZvcm1TdWJtaXQoKVwiIG5nTmF0aXZlVmFsaWRhdGU+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGUgZm9ybUNvbnRyb2xOYW1lPVwiZW5hYmxlV2lmaVwiPkVuYWJsZSBXaWZpPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJhY2NlcHRUZXJtc1wiPkFjY2VwdCBUZXJtcyBvZiBTZXJ2aWNlPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gIDxwPkZvcm0gR3JvdXAgU3RhdHVzOiB7e2Zvcm1Hcm91cC5zdGF0dXN9fTwvcD5cblxuICA8YnV0dG9uIG1hdC1yYXNpZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFNldHRpbmdzPC9idXR0b24+XG48L2Zvcm0+XG4iXX0=