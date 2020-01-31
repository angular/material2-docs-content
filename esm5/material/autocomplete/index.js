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
var EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
var AutocompleteExamplesModule = /** @class */ (function () {
    function AutocompleteExamplesModule() {
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
                },] },
    ];
    AutocompleteExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
    AutocompleteExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); }, imports: [[
                CommonModule,
                MatAutocompleteModule,
                MatFormFieldModule,
                MatInputModule,
                MatSlideToggleModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return AutocompleteExamplesModule;
}());
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsd0NBQXdDLEVBQ3pDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOztBQUU1RixPQUFPLEVBQ0wsd0NBQXdDLEVBQ3hDLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQiw2QkFBNkIsRUFDN0IseUJBQXlCLEdBQzFCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHdDQUF3QztJQUN4QywwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQWNDOztnQkFkQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7a0VBQ1ksMEJBQTBCO3VJQUExQiwwQkFBMEIsa0JBWjVCO2dCQUNQLFlBQVk7Z0JBQ1oscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixXQUFXO2dCQUNYLG1CQUFtQjthQUNwQjtxQ0FoREg7Q0FxREMsQUFkRCxJQWNDO1NBRFksMEJBQTBCO3dGQUExQiwwQkFBMEIsbUJBdEJyQyx3Q0FBd0M7UUFDeEMsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFLdkIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsbUJBQW1CLGFBakJyQix3Q0FBd0M7UUFDeEMsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qix5QkFBeUI7a0RBZ0JkLDBCQUEwQjtjQWJ0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1oscUJBQXFCO29CQUNyQixrQkFBa0I7b0JBQ2xCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixXQUFXO29CQUNYLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7XG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtYXV0by1hY3RpdmUtZmlyc3Qtb3B0aW9uL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24tZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9hdXRvY29tcGxldGUtb3ZlcnZpZXcvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlLFxuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlU2ltcGxlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBBdXRvY29tcGxldGVBdXRvQWN0aXZlRmlyc3RPcHRpb25FeGFtcGxlLFxuICBBdXRvY29tcGxldGVEaXNwbGF5RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRmlsdGVyRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlLFxuICBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=