import { NgModule } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkMenuStandaloneMenuExample } from './cdk-menu-standalone-menu/cdk-menu-standalone-menu-example';
import { CdkMenuStandaloneStatefulMenuExample } from './cdk-menu-standalone-stateful-menu/cdk-menu-standalone-stateful-menu-example';
import { CdkMenuMenubarExample } from './cdk-menu-menubar/cdk-menu-menubar-example';
import { CdkMenuInlineExample } from './cdk-menu-inline/cdk-menu-inline-example';
import { CdkMenuContextExample } from './cdk-menu-context/cdk-menu-context-example';
import { CommonModule } from '@angular/common';
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
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule, CommonModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: CdkMenuExamplesModule, imports: [[CdkMenuModule, CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.14", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUMsb0NBQW9DLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0NBQW9DLEdBQ3JDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQ0FBb0M7Q0FDckMsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7OzBIQUFyQixxQkFBcUI7MkhBQXJCLHFCQUFxQixpQkFaaEMsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9DQUFvQyxhQUkxQixhQUFhLEVBQUUsWUFBWSxhQVJyQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0NBQW9DOzJIQVF6QixxQkFBcUIsWUFKdkIsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO21HQUkzQixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDdEMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvbWVudSc7XG5pbXBvcnQge0Nka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVNZW51YmFyRXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVJbmxpbmVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVDb250ZXh0RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1jb250ZXh0L2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuZXhwb3J0IHtcbiAgQ2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZSxcbiAgQ2RrTWVudU1lbnViYXJFeGFtcGxlLFxuICBDZGtNZW51SW5saW5lRXhhbXBsZSxcbiAgQ2RrTWVudUNvbnRleHRFeGFtcGxlLFxuICBDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgQ2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZSxcbiAgQ2RrTWVudU1lbnViYXJFeGFtcGxlLFxuICBDZGtNZW51SW5saW5lRXhhbXBsZSxcbiAgQ2RrTWVudUNvbnRleHRFeGFtcGxlLFxuICBDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrTWVudU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVFeGFtcGxlc01vZHVsZSB7fVxuIl19