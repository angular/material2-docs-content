import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    SlideToggleFormsExample = tslib_1.__decorate([
        Component({
            selector: 'slide-toggle-forms-example',
            template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"onFormSubmit()\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-rasied-button type=\"submit\">Save Settings</button>\n</form>\n",
            styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], SlideToggleFormsExample);
    return SlideToggleFormsExample;
}());
export { SlideToggleFormsExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEU7O0dBRUc7QUFNSDtJQUlFLGlDQUFZLFdBQXdCO1FBSHBDLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFJZixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUM7WUFDakMsVUFBVSxFQUFFLEVBQUU7WUFDZCxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsOENBQVksR0FBWjtRQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFiVSx1QkFBdUI7UUFMbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDRCQUE0QjtZQUN0QyxraENBQWdEOztTQUVqRCxDQUFDO2lEQUt5QixXQUFXO09BSnpCLHVCQUF1QixDQWNuQztJQUFELDhCQUFDO0NBQUEsQUFkRCxJQWNDO1NBZFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFNsaWRlLXRvZ2dsZSB3aXRoIGZvcm1zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUge1xuICBpc0NoZWNrZWQgPSB0cnVlO1xuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHtcbiAgICB0aGlzLmZvcm1Hcm91cCA9IGZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVuYWJsZVdpZmk6ICcnLFxuICAgICAgYWNjZXB0VGVybXM6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZFRydWVdXG4gICAgfSk7XG4gIH1cblxuICBvbkZvcm1TdWJtaXQoKSB7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkodGhpcy5mb3JtR3JvdXAudmFsdWUsIG51bGwsIDIpKTtcbiAgfVxufVxuIl19