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
export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, };
var EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
var ProgressBarExamplesModule = /** @class */ (function () {
    function ProgressBarExamplesModule() {
    }
    ProgressBarExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                },] }
    ];
    return ProgressBarExamplesModule;
}());
export { ProgressBarExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzNGLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSwrREFBK0QsQ0FBQztBQUN2RSxPQUFPLEVBQ0wsNkJBQTZCLEVBQzlCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBRXhGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3QiwrQkFBK0IsRUFDL0IsdUJBQXVCLEdBQ3hCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQUVGO0lBQUE7SUFhQSxDQUFDOztnQkFiQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixvQkFBb0I7d0JBQ3BCLGNBQWM7d0JBQ2QsZUFBZTt3QkFDZixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O0lBRUQsZ0NBQUM7Q0FBQSxBQWJELElBYUM7U0FEWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1idWZmZXIvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS1leGFtcGxlJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLXF1ZXJ5L3Byb2dyZXNzLWJhci1xdWVyeS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlLFxuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19