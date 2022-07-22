import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressBarModule } from '@angular/material/legacy-progress-bar';
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
        MatLegacyProgressBarModule,
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
        MatLegacyProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatLegacyProgressBarModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFDLDZCQUE2QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFDLCtCQUErQixFQUFDLE1BQU0saUVBQWlFLENBQUM7QUFDaEgsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3Qix5QkFBeUIsRUFDekIsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsK0JBQStCO0lBQy9CLHVCQUF1QjtDQUN4QixDQUFDO0FBY0YsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5Qjt1SEFBekIseUJBQXlCLGlCQXBCcEMsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQix1QkFBdUIsYUFLckIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsY0FBYztRQUNkLGVBQWU7UUFDZixXQUFXLGFBZmIsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IseUJBQXlCO1FBQ3pCLCtCQUErQjtRQUMvQix1QkFBdUI7dUhBZVoseUJBQXlCLFlBVmxDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVzsyRkFLRix5QkFBeUI7a0JBWnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQiwwQkFBMEI7d0JBQzFCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQge01hdExlZ2FjeVByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItcXVlcnkvcHJvZ3Jlc3MtYmFyLXF1ZXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySGFybmVzc0V4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0TGVnYWN5UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19