/**
 * @fileoverview added by tsickle
 * Generated from: src/components-examples/material/list/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import { ListSingleSelectionExample } from './list-single-selection/list-single-selection-example';
import * as i0 from "@angular/core";
export { ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, };
/** @type {?} */
const EXAMPLES = [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
];
export class ListExamplesModule {
}
ListExamplesModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            },] },
];
/** @nocollapse */ ListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ListExamplesModule });
/** @nocollapse */ ListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
            CommonModule,
            MatIconModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample], imports: [CommonModule,
        MatIconModule,
        MatListModule], exports: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQzs7QUFFakcsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUMzQjtBQVlELE1BQU0sT0FBTyxrQkFBa0I7OztZQVY5QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUI7O3lFQUNZLGtCQUFrQjtzSUFBbEIsa0JBQWtCLGtCQVRwQjtZQUNQLFlBQVk7WUFDWixhQUFhO1lBQ2IsYUFBYTtTQUNkO3dGQUtVLGtCQUFrQixtQkFoQjdCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO1FBQ3BCLDBCQUEwQixhQUt4QixZQUFZO1FBQ1osYUFBYTtRQUNiLGFBQWEsYUFWZixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiwwQkFBMEI7a0RBYWYsa0JBQWtCO2NBVjlCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixhQUFhO29CQUNiLGFBQWE7aUJBQ2Q7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TGlzdE92ZXJ2aWV3RXhhbXBsZX0gZnJvbSAnLi9saXN0LW92ZXJ2aWV3L2xpc3Qtb3ZlcnZpZXctZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTZWN0aW9uc0V4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWN0aW9ucy9saXN0LXNlY3Rpb25zLWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VsZWN0aW9uRXhhbXBsZX0gZnJvbSAnLi9saXN0LXNlbGVjdGlvbi9saXN0LXNlbGVjdGlvbi1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlJztcblxuZXhwb3J0IHtcbiAgTGlzdE92ZXJ2aWV3RXhhbXBsZSxcbiAgTGlzdFNlY3Rpb25zRXhhbXBsZSxcbiAgTGlzdFNlbGVjdGlvbkV4YW1wbGUsXG4gIExpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuICBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRMaXN0TW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IEVYQU1QTEVTLFxuICBleHBvcnRzOiBFWEFNUExFUyxcbiAgZW50cnlDb21wb25lbnRzOiBFWEFNUExFUyxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEV4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==