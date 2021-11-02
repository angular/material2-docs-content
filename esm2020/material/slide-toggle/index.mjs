import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
SlideToggleExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: SlideToggleExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SlideToggleExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: SlideToggleExamplesModule, declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleHarnessExample,
        SlideToggleOverviewExample] });
SlideToggleExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: SlideToggleExamplesModule, imports: [[
            FormsModule,
            MatButtonModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule,
            MatSlideToggleModule,
            ReactiveFormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-rc.3", ngImport: i0, type: SlideToggleExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        FormsModule,
                        MatButtonModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatSlideToggleModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sK0RBQStELENBQUM7QUFDN0csT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0scURBQXFELENBQUM7O0FBRTlGLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsdUJBQXVCLEVBQ3ZCLHlCQUF5QixFQUN6QiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsMEJBQTBCO0NBQzNCLENBQUM7QUFnQkYsTUFBTSxPQUFPLHlCQUF5Qjs7MkhBQXpCLHlCQUF5Qjs0SEFBekIseUJBQXlCLGlCQXBCcEMsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsMEJBQTBCLGFBS3hCLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2Qsb0JBQW9CO1FBQ3BCLG1CQUFtQixhQWRyQiw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLHlCQUF5QjtRQUN6QiwwQkFBMEI7NEhBaUJmLHlCQUF5QixZQWIzQjtZQUNQLFdBQVc7WUFDWCxlQUFlO1lBQ2YsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLG1CQUFtQjtTQUNwQjtnR0FLVSx5QkFBeUI7a0JBZHJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9zbGlkZS10b2dnbGUtY29uZmlndXJhYmxlL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlRm9ybXNFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1vdmVydmlldy9zbGlkZS10b2dnbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NsaWRlVG9nZ2xlSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWhhcm5lc3Mvc2xpZGUtdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlSGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlSGFybmVzc0V4YW1wbGUsXG4gIFNsaWRlVG9nZ2xlT3ZlcnZpZXdFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZVRvZ2dsZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=