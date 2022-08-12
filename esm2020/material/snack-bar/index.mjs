import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule } from '@angular/material/legacy-select';
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
SnackBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SnackBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, declarations: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample, PizzaPartyComponent], imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatSnackBarModule], exports: [SnackBarComponentExample,
        SnackBarHarnessExample,
        SnackBarOverviewExample,
        SnackBarPositionExample] });
SnackBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyInputModule,
        MatLegacySelectModule,
        MatSnackBarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SnackBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        MatLegacyButtonModule,
                        MatLegacyInputModule,
                        MatLegacySelectModule,
                        MatSnackBarModule,
                    ],
                    declarations: [...EXAMPLES, PizzaPartyComponent],
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbmFjay1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQix3QkFBd0IsR0FDekIsTUFBTSxtREFBbUQsQ0FBQztBQUMzRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFckYsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixzQkFBc0IsRUFDdEIsdUJBQXVCLEVBQ3ZCLHVCQUF1QixFQUN2QixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFhRixNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBakJqQyx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUIsRUFXSyxtQkFBbUIsYUFON0MsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLGlCQUFpQixhQVpuQix3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2Qix1QkFBdUI7b0hBY1osc0JBQXNCLFlBVC9CLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixpQkFBaUI7MkZBS1Isc0JBQXNCO2tCQVhsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixxQkFBcUI7d0JBQ3JCLGlCQUFpQjtxQkFDbEI7b0JBQ0QsWUFBWSxFQUFFLENBQUMsR0FBRyxRQUFRLEVBQUUsbUJBQW1CLENBQUM7b0JBQ2hELE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7TWF0TGVnYWN5U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktc2VsZWN0JztcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge1xuICBQaXp6YVBhcnR5Q29tcG9uZW50LFxuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG59IGZyb20gJy4vc25hY2stYmFyLWNvbXBvbmVudC9zbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItb3ZlcnZpZXcvc25hY2stYmFyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0JhclBvc2l0aW9uRXhhbXBsZX0gZnJvbSAnLi9zbmFjay1iYXItcG9zaXRpb24vc25hY2stYmFyLXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtTbmFja0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NuYWNrLWJhci1oYXJuZXNzL3NuYWNrLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbiAgUGl6emFQYXJ0eUNvbXBvbmVudCxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbmFja0JhckNvbXBvbmVudEV4YW1wbGUsXG4gIFNuYWNrQmFySGFybmVzc0V4YW1wbGUsXG4gIFNuYWNrQmFyT3ZlcnZpZXdFeGFtcGxlLFxuICBTbmFja0JhclBvc2l0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRMZWdhY3lCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5SW5wdXRNb2R1bGUsXG4gICAgTWF0TGVnYWN5U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5FWEFNUExFUywgUGl6emFQYXJ0eUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=