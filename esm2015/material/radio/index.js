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
RadioExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
RadioExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); }, imports: [[
            ReactiveFormsModule,
            CommonModule,
            MatRadioModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample], imports: [ReactiveFormsModule,
        CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioHarnessExample,
        RadioNgModelExample,
        RadioOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioExamplesModule, [{
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
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDOztBQUUxRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixvQkFBb0IsR0FDckIsQ0FBQztBQUVGLE1BQU0sUUFBUSxHQUFHO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7Q0FDckIsQ0FBQztBQWFGLE1BQU0sT0FBTyxtQkFBbUI7O3VEQUFuQixtQkFBbUI7cUhBQW5CLG1CQUFtQixrQkFWckI7WUFDUCxtQkFBbUI7WUFDbkIsWUFBWTtZQUNaLGNBQWM7WUFDZCxXQUFXO1NBQ1o7d0ZBS1UsbUJBQW1CLG1CQWhCOUIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0IsYUFLbEIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVyxhQVZiLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO2tEQWNULG1CQUFtQjtjQVgvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge1JhZGlvTmdNb2RlbEV4YW1wbGV9IGZyb20gJy4vcmFkaW8tbmctbW9kZWwvcmFkaW8tbmctbW9kZWwtZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb0hhcm5lc3NFeGFtcGxlfSBmcm9tICcuL3JhZGlvLWhhcm5lc3MvcmFkaW8taGFybmVzcy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUmFkaW9IYXJuZXNzRXhhbXBsZSxcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUmFkaW9IYXJuZXNzRXhhbXBsZSxcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==