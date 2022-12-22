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
export class ChipsExamplesModule {
}
ChipsExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipsExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
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
        ChipsAvatarExample] });
ChipsExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.1.0-next.3", ngImport: i0, type: ChipsExamplesModule, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7O0FBRXpELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixvQkFBb0IsRUFDcEIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQix1QkFBdUIsRUFDdkIsa0JBQWtCLEdBQ25CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7Q0FDbkIsQ0FBQztBQWdCRixNQUFNLE9BQU8sbUJBQW1COzt1SEFBbkIsbUJBQW1CO3dIQUFuQixtQkFBbUIsaUJBeEI5Qix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCLGFBS2hCLFlBQVk7UUFDWixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFuQnJCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0I7d0hBaUJQLG1CQUFtQixZQVo1QixZQUFZO1FBQ1osY0FBYztRQUNkLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsY0FBYztRQUNkLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1CO2tHQUtWLG1CQUFtQjtrQkFkL0IsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLHFCQUFxQjt3QkFDckIsZUFBZTt3QkFDZixjQUFjO3dCQUNkLGFBQWE7d0JBQ2Isa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RyYWdEcm9wTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7Q2hpcHNBdXRvY29tcGxldGVFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWF1dG9jb21wbGV0ZS9jaGlwcy1hdXRvY29tcGxldGUtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzRHJhZ0Ryb3BFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWRyYWctZHJvcC9jaGlwcy1kcmFnLWRyb3AtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzSW5wdXRFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNTdGFja2VkRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0Zvcm1Db250cm9sRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0F2YXRhckV4YW1wbGV9IGZyb20gJy4vY2hpcHMtYXZhdGFyL2NoaXBzLWF2YXRhci1leGFtcGxlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5leHBvcnQge1xuICBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUsXG4gIENoaXBzRHJhZ0Ryb3BFeGFtcGxlLFxuICBDaGlwc0lucHV0RXhhbXBsZSxcbiAgQ2hpcHNPdmVydmlld0V4YW1wbGUsXG4gIENoaXBzU3RhY2tlZEV4YW1wbGUsXG4gIENoaXBzSGFybmVzc0V4YW1wbGUsXG4gIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlLFxuICBDaGlwc0F2YXRhckV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlLFxuICBDaGlwc0RyYWdEcm9wRXhhbXBsZSxcbiAgQ2hpcHNJbnB1dEV4YW1wbGUsXG4gIENoaXBzT3ZlcnZpZXdFeGFtcGxlLFxuICBDaGlwc1N0YWNrZWRFeGFtcGxlLFxuICBDaGlwc0hhcm5lc3NFeGFtcGxlLFxuICBDaGlwc0Zvcm1Db250cm9sRXhhbXBsZSxcbiAgQ2hpcHNBdmF0YXJFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBEcmFnRHJvcE1vZHVsZSxcbiAgICBNYXRBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0V4YW1wbGVzTW9kdWxlIHt9XG4iXX0=