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
import { AutocompleteHarnessExample } from './autocomplete-harness/autocomplete-harness-example';
import * as i0 from "@angular/core";
export { AutocompleteAutoActiveFirstOptionExample, AutocompleteDisplayExample, AutocompleteFilterExample, AutocompleteHarnessExample, AutocompleteOptgroupExample, AutocompleteOverviewExample, AutocompletePlainInputExample, AutocompleteSimpleExample, };
const EXAMPLES = [
    AutocompleteAutoActiveFirstOptionExample,
    AutocompleteDisplayExample,
    AutocompleteFilterExample,
    AutocompleteHarnessExample,
    AutocompleteOptgroupExample,
    AutocompleteOverviewExample,
    AutocompletePlainInputExample,
    AutocompleteSimpleExample,
];
export class AutocompleteExamplesModule {
}
AutocompleteExamplesModule.ɵfac = function AutocompleteExamplesModule_Factory(t) { return new (t || AutocompleteExamplesModule)(); };
AutocompleteExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AutocompleteExamplesModule });
AutocompleteExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            CommonModule,
            MatAutocompleteModule,
            MatFormFieldModule,
            MatInputModule,
            MatSlideToggleModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AutocompleteExamplesModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AutocompleteExamplesModule, { declarations: [AutocompleteAutoActiveFirstOptionExample,
        AutocompleteDisplayExample,
        AutocompleteFilterExample,
        AutocompleteHarnessExample,
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
        AutocompleteHarnessExample,
        AutocompleteOptgroupExample,
        AutocompleteOverviewExample,
        AutocompletePlainInputExample,
        AutocompleteSimpleExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9hdXRvY29tcGxldGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsd0NBQXdDLEVBQ3pDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUUvRixPQUFPLEVBQ0wsd0NBQXdDLEVBQ3hDLDBCQUEwQixFQUMxQix5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQiwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLHlCQUF5QixHQUMxQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3Q0FBd0M7SUFDeEMsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IseUJBQXlCO0NBQzFCLENBQUM7QUFnQkYsTUFBTSxPQUFPLDBCQUEwQjs7b0dBQTFCLDBCQUEwQjs0RUFBMUIsMEJBQTBCO2dGQWI1QjtZQUNQLFlBQVk7WUFDWixxQkFBcUI7WUFDckIsa0JBQWtCO1lBQ2xCLGNBQWM7WUFDZCxvQkFBb0I7WUFDcEIsV0FBVztZQUNYLG1CQUFtQjtTQUNwQjt1RkFLVSwwQkFBMEI7Y0FkdEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLHFCQUFxQjtvQkFDckIsa0JBQWtCO29CQUNsQixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3dGQUNZLDBCQUEwQixtQkF4QnJDLHdDQUF3QztRQUN4QywwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3Qix5QkFBeUIsYUFLdkIsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixXQUFXO1FBQ1gsbUJBQW1CLGFBbEJyQix3Q0FBd0M7UUFDeEMsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLDJCQUEyQjtRQUMzQiw2QkFBNkI7UUFDN0IseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7XG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtYXV0by1hY3RpdmUtZmlyc3Qtb3B0aW9uL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24tZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1kaXNwbGF5L2F1dG9jb21wbGV0ZS1kaXNwbGF5LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1maWx0ZXIvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vcHRncm91cC9hdXRvY29tcGxldGUtb3B0Z3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9hdXRvY29tcGxldGUtb3ZlcnZpZXcvYXV0b2NvbXBsZXRlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlUGxhaW5JbnB1dEV4YW1wbGVcbn0gZnJvbSAnLi9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQvYXV0b2NvbXBsZXRlLXBsYWluLWlucHV0LWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhhcm5lc3MvYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlLFxuICBBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlLFxuICBBdXRvY29tcGxldGVIYXJuZXNzRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlLFxuICBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEF1dG9jb21wbGV0ZUF1dG9BY3RpdmVGaXJzdE9wdGlvbkV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZURpc3BsYXlFeGFtcGxlLFxuICBBdXRvY29tcGxldGVGaWx0ZXJFeGFtcGxlLFxuICBBdXRvY29tcGxldGVIYXJuZXNzRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3B0Z3JvdXBFeGFtcGxlLFxuICBBdXRvY29tcGxldGVPdmVydmlld0V4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZVBsYWluSW5wdXRFeGFtcGxlLFxuICBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=