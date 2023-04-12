import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material-experimental/selection";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/checkbox";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MatSelectionListExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.7", type: MatSelectionListExample, selector: "mat-selection-list-example", ngImport: i0, template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n", dependencies: [{ kind: "directive", type: i1.MatSelectAll, selector: "[matSelectAll]", exportAs: ["matSelectAll"] }, { kind: "directive", type: i1.MatSelection, selector: "[matSelection]", inputs: ["matSelectionMultiple"], outputs: ["matSelectionChange"], exportAs: ["matSelection"] }, { kind: "directive", type: i1.MatSelectionToggle, selector: "[matSelectionToggle]", inputs: ["matSelectionToggleIndex", "matSelectionToggleValue"], exportAs: ["matSelectionToggle"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i3.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }] }); }
}
export { MatSelectionListExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.7", ngImport: i0, type: MatSelectionListExample, decorators: [{
            type: Component,
            args: [{ selector: 'mat-selection-list-example', template: "<h3><code>native input</code></h3>\nSelected: {{selected1}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected1 = getCurrentSelected($event)\">\n  <input type=\"checkbox\" matSelectAll #allToggler=\"matSelectAll\"\n      [checked]=\"allToggler.checked | async\"\n      [indeterminate]=\"allToggler.indeterminate | async\"\n      (click)=\"allToggler.toggle($event)\">\n  <li *ngFor=\"let item of data\">\n    <input type=\"checkbox\" matSelectionToggle #toggler=\"matSelectionToggle\" [matSelectionToggleValue]=\"item\"\n      [checked]=\"toggler.checked | async\" (click)=\"toggler.toggle()\">\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>mat-checkbox</code></h3>\nSelected: {{selected2}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" (matSelectionChange)=\"selected2 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle1=\"matSelectAll\" [indeterminate]=\"toggle1.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>Single select with mat-checkbox</code></h3>\nSelected: {{selected3}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"false\" (matSelectionChange)=\"selected3 = getCurrentSelected($event)\">\n  <li *ngFor=\"let item of data\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<h3><code>with trackBy</code></h3>\nSelected: {{selected4}}\n<ul matSelection [dataSource]=\"data\" [matSelectionMultiple]=\"true\" [trackBy]=\"trackByFn\" (matSelectionChange)=\"selected4 = getCurrentSelected($event)\">\n  <mat-checkbox matSelectAll #toggle2=\"matSelectAll\" [indeterminate]=\"toggle2.indeterminate | async\"></mat-checkbox>\n  <li *ngFor=\"let item of data; index as i; trackBy: trackByFn\">\n    <mat-checkbox matSelectionToggle [matSelectionToggleValue]=\"item\" [matSelectionToggleIndex]=\"i\"></mat-checkbox>\n    {{item}}\n  </li>\n</ul>\n\n<button (click)=\"changeElementName()\">Change element names and the already selected stays</button>\n<button (click)=\"reset()\">reset</button>\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvc2VsZWN0aW9uL21hdC1zZWxlY3Rpb24tbGlzdC9tYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9zZWxlY3Rpb24vbWF0LXNlbGVjdGlvbi1saXN0L21hdC1zZWxlY3Rpb24tbGlzdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFeEM7O0dBRUc7QUFDSCxNQUlhLHVCQUF1QjtJQUpwQztRQUtFLFNBQUksR0FBRyxhQUFhLENBQUM7UUFDckIsY0FBUyxHQUFhLEVBQUUsQ0FBQztRQUN6QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsY0FBUyxHQUFhLEVBQUUsQ0FBQztLQWlCMUI7SUFmQyxrQkFBa0IsQ0FBQyxLQUE4QjtRQUMvQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDcEMsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztJQUM1QixDQUFDO3FIQXJCVSx1QkFBdUI7eUdBQXZCLHVCQUF1QixrRUNWcEMsc3NFQTZDQTs7U0RuQ2EsdUJBQXVCO2tHQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0UsNEJBQTRCOztBQTJCeEMsTUFBTSxhQUFhLEdBQUc7SUFDcEIsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFNBQVM7SUFDVCxZQUFZO0lBQ1osUUFBUTtJQUNSLFVBQVU7SUFDVixPQUFPO0lBQ1AsV0FBVztJQUNYLFNBQVM7Q0FDVixDQUFDO0FBRUYsTUFBTSxlQUFlLEdBQUc7SUFDdEIsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLEdBQUc7SUFDSCxHQUFHO0lBQ0gsR0FBRztJQUNILEdBQUc7SUFDSCxHQUFHO0lBQ0gsSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixHQUFHO0lBQ0gsR0FBRztJQUNILElBQUk7SUFDSixJQUFJO0lBQ0osR0FBRztJQUNILElBQUk7Q0FDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTZWxlY3Rpb25DaGFuZ2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgTWF0IFNlbGVjdGlvbiBvbiBhIHNpbXBsZSBsaXN0LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXQtc2VsZWN0aW9uLWxpc3QtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWF0LXNlbGVjdGlvbi1saXN0LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1hdFNlbGVjdGlvbkxpc3RFeGFtcGxlIHtcbiAgZGF0YSA9IEVMRU1FTlRfTkFNRVM7XG4gIHNlbGVjdGVkMTogc3RyaW5nW10gPSBbXTtcbiAgc2VsZWN0ZWQyOiBzdHJpbmdbXSA9IFtdO1xuICBzZWxlY3RlZDM6IHN0cmluZ1tdID0gW107XG4gIHNlbGVjdGVkNDogc3RyaW5nW10gPSBbXTtcblxuICBnZXRDdXJyZW50U2VsZWN0ZWQoZXZlbnQ6IFNlbGVjdGlvbkNoYW5nZTxzdHJpbmc+KSB7XG4gICAgcmV0dXJuIGV2ZW50LmFmdGVyLm1hcChzZWxlY3QgPT4gc2VsZWN0LnZhbHVlKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleDogbnVtYmVyLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgY2hhbmdlRWxlbWVudE5hbWUoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9TWU1CT0xTO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5kYXRhID0gRUxFTUVOVF9OQU1FUztcbiAgfVxufVxuXG5jb25zdCBFTEVNRU5UX05BTUVTID0gW1xuICAnSHlkcm9nZW4nLFxuICAnSGVsaXVtJyxcbiAgJ0xpdGhpdW0nLFxuICAnQmVyeWxsaXVtJyxcbiAgJ0Jvcm9uJyxcbiAgJ0NhcmJvbicsXG4gICdOaXRyb2dlbicsXG4gICdPeHlnZW4nLFxuICAnRmx1b3JpbmUnLFxuICAnTmVvbicsXG4gICdTb2RpdW0nLFxuICAnTWFnbmVzaXVtJyxcbiAgJ0FsdW1pbnVtJyxcbiAgJ1NpbGljb24nLFxuICAnUGhvc3Bob3J1cycsXG4gICdTdWxmdXInLFxuICAnQ2hsb3JpbmUnLFxuICAnQXJnb24nLFxuICAnUG90YXNzaXVtJyxcbiAgJ0NhbGNpdW0nLFxuXTtcblxuY29uc3QgRUxFTUVOVF9TWU1CT0xTID0gW1xuICAnSCcsXG4gICdIZScsXG4gICdMaScsXG4gICdCZScsXG4gICdCJyxcbiAgJ0MnLFxuICAnTicsXG4gICdPJyxcbiAgJ0YnLFxuICAnTmUnLFxuICAnTmEnLFxuICAnTWcnLFxuICAnQWwnLFxuICAnU2knLFxuICAnUCcsXG4gICdTJyxcbiAgJ0NsJyxcbiAgJ0FyJyxcbiAgJ0snLFxuICAnQ2EnLFxuXTtcbiIsIjxoMz48Y29kZT5uYXRpdmUgaW5wdXQ8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMX19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQxID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG1hdFNlbGVjdEFsbCAjYWxsVG9nZ2xlcj1cIm1hdFNlbGVjdEFsbFwiXG4gICAgICBbY2hlY2tlZF09XCJhbGxUb2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiXG4gICAgICBbaW5kZXRlcm1pbmF0ZV09XCJhbGxUb2dnbGVyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiXG4gICAgICAoY2xpY2spPVwiYWxsVG9nZ2xlci50b2dnbGUoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBtYXRTZWxlY3Rpb25Ub2dnbGUgI3RvZ2dsZXI9XCJtYXRTZWxlY3Rpb25Ub2dnbGVcIiBbbWF0U2VsZWN0aW9uVG9nZ2xlVmFsdWVdPVwiaXRlbVwiXG4gICAgICBbY2hlY2tlZF09XCJ0b2dnbGVyLmNoZWNrZWQgfCBhc3luY1wiIChjbGljayk9XCJ0b2dnbGVyLnRvZ2dsZSgpXCI+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5tYXQtY2hlY2tib3g8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkMn19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQyID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTE9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUxLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT5TaW5nbGUgc2VsZWN0IHdpdGggbWF0LWNoZWNrYm94PC9jb2RlPjwvaDM+XG5TZWxlY3RlZDoge3tzZWxlY3RlZDN9fVxuPHVsIG1hdFNlbGVjdGlvbiBbZGF0YVNvdXJjZV09XCJkYXRhXCIgW21hdFNlbGVjdGlvbk11bHRpcGxlXT1cImZhbHNlXCIgKG1hdFNlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3RlZDMgPSBnZXRDdXJyZW50U2VsZWN0ZWQoJGV2ZW50KVwiPlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YVwiPlxuICAgIDxtYXQtY2hlY2tib3ggbWF0U2VsZWN0aW9uVG9nZ2xlIFttYXRTZWxlY3Rpb25Ub2dnbGVWYWx1ZV09XCJpdGVtXCI+PC9tYXQtY2hlY2tib3g+XG4gICAge3tpdGVtfX1cbiAgPC9saT5cbjwvdWw+XG5cbjxoMz48Y29kZT53aXRoIHRyYWNrQnk8L2NvZGU+PC9oMz5cblNlbGVjdGVkOiB7e3NlbGVjdGVkNH19XG48dWwgbWF0U2VsZWN0aW9uIFtkYXRhU291cmNlXT1cImRhdGFcIiBbbWF0U2VsZWN0aW9uTXVsdGlwbGVdPVwidHJ1ZVwiIFt0cmFja0J5XT1cInRyYWNrQnlGblwiIChtYXRTZWxlY3Rpb25DaGFuZ2UpPVwic2VsZWN0ZWQ0ID0gZ2V0Q3VycmVudFNlbGVjdGVkKCRldmVudClcIj5cbiAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3RBbGwgI3RvZ2dsZTI9XCJtYXRTZWxlY3RBbGxcIiBbaW5kZXRlcm1pbmF0ZV09XCJ0b2dnbGUyLmluZGV0ZXJtaW5hdGUgfCBhc3luY1wiPjwvbWF0LWNoZWNrYm94PlxuICA8bGkgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YTsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCI+XG4gICAgPG1hdC1jaGVja2JveCBtYXRTZWxlY3Rpb25Ub2dnbGUgW21hdFNlbGVjdGlvblRvZ2dsZVZhbHVlXT1cIml0ZW1cIiBbbWF0U2VsZWN0aW9uVG9nZ2xlSW5kZXhdPVwiaVwiPjwvbWF0LWNoZWNrYm94PlxuICAgIHt7aXRlbX19XG4gIDwvbGk+XG48L3VsPlxuXG48YnV0dG9uIChjbGljayk9XCJjaGFuZ2VFbGVtZW50TmFtZSgpXCI+Q2hhbmdlIGVsZW1lbnQgbmFtZXMgYW5kIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHN0YXlzPC9idXR0b24+XG48YnV0dG9uIChjbGljayk9XCJyZXNldCgpXCI+cmVzZXQ8L2J1dHRvbj5cbiJdfQ==