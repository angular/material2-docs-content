import { NgModule } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk-experimental/menu';
import { CdkMenuStandaloneMenuExample } from './cdk-menu-standalone-menu/cdk-menu-standalone-menu-example';
import { CdkMenuStandaloneStatefulMenuExample } from './cdk-menu-standalone-stateful-menu/cdk-menu-standalone-stateful-menu-example';
import { CdkMenuMenubarExample } from './cdk-menu-menubar/cdk-menu-menubar-example';
import { CdkMenuInlineExample } from './cdk-menu-inline/cdk-menu-inline-example';
import { CdkMenuContextExample } from './cdk-menu-context/cdk-menu-context-example';
import * as i0 from "@angular/core";
export { CdkMenuStandaloneMenuExample, CdkMenuMenubarExample, CdkMenuInlineExample, CdkMenuContextExample, CdkMenuStandaloneStatefulMenuExample, };
const EXAMPLES = [
    CdkMenuStandaloneMenuExample,
    CdkMenuMenubarExample,
    CdkMenuInlineExample,
    CdkMenuContextExample,
    CdkMenuStandaloneStatefulMenuExample,
];
export class CdkMenuExamplesModule {
}
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, imports: [[CdkMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCxvQ0FBb0MsRUFDckMsTUFBTSwrRUFBK0UsQ0FBQztBQUN2RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFbEYsT0FBTyxFQUNMLDRCQUE0QixFQUM1QixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixvQ0FBb0MsR0FDckMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG9DQUFvQztDQUNyQyxDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7MEhBQXJCLHFCQUFxQjsySEFBckIscUJBQXFCLGlCQVpoQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0NBQW9DLGFBSTFCLGFBQWEsYUFSdkIsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9DQUFvQzsySEFRekIscUJBQXFCLFlBSnZCLENBQUMsYUFBYSxDQUFDO21HQUliLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQ3hCLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrTWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9tZW51JztcbmltcG9ydCB7XG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlXG59IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudU1lbnViYXJFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LW1lbnViYXIvY2RrLW1lbnUtbWVudWJhci1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUlubGluZUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUNvbnRleHRFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQ2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZSxcbiAgQ2RrTWVudU1lbnViYXJFeGFtcGxlLFxuICBDZGtNZW51SW5saW5lRXhhbXBsZSxcbiAgQ2RrTWVudUNvbnRleHRFeGFtcGxlLFxuICBDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZSxcbiAgQ2RrTWVudU1lbnViYXJFeGFtcGxlLFxuICBDZGtNZW51SW5saW5lRXhhbXBsZSxcbiAgQ2RrTWVudUNvbnRleHRFeGFtcGxlLFxuICBDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrTWVudU1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51RXhhbXBsZXNNb2R1bGUge31cbiJdfQ==