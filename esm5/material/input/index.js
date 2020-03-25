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
var EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
var InputExamplesModule = /** @class */ (function () {
    function InputExamplesModule() {
    }
    InputExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: InputExamplesModule });
    InputExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function InputExamplesModule_Factory(t) { return new (t || InputExamplesModule)(); }, imports: [[
                CommonModule,
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                FormsModule,
                ReactiveFormsModule,
            ]] });
    return InputExamplesModule;
}());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOztBQUUzRixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDZCQUE2QixFQUM3QixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUY7SUFBQTtLQWNDOzJEQURZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQVpyQjtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsbUJBQW1CO2FBQ3BCOzhCQTVDSDtDQWtEQyxBQWRELElBY0M7U0FEWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkF0QjlCLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QixhQUt0QixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQixhQWhCckIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsd0JBQXdCO2tEQWdCYixtQkFBbUI7Y0FiL0IsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLFdBQVc7b0JBQ1gsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7SW5wdXRDbGVhcmFibGVFeGFtcGxlfSBmcm9tICcuL2lucHV0LWNsZWFyYWJsZS9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZVxufSBmcm9tICcuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXIvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRFcnJvcnNFeGFtcGxlfSBmcm9tICcuL2lucHV0LWVycm9ycy9pbnB1dC1lcnJvcnMtZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0Rm9ybUV4YW1wbGV9IGZyb20gJy4vaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEhpbnRFeGFtcGxlfSBmcm9tICcuL2lucHV0LWhpbnQvaW5wdXQtaGludC1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtb3ZlcnZpZXcvaW5wdXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0UHJlZml4U3VmZml4RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIElucHV0Q2xlYXJhYmxlRXhhbXBsZSxcbiAgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIElucHV0RXJyb3JzRXhhbXBsZSxcbiAgSW5wdXRGb3JtRXhhbXBsZSxcbiAgSW5wdXRIaW50RXhhbXBsZSxcbiAgSW5wdXRPdmVydmlld0V4YW1wbGUsXG4gIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBJbnB1dENsZWFyYWJsZUV4YW1wbGUsXG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBJbnB1dEVycm9yc0V4YW1wbGUsXG4gIElucHV0Rm9ybUV4YW1wbGUsXG4gIElucHV0SGludEV4YW1wbGUsXG4gIElucHV0T3ZlcnZpZXdFeGFtcGxlLFxuICBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==