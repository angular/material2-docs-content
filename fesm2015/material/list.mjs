import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i4 from '@angular/material/core';
import * as i5 from '@angular/material/divider';

/**
 * @title Basic list
 */
class ListOverviewExample {
}
ListOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListOverviewExample, selector: "list-overview-example", ngImport: i0, template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-overview-example', template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n" }]
        }] });

/**
 * @title List with sections
 */
class ListSectionsExample {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            },
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            },
        ];
    }
}
ListSectionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSectionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { kind: "directive", type: i4.MatLine, selector: "[mat-line], [matLine]" }, { kind: "directive", type: i1.MatListIconCssMatStyler, selector: "[mat-list-icon], [matListIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i5.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon mat-list-icon>folder</mat-icon>\n    <div mat-line>{{folder.name}}</div>\n    <div mat-line> {{folder.updated | date}} </div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon mat-list-icon>note</mat-icon>\n    <div mat-line>{{note.name}}</div>\n    <div mat-line> {{note.updated | date}} </div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });

/**
 * @title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListSelectionExample, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", styles: ["/** No styles for this example. */\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["disableRipple", "color", "compareWith", "disabled", "multiple"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["disableRipple", "checkboxPosition", "color", "value", "disabled", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
        }] });

/**
 * @title List with single selection
 */
class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListSingleSelectionExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListSingleSelectionExample, selector: "list-single-selection-example", ngImport: i0, template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.selected[0]?.value}}\n</p>\n", styles: ["/** No styles for this example. */\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["disableRipple", "color", "compareWith", "disabled", "multiple"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["disableRipple", "checkboxPosition", "color", "value", "disabled", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.selected[0]?.value}}\n</p>\n", styles: ["/** No styles for this example. */\n"] }]
        }] });

/**
 * @title Testing with MatListHarness
 */
class ListHarnessExample {
}
ListHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ListHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ListHarnessExample, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list, mat-action-list", inputs: ["disableRipple", "disabled"], exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["disableRipple", "disabled"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListAvatarCssMatStyler, selector: "[mat-list-avatar], [matListAvatar]" }, { kind: "directive", type: i4.MatLine, selector: "[mat-line], [matLine]" }, { kind: "directive", type: i1.MatListIconCssMatStyler, selector: "[mat-list-icon], [matListIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', template: "<mat-list>\n  <mat-list-item>\n    <div matLine>Item </div>\n    <div matLine>1</div>\n    <div matListIcon>icon</div>\n    <div matListAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
        }] });

const EXAMPLES = [
    ListHarnessExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
];
class ListExamplesModule {
}
ListExamplesModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ListExamplesModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.0", ngImport: i0, type: ListExamplesModule, declarations: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample], imports: [CommonModule, MatIconModule, MatListModule], exports: [ListHarnessExample,
        ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample] });
ListExamplesModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListExamplesModule, imports: [CommonModule, MatIconModule, MatListModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ListExamplesModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, MatIconModule, MatListModule],
                    declarations: EXAMPLES,
                    exports: EXAMPLES,
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ListExamplesModule, ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample };
//# sourceMappingURL=list.mjs.map
