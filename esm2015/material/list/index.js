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
let ListExamplesModule = /** @class */ (() => {
    class ListExamplesModule {
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
    return ListExamplesModule;
})();
export { ListExamplesModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx1REFBdUQsQ0FBQzs7QUFFakcsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsb0JBQW9CLEVBQ3BCLDBCQUEwQixHQUMzQixDQUFDOztNQUVJLFFBQVEsR0FBRztJQUNmLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUMzQjtBQUVEO0lBQUEsTUFVYSxrQkFBa0I7OztnQkFWOUIsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTtxQkFDZDtvQkFDRCxZQUFZLEVBQUUsUUFBUTtvQkFDdEIsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2lCQUMxQjs7NkVBQ1ksa0JBQWtCOzBJQUFsQixrQkFBa0Isa0JBVHBCO2dCQUNQLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixhQUFhO2FBQ2Q7NkJBNUJIO0tBa0NDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBaEI3QixtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLG9CQUFvQjtRQUNwQiwwQkFBMEIsYUFLeEIsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhLGFBVmYsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixvQkFBb0I7UUFDcEIsMEJBQTBCO2tEQWFmLGtCQUFrQjtjQVY5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge0xpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VjdGlvbnNFeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VjdGlvbnMvbGlzdC1zZWN0aW9ucy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZSc7XG5pbXBvcnQge0xpc3RTaW5nbGVTZWxlY3Rpb25FeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuICBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBMaXN0T3ZlcnZpZXdFeGFtcGxlLFxuICBMaXN0U2VjdGlvbnNFeGFtcGxlLFxuICBMaXN0U2VsZWN0aW9uRXhhbXBsZSxcbiAgTGlzdFNpbmdsZVNlbGVjdGlvbkV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0TGlzdE1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIExpc3RFeGFtcGxlc01vZHVsZSB7XG59XG4iXX0=