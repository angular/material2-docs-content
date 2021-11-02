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
InputExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: InputExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InputExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: InputExamplesModule, declarations: [InputClearableExample,
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
InputExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: InputExamplesModule, imports: [[
            CommonModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            FormsModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: InputExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDNUcsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRTFFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsNkJBQTZCLEVBQzdCLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUNoQixvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDekIsQ0FBQztBQWVGLE1BQU0sT0FBTyxtQkFBbUI7O3FIQUFuQixtQkFBbUI7c0hBQW5CLG1CQUFtQixpQkF2QjlCLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQix3QkFBd0IsYUFLdEIsWUFBWTtRQUNaLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLFdBQVc7UUFDWCxtQkFBbUIsYUFqQnJCLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQix3QkFBd0I7c0hBZ0JiLG1CQUFtQixZQVpyQjtZQUNQLFlBQVk7WUFDWixlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxXQUFXO1lBQ1gsbUJBQW1CO1NBQ3BCO2dHQUtVLG1CQUFtQjtrQkFiL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtJbnB1dENsZWFyYWJsZUV4YW1wbGV9IGZyb20gJy4vaW5wdXQtY2xlYXJhYmxlL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGV9IGZyb20gJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEVycm9yc0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtZXJyb3JzL2lucHV0LWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRGb3JtRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0SGludEV4YW1wbGV9IGZyb20gJy4vaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlfSBmcm9tICcuL2lucHV0LXByZWZpeC1zdWZmaXgvaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1oYXJuZXNzL2lucHV0LWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIElucHV0Q2xlYXJhYmxlRXhhbXBsZSxcbiAgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIElucHV0RXJyb3JzRXhhbXBsZSxcbiAgSW5wdXRGb3JtRXhhbXBsZSxcbiAgSW5wdXRIYXJuZXNzRXhhbXBsZSxcbiAgSW5wdXRIaW50RXhhbXBsZSxcbiAgSW5wdXRPdmVydmlld0V4YW1wbGUsXG4gIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBJbnB1dENsZWFyYWJsZUV4YW1wbGUsXG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBJbnB1dEVycm9yc0V4YW1wbGUsXG4gIElucHV0Rm9ybUV4YW1wbGUsXG4gIElucHV0SGFybmVzc0V4YW1wbGUsXG4gIElucHV0SGludEV4YW1wbGUsXG4gIElucHV0T3ZlcnZpZXdFeGFtcGxlLFxuICBJbnB1dFByZWZpeFN1ZmZpeEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=