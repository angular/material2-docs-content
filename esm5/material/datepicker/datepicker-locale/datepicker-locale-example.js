import { Component } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS, } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
/** @title Datepicker with different locale */
var DatepickerLocaleExample = /** @class */ (function () {
    function DatepickerLocaleExample(_adapter) {
        this._adapter = _adapter;
    }
    DatepickerLocaleExample.prototype.french = function () {
        this._adapter.setLocale('fr');
    };
    DatepickerLocaleExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-locale-example',
                    template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n",
                    providers: [
                        // The locale would typically be provided on the root module of your application. We do it at
                        // the component level here, due to limitations of our example generation script.
                        { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                        // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                        // `MatMomentDateModule` in your applications root module. We provide it at the component level
                        // here, due to limitations of our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
                    ],
                    styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    DatepickerLocaleExample.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return DatepickerLocaleExample;
}());
export { DatepickerLocaleExample };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItbG9jYWxlL2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQiwrQkFBK0IsR0FDaEMsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO1NBb0I1Qyx1QkFBdUI7QUFsQmpFLDhDQUE4QztBQUM5QztJQXFCRSxpQ0FBb0IsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDO0lBRWxELHdDQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGlVQUE2QztvQkFFN0MsU0FBUyxFQUFFO3dCQUNULDZGQUE2Rjt3QkFDN0YsaUZBQWlGO3dCQUNqRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQzt3QkFFN0MsK0ZBQStGO3dCQUMvRiwrRkFBK0Y7d0JBQy9GLDZEQUE2RDt3QkFDN0Q7NEJBQ0UsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7NEJBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQzt5QkFDekQ7d0JBQ0QsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUF5QixFQUFDO3FCQUMvRDs7aUJBQ0Y7Ozs7Z0JBdEJPLFdBQVc7O0lBNkJuQiw4QkFBQztDQUFBLEFBMUJELElBMEJDO1NBTlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsXG4gIE1vbWVudERhdGVBZGFwdGVyLFxuICBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBkaWZmZXJlbnQgbG9jYWxlICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gVGhlIGxvY2FsZSB3b3VsZCB0eXBpY2FsbHkgYmUgcHJvdmlkZWQgb24gdGhlIHJvb3QgbW9kdWxlIG9mIHlvdXIgYXBwbGljYXRpb24uIFdlIGRvIGl0IGF0XG4gICAgLy8gdGhlIGNvbXBvbmVudCBsZXZlbCBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0xPQ0FMRSwgdXNlVmFsdWU6ICdqYS1KUCd9LFxuXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBhbmQgYE1BVF9NT01FTlRfREFURV9GT1JNQVRTYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmdcbiAgICAvLyBgTWF0TW9tZW50RGF0ZU1vZHVsZWAgaW4geW91ciBhcHBsaWNhdGlvbnMgcm9vdCBtb2R1bGUuIFdlIHByb3ZpZGUgaXQgYXQgdGhlIGNvbXBvbmVudCBsZXZlbFxuICAgIC8vIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZiBvdXIgZXhhbXBsZSBnZW5lcmF0aW9uIHNjcmlwdC5cbiAgICB7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBNb21lbnREYXRlQWRhcHRlcixcbiAgICAgIGRlcHM6IFtNQVRfREFURV9MT0NBTEUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlNdXG4gICAgfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hZGFwdGVyOiBEYXRlQWRhcHRlcjxhbnk+KSB7fVxuXG4gIGZyZW5jaCgpIHtcbiAgICB0aGlzLl9hZGFwdGVyLnNldExvY2FsZSgnZnInKTtcbiAgfVxufVxuIl19