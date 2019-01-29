import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
var moment = _rollupMoment || _moment;
var ɵ0 = MAT_MOMENT_DATE_FORMATS;
/** @title Datepicker that uses Moment.js dates */
var DatepickerMomentExample = /** @class */ (function () {
    function DatepickerMomentExample() {
        // Datepicker takes `Moment` objects instead of `Date` objects.
        this.date = new FormControl(moment([2017, 0, 1]));
    }
    DatepickerMomentExample = tslib_1.__decorate([
        Component({
            selector: 'datepicker-moment-example',
            template: "<mat-form-field>\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Moment.js datepicker\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp></mat-datepicker>\n</mat-form-field>\n",
            providers: [
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: ɵ0 },
            ],
            styles: ["/** No CSS for this example */\n"]
        })
    ], DatepickerMomentExample);
    return DatepickerMomentExample;
}());
export { DatepickerMomentExample };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9kYXRlcGlja2VyLW1vbWVudC9kYXRlcGlja2VyLW1vbWVudC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxrQ0FBa0MsQ0FBQztBQUM1RixPQUFPLEVBQUMsV0FBVyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXRGLGdGQUFnRjtBQUNoRiw2RkFBNkY7QUFDN0YsaUdBQWlHO0FBQ2pHLDJCQUEyQjtBQUMzQixPQUFPLEtBQUssT0FBTyxNQUFNLFFBQVEsQ0FBQztBQUNsQyxnREFBZ0Q7QUFDaEQsT0FBTyxFQUFDLE9BQU8sSUFBSSxhQUFhLEVBQUMsTUFBTSxRQUFRLENBQUM7QUFFaEQsSUFBTSxNQUFNLEdBQUcsYUFBYSxJQUFJLE9BQU8sQ0FBQztTQVlFLHVCQUF1QjtBQVZqRSxrREFBa0Q7QUFhbEQ7SUFaQTtRQWFFLCtEQUErRDtRQUMvRCxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUhZLHVCQUF1QjtRQVpuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDJRQUE2QztZQUU3QyxTQUFTLEVBQUU7Z0JBQ1QsK0ZBQStGO2dCQUMvRiwrRkFBK0Y7Z0JBQy9GLDZEQUE2RDtnQkFDN0QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLENBQUMsRUFBQztnQkFDNUUsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxJQUF5QixFQUFDO2FBQy9EOztTQUNGLENBQUM7T0FDVyx1QkFBdUIsQ0FHbkM7SUFBRCw4QkFBQztDQUFBLEFBSEQsSUFHQztTQUhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TUFUX01PTUVOVF9EQVRFX0ZPUk1BVFMsIE1vbWVudERhdGVBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnR9IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IF9yb2xsdXBNb21lbnQgfHwgX21vbWVudDtcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHRoYXQgdXNlcyBNb21lbnQuanMgZGF0ZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItbW9tZW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItbW9tZW50LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLW1vbWVudC1leGFtcGxlLmNzcyddLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBgTW9tZW50RGF0ZUFkYXB0ZXJgIGFuZCBgTUFUX01PTUVOVF9EQVRFX0ZPUk1BVFNgIGNhbiBiZSBhdXRvbWF0aWNhbGx5IHByb3ZpZGVkIGJ5IGltcG9ydGluZ1xuICAgIC8vIGBNYXRNb21lbnREYXRlTW9kdWxlYCBpbiB5b3VyIGFwcGxpY2F0aW9ucyByb290IG1vZHVsZS4gV2UgcHJvdmlkZSBpdCBhdCB0aGUgY29tcG9uZW50IGxldmVsXG4gICAgLy8gaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtwcm92aWRlOiBEYXRlQWRhcHRlciwgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLCBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFXX0sXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNQVRfTU9NRU5UX0RBVEVfRk9STUFUU30sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb21lbnRFeGFtcGxlIHtcbiAgLy8gRGF0ZXBpY2tlciB0YWtlcyBgTW9tZW50YCBvYmplY3RzIGluc3RlYWQgb2YgYERhdGVgIG9iamVjdHMuXG4gIGRhdGUgPSBuZXcgRm9ybUNvbnRyb2wobW9tZW50KFsyMDE3LCAwLCAxXSkpO1xufVxuIl19