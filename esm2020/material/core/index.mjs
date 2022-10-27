import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { ElevationOverviewExample } from './elevation-overview/elevation-overview-example';
import { RippleOverviewExample } from './ripple-overview/ripple-overview-example';
import * as i0 from "@angular/core";
export { ElevationOverviewExample, RippleOverviewExample };
const EXAMPLES = [ElevationOverviewExample, RippleOverviewExample];
export class CoreExamplesModule {
}
CoreExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CoreExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
CoreExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CoreExamplesModule, declarations: [ElevationOverviewExample, RippleOverviewExample], imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatRippleModule, FormsModule], exports: [ElevationOverviewExample, RippleOverviewExample] });
CoreExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CoreExamplesModule, imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatRippleModule, FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.0-rc.1", ngImport: i0, type: CoreExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatRippleModule, FormsModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3pGLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDOztBQUVoRixPQUFPLEVBQUMsd0JBQXdCLEVBQUUscUJBQXFCLEVBQUMsQ0FBQztBQUV6RCxNQUFNLFFBQVEsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFPbkUsTUFBTSxPQUFPLGtCQUFrQjs7b0hBQWxCLGtCQUFrQjtxSEFBbEIsa0JBQWtCLGlCQVBiLHdCQUF3QixFQUFFLHFCQUFxQixhQUdyRCxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxXQUFXLGFBSDFFLHdCQUF3QixFQUFFLHFCQUFxQjtxSEFPcEQsa0JBQWtCLFlBSm5CLGVBQWUsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLFdBQVc7Z0dBSS9FLGtCQUFrQjtrQkFMOUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUM7b0JBQzNGLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtFbGV2YXRpb25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7UmlwcGxlT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JpcHBsZS1vdmVydmlldy9yaXBwbGUtb3ZlcnZpZXctZXhhbXBsZSc7XG5cbmV4cG9ydCB7RWxldmF0aW9uT3ZlcnZpZXdFeGFtcGxlLCBSaXBwbGVPdmVydmlld0V4YW1wbGV9O1xuXG5jb25zdCBFWEFNUExFUyA9IFtFbGV2YXRpb25PdmVydmlld0V4YW1wbGUsIFJpcHBsZU92ZXJ2aWV3RXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0UmlwcGxlTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==