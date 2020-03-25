import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { RadioNgModelExample } from './radio-ng-model/radio-ng-model-example';
import { RadioOverviewExample } from './radio-overview/radio-overview-example';
import * as i0 from "@angular/core";
export { RadioNgModelExample, RadioOverviewExample, };
var EXAMPLES = [
    RadioNgModelExample,
    RadioOverviewExample,
];
var RadioExamplesModule = /** @class */ (function () {
    function RadioExamplesModule() {
    }
    RadioExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: RadioExamplesModule });
    RadioExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function RadioExamplesModule_Factory(t) { return new (t || RadioExamplesModule)(); }, imports: [[
                CommonModule,
                MatRadioModule,
                FormsModule,
            ]] });
    return RadioExamplesModule;
}());
export { RadioExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RadioExamplesModule, { declarations: [RadioNgModelExample,
        RadioOverviewExample], imports: [CommonModule,
        MatRadioModule,
        FormsModule], exports: [RadioNgModelExample,
        RadioOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(RadioExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatRadioModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG9CQUFvQixHQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRjtJQUFBO0tBV0M7MkRBRFksbUJBQW1CO3lIQUFuQixtQkFBbUIsa0JBVHJCO2dCQUNQLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxXQUFXO2FBQ1o7OEJBdEJIO0NBNEJDLEFBWEQsSUFXQztTQURZLG1CQUFtQjt3RkFBbkIsbUJBQW1CLG1CQWQ5QixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBS2xCLFlBQVk7UUFDWixjQUFjO1FBQ2QsV0FBVyxhQVJiLG1CQUFtQjtRQUNuQixvQkFBb0I7a0RBYVQsbUJBQW1CO2NBVi9CLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixjQUFjO29CQUNkLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge1JhZGlvTmdNb2RlbEV4YW1wbGV9IGZyb20gJy4vcmFkaW8tbmctbW9kZWwvcmFkaW8tbmctbW9kZWwtZXhhbXBsZSc7XG5pbXBvcnQge1JhZGlvT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW92ZXJ2aWV3L3JhZGlvLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBSYWRpb05nTW9kZWxFeGFtcGxlLFxuICBSYWRpb092ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBSYWRpb05nTW9kZWxFeGFtcGxlLFxuICBSYWRpb092ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0UmFkaW9Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBSYWRpb0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==