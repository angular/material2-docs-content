import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BadgeOverviewExample } from './badge-overview/badge-overview-example';
import { BadgeHarnessExample } from './badge-harness/badge-harness-example';
import * as i0 from "@angular/core";
export { BadgeOverviewExample, BadgeHarnessExample };
const EXAMPLES = [BadgeOverviewExample, BadgeHarnessExample];
export class BadgeExamplesModule {
}
BadgeExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: BadgeExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BadgeExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: BadgeExamplesModule, declarations: [BadgeOverviewExample, BadgeHarnessExample], imports: [MatBadgeModule, MatButtonModule, MatIconModule], exports: [BadgeOverviewExample, BadgeHarnessExample] });
BadgeExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: BadgeExamplesModule, imports: [MatBadgeModule, MatButtonModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.15", ngImport: i0, type: BadgeExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatBadgeModule, MatButtonModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUMsQ0FBQztBQUVuRCxNQUFNLFFBQVEsR0FBRyxDQUFDLG9CQUFvQixFQUFFLG1CQUFtQixDQUFDLENBQUM7QUFPN0QsTUFBTSxPQUFPLG1CQUFtQjs7d0hBQW5CLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGlCQVBkLG9CQUFvQixFQUFFLG1CQUFtQixhQUcvQyxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsYUFIeEMsb0JBQW9CLEVBQUUsbUJBQW1CO3lIQU85QyxtQkFBbUIsWUFKcEIsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhO21HQUk3QyxtQkFBbUI7a0JBTC9CLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUM7b0JBQ3pELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QmFkZ2VNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2JhZGdlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7QmFkZ2VPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYmFkZ2Utb3ZlcnZpZXcvYmFkZ2Utb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0JhZGdlSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0JhZGdlT3ZlcnZpZXdFeGFtcGxlLCBCYWRnZUhhcm5lc3NFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQmFkZ2VPdmVydmlld0V4YW1wbGUsIEJhZGdlSGFybmVzc0V4YW1wbGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWF0QmFkZ2VNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCYWRnZUV4YW1wbGVzTW9kdWxlIHt9XG4iXX0=