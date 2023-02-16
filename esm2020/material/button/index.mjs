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
export class ButtonExamplesModule {
}
ButtonExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample], imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule], exports: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample] });
ButtonExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ButtonExamplesModule, imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatDividerModule, MatIconModule, MatTooltipModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPbkYsTUFBTSxPQUFPLG9CQUFvQjs7c0hBQXBCLG9CQUFvQjt1SEFBcEIsb0JBQW9CLGlCQVBmLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixhQUdyRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixhQUg1RCxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0I7dUhBT3BFLG9CQUFvQixZQUpyQixlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGdCQUFnQjtnR0FJakUsb0JBQW9CO2tCQUxoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7b0JBQzdFLFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtpQkFDbEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXREaXZpZGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaXZpZGVyJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFRvb2x0aXBNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuaW1wb3J0IHtCdXR0b25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uVHlwZXNFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvbkhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZSwgQnV0dG9uVHlwZXNFeGFtcGxlLCBCdXR0b25IYXJuZXNzRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0J1dHRvbk92ZXJ2aWV3RXhhbXBsZSwgQnV0dG9uVHlwZXNFeGFtcGxlLCBCdXR0b25IYXJuZXNzRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==