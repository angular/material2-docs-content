import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PizzaPartyComponent, SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import * as i0 from "@angular/core";
export { SnackBarComponentExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, };
const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
let SnackBarExamplesModule = /** @class */ (() => {
    class SnackBarExamplesModule {
    }
    SnackBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SnackBarExamplesModule });
    SnackBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SnackBarExamplesModule_Factory(t) { return new (t || SnackBarExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatInputModule,
                MatSelectModule,
                MatSnackBarModule,
            ]] });
    return SnackBarExamplesModule;
})();
export { SnackBarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SnackBarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    FormsModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                    MatSnackBarModule,
                ],
                declarations: [...EXAMPLES, PizzaPartyComponent],
                exports: EXAMPLES,
                entryComponents: [...EXAMPLES, PizzaPartyComponent],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsRUFDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQzs7QUFFeEYsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNwQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQSxNQVlhLHNCQUFzQjs7OERBQXRCLHNCQUFzQjsrSEFBdEIsc0JBQXNCLGtCQVh4QjtnQkFDUCxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsY0FBYztnQkFDZCxlQUFlO2dCQUNmLGlCQUFpQjthQUNsQjtpQ0FqQ0g7S0F1Q0M7U0FEWSxzQkFBc0I7d0ZBQXRCLHNCQUFzQixtQkFqQmpDLHdCQUF3QjtRQUN4Qix1QkFBdUI7UUFDdkIsdUJBQXVCLEVBV0ssbUJBQW1CLGFBTjdDLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixpQkFBaUIsYUFYbkIsd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7a0RBZVosc0JBQXNCO2NBWmxDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsV0FBVztvQkFDWCxlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixpQkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLG1CQUFtQixDQUFDO2dCQUNoRCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlXG59IGZyb20gJy4vc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItb3ZlcnZpZXcvc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0JhclBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItcG9zaXRpb24vc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgUGl6emFQYXJ0eUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5FWEFNUExFUywgUGl6emFQYXJ0eUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19