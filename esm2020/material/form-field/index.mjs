import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormFieldAppearanceExample } from './form-field-appearance/form-field-appearance-example';
import { FormFieldCustomControlExample, MyTelInput, } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldErrorExample } from './form-field-error/form-field-error-example';
import { FormFieldHintExample } from './form-field-hint/form-field-hint-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { FormFieldOverviewExample } from './form-field-overview/form-field-overview-example';
import { FormFieldPrefixSuffixExample } from './form-field-prefix-suffix/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './form-field-theming/form-field-theming-example';
import { FormFieldHarnessExample } from './form-field-harness/form-field-harness-example';
import * as i0 from "@angular/core";
export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHarnessExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput, };
const EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHarnessExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
export class FormFieldExamplesModule {
}
FormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FormFieldExamplesModule, declarations: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHarnessExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample, MyTelInput], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        ReactiveFormsModule], exports: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHarnessExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample] });
FormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FormFieldExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatFormFieldModule,
            MatIconModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.13", ngImport: i0, type: FormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                        MatRadioModule,
                        MatSelectModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEdBQ1gsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFeEYsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtDQUN4QixDQUFDO0FBaUJGLE1BQU0sT0FBTyx1QkFBdUI7OzRIQUF2Qix1QkFBdUI7NkhBQXZCLHVCQUF1QixpQkExQmxDLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsdUJBQXVCLEVBZUssVUFBVSxhQVZwQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixhQXJCckIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1Qix1QkFBdUI7NkhBa0JaLHVCQUF1QixZQWR6QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1lBQ2YsbUJBQW1CO1NBQ3BCO21HQUlVLHVCQUF1QjtrQkFmbkMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsa0JBQWtCO3dCQUNsQixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO29CQUN2QyxPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7Rm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1hcHBlYXJhbmNlL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufSBmcm9tICcuL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkRXJyb3JFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtZXJyb3IvZm9ybS1maWVsZC1lcnJvci1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkSGludEV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkTGFiZWxFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtbGFiZWwvZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtb3ZlcnZpZXcvZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRUaGVtaW5nRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWhhcm5lc3MvZm9ybS1maWVsZC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZSxcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIEZvcm1GaWVsZEVycm9yRXhhbXBsZSxcbiAgRm9ybUZpZWxkSGFybmVzc0V4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBGb3JtRmllbGRFcnJvckV4YW1wbGUsXG4gIEZvcm1GaWVsZEhhcm5lc3NFeGFtcGxlLFxuICBGb3JtRmllbGRIaW50RXhhbXBsZSxcbiAgRm9ybUZpZWxkTGFiZWxFeGFtcGxlLFxuICBGb3JtRmllbGRPdmVydmlld0V4YW1wbGUsXG4gIEZvcm1GaWVsZFByZWZpeFN1ZmZpeEV4YW1wbGUsXG4gIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=