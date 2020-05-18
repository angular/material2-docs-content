/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/slide-toggle/slide-toggle-forms/slide-toggle-forms-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/material/button";
/**
 * \@title Slide-toggle with forms
 */
let SlideToggleFormsExample = /** @class */ (() => {
    /**
     * \@title Slide-toggle with forms
     */
    class SlideToggleFormsExample {
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
    /** @nocollapse */ SlideToggleFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"], ["mat-rasied-button", "", "type", "submit"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵelementStart(6, "form", 1, 2);
            i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener() { return ctx.onFormSubmit(); });
            i0.ɵɵelementStart(8, "mat-slide-toggle", 3);
            i0.ɵɵtext(9, "Enable Wifi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-slide-toggle", 4);
            i0.ɵɵtext(11, "Accept Terms of Service");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵtext(13, "Save Settings");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "p");
            i0.ɵɵtext(15, "Slide Toggle inside of a Reactive form");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "form", 6);
            i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener() { return ctx.onFormSubmit(); });
            i0.ɵɵelementStart(17, "mat-slide-toggle", 7);
            i0.ɵɵtext(18, "Enable Wifi");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "mat-slide-toggle", 8);
            i0.ɵɵtext(20, "Accept Terms of Service");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "p");
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "button", 9);
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
    return SlideToggleFormsExample;
})();
export { SlideToggleFormsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
if (false) {
    /** @type {?} */
    SlideToggleFormsExample.prototype.isChecked;
    /** @type {?} */
    SlideToggleFormsExample.prototype.formGroup;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFhLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztBQUtsRTs7OztJQUFBLE1BS2EsdUJBQXVCOzs7O1FBSWxDLFlBQVksV0FBd0I7WUFIcEMsY0FBUyxHQUFHLElBQUksQ0FBQztZQUlmLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztnQkFDakMsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDM0MsQ0FBQyxDQUFDO1FBQ0wsQ0FBQzs7OztRQUVELFlBQVk7WUFDVixLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsbUNBQW1DO29CQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7Ozs7Z0JBVE8sV0FBVzs7cUhBVU4sdUJBQXVCO21GQUF2Qix1QkFBdUI7WUNYcEMseUJBQUc7WUFBQSxvREFBb0M7WUFBQSxpQkFBSTtZQUUzQywyQ0FBMEM7WUFBeEIsOEpBQXVCO1lBQUMsWUFBbUM7WUFBQSxpQkFBbUI7WUFFaEcseUJBQUc7WUFBQSw2REFBNkM7WUFBQSxpQkFBSTtZQUVwRCxrQ0FFRTtZQUZ3Qyx3R0FBWSxrQkFBYyxJQUFDO1lBRW5FLDJDQUE0QztZQUFBLDJCQUFXO1lBQUEsaUJBQW1CO1lBQzFFLDRDQUFzRDtZQUFBLHdDQUF1QjtZQUFBLGlCQUFtQjtZQUVoRyxrQ0FBd0M7WUFBQSw4QkFBYTtZQUFBLGlCQUFTO1lBQ2hFLGlCQUFPO1lBRVAsMEJBQUc7WUFBQSx1REFBc0M7WUFBQSxpQkFBSTtZQUU3QyxnQ0FFRTtZQUZpRCx5R0FBWSxrQkFBYyxJQUFDO1lBRTVFLDRDQUErQztZQUFBLDRCQUFXO1lBQUEsaUJBQW1CO1lBQzdFLDRDQUFnRDtZQUFBLHdDQUF1QjtZQUFBLGlCQUFtQjtZQUUxRiwwQkFBRztZQUFBLGFBQXVDO1lBQUEsaUJBQUk7WUFFOUMsa0NBQXdDO1lBQUEsOEJBQWE7WUFBQSxpQkFBUztZQUNoRSxpQkFBTzs7WUF0QlcsZUFBdUI7WUFBdkIsdUNBQXVCO1lBQUMsZUFBbUM7WUFBbkMsa0VBQW1DO1lBY2xELGdCQUF1QjtZQUF2Qix5Q0FBdUI7WUFLN0MsZUFBdUM7WUFBdkMsc0VBQXVDOztrQ0RyQjVDO0tBeUJDO1NBZFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEOzs7O0lBRUMsNENBQWlCOztJQUNqQiw0Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU2xpZGUtdG9nZ2xlIHdpdGggZm9ybXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSB7XG4gIGlzQ2hlY2tlZCA9IHRydWU7XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge1xuICAgIHRoaXMuZm9ybUdyb3VwID0gZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZW5hYmxlV2lmaTogJycsXG4gICAgICBhY2NlcHRUZXJtczogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkVHJ1ZV1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRm9ybVN1Ym1pdCgpIHtcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeSh0aGlzLmZvcm1Hcm91cC52YWx1ZSwgbnVsbCwgMikpO1xuICB9XG59XG4iLCI8cD5TbGlkZSBUb2dnbGUgdXNpbmcgYSBzaW1wbGUgTmdNb2RlbC48L3A+XG5cbjxtYXQtc2xpZGUtdG9nZ2xlIFsobmdNb2RlbCldPVwiaXNDaGVja2VkXCI+U2xpZGUgVG9nZ2xlIENoZWNrZWQ6IHt7aXNDaGVja2VkfX08L21hdC1zbGlkZS10b2dnbGU+XG5cbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBUZW1wbGF0ZS1kcml2ZW4gZm9ybTwvcD5cblxuPGZvcm0gY2xhc3M9XCJleGFtcGxlLWZvcm1cIiAjZm9ybT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvbkZvcm1TdWJtaXQoKVwiIG5nTmF0aXZlVmFsaWRhdGU+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiZW5hYmxlV2lmaVwiPkVuYWJsZSBXaWZpPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8bWF0LXNsaWRlLXRvZ2dsZSBuZ01vZGVsIG5hbWU9XCJhY2NlcHRUZXJtc1wiIHJlcXVpcmVkPkFjY2VwdCBUZXJtcyBvZiBTZXJ2aWNlPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cbjwvZm9ybT5cblxuPHA+U2xpZGUgVG9nZ2xlIGluc2lkZSBvZiBhIFJlYWN0aXZlIGZvcm08L3A+XG5cbjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIiBuZ05hdGl2ZVZhbGlkYXRlPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImVuYWJsZVdpZmlcIj5FbmFibGUgV2lmaTwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPG1hdC1zbGlkZS10b2dnbGUgZm9ybUNvbnRyb2xOYW1lPVwiYWNjZXB0VGVybXNcIj5BY2NlcHQgVGVybXMgb2YgU2VydmljZTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuICA8cD5Gb3JtIEdyb3VwIFN0YXR1czoge3tmb3JtR3JvdXAuc3RhdHVzfX08L3A+XG5cbiAgPGJ1dHRvbiBtYXQtcmFzaWVkLWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBTZXR0aW5nczwvYnV0dG9uPlxuPC9mb3JtPlxuIl19