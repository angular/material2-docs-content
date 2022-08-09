import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySliderModule } from '@angular/material/legacy-slider';
import { ProgressSpinnerConfigurableExample } from './progress-spinner-configurable/progress-spinner-configurable-example';
import { ProgressSpinnerOverviewExample } from './progress-spinner-overview/progress-spinner-overview-example';
import { ProgressSpinnerHarnessExample } from './progress-spinner-harness/progress-spinner-harness-example';
import * as i0 from "@angular/core";
export { ProgressSpinnerConfigurableExample, ProgressSpinnerHarnessExample, ProgressSpinnerOverviewExample, };
const EXAMPLES = [
    ProgressSpinnerConfigurableExample,
    ProgressSpinnerHarnessExample,
    ProgressSpinnerOverviewExample,
];
export class ProgressSpinnerExamplesModule {
}
ProgressSpinnerExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ProgressSpinnerExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, declarations: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample], imports: [CommonModule,
        MatLegacyCardModule,
        MatProgressSpinnerModule,
        MatLegacyRadioModule,
        MatLegacySliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample] });
ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatProgressSpinnerModule,
        MatLegacyRadioModule,
        MatLegacySliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatProgressSpinnerModule,
                        MatLegacyRadioModule,
                        MatLegacySliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSx1RUFBdUUsQ0FBQztBQUN6SCxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSwrREFBK0QsQ0FBQztBQUM3RyxPQUFPLEVBQUMsNkJBQTZCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQzs7QUFFMUcsT0FBTyxFQUNMLGtDQUFrQyxFQUNsQyw2QkFBNkIsRUFDN0IsOEJBQThCLEdBQy9CLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsOEJBQThCO0NBQy9CLENBQUM7QUFjRixNQUFNLE9BQU8sNkJBQTZCOzswSEFBN0IsNkJBQTZCOzJIQUE3Qiw2QkFBNkIsaUJBakJ4QyxrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QixhQUs1QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLFdBQVcsYUFaYixrQ0FBa0M7UUFDbEMsNkJBQTZCO1FBQzdCLDhCQUE4QjsySEFlbkIsNkJBQTZCLFlBVnRDLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsV0FBVzsyRkFLRiw2QkFBNkI7a0JBWnpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osbUJBQW1CO3dCQUNuQix3QkFBd0I7d0JBQ3hCLG9CQUFvQjt3QkFDcEIscUJBQXFCO3dCQUNyQixXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdExlZ2FjeVJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktcmFkaW8nO1xuaW1wb3J0IHtNYXRMZWdhY3lTbGlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy9wcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLWhhcm5lc3MvcHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzU3Bpbm5lckhhcm5lc3NFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdExlZ2FjeVJhZGlvTW9kdWxlLFxuICAgIE1hdExlZ2FjeVNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=