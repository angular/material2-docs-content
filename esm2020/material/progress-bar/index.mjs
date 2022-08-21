import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
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
ProgressBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ProgressBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ProgressBarExamplesModule, declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] });
ProgressBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ProgressBarExamplesModule, imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressBarModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzFHLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IseUJBQXlCLEVBQ3pCLCtCQUErQixFQUMvQix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQWNGLE1BQU0sT0FBTyx5QkFBeUI7OzJIQUF6Qix5QkFBeUI7NEhBQXpCLHlCQUF5QixpQkFwQnBDLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVyxhQWZiLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCOzRIQWVaLHlCQUF5QixZQVZsQyxZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVc7Z0dBS0YseUJBQXlCO2tCQVpyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyQnVmZmVyRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItYnVmZmVyL3Byb2dyZXNzLWJhci1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyUXVlcnlFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1xdWVyeS9wcm9ncmVzcy1iYXItcXVlcnktZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWhhcm5lc3MvcHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlLFxuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlLFxuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=