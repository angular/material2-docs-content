/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/input/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InputClearableExample } from './input-clearable/input-clearable-example';
import { InputErrorStateMatcherExample } from './input-error-state-matcher/input-error-state-matcher-example';
import { InputErrorsExample } from './input-errors/input-errors-example';
import { InputFormExample } from './input-form/input-form-example';
import { InputHintExample } from './input-hint/input-hint-example';
import { InputOverviewExample } from './input-overview/input-overview-example';
import { InputPrefixSuffixExample } from './input-prefix-suffix/input-prefix-suffix-example';
import * as i0 from "@angular/core";
export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputFormExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample, };
/** @type {?} */
const EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
let InputExamplesModule = /** @class */ (() => {
    class InputExamplesModule {
    }
    InputExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ InputExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: InputExamplesModule });
    /** @nocollapse */ InputExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return InputExamplesModule;
})();
export { InputExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(InputExamplesModule, { declarations: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample], imports: [CommonModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule], exports: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InputExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    FormsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7O0FBRTNGLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQix3QkFBd0IsR0FDekIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekI7QUFFRDtJQUFBLE1BYWEsbUJBQW1COzs7Z0JBYi9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7OzhFQUNZLG1CQUFtQjs0SUFBbkIsbUJBQW1CLGtCQVpyQjtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsbUJBQW1CO2FBQ3BCOzhCQTVDSDtLQWtEQztTQURZLG1CQUFtQjt3RkFBbkIsbUJBQW1CLG1CQXRCOUIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsd0JBQXdCLGFBS3RCLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbUJBQW1CLGFBaEJyQixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQix3QkFBd0I7a0RBZ0JiLG1CQUFtQjtjQWIvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtJbnB1dENsZWFyYWJsZUV4YW1wbGV9IGZyb20gJy4vaW5wdXQtY2xlYXJhYmxlL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlXG59IGZyb20gJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEVycm9yc0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtZXJyb3JzL2lucHV0LWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRGb3JtRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0SGludEV4YW1wbGV9IGZyb20gJy4vaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlfSBmcm9tICcuL2lucHV0LXByZWZpeC1zdWZmaXgvaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgSW5wdXRDbGVhcmFibGVFeGFtcGxlLFxuICBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSxcbiAgSW5wdXRFcnJvcnNFeGFtcGxlLFxuICBJbnB1dEZvcm1FeGFtcGxlLFxuICBJbnB1dEhpbnRFeGFtcGxlLFxuICBJbnB1dE92ZXJ2aWV3RXhhbXBsZSxcbiAgSW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIElucHV0Q2xlYXJhYmxlRXhhbXBsZSxcbiAgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIElucHV0RXJyb3JzRXhhbXBsZSxcbiAgSW5wdXRGb3JtRXhhbXBsZSxcbiAgSW5wdXRIaW50RXhhbXBsZSxcbiAgSW5wdXRPdmVydmlld0V4YW1wbGUsXG4gIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19