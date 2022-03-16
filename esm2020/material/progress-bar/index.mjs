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
ProgressBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ProgressBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ProgressBarExamplesModule, declarations: [ProgressBarBufferExample,
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
ProgressBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ProgressBarExamplesModule, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressBarModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzFHLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IseUJBQXlCLEVBQ3pCLCtCQUErQixFQUMvQix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQWNGLE1BQU0sT0FBTyx5QkFBeUI7O3NIQUF6Qix5QkFBeUI7dUhBQXpCLHlCQUF5QixpQkFwQnBDLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVyxhQWZiLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCO3VIQWVaLHlCQUF5QixZQVgzQjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2Isb0JBQW9CO1lBQ3BCLGNBQWM7WUFDZCxlQUFlO1lBQ2YsV0FBVztTQUNaOzJGQUlVLHlCQUF5QjtrQkFackMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixhQUFhO3dCQUNiLG9CQUFvQjt3QkFDcEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItcXVlcnkvcHJvZ3Jlc3MtYmFyLXF1ZXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySGFybmVzc0V4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19