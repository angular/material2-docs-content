import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { StepperEditableExample } from './stepper-editable/stepper-editable-example';
import { StepperErrorsExample } from './stepper-errors/stepper-errors-example';
import { StepperLabelPositionBottomExample } from './stepper-label-position-bottom/stepper-label-position-bottom-example';
import { StepperOptionalExample } from './stepper-optional/stepper-optional-example';
import { StepperOverviewExample } from './stepper-overview/stepper-overview-example';
import { StepperStatesExample } from './stepper-states/stepper-states-example';
import { StepperVerticalExample } from './stepper-vertical/stepper-vertical-example';
var EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
];
var StepperExamplesModule = /** @class */ (function () {
    function StepperExamplesModule() {
    }
    StepperExamplesModule = tslib_1.__decorate([
        NgModule({
            imports: [
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                MatStepperModule,
                ReactiveFormsModule,
            ],
            declarations: EXAMPLES,
            exports: EXAMPLES,
        })
    ], StepperExamplesModule);
    return StepperExamplesModule;
}());
export { StepperExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx1RUFBdUUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUVuRixJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtDQUN2QixDQUFDO0FBYUY7SUFBQTtJQUNBLENBQUM7SUFEWSxxQkFBcUI7UUFYakMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixjQUFjO2dCQUNkLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2FBQ3BCO1lBQ0QsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztPQUNXLHFCQUFxQixDQUNqQztJQUFELDRCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge1N0ZXBwZXJFZGl0YWJsZUV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyRXJyb3JzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVycm9ycy9zdGVwcGVyLWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZVxufSBmcm9tICcuL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3B0aW9uYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3B0aW9uYWwvc3RlcHBlci1vcHRpb25hbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJTdGF0ZXNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItc3RhdGVzL3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyVmVydGljYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItdmVydGljYWwvc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUsXG4gIFN0ZXBwZXJFcnJvcnNFeGFtcGxlLFxuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUsXG4gIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUsXG4gIFN0ZXBwZXJPdmVydmlld0V4YW1wbGUsXG4gIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlLFxuICBTdGVwcGVyVmVydGljYWxFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=