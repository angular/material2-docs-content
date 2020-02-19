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
                    entryComponents: EXAMPLES,
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsd0NBQXdDLEVBQ3pDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOztBQUU1RixPQUFPLEVBQ0wsd0NBQXdDLEVBQ3hDLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMkJBQTJCLEVBQzNCLDJCQUEyQixFQUMzQiw2QkFBNkIsRUFDN0IseUJBQXlCLEdBQzFCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHdDQUF3QztJQUN4QywwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLHlCQUF5QjtDQUMxQixDQUFDO0FBRUY7SUFBQTtLQWVDOztnQkFmQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1oscUJBQXFCO3dCQUNyQixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7O2tFQUNZLDBCQUEwQjt1SUFBMUIsMEJBQTBCLGtCQWI1QjtnQkFDUCxZQUFZO2dCQUNaLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQixjQUFjO2dCQUNkLG9CQUFvQjtnQkFDcEIsV0FBVztnQkFDWCxtQkFBbUI7YUFDcEI7cUNBaERIO0NBc0RDLEFBZkQsSUFlQztTQURZLDBCQUEwQjt3RkFBMUIsMEJBQTBCLG1CQXZCckMsd0NBQXdDO1FBQ3hDLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IseUJBQXlCLGFBS3ZCLFlBQVk7UUFDWixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsV0FBVztRQUNYLG1CQUFtQixhQWpCckIsd0NBQXdDO1FBQ3hDLDBCQUEwQjtRQUMxQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IseUJBQXlCO2tEQWlCZCwwQkFBMEI7Y0FkdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24vYXV0b2NvbXBsZXRlLWF1dG8tYWN0aXZlLWZpcnN0LW9wdGlvbi1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWRpc3BsYXkvYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWZpbHRlci9hdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLXNpbXBsZS9hdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBBdXRvY29tcGxldGVBdXRvQWN0aXZlRmlyc3RPcHRpb25FeGFtcGxlLFxuICBBdXRvY29tcGxldGVEaXNwbGF5RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRmlsdGVyRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlLFxuICBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlLFxuICBBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==