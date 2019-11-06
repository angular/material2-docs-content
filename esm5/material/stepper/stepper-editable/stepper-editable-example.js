import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
var _c0 = ["stepper", ""];
function StepperEditableExample_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your name");
} }
function StepperEditableExample_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Fill out your address");
} }
function StepperEditableExample_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper with editable steps
 */
var StepperEditableExample = /** @class */ (function () {
    function StepperEditableExample(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isEditable = false;
    }
    StepperEditableExample.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
    };
    StepperEditableExample.decorators = [
        { type: Component, args: [{
                    selector: 'stepper-editable-example',
                    templateUrl: 'stepper-editable-example.html',
                    styleUrls: ['stepper-editable-example.css']
                },] },
    ];
    /** @nocollapse */
    StepperEditableExample.ctorParameters = function () { return [
        { type: FormBuilder }
    ]; };
    StepperEditableExample.ɵfac = function StepperEditableExample_Factory(t) { return new (t || StepperEditableExample)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    StepperEditableExample.ɵcmp = i0.ɵɵdefineComponent({ type: StepperEditableExample, selectors: [["stepper-editable-example"]], decls: 30, vars: 7, consts: [["mat-raised-button", "", 3, "click"], ["linear", ""], [3, "stepControl", "editable"], [3, "formGroup"], ["matStepLabel", ""], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["matInput", "", "placeholder", "Address", "formControlName", "secondCtrl", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["mat-button", "", 3, "click"]], template: function StepperEditableExample_Template(rf, ctx) { if (rf & 1) {
            var _r4 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_0_listener($event) { return ctx.isEditable = !ctx.isEditable; });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "mat-horizontal-stepper", 1, _c0);
            i0.ɵɵelementStart(4, "mat-step", 2);
            i0.ɵɵelementStart(5, "form", 3);
            i0.ɵɵtemplate(6, StepperEditableExample_ng_template_6_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementStart(7, "mat-form-field");
            i0.ɵɵelement(8, "input", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div");
            i0.ɵɵelementStart(10, "button", 6);
            i0.ɵɵtext(11, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-step", 2);
            i0.ɵɵelementStart(13, "form", 3);
            i0.ɵɵtemplate(14, StepperEditableExample_ng_template_14_Template, 1, 0, "ng-template", 4);
            i0.ɵɵelementStart(15, "mat-form-field");
            i0.ɵɵelement(16, "input", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "div");
            i0.ɵɵelementStart(18, "button", 8);
            i0.ɵɵtext(19, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "button", 6);
            i0.ɵɵtext(21, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "mat-step");
            i0.ɵɵtemplate(23, StepperEditableExample_ng_template_23_Template, 1, 0, "ng-template", 4);
            i0.ɵɵtext(24, " You are now done. ");
            i0.ɵɵelementStart(25, "div");
            i0.ɵɵelementStart(26, "button", 8);
            i0.ɵɵtext(27, "Back");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "button", 9);
            i0.ɵɵlistener("click", function StepperEditableExample_Template_button_click_28_listener($event) { i0.ɵɵrestoreView(_r4); var _r0 = i0.ɵɵreference(3); return _r0.reset(); });
            i0.ɵɵtext(29, "Reset");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", !ctx.isEditable ? "Enable edit mode" : "Disable edit mode", "\n");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("stepControl", ctx.firstFormGroup)("editable", ctx.isEditable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("stepControl", ctx.secondFormGroup)("editable", ctx.isEditable);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        } }, directives: [i2.MatButton, i3.MatHorizontalStepper, i3.MatStep, i1.ɵangular_packages_forms_forms_y, i1.NgControlStatusGroup, i1.FormGroupDirective, i3.MatStepLabel, i4.MatFormField, i5.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i3.MatStepperNext, i3.MatStepperPrevious], styles: [""] });
    return StepperEditableExample;
}());
export { StepperEditableExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(StepperEditableExample, [{
        type: Component,
        args: [{
                selector: 'stepper-editable-example',
                templateUrl: 'stepper-editable-example.html',
                styleUrls: ['stepper-editable-example.css']
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7OztJQ01sQyxrQ0FBa0I7OztJQVdsQixxQ0FBcUI7OztJQVd2QixvQkFBSTs7QUQxQmxDOztHQUVHO0FBQ0g7SUFVRSxnQ0FBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUU2QixDQUFDO0lBRWpELHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDN0MsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDdEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxXQUFXLEVBQUUsK0JBQStCO29CQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztpQkFDNUM7Ozs7Z0JBVE8sV0FBVzs7Z0dBVU4sc0JBQXNCOytEQUF0QixzQkFBc0I7O1lDWG5DLGlDQUNFO1lBRHdCLDZJQUFrQztZQUMxRCxZQUNGO1lBQUEsaUJBQVM7WUFFVCxzREFDRTtZQUFBLG1DQUNFO1lBQUEsK0JBQ0U7WUFBQSx1RkFBMEI7WUFDMUIsc0NBQ0U7WUFBQSwyQkFDRjtZQUFBLGlCQUFpQjtZQUNqQiwyQkFDRTtZQUFBLGtDQUFrQztZQUFBLHFCQUFJO1lBQUEsaUJBQVM7WUFDakQsaUJBQU07WUFDUixpQkFBTztZQUNULGlCQUFXO1lBQ1gsb0NBQ0U7WUFBQSxnQ0FDRTtZQUFBLHlGQUEwQjtZQUMxQix1Q0FDRTtZQUFBLDRCQUNGO1lBQUEsaUJBQWlCO1lBQ2pCLDRCQUNFO1lBQUEsa0NBQXNDO1lBQUEscUJBQUk7WUFBQSxpQkFBUztZQUNuRCxrQ0FBa0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ2pELGlCQUFNO1lBQ1IsaUJBQU87WUFDVCxpQkFBVztZQUNYLGlDQUNFO1lBQUEseUZBQTBCO1lBQzFCLG9DQUNBO1lBQUEsNEJBQ0U7WUFBQSxrQ0FBc0M7WUFBQSxxQkFBSTtZQUFBLGlCQUFTO1lBQ25ELGtDQUE2QztZQUExQiw4SkFBUyxXQUFlLElBQUM7WUFBQyxzQkFBSztZQUFBLGlCQUFTO1lBQzdELGlCQUFNO1lBQ1IsaUJBQVc7WUFDYixpQkFBeUI7O1lBbkN2QixlQUNGO1lBREUsNEZBQ0Y7WUFHWSxlQUE4QjtZQUE5QixnREFBOEIsNEJBQUE7WUFDaEMsZUFBNEI7WUFBNUIsOENBQTRCO1lBVTFCLGVBQStCO1lBQS9CLGlEQUErQiw0QkFBQTtZQUNqQyxlQUE2QjtZQUE3QiwrQ0FBNkI7O2lDRGpCdkM7Q0EwQkMsQUFwQkQsSUFvQkM7U0FmWSxzQkFBc0I7bUNBQXRCLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHdpdGggZWRpdGFibGUgc3RlcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZpcnN0Rm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHNlY29uZEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBpc0VkaXRhYmxlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgICB0aGlzLnNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIHNlY29uZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICB9KTtcbiAgfVxufVxuIiwiPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiaXNFZGl0YWJsZSA9ICFpc0VkaXRhYmxlXCI+XG4gIHt7IWlzRWRpdGFibGUgPyAnRW5hYmxlIGVkaXQgbW9kZScgOiAnRGlzYWJsZSBlZGl0IG1vZGUnfX1cbjwvYnV0dG9uPlxuXG48bWF0LWhvcml6b250YWwtc3RlcHBlciBsaW5lYXIgI3N0ZXBwZXI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIiBbZWRpdGFibGVdPVwiaXNFZGl0YWJsZVwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RmlsbCBvdXQgeW91ciBuYW1lPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGFzdCBuYW1lLCBGaXJzdCBuYW1lXCIgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3RDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJzZWNvbmRGb3JtR3JvdXBcIiBbZWRpdGFibGVdPVwiaXNFZGl0YWJsZVwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwic2Vjb25kRm9ybUdyb3VwXCI+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgYWRkcmVzczwvbmctdGVtcGxhdGU+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkFkZHJlc3NcIiBmb3JtQ29udHJvbE5hbWU9XCJzZWNvbmRDdHJsXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIFlvdSBhcmUgbm93IGRvbmUuXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtaG9yaXpvbnRhbC1zdGVwcGVyPlxuIl19