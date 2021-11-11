import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
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
SliderExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: SliderExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SliderExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: SliderExamplesModule, declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] });
SliderExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: SliderExamplesModule, imports: [[
            CommonModule,
            FormsModule,
            MatCardModule,
            MatCheckboxModule,
            MatInputModule,
            MatSliderModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.1", ngImport: i0, type: SliderExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSliderModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wseUJBQXlCLEVBQ3pCLHVCQUF1QixFQUN2QixvQkFBb0IsRUFDcEIscUJBQXFCLEdBQ3RCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBZUYsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtrSEFBcEIsb0JBQW9CLGlCQW5CL0IseUJBQXlCO1FBQ3pCLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIscUJBQXFCLGFBS25CLFlBQVk7UUFDWixXQUFXO1FBQ1gsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZSxhQWJqQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUI7a0hBZ0JWLG9CQUFvQixZQVp0QjtZQUNQLFlBQVk7WUFDWixXQUFXO1lBQ1gsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2QsZUFBZTtTQUNoQjsyRkFLVSxvQkFBb0I7a0JBYmhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3FCQUNoQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XG5pbXBvcnQge1NsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vc2xpZGVyLWNvbmZpZ3VyYWJsZS9zbGlkZXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItZm9ybWF0dGluZy9zbGlkZXItZm9ybWF0dGluZy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVyT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1vdmVydmlldy9zbGlkZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlckhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1oYXJuZXNzL3NsaWRlci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSxcbiAgU2xpZGVySGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlck92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbGlkZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZXJGb3JtYXR0aW5nRXhhbXBsZSxcbiAgU2xpZGVySGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlck92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2FyZE1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRTbGlkZXJNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJFeGFtcGxlc01vZHVsZSB7fVxuIl19