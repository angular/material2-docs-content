import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressBarBufferExample } from './progress-bar-buffer/progress-bar-buffer-example';
import { ProgressBarConfigurableExample } from './progress-bar-configurable/progress-bar-configurable-example';
import { ProgressBarDeterminateExample } from './progress-bar-determinate/progress-bar-determinate-example';
import { ProgressBarIndeterminateExample } from './progress-bar-indeterminate/progress-bar-indeterminate-example';
import { ProgressBarQueryExample } from './progress-bar-query/progress-bar-query-example';
import { ProgressBarHarnessExample } from './progress-bar-harness/progress-bar-harness-example';
import * as i0 from "@angular/core";
export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarHarnessExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, };
const EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarHarnessExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
export class ProgressBarExamplesModule {
}
ProgressBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatLegacyCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] });
ProgressBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatProgressBarModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3Qix5QkFBeUIsRUFDekIsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLHVCQUF1QjtDQUN4QixDQUFDO0FBY0YsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCLGlCQXBCcEMsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQix1QkFBdUIsYUFLckIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsY0FBYztRQUNkLGVBQWU7UUFDZixXQUFXLGFBZmIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQix1QkFBdUI7dUhBZVoseUJBQXlCLFlBVmxDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVzsyRkFLRix5QkFBeUI7a0JBWnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyQnVmZmVyRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItYnVmZmVyL3Byb2dyZXNzLWJhci1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyUXVlcnlFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1xdWVyeS9wcm9ncmVzcy1iYXItcXVlcnktZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWhhcm5lc3MvcHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlLFxuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlLFxuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=