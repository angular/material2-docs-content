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
import * as i0 from "@angular/core";
export { SelectCustomTriggerExample, SelectDisabledExample, SelectErrorStateMatcherExample, SelectFormExample, SelectHintErrorExample, SelectMultipleExample, SelectNoRippleExample, SelectOptgroupExample, SelectOverviewExample, SelectPanelClassExample, SelectResetExample, SelectValueBindingExample, };
var EXAMPLES = [
    SelectCustomTriggerExample,
    SelectDisabledExample,
    SelectErrorStateMatcherExample,
    SelectFormExample,
    SelectHintErrorExample,
    SelectMultipleExample,
    SelectNoRippleExample,
    SelectOptgroupExample,
    SelectOverviewExample,
    SelectPanelClassExample,
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
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
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
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zZWxlY3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLGlFQUFpRSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLCtDQUErQyxDQUFDO0FBQ3JGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ2xGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsaUJBQWlCLEVBQ2pCLHNCQUFzQixFQUN0QixxQkFBcUIsRUFDckIscUJBQXFCLEVBQ3JCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsdUJBQXVCLEVBQ3ZCLGtCQUFrQixFQUNsQix5QkFBeUIsR0FDMUIsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQix5QkFBeUI7Q0FDMUIsQ0FBQztBQUVGO0lBQUE7S0FhQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFdBQVc7d0JBQ1gsaUJBQWlCO3dCQUNqQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsbUJBQW1CO3FCQUNwQjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCOzs0REFDWSxvQkFBb0I7MkhBQXBCLG9CQUFvQixrQkFYdEI7Z0JBQ1AsWUFBWTtnQkFDWixXQUFXO2dCQUNYLGlCQUFpQjtnQkFDakIsY0FBYztnQkFDZCxlQUFlO2dCQUNmLG1CQUFtQjthQUNwQjsrQkEzREg7Q0FnRUMsQUFiRCxJQWFDO1NBRFksb0JBQW9CO3dGQUFwQixvQkFBb0IsbUJBMUIvQiwwQkFBMEI7UUFDMUIscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLHlCQUF5QixhQUt2QixZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQixhQXJCckIsMEJBQTBCO1FBQzFCLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQix5QkFBeUI7a0RBZWQsb0JBQW9CO2NBWmhDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxlQUFlO29CQUNmLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtTZWxlY3RDdXN0b21UcmlnZ2VyRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtY3VzdG9tLXRyaWdnZXIvc2VsZWN0LWN1c3RvbS10cmlnZ2VyLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3REaXNhYmxlZEV4YW1wbGV9IGZyb20gJy4vc2VsZWN0LWRpc2FibGVkL3NlbGVjdC1kaXNhYmxlZC1leGFtcGxlJztcbmltcG9ydCB7XG4gIFNlbGVjdEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZVxufSBmcm9tICcuL3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyL3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RGb3JtRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtZm9ybS9zZWxlY3QtZm9ybS1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0SGludEVycm9yRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3QtaGludC1lcnJvci9zZWxlY3QtaGludC1lcnJvci1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0TXVsdGlwbGVFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1tdWx0aXBsZS9zZWxlY3QtbXVsdGlwbGUtZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdE5vUmlwcGxlRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3Qtbm8tcmlwcGxlL3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdE9wdGdyb3VwRXhhbXBsZX0gZnJvbSAnLi9zZWxlY3Qtb3B0Z3JvdXAvc2VsZWN0LW9wdGdyb3VwLWV4YW1wbGUnO1xuaW1wb3J0IHtTZWxlY3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2VsZWN0LW92ZXJ2aWV3L3NlbGVjdC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0UGFuZWxDbGFzc0V4YW1wbGV9IGZyb20gJy4vc2VsZWN0LXBhbmVsLWNsYXNzL3NlbGVjdC1wYW5lbC1jbGFzcy1leGFtcGxlJztcbmltcG9ydCB7U2VsZWN0UmVzZXRFeGFtcGxlfSBmcm9tICcuL3NlbGVjdC1yZXNldC9zZWxlY3QtcmVzZXQtZXhhbXBsZSc7XG5pbXBvcnQge1NlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGV9IGZyb20gJy4vc2VsZWN0LXZhbHVlLWJpbmRpbmcvc2VsZWN0LXZhbHVlLWJpbmRpbmctZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIFNlbGVjdEN1c3RvbVRyaWdnZXJFeGFtcGxlLFxuICBTZWxlY3REaXNhYmxlZEV4YW1wbGUsXG4gIFNlbGVjdEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSxcbiAgU2VsZWN0Rm9ybUV4YW1wbGUsXG4gIFNlbGVjdEhpbnRFcnJvckV4YW1wbGUsXG4gIFNlbGVjdE11bHRpcGxlRXhhbXBsZSxcbiAgU2VsZWN0Tm9SaXBwbGVFeGFtcGxlLFxuICBTZWxlY3RPcHRncm91cEV4YW1wbGUsXG4gIFNlbGVjdE92ZXJ2aWV3RXhhbXBsZSxcbiAgU2VsZWN0UGFuZWxDbGFzc0V4YW1wbGUsXG4gIFNlbGVjdFJlc2V0RXhhbXBsZSxcbiAgU2VsZWN0VmFsdWVCaW5kaW5nRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTZWxlY3RDdXN0b21UcmlnZ2VyRXhhbXBsZSxcbiAgU2VsZWN0RGlzYWJsZWRFeGFtcGxlLFxuICBTZWxlY3RFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUsXG4gIFNlbGVjdEZvcm1FeGFtcGxlLFxuICBTZWxlY3RIaW50RXJyb3JFeGFtcGxlLFxuICBTZWxlY3RNdWx0aXBsZUV4YW1wbGUsXG4gIFNlbGVjdE5vUmlwcGxlRXhhbXBsZSxcbiAgU2VsZWN0T3B0Z3JvdXBFeGFtcGxlLFxuICBTZWxlY3RPdmVydmlld0V4YW1wbGUsXG4gIFNlbGVjdFBhbmVsQ2xhc3NFeGFtcGxlLFxuICBTZWxlY3RSZXNldEV4YW1wbGUsXG4gIFNlbGVjdFZhbHVlQmluZGluZ0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19