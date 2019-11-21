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
                },] },
    ];
    StepperExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: StepperExamplesModule });
    StepperExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function StepperExamplesModule_Factory(t) { return new (t || StepperExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatIconModule,
                MatInputModule,
                MatStepperModule,
                ReactiveFormsModule,
            ]] });
    return StepperExamplesModule;
}());
export { StepperExamplesModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDOztBQUVuRixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixpQ0FBaUMsRUFDakMsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QixvQkFBb0IsRUFDcEIsc0JBQXNCLEdBQ3ZCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtDQUN2QixDQUFDO0FBRUY7SUFBQTtLQVlDOztnQkFaQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOzs2REFDWSxxQkFBcUI7NkhBQXJCLHFCQUFxQixrQkFWdkI7Z0JBQ1AsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixtQkFBbUI7YUFDcEI7Z0NBM0NIO0NBZ0RDLEFBWkQsSUFZQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQXBCaEMsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsc0JBQXNCLGFBS3BCLGVBQWU7UUFDZixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixtQkFBbUIsYUFmckIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixpQ0FBaUM7UUFDakMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsc0JBQXNCO2tEQWNYLHFCQUFxQjtjQVhqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7YUFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7U3RlcHBlckVkaXRhYmxlRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJFcnJvcnNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItZXJyb3JzL3N0ZXBwZXItZXJyb3JzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlXG59IGZyb20gJy4vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJPcHRpb25hbEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1vcHRpb25hbC9zdGVwcGVyLW9wdGlvbmFsLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3ZlcnZpZXcvc3RlcHBlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlclN0YXRlc0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJWZXJ0aWNhbEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci12ZXJ0aWNhbC9zdGVwcGVyLXZlcnRpY2FsLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19