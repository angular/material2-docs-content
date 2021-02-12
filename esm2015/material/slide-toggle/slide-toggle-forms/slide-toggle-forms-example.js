import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/slide-toggle";
import * as i3 from "@angular/material/button";
/**
 * @title Slide-toggle with forms
 */
export class SlideToggleFormsExample {
    constructor(formBuilder) {
        this.isChecked = true;
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue]
        });
    }
    onFormSubmit() {
        alert(JSON.stringify(this.formGroup.value, null, 2));
    }
}
SlideToggleFormsExample.ɵfac = function SlideToggleFormsExample_Factory(t) { return new (t || SlideToggleFormsExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
SlideToggleFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: SlideToggleFormsExample, selectors: [["slide-toggle-forms-example"]], decls: 25, vars: 4, consts: [[3, "ngModel", "ngModelChange"], ["ngNativeValidate", "", 1, "example-form", 3, "ngSubmit"], ["form", "ngForm"], ["ngModel", "", "name", "enableWifi"], ["ngModel", "", "name", "acceptTerms", "required", ""], ["mat-raised-button", "", "type", "submit"], ["ngNativeValidate", "", 1, "example-form", 3, "formGroup", "ngSubmit"], ["formControlName", "enableWifi"], ["formControlName", "acceptTerms"]], template: function SlideToggleFormsExample_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(23, "button", 5);
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideToggleFormsExample, [{
        type: Component,
        args: [{
                selector: 'slide-toggle-forms-example',
                templateUrl: './slide-toggle-forms-example.html',
                styleUrls: ['./slide-toggle-forms-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUFFbEU7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBSWxDLFlBQVksV0FBd0I7UUFIcEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUlmLElBQUksQ0FBQyxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQztZQUNqQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQzNDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxZQUFZO1FBQ1YsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OEZBYlUsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUNYcEMseUJBQUc7UUFBQSxvREFBb0M7UUFBQSxpQkFBSTtRQUUzQywyQ0FBMEM7UUFBeEIsOEpBQXVCO1FBQUMsWUFBbUM7UUFBQSxpQkFBbUI7UUFFaEcseUJBQUc7UUFBQSw2REFBNkM7UUFBQSxpQkFBSTtRQUVwRCxrQ0FBdUY7UUFBN0Msd0dBQVksa0JBQWMsSUFBQztRQUVuRSwyQ0FBNEM7UUFBQSwyQkFBVztRQUFBLGlCQUFtQjtRQUMxRSw0Q0FBc0Q7UUFBQSx3Q0FBdUI7UUFBQSxpQkFBbUI7UUFFaEcsa0NBQXdDO1FBQUEsOEJBQWE7UUFBQSxpQkFBUztRQUNoRSxpQkFBTztRQUVQLDBCQUFHO1FBQUEsdURBQXNDO1FBQUEsaUJBQUk7UUFFN0MsZ0NBQWdHO1FBQTdDLHlHQUFZLGtCQUFjLElBQUM7UUFFNUUsNENBQStDO1FBQUEsNEJBQVc7UUFBQSxpQkFBbUI7UUFDN0UsNENBQWdEO1FBQUEsd0NBQXVCO1FBQUEsaUJBQW1CO1FBRTFGLDBCQUFHO1FBQUEsYUFBdUM7UUFBQSxpQkFBSTtRQUU5QyxrQ0FBd0M7UUFBQSw4QkFBYTtRQUFBLGlCQUFTO1FBQ2hFLGlCQUFPOztRQXRCVyxlQUF1QjtRQUF2Qix1Q0FBdUI7UUFBQyxlQUFtQztRQUFuQyxrRUFBbUM7UUFjbEQsZ0JBQXVCO1FBQXZCLHlDQUF1QjtRQUs3QyxlQUF1QztRQUF2QyxzRUFBdUM7O3VGRFYvQix1QkFBdUI7Y0FMbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxtQ0FBbUM7Z0JBQ2hELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2FBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlLXRvZ2dsZSB3aXRoIGZvcm1zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUge1xuICBpc0NoZWNrZWQgPSB0cnVlO1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVuYWJsZVdpZmk6ICcnLFxuICAgICAgYWNjZXB0VGVybXM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdXG4gICAgfSk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXQoKSB7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtR3JvdXAudmFsdWUsIG51bGwsIDIpKTtcbiAgfVxufVxuIiwiPHA+U2xpZGUgVG9nZ2xlIHVzaW5nIGEgc2ltcGxlIE5nTW9kZWwuPC9wPlxuXG48bWF0LXNsaWRlLXRvZ2dsZSBbKG5nTW9kZWwpXT1cImlzQ2hlY2tlZFwiPlNsaWRlIFRvZ2dsZSBDaGVja2VkOiB7e2lzQ2hlY2tlZH19PC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG48cD5TbGlkZSBUb2dnbGUgaW5zaWRlIG9mIGEgVGVtcGxhdGUtZHJpdmVuIGZvcm08L3A+XG5cbjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCIgI2Zvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25Gb3JtU3VibWl0KClcIiBuZ05hdGl2ZVZhbGlkYXRlPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIG5nTW9kZWwgbmFtZT1cImVuYWJsZVdpZmlcIj5FbmFibGUgV2lmaTwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiYWNjZXB0VGVybXNcIiByZXF1aXJlZD5BY2NlcHQgVGVybXMgb2YgU2VydmljZTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TYXZlIFNldHRpbmdzPC9idXR0b24+XG48L2Zvcm0+XG5cbjxwPlNsaWRlIFRvZ2dsZSBpbnNpZGUgb2YgYSBSZWFjdGl2ZSBmb3JtPC9wPlxuXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCIgKG5nU3VibWl0KT1cIm9uRm9ybVN1Ym1pdCgpXCIgbmdOYXRpdmVWYWxpZGF0ZT5cblxuICA8bWF0LXNsaWRlLXRvZ2dsZSBmb3JtQ29udHJvbE5hbWU9XCJlbmFibGVXaWZpXCI+RW5hYmxlIFdpZmk8L21hdC1zbGlkZS10b2dnbGU+XG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImFjY2VwdFRlcm1zXCI+QWNjZXB0IFRlcm1zIG9mIFNlcnZpY2U8L21hdC1zbGlkZS10b2dnbGU+XG5cbiAgPHA+Rm9ybSBHcm91cCBTdGF0dXM6IHt7Zm9ybUdyb3VwLnN0YXR1c319PC9wPlxuXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cbjwvZm9ybT5cbiJdfQ==