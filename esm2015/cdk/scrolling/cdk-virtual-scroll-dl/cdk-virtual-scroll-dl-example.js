/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
/**
 * \@title Virtual scrolling `<dl>`
 */
export class CdkVirtualScrollDlExample {
    constructor() {
        this.states = [
            { name: 'Alabama', capital: 'Montgomery' },
            { name: 'Alaska', capital: 'Juneau' },
            { name: 'Arizona', capital: 'Phoenix' },
            { name: 'Arkansas', capital: 'Little Rock' },
            { name: 'California', capital: 'Sacramento' },
            { name: 'Colorado', capital: 'Denver' },
            { name: 'Connecticut', capital: 'Hartford' },
            { name: 'Delaware', capital: 'Dover' },
            { name: 'Florida', capital: 'Tallahassee' },
            { name: 'Georgia', capital: 'Atlanta' },
            { name: 'Hawaii', capital: 'Honolulu' },
            { name: 'Idaho', capital: 'Boise' },
            { name: 'Illinois', capital: 'Springfield' },
            { name: 'Indiana', capital: 'Indianapolis' },
            { name: 'Iowa', capital: 'Des Moines' },
            { name: 'Kansas', capital: 'Topeka' },
            { name: 'Kentucky', capital: 'Frankfort' },
            { name: 'Louisiana', capital: 'Baton Rouge' },
            { name: 'Maine', capital: 'Augusta' },
            { name: 'Maryland', capital: 'Annapolis' },
            { name: 'Massachusetts', capital: 'Boston' },
            { name: 'Michigan', capital: 'Lansing' },
            { name: 'Minnesota', capital: 'St. Paul' },
            { name: 'Mississippi', capital: 'Jackson' },
            { name: 'Missouri', capital: 'Jefferson City' },
            { name: 'Montana', capital: 'Helena' },
            { name: 'Nebraska', capital: 'Lincoln' },
            { name: 'Nevada', capital: 'Carson City' },
            { name: 'New Hampshire', capital: 'Concord' },
            { name: 'New Jersey', capital: 'Trenton' },
            { name: 'New Mexico', capital: 'Santa Fe' },
            { name: 'New York', capital: 'Albany' },
            { name: 'North Carolina', capital: 'Raleigh' },
            { name: 'North Dakota', capital: 'Bismarck' },
            { name: 'Ohio', capital: 'Columbus' },
            { name: 'Oklahoma', capital: 'Oklahoma City' },
            { name: 'Oregon', capital: 'Salem' },
            { name: 'Pennsylvania', capital: 'Harrisburg' },
            { name: 'Rhode Island', capital: 'Providence' },
            { name: 'South Carolina', capital: 'Columbia' },
            { name: 'South Dakota', capital: 'Pierre' },
            { name: 'Tennessee', capital: 'Nashville' },
            { name: 'Texas', capital: 'Austin' },
            { name: 'Utah', capital: 'Salt Lake City' },
            { name: 'Vermont', capital: 'Montpelier' },
            { name: 'Virginia', capital: 'Richmond' },
            { name: 'Washington', capital: 'Olympia' },
            { name: 'West Virginia', capital: 'Charleston' },
            { name: 'Wisconsin', capital: 'Madison' },
            { name: 'Wyoming', capital: 'Cheyenne' },
        ];
    }
}
CdkVirtualScrollDlExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-virtual-scroll-dl-example',
                template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    CdkVirtualScrollDlExample.prototype.states;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGwvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7QUFTakUsTUFBTSxPQUFPLHlCQUF5QjtJQU50QztRQU9FLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO1lBQ3BDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFDO1lBQ2pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsY0FBYyxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQ3JDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFDO1lBQzNDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQzFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3RDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7WUFDN0MsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDcEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDdEMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDM0MsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7WUFDckMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBQztZQUM1QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNsQyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUM3QyxFQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1lBQzdDLEVBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO1lBQ3pDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUM7WUFDekMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDeEMsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7WUFDOUMsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUM7WUFDdkMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUM7U0FDdkMsQ0FBQztJQUNKLENBQUM7OztZQTNEQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFFekMsdVZBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7SUFFQywyQ0FtREUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIFZpcnR1YWwgc2Nyb2xsaW5nIGA8ZGw+YCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsRGxFeGFtcGxlIHtcbiAgc3RhdGVzID0gW1xuICAgIHtuYW1lOiAnQWxhYmFtYScsIGNhcGl0YWw6ICdNb250Z29tZXJ5J30sXG4gICAge25hbWU6ICdBbGFza2EnLCBjYXBpdGFsOiAnSnVuZWF1J30sXG4gICAge25hbWU6ICdBcml6b25hJywgY2FwaXRhbDogJ1Bob2VuaXgnfSxcbiAgICB7bmFtZTogJ0Fya2Fuc2FzJywgY2FwaXRhbDogJ0xpdHRsZSBSb2NrJ30sXG4gICAge25hbWU6ICdDYWxpZm9ybmlhJywgY2FwaXRhbDogJ1NhY3JhbWVudG8nfSxcbiAgICB7bmFtZTogJ0NvbG9yYWRvJywgY2FwaXRhbDogJ0RlbnZlcid9LFxuICAgIHtuYW1lOiAnQ29ubmVjdGljdXQnLCBjYXBpdGFsOiAnSGFydGZvcmQnfSxcbiAgICB7bmFtZTogJ0RlbGF3YXJlJywgY2FwaXRhbDogJ0RvdmVyJ30sXG4gICAge25hbWU6ICdGbG9yaWRhJywgY2FwaXRhbDogJ1RhbGxhaGFzc2VlJ30sXG4gICAge25hbWU6ICdHZW9yZ2lhJywgY2FwaXRhbDogJ0F0bGFudGEnfSxcbiAgICB7bmFtZTogJ0hhd2FpaScsIGNhcGl0YWw6ICdIb25vbHVsdSd9LFxuICAgIHtuYW1lOiAnSWRhaG8nLCBjYXBpdGFsOiAnQm9pc2UnfSxcbiAgICB7bmFtZTogJ0lsbGlub2lzJywgY2FwaXRhbDogJ1NwcmluZ2ZpZWxkJ30sXG4gICAge25hbWU6ICdJbmRpYW5hJywgY2FwaXRhbDogJ0luZGlhbmFwb2xpcyd9LFxuICAgIHtuYW1lOiAnSW93YScsIGNhcGl0YWw6ICdEZXMgTW9pbmVzJ30sXG4gICAge25hbWU6ICdLYW5zYXMnLCBjYXBpdGFsOiAnVG9wZWthJ30sXG4gICAge25hbWU6ICdLZW50dWNreScsIGNhcGl0YWw6ICdGcmFua2ZvcnQnfSxcbiAgICB7bmFtZTogJ0xvdWlzaWFuYScsIGNhcGl0YWw6ICdCYXRvbiBSb3VnZSd9LFxuICAgIHtuYW1lOiAnTWFpbmUnLCBjYXBpdGFsOiAnQXVndXN0YSd9LFxuICAgIHtuYW1lOiAnTWFyeWxhbmQnLCBjYXBpdGFsOiAnQW5uYXBvbGlzJ30sXG4gICAge25hbWU6ICdNYXNzYWNodXNldHRzJywgY2FwaXRhbDogJ0Jvc3Rvbid9LFxuICAgIHtuYW1lOiAnTWljaGlnYW4nLCBjYXBpdGFsOiAnTGFuc2luZyd9LFxuICAgIHtuYW1lOiAnTWlubmVzb3RhJywgY2FwaXRhbDogJ1N0LiBQYXVsJ30sXG4gICAge25hbWU6ICdNaXNzaXNzaXBwaScsIGNhcGl0YWw6ICdKYWNrc29uJ30sXG4gICAge25hbWU6ICdNaXNzb3VyaScsIGNhcGl0YWw6ICdKZWZmZXJzb24gQ2l0eSd9LFxuICAgIHtuYW1lOiAnTW9udGFuYScsIGNhcGl0YWw6ICdIZWxlbmEnfSxcbiAgICB7bmFtZTogJ05lYnJhc2thJywgY2FwaXRhbDogJ0xpbmNvbG4nfSxcbiAgICB7bmFtZTogJ05ldmFkYScsIGNhcGl0YWw6ICdDYXJzb24gQ2l0eSd9LFxuICAgIHtuYW1lOiAnTmV3IEhhbXBzaGlyZScsIGNhcGl0YWw6ICdDb25jb3JkJ30sXG4gICAge25hbWU6ICdOZXcgSmVyc2V5JywgY2FwaXRhbDogJ1RyZW50b24nfSxcbiAgICB7bmFtZTogJ05ldyBNZXhpY28nLCBjYXBpdGFsOiAnU2FudGEgRmUnfSxcbiAgICB7bmFtZTogJ05ldyBZb3JrJywgY2FwaXRhbDogJ0FsYmFueSd9LFxuICAgIHtuYW1lOiAnTm9ydGggQ2Fyb2xpbmEnLCBjYXBpdGFsOiAnUmFsZWlnaCd9LFxuICAgIHtuYW1lOiAnTm9ydGggRGFrb3RhJywgY2FwaXRhbDogJ0Jpc21hcmNrJ30sXG4gICAge25hbWU6ICdPaGlvJywgY2FwaXRhbDogJ0NvbHVtYnVzJ30sXG4gICAge25hbWU6ICdPa2xhaG9tYScsIGNhcGl0YWw6ICdPa2xhaG9tYSBDaXR5J30sXG4gICAge25hbWU6ICdPcmVnb24nLCBjYXBpdGFsOiAnU2FsZW0nfSxcbiAgICB7bmFtZTogJ1Blbm5zeWx2YW5pYScsIGNhcGl0YWw6ICdIYXJyaXNidXJnJ30sXG4gICAge25hbWU6ICdSaG9kZSBJc2xhbmQnLCBjYXBpdGFsOiAnUHJvdmlkZW5jZSd9LFxuICAgIHtuYW1lOiAnU291dGggQ2Fyb2xpbmEnLCBjYXBpdGFsOiAnQ29sdW1iaWEnfSxcbiAgICB7bmFtZTogJ1NvdXRoIERha290YScsIGNhcGl0YWw6ICdQaWVycmUnfSxcbiAgICB7bmFtZTogJ1Rlbm5lc3NlZScsIGNhcGl0YWw6ICdOYXNodmlsbGUnfSxcbiAgICB7bmFtZTogJ1RleGFzJywgY2FwaXRhbDogJ0F1c3Rpbid9LFxuICAgIHtuYW1lOiAnVXRhaCcsIGNhcGl0YWw6ICdTYWx0IExha2UgQ2l0eSd9LFxuICAgIHtuYW1lOiAnVmVybW9udCcsIGNhcGl0YWw6ICdNb250cGVsaWVyJ30sXG4gICAge25hbWU6ICdWaXJnaW5pYScsIGNhcGl0YWw6ICdSaWNobW9uZCd9LFxuICAgIHtuYW1lOiAnV2FzaGluZ3RvbicsIGNhcGl0YWw6ICdPbHltcGlhJ30sXG4gICAge25hbWU6ICdXZXN0IFZpcmdpbmlhJywgY2FwaXRhbDogJ0NoYXJsZXN0b24nfSxcbiAgICB7bmFtZTogJ1dpc2NvbnNpbicsIGNhcGl0YWw6ICdNYWRpc29uJ30sXG4gICAge25hbWU6ICdXeW9taW5nJywgY2FwaXRhbDogJ0NoZXllbm5lJ30sXG4gIF07XG59XG4iXX0=