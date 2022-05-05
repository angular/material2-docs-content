import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PizzaPartyComponent, SnackBarComponentExample, } from './snack-bar-component/snack-bar-component-example';
import { SnackBarOverviewExample } from './snack-bar-overview/snack-bar-overview-example';
import { SnackBarPositionExample } from './snack-bar-position/snack-bar-position-example';
import { SnackBarHarnessExample } from './snack-bar-harness/snack-bar-harness-example';
import * as i0 from "@angular/core";
export { SnackBarComponentExample, SnackBarHarnessExample, SnackBarOverviewExample, SnackBarPositionExample, PizzaPartyComponent, };
const EXAMPLES = [
    SnackBarComponentExample,
    SnackBarHarnessExample,
    SnackBarOverviewExample,
    SnackBarPositionExample,
];
export class SnackBarExamplesModule {
}
SnackBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SnackBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-next.16", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] });
SnackBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule],
                    declarations: [...EXAMPLES, PizzaPartyComponent],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsR0FDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFckYsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFPRixNQUFNLE9BQU8sc0JBQXNCOzsySEFBdEIsc0JBQXNCOzRIQUF0QixzQkFBc0IsaUJBWGpDLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1QixFQUtLLG1CQUFtQixhQURyQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLGFBUDFGLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLHVCQUF1Qjs0SEFRWixzQkFBc0IsWUFKdkIsV0FBVyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGlCQUFpQjttR0FJL0Usc0JBQXNCO2tCQUxsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQztvQkFDM0YsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7b0JBQ2hELE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge1xuICBQaXp6YVBhcnR5Q29tcG9uZW50LFxuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG59IGZyb20gJy4vc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItb3ZlcnZpZXcvc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0JhclBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItcG9zaXRpb24vc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogWy4uLkVYQU1QTEVTLCBQaXp6YVBhcnR5Q29tcG9uZW50XSxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrQmFyRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==