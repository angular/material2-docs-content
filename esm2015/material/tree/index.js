/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/tree/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTreeModule } from '@angular/material/tree';
import { TreeChecklistExample } from './tree-checklist/tree-checklist-example';
import { TreeDynamicExample } from './tree-dynamic/tree-dynamic-example';
import { TreeFlatOverviewExample } from './tree-flat-overview/tree-flat-overview-example';
import { TreeLoadmoreExample } from './tree-loadmore/tree-loadmore-example';
import { TreeNestedOverviewExample } from './tree-nested-overview/tree-nested-overview-example';
import * as i0 from "@angular/core";
export { TreeChecklistExample, TreeDynamicExample, TreeFlatOverviewExample, TreeLoadmoreExample, TreeNestedOverviewExample, };
/** @type {?} */
const EXAMPLES = [
    TreeChecklistExample,
    TreeDynamicExample,
    TreeFlatOverviewExample,
    TreeLoadmoreExample,
    TreeNestedOverviewExample,
];
export class TreeExamplesModule {
}
TreeExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ TreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TreeExamplesModule });
/** @nocollapse */ TreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TreeExamplesModule_Factory(t) { return new (t || TreeExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatProgressBarModule,
            MatTreeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TreeExamplesModule, { declarations: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample], imports: [CommonModule,
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatTreeModule], exports: [TreeChecklistExample,
        TreeDynamicExample,
        TreeFlatOverviewExample,
        TreeLoadmoreExample,
        TreeNestedOverviewExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TreeExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatProgressBarModule,
                    MatTreeModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBQyx1QkFBdUIsRUFBQyxNQUFNLGlEQUFpRCxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFEQUFxRCxDQUFDOztBQUU5RixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUNsQix1QkFBdUIsRUFDdkIsbUJBQW1CLEVBQ25CLHlCQUF5QixHQUMxQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7Q0FDMUI7QUFnQkQsTUFBTSxPQUFPLGtCQUFrQjs7O1lBZDlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCOztzREFDWSxrQkFBa0I7bUhBQWxCLGtCQUFrQixrQkFicEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixhQUFhO1lBQ2IsY0FBYztZQUNkLG9CQUFvQjtZQUNwQixhQUFhO1NBQ2Q7d0ZBS1Usa0JBQWtCLG1CQXJCN0Isb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHlCQUF5QixhQUt2QixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLG9CQUFvQjtRQUNwQixhQUFhLGFBZmYsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHlCQUF5QjtrREFpQmQsa0JBQWtCO2NBZDlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixlQUFlO29CQUNmLGlCQUFpQjtvQkFDakIsYUFBYTtvQkFDYixjQUFjO29CQUNkLG9CQUFvQjtvQkFDcEIsYUFBYTtpQkFDZDtnQkFDRCxZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdFRyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuaW1wb3J0IHtUcmVlQ2hlY2tsaXN0RXhhbXBsZX0gZnJvbSAnLi90cmVlLWNoZWNrbGlzdC90cmVlLWNoZWNrbGlzdC1leGFtcGxlJztcbmltcG9ydCB7VHJlZUR5bmFtaWNFeGFtcGxlfSBmcm9tICcuL3RyZWUtZHluYW1pYy90cmVlLWR5bmFtaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge1RyZWVMb2FkbW9yZUV4YW1wbGV9IGZyb20gJy4vdHJlZS1sb2FkbW9yZS90cmVlLWxvYWRtb3JlLWV4YW1wbGUnO1xuaW1wb3J0IHtUcmVlTmVzdGVkT3ZlcnZpZXdFeGFtcGxlfSBmcm9tICcuL3RyZWUtbmVzdGVkLW92ZXJ2aWV3L3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUcmVlQ2hlY2tsaXN0RXhhbXBsZSxcbiAgVHJlZUR5bmFtaWNFeGFtcGxlLFxuICBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSxcbiAgVHJlZUxvYWRtb3JlRXhhbXBsZSxcbiAgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUcmVlQ2hlY2tsaXN0RXhhbXBsZSxcbiAgVHJlZUR5bmFtaWNFeGFtcGxlLFxuICBUcmVlRmxhdE92ZXJ2aWV3RXhhbXBsZSxcbiAgVHJlZUxvYWRtb3JlRXhhbXBsZSxcbiAgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgTWF0VHJlZU1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=