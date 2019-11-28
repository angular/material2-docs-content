/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/form-field/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import * as i0 from "@angular/core";
export { FormFieldAppearanceExample, FormFieldCustomControlExample, FormFieldErrorExample, FormFieldHintExample, FormFieldLabelExample, FormFieldOverviewExample, FormFieldPrefixSuffixExample, FormFieldThemingExample, MyTelInput, };
/** @type {?} */
const EXAMPLES = [
    FormFieldAppearanceExample,
    FormFieldCustomControlExample,
    FormFieldErrorExample,
    FormFieldHintExample,
    FormFieldLabelExample,
    FormFieldOverviewExample,
    FormFieldPrefixSuffixExample,
    FormFieldThemingExample,
];
export class FormFieldExamplesModule {
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
                declarations: [...EXAMPLES, MyTelInput],
                exports: EXAMPLES,
            },] },
];
/** @nocollapse */ FormFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: FormFieldExamplesModule });
/** @nocollapse */ FormFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FormFieldExamplesModule_Factory(t) { return new (t || FormFieldExamplesModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FormFieldExamplesModule, { declarations: [FormFieldAppearanceExample,
        FormFieldCustomControlExample,
        FormFieldErrorExample,
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample,
        MyTelInput], imports: [CommonModule,
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
        FormFieldHintExample,
        FormFieldLabelExample,
        FormFieldOverviewExample,
        FormFieldPrefixSuffixExample,
        FormFieldThemingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FormFieldExamplesModule, [{
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQztBQUNqRyxPQUFPLEVBQ0wsNkJBQTZCLEVBQzdCLFVBQVUsRUFDWCxNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFeEYsT0FBTyxFQUNMLDBCQUEwQixFQUMxQiw2QkFBNkIsRUFDN0IscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsd0JBQXdCLEVBQ3hCLDRCQUE0QixFQUM1Qix1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLHVCQUF1QjtDQUN4QjtBQWlCRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFmbkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxjQUFjO29CQUNkLGVBQWU7b0JBQ2YsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxVQUFVLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzsyREFDWSx1QkFBdUI7NkhBQXZCLHVCQUF1QixrQkFkekI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGNBQWM7WUFDZCxjQUFjO1lBQ2QsZUFBZTtZQUNmLG1CQUFtQjtTQUNwQjt3RkFJVSx1QkFBdUIsbUJBekJsQywwQkFBMEI7UUFDMUIsNkJBQTZCO1FBQzdCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHdCQUF3QjtRQUN4Qiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBZUssVUFBVSxhQVZwQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixhQXBCckIsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLHVCQUF1QjtrREFrQlosdUJBQXVCO2NBZm5DLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsa0JBQWtCO29CQUNsQixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsVUFBVSxDQUFDO2dCQUN2QyxPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtGb3JtRmllbGRBcHBlYXJhbmNlRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWFwcGVhcmFuY2UvZm9ybS1maWVsZC1hcHBlYXJhbmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgRm9ybUZpZWxkQ3VzdG9tQ29udHJvbEV4YW1wbGUsXG4gIE15VGVsSW5wdXRcbn0gZnJvbSAnLi9mb3JtLWZpZWxkLWN1c3RvbS1jb250cm9sL2Zvcm0tZmllbGQtY3VzdG9tLWNvbnRyb2wtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZEVycm9yRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWVycm9yL2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZEhpbnRFeGFtcGxlfSBmcm9tICcuL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZExhYmVsRXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZSc7XG5pbXBvcnQge0Zvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9mb3JtLWZpZWxkLW92ZXJ2aWV3L2Zvcm0tZmllbGQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1xuICBGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlXG59IGZyb20gJy4vZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJztcbmltcG9ydCB7Rm9ybUZpZWxkVGhlbWluZ0V4YW1wbGV9IGZyb20gJy4vZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBGb3JtRmllbGRFcnJvckV4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG4gIE15VGVsSW5wdXQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRm9ybUZpZWxkQXBwZWFyYW5jZUV4YW1wbGUsXG4gIEZvcm1GaWVsZEN1c3RvbUNvbnRyb2xFeGFtcGxlLFxuICBGb3JtRmllbGRFcnJvckV4YW1wbGUsXG4gIEZvcm1GaWVsZEhpbnRFeGFtcGxlLFxuICBGb3JtRmllbGRMYWJlbEV4YW1wbGUsXG4gIEZvcm1GaWVsZE92ZXJ2aWV3RXhhbXBsZSxcbiAgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSxcbiAgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIE15VGVsSW5wdXRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkRXhhbXBsZXNNb2R1bGUge1xufVxuIl19