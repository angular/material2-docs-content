import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldAutofillDirectiveExample } from './text-field-autofill-directive/text-field-autofill-directive-example';
import { TextFieldAutofillMonitorExample } from './text-field-autofill-monitor/text-field-autofill-monitor-example';
import { TextFieldAutosizeTextareaExample } from './text-field-autosize-textarea/text-field-autosize-textarea-example';
import * as i0 from "@angular/core";
export { TextFieldAutofillDirectiveExample, TextFieldAutofillMonitorExample, TextFieldAutosizeTextareaExample, };
var EXAMPLES = [
    TextFieldAutofillDirectiveExample,
    TextFieldAutofillMonitorExample,
    TextFieldAutosizeTextareaExample,
];
var CdkTextFieldExamplesModule = /** @class */ (function () {
    function CdkTextFieldExamplesModule() {
    }
    CdkTextFieldExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTextFieldExamplesModule });
    CdkTextFieldExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTextFieldExamplesModule_Factory(t) { return new (t || CdkTextFieldExamplesModule)(); }, imports: [[
                CommonModule,
                TextFieldModule,
                MatButtonModule,
                MatInputModule,
                MatSelectModule,
            ]] });
    return CdkTextFieldExamplesModule;
}());
export { CdkTextFieldExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTextFieldExamplesModule, { declarations: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample], imports: [CommonModule,
        TextFieldModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule], exports: [TextFieldAutofillDirectiveExample,
        TextFieldAutofillMonitorExample,
        TextFieldAutosizeTextareaExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkTextFieldExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    TextFieldModule,
                    MatButtonModule,
                    MatInputModule,
                    MatSelectModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHVFQUF1RSxDQUFDO0FBQy9FLE9BQU8sRUFDTCwrQkFBK0IsRUFDaEMsTUFBTSxtRUFBbUUsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZ0NBQWdDLEVBQ2pDLE1BQU0scUVBQXFFLENBQUM7O0FBRTdFLE9BQU8sRUFDTCxpQ0FBaUMsRUFDakMsK0JBQStCLEVBQy9CLGdDQUFnQyxHQUNqQyxDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLGdDQUFnQztDQUNqQyxDQUFDO0FBRUY7SUFBQTtLQWFDO2tFQURZLDBCQUEwQjt1SUFBMUIsMEJBQTBCLGtCQVg1QjtnQkFDUCxZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsZUFBZTtnQkFDZixjQUFjO2dCQUNkLGVBQWU7YUFDaEI7cUNBbkNIO0NBeUNDLEFBYkQsSUFhQztTQURZLDBCQUEwQjt3RkFBMUIsMEJBQTBCLG1CQWpCckMsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixnQ0FBZ0MsYUFLOUIsWUFBWTtRQUNaLGVBQWU7UUFDZixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWUsYUFYakIsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixnQ0FBZ0M7a0RBZXJCLDBCQUEwQjtjQVp0QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZUFBZTtvQkFDZixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsZUFBZTtpQkFDaEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGV4dEZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7XG4gIFRleHRGaWVsZEF1dG9maWxsRGlyZWN0aXZlRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlL3RleHQtZmllbGQtYXV0b2ZpbGwtZGlyZWN0aXZlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxNb25pdG9yRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvci90ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3ItZXhhbXBsZSc7XG5pbXBvcnQge1xuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZVxufSBmcm9tICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgVGV4dEZpZWxkQXV0b2ZpbGxEaXJlY3RpdmVFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvZmlsbE1vbml0b3JFeGFtcGxlLFxuICBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUZXh0RmllbGRBdXRvZmlsbERpcmVjdGl2ZUV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9maWxsTW9uaXRvckV4YW1wbGUsXG4gIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBUZXh0RmllbGRNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1RleHRGaWVsZEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==