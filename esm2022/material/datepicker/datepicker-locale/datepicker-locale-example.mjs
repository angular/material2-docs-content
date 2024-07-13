import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import 'moment/locale/fr';
import 'moment/locale/ja';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/button";
/** @title Datepicker with different locale */
export class DatepickerLocaleExample {
    constructor() {
        this._adapter = inject(DateAdapter);
        this._intl = inject(MatDatepickerIntl);
        this._locale = signal(inject(MAT_DATE_LOCALE));
        this.dateFormatString = computed(() => {
            if (this._locale() === 'ja-JP') {
                return 'YYYY/MM/DD';
            }
            else if (this._locale() === 'fr') {
                return 'DD/MM/YYYY';
            }
            return '';
        });
    }
    ngOnInit() {
        this.updateCloseButtonLabel('カレンダーを閉じる');
    }
    french() {
        this._locale.set('fr');
        this._adapter.setLocale(this._locale());
        this.updateCloseButtonLabel('Fermer le calendrier');
    }
    updateCloseButtonLabel(label) {
        this._intl.closeCalendarLabel = label;
        this._intl.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DatepickerLocaleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: DatepickerLocaleExample, isStandalone: true, selector: "datepicker-locale-example", providers: [
            // The locale would typically be provided on the root module of your application. We do it at
            // the component level here, due to limitations of our example generation script.
            { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
            // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
            // to your app config. We provide it at the component level here, due to limitations
            // of our example generation script.
            provideMomentDateAdapter(),
        ], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\" />\n  <mat-hint>{{dateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // Moment can be provided globally to your app by adding `provideMomentDateAdapter`
                        // to your app config. We provide it at the component level here, due to limitations
                        // of our example generation script.
                        provideMomentDateAdapter(),
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\" />\n  <mat-hint>{{dateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDMUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDcEUsT0FBTyxFQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDcEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxrQkFBa0IsQ0FBQzs7Ozs7O0FBRTFCLDhDQUE4QztBQW1COUMsTUFBTSxPQUFPLHVCQUF1QjtJQWxCcEM7UUFtQm1CLGFBQVEsR0FBRyxNQUFNLENBQWdDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELFVBQUssR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNsQyxZQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBVSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQzNELHFCQUFnQixHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssT0FBTyxFQUFFLENBQUM7Z0JBQy9CLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLENBQUM7aUJBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUM7Z0JBQ25DLE9BQU8sWUFBWSxDQUFDO1lBQ3RCLENBQUM7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0tBZ0JKO0lBZEMsUUFBUTtRQUNOLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxLQUFhO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzVCLENBQUM7OEdBMUJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHdFQWR2QjtZQUNULDZGQUE2RjtZQUM3RixpRkFBaUY7WUFDakYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFFN0MsbUZBQW1GO1lBQ25GLG9GQUFvRjtZQUNwRixvQ0FBb0M7WUFDcEMsd0JBQXdCLEVBQUU7U0FDM0IsMEJDeEJILG9YQVFBLHFHRGtCWSxrQkFBa0IsbWdCQUFFLGNBQWMsMFdBQUUsbUJBQW1CLGlnQkFBRSxlQUFlOzsyRkFHdkUsdUJBQXVCO2tCQWxCbkMsU0FBUzsrQkFDRSwyQkFBMkIsYUFHMUI7d0JBQ1QsNkZBQTZGO3dCQUM3RixpRkFBaUY7d0JBQ2pGLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO3dCQUU3QyxtRkFBbUY7d0JBQ25GLG9GQUFvRjt3QkFDcEYsb0NBQW9DO3dCQUNwQyx3QkFBd0IsRUFBRTtxQkFDM0IsY0FDVyxJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDLG1CQUNsRSx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBPbkluaXQsIGNvbXB1dGVkLCBpbmplY3QsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Byb3ZpZGVNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VySW50bCwgTWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZnInO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2phJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZGlmZmVyZW50IGxvY2FsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmNzcycsXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFRoZSBsb2NhbGUgd291bGQgdHlwaWNhbGx5IGJlIHByb3ZpZGVkIG9uIHRoZSByb290IG1vZHVsZSBvZiB5b3VyIGFwcGxpY2F0aW9uLiBXZSBkbyBpdCBhdFxuICAgIC8vIHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnamEtSlAnfSxcblxuICAgIC8vIE1vbWVudCBjYW4gYmUgcHJvdmlkZWQgZ2xvYmFsbHkgdG8geW91ciBhcHAgYnkgYWRkaW5nIGBwcm92aWRlTW9tZW50RGF0ZUFkYXB0ZXJgXG4gICAgLy8gdG8geW91ciBhcHAgY29uZmlnLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zXG4gICAgLy8gb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAgcHJvdmlkZU1vbWVudERhdGVBZGFwdGVyKCksXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHJlYWRvbmx5IF9hZGFwdGVyID0gaW5qZWN0PERhdGVBZGFwdGVyPHVua25vd24sIHVua25vd24+PihEYXRlQWRhcHRlcik7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2ludGwgPSBpbmplY3QoTWF0RGF0ZXBpY2tlckludGwpO1xuICBwcml2YXRlIHJlYWRvbmx5IF9sb2NhbGUgPSBzaWduYWwoaW5qZWN0PHVua25vd24+KE1BVF9EQVRFX0xPQ0FMRSkpO1xuICByZWFkb25seSBkYXRlRm9ybWF0U3RyaW5nID0gY29tcHV0ZWQoKCkgPT4ge1xuICAgIGlmICh0aGlzLl9sb2NhbGUoKSA9PT0gJ2phLUpQJykge1xuICAgICAgcmV0dXJuICdZWVlZL01NL0REJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsZSgpID09PSAnZnInKSB7XG4gICAgICByZXR1cm4gJ0REL01NL1lZWVknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0pO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlQ2xvc2VCdXR0b25MYWJlbCgn44Kr44Os44Oz44OA44O844KS6ZaJ44GY44KLJyk7XG4gIH1cblxuICBmcmVuY2goKSB7XG4gICAgdGhpcy5fbG9jYWxlLnNldCgnZnInKTtcbiAgICB0aGlzLl9hZGFwdGVyLnNldExvY2FsZSh0aGlzLl9sb2NhbGUoKSk7XG4gICAgdGhpcy51cGRhdGVDbG9zZUJ1dHRvbkxhYmVsKCdGZXJtZXIgbGUgY2FsZW5kcmllcicpO1xuICB9XG5cbiAgdXBkYXRlQ2xvc2VCdXR0b25MYWJlbChsYWJlbDogc3RyaW5nKSB7XG4gICAgdGhpcy5faW50bC5jbG9zZUNhbGVuZGFyTGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLl9pbnRsLmNoYW5nZXMubmV4dCgpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RGlmZmVyZW50IGxvY2FsZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHBcIiAvPlxuICA8bWF0LWhpbnQ+e3tkYXRlRm9ybWF0U3RyaW5nKCl9fTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZHA+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImZyZW5jaCgpXCI+RHluYW1pY2FsbHkgc3dpdGNoIHRvIEZyZW5jaDwvYnV0dG9uPlxuIl19