import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
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
import { StepperResponsiveExample } from './stepper-responsive/stepper-responsive-example';
import * as i0 from "@angular/core";
export { StepperEditableExample, StepperErrorsExample, StepperHarnessExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, StepperLazyContentExample, StepperResponsiveExample, };
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
    StepperResponsiveExample,
];
export class StepperExamplesModule {
}
StepperExamplesModule.ɵfac = function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); };
StepperExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
StepperExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatStepperModule,
            ReactiveFormsModule,
            CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StepperExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatIconModule,
                    MatInputModule,
                    MatStepperModule,
                    ReactiveFormsModule,
                    CommonModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample,
        StepperResponsiveExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule,
        CommonModule], exports: [StepperEditableExample,
        StepperErrorsExample,
        StepperHarnessExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample,
        StepperLazyContentExample,
        StepperResponsiveExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFDTCxpQ0FBaUMsRUFDbEMsTUFBTSx1RUFBdUUsQ0FBQztBQUMvRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFekYsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLGlDQUFpQyxFQUNqQyxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixzQkFBc0IsRUFDdEIseUJBQXlCLEVBQ3pCLHdCQUF3QixHQUN6QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixpQ0FBaUM7SUFDakMsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6Qix3QkFBd0I7Q0FDekIsQ0FBQztBQWVGLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFadkI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1lBQ25CLFlBQVk7U0FDYjt1RkFLVSxxQkFBcUI7Y0FiakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxxQkFBcUIsbUJBekJoQyxzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6Qix3QkFBd0IsYUFLdEIsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixZQUFZLGFBbkJkLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge1N0ZXBwZXJFZGl0YWJsZUV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyRXJyb3JzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVycm9ycy9zdGVwcGVyLWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZVxufSBmcm9tICcuL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3B0aW9uYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3B0aW9uYWwvc3RlcHBlci1vcHRpb25hbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJTdGF0ZXNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItc3RhdGVzL3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyVmVydGljYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItdmVydGljYWwvc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJMYXp5Q29udGVudEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1sYXp5LWNvbnRlbnQvc3RlcHBlci1sYXp5LWNvbnRlbnQtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJSZXNwb25zaXZlRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLXJlc3BvbnNpdmUvc3RlcHBlci1yZXNwb25zaXZlLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckhhcm5lc3NFeGFtcGxlLFxuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUsXG4gIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUsXG4gIFN0ZXBwZXJPdmVydmlld0V4YW1wbGUsXG4gIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlLFxuICBTdGVwcGVyVmVydGljYWxFeGFtcGxlLFxuICBTdGVwcGVyTGF6eUNvbnRlbnRFeGFtcGxlLFxuICBTdGVwcGVyUmVzcG9uc2l2ZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSxcbiAgU3RlcHBlckVycm9yc0V4YW1wbGUsXG4gIFN0ZXBwZXJIYXJuZXNzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbiAgU3RlcHBlckxhenlDb250ZW50RXhhbXBsZSxcbiAgU3RlcHBlclJlc3BvbnNpdmVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFN0ZXBwZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19