import { Component, Inject } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import 'moment/locale/ja';
import 'moment/locale/fr';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/core";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/** @title Datepicker with different locale */
export class DatepickerLocaleExample {
    constructor(_adapter, _intl, _locale) {
        this._adapter = _adapter;
        this._intl = _intl;
        this._locale = _locale;
    }
    ngOnInit() {
        this.updateCloseButtonLabel('カレンダーを閉じる');
    }
    french() {
        this._locale = 'fr';
        this._adapter.setLocale(this._locale);
        this.updateCloseButtonLabel('Fermer le calendrier');
    }
    updateCloseButtonLabel(label) {
        this._intl.closeCalendarLabel = label;
        this._intl.changes.next();
    }
    getDateFormatString() {
        if (this._locale === 'ja-JP') {
            return 'YYYY/MM/DD';
        }
        else if (this._locale === 'fr') {
            return 'DD/MM/YYYY';
        }
        return '';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerLocaleExample, deps: [{ token: i1.DateAdapter }, { token: i2.MatDatepickerIntl }, { token: MAT_DATE_LOCALE }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-next.5", type: DatepickerLocaleExample, isStandalone: true, selector: "datepicker-locale-example", providers: [
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
            // to your app config. We provide it at the component level here, due to limitations
            // of our example generation script.
            provideMomentDateAdapter(),
        ], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
                        // to your app config. We provide it at the component level here, due to limitations
                        // of our example generation script.
                        provideMomentDateAdapter(),
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.DateAdapter }, { type: i2.MatDatepickerIntl }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxXQUFXLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sa0JBQWtCLENBQUM7Ozs7Ozs7QUFFMUIsOENBQThDO0FBa0I5QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1UsUUFBMEIsRUFDMUIsS0FBd0IsRUFDQyxPQUFlO1FBRnhDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMvQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7cUhBN0JVLHVCQUF1Qiw4RUFJeEIsZUFBZTt5R0FKZCx1QkFBdUIsd0VBYnZCO1lBQ1QsNkZBQTZGO1lBQzdGLGlGQUFpRjtZQUNqRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztZQUU3QyxtRkFBbUY7WUFDbkYsb0ZBQW9GO1lBQ3BGLG9DQUFvQztZQUNwQyx3QkFBd0IsRUFBRTtTQUMzQiwwQkN4QkgscVhBUUEscUdEa0JZLGtCQUFrQixtZ0JBQUUsY0FBYywwV0FBRSxtQkFBbUIsaWdCQUFFLGVBQWU7O2tHQUV2RSx1QkFBdUI7a0JBakJuQyxTQUFTOytCQUNFLDJCQUEyQixhQUcxQjt3QkFDVCw2RkFBNkY7d0JBQzdGLGlGQUFpRjt3QkFDakYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7d0JBRTdDLG1GQUFtRjt3QkFDbkYsb0ZBQW9GO3dCQUNwRixvQ0FBb0M7d0JBQ3BDLHdCQUF3QixFQUFFO3FCQUMzQixjQUNXLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLENBQUM7OzBCQU1oRixNQUFNOzJCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcm92aWRlTW9tZW50RGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0RGF0ZXBpY2tlckludGx9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2phJztcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9mcic7XG5cbi8qKiBAdGl0bGUgRGF0ZXBpY2tlciB3aXRoIGRpZmZlcmVudCBsb2NhbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBUaGUgbG9jYWxlIHdvdWxkIHR5cGljYWxseSBiZSBwcm92aWRlZCBvbiB0aGUgcm9vdCBtb2R1bGUgb2YgeW91ciBhcHBsaWNhdGlvbi4gV2UgZG8gaXQgYXRcbiAgICAvLyB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfTE9DQUxFLCB1c2VWYWx1ZTogJ2phLUpQJ30sXG5cbiAgICAvLyBNb21lbnQgY2FuIGJlIHByb3ZpZGVkIGdsb2JhbGx5IHRvIHlvdXIgYXBwIGJ5IGFkZGluZyBgcHJvdmlkZU1vbWVudERhdGVBZGFwdGVyYFxuICAgIC8vIHRvIHlvdXIgYXBwIGNvbmZpZy4gV2UgcHJvdmlkZSBpdCBhdCB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9uc1xuICAgIC8vIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHByb3ZpZGVNb21lbnREYXRlQWRhcHRlcigpLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+LFxuICAgIHByaXZhdGUgX2ludGw6IE1hdERhdGVwaWNrZXJJbnRsLFxuICAgIEBJbmplY3QoTUFUX0RBVEVfTE9DQUxFKSBwcml2YXRlIF9sb2NhbGU6IHN0cmluZyxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2xvc2VCdXR0b25MYWJlbCgn44Kr44Os44Oz44OA44O844KS6ZaJ44GY44KLJyk7XG4gIH1cblxuICBmcmVuY2goKSB7XG4gICAgdGhpcy5fbG9jYWxlID0gJ2ZyJztcbiAgICB0aGlzLl9hZGFwdGVyLnNldExvY2FsZSh0aGlzLl9sb2NhbGUpO1xuICAgIHRoaXMudXBkYXRlQ2xvc2VCdXR0b25MYWJlbCgnRmVybWVyIGxlIGNhbGVuZHJpZXInKTtcbiAgfVxuXG4gIHVwZGF0ZUNsb3NlQnV0dG9uTGFiZWwobGFiZWw6IHN0cmluZykge1xuICAgIHRoaXMuX2ludGwuY2xvc2VDYWxlbmRhckxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5faW50bC5jaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGdldERhdGVGb3JtYXRTdHJpbmcoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fbG9jYWxlID09PSAnamEtSlAnKSB7XG4gICAgICByZXR1cm4gJ1lZWVkvTU0vREQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5fbG9jYWxlID09PSAnZnInKSB7XG4gICAgICByZXR1cm4gJ0REL01NL1lZWVknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5EaWZmZXJlbnQgbG9jYWxlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcFwiPlxuICA8bWF0LWhpbnQ+e3tnZXREYXRlRm9ybWF0U3RyaW5nKCl9fTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZHA+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImZyZW5jaCgpXCI+RHluYW1pY2FsbHkgc3dpdGNoIHRvIEZyZW5jaDwvYnV0dG9uPlxuIl19