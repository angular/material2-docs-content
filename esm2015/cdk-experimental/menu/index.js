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
CdkMenuExamplesModule.ɵfac = function CdkMenuExamplesModule_Factory(t) { return new (t || CdkMenuExamplesModule)(); };
CdkMenuExamplesModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CdkMenuExamplesModule });
CdkMenuExamplesModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CdkMenuModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CdkMenuExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [CdkMenuModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkMenuExamplesModule, { declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUNMLDRCQUE0QixFQUM3QixNQUFNLDZEQUE2RCxDQUFDO0FBQ3JFLE9BQU8sRUFDTCxvQ0FBb0MsRUFDckMsTUFBTSwrRUFBK0UsQ0FBQztBQUN2RixPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQzs7QUFFbEYsT0FBTyxFQUNMLDRCQUE0QixFQUM1QixxQkFBcUIsRUFDckIsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixvQ0FBb0MsR0FDckMsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG9DQUFvQztDQUNyQyxDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7MEZBQXJCLHFCQUFxQjt1RUFBckIscUJBQXFCOzJFQUp2QixDQUFDLGFBQWEsQ0FBQzt1RkFJYixxQkFBcUI7Y0FMakMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsQ0FBQztnQkFDeEIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2FBQ2xCOzt3RkFDWSxxQkFBcUIsbUJBWmhDLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQ0FBb0MsYUFJMUIsYUFBYSxhQVJ2Qiw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvbWVudSc7XG5pbXBvcnQge1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlXG59IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZVxufSBmcm9tICcuL2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLXN0YXRlZnVsLW1lbnUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVNZW51YmFyRXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1tZW51YmFyL2Nkay1tZW51LW1lbnViYXItZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVJbmxpbmVFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWlubGluZS9jZGstbWVudS1pbmxpbmUtZXhhbXBsZSc7XG5pbXBvcnQge0Nka01lbnVDb250ZXh0RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1jb250ZXh0L2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUsXG4gIENka01lbnVNZW51YmFyRXhhbXBsZSxcbiAgQ2RrTWVudUlubGluZUV4YW1wbGUsXG4gIENka01lbnVDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUsXG4gIENka01lbnVNZW51YmFyRXhhbXBsZSxcbiAgQ2RrTWVudUlubGluZUV4YW1wbGUsXG4gIENka01lbnVDb250ZXh0RXhhbXBsZSxcbiAgQ2RrTWVudVN0YW5kYWxvbmVTdGF0ZWZ1bE1lbnVFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Nka01lbnVNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=