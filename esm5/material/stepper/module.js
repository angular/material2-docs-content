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
export { StepperEditableExample, StepperErrorsExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, };
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
    StepperExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatStepperModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                },] }
    ];
    return StepperExamplesModule;
}());
export { StepperExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBRW5GLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlDQUFpQyxFQUNqQyxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixzQkFBc0IsR0FDdkIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0NBQ3ZCLENBQUM7QUFFRjtJQUFBO0lBWUEsQ0FBQzs7Z0JBWkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQjs7SUFFRCw0QkFBQztDQUFBLEFBWkQsSUFZQztTQURZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHtTdGVwcGVyRWRpdGFibGVFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItZWRpdGFibGUvc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlckVycm9yc0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGVcbn0gZnJvbSAnLi9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck9wdGlvbmFsRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW9wdGlvbmFsL3N0ZXBwZXItb3B0aW9uYWwtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1vdmVydmlldy9zdGVwcGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyU3RhdGVzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLXN0YXRlcy9zdGVwcGVyLXN0YXRlcy1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlclZlcnRpY2FsRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLXZlcnRpY2FsL3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUsXG4gIFN0ZXBwZXJFcnJvcnNFeGFtcGxlLFxuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUsXG4gIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUsXG4gIFN0ZXBwZXJPdmVydmlld0V4YW1wbGUsXG4gIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlLFxuICBTdGVwcGVyVmVydGljYWxFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUsXG4gIFN0ZXBwZXJFcnJvcnNFeGFtcGxlLFxuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUsXG4gIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUsXG4gIFN0ZXBwZXJPdmVydmlld0V4YW1wbGUsXG4gIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlLFxuICBTdGVwcGVyVmVydGljYWxFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFN0ZXBwZXJFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=