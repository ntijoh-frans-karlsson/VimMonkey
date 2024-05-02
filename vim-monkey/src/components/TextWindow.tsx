import { createContext, useContext, useEffect } from "react";
import store, { RootState } from "../app/store";
import "./Style.css";
import "./TextArea";
import TextArea from "./TextArea";
import { EditorContextType, mode } from "../types";
import { handleKeyInsert, rowCol } from "../helpers";
import { useSelector } from "react-redux";
export const EditorContext = createContext<any>({});

export const useEditor = (): EditorContextType => {
    const context = useContext(EditorContext);
    if (!context) {
        throw new Error("NO CONTEXT!");
    }
    return context;
};

function TextWindow() {
    function useHandleInput(e: KeyboardEvent) {
        switch (mode) {
            case "INSERT":
                handleKeyInsert(e.key);
                break;
            case "NORMAL":
                break;
            case "VISUAL":
                break;
        }
    }

    useEffect(() => {
        document.body.addEventListener("keydown", useHandleInput);
        return () => {
            document.body.removeEventListener("keydown", useHandleInput);
        };
    });

    const text = useSelector((state: RootState) => state.editor.textBody);
    const cursorPos = useSelector((state: RootState) => state.editor.cursorPos);
    const mode = useSelector((state: RootState) => state.editor.mode);
    const { row, col } = rowCol(text, cursorPos);
    return (
        <div id="editor-body">
            <TextArea />
            <div id="tool-bar">
                <div id="mode">--{mode}--</div>
                <div id="position">
                    {row}:{col}
                </div>
            </div>
        </div>
    );
}

export default TextWindow;
