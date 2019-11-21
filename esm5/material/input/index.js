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
                },] },
    ];
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDOztBQUUzRixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDZCQUE2QixFQUM3QixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN6QixDQUFDO0FBRUY7SUFBQTtLQWFDOztnQkFiQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7OzJEQUNZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQVhyQjtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLFdBQVc7Z0JBQ1gsbUJBQW1CO2FBQ3BCOzhCQTVDSDtDQWlEQyxBQWJELElBYUM7U0FEWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFyQjlCLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsb0JBQW9CO1FBQ3BCLHdCQUF3QixhQUt0QixZQUFZO1FBQ1osZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsV0FBVztRQUNYLG1CQUFtQixhQWhCckIscUJBQXFCO1FBQ3JCLDZCQUE2QjtRQUM3QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsd0JBQXdCO2tEQWViLG1CQUFtQjtjQVovQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsV0FBVztvQkFDWCxtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge0lucHV0Q2xlYXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1jbGVhcmFibGUvaW5wdXQtY2xlYXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGVcbn0gZnJvbSAnLi9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0RXJyb3JzRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1lcnJvcnMvaW5wdXQtZXJyb3JzLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEZvcm1FeGFtcGxlfSBmcm9tICcuL2lucHV0LWZvcm0vaW5wdXQtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRIaW50RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1oaW50L2lucHV0LWhpbnQtZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2lucHV0LW92ZXJ2aWV3L2lucHV0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGV9IGZyb20gJy4vaW5wdXQtcHJlZml4LXN1ZmZpeC9pbnB1dC1wcmVmaXgtc3VmZml4LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBJbnB1dENsZWFyYWJsZUV4YW1wbGUsXG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBJbnB1dEVycm9yc0V4YW1wbGUsXG4gIElucHV0Rm9ybUV4YW1wbGUsXG4gIElucHV0SGludEV4YW1wbGUsXG4gIElucHV0T3ZlcnZpZXdFeGFtcGxlLFxuICBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgSW5wdXRDbGVhcmFibGVFeGFtcGxlLFxuICBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSxcbiAgSW5wdXRFcnJvcnNFeGFtcGxlLFxuICBJbnB1dEZvcm1FeGFtcGxlLFxuICBJbnB1dEhpbnRFeGFtcGxlLFxuICBJbnB1dE92ZXJ2aWV3RXhhbXBsZSxcbiAgSW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=