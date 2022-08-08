import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatLegacyRadioModule } from '@angular/material/legacy-radio';
import { CheckboxConfigurableExample } from './checkbox-configurable/checkbox-configurable-example';
import { CheckboxHarnessExample } from './checkbox-harness/checkbox-harness-example';
import { CheckboxOverviewExample } from './checkbox-overview/checkbox-overview-example';
import { CheckboxReactiveFormsExample } from './checkbox-reactive-forms/checkbox-reactive-forms-example';
import * as i0 from "@angular/core";
export { CheckboxConfigurableExample, CheckboxOverviewExample, CheckboxHarnessExample, CheckboxReactiveFormsExample, };
const EXAMPLES = [
    CheckboxConfigurableExample,
    CheckboxOverviewExample,
    CheckboxHarnessExample,
    CheckboxReactiveFormsExample,
];
export class CheckboxExamplesModule {
}
CheckboxExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CheckboxExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, declarations: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample], imports: [CommonModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyRadioModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample] });
CheckboxExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatLegacyRadioModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatLegacyCheckboxModule,
                        MatLegacyRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sMkRBQTJELENBQUM7O0FBRXZHLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0IsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0Qiw0QkFBNEIsR0FDN0IsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsMkJBQTJCO0lBQzNCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsNEJBQTRCO0NBQzdCLENBQUM7QUFjRixNQUFNLE9BQU8sc0JBQXNCOzttSEFBdEIsc0JBQXNCO29IQUF0QixzQkFBc0IsaUJBbEJqQywyQkFBMkI7UUFDM0IsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0Qiw0QkFBNEIsYUFLMUIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxtQkFBbUIsYUFickIsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsNEJBQTRCO29IQWVqQixzQkFBc0IsWUFWL0IsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxtQkFBbUI7MkZBS1Ysc0JBQXNCO2tCQVpsQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3dCQUN2QixvQkFBb0I7d0JBQ3BCLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0TGVnYWN5Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNhcmQnO1xuaW1wb3J0IHtNYXRMZWdhY3lDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWNoZWNrYm94JztcbmltcG9ydCB7TWF0TGVnYWN5UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1yYWRpbyc7XG5pbXBvcnQge0NoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGVja2JveEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NoZWNrYm94LWhhcm5lc3MvY2hlY2tib3gtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2hlY2tib3hPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtb3ZlcnZpZXcvY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0NoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMvY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG4gIENoZWNrYm94SGFybmVzc0V4YW1wbGUsXG4gIENoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlLFxuICBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hlY2tib3hIYXJuZXNzRXhhbXBsZSxcbiAgQ2hlY2tib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2FyZE1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRMZWdhY3lSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hFeGFtcGxlc01vZHVsZSB7fVxuIl19