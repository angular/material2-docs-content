import { MatSidenav } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
/** @title Sidenav with custom escape and backdrop click behavior */
export declare class SidenavDisableCloseExample {
    sidenav: MatSidenav;
    reason: string;
    close(reason: string): void;
    shouldRun: boolean;
    static ngFactoryDef: i0.ɵɵFactoryDef<SidenavDisableCloseExample>;
    static ngComponentDef: i0.ɵɵComponentDefWithMeta<SidenavDisableCloseExample, "sidenav-disable-close-example", never, {}, {}, never>;
}
