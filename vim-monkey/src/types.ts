type cursorPos = {
    row: number;
    col: number;
};

interface EditorContextType {
    textBody: string[];
    cursorPos: number;
    mode: mode;
    setTextBody: (text: string[]) => void;
    setCursorPos: (pos: number) => void;
    setMode: (mode: mode) => void;
}
type mode = "INSERT" | "NORMAL" | "VISUAL";
export type { cursorPos, mode, EditorContextType };
