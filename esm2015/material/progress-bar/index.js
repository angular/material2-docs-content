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
import * as i0 from "@angular/core";
export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, };
const EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
export class ProgressBarExamplesModule {
}
ProgressBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
ProgressBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressBarExamplesModule_Factory(t) { return new (t || ProgressBarExamplesModule)(); }, imports: [[
            CommonModule,
            MatCardModule,
            MatProgressBarModule,
            MatRadioModule,
            MatSliderModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressBarExamplesModule, [{
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV4RixPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDhCQUE4QixFQUM5Qiw2QkFBNkIsRUFDN0IsK0JBQStCLEVBQy9CLHVCQUF1QixHQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0NBQ3hCLENBQUM7QUFlRixNQUFNLE9BQU8seUJBQXlCOzs2REFBekIseUJBQXlCO2lJQUF6Qix5QkFBeUIsa0JBWjNCO1lBQ1AsWUFBWTtZQUNaLGFBQWE7WUFDYixvQkFBb0I7WUFDcEIsY0FBYztZQUNkLGVBQWU7WUFDZixXQUFXO1NBQ1o7d0ZBS1UseUJBQXlCLG1CQXBCcEMsd0JBQXdCO1FBQ3hCLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsK0JBQStCO1FBQy9CLHVCQUF1QixhQUtyQixZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQjtRQUNwQixjQUFjO1FBQ2QsZUFBZTtRQUNmLFdBQVcsYUFkYix3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsdUJBQXVCO2tEQWdCWix5QkFBeUI7Y0FickMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBQ2Isb0JBQW9CO29CQUNwQixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyQnVmZmVyRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItYnVmZmVyL3Byb2dyZXNzLWJhci1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyUXVlcnlFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1xdWVyeS9wcm9ncmVzcy1iYXItcXVlcnktZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFByb2dyZXNzQmFyQnVmZmVyRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJJbmRldGVybWluYXRlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlLFxuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhckV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==