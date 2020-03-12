import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ExpansionExpandCollapseAllExample } from './expansion-expand-collapse-all/expansion-expand-collapse-all-example';
import { ExpansionOverviewExample } from './expansion-overview/expansion-overview-example';
import { ExpansionStepsExample } from './expansion-steps/expansion-steps-example';
import * as i0 from "@angular/core";
export { ExpansionExpandCollapseAllExample, ExpansionOverviewExample, ExpansionStepsExample, };
var EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
var ExpansionExamplesModule = /** @class */ (function () {
    function ExpansionExamplesModule() {
    }
    ExpansionExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatButtonModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatExpansionModule,
                        MatIconModule,
                        MatInputModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    ExpansionExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ExpansionExamplesModule });
    ExpansionExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ExpansionExamplesModule_Factory(t) { return new (t || ExpansionExamplesModule)(); }, imports: [[
                MatButtonModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatExpansionModule,
                MatIconModule,
                MatInputModule,
            ]] });
    return ExpansionExamplesModule;
}());
export { ExpansionExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ExpansionExamplesModule, { declarations: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample], imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule], exports: [ExpansionExpandCollapseAllExample,
        ExpansionOverviewExample,
        ExpansionStepsExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ExpansionExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatButtonModule,
                    MatDatepickerModule,
                    MatNativeDateModule,
                    MatExpansionModule,
                    MatIconModule,
                    MatInputModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsd0JBQXdCO0lBQ3hCLHFCQUFxQjtDQUN0QixDQUFDO0FBRUY7SUFBQTtLQWNDOztnQkFkQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOzsrREFDWSx1QkFBdUI7aUlBQXZCLHVCQUF1QixrQkFaekI7Z0JBQ1AsZUFBZTtnQkFDZixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2dCQUNsQixhQUFhO2dCQUNiLGNBQWM7YUFDZjtrQ0FqQ0g7Q0F1Q0MsQUFkRCxJQWNDO1NBRFksdUJBQXVCO3dGQUF2Qix1QkFBdUIsbUJBbEJsQyxpQ0FBaUM7UUFDakMsd0JBQXdCO1FBQ3hCLHFCQUFxQixhQUtuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWMsYUFaaEIsaUNBQWlDO1FBQ2pDLHdCQUF3QjtRQUN4QixxQkFBcUI7a0RBZ0JWLHVCQUF1QjtjQWJuQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YsbUJBQW1CO29CQUNuQixtQkFBbUI7b0JBQ25CLGtCQUFrQjtvQkFDbEIsYUFBYTtvQkFDYixjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGVcbn0gZnJvbSAnLi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlJztcbmltcG9ydCB7RXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvblN0ZXBzRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tc3RlcHMvZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSxcbiAgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlLFxuICBFeHBhbnNpb25TdGVwc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbkV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==