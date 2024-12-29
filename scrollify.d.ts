declare module 'jquery-scrollify' {
    interface ScrollifyOptions {
        section: string;
        sectionName: string;
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
        before?: (index: number, sections: unknown[]) => void;
        after?: (index: number, sections: unknown[]) => void;
        afterResize?: () => void;
        afterRender?: () => void;
    }

    function scrollify(options: ScrollifyOptions): void;
    export = scrollify;
}
