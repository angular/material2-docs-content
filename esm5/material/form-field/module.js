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
export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput, };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFDTCw2QkFBNkIsRUFDN0IsVUFBVSxFQUNYLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBRXhGLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsNkJBQTZCLEVBQzdCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLHdCQUF3QixFQUN4Qiw0QkFBNEIsRUFDNUIsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsdUJBQXVCO0NBQ3hCLENBQUM7QUFFRjtJQUFBO0lBZ0JBLENBQUM7O2dCQWhCQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixpQkFBaUI7d0JBQ2pCLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksbUJBQU0sUUFBUSxHQUFFLFVBQVUsRUFBQztvQkFDdkMsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOztJQUVELDhCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FEWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7Rm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1hcHBlYXJhbmNlL2Zvcm0tZmllbGQtYXBwZWFyYW5jZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBNeVRlbElucHV0XG59IGZyb20gJy4vZm9ybS1maWVsZC1jdXN0b20tY29udHJvbC9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRFcnJvckV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRIaW50RXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWhpbnQvZm9ybS1maWVsZC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRMYWJlbEV4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUnO1xuaW1wb3J0IHtGb3JtRmllbGRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC1vdmVydmlldy9mb3JtLWZpZWxkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZVxufSBmcm9tICcuL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZFRoZW1pbmdFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEZvcm1GaWVsZEFwcGVhcmFuY2VFeGFtcGxlLFxuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgRm9ybUZpZWxkRXJyb3JFeGFtcGxlLFxuICBGb3JtRmllbGRIaW50RXhhbXBsZSxcbiAgRm9ybUZpZWxkTGFiZWxFeGFtcGxlLFxuICBGb3JtRmllbGRPdmVydmlld0V4YW1wbGUsXG4gIEZvcm1GaWVsZFByZWZpeFN1ZmZpeEV4YW1wbGUsXG4gIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlLFxuICBNeVRlbElucHV0LFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEZvcm1GaWVsZEFwcGVhcmFuY2VFeGFtcGxlLFxuICBGb3JtRmllbGRDdXN0b21Db250cm9sRXhhbXBsZSxcbiAgRm9ybUZpZWxkRXJyb3JFeGFtcGxlLFxuICBGb3JtRmllbGRIaW50RXhhbXBsZSxcbiAgRm9ybUZpZWxkTGFiZWxFeGFtcGxlLFxuICBGb3JtRmllbGRPdmVydmlld0V4YW1wbGUsXG4gIEZvcm1GaWVsZFByZWZpeFN1ZmZpeEV4YW1wbGUsXG4gIEZvcm1GaWVsZFRoZW1pbmdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBNeVRlbElucHV0XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==