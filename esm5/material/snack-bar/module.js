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
var EXAMPLES = [
    SnackBarComponentExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
var SnackBarExamplesModule = /** @class */ (function () {
    function SnackBarExamplesModule() {
    }
    SnackBarExamplesModule = tslib_1.__decorate([
        NgModule({
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
        })
    ], SnackBarExamplesModule);
    return SnackBarExamplesModule;
}());
export { SnackBarExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsd0JBQXdCLEVBQ3pCLE1BQU0sbURBQW1ELENBQUM7QUFDM0QsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFFeEYsSUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtDQUN4QixDQUFDO0FBY0Y7SUFBQTtJQUNBLENBQUM7SUFEWSxzQkFBc0I7UUFabEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFdBQVc7Z0JBQ1gsZUFBZTtnQkFDZixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsaUJBQWlCO2FBQ2xCO1lBQ0QsWUFBWSxtQkFBTSxRQUFRLEdBQUUsbUJBQW1CLEVBQUM7WUFDaEQsT0FBTyxFQUFFLFFBQVE7WUFDakIsZUFBZSxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDdkMsQ0FBQztPQUNXLHNCQUFzQixDQUNsQztJQUFELDZCQUFDO0NBQUEsQUFERCxJQUNDO1NBRFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7XG4gIFBpenphUGFydHlDb21wb25lbnQsXG4gIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZVxufSBmcm9tICcuL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJztcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZSxcbiAgU25hY2tCYXJPdmVydmlld0V4YW1wbGUsXG4gIFNuYWNrQmFyUG9zaXRpb25FeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBQaXp6YVBhcnR5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogW1BpenphUGFydHlDb21wb25lbnRdLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==