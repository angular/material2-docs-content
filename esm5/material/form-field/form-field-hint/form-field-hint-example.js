import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
var _c0 = ["input", ""];
/** @title Form field with hints */
var FormFieldHintExample = /** @class */ (function () {
    function FormFieldHintExample() {
    }
    FormFieldHintExample.decorators = [
        { type: Component, args: [{
                    selector: 'form-field-hint-example',
                    templateUrl: 'form-field-hint-example.html',
                    styleUrls: ['form-field-hint-example.css'],
                },] },
    ];
    FormFieldHintExample.ɵfac = function FormFieldHintExample_Factory(t) { return new (t || FormFieldHintExample)(); };
    FormFieldHintExample.ɵcmp = i0.ɵɵdefineComponent({ type: FormFieldHintExample, selectors: [["form-field-hint-example"]], decls: 12, vars: 1, consts: [[1, "example-container"], ["hintLabel", "Max 10 characters"], ["matInput", "", "maxlength", "10", "placeholder", "Enter some input"], ["align", "end"], ["placeholder", "Select me"], ["value", "option"]], template: function FormFieldHintExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "mat-form-field", 1);
            i0.ɵɵelement(2, "input", 2, _c0);
            i0.ɵɵelementStart(4, "mat-hint", 3);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field");
            i0.ɵɵelementStart(7, "mat-select", 4);
            i0.ɵɵelementStart(8, "mat-option", 5);
            i0.ɵɵtext(9, "Option");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-hint", 3);
            i0.ɵɵtext(11, "Here's the dropdown arrow ^");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r1 = i0.ɵɵreference(3);
            i0.ɵɵadvance(5);
            i0.ɵɵtextInterpolate1("", (_r1.value == null ? null : _r1.value.length) || 0, "/10");
        } }, directives: [i1.MatFormField, i2.MatInput, i1.MatHint, i3.MatSelect, i4.MatOption], styles: [".example-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.example-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return FormFieldHintExample;
}());
export { FormFieldHintExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(FormFieldHintExample, [{
        type: Component,
        args: [{
                selector: 'form-field-hint-example',
                templateUrl: 'form-field-hint-example.html',
                styleUrls: ['form-field-hint-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUV4QyxtQ0FBbUM7QUFDbkM7SUFBQTtLQUtvQzs7Z0JBTG5DLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7OzRGQUNZLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lDUmpDLDhCQUNFO1lBQUEseUNBQ0U7WUFBQSxnQ0FDQTtZQUFBLG1DQUFzQjtZQUFBLFlBQStCO1lBQUEsaUJBQVc7WUFDbEUsaUJBQWlCO1lBRWpCLHNDQUNFO1lBQUEscUNBQ0U7WUFBQSxxQ0FBMkI7WUFBQSxzQkFBTTtZQUFBLGlCQUFhO1lBQ2hELGlCQUFhO1lBQ2Isb0NBQXNCO1lBQUEsNENBQTJCO1lBQUEsaUJBQVc7WUFDOUQsaUJBQWlCO1lBQ25CLGlCQUFNOzs7WUFUb0IsZUFBK0I7WUFBL0Isb0ZBQStCOzsrQkRIekQ7Q0FRb0MsQUFMcEMsSUFLb0M7U0FBdkIsb0JBQW9CO21DQUFwQixvQkFBb0I7Y0FMaEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBoaW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1oaW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEhpbnRFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGhpbnRMYWJlbD1cIk1heCAxMCBjaGFyYWN0ZXJzXCI+XG4gICAgPGlucHV0IG1hdElucHV0ICNpbnB1dCBtYXhsZW5ndGg9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgc29tZSBpbnB1dFwiPlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7aW5wdXQudmFsdWU/Lmxlbmd0aCB8fCAwfX0vMTA8L21hdC1oaW50PlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LXNlbGVjdCBwbGFjZWhvbGRlcj1cIlNlbGVjdCBtZVwiPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgPC9tYXQtc2VsZWN0PlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPkhlcmUncyB0aGUgZHJvcGRvd24gYXJyb3cgXjwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==