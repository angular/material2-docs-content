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
FormFieldExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: FormFieldExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormFieldExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: FormFieldExamplesModule, declarations: [FormFieldAppearanceExample,
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
FormFieldExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: FormFieldExamplesModule, imports: [[
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: FormFieldExamplesModule, decorators: [{
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
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixVQUFVLEdBQ1gsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFeEYsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtDQUN4QixDQUFDO0FBa0JGLE1BQU0sT0FBTyx1QkFBdUI7O3lIQUF2Qix1QkFBdUI7MEhBQXZCLHVCQUF1QixpQkEzQmxDLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsdUJBQXVCLEVBZUssVUFBVSxhQVZwQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixhQXJCckIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLDRCQUE0QjtRQUM1Qix1QkFBdUI7MEhBbUJaLHVCQUF1QixZQWZ6QjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsY0FBYztZQUNkLGNBQWM7WUFDZCxlQUFlO1lBQ2YsbUJBQW1CO1NBQ3BCO2dHQUtVLHVCQUF1QjtrQkFoQm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLFVBQVUsQ0FBQztvQkFDdkMsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWFwcGVhcmFuY2UvZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59IGZyb20gJy4vZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRFcnJvckV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRIaW50RXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWhpbnQvZm9ybS1maWVsZC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRMYWJlbEV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZFRoZW1pbmdFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtaGFybmVzcy9mb3JtLWZpZWxkLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEZvcm1GaWVsZEFwcGVhcmFuY2VFeGFtcGxlLFxuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgRm9ybUZpZWxkRXJyb3JFeGFtcGxlLFxuICBGb3JtRmllbGRIYXJuZXNzRXhhbXBsZSxcbiAgRm9ybUZpZWxkSGludEV4YW1wbGUsXG4gIEZvcm1GaWVsZExhYmVsRXhhbXBsZSxcbiAgRm9ybUZpZWxkT3ZlcnZpZXdFeGFtcGxlLFxuICBGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlLFxuICBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSxcbiAgTXlUZWxJbnB1dCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZSxcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIEZvcm1GaWVsZEVycm9yRXhhbXBsZSxcbiAgRm9ybUZpZWxkSGFybmVzc0V4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==