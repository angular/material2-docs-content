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
import { InputHarnessExample } from './input-harness/input-harness-example';
import * as i0 from "@angular/core";
export { InputClearableExample, InputErrorStateMatcherExample, InputErrorsExample, InputFormExample, InputHarnessExample, InputHintExample, InputOverviewExample, InputPrefixSuffixExample, };
const EXAMPLES = [
    InputClearableExample,
    InputErrorStateMatcherExample,
    InputErrorsExample,
    InputFormExample,
    InputHarnessExample,
    InputHintExample,
    InputOverviewExample,
    InputPrefixSuffixExample,
];
export class InputExamplesModule {
}
InputExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InputExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputExamplesModule, declarations: [InputClearableExample,
        InputErrorStateMatcherExample,
        InputErrorsExample,
        InputFormExample,
        InputHarnessExample,
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
        InputHarnessExample,
        InputHintExample,
        InputOverviewExample,
        InputPrefixSuffixExample] });
InputExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: InputExamplesModule, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLDZCQUE2QixFQUM3QixrQkFBa0IsRUFDbEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixxQkFBcUI7SUFDckIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQ3pCLENBQUM7QUFlRixNQUFNLE9BQU8sbUJBQW1COzt3SEFBbkIsbUJBQW1CO3lIQUFuQixtQkFBbUIsaUJBdkI5QixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsd0JBQXdCLGFBS3RCLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbUJBQW1CLGFBakJyQixxQkFBcUI7UUFDckIsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixvQkFBb0I7UUFDcEIsd0JBQXdCO3lIQWdCYixtQkFBbUIsWUFackI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGFBQWE7WUFDYixjQUFjO1lBQ2QsV0FBVztZQUNYLG1CQUFtQjtTQUNwQjttR0FLVSxtQkFBbUI7a0JBYi9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7SW5wdXRDbGVhcmFibGVFeGFtcGxlfSBmcm9tICcuL2lucHV0LWNsZWFyYWJsZS9pbnB1dC1jbGVhcmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZVxufSBmcm9tICcuL2lucHV0LWVycm9yLXN0YXRlLW1hdGNoZXIvaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRFcnJvcnNFeGFtcGxlfSBmcm9tICcuL2lucHV0LWVycm9ycy9pbnB1dC1lcnJvcnMtZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0Rm9ybUV4YW1wbGV9IGZyb20gJy4vaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEhpbnRFeGFtcGxlfSBmcm9tICcuL2lucHV0LWhpbnQvaW5wdXQtaGludC1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtb3ZlcnZpZXcvaW5wdXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0UHJlZml4U3VmZml4RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1wcmVmaXgtc3VmZml4L2lucHV0LXByZWZpeC1zdWZmaXgtZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0SGFybmVzc0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtaGFybmVzcy9pbnB1dC1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBJbnB1dENsZWFyYWJsZUV4YW1wbGUsXG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBJbnB1dEVycm9yc0V4YW1wbGUsXG4gIElucHV0Rm9ybUV4YW1wbGUsXG4gIElucHV0SGFybmVzc0V4YW1wbGUsXG4gIElucHV0SGludEV4YW1wbGUsXG4gIElucHV0T3ZlcnZpZXdFeGFtcGxlLFxuICBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgSW5wdXRDbGVhcmFibGVFeGFtcGxlLFxuICBJbnB1dEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSxcbiAgSW5wdXRFcnJvcnNFeGFtcGxlLFxuICBJbnB1dEZvcm1FeGFtcGxlLFxuICBJbnB1dEhhcm5lc3NFeGFtcGxlLFxuICBJbnB1dEhpbnRFeGFtcGxlLFxuICBJbnB1dE92ZXJ2aWV3RXhhbXBsZSxcbiAgSW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=