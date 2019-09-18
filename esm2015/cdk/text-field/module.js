/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldAutofillDirectiveExample } from './text-field-autofill-directive/text-field-autofill-directive-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
export { TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample, };
/** @type {?} */
const EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
export class CdkTextFieldExamplesModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90ZXh0LWZpZWxkL21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3hELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxtRUFBbUUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2pDLE1BQU0scUVBQXFFLENBQUM7QUFFN0UsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQywrQkFBK0IsRUFDL0IsZ0NBQWdDLEdBQ2pDLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixnQ0FBZ0M7Q0FDakM7QUFZRCxNQUFNLE9BQU8sMEJBQTBCOzs7WUFWdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxlQUFlO2lCQUNoQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRGaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUvdGV4dC1maWVsZC1hdXRvZmlsbC1kaXJlY3RpdmUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlXG59IGZyb20gJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUZXh0RmllbGRBdXRvZmlsbERpcmVjdGl2ZUV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFRleHRGaWVsZEF1dG9maWxsRGlyZWN0aXZlRXhhbXBsZSxcbiAgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZSxcbiAgVGV4dEZpZWxkQXV0b3NpemVUZXh0YXJlYUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFRleHRGaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUZXh0RmllbGRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=