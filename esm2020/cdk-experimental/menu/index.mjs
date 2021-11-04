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
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkMenuExamplesModule, imports: [[CdkMenuModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDekcsT0FBTyxFQUFDLG9DQUFvQyxFQUFDLE1BQU0sK0VBQStFLENBQUM7QUFDbkksT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7O0FBRWxGLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0NBQW9DLEdBQ3JDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQ0FBb0M7Q0FDckMsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7O2tIQUFyQixxQkFBcUI7bUhBQXJCLHFCQUFxQixpQkFaaEMsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9DQUFvQyxhQUkxQixhQUFhLGFBUnZCLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQ0FBb0M7bUhBUXpCLHFCQUFxQixZQUp2QixDQUFDLGFBQWEsQ0FBQzsyRkFJYixxQkFBcUI7a0JBTGpDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO29CQUN4QixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvbWVudSc7XG5pbXBvcnQge0Nka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVNZW51YmFyRXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVJbmxpbmVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVDb250ZXh0RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1jb250ZXh0L2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUsXG4gIENka01lbnVNZW51YmFyRXhhbXBsZSxcbiAgQ2RrTWVudUlubGluZUV4YW1wbGUsXG4gIENka01lbnVDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUsXG4gIENka01lbnVNZW51YmFyRXhhbXBsZSxcbiAgQ2RrTWVudUlubGluZUV4YW1wbGUsXG4gIENka01lbnVDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka01lbnVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=