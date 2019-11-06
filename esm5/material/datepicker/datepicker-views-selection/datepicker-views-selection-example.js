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
var _c0 = ["dp", ""];
var moment = _rollupMoment || _moment;
// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export var MY_FORMATS = {
    parse: {
        dateInput: 'MM/YYYY',
    },
    display: {
        dateInput: 'MM/YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
/** @title Datepicker emulating a Year and month picker */
var DatepickerViewsSelectionExample = /** @class */ (function () {
    function DatepickerViewsSelectionExample() {
        this.date = new FormControl(moment());
    }
    DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
        var ctrlValue = this.date.value;
        ctrlValue.year(normalizedYear.year());
        this.date.setValue(ctrlValue);
    };
    DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
        var ctrlValue = this.date.value;
        ctrlValue.month(normalizedMonth.month());
        this.date.setValue(ctrlValue);
        datepicker.close();
    };
    DatepickerViewsSelectionExample.decorators = [
        { type: Component, args: [{
                    selector: 'datepicker-views-selection-example',
                    templateUrl: 'datepicker-views-selection-example.html',
                    styleUrls: ['datepicker-views-selection-example.css'],
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
    DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
    DatepickerViewsSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: DateAdapter,
                    useClass: MomentDateAdapter,
                    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 5, vars: 3, consts: [["matInput", "", "placeholder", "Month and Year", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) { if (rf & 1) {
            var _r25 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelement(1, "input", 0);
            i0.ɵɵelement(2, "mat-datepicker-toggle", 1);
            i0.ɵɵelementStart(3, "mat-datepicker", 2, _c0);
            i0.ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_3_listener($event) { return ctx.chosenYearHandler($event); });
            i0.ɵɵlistener("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_3_listener($event) { i0.ɵɵrestoreView(_r25); var _r24 = i0.ɵɵreference(4); return ctx.chosenMonthHandler($event, _r24); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            var _r24 = i0.ɵɵreference(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matDatepicker", _r24)("formControl", ctx.date);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r24);
        } }, directives: [i1.MatFormField, i2.MatInput, i3.MatDatepickerInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.FormControlDirective, i3.MatDatepickerToggle, i1.MatSuffix, i3.MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
    return DatepickerViewsSelectionExample;
}());
export { DatepickerViewsSelectionExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
        type: Component,
        args: [{
                selector: 'datepicker-views-selection-example',
                templateUrl: 'datepicker-views-selection-example.html',
                styleUrls: ['datepicker-views-selection-example.css'],
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
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFHdEYsZ0ZBQWdGO0FBQ2hGLDZGQUE2RjtBQUM3RixpR0FBaUc7QUFDakcsMkJBQTJCO0FBQzNCLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLGdEQUFnRDtBQUNoRCxPQUFPLEVBQUMsT0FBTyxJQUFJLGFBQWEsRUFBUyxNQUFNLFFBQVEsQ0FBQzs7Ozs7OztBQUV4RCxJQUFNLE1BQU0sR0FBRyxhQUFhLElBQUksT0FBTyxDQUFDO0FBRXhDLDJEQUEyRDtBQUMzRCxpREFBaUQ7QUFDakQsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHO0lBQ3hCLEtBQUssRUFBRTtRQUNMLFNBQVMs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cG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TW9tZW50RGF0ZUFkYXB0ZXIsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcbmltcG9ydCB7RGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0ZPUk1BVFMsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuXG4vLyBEZXBlbmRpbmcgb24gd2hldGhlciByb2xsdXAgaXMgdXNlZCwgbW9tZW50IG5lZWRzIHRvIGJlIGltcG9ydGVkIGRpZmZlcmVudGx5LlxuLy8gU2luY2UgTW9tZW50LmpzIGRvZXNuJ3QgaGF2ZSBhIGRlZmF1bHQgZXhwb3J0LCB3ZSBub3JtYWxseSBuZWVkIHRvIGltcG9ydCB1c2luZyB0aGUgYCogYXNgXG4vLyBzeW50YXguIEhvd2V2ZXIsIHJvbGx1cCBjcmVhdGVzIGEgc3ludGhldGljIGRlZmF1bHQgbW9kdWxlIGFuZCB3ZSB0aHVzIG5lZWQgdG8gaW1wb3J0IGl0IHVzaW5nXG4vLyB0aGUgYGRlZmF1bHQgYXNgIHN5bnRheC5cbmltcG9ydCAqIGFzIF9tb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kdXBsaWNhdGUtaW1wb3J0c1xuaW1wb3J0IHtkZWZhdWx0IGFzIF9yb2xsdXBNb21lbnQsIE1vbWVudH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgbW9tZW50ID0gX3JvbGx1cE1vbWVudCB8fCBfbW9tZW50O1xuXG4vLyBTZWUgdGhlIE1vbWVudC5qcyBkb2NzIGZvciB0aGUgbWVhbmluZyBvZiB0aGVzZSBmb3JtYXRzOlxuLy8gaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2Rpc3BsYXlpbmcvZm9ybWF0L1xuZXhwb3J0IGNvbnN0IE1ZX0ZPUk1BVFMgPSB7XG4gIHBhcnNlOiB7XG4gICAgZGF0ZUlucHV0OiAnTU0vWVlZWScsXG4gIH0sXG4gIGRpc3BsYXk6IHtcbiAgICBkYXRlSW5wdXQ6ICdNTS9ZWVlZJyxcbiAgICBtb250aFllYXJMYWJlbDogJ01NTSBZWVlZJyxcbiAgICBkYXRlQTExeUxhYmVsOiAnTEwnLFxuICAgIG1vbnRoWWVhckExMXlMYWJlbDogJ01NTU0gWVlZWScsXG4gIH0sXG59O1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgZW11bGF0aW5nIGEgWWVhciBhbmQgbW9udGggcGlja2VyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLXZpZXdzLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZS5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgLy8gYE1vbWVudERhdGVBZGFwdGVyYCBjYW4gYmUgYXV0b21hdGljYWxseSBwcm92aWRlZCBieSBpbXBvcnRpbmcgYE1vbWVudERhdGVNb2R1bGVgIGluIHlvdXJcbiAgICAvLyBhcHBsaWNhdGlvbidzIHJvb3QgbW9kdWxlLiBXZSBwcm92aWRlIGl0IGF0IHRoZSBjb21wb25lbnQgbGV2ZWwgaGVyZSwgZHVlIHRvIGxpbWl0YXRpb25zIG9mXG4gICAgLy8gb3VyIGV4YW1wbGUgZ2VuZXJhdGlvbiBzY3JpcHQuXG4gICAge1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogTW9tZW50RGF0ZUFkYXB0ZXIsXG4gICAgICBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFLCBNQVRfTU9NRU5UX0RBVEVfQURBUFRFUl9PUFRJT05TXVxuICAgIH0sXG5cbiAgICB7cHJvdmlkZTogTUFUX0RBVEVfRk9STUFUUywgdXNlVmFsdWU6IE1ZX0ZPUk1BVFN9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyVmlld3NTZWxlY3Rpb25FeGFtcGxlIHtcbiAgZGF0ZSA9IG5ldyBGb3JtQ29udHJvbChtb21lbnQoKSk7XG5cbiAgY2hvc2VuWWVhckhhbmRsZXIobm9ybWFsaXplZFllYXI6IE1vbWVudCkge1xuICAgIGNvbnN0IGN0cmxWYWx1ZSA9IHRoaXMuZGF0ZS52YWx1ZTtcbiAgICBjdHJsVmFsdWUueWVhcihub3JtYWxpemVkWWVhci55ZWFyKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXRWYWx1ZShjdHJsVmFsdWUpO1xuICB9XG5cbiAgY2hvc2VuTW9udGhIYW5kbGVyKG5vcm1hbGl6ZWRNb250aDogTW9tZW50LCBkYXRlcGlja2VyOiBNYXREYXRlcGlja2VyPE1vbWVudD4pIHtcbiAgICBjb25zdCBjdHJsVmFsdWUgPSB0aGlzLmRhdGUudmFsdWU7XG4gICAgY3RybFZhbHVlLm1vbnRoKG5vcm1hbGl6ZWRNb250aC5tb250aCgpKTtcbiAgICB0aGlzLmRhdGUuc2V0VmFsdWUoY3RybFZhbHVlKTtcbiAgICBkYXRlcGlja2VyLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwXCIgcGxhY2Vob2xkZXI9XCJNb250aCBhbmQgWWVhclwiIFtmb3JtQ29udHJvbF09XCJkYXRlXCI+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwiZHBcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNkcFxuICAgICAgICAgICAgICAgICAgc3RhcnRWaWV3PVwibXVsdGkteWVhclwiXG4gICAgICAgICAgICAgICAgICAoeWVhclNlbGVjdGVkKT1cImNob3NlblllYXJIYW5kbGVyKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKG1vbnRoU2VsZWN0ZWQpPVwiY2hvc2VuTW9udGhIYW5kbGVyKCRldmVudCwgZHApXCJcbiAgICAgICAgICAgICAgICAgIHBhbmVsQ2xhc3M9XCJleGFtcGxlLW1vbnRoLXBpY2tlclwiPlxuICA8L21hdC1kYXRlcGlja2VyPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==