import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
import { MatLegacySnackBarModule } from '@angular/material/legacy-snack-bar';
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
SnackBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SnackBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatLegacySnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] });
SnackBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatLegacySnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        MatLegacyButtonModule,
                        MatLegacyInputModule,
                        MatLegacySelectModule,
                        MatLegacySnackBarModule,
                    ],
                    declarations: [...EXAMPLES, PizzaPartyComponent],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDM0UsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsR0FDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFckYsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFhRixNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBakJqQyx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUIsRUFXSyxtQkFBbUIsYUFON0MsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHVCQUF1QixhQVp6Qix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7b0hBY1osc0JBQXNCLFlBVC9CLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQix1QkFBdUI7MkZBS2Qsc0JBQXNCO2tCQVhsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7b0JBQ2hELE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7TWF0TGVnYWN5U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zbmFjay1iYXInO1xuaW1wb3J0IHtcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxufSBmcm9tICcuL3NuYWNrLWJhci1jb21wb25lbnQvc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLW92ZXJ2aWV3L3NuYWNrLWJhci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc25hY2stYmFyLXBvc2l0aW9uL3NuYWNrLWJhci1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7U25hY2tCYXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItaGFybmVzcy9zbmFjay1iYXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhckhhcm5lc3NFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG4gIFBpenphUGFydHlDb21wb25lbnQsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU25hY2tCYXJDb21wb25lbnRFeGFtcGxlLFxuICBTbmFja0Jhckhhcm5lc3NFeGFtcGxlLFxuICBTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZSxcbiAgU25hY2tCYXJQb3NpdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0TGVnYWN5QnV0dG9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUlucHV0TW9kdWxlLFxuICAgIE1hdExlZ2FjeVNlbGVjdE1vZHVsZSxcbiAgICBNYXRMZWdhY3lTbmFja0Jhck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbLi4uRVhBTVBMRVMsIFBpenphUGFydHlDb21wb25lbnRdLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19