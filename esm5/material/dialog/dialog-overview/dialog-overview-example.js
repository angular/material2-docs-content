import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
function DialogOverviewExample_li_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1, " You chose: ");
    i0.ɵɵelementStart(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r3.animal);
} }
/**
 * @title Dialog Overview
 */
var DialogOverviewExample = /** @class */ (function () {
    function DialogOverviewExample(dialog) {
        this.dialog = dialog;
    }
    DialogOverviewExample.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-overview-example',
                    templateUrl: 'dialog-overview-example.html',
                    styleUrls: ['dialog-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExample.ctorParameters = function () { return [
        { type: MatDialog }
    ]; };
    DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 8, vars: 2, consts: [["matInput", "", "placeholder", "What's your name?", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol");
            i0.ɵɵelementStart(1, "li");
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "input", 0);
            i0.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_3_listener($event) { return ctx.name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "li");
            i0.ɵɵelementStart(5, "button", 1);
            i0.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_5_listener($event) { return ctx.openDialog(); });
            i0.ɵɵtext(6, "Pick one");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, DialogOverviewExample_li_7_Template, 4, 1, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.animal);
        } }, directives: [i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatButton, i6.NgIf], styles: [""] });
    return DialogOverviewExample;
}());
export { DialogOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-overview-example-dialog',
                    templateUrl: 'dialog-overview-example-dialog.html',
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExampleDialog.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    DialogOverviewExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "What's your favorite animal?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_6_listener($event) { return ctx.data.animal = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 3);
            i0.ɵɵelementStart(8, "button", 4);
            i0.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_8_listener($event) { return ctx.onNoClick(); });
            i0.ɵɵtext(9, "No Thanks");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "button", 5);
            i0.ɵɵtext(11, "Ok");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.data.animal);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("mat-dialog-close", ctx.data.animal);
        } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.MatFormField, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i5.MatButton, i1.MatDialogClose], encapsulation: 2 });
    return DialogOverviewExampleDialog;
}());
export { DialogOverviewExampleDialog };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0lDUWhGLDBCQUNFO0lBQUEsNEJBQVc7SUFBQSx5QkFBRztJQUFBLFlBQVU7SUFBQSxpQkFBSTtJQUM5QixpQkFBSzs7O0lBRFcsZUFBVTtJQUFWLG1DQUFVOztBREY1Qjs7R0FFRztBQUNIO0lBVUUsK0JBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLDBDQUFVLEdBQVY7UUFBQSxpQkFVQztRQVRDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixFQUFFO1lBQzlELEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7Ozs7Z0JBZE8sU0FBUzs7OEZBZUoscUJBQXFCOzhEQUFyQixxQkFBcUI7WUNoQmxDLDBCQUNFO1lBQUEsMEJBQ0U7WUFBQSxzQ0FDRTtZQUFBLGdDQUNGO1lBRGtCLDRJQUFrQjtZQUFsQyxpQkFDRjtZQUFBLGlCQUFpQjtZQUNuQixpQkFBSztZQUNMLDBCQUNFO1lBQUEsaUNBQWlEO1lBQXZCLHdHQUFTLGdCQUFZLElBQUM7WUFBQyx3QkFBUTtZQUFBLGlCQUFTO1lBQ3BFLGlCQUFLO1lBQ0wsb0VBQ0U7WUFFSixpQkFBSzs7WUFUaUIsZUFBa0I7WUFBbEIsa0NBQWtCO1lBTWxDLGVBQWM7WUFBZCxpQ0FBYzs7Z0NEVHBCO0NBbUNDLEFBeEJELElBd0JDO1NBbkJZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxXQUFXLEVBQUUsOEJBQThCO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQzthQUMzQzs7QUFzQkQ7SUFNRSxxQ0FDUyxTQUFvRCxFQUMzQixJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQztJQUV0RCwrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOztnQkFaRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsV0FBVyxFQUFFLHFDQUFxQztpQkFDbkQ7Ozs7Z0JBdkNrQixZQUFZO2dEQTRDMUIsTUFBTSxTQUFDLGVBQWU7OzBHQUpkLDJCQUEyQiw4REFJNUIsZUFBZTtvRUFKZCwyQkFBMkI7WUV6Q3hDLDZCQUFxQjtZQUFBLFlBQWdCO1lBQUEsaUJBQUs7WUFDMUMsOEJBQ0U7WUFBQSx5QkFBRztZQUFBLDRDQUE0QjtZQUFBLGlCQUFJO1lBQ25DLHNDQUNFO1lBQUEsZ0NBQ0Y7WUFEa0IseUpBQXlCO1lBQXpDLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ25CLGlCQUFNO1lBQ04sOEJBQ0U7WUFBQSxpQ0FBeUM7WUFBdEIsOEdBQVMsZUFBVyxJQUFDO1lBQUMseUJBQVM7WUFBQSxpQkFBUztZQUMzRCxrQ0FBb0U7WUFBQSxtQkFBRTtZQUFBLGlCQUFTO1lBQ2pGLGlCQUFNOztZQVZlLGVBQWdCO1lBQWhCLCtDQUFnQjtZQUlqQixlQUF5QjtZQUF6Qix5Q0FBeUI7WUFLeEIsZUFBZ0M7WUFBaEMsa0RBQWdDOztzQ0ZUckQ7Q0FtREMsQUFkRCxJQWNDO1NBVlksMkJBQTJCO2tEQUEzQiwyQkFBMkI7Y0FKdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7YUFDbkQ7O3NCQUtJLE1BQU07dUJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSB7XG5cbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7bmFtZTogdGhpcy5uYW1lLCBhbmltYWw6IHRoaXMuYW5pbWFsfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCI8b2w+XG4gIDxsaT5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJXaGF0J3MgeW91ciBuYW1lP1wiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5QaWNrIG9uZTwvYnV0dG9uPlxuICA8L2xpPlxuICA8bGkgKm5nSWY9XCJhbmltYWxcIj5cbiAgICBZb3UgY2hvc2U6IDxpPnt7YW5pbWFsfX08L2k+XG4gIDwvbGk+XG48L29sPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+SGkge3tkYXRhLm5hbWV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHA+V2hhdCdzIHlvdXIgZmF2b3JpdGUgYW5pbWFsPzwvcD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImRhdGEuYW5pbWFsXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uTm9DbGljaygpXCI+Tm8gVGhhbmtzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJkYXRhLmFuaW1hbFwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=