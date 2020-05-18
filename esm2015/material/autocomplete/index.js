/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/autocomplete/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AutocompleteAutoActiveFirstOptionExample } from './autocomplete-auto-active-first-option/autocomplete-auto-active-first-option-example';
import { AutocompleteDisplayExample } from './autocomplete-display/autocomplete-display-example';
import { AutocompleteFilterExample } from './autocomplete-filter/autocomplete-filter-example';
import { AutocompleteOptgroupExample } from './autocomplete-optgroup/autocomplete-optgroup-example';
import { AutocompleteOverviewExample } from './autocomplete-overview/autocomplete-overview-example';
import { AutocompletePlainInputExample } from './autocomplete-plain-input/autocomplete-plain-input-example';
import { AutocompleteSimpleExample } from './autocomplete-simple/autocomplete-simple-example';
import * as i0 from "@angular/core";
export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample, };
/** @type {?} */
const EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
let AutocompleteExamplesModule = /** @class */ (() => {
    class AutocompleteExamplesModule {
    }
    AutocompleteExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatAutocompleteModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSlideToggleModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ AutocompleteExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
    /** @nocollapse */ AutocompleteExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); }, imports: [[
                CommonModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                MatSlideToggleModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return AutocompleteExamplesModule;
})();
export { AutocompleteExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AutocompleteExamplesModule, { declarations: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample], imports: [CommonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule], exports: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AutocompleteExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatAutocompleteModule,
                    MatFormFieldModule,
                    MatInputModule,
                    MatSlideToggleModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFDTCx3Q0FBd0MsRUFDekMsTUFBTSx1RkFBdUYsQ0FBQztBQUMvRixPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUMvRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNsRyxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7O0FBRTVGLE9BQU8sRUFDTCx3Q0FBd0MsRUFDeEMsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6QiwyQkFBMkIsRUFDM0IsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qix5QkFBeUIsR0FDMUIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3Qix5QkFBeUI7Q0FDMUI7QUFFRDtJQUFBLE1BY2EsMEJBQTBCOzs7Z0JBZHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixxQkFBcUI7d0JBQ3JCLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7cUZBQ1ksMEJBQTBCOzBKQUExQiwwQkFBMEIsa0JBYjVCO2dCQUNQLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixXQUFXO2dCQUNYLG1CQUFtQjthQUNwQjtxQ0FoREg7S0FzREM7U0FEWSwwQkFBMEI7d0ZBQTFCLDBCQUEwQixtQkF2QnJDLHdDQUF3QztRQUN4QywwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHlCQUF5QixhQUt2QixZQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxtQkFBbUIsYUFqQnJCLHdDQUF3QztRQUN4QywwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsNkJBQTZCO1FBQzdCLHlCQUF5QjtrREFpQmQsMEJBQTBCO2NBZHRDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixxQkFBcUI7b0JBQ3JCLGtCQUFrQjtvQkFDbEIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLFdBQVc7b0JBQ1gsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7XG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtYXV0by1hY3RpdmUtZmlyc3Qtb3B0aW9uL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24tZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9hdXRvY29tcGxldGUtb3ZlcnZpZXcvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlLFxuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlU2ltcGxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBBdXRvY29tcGxldGVBdXRvQWN0aXZlRmlyc3RPcHRpb25FeGFtcGxlLFxuICBBdXRvY29tcGxldGVEaXNwbGF5RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRmlsdGVyRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlLFxuICBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=