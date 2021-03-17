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
StepperExamplesModule.ɵfac = function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); };
StepperExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
StepperExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatStepperModule,
            ReactiveFormsModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsaUNBQWlDLEVBQ2pDLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLHNCQUFzQixFQUN0Qix5QkFBeUIsR0FDMUIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0Qix5QkFBeUI7Q0FDMUIsQ0FBQztBQWNGLE1BQU0sT0FBTyxxQkFBcUI7OzBGQUFyQixxQkFBcUI7dUVBQXJCLHFCQUFxQjsyRUFYdkI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1NBQ3BCO3VGQUtVLHFCQUFxQjtjQVpqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOzt3RkFDWSxxQkFBcUIsbUJBdkJoQyxzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHlCQUF5QixhQUt2QixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CLGFBakJyQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsc0JBQXNCO1FBQ3RCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFN0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3N0ZXBwZXInO1xuaW1wb3J0IHtTdGVwcGVyRWRpdGFibGVFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItZWRpdGFibGUvc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlckVycm9yc0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lcnJvcnMvc3RlcHBlci1lcnJvcnMtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGVcbn0gZnJvbSAnLi9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS9zdGVwcGVyLWxhYmVsLXBvc2l0aW9uLWJvdHRvbS1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck9wdGlvbmFsRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW9wdGlvbmFsL3N0ZXBwZXItb3B0aW9uYWwtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1vdmVydmlldy9zdGVwcGVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyU3RhdGVzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLXN0YXRlcy9zdGVwcGVyLXN0YXRlcy1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlclZlcnRpY2FsRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLXZlcnRpY2FsL3N0ZXBwZXItdmVydGljYWwtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWhhcm5lc3Mvc3RlcHBlci1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyTGF6eUNvbnRlbnRFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItbGF6eS1jb250ZW50L3N0ZXBwZXItbGF6eS1jb250ZW50LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckhhcm5lc3NFeGFtcGxlLFxuICBTdGVwcGVyTGFiZWxQb3NpdGlvbkJvdHRvbUV4YW1wbGUsXG4gIFN0ZXBwZXJPcHRpb25hbEV4YW1wbGUsXG4gIFN0ZXBwZXJPdmVydmlld0V4YW1wbGUsXG4gIFN0ZXBwZXJTdGF0ZXNFeGFtcGxlLFxuICBTdGVwcGVyVmVydGljYWxFeGFtcGxlLFxuICBTdGVwcGVyTGF6eUNvbnRlbnRFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFN0ZXBwZXJFZGl0YWJsZUV4YW1wbGUsXG4gIFN0ZXBwZXJFcnJvcnNFeGFtcGxlLFxuICBTdGVwcGVySGFybmVzc0V4YW1wbGUsXG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZSxcbiAgU3RlcHBlck9wdGlvbmFsRXhhbXBsZSxcbiAgU3RlcHBlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU3RlcHBlclN0YXRlc0V4YW1wbGUsXG4gIFN0ZXBwZXJWZXJ0aWNhbEV4YW1wbGUsXG4gIFN0ZXBwZXJMYXp5Q29udGVudEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==