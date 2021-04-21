import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/layout";
import * as i3 from "@angular/common";
import * as i4 from "@angular/material/stepper";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
function StepperResponsiveExample_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Make your screen smaller to see a vertical stepper");
    i0.ɵɵelementEnd();
} }
function StepperResponsiveExample_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Make your screen larger to see a horizontal stepper");
    i0.ɵɵelementEnd();
} }
function StepperResponsiveExample_ng_template_38_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, "Done");
} }
/**
 * @title Stepper responsive
 */
export class StepperResponsiveExample {
    constructor(_formBuilder, breakpointObserver) {
        this._formBuilder = _formBuilder;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', Validators.required]
        });
        this.stepperOrientation = breakpointObserver.observe('(min-width: 800px)')
            .pipe(map(({ matches }) => matches ? 'horizontal' : 'vertical'));
    }
}
StepperResponsiveExample.ɵfac = function StepperResponsiveExample_Factory(t) { return new (t || StepperResponsiveExample)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.BreakpointObserver)); };
StepperResponsiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperResponsiveExample, selectors: [["stepper-responsive-example"]], decls: 44, vars: 14, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "example-stepper", 3, "orientation"], ["label", "Fill out your name", 3, "stepControl"], [3, "formGroup"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["label", "Fill out your phone number", 3, "stepControl"], ["matInput", "", "formControlName", "thirdCtrl", "placeholder", "Ex. 12345678", "required", ""], ["matStepLabel", ""]], template: function StepperResponsiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, StepperResponsiveExample_div_2_Template, 2, 0, "div", 1);
        i0.ɵɵtemplate(3, StepperResponsiveExample_div_3_Template, 2, 0, "div", 1);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(4, "mat-stepper", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementStart(6, "mat-step", 3);
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵelementStart(8, "mat-form-field");
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div");
        i0.ɵɵelementStart(13, "button", 6);
        i0.ɵɵtext(14, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-step", 7);
        i0.ɵɵelementStart(16, "form", 4);
        i0.ɵɵelementStart(17, "mat-form-field");
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 9);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 6);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step", 10);
        i0.ɵɵelementStart(27, "form", 4);
        i0.ɵɵelementStart(28, "mat-form-field");
        i0.ɵɵelementStart(29, "mat-label");
        i0.ɵɵtext(30, "Phone number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "input", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div");
        i0.ɵɵelementStart(33, "button", 9);
        i0.ɵɵtext(34, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 6);
        i0.ɵɵtext(36, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-step");
        i0.ɵɵtemplate(38, StepperResponsiveExample_ng_template_38_Template, 1, 0, "ng-template", 12);
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵelementStart(42, "button", 9);
        i0.ɵɵtext(43, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(1, 10, ctx.stepperOrientation));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngSwitchCase", "horizontal");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "vertical");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("orientation", i0.ɵɵpipeBind1(5, 12, ctx.stepperOrientation));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("stepControl", ctx.firstFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.firstFormGroup);
        i0.ɵɵadvance(8);
        i0.ɵɵproperty("stepControl", ctx.secondFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.secondFormGroup);
        i0.ɵɵadvance(10);
        i0.ɵɵproperty("stepControl", ctx.thirdFormGroup);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("formGroup", ctx.thirdFormGroup);
    } }, directives: [i3.NgSwitch, i3.NgSwitchCase, i4.MatStepper, i4.MatStep, i1.ɵangular_packages_forms_forms_bb, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatFormField, i5.MatLabel, i6.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i7.MatButton, i4.MatStepperNext, i4.MatStepperPrevious, i4.MatStepLabel], pipes: [i3.AsyncPipe], styles: [".example-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperResponsiveExample, [{
        type: Component,
        args: [{
                selector: 'stepper-responsive-example',
                templateUrl: 'stepper-responsive-example.html',
                styleUrls: ['stepper-responsive-example.css'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.BreakpointObserver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItcmVzcG9uc2l2ZS9zdGVwcGVyLXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1yZXNwb25zaXZlL3N0ZXBwZXItcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0pqQywyQkFBa0M7SUFBQSxrRUFBa0Q7SUFBQSxpQkFBTTs7O0lBQzFGLDJCQUFnQztJQUFBLG1FQUFtRDtJQUFBLGlCQUFNOzs7SUEyQzdELG9CQUFJOztBRHRDbEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DLFlBQW9CLFlBQXlCLEVBQUUsa0JBQXNDO1FBQWpFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBWDdDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFDSCxtQkFBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7YUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dHQWZVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDZnJDLGdDQUFzRDs7UUFDcEQseUVBQTBGO1FBQzFGLHlFQUF5RjtRQUMzRiwwQkFBZTtRQUVmLHNDQUVnRDs7UUFDOUMsbUNBQW9FO1FBQ2xFLCtCQUFtQztRQUNqQyxzQ0FBZ0I7UUFDZCxpQ0FBVztRQUFBLHFCQUFJO1FBQUEsaUJBQVk7UUFDM0IsNEJBQXlGO1FBQzNGLGlCQUFpQjtRQUNqQiw0QkFBSztRQUNILGtDQUFrQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDakQsaUJBQU07UUFDUixpQkFBTztRQUNULGlCQUFXO1FBQ1gsb0NBQXdFO1FBQ3RFLGdDQUFvQztRQUNsQyx1Q0FBZ0I7UUFDZCxrQ0FBVztRQUFBLHdCQUFPO1FBQUEsaUJBQVk7UUFDOUIsNEJBQ2dCO1FBQ2xCLGlCQUFpQjtRQUNqQiw0QkFBSztRQUNILGtDQUFzQztRQUFBLHFCQUFJO1FBQUEsaUJBQVM7UUFDbkQsa0NBQWtDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNqRCxpQkFBTTtRQUNSLGlCQUFPO1FBQ1QsaUJBQVc7UUFDWCxxQ0FBNEU7UUFDMUUsZ0NBQW1DO1FBQ2pDLHVDQUFnQjtRQUNkLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyw2QkFBZ0Y7UUFDbEYsaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsa0NBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLGlDQUFVO1FBQ1IsNEZBQTRDO1FBQzVDLDBCQUFHO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUk7UUFDeEIsNEJBQUs7UUFDSCxrQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3JELGlCQUFNO1FBQ1IsaUJBQVc7UUFDYixpQkFBYzs7UUFuREEsd0VBQXVDO1FBQzdDLGVBQTBCO1FBQTFCLDJDQUEwQjtRQUMxQixlQUF3QjtRQUF4Qix5Q0FBd0I7UUFLOUIsZUFBNkM7UUFBN0MsMkVBQTZDO1FBQ25DLGVBQThCO1FBQTlCLGdEQUE4QjtRQUNoQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFVMUIsZUFBK0I7UUFBL0IsaURBQStCO1FBQ2pDLGVBQTZCO1FBQTdCLCtDQUE2QjtRQVkzQixnQkFBOEI7UUFBOUIsZ0RBQThCO1FBQ2hDLGVBQTRCO1FBQTVCLDhDQUE0Qjs7dUZEbEJ6Qix3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLFdBQVcsRUFBRSxpQ0FBaUM7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO2FBQzlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCcmVha3BvaW50T2JzZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHtTdGVwcGVyT3JpZW50YXRpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgcmVzcG9uc2l2ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdGVwcGVyLXJlc3BvbnNpdmUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc3RlcHBlci1yZXNwb25zaXZlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLXJlc3BvbnNpdmUtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlclJlc3BvbnNpdmVFeGFtcGxlIHtcbiAgZmlyc3RGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgZmlyc3RDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gIH0pO1xuICBzZWNvbmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICB9KTtcbiAgdGhpcmRGb3JtR3JvdXAgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgdGhpcmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gIH0pO1xuICBzdGVwcGVyT3JpZW50YXRpb246IE9ic2VydmFibGU8U3RlcHBlck9yaWVudGF0aW9uPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIGJyZWFrcG9pbnRPYnNlcnZlcjogQnJlYWtwb2ludE9ic2VydmVyKSB7XG4gICAgdGhpcy5zdGVwcGVyT3JpZW50YXRpb24gPSBicmVha3BvaW50T2JzZXJ2ZXIub2JzZXJ2ZSgnKG1pbi13aWR0aDogODAwcHgpJylcbiAgICAgIC5waXBlKG1hcCgoe21hdGNoZXN9KSA9PiBtYXRjaGVzID8gJ2hvcml6b250YWwnIDogJ3ZlcnRpY2FsJykpO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJzdGVwcGVyT3JpZW50YXRpb24gfCBhc3luY1wiPlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInaG9yaXpvbnRhbCdcIj5NYWtlIHlvdXIgc2NyZWVuIHNtYWxsZXIgdG8gc2VlIGEgdmVydGljYWwgc3RlcHBlcjwvZGl2PlxuICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIndmVydGljYWwnXCI+TWFrZSB5b3VyIHNjcmVlbiBsYXJnZXIgdG8gc2VlIGEgaG9yaXpvbnRhbCBzdGVwcGVyPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuPG1hdC1zdGVwcGVyXG4gIGNsYXNzPVwiZXhhbXBsZS1zdGVwcGVyXCJcbiAgW29yaWVudGF0aW9uXT1cIihzdGVwcGVyT3JpZW50YXRpb24gfCBhc3luYykhXCI+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwiZmlyc3RGb3JtR3JvdXBcIiBsYWJlbD1cIkZpbGwgb3V0IHlvdXIgbmFtZVwiPlxuICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZmlyc3RGb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIGZvcm1Db250cm9sTmFtZT1cImZpcnN0Q3RybFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCIgbGFiZWw9XCJGaWxsIG91dCB5b3VyIGFkZHJlc3NcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJ0aGlyZEZvcm1Hcm91cFwiIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBwaG9uZSBudW1iZXJcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInRoaXJkRm9ybUdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDxtYXQtbGFiZWw+UGhvbmUgbnVtYmVyPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJ0aGlyZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxMjM0NTY3OFwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXA+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5Eb25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8cD5Zb3UgYXJlIG5vdyBkb25lLjwvcD5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbWF0LXN0ZXA+XG48L21hdC1zdGVwcGVyPlxuIl19