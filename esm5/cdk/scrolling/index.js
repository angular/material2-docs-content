import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { CdkVirtualScrollContextExample } from './cdk-virtual-scroll-context/cdk-virtual-scroll-context-example';
import { CdkVirtualScrollCustomStrategyExample } from './cdk-virtual-scroll-custom-strategy/cdk-virtual-scroll-custom-strategy-example';
import { CdkVirtualScrollDataSourceExample } from './cdk-virtual-scroll-data-source/cdk-virtual-scroll-data-source-example';
import { CdkVirtualScrollDlExample } from './cdk-virtual-scroll-dl/cdk-virtual-scroll-dl-example';
import { CdkVirtualScrollFixedBufferExample } from './cdk-virtual-scroll-fixed-buffer/cdk-virtual-scroll-fixed-buffer-example';
import { CdkVirtualScrollHorizontalExample } from './cdk-virtual-scroll-horizontal/cdk-virtual-scroll-horizontal-example';
import { CdkVirtualScrollOverviewExample } from './cdk-virtual-scroll-overview/cdk-virtual-scroll-overview-example';
import { CdkVirtualScrollTemplateCacheExample } from './cdk-virtual-scroll-template-cache/cdk-virtual-scroll-template-cache-example';
import * as i0 from "@angular/core";
export { CdkVirtualScrollContextExample, CdkVirtualScrollCustomStrategyExample, CdkVirtualScrollDataSourceExample, CdkVirtualScrollDlExample, CdkVirtualScrollFixedBufferExample, CdkVirtualScrollHorizontalExample, CdkVirtualScrollOverviewExample, CdkVirtualScrollTemplateCacheExample, };
var EXAMPLES = [
    CdkVirtualScrollContextExample,
    CdkVirtualScrollCustomStrategyExample,
    CdkVirtualScrollDataSourceExample,
    CdkVirtualScrollDlExample,
    CdkVirtualScrollFixedBufferExample,
    CdkVirtualScrollHorizontalExample,
    CdkVirtualScrollOverviewExample,
    CdkVirtualScrollTemplateCacheExample,
];
var CdkScrollingExamplesModule = /** @class */ (function () {
    function CdkScrollingExamplesModule() {
    }
    CdkScrollingExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkScrollingExamplesModule });
    CdkScrollingExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkScrollingExamplesModule_Factory(t) { return new (t || CdkScrollingExamplesModule)(); }, imports: [[ScrollingModule]] });
    return CdkScrollingExamplesModule;
}());
export { CdkScrollingExamplesModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkScrollingExamplesModule, { declarations: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample], imports: [ScrollingModule], exports: [CdkVirtualScrollContextExample,
        CdkVirtualScrollCustomStrategyExample,
        CdkVirtualScrollDataSourceExample,
        CdkVirtualScrollDlExample,
        CdkVirtualScrollFixedBufferExample,
        CdkVirtualScrollHorizontalExample,
        CdkVirtualScrollOverviewExample,
        CdkVirtualScrollTemplateCacheExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkScrollingExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [ScrollingModule],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFDTCw4QkFBOEIsRUFDL0IsTUFBTSxpRUFBaUUsQ0FBQztBQUN6RSxPQUFPLEVBQ0wscUNBQXFDLEVBQ3RDLE1BQU0saUZBQWlGLENBQUM7QUFDekYsT0FBTyxFQUNMLGlDQUFpQyxFQUNsQyxNQUFNLHlFQUF5RSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFDTCxrQ0FBa0MsRUFDbkMsTUFBTSwyRUFBMkUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsaUNBQWlDLEVBQ2xDLE1BQU0sdUVBQXVFLENBQUM7QUFDL0UsT0FBTyxFQUNMLCtCQUErQixFQUNoQyxNQUFNLG1FQUFtRSxDQUFDO0FBQzNFLE9BQU8sRUFDTCxvQ0FBb0MsRUFDckMsTUFBTSwrRUFBK0UsQ0FBQzs7QUFFdkYsT0FBTyxFQUNMLDhCQUE4QixFQUM5QixxQ0FBcUMsRUFDckMsaUNBQWlDLEVBQ2pDLHlCQUF5QixFQUN6QixrQ0FBa0MsRUFDbEMsaUNBQWlDLEVBQ2pDLCtCQUErQixFQUMvQixvQ0FBb0MsR0FDckMsQ0FBQztBQUVGLElBQU0sUUFBUSxHQUFHO0lBQ2YsOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLG9DQUFvQztDQUNyQyxDQUFDO0FBRUY7SUFBQTtLQU9DO2tFQURZLDBCQUEwQjt1SUFBMUIsMEJBQTBCLGtCQUw1QixDQUFDLGVBQWUsQ0FBQztxQ0FoRDVCO0NBc0RDLEFBUEQsSUFPQztTQURZLDBCQUEwQjt3RkFBMUIsMEJBQTBCLG1CQWhCckMsOEJBQThCO1FBQzlCLHFDQUFxQztRQUNyQyxpQ0FBaUM7UUFDakMseUJBQXlCO1FBQ3pCLGtDQUFrQztRQUNsQyxpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLG9DQUFvQyxhQUkxQixlQUFlLGFBWHpCLDhCQUE4QjtRQUM5QixxQ0FBcUM7UUFDckMsaUNBQWlDO1FBQ2pDLHlCQUF5QjtRQUN6QixrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLCtCQUErQjtRQUMvQixvQ0FBb0M7a0RBU3pCLDBCQUEwQjtjQU50QyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMxQixZQUFZLEVBQUUsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLGVBQWUsRUFBRSxRQUFRO2FBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTY3JvbGxpbmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zY3JvbGxpbmcnO1xuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsQ29udGV4dEV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtY29udGV4dC9jZGstdmlydHVhbC1zY3JvbGwtY29udGV4dC1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxDdXN0b21TdHJhdGVneUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtY3VzdG9tLXN0cmF0ZWd5L2Nkay12aXJ0dWFsLXNjcm9sbC1jdXN0b20tc3RyYXRlZ3ktZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsRGF0YVNvdXJjZUV4YW1wbGVcbn0gZnJvbSAnLi9jZGstdmlydHVhbC1zY3JvbGwtZGF0YS1zb3VyY2UvY2RrLXZpcnR1YWwtc2Nyb2xsLWRhdGEtc291cmNlLWV4YW1wbGUnO1xuaW1wb3J0IHtDZGtWaXJ0dWFsU2Nyb2xsRGxFeGFtcGxlfSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC1kbC9jZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsRml4ZWRCdWZmZXJFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLWZpeGVkLWJ1ZmZlci9jZGstdmlydHVhbC1zY3JvbGwtZml4ZWQtYnVmZmVyLWV4YW1wbGUnO1xuaW1wb3J0IHtcbiAgQ2RrVmlydHVhbFNjcm9sbEhvcml6b250YWxFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwvY2RrLXZpcnR1YWwtc2Nyb2xsLWhvcml6b250YWwtZXhhbXBsZSc7XG5pbXBvcnQge1xuICBDZGtWaXJ0dWFsU2Nyb2xsT3ZlcnZpZXdFeGFtcGxlXG59IGZyb20gJy4vY2RrLXZpcnR1YWwtc2Nyb2xsLW92ZXJ2aWV3L2Nkay12aXJ0dWFsLXNjcm9sbC1vdmVydmlldy1leGFtcGxlJztcbmltcG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxUZW1wbGF0ZUNhY2hlRXhhbXBsZVxufSBmcm9tICcuL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS9jZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUtZXhhbXBsZSc7XG5cbmV4cG9ydCB7XG4gIENka1ZpcnR1YWxTY3JvbGxDb250ZXh0RXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEN1c3RvbVN0cmF0ZWd5RXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbERhdGFTb3VyY2VFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsRGxFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsRml4ZWRCdWZmZXJFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsSG9yaXpvbnRhbEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxPdmVydmlld0V4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxUZW1wbGF0ZUNhY2hlRXhhbXBsZSxcbn07XG5cbmNvbnN0IEVYQU1QTEVTID0gW1xuICBDZGtWaXJ0dWFsU2Nyb2xsQ29udGV4dEV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxDdXN0b21TdHJhdGVneUV4YW1wbGUsXG4gIENka1ZpcnR1YWxTY3JvbGxEYXRhU291cmNlRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbERsRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEZpeGVkQnVmZmVyRXhhbXBsZSxcbiAgQ2RrVmlydHVhbFNjcm9sbEhvcml6b250YWxFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsT3ZlcnZpZXdFeGFtcGxlLFxuICBDZGtWaXJ0dWFsU2Nyb2xsVGVtcGxhdGVDYWNoZUV4YW1wbGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbU2Nyb2xsaW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBFWEFNUExFUyxcbiAgZXhwb3J0czogRVhBTVBMRVMsXG4gIGVudHJ5Q29tcG9uZW50czogRVhBTVBMRVMsXG59KVxuZXhwb3J0IGNsYXNzIENka1Njcm9sbGluZ0V4YW1wbGVzTW9kdWxlIHtcbn1cbiJdfQ==