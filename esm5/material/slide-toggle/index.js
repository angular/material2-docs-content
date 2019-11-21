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
import * as i0 from "@angular/core";
export { SlideToggleConfigurableExample, SlideToggleFormsExample, SlideToggleOverviewExample, };
var EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
];
var SlideToggleExamplesModule = /** @class */ (function () {
    function SlideToggleExamplesModule() {
    }
    SlideToggleExamplesModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    SlideToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
    SlideToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatSlideToggleModule,
                ReactiveFormsModule,
            ]] });
    return SlideToggleExamplesModule;
}());
export { SlideToggleExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SlideToggleExamplesModule, { declarations: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample], imports: [FormsModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSlideToggleModule,
        ReactiveFormsModule], exports: [SlideToggleConfigurableExample,
        SlideToggleFormsExample,
        SlideToggleOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SlideToggleExamplesModule, [{
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
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDOztBQUVqRyxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLHVCQUF1QixFQUN2QiwwQkFBMEIsR0FDM0IsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QiwwQkFBMEI7Q0FDM0IsQ0FBQztBQUVGO0lBQUE7S0FjQzs7Z0JBZEEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsYUFBYTt3QkFDYixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2Qsb0JBQW9CO3dCQUNwQixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEI7O2lFQUNZLHlCQUF5QjtxSUFBekIseUJBQXlCLGtCQVozQjtnQkFDUCxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixtQkFBbUI7YUFDcEI7b0NBbENIO0NBdUNDLEFBZEQsSUFjQztTQURZLHlCQUF5Qjt3RkFBekIseUJBQXlCLG1CQWxCcEMsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2QiwwQkFBMEIsYUFLeEIsV0FBVztRQUNYLGVBQWU7UUFDZixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxvQkFBb0I7UUFDcEIsbUJBQW1CLGFBYnJCLDhCQUE4QjtRQUM5Qix1QkFBdUI7UUFDdkIsMEJBQTBCO2tEQWdCZix5QkFBeUI7Y0FickMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLGVBQWU7b0JBQ2YsYUFBYTtvQkFDYixpQkFBaUI7b0JBQ2pCLGNBQWM7b0JBQ2Qsb0JBQW9CO29CQUNwQixtQkFBbUI7aUJBQ3BCO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7XG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3L3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19