import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatRadioModule } from '@angular/material/radio';
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
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule], exports: [CheckboxConfigurableExample,
        CheckboxOverviewExample,
        CheckboxHarnessExample,
        CheckboxReactiveFormsExample] });
CheckboxExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, imports: [CommonModule,
        MatLegacyCardModule,
        MatLegacyCheckboxModule,
        MatRadioModule,
        FormsModule,
        ReactiveFormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CheckboxExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatLegacyCardModule,
                        MatLegacyCheckboxModule,
                        MatRadioModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2xHLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3RGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLDJEQUEyRCxDQUFDOztBQUV2RyxPQUFPLEVBQ0wsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2QixzQkFBc0IsRUFDdEIsNEJBQTRCLEdBQzdCLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtDQUM3QixDQUFDO0FBY0YsTUFBTSxPQUFPLHNCQUFzQjs7bUhBQXRCLHNCQUFzQjtvSEFBdEIsc0JBQXNCLGlCQWxCakMsMkJBQTJCO1FBQzNCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsNEJBQTRCLGFBSzFCLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbUJBQW1CLGFBYnJCLDJCQUEyQjtRQUMzQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtvSEFlakIsc0JBQXNCLFlBVi9CLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbUJBQW1COzJGQUtWLHNCQUFzQjtrQkFabEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixtQkFBbUI7d0JBQ25CLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdExlZ2FjeUNhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jYXJkJztcbmltcG9ydCB7TWF0TGVnYWN5Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jaGVja2JveCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge0NoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZX0gZnJvbSAnLi9jaGVja2JveC1jb25maWd1cmFibGUvY2hlY2tib3gtY29uZmlndXJhYmxlLWV4YW1wbGUnO1xuaW1wb3J0IHtDaGVja2JveEhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2NoZWNrYm94LWhhcm5lc3MvY2hlY2tib3gtaGFybmVzcy1leGFtcGxlJztcbmltcG9ydCB7Q2hlY2tib3hPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtb3ZlcnZpZXcvY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0NoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMvY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENoZWNrYm94Q29uZmlndXJhYmxlRXhhbXBsZSxcbiAgQ2hlY2tib3hPdmVydmlld0V4YW1wbGUsXG4gIENoZWNrYm94SGFybmVzc0V4YW1wbGUsXG4gIENoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2hlY2tib3hDb25maWd1cmFibGVFeGFtcGxlLFxuICBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSxcbiAgQ2hlY2tib3hIYXJuZXNzRXhhbXBsZSxcbiAgQ2hlY2tib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0TGVnYWN5Q2FyZE1vZHVsZSxcbiAgICBNYXRMZWdhY3lDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tib3hFeGFtcGxlc01vZHVsZSB7fVxuIl19