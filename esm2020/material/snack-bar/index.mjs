import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PizzaPartyComponent, SnackBarComponentExample, } from './snack-bar-component/snack-bar-component-example';
import { PizzaPartyAnnotatedComponent, SnackBarAnnotatedComponentExample, } from './snack-bar-annotated-component/snack-bar-annotated-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import { SnackBarHarnessExample } from './snack-bar-harness/snack-bar-harness-example';
import * as i0 from "@angular/core";
export { SnackBarAnnotatedComponentExample, SnackBarComponentExample, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, PizzaPartyAnnotatedComponent, };
const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
    SnackBarAnnotatedComponentExample,
];
export class SnackBarExamplesModule {
}
SnackBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SnackBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-next.1", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        SnackBarAnnotatedComponentExample, PizzaPartyComponent, PizzaPartyAnnotatedComponent], imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample,
        SnackBarAnnotatedComponentExample] });
SnackBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-next.1", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule],
                    declarations: [...EXAMPLES, PizzaPartyComponent, PizzaPartyAnnotatedComponent],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsR0FDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLGlDQUFpQyxHQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDOztBQUVyRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsNEJBQTRCLEdBQzdCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQ0FBaUM7Q0FDbEMsQ0FBQztBQU9GLE1BQU0sT0FBTyxzQkFBc0I7OzBIQUF0QixzQkFBc0I7MkhBQXRCLHNCQUFzQixpQkFaakMsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLGlDQUFpQyxFQUtMLG1CQUFtQixFQUFFLDRCQUE0QixhQURuRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLGFBUjFGLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QjtRQUN2QixpQ0FBaUM7MkhBUXRCLHNCQUFzQixZQUp2QixXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCO2tHQUkvRSxzQkFBc0I7a0JBTGxDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixDQUFDO29CQUMzRixZQUFZLEVBQUUsQ0FBQyxHQUFHLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSw0QkFBNEIsQ0FBQztvQkFDOUUsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRTbmFja0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7XG4gIFBpenphUGFydHlDb21wb25lbnQsXG4gIFNuYWNrQmFyQ29tcG9uZW50RXhhbXBsZSxcbn0gZnJvbSAnLi9zbmFjay1iYXItY29tcG9uZW50L3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50LFxuICBTbmFja0JhckFubm90YXRlZENvbXBvbmVudEV4YW1wbGUsXG59IGZyb20gJy4vc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQvc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZSc7XG5pbXBvcnQge1NuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NuYWNrLWJhci1vdmVydmlldy9zbmFjay1iYXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NuYWNrQmFyUG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL3NuYWNrLWJhci1wb3NpdGlvbi9zbmFjay1iYXItcG9zaXRpb24tZXhhbXBsZSc7XG5pbXBvcnQge1NuYWNrQmFySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLWhhcm5lc3Mvc25hY2stYmFyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNuYWNrQmFyQW5ub3RhdGVkQ29tcG9uZW50RXhhbXBsZSxcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhckhhcm5lc3NFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG4gIFBpenphUGFydHlDb21wb25lbnQsXG4gIFBpenphUGFydHlBbm5vdGF0ZWRDb21wb25lbnQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhckhhcm5lc3NFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG4gIFNuYWNrQmFyQW5ub3RhdGVkQ29tcG9uZW50RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBQaXp6YVBhcnR5Q29tcG9uZW50LCBQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==