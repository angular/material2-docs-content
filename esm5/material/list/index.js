import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListOverviewExample } from './list-overview/list-overview-example';
import { ListSectionsExample } from './list-sections/list-sections-example';
import { ListSelectionExample } from './list-selection/list-selection-example';
import * as i0 from "@angular/core";
export { ListOverviewExample, ListSectionsExample, ListSelectionExample, };
var EXAMPLES = [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
];
var ListExamplesModule = /** @class */ (function () {
    function ListExamplesModule() {
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
    ListExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ListExamplesModule });
    ListExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
                CommonModule,
                MatIconModule,
                MatListModule,
            ]] });
    return ListExamplesModule;
}());
export { ListExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample], imports: [CommonModule,
        MatIconModule,
        MatListModule], exports: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0seUNBQXlDLENBQUM7O0FBRTdFLE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG9CQUFvQixHQUNyQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQUc7SUFDZixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtDQUNyQixDQUFDO0FBRUY7SUFBQTtLQVdDOztnQkFYQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixhQUFhO3FCQUNkO29CQUNELFlBQVksRUFBRSxRQUFRO29CQUN0QixPQUFPLEVBQUUsUUFBUTtvQkFDakIsZUFBZSxFQUFFLFFBQVE7aUJBQzFCOzswREFDWSxrQkFBa0I7dUhBQWxCLGtCQUFrQixrQkFUcEI7Z0JBQ1AsWUFBWTtnQkFDWixhQUFhO2dCQUNiLGFBQWE7YUFDZDs2QkF6Qkg7Q0ErQkMsQUFYRCxJQVdDO1NBRFksa0JBQWtCO3dGQUFsQixrQkFBa0IsbUJBZjdCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CLGFBS2xCLFlBQVk7UUFDWixhQUFhO1FBQ2IsYUFBYSxhQVRmLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsb0JBQW9CO2tEQWFULGtCQUFrQjtjQVY5QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osYUFBYTtvQkFDYixhQUFhO2lCQUNkO2dCQUNELFlBQVksRUFBRSxRQUFRO2dCQUN0QixPQUFPLEVBQUUsUUFBUTtnQkFDakIsZUFBZSxFQUFFLFFBQVE7YUFDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5pbXBvcnQge0xpc3RPdmVydmlld0V4YW1wbGV9IGZyb20gJy4vbGlzdC1vdmVydmlldy9saXN0LW92ZXJ2aWV3LWV4YW1wbGUnO1xuaW1wb3J0IHtMaXN0U2VjdGlvbnNFeGFtcGxlfSBmcm9tICcuL2xpc3Qtc2VjdGlvbnMvbGlzdC1zZWN0aW9ucy1leGFtcGxlJztcbmltcG9ydCB7TGlzdFNlbGVjdGlvbkV4YW1wbGV9IGZyb20gJy4vbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxufTtcblxuY29uc3QgRVhBTVBMRVMgPSBbXG4gIExpc3RPdmVydmlld0V4YW1wbGUsXG4gIExpc3RTZWN0aW9uc0V4YW1wbGUsXG4gIExpc3RTZWxlY3Rpb25FeGFtcGxlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdExpc3RNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogRVhBTVBMRVMsXG4gIGV4cG9ydHM6IEVYQU1QTEVTLFxuICBlbnRyeUNvbXBvbmVudHM6IEVYQU1QTEVTLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RXhhbXBsZXNNb2R1bGUge1xufVxuIl19