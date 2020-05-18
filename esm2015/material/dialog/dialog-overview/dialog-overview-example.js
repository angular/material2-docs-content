/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/dialog/dialog-overview/dialog-overview-example.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
import * as i6 from "@angular/common";
function DialogOverviewExample_li_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1, " You chose: ");
    i0.ɵɵelementStart(2, "i");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.animal);
} }
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.animal;
    /** @type {?} */
    DialogData.prototype.name;
}
/**
 * \@title Dialog Overview
 */
let DialogOverviewExample = /** @class */ (() => {
    /**
     * \@title Dialog Overview
     */
    class DialogOverviewExample {
        /**
         * @param {?} dialog
         */
        constructor(dialog) {
            this.dialog = dialog;
        }
        /**
         * @return {?}
         */
        openDialog() {
            /** @type {?} */
            const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                width: '250px',
                data: { name: this.name, animal: this.animal }
            });
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                console.log('The dialog was closed');
                this.animal = result;
            }));
        }
    }
    DialogOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-overview-example',
                    templateUrl: 'dialog-overview-example.html',
                    styleUrls: ['dialog-overview-example.css'],
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExample.ctorParameters = () => [
        { type: MatDialog }
    ];
    /** @nocollapse */ DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    /** @nocollapse */ DialogOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ol");
            i0.ɵɵelementStart(1, "li");
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "What's your name?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "input", 0);
            i0.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "li");
            i0.ɵɵelementStart(7, "button", 1);
            i0.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
            i0.ɵɵtext(8, "Pick one");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngModel", ctx.name);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.animal);
        } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatButton, i6.NgIf], styles: [""] });
    return DialogOverviewExample;
})();
export { DialogOverviewExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
                styleUrls: ['dialog-overview-example.css'],
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
if (false) {
    /** @type {?} */
    DialogOverviewExample.prototype.animal;
    /** @type {?} */
    DialogOverviewExample.prototype.name;
    /** @type {?} */
    DialogOverviewExample.prototype.dialog;
}
let DialogOverviewExampleDialog = /** @class */ (() => {
    class DialogOverviewExampleDialog {
        /**
         * @param {?} dialogRef
         * @param {?} data
         */
        constructor(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        onNoClick() {
            this.dialogRef.close();
        }
    }
    DialogOverviewExampleDialog.decorators = [
        { type: Component, args: [{
                    selector: 'dialog-overview-example-dialog',
                    templateUrl: 'dialog-overview-example-dialog.html',
                },] },
    ];
    /** @nocollapse */
    DialogOverviewExampleDialog.ctorParameters = () => [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ];
    /** @nocollapse */ DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    /** @nocollapse */ DialogOverviewExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4, "What's your favorite animal?");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-form-field");
            i0.ɵɵelementStart(6, "mat-label");
            i0.ɵɵtext(7, "Favorite Animal");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "input", 2);
            i0.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 3);
            i0.ɵɵelementStart(10, "button", 4);
            i0.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
            i0.ɵɵtext(11, "No Thanks");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "button", 5);
            i0.ɵɵtext(13, "Ok");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngModel", ctx.data.animal);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("mat-dialog-close", ctx.data.animal);
        } }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i5.MatButton, i1.MatDialogClose], encapsulation: 2 });
    return DialogOverviewExampleDialog;
})();
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
if (false) {
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.dialogRef;
    /** @type {?} */
    DialogOverviewExampleDialog.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7SUNTaEYsMEJBQ0U7SUFBQSw0QkFBVztJQUFBLHlCQUFHO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQzlCLGlCQUFLOzs7SUFEVyxlQUFVO0lBQVYsbUNBQVU7Ozs7O0FEUjVCLGdDQUdDOzs7SUFGQyw0QkFBZTs7SUFDZiwwQkFBYTs7Ozs7QUFNZjs7OztJQUFBLE1BS2EscUJBQXFCOzs7O1FBS2hDLFlBQW1CLE1BQWlCO1lBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBRyxDQUFDOzs7O1FBRXhDLFVBQVU7O2tCQUNGLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtnQkFDOUQsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7YUFDN0MsQ0FBQztZQUVGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1lBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDdkIsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDOzs7Z0JBdEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxXQUFXLEVBQUUsOEJBQThCO29CQUMzQyxTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztpQkFDM0M7Ozs7Z0JBZE8sU0FBUzs7aUhBZUoscUJBQXFCO2lGQUFyQixxQkFBcUI7WUNoQmxDLDBCQUNFO1lBQUEsMEJBQ0U7WUFBQSxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsaUNBQWlCO1lBQUEsaUJBQVk7WUFDeEMsZ0NBQ0Y7WUFEa0IsNElBQWtCO1lBQWxDLGlCQUNGO1lBQUEsaUJBQWlCO1lBQ25CLGlCQUFLO1lBQ0wsMEJBQ0U7WUFBQSxpQ0FBaUQ7WUFBdkIsa0dBQVMsZ0JBQVksSUFBQztZQUFDLHdCQUFRO1lBQUEsaUJBQVM7WUFDcEUsaUJBQUs7WUFDTCxvRUFDRTtZQUVKLGlCQUFLOztZQVRpQixlQUFrQjtZQUFsQixrQ0FBa0I7WUFNbEMsZUFBYztZQUFkLGlDQUFjOztnQ0RWcEI7S0FtQ0M7U0FuQlkscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2FBQzNDOzs7O0lBR0MsdUNBQWU7O0lBQ2YscUNBQWE7O0lBRUQsdUNBQXdCOztBQWdCdEM7SUFBQSxNQUlhLDJCQUEyQjs7Ozs7UUFFdEMsWUFDUyxTQUFvRCxFQUMzQixJQUFnQjtZQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUEyQztZQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQUcsQ0FBQzs7OztRQUV0RCxTQUFTO1lBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixDQUFDOzs7Z0JBWkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQ0FBZ0M7b0JBQzFDLFdBQVcsRUFBRSxxQ0FBcUM7aUJBQ25EOzs7O2dCQXZDa0IsWUFBWTtnREE0QzFCLE1BQU0sU0FBQyxlQUFlOzs2SEFKZCwyQkFBMkIsOERBSTVCLGVBQWU7dUZBSmQsMkJBQTJCO1lFekN4Qyw2QkFBcUI7WUFBQSxZQUFnQjtZQUFBLGlCQUFLO1lBQzFDLDhCQUNFO1lBQUEseUJBQUc7WUFBQSw0Q0FBNEI7WUFBQSxpQkFBSTtZQUNuQyxzQ0FDRTtZQUFBLGlDQUFXO1lBQUEsK0JBQWU7WUFBQSxpQkFBWTtZQUN0QyxnQ0FDRjtZQURrQix5SkFBeUI7WUFBekMsaUJBQ0Y7WUFBQSxpQkFBaUI7WUFDbkIsaUJBQU07WUFDTiw4QkFDRTtZQUFBLGtDQUF5QztZQUF0Qix5R0FBUyxlQUFXLElBQUM7WUFBQywwQkFBUztZQUFBLGlCQUFTO1lBQzNELGtDQUFvRTtZQUFBLG1CQUFFO1lBQUEsaUJBQVM7WUFDakYsaUJBQU07O1lBWGUsZUFBZ0I7WUFBaEIsK0NBQWdCO1lBS2pCLGVBQXlCO1lBQXpCLHlDQUF5QjtZQUt4QixlQUFnQztZQUFoQyxrREFBZ0M7O3NDRlZyRDtLQW1EQztTQVZZLDJCQUEyQjtrREFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxXQUFXLEVBQUUscUNBQXFDO2FBQ25EOztzQkFLSSxNQUFNO3VCQUFDLGVBQWU7Ozs7SUFEdkIsZ0RBQTJEOztJQUMzRCwyQ0FBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGUge1xuXG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEpIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cblxufVxuIiwiPG9sPlxuICA8bGk+XG4gICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgPG1hdC1sYWJlbD5XaGF0J3MgeW91ciBuYW1lPzwvbWF0LWxhYmVsPlxuICAgICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwibmFtZVwiPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gIDwvbGk+XG4gIDxsaT5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5QaWNrIG9uZTwvYnV0dG9uPlxuICA8L2xpPlxuICA8bGkgKm5nSWY9XCJhbmltYWxcIj5cbiAgICBZb3UgY2hvc2U6IDxpPnt7YW5pbWFsfX08L2k+XG4gIDwvbGk+XG48L29sPlxuIiwiPGgxIG1hdC1kaWFsb2ctdGl0bGU+SGkge3tkYXRhLm5hbWV9fTwvaDE+XG48ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cbiAgPHA+V2hhdCdzIHlvdXIgZmF2b3JpdGUgYW5pbWFsPzwvcD5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+RmF2b3JpdGUgQW5pbWFsPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFsobmdNb2RlbCldPVwiZGF0YS5hbmltYWxcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwib25Ob0NsaWNrKClcIj5ObyBUaGFua3M8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cImRhdGEuYW5pbWFsXCIgY2RrRm9jdXNJbml0aWFsPk9rPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==