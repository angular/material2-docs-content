/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/slide-toggle/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/** @type {?} */
const EXAMPLES = [
    SlideToggleConfigurableExample,
    SlideToggleFormsExample,
    SlideToggleOverviewExample,
];
let SlideToggleExamplesModule = /** @class */ (() => {
    class SlideToggleExamplesModule {
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
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ SlideToggleExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SlideToggleExamplesModule });
    /** @nocollapse */ SlideToggleExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SlideToggleExamplesModule_Factory(t) { return new (t || SlideToggleExamplesModule)(); }, imports: [[
                FormsModule,
                MatButtonModule,
                MatCardModule,
                MatCheckboxModule,
                MatRadioModule,
                MatSlideToggleModule,
                ReactiveFormsModule,
            ]] });
    return SlideToggleExamplesModule;
})();
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
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsOEJBQThCLEVBQy9CLE1BQU0sK0RBQStELENBQUM7QUFDdkUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDeEYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7O0FBRWpHLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsdUJBQXVCLEVBQ3ZCLDBCQUEwQixHQUMzQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsMEJBQTBCO0NBQzNCO0FBRUQ7SUFBQSxNQWNhLHlCQUF5Qjs7O2dCQWRyQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVc7d0JBQ1gsZUFBZTt3QkFDZixhQUFhO3dCQUNiLGlCQUFpQjt3QkFDakIsY0FBYzt3QkFDZCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjtxQkFDcEI7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7O29GQUNZLHlCQUF5Qjt3SkFBekIseUJBQXlCLGtCQWIzQjtnQkFDUCxXQUFXO2dCQUNYLGVBQWU7Z0JBQ2YsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixtQkFBbUI7YUFDcEI7b0NBbENIO0tBd0NDO1NBRFkseUJBQXlCO3dGQUF6Qix5QkFBeUIsbUJBbkJwQyw4QkFBOEI7UUFDOUIsdUJBQXVCO1FBQ3ZCLDBCQUEwQixhQUt4QixXQUFXO1FBQ1gsZUFBZTtRQUNmLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixtQkFBbUIsYUFickIsOEJBQThCO1FBQzlCLHVCQUF1QjtRQUN2QiwwQkFBMEI7a0RBaUJmLHlCQUF5QjtjQWRyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixhQUFhO29CQUNiLGlCQUFpQjtvQkFDakIsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTbGlkZVRvZ2dsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlJztcbmltcG9ydCB7XG4gIFNsaWRlVG9nZ2xlQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3NsaWRlLXRvZ2dsZS1jb25maWd1cmFibGUvc2xpZGUtdG9nZ2xlLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlJztcbmltcG9ydCB7U2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2xpZGUtdG9nZ2xlLW92ZXJ2aWV3L3NsaWRlLXRvZ2dsZS1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2xpZGVUb2dnbGVDb25maWd1cmFibGVFeGFtcGxlLFxuICBTbGlkZVRvZ2dsZUZvcm1zRXhhbXBsZSxcbiAgU2xpZGVUb2dnbGVPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENhcmRNb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlVG9nZ2xlRXhhbXBsZXNNb2R1bGUge1xufVxuIl19