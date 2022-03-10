import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
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
ButtonExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample], imports: [MatButtonModule, MatDividerModule, MatIconModule], exports: [ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample] });
ButtonExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: ButtonExamplesModule, imports: [[MatButtonModule, MatDividerModule, MatIconModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.6", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [MatButtonModule, MatDividerModule, MatIconModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQUMscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLEVBQUMsQ0FBQztBQUV6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFPbkYsTUFBTSxPQUFPLG9CQUFvQjs7d0hBQXBCLG9CQUFvQjt5SEFBcEIsb0JBQW9CLGlCQVBmLHFCQUFxQixFQUFFLGtCQUFrQixFQUFFLG9CQUFvQixhQUdyRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxhQUgxQyxxQkFBcUIsRUFBRSxrQkFBa0IsRUFBRSxvQkFBb0I7eUhBT3BFLG9CQUFvQixZQUp0QixDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUM7a0dBSWhELG9CQUFvQjtrQkFMaEMsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO29CQUMzRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7aUJBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtCdXR0b25PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7QnV0dG9uVHlwZXNFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi10eXBlcy9idXR0b24tdHlwZXMtZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvbkhhcm5lc3NFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi1oYXJuZXNzL2J1dHRvbi1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge0J1dHRvbk92ZXJ2aWV3RXhhbXBsZSwgQnV0dG9uVHlwZXNFeGFtcGxlLCBCdXR0b25IYXJuZXNzRXhhbXBsZX07XG5cbmNvbnN0IEVYQU1QTEVTID0gW0J1dHRvbk92ZXJ2aWV3RXhhbXBsZSwgQnV0dG9uVHlwZXNFeGFtcGxlLCBCdXR0b25IYXJuZXNzRXhhbXBsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdERpdmlkZXJNb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRXhhbXBsZXNNb2R1bGUge31cbiJdfQ==