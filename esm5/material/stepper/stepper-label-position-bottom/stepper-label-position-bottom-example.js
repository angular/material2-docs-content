import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/stepper";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
function StepperLabelPositionBottomExample_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperLabelPositionBottomExample_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperLabelPositionBottomExample_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper label bottom position
 */
var StepperLabelPositionBottomExample = /** @class */ (function () {
    function StepperLabelPositionBottomExample(_formBuilder) {
        this._formBuilder = _formBuilder;
    }
    StepperLabelPositionBottomExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperLabelPositionBottomExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-label-position-bottom-example',
                    templateUrl: 'stepper-label-position-bottom-example.html',
                    styleUrls: ['stepper-label-position-bottom-example.css'],
                },] },
    ];
    /** @nocollapse */
    StepperLabelPositionBottomExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperLabelPositionBottomExample.ɵfac = function StepperLabelPositionBottomExample_Factory(t) { return new (t || StepperLabelPositionBottomExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperLabelPositionBottomExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperLabelPositionBottomExample, selectors: [["stepper-label-position-bottom-example"]], decls: 28, vars: 4, consts: [["labelPosition", "bottom"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["optional", "", 3, "stepControl"], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperLabelPositionBottomExample_Template(rf, ctx) { if (rf & 1) {
            var _r14 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-horizontal-stepper", 0, 1);
            i0.ɵɵelementStart(2, "mat-step", 2);
            i0.ɵɵelementStart(3, "form", 3);
            i0.ɵɵtemplate(4, StepperLabelPositionBottomExample_ng_template_4_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelement(6, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div");
            i0.ɵɵelementStart(8, "button", 6);
            i0.ɵɵtext(9, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-step", 7);
            i0.ɵɵelementStart(11, "form", 3);
            i0.ɵɵtemplate(12, StepperLabelPositionBottomExample_ng_template_12_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementStart(13, "mat-form-field");
            i0.ɵɵelement(14, "input", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div");
            i0.ɵɵelementStart(16, "button", 9);
            i0.ɵɵtext(17, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(18, "button", 6);
            i0.ɵɵtext(19, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-step");
            i0.ɵɵtemplate(21, StepperLabelPositionBottomExample_ng_template_21_Template, 1, 0, "ng-template", 4);
            i0.ɵɵtext(22, " You are now done. ");
            i0.ɵɵelementStart(23, "div");
            i0.ɵɵelementStart(24, "button", 9);
            i0.ɵɵtext(25, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "button", 10);
            i0.ɵɵlistener("click", function StepperLabelPositionBottomExample_Template_button_click_26_listener($event) { i0.ɵɵrestoreView(_r14); var _r10 = i0.ɵɵreference(1); return _r10.reset(); });
            i0.ɵɵtext(27, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatHorizontalStepper, i2.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i2.MatStepLabel, i3.MatFormField, i4.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i5.MatButton, i2.MatStepperNext, i2.MatStepperPrevious], styles: [""] });
    return StepperLabelPositionBottomExample;
}());
export { StepperLabelPositionBottomExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperLabelPositionBottomExample, [{
        type: Component,
        args: [{
                selector: 'stepper-label-position-bottom-example',
                templateUrl: 'stepper-label-position-bottom-example.html',
                styleUrls: ['stepper-label-position-bottom-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBYSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUNFNUIsa0NBQWtCOzs7SUFXbEIscUNBQXFCOzs7SUFXekIsb0JBQUk7O0FEdEJ0Qzs7R0FFRztBQUNIO0lBU0UsMkNBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVqRCxvREFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM1QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUNyQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzdDLFVBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWxCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVDQUF1QztvQkFDakQsV0FBVyxFQUFFLDRDQUE0QztvQkFDekQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7aUJBQ3pEOzs7O2dCQVRPLFdBQVc7O3NIQVVOLGlDQUFpQzswRUFBakMsaUNBQWlDOztZQ1g5QyxvREFDSTtZQUFBLG1DQUNJO1lBQUEsK0JBQ0k7WUFBQSxrR0FBMEI7WUFDMUIsc0NBQ0k7WUFBQSwyQkFDSjtZQUFBLGlCQUFpQjtZQUNqQiwyQkFDSTtZQUFBLGlDQUFrQztZQUFBLG9CQUFJO1lBQUEsaUJBQVM7WUFDbkQsaUJBQU07WUFDVixpQkFBTztZQUNYLGlCQUFXO1lBQ1gsb0NBQ0k7WUFBQSxnQ0FDSTtZQUFBLG9HQUEwQjtZQUMxQix1Q0FDSTtZQUFBLDRCQUNKO1lBQUEsaUJBQWlCO1lBQ2pCLDRCQUNJO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGlCQUFNO1lBQ1YsaUJBQU87WUFDWCxpQkFBVztZQUNYLGlDQUNJO1lBQUEsb0dBQTBCO1lBQzFCLG9DQUNBO1lBQUEsNEJBQ0k7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELG1DQUE2QztZQUExQiwyS0FBUyxZQUFlLElBQUM7WUFBQyxzQkFBSztZQUFBLGlCQUFTO1lBQy9ELGlCQUFNO1lBQ1YsaUJBQVc7WUFDZixpQkFBeUI7O1lBL0JYLGVBQThCO1lBQTlCLGdEQUE4QjtZQUM5QixlQUE0QjtZQUE1Qiw4Q0FBNEI7WUFVNUIsZUFBK0I7WUFBL0IsaURBQStCO1lBQy9CLGVBQTZCO1lBQTdCLCtDQUE2Qjs7NENEYjNDO0NBeUJDLEFBbkJELElBbUJDO1NBZFksaUNBQWlDO2tEQUFqQyxpQ0FBaUM7Y0FMN0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1Q0FBdUM7Z0JBQ2pELFdBQVcsRUFBRSw0Q0FBNEM7Z0JBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2FBQ3pEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciBsYWJlbCBib3R0b20gcG9zaXRpb25cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gICAgdGhpcy5zZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtaG9yaXpvbnRhbC1zdGVwcGVyIGxhYmVsUG9zaXRpb249XCJib3R0b21cIiAjc3RlcHBlcj5cbiAgICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cImZpcnN0Rm9ybUdyb3VwXCI+XG4gICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvbWF0LXN0ZXA+XG4gICAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIiBvcHRpb25hbD5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBhZGRyZXNzPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJBZGRyZXNzXCIgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kQ3RybFwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9tYXQtc3RlcD5cbiAgICA8bWF0LXN0ZXA+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgICAgIFlvdSBhcmUgbm93IGRvbmUuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic3RlcHBlci5yZXNldCgpXCI+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9tYXQtc3RlcD5cbjwvbWF0LWhvcml6b250YWwtc3RlcHBlcj5cbiJdfQ==