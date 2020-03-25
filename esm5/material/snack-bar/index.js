import { __read, __spread } from "tslib";
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
var EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
var SnackBarExamplesModule = /** @class */ (function () {
    function SnackBarExamplesModule() {
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
}());
export { SnackBarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SnackBarExamplesModule, { declarations: [SnackBarComponentExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        PizzaPartyComponent], imports: [FormsModule,
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
                declarations: __spread(EXAMPLES, [PizzaPartyComponent]),
                exports: EXAMPLES,
                entryComponents: __spread(EXAMPLES, [PizzaPartyComponent]),
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3pCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGO0lBQUE7S0FhQzs4REFEWSxzQkFBc0I7K0hBQXRCLHNCQUFzQixrQkFYeEI7Z0JBQ1AsV0FBVztnQkFDWCxlQUFlO2dCQUNmLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixpQkFBaUI7YUFDbEI7aUNBakNIO0NBdUNDLEFBYkQsSUFhQztTQURZLHNCQUFzQjt3RkFBdEIsc0JBQXNCLG1CQWpCakMsd0JBQXdCO1FBQ3hCLHVCQUF1QjtRQUN2Qix1QkFBdUI7UUFXSyxtQkFBbUIsYUFON0MsV0FBVztRQUNYLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQixhQVhuQix3QkFBd0I7UUFDeEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtrREFlWixzQkFBc0I7Y0FabEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsY0FBYztvQkFDZCxlQUFlO29CQUNmLGlCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxXQUFNLFFBQVEsR0FBRSxtQkFBbUIsRUFBQztnQkFDaEQsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsV0FBTSxRQUFRLEdBQUUsbUJBQW1CLEVBQUM7YUFDcEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlXG59IGZyb20gJy4vc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItb3ZlcnZpZXcvc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0JhclBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItcG9zaXRpb24vc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgUGl6emFQYXJ0eUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IFsuLi5FWEFNUExFUywgUGl6emFQYXJ0eUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19