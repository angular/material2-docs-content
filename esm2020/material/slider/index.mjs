import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
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
SliderExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SliderExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, declarations: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample], imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule], exports: [SliderConfigurableExample,
        SliderFormattingExample,
        SliderHarnessExample,
        SliderOverviewExample] });
SliderExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, imports: [CommonModule,
        FormsModule,
        MatLegacyCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSliderModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: SliderExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatLegacyCardModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSliderModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDNUYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsdUJBQXVCLEVBQ3ZCLG9CQUFvQixFQUNwQixxQkFBcUIsR0FDdEIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0NBQ3RCLENBQUM7QUFjRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBbEIvQix5QkFBeUI7UUFDekIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQixxQkFBcUIsYUFLbkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlLGFBYmpCLHlCQUF5QjtRQUN6Qix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtrSEFlVixvQkFBb0IsWUFWN0IsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxlQUFlOzJGQUtOLG9CQUFvQjtrQkFaaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGVBQWU7cUJBQ2hCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7U2xpZGVyQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9zbGlkZXItY29uZmlndXJhYmxlL3NsaWRlci1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlckZvcm1hdHRpbmdFeGFtcGxlfSBmcm9tICcuL3NsaWRlci1mb3JtYXR0aW5nL3NsaWRlci1mb3JtYXR0aW5nLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2xpZGVyLW92ZXJ2aWV3L3NsaWRlci1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVySGFybmVzc0V4YW1wbGV9IGZyb20gJy4vc2xpZGVyLWhhcm5lc3Mvc2xpZGVyLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlckZvcm1hdHRpbmdFeGFtcGxlLFxuICBTbGlkZXJIYXJuZXNzRXhhbXBsZSxcbiAgU2xpZGVyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNsaWRlckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlckZvcm1hdHRpbmdFeGFtcGxlLFxuICBTbGlkZXJIYXJuZXNzRXhhbXBsZSxcbiAgU2xpZGVyT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRMZWdhY3lDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=