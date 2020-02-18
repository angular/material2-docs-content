import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SelectCustomTriggerExample } from './select-custom-trigger/select-custom-trigger-example';
import { SelectDisabledExample } from './select-disabled/select-disabled-example';
import { SelectErrorStateMatcherExample } from './select-error-state-matcher/select-error-state-matcher-example';
import { SelectFormExample } from './select-form/select-form-example';
import { SelectHintErrorExample } from './select-hint-error/select-hint-error-example';
import { SelectMultipleExample } from './select-multiple/select-multiple-example';
import { SelectNoRippleExample } from './select-no-ripple/select-no-ripple-example';
import { SelectOptgroupExample } from './select-optgroup/select-optgroup-example';
import { SelectOverviewExample } from './select-overview/select-overview-example';
import { SelectPanelClassExample } from './select-panel-class/select-panel-class-example';
import { SelectResetExample } from './select-reset/select-reset-example';
import { SelectValueBindingExample } from './select-value-binding/select-value-binding-example';
import { SelectReactiveFormExample } from './select-reactive-form/select-reactive-form-example';
import { SelectInitialValueExample } from './select-initial-value/select-initial-value-example';
import * as i0 from "@angular/core";
export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHintErrorExample, SelectInitialValueExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectReactiveFormExample, SelectResetExample, SelectValueBindingExample, };
var EXAMPLES = [
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectInitialValueExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
    SelectReactiveFormExample,
    SelectResetExample,
    SelectValueBindingExample,
];
var SelectExamplesModule = /** @class */ (function () {
    function SelectExamplesModule() {
    }
    SelectExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatCheckboxModule,
                        MatInputModule,
                        MatSelectModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    SelectExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SelectExamplesModule });
    SelectExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MatCheckboxModule,
                MatInputModule,
                MatSelectModule,
                ReactiveFormsModule,
            ]] });
    return SelectExamplesModule;
}());
export { SelectExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectExamplesModule, { declarations: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample], imports: [CommonModule,
        FormsModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        ReactiveFormsModule], exports: [SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatCheckboxModule,
                    MatInputModule,
                    MatSelectModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDO0FBQzlGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0Qix5QkFBeUIsRUFDekIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHVCQUF1QixFQUN2Qix5QkFBeUIsRUFDekIsa0JBQWtCLEVBQ2xCLHlCQUF5QixHQUMxQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIseUJBQXlCO0NBQzFCLENBQUM7QUFFRjtJQUFBO0tBY0M7O2dCQWRBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7OzREQUNZLG9CQUFvQjsySEFBcEIsb0JBQW9CLGtCQVp0QjtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsaUJBQWlCO2dCQUNqQixjQUFjO2dCQUNkLGVBQWU7Z0JBQ2YsbUJBQW1CO2FBQ3BCOytCQWpFSDtDQXVFQyxBQWRELElBY0M7U0FEWSxvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkE3Qi9CLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix5QkFBeUIsYUFLdkIsWUFBWTtRQUNaLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUIsYUF2QnJCLDBCQUEwQjtRQUMxQixxQkFBcUI7UUFDckIsOEJBQThCO1FBQzlCLGlCQUFpQjtRQUNqQixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQix5QkFBeUI7a0RBZ0JkLG9CQUFvQjtjQWJoQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge1NlbGVjdEN1c3RvbVRyaWdnZXJFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1jdXN0b20tdHJpZ2dlci9zZWxlY3QtY3VzdG9tLXRyaWdnZXItZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdERpc2FibGVkRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtZGlzYWJsZWQvc2VsZWN0LWRpc2FibGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgU2VsZWN0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlXG59IGZyb20gJy4vc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXIvc2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdEZvcm1FeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1mb3JtL3NlbGVjdC1mb3JtLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RIaW50RXJyb3JFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1oaW50LWVycm9yL3NlbGVjdC1oaW50LWVycm9yLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RNdWx0aXBsZUV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LW11bHRpcGxlL3NlbGVjdC1tdWx0aXBsZS1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0Tm9SaXBwbGVFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0T3B0Z3JvdXBFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1vcHRncm91cC9zZWxlY3Qtb3B0Z3JvdXAtZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zZWxlY3Qtb3ZlcnZpZXcvc2VsZWN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RQYW5lbENsYXNzRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtcGFuZWwtY2xhc3Mvc2VsZWN0LXBhbmVsLWNsYXNzLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RSZXNldEV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LXJlc2V0L3NlbGVjdC1yZXNldC1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0VmFsdWVCaW5kaW5nRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtdmFsdWUtYmluZGluZy9zZWxlY3QtdmFsdWUtYmluZGluZy1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0UmVhY3RpdmVGb3JtRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtcmVhY3RpdmUtZm9ybS9zZWxlY3QtcmVhY3RpdmUtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0SW5pdGlhbFZhbHVlRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2VsZWN0Q3VzdG9tVHJpZ2dlckV4YW1wbGUsXG4gIFNlbGVjdERpc2FibGVkRXhhbXBsZSxcbiAgU2VsZWN0RXJyb3JTdGF0ZU1hdGNoZXJFeGFtcGxlLFxuICBTZWxlY3RGb3JtRXhhbXBsZSxcbiAgU2VsZWN0SGludEVycm9yRXhhbXBsZSxcbiAgU2VsZWN0SW5pdGlhbFZhbHVlRXhhbXBsZSxcbiAgU2VsZWN0TXVsdGlwbGVFeGFtcGxlLFxuICBTZWxlY3ROb1JpcHBsZUV4YW1wbGUsXG4gIFNlbGVjdE9wdGdyb3VwRXhhbXBsZSxcbiAgU2VsZWN0T3ZlcnZpZXdFeGFtcGxlLFxuICBTZWxlY3RQYW5lbENsYXNzRXhhbXBsZSxcbiAgU2VsZWN0UmVhY3RpdmVGb3JtRXhhbXBsZSxcbiAgU2VsZWN0UmVzZXRFeGFtcGxlLFxuICBTZWxlY3RWYWx1ZUJpbmRpbmdFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIFNlbGVjdEN1c3RvbVRyaWdnZXJFeGFtcGxlLFxuICBTZWxlY3REaXNhYmxlZEV4YW1wbGUsXG4gIFNlbGVjdEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSxcbiAgU2VsZWN0Rm9ybUV4YW1wbGUsXG4gIFNlbGVjdEhpbnRFcnJvckV4YW1wbGUsXG4gIFNlbGVjdEluaXRpYWxWYWx1ZUV4YW1wbGUsXG4gIFNlbGVjdE11bHRpcGxlRXhhbXBsZSxcbiAgU2VsZWN0Tm9SaXBwbGVFeGFtcGxlLFxuICBTZWxlY3RPcHRncm91cEV4YW1wbGUsXG4gIFNlbGVjdE92ZXJ2aWV3RXhhbXBsZSxcbiAgU2VsZWN0UGFuZWxDbGFzc0V4YW1wbGUsXG4gIFNlbGVjdFJlYWN0aXZlRm9ybUV4YW1wbGUsXG4gIFNlbGVjdFJlc2V0RXhhbXBsZSxcbiAgU2VsZWN0VmFsdWVCaW5kaW5nRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=