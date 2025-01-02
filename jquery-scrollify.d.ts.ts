declare module "jquery-scrollify" {
    interface ScrollifyOptions {
        section?: string;
        sectionName?: string;
        interstitialSection?: string;
        easing?: string;
        scrollSpeed?: number;
        offset?: number;
        scrollbars?: boolean;
        standardScrollElements?: string;
        setHeights?: boolean;
        overflowScroll?: boolean;
        updateHash?: boolean;
        touchScroll?: boolean;
        before?(index: number, sections: JQuery<HTMLElement>): void;
        after?(index: number, sections: JQuery<HTMLElement>): void;
        afterResize?(): void;
        afterRender?(): void;
    }

    // Main scrollify function
    function scrollify(options: ScrollifyOptions): void;

    // Additional methods
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace scrollify {
        function move(target: string): void;

        export function disable() {
            throw new Error("Function not implemented.");
        }
    }

    export = scrollify;
}
