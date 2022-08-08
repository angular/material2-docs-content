import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
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
        MatLegacyRadioModule,
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
        MatLegacyRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressBarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatLegacyProgressBarModule,
                        MatLegacyRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUMxRyxPQUFPLEVBQUMsK0JBQStCLEVBQUMsTUFBTSxpRUFBaUUsQ0FBQztBQUNoSCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQzs7QUFFOUYsT0FBTyxFQUNMLHdCQUF3QixFQUN4Qiw4QkFBOEIsRUFDOUIsNkJBQTZCLEVBQzdCLHlCQUF5QixFQUN6QiwrQkFBK0IsRUFDL0IsdUJBQXVCLEdBQ3hCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFjRixNQUFNLE9BQU8seUJBQXlCOztzSEFBekIseUJBQXlCO3VIQUF6Qix5QkFBeUIsaUJBcEJwQyx3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLHVCQUF1QixhQUtyQixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLFdBQVcsYUFmYix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3Qix5QkFBeUI7UUFDekIsK0JBQStCO1FBQy9CLHVCQUF1Qjt1SEFlWix5QkFBeUIsWUFWbEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQiwwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixXQUFXOzJGQUtGLHlCQUF5QjtrQkFackMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLDBCQUEwQjt3QkFDMUIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUNhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jYXJkJztcbmltcG9ydCB7TWF0TGVnYWN5UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRMZWdhY3lSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWJ1ZmZlci9wcm9ncmVzcy1iYXItYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlL3Byb2dyZXNzLWJhci1pbmRldGVybWluYXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItcXVlcnkvcHJvZ3Jlc3MtYmFyLXF1ZXJ5LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc0Jhckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySGFybmVzc0V4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0TGVnYWN5UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0TGVnYWN5UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVyTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19