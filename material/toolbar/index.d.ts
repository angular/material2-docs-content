import * as i0 from '@angular/core';
import * as i5 from '@angular/material/button';
import * as i6 from '@angular/material/icon';
import * as i7 from '@angular/material/toolbar';

declare namespace i1 {
    export {
        ToolbarBasicExample
    }
}

declare namespace i2 {
    export {
        ToolbarHarnessExample
    }
}

declare namespace i3 {
    export {
        ToolbarMultirowExample
    }
}

declare namespace i4 {
    export {
        ToolbarOverviewExample
    }
}

/**
 * @title Basic toolbar
 */
export declare class ToolbarBasicExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarBasicExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarBasicExample, "toolbar-basic-example", never, {}, {}, never, never, false, never>;
}

export declare class ToolbarExamplesModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarExamplesModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ToolbarExamplesModule, [typeof i1.ToolbarBasicExample, typeof i2.ToolbarHarnessExample, typeof i3.ToolbarMultirowExample, typeof i4.ToolbarOverviewExample], [typeof i5.MatButtonModule, typeof i6.MatIconModule, typeof i7.MatToolbarModule], [typeof i1.ToolbarBasicExample, typeof i2.ToolbarHarnessExample, typeof i3.ToolbarMultirowExample, typeof i4.ToolbarOverviewExample]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ToolbarExamplesModule>;
}

/**
 * @title Testing with MatToolbarHarness
 */
export declare class ToolbarHarnessExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarHarnessExample, "toolbar-harness-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Multi-row toolbar
 */
export declare class ToolbarMultirowExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarMultirowExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarMultirowExample, "toolbar-multirow-example", never, {}, {}, never, never, false, never>;
}

/**
 * @title Toolbar overview
 */
export declare class ToolbarOverviewExample {
    static ɵfac: i0.ɵɵFactoryDeclaration<ToolbarOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToolbarOverviewExample, "toolbar-overview-example", never, {}, {}, never, never, false, never>;
}

export { }
