/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * @record
 */
export function ChipColor() { }
if (false) {
    /** @type {?} */
    ChipColor.prototype.name;
    /** @type {?} */
    ChipColor.prototype.color;
}
/**
 * \@title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' }
        ];
    }
}
ChipsStackedExample.decorators = [
    { type: Component, args: [{
                selector: 'chips-stacked-example',
                template: "<mat-chip-list class=\"mat-chip-list-stacked\">\n  <mat-chip *ngFor=\"let chip of availableColors\" selected [color]=\"chip.color\">\n    {{chip.name}}\n  </mat-chip>\n</mat-chip-list>\n",
                styles: ["mat-chip {\n  max-width: 200px;\n}\n"]
            }] }
];
if (false) {
    /** @type {?} */
    ChipsStackedExample.prototype.availableColors;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2NoaXBzLXN0YWNrZWQvY2hpcHMtc3RhY2tlZC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3hDLCtCQUdDOzs7SUFGQyx5QkFBYTs7SUFDYiwwQkFBb0I7Ozs7O0FBV3RCLE1BQU0sT0FBTyxtQkFBbUI7SUFMaEM7UUFNRSxvQkFBZSxHQUFnQjtZQUM3QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztZQUNoQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBQztZQUNuQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBQztZQUNqQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQztTQUM5QixDQUFDO0lBQ0osQ0FBQzs7O1lBWkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHNNQUF5Qzs7YUFFMUM7Ozs7SUFFQyw4Q0FLRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDaGlwQ29sb3Ige1xuICBuYW1lOiBzdHJpbmc7XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG59XG5cbi8qKlxuICogQHRpdGxlIFN0YWNrZWQgY2hpcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1zdGFja2VkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGlwcy1zdGFja2VkLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzU3RhY2tlZEV4YW1wbGUge1xuICBhdmFpbGFibGVDb2xvcnM6IENoaXBDb2xvcltdID0gW1xuICAgIHtuYW1lOiAnbm9uZScsIGNvbG9yOiB1bmRlZmluZWR9LFxuICAgIHtuYW1lOiAnUHJpbWFyeScsIGNvbG9yOiAncHJpbWFyeSd9LFxuICAgIHtuYW1lOiAnQWNjZW50JywgY29sb3I6ICdhY2NlbnQnfSxcbiAgICB7bmFtZTogJ1dhcm4nLCBjb2xvcjogJ3dhcm4nfVxuICBdO1xufVxuIl19