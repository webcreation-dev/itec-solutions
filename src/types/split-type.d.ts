declare module "split-type" {
    export default class SplitType {
        constructor(
            target: string | HTMLElement,
            options?: {
                types?: string;
            }
        );

        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];

        revert(): void;
    }
}