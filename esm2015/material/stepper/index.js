/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/stepper/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
import * as i0 from "@angular/core";
export { StepperEditableExample, StepperErrorsExample, StepperLabelPositionBottomExample, StepperOptionalExample, StepperOverviewExample, StepperStatesExample, StepperVerticalExample, };
/** @type {?} */
const EXAMPLES = [
    StepperEditableExample,
    StepperErrorsExample,
    StepperLabelPositionBottomExample,
    StepperOptionalExample,
    StepperOverviewExample,
    StepperStatesExample,
    StepperVerticalExample,
];
export class StepperExamplesModule {
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
            },] },
];
/** @nocollapse */ StepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
/** @nocollapse */ StepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatStepperModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(StepperExamplesModule, { declarations: [StepperEditableExample,
        StepperErrorsExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample], imports: [MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatStepperModule,
        ReactiveFormsModule], exports: [StepperEditableExample,
        StepperErrorsExample,
        StepperLabelPositionBottomExample,
        StepperOptionalExample,
        StepperOverviewExample,
        StepperStatesExample,
        StepperVerticalExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(StepperExamplesModule, [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBRW5GLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlDQUFpQyxFQUNqQyxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixzQkFBc0IsR0FDdkIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7Q0FDdkI7QUFhRCxNQUFNLE9BQU8scUJBQXFCOzs7WUFYakMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzt5REFDWSxxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkFWdkI7WUFDUCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGNBQWM7WUFDZCxnQkFBZ0I7WUFDaEIsbUJBQW1CO1NBQ3BCO3dGQUlVLHFCQUFxQixtQkFwQmhDLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHNCQUFzQixhQUtwQixlQUFlO1FBQ2YsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CLGFBZnJCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsaUNBQWlDO1FBQ2pDLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLHNCQUFzQjtrREFjWCxxQkFBcUI7Y0FYakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxlQUFlO29CQUNmLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc3RlcHBlcic7XG5pbXBvcnQge1N0ZXBwZXJFZGl0YWJsZUV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyRXJyb3JzRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVycm9ycy9zdGVwcGVyLWVycm9ycy1leGFtcGxlJztcbmltcG9ydCB7XG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZVxufSBmcm9tICcuL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tL3N0ZXBwZXItbGFiZWwtcG9zaXRpb24tYm90dG9tLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3B0aW9uYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3B0aW9uYWwvc3RlcHBlci1vcHRpb25hbC1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLW92ZXJ2aWV3L3N0ZXBwZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJTdGF0ZXNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItc3RhdGVzL3N0ZXBwZXItc3RhdGVzLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyVmVydGljYWxFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItdmVydGljYWwvc3RlcHBlci12ZXJ0aWNhbC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSxcbiAgU3RlcHBlckVycm9yc0V4YW1wbGUsXG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZSxcbiAgU3RlcHBlck9wdGlvbmFsRXhhbXBsZSxcbiAgU3RlcHBlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU3RlcHBlclN0YXRlc0V4YW1wbGUsXG4gIFN0ZXBwZXJWZXJ0aWNhbEV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSxcbiAgU3RlcHBlckVycm9yc0V4YW1wbGUsXG4gIFN0ZXBwZXJMYWJlbFBvc2l0aW9uQm90dG9tRXhhbXBsZSxcbiAgU3RlcHBlck9wdGlvbmFsRXhhbXBsZSxcbiAgU3RlcHBlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU3RlcHBlclN0YXRlc0V4YW1wbGUsXG4gIFN0ZXBwZXJWZXJ0aWNhbEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==