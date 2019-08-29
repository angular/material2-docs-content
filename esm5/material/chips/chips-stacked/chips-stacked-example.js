import { Component } from '@angular/core';
/**
 * @title Stacked chips
 */
var ChipsStackedExample = /** @class */ (function () {
    function ChipsStackedExample() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
    ChipsStackedExample.decorators = [
        { type: Component, args: [{
                    selector: 'chips-stacked-example',
                    template: "<mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                    styles: ["mat-chip {\n  max-width: 200px;\n}\n"]
                }] }
    ];
    return ChipsStackedExample;
}());
export { ChipsStackedExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFReEM7O0dBRUc7QUFDSDtJQUFBO1FBTUUsb0JBQWUsR0FBZ0I7WUFDN0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7U0FDOUIsQ0FBQztJQUNKLENBQUM7O2dCQVpBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxxT0FBeUM7O2lCQUUxQzs7SUFRRCwwQkFBQztDQUFBLEFBWkQsSUFZQztTQVBZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwQ29sb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0YWNrZWQgY2hpcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1zdGFja2VkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzU3RhY2tlZEV4YW1wbGUge1xuICBhdmFpbGFibGVDb2xvcnM6IENoaXBDb2xvcltdID0gW1xuICAgIHtuYW1lOiAnbm9uZScsIGNvbG9yOiB1bmRlZmluZWR9LFxuICAgIHtuYW1lOiAnUHJpbWFyeScsIGNvbG9yOiAncHJpbWFyeSd9LFxuICAgIHtuYW1lOiAnQWNjZW50JywgY29sb3I6ICdhY2NlbnQnfSxcbiAgICB7bmFtZTogJ1dhcm4nLCBjb2xvcjogJ3dhcm4nfVxuICBdO1xufVxuIl19