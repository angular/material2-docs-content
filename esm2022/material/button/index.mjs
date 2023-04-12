import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { ButtonHarnessExample } from './button-harness/button-harness-example';
import * as i0 from "@angular/core";
export { ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample };
const EXAMPLES = [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample];
class ButtonExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-next.7", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample], imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule], exports: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ButtonExamplesModule, imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule] }); }
}
export { ButtonExamplesModule };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFFbkYsTUFLYSxvQkFBb0I7cUhBQXBCLG9CQUFvQjtzSEFBcEIsb0JBQW9CLGlCQVBmLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixhQUdyRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixhQUg1RCxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0I7c0hBT3BFLG9CQUFvQixZQUpyQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjs7U0FJakUsb0JBQW9CO2tHQUFwQixvQkFBb0I7a0JBTGhDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztvQkFDN0UsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2lCQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9idXR0b24tb3ZlcnZpZXcvYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25UeXBlc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLXR5cGVzL2J1dHRvbi10eXBlcy1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLWhhcm5lc3MvYnV0dG9uLWhhcm5lc3MtZXhhbXBsZSc7XG5cbmV4cG9ydCB7QnV0dG9uT3ZlcnZpZXdFeGFtcGxlLCBCdXR0b25UeXBlc0V4YW1wbGUsIEJ1dHRvbkhhcm5lc3NFeGFtcGxlfTtcblxuY29uc3QgRVhBTVBMRVMgPSBbQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLCBCdXR0b25UeXBlc0V4YW1wbGUsIEJ1dHRvbkhhcm5lc3NFeGFtcGxlXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0VG9vbHRpcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25FeGFtcGxlc01vZHVsZSB7fVxuIl19