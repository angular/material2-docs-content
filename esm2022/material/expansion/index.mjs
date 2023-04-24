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
import { ExpansionHarnessExample } from './expansion-harness/expansion-harness-example';
import * as i0 from "@angular/core";
export { ExpansionExpandCollapseAllExample, ExpansionHarnessExample, ExpansionOverviewExample, ExpansionStepsExample, };
const EXAMPLES = [
    ExpansionExpandCollapseAllExample,
    ExpansionHarnessExample,
    ExpansionOverviewExample,
    ExpansionStepsExample,
];
class ExpansionExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExamplesModule, declarations: [ExpansionExpandCollapseAllExample,
            ExpansionHarnessExample,
            ExpansionOverviewExample,
            ExpansionStepsExample], imports: [MatButtonModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatExpansionModule,
            MatIconModule,
            MatInputModule], exports: [ExpansionExpandCollapseAllExample,
            ExpansionHarnessExample,
            ExpansionOverviewExample,
            ExpansionStepsExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExamplesModule, imports: [MatButtonModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatExpansionModule,
            MatIconModule,
            MatInputModule] }); }
}
export { ExpansionExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ExpansionExamplesModule, decorators: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN4SCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFdEYsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7Q0FDdEIsQ0FBQztBQUVGLE1BWWEsdUJBQXVCO21IQUF2Qix1QkFBdUI7b0hBQXZCLHVCQUF1QixpQkFsQmxDLGlDQUFpQztZQUNqQyx1QkFBdUI7WUFDdkIsd0JBQXdCO1lBQ3hCLHFCQUFxQixhQUtuQixlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGNBQWMsYUFiaEIsaUNBQWlDO1lBQ2pDLHVCQUF1QjtZQUN2Qix3QkFBd0I7WUFDeEIscUJBQXFCO29IQWVWLHVCQUF1QixZQVZoQyxlQUFlO1lBQ2YsbUJBQW1CO1lBQ25CLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGNBQWM7O1NBS0wsdUJBQXVCO2dHQUF2Qix1QkFBdUI7a0JBWm5DLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLGtCQUFrQjt3QkFDbEIsYUFBYTt3QkFDYixjQUFjO3FCQUNmO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEV4cGFuc2lvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZXhwYW5zaW9uJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge0V4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC9leHBhbnNpb24tZXhwYW5kLWNvbGxhcHNlLWFsbC1leGFtcGxlJztcbmltcG9ydCB7RXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvblN0ZXBzRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tc3RlcHMvZXhwYW5zaW9uLXN0ZXBzLWV4YW1wbGUnO1xuaW1wb3J0IHtFeHBhbnNpb25IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24taGFybmVzcy9leHBhbnNpb24taGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlLFxuICBFeHBhbnNpb25IYXJuZXNzRXhhbXBsZSxcbiAgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlLFxuICBFeHBhbnNpb25TdGVwc0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgRXhwYW5zaW9uRXhwYW5kQ29sbGFwc2VBbGxFeGFtcGxlLFxuICBFeHBhbnNpb25IYXJuZXNzRXhhbXBsZSxcbiAgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlLFxuICBFeHBhbnNpb25TdGVwc0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRFeHBhbnNpb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIEV4cGFuc2lvbkV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=