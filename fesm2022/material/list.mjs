import * as i1$1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i2 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i1 from '@angular/material/list';
import { MatListModule } from '@angular/material/list';
import * as i4 from '@angular/material/divider';

/**
 * @title Basic list
 */
class ListOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListOverviewExample, selector: "list-overview-example", ngImport: i0, template: "<mat-list role=\"list\">\n  <mat-list-item role=\"listitem\">Item 1</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 2</mat-list-item>\n  <mat-list-item role=\"listitem\">Item 3</mat-list-item>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListOverviewExample, decorators: [{
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSectionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListSectionsExample, selector: "list-sections-example", ngImport: i0, template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"], dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "component", type: i4.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSectionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-sections-example', template: "<mat-list>\n  <div mat-subheader>Folders</div>\n  <mat-list-item *ngFor=\"let folder of folders\">\n    <mat-icon matListItemIcon>folder</mat-icon>\n    <div matListItemTitle>{{folder.name}}</div>\n    <div matListItemLine>{{folder.updated | date}}</div>\n  </mat-list-item>\n  <mat-divider></mat-divider>\n  <div mat-subheader>Notes</div>\n  <mat-list-item *ngFor=\"let note of notes\">\n    <mat-icon matListItemIcon>note</mat-icon>\n    <div matListItemTitle>{{note.name}}</div>\n    <div matListItemLine>{{note.updated | date}}</div>\n  </mat-list-item>\n</mat-list>\n", styles: [".mat-mdc-list-item-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n"] }]
        }] });

/**
 * @title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListSelectionExample, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', template: "<mat-selection-list #shoes>\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n" }]
        }] });

/**
 * @title List with single selection
 */
class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListSingleSelectionExample, selector: "list-single-selection-example", ngImport: i0, template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\n</p>\n", dependencies: [{ kind: "directive", type: i1$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', template: "<mat-selection-list #shoes [multiple]=\"false\">\n  <mat-list-option *ngFor=\"let shoe of typesOfShoes\" [value]=\"shoe\">\n    {{shoe}}\n  </mat-list-option>\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\n</p>\n" }]
        }] });

/**
 * @title Testing with MatListHarness
 */
class ListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListHarnessExample, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n", dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemAvatar, selector: "[matListItemAvatar]" }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
        }] });

/**
 * @title List variants
 */
class ListVariantsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListVariantsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-rc.2", type: ListVariantsExample, selector: "list-variants-example", ngImport: i0, template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"], dependencies: [{ kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListVariantsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-variants-example', template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span\n      >Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"] }]
        }] });

const EXAMPLES = [
    ListHarnessExample,
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
    ListVariantsExample,
];
class ListExamplesModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListExamplesModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListExamplesModule, declarations: [ListHarnessExample,
            ListOverviewExample,
            ListSectionsExample,
            ListSelectionExample,
            ListSingleSelectionExample,
            ListVariantsExample], imports: [CommonModule, MatIconModule, MatListModule], exports: [ListHarnessExample,
            ListOverviewExample,
            ListSectionsExample,
            ListSelectionExample,
            ListSingleSelectionExample,
            ListVariantsExample] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListExamplesModule, imports: [CommonModule, MatIconModule, MatListModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-rc.2", ngImport: i0, type: ListExamplesModule, decorators: [{
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

export { ListExamplesModule, ListHarnessExample, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample, ListVariantsExample };
//# sourceMappingURL=list.mjs.map
