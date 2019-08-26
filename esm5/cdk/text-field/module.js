import * as tslib_1 from "tslib";
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldAutofillDirectiveExample } from './text-field-autofill-directive/text-field-autofill-directive-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
var EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
var CdkTextFieldExamplesModule = /** @class */ (function () {
    function CdkTextFieldExamplesModule() {
    }
    CdkTextFieldExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                TextFieldModule,
                MatInputModule,
                MatSelectModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], CdkTextFieldExamplesModule);
    return CdkTextFieldExamplesModule;
}());
export { CdkTextFieldExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxtRUFBbUUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2pDLE1BQU0scUVBQXFFLENBQUM7QUFFN0UsSUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLGdDQUFnQztDQUNqQyxDQUFDO0FBWUY7SUFBQTtJQUNBLENBQUM7SUFEWSwwQkFBMEI7UUFWdEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixjQUFjO2dCQUNkLGVBQWU7YUFDaEI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO09BQ1csMEJBQTBCLENBQ3RDO0lBQUQsaUNBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRGaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUvdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVGV4dEZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RleHRGaWVsZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==