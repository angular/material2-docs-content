import { Component, Inject } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
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
            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
            // `MatMomentDateModule` in your applications root module. We provide it at the component level
            // here, due to limitations of our example generation script.
            {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
            },
            { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
        ], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerLocaleExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-locale-example', providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
                    ], standalone: true, imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule], template: "<mat-form-field>\n  <mat-label>Different locale</mat-label>\n  <input matInput [matDatepicker]=\"dp\">\n  <mat-hint>{{getDateFormatString()}}</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.DateAdapter }, { type: i2.MatDatepickerIntl }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DATE_LOCALE]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFTLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLCtCQUErQixHQUNoQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ3BGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sa0JBQWtCLENBQUM7Ozs7Ozs7QUFFMUIsOENBQThDO0FBc0I5QyxNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQ1UsUUFBMEIsRUFDMUIsS0FBd0IsRUFDQyxPQUFlO1FBRnhDLGFBQVEsR0FBUixRQUFRLENBQWtCO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ0MsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUMvQyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsc0JBQXNCLENBQUMsS0FBYTtRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixPQUFPLFlBQVksQ0FBQztRQUN0QixDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ2pDLE9BQU8sWUFBWSxDQUFDO1FBQ3RCLENBQUM7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7cUhBN0JVLHVCQUF1Qiw4RUFJeEIsZUFBZTt5R0FKZCx1QkFBdUIsd0VBakJ2QjtZQUNULDZGQUE2RjtZQUM3RixpRkFBaUY7WUFDakYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7WUFDN0MsK0ZBQStGO1lBQy9GLCtGQUErRjtZQUMvRiw2REFBNkQ7WUFDN0Q7Z0JBQ0UsT0FBTyxFQUFFLFdBQVc7Z0JBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQzthQUN6RDtZQUNELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztTQUMvRCwwQkNoQ0gscVhBUUEscUdEMEJZLGtCQUFrQixtZ0JBQUUsY0FBYywwV0FBRSxtQkFBbUIsaWdCQUFFLGVBQWU7O2tHQUV2RSx1QkFBdUI7a0JBckJuQyxTQUFTOytCQUNFLDJCQUEyQixhQUcxQjt3QkFDVCw2RkFBNkY7d0JBQzdGLGlGQUFpRjt3QkFDakYsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUM7d0JBQzdDLCtGQUErRjt3QkFDL0YsK0ZBQStGO3dCQUMvRiw2REFBNkQ7d0JBQzdEOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixRQUFRLEVBQUUsaUJBQWlCOzRCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7eUJBQ3pEO3dCQUNELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSx1QkFBdUIsRUFBQztxQkFDL0QsY0FDVyxJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsZUFBZSxDQUFDOzswQkFNaEYsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1BVF9NT01FTlRfREFURV9GT1JNQVRTLFxuICBNb21lbnREYXRlQWRhcHRlcixcbiAgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlLCBNYXREYXRlcGlja2VySW50bH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvamEnO1xuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2ZyJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZGlmZmVyZW50IGxvY2FsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFRoZSBsb2NhbGUgd291bGQgdHlwaWNhbGx5IGJlIHByb3ZpZGVkIG9uIHRoZSByb290IG1vZHVsZSBvZiB5b3VyIGFwcGxpY2F0aW9uLiBXZSBkbyBpdCBhdFxuICAgIC8vIHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnamEtSlAnfSxcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGFuZCBgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFNgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZ1xuICAgIC8vIGBNYXRNb21lbnREYXRlTW9kdWxlYCBpbiB5b3VyIGFwcGxpY2F0aW9ucyByb290IG1vZHVsZS4gV2UgcHJvdmlkZSBpdCBhdCB0aGUgY29tcG9uZW50IGxldmVsXG4gICAgLy8gaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU10sXG4gICAgfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfSxcbiAgXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJMb2NhbGVFeGFtcGxlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfYWRhcHRlcjogRGF0ZUFkYXB0ZXI8YW55PixcbiAgICBwcml2YXRlIF9pbnRsOiBNYXREYXRlcGlja2VySW50bCxcbiAgICBASW5qZWN0KE1BVF9EQVRFX0xPQ0FMRSkgcHJpdmF0ZSBfbG9jYWxlOiBzdHJpbmcsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnVwZGF0ZUNsb3NlQnV0dG9uTGFiZWwoJ+OCq+ODrOODs+ODgOODvOOCkumWieOBmOOCiycpO1xuICB9XG5cbiAgZnJlbmNoKCkge1xuICAgIHRoaXMuX2xvY2FsZSA9ICdmcic7XG4gICAgdGhpcy5fYWRhcHRlci5zZXRMb2NhbGUodGhpcy5fbG9jYWxlKTtcbiAgICB0aGlzLnVwZGF0ZUNsb3NlQnV0dG9uTGFiZWwoJ0Zlcm1lciBsZSBjYWxlbmRyaWVyJyk7XG4gIH1cblxuICB1cGRhdGVDbG9zZUJ1dHRvbkxhYmVsKGxhYmVsOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnRsLmNsb3NlQ2FsZW5kYXJMYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuX2ludGwuY2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBnZXREYXRlRm9ybWF0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX2xvY2FsZSA9PT0gJ2phLUpQJykge1xuICAgICAgcmV0dXJuICdZWVlZL01NL0REJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xvY2FsZSA9PT0gJ2ZyJykge1xuICAgICAgcmV0dXJuICdERC9NTS9ZWVlZJztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RGlmZmVyZW50IGxvY2FsZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHBcIj5cbiAgPG1hdC1oaW50Pnt7Z2V0RGF0ZUZvcm1hdFN0cmluZygpfX08L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJkcFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI2RwPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJmcmVuY2goKVwiPkR5bmFtaWNhbGx5IHN3aXRjaCB0byBGcmVuY2g8L2J1dHRvbj5cbiJdfQ==