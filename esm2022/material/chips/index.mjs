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
import { ChipsAvatarExample } from './chips-avatar/chips-avatar-example';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample, ChipsHarnessExample, ChipsFormControlExample, ChipsAvatarExample, };
const EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
    ChipsHarnessExample,
    ChipsFormControlExample,
    ChipsAvatarExample,
];
class ChipsExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
            ChipsDragDropExample,
            ChipsInputExample,
            ChipsOverviewExample,
            ChipsStackedExample,
            ChipsHarnessExample,
            ChipsFormControlExample,
            ChipsAvatarExample], imports: [CommonModule,
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
            ChipsFormControlExample,
            ChipsAvatarExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ChipsExamplesModule, imports: [CommonModule,
            DragDropModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatChipsModule,
            MatIconModule,
            MatFormFieldModule,
            ReactiveFormsModule] }); }
}
export { ChipsExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ChipsExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsa0JBQWtCLEdBQ25CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDbkIsQ0FBQztBQUVGLE1BY2EsbUJBQW1COzhHQUFuQixtQkFBbUI7K0dBQW5CLG1CQUFtQixpQkF4QjlCLHdCQUF3QjtZQUN4QixvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixrQkFBa0IsYUFLaEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxxQkFBcUI7WUFDckIsZUFBZTtZQUNmLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLG1CQUFtQixhQW5CckIsd0JBQXdCO1lBQ3hCLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsb0JBQW9CO1lBQ3BCLG1CQUFtQjtZQUNuQixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLGtCQUFrQjsrR0FpQlAsbUJBQW1CLFlBWjVCLFlBQVk7WUFDWixjQUFjO1lBQ2QscUJBQXFCO1lBQ3JCLGVBQWU7WUFDZixjQUFjO1lBQ2QsYUFBYTtZQUNiLGtCQUFrQjtZQUNsQixtQkFBbUI7O1NBS1YsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGVBQWU7d0JBQ2YsY0FBYzt3QkFDZCxhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0NoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0RyYWdEcm9wRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0lucHV0RXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hpcHMtb3ZlcnZpZXcvY2hpcHMtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzU3RhY2tlZEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWhhcm5lc3MvY2hpcHMtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNGb3JtQ29udHJvbEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtZm9ybS1jb250cm9sL2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNBdmF0YXJFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWF2YXRhci9jaGlwcy1hdmF0YXItZXhhbXBsZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuZXhwb3J0IHtcbiAgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlLFxuICBDaGlwc0RyYWdEcm9wRXhhbXBsZSxcbiAgQ2hpcHNJbnB1dEV4YW1wbGUsXG4gIENoaXBzT3ZlcnZpZXdFeGFtcGxlLFxuICBDaGlwc1N0YWNrZWRFeGFtcGxlLFxuICBDaGlwc0hhcm5lc3NFeGFtcGxlLFxuICBDaGlwc0Zvcm1Db250cm9sRXhhbXBsZSxcbiAgQ2hpcHNBdmF0YXJFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSxcbiAgQ2hpcHNEcmFnRHJvcEV4YW1wbGUsXG4gIENoaXBzSW5wdXRFeGFtcGxlLFxuICBDaGlwc092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hpcHNTdGFja2VkRXhhbXBsZSxcbiAgQ2hpcHNIYXJuZXNzRXhhbXBsZSxcbiAgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUsXG4gIENoaXBzQXZhdGFyRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNFeGFtcGxlc01vZHVsZSB7fVxuIl19