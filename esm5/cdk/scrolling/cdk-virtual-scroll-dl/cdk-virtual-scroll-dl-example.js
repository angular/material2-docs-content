import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
/** @title Virtual scrolling `<dl>` */
var CdkVirtualScrollDlExample = /** @class */ (function () {
    function CdkVirtualScrollDlExample() {
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
    CdkVirtualScrollDlExample = tslib_1.__decorate([
        Component({
            selector: 'cdk-virtual-scroll-dl-example',
            template: "<cdk-virtual-scroll-viewport class=\"example-viewport\" itemSize=\"60\">\n  <dl class=\"example-dl\">\n    <ng-container *cdkVirtualFor=\"let state of states\">\n      <dt class=\"example-dt\">{{state.name}}</dt>\n      <dd class=\"example-dd\">{{state.capital}}</dd>\n    </ng-container>\n  </dl>\n</cdk-virtual-scroll-viewport>\n",
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-dt {\n  height: 30px;\n  font-weight: bold;\n}\n\n.example-dd {\n  height: 30px;\n}\n"]
        })
    ], CdkVirtualScrollDlExample);
    return CdkVirtualScrollDlExample;
}());
export { CdkVirtualScrollDlExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL3Njcm9sbGluZy9jZGstdmlydHVhbC1zY3JvbGwtZGwvY2RrLXZpcnR1YWwtc2Nyb2xsLWRsLWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFakUsc0NBQXNDO0FBT3RDO0lBTkE7UUFPRSxXQUFNLEdBQUc7WUFDUCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUN4QyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztZQUMzQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUMxQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBQztZQUNwQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztZQUN6QyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBQztZQUNyQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBQztZQUNyQyxFQUFD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QUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3hDLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO1lBQzlDLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDO1lBQ3ZDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFDO1NBQ3ZDLENBQUM7SUFDSixDQUFDO0lBckRZLHlCQUF5QjtRQU5yQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsK0JBQStCO1lBRXpDLHVWQUFpRDtZQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7U0FDaEQsQ0FBQztPQUNXLHlCQUF5QixDQXFEckM7SUFBRCxnQ0FBQztDQUFBLEFBckRELElBcURDO1NBckRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGxpbmcgYDxkbD5gICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtZGwtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENka1ZpcnR1YWxTY3JvbGxEbEV4YW1wbGUge1xuICBzdGF0ZXMgPSBbXG4gICAge25hbWU6ICdBbGFiYW1hJywgY2FwaXRhbDogJ01vbnRnb21lcnknfSxcbiAgICB7bmFtZTogJ0FsYXNrYScsIGNhcGl0YWw6ICdKdW5lYXUnfSxcbiAgICB7bmFtZTogJ0FyaXpvbmEnLCBjYXBpdGFsOiAnUGhvZW5peCd9LFxuICAgIHtuYW1lOiAnQXJrYW5zYXMnLCBjYXBpdGFsOiAnTGl0dGxlIFJvY2snfSxcbiAgICB7bmFtZTogJ0NhbGlmb3JuaWEnLCBjYXBpdGFsOiAnU2FjcmFtZW50byd9LFxuICAgIHtuYW1lOiAnQ29sb3JhZG8nLCBjYXBpdGFsOiAnRGVudmVyJ30sXG4gICAge25hbWU6ICdDb25uZWN0aWN1dCcsIGNhcGl0YWw6ICdIYXJ0Zm9yZCd9LFxuICAgIHtuYW1lOiAnRGVsYXdhcmUnLCBjYXBpdGFsOiAnRG92ZXInfSxcbiAgICB7bmFtZTogJ0Zsb3JpZGEnLCBjYXBpdGFsOiAnVGFsbGFoYXNzZWUnfSxcbiAgICB7bmFtZTogJ0dlb3JnaWEnLCBjYXBpdGFsOiAnQXRsYW50YSd9LFxuICAgIHtuYW1lOiAnSGF3YWlpJywgY2FwaXRhbDogJ0hvbm9sdWx1J30sXG4gICAge25hbWU6ICdJZGFobycsIGNhcGl0YWw6ICdCb2lzZSd9LFxuICAgIHtuYW1lOiAnSWxsaW5vaXMnLCBjYXBpdGFsOiAnU3ByaW5nZmllbGQnfSxcbiAgICB7bmFtZTogJ0luZGlhbmEnLCBjYXBpdGFsOiAnSW5kaWFuYXBvbGlzJ30sXG4gICAge25hbWU6ICdJb3dhJywgY2FwaXRhbDogJ0RlcyBNb2luZXMnfSxcbiAgICB7bmFtZTogJ0thbnNhcycsIGNhcGl0YWw6ICdUb3Bla2EnfSxcbiAgICB7bmFtZTogJ0tlbnR1Y2t5JywgY2FwaXRhbDogJ0ZyYW5rZm9ydCd9LFxuICAgIHtuYW1lOiAnTG91aXNpYW5hJywgY2FwaXRhbDogJ0JhdG9uIFJvdWdlJ30sXG4gICAge25hbWU6ICdNYWluZScsIGNhcGl0YWw6ICdBdWd1c3RhJ30sXG4gICAge25hbWU6ICdNYXJ5bGFuZCcsIGNhcGl0YWw6ICdBbm5hcG9saXMnfSxcbiAgICB7bmFtZTogJ01hc3NhY2h1c2V0dHMnLCBjYXBpdGFsOiAnQm9zdG9uJ30sXG4gICAge25hbWU6ICdNaWNoaWdhbicsIGNhcGl0YWw6ICdMYW5zaW5nJ30sXG4gICAge25hbWU6ICdNaW5uZXNvdGEnLCBjYXBpdGFsOiAnU3QuIFBhdWwnfSxcbiAgICB7bmFtZTogJ01pc3Npc3NpcHBpJywgY2FwaXRhbDogJ0phY2tzb24nfSxcbiAgICB7bmFtZTogJ01pc3NvdXJpJywgY2FwaXRhbDogJ0plZmZlcnNvbiBDaXR5J30sXG4gICAge25hbWU6ICdNb250YW5hJywgY2FwaXRhbDogJ0hlbGVuYSd9LFxuICAgIHtuYW1lOiAnTmVicmFza2EnLCBjYXBpdGFsOiAnTGluY29sbid9LFxuICAgIHtuYW1lOiAnTmV2YWRhJywgY2FwaXRhbDogJ0NhcnNvbiBDaXR5J30sXG4gICAge25hbWU6ICdOZXcgSGFtcHNoaXJlJywgY2FwaXRhbDogJ0NvbmNvcmQnfSxcbiAgICB7bmFtZTogJ05ldyBKZXJzZXknLCBjYXBpdGFsOiAnVHJlbnRvbid9LFxuICAgIHtuYW1lOiAnTmV3IE1leGljbycsIGNhcGl0YWw6ICdTYW50YSBGZSd9LFxuICAgIHtuYW1lOiAnTmV3IFlvcmsnLCBjYXBpdGFsOiAnQWxiYW55J30sXG4gICAge25hbWU6ICdOb3J0aCBDYXJvbGluYScsIGNhcGl0YWw6ICdSYWxlaWdoJ30sXG4gICAge25hbWU6ICdOb3J0aCBEYWtvdGEnLCBjYXBpdGFsOiAnQmlzbWFyY2snfSxcbiAgICB7bmFtZTogJ09oaW8nLCBjYXBpdGFsOiAnQ29sdW1idXMnfSxcbiAgICB7bmFtZTogJ09rbGFob21hJywgY2FwaXRhbDogJ09rbGFob21hIENpdHknfSxcbiAgICB7bmFtZTogJ09yZWdvbicsIGNhcGl0YWw6ICdTYWxlbSd9LFxuICAgIHtuYW1lOiAnUGVubnN5bHZhbmlhJywgY2FwaXRhbDogJ0hhcnJpc2J1cmcnfSxcbiAgICB7bmFtZTogJ1Job2RlIElzbGFuZCcsIGNhcGl0YWw6ICdQcm92aWRlbmNlJ30sXG4gICAge25hbWU6ICdTb3V0aCBDYXJvbGluYScsIGNhcGl0YWw6ICdDb2x1bWJpYSd9LFxuICAgIHtuYW1lOiAnU291dGggRGFrb3RhJywgY2FwaXRhbDogJ1BpZXJyZSd9LFxuICAgIHtuYW1lOiAnVGVubmVzc2VlJywgY2FwaXRhbDogJ05hc2h2aWxsZSd9LFxuICAgIHtuYW1lOiAnVGV4YXMnLCBjYXBpdGFsOiAnQXVzdGluJ30sXG4gICAge25hbWU6ICdVdGFoJywgY2FwaXRhbDogJ1NhbHQgTGFrZSBDaXR5J30sXG4gICAge25hbWU6ICdWZXJtb250JywgY2FwaXRhbDogJ01vbnRwZWxpZXInfSxcbiAgICB7bmFtZTogJ1ZpcmdpbmlhJywgY2FwaXRhbDogJ1JpY2htb25kJ30sXG4gICAge25hbWU6ICdXYXNoaW5ndG9uJywgY2FwaXRhbDogJ09seW1waWEnfSxcbiAgICB7bmFtZTogJ1dlc3QgVmlyZ2luaWEnLCBjYXBpdGFsOiAnQ2hhcmxlc3Rvbid9LFxuICAgIHtuYW1lOiAnV2lzY29uc2luJywgY2FwaXRhbDogJ01hZGlzb24nfSxcbiAgICB7bmFtZTogJ1d5b21pbmcnLCBjYXBpdGFsOiAnQ2hleWVubmUnfSxcbiAgXTtcbn1cbiJdfQ==