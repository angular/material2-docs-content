import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment } from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/forms";
var moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export var MY_FORMATS = {
    parse: {
        dateInput: 'LL',
    },
    display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker with custom formats */
var DatepickerFormatsExample = /** @class */ (function () {
    function DatepickerFormatsExample() {
        this.date = new FormControl(moment());
    }
    DatepickerFormatsExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-formats-example',
                    templateUrl: 'datepicker-formats-example.html',
                    styleUrls: ['datepicker-formats-example.css'],
                    providers: [
                        // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                        // application's root module. We provide it at the component level here, due to limitations of
                        // our example generation script.
                        {
                            provide: DateAdapter,
                            useClass: MomentDateAdapter,
                            deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                        },
                        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                    ],
                },] },
    ];
    DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
    DatepickerFormatsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Verbose datepicker", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelement(3, "mat-datepicker", null, 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r14 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r14)("formControl", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r14);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [""] });
    return DatepickerFormatsExample;
}());
export { DatepickerFormatsExample };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerFormatsExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-formats-example',
                templateUrl: 'datepicker-formats-example.html',
                styleUrls: ['datepicker-formats-example.css'],
                providers: [
                    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                    // application's root module. We provide it at the component level here, due to limitations of
                    // our example generation script.
                    {
                        provide: DateAdapter,
                        useClass: MomentDateAdapter,
                        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                    },
                    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZm9ybWF0cy9kYXRlcGlja2VyLWZvcm1hdHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1mb3JtYXRzL2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGlCQUFpQixFQUFFLCtCQUErQixFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDcEcsT0FBTyxFQUFDLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RixnRkFBZ0Y7QUFDaEYsNkZBQTZGO0FBQzdGLGlHQUFpRztBQUNqRywyQkFBMkI7QUFDM0IsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsZ0RBQWdEO0FBQ2hELE9BQU8sRUFBQyxPQUFPLElBQUksYUFBYSxFQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7QUFFaEQsSUFBTSxNQUFNLEdBQUcsYUFBYSxJQUFJLE9BQU8sQ0FBQztBQUV4QywyREFBMkQ7QUFDM0QsaURBQWlEO0FBQ2pELE1BQU0sQ0FBQyxJQUFNLFVBQVUsR0FBRztJQUN4QixLQUFLLEVBQUU7UUFDTCxTQUFTLEVBQUUsSUFBSTtLQUNoQjtJQUNELE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRSxJQUFJO1FBQ2YsY0FBYyxFQUFFLFVBQVU7UUFDMUIsYUFBYSxFQUFFLElBQUk7UUFDbkIsa0JBQWtCLEVBQUUsV0FBVztLQUNoQztDQUNGLENBQUM7QUFFRiw0Q0FBNEM7QUFDNUM7SUFBQTtRQWtCRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztLQUNsQzs7Z0JBbkJBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxXQUFXLEVBQUUsaUNBQWlDO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDN0MsU0FBUyxFQUFFO3dCQUNULDRGQUE0Rjt3QkFDNUYsOEZBQThGO3dCQUM5RixpQ0FBaUM7d0JBQ2pDOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixRQUFRLEVBQUUsaUJBQWlCOzRCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7eUJBQ3pEO3dCQUVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7cUJBQ2xEO2lCQUNGOztvR0FDWSx3QkFBd0I7aUVBQXhCLHdCQUF3QixnRkFieEI7Z0JBQ1QsNEZBQTRGO2dCQUM1Riw4RkFBOEY7Z0JBQzlGLGlDQUFpQztnQkFDakM7b0JBQ0UsT0FBTyxFQUFFLFdBQVc7b0JBQ3BCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLElBQUksRUFBRSxDQUFDLGVBQWUsRUFBRSwrQkFBK0IsQ0FBQztpQkFDekQ7Z0JBRUQsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQzthQUNsRDtZQzdDSCxzQ0FDRTtZQUFBLDJCQUNBO1lBQUEsMkNBQW9FO1lBQ3BFLDBDQUFxQztZQUN2QyxpQkFBaUI7OztZQUhDLGVBQW9CO1lBQXBCLG9DQUFvQix5QkFBQTtZQUNILGVBQVU7WUFBViwwQkFBVTs7bUNERjdDO0NBaURDLEFBbkJELElBbUJDO1NBRlksd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FqQnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxXQUFXLEVBQUUsaUNBQWlDO2dCQUM5QyxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztnQkFDN0MsU0FBUyxFQUFFO29CQUNULDRGQUE0RjtvQkFDNUYsOEZBQThGO29CQUM5RixpQ0FBaUM7b0JBQ2pDO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsaUJBQWlCO3dCQUMzQixJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsK0JBQStCLENBQUM7cUJBQ3pEO29CQUVELEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUM7aUJBQ2xEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01vbWVudERhdGVBZGFwdGVyLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5pbXBvcnQge0RhdGVBZGFwdGVyLCBNQVRfREFURV9GT1JNQVRTLCBNQVRfREFURV9MT0NBTEV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnR9IGZyb20gJ21vbWVudCc7XG5cbmNvbnN0IG1vbWVudCA9IF9yb2xsdXBNb21lbnQgfHwgX21vbWVudDtcblxuLy8gU2VlIHRoZSBNb21lbnQuanMgZG9jcyBmb3IgdGhlIG1lYW5pbmcgb2YgdGhlc2UgZm9ybWF0czpcbi8vIGh0dHBzOi8vbW9tZW50anMuY29tL2RvY3MvIy9kaXNwbGF5aW5nL2Zvcm1hdC9cbmV4cG9ydCBjb25zdCBNWV9GT1JNQVRTID0ge1xuICBwYXJzZToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgfSxcbiAgZGlzcGxheToge1xuICAgIGRhdGVJbnB1dDogJ0xMJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgd2l0aCBjdXN0b20gZm9ybWF0cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZm9ybWF0cy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUuY3NzJ10sXG4gIHByb3ZpZGVyczogW1xuICAgIC8vIGBNb21lbnREYXRlQWRhcHRlcmAgY2FuIGJlIGF1dG9tYXRpY2FsbHkgcHJvdmlkZWQgYnkgaW1wb3J0aW5nIGBNb21lbnREYXRlTW9kdWxlYCBpbiB5b3VyXG4gICAgLy8gYXBwbGljYXRpb24ncyByb290IG1vZHVsZS4gV2UgcHJvdmlkZSBpdCBhdCB0aGUgY29tcG9uZW50IGxldmVsIGhlcmUsIGR1ZSB0byBsaW1pdGF0aW9ucyBvZlxuICAgIC8vIG91ciBleGFtcGxlIGdlbmVyYXRpb24gc2NyaXB0LlxuICAgIHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE1vbWVudERhdGVBZGFwdGVyLFxuICAgICAgZGVwczogW01BVF9EQVRFX0xPQ0FMRSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OU11cbiAgICB9LFxuXG4gICAge3Byb3ZpZGU6IE1BVF9EQVRFX0ZPUk1BVFMsIHVzZVZhbHVlOiBNWV9GT1JNQVRTfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckZvcm1hdHNFeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnQoKSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcFwiIHBsYWNlaG9sZGVyPVwiVmVyYm9zZSBkYXRlcGlja2VyXCIgW2Zvcm1Db250cm9sXT1cImRhdGVcIj5cbiAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJkcFwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgI2RwPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19