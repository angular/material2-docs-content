/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/datepicker/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DatepickerApiExample } from './datepicker-api/datepicker-api-example';
import { DatepickerColorExample } from './datepicker-color/datepicker-color-example';
import { DatepickerCustomHeaderExample, ExampleHeader } from './datepicker-custom-header/datepicker-custom-header-example';
import { DatepickerCustomIconExample } from './datepicker-custom-icon/datepicker-custom-icon-example';
import { DatepickerDateClassExample } from './datepicker-date-class/datepicker-date-class-example';
import { DatepickerDisabledExample } from './datepicker-disabled/datepicker-disabled-example';
import { DatepickerEventsExample } from './datepicker-events/datepicker-events-example';
import { DatepickerFilterExample } from './datepicker-filter/datepicker-filter-example';
import { DatepickerFormatsExample } from './datepicker-formats/datepicker-formats-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DatepickerMinMaxExample } from './datepicker-min-max/datepicker-min-max-example';
import { DatepickerMomentExample } from './datepicker-moment/datepicker-moment-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
import { DatepickerStartViewExample } from './datepicker-start-view/datepicker-start-view-example';
import { DatepickerTouchExample } from './datepicker-touch/datepicker-touch-example';
import { DatepickerValueExample } from './datepicker-value/datepicker-value-example';
import { DatepickerViewsSelectionExample } from './datepicker-views-selection/datepicker-views-selection-example';
import { DateRangePickerOverviewExample } from './date-range-picker-overview/date-range-picker-overview-example';
import { DateRangePickerFormsExample } from './date-range-picker-forms/date-range-picker-forms-example';
import { DateRangePickerComparisonExample } from './date-range-picker-comparison/date-range-picker-comparison-example';
import { DateRangePickerSelectionStrategyExample } from './date-range-picker-selection-strategy/date-range-picker-selection-strategy-example';
import * as i0 from "@angular/core";
export { DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, DateRangePickerOverviewExample, DateRangePickerFormsExample, DateRangePickerComparisonExample, DateRangePickerSelectionStrategyExample, ExampleHeader, };
/** @type {?} */
const EXAMPLES = [
    DatepickerApiExample,
    DatepickerColorExample,
    DatepickerCustomHeaderExample,
    DatepickerCustomIconExample,
    DatepickerDateClassExample,
    DatepickerDisabledExample,
    DatepickerEventsExample,
    DatepickerFilterExample,
    DatepickerFormatsExample,
    DatepickerLocaleExample,
    DatepickerMinMaxExample,
    DatepickerMomentExample,
    DatepickerOverviewExample,
    DatepickerStartViewExample,
    DatepickerTouchExample,
    DatepickerValueExample,
    DatepickerViewsSelectionExample,
    DateRangePickerOverviewExample,
    DateRangePickerFormsExample,
    DateRangePickerComparisonExample,
    DateRangePickerSelectionStrategyExample,
    ExampleHeader,
];
let DatepickerExamplesModule = /** @class */ (() => {
    class DatepickerExamplesModule {
    }
    DatepickerExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatIconModule,
                        MatNativeDateModule,
                        ReactiveFormsModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ DatepickerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatepickerExamplesModule });
    /** @nocollapse */ DatepickerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatDatepickerModule,
                MatInputModule,
                MatIconModule,
                MatNativeDateModule,
                ReactiveFormsModule,
                FormsModule,
            ]] });
    return DatepickerExamplesModule;
})();
export { DatepickerExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        DateRangePickerOverviewExample,
        DateRangePickerFormsExample,
        DateRangePickerComparisonExample,
        DateRangePickerSelectionStrategyExample,
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatDatepickerModule,
        MatInputModule,
        MatIconModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        FormsModule], exports: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        DateRangePickerOverviewExample,
        DateRangePickerFormsExample,
        DateRangePickerComparisonExample,
        DateRangePickerSelectionStrategyExample,
        ExampleHeader] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DatepickerExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDatepickerModule,
                    MatInputModule,
                    MatIconModule,
                    MatNativeDateModule,
                    ReactiveFormsModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFFLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsYUFBYSxFQUNkLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDcEcsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FB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LHNCQUFzQjtRQUN0QiwrQkFBK0I7UUFDL0IsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQixnQ0FBZ0M7UUFDaEMsdUNBQXVDO1FBQ3ZDLGFBQWEsYUFLWCxZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixjQUFjO1FBQ2QsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsV0FBVyxhQWpDYixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsK0JBQStCO1FBQy9CLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2QyxhQUFhO2tEQWtCRix3QkFBd0I7Y0FmcEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixjQUFjO29CQUNkLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGUsIEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuaW1wb3J0IHtEYXRlcGlja2VyQXBpRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWFwaS9kYXRlcGlja2VyLWFwaS1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckNvbG9yRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWNvbG9yL2RhdGVwaWNrZXItY29sb3ItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEYXRlcGlja2VyQ3VzdG9tSGVhZGVyRXhhbXBsZSxcbiAgRXhhbXBsZUhlYWRlclxufSBmcm9tICcuL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJDdXN0b21JY29uRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWN1c3RvbS1pY29uL2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJEYXRlQ2xhc3NFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyRXZlbnRzRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWV2ZW50cy9kYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckZpbHRlckV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWZvcm1hdHMvZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyTG9jYWxlRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWxvY2FsZS9kYXRlcGlja2VyLWxvY2FsZS1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlck1pbk1heEV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1taW4tbWF4L2RhdGVwaWNrZXItbWluLW1heC1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlck1vbWVudEV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1tb21lbnQvZGF0ZXBpY2tlci1tb21lbnQtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1vdmVydmlldy9kYXRlcGlja2VyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyU3RhcnRWaWV3RXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLXN0YXJ0LXZpZXcvZGF0ZXBpY2tlci1zdGFydC12aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyVG91Y2hFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItdG91Y2gvZGF0ZXBpY2tlci10b3VjaC1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlclZhbHVlRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLXZhbHVlL2RhdGVwaWNrZXItdmFsdWUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEYXRlcGlja2VyVmlld3NTZWxlY3Rpb25FeGFtcGxlXG59IGZyb20gJy4vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24vZGF0ZXBpY2tlci12aWV3cy1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEYXRlUmFuZ2VQaWNrZXJPdmVydmlld0V4YW1wbGVcbn0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci1vdmVydmlldy9kYXRlLXJhbmdlLXBpY2tlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIERhdGVSYW5nZVBpY2tlckZvcm1zRXhhbXBsZVxufSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zL2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRGF0ZVJhbmdlUGlja2VyQ29tcGFyaXNvbkV4YW1wbGVcbn0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZSc7XG5pbXBvcnQge1xuICBEYXRlUmFuZ2VQaWNrZXJTZWxlY3Rpb25TdHJhdGVneUV4YW1wbGVcbn0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3kvZGF0ZS1yYW5nZS1waWNrZXItc2VsZWN0aW9uLXN0cmF0ZWd5LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBEYXRlcGlja2VyQXBpRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckNvbG9yRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckN1c3RvbUhlYWRlckV4YW1wbGUsXG4gIERhdGVwaWNrZXJDdXN0b21JY29uRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUsXG4gIERhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGUsXG4gIERhdGVwaWNrZXJFdmVudHNFeGFtcGxlLFxuICBEYXRlcGlja2VyRmlsdGVyRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckZvcm1hdHNFeGFtcGxlLFxuICBEYXRlcGlja2VyTG9jYWxlRXhhbXBsZSxcbiAgRGF0ZXBpY2tlck1pbk1heEV4YW1wbGUsXG4gIERhdGVwaWNrZXJNb21lbnRFeGFtcGxlLFxuICBEYXRlcGlja2VyT3ZlcnZpZXdFeGFtcGxlLFxuICBEYXRlcGlja2VyU3RhcnRWaWV3RXhhbXBsZSxcbiAgRGF0ZXBpY2tlclRvdWNoRXhhbXBsZSxcbiAgRGF0ZXBpY2tlclZhbHVlRXhhbXBsZSxcbiAgRGF0ZXBpY2tlclZpZXdzU2VsZWN0aW9uRXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyT3ZlcnZpZXdFeGFtcGxlLFxuICBEYXRlUmFuZ2VQaWNrZXJGb3Jtc0V4YW1wbGUsXG4gIERhdGVSYW5nZVBpY2tlckNvbXBhcmlzb25FeGFtcGxlLFxuICBEYXRlUmFuZ2VQaWNrZXJTZWxlY3Rpb25TdHJhdGVneUV4YW1wbGUsXG4gIEV4YW1wbGVIZWFkZXIsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRGF0ZXBpY2tlckFwaUV4YW1wbGUsXG4gIERhdGVwaWNrZXJDb2xvckV4YW1wbGUsXG4gIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlLFxuICBEYXRlcGlja2VyQ3VzdG9tSWNvbkV4YW1wbGUsXG4gIERhdGVwaWNrZXJEYXRlQ2xhc3NFeGFtcGxlLFxuICBEYXRlcGlja2VyRGlzYWJsZWRFeGFtcGxlLFxuICBEYXRlcGlja2VyRXZlbnRzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckZpbHRlckV4YW1wbGUsXG4gIERhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJNaW5NYXhFeGFtcGxlLFxuICBEYXRlcGlja2VyTW9tZW50RXhhbXBsZSxcbiAgRGF0ZXBpY2tlck92ZXJ2aWV3RXhhbXBsZSxcbiAgRGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGUsXG4gIERhdGVwaWNrZXJUb3VjaEV4YW1wbGUsXG4gIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJWaWV3c1NlbGVjdGlvbkV4YW1wbGUsXG4gIERhdGVSYW5nZVBpY2tlck92ZXJ2aWV3RXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyRm9ybXNFeGFtcGxlLFxuICBEYXRlUmFuZ2VQaWNrZXJDb21wYXJpc29uRXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyU2VsZWN0aW9uU3RyYXRlZ3lFeGFtcGxlLFxuICBFeGFtcGxlSGVhZGVyLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=