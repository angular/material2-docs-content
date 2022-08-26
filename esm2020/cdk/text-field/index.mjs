import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
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
CdkTextFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkTextFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkTextFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: CdkTextFieldExamplesModule, declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] });
CdkTextFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkTextFieldExamplesModule, imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: CdkTextFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, TextFieldModule, MatButtonModule, MatInputModule, MatSelectModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlDQUFpQyxFQUFDLE1BQU0sdUVBQXVFLENBQUM7QUFDeEgsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0sbUVBQW1FLENBQUM7QUFDbEgsT0FBTyxFQUFDLGdDQUFnQyxFQUFDLE1BQU0scUVBQXFFLENBQUM7O0FBRXJILE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsK0JBQStCLEVBQy9CLGdDQUFnQyxHQUNqQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLGdDQUFnQztDQUNqQyxDQUFDO0FBT0YsTUFBTSxPQUFPLDBCQUEwQjs7dUhBQTFCLDBCQUEwQjt3SEFBMUIsMEJBQTBCLGlCQVZyQyxpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGdDQUFnQyxhQUl0QixZQUFZLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxhQU56RixpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLGdDQUFnQzt3SEFRckIsMEJBQTBCLFlBSjNCLFlBQVksRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlOzJGQUk5RSwwQkFBMEI7a0JBTHRDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQztvQkFDMUYsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dEZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7VGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZSc7XG5pbXBvcnQge1RleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlfSBmcm9tICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUZXh0RmllbGRBdXRvZmlsbERpcmVjdGl2ZUV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgVGV4dEZpZWxkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVGV4dEZpZWxkRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==