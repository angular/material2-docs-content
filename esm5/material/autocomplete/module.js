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
                },] }
    ];
    return AutocompleteExamplesModule;
}());
export { AutocompleteExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsd0NBQXdDLEVBQ3pDLE1BQU0sdUZBQXVGLENBQUM7QUFDL0YsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBRTVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0NBQXdDO0lBQ3hDLDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0IseUJBQXlCO0NBQzFCLENBQUM7QUFFRjtJQUFBO0lBY0EsQ0FBQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLG9CQUFvQjt3QkFDcEIsV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsaUNBQUM7Q0FBQSxBQWRELElBY0M7U0FEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1hdXRvLWFjdGl2ZS1maXJzdC1vcHRpb24vYXV0b2NvbXBsZXRlLWF1dG8tYWN0aXZlLWZpcnN0LW9wdGlvbi1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWRpc3BsYXkvYXV0b2NvbXBsZXRlLWRpc3BsYXktZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWZpbHRlci9hdXRvY29tcGxldGUtZmlsdGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtBdXRvY29tcGxldGVPcHRncm91cEV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLW9wdGdyb3VwL2F1dG9jb21wbGV0ZS1vcHRncm91cC1leGFtcGxlJztcbmltcG9ydCB7QXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2F1dG9jb21wbGV0ZS1vdmVydmlldy9hdXRvY29tcGxldGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZVxufSBmcm9tICcuL2F1dG9jb21wbGV0ZS1wbGFpbi1pbnB1dC9hdXRvY29tcGxldGUtcGxhaW4taW5wdXQtZXhhbXBsZSc7XG5pbXBvcnQge0F1dG9jb21wbGV0ZVNpbXBsZUV4YW1wbGV9IGZyb20gJy4vYXV0b2NvbXBsZXRlLXNpbXBsZS9hdXRvY29tcGxldGUtc2ltcGxlLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQXV0b2NvbXBsZXRlQXV0b0FjdGl2ZUZpcnN0T3B0aW9uRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlRGlzcGxheUV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZUZpbHRlckV4YW1wbGUsXG4gIEF1dG9jb21wbGV0ZU9wdGdyb3VwRXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlT3ZlcnZpZXdFeGFtcGxlLFxuICBBdXRvY29tcGxldGVQbGFpbklucHV0RXhhbXBsZSxcbiAgQXV0b2NvbXBsZXRlU2ltcGxlRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19