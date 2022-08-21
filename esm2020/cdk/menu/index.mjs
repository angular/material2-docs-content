import { NgModule } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk/menu';
import { CdkMenuStandaloneMenuExample } from './cdk-menu-standalone-menu/cdk-menu-standalone-menu-example';
import { CdkMenuStandaloneStatefulMenuExample } from './cdk-menu-standalone-stateful-menu/cdk-menu-standalone-stateful-menu-example';
import { CdkMenuMenubarExample } from './cdk-menu-menubar/cdk-menu-menubar-example';
import { CdkMenuInlineExample } from './cdk-menu-inline/cdk-menu-inline-example';
import { CdkMenuContextExample } from './cdk-menu-context/cdk-menu-context-example';
import { CdkMenuNestedContextExample } from './cdk-menu-nested-context/cdk-menu-nested-context-example';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export { CdkMenuStandaloneMenuExample, CdkMenuMenubarExample, CdkMenuInlineExample, CdkMenuContextExample, CdkMenuNestedContextExample, CdkMenuStandaloneStatefulMenuExample, };
const EXAMPLES = [
    CdkMenuStandaloneMenuExample,
    CdkMenuMenubarExample,
    CdkMenuInlineExample,
    CdkMenuContextExample,
    CdkMenuNestedContextExample,
    CdkMenuStandaloneStatefulMenuExample,
];
export class CdkMenuExamplesModule {
}
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuNestedContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule, CommonModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuNestedContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuExamplesModule, imports: [CdkMenuModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUMsb0NBQW9DLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSwyREFBMkQsQ0FBQztBQUN0RyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsMkJBQTJCLEVBQzNCLG9DQUFvQyxHQUNyQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLG9DQUFvQztDQUNyQyxDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7dUhBQXJCLHFCQUFxQjt3SEFBckIscUJBQXFCLGlCQWJoQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9DQUFvQyxhQUkxQixhQUFhLEVBQUUsWUFBWSxhQVRyQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLG9DQUFvQzt3SEFRekIscUJBQXFCLFlBSnRCLGFBQWEsRUFBRSxZQUFZO2dHQUkxQixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQztvQkFDdEMsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvbWVudSc7XG5pbXBvcnQge0Nka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVNZW51YmFyRXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVJbmxpbmVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVDb250ZXh0RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1jb250ZXh0L2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1uZXN0ZWQtY29udGV4dC9jZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQge1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlLFxuICBDZGtNZW51TWVudWJhckV4YW1wbGUsXG4gIENka01lbnVJbmxpbmVFeGFtcGxlLFxuICBDZGtNZW51Q29udGV4dEV4YW1wbGUsXG4gIENka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUsXG4gIENka01lbnVNZW51YmFyRXhhbXBsZSxcbiAgQ2RrTWVudUlubGluZUV4YW1wbGUsXG4gIENka01lbnVDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudU5lc3RlZENvbnRleHRFeGFtcGxlLFxuICBDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2RrTWVudU1vZHVsZSwgQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVFeGFtcGxlc01vZHVsZSB7fVxuIl19