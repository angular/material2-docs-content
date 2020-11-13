import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import * as i0 from "@angular/core";
/**
 * @title Dialog launched from a menu
 */
export declare class DialogFromMenuExample {
    dialog: MatDialog;
    menuTrigger: MatMenuTrigger;
    constructor(dialog: MatDialog);
    openDialog(): void;
    static ɵfac: i0.ɵɵFactoryDef<DialogFromMenuExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogFromMenuExample, "dialog-from-menu-example", never, {}, {}, never, never>;
}
export declare class DialogFromMenuExampleDialog {
    static ɵfac: i0.ɵɵFactoryDef<DialogFromMenuExampleDialog, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DialogFromMenuExampleDialog, "dialog-from-menu-dialog", never, {}, {}, never, never>;
}
