import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgFor, AsyncPipe } from '@angular/common';
import { MatSelectionModule } from '@angular/material-experimental/selection';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/selection";
import * as i2 from "@angular/material/checkbox";
/**
 * @title Mat Selection on a simple list.
 */
class MatSelectionListExample {
    constructor() {
        this.data = ELEMENT_NAMES;
        this.selected1 = [];
        this.selected2 = [];
        this.selected3 = [];
        this.selected4 = [];
    }
    getCurrentSelected(event) {
        return event.after.map(select => select.value);
    }
    trackByFn(index, value) {
        return index;
    }
    changeElementName() {
        this.data = ELEMENT_SYMBOLS;
    }
    reset() {
        this.data = ELEMENT_NAMES;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: MatSelectionListExample, isStandalone: true, selector: "mat-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "ngmodule", type: MatSelectionModule }, { kind: "directive", type: i1.MatSelectAll, selector: "[matSelectAll]", exportAs: ["matSelectAll"] }, { kind: "directive", type: i1.MatSelection, selector: "[matSelection]", inputs: ["matSelectionMultiple"], outputs: ["matSelectionChange"], exportAs: ["matSelection"] }, { kind: "directive", type: i1.MatSelectionToggle, selector: "[matSelectionToggle]", inputs: ["matSelectionToggleIndex", "matSelectionToggleValue"], exportAs: ["matSelectionToggle"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
export { MatSelectionListExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MatSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'mat-selection-list-example', standalone: true, imports: [MatSelectionModule, NgFor, MatCheckboxModule, AsyncPipe], template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
        }] });
const ELEMENT_NAMES = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium',
    'Boron',
    'Carbon',
    'Nitrogen',
    'Oxygen',
    'Fluorine',
    'Neon',
    'Sodium',
    'Magnesium',
    'Aluminum',
    'Silicon',
    'Phosphorus',
    'Sulfur',
    'Chlorine',
    'Argon',
    'Potassium',
    'Calcium',
];
const ELEMENT_SYMBOLS = [
    'H',
    'He',
    'Li',
    'Be',
    'B',
    'C',
    'N',
    'O',
    'F',
    'Ne',
    'Na',
    'Mg',
    'Al',
    'Si',
    'P',
    'S',
    'Cl',
    'Ar',
    'K',
    'Ca',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDBDQUEwQyxDQUFDOzs7O0FBRTVFOztHQUVHO0FBQ0gsTUFNYSx1QkFBdUI7SUFOcEM7UUFPRSxTQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ3JCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7S0FpQjFCO0lBZkMsa0JBQWtCLENBQUMsS0FBOEI7UUFDL0MsT0FBTyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ3BDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7SUFDNUIsQ0FBQzs4R0FyQlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZnBDLHNzRUE2Q0EsMkNEaENZLGtCQUFrQixzZUFBRSxLQUFLLGtIQUFFLGlCQUFpQiw0S0FBRSxTQUFTOztTQUV0RCx1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFObkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FFMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQzs7QUEwQnBFLE1BQU0sYUFBYSxHQUFHO0lBQ3BCLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixRQUFRO0lBQ1IsVUFBVTtJQUNWLE1BQU07SUFDTixRQUFRO0lBQ1IsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxTQUFTO0NBQ1YsQ0FBQztBQUVGLE1BQU0sZUFBZSxHQUFHO0lBQ3RCLEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILEdBQUc7SUFDSCxJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge05nRm9yLCBBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFNlbGVjdGlvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3NlbGVjdGlvbic7XG5cbi8qKlxuICogQHRpdGxlIE1hdCBTZWxlY3Rpb24gb24gYSBzaW1wbGUgbGlzdC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0U2VsZWN0aW9uTW9kdWxlLCBOZ0ZvciwgTWF0Q2hlY2tib3hNb2R1bGUsIEFzeW5jUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdGlvbkxpc3RFeGFtcGxlIHtcbiAgZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIHNlbGVjdGVkMTogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkNDogc3RyaW5nW10gPSBbXTtcblxuICBnZXRDdXJyZW50U2VsZWN0ZWQoZXZlbnQ6IFNlbGVjdGlvbkNoYW5nZTxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGV2ZW50LmFmdGVyLm1hcChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgY2hhbmdlRWxlbWVudE5hbWUoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9TWU1CT0xTO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgfVxufVxuXG5jb25zdCBFTEVNRU5UX05BTUVTID0gW1xuICAnSHlkcm9nZW4nLFxuICAnSGVsaXVtJyxcbiAgJ0xpdGhpdW0nLFxuICAnQmVyeWxsaXVtJyxcbiAgJ0Jvcm9uJyxcbiAgJ0NhcmJvbicsXG4gICdOaXRyb2dlbicsXG4gICdPeHlnZW4nLFxuICAnRmx1b3JpbmUnLFxuICAnTmVvbicsXG4gICdTb2RpdW0nLFxuICAnTWFnbmVzaXVtJyxcbiAgJ0FsdW1pbnVtJyxcbiAgJ1NpbGljb24nLFxuICAnUGhvc3Bob3J1cycsXG4gICdTdWxmdXInLFxuICAnQ2hsb3JpbmUnLFxuICAnQXJnb24nLFxuICAnUG90YXNzaXVtJyxcbiAgJ0NhbGNpdW0nLFxuXTtcblxuY29uc3QgRUxFTUVOVF9TWU1CT0xTID0gW1xuICAnSCcsXG4gICdIZScsXG4gICdMaScsXG4gICdCZScsXG4gICdCJyxcbiAgJ0MnLFxuICAnTicsXG4gICdPJyxcbiAgJ0YnLFxuICAnTmUnLFxuICAnTmEnLFxuICAnTWcnLFxuICAnQWwnLFxuICAnU2knLFxuICAnUCcsXG4gICdTJyxcbiAgJ0NsJyxcbiAgJ0FyJyxcbiAgJ0snLFxuICAnQ2EnLFxuXTtcbiIsIjxoMz48Y29kZT5uYXRpdmUgaW5wdXQ8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMX19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQxID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG1hdFNlbGVjdEFsbCAjYWxsVG9nZ2xlcj1cIm1hdFNlbGVjdEFsbFwiXG4gICAgICBbY2hlY2tlZF09XCJhbGxUb2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJhbGxUb2dnbGVyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiXG4gICAgICAoY2xpY2spPVwiYWxsVG9nZ2xlci50b2dnbGUoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBtYXRTZWxlY3Rpb25Ub2dnbGUgI3RvZ2dsZXI9XCJtYXRTZWxlY3Rpb25Ub2dnbGVcIiBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiXG4gICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiIChjbGljayk9XCJ0b2dnbGVyLnRvZ2dsZSgpXCI+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5tYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMn19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQyID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTE9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUxLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDN9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cImZhbHNlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDMgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT53aXRoIHRyYWNrQnk8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkNH19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTI9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XG4gICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIiBbbWF0U2VsZWN0aW9uVG9nZ2xlSW5kZXhdPVwiaVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbGVtZW50TmFtZSgpXCI+Q2hhbmdlIGVsZW1lbnQgbmFtZXMgYW5kIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHN0YXlzPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cbiJdfQ==