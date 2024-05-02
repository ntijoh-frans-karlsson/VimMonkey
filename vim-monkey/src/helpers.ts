import {
    insertChar,
    eraseChar,
    insertNL,
    setMode,
    moveCursor,
} from "./features/counter/editorSlice";
import store from "./app/store";

function isKeyAllowed(key: string) {
    const allowedSpecials = ["Return", "Enter", "Backspace", "Escape"];
    return allowedSpecials.includes(key) || key.length === 1;
}

function handleKeyInsert(key: string) {
    // const editor = useSelector((state: RootState) => state.editor.value);
    if (!isKeyAllowed(key)) {
        return;
    }
    switch (key) {
        case "Backspace":
            store.dispatch(eraseChar());
            break;
        case "Escape":
            store.dispatch(moveCursor(-1));
            store.dispatch(setMode("NORMAL"));
            break;
        case "Enter":
            store.dispatch(insertNL());
            break;
        default:
            store.dispatch(insertChar(key));
            break;
    }
}

function rowCol(
    text: string[],
    cursorPos: number,
): { row: number; col: number } {
    let rows = 1;
    let cols = 0;
    for (let i = 0; i < cursorPos; i++) {
        if (text[i] === "\n") {
            rows++;
        }
    }
    cols = cursorPos - text.lastIndexOf("\n", cursorPos);
    return { row: rows, col: cols };
}

export { handleKeyInsert, rowCol };
