import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
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
FormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: FormFieldExamplesModule, declarations: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHarnessExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample, MyTelInput], imports: [CommonModule,
        MatLegacyButtonModule,
        MatLegacyCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatLegacyRadioModule,
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
FormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FormFieldExamplesModule, imports: [CommonModule,
        MatLegacyButtonModule,
        MatLegacyCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatLegacyRadioModule,
        MatSelectModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FormFieldExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyButtonModule,
                        MatLegacyCheckboxModule,
                        MatFormFieldModule,
                        MatIconModule,
                        MatInputModule,
                        MatLegacyRadioModule,
                        MatSelectModule,
                        ReactiveFormsModule,
                    ],
                    declarations: [...EXAMPLES, MyTelInput],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsVUFBVSxHQUNYLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDekcsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsNkJBQTZCLEVBQzdCLHFCQUFxQixFQUNyQix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsNEJBQTRCLEVBQzVCLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQWlCRixNQUFNLE9BQU8sdUJBQXVCOztvSEFBdkIsdUJBQXVCO3FIQUF2Qix1QkFBdUIsaUJBMUJsQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLHVCQUF1QixFQWVLLFVBQVUsYUFWcEMsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixtQkFBbUIsYUFyQnJCLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsdUJBQXVCO3FIQWtCWix1QkFBdUIsWUFiaEMsWUFBWTtRQUNaLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixtQkFBbUI7MkZBS1YsdUJBQXVCO2tCQWZuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLHFCQUFxQjt3QkFDckIsdUJBQXVCO3dCQUN2QixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxVQUFVLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0TGVnYWN5QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktYnV0dG9uJztcbmltcG9ydCB7TWF0TGVnYWN5Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jaGVja2JveCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRMZWdhY3lSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWFwcGVhcmFuY2UvZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59IGZyb20gJy4vZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRFcnJvckV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRIaW50RXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWhpbnQvZm9ybS1maWVsZC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRMYWJlbEV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZFRoZW1pbmdFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtaGFybmVzcy9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEZvcm1GaWVsZEFwcGVhcmFuY2VFeGFtcGxlLFxuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgRm9ybUZpZWxkRXJyb3JFeGFtcGxlLFxuICBGb3JtRmllbGRIYXJuZXNzRXhhbXBsZSxcbiAgRm9ybUZpZWxkSGludEV4YW1wbGUsXG4gIEZvcm1GaWVsZExhYmVsRXhhbXBsZSxcbiAgRm9ybUZpZWxkT3ZlcnZpZXdFeGFtcGxlLFxuICBGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlLFxuICBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSxcbiAgTXlUZWxJbnB1dCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZSxcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIEZvcm1GaWVsZEVycm9yRXhhbXBsZSxcbiAgRm9ybUZpZWxkSGFybmVzc0V4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRMZWdhY3lSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==