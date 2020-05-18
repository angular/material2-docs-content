/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/progress-bar/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressBarBufferExample } from './progress-bar-buffer/progress-bar-buffer-example';
import { ProgressBarConfigurableExample } from './progress-bar-configurable/progress-bar-configurable-example';
import { ProgressBarDeterminateExample } from './progress-bar-determinate/progress-bar-determinate-example';
import { ProgressBarIndeterminateExample } from './progress-bar-indeterminate/progress-bar-indeterminate-example';
import { ProgressBarQueryExample } from './progress-bar-query/progress-bar-query-example';
import * as i0 from "@angular/core";
export { ProgressBarBufferExample, ProgressBarConfigurableExample, ProgressBarDeterminateExample, ProgressBarIndeterminateExample, ProgressBarQueryExample, };
/** @type {?} */
const EXAMPLES = [
    ProgressBarBufferExample,
    ProgressBarConfigurableExample,
    ProgressBarDeterminateExample,
    ProgressBarIndeterminateExample,
    ProgressBarQueryExample,
];
let ProgressBarExamplesModule = /** @class */ (() => {
    class ProgressBarExamplesModule {
    }
    ProgressBarExamplesModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        MatCardModule,
                        MatProgressBarModule,
                        MatRadioModule,
                        MatSliderModule,
                        FormsModule,
                    ],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                    entryComponents: EXAMPLES,
                },] },
    ];
    /** @nocollapse */ ProgressBarExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressBarExamplesModule });
    /** @nocollapse */ ProgressBarExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressBarExamplesModule_Factory(t) { return new (t || ProgressBarExamplesModule)(); }, imports: [[
                CommonModule,
                MatCardModule,
                MatProgressBarModule,
                MatRadioModule,
                MatSliderModule,
                FormsModule,
            ]] });
    return ProgressBarExamplesModule;
})();
export { ProgressBarExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressBarExamplesModule, { declarations: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample], imports: [CommonModule,
        MatCardModule,
        MatProgressBarModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule], exports: [ProgressBarBufferExample,
        ProgressBarConfigurableExample,
        ProgressBarDeterminateExample,
        ProgressBarIndeterminateExample,
        ProgressBarQueryExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ProgressBarExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatCardModule,
                    MatProgressBarModule,
                    MatRadioModule,
                    MatSliderModule,
                    FormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUNMLDhCQUE4QixFQUMvQixNQUFNLCtEQUErRCxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCw2QkFBNkIsRUFDOUIsTUFBTSw2REFBNkQsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsK0JBQStCLEVBQ2hDLE1BQU0saUVBQWlFLENBQUM7QUFDekUsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0saURBQWlELENBQUM7O0FBRXhGLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsOEJBQThCLEVBQzlCLDZCQUE2QixFQUM3QiwrQkFBK0IsRUFDL0IsdUJBQXVCLEdBQ3hCLENBQUM7O01BRUksUUFBUSxHQUFHO0lBQ2Ysd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLHVCQUF1QjtDQUN4QjtBQUVEO0lBQUEsTUFhYSx5QkFBeUI7OztnQkFickMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2Isb0JBQW9CO3dCQUNwQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsV0FBVztxQkFDWjtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7b0ZBQ1kseUJBQXlCO3dKQUF6Qix5QkFBeUIsa0JBWjNCO2dCQUNQLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixvQkFBb0I7Z0JBQ3BCLGNBQWM7Z0JBQ2QsZUFBZTtnQkFDZixXQUFXO2FBQ1o7b0NBM0NIO0tBaURDO1NBRFkseUJBQXlCO3dGQUF6Qix5QkFBeUIsbUJBcEJwQyx3QkFBd0I7UUFDeEIsOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QiwrQkFBK0I7UUFDL0IsdUJBQXVCLGFBS3JCLFlBQVk7UUFDWixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsV0FBVyxhQWRiLHdCQUF3QjtRQUN4Qiw4QkFBOEI7UUFDOUIsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQix1QkFBdUI7a0RBZ0JaLHlCQUF5QjtjQWJyQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixvQkFBb0I7b0JBQ3BCLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixXQUFXO2lCQUNaO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlfSBmcm9tICcuL3Byb2dyZXNzLWJhci1idWZmZXIvcHJvZ3Jlc3MtYmFyLWJ1ZmZlci1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZVxufSBmcm9tICcuL3Byb2dyZXNzLWJhci1jb25maWd1cmFibGUvcHJvZ3Jlc3MtYmFyLWNvbmZpZ3VyYWJsZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlXG59IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLWRldGVybWluYXRlL3Byb2dyZXNzLWJhci1kZXRlcm1pbmF0ZS1leGFtcGxlJztcbmltcG9ydCB7XG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGVcbn0gZnJvbSAnLi9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS9wcm9ncmVzcy1iYXItaW5kZXRlcm1pbmF0ZS1leGFtcGxlJztcbmltcG9ydCB7UHJvZ3Jlc3NCYXJRdWVyeUV4YW1wbGV9IGZyb20gJy4vcHJvZ3Jlc3MtYmFyLXF1ZXJ5L3Byb2dyZXNzLWJhci1xdWVyeS1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgUHJvZ3Jlc3NCYXJCdWZmZXJFeGFtcGxlLFxuICBQcm9ncmVzc0JhckNvbmZpZ3VyYWJsZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyRGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhckluZGV0ZXJtaW5hdGVFeGFtcGxlLFxuICBQcm9ncmVzc0JhclF1ZXJ5RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBQcm9ncmVzc0JhckJ1ZmZlckV4YW1wbGUsXG4gIFByb2dyZXNzQmFyQ29uZmlndXJhYmxlRXhhbXBsZSxcbiAgUHJvZ3Jlc3NCYXJEZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFySW5kZXRlcm1pbmF0ZUV4YW1wbGUsXG4gIFByb2dyZXNzQmFyUXVlcnlFeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzQmFyTW9kdWxlLFxuICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgIE1hdFNsaWRlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyRXhhbXBsZXNNb2R1bGUge1xufVxuIl19