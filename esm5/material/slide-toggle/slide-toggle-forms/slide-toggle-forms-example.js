import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/material/button";
/**
 * @title Slide-toggle with forms
 */
var SlideToggleFormsExample = /** @class */ (function () {
    function SlideToggleFormsExample(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    SlideToggleFormsExample.prototype.onFormSubmit = function () {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    };
    SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    SlideToggleFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"], ["mat-rasied-button", "", "type", "submit"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
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
            i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_6_listener($event) { return ctx.onFormSubmit(); });
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
            i0.ɵɵlistener("ngSubmit", function SlideToggleFormsExample_Template_form_ngSubmit_16_listener($event) { return ctx.onFormSubmit(); });
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
}());
export { SlideToggleFormsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFbEU7O0dBRUc7QUFDSDtJQVNFLGlDQUFZLFdBQXdCO1FBSHBDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVksR0FBWjtRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7a0dBYlUsdUJBQXVCO2dFQUF2Qix1QkFBdUI7WUNYcEMseUJBQUc7WUFBQSxvREFBb0M7WUFBQSxpQkFBSTtZQUUzQywyQ0FBMEM7WUFBeEIsOEpBQXVCO1lBQUMsWUFBbUM7WUFBQSxpQkFBbUI7WUFFaEcseUJBQUc7WUFBQSw2REFBNkM7WUFBQSxpQkFBSTtZQUVwRCxrQ0FFRTtZQUZ3Qyw4R0FBWSxrQkFBYyxJQUFDO1lBRW5FLDJDQUE0QztZQUFBLDJCQUFXO1lBQUEsaUJBQW1CO1lBQzFFLDRDQUFzRDtZQUFBLHdDQUF1QjtZQUFBLGlCQUFtQjtZQUVoRyxrQ0FBd0M7WUFBQSw4QkFBYTtZQUFBLGlCQUFTO1lBQ2hFLGlCQUFPO1lBRVAsMEJBQUc7WUFBQSx1REFBc0M7WUFBQSxpQkFBSTtZQUU3QyxnQ0FFRTtZQUZpRCwrR0FBWSxrQkFBYyxJQUFDO1lBRTVFLDRDQUErQztZQUFBLDRCQUFXO1lBQUEsaUJBQW1CO1lBQzdFLDRDQUFnRDtZQUFBLHdDQUF1QjtZQUFBLGlCQUFtQjtZQUUxRiwwQkFBRztZQUFBLGFBQXVDO1lBQUEsaUJBQUk7WUFFOUMsa0NBQXdDO1lBQUEsOEJBQWE7WUFBQSxpQkFBUztZQUNoRSxpQkFBTzs7WUF0QlcsZUFBdUI7WUFBdkIsdUNBQXVCO1lBQUMsZUFBbUM7WUFBbkMsa0VBQW1DO1lBY2xELGdCQUF1QjtZQUF2Qix5Q0FBdUI7WUFLN0MsZUFBdUM7WUFBdkMsc0VBQXVDOztrQ0RyQjVDO0NBeUJDLEFBbkJELElBbUJDO1NBZFksdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlLXRvZ2dsZSB3aXRoIGZvcm1zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUge1xuICBpc0NoZWNrZWQgPSB0cnVlO1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVuYWJsZVdpZmk6ICcnLFxuICAgICAgYWNjZXB0VGVybXM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdXG4gICAgfSk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXQoKSB7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtR3JvdXAudmFsdWUsIG51bGwsIDIpKTtcbiAgfVxufVxuIiwiPHA+U2xpZGUgVG9nZ2xlIHVzaW5nIGEgc2ltcGxlIE5nTW9kZWwuPC9wPlxuXG48bWF0LXNsaWRlLXRvZ2dsZSBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiPlNsaWRlIFRvZ2dsZSBDaGVja2VkOiB7e2lzQ2hlY2tlZH19PC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG48cD5TbGlkZSBUb2dnbGUgaW5zaWRlIG9mIGEgVGVtcGxhdGUtZHJpdmVuIGZvcm08L3A+XG5cbjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCIgI2Zvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIiBuZ05hdGl2ZVZhbGlkYXRlPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIG5nTW9kZWwgbmFtZT1cImVuYWJsZVdpZmlcIj5FbmFibGUgV2lmaTwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiYWNjZXB0VGVybXNcIiByZXF1aXJlZD5BY2NlcHQgVGVybXMgb2YgU2VydmljZTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFNldHRpbmdzPC9idXR0b24+XG48L2Zvcm0+XG5cbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBSZWFjdGl2ZSBmb3JtPC9wPlxuXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cIm9uRm9ybVN1Ym1pdCgpXCIgbmdOYXRpdmVWYWxpZGF0ZT5cblxuICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVXaWZpXCI+RW5hYmxlIFdpZmk8L21hdC1zbGlkZS10b2dnbGU+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImFjY2VwdFRlcm1zXCI+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgPHA+Rm9ybSBHcm91cCBTdGF0dXM6IHt7Zm9ybUdyb3VwLnN0YXR1c319PC9wPlxuXG4gIDxidXR0b24gbWF0LXJhc2llZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==