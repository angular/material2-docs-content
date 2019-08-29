import * as tslib_1 from "tslib";
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
import { FormFieldCustomControlExample, MyTelInput } from './form-field-custom-control/form-field-custom-control-example';
import { FormFieldErrorExample } from './form-field-error/form-field-error-example';
import { FormFieldHintExample } from './form-field-hint/form-field-hint-example';
import { FormFieldLabelExample } from './form-field-label/form-field-label-example';
import { FormFieldOverviewExample } from './form-field-overview/form-field-overview-example';
import { FormFieldPrefixSuffixExample } from './form-field-prefix-suffix/form-field-prefix-suffix-example';
import { FormFieldThemingExample } from './form-field-theming/form-field-theming-example';
var EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
var FormFieldExamplesModule = /** @class */ (function () {
    function FormFieldExamplesModule() {
    }
    FormFieldExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                    declarations: tslib_1.__spread(EXAMPLES, [MyTelInput]),
                    exports: EXAMPLES,
                },] }
    ];
    return FormFieldExamplesModule;
}());
export { FormFieldExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsVUFBVSxFQUNYLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBRXhGLElBQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQTtJQWdCQSxDQUFDOztnQkFoQkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLG1CQUFNLFFBQVEsR0FBRSxVQUFVLEVBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw4QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge0Zvcm1GaWVsZEFwcGVhcmFuY2VFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS9mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgTXlUZWxJbnB1dFxufSBmcm9tICcuL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wvZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkRXJyb3JFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtZXJyb3IvZm9ybS1maWVsZC1lcnJvci1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkSGludEV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkTGFiZWxFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtbGFiZWwvZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtb3ZlcnZpZXcvZm9ybS1maWVsZC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIEZvcm1GaWVsZFByZWZpeFN1ZmZpeEV4YW1wbGVcbn0gZnJvbSAnLi9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRUaGVtaW5nRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLXRoZW1pbmcvZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUnO1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBGb3JtRmllbGRFcnJvckV4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19