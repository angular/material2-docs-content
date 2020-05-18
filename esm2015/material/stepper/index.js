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
let StepperExamplesModule = /** @class */ (() => {
    class StepperExamplesModule {
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
                    entryComponents: EXAMPLES,
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
    return StepperExamplesModule;
})();
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBRW5GLE9BQU8sRUFDTCxzQkFBc0IsRUFDdEIsb0JBQW9CLEVBQ3BCLGlDQUFpQyxFQUNqQyxzQkFBc0IsRUFDdEIsc0JBQXNCLEVBQ3RCLG9CQUFvQixFQUNwQixzQkFBc0IsR0FDdkIsQ0FBQzs7TUFFSSxRQUFRLEdBQUc7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixzQkFBc0I7Q0FDdkI7QUFFRDtJQUFBLE1BWWEscUJBQXFCOzs7Z0JBWmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGNBQWM7d0JBQ2QsZ0JBQWdCO3dCQUNoQixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztnRkFDWSxxQkFBcUI7Z0pBQXJCLHFCQUFxQixrQkFYdkI7Z0JBQ1AsZUFBZTtnQkFDZixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixtQkFBbUI7YUFDcEI7Z0NBM0NIO0tBaURDO1NBRFkscUJBQXFCO3dGQUFyQixxQkFBcUIsbUJBckJoQyxzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0IsYUFLcEIsZUFBZTtRQUNmLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLG1CQUFtQixhQWZyQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLGlDQUFpQztRQUNqQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLG9CQUFvQjtRQUNwQixzQkFBc0I7a0RBZVgscUJBQXFCO2NBWmpDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsZUFBZTtvQkFDZixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7U3RlcHBlckVkaXRhYmxlRXhhbXBsZX0gZnJvbSAnLi9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJFcnJvcnNFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItZXJyb3JzL3N0ZXBwZXItZXJyb3JzLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlXG59IGZyb20gJy4vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20vc3RlcHBlci1sYWJlbC1wb3NpdGlvbi1ib3R0b20tZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJPcHRpb25hbEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1vcHRpb25hbC9zdGVwcGVyLW9wdGlvbmFsLWV4YW1wbGUnO1xuaW1wb3J0IHtTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3N0ZXBwZXItb3ZlcnZpZXcvc3RlcHBlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U3RlcHBlclN0YXRlc0V4YW1wbGV9IGZyb20gJy4vc3RlcHBlci1zdGF0ZXMvc3RlcHBlci1zdGF0ZXMtZXhhbXBsZSc7XG5pbXBvcnQge1N0ZXBwZXJWZXJ0aWNhbEV4YW1wbGV9IGZyb20gJy4vc3RlcHBlci12ZXJ0aWNhbC9zdGVwcGVyLXZlcnRpY2FsLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTdGVwcGVyRWRpdGFibGVFeGFtcGxlLFxuICBTdGVwcGVyRXJyb3JzRXhhbXBsZSxcbiAgU3RlcHBlckxhYmVsUG9zaXRpb25Cb3R0b21FeGFtcGxlLFxuICBTdGVwcGVyT3B0aW9uYWxFeGFtcGxlLFxuICBTdGVwcGVyT3ZlcnZpZXdFeGFtcGxlLFxuICBTdGVwcGVyU3RhdGVzRXhhbXBsZSxcbiAgU3RlcHBlclZlcnRpY2FsRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19