import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { MatSliderModule } from '@angular/material/slider';
import { SliderConfigurableExample } from './slider-configurable/slider-configurable-example';
import { SliderFormattingExample } from './slider-formatting/slider-formatting-example';
import { SliderOverviewExample } from './slider-overview/slider-overview-example';
import { SliderHarnessExample } from './slider-harness/slider-harness-example';
import * as i0 from "@angular/core";
export { SliderConfigurableExample, SliderFormattingExample, SliderHarnessExample, SliderOverviewExample, };
const EXAMPLES = [
    SliderConfigurableExample,
    SliderFormattingExample,
    SliderHarnessExample,
    SliderOverviewExample,
];
export class SliderExamplesModule {
}
SliderExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SliderExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] });
SliderExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatSliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatLegacyCardModule,
                        MatLegacyCheckboxModule,
                        MatLegacyInputModule,
                        MatSliderModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFFN0UsT0FBTyxFQUNMLHlCQUF5QixFQUN6Qix1QkFBdUIsRUFDdkIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZix5QkFBeUI7SUFDekIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7Q0FDdEIsQ0FBQztBQWNGLE1BQU0sT0FBTyxvQkFBb0I7O2lIQUFwQixvQkFBb0I7a0hBQXBCLG9CQUFvQixpQkFsQi9CLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQixhQUtuQixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLGVBQWUsYUFiakIseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCO2tIQWVWLG9CQUFvQixZQVY3QixZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLGVBQWU7MkZBS04sb0JBQW9CO2tCQVpoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQix1QkFBdUI7d0JBQ3ZCLG9CQUFvQjt3QkFDcEIsZUFBZTtxQkFDaEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUNhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jYXJkJztcbmltcG9ydCB7TWF0TGVnYWN5Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jaGVja2JveCc7XG5pbXBvcnQge01hdExlZ2FjeUlucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktaW5wdXQnO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1NsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vc2xpZGVyLWNvbmZpZ3VyYWJsZS9zbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1vdmVydmlldy9zbGlkZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1oYXJuZXNzL3NsaWRlci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSxcbiAgU2xpZGVySGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSxcbiAgU2xpZGVySGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2FyZE1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMZWdhY3lJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19