import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/icon";
/** @title Form field appearance variants */
var FormFieldAppearanceExample = /** @class */ (function () {
    function FormFieldAppearanceExample() {
    }
    FormFieldAppearanceExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-appearance-example',
                    templateUrl: 'form-field-appearance-example.html',
                    styleUrls: ['form-field-appearance-example.css'],
                },] },
    ];
    FormFieldAppearanceExample.ɵfac = function FormFieldAppearanceExample_Factory(t) { return new (t || FormFieldAppearanceExample)(); };
    FormFieldAppearanceExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldAppearanceExample, selectors: [["form-field-appearance-example"]], decls: 36, vars: 0, consts: [["appearance", "legacy"], ["matInput", "", "placeholder", "Placeholder"], ["matSuffix", ""], ["appearance", "standard"], ["appearance", "fill"], ["appearance", "outline"]], template: function FormFieldAppearanceExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵelementStart(1, "mat-form-field", 0);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Legacy form field");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 1);
            i0.ɵɵelementStart(5, "mat-icon", 2);
            i0.ɵɵtext(6, "sentiment_very_satisfied");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "mat-hint");
            i0.ɵɵtext(8, "Hint");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "p");
            i0.ɵɵelementStart(10, "mat-form-field", 3);
            i0.ɵɵelementStart(11, "mat-label");
            i0.ɵɵtext(12, "Standard form field");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "input", 1);
            i0.ɵɵelementStart(14, "mat-icon", 2);
            i0.ɵɵtext(15, "sentiment_very_satisfied");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "mat-hint");
            i0.ɵɵtext(17, "Hint");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "p");
            i0.ɵɵelementStart(19, "mat-form-field", 4);
            i0.ɵɵelementStart(20, "mat-label");
            i0.ɵɵtext(21, "Fill form field");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(22, "input", 1);
            i0.ɵɵelementStart(23, "mat-icon", 2);
            i0.ɵɵtext(24, "sentiment_very_satisfied");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "mat-hint");
            i0.ɵɵtext(26, "Hint");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "p");
            i0.ɵɵelementStart(28, "mat-form-field", 5);
            i0.ɵɵelementStart(29, "mat-label");
            i0.ɵɵtext(30, "Outline form field");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(31, "input", 1);
            i0.ɵɵelementStart(32, "mat-icon", 2);
            i0.ɵɵtext(33, "sentiment_very_satisfied");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(34, "mat-hint");
            i0.ɵɵtext(35, "Hint");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatInput, i3.MatIcon, i1.MatSuffix, i1.MatHint], styles: [""] });
    return FormFieldAppearanceExample;
}());
export { FormFieldAppearanceExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldAppearanceExample, [{
        type: Component,
        args: [{
                selector: 'form-field-appearance-example',
                templateUrl: 'form-field-appearance-example.html',
                styleUrls: ['form-field-appearance-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS9mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1hcHBlYXJhbmNlL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEMsNENBQTRDO0FBQzVDO0lBQUE7S0FLMEM7O2dCQUx6QyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsV0FBVyxFQUFFLG9DQUFvQztvQkFDakQsU0FBUyxFQUFFLENBQUMsbUNBQW1DLENBQUM7aUJBQ2pEOzt3R0FDWSwwQkFBMEI7bUVBQTFCLDBCQUEwQjtZQ1J2Qyx5QkFDRTtZQUFBLHlDQUNFO1lBQUEsaUNBQVc7WUFBQSxpQ0FBaUI7WUFBQSxpQkFBWTtZQUN4QywyQkFDQTtZQUFBLG1DQUFvQjtZQUFBLHdDQUF3QjtZQUFBLGlCQUFXO1lBQ3ZELGdDQUFVO1lBQUEsb0JBQUk7WUFBQSxpQkFBVztZQUMzQixpQkFBaUI7WUFDbkIsaUJBQUk7WUFDSix5QkFDRTtZQUFBLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSxvQ0FBbUI7WUFBQSxpQkFBWTtZQUMxQyw0QkFDQTtZQUFBLG9DQUFvQjtZQUFBLHlDQUF3QjtZQUFBLGlCQUFXO1lBQ3ZELGlDQUFVO1lBQUEscUJBQUk7WUFBQSxpQkFBVztZQUMzQixpQkFBaUI7WUFDbkIsaUJBQUk7WUFDSiwwQkFDRTtZQUFBLDBDQUNFO1lBQUEsa0NBQVc7WUFBQSxnQ0FBZTtZQUFBLGlCQUFZO1lBQ3RDLDRCQUNBO1lBQUEsb0NBQW9CO1lBQUEseUNBQXdCO1lBQUEsaUJBQVc7WUFDdkQsaUNBQVU7WUFBQSxxQkFBSTtZQUFBLGlCQUFXO1lBQzNCLGlCQUFpQjtZQUNuQixpQkFBSTtZQUNKLDBCQUNFO1lBQUEsMENBQ0U7WUFBQSxrQ0FBVztZQUFBLG1DQUFrQjtZQUFBLGlCQUFZO1lBQ3pDLDRCQUNBO1lBQUEsb0NBQW9CO1lBQUEseUNBQXdCO1lBQUEsaUJBQVc7WUFDdkQsaUNBQVU7WUFBQSxxQkFBSTtZQUFBLGlCQUFXO1lBQzNCLGlCQUFpQjtZQUNuQixpQkFBSTs7cUNEL0JKO0NBUTBDLEFBTDFDLElBSzBDO1NBQTdCLDBCQUEwQjtrREFBMUIsMEJBQTBCO2NBTHRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxtQ0FBbUMsQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIGFwcGVhcmFuY2UgdmFyaWFudHMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwibGVnYWN5XCI+XG4gICAgPG1hdC1sYWJlbD5MZWdhY3kgZm9ybSBmaWVsZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIlBsYWNlaG9sZGVyXCI+XG4gICAgPG1hdC1pY29uIG1hdFN1ZmZpeD5zZW50aW1lbnRfdmVyeV9zYXRpc2ZpZWQ8L21hdC1pY29uPlxuICAgIDxtYXQtaGludD5IaW50PC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cInN0YW5kYXJkXCI+XG4gICAgPG1hdC1sYWJlbD5TdGFuZGFyZCBmb3JtIGZpZWxkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlbnRpbWVudF92ZXJ5X3NhdGlzZmllZDwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkhpbnQ8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgIDxtYXQtbGFiZWw+RmlsbCBmb3JtIGZpZWxkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlbnRpbWVudF92ZXJ5X3NhdGlzZmllZDwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkhpbnQ8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwib3V0bGluZVwiPlxuICAgIDxtYXQtbGFiZWw+T3V0bGluZSBmb3JtIGZpZWxkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGxhY2Vob2xkZXJcIj5cbiAgICA8bWF0LWljb24gbWF0U3VmZml4PnNlbnRpbWVudF92ZXJ5X3NhdGlzZmllZDwvbWF0LWljb24+XG4gICAgPG1hdC1oaW50PkhpbnQ8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9wPlxuIl19