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
    RadioExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatRadioModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9yYWRpby9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDOztBQUU3RSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLG9CQUFvQixHQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0NBQ3JCLENBQUM7QUFFRjtJQUFBO0tBV0M7O2dCQVhBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3dCQUNkLFdBQVc7cUJBQ1o7b0JBQ0QsWUFBWSxFQUFFLFFBQVE7b0JBQ3RCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixlQUFlLEVBQUUsUUFBUTtpQkFDMUI7OzJEQUNZLG1CQUFtQjt5SEFBbkIsbUJBQW1CLGtCQVRyQjtnQkFDUCxZQUFZO2dCQUNaLGNBQWM7Z0JBQ2QsV0FBVzthQUNaOzhCQXRCSDtDQTRCQyxBQVhELElBV0M7U0FEWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixtQkFkOUIsbUJBQW1CO1FBQ25CLG9CQUFvQixhQUtsQixZQUFZO1FBQ1osY0FBYztRQUNkLFdBQVcsYUFSYixtQkFBbUI7UUFDbkIsb0JBQW9CO2tEQWFULG1CQUFtQjtjQVYvQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztvQkFDZCxXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRSYWRpb01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xuaW1wb3J0IHtSYWRpb05nTW9kZWxFeGFtcGxlfSBmcm9tICcuL3JhZGlvLW5nLW1vZGVsL3JhZGlvLW5nLW1vZGVsLWV4YW1wbGUnO1xuaW1wb3J0IHtSYWRpb092ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9yYWRpby1vdmVydmlldy9yYWRpby1vdmVydmlldy1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG59O1xuXG5jb25zdCBFWEFNUExFUyA9IFtcbiAgUmFkaW9OZ01vZGVsRXhhbXBsZSxcbiAgUmFkaW9PdmVydmlld0V4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgUmFkaW9FeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=