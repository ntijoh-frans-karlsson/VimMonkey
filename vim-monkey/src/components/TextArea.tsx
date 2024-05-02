import "./Style.css";
import "./TextAreaChar";
import store, { RootState } from "../app/store";
import TextAreaChar from "./TextAreaChar";
import { TextBodyContext, CursorPosContext } from "../context";
import { useContext } from "react";
import { useSelector } from "react-redux";
import {} from "../features/counter/editorSlice";
type TextAreaProps = {
    text: string[];
    cursorPos: number;
};

function TextArea() {
    const cursorPos = useSelector((state: RootState) => state.editor.cursorPos);
    const text = useSelector((state: RootState) => state.editor.textBody);
    return (
        <div id="text-area">
            {text.map((char, index) =>
                char === "\n" ? (
                    <span className="break"></span>
                ) : (
                    <TextAreaChar
                        char={char}
                        key={index}
                        cursor={cursorPos === index}
                    />
                ),
            )}
        </div>
    );
}

export default TextArea;
