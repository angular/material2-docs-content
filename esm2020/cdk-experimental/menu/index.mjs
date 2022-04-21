import { NgModule } from '@angular/core';
import { CdkMenuModule } from '@angular/cdk-experimental/menu';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0QsT0FBTyxFQUFDLDRCQUE0QixFQUFDLE1BQU0sNkRBQTZELENBQUM7QUFDekcsT0FBTyxFQUFDLG9DQUFvQyxFQUFDLE1BQU0sK0VBQStFLENBQUM7QUFDbkksT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDbEYsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDOztBQUU3QyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzVCLHFCQUFxQixFQUNyQixvQkFBb0IsRUFDcEIscUJBQXFCLEVBQ3JCLG9DQUFvQyxHQUNyQyxDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsb0NBQW9DO0NBQ3JDLENBQUM7QUFPRixNQUFNLE9BQU8scUJBQXFCOzswSEFBckIscUJBQXFCOzJIQUFyQixxQkFBcUIsaUJBWmhDLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQixvQ0FBb0MsYUFJMUIsYUFBYSxFQUFFLFlBQVksYUFSckMsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLG9DQUFvQzsySEFRekIscUJBQXFCLFlBSnZCLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQzttR0FJM0IscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrTWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrLWV4cGVyaW1lbnRhbC9tZW51JztcbmltcG9ydCB7Q2RrTWVudVN0YW5kYWxvbmVNZW51RXhhbXBsZX0gZnJvbSAnLi9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtNZW51U3RhbmRhbG9uZVN0YXRlZnVsTWVudUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtc3RhbmRhbG9uZS1zdGF0ZWZ1bC1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtc3RhdGVmdWwtbWVudS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudU1lbnViYXJFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LW1lbnViYXIvY2RrLW1lbnUtbWVudWJhci1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUlubGluZUV4YW1wbGV9IGZyb20gJy4vY2RrLW1lbnUtaW5saW5lL2Nkay1tZW51LWlubGluZS1leGFtcGxlJztcbmltcG9ydCB7Q2RrTWVudUNvbnRleHRFeGFtcGxlfSBmcm9tICcuL2Nkay1tZW51LWNvbnRleHQvY2RrLW1lbnUtY29udGV4dC1leGFtcGxlJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQge1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlLFxuICBDZGtNZW51TWVudWJhckV4YW1wbGUsXG4gIENka01lbnVJbmxpbmVFeGFtcGxlLFxuICBDZGtNZW51Q29udGV4dEV4YW1wbGUsXG4gIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtNZW51U3RhbmRhbG9uZU1lbnVFeGFtcGxlLFxuICBDZGtNZW51TWVudWJhckV4YW1wbGUsXG4gIENka01lbnVJbmxpbmVFeGFtcGxlLFxuICBDZGtNZW51Q29udGV4dEV4YW1wbGUsXG4gIENka01lbnVTdGFuZGFsb25lU3RhdGVmdWxNZW51RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDZGtNZW51TW9kdWxlLCBDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=