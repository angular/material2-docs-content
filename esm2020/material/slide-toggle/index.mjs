import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { MatLegacySlideToggleModule } from '@angular/material/legacy-slide-toggle';
import { SlideToggleConfigurableExample } from './slide-toggle-configurable/slide-toggle-configurable-example';
import { SlideToggleFormsExample } from './slide-toggle-forms/slide-toggle-forms-example';
import { SlideToggleOverviewExample } from './slide-toggle-overview/slide-toggle-overview-example';
import { SlideToggleHarnessExample } from './slide-toggle-harness/slide-toggle-harness-example';
import * as i0 from "@angular/core";
export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleHarnessExample, SlideToggleOverviewExample, };
const EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleHarnessExample,
    SlideToggleOverviewExample,
];
export class SlideToggleExamplesModule {
}
SlideToggleExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SlideToggleExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SlideToggleExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SlideToggleExamplesModule, declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyRadioModule,
        MatLegacySlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample] });
SlideToggleExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SlideToggleExamplesModule, imports: [FormsModule,
        MatLegacyButtonModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyRadioModule,
        MatLegacySlideToggleModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: SlideToggleExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        MatLegacyButtonModule,
                        MatLegacyCardModule,
                        MatLegacyCheckboxModule,
                        MatLegacyRadioModule,
                        MatLegacySlideToggleModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6QiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0NBQzNCLENBQUM7QUFlRixNQUFNLE9BQU8seUJBQXlCOzsySEFBekIseUJBQXlCOzRIQUF6Qix5QkFBeUIsaUJBbkJwQyw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QiwwQkFBMEIsYUFLeEIsV0FBVztRQUNYLHFCQUFxQjtRQUNyQixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsbUJBQW1CLGFBZHJCLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDBCQUEwQjs0SEFnQmYseUJBQXlCLFlBWGxDLFdBQVc7UUFDWCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsMEJBQTBCO1FBQzFCLG1CQUFtQjtnR0FLVix5QkFBeUI7a0JBYnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gscUJBQXFCO3dCQUNyQixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQiwwQkFBMEI7d0JBQzFCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRMZWdhY3lDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2FyZCc7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRMZWdhY3lSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LXJhZGlvJztcbmltcG9ydCB7TWF0TGVnYWN5U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS9zbGlkZS10b2dnbGUtY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtZm9ybXMvc2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtb3ZlcnZpZXcvc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTbGlkZVRvZ2dsZUhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1oYXJuZXNzL3NsaWRlLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUhhcm5lc3NFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTbGlkZVRvZ2dsZUNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUhhcm5lc3NFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZU92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRMZWdhY3lCdXR0b25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2FyZE1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMZWdhY3lSYWRpb01vZHVsZSxcbiAgICBNYXRMZWdhY3lTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVFeGFtcGxlc01vZHVsZSB7fVxuIl19