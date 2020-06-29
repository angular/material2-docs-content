import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { TabGroupAlignExample } from './tab-group-align/tab-group-align-example';
import { TabGroupAnimationsExample } from './tab-group-animations/tab-group-animations-example';
import { TabGroupAsyncExample } from './tab-group-async/tab-group-async-example';
import { TabGroupBasicExample } from './tab-group-basic/tab-group-basic-example';
import { TabGroupCustomLabelExample } from './tab-group-custom-label/tab-group-custom-label-example';
import { TabGroupDynamicHeightExample } from './tab-group-dynamic-height/tab-group-dynamic-height-example';
import { TabGroupDynamicExample } from './tab-group-dynamic/tab-group-dynamic-example';
import { TabGroupHeaderBelowExample } from './tab-group-header-below/tab-group-header-below-example';
import { TabGroupLazyLoadedExample } from './tab-group-lazy-loaded/tab-group-lazy-loaded-example';
import { TabGroupStretchedExample } from './tab-group-stretched/tab-group-stretched-example';
import { TabGroupThemeExample } from './tab-group-theme/tab-group-theme-example';
import { TabNavBarBasicExample } from './tab-nav-bar-basic/tab-nav-bar-basic-example';
import * as i0 from "@angular/core";
export { TabGroupAlignExample, TabGroupAnimationsExample, TabGroupAsyncExample, TabGroupBasicExample, TabGroupCustomLabelExample, TabGroupDynamicExample, TabGroupDynamicHeightExample, TabGroupHeaderBelowExample, TabGroupLazyLoadedExample, TabGroupStretchedExample, TabGroupThemeExample, TabNavBarBasicExample, };
const EXAMPLES = [
    TabGroupAlignExample,
    TabGroupAnimationsExample,
    TabGroupAsyncExample,
    TabGroupBasicExample,
    TabGroupCustomLabelExample,
    TabGroupDynamicExample,
    TabGroupDynamicHeightExample,
    TabGroupHeaderBelowExample,
    TabGroupLazyLoadedExample,
    TabGroupStretchedExample,
    TabGroupThemeExample,
    TabNavBarBasicExample,
];
export class TabGroupExamplesModule {
}
TabGroupExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: TabGroupExamplesModule });
TabGroupExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TabGroupExamplesModule_Factory(t) { return new (t || TabGroupExamplesModule)(); }, imports: [[
            CommonModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCheckboxModule,
            MatIconModule,
            MatInputModule,
            MatTabsModule,
            ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabGroupExamplesModule, { declarations: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample], imports: [CommonModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatIconModule,
        MatInputModule,
        MatTabsModule,
        ReactiveFormsModule], exports: [TabGroupAlignExample,
        TabGroupAnimationsExample,
        TabGroupAsyncExample,
        TabGroupBasicExample,
        TabGroupCustomLabelExample,
        TabGroupDynamicExample,
        TabGroupDynamicHeightExample,
        TabGroupHeaderBelowExample,
        TabGroupLazyLoadedExample,
        TabGroupStretchedExample,
        TabGroupThemeExample,
        TabNavBarBasicExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabGroupExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatButtonToggleModule,
                    MatCheckboxModule,
                    MatIconModule,
                    MatInputModule,
                    MatTabsModule,
                    ReactiveFormsModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxxREFBcUQsQ0FBQztBQUM5RixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsMEJBQTBCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQ0wsNEJBQTRCLEVBQzdCLE1BQU0sNkRBQTZELENBQUM7QUFDckUsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sK0NBQStDLENBQUM7QUFDckYsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0seURBQXlELENBQUM7QUFDbkcsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sdURBQXVELENBQUM7QUFDaEcsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sbURBQW1ELENBQUM7QUFDM0YsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0NBQStDLENBQUM7O0FBRXBGLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIseUJBQXlCLEVBQ3pCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsMEJBQTBCLEVBQzFCLHNCQUFzQixFQUN0Qiw0QkFBNEIsRUFDNUIsMEJBQTBCLEVBQzFCLHlCQUF5QixFQUN6Qix3QkFBd0IsRUFDeEIsb0JBQW9CLEVBQ3BCLHFCQUFxQixHQUN0QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQUc7SUFDZixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtDQUN0QixDQUFDO0FBaUJGLE1BQU0sT0FBTyxzQkFBc0I7OzBEQUF0QixzQkFBc0I7MkhBQXRCLHNCQUFzQixrQkFkeEI7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsYUFBYTtZQUNiLGNBQWM7WUFDZCxhQUFhO1lBQ2IsbUJBQW1CO1NBQ3BCO3dGQUtVLHNCQUFzQixtQkE3QmpDLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCLGFBS25CLFlBQVk7UUFDWixlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsY0FBYztRQUNkLGFBQWE7UUFDYixtQkFBbUIsYUF2QnJCLG9CQUFvQjtRQUNwQix5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIseUJBQXlCO1FBQ3pCLHdCQUF3QjtRQUN4QixvQkFBb0I7UUFDcEIscUJBQXFCO2tEQWtCVixzQkFBc0I7Y0FmbEMsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQixpQkFBaUI7b0JBQ2pCLGFBQWE7b0JBQ2IsY0FBYztvQkFDZCxhQUFhO29CQUNiLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixlQUFlLEVBQUUsUUFBUTthQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1JlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5pbXBvcnQge1RhYkdyb3VwQWxpZ25FeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1hbGlnbi90YWItZ3JvdXAtYWxpZ24tZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwQW5pbWF0aW9uc0V4YW1wbGV9IGZyb20gJy4vdGFiLWdyb3VwLWFuaW1hdGlvbnMvdGFiLWdyb3VwLWFuaW1hdGlvbnMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwQXN5bmNFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwQmFzaWNFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1iYXNpYy90YWItZ3JvdXAtYmFzaWMtZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwQ3VzdG9tTGFiZWxFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1jdXN0b20tbGFiZWwvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlJztcbmltcG9ydCB7XG4gIFRhYkdyb3VwRHluYW1pY0hlaWdodEV4YW1wbGVcbn0gZnJvbSAnLi90YWItZ3JvdXAtZHluYW1pYy1oZWlnaHQvdGFiLWdyb3VwLWR5bmFtaWMtaGVpZ2h0LWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cER5bmFtaWNFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1keW5hbWljL3RhYi1ncm91cC1keW5hbWljLWV4YW1wbGUnO1xuaW1wb3J0IHtUYWJHcm91cEhlYWRlckJlbG93RXhhbXBsZX0gZnJvbSAnLi90YWItZ3JvdXAtaGVhZGVyLWJlbG93L3RhYi1ncm91cC1oZWFkZXItYmVsb3ctZXhhbXBsZSc7XG5pbXBvcnQge1RhYkdyb3VwTGF6eUxvYWRlZEV4YW1wbGV9IGZyb20gJy4vdGFiLWdyb3VwLWxhenktbG9hZGVkL3RhYi1ncm91cC1sYXp5LWxvYWRlZC1leGFtcGxlJztcbmltcG9ydCB7VGFiR3JvdXBTdHJldGNoZWRFeGFtcGxlfSBmcm9tICcuL3RhYi1ncm91cC1zdHJldGNoZWQvdGFiLWdyb3VwLXN0cmV0Y2hlZC1leGFtcGxlJztcbmltcG9ydCB7VGFiR3JvdXBUaGVtZUV4YW1wbGV9IGZyb20gJy4vdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlJztcbmltcG9ydCB7VGFiTmF2QmFyQmFzaWNFeGFtcGxlfSBmcm9tICcuL3RhYi1uYXYtYmFyLWJhc2ljL3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUnO1xuXG5leHBvcnQge1xuICBUYWJHcm91cEFsaWduRXhhbXBsZSxcbiAgVGFiR3JvdXBBbmltYXRpb25zRXhhbXBsZSxcbiAgVGFiR3JvdXBBc3luY0V4YW1wbGUsXG4gIFRhYkdyb3VwQmFzaWNFeGFtcGxlLFxuICBUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZSxcbiAgVGFiR3JvdXBEeW5hbWljRXhhbXBsZSxcbiAgVGFiR3JvdXBEeW5hbWljSGVpZ2h0RXhhbXBsZSxcbiAgVGFiR3JvdXBIZWFkZXJCZWxvd0V4YW1wbGUsXG4gIFRhYkdyb3VwTGF6eUxvYWRlZEV4YW1wbGUsXG4gIFRhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZSxcbiAgVGFiR3JvdXBUaGVtZUV4YW1wbGUsXG4gIFRhYk5hdkJhckJhc2ljRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBUYWJHcm91cEFsaWduRXhhbXBsZSxcbiAgVGFiR3JvdXBBbmltYXRpb25zRXhhbXBsZSxcbiAgVGFiR3JvdXBBc3luY0V4YW1wbGUsXG4gIFRhYkdyb3VwQmFzaWNFeGFtcGxlLFxuICBUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZSxcbiAgVGFiR3JvdXBEeW5hbWljRXhhbXBsZSxcbiAgVGFiR3JvdXBEeW5hbWljSGVpZ2h0RXhhbXBsZSxcbiAgVGFiR3JvdXBIZWFkZXJCZWxvd0V4YW1wbGUsXG4gIFRhYkdyb3VwTGF6eUxvYWRlZEV4YW1wbGUsXG4gIFRhYkdyb3VwU3RyZXRjaGVkRXhhbXBsZSxcbiAgVGFiR3JvdXBUaGVtZUV4YW1wbGUsXG4gIFRhYk5hdkJhckJhc2ljRXhhbXBsZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEJ1dHRvblRvZ2dsZU1vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdFRhYnNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwRXhhbXBsZXNNb2R1bGUge1xufVxuIl19