import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { TextFieldAutofillDirectiveExample } from './text-field-autofill-directive/text-field-autofill-directive-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
import * as i0 from "@angular/core";
export { TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample, };
const EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
export class CdkTextFieldExamplesModule {
}
CdkTextFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTextFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTextFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: CdkTextFieldExamplesModule, declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule,
        TextFieldModule,
        MatButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] });
CdkTextFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTextFieldExamplesModule, imports: [CommonModule,
        TextFieldModule,
        MatButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CdkTextFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        TextFieldModule,
                        MatButtonModule,
                        MatLegacyInputModule,
                        MatLegacySelectModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyxpQ0FBaUMsRUFBQyxNQUFNLHVFQUF1RSxDQUFDO0FBQ3hILE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLG1FQUFtRSxDQUFDO0FBQ2xILE9BQU8sRUFBQyxnQ0FBZ0MsRUFBQyxNQUFNLHFFQUFxRSxDQUFDOztBQUVySCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLCtCQUErQixFQUMvQixnQ0FBZ0MsR0FDakMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQixnQ0FBZ0M7Q0FDakMsQ0FBQztBQWFGLE1BQU0sT0FBTywwQkFBMEI7O3VIQUExQiwwQkFBMEI7d0hBQTFCLDBCQUEwQixpQkFoQnJDLGlDQUFpQztRQUNqQywrQkFBK0I7UUFDL0IsZ0NBQWdDLGFBSzlCLFlBQVk7UUFDWixlQUFlO1FBQ2YsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixxQkFBcUIsYUFYdkIsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixnQ0FBZ0M7d0hBY3JCLDBCQUEwQixZQVRuQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIscUJBQXFCOzJGQUtaLDBCQUEwQjtrQkFYdEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGVBQWU7d0JBQ2Ysb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3RCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RleHRGaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7VGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZSc7XG5pbXBvcnQge1RleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUZXh0RmllbGRBdXRvZmlsbERpcmVjdGl2ZUV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUlucHV0TW9kdWxlLFxuICAgIE1hdExlZ2FjeVNlbGVjdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RleHRGaWVsZEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=