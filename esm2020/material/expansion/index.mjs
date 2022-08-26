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
export class ExpansionExamplesModule {
}
ExpansionExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ExpansionExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExpansionExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: ExpansionExamplesModule, declarations: [ExpansionExpandCollapseAllExample,
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
        ExpansionStepsExample] });
ExpansionExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ExpansionExamplesModule, imports: [MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatIconModule,
        MatInputModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ExpansionExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN4SCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQzs7QUFFdEYsT0FBTyxFQUNMLGlDQUFpQyxFQUNqQyx1QkFBdUIsRUFDdkIsd0JBQXdCLEVBQ3hCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixxQkFBcUI7Q0FDdEIsQ0FBQztBQWNGLE1BQU0sT0FBTyx1QkFBdUI7O29IQUF2Qix1QkFBdUI7cUhBQXZCLHVCQUF1QixpQkFsQmxDLGlDQUFpQztRQUNqQyx1QkFBdUI7UUFDdkIsd0JBQXdCO1FBQ3hCLHFCQUFxQixhQUtuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWMsYUFiaEIsaUNBQWlDO1FBQ2pDLHVCQUF1QjtRQUN2Qix3QkFBd0I7UUFDeEIscUJBQXFCO3FIQWVWLHVCQUF1QixZQVZoQyxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGNBQWM7MkZBS0wsdUJBQXVCO2tCQVpuQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGFBQWE7d0JBQ2IsY0FBYztxQkFDZjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRFeHBhbnNpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtFeHBhbnNpb25FeHBhbmRDb2xsYXBzZUFsbEV4YW1wbGV9IGZyb20gJy4vZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwvZXhwYW5zaW9uLWV4cGFuZC1jb2xsYXBzZS1hbGwtZXhhbXBsZSc7XG5pbXBvcnQge0V4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9leHBhbnNpb24tb3ZlcnZpZXcvZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtFeHBhbnNpb25TdGVwc0V4YW1wbGV9IGZyb20gJy4vZXhwYW5zaW9uLXN0ZXBzL2V4cGFuc2lvbi1zdGVwcy1leGFtcGxlJztcbmltcG9ydCB7RXhwYW5zaW9uSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vZXhwYW5zaW9uLWhhcm5lc3MvZXhwYW5zaW9uLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSxcbiAgRXhwYW5zaW9uSGFybmVzc0V4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEV4cGFuc2lvbkV4cGFuZENvbGxhcHNlQWxsRXhhbXBsZSxcbiAgRXhwYW5zaW9uSGFybmVzc0V4YW1wbGUsXG4gIEV4cGFuc2lvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgRXhwYW5zaW9uU3RlcHNFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXREYXRlcGlja2VyTW9kdWxlLFxuICAgIE1hdE5hdGl2ZURhdGVNb2R1bGUsXG4gICAgTWF0RXhwYW5zaW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25FeGFtcGxlc01vZHVsZSB7fVxuIl19