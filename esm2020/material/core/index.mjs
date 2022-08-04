import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatLegacyCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatLegacyInputModule } from '@angular/material/legacy-input';
import { ElevationOverviewExample } from './elevation-overview/elevation-overview-example';
import { RippleOverviewExample } from './ripple-overview/ripple-overview-example';
import * as i0 from "@angular/core";
export { ElevationOverviewExample, RippleOverviewExample };
const EXAMPLES = [ElevationOverviewExample, RippleOverviewExample];
export class CoreExamplesModule {
}
CoreExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CoreExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CoreExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.0.1", ngImport: i0, type: CoreExamplesModule, declarations: [ElevationOverviewExample, RippleOverviewExample], imports: [MatButtonModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatRippleModule,
        FormsModule], exports: [ElevationOverviewExample, RippleOverviewExample] });
CoreExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CoreExamplesModule, imports: [MatButtonModule,
        MatLegacyCheckboxModule,
        MatLegacyInputModule,
        MatRippleModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: CoreExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatButtonModule,
                        MatLegacyCheckboxModule,
                        MatLegacyInputModule,
                        MatRippleModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0saURBQWlELENBQUM7QUFDekYsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7O0FBRWhGLE9BQU8sRUFBQyx3QkFBd0IsRUFBRSxxQkFBcUIsRUFBQyxDQUFDO0FBRXpELE1BQU0sUUFBUSxHQUFHLENBQUMsd0JBQXdCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztBQWFuRSxNQUFNLE9BQU8sa0JBQWtCOzsrR0FBbEIsa0JBQWtCO2dIQUFsQixrQkFBa0IsaUJBYmIsd0JBQXdCLEVBQUUscUJBQXFCLGFBSTdELGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixXQUFXLGFBUkcsd0JBQXdCLEVBQUUscUJBQXFCO2dIQWFwRCxrQkFBa0IsWUFUM0IsZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixvQkFBb0I7UUFDcEIsZUFBZTtRQUNmLFdBQVc7MkZBS0Ysa0JBQWtCO2tCQVg5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLHVCQUF1Qjt3QkFDdkIsb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdExlZ2FjeUNoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9sZWdhY3ktY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGVnYWN5LWlucHV0JztcbmltcG9ydCB7RWxldmF0aW9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1JpcHBsZU92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yaXBwbGUtb3ZlcnZpZXcvcmlwcGxlLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge0VsZXZhdGlvbk92ZXJ2aWV3RXhhbXBsZSwgUmlwcGxlT3ZlcnZpZXdFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbRWxldmF0aW9uT3ZlcnZpZXdFeGFtcGxlLCBSaXBwbGVPdmVydmlld0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdExlZ2FjeUNoZWNrYm94TW9kdWxlLFxuICAgIE1hdExlZ2FjeUlucHV0TW9kdWxlLFxuICAgIE1hdFJpcHBsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENvcmVFeGFtcGxlc01vZHVsZSB7fVxuIl19