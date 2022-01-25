import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { ProgressSpinnerHarnessExample } from './progress-spinner-harness/progress-spinner-harness-example';
import * as i0 from "@angular/core";
export { ProgressSpinnerConfigurableExample, ProgressSpinnerHarnessExample, ProgressSpinnerOverviewExample, };
const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerHarnessExample,
    ProgressSpinnerOverviewExample,
];
export class ProgressSpinnerExamplesModule {
}
ProgressSpinnerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ProgressSpinnerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ProgressSpinnerExamplesModule, declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample] });
ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ProgressSpinnerExamplesModule, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-rc.1", ngImport: i0, type: ProgressSpinnerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN6SCxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQzs7QUFFMUcsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyw2QkFBNkIsRUFDN0IsOEJBQThCLEdBQy9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsOEJBQThCO0NBQy9CLENBQUM7QUFjRixNQUFNLE9BQU8sNkJBQTZCOzsrSEFBN0IsNkJBQTZCO2dJQUE3Qiw2QkFBNkIsaUJBakJ4QyxrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QixhQUs1QixZQUFZO1FBQ1osYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVcsYUFaYixrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QjtnSUFlbkIsNkJBQTZCLFlBWC9CO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYix3QkFBd0I7WUFDeEIsY0FBYztZQUNkLGVBQWU7WUFDZixXQUFXO1NBQ1o7Z0dBSVUsNkJBQTZCO2tCQVp6QyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isd0JBQXdCO3dCQUN4QixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7UHJvZ3Jlc3NTcGlubmVyQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1zcGlubmVyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7UHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItb3ZlcnZpZXcvcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UHJvZ3Jlc3NTcGlubmVySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzL3Byb2dyZXNzLXNwaW5uZXItaGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NTcGlubmVyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVySGFybmVzc0V4YW1wbGUsXG4gIFByb2dyZXNzU3Bpbm5lck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc1NwaW5uZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19