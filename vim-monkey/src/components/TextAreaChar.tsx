type TextAreaCharProps = {
    char: string;
    mode?: "NORMAL" | "INSERT" | "VISUAL";
    cursor?: boolean;
    key: number;
};

const styles = {
    default: {
        justifyContent: "center",
        verticalAlign: "center",
        width: "0.6rem",
        height: "1.24rem",
    },
    cursor: {
        justifyContent: "center",
        verticalAlign: "center",
        width: "0.6rem",
        height: "1.24rem",
        backgroundColor: "red",
    },
};

function TextAreaChar({ char, cursor }: TextAreaCharProps) {
    return cursor ? (
        <span style={styles.cursor}>{char}</span>
    ) : (
        <span style={styles.default}>{char}</span>
    );
}
export default TextAreaChar;
