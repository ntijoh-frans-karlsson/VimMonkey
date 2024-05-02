import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mode } from "../../types";
export const editorSlice = createSlice({
    name: "editor",
    initialState: {
        textBody: [" "],
        cursorPos: 0,
        mode: "INSERT",
    },
    reducers: {
        insertNL: (state) => {
            const cursorPos = state.cursorPos;
            state.textBody.splice(cursorPos, 0, "\n");
            state.cursorPos += 1;
        },
        insertChar: (state, action: PayloadAction<string>) => {
            const cursorPos = state.cursorPos;
            state.textBody.splice(cursorPos, 0, action.payload);
            state.cursorPos += 1;
        },
        eraseChar: (state) => {
            const cursorPos = state.cursorPos;
            state.cursorPos -= state.cursorPos > 0 ? 1 : 0;
            state.textBody.splice(
                cursorPos - 1,
                state.textBody.length > 1 ? 1 : 0,
            );
        },
        moveCursor: (state, action: PayloadAction<number>) => {
            state.cursorPos += action.payload;
        },
        setMode: (state, action: PayloadAction<mode>) => {
            state.mode = action.payload;
        },
    },
});
export const { insertChar, eraseChar, insertNL, setMode, moveCursor } =
    editorSlice.actions;
export default editorSlice.reducer;
