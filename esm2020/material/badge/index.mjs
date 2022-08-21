import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { BadgeHarnessExample } from './badge-harness/badge-harness-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample, BadgeHarnessExample };
const EXAMPLES = [BadgeOverviewExample, BadgeHarnessExample];
export class BadgeExamplesModule {
}
BadgeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: BadgeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BadgeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0-rc.0", ngImport: i0, type: BadgeExamplesModule, declarations: [BadgeOverviewExample, BadgeHarnessExample], imports: [MatBadgeModule, MatLegacyButtonModule, MatIconModule], exports: [BadgeOverviewExample, BadgeHarnessExample] });
BadgeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: BadgeExamplesModule, imports: [MatBadgeModule, MatLegacyButtonModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: BadgeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBadgeModule, MatLegacyButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7O0FBRTFFLE9BQU8sRUFBQyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBQyxDQUFDO0FBRW5ELE1BQU0sUUFBUSxHQUFHLENBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztBQU83RCxNQUFNLE9BQU8sbUJBQW1COztxSEFBbkIsbUJBQW1CO3NIQUFuQixtQkFBbUIsaUJBUGQsb0JBQW9CLEVBQUUsbUJBQW1CLGFBRy9DLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxhQUFhLGFBSDlDLG9CQUFvQixFQUFFLG1CQUFtQjtzSEFPOUMsbUJBQW1CLFlBSnBCLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxhQUFhO2dHQUluRCxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsQ0FBQztvQkFDL0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYmFkZ2Utb3ZlcnZpZXcvYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0JhZGdlSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0JhZGdlT3ZlcnZpZXdFeGFtcGxlLCBCYWRnZUhhcm5lc3NFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQmFkZ2VPdmVydmlld0V4YW1wbGUsIEJhZGdlSGFybmVzc0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0QmFkZ2VNb2R1bGUsIE1hdExlZ2FjeUJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=