import * as tslib_1 from "tslib";
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
    InputExamplesModule = tslib_1.__decorate([
        NgModule({
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
        })
    ], InputExamplesModule);
    return InputExamplesModule;
}());
export { InputExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2lucHV0L21vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNqRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUUzRixJQUFNLFFBQVEsR0FBRztJQUNmLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtDQUN6QixDQUFDO0FBY0Y7SUFBQTtJQUNBLENBQUM7SUFEWSxtQkFBbUI7UUFaL0IsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxtQkFBbUI7YUFDcEI7WUFDRCxZQUFZLEVBQUUsUUFBUTtZQUN0QixPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDO09BQ1csbUJBQW1CLENBQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtJbnB1dENsZWFyYWJsZUV4YW1wbGV9IGZyb20gJy4vaW5wdXQtY2xlYXJhYmxlL2lucHV0LWNsZWFyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIElucHV0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlXG59IGZyb20gJy4vaW5wdXQtZXJyb3Itc3RhdGUtbWF0Y2hlci9pbnB1dC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dEVycm9yc0V4YW1wbGV9IGZyb20gJy4vaW5wdXQtZXJyb3JzL2lucHV0LWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRGb3JtRXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZSc7XG5pbXBvcnQge0lucHV0SGludEV4YW1wbGV9IGZyb20gJy4vaW5wdXQtaGludC9pbnB1dC1oaW50LWV4YW1wbGUnO1xuaW1wb3J0IHtJbnB1dE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9pbnB1dC1vdmVydmlldy9pbnB1dC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7SW5wdXRQcmVmaXhTdWZmaXhFeGFtcGxlfSBmcm9tICcuL2lucHV0LXByZWZpeC1zdWZmaXgvaW5wdXQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIElucHV0Q2xlYXJhYmxlRXhhbXBsZSxcbiAgSW5wdXRFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIElucHV0RXJyb3JzRXhhbXBsZSxcbiAgSW5wdXRGb3JtRXhhbXBsZSxcbiAgSW5wdXRIaW50RXhhbXBsZSxcbiAgSW5wdXRPdmVydmlld0V4YW1wbGUsXG4gIElucHV0UHJlZml4U3VmZml4RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIElucHV0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19