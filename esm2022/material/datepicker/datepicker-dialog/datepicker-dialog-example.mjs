import { ChangeDetectionStrategy, Component, Inject, model } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DATE_FORMATS, MAT_NATIVE_DATE_FORMATS, provideNativeDateAdapter, } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
/** @title Datepicker inside a MatDialog */
export class DatepickerDialogExample {
    constructor(dialog) {
        this.dialog = dialog;
        this.selectedDate = model(null);
    }
    openDialog() {
        const dialogRef = this.dialog.open(DatepickerDialogExampleDialog, {
            minWidth: '500px',
            data: { selectedDate: this.selectedDate() },
        });
        dialogRef.afterClosed().subscribe(result => {
            this.selectedDate.set(result);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: DatepickerDialogExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.1.0-next.3", type: DatepickerDialogExample, isStandalone: true, selector: "datepicker-dialog-example", inputs: { selectedDate: { classPropertyName: "selectedDate", publicName: "selectedDate", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { selectedDate: "selectedDateChange" }, ngImport: i0, template: "<p>Selected date: {{selectedDate()}}</p>\n<button mat-flat-button color=\"primary\" (click)=\"openDialog()\">Open Dialog</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: DatepickerDialogExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-dialog-example', standalone: true, imports: [MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<p>Selected date: {{selectedDate()}}</p>\n<button mat-flat-button color=\"primary\" (click)=\"openDialog()\">Open Dialog</button>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DatepickerDialogExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.date = new FormControl(new Date());
        this.date.setValue(data.selectedDate);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: DatepickerDialogExampleDialog, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.3", type: DatepickerDialogExampleDialog, isStandalone: true, selector: "datepicker-dialog-example", providers: [
            provideNativeDateAdapter(),
            { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
        ], ngImport: i0, template: "<h2 mat-dialog-title>Datepicker in a Dialog</h2>\n<mat-dialog-content align=\"center\">\n  <mat-form-field>\n    <mat-label>Select a date</mat-label>\n    <input matInput [matDatepicker]=\"picker\" [formControl]=\"date\">\n    <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Clear</button>\n  <button mat-button [mat-dialog-close]=\"date.value\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i4.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: DatepickerDialogExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-dialog-example', standalone: true, imports: [
                        MatDatepickerModule,
                        MatDialogModule,
                        MatButtonModule,
                        MatFormFieldModule,
                        MatInputModule,
                        ReactiveFormsModule,
                    ], providers: [
                        provideNativeDateAdapter(),
                        { provide: MAT_DATE_FORMATS, useValue: MAT_NATIVE_DATE_FORMATS },
                    ], template: "<h2 mat-dialog-title>Datepicker in a Dialog</h2>\n<mat-dialog-content align=\"center\">\n  <mat-form-field>\n    <mat-label>Select a date</mat-label>\n    <input matInput [matDatepicker]=\"picker\" [formControl]=\"date\">\n    <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>Clear</button>\n  <button mat-button [mat-dialog-close]=\"date.value\" cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaWFsb2cvZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaWFsb2cvZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpYWxvZy9kYXRlcGlja2VyLWRpYWxvZy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRixPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsdUJBQXVCLEVBQ3ZCLHdCQUF3QixHQUN6QixNQUFNLHdCQUF3QixDQUFDO0FBQ2hDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxlQUFlLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7O0FBTXZELDJDQUEyQztBQVEzQyxNQUFNLE9BQU8sdUJBQXVCO0lBR2xDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFGcEMsaUJBQVksR0FBRyxLQUFLLENBQWMsSUFBSSxDQUFDLENBQUM7SUFFRCxDQUFDO0lBRXhDLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRTtZQUNoRSxRQUFRLEVBQUUsT0FBTztZQUNqQixJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO3FIQWRVLHVCQUF1Qjt5R0FBdkIsdUJBQXVCLCtSQ3pCcEMscUlBRUEsMkNEb0JZLGVBQWU7O2tHQUdkLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDLG1CQUNULHVCQUF1QixDQUFDLE1BQU07O0FBb0NqRCxNQUFNLE9BQU8sNkJBQTZCO0lBR3hDLFlBQ1MsU0FBc0QsRUFDN0IsSUFBZ0I7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBNkM7UUFDN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUp6QyxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBTTFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN4QyxDQUFDO3FIQVJVLDZCQUE2Qiw4Q0FLOUIsZUFBZTt5R0FMZCw2QkFBNkIsd0VBTDdCO1lBQ1Qsd0JBQXdCLEVBQUU7WUFDMUIsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFDO1NBQy9ELDBCRXpESCx1a0JBYUEsMkNGa0NJLG1CQUFtQixpZ0JBQ25CLGVBQWUsK25CQUNmLGVBQWUsMk5BQ2Ysa0JBQWtCLDJhQUNsQixjQUFjLDBXQUNkLG1CQUFtQjs7a0dBT1YsNkJBQTZCO2tCQWpCekMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQO3dCQUNQLG1CQUFtQjt3QkFDbkIsZUFBZTt3QkFDZixlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxtQkFBbUI7cUJBQ3BCLGFBQ1U7d0JBQ1Qsd0JBQXdCLEVBQUU7d0JBQzFCLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztxQkFDL0Q7OzBCQU9FLE1BQU07MkJBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5qZWN0LCBtb2RlbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7XG4gIE1BVF9EQVRFX0ZPUk1BVFMsXG4gIE1BVF9OQVRJVkVfREFURV9GT1JNQVRTLFxuICBwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2csIE1hdERpYWxvZ01vZHVsZSwgTWF0RGlhbG9nUmVmfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBzZWxlY3RlZERhdGU6IERhdGU7XG59XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciBpbnNpZGUgYSBNYXREaWFsb2cgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZGlhbG9nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGlhbG9nLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpYWxvZ0V4YW1wbGUge1xuICBzZWxlY3RlZERhdGUgPSBtb2RlbDxEYXRlIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEYXRlcGlja2VyRGlhbG9nRXhhbXBsZURpYWxvZywge1xuICAgICAgbWluV2lkdGg6ICc1MDBweCcsXG4gICAgICBkYXRhOiB7c2VsZWN0ZWREYXRlOiB0aGlzLnNlbGVjdGVkRGF0ZSgpfSxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGUuc2V0KHJlc3VsdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1kaWFsb2ctZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdERpYWxvZ01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcigpLFxuICAgIHtwcm92aWRlOiBNQVRfREFURV9GT1JNQVRTLCB1c2VWYWx1ZTogTUFUX05BVElWRV9EQVRFX0ZPUk1BVFN9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyRGlhbG9nRXhhbXBsZURpYWxvZyB7XG4gIHJlYWRvbmx5IGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobmV3IERhdGUoKSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERhdGVwaWNrZXJEaWFsb2dFeGFtcGxlRGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXG4gICkge1xuICAgIHRoaXMuZGF0ZS5zZXRWYWx1ZShkYXRhLnNlbGVjdGVkRGF0ZSk7XG4gIH1cbn1cbiIsIjxwPlNlbGVjdGVkIGRhdGU6IHt7c2VsZWN0ZWREYXRlKCl9fTwvcD5cbjxidXR0b24gbWF0LWZsYXQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5PcGVuIERpYWxvZzwvYnV0dG9uPlxuIiwiPGgyIG1hdC1kaWFsb2ctdGl0bGU+RGF0ZXBpY2tlciBpbiBhIERpYWxvZzwvaDI+XG48bWF0LWRpYWxvZy1jb250ZW50IGFsaWduPVwiY2VudGVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlNlbGVjdCBhIGRhdGU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwicGlja2VyXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuPC9tYXQtZGlhbG9nLWNvbnRlbnQ+XG48bWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0LWRpYWxvZy1jbG9zZT5DbGVhcjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b24gW21hdC1kaWFsb2ctY2xvc2VdPVwiZGF0ZS52YWx1ZVwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+XG4iXX0=