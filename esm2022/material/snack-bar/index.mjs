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
class SnackBarExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
            SnackBarHarnessExample,
            SnackBarOverviewExample,
            SnackBarPositionExample,
            SnackBarAnnotatedComponentExample, PizzaPartyComponent, PizzaPartyAnnotatedComponent], imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule], exports: [SnackBarComponentExample,
            SnackBarHarnessExample,
            SnackBarOverviewExample,
            SnackBarPositionExample,
            SnackBarAnnotatedComponentExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule] }); }
}
export { SnackBarExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [FormsModule, MatButtonModule, MatInputModule, MatSelectModule, MatSnackBarModule],
                    declarations: [...EXAMPLES, PizzaPartyComponent, PizzaPartyAnnotatedComponent],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsR0FDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLGlDQUFpQyxHQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDOztBQUVyRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2pDLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsRUFDbkIsNEJBQTRCLEdBQzdCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixpQ0FBaUM7Q0FDbEMsQ0FBQztBQUVGLE1BS2Esc0JBQXNCO3FIQUF0QixzQkFBc0I7c0hBQXRCLHNCQUFzQixpQkFaakMsd0JBQXdCO1lBQ3hCLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsdUJBQXVCO1lBQ3ZCLGlDQUFpQyxFQUtMLG1CQUFtQixFQUFFLDRCQUE0QixhQURuRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLGFBUjFGLHdCQUF3QjtZQUN4QixzQkFBc0I7WUFDdEIsdUJBQXVCO1lBQ3ZCLHVCQUF1QjtZQUN2QixpQ0FBaUM7c0hBUXRCLHNCQUFzQixZQUp2QixXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCOztTQUkvRSxzQkFBc0I7a0dBQXRCLHNCQUFzQjtrQkFMbEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsaUJBQWlCLENBQUM7b0JBQzNGLFlBQVksRUFBRSxDQUFDLEdBQUcsUUFBUSxFQUFFLG1CQUFtQixFQUFFLDRCQUE0QixDQUFDO29CQUM5RSxPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFNuYWNrQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHtcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxufSBmcm9tICcuL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7XG4gIFBpenphUGFydHlBbm5vdGF0ZWRDb21wb25lbnQsXG4gIFNuYWNrQmFyQW5ub3RhdGVkQ29tcG9uZW50RXhhbXBsZSxcbn0gZnJvbSAnLi9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU25hY2tCYXJBbm5vdGF0ZWRDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbiAgUGl6emFQYXJ0eUFubm90YXRlZENvbXBvbmVudCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgU25hY2tCYXJBbm5vdGF0ZWRDb21wb25lbnRFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIFBpenphUGFydHlDb21wb25lbnQsIFBpenphUGFydHlBbm5vdGF0ZWRDb21wb25lbnRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19