import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ButtonOverviewExample } from './button-overview/button-overview-example';
import { ButtonTypesExample } from './button-types/button-types-example';
import { ButtonHarnessExample } from './button-harness/button-harness-example';
import * as i0 from "@angular/core";
export { ButtonOverviewExample, ButtonTypesExample, ButtonHarnessExample, };
const EXAMPLES = [
    ButtonOverviewExample,
    ButtonTypesExample,
    ButtonHarnessExample,
];
export class ButtonExamplesModule {
}
ButtonExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ButtonExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonExamplesModule, declarations: [ButtonOverviewExample,
        ButtonTypesExample,
        ButtonHarnessExample], imports: [MatButtonModule,
        MatDividerModule,
        MatIconModule], exports: [ButtonOverviewExample,
        ButtonTypesExample,
        ButtonHarnessExample] });
ButtonExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonExamplesModule, imports: [[
            MatButtonModule,
            MatDividerModule,
            MatIconModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: ButtonExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        MatButtonModule,
                        MatDividerModule,
                        MatIconModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGtCQUFrQixFQUNsQixvQkFBb0IsR0FDckIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixvQkFBb0I7Q0FDckIsQ0FBQztBQVlGLE1BQU0sT0FBTyxvQkFBb0I7O3lIQUFwQixvQkFBb0I7MEhBQXBCLG9CQUFvQixpQkFmL0IscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixvQkFBb0IsYUFLbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixhQUFhLGFBVGYscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixvQkFBb0I7MEhBYVQsb0JBQW9CLFlBVHRCO1lBQ1AsZUFBZTtZQUNmLGdCQUFnQjtZQUNoQixhQUFhO1NBQ2Q7bUdBS1Usb0JBQW9CO2tCQVZoQyxRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdERpdmlkZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpdmlkZXInO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7QnV0dG9uT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0J1dHRvblR5cGVzRXhhbXBsZX0gZnJvbSAnLi9idXR0b24tdHlwZXMvYnV0dG9uLXR5cGVzLWV4YW1wbGUnO1xuaW1wb3J0IHtCdXR0b25IYXJuZXNzRXhhbXBsZX0gZnJvbSAnLi9idXR0b24taGFybmVzcy9idXR0b24taGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgQnV0dG9uT3ZlcnZpZXdFeGFtcGxlLFxuICBCdXR0b25UeXBlc0V4YW1wbGUsXG4gIEJ1dHRvbkhhcm5lc3NFeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIEJ1dHRvbk92ZXJ2aWV3RXhhbXBsZSxcbiAgQnV0dG9uVHlwZXNFeGFtcGxlLFxuICBCdXR0b25IYXJuZXNzRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0RGl2aWRlck1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRXhhbXBsZXNNb2R1bGUge1xufVxuIl19