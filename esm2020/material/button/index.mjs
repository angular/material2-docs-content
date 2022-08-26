import { NgModule } from '@angular/core';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { ButtonHarnessExample } from './button-harness/button-harness-example';
import * as i0 from "@angular/core";
export { ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample };
const EXAMPLES = [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample];
export class ButtonExamplesModule {
}
ButtonExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample], imports: [MatLegacyButtonModule, MatDividerModule, MatIconModule], exports: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample] });
ButtonExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ButtonExamplesModule, imports: [MatLegacyButtonModule, MatDividerModule, MatIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatLegacyButtonModule, MatDividerModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0IsRUFBQyxDQUFDO0FBRXpFLE1BQU0sUUFBUSxHQUFHLENBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztBQU9uRixNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsaUJBUGYscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLGFBR3JFLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsYUFIaEQscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CO2tIQU9wRSxvQkFBb0IsWUFKckIscUJBQXFCLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYTsyRkFJckQsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztvQkFDakUsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMZWdhY3lCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1idXR0b24nO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tb3ZlcnZpZXcvYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25UeXBlc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLWhhcm5lc3MvYnV0dG9uLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7QnV0dG9uT3ZlcnZpZXdFeGFtcGxlLCBCdXR0b25UeXBlc0V4YW1wbGUsIEJ1dHRvbkhhcm5lc3NFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLCBCdXR0b25UeXBlc0V4YW1wbGUsIEJ1dHRvbkhhcm5lc3NFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdExlZ2FjeUJ1dHRvbk1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25FeGFtcGxlc01vZHVsZSB7fVxuIl19