import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
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
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressSpinnerConfigurableExample,
        ProgressSpinnerHarnessExample,
        ProgressSpinnerOverviewExample] });
ProgressSpinnerExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ProgressSpinnerExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxvQ0FBb0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLHVFQUF1RSxDQUFDO0FBQ3pILE9BQU8sRUFBQyw4QkFBOEIsRUFBQyxNQUFNLCtEQUErRCxDQUFDO0FBQzdHLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDZEQUE2RCxDQUFDOztBQUUxRyxPQUFPLEVBQ0wsa0NBQWtDLEVBQ2xDLDZCQUE2QixFQUM3Qiw4QkFBOEIsR0FDL0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3Qiw4QkFBOEI7Q0FDL0IsQ0FBQztBQWNGLE1BQU0sT0FBTyw2QkFBNkI7OzBIQUE3Qiw2QkFBNkI7MkhBQTdCLDZCQUE2QixpQkFqQnhDLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsOEJBQThCLGFBSzVCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsd0JBQXdCO1FBQ3hCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVyxhQVpiLGtDQUFrQztRQUNsQyw2QkFBNkI7UUFDN0IsOEJBQThCOzJIQWVuQiw2QkFBNkIsWUFWdEMsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsY0FBYztRQUNkLGVBQWU7UUFDZixXQUFXOzJGQUtGLDZCQUE2QjtrQkFaekMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHdCQUF3Qjt3QkFDeEIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUNhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jYXJkJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1zcGlubmVyJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZXInO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlL3Byb2dyZXNzLXNwaW5uZXItY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3Mtc3Bpbm5lci1vdmVydmlldy9wcm9ncmVzcy1zcGlubmVyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9wcm9ncmVzcy1zcGlubmVyLWhhcm5lc3MvcHJvZ3Jlc3Mtc3Bpbm5lci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBQcm9ncmVzc1NwaW5uZXJDb25maWd1cmFibGVFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJIYXJuZXNzRXhhbXBsZSxcbiAgUHJvZ3Jlc3NTcGlubmVyT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFByb2dyZXNzU3Bpbm5lckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzU3Bpbm5lckhhcm5lc3NFeGFtcGxlLFxuICBQcm9ncmVzc1NwaW5uZXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNhcmRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzU3Bpbm5lckV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=