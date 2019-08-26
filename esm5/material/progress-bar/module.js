import * as tslib_1 from "tslib";
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
    ProgressBarExamplesModule = tslib_1.__decorate([
        NgModule({
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
        })
    ], ProgressBarExamplesModule);
    return ProgressBarExamplesModule;
}());
export { ProgressBarExamplesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUMzRixPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUNMLDZCQUE2QixFQUM5QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUV4RixJQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQix1QkFBdUI7Q0FDeEIsQ0FBQztBQWNGO0lBQUE7SUFDQSxDQUFDO0lBRFkseUJBQXlCO1FBWnJDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLGFBQWE7Z0JBQ2Isb0JBQW9CO2dCQUNwQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsV0FBVzthQUNaO1lBQ0QsWUFBWSxFQUFFLFFBQVE7WUFDdEIsT0FBTyxFQUFFLFFBQVE7U0FDbEIsQ0FBQztPQUNXLHlCQUF5QixDQUNyQztJQUFELGdDQUFDO0NBQUEsQUFERCxJQUNDO1NBRFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1Byb2dyZXNzQmFyQnVmZmVyRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1iYXItYnVmZmVyL3Byb2dyZXNzLWJhci1idWZmZXItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1iYXItY29uZmlndXJhYmxlL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckRldGVybWluYXRlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUvcHJvZ3Jlc3MtYmFyLWluZGV0ZXJtaW5hdGUtZXhhbXBsZSc7XG5pbXBvcnQge1Byb2dyZXNzQmFyUXVlcnlFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1xdWVyeS9wcm9ncmVzcy1iYXItcXVlcnktZXhhbXBsZSc7XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19