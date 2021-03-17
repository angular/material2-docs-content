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
 * @title Dialog Overview
 */
export class DialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
}
DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
DialogOverviewExample.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i2.MatFormField, i2.MatLabel, i3.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.MatButton, i6.NgIf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogOverviewExample, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example',
                templateUrl: 'dialog-overview-example.html',
            }]
    }], function () { return [{ type: i1.MatDialog }]; }, null); })();
export class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
DialogOverviewExampleDialog.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) { if (rf & 1) {
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
        type: Component,
        args: [{
                selector: 'dialog-overview-example-dialog',
                templateUrl: 'dialog-overview-example-dialog.html',
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7O0lDU2hGLDBCQUFtQjtJQUNqQiw0QkFBVztJQUFBLHlCQUFHO0lBQUEsWUFBVTtJQUFBLGlCQUFJO0lBQzlCLGlCQUFLOzs7SUFEVyxlQUFVO0lBQVYsbUNBQVU7O0FESDVCOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjtJQUtoQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVO1FBQ1IsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUU7WUFDOUQsS0FBSyxFQUFFLE9BQU87WUFDZCxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OzBGQWpCVSxxQkFBcUI7d0VBQXJCLHFCQUFxQjtRQ2ZsQywwQkFBSTtRQUNGLDBCQUFJO1FBQ0Ysc0NBQWdCO1FBQ2QsaUNBQVc7UUFBQSxpQ0FBaUI7UUFBQSxpQkFBWTtRQUN4QyxnQ0FBbUM7UUFBbkIsNElBQWtCO1FBQWxDLGlCQUFtQztRQUNyQyxpQkFBaUI7UUFDbkIsaUJBQUs7UUFDTCwwQkFBSTtRQUNGLGlDQUFpRDtRQUF2QixrR0FBUyxnQkFBWSxJQUFDO1FBQUMsd0JBQVE7UUFBQSxpQkFBUztRQUNwRSxpQkFBSztRQUNMLG9FQUVLO1FBQ1AsaUJBQUs7O1FBVGlCLGVBQWtCO1FBQWxCLGtDQUFrQjtRQU1qQyxlQUFZO1FBQVosaUNBQVk7O3VGREtOLHFCQUFxQjtjQUpqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLDhCQUE4QjthQUM1Qzs7QUEwQkQsTUFBTSxPQUFPLDJCQUEyQjtJQUV0QyxZQUNTLFNBQW9ELEVBQzNCLElBQWdCO1FBRHpDLGNBQVMsR0FBVCxTQUFTLENBQTJDO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXRELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7O3NHQVJVLDJCQUEyQiw4REFJNUIsZUFBZTs4RUFKZCwyQkFBMkI7UUV4Q3hDLDZCQUFxQjtRQUFBLFlBQWdCO1FBQUEsaUJBQUs7UUFDMUMsOEJBQXdCO1FBQ3RCLHlCQUFHO1FBQUEsNENBQTRCO1FBQUEsaUJBQUk7UUFDbkMsc0NBQWdCO1FBQ2QsaUNBQVc7UUFBQSwrQkFBZTtRQUFBLGlCQUFZO1FBQ3RDLGdDQUEwQztRQUExQix5SkFBeUI7UUFBekMsaUJBQTBDO1FBQzVDLGlCQUFpQjtRQUNuQixpQkFBTTtRQUNOLDhCQUF3QjtRQUN0QixrQ0FBeUM7UUFBdEIseUdBQVMsZUFBVyxJQUFDO1FBQUMsMEJBQVM7UUFBQSxpQkFBUztRQUMzRCxrQ0FBb0U7UUFBQSxtQkFBRTtRQUFBLGlCQUFTO1FBQ2pGLGlCQUFNOztRQVhlLGVBQWdCO1FBQWhCLCtDQUFnQjtRQUtqQixlQUF5QjtRQUF6Qix5Q0FBeUI7UUFLeEIsZUFBZ0M7UUFBaEMsa0RBQWdDOzt1RkY4QnhDLDJCQUEyQjtjQUp2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsV0FBVyxFQUFFLHFDQUFxQzthQUNuRDs7c0JBS0ksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFuaW1hbDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyBPdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ092ZXJ2aWV3RXhhbXBsZSB7XG5cbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7bmFtZTogdGhpcy5uYW1lLCBhbmltYWw6IHRoaXMuYW5pbWFsfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuXG59XG4iLCI8b2w+XG4gIDxsaT5cbiAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICA8bWF0LWxhYmVsPldoYXQncyB5b3VyIG5hbWU/PC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJuYW1lXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlBpY2sgb25lPC9idXR0b24+XG4gIDwvbGk+XG4gIDxsaSAqbmdJZj1cImFuaW1hbFwiPlxuICAgIFlvdSBjaG9zZTogPGk+e3thbmltYWx9fTwvaT5cbiAgPC9saT5cbjwvb2w+XG4iLCI8aDEgbWF0LWRpYWxvZy10aXRsZT5IaSB7e2RhdGEubmFtZX19PC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlxuICA8cD5XaGF0J3MgeW91ciBmYXZvcml0ZSBhbmltYWw/PC9wPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5GYXZvcml0ZSBBbmltYWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgWyhuZ01vZGVsKV09XCJkYXRhLmFuaW1hbFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9kaXY+XG48ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJvbk5vQ2xpY2soKVwiPk5vIFRoYW5rczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwiZGF0YS5hbmltYWxcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cbjwvZGl2PlxuIl19