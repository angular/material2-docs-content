import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DateRangePickerComparisonExample } from './date-range-picker-comparison/date-range-picker-comparison-example';
import { DateRangePickerFormsExample } from './date-range-picker-forms/date-range-picker-forms-example';
import { DateRangePickerOverviewExample } from './date-range-picker-overview/date-range-picker-overview-example';
import { DateRangePickerSelectionStrategyExample } from './date-range-picker-selection-strategy/date-range-picker-selection-strategy-example';
import { DatepickerActionsExample } from './datepicker-actions/datepicker-actions-example';
import { DatepickerApiExample } from './datepicker-api/datepicker-api-example';
import { DatepickerColorExample } from './datepicker-color/datepicker-color-example';
import { DatepickerCustomHeaderExample, ExampleHeader, } from './datepicker-custom-header/datepicker-custom-header-example';
import { DatepickerCustomIconExample } from './datepicker-custom-icon/datepicker-custom-icon-example';
import { DatepickerDateClassExample } from './datepicker-date-class/datepicker-date-class-example';
import { DatepickerDisabledExample } from './datepicker-disabled/datepicker-disabled-example';
import { DatepickerEventsExample } from './datepicker-events/datepicker-events-example';
import { DatepickerFilterExample } from './datepicker-filter/datepicker-filter-example';
import { DatepickerFormatsExample } from './datepicker-formats/datepicker-formats-example';
import { DatepickerHarnessExample } from './datepicker-harness/datepicker-harness-example';
import { DatepickerInlineCalendarExample } from './datepicker-inline-calendar/datepicker-inline-calendar-example';
import { DatepickerLocaleExample } from './datepicker-locale/datepicker-locale-example';
import { DatepickerMinMaxExample } from './datepicker-min-max/datepicker-min-max-example';
import { DatepickerMomentExample } from './datepicker-moment/datepicker-moment-example';
import { DatepickerOverviewExample } from './datepicker-overview/datepicker-overview-example';
import { DatepickerStartViewExample } from './datepicker-start-view/datepicker-start-view-example';
import { DatepickerTouchExample } from './datepicker-touch/datepicker-touch-example';
import { DatepickerValueExample } from './datepicker-value/datepicker-value-example';
import { DatepickerViewsSelectionExample } from './datepicker-views-selection/datepicker-views-selection-example';
import * as i0 from "@angular/core";
export { DatepickerApiExample, DatepickerColorExample, DatepickerCustomHeaderExample, DatepickerCustomIconExample, DatepickerDateClassExample, DatepickerDisabledExample, DatepickerEventsExample, DatepickerFilterExample, DatepickerFormatsExample, DatepickerHarnessExample, DatepickerInlineCalendarExample, DatepickerLocaleExample, DatepickerMinMaxExample, DatepickerMomentExample, DatepickerOverviewExample, DatepickerStartViewExample, DatepickerTouchExample, DatepickerValueExample, DatepickerViewsSelectionExample, DateRangePickerOverviewExample, DateRangePickerFormsExample, DateRangePickerComparisonExample, DateRangePickerSelectionStrategyExample, DatepickerActionsExample, ExampleHeader, };
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
    DatepickerHarnessExample,
    DatepickerInlineCalendarExample,
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
    DatepickerActionsExample,
    ExampleHeader,
];
export class DatepickerExamplesModule {
}
DatepickerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DatepickerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DatepickerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DatepickerExamplesModule, declarations: [DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerHarnessExample,
        DatepickerInlineCalendarExample,
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
        DatepickerActionsExample,
        ExampleHeader], imports: [CommonModule,
        MatButtonModule,
        MatCardModule,
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
        DatepickerHarnessExample,
        DatepickerInlineCalendarExample,
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
        DatepickerActionsExample,
        ExampleHeader] });
DatepickerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DatepickerExamplesModule, providers: [
        // Except in specific examples, use 'en-US' locale in datepicker examples. This ensures that
        // the hardcoded date format strings displayed in `<mat-hint>` will match the format used by
        // `NativeDateModule`.
        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    ], imports: [[
            CommonModule,
            MatButtonModule,
            MatCardModule,
            MatDatepickerModule,
            MatInputModule,
            MatIconModule,
            MatNativeDateModule,
            ReactiveFormsModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: DatepickerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCardModule,
                        MatDatepickerModule,
                        MatInputModule,
                        MatIconModule,
                        MatNativeDateModule,
                        ReactiveFormsModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    providers: [
                        // Except in specific examples, use 'en-US' locale in datepicker examples. This ensures that
                        // the hardcoded date format strings displayed in `<mat-hint>` will match the format used by
                        // `NativeDateModule`.
                        { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLHFFQUFxRSxDQUFDO0FBQ3JILE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDO0FBQ3RHLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQy9HLE9BQU8sRUFBQyx1Q0FBdUMsRUFBQyxNQUFNLHFGQUFxRixDQUFDO0FBQzVJLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBRXpGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFDTCw2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O3dCQUNULDRGQUE0Rjt3QkFDNUYsNEZBQTRGO3dCQUM1RixzQkFBc0I7d0JBQ3RCLEVBQUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO3FCQUM5QztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGUsIE1BVF9EQVRFX0xPQ0FMRX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7RGF0ZVJhbmdlUGlja2VyQ29tcGFyaXNvbkV4YW1wbGV9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlUmFuZ2VQaWNrZXJGb3Jtc0V4YW1wbGV9IGZyb20gJy4vZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVSYW5nZVBpY2tlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9kYXRlLXJhbmdlLXBpY2tlci1vdmVydmlldy9kYXRlLXJhbmdlLXBpY2tlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZVJhbmdlUGlja2VyU2VsZWN0aW9uU3RyYXRlZ3lFeGFtcGxlfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLXNlbGVjdGlvbi1zdHJhdGVneS9kYXRlLXJhbmdlLXBpY2tlci1zZWxlY3Rpb24tc3RyYXRlZ3ktZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJBY3Rpb25zRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWFjdGlvbnMvZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUnO1xuXG5pbXBvcnQge0RhdGVwaWNrZXJBcGlFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItYXBpL2RhdGVwaWNrZXItYXBpLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyQ29sb3JFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItY29sb3IvZGF0ZXBpY2tlci1jb2xvci1leGFtcGxlJztcbmltcG9ydCB7XG4gIERhdGVwaWNrZXJDdXN0b21IZWFkZXJFeGFtcGxlLFxuICBFeGFtcGxlSGVhZGVyLFxufSBmcm9tICcuL2RhdGVwaWNrZXItY3VzdG9tLWhlYWRlci9kYXRlcGlja2VyLWN1c3RvbS1oZWFkZXItZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJDdXN0b21JY29uRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWN1c3RvbS1pY29uL2RhdGVwaWNrZXItY3VzdG9tLWljb24tZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJEYXRlQ2xhc3NFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyRXZlbnRzRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWV2ZW50cy9kYXRlcGlja2VyLWV2ZW50cy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckZpbHRlckV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJGb3JtYXRzRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWZvcm1hdHMvZGF0ZXBpY2tlci1mb3JtYXRzLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlcklubGluZUNhbGVuZGFyRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLWlubGluZS1jYWxlbmRhci9kYXRlcGlja2VyLWlubGluZS1jYWxlbmRhci1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlckxvY2FsZUV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1sb2NhbGUvZGF0ZXBpY2tlci1sb2NhbGUtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJNaW5NYXhFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItbWluLW1heC9kYXRlcGlja2VyLW1pbi1tYXgtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJNb21lbnRFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItbW9tZW50L2RhdGVwaWNrZXItbW9tZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItb3ZlcnZpZXcvZGF0ZXBpY2tlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci1zdGFydC12aWV3L2RhdGVwaWNrZXItc3RhcnQtdmlldy1leGFtcGxlJztcbmltcG9ydCB7RGF0ZXBpY2tlclRvdWNoRXhhbXBsZX0gZnJvbSAnLi9kYXRlcGlja2VyLXRvdWNoL2RhdGVwaWNrZXItdG91Y2gtZXhhbXBsZSc7XG5pbXBvcnQge0RhdGVwaWNrZXJWYWx1ZUV4YW1wbGV9IGZyb20gJy4vZGF0ZXBpY2tlci12YWx1ZS9kYXRlcGlja2VyLXZhbHVlLWV4YW1wbGUnO1xuaW1wb3J0IHtEYXRlcGlja2VyVmlld3NTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uL2RhdGVwaWNrZXItdmlld3Mtc2VsZWN0aW9uLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBEYXRlcGlja2VyQXBpRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckNvbG9yRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckN1c3RvbUhlYWRlckV4YW1wbGUsXG4gIERhdGVwaWNrZXJDdXN0b21JY29uRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUsXG4gIERhdGVwaWNrZXJEaXNhYmxlZEV4YW1wbGUsXG4gIERhdGVwaWNrZXJFdmVudHNFeGFtcGxlLFxuICBEYXRlcGlja2VyRmlsdGVyRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckZvcm1hdHNFeGFtcGxlLFxuICBEYXRlcGlja2VySGFybmVzc0V4YW1wbGUsXG4gIERhdGVwaWNrZXJJbmxpbmVDYWxlbmRhckV4YW1wbGUsXG4gIERhdGVwaWNrZXJMb2NhbGVFeGFtcGxlLFxuICBEYXRlcGlja2VyTWluTWF4RXhhbXBsZSxcbiAgRGF0ZXBpY2tlck1vbWVudEV4YW1wbGUsXG4gIERhdGVwaWNrZXJPdmVydmlld0V4YW1wbGUsXG4gIERhdGVwaWNrZXJTdGFydFZpZXdFeGFtcGxlLFxuICBEYXRlcGlja2VyVG91Y2hFeGFtcGxlLFxuICBEYXRlcGlja2VyVmFsdWVFeGFtcGxlLFxuICBEYXRlcGlja2VyVmlld3NTZWxlY3Rpb25FeGFtcGxlLFxuICBEYXRlUmFuZ2VQaWNrZXJPdmVydmlld0V4YW1wbGUsXG4gIERhdGVSYW5nZVBpY2tlckZvcm1zRXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyQ29tcGFyaXNvbkV4YW1wbGUsXG4gIERhdGVSYW5nZVBpY2tlclNlbGVjdGlvblN0cmF0ZWd5RXhhbXBsZSxcbiAgRGF0ZXBpY2tlckFjdGlvbnNFeGFtcGxlLFxuICBFeGFtcGxlSGVhZGVyLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIERhdGVwaWNrZXJBcGlFeGFtcGxlLFxuICBEYXRlcGlja2VyQ29sb3JFeGFtcGxlLFxuICBEYXRlcGlja2VyQ3VzdG9tSGVhZGVyRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckN1c3RvbUljb25FeGFtcGxlLFxuICBEYXRlcGlja2VyRGF0ZUNsYXNzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckRpc2FibGVkRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckV2ZW50c0V4YW1wbGUsXG4gIERhdGVwaWNrZXJGaWx0ZXJFeGFtcGxlLFxuICBEYXRlcGlja2VyRm9ybWF0c0V4YW1wbGUsXG4gIERhdGVwaWNrZXJIYXJuZXNzRXhhbXBsZSxcbiAgRGF0ZXBpY2tlcklubGluZUNhbGVuZGFyRXhhbXBsZSxcbiAgRGF0ZXBpY2tlckxvY2FsZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJNaW5NYXhFeGFtcGxlLFxuICBEYXRlcGlja2VyTW9tZW50RXhhbXBsZSxcbiAgRGF0ZXBpY2tlck92ZXJ2aWV3RXhhbXBsZSxcbiAgRGF0ZXBpY2tlclN0YXJ0Vmlld0V4YW1wbGUsXG4gIERhdGVwaWNrZXJUb3VjaEV4YW1wbGUsXG4gIERhdGVwaWNrZXJWYWx1ZUV4YW1wbGUsXG4gIERhdGVwaWNrZXJWaWV3c1NlbGVjdGlvbkV4YW1wbGUsXG4gIERhdGVSYW5nZVBpY2tlck92ZXJ2aWV3RXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyRm9ybXNFeGFtcGxlLFxuICBEYXRlUmFuZ2VQaWNrZXJDb21wYXJpc29uRXhhbXBsZSxcbiAgRGF0ZVJhbmdlUGlja2VyU2VsZWN0aW9uU3RyYXRlZ3lFeGFtcGxlLFxuICBEYXRlcGlja2VyQWN0aW9uc0V4YW1wbGUsXG4gIEV4YW1wbGVIZWFkZXIsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBwcm92aWRlcnM6IFtcbiAgICAvLyBFeGNlcHQgaW4gc3BlY2lmaWMgZXhhbXBsZXMsIHVzZSAnZW4tVVMnIGxvY2FsZSBpbiBkYXRlcGlja2VyIGV4YW1wbGVzLiBUaGlzIGVuc3VyZXMgdGhhdFxuICAgIC8vIHRoZSBoYXJkY29kZWQgZGF0ZSBmb3JtYXQgc3RyaW5ncyBkaXNwbGF5ZWQgaW4gYDxtYXQtaGludD5gIHdpbGwgbWF0Y2ggdGhlIGZvcm1hdCB1c2VkIGJ5XG4gICAgLy8gYE5hdGl2ZURhdGVNb2R1bGVgLlxuICAgIHtwcm92aWRlOiBNQVRfREFURV9MT0NBTEUsIHVzZVZhbHVlOiAnZW4tVVMnfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=