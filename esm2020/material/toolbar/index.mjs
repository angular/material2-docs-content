import { NgModule } from '@angular/core';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarBasicExample } from './toolbar-basic/toolbar-basic-example';
import { ToolbarMultirowExample } from './toolbar-multirow/toolbar-multirow-example';
import { ToolbarOverviewExample } from './toolbar-overview/toolbar-overview-example';
import { ToolbarHarnessExample } from './toolbar-harness/toolbar-harness-example';
import * as i0 from "@angular/core";
export { ToolbarBasicExample, ToolbarHarnessExample, ToolbarMultirowExample, ToolbarOverviewExample };
const EXAMPLES = [
    ToolbarBasicExample,
    ToolbarHarnessExample,
    ToolbarMultirowExample,
    ToolbarOverviewExample,
];
export class ToolbarExamplesModule {
}
ToolbarExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ToolbarExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ToolbarExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ToolbarExamplesModule, declarations: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample], imports: [MatLegacyButtonModule, MatIconModule, MatToolbarModule], exports: [ToolbarBasicExample,
        ToolbarHarnessExample,
        ToolbarMultirowExample,
        ToolbarOverviewExample] });
ToolbarExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ToolbarExamplesModule, imports: [MatLegacyButtonModule, MatIconModule, MatToolbarModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: ToolbarExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatLegacyButtonModule, MatIconModule, MatToolbarModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90b29sYmFyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQ25GLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMsbUJBQW1CLEVBQUUscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQztBQUVwRyxNQUFNLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtDQUN2QixDQUFDO0FBT0YsTUFBTSxPQUFPLHFCQUFxQjs7dUhBQXJCLHFCQUFxQjt3SEFBckIscUJBQXFCLGlCQVhoQyxtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixzQkFBc0IsYUFJWixxQkFBcUIsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLGFBUGhFLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLHNCQUFzQjt3SEFRWCxxQkFBcUIsWUFKdEIscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjtnR0FJckQscUJBQXFCO2tCQUxqQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDakUsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0VG9vbGJhck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbGJhcic7XG5pbXBvcnQge1Rvb2xiYXJCYXNpY0V4YW1wbGV9IGZyb20gJy4vdG9vbGJhci1iYXNpYy90b29sYmFyLWJhc2ljLWV4YW1wbGUnO1xuaW1wb3J0IHtUb29sYmFyTXVsdGlyb3dFeGFtcGxlfSBmcm9tICcuL3Rvb2xiYXItbXVsdGlyb3cvdG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJztcbmltcG9ydCB7VG9vbGJhck92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1Rvb2xiYXJIYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi90b29sYmFyLWhhcm5lc3MvdG9vbGJhci1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1Rvb2xiYXJCYXNpY0V4YW1wbGUsIFRvb2xiYXJIYXJuZXNzRXhhbXBsZSwgVG9vbGJhck11bHRpcm93RXhhbXBsZSwgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUb29sYmFyQmFzaWNFeGFtcGxlLFxuICBUb29sYmFySGFybmVzc0V4YW1wbGUsXG4gIFRvb2xiYXJNdWx0aXJvd0V4YW1wbGUsXG4gIFRvb2xiYXJPdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0TGVnYWN5QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRUb29sYmFyTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRvb2xiYXJFeGFtcGxlc01vZHVsZSB7fVxuIl19