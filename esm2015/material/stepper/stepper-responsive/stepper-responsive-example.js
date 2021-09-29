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
StepperResponsiveExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StepperResponsiveExample, selectors: [["stepper-responsive-example"]], decls: 44, vars: 14, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "example-stepper", 3, "orientation"], ["label", "Fill out your name", 3, "stepControl"], [3, "formGroup"], ["appearance", "fill"], ["matInput", "", "placeholder", "Last name, First name", "formControlName", "firstCtrl", "required", ""], ["mat-button", "", "matStepperNext", ""], ["label", "Fill out your address", 3, "stepControl"], ["matInput", "", "formControlName", "secondCtrl", "placeholder", "Ex. 1 Main St, New York, NY", "required", ""], ["mat-button", "", "matStepperPrevious", ""], ["label", "Fill out your phone number", 3, "stepControl"], ["matInput", "", "formControlName", "thirdCtrl", "placeholder", "Ex. 12345678", "required", ""], ["matStepLabel", ""]], template: function StepperResponsiveExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementContainerStart(0, 0);
        i0.ɵɵpipe(1, "async");
        i0.ɵɵtemplate(2, StepperResponsiveExample_div_2_Template, 2, 0, "div", 1);
        i0.ɵɵtemplate(3, StepperResponsiveExample_div_3_Template, 2, 0, "div", 1);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementStart(4, "mat-stepper", 2);
        i0.ɵɵpipe(5, "async");
        i0.ɵɵelementStart(6, "mat-step", 3);
        i0.ɵɵelementStart(7, "form", 4);
        i0.ɵɵelementStart(8, "mat-form-field", 5);
        i0.ɵɵelementStart(9, "mat-label");
        i0.ɵɵtext(10, "Name");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(11, "input", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "div");
        i0.ɵɵelementStart(13, "button", 7);
        i0.ɵɵtext(14, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-step", 8);
        i0.ɵɵelementStart(16, "form", 4);
        i0.ɵɵelementStart(17, "mat-form-field", 5);
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Address");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "input", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div");
        i0.ɵɵelementStart(22, "button", 10);
        i0.ɵɵtext(23, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(24, "button", 7);
        i0.ɵɵtext(25, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(26, "mat-step", 11);
        i0.ɵɵelementStart(27, "form", 4);
        i0.ɵɵelementStart(28, "mat-form-field", 5);
        i0.ɵɵelementStart(29, "mat-label");
        i0.ɵɵtext(30, "Phone number");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(31, "input", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(32, "div");
        i0.ɵɵelementStart(33, "button", 10);
        i0.ɵɵtext(34, "Back");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(35, "button", 7);
        i0.ɵɵtext(36, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(37, "mat-step");
        i0.ɵɵtemplate(38, StepperResponsiveExample_ng_template_38_Template, 1, 0, "ng-template", 13);
        i0.ɵɵelementStart(39, "p");
        i0.ɵɵtext(40, "You are now done.");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(41, "div");
        i0.ɵɵelementStart(42, "button", 10);
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
    } }, directives: [i3.NgSwitch, i3.NgSwitchCase, i4.MatStepper, i4.MatStep, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatFormField, i5.MatLabel, i6.MatInput, i1.DefaultValueAccessor, i1.NgControlStatus, i1.FormControlName, i1.RequiredValidator, i7.MatButton, i4.MatStepperNext, i4.MatStepperPrevious, i4.MatStepLabel], pipes: [i3.AsyncPipe], styles: [".example-stepper[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperResponsiveExample, [{
        type: Component,
        args: [{ selector: 'stepper-responsive-example', template: "<ng-container [ngSwitch]=\"stepperOrientation | async\">\n  <div *ngSwitchCase=\"'horizontal'\">Make your screen smaller to see a vertical stepper</div>\n  <div *ngSwitchCase=\"'vertical'\">Make your screen larger to see a horizontal stepper</div>\n</ng-container>\n\n<mat-stepper\n  class=\"example-stepper\"\n  [orientation]=\"(stepperOrientation | async)!\">\n  <mat-step [stepControl]=\"firstFormGroup\" label=\"Fill out your name\">\n    <form [formGroup]=\"firstFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" label=\"Fill out your address\">\n    <form [formGroup]=\"secondFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"thirdFormGroup\" label=\"Fill out your phone number\">\n    <form [formGroup]=\"thirdFormGroup\">\n      <mat-form-field appearance=\"fill\">\n        <mat-label>Phone number</mat-label>\n        <input matInput formControlName=\"thirdCtrl\" placeholder=\"Ex. 12345678\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".example-stepper {\n  margin-top: 8px;\n}\n\n.mat-form-field {\n  margin-top: 16px;\n}\n"] }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.BreakpointObserver }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1yZXNwb25zaXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItcmVzcG9uc2l2ZS9zdGVwcGVyLXJlc3BvbnNpdmUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1yZXNwb25zaXZlL3N0ZXBwZXItcmVzcG9uc2l2ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBQyxHQUFHLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztJQ0pqQywyQkFBa0M7SUFBQSxrRUFBa0Q7SUFBQSxpQkFBTTs7O0lBQzFGLDJCQUFnQztJQUFBLG1FQUFtRDtJQUFBLGlCQUFNOzs7SUEyQzdELG9CQUFJOztBRHRDbEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sd0JBQXdCO0lBWW5DLFlBQW9CLFlBQXlCLEVBQUUsa0JBQXNDO1FBQWpFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBWDdDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFDSCxtQkFBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztRQUlELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7YUFDdkUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7O2dHQWZVLHdCQUF3QjsyRUFBeEIsd0JBQXdCO1FDZnJDLGdDQUFzRDs7UUFDcEQseUVBQTBGO1FBQzFGLHlFQUF5RjtRQUMzRiwwQkFBZTtRQUVmLHNDQUVnRDs7UUFDOUMsbUNBQW9FO1FBQ2xFLCtCQUFtQztRQUNqQyx5Q0FBa0M7UUFDaEMsaUNBQVc7UUFBQSxxQkFBSTtRQUFBLGlCQUFZO1FBQzNCLDRCQUF5RjtRQUMzRixpQkFBaUI7UUFDakIsNEJBQUs7UUFDSCxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLG9DQUF3RTtRQUN0RSxnQ0FBb0M7UUFDbEMsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsd0JBQU87UUFBQSxpQkFBWTtRQUM5Qiw0QkFDZ0I7UUFDbEIsaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLHFDQUE0RTtRQUMxRSxnQ0FBbUM7UUFDakMsMENBQWtDO1FBQ2hDLGtDQUFXO1FBQUEsNkJBQVk7UUFBQSxpQkFBWTtRQUNuQyw2QkFBZ0Y7UUFDbEYsaUJBQWlCO1FBQ2pCLDRCQUFLO1FBQ0gsbUNBQXNDO1FBQUEscUJBQUk7UUFBQSxpQkFBUztRQUNuRCxrQ0FBa0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ2pELGlCQUFNO1FBQ1IsaUJBQU87UUFDVCxpQkFBVztRQUNYLGlDQUFVO1FBQ1IsNEZBQTRDO1FBQzVDLDBCQUFHO1FBQUEsa0NBQWlCO1FBQUEsaUJBQUk7UUFDeEIsNEJBQUs7UUFDSCxtQ0FBc0M7UUFBQSxxQkFBSTtRQUFBLGlCQUFTO1FBQ3JELGlCQUFNO1FBQ1IsaUJBQVc7UUFDYixpQkFBYzs7UUFuREEsd0VBQXVDO1FBQzdDLGVBQTBCO1FBQTFCLDJDQUEwQjtRQUMxQixlQUF3QjtRQUF4Qix5Q0FBd0I7UUFLOUIsZUFBNkM7UUFBN0MsMkVBQTZDO1FBQ25DLGVBQThCO1FBQTlCLGdEQUE4QjtRQUNoQyxlQUE0QjtRQUE1Qiw4Q0FBNEI7UUFVMUIsZUFBK0I7UUFBL0IsaURBQStCO1FBQ2pDLGVBQTZCO1FBQTdCLCtDQUE2QjtRQVkzQixnQkFBOEI7UUFBOUIsZ0RBQThCO1FBQ2hDLGVBQTRCO1FBQTVCLDhDQUE0Qjs7dUZEbEJ6Qix3QkFBd0I7Y0FMcEMsU0FBUzsyQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0JyZWFrcG9pbnRPYnNlcnZlcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQge1N0ZXBwZXJPcmllbnRhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBAdGl0bGUgU3RlcHBlciByZXNwb25zaXZlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItcmVzcG9uc2l2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLXJlc3BvbnNpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N0ZXBwZXItcmVzcG9uc2l2ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyUmVzcG9uc2l2ZUV4YW1wbGUge1xuICBmaXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBmaXJzdEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgfSk7XG4gIHNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gIH0pO1xuICB0aGlyZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICB0aGlyZEN0cmw6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgfSk7XG4gIHN0ZXBwZXJPcmllbnRhdGlvbjogT2JzZXJ2YWJsZTxTdGVwcGVyT3JpZW50YXRpb24+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgYnJlYWtwb2ludE9ic2VydmVyOiBCcmVha3BvaW50T2JzZXJ2ZXIpIHtcbiAgICB0aGlzLnN0ZXBwZXJPcmllbnRhdGlvbiA9IGJyZWFrcG9pbnRPYnNlcnZlci5vYnNlcnZlKCcobWluLXdpZHRoOiA4MDBweCknKVxuICAgICAgLnBpcGUobWFwKCh7bWF0Y2hlc30pID0+IG1hdGNoZXMgPyAnaG9yaXpvbnRhbCcgOiAndmVydGljYWwnKSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cInN0ZXBwZXJPcmllbnRhdGlvbiB8IGFzeW5jXCI+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidob3Jpem9udGFsJ1wiPk1ha2UgeW91ciBzY3JlZW4gc21hbGxlciB0byBzZWUgYSB2ZXJ0aWNhbCBzdGVwcGVyPC9kaXY+XG4gIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid2ZXJ0aWNhbCdcIj5NYWtlIHlvdXIgc2NyZWVuIGxhcmdlciB0byBzZWUgYSBob3Jpem9udGFsIHN0ZXBwZXI8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG48bWF0LXN0ZXBwZXJcbiAgY2xhc3M9XCJleGFtcGxlLXN0ZXBwZXJcIlxuICBbb3JpZW50YXRpb25dPVwiKHN0ZXBwZXJPcmllbnRhdGlvbiB8IGFzeW5jKSFcIj5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBuYW1lXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gICAgICAgIDxtYXQtbGFiZWw+TmFtZTwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWUsIEZpcnN0IG5hbWVcIiBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgW3N0ZXBDb250cm9sXT1cInNlY29uZEZvcm1Hcm91cFwiIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBhZGRyZXNzXCI+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJzZWNvbmRGb3JtR3JvdXBcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJ0aGlyZEZvcm1Hcm91cFwiIGxhYmVsPVwiRmlsbCBvdXQgeW91ciBwaG9uZSBudW1iZXJcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInRoaXJkRm9ybUdyb3VwXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5QaG9uZSBudW1iZXI8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInRoaXJkQ3RybFwiIHBsYWNlaG9sZGVyPVwiRXguIDEyMzQ1Njc4XCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5CYWNrPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcD5cbiAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkRvbmU8L25nLXRlbXBsYXRlPlxuICAgIDxwPllvdSBhcmUgbm93IGRvbmUuPC9wPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXN0ZXBwZXI+XG4iXX0=