/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/sidenav/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavAutosizeExample } from './sidenav-autosize/sidenav-autosize-example';
import { SidenavBackdropExample } from './sidenav-backdrop/sidenav-backdrop-example';
import { SidenavDisableCloseExample } from './sidenav-disable-close/sidenav-disable-close-example';
import { SidenavDrawerOverviewExample } from './sidenav-drawer-overview/sidenav-drawer-overview-example';
import { SidenavFixedExample } from './sidenav-fixed/sidenav-fixed-example';
import { SidenavModeExample } from './sidenav-mode/sidenav-mode-example';
import { SidenavOpenCloseExample } from './sidenav-open-close/sidenav-open-close-example';
import { SidenavOverviewExample } from './sidenav-overview/sidenav-overview-example';
import { SidenavPositionExample } from './sidenav-position/sidenav-position-example';
import { SidenavResponsiveExample } from './sidenav-responsive/sidenav-responsive-example';
import * as i0 from "@angular/core";
export { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample, };
/** @type {?} */
const EXAMPLES = [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
];
let SidenavExamplesModule = /** @class */ (() => {
    class SidenavExamplesModule {
    }
    SidenavExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        MatButtonModule,
                        MatCheckboxModule,
                        MatIconModule,
                        MatListModule,
                        MatRadioModule,
                        MatSidenavModule,
                        MatSelectModule,
                        MatToolbarModule,
                        ReactiveFormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ SidenavExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SidenavExamplesModule });
    /** @nocollapse */ SidenavExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SidenavExamplesModule_Factory(t) { return new (t || SidenavExamplesModule)(); }, imports: [[
                CommonModule,
                FormsModule,
                MatButtonModule,
                MatCheckboxModule,
                MatIconModule,
                MatListModule,
                MatRadioModule,
                MatSidenavModule,
                MatSelectModule,
                MatToolbarModule,
                ReactiveFormsModule,
            ]] });
    return SidenavExamplesModule;
})();
export { SidenavExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SidenavExamplesModule, { declarations: [SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample], imports: [CommonModule,
        FormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule,
        MatRadioModule,
        MatSidenavModule,
        MatSelectModule,
        MatToolbarModule,
        ReactiveFormsModule], exports: [SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatListModule,
                    MatRadioModule,
                    MatSidenavModule,
                    MatSelectModule,
                    MatToolbarModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDakcsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDJEQUEyRCxDQUFDO0FBQ25FLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDOztBQUV6RixPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0QiwwQkFBMEIsRUFDMUIsNEJBQTRCLEVBQzVCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsd0JBQXdCLEdBQ3pCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsd0JBQXdCO0NBQ3pCO0FBRUQ7SUFBQSxNQWtCYSxxQkFBcUI7OztnQkFsQmpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLGVBQWU7d0JBQ2YsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxnQkFBZ0I7d0JBQ2hCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixtQkFBbUI7cUJBQ3BCO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOztnRkFDWSxxQkFBcUI7Z0pBQXJCLHFCQUFxQixrQkFqQnZCO2dCQUNQLFlBQVk7Z0JBQ1osV0FBVztnQkFDWCxlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsYUFBYTtnQkFDYixhQUFhO2dCQUNiLGNBQWM7Z0JBQ2QsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2FBQ3BCO2dDQS9ESDtLQXFFQztTQURZLHFCQUFxQjt3RkFBckIscUJBQXFCLG1CQTlCaEMsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFDMUIsNEJBQTRCO1FBQzVCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsd0JBQXdCLGFBS3RCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUIsYUF4QnJCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLHdCQUF3QjtrREFxQmIscUJBQXFCO2NBbEJqQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixhQUFhO29CQUNiLGNBQWM7b0JBQ2QsZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLGdCQUFnQjtvQkFDaEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuaW1wb3J0IHtTaWRlbmF2QXV0b3NpemVFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtYXV0b3NpemUvc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdkJhY2tkcm9wRXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LWJhY2tkcm9wL3NpZGVuYXYtYmFja2Ryb3AtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZEaXNhYmxlQ2xvc2VFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtZGlzYWJsZS1jbG9zZS9zaWRlbmF2LWRpc2FibGUtY2xvc2UtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBTaWRlbmF2RHJhd2VyT3ZlcnZpZXdFeGFtcGxlXG59IGZyb20gJy4vc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXcvc2lkZW5hdi1kcmF3ZXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZGaXhlZEV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1maXhlZC9zaWRlbmF2LWZpeGVkLWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2TW9kZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdk9wZW5DbG9zZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZQb3NpdGlvbkV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1yZXNwb25zaXZlL3NpZGVuYXYtcmVzcG9uc2l2ZS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgU2lkZW5hdkF1dG9zaXplRXhhbXBsZSxcbiAgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSxcbiAgU2lkZW5hdkRpc2FibGVDbG9zZUV4YW1wbGUsXG4gIFNpZGVuYXZEcmF3ZXJPdmVydmlld0V4YW1wbGUsXG4gIFNpZGVuYXZGaXhlZEV4YW1wbGUsXG4gIFNpZGVuYXZNb2RlRXhhbXBsZSxcbiAgU2lkZW5hdk9wZW5DbG9zZUV4YW1wbGUsXG4gIFNpZGVuYXZPdmVydmlld0V4YW1wbGUsXG4gIFNpZGVuYXZQb3NpdGlvbkV4YW1wbGUsXG4gIFNpZGVuYXZSZXNwb25zaXZlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBTaWRlbmF2QXV0b3NpemVFeGFtcGxlLFxuICBTaWRlbmF2QmFja2Ryb3BFeGFtcGxlLFxuICBTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdkRyYXdlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdkZpeGVkRXhhbXBsZSxcbiAgU2lkZW5hdk1vZGVFeGFtcGxlLFxuICBTaWRlbmF2T3BlbkNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdk92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdlBvc2l0aW9uRXhhbXBsZSxcbiAgU2lkZW5hdlJlc3BvbnNpdmVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=