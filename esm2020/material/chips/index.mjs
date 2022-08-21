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
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
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
ChipsExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ChipsExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChipsExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ChipsExamplesModule, declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample,
        ChipsHarnessExample,
        ChipsFormControlExample,
        ChipsAvatarExample], imports: [CommonModule,
        DragDropModule,
        MatLegacyAutocompleteModule,
        MatLegacyButtonModule,
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
ChipsExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ChipsExamplesModule, imports: [CommonModule,
        DragDropModule,
        MatLegacyAutocompleteModule,
        MatLegacyButtonModule,
        MatLegacyChipsModule,
        MatIconModule,
        MatLegacyFormFieldModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ChipsExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatLegacyAutocompleteModule,
                        MatLegacyButtonModule,
                        MatLegacyChipsModule,
                        MatIconModule,
                        MatLegacyFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDOztBQUV0RSxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixHQUNuQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0NBQ25CLENBQUM7QUFnQkYsTUFBTSxPQUFPLG1CQUFtQjs7cUhBQW5CLG1CQUFtQjtzSEFBbkIsbUJBQW1CLGlCQXhCOUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQixhQUtoQixZQUFZO1FBQ1osY0FBYztRQUNkLDJCQUEyQjtRQUMzQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLGFBQWE7UUFDYix3QkFBd0I7UUFDeEIsbUJBQW1CLGFBbkJyQix3QkFBd0I7UUFDeEIsb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsa0JBQWtCO3NIQWlCUCxtQkFBbUIsWUFaNUIsWUFBWTtRQUNaLGNBQWM7UUFDZCwyQkFBMkI7UUFDM0IscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2Isd0JBQXdCO1FBQ3hCLG1CQUFtQjtnR0FLVixtQkFBbUI7a0JBZC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCwyQkFBMkI7d0JBQzNCLHFCQUFxQjt3QkFDckIsb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLHdCQUF3Qjt3QkFDeEIsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdExlZ2FjeUNoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hpcHMnO1xuaW1wb3J0IHtNYXRMZWdhY3lGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0NoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0RyYWdEcm9wRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0lucHV0RXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hpcHMtb3ZlcnZpZXcvY2hpcHMtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzU3RhY2tlZEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWhhcm5lc3MvY2hpcHMtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNGb3JtQ29udHJvbEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtZm9ybS1jb250cm9sL2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNBdmF0YXJFeGFtcGxlfSBmcm9tICcuL2NoaXBzLWF2YXRhci9jaGlwcy1hdmF0YXItZXhhbXBsZSc7XG5pbXBvcnQge01hdExlZ2FjeUJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWJ1dHRvbic7XG5cbmV4cG9ydCB7XG4gIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSxcbiAgQ2hpcHNEcmFnRHJvcEV4YW1wbGUsXG4gIENoaXBzSW5wdXRFeGFtcGxlLFxuICBDaGlwc092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hpcHNTdGFja2VkRXhhbXBsZSxcbiAgQ2hpcHNIYXJuZXNzRXhhbXBsZSxcbiAgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUsXG4gIENoaXBzQXZhdGFyRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDaGlwc0F1dG9jb21wbGV0ZUV4YW1wbGUsXG4gIENoaXBzRHJhZ0Ryb3BFeGFtcGxlLFxuICBDaGlwc0lucHV0RXhhbXBsZSxcbiAgQ2hpcHNPdmVydmlld0V4YW1wbGUsXG4gIENoaXBzU3RhY2tlZEV4YW1wbGUsXG4gIENoaXBzSGFybmVzc0V4YW1wbGUsXG4gIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlLFxuICBDaGlwc0F2YXRhckV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIERyYWdEcm9wTW9kdWxlLFxuICAgIE1hdExlZ2FjeUF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBNYXRMZWdhY3lCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2hpcHNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMZWdhY3lGb3JtRmllbGRNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==