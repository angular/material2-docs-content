import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyFormFieldModule } from '@angular/material/legacy-form-field';
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
ChipsExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipsExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample,
        ChipsAvatarExample], imports: [CommonModule,
        DragDropModule,
        MatLegacyAutocompleteModule,
        MatButtonModule,
        MatLegacyChipsModule,
        MatIconModule,
        MatLegacyFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample,
        ChipsAvatarExample] });
ChipsExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsExamplesModule, imports: [CommonModule,
        DragDropModule,
        MatLegacyAutocompleteModule,
        MatButtonModule,
        MatLegacyChipsModule,
        MatIconModule,
        MatLegacyFormFieldModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatLegacyAutocompleteModule,
                        MatButtonModule,
                        MatLegacyChipsModule,
                        MatIconModule,
                        MatLegacyFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFekQsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLHVCQUF1QixFQUN2QixrQkFBa0IsR0FDbkIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtDQUNuQixDQUFDO0FBZ0JGLE1BQU0sT0FBTyxtQkFBbUI7O2dIQUFuQixtQkFBbUI7aUhBQW5CLG1CQUFtQixpQkF4QjlCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIsaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0IsYUFLaEIsWUFBWTtRQUNaLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLG1CQUFtQixhQW5CckIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtpSEFpQlAsbUJBQW1CLFlBWjVCLFlBQVk7UUFDWixjQUFjO1FBQ2QsMkJBQTJCO1FBQzNCLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLHdCQUF3QjtRQUN4QixtQkFBbUI7MkZBS1YsbUJBQW1CO2tCQWQvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsMkJBQTJCO3dCQUMzQixlQUFlO3dCQUNmLG9CQUFvQjt3QkFDcEIsYUFBYTt3QkFDYix3QkFBd0I7d0JBQ3hCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RHJhZ0Ryb3BNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lBdXRvY29tcGxldGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRMZWdhY3lDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoaXBzJztcbmltcG9ydCB7TWF0TGVnYWN5Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGV9IGZyb20gJy4vY2hpcHMtYXV0b2NvbXBsZXRlL2NoaXBzLWF1dG9jb21wbGV0ZS1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNEcmFnRHJvcEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtZHJhZy1kcm9wL2NoaXBzLWRyYWctZHJvcC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNJbnB1dEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtaW5wdXQvY2hpcHMtaW5wdXQtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc1N0YWNrZWRFeGFtcGxlfSBmcm9tICcuL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzRm9ybUNvbnRyb2xFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWZvcm0tY29udHJvbC9jaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzQXZhdGFyRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbmV4cG9ydCB7XG4gIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSxcbiAgQ2hpcHNEcmFnRHJvcEV4YW1wbGUsXG4gIENoaXBzSW5wdXRFeGFtcGxlLFxuICBDaGlwc092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hpcHNTdGFja2VkRXhhbXBsZSxcbiAgQ2hpcHNIYXJuZXNzRXhhbXBsZSxcbiAgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUsXG4gIENoaXBzQXZhdGFyRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUsXG4gIENoaXBzRHJhZ0Ryb3BFeGFtcGxlLFxuICBDaGlwc0lucHV0RXhhbXBsZSxcbiAgQ2hpcHNPdmVydmlld0V4YW1wbGUsXG4gIENoaXBzU3RhY2tlZEV4YW1wbGUsXG4gIENoaXBzSGFybmVzc0V4YW1wbGUsXG4gIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlLFxuICBDaGlwc0F2YXRhckV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIE1hdExlZ2FjeUF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hpcHNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lGb3JtRmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==