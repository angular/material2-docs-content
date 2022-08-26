import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySliderModule } from '@angular/material/legacy-slider';
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
ProgressBarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressBarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressBarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: ProgressBarExamplesModule, declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatLegacyCardModule,
        MatLegacyProgressBarModule,
        MatLegacyRadioModule,
        MatLegacySliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarHarnessExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] });
ProgressBarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressBarExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatLegacyProgressBarModule,
        MatLegacyRadioModule,
        MatLegacySliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatLegacyProgressBarModule,
                        MatLegacyRadioModule,
                        MatLegacySliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDO0FBQzFHLE9BQU8sRUFBQywrQkFBK0IsRUFBQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ2hILE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IseUJBQXlCLEVBQ3pCLCtCQUErQixFQUMvQix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQWNGLE1BQU0sT0FBTyx5QkFBeUI7O3NIQUF6Qix5QkFBeUI7dUhBQXpCLHlCQUF5QixpQkFwQnBDLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsV0FBVyxhQWZiLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6QiwrQkFBK0I7UUFDL0IsdUJBQXVCO3VIQWVaLHlCQUF5QixZQVZsQyxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFdBQVc7MkZBS0YseUJBQXlCO2tCQVpyQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsMEJBQTBCO3dCQUMxQixvQkFBb0I7d0JBQ3BCLHFCQUFxQjt3QkFDckIsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0TGVnYWN5Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNhcmQnO1xuaW1wb3J0IHtNYXRMZWdhY3lQcm9ncmVzc0Jhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXByb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdExlZ2FjeVJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHtNYXRMZWdhY3lTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItcXVlcnkvcHJvZ3Jlc3MtYmFyLXF1ZXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySGFybmVzc0V4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0TGVnYWN5UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0TGVnYWN5UmFkaW9Nb2R1bGUsXG4gICAgTWF0TGVnYWN5U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19