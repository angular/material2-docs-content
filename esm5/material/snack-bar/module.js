import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PizzaPartyComponent, SnackBarComponentExample } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
export { SnackBarComponentExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, };
var EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
var SnackBarExamplesModule = /** @class */ (function () {
    function SnackBarExamplesModule() {
    }
    SnackBarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        FormsModule,
                        MatButtonModule,
                        MatInputModule,
                        MatSelectModule,
                        MatSnackBarModule,
                    ],
                    declarations: tslib_1.__spread(EXAMPLES, [PizzaPartyComponent]),
                    exports: EXAMPLES,
                    entryComponents: [PizzaPartyComponent],
                },] }
    ];
    return SnackBarExamplesModule;
}());
export { SnackBarExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3pCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFFeEYsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qix1QkFBdUIsRUFDdkIsdUJBQXVCLEVBQ3ZCLG1CQUFtQixHQUNwQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN4QixDQUFDO0FBRUY7SUFBQTtJQWFBLENBQUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsV0FBVzt3QkFDWCxlQUFlO3dCQUNmLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixpQkFBaUI7cUJBQ2xCO29CQUNELFlBQVksbUJBQU0sUUFBUSxHQUFFLG1CQUFtQixFQUFDO29CQUNoRCxPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQ3ZDOztJQUVELDZCQUFDO0NBQUEsQUFiRCxJQWFDO1NBRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7XG4gIFBpenphUGFydHlDb21wb25lbnQsXG4gIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZVxufSBmcm9tICcuL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG4gIFBpenphUGFydHlDb21wb25lbnQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBNYXRTbmFja0Jhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIFBpenphUGFydHlDb21wb25lbnRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBbUGl6emFQYXJ0eUNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19