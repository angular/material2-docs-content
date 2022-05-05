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
CdkMenuExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkMenuExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CdkMenuExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkMenuExamplesModule, declarations: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample], imports: [CdkMenuModule, CommonModule], exports: [CdkMenuStandaloneMenuExample,
        CdkMenuMenubarExample,
        CdkMenuInlineExample,
        CdkMenuContextExample,
        CdkMenuStandaloneStatefulMenuExample] });
CdkMenuExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkMenuExamplesModule, imports: [CdkMenuModule, CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkMenuExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CdkMenuModule, CommonModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSw2REFBNkQsQ0FBQztBQUN6RyxPQUFPLEVBQUMsb0NBQW9DLEVBQUMsTUFBTSwrRUFBK0UsQ0FBQztBQUNuSSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7O0FBRTdDLE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIscUJBQXFCLEVBQ3JCLG9CQUFvQixFQUNwQixxQkFBcUIsRUFDckIsb0NBQW9DLEdBQ3JDLENBQUM7QUFFRixNQUFNLFFBQVEsR0FBRztJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixvQ0FBb0M7Q0FDckMsQ0FBQztBQU9GLE1BQU0sT0FBTyxxQkFBcUI7OzBIQUFyQixxQkFBcUI7MkhBQXJCLHFCQUFxQixpQkFaaEMsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9DQUFvQyxhQUkxQixhQUFhLEVBQUUsWUFBWSxhQVJyQyw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixxQkFBcUI7UUFDckIsb0NBQW9DOzJIQVF6QixxQkFBcUIsWUFKdEIsYUFBYSxFQUFFLFlBQVk7bUdBSTFCLHFCQUFxQjtrQkFMakMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9tZW51JztcbmltcG9ydCB7Q2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudU1lbnViYXJFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LW1lbnViYXIvY2RrLW1lbnUtbWVudWJhci1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUlubGluZUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUNvbnRleHRFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQge1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlLFxuICBDZGtNZW51TWVudWJhckV4YW1wbGUsXG4gIENka01lbnVJbmxpbmVFeGFtcGxlLFxuICBDZGtNZW51Q29udGV4dEV4YW1wbGUsXG4gIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlLFxuICBDZGtNZW51TWVudWJhckV4YW1wbGUsXG4gIENka01lbnVJbmxpbmVFeGFtcGxlLFxuICBDZGtNZW51Q29udGV4dEV4YW1wbGUsXG4gIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtNZW51TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=