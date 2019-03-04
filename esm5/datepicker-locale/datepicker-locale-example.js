import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
/** @title Datepicker with different locale */
var DatepickerLocaleExample = /** @class */ (function () {
    function DatepickerLocaleExample(adapter) {
        this.adapter = adapter;
    }
    DatepickerLocaleExample.prototype.french = function () {
        this.adapter.setLocale('fr');
    };
    DatepickerLocaleExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-locale-example',
            template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Different locale\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n\n<button mat-button (click)=\"french()\">Dynamically switch to French</button>\n",
            providers: [
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
            ],
            styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"]
        }),
        tslib_1.__metadata("design:paramtypes", [DateAdapter])
    ], DatepickerLocaleExample);
    return DatepickerLocaleExample;
}());
export { DatepickerLocaleExample };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kYXRlcGlja2VyLWxvY2FsZS9kYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzVGLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7U0FnQjVDLHVCQUF1QjtBQWRqRSw4Q0FBOEM7QUFpQjlDO0lBQ0UsaUNBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO0lBQUcsQ0FBQztJQUVqRCx3Q0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUxVLHVCQUF1QjtRQWhCbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDJCQUEyQjtZQUNyQyxpVUFBNkM7WUFFN0MsU0FBUyxFQUFFO2dCQUNULDZGQUE2RjtnQkFDN0YsaUZBQWlGO2dCQUNqRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQztnQkFFN0MsK0ZBQStGO2dCQUMvRiwrRkFBK0Y7Z0JBQy9GLDZEQUE2RDtnQkFDN0QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQztnQkFDNUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUF5QixFQUFDO2FBQy9EOztTQUNGLENBQUM7aURBRTZCLFdBQVc7T0FEN0IsdUJBQXVCLENBTW5DO0lBQUQsOEJBQUM7Q0FBQSxBQU5ELElBTUM7U0FOWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01BVF9NT01FTlRfREFURV9GT1JNQVRTLCBNb21lbnREYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtbW9tZW50LWFkYXB0ZXInO1xuaW1wb3J0IHtEYXRlQWRhcHRlciwgTUFUX0RBVEVfRk9STUFUUywgTUFUX0RBVEVfTE9DQUxFfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZGlmZmVyZW50IGxvY2FsZSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItbG9jYWxlLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIFRoZSBsb2NhbGUgd291bGQgdHlwaWNhbGx5IGJlIHByb3ZpZGVkIG9uIHRoZSByb290IG1vZHVsZSBvZiB5b3VyIGFwcGxpY2F0aW9uLiBXZSBkbyBpdCBhdFxuICAgIC8vIHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnamEtSlAnfSxcblxuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgYW5kIGBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU2AgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nXG4gICAgLy8gYE1hdE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXIgYXBwbGljYXRpb25zIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWxcbiAgICAvLyBoZXJlLCBkdWUgdG8gbGltaXRhdGlvbnMgb2Ygb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge3Byb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdfSxcbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1BVF9NT01FTlRfREFURV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkYXB0ZXI6IERhdGVBZGFwdGVyPGFueT4pIHt9XG5cbiAgZnJlbmNoKCkge1xuICAgIHRoaXMuYWRhcHRlci5zZXRMb2NhbGUoJ2ZyJyk7XG4gIH1cbn1cbiJdfQ==