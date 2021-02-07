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
import { StepperHarnessExample } from './stepper-harness/stepper-harness-example';
import { StepperLazyContentExample } from './stepper-lazy-content/stepper-lazy-content-example';
import * as i0 from "@angular/core";
export { StepperEditableExample, StepperErrorsExample, StepperHarnessExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, StepperLazyContentExample, };
const EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperHarnessExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
    StepperLazyContentExample,
];
export class StepperExamplesModule {
}
StepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
StepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatStepperModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule], exports: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatStepperModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0Qix5QkFBeUIsR0FDMUIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix5QkFBeUI7Q0FDMUIsQ0FBQztBQWNGLE1BQU0sT0FBTyxxQkFBcUI7O3lEQUFyQixxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkFYdkI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1NBQ3BCO3dGQUtVLHFCQUFxQixtQkF2QmhDLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCLGFBS3ZCLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUIsYUFqQnJCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO3VGQWVkLHFCQUFxQjtjQVpqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge1N0ZXBwZXJFZGl0YWJsZUV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyRXJyb3JzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVycm9ycy9zdGVwcGVyLWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZVxufSBmcm9tICcuL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3B0aW9uYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3B0aW9uYWwvc3RlcHBlci1vcHRpb25hbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJTdGF0ZXNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItc3RhdGVzL3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyVmVydGljYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItdmVydGljYWwvc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJMYXp5Q29udGVudEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUsXG4gIFN0ZXBwZXJFcnJvcnNFeGFtcGxlLFxuICBTdGVwcGVySGFybmVzc0V4YW1wbGUsXG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZSxcbiAgU3RlcHBlck9wdGlvbmFsRXhhbXBsZSxcbiAgU3RlcHBlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU3RlcHBlclN0YXRlc0V4YW1wbGUsXG4gIFN0ZXBwZXJWZXJ0aWNhbEV4YW1wbGUsXG4gIFN0ZXBwZXJMYXp5Q29udGVudEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSxcbiAgU3RlcHBlckVycm9yc0V4YW1wbGUsXG4gIFN0ZXBwZXJIYXJuZXNzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbiAgU3RlcHBlckxhenlDb250ZW50RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19