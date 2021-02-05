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
import { SidenavHarnessExample } from './sidenav-harness/sidenav-harness-example';
import * as i0 from "@angular/core";
export { SidenavAutosizeExample, SidenavBackdropExample, SidenavDisableCloseExample, SidenavDrawerOverviewExample, SidenavHarnessExample, SidenavFixedExample, SidenavModeExample, SidenavOpenCloseExample, SidenavOverviewExample, SidenavPositionExample, SidenavResponsiveExample, };
const EXAMPLES = [
    SidenavAutosizeExample,
    SidenavBackdropExample,
    SidenavDisableCloseExample,
    SidenavDrawerOverviewExample,
    SidenavHarnessExample,
    SidenavFixedExample,
    SidenavModeExample,
    SidenavOpenCloseExample,
    SidenavOverviewExample,
    SidenavPositionExample,
    SidenavResponsiveExample,
];
export class SidenavExamplesModule {
}
SidenavExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SidenavExamplesModule });
SidenavExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SidenavExamplesModule_Factory(t) { return new (t || SidenavExamplesModule)(); }, imports: [[
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SidenavExamplesModule, { declarations: [SidenavAutosizeExample,
        SidenavBackdropExample,
        SidenavDisableCloseExample,
        SidenavDrawerOverviewExample,
        SidenavHarnessExample,
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
        SidenavHarnessExample,
        SidenavFixedExample,
        SidenavModeExample,
        SidenavOpenCloseExample,
        SidenavOverviewExample,
        SidenavPositionExample,
        SidenavResponsiveExample] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SidenavExamplesModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2pHLE9BQU8sRUFDTCw0QkFBNEIsRUFDN0IsTUFBTSwyREFBMkQsQ0FBQztBQUNuRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQUN2RSxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN4RixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNuRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxpREFBaUQsQ0FBQztBQUN6RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFaEYsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixzQkFBc0IsRUFDdEIsMEJBQTBCLEVBQzFCLDRCQUE0QixFQUM1QixxQkFBcUIsRUFDckIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsc0JBQXNCLEVBQ3RCLHNCQUFzQixFQUN0Qix3QkFBd0IsR0FDekIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2Ysc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLHdCQUF3QjtDQUN6QixDQUFDO0FBb0JGLE1BQU0sT0FBTyxxQkFBcUI7O3lEQUFyQixxQkFBcUI7eUhBQXJCLHFCQUFxQixrQkFqQnZCO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLG1CQUFtQjtTQUNwQjt3RkFLVSxxQkFBcUIsbUJBL0JoQyxzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsd0JBQXdCLGFBS3RCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUIsYUF6QnJCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsMEJBQTBCO1FBQzFCLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLHNCQUFzQjtRQUN0Qix3QkFBd0I7dUZBcUJiLHFCQUFxQjtjQWxCakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZUFBZTtvQkFDZixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixjQUFjO29CQUNkLGdCQUFnQjtvQkFDaEIsZUFBZTtvQkFDZixnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdFNpZGVuYXZNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NpZGVuYXYnO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7U2lkZW5hdkF1dG9zaXplRXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZCYWNrZHJvcEV4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1iYWNrZHJvcC9zaWRlbmF2LWJhY2tkcm9wLWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LWRpc2FibGUtY2xvc2Uvc2lkZW5hdi1kaXNhYmxlLWNsb3NlLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgU2lkZW5hdkRyYXdlck92ZXJ2aWV3RXhhbXBsZVxufSBmcm9tICcuL3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3L3NpZGVuYXYtZHJhd2VyLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2Rml4ZWRFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtZml4ZWQvc2lkZW5hdi1maXhlZC1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdk1vZGVFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtbW9kZS9zaWRlbmF2LW1vZGUtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZPcGVuQ2xvc2VFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtb3Blbi1jbG9zZS9zaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtTaWRlbmF2UG9zaXRpb25FeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtcG9zaXRpb24vc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlJztcbmltcG9ydCB7U2lkZW5hdlJlc3BvbnNpdmVFeGFtcGxlfSBmcm9tICcuL3NpZGVuYXYtcmVzcG9uc2l2ZS9zaWRlbmF2LXJlc3BvbnNpdmUtZXhhbXBsZSc7XG5pbXBvcnQge1NpZGVuYXZIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9zaWRlbmF2LWhhcm5lc3Mvc2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBTaWRlbmF2QXV0b3NpemVFeGFtcGxlLFxuICBTaWRlbmF2QmFja2Ryb3BFeGFtcGxlLFxuICBTaWRlbmF2RGlzYWJsZUNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdkRyYXdlck92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdkhhcm5lc3NFeGFtcGxlLFxuICBTaWRlbmF2Rml4ZWRFeGFtcGxlLFxuICBTaWRlbmF2TW9kZUV4YW1wbGUsXG4gIFNpZGVuYXZPcGVuQ2xvc2VFeGFtcGxlLFxuICBTaWRlbmF2T3ZlcnZpZXdFeGFtcGxlLFxuICBTaWRlbmF2UG9zaXRpb25FeGFtcGxlLFxuICBTaWRlbmF2UmVzcG9uc2l2ZUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgU2lkZW5hdkF1dG9zaXplRXhhbXBsZSxcbiAgU2lkZW5hdkJhY2tkcm9wRXhhbXBsZSxcbiAgU2lkZW5hdkRpc2FibGVDbG9zZUV4YW1wbGUsXG4gIFNpZGVuYXZEcmF3ZXJPdmVydmlld0V4YW1wbGUsXG4gIFNpZGVuYXZIYXJuZXNzRXhhbXBsZSxcbiAgU2lkZW5hdkZpeGVkRXhhbXBsZSxcbiAgU2lkZW5hdk1vZGVFeGFtcGxlLFxuICBTaWRlbmF2T3BlbkNsb3NlRXhhbXBsZSxcbiAgU2lkZW5hdk92ZXJ2aWV3RXhhbXBsZSxcbiAgU2lkZW5hdlBvc2l0aW9uRXhhbXBsZSxcbiAgU2lkZW5hdlJlc3BvbnNpdmVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNpZGVuYXZNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFRvb2xiYXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=