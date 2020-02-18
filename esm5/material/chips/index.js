import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ChipsAutocompleteExample } from './chips-autocomplete/chips-autocomplete-example';
import { ChipsDragDropExample } from './chips-drag-and-drop/chips-drag-drop-example';
import { ChipsInputExample } from './chips-input/chips-input-example';
import { ChipsOverviewExample } from './chips-overview/chips-overview-example';
import { ChipsStackedExample } from './chips-stacked/chips-stacked-example';
import * as i0 from "@angular/core";
export { ChipsAutocompleteExample, ChipsDragDropExample, ChipsInputExample, ChipsOverviewExample, ChipsStackedExample, };
var EXAMPLES = [
    ChipsAutocompleteExample,
    ChipsDragDropExample,
    ChipsInputExample,
    ChipsOverviewExample,
    ChipsStackedExample,
];
var ChipsExamplesModule = /** @class */ (function () {
    function ChipsExamplesModule() {
    }
    ChipsExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatChipsModule,
                        MatIconModule,
                        MatFormFieldModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    ChipsExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ChipsExamplesModule });
    ChipsExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ChipsExamplesModule_Factory(t) { return new (t || ChipsExamplesModule)(); }, imports: [[
                CommonModule,
                DragDropModule,
                MatAutocompleteModule,
                MatChipsModule,
                MatIconModule,
                MatFormFieldModule,
                ReactiveFormsModule,
            ]] });
    return ChipsExamplesModule;
}());
export { ChipsExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ChipsExamplesModule, { declarations: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample], imports: [CommonModule,
        DragDropModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule], exports: [ChipsAutocompleteExample,
        ChipsDragDropExample,
        ChipsInputExample,
        ChipsOverviewExample,
        ChipsStackedExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ChipsExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    DragDropModule,
                    MatAutocompleteModule,
                    MatChipsModule,
                    MatIconModule,
                    MatFormFieldModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUNuRixPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQzs7QUFFMUUsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLG9CQUFvQixFQUNwQixtQkFBbUIsR0FDcEIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtDQUNwQixDQUFDO0FBRUY7SUFBQTtLQWVDOztnQkFmQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxxQkFBcUI7d0JBQ3JCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7OzJEQUNZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQWJyQjtnQkFDUCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QscUJBQXFCO2dCQUNyQixjQUFjO2dCQUNkLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixtQkFBbUI7YUFDcEI7OEJBdkNIO0NBNkNDLEFBZkQsSUFlQztTQURZLG1CQUFtQjt3RkFBbkIsbUJBQW1CLG1CQXJCOUIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQUtqQixZQUFZO1FBQ1osY0FBYztRQUNkLHFCQUFxQjtRQUNyQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixtQkFBbUIsYUFmckIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLG1CQUFtQjtrREFpQlIsbUJBQW1CO2NBZC9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLHFCQUFxQjtvQkFDckIsY0FBYztvQkFDZCxhQUFhO29CQUNiLGtCQUFrQjtvQkFDbEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEcmFnRHJvcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcbmltcG9ydCB7TWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0NoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1hdXRvY29tcGxldGUvY2hpcHMtYXV0b2NvbXBsZXRlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc0RyYWdEcm9wRXhhbXBsZX0gZnJvbSAnLi9jaGlwcy1kcmFnLWFuZC1kcm9wL2NoaXBzLWRyYWctZHJvcC1leGFtcGxlJztcbmltcG9ydCB7Q2hpcHNJbnB1dEV4YW1wbGV9IGZyb20gJy4vY2hpcHMtaW5wdXQvY2hpcHMtaW5wdXQtZXhhbXBsZSc7XG5pbXBvcnQge0NoaXBzT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtDaGlwc1N0YWNrZWRFeGFtcGxlfSBmcm9tICcuL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2hpcHNBdXRvY29tcGxldGVFeGFtcGxlLFxuICBDaGlwc0RyYWdEcm9wRXhhbXBsZSxcbiAgQ2hpcHNJbnB1dEV4YW1wbGUsXG4gIENoaXBzT3ZlcnZpZXdFeGFtcGxlLFxuICBDaGlwc1N0YWNrZWRFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENoaXBzQXV0b2NvbXBsZXRlRXhhbXBsZSxcbiAgQ2hpcHNEcmFnRHJvcEV4YW1wbGUsXG4gIENoaXBzSW5wdXRFeGFtcGxlLFxuICBDaGlwc092ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hpcHNTdGFja2VkRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==