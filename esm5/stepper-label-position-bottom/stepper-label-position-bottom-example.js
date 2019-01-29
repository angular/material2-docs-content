import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    StepperLabelPositionBottomExample = tslib_1.__decorate([
        Component({
            selector: 'stepper-label-position-bottom-example',
            template: "<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Fill out your name</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step [stepControl]=\"secondFormGroup\" optional>\n        <form [formGroup]=\"secondFormGroup\">\n            <ng-template matStepLabel>Fill out your address</ng-template>\n            <mat-form-field>\n                <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n            </mat-form-field>\n            <div>\n                <button mat-button matStepperPrevious>Back</button>\n                <button mat-button matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step>\n    <mat-step>\n        <ng-template matStepLabel>Done</ng-template>\n        You are now done.\n        <div>\n            <button mat-button matStepperPrevious>Back</button>\n            <button mat-button (click)=\"stepper.reset()\">Reset</button>\n        </div>\n    </mat-step>\n</mat-horizontal-stepper>\n",
            styles: ["/** No CSS for this example */\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], StepperLabelPositionBottomExample);
    return StepperLabelPositionBottomExample;
}());
export { StepperLabelPositionBottomExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEU7O0dBRUc7QUFNSDtJQUlFLDJDQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFakQsb0RBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDNUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUM3QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBYlUsaUNBQWlDO1FBTDdDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1Q0FBdUM7WUFDakQsazRDQUF5RDs7U0FFMUQsQ0FBQztpREFLa0MsV0FBVztPQUpsQyxpQ0FBaUMsQ0FjN0M7SUFBRCx3Q0FBQztDQUFBLEFBZEQsSUFjQztTQWRZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIFN0ZXBwZXIgbGFiZWwgYm90dG9tIHBvc2l0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBmaXJzdEZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICBzZWNvbmRGb3JtR3JvdXA6IEZvcm1Hcm91cDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maXJzdEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICAgIHRoaXMuc2Vjb25kRm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgc2Vjb25kQ3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXVxuICAgIH0pO1xuICB9XG59XG4iXX0=