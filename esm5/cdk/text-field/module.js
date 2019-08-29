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
    CdkTextFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        TextFieldModule,
                        MatInputModule,
                        MatSelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return CdkTextFieldExamplesModule;
}());
export { CdkTextFieldExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLG1FQUFtRSxDQUFDO0FBQzNFLE9BQU8sRUFDTCxnQ0FBZ0MsRUFDakMsTUFBTSxxRUFBcUUsQ0FBQztBQUU3RSxJQUFNLFFBQVEsR0FBRztJQUNmLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsZ0NBQWdDO0NBQ2pDLENBQUM7QUFFRjtJQUFBO0lBV0EsQ0FBQzs7Z0JBWEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQUVELGlDQUFDO0NBQUEsQUFYRCxJQVdDO1NBRFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZXh0RmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7XG4gIFRleHRGaWVsZEF1dG9maWxsRGlyZWN0aXZlRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRleHRGaWVsZEF1dG9maWxsRGlyZWN0aXZlRXhhbXBsZSxcbiAgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZSxcbiAgVGV4dEZpZWxkQXV0b3NpemVUZXh0YXJlYUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRleHRGaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0RmllbGRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=