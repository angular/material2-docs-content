import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import { RadioHarnessExample } from './radio-harness/radio-harness-example';
import * as i0 from "@angular/core";
export { RadioHarnessExample, RadioNgModelExample, RadioOverviewExample, };
const EXAMPLES = [
    RadioHarnessExample,
    RadioNgModelExample,
    RadioOverviewExample,
];
export class RadioExamplesModule {
}
RadioExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RadioExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, declarations: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample], imports: [ReactiveFormsModule,
        CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample] });
RadioExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, imports: [[
            ReactiveFormsModule,
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: RadioExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsR0FDckIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDckIsQ0FBQztBQWFGLE1BQU0sT0FBTyxtQkFBbUI7O3dIQUFuQixtQkFBbUI7eUhBQW5CLG1CQUFtQixpQkFoQjlCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBS2xCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osY0FBYztRQUNkLFdBQVcsYUFWYixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjt5SEFjVCxtQkFBbUIsWUFWckI7WUFDUCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1NBQ1o7bUdBS1UsbUJBQW1CO2tCQVgvQixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxXQUFXO3FCQUNaO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7UmFkaW9OZ01vZGVsRXhhbXBsZX0gZnJvbSAnLi9yYWRpby1uZy1tb2RlbC9yYWRpby1uZy1tb2RlbC1leGFtcGxlJztcbmltcG9ydCB7UmFkaW9PdmVydmlld0V4YW1wbGV9IGZyb20gJy4vcmFkaW8tb3ZlcnZpZXcvcmFkaW8tb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvSGFybmVzc0V4YW1wbGV9IGZyb20gJy4vcmFkaW8taGFybmVzcy9yYWRpby1oYXJuZXNzLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBSYWRpb0hhcm5lc3NFeGFtcGxlLFxuICBSYWRpb05nTW9kZWxFeGFtcGxlLFxuICBSYWRpb092ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBSYWRpb0hhcm5lc3NFeGFtcGxlLFxuICBSYWRpb05nTW9kZWxFeGFtcGxlLFxuICBSYWRpb092ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFJhZGlvRXhhbXBsZXNNb2R1bGUge1xufVxuIl19