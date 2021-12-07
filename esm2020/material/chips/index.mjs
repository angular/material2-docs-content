import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChipsAutocompleteExample } from './chips-autocomplete/chips-autocomplete-example';
import { ChipsDragDropExample } from './chips-drag-drop/chips-drag-drop-example';
import { ChipsInputExample } from './chips-input/chips-input-example';
import { ChipsOverviewExample } from './chips-overview/chips-overview-example';
import { ChipsStackedExample } from './chips-stacked/chips-stacked-example';
import { ChipsHarnessExample } from './chips-harness/chips-harness-example';
import { ChipsFormControlExample } from './chips-form-control/chips-form-control-example';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample, ChipsHarnessExample, ChipsFormControlExample, };
const EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ChipsHarnessExample,
    ChipsFormControlExample,
];
export class ChipsExamplesModule {
}
ChipsExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipsExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample], imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample] });
ChipsExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, imports: [[
            CommonModule,
            DragDropModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatChipsModule,
            MatIconModule,
            MatFormFieldModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatButtonModule,
                        MatChipsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsR0FDeEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQ3hCLENBQUM7QUFnQkYsTUFBTSxPQUFPLG1CQUFtQjs7dUhBQW5CLG1CQUFtQjt3SEFBbkIsbUJBQW1CLGlCQXZCOUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFsQnJCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1Qjt3SEFpQlosbUJBQW1CLFlBYnJCO1lBQ1AsWUFBWTtZQUNaLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsZUFBZTtZQUNmLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQjtTQUNwQjtrR0FJVSxtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0NoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0RyYWdEcm9wRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0lucHV0RXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hpcHMtb3ZlcnZpZXcvY2hpcHMtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzU3RhY2tlZEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWhhcm5lc3MvY2hpcHMtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNGb3JtQ29udHJvbEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtZm9ybS1jb250cm9sL2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5leHBvcnQge1xuICBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUsXG4gIENoaXBzRHJhZ0Ryb3BFeGFtcGxlLFxuICBDaGlwc0lucHV0RXhhbXBsZSxcbiAgQ2hpcHNPdmVydmlld0V4YW1wbGUsXG4gIENoaXBzU3RhY2tlZEV4YW1wbGUsXG4gIENoaXBzSGFybmVzc0V4YW1wbGUsXG4gIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSxcbiAgQ2hpcHNEcmFnRHJvcEV4YW1wbGUsXG4gIENoaXBzSW5wdXRFeGFtcGxlLFxuICBDaGlwc092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hpcHNTdGFja2VkRXhhbXBsZSxcbiAgQ2hpcHNIYXJuZXNzRXhhbXBsZSxcbiAgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==